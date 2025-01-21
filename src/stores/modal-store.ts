import { create } from 'zustand'

type States = {
	isTripDetailsActive: boolean
}

type Actions = {
	setIsTripDetailsActive: () => void
}

type ModalStore = States & Actions

const modalStore = create<ModalStore>(set => {})

export default modalStore
