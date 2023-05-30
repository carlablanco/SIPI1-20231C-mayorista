const { Subscription, SubscriptionUser, Product, SubscriptionProduct } = require('../models'); // Import the Sequelize models

// Get subscription and associated products for a certain user
async function getSubscriptionForUser(userId) {
  try {
    const userSubscriptions = await SubscriptionUser.findAll({
      where: { userId },
      include: [{ model: Subscription, include: [Product] }],
    });

    return userSubscriptions;
  } catch (error) {
    console.error('Error retrieving subscriptions for user:', error);
    throw error;
  }
}

// Get subscription and associated products for any user
async function getSubscriptionForAnyUser() {
  try {
    const allSubscriptions = await Subscription.findAll({
      include: [Product],
    });

    return allSubscriptions;
  } catch (error) {
    console.error('Error retrieving subscriptions:', error);
    throw error;
  }
}

async function subscribeUser(userId, subscriptionId, cadence, numberOfPeople) {
  try {
    const existingSubscription = await SubscriptionUser.findOne({
      where: { userId, subscriptionId },
    });

    if (existingSubscription) {
      throw new Error('User is already subscribed to this subscription.');
    }

    const subscriptionUser = await SubscriptionUser.create({
      userId,
      subscriptionId,
      cadence,
      numberOfPeople,
    });

    return subscriptionUser;
  } catch (error) {
    console.error('Error subscribing to a subscription:', error);
    throw error;
  }
}

async function cancelUserSubscription(userId, subscriptionId) {
  try {
    await SubscriptionUser.destroy({
      where: { userId, subscriptionId },
    });
    return { message: 'Subscription canceled successfully.' };
    
  } catch (error) {
    console.error('Error canceling user subscription:', error);
    throw error;
  }
}

async function modifyUserSubscription(userId, subscriptionId, cadence, numberOfPeople) {
  try {
    await SubscriptionUser.update(
      { cadence, numberOfPeople },
      { where: { userId, subscriptionId } }
    );

    return { message: 'Subscription modified successfully.' };
  } catch (error) {
    console.error('Error modifying user subscription:', error);
    throw error;
  }
}

module.exports = {
  getSubscriptionForUser,
  getSubscriptionForAnyUser,
  subscribeUser,
  cancelUserSubscription,
  modifyUserSubscription,
};
