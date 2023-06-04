import { reactive, watch } from "vue";

export interface Store {
    username: string | null;
}

const store = reactive<Store>({ username: localStorage.getItem("username") || null });

watch(() => store.username, (username) => {
    localStorage.setItem("username", username ?? "");
})

export function useStore(): Store {
    return store;
}