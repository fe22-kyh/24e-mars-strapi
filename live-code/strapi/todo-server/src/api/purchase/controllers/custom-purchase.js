// strapi is a global accessible variable in controllers
async function find(ctx) {
  const userId = ctx.state.user.id;

  const entries = await strapi.entityService.findMany(
    "api::purchase.purchase",
    {
      filters: { customer_id: userId }
    }
  );

  return entries;
}

async function create(ctx) {
  const data = ctx.request.body.data; // json data in http body
  data.customer_id = ctx.state.user.id;

  const entry = await strapi.entityService.create("api::purchase.purchase", { data })

  return entry;
}


module.exports = { find, create }