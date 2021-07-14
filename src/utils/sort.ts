import _ from "lodash";

const sortedOderValue = (list: any[], orderName: string, orders: boolean) => {
  const ordersValue = orders ? "asc" : "desc";
  return _(list)?.orderBy(orderName, ordersValue).value();
};

const sortUtil = { sortedOderValue };

export default sortUtil;
