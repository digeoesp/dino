import Post from './Post'

function App() {
  let comments=['first', 'great post', 'hire this author']
  return (
    <div >
      <Post title="Dinosaurs are awesome" author="Stealthy Stegosaurus" body="Check out this body property!" comments="comment[0]"/>
     <h1>hello</h1>
    </div>
  );
}

export default App;
