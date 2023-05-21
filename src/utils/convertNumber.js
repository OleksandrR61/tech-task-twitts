const convertNumber = number => {
    number = Number(number);

    if (typeof(number) !== 'number' || number < 0) {
        return '***';
    };
    
    const array = [];

    do {
        let str = number % 1000;
        number = (number - number % 1000) / 1000;

        if (number > 0 && str < 10) {
            str = '00' + str;
        } else if (number > 0 && str < 100) {
            str = '0' + str;
        };

        array.unshift(str);
    } while (number > 0);
    
    return array.join(',');
};

export default convertNumber;