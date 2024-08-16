class Validator {
    constructor (__init) {
        this.email = __init.email;
        this.password = __init.password;
    }

    valitateEmail () {
        const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

        if (!EMAIL_REGEXP.test(this.email)) {
            return 'Неверный формат электронной почты.';
        }

        return null;
    }

    validatePassword () {
        const DIGIT_REGEXP = /[0-9]/;
        const UPPERCASE_REGEXP = /[A-Z]/;

        if (!DIGIT_REGEXP.test(this.password)) {
            return 'Пароль должен содержать хотя бы одну цифру.';
        }

        if (!UPPERCASE_REGEXP.test(this.password)) {
            return 'Пароль должен содержать хотя бы одну заглавную букву.';
        }

        if (this.password.length < 8) {
            return 'Пароль должен содержать не менее 8 символов.';
        }

        return null;
    }
}

export default Validator;