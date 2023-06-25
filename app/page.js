"use client";
import styled from "styled-components";
import "../app/styles/styles.css";
import Image from 'next/image'
import avatar from "./images/avatar.jpg"
import "./data.json"



const Main = styled.main`
  margin-top: 200px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  max-width: 1000px;
  gap: 24px;
  color: #fff;

  .title-cell-1 {
    grid-row-start: 1;
    grid-row-end: 3;
    margin-top: 0;
    }
`;

const TitleCard = styled.div`
  border-radius: 12px;
  background-color: hsl(235, 46%, 20%);
  margin-top: 0;
`;

const Card = styled.div`
  border-radius: 12px;
  background-color: hsl(235, 46%, 20%);
  margin-top: 50px;
  z-index: 3;
  position: relative;
  top: -7px;
`;

const ReportName = styled.h2`
  font-weight: 300;
  margin-top: 0;
  font-size: 36px;
`;

const ReportSubTitle = styled.h2`
  font-weight: 300;
  color: hsl(236, 100%, 87%);
  font-size: 14px;
  margin: 36px 0 10px 0;
`;

const CardTitle = styled.h2`
  font-weight: 300;
  font-size: 42px;
  margin: 16px 0 12px 0;
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
`;

const NameSection = styled.div`
  background-color: hsl(246, 80%, 60%);
  padding: 24px 24px 70px 24px;
  border-radius: 12px;
  
`;
const Container = styled.div`
  padding: 24px;
`;

const BackgroundCard = styled.div`
  height: 50px;
  border-radius: 12px 12px 0 0;    
  position: relative;
`;

const data = [
  {
    "title": "Work",
    "bg": "hsl(15, 100%, 70%)",
    "timeframes": {
      "daily": {
        "current": 5,
        "previous": 7
      },
      "weekly": {
        "current": 32,
        "previous": 36
      },
      "monthly": {
        "current": 103,
        "previous": 128
      }
    }
  },
  {
    "title": "Play",
    "bg": "hsl(195, 74%, 62%)",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 2
      },
      "weekly": {
        "current": 10,
        "previous": 8
      },
      "monthly": {
        "current": 23,
        "previous": 29
      }
    }
  },
  {
    "title": "Study",
    "bg": "hsl(348, 100%, 68%)",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 7
      },
      "monthly": {
        "current": 13,
        "previous": 19
      }
    }
  },
  {
    "title": "Exercise",
    "bg": "hsl(145, 58%, 55%)",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 5
      },
      "monthly": {
        "current": 11,
        "previous": 18
      }
    }
  },
  {
    "title": "Social",
    "bg": "hsl(264, 64%, 52%)",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 3
      },
      "weekly": {
        "current": 5,
        "previous": 10
      },
      "monthly": {
        "current": 21,
        "previous": 23
      }
    }
  },
  {
    "title": "Self Care",
    "bg": "hsl(43, 84%, 65%)",

    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 2,
        "previous": 2
      },
      "monthly": {
        "current": 7,
        "previous": 11
      }
    }
  }
]

export default function Home() {

  return (
    <div>
      <Main>
        <TitleCard className="title-cell-1">
          <NameSection>
            <Image src={avatar}     
              width={70}
              height={70}
              style={{borderRadius: '50%', objectFit: 'cover', border: '3px solid #fff'}}
              />
            <ReportSubTitle>Report for</ReportSubTitle>
            <ReportName>Jeanene Robson</ReportName>
          </NameSection>
          <Container>
            <CardTimeframe>Daily</CardTimeframe>
            <CardTimeframe>Weekly</CardTimeframe>
            <CardTimeframe>Monthly</CardTimeframe>
          </Container>
        </TitleCard>
          {data.map((item, index) => (
            <BackgroundCard style={{ backgroundColor: item.bg }}>
              <Card>
                <Container>
                  <CardCategory>
                    {item.title} 
                    <div>...</div>
                  </CardCategory>
                  <CardTitle>{item.timeframes.daily.current}hrs </CardTitle>
                  <CardTimeframe>Last {item.timeframes.daily ? "day" : ""} - {item.timeframes.daily.previous}hrs </CardTimeframe>
                </Container>
              </Card>
            </BackgroundCard>
          ))}
      </Main>
    </div>
  )
}
