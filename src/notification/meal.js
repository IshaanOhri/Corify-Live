const notification1 = {
    type : "breakfast",
    title : "BREAKFAST TIME",
    message : "Wash your hands, arms and face properly before having breakfast. \n#StayCleanStayHealthy"
};

const notification2 = {
    type : "lunch",
    title : "LUNCH TIME",
    message : "Wash your hands, arms and face properly before having lunch. \n#StayCleanStayHealthy"
};

const notification3 = {
    type : "dinner",
    title : "DINNER TIME",
    message : "Wash your hands, arms and face properly before having dinner. \n#StayCleanStayHealthy"
};

const notifications = [
    notification1,
    notification2,
    notification3,
];

const meal = (type) => {
    return notifications.filter((notification)=>{
        return notification.type === type;
    })[0];
};

module.exports = meal;