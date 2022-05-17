const mongoose = require('mongoose')

const LGidSchema = mongoose.Schema(
    {
        myID:{
            type: String
        }
    }
  );

 

  //exporting our schema
  const LGid = mongoose.model('LGid', LGidSchema);
  module.exports = LGid;