import Card from "./Card";
import styled from "styled-components";

const BackgroundCard = styled.div`
  border-radius: 12px;    
  position: relative;

  @media (max-width: 960px) {
    margin-top: 20px;
    margin-bottom: 80px;
    height: 100px;
  }
`;

function CardGrid({ data, time }) {
  let timePeriod = time === "daily" ? "Previous" : time === "weekly" ? "Last week" : "Last month";

  return (
    <>
      {data.map((item) => (
          <BackgroundCard style={{ backgroundColor: item.bg }}>
            <Card
              key={item.title}
              title={item.title}
              previousHours={item.timeframes[time].previous}
              currentHours={item.timeframes[time].current}
              time={timePeriod}
            />
          </BackgroundCard>
      ))}
    </>
  );
}

export default CardGrid;