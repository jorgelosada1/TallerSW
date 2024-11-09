import sqlite3

def init_db():
    conn = sqlite3.connect('database.db')  # Crea un archivo llamado database.db
    cursor = conn.cursor()
    # Crea la tabla con los campos nombre y código
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS items (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nombre TEXT NOT NULL,
            codigo TEXT NOT NULL
        )
    ''')
    conn.commit()
    conn.close()

if __name__ == "__main__":
    init_db()
    print("Base de datos creada y tabla items inicializada.")
