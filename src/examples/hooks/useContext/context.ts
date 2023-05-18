import { createContext } from "react";

// 这里定义类型时，可以使用逗号分隔也可以使用分号分隔，根据个人使用习惯，团队规范决定，
// 推荐使用分号分隔，用来区分 => 定义对象
export type User = {
    name: string;
    email: string;
};

export type TestStore = {
    layout: string;
    value: boolean;
}

type TestStoreContextValue = {
    testStore: TestStore | null;
}

type UserContextValue = {
    user: User | null;
    // 在 TypeScript 中，void 表示没有返回值的函数。如果一个函数不返回任何值，则可以将其返回类型标记为 void
    setUser: (user: User | null) => void; // 提供set方法，是为了共享修改状态的方法
};
// 这里<UserContextValue>是createContext的一种范型
export const UserContext = createContext<UserContextValue>({
    user: null,
    setUser: () => {},
});

export const TestStoreContext = createContext<TestStoreContextValue>({
    testStore: null,
});