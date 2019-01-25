import styled from 'styled-components';

const Header = styled.header`
    background: ${props => props.background};
    height: 50px;
    width: 100%;
    position: 'fixed';
`;

export default Header;