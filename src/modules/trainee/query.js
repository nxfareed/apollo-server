import {
  UserInputError
} from 'apollo-server';

export default {
  getTrainee: async (parent, args, context) => {
    const {
      dataSources: {
        traineeApi
      },
    } = context;
    const response = await traineeApi.getTrainee(args);
    return response.data;
  },
};
