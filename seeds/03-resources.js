
	exports.seed = function(knex, Promise) {
    return knex("resources").insert([
      {
        resource_name: "a resource",
        resource_description: "read a resourece"
      },
      {
        resource_name: "b resource",
        resource_description: "read a resourece"
      },
    ]);
  };