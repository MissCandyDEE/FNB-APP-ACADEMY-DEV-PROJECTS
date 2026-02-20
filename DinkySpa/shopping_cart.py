class Item:
    def __init__(self, name, price):
        self.name = name
        self.price = price

class Cart:
    def __init__(self):
        self.items = []
    
    def add_item(self, item):
        self.items.append(item)
        print(f"Added {item.name} to the system.")

    def get_total(self):
        return sum(i.price for i in self.items)

# Example Usage
spa_item = Item("Royal Pedicure", 400)
my_cart = Cart()
my_cart.add_item(spa_item)
print(f"Total Cart Value: R{my_cart.get_total()}")