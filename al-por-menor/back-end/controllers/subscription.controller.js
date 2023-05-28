
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

module.exports = {
  getUserSubscriptionWithProducts,
  getAllSubscriptionsWithProducts,
};
