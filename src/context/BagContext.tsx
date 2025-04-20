import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';
import { ShoppingBagItem } from '../domain/projec';

interface BagContextProps {
  items: ShoppingBagItem[];
  addItem: (item: ShoppingBagItem) => void;
  removeItem: (id: string) => void;
  clearBag: () => void;
}

export const BagContext = createContext<BagContextProps | undefined>(undefined);

export const BagProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [items, setItems] = useState<ShoppingBagItem[]>([]);

  const addItem = (item: ShoppingBagItem) => {
    setItems((prevItems) => [...prevItems, item]);
    localStorage.setItem('bagItems', JSON.stringify([...items, item]));
  };

  // Initialize items from localStorage on component mount
  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('bagItems') || '[]');
    setItems(storedItems);
  }, []);

  const removeItem = (id: string) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
    localStorage.setItem('bagItems', JSON.stringify(updatedItems));
  };

  const clearBag = () => {
    setItems([]);
    localStorage.removeItem('bagItems');
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
