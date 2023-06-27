import styled from "styled-components";


const CardStyle = styled.div`
  border-radius: 12px;
  background-color: hsl(235, 46%, 20%);
  margin-top: 50px;
  z-index: 3;
  position: relative;
  top: -7px;
`;

const Container = styled.div`
  padding: 24px;
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

`;

const CardTimeframe = styled.p`
  font-weight: 300;
  font-size: 18px;
  color: hsl(236, 100%, 87%);
  margin: 6px 0px 12px 0px;
`;

export default function Card({item}) {

  return(
    <CardStyle>
      <Container>
        <CardCategory>
          {item.title}
          <div>...</div>
        </CardCategory>
        <CardTitle>{item.timeframes.daily.current}hrs </CardTitle>
        <CardTimeframe>
          Last {item.timeframes ? "Day" : ""} - {item.timeframes.daily.previous}hrs 
        </CardTimeframe>
      </Container>
    </CardStyle>
  )
};
