var RequiredValidator = {
    init: (input) => {
        this.input = input;
    },
    checkIfExists: () => {
        return !!this.input;
    }
};


var StringValidator = {
    init: (input) => {
        this.input = input;
    },
    checkTypeString: () => {
        return typeof this.input === "string";
    }
};

Object.setPrototypeOf(StringValidator, RequiredValidator);

var DateTypeValidator = {
    init: (input) => {
        this.input = input;
    },
    checkTypeDate: () => {
        return new Date(this.input) instanceof Date;
    }
};

Object.setPrototypeOf(DateTypeValidator, RequiredValidator);

var StringRequiredValidator = Object.create(StringValidator);
StringRequiredValidator.validate = () => {
    return StringRequiredValidator.checkTypeString.call(this) &&
        StringRequiredValidator.checkIfExists.call(this);
};

var PastDateRequiredValidator = Object.create(DateTypeValidator);

PastDateRequiredValidator.validate = () => {
    return PastDateRequiredValidator.checkIfExists.call(this) &&
        PastDateRequiredValidator.checkTypeDate.call(this) &&
        (new Date().getTime() > new Date(this.input).getTime())
};
