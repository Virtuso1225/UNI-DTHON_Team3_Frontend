import React, { useState, createContext } from 'react';

const ListContext = createContext({
  menuList: [
    { id: 0, title: '김치볶음밥', subTitle: '매콤달콤' },
    { id: 1, title: '소세지야채볶음', subTitle: '추억의 그 맛' },
    { id: 2, title: '김치볶음밥', subTitle: '매콤달콤' },
    { id: 3, title: '소세지야채볶음', subTitle: '추억의 그 맛' },
    { id: 4, title: '김치볶음밥', subTitle: '매콤달콤' },
    { id: 5, title: '소세지야채볶음', subTitle: '추억의 그 맛' },
    { id: 6, title: '김치볶음밥', subTitle: '매콤달콤' },
    { id: 7, title: '소세지야채볶음', subTitle: '추억의 그 맛' },
  ],

  setMenuList: () => {},
  purchaseList: [],
  totalNum: 0,
  setPurchaseList: () => {},
  setTotalNum: () => {},
});

const ListProvider = ({ children }) => {
  const [menuList, setMenuList] = useState([]);
  const [purchaseList, setPurchaseList] = useState([]);
  const [totalNum, setTotalNum] = useState(0);
  const value = {
    menuList,
    setMenuList,
    purchaseList,
    setPurchaseList,
    totalNum,
    setTotalNum,
  };
  return <ListContext.Provider value={value}>{children}</ListContext.Provider>;
};

export { ListContext, ListProvider };
