import { NavigationContainer } from '@react-navigation/stack';
import { createStackNavigator } from '@react-navigation/native';

const AppStack = createStackNavigator();
import Incidents from './pages/Incidents';
import Detail from './pages/Detail';
export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigation>
                <AppStack.Screen componet={Incidents} />
                <AppStack.Screen componet={Detail} />
            </AppStack.Navigation>
        </NavigationContainer>
    );
}