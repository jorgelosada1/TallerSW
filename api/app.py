from flask import Flask, request, jsonify
from flask_cors import CORS 
import sqlite3

app = Flask(__name__)
CORS(app) 
DATABASE = 'database.db'

def get_db_connection():
    conn = sqlite3.connect(DATABASE)
    conn.row_factory = sqlite3.Row
    return conn

@app.route('/')
def index():
    return jsonify({'message': 'Bienvenido a la API de Items!'})

@app.route('/api/items', methods=['POST'])
def add_item():
    data = request.get_json()
    nombre = data.get('nombre')
    codigo = data.get('codigo')

    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute('INSERT INTO items (nombre, codigo) VALUES (?, ?)', (nombre, codigo))
    conn.commit()
    conn.close()

    return jsonify({'message': 'Item agregado exitosamente!'}), 201

@app.route('/api/items', methods=['GET'])
def get_items():
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM items')
    items = cursor.fetchall()
    conn.close()

    return jsonify([dict(item) for item in items])

if __name__ == '__main__':
    app.run(debug=True)
