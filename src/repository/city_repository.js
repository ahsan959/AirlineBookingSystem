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

  async DeleteCity(cityId) {
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
}

module.exports = CityRepository;
