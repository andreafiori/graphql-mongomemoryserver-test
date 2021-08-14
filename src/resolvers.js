const resolvers = {
  users: async (_, context) => {
    const { db } = await context();
    return db
      .collection("users")
      .find()
      .toArray();
  },
  user: async ({ id }, context) => {
    const { db } = await context();
    const userPromise = db.collection("users").findOne({ id });
    const currentUser = await userPromise;
    if (currentUser) {
      return userPromise;
    }
    // No user were found
  },
  // Mutations
  addUser: async ({ name, email, posts }, context) => {
    const { db } = await context();
    return db.collection("users").insertOne({ name, email, posts });
  },
  editUser: async ({ id, name, email }, context) => {
    const { db } = await context();
    return db
      .collection("users")
      .findOneAndUpdate(
        { id },
        { $set: { name, email } },
        { returnOriginal: false }
      )
      .then(resp => resp.value);
  }
};

module.exports = resolvers;