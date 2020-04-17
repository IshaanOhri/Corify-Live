const notification1 = {
    title : "WIN OVER CORONA",
    message : "Do not go out unnecessarily.\n#StayHomeStaySafe"
};

const notification2 = {
    title : "FLATTEN THE CURVE",
    message : "Practice social-distancing to protect yourself and your loved ones. \n#StayInformedStaySafe"
};

const notification3 = {
    title : "MYTH BUSTERS",
    message : "As of now, there is no vaccine which protects against coronavirus. \n#StayInformedStaySafe"
};

const notification4 = {
    title : "TODO's",
    message : "Avoid touching elevator-buttons, door-knobs, door-bell, currency-notes. \n#StaySafeStayHealthy"
};

const notification5 = {
    title : "TODO's",
    message : "Avoid touching milk-bags, raw vegetables, grocery packets. \n#StaySafeStayHealthy"
};

const notification6 = {
    title : "TODO's",
    message : "Clean and sun-dry all fruits, vegetables and other consumables before using them. \n#StaySafeStayHealthy"
};

const notification7 = {
    title : "TODO's",
    message : "Thoroughly clean your hands with an alcohol-based sanitizer or wash them with soap and water. \n#StayCleanStaySafe"
};

const notification8 = {
    title : "WORKING FROM HOME",
    message : "Experts say getting dressed up for work motivates you to stay productive. \n#DressUp"
};

const notification9 = {
    title : "WORKING FROM HOME",
    message : "Experts recommend that you get up and move around every 30 minutes. \n#KeepMoving"
};

const notification10 = {
    title : "WORKING FROM HOME",
    message : "Dehydration can cause dizziness, headaches and confusion. \n#StayHydratedStayFocused"
};

const notification11 = {
    title : "LOCKDOWN PASS-TIMES",
    message : "Watch Mahabharat and Ramayan on Doordarshan."
};

const notification12 = {
    title : "LOCKDOWN PASS-TIMES",
    message : "COnnect with your friends with video-conferencing. \n#StayConnectedStaySafe"
};

const notification13 = {
    title : "TIP OF THE DAY",
    message : "Food-items like Haldi, Jeera, Dhaniya, Ginger and garlic are recommended to be used significantly in cooking. \nStayInformedStaySafe"
};

const notification14 = {
    title : "TODO's",
    message : "Avoid touching your face, eyes, nose and mouth. \n#StaySafeStayHealthy"
};

const notifications = [
    notification1,
    notification2,
    notification3,
    notification4,
    notification5,
    notification6,
    notification7,
    notification8,
    notification9,
    notification10,
    notification11,
    notification12,
    notification13,
    notification14
];

const misc = () => {
    return notifications[Math.floor(Math.random() * 14)];
};

module.exports = misc;