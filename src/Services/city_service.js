const { CityRepository } = require("../repository/index");

class CityService {
  constructor() {
    this.cityRepository = new CityRepository();
  }

  async createCity(data) {
    try {
      const city = await this.cityRepository.createCity(data);
      return city;
    } catch (error) {
      console.log("Some thing went wrong in Service Layer");
      throw { error };
    }
  }
  async deleteCity(cityId) {
    try {
      const city = await this.cityRepository.deleteCity(cityId);
      return city;
    } catch (error) {
      console.log("Some thing went wrong in Service Layer");
      throw { error };
    }
  }
  async updateCity(cityId, data) {
    try {
      const city = await this.cityRepository.updateCity(cityId, data);
      return city;
    } catch (error) {
      console.log("Some thing went wrong in Service Layer");
      throw { error };
    }
  }
  async getCity(cityId) {
    try {
      const city = await this.cityRepository(cityId);
      return city;
    } catch (error) {
      console.log("Some thing went wrong in Service Layer");
      throw { error };
    }
  }
}

module.exports = CityService;
