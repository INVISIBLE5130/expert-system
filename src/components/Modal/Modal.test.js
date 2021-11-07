const renderer = require('react-test-renderer')
const {Modal} = require('./Modal')

it("Check modal", () => {
    const ModalComponent = renderer.create(Modal).toJSON();
    expect(ModalComponent).toMatchSnapshot();
});