import styled from 'styled-components';
import picture from '../images/testoutput.png';

export default styled.img.attrs({
    src: picture
})`
    min-width: 100px;
    max-width: 300px;
    width: 30%;
    margin-top: auto;
    /* background-color: red; */
`;