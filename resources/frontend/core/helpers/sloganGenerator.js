const slogans = ['WorkPulse by HireTrainVA.com'];

const getRandomInt = max => {
    return Math.floor(Math.random() * Math.floor(max));
};

export default () => {
    return slogans[getRandomInt(slogans.length)];
};
