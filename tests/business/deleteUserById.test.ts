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

  test("Deve apagar um item da lista users", async () => {
    const input = DeleteUserSchema.parse({
        id: "id-mock-astrodev",
        token: "token-mock-astrodev"
    })

    const output = await userBusiness.deleteUser(input)

    expect(output).toEqual({
      message: "Usuário deletado."
    })
  })

})

