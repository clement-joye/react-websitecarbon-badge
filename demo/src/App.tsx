import WebsiteCarbonBadge from './components/WebsiteCarbonBadge';

function App() {
  return (
    <>
      <WebsiteCarbonBadge url="www.google.com"/>
      <WebsiteCarbonBadge dark={true} co2="0.12" percentage='89' />
      <WebsiteCarbonBadge co2="0.56" percentage='41' />
      <WebsiteCarbonBadge dark={true} lang="fr" co2="0.15" percentage='63' />
    </>
    
  )
}

export default App;
