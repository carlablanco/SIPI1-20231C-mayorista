
const subscriptionService = require('../services/subscription.service');

async function getUserSubscriptionWithProducts(req, res, next) {
  const { userId } = req.params;

  try {
    const userSubscriptions = await subscriptionService.getSubscriptionForUser(userId);
    res.json(userSubscriptions);
  } catch (error) {
    console.error('Error retrieving user subscriptions:', error);
    next(error);
  }
}

async function getAllSubscriptionsWithProducts(req, res, next) {
  try {
    const allSubscriptions = await subscriptionService.getSubscriptionForAnyUser();
    res.json(allSubscriptions);
  } catch (error) {
    console.error('Error retrieving subscriptions:', error);
    next(error);
  }
}

async function subscribeUser(userId, subscriptionId, cadence, numberOfPeople) {
  try {
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

async function cancelUserSubscription(req, res, next) {
  const { userId, subscriptionId } = req.params;

  try {
    await subscriptionService.cancelUserSubscription(userId, subscriptionId);
    res.json({ message: 'Subscription canceled successfully.' });
  } catch (error) {
    console.error('Error canceling user subscription:', error);
    next(error);
  }
}

async function modifyUserSubscription(req, res, next) {
  const { userId, subscriptionId } = req.params;
  const { cadence, numberOfPeople } = req.body;

  try {
    await subscriptionService.modifyUserSubscription(userId, subscriptionId, cadence, numberOfPeople);
    res.json({ message: 'Subscription modified successfully.' });
  } catch (error) {
    console.error('Error modifying user subscription:', error);
    next(error);
  }
}

module.exports = {
  getUserSubscriptionWithProducts,
  getAllSubscriptionsWithProducts,
  subscribeUser,
  cancelUserSubscription,
  modifyUserSubscription,
};
