const notification1 = {
    type : "breakfast",
    title : "BREAKFAST TIME",
    message : "Wash your hands, arms and face properly before having breakfast. \nStayCleanStayHealthy"
};

const notification2 = {
    type : "lunch",
    title : "LUNCH TIME",
    message : "Wash your hands, arms and face properly before having lunch. \nStayCleanStayHealthy"
};

const notification3 = {
    type : "dinner",
    title : "DINNER TIME",
    message : "Wash your hands, arms and face properly before having dinner. \nStayCleanStayHealthy"
};

const notifications = [
    notification1,
    notification2,
    notification3,
];

const meal = (type) => {
    return notifications.filter((notification)=>{
        return notification.type === type;
    });
};

module.exports = meal;