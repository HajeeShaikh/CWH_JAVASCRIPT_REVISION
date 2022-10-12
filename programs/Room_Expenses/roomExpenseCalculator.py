import math


def getNumberInput(msg):
    try:
        return int(input(msg))
    except:
        print("Please enter a valid number!")
        return getNumberInput(msg)


"""
  persons structure : {name: [attendance, expense, liability]}
"""


class Calculator:

    def __init__(self):
        self.persons = {}
        self.month_days = None
        self.total_expenses = 0
        self.calculateExpense()

    def calculateExpense(self):
        self.populateData()
        self.fetchExpenses()
        self.setPerItemCost()
        self.calculateLiabilities()
        self.displayLiabilities()

    def populateData(self):
        self.month_days = getNumberInput("Number of days in month : ")
        persons_count = getNumberInput("Number of persons : ")
        print('-'*20)
        for i in range(1, persons_count+1):
            name = input(f"Name of person {i} : ")
            number_of_days = getNumberInput("Number of days present : ")
            self.persons[name] = [number_of_days]
            print('-'*20)
        return True

    def fetchExpenses(self):
        for k in self.persons.keys():
            expense = getNumberInput(f"Expense by {k} : ")
            self.persons[k].append(expense)
            self.total_expenses += expense

    def setPerItemCost(self):
        total_items = sum([v[0] for v in self.persons.values()])
        self.perItemCost = round(self.total_expenses / total_items, 2)
        # import pdb;pdb.set_trace()
        print(f"Per item cost : {self.perItemCost}")

    def calculateLiabilities(self):
        for person, details in self.persons.items():
            liability = self.perItemCost * details[0]
            self.persons[person].append(liability)

        print(f"name: [attendance, expense, liability] : \n {self.persons}")

    def displayLiabilities(self):
        print("\n\nCalculations...\n")
        print(f"Total Expense of Month : {self.total_expenses}\n\n")
        print('Name | Attendance | Expense | Liability | Remaining \n')
        for person, details in self.persons.items():

            # print(f"person from displayliabilities : {person}")
            # print(f"details from displayliabilities : {details}")

            difference = round(details[1] - details[2], 2)
            print(
                f"{person} | {details[0]} days | {round(details[1], 2)}| {round(details[2],2)} | {difference}")
        print("\n\nThanks!")


if __name__ == "__main__":
    Calculator()
