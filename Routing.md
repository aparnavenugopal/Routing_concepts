Please follow the official reactrouter document from react community.
https://reactrouter.com/en/main/start/concepts

1.Main concepts:
A.React Router isn't just about matching a url to a function or component: it's about building a full user interface that maps to the URL, so it might have more concepts in it than you're used to. We'll go into detail on the three main jobs of React Router:

   1.Subscribing and manipulating the history stack
   2.Matching the URL to your routes
   3.Rendering a nested UI from the route matches


a.History object in react routing:
A.Apps don't need to set up their own history objects--that's the job of <Router>. It sets up one of these objects, subscribe to changes in the history stack, and finally updates its state when the URL changes. This causes the app to re-render and the correct UI to display. The only thing it needs to put on state is a location, everything else works from that single object.

b.Locations in react routing:
A.  1.The browser has a location object on window.location. It tells   you information about the URL but also has some methods to change it:
  window.location.pathname; // /getting-started/concepts/
  window.location.hash; // #location
  window.location.reload(); // force a refresh w/ the server
  // and a lot more


2.Instead of using window.location, React Router has the concept of a location that's patterned after window.location but is much simpler. It looks like this:
  {
  pathname: "/bbq/pig-pickins",
  search: "?campaign=instagram",
  hash: "#menu",
  state: null,
  key: "aefz24ie"
  }

  The first 3 are js specific and last 2 are react specific.

 