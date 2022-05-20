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
<<<<<<< HEAD
  module.exports = LGid;
=======
  module.exports = LGid;
>>>>>>> ac4948c751d4a80d42d48c4f50cc623e178c18b4
