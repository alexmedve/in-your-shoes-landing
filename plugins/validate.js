const validate = {
    name: 'Validate',
    nameformat(value) {
        const re = /^[a-zA-Z\s]*$/;
        return re.test(String(value).toLowerCase());
    },
    email(value) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(value).toLowerCase());
    },
    phone(value) {
        const re = /^[0-9\s,+()./-]*$/;
        return (re.test(String(value).toLowerCase()) && value.length > 6 && value.length < 20);
    },
    message(value) {
        if(value.length < 8 || value.length > 256)
            return false;
        return true;
    },
    text(value) {
        if(value.length < 1 || value.length > 100)
            return false;
        return true;
    },
    number(value) {
        if(typeof value != 'number' && value < 0)
            return false;
        else {
            const re = /^[0-9]*$/;
            return re.test(String(value).toLowerCase());
        }
    },
    location(value) {
        const re = /^[0-9a-zA-Z\s."]+$/;
        return re.test(String(value).toLowerCase());
    }
}

export default (context, inject) => {
    inject('validate', validate);
}