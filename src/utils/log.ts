export let printValue = (messageOpt, value) => {
    let message = messageOpt === undefined ? "" : messageOpt;

    console.log(message, value);

    return value;
}