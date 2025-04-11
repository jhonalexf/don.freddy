fimport os
from flask import Flask, render_template, request, redirect, flash, url_for
from flask_mail import Mail, Message

app = Flask(
    __name__,
    template_folder=os.path.join(os.path.dirname(__file__), '..', 'templates'),
    static_folder=os.path.join(os.path.dirname(__file__), '..', 'static')
)


app.secret_key = 'clave-secreta-123'

# Configuración del correo
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = 'jhonalexliga12@gmail.com'
app.config['MAIL_PASSWORD'] = 'opalxluspdfuinqg'
app.config['MAIL_DEFAULT_SENDER'] = 'jhonalexliga12@gmail.com'

mail = Mail(app)

@app.route('/')
def index():
    return render_template('index.html', nombre_cafeteria="Don Freddy")

@app.route('/conocenos')
def conocenos():
    return render_template('conocenos.html', nombre_cafeteria='Don Freddy')

@app.route('/productos')
def productos():
    info_menu = {
        1: {
            "nombre": "Concha negra",
            "precio": 14.99,
            "descripcion": "Concha negra ideal para un ceviche ",
            "imagen": "concha.png"
        },
        2: {
            "nombre": "Camarón",
            "precio": 2.99,
            "descripcion": "Camarón fresco y delicioso",
            "imagen": "camaron.png"
        },
    }
    return render_template('productos.html', nombre_cafeteria="Don Freddy", info_menu=info_menu)

@app.route('/contact', methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
        nombre = request.form['nombre']
        email = request.form['email']
        mensaje = request.form['mensaje']

        cuerpo = f"""
        Nombre: {nombre}
        Correo: {email}
        Mensaje:
        {mensaje}
        """

        msg = Message("Nuevo mensaje de contacto", recipients=['jhonalexliga12@gmail.com'])
        msg.body = cuerpo

        try:
            mail.send(msg)
            flash('✅ ¡Mensaje enviado con éxito!', 'success')
        except Exception as e:
            print(f"Error al enviar el mensaje: {e}")
            flash('❌ Hubo un error al enviar el mensaje. Intenta más tarde.', 'error')

        return redirect('/contact')

    return render_template('contact.html', nombre_cafeteria="Don Freddy")
