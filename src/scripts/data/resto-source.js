import API_ENDPOINT from '../globals/api-endpoiint';

class RestoDbSource {
  static async listResto() {
    const response = await fetch(API_ENDPOINT.LIST);
    console.log('===>response', response);
    const responseJson = await response.json();
    return responseJson.results;
  }

  static async detailResto(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }
}

export default RestoDbSource;
