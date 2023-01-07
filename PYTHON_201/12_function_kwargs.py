def person(**kwargs):
    print(kwargs)
    print(type(kwargs))
    
    if 'age' in kwargs:
        print(f"You are {kwargs.get('age')} years old")    

person(name = 'John', age = 36, weight = 60)


def car(**properties):
    print(properties)

car(brand = 'VW', model = 'GOL', color = 'silver', motor_type = 1.0)


def order_pizza(name, address, **toppings):
    print(f'Order is for {name}')
    print(f'Ship it to {address}')
    price = 18.00
    
    for key, value in toppings.items():
        price = price + 2
    print(f'The total price is {price}')
    return price

order_pizza('John', 'Pq. do Horto Street', top1='cheese', top2='tomato', top3='olive',top4='pepperoni')
# or
order_pizza('Amanda', 'Pará Street', tuna = True, tomato = True, olive = True)
