export const state = () => ({
  contacts: [],
  errors: null,
})

export const mutations = {
  SET_CONTACTS(state, contacts) {
    state.contacts = contacts
  },
}

export const actions = {
  setContacts({ commit }, payload) {
    commit('SET_CONTACTS', payload)
  },

  async getContacts({ commit }) {
    const contacts = await this.$axios.$get(`/contacts/`)
    commit('SET_CONTACTS', contacts)
  },

  async createContact({ commit }, { formData, config }) {
    await this.$axios.$post(`/contacts/`, formData, config)
    const contacts = await this.$axios.$get(`/contacts/`)
    commit('SET_CONTACTS', contacts)
  },

  async deleteContact({ commit }, contactId) {
    await this.$axios.$delete(`/contacts/${contactId}/`)
    const contacts = await this.$axios.$get(`/contacts/`)
    commit('SET_CONTACTS', contacts)
  },

  async updateContact({ commit }, { id, formData, config }) {
    await this.$axios.$patch(`/contacts/${id}/`, formData, config)
    const contacts = await this.$axios.$get(`/contacts/`)
    commit('SET_CONTACTS', contacts)
  },
}

export const getters = {
  contacts: (state) => {
    return state.contacts
  },
}
