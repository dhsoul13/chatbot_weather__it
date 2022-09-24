import mongoose from "mongoose";
import User from "../../modules/user.js";

export const findUser = async ({ id }) => {
  try {
    console.log("fund", id);
    const findUser = await User.findOne({ userID: id });
    return findUser;
  } catch (e) {
    console.log(e);
  }
};

export const createUser = async ({ id, city, coordinate }) => {
  try {
    console.log(id, city, coordinate);
    const findElem = await findUser({ id: id });
    if (findElem?.userID) {
      findElem.count += 1;
      findElem.coordinate = coordinate;
      findElem.city = city;
      await findElem.save();
      return true;
    } else {
      await User.create({
        userID: id,
        count: 0,
        city: city,
        coordinate: coordinate,
      });
    }
  } catch (e) {
    console.log(e);
  }
};
