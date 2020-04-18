const seedrandom = require('seedrandom');

const notification1 = {
    title : "SUPER FOOD OF THE DAY",
    message : "Amla: The original Indian superfood, rich in Vitamin C, full of antioxidants improves immunity and help your body figth corona virus. Eat a wholesome Amla-berry empty stomach. \n#StayImmunedStaySafe"
};

const notification2 = {
    title : "SUPER FOOD OF THE DAY",
    message : "Tulsi leaves are a natural source for boosting immunity. Eat 2-3 leaves empty stomach. \n#StayImmunedStaySafe"
};

const notification3 = {
    title : "SUPER FOOD OF THE DAY",
    message : "Turmeric water, often known as golden water has proven a cure for more than 70 health problems. Drink turmeric water empty stomach. \n#StayImmunedStaySafe"
};

const notification4 = {
    title : "YOGA AT HOME",
    message : "Practice Yogasana, Pranayama and meditation for at least 30 minutes. \n#StayImmunedStaySafe"
};



const notifications = [
    notification1,
    notification2,
    notification3,
    notification4,
];

const start = () => {
    const t = seedrandom('added entropy.', {entropy : true});
    return notifications[Math.floor(t() * 4)];
};

module.exports = start;