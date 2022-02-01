const languageReducer = (state = 'en', { type }) => {
    switch (type) {
        case 'TO_PT':
            return 'pt';

        case 'TO_EN':
            return 'en';

        default:
            return state;
    }
};

export default languageReducer;