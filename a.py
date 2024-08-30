from __future__ import annotations
from dataclasses import dataclass

type Kg = float
type Taka = float


@dataclass(slots=True)
class Wallet:
    taka: Taka


@dataclass(frozen=True, slots=True)
class Fruit:
    name: str
    weight: Kg
    price: Taka

    def buy(self, wallet: Wallet, amount: int = 1):
        if (self.price * amount) > wallet.taka:
            raise ValueError("Not enough money")
        print(f"Buying {amount} {self.name} for {self.price * amount} taka")
        wallet.taka -= self.price * amount

    def info(self):
        print(f"1 {self.name} weighs {self.weight} kg and costs {self.price} taka")


apple: Fruit = Fruit(name="apple", weight=0.5, price=100.0)
x: Wallet = Wallet(taka=1000)
print(apple.buy(x))
print(x)
print(apple.info())
