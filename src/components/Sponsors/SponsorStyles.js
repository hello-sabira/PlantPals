import styled from "styled-components";

export const SponsorSection = styled.div`
background: rgb(185,237,217);
background: linear-gradient(0deg, rgba(185,237,217,1) 5%, rgba(64,242,135,1) 50%, rgba(75,189,140,1) 100%);
padding: 70px 140px;
  position: relative;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    padding: 5rem 1rem;
    
  }
`;

export const SponsorTextWrapper = styled.div`
  position: relative;
  padding: 0 0 20px;
  margin-bottom: 4rem;
  &:before {
    width: 40px;
    height: 2px;
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    background-color: #006666;
    transform: translateX(-50%);
  }
`;

export const SponsorTitle = styled.h2`
  text-align: center;
  font-size: clamp(1.3rem, 13vw, 3.1rem);
  line-height: 1.06;
  letter-spacing: 0.4rem;
`;

export const SponsorText = styled.p`
  margin: 1rem 0 auto;
  text-align: center;
  font-size: 1.3rem;
  line-height: 1.73;
  letter-spacing: 0.5px;
  color: #001933;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const SponsorRow = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const SponsorColumn = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  margin: 0.4rem;
  @media screen and (max-width: 1100px) {
    div:not(:first-child) {
      display: none;
    }
  }
`;

export const SponsorImage = styled.img`
  width: 90px;
  @media screen and (max-width: 1100px) {
    width: clamp(100px, 40vw, 400px);
    height: 90%;
  }
`;
export const SponsorWrapper = styled.div`
  padding: 10px 30px;
  border-radius: 1rem;
  height: 110px;
  width: 100%;
  box-shadow: 5px 5px 5px teal;
  background-color: #fafeff;
  margin: 0.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
