// A policy returns always true or false if policy was fullfilled
async function isOwnerPolicy(ctx, config, global) {
  const userId = ctx.state.user.id;
  const purchaseId = ctx.params.id;

  const purchase = await global.strapi.entityService.findOne(
    "api::purchase.purchase", purchaseId
  )

  // Option 1
  if (userId == purchase.customer_id) {
    return true;
  } else {
    return false;
  }

  // Option 2
  // const isPolicyAccepted = userId == purchase.customer_id;

  // return isPolicyAccepted;

  // Option 3
  // return userId == purchase.id;

  // Option 4
  //return userId == purchase.id ? true : false;

}

// export default isOwnerPolicy;
module.exports = isOwnerPolicy;