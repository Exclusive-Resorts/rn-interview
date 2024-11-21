import { createNativeStackNavigator } from "@react-navigation/native-stack";

/**
 * Problem 1:
 * 
 * We are building a feed of social media posts.
 * 
 * Use the JSON Placeholder API to fetch a list of posts and display them in a
 * scrollable list. Each item in the list should display the title and body of
 * the post.
 * 
 * JSON Placeholder API: https://jsonplaceholder.typicode.com/posts
 */

function FeedScreen() {
  return null;
}

const ProblemOneStack = createNativeStackNavigator({
  screens: {
    Feed: FeedScreen,
  },
  screenOptions: {
    headerShown: false,
  },
});

export default ProblemOneStack;