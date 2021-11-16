import React from "react";
import renderer from 'react-test-renderer'
import Modal from '../components/Modal/Modal'

it("Check modal", () => {
    const ModalComponent = renderer.create(<Modal/>).toJSON();
    expect(ModalComponent).toMatchSnapshot();
});