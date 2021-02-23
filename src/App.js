import Post from './Post'

function App() {
  
  return (
    <div >
      <Post title="Dinosaurs are awesome" author="Stealthy Stegosaurus" body="Check out this body property!" comments= {['First!', 'Great post', 'Hire this author now!']}/>
     
    </div>
  );
}

export default App;
