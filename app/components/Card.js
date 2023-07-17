import styled from "styled-components";

const CardStyle = styled.div`
  border-radius: 12px;
  background-color: hsl(235, 46%, 20%);
  margin-top: 50px;
  z-index: 3;
  position: relative;
  height: 190px;

  @media (max-width: 730px) {
    height: 130px;
  }
`;

const CardTitle = styled.h2`
  font-weight: 300;
  font-size: 42px;
  margin: 16px 0 8px 0;
`;

const CardCategory = styled.h3`
  font-weight: 300;
  font-size: 18px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 730px) {
    margin: 0px;
  }
`;

const CardTimeframe = styled.p`
  font-weight: 300;
  font-size: 16px;
  color: hsl(235, 45%, 61%);
  padding: 0 0 20px 0;
  margin: 6px 0px 0px 0px;

  @media (max-width: 730px) {
    font-size: 14px;
    margin: 0px;
  }
`;

const Container = styled.div`
  padding: 18px;
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