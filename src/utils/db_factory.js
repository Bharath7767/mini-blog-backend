
const getAllRecords = async(Model) =>{
    try {
        const records = await Model.findAll()
        return records
    } catch (err) {
        console.log(`Error while fetching all records:${err}`)
        return false;
    }
}

const getRecordById = async(Model,id) => {
    try {
        const record = await Model.findOne(id);
        return record;
    } catch (err) {
        console.log(`Error while record by id :${err}`)
        return false;
    }
}

const createRecord = async(Model,data) => {
    try {
        const record = await Model.createRecord(data);
        return record;
    } catch (err) {
        console.log(`Error while creating record:${err}`)
        return false;
    }
}

const updateRecord = async(Model,id,data) => {
    try {
        const record = await Model.updateRecord(id,data);
        return record;
    } catch (err) {
        console.log(`Error while updating record:${err}`)
        return false;
    }
}

const deleteRecord = async(Model,id,data) => {
    try {
        const record = await Model.deleteRecord(id,data);
        return record;
    } catch (error) {
        console.log(`Error while deleting record:${error}`)
    }
}

module.exports = {
    getAllRecords,
    getRecordById,
    createRecord,
    updateRecord,
    deleteRecord,
}