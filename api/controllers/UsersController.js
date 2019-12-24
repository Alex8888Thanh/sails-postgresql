/**
 * UsersController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    add: async function (req, res) {

      const user = req.query.username,
        pass = req.query.password,
        role = parseInt(req.query.role);

      try {
        var createdUser = await Users.create({
          username: user,
          password: pass,
          role: role
        }).fetch();

        res.json({
          "status":200,
          "message": "Successfully created new users",
          "item": createdUser
        });
      } catch (err) {
        if (err.code === 'E_UNIQUE') {
          res.json({"status": 409, "message": "Username already exist"});
        } else if (err.name === "UsageError") {
          res.badRequest();
        } else {
          res.serverError(err);
        }
      }
    },


};

