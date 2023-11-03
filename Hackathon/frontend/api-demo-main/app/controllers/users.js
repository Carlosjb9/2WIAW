var User = require("../models/user");

exports.login = async (credentials) => {
    try {
        //find all people
        const data = await User.findOne({ 'user': credentials.user, 'pass': credentials.pass }, function (err, data) {
            return data;
        });
        //IF we find the user then create an json object with TRUE and user info
        result = {
            isAuth: (data != null),
            info: data
        }
        return result;
    } catch (error) {
        console.error(`Error getting User login" ${error}`);
    }
};

exports.get = async (filter) => {
    try {
        //find all people
        const data = await User.findOne(filter, function (err, data) {
            return data;
        });
        return data;
    } catch (error) {
        console.error(`Error getting User login" ${error}`);
    }
};
exports.put = async (filter) => {
    try {
        //find all people
        var user = { firstName: 'Harry', lastName: 'Potter' };
        await User.push(user);
        User.save();
    } catch (error) {
        console.error(`Error getting User login" ${error}`);
    }
};
