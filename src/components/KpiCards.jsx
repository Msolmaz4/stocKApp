import { Card, Metric, Text, Flex, ProgressBar, Grid } from "@tremor/react";
import { useSelector } from "react-redux";


export default function KpiCards() {
  const { sales, purchases } = useSelector((state) => state.stock);
  console.log(sales);
  const totalSales = sales?.reduce((acc, item) => acc + item.amount, 0);
  console.log(totalSales);
  const totalPurchases = purchases?.reduce((acc, item) => acc + item.amount, 0);

  const cash = totalSales - totalPurchases
  const categories = [
    {
      title: "Sales",
      metric: `€ ${totalSales}`,
      value: `${((totalSales/200000)*100).toFixed(2)}`,
      target: "€ 200,000",
      color: "indigo",
    },
    {
      title: "Cash",
      metric: `€ ${cash}`,
      value: `${((cash/100000)*100).toFixed(2)}`,
      target: "€ 100,000",
      color: "fuchsia",
    },
    {
      title: "Purchases",
      metric: `€ ${totalPurchases}`,
      value: `${((totalPurchases/100000)*100).toFixed(2)}`,
      target: "€ 100,000",
      color: "amber",
    },
  ];

  return (
    <Grid className="flex justify-center items-center flex-wrap gap-6 mt-3">
      {categories.map((item) => (
        <Card key={item.title} decoration="top" decorationColor={item.color} className="w-full flex-grow lg:w-5/12 2xl:w-[32%]">
          <Text>{item.title}</Text>
          <Metric>{item.metric}</Metric>
          <Flex className="mt-4">
            <Text className="truncate">{`${item.value}% (${item.metric})`}</Text>
            <Text>{item.target}</Text>
          </Flex>
          <ProgressBar color={item.color} value={item.value} className="mt-2" />
        </Card>
      ))}
    </Grid>
  );
}







