import styled from "styled-components";
import Link from 'next/link';

const FooterSection = styled.footer`
  // background-color: #f497da;
  border-top: 2px solid #f65be3; 
  height: 12vh;
  padding: 0 30px 10px 30px;
`
const FooterWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`

const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem 0 0 0;

  h2 {
    font-weight: 300;
    font-size: 1rem;
    letter-spacing: .07rem;
    text-transform: uppercase;
  }
`;

const ProfileWrapper = styled.div`
  display: flex;
`;

const LinkStyle = styled.div`
  font-weight: 300;
  font-size: 1rem;
  letter-spacing: .07rem;
  text-transform: uppercase;
  border: 1px solid black;
  padding: 1rem 1.4rem;
  border-radius: 9px;
  box-shadow: 8px 8px #f65be3;
  background-color: #f497da;
  margin-right: 30px;
  text-decoration: none;
  transition: transform .3s,box-shadow .3s;

  &:hover {
    box-shadow: 1px 1px #f497da;
    // transition: ease-in-out 0.5s;
  }

  a {
    text-decoration: none;
    color: black
  }
`

export default function Footer() {

  return(
    <>
      <FooterSection>
        <FooterWrapper>
          <LinkWrapper>
            <LinkStyle>
              <Link href="https://www.frontendmentor.io/" target="_blank">Frontend Mentor challenges</Link>
            </LinkStyle>
            <ProfileWrapper>
              <LinkStyle>
                <Link href="https://www.michellefarley.com.au" target="_blank">Michelle Farley</Link>
              </LinkStyle>
              <LinkStyle>
                <Link href="https://github.com/Shell111" target="_blank">GitHub</Link>
              </LinkStyle>
            </ProfileWrapper>
          </LinkWrapper>
        </FooterWrapper>
      </FooterSection>
    
    </>
  )
}

