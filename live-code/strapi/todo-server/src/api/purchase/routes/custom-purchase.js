const routes = [
  {
    method: "GET",
    path: "/purchases/:id",
    handler: "purchase.findOne",
    config: {
      policies: ["is-owner"]
    }
  },
  {
    method: "GET",
    path: "/purchases",
    handler: "custom-purchase.find"
  },
  {
    method: "POST",
    path: "/purchases",
    handler: "custom-purchase.create"
  }
];


// export default { routes }
module.exports = { routes };
