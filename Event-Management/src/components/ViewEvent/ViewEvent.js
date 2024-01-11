import React from 'react'
import EventCard from './EventCard';
function ViewEvent() {
 
    const eventData = [
        {
          id: 1,
          title: 'Sports',
          description:
            ' Sports are very important in everyone’s life as they give pleasure, health, discipline, happiness, self-control and sporting spirit.They are several kinds of sports some are outdoor and some are indoor(football, volleyball, basketball, table -tennis, chess, and so on.) ',
        },
        {
          id: 2,
          title: 'Dance',
          description:
            ' Dance festivals may include competitions for individual dancers or teams, or may simply serve as a cultural event focused on dance. Some dance festivals seek to show off talented regional, national, or international dance companies in all categories.',
        },
        {
          id: 3,
          title: 'LAN Gaming',
          description:
          'A LAN Gaming is a activity where one can use a computer connected over a LAN to other computers, primarily for the purpose of playing multiplayer computer games'        },
        {
          id: 4,
          title: 'ROBO WAR',
          description:
            'RoboWar is an open-source video game in which the player programs onscreen icon-like robots to battle each other with animation and sound effects. The syntax of the language in which the robots are programmed is a relatively simple stack-based one, based largely on IF, THEN, and simply-defined variables.',
        },
        {
          id: 5,
          title: 'POSTER MAKING',
          description:
            'The objective behind organisation of poster making competition is to bring out the creative expression  of students and to gauge their knowledge and awareness of various trends in Commerce & Management. The aim of the Poster Making Competition is not just to judge the students based ontheir creative aspects but also to trigger thought process among the students towards recent trends in the field of Commerce & Management.',
        },
        {
          id: 6,
          title: 'TREASURE HUNT',
          description:
            'Treasure hunt, the idea of hunting for hidden treasures has always been exciting and adventurous. In treasure hunt, participants work in small teams to find the treasure with the help of given clues. The team who decodes the clue and finds the treasure first will win the game..',
        },
        {
          id: 7,
          title: 'BUSINESS IDEAS',
          description:
            'This is the description of event 7. A business idea is a concept that can be used for financial gain that is usually centered on a product or service that can be offered for money. An idea is the first milestone in the process of building a successful business. The characteristics of a promising business idea are: Innovative. Unique',
        },
        {
        id: 8,
        title: 'HackAthaon4.0',
        description:
          'These are competitions where passionate professionals, experts, or tech-savvy students come together to find a unique solution to a problem. And believe it or not, hackathons have led to miracles! Many web applications and startups are a result of hackathons.',
      },
        
      ];
  return (
    <div>
      <>
      <a href='http://localhost:3001/' >
         <i style={{
        backgroundColor:'#102c60',
        color:'white',
        padding:'20px',
        fontSize:'25px',
        textAlign:'center',
        borderRadius:'100%',
        margin:'0',
        position:'absolute',
        top:'17%',
        right:'2%'
         }} class="fa-solid fa-plus" ></i></a>
     
     
      <div className="cards">
      {eventData.map((event) => (
        <EventCard
          key={event.id}
          id={event.id}
          imageSrc={event.imageSrc}
          title={event.title}
          description={event.description}
        />
      ))}
      </div>
      </>
    </div>
  )
}

export default ViewEvent
