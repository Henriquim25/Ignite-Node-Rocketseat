import { hash } from "bcrypt";
import { dataSource } from "../../../../data-source";
import { v4 as uuid } from "uuid";

async function create() {
  const connection = await dataSource.initialize();
  const id = uuid();
  const password = await hash("admin", 8);

  connection.query(`
    INSERT INTO USERS(id,name,email,password,"isAdmin",created_at,driver_license)
    values ('${id}','admin','admin@admin.com.br','${password}',true,'now()','XXXXX')
    `);

}

create().then(() => console.log("admin has been created"));
