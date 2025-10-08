const hash = require('./testindex');

test('Verificar Hash', () => {
  const message = "contraseña";
  const hash = index(message);
  expect(hash).toEqual("559a0612917c8c51ac7980c38b376cf2bb2387ae1ba944b3b32243ff4f2bad4d5db3811f02cff394fba62fa3feefd03e2");
});