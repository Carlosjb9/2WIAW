var skin = require("../models/skins");

exports.buy = async (user, id) => {
  try {
    //find skin in data base
    const data = await skin.findOne({ id: id }, function (err, data) {
      return data;
    });
    //IF we find the skin buy it
    result = {
      id: data != null,
      user: user,
    };
    return result;
  } catch (error) {
    console.error(`Error getting skin" ${error}`);
  }
};

exports.get = async (filter) => {
  try {
    //find all people
    const data = await skin.findOne(filter, function (err, data) {
      return data;
    });
    return data;
  } catch (error) {
    console.error(`Error getting skin login" ${error}`);
  }
};
exports.put = async (filter) => {
  try {
    //find all people
    var skin = { firstName: "Harry", lastName: "Potter" };
    await skin.push(skin);
    skin.save();
  } catch (error) {
    console.error(`Error getting skin login" ${error}`);
  }
};
