import styled from "styled-components";

const CardStyle = styled.div`
  border-radius: 12px;
  background-color: hsl(235, 46%, 20%);
  margin-top: 3rem;
  z-index: 3;
  position: relative;
  height: 16.5vh;

  @media (max-width: 730px) {
    height: 13vh;
  }
`;

const CardTitle = styled.h2`
  font-weight: 300;
  font-size: 3rem;
  margin: 1rem 0 0.5rem 0;
`;

const CardCategory = styled.h3`
  font-weight: 300;
  font-size: 1.2rem;
  display: flex;
  justify-content: space-between;

  @media (max-width: 730px) {
    margin: 0px;
  }
`;

const CardTimeframe = styled.p`
  font-weight: 300;
  font-size: .9rem;
  color: hsl(235, 45%, 61%);
  padding: 0 0 20px 0;
  margin: .6rem 0px 0px 0px;

  @media (max-width: 730px) {
    font-size: .8rem;
    margin: 0px;
  }
`;

const Container = styled.div`
  padding: 1.2rem;
`;

const TimeContainer = styled.div`
  @media (max-width: 730px) {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
`;


function Card({ title, currentHours, previousHours, time }) {
  return (
    <CardStyle>
      <Container>
          <CardCategory>
            {title}
            <div>...</div>
          </CardCategory>
            <TimeContainer>
              <CardTitle>{currentHours}hrs</CardTitle>
              <CardTimeframe>{time} - {previousHours} hours</CardTimeframe>
            </TimeContainer>
      </Container>
    </CardStyle>
  );
}

export default Card;