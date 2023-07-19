'use client'
 
import { useState } from 'react'
import styled from "styled-components";
import "../app/styles/styles.css";
import CardGrid from './components/CardGrid';
import Image from 'next/image';
import avatar from "./images/avatar.jpg"


const Main = styled.main`
  margin: 200px auto;
  display: grid;
  grid-template-columns: repeat(4, calc(25% - 20px));
  max-width: 1000px;
  gap: 20px 18px ;
  color: #fff;

  @media (max-width: 960px) {
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    padding: 10px 10px;
    margin: 0 auto;
  }

  @media (max-width: 560px) {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 10px 10px;
    margin: 0 auto;
  }
`;

const TitleCard = styled.div`
  display: grid;
  border-radius: 12px;
  background-color: hsl(235, 46%, 20%);
  grid-row-start: 1;
  grid-row-end: 3;
  margin-top: 0;

  @media (max-width: 960px) and (min-width: 560px) {
    grid-column-start: 1;
    grid-column-end: 3;
  }
`;

const ImageWrapper = styled.div`
  align-self: center;
`;

const NameSection = styled.div`
  background-color: hsl(246, 80%, 60%);
  padding: 24px 24px 24px 24px;
  border-radius: 12px;

  @media (max-width: 960px) {
    padding-bottom: 20px;
    display: flex;
  }
`;

const ProfileWrapper = styled.div`
  @media (max-width: 960px) {
    padding-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
`;

const ProfileName = styled.h2`
  font-weight: 300;
  margin-top: 0;
  font-size: 36px;

  @media (max-width: 960px) {
    font-size: 24px;    
  }
`;

const ReportSubTitle = styled.h2`
  font-weight: 300;
  color: hsl(236, 100%, 87%);
  font-size: 14px;
  margin: 36px 0 0 0;

  @media (max-width: 960px) {
    margin-top: 0;
  }
`;

const Container = styled.div`
  padding: 24px;

  @media (max-wdith: 960px) {
    padding: 8px 24px;
  }
`;

const List = styled.ul`
  padding-left: 0px;
  li {
    list-style-type: none;
    font-weight: 300;
  }

  @media (max-width: 960px) {
    display: flex;
    justify-content: space-between;
    margin: 0;
  }
`

const Button = styled.button`
  padding: 9px 0px;
`

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
  const [timeframes, setTimeframes] = useState("daily")
  const [activeLink, setActiveLink] = useState(1);

  const handleLinkClick = (linkNumber) => {
    setActiveLink(linkNumber);
  };
  
  let time = "weekly"

  const handleToggle = (event) => {
    time = event.target.innerText.toLowerCase();
    setTimeframes(time)
  }


  return (
    <div>
      <Main className="title-cell-1">
        <TitleCard className="title-cell-1">
          <NameSection>
            <ImageWrapper>
              <Image src={avatar} 
                alt="profile-image"    
                width={70}
                height={70}
                style={{borderRadius: '50%', objectFit: 'cover', border: '3px solid #fff'}}
              />
            </ImageWrapper>
            <ProfileWrapper>
              <ReportSubTitle>Report for</ReportSubTitle>
              <ProfileName>Jennie Robson</ProfileName>
            </ProfileWrapper>
          </NameSection>
          <Container>
            <List>
              <li
                key={1}
                style={{ color: activeLink === 1 ? '#eeee' : '#6f76c8' }}
                onClick={() => handleLinkClick(1)}
                >
                <Button onClick={handleToggle}>Daily</Button>
              </li>
              <li
                key={2}
                style={{ color: activeLink === 2 ? '#eeee' : '#6f76c8' }}
                onClick={() => handleLinkClick(2)}
                >
                <Button onClick={handleToggle}>Weekly</Button>
              </li>
              <li 
                key={3}
                style={{ color: activeLink === 3 ? '#eeee' : '#6f76c8' }}
                onClick={() => handleLinkClick(3)}
                >
                <Button onClick={handleToggle}>Monthly</Button>
              </li>
            </List>
          </Container>
        </TitleCard> 
        <CardGrid
          data={data}
          time={timeframes}
        />
      </Main>
    </div>
  )
}
