enum Message {
    Success="Success",
    Failure="Failure"
}

const returnMsg = ():Message => {
    return Message.Success
}