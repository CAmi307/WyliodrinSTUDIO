// DO NOT EDIT THIS FILE, IT IS AUTMATICALLY GENERATED

module.exports = function (blockly) {
	var Blockly = blockly.Blockly;
	// var goog = blockly.goog;

	Blockly.Python.import_urequests = function() {
		if (!Blockly.Python.definitions_['import_urequests']) {
			Blockly.Python.definitions_['import_urequests'] = 'import urequests\n';
		}
		var val_city= Blockly.Python.variableDB_.getDistinctName('val_city', Blockly.Generator.NAME_TYPE);
		Blockly.Python.val_city = val_city;
		// var val_country_code= Blockly.Python.variableDB_.getDistinctName('val_country_code', Blockly.Generator.NAME_TYPE);
		// Blockly.Python.val_country_code = val_country_code;
		var val_api_key= Blockly.Python.variableDB_.getDistinctName('val_api_key', Blockly.Generator.NAME_TYPE);
		Blockly.Python.val_api_key = val_api_key;
	};

	//Peripherals

	Blockly.Python.import_machine = function () {
		if (!Blockly.Python.definitions_['import_machine']) {
			Blockly.Python.definitions_['import_machine'] = 'import machine\n';
		}
	};

	Blockly.Python['analog_read_initialize'] = function(block) {
		Blockly.Python.import_machine();
		var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
		var pin_name = block.getFieldValue('pin_name').toString();

		var code = pin_name + ' = machine.ADC(' + value_pin + ')\n';
		return code;
	};

	Blockly.Python['analog_read_get_value'] = function(block) {
		var pin_name = block.getFieldValue('pin_name').toString();

		var code = pin_name + '.read_u16()';
		return [code, Blockly.Python.ORDER_NONE];
	};

	Blockly.Python['digital_read_initialize'] = function (block) {
		Blockly.Python.import_machine();
		var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
		var resistor_type = block.getFieldValue('resistor_type').toString().toUpperCase();
		var pin_name = block.getFieldValue('pin_name').toString();

		var code = pin_name + ' = machine.Pin(' + value_pin + ', machine.Pin.IN, machine.Pin.PULL_' + resistor_type + ')\n';
		return code;
	};

	Blockly.Python['digital_read_get_value'] = function(block) {
		var pin_name = block.getFieldValue('pin_name').toString();

		var code = pin_name + '.value()';
		return [code,Blockly.Python.ORDER_NONE];
	};

	Blockly.Python['digital_write'] = function (block) {
		Blockly.Python.import_machine();
		var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
		var value_mode = parseInt(block.getFieldValue('mode'));
		// TODO: Assemble Python into code variable.
		var code = 'machine.Pin('+ value_pin + ', machine.Pin.OUT, value=' + value_mode + ')\n';
		// TODO: Change ORDER_NONE to the correct strength.
		return code;
	};

	Blockly.Python['led_on'] = function () {
		Blockly.Python.import_machine();

		var code = 'machine.Pin("LED", machine.Pin.OUT, value=1)\n';

		return code;
	};

	Blockly.Python['led_off'] = function () {
		Blockly.Python.import_machine();

		var code = 'machine.Pin("LED", machine.Pin.OUT, value=0)\n';

		return code;
	};

	//Time

	Blockly.Python['wait'] = function (block) {
		Blockly.Python.import_time();
		var seconds_value = Blockly.Python.valueToCode(block, 'seconds', Blockly.Python.ORDER_ATOMIC);

		var code = 'time.sleep('+ seconds_value + ')\n';
		return code;
	};

	//Thermistor

	Blockly.Python.import_math = function() {
		if(!Blockly.Python.definitions_['import_math']) {
			Blockly.Python.definitions_['import_math'] = 'import math\n';
		}
	};

	Blockly.Python.get_thermistor_temperature = function() {
		if(!Blockly.Python.definitions_['get_temperature']) {
			var code = 'def getTemperature(sensor, type):\n\t';
			code += Blockly.Python.resistance + ' = ' + Blockly.Python.resistance_value + '\n\t';
			code += 'c1 = 1.009249522e-03\n\t';
			code += 'c2 = 2.378405444e-04\n\t';
			code += 'c3 = 2.019202697e-07\n\t';

			code += 'reading = sensor.read_u16()\n\t';
			code += 'R2 = ' + Blockly.Python.resistance + ' * (65535 / reading - 1.0)\n\t';
			code += 'logR2 = math.log(R2)\n\t';
			code += 'T = (1.0 / (c1 + c2*logR2 + c3*logR2*logR2*logR2))\n\t';
			code += 'Tc = T - 273.15\n\t';
			code += 'Tf = (Tc * 9.0)/ 5.0 + 32.0\n\t';
			code += 'if type == "c": \n\t\t';
			code += 'return Tc\n\t';
			code += 'else:\n\t\t';
			code += 'return Tf\n';

			Blockly.Python.definitions_['get_temperature'] = code;
		}
	};

	Blockly.Python['read_temperature_initialize'] = function (block) {
		Blockly.Python.import_machine();
		var pin_value = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);

		var thermistor_sensor = Blockly.Python.variableDB_.getDistinctName('thermistor_sensor',Blockly.Python.ORDER_ATOMIC);
		Blockly.Python.thermistor_sensor = thermistor_sensor;

		var resistance = Blockly.Python.variableDB_.getDistinctName('resistance', Blockly.Python.ORDER_ATOMIC);
		Blockly.Python.resistance = resistance;
		Blockly.Python.resistance_value = Blockly.Python.valueToCode(block, 'resistance', Blockly.Python.ORDER_ATOMIC);
	

		var code = Blockly.Python.thermistor_sensor + ' = machine.ADC(' + pin_value + ')\n';
		return code;
	};

	Blockly.Python['get_temperature'] = function (block) {
		var type = block.getFieldValue('degrees_type').toString();
		Blockly.Python.import_math();
		Blockly.Python.get_thermistor_temperature();

		var code = 'getTemperature(' + Blockly.Python.thermistor_sensor + ', "' + type + '")';

		return [code, Blockly.Python.ORDER_NONE];
	};

	//Servo

	Blockly.Python.get_duty = function() {
		if(!Blockly.Python.definitions_['get_duty']) {
			var code = 'def getDuty(degrees):\n\t';
			code += 'if degrees > 180: degrees=180\n\t';
			code += 'if degrees < 0: degrees=0\n\t';
			code += 'maxDuty=9000\n\t';
			code += 'minDuty=1000\n\t';
			code += 'newDuty=minDuty+(maxDuty-minDuty)*(degrees/180)\n\t';
			code += 'return int(newDuty)\n';

			Blockly.Python.definitions_['servo_method'] = code;
		}
	};
	
	Blockly.Python['initialize_servo'] = function (block) {
		Blockly.Python.import_machine();
		var pin_value = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);

		var servo_pin = Blockly.Python.variableDB_.getDistinctName('servo_pin',Blockly.Python.NAME_TYPE);
		Blockly.Python.servo_pin = servo_pin;

		var code = Blockly.Python.servo_pin + ' = machine.PWM(machine.Pin(' + pin_value + '))\n';
		code += Blockly.Python.servo_pin + '.freq(50)\n';

		return code;
	};
	
	Blockly.Python['initialize_servo_multiple'] = function (block) {
		Blockly.Python.import_machine();
		var pin_value = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
		var servo_name = block.getFieldValue('servo_name').toString();

		var code = servo_name + ' = machine.PWM(machine.Pin(' + pin_value + '))\n';
		code += servo_name + '.freq(50)\n';

		return code;
	};

	Blockly.Python['set_angle'] = function (block) {
		var angle_value = Blockly.Python.valueToCode(block, 'angle', Blockly.Python.ORDER_ATOMIC);
		Blockly.Python.get_duty();

		var code = Blockly.Python.servo_pin + '.duty_u16(getDuty(' + angle_value + '))\n';
		return code; 
	};

	Blockly.Python['set_angle_multiple'] = function (block) {
		var angle_value = block.getFieldValue('angle').toString();
		var servo_name = block.getFieldValue('servo_name').toString();
		Blockly.Python.get_duty();

		var code = servo_name + '.duty_u16(getDuty(' + angle_value + '))\n';
		return code; 
	};

	//Distance measurement

	Blockly.Python.compute_distance = function() {
		if(!Blockly.Python.definitions_['compute_distance']) {
			var code = 'def getDistance():\n\t';
			code += Blockly.Python.trigger_pin_name + '.low()\n\t';
			code += 'time.sleep_us(2)\n\t';
			code += Blockly.Python.trigger_pin_name + '.high()\n\t';
			code += 'time.sleep_us(5)\n\t';
			code += Blockly.Python.trigger_pin_name + '.low()\n\t';
			code += 'while ' + Blockly.Python.echo_pin_name + '.value() == 0:\n\t\t';
			code += 'signaloff = time.ticks_us()\n\t';
			code += 'while ' + Blockly.Python.echo_pin_name + '.value() == 1:\n\t\t';
			code += 'signalon = time.ticks_us()\n\t';
			code += 'timepassed = signalon - signaloff\n\t';
			code += 'distance = (timepassed * 0.0343) / 2\n\t';
			code += 'return distance\n';

			Blockly.Python.definitions_['compute_distance'] = code;
		}
	};

	Blockly.Python['distance_initialize'] = function(block) {
		Blockly.Python.import_machine();
		var trigger_pin_value = Blockly.Python.valueToCode(block, 'trigger_pin', Blockly.Python.ORDER_ATOMIC);
		var echo_pin = Blockly.Python.valueToCode(block, 'echo_pin', Blockly.Python.ORDER_ATOMIC);

		Blockly.Python.trigger_pin_name =  Blockly.Python.variableDB_.getDistinctName('trigger_pin', Blockly.Generator.NAME_TYPE);
		Blockly.Python.trigger_pin_value = trigger_pin_value;

		Blockly.Python.echo_pin_name = Blockly.Python.variableDB_.getDistinctName('echo_pin', Blockly.Generator.NAME_TYPE);
		Blockly.Python.echo_pin_value = echo_pin;

		var code = Blockly.Python.trigger_pin_name + ' = machine.Pin(' + Blockly.Python.trigger_pin_value + ', machine.Pin.OUT)\n';
		code += Blockly.Python.echo_pin_name + ' = machine.Pin(' + Blockly.Python.echo_pin_value + ', machine.Pin.IN)\n';

		return code;
	};

	// Blockly.Python['measure_distance'] = function() {
	// 	Blockly.Python.compute_distance();
	// 	Blockly.Python.distance = Blockly.Python.variableDB_.getDistinctName('distance', Blockly.Generator.NAME_TYPE);

	// 	var code = Blockly.Python.distance + ' = getDistance()\n'; 

	// 	return code; 
	// };

	Blockly.Python['get_distance'] = function(block) {
		Blockly.Python.compute_distance();
		var unit = block.getFieldValue('unit');

		var code = '';

		switch(unit){
			case 'mm':
				code = 'getDistance()*10';
				break;
			case 'cm':
				code = 'getDistance()';
				break;
		}

		return [code,Blockly.Python.ORDER_NONE];
	};
	
	//Weather

	Blockly.Python['open_weather_initialize'] = function (block) {
		Blockly.Python.import_urequests();
		Blockly.Python.import_json();
		// TODO: Assemble Python into code variable.
		Blockly.Python.val_city = block.getFieldValue('city_value').toString();
		// Blockly.Python.val_country_code = block.getFieldValue('country_code_value').toString();
		Blockly.Python.val_api_key = block.getFieldValue('api_key_value').toString();
		// TODO: Change ORDER_NONE to the correct strength.
		var code = 'URL = "https://api.openweathermap.org/data/2.5/weather?q=' + Blockly.Python.val_city + '&appid=' + Blockly.Python.val_api_key + '"\n';
		code += 'r = urequests.get(URL)\n';
		code += 'if r.status_code == 200:\n\t';
		code += 'data = r.json()\n\t';
		return code;
	};

	// Blockly.Python['open_weather_show_label'] = function (block) {
	// 	// TODO: Assemble Python into code variable.
	// 	var code = block.getFieldValue('type') + ' = ' + ' data' + Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_NONE) + '\n\t';
	// 	code += 'print(' + block.getFieldValue('type') + ')\n';
	// 	// TODO: Change ORDER_NONE to the correct strength.
	// 	return code;
	// };

	Blockly.Python['open_weather_get_data'] = function (block) {
		var type_value = block.getFieldValue('type');
		var code = 'data';

		switch(type_value){
			case 'temp':
				code += '[\'main\'][\'temp\']';
				break;
			case 'temp_feels':
				code += '[\'main\'][\'feels_like\']';
				break;
			case 'weather_desc': 
				code += '[\'weather\'][0][\'description\']';
				break;
			case 'weather_icon':
				code += '[\'weather\'][0][\'icon\']';
				break;
			case 'coord': 
				code += '[\'coord\']';
				break;
		}

		return [code, Blockly.Python.ORDER_NONE];
	};
	
	//WIFI

	Blockly.Python.import_time = function() {
		if (!Blockly.Python.definitions_['import_time']) {
			Blockly.Python.definitions_['import_time'] = 'import time\n';
		}
	};

	Blockly.Python.import_network = function () {
		if (!Blockly.Python.definitions_['import_network']) {
			Blockly.Python.definitions_['import_network'] = 'import network\n';
		}
	};

	Blockly.Python['connect_to_wifi'] = function (block) {
		Blockly.Python.import_network();
		Blockly.Python.import_time();
		var ssid_value = block.getFieldValue('ssid_value').toString();
		var password_value = block.getFieldValue('password_value').toString();
		// TODO: Assemble Python into code variable.
		var code = 'wlan = network.WLAN(network.STA_IF)\n';
		code += 'wlan.active(True)\n';
		code += 'wlan.connect(\'' + ssid_value + '\', \'' + password_value + '\')\n';
		code += '\n';
		code += 'while not wlan.isconnected() and wlan.status() >= 0:\n\t';
		code += 'print("Waiting to connect:")\n\t';
		code += 'time.sleep(1)\n\t';
		code += '\n';
		code += 'ip = wlan.ifconfig()\n';
		code += 'print(ip[0])\n';
		code += '\n';
		// TODO: Change ORDER_NONE to the correct strength.
		return code;
	};

	//Web communication

	Blockly.Python.import_socket = function () {
		if (!Blockly.Python.definitions_['import_socket']) {
			Blockly.Python.definitions_['import_socket'] = 'import socket\n';
		}
	};

	Blockly.Python['close_connection'] = function() {
		Blockly.Python.import_socket();

		var code = 'c1.close()\n';
		return code;
	};

	Blockly.Python['initialize_communication'] = function(block) {
		Blockly.Python.import_socket();

		var host_ip_value = block.getFieldValue('ip_value').toString();
		var port_value = block.getFieldValue('port_value').toString();
		// TODO: Assemble Python into code variable.
		var code = 'addr = socket.getaddrinfo(\'' + host_ip_value + '\',' + port_value + ')[0][-1]\n';
		code += 's = socket.socket()\n';
		code += 's.bind(addr)\n';
		code += 's.listen(1)\n';  //dc 1??? 
		code += 'print(\'listening on\', addr)\n';
		code += '\n';
		return code;
	};

	Blockly.Python['initialize_communication_simple'] = function(block) {
		Blockly.Python.import_socket();

		// TODO: Assemble Python into code variable.
		var code = 'addr = socket.getaddrinfo(\'0.0.0.0\', 80)[0][-1]\n';
		code += 's = socket.socket()\n';
		code += 's.bind(addr)\n';
		code += 's.listen(1)\n'; 
		code += 'print(\'listening on\', addr)\n';
		code += '\n';
		return code;
	};

	Blockly.Python['listen_for_connections'] = function(block) {
		Blockly.Python.import_socket();

		var do_statements = Blockly.Python.statementToCode(block, 'statements');
		var on_error_statements = Blockly.Python.statementToCode(block, 'onError');

		var do_function_name = Blockly.Python.variableDB_.getDistinctName('statements', Blockly.Generator.NAME_TYPE);
		var error_function_name = Blockly.Python.variableDB_.getDistinctName('onError', Blockly.Generator.NAME_TYPE);

		var code = 'def ' + do_function_name + '():\n' + do_statements + '\n';
		code += '\n';
		code += 'def ' + error_function_name + '():\n' + on_error_statements + '\n';
		code += '\n';

		code += 'while True:\n\t';
		code += 'try:\n\t\t';
		code += 'c1, addr = s.accept()\n\t\t';
		code += 'print(\'client connected from\', addr)\n\t\t';
		code += 'c1_request = c1.recv(1024)\n\t\t';
		code += 'try:\n\t\t\t';
		code += do_function_name + '()\n\t\t';
		code += 'except OSError as e:\n\t\t\t';
		code += error_function_name + '()\n\t';
		code += 'except OSError as e:\n\t\t';
		code += 'c1.close()\n\t\t';
		code += 'print(\'Connection closed\')\n';
		return code;
	};
	
	Blockly.Python['send_response'] = function(block) {
		Blockly.Python.import_socket();

		var status_code_value = block.getFieldValue('status_code_value').toString();
		var content_type_value = parseInt(block.getFieldValue('content_type_value'));
		var message_value = Blockly.Python.valueToCode(block, 'message_value', Blockly.Python.ORDER_ATOMIC);
		var status_message = '';

		if(content_type_value == 0) {
			content_type_value = 'text/plain';
		}else if (content_type_value == 1) {
			content_type_value = 'text/html';
		} else if (content_type_value == 2) {
			content_type_value = 'text/json';
		}

		if(status_code_value == 200) {
			status_message = 'OK';
		} else if(status_code_value == 404) {
			status_message = 'Not Found';
		} else if(status_code_value == 403) {
			status_message = 'Forbidden';
		}

		var code = 'c1.send(\'HTTP/1.0 ' + status_code_value + ' ' + status_message + '\\r\\nContent-type: ' + content_type_value + '\\r\\n\\r\\n\')\n';
		code += 'c1.send(' + message_value + ')\n';
		code += 'c1.close()\n';
		
		return code;
	};

	Blockly.Python['send_response_ok'] = function(block) {
		Blockly.Python.import_socket();

		var content_type_value = parseInt(block.getFieldValue('content_type_value'));
		var message_value = Blockly.Python.valueToCode(block, 'message_value', Blockly.Python.ORDER_ATOMIC);
		var status_message = 'OK';
		var status_code_value = 200;

		if(content_type_value == 0) {
			content_type_value = 'text/plain';
		}else if (content_type_value == 1) {
			content_type_value = 'text/html';
		} else if (content_type_value == 2) {
			content_type_value = 'text/json';
		}

		var code = 'c1.send(\'HTTP/1.0 ' + status_code_value + ' ' + status_message + '\\r\\nContent-type: ' + content_type_value + '\\r\\n\\r\\n\')\n';
		code += 'c1.send(' + message_value + ')\n';
		code += 'c1.close()\n';
		
		return code;
	};

	Blockly.Python['send_response_error'] = function(block) {
		Blockly.Python.import_socket();

		var content_type_value = parseInt(block.getFieldValue('content_type_value'));
		var message_value = Blockly.Python.valueToCode(block, 'message_value', Blockly.Python.ORDER_ATOMIC);
		var status_message = '';

		if(content_type_value == 0) {
			content_type_value = 'text/plain';
		}else if (content_type_value == 1) {
			content_type_value = 'text/html';
		} else if (content_type_value == 2) {
			content_type_value = 'text/json';
		}

		var status_code_value = 404;
		var status_message = 'Not found';

		var code = 'c1.send(\'HTTP/1.0 ' + status_code_value + ' ' + status_message + '\\r\\nContent-type: ' + content_type_value + '\\r\\n\\r\\n\')\n';
		code += 'c1.send(' + message_value + ')\n';
		code += 'c1.close()\n';
		
		return code;
	};

	Blockly.Python['get_request_content'] = function() {
		Blockly.Python.import_socket();
		
		var code = 'str(c1_request)';
		return [code,Blockly.Python.ORDER_NONE];
	};

	Blockly.Python['request_topic'] = function(block) {
		Blockly.Python.import_socket();
		var text_value = block.getFieldValue('text_value').toString();
		
		var code = 'str(c1_request).find(\'/' + text_value + ' \') != -1';
		return [code, Blockly.Python.ORDER_NONE];
	};
};