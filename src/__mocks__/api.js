import faker from "faker";
export const SWHeroes = new Array(10).fill(0).map(() => ({
  name: `${faker.name.firstName()} ${faker.name.lastName()}`
}));
