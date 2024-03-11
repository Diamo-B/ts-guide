enum myResponse {
    No = 0,
    Yes = 1
}

const test = (val:myResponse):void => {
    console.log(val);
}

test(myResponse.Yes)