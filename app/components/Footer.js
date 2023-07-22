import styled from "styled-components";

const FooterSection = styled.footer`
  // background-color: #f497da;
  border-top: 2px solid #f497da;
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

const Link = styled.a`
  font-weight: 300;
  font-size: 1rem;
  letter-spacing: .07rem;
  text-transform: uppercase;
  border: 1px solid black;
  padding: 1rem 1.4rem;
  border-radius: 9px;
  box-shadow: 8px 8px #eee;
  background-color: #f65be3;
  margin-right: 30px;

  &:hover {
    box-shadow: 1px 1px #eee;
    transition: ease-in-out 0.5s;
  }
`

export default function Footer() {

  return(
    <>
      <FooterSection>
        <FooterWrapper>
          <LinkWrapper>
            <Link>Frontend Mentor challenges</Link>
            <Link>Michelle Farley</Link>
          </LinkWrapper>
        </FooterWrapper>
      </FooterSection>
    
    </>
  )
}

