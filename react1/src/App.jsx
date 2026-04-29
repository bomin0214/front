import Header from './components/Header';
import MemberCard from './components/MemberCard';

function App(){
  const teamMembers = [
    {  id: 1, name: "김보민", role:"프로엔드 아기사자" }
  ];

  return (
    <div>
      <Header />
        <main style={{display:'flex', flexWrap:'wrap', justifyContent: 'center', padding: '20px'}} >
          {teamMembers.map((member) => (
            <MemberCard key={member.id} name={member.name} role={member.role}></MemberCard>
          ))}
          </main>
    </div>
  )
}

export default App;
