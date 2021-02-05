const getUserName = require('../getUserName');

describe('Verifica usuários na DataBase', () => {
  it('user in dataBase', () => {
    expect.assertions(1);
    getUserName(4).then((user) => {
      expect(user).toStrictEqual('Mark');
    })
  })
  it('user in dataBase', () => {
    expect.assertions(1);
    getUserName(5).then((user) => {
      expect(user).toStrictEqual('Paul');
    })
  })
})

describe('Verifica se não tem usuário na DataBase', () => {
  it('user not in dataBase', () => {
    const id = 0;
    return getUserName(id).catch((error) => {
      expect(error).toStrictEqual({ error: 'User with ' + id + ' not found.' })
    })
  })
});

module.exports = getUserName;
