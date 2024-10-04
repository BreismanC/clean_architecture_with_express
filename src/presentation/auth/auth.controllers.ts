import { Request, Response } from "express";
import { UserRegisterDto } from "../../domain";

export class AuthController {
  constructor() {}

  //*Express no recomienda hacer los controladores de ruta asincronos
  loginUser = (req: Request, res: Response) => {
    res.json("Login user successfully");
  };

  registerUser = (req: Request, res: Response) => {
    const [error, userRegisterDto] = UserRegisterDto.create(req.body);

    if (error) return res.status(400).json({ error });

    return res.json(userRegisterDto);
  };
}
