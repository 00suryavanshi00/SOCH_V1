class ApiFeatures{
    constructor(query,queryStr){
        this.query = query;
        this.queryStr = queryStr;
    }

    search(){
        let keyword = this.queryStr.keyword ? {
            name : {
                $regex:this.queryStr.keyword,
                $options:"i" //this means case insensitive
            }
        } : {}

        this.query = this.query.find({...keyword})
        return this;
    }

}


module.exports = ApiFeatures;