let dog = require('../dogs')

describe('Testing the async function dogImages', () => {
  dog.fetchDogURL = jest.spyOn(dog, 'fetchDogURL')

  test("testando requisição caso a promise resolva", async () => {
    dog.fetchDogURL.mockResolvedValue('requisição realizada com sucesso');
    await dog.fetchDogURL();
    expect(dog.fetchDogURL).toHaveBeenCalled();
    expect(dog.fetchDogURL).toHaveBeenCalledTimes(1);
  });

  test("testando requisição caso a promise seja rejeitada", async () => {
    dog.fetchDogURL.mockRejectedValue('a requisição falhou');
    expect(dog.fetchDogURL).toHaveBeenCalledTimes(1);
    expect(dog.fetchDogURL()).rejects.toMatch('a requisição falhou');
    expect(dog.fetchDogURL).toHaveBeenCalledTimes(2);
  });
})

module.exports = dog;