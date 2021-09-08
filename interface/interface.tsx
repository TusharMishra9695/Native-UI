import { StackNavigationProp } from "@react-navigation/stack";
export interface Data {
    data: string;
    value: boolean;
  }
  export type DetailScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;
  export type Props = {
    navigation: DetailScreenNavigationProp;
  };
  export type RootStackParamList = {
    Home: undefined, // undefined because you aren't passing any params to the home screen
    Details: { name: string }; 
  };