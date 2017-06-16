#!/bin/bash

# This way you can customize which branches should be skipped when
# prepending commit message.
if [ -z "$BRANCHES_TO_SKIP" ]; then
  BRANCHES_TO_SKIP=(master)
fi

BRANCH_FULL_NAME=$(git symbolic-ref --short HEAD)
BRANCH_NAME="${BRANCH_FULL_NAME##*/}"
BRANCH_NAME_PREFIX=""
BRANCH_NAME_UPPERCASE=$(echo $BRANCH_NAME | sed -e 's/\([A-Z]\)/-\1/g' -e 's/^-//' | tr "[a-z]" "[A-Z]")

if [[ $BRANCH_FULL_NAME = *feature/* ]] || [[ $BRANCH_FULL_NAME = *hotfix/* ]]  || [[ $BRANCH_FULL_NAME = *release/* ]]; then
 BRANCH_NAME_PREFIX=$(echo ${BRANCH_FULL_NAME:0:1}"--" | tr "[a-z]" "[A-Z]")
fi

#echo $BRANCH_FULL_NAME
#echo $BRANCH_NAME
#echo $BRANCH_NAME_UPPERCASE
#echo $BRANCH_NAME_PREFIX
#echo $BRANCH_NAME_PREFIX$BRANCH_NAME_UPPERCASE

BRANCH_EXCLUDED=$(printf "%s\n" "${BRANCHES_TO_SKIP[@]}" | grep -c "^$BRANCH_NAME$")
BRANCH_IN_COMMIT=$(grep -c "\[$BRANCH_NAME\]" $1)

if [ -n "$BRANCH_NAME" ] && ! [[ $BRANCH_EXCLUDED -eq 1 ]] && ! [[ $BRANCH_IN_COMMIT -ge 1 ]]; then
  sed -i.bak -e "1s/^/[$BRANCH_NAME_PREFIX$BRANCH_NAME_UPPERCASE] /" $1
fi
