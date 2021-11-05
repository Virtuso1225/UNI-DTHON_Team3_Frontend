import React, { useState, createContext } from 'react';

const ListContext = createContext({
  purchaseList: [
    { id: 0, title: '김치볶음밥', subtitle: '매콤달콤' },
    { id: 1, title: '소세지야채볶음', subtitle: '추억의 그 맛' },
  ],
  totalNum: 2,
  setPurchaseList: () => {},
  setTotalNum: () => {},
});

const ListProvider = ({ children }) => {
  const [purchaseList, setPurchaseList] = useState();
  const [totalNum, setTotalNum] = useState();
  const value = {
    purchaseList,
    setPurchaseList,
    totalNum,
    setTotalNum,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export { ListContext, ListProvider };
