import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    await knex("courses").insert([
        { name: "CSS" },
        { name: "HTML" },
        { name: "NodeJS" },
        { name: "TypeScript" },
        { name: "Git" },
        { name: "Github" },
        { name: "React" },
        { name: "Next.JS" },
        { name: "Banco de Dados" },
        { name: "Angular" }
    ]);
};
