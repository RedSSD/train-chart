import openpyxl


def parse_excel(excel_file):
    wb = openpyxl.load_workbook(excel_file)

    content_type = excel_file.content_type
    response = "POST API and you have uploaded a {} file".format(content_type)

    return response
