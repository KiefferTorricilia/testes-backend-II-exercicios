import { UserBusiness } from "../../src/business/UserBusiness"
import { DeleteUserSchema } from "../../src/dtos/user/deleteUser.dto"
import { GetUsersSchema } from "../../src/dtos/user/getUsers.dto"
import { LoginSchema } from "../../src/dtos/user/login.dto"
import { USER_ROLES } from "../../src/models/User"
import { HashManagerMock } from "../mocks/HashManagerMock"
import { IdGeneratorMock } from "../mocks/IdGeneratorMock"
import { TokenManagerMock } from "../mocks/TokenManagerMock"
import { UserDatabaseMock } from "../mocks/UserDatabaseMock"

describe("Testando deleteUserById", () => {
  const userBusiness = new UserBusiness(
    new UserDatabaseMock(),
    new IdGeneratorMock(),
    new TokenManagerMock(),
    new HashManagerMock()
)

    test("Deve retornar um usuário", async () => {
        const input = {
            id: "id-mock-astrodev",
            token: "token-mock-astrodev"
        }

        const output = await userBusiness.getUserById(input)

        expect(output).toEqual({
            id: "id-mock-astrodev",
            name: "Astrodev",
            email: "astrodev@email.com",
            createdAt: expect.any(String),
            role: USER_ROLES.ADMIN
        })

    })
})