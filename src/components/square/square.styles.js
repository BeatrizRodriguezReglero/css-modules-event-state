import styled from 'styled-components';

const StyledSquare = styled.div`
	width: 200px;
	height: 200px;
	background-color: ${({ $color }) => ($color ? 'red' : 'green')};
`;
export { StyledSquare };
