import openpyxl
import json
import copy

empty_train_list = {
    "WTP": {
        "maintenance": [],
        "normal": [],
    },
    "SGT": {
        "maintenance": [],
        "normal": [],
    },
    "HCMT": {
        "maintenance": [],
        "normal": [],
    }
}

train_list = copy.deepcopy(empty_train_list)

SEVERITY_COLUMN = "A"
SET_ID_COLUMN = "C"
SUPPRESS_COLUMN = "G"

COMPANY_LETTER_CONVERTER = {
    "A": "WTP",
    "B": "SGT",
    "H": "HCMT"
}

SHEET_NAME = "Sample data"


def parse_excel(excel_file):
    global train_list
    workbook = openpyxl.load_workbook(excel_file)
    sheet = workbook.get_sheet_by_name(SHEET_NAME)

    current_row = 2

    train_list = copy.deepcopy(empty_train_list)

    set_id = sheet[f'{SET_ID_COLUMN}{current_row}'].value
    severity = sheet[f'{SEVERITY_COLUMN}{current_row}'].value
    suppress = sheet[f'{SUPPRESS_COLUMN}{current_row}'].value

    while set_id is not None:
        company = COMPANY_LETTER_CONVERTER[set_id[0]]
        maintenance_status = "maintenance" if suppress == "Maintenance" else "normal"

        data = {
            "SetID": set_id,
            "Severity": severity,
            "Url": ""
        }

        train_list[company][maintenance_status].append(data)

        current_row += 1

        set_id = sheet[f'{SET_ID_COLUMN}{current_row}'].value
        severity = sheet[f'{SEVERITY_COLUMN}{current_row}'].value
        suppress = sheet[f'{SUPPRESS_COLUMN}{current_row}'].value

    with open("data.json", "w") as data_file:
        json.dump(train_list, data_file)

    with open("data.json", "r") as data_file:
        d = json.load(data_file)
        print(d)

    response = "File uploaded"
    return response
