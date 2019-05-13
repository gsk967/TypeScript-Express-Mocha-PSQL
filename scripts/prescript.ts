import {pool} from '../src/utils/psql';
import {QueryResult} from "pg";


(async () => {
    const booksTable: string = `
    CREATE EXTENSION IF NOT EXISTS "pgcrypto";
    
    CREATE TABLE IF NOT EXISTS books (
        id uuid DEFAULT public.gen_random_uuid() NOT NULL,
        register_id character varying(255) NOT NULL,
        name character varying(255) NOT NULL,
        author_name character varying(255) NOT NULL,
        description text NOT NULL,
        created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
        deleted_at timestamp with time zone,
        updated_at timestamp with time zone
    )`;


    await pool.query(booksTable, (err: Error, result: QueryResult) => {
        if (err) {
            console.log('[+] Error occurred while creating the books table.')
        } else {
            console.log("[+] books table created.");
            pool.query(`
            INSERT INTO books (register_id,name,author_name,description) values ('12312312312','Thomas Calculus','George B. Thomas','Thomas Calculus Early Transcendentals Media Upgrade, Eleventh Edition, responds to the needs of todays readers by developing their conceptual understanding while strengthening their skills in algebra and trigonometry, two areas of knowledge vital to the mastery of calculus'),
             ('12312312313','Calculus Early Transcendentals Edwin Purcell','Dale Varberg, Edwin Purcell, and Steven E. Rigdon','Clear and Concise. Varberg focuses on the most critical concepts. This popular calculus text remains the shortest mainstream calculus book available — yet covers all relevant material needed by, and appropriate to, the study of calculus at this level.'),
             ('12312312314','Calculus: Pearson New International Edition Edwin Purcell','Dale Varberg, Edwin Purcell, and Steven E. Rigdon','For freshman/sophomore-level courses treating calculus of both one and several variables. Clear and Concise! Varberg focuses on the most critical concepts freeing you to teach the way you want!');
             `,
                (err: Error, result: QueryResult) => {
                    if (err) {
                        console.log('[+] Error occurred while adding default data into books table.', err)
                    } else {
                        console.log("[+] default data inserted into books table.")
                    }
                });
        }
    });
})();
