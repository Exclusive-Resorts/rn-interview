import { StaticScreenProps } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text } from "react-native";

/**
 * Problem 2:
 * 
 * Building on our feed, we want to give users the ability to see more
 * details about a post. When the user taps on a post, they should be 
 * taken to a screen which shows the title and body of the post, as well
 * as the user's name and email, and the comments for the post.
 * 
 * The user should be able to navigate back to the feed from the post screen.
 * 
 * You can re-use the FeedScreen component from Problem 1.
 * 
 * JSON Placeholder API: 
 *  https://jsonplaceholder.typicode.com/posts
 *  https://jsonplaceholder.typicode.com/users
 *  https://jsonplaceholder.typicode.com/posts/1/comments
 */

function FeedScreen() {
  return null;
}

type PostScreenProps = StaticScreenProps<{
  postId: number;
}>

function PostScreen({ route }: PostScreenProps) {
  const { postId } = route.params;

  return (
    <Text>{postId}</Text>
  );
}

const ProblemTwoStack = createNativeStackNavigator({
  screens: {
    Feed: FeedScreen,
    Post: PostScreen,
  },
  screenOptions: {
    headerShown: false,
  },
});

export default ProblemTwoStack;