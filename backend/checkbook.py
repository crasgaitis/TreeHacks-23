import requests

# Define the endpoint and request parameters
def create_invoice(account, amount, attachment, name, number, recipient):
    url = "https://www.checkbook.io/v3/invoice"
    payload = {
    "account": account,
    "amount": amount,
    "attachment": attachment,
    "description": "Test Invoice",
    "name": name,
    "number": number,
    "recipient": recipient,
    }
    # payload = {
    # "account": "string",
    # "amount": 5,
    # "attachment": "string",
    # "description": "Test Invoice",
    # "name": "Widgets Inc.",
    # "number": "string",
    # "recipient": "testing@checkbook.io"
    # }
    headers = {
        "accept": "application/json",
        "content-type": "application/json"
    }

    response = requests.post(url, json=payload, headers=headers)

    print(response.text)
    return response

    # api_key = '2588bb495b1ea278adbd0929061b541d'  # Replace with your Checkbook API key
    # endpoint = 'https://api.checkbook.io/v3/invoices'
    # # Extract data from the request
    # data = request.get_json()
    # amount = data.get('amount')
    # recipient = data.get('recipient')
    # email = data.get('email')
    # description = data.get('description')
    # # Create the request data
    # request_data = {
    #     'recipient': recipient,
    #     'amount': amount,
    #     'email': email,
    #     'description': description
    # }
    # # Make the API call
    # headers = {
    #     'Content-Type': 'application/json',
    #     'Authorization': api_key
    # }
    # response = request.post(endpoint, headers=headers, json=request_data)
    # # Check the response status code
    # if response.status_code == 200:
    #     return jsonify({'success': True})
    # else:
    #     return jsonify({'success': False, 'error': response.text}), 400
    
    
    # endpoint = 'https://api.checkbook.io/v3/checks'
    # headers = {
    #     'Content-Type': 'application/json',
    #     'Authorization': 'YOUR_API_KEY'
    # }
    # # will want to customize this to our needs
    # data = {
    #     'recipient': 'John Doe',
    #     'amount': 100.0,
    #     'description': 'Payment for services',
    #     'email': 'john.doe@example.com'
    # }

    # # Make the API call
    # response = requests.post(endpoint, headers=headers, json=data)

    # # Check the response status code
    # if response.status_code == 200:
    #     print('API call successful')
    # else:
    #     print(f'API call failed with status code {response.status_code}')


def digital_payment(recipient, name, amount, description):
    #might want to get this stuff from the database in the future instead idk
    url = "https://www.checkbook.io/v3/check/digital"
    payload = {
        "recipient": recipient,
        "name": name,
        "amount": amount,
        "description": f"{description} payment"
    }
    # this authorization isnt working oops
    headers = {
        "accept": "application/json",
        "content-type": "application/json",
        "Authorization": "2588bb495b1ea278adbd0929061b541d"
    }


    response = requests.post(url, json=payload, headers=headers)

    print(response.text)