import {Router} from "express";

const router = Router()

router.use('/whoami', (req,res) => {
  const ip = req.ip
  const language = req.get('Accept-Language')
  const software = req.get('User-Agent')

  res.json({
    ipaddress: ip,
    language,
    software
  })
})

export default router
