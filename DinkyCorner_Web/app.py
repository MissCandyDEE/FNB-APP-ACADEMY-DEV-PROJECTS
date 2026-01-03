from flask import Flask, render_template, request, session, jsonify

app = Flask(__name__)
app.secret_key = 'dinky_secret_key' # This keeps the cart "remembered"

# Business Logic: Prices and Locations
SERVICES = {
    'studio': {'name': 'In-Studio Pedicure', 'price': 250},
    'house_call': {'name': 'House Call Spa (Strand/SW/GB)', 'price': 400}
}

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/spa')
def spa():
    return render_template('spa.html')

@app.route('/add_to_cart', methods=['POST'])
def add_to_cart():
    service_id = request.json.get('service_id')
    
    if 'cart' not in session:
        session['cart'] = []
    
    if service_id in SERVICES:
        session['cart'].append(SERVICES[service_id])
        session.modified = True 
        
    total = sum(item['price'] for item in session['cart'])
    return jsonify({'cart_count': len(session['cart']), 'total': total})

if __name__ == '__main__':
    app.run(debug=True)