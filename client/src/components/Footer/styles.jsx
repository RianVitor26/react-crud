import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 90%;
  background: var(--containers-bg);
  padding: 5rem;
  border-radius: 1rem;
  box-shadow: 0rem 0rem 2rem 0.1rem #dddddd;
  position: relative; 
  display: flex;
  flex-wrap: wrap;
  margin-top: 3rem; 
`;
export const SocialContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  img{
    width: 3rem;
    height: 3rem;
    margin: 0 1rem;
  }

`;
export const LicenseContainer = styled.div`
  width: 100%;
  height: 100%;

`;

export const LicenseText = styled.h3`
  text-align: center;
  color: gray;
`;
