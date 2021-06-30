import styled from "styled-components";

function Social() {
  return (
    <SocialSection>
      <a href="#">
        <img src="./imgs/fb.png" alt="facebook" />
      </a>
      <a href="#">
        <img src="./imgs/tw.png" alt="twitter" />
      </a>
      <a href="#">
        <img src="./imgs/ig.png" alt="instagram" />
      </a>
    </SocialSection>
  );
}

export default Social;

const SocialSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 15px;
    margin: 20px;
  }
`;
