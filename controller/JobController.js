exports.merojobscontrol = 
  async (request, response, next => {


    response.status(200).json({ 
        success: true,
        message:[QA, Developer, Engineer]
    })


  }
  )


exports.jobsnepalcontrol = 
async (request, response, next => {
        response.status(200).json({ 
            success: true,
            message:[QA, Doctor, Engineer]
        })
    }
    )
  