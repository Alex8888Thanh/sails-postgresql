/**
 * MahasiswaController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  create: async function (req, res) {
    var nama = req.query.nama,
      email = req.query.email,
      nrp = req.query.nrp,
      usersId = req.query.userId;

    try {
      var createdMhs = await Mahasiswa.create({
        nama: nama,
        email: email,
        nrp: nrp,
        users: usersId
      }).fetch();

      res.json({
        "status": 200,
        "message": "Successfully created new Mahasiswa",
        "item": createdMhs
      });
    } catch (err) {
      if (err.code === 'E_UNIQUE') {
        res.json({"status": 409, "message": "NRP already exist"});
      } else if (err.name === "UsageError") {
        res.badRequest();
      } else {
        res.serverError(err);
      }
    }
  }

};

