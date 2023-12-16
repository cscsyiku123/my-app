import {persist} from 'zustand/middleware'
import create from 'zustand'

class User {
    userId: number;
    userName: string;
    avatarImageLink: string;

    constructor(userId: number, userName: string, avatarImageLink: string) {
        this.userId = userId;
        this.userName = userName;
        this.avatarImageLink = avatarImageLink;
    }
}

interface UserState {
    user: User | null;
    setUser: (user: User) => void
}

const useUserStore = create<UserState>()(
    // devtools(
    persist(
        (set, get) => ({
            user: null,
            setUser: (user) => set({user: get().user}),
        }),
        {
            name: 'user-storage',
        },
    ),
    // ),
)
