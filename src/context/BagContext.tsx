import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';

interface BagContextProps {
  items: any[];
  addItem: (item: any) => void;
  removeItem: (id: string) => void;
  clearBag: () => void;
}

const BagContext = createContext<BagContextProps | undefined>(undefined);

export const BagProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [items, setItems] = useState<any[]>([]);

  const addItem = (item: any) => {
    setItems((prevItems) => {
      const updatedItems = [...prevItems, item];
      localStorage.setItem('bagItems', JSON.stringify(updatedItems));
      return updatedItems;
    });
  };

  // Initialize items from localStorage on component mount
  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('bagItems') || '[]');
    setItems(storedItems);
  }, []);

  const removeItem = (id: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const clearBag = () => {
    setItems([]);
  };

  return (
    <BagContext.Provider value={{ items, addItem, removeItem, clearBag }}>
      {children}
    </BagContext.Provider>
  );
};

export const useBag = (): BagContextProps => {
  const context = useContext(BagContext);
  if (!context) {
    throw new Error('useBag must be used within a BagProvider');
  }
  return context;
};
