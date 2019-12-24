/**
 * Mahasiswa.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'mahasiswa',
  primaryKey: 'id',
  attributes: {
    id: {
      type: 'number',
      autoIncrement: true
    },
    nama: {
      type: 'string',
      required: true,
    },
    email: {
      type: 'string',
      required: true,
      unique: true
    },
    nrp: {
      type: 'string',
      required: true,
      unique: true
    },
    users: {
      model: 'Users',
      columnName: 'users_id'
    }

  },

};

