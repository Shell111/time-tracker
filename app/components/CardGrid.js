import styled from "styled-components";
import Card from "./Card";

const BackgroundCard = styled.div`
  height: 50px;
  border-radius: 12px 12px 0 0;    
  position: relative;
`;

export default function CardGrid({data}){
  return (
    <>
  {data.map((item, index) => (
      <BackgroundCard style={{ backgroundColor: item.bg }}>
        <Card 
        idx={index}
        item={item}
        title={item.title}
        current={item.timeframes.daily.current}
        previous={item.timeframes.daily.previous}
        timeframes={item.timeframes.daily}
        />
      </BackgroundCard> 
  ))
  }
  </>
  )
};