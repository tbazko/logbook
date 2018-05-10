let id = 1
const uuid = {
  v4: jest.fn(() => `${id++}`),
  v1: jest.fn(() => `${id++}`),
}

export default uuid
