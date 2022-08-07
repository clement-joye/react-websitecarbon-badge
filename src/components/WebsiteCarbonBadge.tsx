import React, { useEffect, useState } from 'react';
import { WebsiteCarbonBadgeProps } from './WebsiteCarbonBadge.types';
import styled, { css } from 'styled-components';

const Wrapper = styled.div<WebsiteCarbonBadgeProps>`
  --b1: #0e11a8;
  --b2: #00ffbc;
  font-size: 15px;
  text-align: center;
  color: var(--b1);
  line-height: 1.15;
`

const LinkCo2 = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1em;
  line-height: 1.15;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  text-decoration: none;
  margin: .2em 0;
  padding: .3em .5em;
	border: .13em solid var(--b2);
  border-radius: .3em 0 0 .3em;
	background: #fff;
	border-right: 0;
	min-width: 8.2em;
`

const Sub = styled.sub`
  vertical-align: middle;
  position: relative;
  top: .3em;
  font-size: .7em;
`

const Link = styled.a<WebsiteCarbonBadgeProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1em;
  line-height: 1.15;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  text-decoration: none;
  margin: .2em 0;
  padding: .3em .5em;
	border: .13em solid var(--b2);
  border-radius: 0 .3em .3em 0;
	border-left: 0;
	background: var(--b1);
	color: #fff;
	font-weight: 700;
	border-color: var(--b1);

  ${props => props.dark && css`
    color: var(--b1);
    background: var(--b2);
    border-color: var(--b2);
  `}
`

const Percentage = styled.span<WebsiteCarbonBadgeProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1em;
  line-height: 1.15;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  text-decoration: none;
  margin: .2em 0;

  ${props => props.dark && css`
    color: #fff;
  `}
`

const dict = {
  en: {
    p1: "of",
    p2: "view",
    p3: "Cleaner than",
    p4: "Dirtier than",
    p5: "of pages tested",
  },
  fr: {
    p1: "de",
    p2: "vue",
    p3: "Plus légere que",
    p4: "Plus lourde que",
    p5: "des pages testées",
  }
}

const WebsiteCarbonBadge = (props: WebsiteCarbonBadgeProps) => {
  
  const [co2, setCo2] = useState('');
  const [percentage, setPercentage] = useState('');

  useEffect(() => {

    const fetchData = async (props: WebsiteCarbonBadgeProps) => {
      let url = props.url ? encodeURIComponent(props.url) : ""
      let data = localStorage.getItem(`wcb_${url}`);
    
      if(props.co2 && props.percentage) {
        setCo2(props.co2);
        setPercentage(props.percentage);
      }
      else if(data) {
        let parsed = JSON.parse(data);
        setCo2(parsed.c);
        setPercentage(parsed.p);
      }
      else {
    
        if(!props.url) {
          throw Error("Website carbon: url is null")
        }
    
        try {
          const res = await fetch("https://api.websitecarbon.com/b?url=" + url);
        
          if (!res.ok) throw Error(JSON.stringify(await res.json()));
          const data = await res.json()
          
          localStorage.setItem(`wcb_${url}`, JSON.stringify(data))
          
          setCo2(data.c);
          setPercentage(data.p);
        }
        catch(e) {
          console.error(e)
          localStorage.removeItem(`wcb_${url}`)
        }
      }
    }

    fetchData(props)
      .catch(console.error);
  }, []);

  let ps = props.lang == "fr"
    ? dict.fr
    : dict.en;

  return (
    <Wrapper className="carbonbadge">
      <div>
        <LinkCo2 target="_blank" rel="noopener" href={`https://www.websitecarbon.com/website/${props.url}`}>{co2 ? co2 : '-'}g {ps.p1} CO<Sub>2</Sub>/{ps.p2}</LinkCo2>
        <Link dark={props.dark} target="_blank" rel="noopener" href="https://websitecarbon.com">Website Carbon</Link>
      </div>
      <Percentage>{percentage 
        ? parseInt(percentage) > 50 
          ? `${ps.p3} ${percentage}% ${ps.p5}` 
          : `${ps.p4} ${percentage}% ${ps.p5}`
        : ''}</Percentage>
    </Wrapper>
  )
}

export default WebsiteCarbonBadge