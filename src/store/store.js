import { create } from 'zustand' // create로 zustand를 불러옵니다.

const useStore = create(set => ({
  energy: 50,
  money : 50,
  increaseMoney: (amount) => set(state => ({ bears: state.bears + amount })),
  decreaseMoney: (amount) => set(state => ({ bears: state.bears - amount })),
  increaseEnergy: (amount) => set(state => ({ energy: state.energy + amount})),
  decreaseEnergy: (amount) => set(state => ({ energy: state.energy - amount})),
}))

export default useStore