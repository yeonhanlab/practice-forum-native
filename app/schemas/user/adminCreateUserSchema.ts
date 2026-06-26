import { z } from "zod";
import { Role } from "@/types/user";
import { userSchema } from "@/app/schemas/user/userSchema";

export const adminCreateUserSchema = userSchema.extend({
    password: z.string().min(6, "비밀번호는 6자 이상이여야 합니다."),
    role: z.enum(Role, "권한을 선택해주세요"),
});

export type AdminCreateUserInputType = z.infer<typeof adminCreateUserSchema>;
