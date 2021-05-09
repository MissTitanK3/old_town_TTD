import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'

const peopleStore = (set) => ({
  people: ['John Doe', 'Jane Doe'],
  addPerson: (person) => set((state) => ({ people: [...state.people, person] }))
})

const settingStore = (set) => ({
  dark: false,
  toggleDark: () => set((state) => ({ dark: !state.dark }))
})
const WPDataStore = (set) => ({
  isfilteredData: false,
  setfilteredData: (newData) => set((state) => ({ isfiltered: newData })),
  someData: [],
  addData: (newData) => set((state) => ({ someData: newData })),
  filteredData: [],
  addFilteredData: (newData) => set((state) => ({ filteredData: newData })),
})
const WPEventStore = (set) => ({
  someData: [],
  addData: (newData) => set((state) => ({ someData: newData }))
})
const WPPostStore = (set) => ({
  someData: [],
  addData: (newData) => set((state) => ({ someData: newData }))
})

export const usePeopleStore = create(persist(devtools(peopleStore), { name: 'people_settings' }))
export const useSettingStore = create(persist(devtools(settingStore), { name: 'user_settings' }))
export const useWPDataStore = create(persist(devtools(WPDataStore), { name: 'wp_data' }))
export const useWPEventStore = create(persist(devtools(WPEventStore), { name: 'wp_event_data' }))
export const useWPPostStore = create(persist(devtools(WPPostStore), { name: 'wp_post_data' }))