import { View, Text , Dimensions} from 'react-native'
import React from 'react'
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";


const ChartKit = () => {

const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 3, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false // optional
};

    
 const data = {
//   labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
      color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
    //   strokeWidth: 2 // optional
    }
  ],
//   legend: ["Rainy Days"] // optional
};   
    
const screenWidth = Dimensions.get("window").width;


  return (
  <View>
  <Text>Bezier Line Chart</Text>
  
<LineChart
  data={data}
  width={200}
  height={50}
  verticalLabelRotation={30}
  chartConfig={chartConfig}             
  bezier
 withVerticalLabels={false}
 withHorizontalLines={false}
 withHorizontalLabels={false}
 withVerticalLines={false}  
 withDots={false}
 withShadow={false}                
/>
          

</View>
  )
}

export default ChartKit