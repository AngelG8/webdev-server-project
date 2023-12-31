import tuitsModel from './tuits-model.js';
export const findTuits = () => tuitsModel.find();
export const createTuit = (tuit) => tuitsModel.create(tuit);
export const deleteTuit = (tid) => tuitsModel.deleteOne({ _id: tid });
export const updateTuit = (tid, tuit) => tuitsModel.updateOne({ _id: tid }, { $set: tuit });
export const findTuitsByAuthorId = (author) => tuitsModel.find({ author });
export const searchTuits = (query) => {
    return tuitsModel
        .find({ $text: { $search: query } }, { score: { $meta: 'textScore' } })
        .sort({ score: { $meta: 'textScore' } })
        .limit(10)
        .exec();
};
