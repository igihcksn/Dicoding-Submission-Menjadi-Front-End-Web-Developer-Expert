import API_ENDPOINT from '../globals/api-endpoiint';

class RestoDbSource {
  static async listResto() {
    const response = await fetch(API_ENDPOINT.LIST).then((res) => res.json());
    return response;
  }

  static async detailResto(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id)).then((res) => res.json());
    return response;
  }
}

export default RestoDbSource;
