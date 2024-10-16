import mysql.connector


cursor.execute('''create view as name
                  select ------
                  from  ------
                  ''')

cursor.execute('''create view as example
                select volunteers.volunteers_id, report.report_id
                from volunteers,report
                join report on volunteers.volunteer_id=report.volunteer_id''')