// index file it will retrun all the Corresponding
// Models we have Only Destructure the Models

const { City } = require("../models/index");

class CityRepository {
  // we are Sending the Object and Destructure that Object
  async createCity({ name }) {
    try {
      const city = await City.create({ name });
      return city;
    } catch (err) {
      throw { error };
    }
  }

  async deleteCity(cityId) {
    try {
      await City.destory({
        where: {
          id: cityId,
        },
      });
    } catch (err) {
      throw { err };
    }
  }

  // For updating First Tell what do you want to update

  async updateCity(cityId, data) {
    try {
      const city = await City.update(data, {
        where: {
          id: cityId,
        },
      });
      return city;
    } catch (error) {
      console.log("SomeThing went Wrong Please Try Again");
      throw { err };
    }
  }

  async getCity(cityId) {
    try {
      const city = await City.findByPk(cityId);
      return city;
    } catch (error) {
      console.log("something went wrong in the Repository Layer ");
      throw { error };
    }
  }
}

module.exports = CityRepository;
