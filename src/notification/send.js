const PushNotifications = require('@pusher/push-notifications-server');
const misc = require('../notification/misc');
const start = require('../notification/start');
const meal = require('../notification/meal')

const beamsClient = new PushNotifications({
  instanceId: '38c10eae-d5f0-422b-bbcd-53b6f1f33391',
  secretKey: '9E65397B832F5F9D19CB7A473ACF329D42F547A13E45A63681FEF324C7D4DC12'
});

const notification = async(payload) => {
    await beamsClient.publishToInterests(['hello'], {
        apns: {
            aps: {
            alert: 'Hello!'
            }
        },
        fcm: {
            notification: {
            title: payload.title,
            body: payload.message
            }
        }
    });
}

const send = async(group) => {
    let payload;
    if(group === 'start'){
        payload = start();
        await notification(payload);
    }else if(group === 'misc'){
        payload = misc();
        await notification(payload);
    }else{
        if(group === 'breakfast'){
            payload = meal('breakfast');
            await notification(payload);
        }else if(group === 'lunch'){
            payload = meal('lunch');
            await notification(payload);
        }else{
            payload = meal('dinner');
            await notification(payload);
        }
    }
};

module.exports = send;

