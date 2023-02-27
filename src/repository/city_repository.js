// index file it will retrun all the Corresponding
// Models we have Only Destructure the Models

const { City } = require("../models/index");

class CityRepository {
  // we are Sending the Object and Destructure that Object
  async createCity({ name }) {
    try {
      const city = await City.create({
        name,
      });
      return city;
    } catch (err) {
      throw { err };
    }
  }

  async deleteCity(cityId) {
    try {
      await City.destroy({
        where: {
          id: cityId,
        },
      });
      return true;
    } catch (err) {
      throw { err };
    }
  }

  async updateCity(cityId, data) {
    try {
      // The below approach also works but will not return updated object
      // if we are using Pg then returning: true can be used, else not
      // const city = await City.update(data, {
      //     where: {
      //         id: cityId
      //     },
      //
      // });
      // for getting updated data in mysql we use the below approach
      const city = await City.findByPk(cityId);
      city.name = data.name;
      await city.save();
      return city;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }

  // // For updating First Tell what do you want to update

  // async updateCity(cityId, data) {
  //   try {
  //     const city = await City.update(data, {
  //       where: {
  //         id: cityId,
  //       },
  //     });
  //     return city;
  //   } catch (error) {
  //     console.log("SomeThing went Wrong Please Try Again");
  //     throw { error };
  //   }
  // }

  async getCity(cityId) {
    try {
      const city = await City.findByPk(cityId);
      return city;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }

  async getAllCity() {
    try {
      const cities = await City.findAll();
      return cities;
    } catch (error) {
      console.log("Somethings went wrong in Service Layer");
      throw { error };
    }
  }
}

module.exports = CityRepository;
