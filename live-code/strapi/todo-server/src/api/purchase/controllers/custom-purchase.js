// strapi is a global accessible variable in controllers
async function find(ctx) {
  const userId = ctx.state.user.id;

  const entries = await strapi.entityService.findMany(
    "api::purchase.purchase", { filters: { customer_id: userId } }
  );

  return entries;
}

async function create(ctx) {
  const data = ctx.request.body.data; // json data in http body
  data.customer_id = ctx.state.user.id;

  /* Att göra */

  // 1. Hämta böckerna från data.books
  const bookIds = data.books.replaceAll(" ", "").split(",")

  const books = await strapi.entityService.findMany(
    "api::book.book", { filters: { id: bookIds } }
  )

  // 2. Hämta priserna på böckerna
  let priceTot = 0;
  for (let book of books) {
    priceTot = priceTot + Number.parseFloat(book.price);
  }

  // 3. Sätt priserna i data.price
  data.amount = priceTot;

  /* skriv ovanför */
  const entry = await strapi.entityService.create("api::purchase.purchase", { data })

  return entry;
}


module.exports = { find, create }
