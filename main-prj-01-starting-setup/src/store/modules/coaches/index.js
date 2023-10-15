import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  namespaced: true,
  state() {
    return {
      lastFetch: null,
      coaches: [
        {
          id: 'c1',
          firstName: 'Maximilian',
          lastName: 'Schwarzmüller',
          areas: ['frontend', 'backend', 'career'],
          description:
            "I'm Maximilian and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
          hourlyRate: 30,
        },
        {
          id: 'c2',
          firstName: 'Julie',
          lastName: 'Jones',
          areas: ['frontend', 'career'],
          description:
            'I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
          hourlyRate: 30,
        },
        // {
        //   id: 'c3',
        //   firstName: 'Huseyin',
        //   lastName: 'Akbas',
        //   areas: ['frontend', 'design'],
        //   description:
        //     'I am Huseyin, a senior developer in a tech company. I can help you with your first job or progress in your current role. Specializing in frontend development and design.',
        //   hourlyRate: 37,
        // },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
