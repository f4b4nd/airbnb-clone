#!/bin/sh

app_name=angular-airbnb

WORKDIR=/usr/src/app/

cd $WORKDIR

if [ ! -d "${app_name}" ]; then 
    echo "creating angular application ${app_name}..."
    ng new ${app_name}
fi

