import styled from "styled-components";

const CardStyle = styled.div`
  border-radius: 12px;
  background-color: hsl(235, 46%, 20%);
  margin-top: 3rem;
  z-index: 3;
  position: relative;

  @media (max-width: 960px) {
    height: 140px;
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

  @media (max-width: 960px) {
    margin: 0px;
  }
`;

const CardTimeframe = styled.p`
  font-weight: 300;
  font-size: 1rem;
  color: hsl(236, 100%, 87%);
  padding: 0 0 10px 0;
  margin: .6rem 0px 0px 0px;

  @media (max-width: 960px) {
    margin: 0px;
  }
`;

const Container = styled.div`
  padding: 1.2rem;
`;

const TimeContainer = styled.div`
  @media (max-width: 960px) {
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
              <CardTimeframe>{time} - {previousHours} hrs</CardTimeframe>
            </TimeContainer>
      </Container>
    </CardStyle>
  );
}

export default Card;