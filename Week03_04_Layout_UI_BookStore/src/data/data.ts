export interface Book {
  id: string;
  title: string;
  author: string;
  price: number;
  cover: string;
  discount?: number;
  isNew?: boolean;
}

export const books: Book[] = [
  { id: "1", title: "Đắc Nhân Tâm", author: "Dale Carnegie", price: 86000, cover: "https://picsum.photos/seed/b1/300/400", discount: 20 },
  { id: "2", title: "Nhà Giả Kim - Hành trình đi tìm kho báu của chàng chăn cừu", author: "Paulo Coelho", price: 79000, cover: "https://picsum.photos/seed/b2/300/400", isNew: true },
  { id: "3", title: "Dế Mèn Phiêu Lưu Ký", author: "Tô Hoài", price: 55000, cover: "https://picsum.photos/seed/b3/300/400" },
  { id: "4", title: "Sapiens: Lược sử loài người", author: "Yuval Noah Harari", price: 189000, cover: "https://picsum.photos/seed/b4/300/400", discount: 10 },
  { id: "5", title: "Clean Code", author: "Robert C. Martin", price: 350000, cover: "https://picsum.photos/seed/b5/300/400", isNew: true },
  { id: "6", title: "Doraemon Tập 1", author: "Fujiko F. Fujio", price: 22000, cover: "https://picsum.photos/seed/b6/300/400" },
];

export const categories: string[] = [
  "Văn học", "Kinh tế", "Thiếu nhi", "Kỹ năng sống", "Truyện tranh", "Khoa học", "Công nghệ", "Ngoại ngữ",
];

export const cartItems = [
  { id: "1", title: "Đắc Nhân Tâm", qty: 1, price: 86000, cover: "https://picsum.photos/seed/b1/200/300" },
  { id: "2", title: "Nhà Giả Kim", qty: 2, price: 79000, cover: "https://picsum.photos/seed/b2/200/300" },
  { id: "5", title: "Clean Code - Robert C. Martin", qty: 1, price: 350000, cover: "https://picsum.photos/seed/b5/200/300" },
];

export const formatPrice = (n: number): string => n.toLocaleString("vi-VN") + "đ";
