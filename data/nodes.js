const nodes = {
  "NetworkNodes": {
    "NodeCategories": {
      "NodeCategory": [
        {
          "ID": "ADDRESS",
          "Type": "NODE",
          "Description": "Address",
          "NodeType": "NODE",
          "DisplayProperties": {
            "Icon": "house"
          },
          "NodeSubCategories": {
            "NodeSubCategory": {
              "ID": "ADDRESS",
              "Description": "Address",
              "NodeType": "NODE",
              "DisplayProperties": {
                "Icon": "house"
              }
            }
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "CITY",
                "DataType": "VARCHAR2",
                "Description": "City",
                "IsKeyColumn": "1",
                "IsDescriptionColumn": "0",
                "IsLabelColumn": "0",
                "IsValidFromColumn": "0",
                "IsValidToColumn": "0",
                "PrimaryDescriptionColumn": "0"
              },
              {
                "Name": "COUNTRY",
                "DataType": "VARCHAR2",
                "Description": "Country",
                "IsKeyColumn": "1",
                "IsDescriptionColumn": "0",
                "IsLabelColumn": "0",
                "IsValidFromColumn": "0",
                "IsValidToColumn": "0",
                "PrimaryDescriptionColumn": "0"
              },
              {
                "Name": "FROM_DATE",
                "DataType": "DATE",
                "Description": "From date",
                "IsKeyColumn": "0",
                "IsDescriptionColumn": "0",
                "IsLabelColumn": "0",
                "IsValidFromColumn": "0",
                "IsValidToColumn": "0",
                "PrimaryDescriptionColumn": "0"
              },
              {
                "Name": "TO_DATE",
                "DataType": "DATE",
                "Description": "To Date",
                "IsKeyColumn": "0",
                "IsDescriptionColumn": "0",
                "IsLabelColumn": "0",
                "IsValidFromColumn": "0",
                "IsValidToColumn": "0",
                "PrimaryDescriptionColumn": "0"
              },
              {
                "Name": "POSTAL_CODE",
                "DataType": "VARCHAR2",
                "Description": "Postal Code",
                "IsKeyColumn": "1",
                "IsDescriptionColumn": "0",
                "IsLabelColumn": "0",
                "IsValidFromColumn": "0",
                "IsValidToColumn": "0",
                "PrimaryDescriptionColumn": "0"
              },
              {
                "Name": "STREET_ADDRESS",
                "DataType": "VARCHAR2",
                "Description": "Street Address",
                "IsKeyColumn": "1",
                "IsDescriptionColumn": "0",
                "IsLabelColumn": "0",
                "IsValidFromColumn": "0",
                "IsValidToColumn": "0",
                "PrimaryDescriptionColumn": "0"
              },
              {
                "Name": "LABEL",
                "DataType": "VARCHAR2",
                "Description": "Node Label",
                "IsKeyColumn": "0",
                "IsDescriptionColumn": "0",
                "IsLabelColumn": "1",
                "IsValidFromColumn": "0",
                "IsValidToColumn": "0",
                "PrimaryDescriptionColumn": "0"
              }
            ]
          }
        },
        {
          "ID": "DEPARTMENT",
          "Type": "NODE",
          "Description": "IRRTST Department",
          "NodeType": "NODE",
          "DisplayProperties": {
            "Icon": "organ"
          },
          "NodeSubCategories": {
            "NodeSubCategory": {
              "ID": "DEPARTMENT",
              "Description": "IRRTST Department",
              "NodeType": "NODE",
              "DisplayProperties": {
                "Icon": "organ"
              }
            }
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "LABEL",
                "DataType": "VARCHAR2",
                "Description": "Label",
                "IsKeyColumn": "0",
                "IsDescriptionColumn": "0",
                "IsLabelColumn": "1",
                "IsValidFromColumn": "0",
                "IsValidToColumn": "0",
                "PrimaryDescriptionColumn": "0"
              },
              {
                "Name": "DEPARTMENT_NAME",
                "DataType": "VARCHAR2",
                "Description": "Dept Name",
                "IsKeyColumn": "0",
                "IsDescriptionColumn": "0",
                "IsLabelColumn": "0",
                "IsValidFromColumn": "0",
                "IsValidToColumn": "0",
                "PrimaryDescriptionColumn": "0"
              },
              {
                "Name": "DEPARTMENT_ID",
                "DataType": "NUMBER",
                "Description": "ID",
                "IsKeyColumn": "1",
                "IsDescriptionColumn": "0",
                "IsLabelColumn": "0",
                "IsValidFromColumn": "0",
                "IsValidToColumn": "0",
                "PrimaryDescriptionColumn": "0"
              },
              {
                "Name": "LOCATION_ID",
                "DataType": "NUMBER",
                "Description": "Location ID",
                "IsKeyColumn": "0",
                "IsDescriptionColumn": "0",
                "IsLabelColumn": "0",
                "IsValidFromColumn": "0",
                "IsValidToColumn": "0",
                "PrimaryDescriptionColumn": "0"
              },
              {
                "Name": "MANAGER_ID",
                "DataType": "NUMBER",
                "Description": "Manager ID",
                "IsKeyColumn": "0",
                "IsDescriptionColumn": "0",
                "IsLabelColumn": "0",
                "IsValidFromColumn": "0",
                "IsValidToColumn": "0",
                "PrimaryDescriptionColumn": "0"
              }
            ]
          }
        },
        {
          "ID": "FLAG",
          "Type": "FLAG",
          "Description": "IRRTST Flag",
          "NodeType": "FLAG",
          "DisplayProperties": {
            "Icon": "CirYell"
          },
          "NodeSubCategories": {
            "NodeSubCategory": {
              "ID": "FLAG",
              "Description": "IRRTST Flag",
              "NodeType": "FLAG",
              "DisplayProperties": {
                "Icon": "CirYell"
              }
            }
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "DESCRIPTION",
                "DataType": "VARCHAR2",
                "Description": "Description",
                "IsKeyColumn": "0",
                "IsDescriptionColumn": "1",
                "IsLabelColumn": "0",
                "IsValidFromColumn": "0",
                "IsValidToColumn": "0",
                "PrimaryDescriptionColumn": "1"
              },
              {
                "Name": "TYPE",
                "DataType": "VARCHAR2",
                "Description": "Type",
                "IsKeyColumn": "1",
                "IsDescriptionColumn": "0",
                "IsLabelColumn": "1",
                "IsValidFromColumn": "0",
                "IsValidToColumn": "0",
                "PrimaryDescriptionColumn": "0"
              },
              {
                "Name": "DESCRIPTION2",
                "DataType": "VARCHAR2",
                "Description": "Description2",
                "IsKeyColumn": "0",
                "IsDescriptionColumn": "1",
                "IsLabelColumn": "0",
                "IsValidFromColumn": "0",
                "IsValidToColumn": "0",
                "PrimaryDescriptionColumn": "0"
              }
            ]
          }
        },
        {
          "ID": "PEOPLE",
          "Type": "NODE",
          "Description": "IRRTST People",
          "NodeType": "NODE",
          "DisplayProperties": {
            "Icon": "anon"
          },
          "NodeSubCategories": {
            "NodeSubCategory": [
              {
                "ID": "MANAGER",
                "Description": "Bosses Around",
                "NodeType": "NODE",
                "DisplayProperties": {
                  "Icon": "diared"
                }
              },
              {
                "ID": "YOUNG_FEMALE_EMPLOYEE",
                "Description": "Young Femaile Employee",
                "NodeType": "NODE",
                "DisplayProperties": {
                  "Icon": "Missing"
                }
              },
              {
                "ID": "SEN_FEMALE_EMPLOYEE",
                "Description": "Senior Femaie Employee",
                "NodeType": "NODE",
                "DisplayProperties": {
                  "Icon": "Missing"
                }
              },
              {
                "ID": "YOUNG_MALE_EMPLOYEE",
                "Description": "Junior Maile Employee",
                "NodeType": "NODE",
                "DisplayProperties": {
                  "Icon": "diablue"
                }
              },
              {
                "ID": "SEN_MALE_EMPLOYEE",
                "Description": "Senior Male Employee",
                "NodeType": "NODE",
                "DisplayProperties": {
                  "Icon": "Missing"
                }
              }
            ]
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "ID",
                "DataType": "NUMBER",
                "Description": "ID",
                "IsKeyColumn": "1",
                "IsDescriptionColumn": "0",
                "IsLabelColumn": "0",
                "IsValidFromColumn": "0",
                "IsValidToColumn": "0",
                "PrimaryDescriptionColumn": "0"
              },
              {
                "Name": "FIRST_NAME",
                "DataType": "VARCHAR2",
                "Description": "First Name",
                "IsKeyColumn": "0",
                "IsDescriptionColumn": "1",
                "IsLabelColumn": "0",
                "IsValidFromColumn": "0",
                "IsValidToColumn": "0",
                "PrimaryDescriptionColumn": "0"
              },
              {
                "Name": "LAST_NAME",
                "DataType": "VARCHAR2",
                "Description": "Last Name",
                "IsKeyColumn": "0",
                "IsDescriptionColumn": "1",
                "IsLabelColumn": "0",
                "IsValidFromColumn": "0",
                "IsValidToColumn": "0",
                "PrimaryDescriptionColumn": "0"
              },
              {
                "Name": "DATE_OF_BIRTH",
                "DataType": "DATE",
                "Description": "Birth Date",
                "IsKeyColumn": "0",
                "IsDescriptionColumn": "0",
                "IsLabelColumn": "0",
                "IsValidFromColumn": "1",
                "IsValidToColumn": "1",
                "PrimaryDescriptionColumn": "0"
              },
              {
                "Name": "SEX",
                "DataType": "VARCHAR2",
                "Description": "Sex",
                "IsKeyColumn": "0",
                "IsDescriptionColumn": "0",
                "IsLabelColumn": "0",
                "IsValidFromColumn": "0",
                "IsValidToColumn": "0",
                "PrimaryDescriptionColumn": "0"
              },
              {
                "Name": "LABEL",
                "DataType": "VARCHAR2",
                "Description": "Label",
                "IsKeyColumn": "1",
                "IsDescriptionColumn": "0",
                "IsLabelColumn": "1",
                "IsValidFromColumn": "0",
                "IsValidToColumn": "0",
                "PrimaryDescriptionColumn": "0"
              },
              {
                "Name": "DEPARTMENT_ID",
                "DataType": "NUMBER",
                "Description": "Department ID",
                "IsKeyColumn": "0",
                "IsDescriptionColumn": "0",
                "IsLabelColumn": "0",
                "IsValidFromColumn": "0",
                "IsValidToColumn": "0",
                "PrimaryDescriptionColumn": "0"
              },
              {
                "Name": "MANAGER_ID",
                "DataType": "NUMBER",
                "Description": "Manager ID",
                "IsKeyColumn": "0",
                "IsDescriptionColumn": "0",
                "IsLabelColumn": "0",
                "IsValidFromColumn": "0",
                "IsValidToColumn": "0",
                "PrimaryDescriptionColumn": "0"
              },
              {
                "Name": "NUMBER_OF_STAFF",
                "DataType": "NUMBER",
                "Description": "Number of Staff",
                "IsKeyColumn": "0",
                "IsDescriptionColumn": "0",
                "IsLabelColumn": "0",
                "IsValidFromColumn": "0",
                "IsValidToColumn": "0",
                "PrimaryDescriptionColumn": "0"
              }
            ]
          }
        }
      ]
    },
    "Nodes": {
      "Node": [
        {
          "SID": "2458633",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "CopiedFromNodeSID": "",
          "DuplicatesNodeSID": "",
          "NodeID": "ADDRESS",
          "SubNodeID": "ADDRESS",
          "NodeType": "NODE",
          "Label": "Sterren 40 Den Haag",
          "Key": "Sterren 40Nederland1111AADen Haag",
          "Description": "",
          "ValidFrom": "",
          "ValidTo": "",
          "Evaluated": "1",
          "Flagged": "1",
          "StepsFromStart": "4",
          "StepsFromStartInLayer": "2",
          "FlaggingNode": "",
          "NumberOfFlags": "0",
          "NetworkStartNode": "0",
          "TopNode": "0",
          "DisplayProperties": {
            "NodeIcons": "",
            "IconOverride": "FutureUse",
            "Size": "FutureUse",
            "AuraWeight": "FutureUse",
            "AuraColour": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "CITY",
                "Value": "Den Haag"
              },
              {
                "Name": "COUNTRY",
                "Value": "Nederland"
              },
              {
                "Name": "FROM_DATE",
                "Value": "2008-12-24"
              },
              {
                "Name": "TO_DATE",
                "Value": "2016-12-01"
              },
              {
                "Name": "POSTAL_CODE",
                "Value": "1111AA"
              },
              {
                "Name": "STREET_ADDRESS",
                "Value": "Sterren 40"
              },
              {
                "Name": "LABEL",
                "Value": "Sterren 40 Den Haag"
              }
            ]
          }
        },
        {
          "SID": "2458635",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "CopiedFromNodeSID": "",
          "DuplicatesNodeSID": "",
          "NodeID": "ADDRESS",
          "SubNodeID": "ADDRESS",
          "NodeType": "NODE",
          "Label": "Vliegenstraat Leiden",
          "Key": "VliegenstraatNederland2222BBLeiden",
          "Description": "",
          "ValidFrom": "",
          "ValidTo": "",
          "Evaluated": "1",
          "Flagged": "1",
          "StepsFromStart": "4",
          "StepsFromStartInLayer": "2",
          "FlaggingNode": "",
          "NumberOfFlags": "0",
          "NetworkStartNode": "0",
          "TopNode": "0",
          "DisplayProperties": {
            "NodeIcons": "",
            "IconOverride": "FutureUse",
            "Size": "FutureUse",
            "AuraWeight": "FutureUse",
            "AuraColour": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "CITY",
                "Value": "Leiden"
              },
              {
                "Name": "COUNTRY",
                "Value": "Nederland"
              },
              {
                "Name": "FROM_DATE",
                "Value": "2016-12-01"
              },
              {
                "Name": "POSTAL_CODE",
                "Value": "2222BB"
              },
              {
                "Name": "STREET_ADDRESS",
                "Value": "Vliegenstraat"
              },
              {
                "Name": "LABEL",
                "Value": "Vliegenstraat Leiden"
              }
            ]
          }
        },
        {
          "SID": "2458272",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "CopiedFromNodeSID": "2458266",
          "DuplicatesNodeSID": "",
          "NodeID": "DEPARTMENT",
          "SubNodeID": "DEPARTMENT",
          "NodeType": "NODE",
          "Label": "90 Executive",
          "Key": "90",
          "Description": "",
          "ValidFrom": "",
          "ValidTo": "",
          "Evaluated": "1",
          "Flagged": "1",
          "StepsFromStart": "2",
          "StepsFromStartInLayer": "0",
          "FlaggingNode": "",
          "NumberOfFlags": "0",
          "NetworkStartNode": "0",
          "TopNode": "0",
          "DisplayProperties": {
            "NodeIcons": "",
            "IconOverride": "FutureUse",
            "Size": "FutureUse",
            "AuraWeight": "FutureUse",
            "AuraColour": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "LABEL",
                "Value": "90 Executive"
              },
              {
                "Name": "DEPARTMENT_NAME",
                "Value": "Executive"
              },
              {
                "Name": "DEPARTMENT_ID",
                "Value": "90.0000"
              },
              {
                "Name": "LOCATION_ID",
                "Value": "1700.0000"
              },
              {
                "Name": "MANAGER_ID",
                "Value": "100.0000"
              }
            ]
          }
        },
        {
          "SID": "2458280",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "CopiedFromNodeSID": "2458270",
          "DuplicatesNodeSID": "",
          "NodeID": "DEPARTMENT",
          "SubNodeID": "DEPARTMENT",
          "NodeType": "NODE",
          "Label": "50 Shipping",
          "Key": "50",
          "Description": "",
          "ValidFrom": "",
          "ValidTo": "",
          "Evaluated": "1",
          "Flagged": "1",
          "StepsFromStart": "2",
          "StepsFromStartInLayer": "0",
          "FlaggingNode": "",
          "NumberOfFlags": "0",
          "NetworkStartNode": "0",
          "TopNode": "0",
          "DisplayProperties": {
            "NodeIcons": "",
            "IconOverride": "FutureUse",
            "Size": "FutureUse",
            "AuraWeight": "FutureUse",
            "AuraColour": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "LABEL",
                "Value": "50 Shipping"
              },
              {
                "Name": "DEPARTMENT_NAME",
                "Value": "Shipping"
              },
              {
                "Name": "DEPARTMENT_ID",
                "Value": "50.0000"
              },
              {
                "Name": "LOCATION_ID",
                "Value": "1500.0000"
              },
              {
                "Name": "MANAGER_ID",
                "Value": "121.0000"
              }
            ]
          }
        },
        {
          "SID": "2458996",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "CopiedFromNodeSID": "",
          "DuplicatesNodeSID": "",
          "NodeID": "DEPARTMENT",
          "SubNodeID": "DEPARTMENT",
          "NodeType": "NODE",
          "Label": "80 Sales",
          "Key": "80",
          "Description": "",
          "ValidFrom": "",
          "ValidTo": "",
          "Evaluated": "1",
          "Flagged": "1",
          "StepsFromStart": "5",
          "StepsFromStartInLayer": "3",
          "FlaggingNode": "",
          "NumberOfFlags": "0",
          "NetworkStartNode": "0",
          "TopNode": "0",
          "DisplayProperties": {
            "NodeIcons": "",
            "IconOverride": "FutureUse",
            "Size": "FutureUse",
            "AuraWeight": "FutureUse",
            "AuraColour": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "LABEL",
                "Value": "80 Sales"
              },
              {
                "Name": "DEPARTMENT_NAME",
                "Value": "Sales"
              },
              {
                "Name": "DEPARTMENT_ID",
                "Value": "80.0000"
              },
              {
                "Name": "LOCATION_ID",
                "Value": "2500.0000"
              },
              {
                "Name": "MANAGER_ID",
                "Value": "145.0000"
              }
            ]
          }
        },
        {
          "SID": "2458605",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "CopiedFromNodeSID": "",
          "DuplicatesNodeSID": "",
          "NodeID": "FLAG",
          "SubNodeID": "FLAG",
          "NodeType": "FLAG",
          "Label": "B",
          "Key": "B",
          "Description": "Flag voor 101",
          "ValidFrom": "",
          "ValidTo": "",
          "Evaluated": "0",
          "Flagged": "0",
          "StepsFromStart": "4",
          "StepsFromStartInLayer": "2",
          "FlaggingNode": "2458288",
          "NumberOfFlags": "0",
          "NetworkStartNode": "0",
          "TopNode": "0",
          "DisplayProperties": {
            "NodeIcons": "",
            "IconOverride": "FutureUse",
            "Size": "FutureUse",
            "AuraWeight": "FutureUse",
            "AuraColour": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "DESCRIPTION",
                "Value": "Flag voor 101"
              },
              {
                "Name": "TYPE",
                "Value": "Flag voor 101"
              },
              {
                "Name": "DESCRIPTION2",
                "Value": "desc2 Flag voor 101"
              }
            ]
          }
        },
        {
          "SID": "2458631",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "CopiedFromNodeSID": "",
          "DuplicatesNodeSID": "",
          "NodeID": "FLAG",
          "SubNodeID": "FLAG",
          "NodeType": "FLAG",
          "Label": "A",
          "Key": "A",
          "Description": "test Flag voor 100",
          "ValidFrom": "",
          "ValidTo": "",
          "Evaluated": "0",
          "Flagged": "0",
          "StepsFromStart": "4",
          "StepsFromStartInLayer": "2",
          "FlaggingNode": "2458292",
          "NumberOfFlags": "0",
          "NetworkStartNode": "0",
          "TopNode": "0",
          "DisplayProperties": {
            "NodeIcons": "",
            "IconOverride": "FutureUse",
            "Size": "FutureUse",
            "AuraWeight": "FutureUse",
            "AuraColour": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "DESCRIPTION",
                "Value": "test Flag voor 100"
              },
              {
                "Name": "TYPE",
                "Value": "test Flag voor 100"
              },
              {
                "Name": "DESCRIPTION2",
                "Value": "descr2 voor test Flag 100"
              }
            ]
          }
        },
        {
          "SID": "2458288",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "CopiedFromNodeSID": "",
          "DuplicatesNodeSID": "2458264",
          "NodeID": "PEOPLE",
          "SubNodeID": "MANAGER",
          "NodeType": "NODE",
          "Label": "Neena Kochhar",
          "Key": "101Neena Kochhar",
          "Description": "",
          "ValidFrom": "14-07-1963",
          "ValidTo": "",
          "Evaluated": "1",
          "Flagged": "1",
          "StepsFromStart": "3",
          "StepsFromStartInLayer": "1",
          "FlaggingNode": "",
          "NumberOfFlags": "1",
          "NetworkStartNode": "1",
          "TopNode": "0",
          "DisplayProperties": {
            "NodeIcons": "",
            "IconOverride": "FutureUse",
            "Size": "FutureUse",
            "AuraWeight": "FutureUse",
            "AuraColour": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "ID",
                "Value": "101.0000"
              },
              {
                "Name": "FIRST_NAME",
                "Value": "Neena"
              },
              {
                "Name": "LAST_NAME",
                "Value": "Kochhar"
              },
              {
                "Name": "DATE_OF_BIRTH",
                "Value": "1963-07-14"
              },
              {
                "Name": "SEX",
                "Value": "FEMALE"
              },
              {
                "Name": "LABEL",
                "Value": "Neena Kochhar"
              },
              {
                "Name": "DEPARTMENT_ID",
                "Value": "90.0000"
              },
              {
                "Name": "MANAGER_ID",
                "Value": "100.0000"
              },
              {
                "Name": "NUMBER_OF_STAFF",
                "Value": "5.0000"
              }
            ]
          }
        },
        {
          "SID": "2458290",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "CopiedFromNodeSID": "",
          "DuplicatesNodeSID": "",
          "NodeID": "PEOPLE",
          "SubNodeID": "MANAGER",
          "NodeType": "NODE",
          "Label": "Lex De Haan",
          "Key": "102Lex De Haan",
          "Description": "",
          "ValidFrom": "16-05-1963",
          "ValidTo": "",
          "Evaluated": "1",
          "Flagged": "1",
          "StepsFromStart": "3",
          "StepsFromStartInLayer": "1",
          "FlaggingNode": "",
          "NumberOfFlags": "0",
          "NetworkStartNode": "0",
          "TopNode": "0",
          "DisplayProperties": {
            "NodeIcons": "",
            "IconOverride": "FutureUse",
            "Size": "FutureUse",
            "AuraWeight": "FutureUse",
            "AuraColour": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "ID",
                "Value": "102.0000"
              },
              {
                "Name": "FIRST_NAME",
                "Value": "Lex"
              },
              {
                "Name": "LAST_NAME",
                "Value": "De Haan"
              },
              {
                "Name": "DATE_OF_BIRTH",
                "Value": "1963-05-16"
              },
              {
                "Name": "SEX",
                "Value": "MALE"
              },
              {
                "Name": "LABEL",
                "Value": "Lex De Haan"
              },
              {
                "Name": "DEPARTMENT_ID",
                "Value": "90.0000"
              },
              {
                "Name": "MANAGER_ID",
                "Value": "100.0000"
              },
              {
                "Name": "NUMBER_OF_STAFF",
                "Value": "1.0000"
              }
            ]
          }
        },
        {
          "SID": "2458292",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "CopiedFromNodeSID": "",
          "DuplicatesNodeSID": "2458263",
          "NodeID": "PEOPLE",
          "SubNodeID": "MANAGER",
          "NodeType": "NODE",
          "Label": "Steven King",
          "Key": "100Steven King",
          "Description": "",
          "ValidFrom": "08-04-1955",
          "ValidTo": "",
          "Evaluated": "1",
          "Flagged": "1",
          "StepsFromStart": "3",
          "StepsFromStartInLayer": "1",
          "FlaggingNode": "",
          "NumberOfFlags": "1",
          "NetworkStartNode": "1",
          "TopNode": "0",
          "DisplayProperties": {
            "NodeIcons": "",
            "IconOverride": "FutureUse",
            "Size": "FutureUse",
            "AuraWeight": "FutureUse",
            "AuraColour": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "ID",
                "Value": "100.0000"
              },
              {
                "Name": "FIRST_NAME",
                "Value": "Steven"
              },
              {
                "Name": "LAST_NAME",
                "Value": "King"
              },
              {
                "Name": "DATE_OF_BIRTH",
                "Value": "1955-04-08"
              },
              {
                "Name": "SEX",
                "Value": "MALE"
              },
              {
                "Name": "LABEL",
                "Value": "Steven King"
              },
              {
                "Name": "DEPARTMENT_ID",
                "Value": "90.0000"
              },
              {
                "Name": "NUMBER_OF_STAFF",
                "Value": "14.0000"
              }
            ]
          }
        },
        {
          "SID": "2459110",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "CopiedFromNodeSID": "",
          "DuplicatesNodeSID": "",
          "NodeID": "PEOPLE",
          "SubNodeID": "SEN_MALE_EMPLOYEE",
          "NodeType": "NODE",
          "Label": "Allan McEwen",
          "Key": "158Allan McEwen",
          "Description": "",
          "ValidFrom": "25-07-1967",
          "ValidTo": "",
          "Evaluated": "1",
          "Flagged": "1",
          "StepsFromStart": "5",
          "StepsFromStartInLayer": "3",
          "FlaggingNode": "",
          "NumberOfFlags": "0",
          "NetworkStartNode": "0",
          "TopNode": "0",
          "DisplayProperties": {
            "NodeIcons": "",
            "IconOverride": "FutureUse",
            "Size": "FutureUse",
            "AuraWeight": "FutureUse",
            "AuraColour": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "ID",
                "Value": "158.0000"
              },
              {
                "Name": "FIRST_NAME",
                "Value": "Allan"
              },
              {
                "Name": "LAST_NAME",
                "Value": "McEwen"
              },
              {
                "Name": "DATE_OF_BIRTH",
                "Value": "1967-07-25"
              },
              {
                "Name": "SEX",
                "Value": "MALE"
              },
              {
                "Name": "LABEL",
                "Value": "Allan McEwen"
              },
              {
                "Name": "DEPARTMENT_ID",
                "Value": "80.0000"
              },
              {
                "Name": "MANAGER_ID",
                "Value": "146.0000"
              },
              {
                "Name": "NUMBER_OF_STAFF",
                "Value": "0.0000"
              }
            ]
          }
        },
        {
          "SID": "2459112",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "CopiedFromNodeSID": "",
          "DuplicatesNodeSID": "",
          "NodeID": "PEOPLE",
          "SubNodeID": "YOUNG_MALE_EMPLOYEE",
          "NodeType": "NODE",
          "Label": "Patrick Sully",
          "Key": "157Patrick Sully",
          "Description": "",
          "ValidFrom": "07-07-1986",
          "ValidTo": "",
          "Evaluated": "1",
          "Flagged": "1",
          "StepsFromStart": "5",
          "StepsFromStartInLayer": "3",
          "FlaggingNode": "",
          "NumberOfFlags": "0",
          "NetworkStartNode": "0",
          "TopNode": "0",
          "DisplayProperties": {
            "NodeIcons": "",
            "IconOverride": "FutureUse",
            "Size": "FutureUse",
            "AuraWeight": "FutureUse",
            "AuraColour": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "ID",
                "Value": "157.0000"
              },
              {
                "Name": "FIRST_NAME",
                "Value": "Patrick"
              },
              {
                "Name": "LAST_NAME",
                "Value": "Sully"
              },
              {
                "Name": "DATE_OF_BIRTH",
                "Value": "1986-07-07"
              },
              {
                "Name": "SEX",
                "Value": "MALE"
              },
              {
                "Name": "LABEL",
                "Value": "Patrick Sully"
              },
              {
                "Name": "DEPARTMENT_ID",
                "Value": "80.0000"
              },
              {
                "Name": "MANAGER_ID",
                "Value": "146.0000"
              },
              {
                "Name": "NUMBER_OF_STAFF",
                "Value": "0.0000"
              }
            ]
          }
        },
        {
          "SID": "2459129",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "CopiedFromNodeSID": "",
          "DuplicatesNodeSID": "",
          "NodeID": "PEOPLE",
          "SubNodeID": "YOUNG_MALE_EMPLOYEE",
          "NodeType": "NODE",
          "Label": "Charles Johnson",
          "Key": "179Charles Johnson",
          "Description": "",
          "ValidFrom": "06-03-1983",
          "ValidTo": "",
          "Evaluated": "1",
          "Flagged": "1",
          "StepsFromStart": "5",
          "StepsFromStartInLayer": "3",
          "FlaggingNode": "",
          "NumberOfFlags": "0",
          "NetworkStartNode": "0",
          "TopNode": "0",
          "DisplayProperties": {
            "NodeIcons": "",
            "IconOverride": "FutureUse",
            "Size": "FutureUse",
            "AuraWeight": "FutureUse",
            "AuraColour": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "ID",
                "Value": "179.0000"
              },
              {
                "Name": "FIRST_NAME",
                "Value": "Charles"
              },
              {
                "Name": "LAST_NAME",
                "Value": "Johnson"
              },
              {
                "Name": "DATE_OF_BIRTH",
                "Value": "1983-03-06"
              },
              {
                "Name": "SEX",
                "Value": "MALE"
              },
              {
                "Name": "LABEL",
                "Value": "Charles Johnson"
              },
              {
                "Name": "DEPARTMENT_ID",
                "Value": "80.0000"
              },
              {
                "Name": "MANAGER_ID",
                "Value": "149.0000"
              },
              {
                "Name": "NUMBER_OF_STAFF",
                "Value": "0.0000"
              }
            ]
          }
        },
        {
          "SID": "2459131",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "CopiedFromNodeSID": "",
          "DuplicatesNodeSID": "",
          "NodeID": "PEOPLE",
          "SubNodeID": "SEN_FEMALE_EMPLOYEE",
          "NodeType": "NODE",
          "Label": "Kimberely Grant",
          "Key": "178Kimberely Grant",
          "Description": "",
          "ValidFrom": "02-12-1952",
          "ValidTo": "",
          "Evaluated": "1",
          "Flagged": "1",
          "StepsFromStart": "5",
          "StepsFromStartInLayer": "3",
          "FlaggingNode": "",
          "NumberOfFlags": "0",
          "NetworkStartNode": "0",
          "TopNode": "0",
          "DisplayProperties": {
            "NodeIcons": "",
            "IconOverride": "FutureUse",
            "Size": "FutureUse",
            "AuraWeight": "FutureUse",
            "AuraColour": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "ID",
                "Value": "178.0000"
              },
              {
                "Name": "FIRST_NAME",
                "Value": "Kimberely"
              },
              {
                "Name": "LAST_NAME",
                "Value": "Grant"
              },
              {
                "Name": "DATE_OF_BIRTH",
                "Value": "1952-12-02"
              },
              {
                "Name": "SEX",
                "Value": "FEMALE"
              },
              {
                "Name": "LABEL",
                "Value": "Kimberely Grant"
              },
              {
                "Name": "MANAGER_ID",
                "Value": "149.0000"
              },
              {
                "Name": "NUMBER_OF_STAFF",
                "Value": "0.0000"
              }
            ]
          }
        },
        {
          "SID": "2459133",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "CopiedFromNodeSID": "",
          "DuplicatesNodeSID": "",
          "NodeID": "PEOPLE",
          "SubNodeID": "SEN_MALE_EMPLOYEE",
          "NodeType": "NODE",
          "Label": "Jack Livingston",
          "Key": "177Jack Livingston",
          "Description": "",
          "ValidFrom": "20-02-1958",
          "ValidTo": "",
          "Evaluated": "1",
          "Flagged": "1",
          "StepsFromStart": "5",
          "StepsFromStartInLayer": "3",
          "FlaggingNode": "",
          "NumberOfFlags": "0",
          "NetworkStartNode": "0",
          "TopNode": "0",
          "DisplayProperties": {
            "NodeIcons": "",
            "IconOverride": "FutureUse",
            "Size": "FutureUse",
            "AuraWeight": "FutureUse",
            "AuraColour": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "ID",
                "Value": "177.0000"
              },
              {
                "Name": "FIRST_NAME",
                "Value": "Jack"
              },
              {
                "Name": "LAST_NAME",
                "Value": "Livingston"
              },
              {
                "Name": "DATE_OF_BIRTH",
                "Value": "1958-02-20"
              },
              {
                "Name": "SEX",
                "Value": "MALE"
              },
              {
                "Name": "LABEL",
                "Value": "Jack Livingston"
              },
              {
                "Name": "DEPARTMENT_ID",
                "Value": "80.0000"
              },
              {
                "Name": "MANAGER_ID",
                "Value": "149.0000"
              },
              {
                "Name": "NUMBER_OF_STAFF",
                "Value": "0.0000"
              }
            ]
          }
        },
        {
          "SID": "2459135",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "CopiedFromNodeSID": "",
          "DuplicatesNodeSID": "",
          "NodeID": "PEOPLE",
          "SubNodeID": "YOUNG_MALE_EMPLOYEE",
          "NodeType": "NODE",
          "Label": "Jonathon Taylor",
          "Key": "176Jonathon Taylor",
          "Description": "",
          "ValidFrom": "24-06-1983",
          "ValidTo": "",
          "Evaluated": "1",
          "Flagged": "1",
          "StepsFromStart": "5",
          "StepsFromStartInLayer": "3",
          "FlaggingNode": "",
          "NumberOfFlags": "0",
          "NetworkStartNode": "0",
          "TopNode": "0",
          "DisplayProperties": {
            "NodeIcons": "",
            "IconOverride": "FutureUse",
            "Size": "FutureUse",
            "AuraWeight": "FutureUse",
            "AuraColour": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "ID",
                "Value": "176.0000"
              },
              {
                "Name": "FIRST_NAME",
                "Value": "Jonathon"
              },
              {
                "Name": "LAST_NAME",
                "Value": "Taylor"
              },
              {
                "Name": "DATE_OF_BIRTH",
                "Value": "1983-06-24"
              },
              {
                "Name": "SEX",
                "Value": "MALE"
              },
              {
                "Name": "LABEL",
                "Value": "Jonathon Taylor"
              },
              {
                "Name": "DEPARTMENT_ID",
                "Value": "80.0000"
              },
              {
                "Name": "MANAGER_ID",
                "Value": "149.0000"
              },
              {
                "Name": "NUMBER_OF_STAFF",
                "Value": "0.0000"
              }
            ]
          }
        },
        {
          "SID": "2459137",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "CopiedFromNodeSID": "",
          "DuplicatesNodeSID": "",
          "NodeID": "PEOPLE",
          "SubNodeID": "YOUNG_FEMALE_EMPLOYEE",
          "NodeType": "NODE",
          "Label": "Alyssa Hutton",
          "Key": "175Alyssa Hutton",
          "Description": "",
          "ValidFrom": "07-09-1982",
          "ValidTo": "",
          "Evaluated": "1",
          "Flagged": "1",
          "StepsFromStart": "5",
          "StepsFromStartInLayer": "3",
          "FlaggingNode": "",
          "NumberOfFlags": "0",
          "NetworkStartNode": "0",
          "TopNode": "0",
          "DisplayProperties": {
            "NodeIcons": "",
            "IconOverride": "FutureUse",
            "Size": "FutureUse",
            "AuraWeight": "FutureUse",
            "AuraColour": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "ID",
                "Value": "175.0000"
              },
              {
                "Name": "FIRST_NAME",
                "Value": "Alyssa"
              },
              {
                "Name": "LAST_NAME",
                "Value": "Hutton"
              },
              {
                "Name": "DATE_OF_BIRTH",
                "Value": "1982-09-07"
              },
              {
                "Name": "SEX",
                "Value": "FEMALE"
              },
              {
                "Name": "LABEL",
                "Value": "Alyssa Hutton"
              },
              {
                "Name": "DEPARTMENT_ID",
                "Value": "80.0000"
              },
              {
                "Name": "MANAGER_ID",
                "Value": "149.0000"
              },
              {
                "Name": "NUMBER_OF_STAFF",
                "Value": "0.0000"
              }
            ]
          }
        },
        {
          "SID": "2459139",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "CopiedFromNodeSID": "",
          "DuplicatesNodeSID": "",
          "NodeID": "PEOPLE",
          "SubNodeID": "SEN_FEMALE_EMPLOYEE",
          "NodeType": "NODE",
          "Label": "Ellen Abel",
          "Key": "174Ellen Abel",
          "Description": "",
          "ValidFrom": "21-05-1964",
          "ValidTo": "",
          "Evaluated": "1",
          "Flagged": "1",
          "StepsFromStart": "5",
          "StepsFromStartInLayer": "3",
          "FlaggingNode": "",
          "NumberOfFlags": "0",
          "NetworkStartNode": "0",
          "TopNode": "0",
          "DisplayProperties": {
            "NodeIcons": "",
            "IconOverride": "FutureUse",
            "Size": "FutureUse",
            "AuraWeight": "FutureUse",
            "AuraColour": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "ID",
                "Value": "174.0000"
              },
              {
                "Name": "FIRST_NAME",
                "Value": "Ellen"
              },
              {
                "Name": "LAST_NAME",
                "Value": "Abel"
              },
              {
                "Name": "DATE_OF_BIRTH",
                "Value": "1964-05-21"
              },
              {
                "Name": "SEX",
                "Value": "FEMALE"
              },
              {
                "Name": "LABEL",
                "Value": "Ellen Abel"
              },
              {
                "Name": "DEPARTMENT_ID",
                "Value": "80.0000"
              },
              {
                "Name": "MANAGER_ID",
                "Value": "149.0000"
              },
              {
                "Name": "NUMBER_OF_STAFF",
                "Value": "0.0000"
              }
            ]
          }
        },
        {
          "SID": "2459146",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "CopiedFromNodeSID": "",
          "DuplicatesNodeSID": "",
          "NodeID": "PEOPLE",
          "SubNodeID": "YOUNG_FEMALE_EMPLOYEE",
          "NodeType": "NODE",
          "Label": "Sundita Kumar",
          "Key": "173Sundita Kumar",
          "Description": "",
          "ValidFrom": "10-08-1968",
          "ValidTo": "",
          "Evaluated": "1",
          "Flagged": "1",
          "StepsFromStart": "5",
          "StepsFromStartInLayer": "3",
          "FlaggingNode": "",
          "NumberOfFlags": "0",
          "NetworkStartNode": "0",
          "TopNode": "0",
          "DisplayProperties": {
            "NodeIcons": "",
            "IconOverride": "FutureUse",
            "Size": "FutureUse",
            "AuraWeight": "FutureUse",
            "AuraColour": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "ID",
                "Value": "173.0000"
              },
              {
                "Name": "FIRST_NAME",
                "Value": "Sundita"
              },
              {
                "Name": "LAST_NAME",
                "Value": "Kumar"
              },
              {
                "Name": "DATE_OF_BIRTH",
                "Value": "1968-08-10"
              },
              {
                "Name": "SEX",
                "Value": "FEMALE"
              },
              {
                "Name": "LABEL",
                "Value": "Sundita Kumar"
              },
              {
                "Name": "DEPARTMENT_ID",
                "Value": "80.0000"
              },
              {
                "Name": "MANAGER_ID",
                "Value": "148.0000"
              },
              {
                "Name": "NUMBER_OF_STAFF",
                "Value": "0.0000"
              }
            ]
          }
        },
        {
          "SID": "2459148",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "CopiedFromNodeSID": "",
          "DuplicatesNodeSID": "",
          "NodeID": "PEOPLE",
          "SubNodeID": "SEN_FEMALE_EMPLOYEE",
          "NodeType": "NODE",
          "Label": "Elizabeth Bates",
          "Key": "172Elizabeth Bates",
          "Description": "",
          "ValidFrom": "19-04-1961",
          "ValidTo": "",
          "Evaluated": "1",
          "Flagged": "1",
          "StepsFromStart": "5",
          "StepsFromStartInLayer": "3",
          "FlaggingNode": "",
          "NumberOfFlags": "0",
          "NetworkStartNode": "0",
          "TopNode": "0",
          "DisplayProperties": {
            "NodeIcons": "",
            "IconOverride": "FutureUse",
            "Size": "FutureUse",
            "AuraWeight": "FutureUse",
            "AuraColour": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "ID",
                "Value": "172.0000"
              },
              {
                "Name": "FIRST_NAME",
                "Value": "Elizabeth"
              },
              {
                "Name": "LAST_NAME",
                "Value": "Bates"
              },
              {
                "Name": "DATE_OF_BIRTH",
                "Value": "1961-04-19"
              },
              {
                "Name": "SEX",
                "Value": "FEMALE"
              },
              {
                "Name": "LABEL",
                "Value": "Elizabeth Bates"
              },
              {
                "Name": "DEPARTMENT_ID",
                "Value": "80.0000"
              },
              {
                "Name": "MANAGER_ID",
                "Value": "148.0000"
              },
              {
                "Name": "NUMBER_OF_STAFF",
                "Value": "0.0000"
              }
            ]
          }
        },
        {
          "SID": "2459150",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "CopiedFromNodeSID": "",
          "DuplicatesNodeSID": "",
          "NodeID": "PEOPLE",
          "SubNodeID": "YOUNG_MALE_EMPLOYEE",
          "NodeType": "NODE",
          "Label": "William Smith",
          "Key": "171William Smith",
          "Description": "",
          "ValidFrom": "08-06-1971",
          "ValidTo": "",
          "Evaluated": "1",
          "Flagged": "1",
          "StepsFromStart": "5",
          "StepsFromStartInLayer": "3",
          "FlaggingNode": "",
          "NumberOfFlags": "0",
          "NetworkStartNode": "0",
          "TopNode": "0",
          "DisplayProperties": {
            "NodeIcons": "",
            "IconOverride": "FutureUse",
            "Size": "FutureUse",
            "AuraWeight": "FutureUse",
            "AuraColour": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "ID",
                "Value": "171.0000"
              },
              {
                "Name": "FIRST_NAME",
                "Value": "William"
              },
              {
                "Name": "LAST_NAME",
                "Value": "Smith"
              },
              {
                "Name": "DATE_OF_BIRTH",
                "Value": "1971-06-08"
              },
              {
                "Name": "SEX",
                "Value": "MALE"
              },
              {
                "Name": "LABEL",
                "Value": "William Smith"
              },
              {
                "Name": "DEPARTMENT_ID",
                "Value": "80.0000"
              },
              {
                "Name": "MANAGER_ID",
                "Value": "148.0000"
              },
              {
                "Name": "NUMBER_OF_STAFF",
                "Value": "0.0000"
              }
            ]
          }
        },
        {
          "SID": "2459152",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "CopiedFromNodeSID": "",
          "DuplicatesNodeSID": "",
          "NodeID": "PEOPLE",
          "SubNodeID": "YOUNG_MALE_EMPLOYEE",
          "NodeType": "NODE",
          "Label": "Tayler Fox",
          "Key": "170Tayler Fox",
          "Description": "",
          "ValidFrom": "01-11-1970",
          "ValidTo": "",
          "Evaluated": "1",
          "Flagged": "1",
          "StepsFromStart": "5",
          "StepsFromStartInLayer": "3",
          "FlaggingNode": "",
          "NumberOfFlags": "0",
          "NetworkStartNode": "0",
          "TopNode": "0",
          "DisplayProperties": {
            "NodeIcons": "",
            "IconOverride": "FutureUse",
            "Size": "FutureUse",
            "AuraWeight": "FutureUse",
            "AuraColour": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "ID",
                "Value": "170.0000"
              },
              {
                "Name": "FIRST_NAME",
                "Value": "Tayler"
              },
              {
                "Name": "LAST_NAME",
                "Value": "Fox"
              },
              {
                "Name": "DATE_OF_BIRTH",
                "Value": "1970-11-01"
              },
              {
                "Name": "SEX",
                "Value": "MALE"
              },
              {
                "Name": "LABEL",
                "Value": "Tayler Fox"
              },
              {
                "Name": "DEPARTMENT_ID",
                "Value": "80.0000"
              },
              {
                "Name": "MANAGER_ID",
                "Value": "148.0000"
              },
              {
                "Name": "NUMBER_OF_STAFF",
                "Value": "0.0000"
              }
            ]
          }
        },
        {
          "SID": "2459154",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "CopiedFromNodeSID": "",
          "DuplicatesNodeSID": "",
          "NodeID": "PEOPLE",
          "SubNodeID": "SEN_MALE_EMPLOYEE",
          "NodeType": "NODE",
          "Label": "Harrison Bloom",
          "Key": "169Harrison Bloom",
          "Description": "",
          "ValidFrom": "25-06-1955",
          "ValidTo": "",
          "Evaluated": "1",
          "Flagged": "1",
          "StepsFromStart": "5",
          "StepsFromStartInLayer": "3",
          "FlaggingNode": "",
          "NumberOfFlags": "0",
          "NetworkStartNode": "0",
          "TopNode": "0",
          "DisplayProperties": {
            "NodeIcons": "",
            "IconOverride": "FutureUse",
            "Size": "FutureUse",
            "AuraWeight": "FutureUse",
            "AuraColour": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "ID",
                "Value": "169.0000"
              },
              {
                "Name": "FIRST_NAME",
                "Value": "Harrison"
              },
              {
                "Name": "LAST_NAME",
                "Value": "Bloom"
              },
              {
                "Name": "DATE_OF_BIRTH",
                "Value": "1955-06-25"
              },
              {
                "Name": "SEX",
                "Value": "MALE"
              },
              {
                "Name": "LABEL",
                "Value": "Harrison Bloom"
              },
              {
                "Name": "DEPARTMENT_ID",
                "Value": "80.0000"
              },
              {
                "Name": "MANAGER_ID",
                "Value": "148.0000"
              },
              {
                "Name": "NUMBER_OF_STAFF",
                "Value": "0.0000"
              }
            ]
          }
        },
        {
          "SID": "2459156",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "CopiedFromNodeSID": "",
          "DuplicatesNodeSID": "",
          "NodeID": "PEOPLE",
          "SubNodeID": "YOUNG_FEMALE_EMPLOYEE",
          "NodeType": "NODE",
          "Label": "Lisa Ozer",
          "Key": "168Lisa Ozer",
          "Description": "",
          "ValidFrom": "03-06-1969",
          "ValidTo": "",
          "Evaluated": "1",
          "Flagged": "1",
          "StepsFromStart": "5",
          "StepsFromStartInLayer": "3",
          "FlaggingNode": "",
          "NumberOfFlags": "0",
          "NetworkStartNode": "0",
          "TopNode": "0",
          "DisplayProperties": {
            "NodeIcons": "",
            "IconOverride": "FutureUse",
            "Size": "FutureUse",
            "AuraWeight": "FutureUse",
            "AuraColour": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "ID",
                "Value": "168.0000"
              },
              {
                "Name": "FIRST_NAME",
                "Value": "Lisa"
              },
              {
                "Name": "LAST_NAME",
                "Value": "Ozer"
              },
              {
                "Name": "DATE_OF_BIRTH",
                "Value": "1969-06-03"
              },
              {
                "Name": "SEX",
                "Value": "FEMALE"
              },
              {
                "Name": "LABEL",
                "Value": "Lisa Ozer"
              },
              {
                "Name": "DEPARTMENT_ID",
                "Value": "80.0000"
              },
              {
                "Name": "MANAGER_ID",
                "Value": "148.0000"
              },
              {
                "Name": "NUMBER_OF_STAFF",
                "Value": "0.0000"
              }
            ]
          }
        },
        {
          "SID": "2459163",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "CopiedFromNodeSID": "",
          "DuplicatesNodeSID": "",
          "NodeID": "PEOPLE",
          "SubNodeID": "YOUNG_MALE_EMPLOYEE",
          "NodeType": "NODE",
          "Label": "Oliver Tuvault",
          "Key": "155Oliver Tuvault",
          "Description": "",
          "ValidFrom": "22-08-1974",
          "ValidTo": "",
          "Evaluated": "1",
          "Flagged": "1",
          "StepsFromStart": "5",
          "StepsFromStartInLayer": "3",
          "FlaggingNode": "",
          "NumberOfFlags": "0",
          "NetworkStartNode": "0",
          "TopNode": "0",
          "DisplayProperties": {
            "NodeIcons": "",
            "IconOverride": "FutureUse",
            "Size": "FutureUse",
            "AuraWeight": "FutureUse",
            "AuraColour": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "ID",
                "Value": "155.0000"
              },
              {
                "Name": "FIRST_NAME",
                "Value": "Oliver"
              },
              {
                "Name": "LAST_NAME",
                "Value": "Tuvault"
              },
              {
                "Name": "DATE_OF_BIRTH",
                "Value": "1974-08-22"
              },
              {
                "Name": "SEX",
                "Value": "MALE"
              },
              {
                "Name": "LABEL",
                "Value": "Oliver Tuvault"
              },
              {
                "Name": "DEPARTMENT_ID",
                "Value": "80.0000"
              },
              {
                "Name": "MANAGER_ID",
                "Value": "145.0000"
              },
              {
                "Name": "NUMBER_OF_STAFF",
                "Value": "0.0000"
              }
            ]
          }
        },
        {
          "SID": "2459169",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "CopiedFromNodeSID": "",
          "DuplicatesNodeSID": "",
          "NodeID": "PEOPLE",
          "SubNodeID": "SEN_MALE_EMPLOYEE",
          "NodeType": "NODE",
          "Label": "Peter Hall",
          "Key": "152Peter Hall",
          "Description": "",
          "ValidFrom": "08-10-1966",
          "ValidTo": "",
          "Evaluated": "1",
          "Flagged": "1",
          "StepsFromStart": "5",
          "StepsFromStartInLayer": "3",
          "FlaggingNode": "",
          "NumberOfFlags": "0",
          "NetworkStartNode": "0",
          "TopNode": "0",
          "DisplayProperties": {
            "NodeIcons": "",
            "IconOverride": "FutureUse",
            "Size": "FutureUse",
            "AuraWeight": "FutureUse",
            "AuraColour": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "ID",
                "Value": "152.0000"
              },
              {
                "Name": "FIRST_NAME",
                "Value": "Peter"
              },
              {
                "Name": "LAST_NAME",
                "Value": "Hall"
              },
              {
                "Name": "DATE_OF_BIRTH",
                "Value": "1966-10-08"
              },
              {
                "Name": "SEX",
                "Value": "MALE"
              },
              {
                "Name": "LABEL",
                "Value": "Peter Hall"
              },
              {
                "Name": "DEPARTMENT_ID",
                "Value": "80.0000"
              },
              {
                "Name": "MANAGER_ID",
                "Value": "145.0000"
              },
              {
                "Name": "NUMBER_OF_STAFF",
                "Value": "0.0000"
              }
            ]
          }
        },
        {
          "SID": "2459171",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "CopiedFromNodeSID": "",
          "DuplicatesNodeSID": "",
          "NodeID": "PEOPLE",
          "SubNodeID": "YOUNG_MALE_EMPLOYEE",
          "NodeType": "NODE",
          "Label": "David Bernstein",
          "Key": "151David Bernstein",
          "Description": "",
          "ValidFrom": "08-09-1982",
          "ValidTo": "",
          "Evaluated": "1",
          "Flagged": "1",
          "StepsFromStart": "5",
          "StepsFromStartInLayer": "3",
          "FlaggingNode": "",
          "NumberOfFlags": "0",
          "NetworkStartNode": "0",
          "TopNode": "0",
          "DisplayProperties": {
            "NodeIcons": "",
            "IconOverride": "FutureUse",
            "Size": "FutureUse",
            "AuraWeight": "FutureUse",
            "AuraColour": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "ID",
                "Value": "151.0000"
              },
              {
                "Name": "FIRST_NAME",
                "Value": "David"
              },
              {
                "Name": "LAST_NAME",
                "Value": "Bernstein"
              },
              {
                "Name": "DATE_OF_BIRTH",
                "Value": "1982-09-08"
              },
              {
                "Name": "SEX",
                "Value": "MALE"
              },
              {
                "Name": "LABEL",
                "Value": "David Bernstein"
              },
              {
                "Name": "DEPARTMENT_ID",
                "Value": "80.0000"
              },
              {
                "Name": "MANAGER_ID",
                "Value": "145.0000"
              },
              {
                "Name": "NUMBER_OF_STAFF",
                "Value": "0.0000"
              }
            ]
          }
        },
        {
          "SID": "2459173",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "CopiedFromNodeSID": "",
          "DuplicatesNodeSID": "",
          "NodeID": "PEOPLE",
          "SubNodeID": "YOUNG_MALE_EMPLOYEE",
          "NodeType": "NODE",
          "Label": "Peter Tucker",
          "Key": "150Peter Tucker",
          "Description": "",
          "ValidFrom": "11-08-1982",
          "ValidTo": "",
          "Evaluated": "1",
          "Flagged": "1",
          "StepsFromStart": "5",
          "StepsFromStartInLayer": "3",
          "FlaggingNode": "",
          "NumberOfFlags": "0",
          "NetworkStartNode": "0",
          "TopNode": "0",
          "DisplayProperties": {
            "NodeIcons": "",
            "IconOverride": "FutureUse",
            "Size": "FutureUse",
            "AuraWeight": "FutureUse",
            "AuraColour": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "ID",
                "Value": "150.0000"
              },
              {
                "Name": "FIRST_NAME",
                "Value": "Peter"
              },
              {
                "Name": "LAST_NAME",
                "Value": "Tucker"
              },
              {
                "Name": "DATE_OF_BIRTH",
                "Value": "1982-08-11"
              },
              {
                "Name": "SEX",
                "Value": "MALE"
              },
              {
                "Name": "LABEL",
                "Value": "Peter Tucker"
              },
              {
                "Name": "DEPARTMENT_ID",
                "Value": "80.0000"
              },
              {
                "Name": "MANAGER_ID",
                "Value": "145.0000"
              },
              {
                "Name": "NUMBER_OF_STAFF",
                "Value": "0.0000"
              }
            ]
          }
        },
        {
          "SID": "2458514",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "CopiedFromNodeSID": "",
          "DuplicatesNodeSID": "",
          "NodeID": "PEOPLE",
          "SubNodeID": "SEN_MALE_EMPLOYEE",
          "NodeType": "NODE",
          "Label": "TJ Olson",
          "Key": "132TJ Olson",
          "Description": "",
          "ValidFrom": "19-05-1965",
          "ValidTo": "21-03-2009",
          "Evaluated": "1",
          "Flagged": "1",
          "StepsFromStart": "3",
          "StepsFromStartInLayer": "1",
          "FlaggingNode": "",
          "NumberOfFlags": "0",
          "NetworkStartNode": "0",
          "TopNode": "0",
          "DisplayProperties": {
            "NodeIcons": "",
            "IconOverride": "FutureUse",
            "Size": "FutureUse",
            "AuraWeight": "FutureUse",
            "AuraColour": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "ID",
                "Value": "132.0000"
              },
              {
                "Name": "FIRST_NAME",
                "Value": "TJ"
              },
              {
                "Name": "LAST_NAME",
                "Value": "Olson"
              },
              {
                "Name": "DATE_OF_BIRTH",
                "Value": "1965-05-19"
              },
              {
                "Name": "DATE_OF_DEATH",
                "Value": "2009-03-21"
              },
              {
                "Name": "SEX",
                "Value": "MALE"
              },
              {
                "Name": "LABEL",
                "Value": "TJ Olson"
              },
              {
                "Name": "DEPARTMENT_ID",
                "Value": "50.0000"
              },
              {
                "Name": "MANAGER_ID",
                "Value": "121.0000"
              },
              {
                "Name": "NUMBER_OF_STAFF",
                "Value": "0.0000"
              }
            ]
          }
        },
        {
          "SID": "2458516",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "CopiedFromNodeSID": "",
          "DuplicatesNodeSID": "",
          "NodeID": "PEOPLE",
          "SubNodeID": "SEN_MALE_EMPLOYEE",
          "NodeType": "NODE",
          "Label": "Steven Markle",
          "Key": "128Steven Markle",
          "Description": "",
          "ValidFrom": "08-08-1949",
          "ValidTo": "",
          "Evaluated": "1",
          "Flagged": "1",
          "StepsFromStart": "3",
          "StepsFromStartInLayer": "1",
          "FlaggingNode": "",
          "NumberOfFlags": "0",
          "NetworkStartNode": "0",
          "TopNode": "0",
          "DisplayProperties": {
            "NodeIcons": "",
            "IconOverride": "FutureUse",
            "Size": "FutureUse",
            "AuraWeight": "FutureUse",
            "AuraColour": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "ID",
                "Value": "128.0000"
              },
              {
                "Name": "FIRST_NAME",
                "Value": "Steven"
              },
              {
                "Name": "LAST_NAME",
                "Value": "Markle"
              },
              {
                "Name": "DATE_OF_BIRTH",
                "Value": "1949-08-08"
              },
              {
                "Name": "SEX",
                "Value": "MALE"
              },
              {
                "Name": "LABEL",
                "Value": "Steven Markle"
              },
              {
                "Name": "DEPARTMENT_ID",
                "Value": "50.0000"
              },
              {
                "Name": "MANAGER_ID",
                "Value": "120.0000"
              },
              {
                "Name": "NUMBER_OF_STAFF",
                "Value": "0.0000"
              }
            ]
          }
        },
        {
          "SID": "2458518",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "CopiedFromNodeSID": "",
          "DuplicatesNodeSID": "",
          "NodeID": "PEOPLE",
          "SubNodeID": "YOUNG_FEMALE_EMPLOYEE",
          "NodeType": "NODE",
          "Label": "Hazel Philtanker",
          "Key": "136Hazel Philtanker",
          "Description": "",
          "ValidFrom": "18-03-1968",
          "ValidTo": "",
          "Evaluated": "1",
          "Flagged": "1",
          "StepsFromStart": "3",
          "StepsFromStartInLayer": "1",
          "FlaggingNode": "",
          "NumberOfFlags": "0",
          "NetworkStartNode": "0",
          "TopNode": "0",
          "DisplayProperties": {
            "NodeIcons": "",
            "IconOverride": "FutureUse",
            "Size": "FutureUse",
            "AuraWeight": "FutureUse",
            "AuraColour": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "ID",
                "Value": "136.0000"
              },
              {
                "Name": "FIRST_NAME",
                "Value": "Hazel"
              },
              {
                "Name": "LAST_NAME",
                "Value": "Philtanker"
              },
              {
                "Name": "DATE_OF_BIRTH",
                "Value": "1968-03-18"
              },
              {
                "Name": "SEX",
                "Value": "FEMALE"
              },
              {
                "Name": "LABEL",
                "Value": "Hazel Philtanker"
              },
              {
                "Name": "DEPARTMENT_ID",
                "Value": "50.0000"
              },
              {
                "Name": "MANAGER_ID",
                "Value": "122.0000"
              },
              {
                "Name": "NUMBER_OF_STAFF",
                "Value": "0.0000"
              }
            ]
          }
        },
        {
          "SID": "2458520",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "CopiedFromNodeSID": "",
          "DuplicatesNodeSID": "",
          "NodeID": "PEOPLE",
          "SubNodeID": "YOUNG_MALE_EMPLOYEE",
          "NodeType": "NODE",
          "Label": "James Landry",
          "Key": "127James Landry",
          "Description": "",
          "ValidFrom": "21-10-1983",
          "ValidTo": "",
          "Evaluated": "1",
          "Flagged": "1",
          "StepsFromStart": "3",
          "StepsFromStartInLayer": "1",
          "FlaggingNode": "",
          "NumberOfFlags": "0",
          "NetworkStartNode": "0",
          "TopNode": "0",
          "DisplayProperties": {
            "NodeIcons": "",
            "IconOverride": "FutureUse",
            "Size": "FutureUse",
            "AuraWeight": "FutureUse",
            "AuraColour": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "ID",
                "Value": "127.0000"
              },
              {
                "Name": "FIRST_NAME",
                "Value": "James"
              },
              {
                "Name": "LAST_NAME",
                "Value": "Landry"
              },
              {
                "Name": "DATE_OF_BIRTH",
                "Value": "1983-10-21"
              },
              {
                "Name": "SEX",
                "Value": "MALE"
              },
              {
                "Name": "LABEL",
                "Value": "James Landry"
              },
              {
                "Name": "DEPARTMENT_ID",
                "Value": "50.0000"
              },
              {
                "Name": "MANAGER_ID",
                "Value": "120.0000"
              },
              {
                "Name": "NUMBER_OF_STAFF",
                "Value": "0.0000"
              }
            ]
          }
        },
        {
          "SID": "2458522",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "CopiedFromNodeSID": "",
          "DuplicatesNodeSID": "",
          "NodeID": "PEOPLE",
          "SubNodeID": "YOUNG_MALE_EMPLOYEE",
          "NodeType": "NODE",
          "Label": "Ki Gee",
          "Key": "135Ki Gee",
          "Description": "",
          "ValidFrom": "23-09-1984",
          "ValidTo": "",
          "Evaluated": "1",
          "Flagged": "1",
          "StepsFromStart": "3",
          "StepsFromStartInLayer": "1",
          "FlaggingNode": "",
          "NumberOfFlags": "0",
          "NetworkStartNode": "0",
          "TopNode": "0",
          "DisplayProperties": {
            "NodeIcons": "",
            "IconOverride": "FutureUse",
            "Size": "FutureUse",
            "AuraWeight": "FutureUse",
            "AuraColour": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "ID",
                "Value": "135.0000"
              },
              {
                "Name": "FIRST_NAME",
                "Value": "Ki"
              },
              {
                "Name": "LAST_NAME",
                "Value": "Gee"
              },
              {
                "Name": "DATE_OF_BIRTH",
                "Value": "1984-09-23"
              },
              {
                "Name": "SEX",
                "Value": "MALE"
              },
              {
                "Name": "LABEL",
                "Value": "Ki Gee"
              },
              {
                "Name": "DEPARTMENT_ID",
                "Value": "50.0000"
              },
              {
                "Name": "MANAGER_ID",
                "Value": "122.0000"
              },
              {
                "Name": "NUMBER_OF_STAFF",
                "Value": "0.0000"
              }
            ]
          }
        },
        {
          "SID": "2458524",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "CopiedFromNodeSID": "",
          "DuplicatesNodeSID": "2458262",
          "NodeID": "PEOPLE",
          "SubNodeID": "YOUNG_FEMALE_EMPLOYEE",
          "NodeType": "NODE",
          "Label": "Martha Sullivan",
          "Key": "182Martha Sullivan",
          "Description": "",
          "ValidFrom": "24-02-1981",
          "ValidTo": "",
          "Evaluated": "1",
          "Flagged": "1",
          "StepsFromStart": "3",
          "StepsFromStartInLayer": "1",
          "FlaggingNode": "",
          "NumberOfFlags": "0",
          "NetworkStartNode": "1",
          "TopNode": "0",
          "DisplayProperties": {
            "NodeIcons": "",
            "IconOverride": "FutureUse",
            "Size": "FutureUse",
            "AuraWeight": "FutureUse",
            "AuraColour": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "ID",
                "Value": "182.0000"
              },
              {
                "Name": "FIRST_NAME",
                "Value": "Martha"
              },
              {
                "Name": "LAST_NAME",
                "Value": "Sullivan"
              },
              {
                "Name": "DATE_OF_BIRTH",
                "Value": "1981-02-24"
              },
              {
                "Name": "SEX",
                "Value": "FEMALE"
              },
              {
                "Name": "LABEL",
                "Value": "Martha Sullivan"
              },
              {
                "Name": "DEPARTMENT_ID",
                "Value": "50.0000"
              },
              {
                "Name": "MANAGER_ID",
                "Value": "120.0000"
              },
              {
                "Name": "NUMBER_OF_STAFF",
                "Value": "0.0000"
              }
            ]
          }
        },
        {
          "SID": "2458526",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "CopiedFromNodeSID": "",
          "DuplicatesNodeSID": "",
          "NodeID": "PEOPLE",
          "SubNodeID": "YOUNG_MALE_EMPLOYEE",
          "NodeType": "NODE",
          "Label": "James Marlow",
          "Key": "131James Marlow",
          "Description": "",
          "ValidFrom": "10-07-1986",
          "ValidTo": "",
          "Evaluated": "1",
          "Flagged": "1",
          "StepsFromStart": "3",
          "StepsFromStartInLayer": "1",
          "FlaggingNode": "",
          "NumberOfFlags": "0",
          "NetworkStartNode": "0",
          "TopNode": "0",
          "DisplayProperties": {
            "NodeIcons": "",
            "IconOverride": "FutureUse",
            "Size": "FutureUse",
            "AuraWeight": "FutureUse",
            "AuraColour": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "ID",
                "Value": "131.0000"
              },
              {
                "Name": "FIRST_NAME",
                "Value": "James"
              },
              {
                "Name": "LAST_NAME",
                "Value": "Marlow"
              },
              {
                "Name": "DATE_OF_BIRTH",
                "Value": "1986-07-10"
              },
              {
                "Name": "SEX",
                "Value": "MALE"
              },
              {
                "Name": "LABEL",
                "Value": "James Marlow"
              },
              {
                "Name": "DEPARTMENT_ID",
                "Value": "50.0000"
              },
              {
                "Name": "MANAGER_ID",
                "Value": "121.0000"
              },
              {
                "Name": "NUMBER_OF_STAFF",
                "Value": "0.0000"
              }
            ]
          }
        },
        {
          "SID": "2458528",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "CopiedFromNodeSID": "",
          "DuplicatesNodeSID": "",
          "NodeID": "PEOPLE",
          "SubNodeID": "YOUNG_MALE_EMPLOYEE",
          "NodeType": "NODE",
          "Label": "Randall Perkins",
          "Key": "191Randall Perkins",
          "Description": "",
          "ValidFrom": "15-08-1975",
          "ValidTo": "",
          "Evaluated": "1",
          "Flagged": "1",
          "StepsFromStart": "3",
          "StepsFromStartInLayer": "1",
          "FlaggingNode": "",
          "NumberOfFlags": "0",
          "NetworkStartNode": "0",
          "TopNode": "0",
          "DisplayProperties": {
            "NodeIcons": "",
            "IconOverride": "FutureUse",
            "Size": "FutureUse",
            "AuraWeight": "FutureUse",
            "AuraColour": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "ID",
                "Value": "191.0000"
              },
              {
                "Name": "FIRST_NAME",
                "Value": "Randall"
              },
              {
                "Name": "LAST_NAME",
                "Value": "Perkins"
              },
              {
                "Name": "DATE_OF_BIRTH",
                "Value": "1975-08-15"
              },
              {
                "Name": "SEX",
                "Value": "MALE"
              },
              {
                "Name": "LABEL",
                "Value": "Randall Perkins"
              },
              {
                "Name": "DEPARTMENT_ID",
                "Value": "50.0000"
              },
              {
                "Name": "MANAGER_ID",
                "Value": "122.0000"
              },
              {
                "Name": "NUMBER_OF_STAFF",
                "Value": "0.0000"
              }
            ]
          }
        },
        {
          "SID": "2458530",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "CopiedFromNodeSID": "",
          "DuplicatesNodeSID": "",
          "NodeID": "PEOPLE",
          "SubNodeID": "SEN_MALE_EMPLOYEE",
          "NodeType": "NODE",
          "Label": "Joshua Patel",
          "Key": "140Joshua Patel",
          "Description": "",
          "ValidFrom": "03-02-1949",
          "ValidTo": "23-09-1983",
          "Evaluated": "1",
          "Flagged": "1",
          "StepsFromStart": "3",
          "StepsFromStartInLayer": "1",
          "FlaggingNode": "",
          "NumberOfFlags": "0",
          "NetworkStartNode": "0",
          "TopNode": "0",
          "DisplayProperties": {
            "NodeIcons": "",
            "IconOverride": "FutureUse",
            "Size": "FutureUse",
            "AuraWeight": "FutureUse",
            "AuraColour": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "ID",
                "Value": "140.0000"
              },
              {
                "Name": "FIRST_NAME",
                "Value": "Joshua"
              },
              {
                "Name": "LAST_NAME",
                "Value": "Patel"
              },
              {
                "Name": "DATE_OF_BIRTH",
                "Value": "1949-02-03"
              },
              {
                "Name": "DATE_OF_DEATH",
                "Value": "1983-09-23"
              },
              {
                "Name": "SEX",
                "Value": "MALE"
              },
              {
                "Name": "LABEL",
                "Value": "Joshua Patel"
              },
              {
                "Name": "DEPARTMENT_ID",
                "Value": "50.0000"
              },
              {
                "Name": "MANAGER_ID",
                "Value": "123.0000"
              },
              {
                "Name": "NUMBER_OF_STAFF",
                "Value": "0.0000"
              }
            ]
          }
        },
        {
          "SID": "2458532",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "CopiedFromNodeSID": "",
          "DuplicatesNodeSID": "",
          "NodeID": "PEOPLE",
          "SubNodeID": "YOUNG_MALE_EMPLOYEE",
          "NodeType": "NODE",
          "Label": "Peter Vargas",
          "Key": "144Peter Vargas",
          "Description": "",
          "ValidFrom": "04-04-1974",
          "ValidTo": "",
          "Evaluated": "1",
          "Flagged": "1",
          "StepsFromStart": "3",
          "StepsFromStartInLayer": "1",
          "FlaggingNode": "",
          "NumberOfFlags": "0",
          "NetworkStartNode": "0",
          "TopNode": "0",
          "DisplayProperties": {
            "NodeIcons": "",
            "IconOverride": "FutureUse",
            "Size": "FutureUse",
            "AuraWeight": "FutureUse",
            "AuraColour": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "ID",
                "Value": "144.0000"
              },
              {
                "Name": "FIRST_NAME",
                "Value": "Peter"
              },
              {
                "Name": "LAST_NAME",
                "Value": "Vargas"
              },
              {
                "Name": "DATE_OF_BIRTH",
                "Value": "1974-04-04"
              },
              {
                "Name": "SEX",
                "Value": "MALE"
              },
              {
                "Name": "LABEL",
                "Value": "Peter Vargas"
              },
              {
                "Name": "DEPARTMENT_ID",
                "Value": "50.0000"
              },
              {
                "Name": "MANAGER_ID",
                "Value": "124.0000"
              },
              {
                "Name": "NUMBER_OF_STAFF",
                "Value": "0.0000"
              }
            ]
          }
        },
        {
          "SID": "2458534",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "CopiedFromNodeSID": "",
          "DuplicatesNodeSID": "",
          "NodeID": "PEOPLE",
          "SubNodeID": "YOUNG_MALE_EMPLOYEE",
          "NodeType": "NODE",
          "Label": "Randall Matos",
          "Key": "143Randall Matos",
          "Description": "",
          "ValidFrom": "08-10-1971",
          "ValidTo": "",
          "Evaluated": "1",
          "Flagged": "1",
          "StepsFromStart": "3",
          "StepsFromStartInLayer": "1",
          "FlaggingNode": "",
          "NumberOfFlags": "0",
          "NetworkStartNode": "0",
          "TopNode": "0",
          "DisplayProperties": {
            "NodeIcons": "",
            "IconOverride": "FutureUse",
            "Size": "FutureUse",
            "AuraWeight": "FutureUse",
            "AuraColour": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "ID",
                "Value": "143.0000"
              },
              {
                "Name": "FIRST_NAME",
                "Value": "Randall"
              },
              {
                "Name": "LAST_NAME",
                "Value": "Matos"
              },
              {
                "Name": "DATE_OF_BIRTH",
                "Value": "1971-10-08"
              },
              {
                "Name": "SEX",
                "Value": "MALE"
              },
              {
                "Name": "LABEL",
                "Value": "Randall Matos"
              },
              {
                "Name": "DEPARTMENT_ID",
                "Value": "50.0000"
              },
              {
                "Name": "MANAGER_ID",
                "Value": "124.0000"
              },
              {
                "Name": "NUMBER_OF_STAFF",
                "Value": "0.0000"
              }
            ]
          }
        },
        {
          "SID": "2458536",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "CopiedFromNodeSID": "",
          "DuplicatesNodeSID": "",
          "NodeID": "PEOPLE",
          "SubNodeID": "SEN_MALE_EMPLOYEE",
          "NodeType": "NODE",
          "Label": "Donald OConnell",
          "Key": "198Donald OConnell",
          "Description": "",
          "ValidFrom": "10-02-1966",
          "ValidTo": "22-04-2003",
          "Evaluated": "1",
          "Flagged": "1",
          "StepsFromStart": "3",
          "StepsFromStartInLayer": "1",
          "FlaggingNode": "",
          "NumberOfFlags": "0",
          "NetworkStartNode": "0",
          "TopNode": "0",
          "DisplayProperties": {
            "NodeIcons": "",
            "IconOverride": "FutureUse",
            "Size": "FutureUse",
            "AuraWeight": "FutureUse",
            "AuraColour": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "ID",
                "Value": "198.0000"
              },
              {
                "Name": "FIRST_NAME",
                "Value": "Donald"
              },
              {
                "Name": "LAST_NAME",
                "Value": "OConnell"
              },
              {
                "Name": "DATE_OF_BIRTH",
                "Value": "1966-02-10"
              },
              {
                "Name": "DATE_OF_DEATH",
                "Value": "2003-04-22"
              },
              {
                "Name": "SEX",
                "Value": "MALE"
              },
              {
                "Name": "LABEL",
                "Value": "Donald OConnell"
              },
              {
                "Name": "DEPARTMENT_ID",
                "Value": "50.0000"
              },
              {
                "Name": "MANAGER_ID",
                "Value": "124.0000"
              },
              {
                "Name": "NUMBER_OF_STAFF",
                "Value": "0.0000"
              }
            ]
          }
        },
        {
          "SID": "2458538",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "CopiedFromNodeSID": "",
          "DuplicatesNodeSID": "",
          "NodeID": "PEOPLE",
          "SubNodeID": "YOUNG_MALE_EMPLOYEE",
          "NodeType": "NODE",
          "Label": "Douglas Grant",
          "Key": "199Douglas Grant",
          "Description": "",
          "ValidFrom": "12-03-1985",
          "ValidTo": "16-07-2014",
          "Evaluated": "1",
          "Flagged": "1",
          "StepsFromStart": "3",
          "StepsFromStartInLayer": "1",
          "FlaggingNode": "",
          "NumberOfFlags": "0",
          "NetworkStartNode": "0",
          "TopNode": "0",
          "DisplayProperties": {
            "NodeIcons": "",
            "IconOverride": "FutureUse",
            "Size": "FutureUse",
            "AuraWeight": "FutureUse",
            "AuraColour": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "ID",
                "Value": "199.0000"
              },
              {
                "Name": "FIRST_NAME",
                "Value": "Douglas"
              },
              {
                "Name": "LAST_NAME",
                "Value": "Grant"
              },
              {
                "Name": "DATE_OF_BIRTH",
                "Value": "1985-03-12"
              },
              {
                "Name": "DATE_OF_DEATH",
                "Value": "2014-07-16"
              },
              {
                "Name": "SEX",
                "Value": "MALE"
              },
              {
                "Name": "LABEL",
                "Value": "Douglas Grant"
              },
              {
                "Name": "DEPARTMENT_ID",
                "Value": "50.0000"
              },
              {
                "Name": "MANAGER_ID",
                "Value": "124.0000"
              },
              {
                "Name": "NUMBER_OF_STAFF",
                "Value": "0.0000"
              }
            ]
          }
        },
        {
          "SID": "2458540",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "CopiedFromNodeSID": "",
          "DuplicatesNodeSID": "",
          "NodeID": "PEOPLE",
          "SubNodeID": "YOUNG_FEMALE_EMPLOYEE",
          "NodeType": "NODE",
          "Label": "Irene Mikkilineni",
          "Key": "126Irene Mikkilineni",
          "Description": "",
          "ValidFrom": "11-08-1976",
          "ValidTo": "",
          "Evaluated": "1",
          "Flagged": "1",
          "StepsFromStart": "3",
          "StepsFromStartInLayer": "1",
          "FlaggingNode": "",
          "NumberOfFlags": "0",
          "NetworkStartNode": "0",
          "TopNode": "0",
          "DisplayProperties": {
            "NodeIcons": "",
            "IconOverride": "FutureUse",
            "Size": "FutureUse",
            "AuraWeight": "FutureUse",
            "AuraColour": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "ID",
                "Value": "126.0000"
              },
              {
                "Name": "FIRST_NAME",
                "Value": "Irene"
              },
              {
                "Name": "LAST_NAME",
                "Value": "Mikkilineni"
              },
              {
                "Name": "DATE_OF_BIRTH",
                "Value": "1976-08-11"
              },
              {
                "Name": "SEX",
                "Value": "FEMALE"
              },
              {
                "Name": "LABEL",
                "Value": "Irene Mikkilineni"
              },
              {
                "Name": "DEPARTMENT_ID",
                "Value": "50.0000"
              },
              {
                "Name": "MANAGER_ID",
                "Value": "120.0000"
              },
              {
                "Name": "NUMBER_OF_STAFF",
                "Value": "0.0000"
              }
            ]
          }
        },
        {
          "SID": "2458542",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "CopiedFromNodeSID": "",
          "DuplicatesNodeSID": "",
          "NodeID": "PEOPLE",
          "SubNodeID": "YOUNG_MALE_EMPLOYEE",
          "NodeType": "NODE",
          "Label": "John Seo",
          "Key": "139John Seo",
          "Description": "",
          "ValidFrom": "12-11-1985",
          "ValidTo": "",
          "Evaluated": "1",
          "Flagged": "1",
          "StepsFromStart": "3",
          "StepsFromStartInLayer": "1",
          "FlaggingNode": "",
          "NumberOfFlags": "0",
          "NetworkStartNode": "0",
          "TopNode": "0",
          "DisplayProperties": {
            "NodeIcons": "",
            "IconOverride": "FutureUse",
            "Size": "FutureUse",
            "AuraWeight": "FutureUse",
            "AuraColour": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "ID",
                "Value": "139.0000"
              },
              {
                "Name": "FIRST_NAME",
                "Value": "John"
              },
              {
                "Name": "LAST_NAME",
                "Value": "Seo"
              },
              {
                "Name": "DATE_OF_BIRTH",
                "Value": "1985-11-12"
              },
              {
                "Name": "SEX",
                "Value": "MALE"
              },
              {
                "Name": "LABEL",
                "Value": "John Seo"
              },
              {
                "Name": "DEPARTMENT_ID",
                "Value": "50.0000"
              },
              {
                "Name": "MANAGER_ID",
                "Value": "123.0000"
              },
              {
                "Name": "NUMBER_OF_STAFF",
                "Value": "0.0000"
              }
            ]
          }
        },
        {
          "SID": "2458544",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "CopiedFromNodeSID": "",
          "DuplicatesNodeSID": "",
          "NodeID": "PEOPLE",
          "SubNodeID": "SEN_MALE_EMPLOYEE",
          "NodeType": "NODE",
          "Label": "Girard Geoni",
          "Key": "183Girard Geoni",
          "Description": "",
          "ValidFrom": "06-08-1953",
          "ValidTo": "",
          "Evaluated": "1",
          "Flagged": "1",
          "StepsFromStart": "3",
          "StepsFromStartInLayer": "1",
          "FlaggingNode": "",
          "NumberOfFlags": "0",
          "NetworkStartNode": "0",
          "TopNode": "0",
          "DisplayProperties": {
            "NodeIcons": "",
            "IconOverride": "FutureUse",
            "Size": "FutureUse",
            "AuraWeight": "FutureUse",
            "AuraColour": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "ID",
                "Value": "183.0000"
              },
              {
                "Name": "FIRST_NAME",
                "Value": "Girard"
              },
              {
                "Name": "LAST_NAME",
                "Value": "Geoni"
              },
              {
                "Name": "DATE_OF_BIRTH",
                "Value": "1953-08-06"
              },
              {
                "Name": "SEX",
                "Value": "MALE"
              },
              {
                "Name": "LABEL",
                "Value": "Girard Geoni"
              },
              {
                "Name": "DEPARTMENT_ID",
                "Value": "50.0000"
              },
              {
                "Name": "MANAGER_ID",
                "Value": "120.0000"
              },
              {
                "Name": "NUMBER_OF_STAFF",
                "Value": "0.0000"
              }
            ]
          }
        },
        {
          "SID": "2458546",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "CopiedFromNodeSID": "",
          "DuplicatesNodeSID": "",
          "NodeID": "PEOPLE",
          "SubNodeID": "YOUNG_MALE_EMPLOYEE",
          "NodeType": "NODE",
          "Label": "Mozhe Atkinson",
          "Key": "130Mozhe Atkinson",
          "Description": "",
          "ValidFrom": "02-11-1972",
          "ValidTo": "",
          "Evaluated": "1",
          "Flagged": "1",
          "StepsFromStart": "3",
          "StepsFromStartInLayer": "1",
          "FlaggingNode": "",
          "NumberOfFlags": "0",
          "NetworkStartNode": "0",
          "TopNode": "0",
          "DisplayProperties": {
            "NodeIcons": "",
            "IconOverride": "FutureUse",
            "Size": "FutureUse",
            "AuraWeight": "FutureUse",
            "AuraColour": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "ID",
                "Value": "130.0000"
              },
              {
                "Name": "FIRST_NAME",
                "Value": "Mozhe"
              },
              {
                "Name": "LAST_NAME",
                "Value": "Atkinson"
              },
              {
                "Name": "DATE_OF_BIRTH",
                "Value": "1972-11-02"
              },
              {
                "Name": "SEX",
                "Value": "MALE"
              },
              {
                "Name": "LABEL",
                "Value": "Mozhe Atkinson"
              },
              {
                "Name": "DEPARTMENT_ID",
                "Value": "50.0000"
              },
              {
                "Name": "MANAGER_ID",
                "Value": "121.0000"
              },
              {
                "Name": "NUMBER_OF_STAFF",
                "Value": "0.0000"
              }
            ]
          }
        },
        {
          "SID": "2458548",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "CopiedFromNodeSID": "",
          "DuplicatesNodeSID": "",
          "NodeID": "PEOPLE",
          "SubNodeID": "SEN_MALE_EMPLOYEE",
          "NodeType": "NODE",
          "Label": "Vance Jones",
          "Key": "195Vance Jones",
          "Description": "",
          "ValidFrom": "04-02-1953",
          "ValidTo": "",
          "Evaluated": "1",
          "Flagged": "1",
          "StepsFromStart": "3",
          "StepsFromStartInLayer": "1",
          "FlaggingNode": "",
          "NumberOfFlags": "0",
          "NetworkStartNode": "0",
          "TopNode": "0",
          "DisplayProperties": {
            "NodeIcons": "",
            "IconOverride": "FutureUse",
            "Size": "FutureUse",
            "AuraWeight": "FutureUse",
            "AuraColour": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "ID",
                "Value": "195.0000"
              },
              {
                "Name": "FIRST_NAME",
                "Value": "Vance"
              },
              {
                "Name": "LAST_NAME",
                "Value": "Jones"
              },
              {
                "Name": "DATE_OF_BIRTH",
                "Value": "1953-02-04"
              },
              {
                "Name": "SEX",
                "Value": "MALE"
              },
              {
                "Name": "LABEL",
                "Value": "Vance Jones"
              },
              {
                "Name": "DEPARTMENT_ID",
                "Value": "50.0000"
              },
              {
                "Name": "MANAGER_ID",
                "Value": "123.0000"
              },
              {
                "Name": "NUMBER_OF_STAFF",
                "Value": "0.0000"
              }
            ]
          }
        },
        {
          "SID": "2458550",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "CopiedFromNodeSID": "",
          "DuplicatesNodeSID": "",
          "NodeID": "PEOPLE",
          "SubNodeID": "SEN_MALE_EMPLOYEE",
          "NodeType": "NODE",
          "Label": "Michael Rogers",
          "Key": "134Michael Rogers",
          "Description": "",
          "ValidFrom": "19-07-1960",
          "ValidTo": "",
          "Evaluated": "1",
          "Flagged": "1",
          "StepsFromStart": "3",
          "StepsFromStartInLayer": "1",
          "FlaggingNode": "",
          "NumberOfFlags": "0",
          "NetworkStartNode": "0",
          "TopNode": "0",
          "DisplayProperties": {
            "NodeIcons": "",
            "IconOverride": "FutureUse",
            "Size": "FutureUse",
            "AuraWeight": "FutureUse",
            "AuraColour": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "ID",
                "Value": "134.0000"
              },
              {
                "Name": "FIRST_NAME",
                "Value": "Michael"
              },
              {
                "Name": "LAST_NAME",
                "Value": "Rogers"
              },
              {
                "Name": "DATE_OF_BIRTH",
                "Value": "1960-07-19"
              },
              {
                "Name": "SEX",
                "Value": "MALE"
              },
              {
                "Name": "LABEL",
                "Value": "Michael Rogers"
              },
              {
                "Name": "DEPARTMENT_ID",
                "Value": "50.0000"
              },
              {
                "Name": "MANAGER_ID",
                "Value": "122.0000"
              },
              {
                "Name": "NUMBER_OF_STAFF",
                "Value": "0.0000"
              }
            ]
          }
        },
        {
          "SID": "2458552",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "CopiedFromNodeSID": "",
          "DuplicatesNodeSID": "",
          "NodeID": "PEOPLE",
          "SubNodeID": "YOUNG_MALE_EMPLOYEE",
          "NodeType": "NODE",
          "Label": "Timothy Gates",
          "Key": "190Timothy Gates",
          "Description": "",
          "ValidFrom": "08-09-1968",
          "ValidTo": "",
          "Evaluated": "1",
          "Flagged": "1",
          "StepsFromStart": "3",
          "StepsFromStartInLayer": "1",
          "FlaggingNode": "",
          "NumberOfFlags": "0",
          "NetworkStartNode": "0",
          "TopNode": "0",
          "DisplayProperties": {
            "NodeIcons": "",
            "IconOverride": "FutureUse",
            "Size": "FutureUse",
            "AuraWeight": "FutureUse",
            "AuraColour": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "ID",
                "Value": "190.0000"
              },
              {
                "Name": "FIRST_NAME",
                "Value": "Timothy"
              },
              {
                "Name": "LAST_NAME",
                "Value": "Gates"
              },
              {
                "Name": "DATE_OF_BIRTH",
                "Value": "1968-09-08"
              },
              {
                "Name": "SEX",
                "Value": "MALE"
              },
              {
                "Name": "LABEL",
                "Value": "Timothy Gates"
              },
              {
                "Name": "DEPARTMENT_ID",
                "Value": "50.0000"
              },
              {
                "Name": "MANAGER_ID",
                "Value": "122.0000"
              },
              {
                "Name": "NUMBER_OF_STAFF",
                "Value": "0.0000"
              }
            ]
          }
        },
        {
          "SID": "2458554",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "CopiedFromNodeSID": "",
          "DuplicatesNodeSID": "",
          "NodeID": "PEOPLE",
          "SubNodeID": "YOUNG_MALE_EMPLOYEE",
          "NodeType": "NODE",
          "Label": "Anthony Cabrio",
          "Key": "187Anthony Cabrio",
          "Description": "",
          "ValidFrom": "23-08-1968",
          "ValidTo": "",
          "Evaluated": "1",
          "Flagged": "1",
          "StepsFromStart": "3",
          "StepsFromStartInLayer": "1",
          "FlaggingNode": "",
          "NumberOfFlags": "0",
          "NetworkStartNode": "0",
          "TopNode": "0",
          "DisplayProperties": {
            "NodeIcons": "",
            "IconOverride": "FutureUse",
            "Size": "FutureUse",
            "AuraWeight": "FutureUse",
            "AuraColour": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "ID",
                "Value": "187.0000"
              },
              {
                "Name": "FIRST_NAME",
                "Value": "Anthony"
              },
              {
                "Name": "LAST_NAME",
                "Value": "Cabrio"
              },
              {
                "Name": "DATE_OF_BIRTH",
                "Value": "1968-08-23"
              },
              {
                "Name": "SEX",
                "Value": "MALE"
              },
              {
                "Name": "LABEL",
                "Value": "Anthony Cabrio"
              },
              {
                "Name": "DEPARTMENT_ID",
                "Value": "50.0000"
              },
              {
                "Name": "MANAGER_ID",
                "Value": "121.0000"
              },
              {
                "Name": "NUMBER_OF_STAFF",
                "Value": "0.0000"
              }
            ]
          }
        },
        {
          "SID": "2458556",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "CopiedFromNodeSID": "",
          "DuplicatesNodeSID": "",
          "NodeID": "PEOPLE",
          "SubNodeID": "SEN_MALE_EMPLOYEE",
          "NodeType": "NODE",
          "Label": "Kevin Feeney",
          "Key": "197Kevin Feeney",
          "Description": "",
          "ValidFrom": "16-07-1954",
          "ValidTo": "",
          "Evaluated": "1",
          "Flagged": "1",
          "StepsFromStart": "3",
          "StepsFromStartInLayer": "1",
          "FlaggingNode": "",
          "NumberOfFlags": "0",
          "NetworkStartNode": "0",
          "TopNode": "0",
          "DisplayProperties": {
            "NodeIcons": "",
            "IconOverride": "FutureUse",
            "Size": "FutureUse",
            "AuraWeight": "FutureUse",
            "AuraColour": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "ID",
                "Value": "197.0000"
              },
              {
                "Name": "FIRST_NAME",
                "Value": "Kevin"
              },
              {
                "Name": "LAST_NAME",
                "Value": "Feeney"
              },
              {
                "Name": "DATE_OF_BIRTH",
                "Value": "1954-07-16"
              },
              {
                "Name": "SEX",
                "Value": "MALE"
              },
              {
                "Name": "LABEL",
                "Value": "Kevin Feeney"
              },
              {
                "Name": "DEPARTMENT_ID",
                "Value": "50.0000"
              },
              {
                "Name": "MANAGER_ID",
                "Value": "124.0000"
              },
              {
                "Name": "NUMBER_OF_STAFF",
                "Value": "0.0000"
              }
            ]
          }
        },
        {
          "SID": "2458558",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "CopiedFromNodeSID": "",
          "DuplicatesNodeSID": "",
          "NodeID": "PEOPLE",
          "SubNodeID": "YOUNG_FEMALE_EMPLOYEE",
          "NodeType": "NODE",
          "Label": "Jean Fleaur",
          "Key": "181Jean Fleaur",
          "Description": "",
          "ValidFrom": "08-07-1976",
          "ValidTo": "",
          "Evaluated": "1",
          "Flagged": "1",
          "StepsFromStart": "3",
          "StepsFromStartInLayer": "1",
          "FlaggingNode": "",
          "NumberOfFlags": "0",
          "NetworkStartNode": "0",
          "TopNode": "0",
          "DisplayProperties": {
            "NodeIcons": "",
            "IconOverride": "FutureUse",
            "Size": "FutureUse",
            "AuraWeight": "FutureUse",
            "AuraColour": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "ID",
                "Value": "181.0000"
              },
              {
                "Name": "FIRST_NAME",
                "Value": "Jean"
              },
              {
                "Name": "LAST_NAME",
                "Value": "Fleaur"
              },
              {
                "Name": "DATE_OF_BIRTH",
                "Value": "1976-07-08"
              },
              {
                "Name": "SEX",
                "Value": "FEMALE"
              },
              {
                "Name": "LABEL",
                "Value": "Jean Fleaur"
              },
              {
                "Name": "DEPARTMENT_ID",
                "Value": "50.0000"
              },
              {
                "Name": "MANAGER_ID",
                "Value": "120.0000"
              },
              {
                "Name": "NUMBER_OF_STAFF",
                "Value": "0.0000"
              }
            ]
          }
        },
        {
          "SID": "2458560",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "CopiedFromNodeSID": "",
          "DuplicatesNodeSID": "",
          "NodeID": "PEOPLE",
          "SubNodeID": "YOUNG_MALE_EMPLOYEE",
          "NodeType": "NODE",
          "Label": "Curtis Davies",
          "Key": "142Curtis Davies",
          "Description": "",
          "ValidFrom": "07-03-1985",
          "ValidTo": "",
          "Evaluated": "1",
          "Flagged": "1",
          "StepsFromStart": "3",
          "StepsFromStartInLayer": "1",
          "FlaggingNode": "",
          "NumberOfFlags": "0",
          "NetworkStartNode": "0",
          "TopNode": "0",
          "DisplayProperties": {
            "NodeIcons": "",
            "IconOverride": "FutureUse",
            "Size": "FutureUse",
            "AuraWeight": "FutureUse",
            "AuraColour": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "ID",
                "Value": "142.0000"
              },
              {
                "Name": "FIRST_NAME",
                "Value": "Curtis"
              },
              {
                "Name": "LAST_NAME",
                "Value": "Davies"
              },
              {
                "Name": "DATE_OF_BIRTH",
                "Value": "1985-03-07"
              },
              {
                "Name": "SEX",
                "Value": "MALE"
              },
              {
                "Name": "LABEL",
                "Value": "Curtis Davies"
              },
              {
                "Name": "DEPARTMENT_ID",
                "Value": "50.0000"
              },
              {
                "Name": "MANAGER_ID",
                "Value": "124.0000"
              },
              {
                "Name": "NUMBER_OF_STAFF",
                "Value": "0.0000"
              }
            ]
          }
        },
        {
          "SID": "2458562",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "CopiedFromNodeSID": "",
          "DuplicatesNodeSID": "",
          "NodeID": "PEOPLE",
          "SubNodeID": "SEN_FEMALE_EMPLOYEE",
          "NodeType": "NODE",
          "Label": "Alana Walsh",
          "Key": "196Alana Walsh",
          "Description": "",
          "ValidFrom": "05-04-1951",
          "ValidTo": "",
          "Evaluated": "1",
          "Flagged": "1",
          "StepsFromStart": "3",
          "StepsFromStartInLayer": "1",
          "FlaggingNode": "",
          "NumberOfFlags": "0",
          "NetworkStartNode": "0",
          "TopNode": "0",
          "DisplayProperties": {
            "NodeIcons": "",
            "IconOverride": "FutureUse",
            "Size": "FutureUse",
            "AuraWeight": "FutureUse",
            "AuraColour": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "ID",
                "Value": "196.0000"
              },
              {
                "Name": "FIRST_NAME",
                "Value": "Alana"
              },
              {
                "Name": "LAST_NAME",
                "Value": "Walsh"
              },
              {
                "Name": "DATE_OF_BIRTH",
                "Value": "1951-04-05"
              },
              {
                "Name": "SEX",
                "Value": "FEMALE"
              },
              {
                "Name": "LABEL",
                "Value": "Alana Walsh"
              },
              {
                "Name": "DEPARTMENT_ID",
                "Value": "50.0000"
              },
              {
                "Name": "MANAGER_ID",
                "Value": "124.0000"
              },
              {
                "Name": "NUMBER_OF_STAFF",
                "Value": "0.0000"
              }
            ]
          }
        },
        {
          "SID": "2458564",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "CopiedFromNodeSID": "",
          "DuplicatesNodeSID": "",
          "NodeID": "PEOPLE",
          "SubNodeID": "YOUNG_FEMALE_EMPLOYEE",
          "NodeType": "NODE",
          "Label": "Julia Nayer",
          "Key": "125Julia Nayer",
          "Description": "",
          "ValidFrom": "17-10-1984",
          "ValidTo": "",
          "Evaluated": "1",
          "Flagged": "1",
          "StepsFromStart": "3",
          "StepsFromStartInLayer": "1",
          "FlaggingNode": "",
          "NumberOfFlags": "0",
          "NetworkStartNode": "0",
          "TopNode": "0",
          "DisplayProperties": {
            "NodeIcons": "",
            "IconOverride": "FutureUse",
            "Size": "FutureUse",
            "AuraWeight": "FutureUse",
            "AuraColour": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "ID",
                "Value": "125.0000"
              },
              {
                "Name": "FIRST_NAME",
                "Value": "Julia"
              },
              {
                "Name": "LAST_NAME",
                "Value": "Nayer"
              },
              {
                "Name": "DATE_OF_BIRTH",
                "Value": "1984-10-17"
              },
              {
                "Name": "SEX",
                "Value": "FEMALE"
              },
              {
                "Name": "LABEL",
                "Value": "Julia Nayer"
              },
              {
                "Name": "DEPARTMENT_ID",
                "Value": "50.0000"
              },
              {
                "Name": "MANAGER_ID",
                "Value": "120.0000"
              },
              {
                "Name": "NUMBER_OF_STAFF",
                "Value": "0.0000"
              }
            ]
          }
        },
        {
          "SID": "2458566",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "CopiedFromNodeSID": "",
          "DuplicatesNodeSID": "",
          "NodeID": "PEOPLE",
          "SubNodeID": "YOUNG_MALE_EMPLOYEE",
          "NodeType": "NODE",
          "Label": "Winston Taylor",
          "Key": "180Winston Taylor",
          "Description": "",
          "ValidFrom": "26-11-1984",
          "ValidTo": "21-03-1990",
          "Evaluated": "1",
          "Flagged": "1",
          "StepsFromStart": "3",
          "StepsFromStartInLayer": "1",
          "FlaggingNode": "",
          "NumberOfFlags": "0",
          "NetworkStartNode": "0",
          "TopNode": "0",
          "DisplayProperties": {
            "NodeIcons": "",
            "IconOverride": "FutureUse",
            "Size": "FutureUse",
            "AuraWeight": "FutureUse",
            "AuraColour": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "ID",
                "Value": "180.0000"
              },
              {
                "Name": "FIRST_NAME",
                "Value": "Winston"
              },
              {
                "Name": "LAST_NAME",
                "Value": "Taylor"
              },
              {
                "Name": "DATE_OF_BIRTH",
                "Value": "1984-11-26"
              },
              {
                "Name": "DATE_OF_DEATH",
                "Value": "1990-03-21"
              },
              {
                "Name": "SEX",
                "Value": "MALE"
              },
              {
                "Name": "LABEL",
                "Value": "Winston Taylor"
              },
              {
                "Name": "DEPARTMENT_ID",
                "Value": "50.0000"
              },
              {
                "Name": "MANAGER_ID",
                "Value": "120.0000"
              },
              {
                "Name": "NUMBER_OF_STAFF",
                "Value": "0.0000"
              }
            ]
          }
        },
        {
          "SID": "2458568",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "CopiedFromNodeSID": "",
          "DuplicatesNodeSID": "",
          "NodeID": "PEOPLE",
          "SubNodeID": "YOUNG_MALE_EMPLOYEE",
          "NodeType": "NODE",
          "Label": "Stephen Stiles",
          "Key": "138Stephen Stiles",
          "Description": "",
          "ValidFrom": "10-01-1968",
          "ValidTo": "",
          "Evaluated": "1",
          "Flagged": "1",
          "StepsFromStart": "3",
          "StepsFromStartInLayer": "1",
          "FlaggingNode": "",
          "NumberOfFlags": "0",
          "NetworkStartNode": "0",
          "TopNode": "0",
          "DisplayProperties": {
            "NodeIcons": "",
            "IconOverride": "FutureUse",
            "Size": "FutureUse",
            "AuraWeight": "FutureUse",
            "AuraColour": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "ID",
                "Value": "138.0000"
              },
              {
                "Name": "FIRST_NAME",
                "Value": "Stephen"
              },
              {
                "Name": "LAST_NAME",
                "Value": "Stiles"
              },
              {
                "Name": "DATE_OF_BIRTH",
                "Value": "1968-01-10"
              },
              {
                "Name": "SEX",
                "Value": "MALE"
              },
              {
                "Name": "LABEL",
                "Value": "Stephen Stiles"
              },
              {
                "Name": "DEPARTMENT_ID",
                "Value": "50.0000"
              },
              {
                "Name": "MANAGER_ID",
                "Value": "123.0000"
              },
              {
                "Name": "NUMBER_OF_STAFF",
                "Value": "0.0000"
              }
            ]
          }
        },
        {
          "SID": "2458570",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "CopiedFromNodeSID": "",
          "DuplicatesNodeSID": "",
          "NodeID": "PEOPLE",
          "SubNodeID": "YOUNG_MALE_EMPLOYEE",
          "NodeType": "NODE",
          "Label": "Samuel McCain",
          "Key": "194Samuel McCain",
          "Description": "",
          "ValidFrom": "19-04-1978",
          "ValidTo": "",
          "Evaluated": "1",
          "Flagged": "1",
          "StepsFromStart": "3",
          "StepsFromStartInLayer": "1",
          "FlaggingNode": "",
          "NumberOfFlags": "0",
          "NetworkStartNode": "0",
          "TopNode": "0",
          "DisplayProperties": {
            "NodeIcons": "",
            "IconOverride": "FutureUse",
            "Size": "FutureUse",
            "AuraWeight": "FutureUse",
            "AuraColour": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "ID",
                "Value": "194.0000"
              },
              {
                "Name": "FIRST_NAME",
                "Value": "Samuel"
              },
              {
                "Name": "LAST_NAME",
                "Value": "McCain"
              },
              {
                "Name": "DATE_OF_BIRTH",
                "Value": "1978-04-19"
              },
              {
                "Name": "SEX",
                "Value": "MALE"
              },
              {
                "Name": "LABEL",
                "Value": "Samuel McCain"
              },
              {
                "Name": "DEPARTMENT_ID",
                "Value": "50.0000"
              },
              {
                "Name": "MANAGER_ID",
                "Value": "123.0000"
              },
              {
                "Name": "NUMBER_OF_STAFF",
                "Value": "0.0000"
              }
            ]
          }
        },
        {
          "SID": "2458572",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "CopiedFromNodeSID": "",
          "DuplicatesNodeSID": "",
          "NodeID": "PEOPLE",
          "SubNodeID": "SEN_FEMALE_EMPLOYEE",
          "NodeType": "NODE",
          "Label": "Laura Bissot",
          "Key": "129Laura Bissot",
          "Description": "",
          "ValidFrom": "22-07-1961",
          "ValidTo": "",
          "Evaluated": "1",
          "Flagged": "1",
          "StepsFromStart": "3",
          "StepsFromStartInLayer": "1",
          "FlaggingNode": "",
          "NumberOfFlags": "0",
          "NetworkStartNode": "0",
          "TopNode": "0",
          "DisplayProperties": {
            "NodeIcons": "",
            "IconOverride": "FutureUse",
            "Size": "FutureUse",
            "AuraWeight": "FutureUse",
            "AuraColour": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "ID",
                "Value": "129.0000"
              },
              {
                "Name": "FIRST_NAME",
                "Value": "Laura"
              },
              {
                "Name": "LAST_NAME",
                "Value": "Bissot"
              },
              {
                "Name": "DATE_OF_BIRTH",
                "Value": "1961-07-22"
              },
              {
                "Name": "SEX",
                "Value": "FEMALE"
              },
              {
                "Name": "LABEL",
                "Value": "Laura Bissot"
              },
              {
                "Name": "DEPARTMENT_ID",
                "Value": "50.0000"
              },
              {
                "Name": "MANAGER_ID",
                "Value": "121.0000"
              },
              {
                "Name": "NUMBER_OF_STAFF",
                "Value": "0.0000"
              }
            ]
          }
        },
        {
          "SID": "2458574",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "CopiedFromNodeSID": "",
          "DuplicatesNodeSID": "",
          "NodeID": "PEOPLE",
          "SubNodeID": "YOUNG_MALE_EMPLOYEE",
          "NodeType": "NODE",
          "Label": "Jason Mallin",
          "Key": "133Jason Mallin",
          "Description": "",
          "ValidFrom": "05-12-1978",
          "ValidTo": "",
          "Evaluated": "1",
          "Flagged": "1",
          "StepsFromStart": "3",
          "StepsFromStartInLayer": "1",
          "FlaggingNode": "",
          "NumberOfFlags": "0",
          "NetworkStartNode": "0",
          "TopNode": "0",
          "DisplayProperties": {
            "NodeIcons": "",
            "IconOverride": "FutureUse",
            "Size": "FutureUse",
            "AuraWeight": "FutureUse",
            "AuraColour": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "ID",
                "Value": "133.0000"
              },
              {
                "Name": "FIRST_NAME",
                "Value": "Jason"
              },
              {
                "Name": "LAST_NAME",
                "Value": "Mallin"
              },
              {
                "Name": "DATE_OF_BIRTH",
                "Value": "1978-12-05"
              },
              {
                "Name": "SEX",
                "Value": "MALE"
              },
              {
                "Name": "LABEL",
                "Value": "Jason Mallin"
              },
              {
                "Name": "DEPARTMENT_ID",
                "Value": "50.0000"
              },
              {
                "Name": "MANAGER_ID",
                "Value": "122.0000"
              },
              {
                "Name": "NUMBER_OF_STAFF",
                "Value": "0.0000"
              }
            ]
          }
        },
        {
          "SID": "2458576",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "CopiedFromNodeSID": "",
          "DuplicatesNodeSID": "",
          "NodeID": "PEOPLE",
          "SubNodeID": "YOUNG_FEMALE_EMPLOYEE",
          "NodeType": "NODE",
          "Label": "Julia Dellinger",
          "Key": "186Julia Dellinger",
          "Description": "",
          "ValidFrom": "07-03-1975",
          "ValidTo": "",
          "Evaluated": "1",
          "Flagged": "1",
          "StepsFromStart": "3",
          "StepsFromStartInLayer": "1",
          "FlaggingNode": "",
          "NumberOfFlags": "0",
          "NetworkStartNode": "0",
          "TopNode": "0",
          "DisplayProperties": {
            "NodeIcons": "",
            "IconOverride": "FutureUse",
            "Size": "FutureUse",
            "AuraWeight": "FutureUse",
            "AuraColour": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "ID",
                "Value": "186.0000"
              },
              {
                "Name": "FIRST_NAME",
                "Value": "Julia"
              },
              {
                "Name": "LAST_NAME",
                "Value": "Dellinger"
              },
              {
                "Name": "DATE_OF_BIRTH",
                "Value": "1975-03-07"
              },
              {
                "Name": "SEX",
                "Value": "FEMALE"
              },
              {
                "Name": "LABEL",
                "Value": "Julia Dellinger"
              },
              {
                "Name": "DEPARTMENT_ID",
                "Value": "50.0000"
              },
              {
                "Name": "MANAGER_ID",
                "Value": "121.0000"
              },
              {
                "Name": "NUMBER_OF_STAFF",
                "Value": "0.0000"
              }
            ]
          }
        },
        {
          "SID": "2458578",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "CopiedFromNodeSID": "",
          "DuplicatesNodeSID": "",
          "NodeID": "PEOPLE",
          "SubNodeID": "YOUNG_FEMALE_EMPLOYEE",
          "NodeType": "NODE",
          "Label": "Trenna Rajs",
          "Key": "141Trenna Rajs",
          "Description": "",
          "ValidFrom": "22-01-1984",
          "ValidTo": "",
          "Evaluated": "1",
          "Flagged": "1",
          "StepsFromStart": "3",
          "StepsFromStartInLayer": "1",
          "FlaggingNode": "",
          "NumberOfFlags": "0",
          "NetworkStartNode": "0",
          "TopNode": "0",
          "DisplayProperties": {
            "NodeIcons": "",
            "IconOverride": "FutureUse",
            "Size": "FutureUse",
            "AuraWeight": "FutureUse",
            "AuraColour": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "ID",
                "Value": "141.0000"
              },
              {
                "Name": "FIRST_NAME",
                "Value": "Trenna"
              },
              {
                "Name": "LAST_NAME",
                "Value": "Rajs"
              },
              {
                "Name": "DATE_OF_BIRTH",
                "Value": "1984-01-22"
              },
              {
                "Name": "SEX",
                "Value": "FEMALE"
              },
              {
                "Name": "LABEL",
                "Value": "Trenna Rajs"
              },
              {
                "Name": "DEPARTMENT_ID",
                "Value": "50.0000"
              },
              {
                "Name": "MANAGER_ID",
                "Value": "124.0000"
              },
              {
                "Name": "NUMBER_OF_STAFF",
                "Value": "0.0000"
              }
            ]
          }
        },
        {
          "SID": "2458580",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "CopiedFromNodeSID": "",
          "DuplicatesNodeSID": "",
          "NodeID": "PEOPLE",
          "SubNodeID": "SEN_FEMALE_EMPLOYEE",
          "NodeType": "NODE",
          "Label": "Jennifer Dilly",
          "Key": "189Jennifer Dilly",
          "Description": "",
          "ValidFrom": "04-08-1956",
          "ValidTo": "",
          "Evaluated": "1",
          "Flagged": "1",
          "StepsFromStart": "3",
          "StepsFromStartInLayer": "1",
          "FlaggingNode": "",
          "NumberOfFlags": "0",
          "NetworkStartNode": "0",
          "TopNode": "0",
          "DisplayProperties": {
            "NodeIcons": "",
            "IconOverride": "FutureUse",
            "Size": "FutureUse",
            "AuraWeight": "FutureUse",
            "AuraColour": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "ID",
                "Value": "189.0000"
              },
              {
                "Name": "FIRST_NAME",
                "Value": "Jennifer"
              },
              {
                "Name": "LAST_NAME",
                "Value": "Dilly"
              },
              {
                "Name": "DATE_OF_BIRTH",
                "Value": "1956-08-04"
              },
              {
                "Name": "SEX",
                "Value": "FEMALE"
              },
              {
                "Name": "LABEL",
                "Value": "Jennifer Dilly"
              },
              {
                "Name": "DEPARTMENT_ID",
                "Value": "50.0000"
              },
              {
                "Name": "MANAGER_ID",
                "Value": "122.0000"
              },
              {
                "Name": "NUMBER_OF_STAFF",
                "Value": "0.0000"
              }
            ]
          }
        },
        {
          "SID": "2458582",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "CopiedFromNodeSID": "",
          "DuplicatesNodeSID": "",
          "NodeID": "PEOPLE",
          "SubNodeID": "SEN_FEMALE_EMPLOYEE",
          "NodeType": "NODE",
          "Label": "Renske Ladwig",
          "Key": "137Renske Ladwig",
          "Description": "",
          "ValidFrom": "17-06-1949",
          "ValidTo": "",
          "Evaluated": "1",
          "Flagged": "1",
          "StepsFromStart": "3",
          "StepsFromStartInLayer": "1",
          "FlaggingNode": "",
          "NumberOfFlags": "0",
          "NetworkStartNode": "0",
          "TopNode": "0",
          "DisplayProperties": {
            "NodeIcons": "",
            "IconOverride": "FutureUse",
            "Size": "FutureUse",
            "AuraWeight": "FutureUse",
            "AuraColour": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "ID",
                "Value": "137.0000"
              },
              {
                "Name": "FIRST_NAME",
                "Value": "Renske"
              },
              {
                "Name": "LAST_NAME",
                "Value": "Ladwig"
              },
              {
                "Name": "DATE_OF_BIRTH",
                "Value": "1949-06-17"
              },
              {
                "Name": "SEX",
                "Value": "FEMALE"
              },
              {
                "Name": "LABEL",
                "Value": "Renske Ladwig"
              },
              {
                "Name": "DEPARTMENT_ID",
                "Value": "50.0000"
              },
              {
                "Name": "MANAGER_ID",
                "Value": "123.0000"
              },
              {
                "Name": "NUMBER_OF_STAFF",
                "Value": "0.0000"
              }
            ]
          }
        },
        {
          "SID": "2458584",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "CopiedFromNodeSID": "",
          "DuplicatesNodeSID": "",
          "NodeID": "PEOPLE",
          "SubNodeID": "YOUNG_FEMALE_EMPLOYEE",
          "NodeType": "NODE",
          "Label": "Kelly Chung",
          "Key": "188Kelly Chung",
          "Description": "",
          "ValidFrom": "09-07-1974",
          "ValidTo": "",
          "Evaluated": "1",
          "Flagged": "1",
          "StepsFromStart": "3",
          "StepsFromStartInLayer": "1",
          "FlaggingNode": "",
          "NumberOfFlags": "0",
          "NetworkStartNode": "0",
          "TopNode": "0",
          "DisplayProperties": {
            "NodeIcons": "",
            "IconOverride": "FutureUse",
            "Size": "FutureUse",
            "AuraWeight": "FutureUse",
            "AuraColour": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "ID",
                "Value": "188.0000"
              },
              {
                "Name": "FIRST_NAME",
                "Value": "Kelly"
              },
              {
                "Name": "LAST_NAME",
                "Value": "Chung"
              },
              {
                "Name": "DATE_OF_BIRTH",
                "Value": "1974-07-09"
              },
              {
                "Name": "SEX",
                "Value": "FEMALE"
              },
              {
                "Name": "LABEL",
                "Value": "Kelly Chung"
              },
              {
                "Name": "DEPARTMENT_ID",
                "Value": "50.0000"
              },
              {
                "Name": "MANAGER_ID",
                "Value": "122.0000"
              },
              {
                "Name": "NUMBER_OF_STAFF",
                "Value": "0.0000"
              }
            ]
          }
        },
        {
          "SID": "2458586",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "CopiedFromNodeSID": "",
          "DuplicatesNodeSID": "",
          "NodeID": "PEOPLE",
          "SubNodeID": "SEN_FEMALE_EMPLOYEE",
          "NodeType": "NODE",
          "Label": "Britney Everett",
          "Key": "193Britney Everett",
          "Description": "",
          "ValidFrom": "22-11-1965",
          "ValidTo": "",
          "Evaluated": "1",
          "Flagged": "1",
          "StepsFromStart": "3",
          "StepsFromStartInLayer": "1",
          "FlaggingNode": "",
          "NumberOfFlags": "0",
          "NetworkStartNode": "0",
          "TopNode": "0",
          "DisplayProperties": {
            "NodeIcons": "",
            "IconOverride": "FutureUse",
            "Size": "FutureUse",
            "AuraWeight": "FutureUse",
            "AuraColour": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "ID",
                "Value": "193.0000"
              },
              {
                "Name": "FIRST_NAME",
                "Value": "Britney"
              },
              {
                "Name": "LAST_NAME",
                "Value": "Everett"
              },
              {
                "Name": "DATE_OF_BIRTH",
                "Value": "1965-11-22"
              },
              {
                "Name": "SEX",
                "Value": "FEMALE"
              },
              {
                "Name": "LABEL",
                "Value": "Britney Everett"
              },
              {
                "Name": "DEPARTMENT_ID",
                "Value": "50.0000"
              },
              {
                "Name": "MANAGER_ID",
                "Value": "123.0000"
              },
              {
                "Name": "NUMBER_OF_STAFF",
                "Value": "0.0000"
              }
            ]
          }
        },
        {
          "SID": "2458588",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "CopiedFromNodeSID": "",
          "DuplicatesNodeSID": "",
          "NodeID": "PEOPLE",
          "SubNodeID": "YOUNG_FEMALE_EMPLOYEE",
          "NodeType": "NODE",
          "Label": "Sarah Bell",
          "Key": "192Sarah Bell",
          "Description": "",
          "ValidFrom": "22-06-1983",
          "ValidTo": "",
          "Evaluated": "1",
          "Flagged": "1",
          "StepsFromStart": "3",
          "StepsFromStartInLayer": "1",
          "FlaggingNode": "",
          "NumberOfFlags": "0",
          "NetworkStartNode": "0",
          "TopNode": "0",
          "DisplayProperties": {
            "NodeIcons": "",
            "IconOverride": "FutureUse",
            "Size": "FutureUse",
            "AuraWeight": "FutureUse",
            "AuraColour": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "ID",
                "Value": "192.0000"
              },
              {
                "Name": "FIRST_NAME",
                "Value": "Sarah"
              },
              {
                "Name": "LAST_NAME",
                "Value": "Bell"
              },
              {
                "Name": "DATE_OF_BIRTH",
                "Value": "1983-06-22"
              },
              {
                "Name": "SEX",
                "Value": "FEMALE"
              },
              {
                "Name": "LABEL",
                "Value": "Sarah Bell"
              },
              {
                "Name": "DEPARTMENT_ID",
                "Value": "50.0000"
              },
              {
                "Name": "MANAGER_ID",
                "Value": "123.0000"
              },
              {
                "Name": "NUMBER_OF_STAFF",
                "Value": "0.0000"
              }
            ]
          }
        },
        {
          "SID": "2458590",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "CopiedFromNodeSID": "",
          "DuplicatesNodeSID": "",
          "NodeID": "PEOPLE",
          "SubNodeID": "YOUNG_FEMALE_EMPLOYEE",
          "NodeType": "NODE",
          "Label": "Alexis Bull",
          "Key": "185Alexis Bull",
          "Description": "",
          "ValidFrom": "16-06-1985",
          "ValidTo": "",
          "Evaluated": "1",
          "Flagged": "1",
          "StepsFromStart": "3",
          "StepsFromStartInLayer": "1",
          "FlaggingNode": "",
          "NumberOfFlags": "0",
          "NetworkStartNode": "0",
          "TopNode": "0",
          "DisplayProperties": {
            "NodeIcons": "",
            "IconOverride": "FutureUse",
            "Size": "FutureUse",
            "AuraWeight": "FutureUse",
            "AuraColour": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "ID",
                "Value": "185.0000"
              },
              {
                "Name": "FIRST_NAME",
                "Value": "Alexis"
              },
              {
                "Name": "LAST_NAME",
                "Value": "Bull"
              },
              {
                "Name": "DATE_OF_BIRTH",
                "Value": "1985-06-16"
              },
              {
                "Name": "SEX",
                "Value": "FEMALE"
              },
              {
                "Name": "LABEL",
                "Value": "Alexis Bull"
              },
              {
                "Name": "DEPARTMENT_ID",
                "Value": "50.0000"
              },
              {
                "Name": "MANAGER_ID",
                "Value": "121.0000"
              },
              {
                "Name": "NUMBER_OF_STAFF",
                "Value": "0.0000"
              }
            ]
          }
        },
        {
          "SID": "2458592",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "CopiedFromNodeSID": "",
          "DuplicatesNodeSID": "",
          "NodeID": "PEOPLE",
          "SubNodeID": "YOUNG_FEMALE_EMPLOYEE",
          "NodeType": "NODE",
          "Label": "Nandita Sarchand",
          "Key": "184Nandita Sarchand",
          "Description": "",
          "ValidFrom": "12-10-1982",
          "ValidTo": "",
          "Evaluated": "1",
          "Flagged": "1",
          "StepsFromStart": "3",
          "StepsFromStartInLayer": "1",
          "FlaggingNode": "",
          "NumberOfFlags": "0",
          "NetworkStartNode": "0",
          "TopNode": "0",
          "DisplayProperties": {
            "NodeIcons": "",
            "IconOverride": "FutureUse",
            "Size": "FutureUse",
            "AuraWeight": "FutureUse",
            "AuraColour": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "ID",
                "Value": "184.0000"
              },
              {
                "Name": "FIRST_NAME",
                "Value": "Nandita"
              },
              {
                "Name": "LAST_NAME",
                "Value": "Sarchand"
              },
              {
                "Name": "DATE_OF_BIRTH",
                "Value": "1982-10-12"
              },
              {
                "Name": "SEX",
                "Value": "FEMALE"
              },
              {
                "Name": "LABEL",
                "Value": "Nandita Sarchand"
              },
              {
                "Name": "DEPARTMENT_ID",
                "Value": "50.0000"
              },
              {
                "Name": "MANAGER_ID",
                "Value": "121.0000"
              },
              {
                "Name": "NUMBER_OF_STAFF",
                "Value": "0.0000"
              }
            ]
          }
        },
        {
          "SID": "2458594",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "CopiedFromNodeSID": "",
          "DuplicatesNodeSID": "",
          "NodeID": "PEOPLE",
          "SubNodeID": "MANAGER",
          "NodeType": "NODE",
          "Label": "Kevin Mourgos",
          "Key": "124Kevin Mourgos",
          "Description": "",
          "ValidFrom": "14-06-1948",
          "ValidTo": "",
          "Evaluated": "1",
          "Flagged": "1",
          "StepsFromStart": "3",
          "StepsFromStartInLayer": "1",
          "FlaggingNode": "",
          "NumberOfFlags": "0",
          "NetworkStartNode": "0",
          "TopNode": "0",
          "DisplayProperties": {
            "NodeIcons": "",
            "IconOverride": "FutureUse",
            "Size": "FutureUse",
            "AuraWeight": "FutureUse",
            "AuraColour": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "ID",
                "Value": "124.0000"
              },
              {
                "Name": "FIRST_NAME",
                "Value": "Kevin"
              },
              {
                "Name": "LAST_NAME",
                "Value": "Mourgos"
              },
              {
                "Name": "DATE_OF_BIRTH",
                "Value": "1948-06-14"
              },
              {
                "Name": "SEX",
                "Value": "MALE"
              },
              {
                "Name": "LABEL",
                "Value": "Kevin Mourgos"
              },
              {
                "Name": "DEPARTMENT_ID",
                "Value": "50.0000"
              },
              {
                "Name": "MANAGER_ID",
                "Value": "100.0000"
              },
              {
                "Name": "NUMBER_OF_STAFF",
                "Value": "8.0000"
              }
            ]
          }
        },
        {
          "SID": "2458596",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "CopiedFromNodeSID": "",
          "DuplicatesNodeSID": "",
          "NodeID": "PEOPLE",
          "SubNodeID": "MANAGER",
          "NodeType": "NODE",
          "Label": "Shanta Vollman",
          "Key": "123Shanta Vollman",
          "Description": "",
          "ValidFrom": "08-02-1952",
          "ValidTo": "",
          "Evaluated": "1",
          "Flagged": "1",
          "StepsFromStart": "3",
          "StepsFromStartInLayer": "1",
          "FlaggingNode": "",
          "NumberOfFlags": "0",
          "NetworkStartNode": "0",
          "TopNode": "0",
          "DisplayProperties": {
            "NodeIcons": "",
            "IconOverride": "FutureUse",
            "Size": "FutureUse",
            "AuraWeight": "FutureUse",
            "AuraColour": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "ID",
                "Value": "123.0000"
              },
              {
                "Name": "FIRST_NAME",
                "Value": "Shanta"
              },
              {
                "Name": "LAST_NAME",
                "Value": "Vollman"
              },
              {
                "Name": "DATE_OF_BIRTH",
                "Value": "1952-02-08"
              },
              {
                "Name": "SEX",
                "Value": "FEMALE"
              },
              {
                "Name": "LABEL",
                "Value": "Shanta Vollman"
              },
              {
                "Name": "DEPARTMENT_ID",
                "Value": "50.0000"
              },
              {
                "Name": "MANAGER_ID",
                "Value": "100.0000"
              },
              {
                "Name": "NUMBER_OF_STAFF",
                "Value": "8.0000"
              }
            ]
          }
        },
        {
          "SID": "2458598",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "CopiedFromNodeSID": "",
          "DuplicatesNodeSID": "",
          "NodeID": "PEOPLE",
          "SubNodeID": "MANAGER",
          "NodeType": "NODE",
          "Label": "Payam Kaufling",
          "Key": "122Payam Kaufling",
          "Description": "",
          "ValidFrom": "08-01-1952",
          "ValidTo": "",
          "Evaluated": "1",
          "Flagged": "1",
          "StepsFromStart": "3",
          "StepsFromStartInLayer": "1",
          "FlaggingNode": "",
          "NumberOfFlags": "0",
          "NetworkStartNode": "0",
          "TopNode": "0",
          "DisplayProperties": {
            "NodeIcons": "",
            "IconOverride": "FutureUse",
            "Size": "FutureUse",
            "AuraWeight": "FutureUse",
            "AuraColour": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "ID",
                "Value": "122.0000"
              },
              {
                "Name": "FIRST_NAME",
                "Value": "Payam"
              },
              {
                "Name": "LAST_NAME",
                "Value": "Kaufling"
              },
              {
                "Name": "DATE_OF_BIRTH",
                "Value": "1952-01-08"
              },
              {
                "Name": "SEX",
                "Value": "MALE"
              },
              {
                "Name": "LABEL",
                "Value": "Payam Kaufling"
              },
              {
                "Name": "DEPARTMENT_ID",
                "Value": "50.0000"
              },
              {
                "Name": "MANAGER_ID",
                "Value": "100.0000"
              },
              {
                "Name": "NUMBER_OF_STAFF",
                "Value": "8.0000"
              }
            ]
          }
        },
        {
          "SID": "2458600",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "CopiedFromNodeSID": "",
          "DuplicatesNodeSID": "",
          "NodeID": "PEOPLE",
          "SubNodeID": "MANAGER",
          "NodeType": "NODE",
          "Label": "Matthew Weiss",
          "Key": "120Matthew Weiss",
          "Description": "",
          "ValidFrom": "26-01-1985",
          "ValidTo": "",
          "Evaluated": "1",
          "Flagged": "1",
          "StepsFromStart": "3",
          "StepsFromStartInLayer": "1",
          "FlaggingNode": "",
          "NumberOfFlags": "0",
          "NetworkStartNode": "0",
          "TopNode": "0",
          "DisplayProperties": {
            "NodeIcons": "",
            "IconOverride": "FutureUse",
            "Size": "FutureUse",
            "AuraWeight": "FutureUse",
            "AuraColour": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "ID",
                "Value": "120.0000"
              },
              {
                "Name": "FIRST_NAME",
                "Value": "Matthew"
              },
              {
                "Name": "LAST_NAME",
                "Value": "Weiss"
              },
              {
                "Name": "DATE_OF_BIRTH",
                "Value": "1985-01-26"
              },
              {
                "Name": "SEX",
                "Value": "MALE"
              },
              {
                "Name": "LABEL",
                "Value": "Matthew Weiss"
              },
              {
                "Name": "DEPARTMENT_ID",
                "Value": "50.0000"
              },
              {
                "Name": "MANAGER_ID",
                "Value": "100.0000"
              },
              {
                "Name": "NUMBER_OF_STAFF",
                "Value": "8.0000"
              }
            ]
          }
        },
        {
          "SID": "2458602",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "CopiedFromNodeSID": "",
          "DuplicatesNodeSID": "",
          "NodeID": "PEOPLE",
          "SubNodeID": "MANAGER",
          "NodeType": "NODE",
          "Label": "Adam Fripp",
          "Key": "121Adam Fripp",
          "Description": "",
          "ValidFrom": "05-12-1969",
          "ValidTo": "",
          "Evaluated": "1",
          "Flagged": "1",
          "StepsFromStart": "3",
          "StepsFromStartInLayer": "1",
          "FlaggingNode": "",
          "NumberOfFlags": "0",
          "NetworkStartNode": "0",
          "TopNode": "0",
          "DisplayProperties": {
            "NodeIcons": "",
            "IconOverride": "FutureUse",
            "Size": "FutureUse",
            "AuraWeight": "FutureUse",
            "AuraColour": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "ID",
                "Value": "121.0000"
              },
              {
                "Name": "FIRST_NAME",
                "Value": "Adam"
              },
              {
                "Name": "LAST_NAME",
                "Value": "Fripp"
              },
              {
                "Name": "DATE_OF_BIRTH",
                "Value": "1969-12-05"
              },
              {
                "Name": "SEX",
                "Value": "MALE"
              },
              {
                "Name": "LABEL",
                "Value": "Adam Fripp"
              },
              {
                "Name": "DEPARTMENT_ID",
                "Value": "50.0000"
              },
              {
                "Name": "MANAGER_ID",
                "Value": "100.0000"
              },
              {
                "Name": "NUMBER_OF_STAFF",
                "Value": "8.0000"
              }
            ]
          }
        },
        {
          "SID": "2458613",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "CopiedFromNodeSID": "",
          "DuplicatesNodeSID": "",
          "NodeID": "PEOPLE",
          "SubNodeID": "MANAGER",
          "NodeType": "NODE",
          "Label": "Jennifer Whalen",
          "Key": "200Jennifer Whalen",
          "Description": "",
          "ValidFrom": "25-05-1961",
          "ValidTo": "",
          "Evaluated": "1",
          "Flagged": "1",
          "StepsFromStart": "4",
          "StepsFromStartInLayer": "2",
          "FlaggingNode": "",
          "NumberOfFlags": "0",
          "NetworkStartNode": "0",
          "TopNode": "0",
          "DisplayProperties": {
            "NodeIcons": "",
            "IconOverride": "FutureUse",
            "Size": "FutureUse",
            "AuraWeight": "FutureUse",
            "AuraColour": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "ID",
                "Value": "200.0000"
              },
              {
                "Name": "FIRST_NAME",
                "Value": "Jennifer"
              },
              {
                "Name": "LAST_NAME",
                "Value": "Whalen"
              },
              {
                "Name": "DATE_OF_BIRTH",
                "Value": "1961-05-25"
              },
              {
                "Name": "SEX",
                "Value": "FEMALE"
              },
              {
                "Name": "LABEL",
                "Value": "Jennifer Whalen"
              },
              {
                "Name": "DEPARTMENT_ID",
                "Value": "10.0000"
              },
              {
                "Name": "MANAGER_ID",
                "Value": "101.0000"
              },
              {
                "Name": "NUMBER_OF_STAFF",
                "Value": "0.0000"
              }
            ]
          }
        },
        {
          "SID": "2458615",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "CopiedFromNodeSID": "",
          "DuplicatesNodeSID": "",
          "NodeID": "PEOPLE",
          "SubNodeID": "MANAGER",
          "NodeType": "NODE",
          "Label": "Susan Mavris",
          "Key": "203Susan Mavris",
          "Description": "",
          "ValidFrom": "16-09-1965",
          "ValidTo": "",
          "Evaluated": "1",
          "Flagged": "1",
          "StepsFromStart": "4",
          "StepsFromStartInLayer": "2",
          "FlaggingNode": "",
          "NumberOfFlags": "0",
          "NetworkStartNode": "0",
          "TopNode": "0",
          "DisplayProperties": {
            "NodeIcons": "",
            "IconOverride": "FutureUse",
            "Size": "FutureUse",
            "AuraWeight": "FutureUse",
            "AuraColour": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "ID",
                "Value": "203.0000"
              },
              {
                "Name": "FIRST_NAME",
                "Value": "Susan"
              },
              {
                "Name": "LAST_NAME",
                "Value": "Mavris"
              },
              {
                "Name": "DATE_OF_BIRTH",
                "Value": "1965-09-16"
              },
              {
                "Name": "SEX",
                "Value": "FEMALE"
              },
              {
                "Name": "LABEL",
                "Value": "Susan Mavris"
              },
              {
                "Name": "DEPARTMENT_ID",
                "Value": "40.0000"
              },
              {
                "Name": "MANAGER_ID",
                "Value": "101.0000"
              },
              {
                "Name": "NUMBER_OF_STAFF",
                "Value": "0.0000"
              }
            ]
          }
        },
        {
          "SID": "2458617",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "CopiedFromNodeSID": "",
          "DuplicatesNodeSID": "",
          "NodeID": "PEOPLE",
          "SubNodeID": "MANAGER",
          "NodeType": "NODE",
          "Label": "Hermann Baer",
          "Key": "204Hermann Baer",
          "Description": "",
          "ValidFrom": "27-03-1964",
          "ValidTo": "",
          "Evaluated": "1",
          "Flagged": "1",
          "StepsFromStart": "4",
          "StepsFromStartInLayer": "2",
          "FlaggingNode": "",
          "NumberOfFlags": "0",
          "NetworkStartNode": "0",
          "TopNode": "0",
          "DisplayProperties": {
            "NodeIcons": "",
            "IconOverride": "FutureUse",
            "Size": "FutureUse",
            "AuraWeight": "FutureUse",
            "AuraColour": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "ID",
                "Value": "204.0000"
              },
              {
                "Name": "FIRST_NAME",
                "Value": "Hermann"
              },
              {
                "Name": "LAST_NAME",
                "Value": "Baer"
              },
              {
                "Name": "DATE_OF_BIRTH",
                "Value": "1964-03-27"
              },
              {
                "Name": "SEX",
                "Value": "MALE"
              },
              {
                "Name": "LABEL",
                "Value": "Hermann Baer"
              },
              {
                "Name": "DEPARTMENT_ID",
                "Value": "70.0000"
              },
              {
                "Name": "MANAGER_ID",
                "Value": "101.0000"
              },
              {
                "Name": "NUMBER_OF_STAFF",
                "Value": "0.0000"
              }
            ]
          }
        },
        {
          "SID": "2458619",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "CopiedFromNodeSID": "",
          "DuplicatesNodeSID": "",
          "NodeID": "PEOPLE",
          "SubNodeID": "MANAGER",
          "NodeType": "NODE",
          "Label": "Nancy Greenberg",
          "Key": "108Nancy Greenberg",
          "Description": "",
          "ValidFrom": "01-01-1983",
          "ValidTo": "",
          "Evaluated": "1",
          "Flagged": "1",
          "StepsFromStart": "4",
          "StepsFromStartInLayer": "2",
          "FlaggingNode": "",
          "NumberOfFlags": "0",
          "NetworkStartNode": "0",
          "TopNode": "0",
          "DisplayProperties": {
            "NodeIcons": "",
            "IconOverride": "FutureUse",
            "Size": "FutureUse",
            "AuraWeight": "FutureUse",
            "AuraColour": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "ID",
                "Value": "108.0000"
              },
              {
                "Name": "FIRST_NAME",
                "Value": "Nancy"
              },
              {
                "Name": "LAST_NAME",
                "Value": "Greenberg"
              },
              {
                "Name": "DATE_OF_BIRTH",
                "Value": "1983-01-01"
              },
              {
                "Name": "SEX",
                "Value": "FEMALE"
              },
              {
                "Name": "LABEL",
                "Value": "Nancy Greenberg"
              },
              {
                "Name": "DEPARTMENT_ID",
                "Value": "100.0000"
              },
              {
                "Name": "MANAGER_ID",
                "Value": "101.0000"
              },
              {
                "Name": "NUMBER_OF_STAFF",
                "Value": "5.0000"
              }
            ]
          }
        },
        {
          "SID": "2458621",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "CopiedFromNodeSID": "",
          "DuplicatesNodeSID": "",
          "NodeID": "PEOPLE",
          "SubNodeID": "MANAGER",
          "NodeType": "NODE",
          "Label": "Shelley Higgins",
          "Key": "205Shelley Higgins",
          "Description": "",
          "ValidFrom": "06-12-1952",
          "ValidTo": "",
          "Evaluated": "1",
          "Flagged": "1",
          "StepsFromStart": "4",
          "StepsFromStartInLayer": "2",
          "FlaggingNode": "",
          "NumberOfFlags": "0",
          "NetworkStartNode": "0",
          "TopNode": "0",
          "DisplayProperties": {
            "NodeIcons": "",
            "IconOverride": "FutureUse",
            "Size": "FutureUse",
            "AuraWeight": "FutureUse",
            "AuraColour": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "ID",
                "Value": "205.0000"
              },
              {
                "Name": "FIRST_NAME",
                "Value": "Shelley"
              },
              {
                "Name": "LAST_NAME",
                "Value": "Higgins"
              },
              {
                "Name": "DATE_OF_BIRTH",
                "Value": "1952-12-06"
              },
              {
                "Name": "SEX",
                "Value": "FEMALE"
              },
              {
                "Name": "LABEL",
                "Value": "Shelley Higgins"
              },
              {
                "Name": "DEPARTMENT_ID",
                "Value": "110.0000"
              },
              {
                "Name": "MANAGER_ID",
                "Value": "101.0000"
              },
              {
                "Name": "NUMBER_OF_STAFF",
                "Value": "1.0000"
              }
            ]
          }
        },
        {
          "SID": "2458629",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "CopiedFromNodeSID": "",
          "DuplicatesNodeSID": "",
          "NodeID": "PEOPLE",
          "SubNodeID": "MANAGER",
          "NodeType": "NODE",
          "Label": "Alexander Hunold",
          "Key": "103Alexander Hunold",
          "Description": "Hunold Notities1",
          "ValidFrom": "23-04-1963",
          "ValidTo": "",
          "Evaluated": "1",
          "Flagged": "1",
          "StepsFromStart": "4",
          "StepsFromStartInLayer": "2",
          "FlaggingNode": "",
          "NumberOfFlags": "0",
          "NetworkStartNode": "0",
          "TopNode": "0",
          "DisplayProperties": {
            "NodeIcons": "",
            "IconOverride": "FutureUse",
            "Size": "FutureUse",
            "AuraWeight": "FutureUse",
            "AuraColour": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "ID",
                "Value": "103.0000"
              },
              {
                "Name": "FIRST_NAME",
                "Value": "Alexander"
              },
              {
                "Name": "LAST_NAME",
                "Value": "Hunold"
              },
              {
                "Name": "DATE_OF_BIRTH",
                "Value": "1963-04-23"
              },
              {
                "Name": "SEX",
                "Value": "MALE"
              },
              {
                "Name": "LABEL",
                "Value": "Alexander Hunold"
              },
              {
                "Name": "DEPARTMENT_ID",
                "Value": "60.0000"
              },
              {
                "Name": "MANAGER_ID",
                "Value": "102.0000"
              },
              {
                "Name": "NOTITIES1",
                "Value": "Hunold Notities1"
              },
              {
                "Name": "NOTITIES2",
                "Value": "Hunold Notities2"
              },
              {
                "Name": "NUMBER_OF_STAFF",
                "Value": "4.0000"
              }
            ]
          }
        },
        {
          "SID": "2458637",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "CopiedFromNodeSID": "",
          "DuplicatesNodeSID": "",
          "NodeID": "PEOPLE",
          "SubNodeID": "YOUNG_FEMALE_EMPLOYEE",
          "NodeType": "NODE",
          "Label": "Janette King",
          "Key": "156Janette King",
          "Description": "",
          "ValidFrom": "07-01-1983",
          "ValidTo": "",
          "Evaluated": "1",
          "Flagged": "1",
          "StepsFromStart": "4",
          "StepsFromStartInLayer": "2",
          "FlaggingNode": "",
          "NumberOfFlags": "0",
          "NetworkStartNode": "0",
          "TopNode": "0",
          "DisplayProperties": {
            "NodeIcons": "",
            "IconOverride": "FutureUse",
            "Size": "FutureUse",
            "AuraWeight": "FutureUse",
            "AuraColour": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "ID",
                "Value": "156.0000"
              },
              {
                "Name": "FIRST_NAME",
                "Value": "Janette"
              },
              {
                "Name": "LAST_NAME",
                "Value": "King"
              },
              {
                "Name": "DATE_OF_BIRTH",
                "Value": "1983-01-07"
              },
              {
                "Name": "SEX",
                "Value": "FEMALE"
              },
              {
                "Name": "LABEL",
                "Value": "Janette King"
              },
              {
                "Name": "DEPARTMENT_ID",
                "Value": "80.0000"
              },
              {
                "Name": "MANAGER_ID",
                "Value": "146.0000"
              }
            ]
          }
        },
        {
          "SID": "2458654",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "CopiedFromNodeSID": "",
          "DuplicatesNodeSID": "",
          "NodeID": "PEOPLE",
          "SubNodeID": "MANAGER",
          "NodeType": "NODE",
          "Label": "Eleni Zlotkey",
          "Key": "149Eleni Zlotkey",
          "Description": "",
          "ValidFrom": "20-06-1972",
          "ValidTo": "",
          "Evaluated": "1",
          "Flagged": "1",
          "StepsFromStart": "4",
          "StepsFromStartInLayer": "2",
          "FlaggingNode": "",
          "NumberOfFlags": "0",
          "NetworkStartNode": "0",
          "TopNode": "0",
          "DisplayProperties": {
            "NodeIcons": "",
            "IconOverride": "FutureUse",
            "Size": "FutureUse",
            "AuraWeight": "FutureUse",
            "AuraColour": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "ID",
                "Value": "149.0000"
              },
              {
                "Name": "FIRST_NAME",
                "Value": "Eleni"
              },
              {
                "Name": "LAST_NAME",
                "Value": "Zlotkey"
              },
              {
                "Name": "DATE_OF_BIRTH",
                "Value": "1972-06-20"
              },
              {
                "Name": "SEX",
                "Value": "FEMALE"
              },
              {
                "Name": "LABEL",
                "Value": "Eleni Zlotkey"
              },
              {
                "Name": "DEPARTMENT_ID",
                "Value": "80.0000"
              },
              {
                "Name": "MANAGER_ID",
                "Value": "100.0000"
              },
              {
                "Name": "NUMBER_OF_STAFF",
                "Value": "6.0000"
              }
            ]
          }
        },
        {
          "SID": "2458656",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "CopiedFromNodeSID": "",
          "DuplicatesNodeSID": "",
          "NodeID": "PEOPLE",
          "SubNodeID": "MANAGER",
          "NodeType": "NODE",
          "Label": "Gerald Cambrault",
          "Key": "148Gerald Cambrault",
          "Description": "",
          "ValidFrom": "19-01-1978",
          "ValidTo": "",
          "Evaluated": "1",
          "Flagged": "1",
          "StepsFromStart": "4",
          "StepsFromStartInLayer": "2",
          "FlaggingNode": "",
          "NumberOfFlags": "0",
          "NetworkStartNode": "0",
          "TopNode": "0",
          "DisplayProperties": {
            "NodeIcons": "",
            "IconOverride": "FutureUse",
            "Size": "FutureUse",
            "AuraWeight": "FutureUse",
            "AuraColour": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "ID",
                "Value": "148.0000"
              },
              {
                "Name": "FIRST_NAME",
                "Value": "Gerald"
              },
              {
                "Name": "LAST_NAME",
                "Value": "Cambrault"
              },
              {
                "Name": "DATE_OF_BIRTH",
                "Value": "1978-01-19"
              },
              {
                "Name": "SEX",
                "Value": "MALE"
              },
              {
                "Name": "LABEL",
                "Value": "Gerald Cambrault"
              },
              {
                "Name": "DEPARTMENT_ID",
                "Value": "80.0000"
              },
              {
                "Name": "MANAGER_ID",
                "Value": "100.0000"
              },
              {
                "Name": "NUMBER_OF_STAFF",
                "Value": "6.0000"
              }
            ]
          }
        },
        {
          "SID": "2458658",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "CopiedFromNodeSID": "",
          "DuplicatesNodeSID": "",
          "NodeID": "PEOPLE",
          "SubNodeID": "MANAGER",
          "NodeType": "NODE",
          "Label": "Den Raphaely",
          "Key": "114Den Raphaely",
          "Description": "",
          "ValidFrom": "03-04-1966",
          "ValidTo": "",
          "Evaluated": "1",
          "Flagged": "1",
          "StepsFromStart": "4",
          "StepsFromStartInLayer": "2",
          "FlaggingNode": "",
          "NumberOfFlags": "0",
          "NetworkStartNode": "0",
          "TopNode": "0",
          "DisplayProperties": {
            "NodeIcons": "",
            "IconOverride": "FutureUse",
            "Size": "FutureUse",
            "AuraWeight": "FutureUse",
            "AuraColour": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "ID",
                "Value": "114.0000"
              },
              {
                "Name": "FIRST_NAME",
                "Value": "Den"
              },
              {
                "Name": "LAST_NAME",
                "Value": "Raphaely"
              },
              {
                "Name": "DATE_OF_BIRTH",
                "Value": "1966-04-03"
              },
              {
                "Name": "SEX",
                "Value": "MALE"
              },
              {
                "Name": "LABEL",
                "Value": "Den Raphaely"
              },
              {
                "Name": "DEPARTMENT_ID",
                "Value": "30.0000"
              },
              {
                "Name": "MANAGER_ID",
                "Value": "100.0000"
              },
              {
                "Name": "NUMBER_OF_STAFF",
                "Value": "5.0000"
              }
            ]
          }
        },
        {
          "SID": "2458660",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "CopiedFromNodeSID": "",
          "DuplicatesNodeSID": "",
          "NodeID": "PEOPLE",
          "SubNodeID": "MANAGER",
          "NodeType": "NODE",
          "Label": "Alberto Errazuriz",
          "Key": "147Alberto Errazuriz",
          "Description": "",
          "ValidFrom": "24-09-1970",
          "ValidTo": "",
          "Evaluated": "1",
          "Flagged": "1",
          "StepsFromStart": "4",
          "StepsFromStartInLayer": "2",
          "FlaggingNode": "",
          "NumberOfFlags": "0",
          "NetworkStartNode": "0",
          "TopNode": "0",
          "DisplayProperties": {
            "NodeIcons": "",
            "IconOverride": "FutureUse",
            "Size": "FutureUse",
            "AuraWeight": "FutureUse",
            "AuraColour": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "ID",
                "Value": "147.0000"
              },
              {
                "Name": "FIRST_NAME",
                "Value": "Alberto"
              },
              {
                "Name": "LAST_NAME",
                "Value": "Errazuriz"
              },
              {
                "Name": "DATE_OF_BIRTH",
                "Value": "1970-09-24"
              },
              {
                "Name": "SEX",
                "Value": "MALE"
              },
              {
                "Name": "LABEL",
                "Value": "Alberto Errazuriz"
              },
              {
                "Name": "DEPARTMENT_ID",
                "Value": "80.0000"
              },
              {
                "Name": "MANAGER_ID",
                "Value": "100.0000"
              },
              {
                "Name": "NUMBER_OF_STAFF",
                "Value": "6.0000"
              }
            ]
          }
        },
        {
          "SID": "2458662",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "CopiedFromNodeSID": "",
          "DuplicatesNodeSID": "",
          "NodeID": "PEOPLE",
          "SubNodeID": "MANAGER",
          "NodeType": "NODE",
          "Label": "Michael Hartstein",
          "Key": "201Michael Hartstein",
          "Description": "",
          "ValidFrom": "04-03-1949",
          "ValidTo": "",
          "Evaluated": "1",
          "Flagged": "1",
          "StepsFromStart": "4",
          "StepsFromStartInLayer": "2",
          "FlaggingNode": "",
          "NumberOfFlags": "0",
          "NetworkStartNode": "0",
          "TopNode": "0",
          "DisplayProperties": {
            "NodeIcons": "",
            "IconOverride": "FutureUse",
            "Size": "FutureUse",
            "AuraWeight": "FutureUse",
            "AuraColour": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "ID",
                "Value": "201.0000"
              },
              {
                "Name": "FIRST_NAME",
                "Value": "Michael"
              },
              {
                "Name": "LAST_NAME",
                "Value": "Hartstein"
              },
              {
                "Name": "DATE_OF_BIRTH",
                "Value": "1949-03-04"
              },
              {
                "Name": "SEX",
                "Value": "MALE"
              },
              {
                "Name": "LABEL",
                "Value": "Michael Hartstein"
              },
              {
                "Name": "DEPARTMENT_ID",
                "Value": "20.0000"
              },
              {
                "Name": "MANAGER_ID",
                "Value": "100.0000"
              },
              {
                "Name": "NUMBER_OF_STAFF",
                "Value": "1.0000"
              }
            ]
          }
        },
        {
          "SID": "2458664",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "CopiedFromNodeSID": "",
          "DuplicatesNodeSID": "",
          "NodeID": "PEOPLE",
          "SubNodeID": "MANAGER",
          "NodeType": "NODE",
          "Label": "Karen Partners",
          "Key": "146Karen Partners",
          "Description": "",
          "ValidFrom": "13-08-1948",
          "ValidTo": "",
          "Evaluated": "1",
          "Flagged": "1",
          "StepsFromStart": "4",
          "StepsFromStartInLayer": "2",
          "FlaggingNode": "",
          "NumberOfFlags": "0",
          "NetworkStartNode": "0",
          "TopNode": "0",
          "DisplayProperties": {
            "NodeIcons": "",
            "IconOverride": "FutureUse",
            "Size": "FutureUse",
            "AuraWeight": "FutureUse",
            "AuraColour": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "ID",
                "Value": "146.0000"
              },
              {
                "Name": "FIRST_NAME",
                "Value": "Karen"
              },
              {
                "Name": "LAST_NAME",
                "Value": "Partners"
              },
              {
                "Name": "DATE_OF_BIRTH",
                "Value": "1948-08-13"
              },
              {
                "Name": "SEX",
                "Value": "FEMALE"
              },
              {
                "Name": "LABEL",
                "Value": "Karen Partners"
              },
              {
                "Name": "DEPARTMENT_ID",
                "Value": "80.0000"
              },
              {
                "Name": "MANAGER_ID",
                "Value": "100.0000"
              },
              {
                "Name": "NUMBER_OF_STAFF",
                "Value": "6.0000"
              }
            ]
          }
        },
        {
          "SID": "2458666",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "CopiedFromNodeSID": "",
          "DuplicatesNodeSID": "",
          "NodeID": "PEOPLE",
          "SubNodeID": "MANAGER",
          "NodeType": "NODE",
          "Label": "John Russell",
          "Key": "145John Russell",
          "Description": "",
          "ValidFrom": "02-06-1986",
          "ValidTo": "",
          "Evaluated": "1",
          "Flagged": "1",
          "StepsFromStart": "4",
          "StepsFromStartInLayer": "2",
          "FlaggingNode": "",
          "NumberOfFlags": "0",
          "NetworkStartNode": "0",
          "TopNode": "0",
          "DisplayProperties": {
            "NodeIcons": "",
            "IconOverride": "FutureUse",
            "Size": "FutureUse",
            "AuraWeight": "FutureUse",
            "AuraColour": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "ID",
                "Value": "145.0000"
              },
              {
                "Name": "FIRST_NAME",
                "Value": "John"
              },
              {
                "Name": "LAST_NAME",
                "Value": "Russell"
              },
              {
                "Name": "DATE_OF_BIRTH",
                "Value": "1986-06-02"
              },
              {
                "Name": "SEX",
                "Value": "MALE"
              },
              {
                "Name": "LABEL",
                "Value": "John Russell"
              },
              {
                "Name": "DEPARTMENT_ID",
                "Value": "80.0000"
              },
              {
                "Name": "MANAGER_ID",
                "Value": "100.0000"
              },
              {
                "Name": "NUMBER_OF_STAFF",
                "Value": "6.0000"
              }
            ]
          }
        },
        {
          "SID": "2458727",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "CopiedFromNodeSID": "",
          "DuplicatesNodeSID": "",
          "NodeID": "PEOPLE",
          "SubNodeID": "SEN_FEMALE_EMPLOYEE",
          "NodeType": "NODE",
          "Label": "Mattea Marvins",
          "Key": "164Mattea Marvins",
          "Description": "",
          "ValidFrom": "04-02-1967",
          "ValidTo": "",
          "Evaluated": "1",
          "Flagged": "1",
          "StepsFromStart": "4",
          "StepsFromStartInLayer": "2",
          "FlaggingNode": "",
          "NumberOfFlags": "0",
          "NetworkStartNode": "0",
          "TopNode": "0",
          "DisplayProperties": {
            "NodeIcons": "",
            "IconOverride": "FutureUse",
            "Size": "FutureUse",
            "AuraWeight": "FutureUse",
            "AuraColour": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "ID",
                "Value": "164.0000"
              },
              {
                "Name": "FIRST_NAME",
                "Value": "Mattea"
              },
              {
                "Name": "LAST_NAME",
                "Value": "Marvins"
              },
              {
                "Name": "DATE_OF_BIRTH",
                "Value": "1967-02-04"
              },
              {
                "Name": "SEX",
                "Value": "FEMALE"
              },
              {
                "Name": "LABEL",
                "Value": "Mattea Marvins"
              },
              {
                "Name": "DEPARTMENT_ID",
                "Value": "80.0000"
              },
              {
                "Name": "MANAGER_ID",
                "Value": "147.0000"
              }
            ]
          }
        },
        {
          "SID": "2458992",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "CopiedFromNodeSID": "",
          "DuplicatesNodeSID": "",
          "NodeID": "PEOPLE",
          "SubNodeID": "YOUNG_FEMALE_EMPLOYEE",
          "NodeType": "NODE",
          "Label": "Nanette Cambrault",
          "Key": "154Nanette Cambrault",
          "Description": "",
          "ValidFrom": "21-05-1968",
          "ValidTo": "",
          "Evaluated": "1",
          "Flagged": "1",
          "StepsFromStart": "5",
          "StepsFromStartInLayer": "3",
          "FlaggingNode": "",
          "NumberOfFlags": "0",
          "NetworkStartNode": "0",
          "TopNode": "0",
          "DisplayProperties": {
            "NodeIcons": "",
            "IconOverride": "FutureUse",
            "Size": "FutureUse",
            "AuraWeight": "FutureUse",
            "AuraColour": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "ID",
                "Value": "154.0000"
              },
              {
                "Name": "FIRST_NAME",
                "Value": "Nanette"
              },
              {
                "Name": "LAST_NAME",
                "Value": "Cambrault"
              },
              {
                "Name": "DATE_OF_BIRTH",
                "Value": "1968-05-21"
              },
              {
                "Name": "SEX",
                "Value": "FEMALE"
              },
              {
                "Name": "LABEL",
                "Value": "Nanette Cambrault"
              },
              {
                "Name": "DEPARTMENT_ID",
                "Value": "80.0000"
              },
              {
                "Name": "MANAGER_ID",
                "Value": "145.0000"
              }
            ]
          }
        },
        {
          "SID": "2458994",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "CopiedFromNodeSID": "",
          "DuplicatesNodeSID": "",
          "NodeID": "PEOPLE",
          "SubNodeID": "SEN_MALE_EMPLOYEE",
          "NodeType": "NODE",
          "Label": "Christopher Olsen",
          "Key": "153Christopher Olsen",
          "Description": "",
          "ValidFrom": "11-01-1966",
          "ValidTo": "",
          "Evaluated": "1",
          "Flagged": "1",
          "StepsFromStart": "5",
          "StepsFromStartInLayer": "3",
          "FlaggingNode": "",
          "NumberOfFlags": "0",
          "NetworkStartNode": "0",
          "TopNode": "0",
          "DisplayProperties": {
            "NodeIcons": "",
            "IconOverride": "FutureUse",
            "Size": "FutureUse",
            "AuraWeight": "FutureUse",
            "AuraColour": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "ID",
                "Value": "153.0000"
              },
              {
                "Name": "FIRST_NAME",
                "Value": "Christopher"
              },
              {
                "Name": "LAST_NAME",
                "Value": "Olsen"
              },
              {
                "Name": "DATE_OF_BIRTH",
                "Value": "1966-01-11"
              },
              {
                "Name": "SEX",
                "Value": "MALE"
              },
              {
                "Name": "LABEL",
                "Value": "Christopher Olsen"
              },
              {
                "Name": "DEPARTMENT_ID",
                "Value": "80.0000"
              },
              {
                "Name": "MANAGER_ID",
                "Value": "145.0000"
              }
            ]
          }
        },
        {
          "SID": "2459087",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "CopiedFromNodeSID": "",
          "DuplicatesNodeSID": "",
          "NodeID": "PEOPLE",
          "SubNodeID": "SEN_MALE_EMPLOYEE",
          "NodeType": "NODE",
          "Label": "Amit Banda",
          "Key": "167Amit Banda",
          "Description": "",
          "ValidFrom": "11-08-1954",
          "ValidTo": "",
          "Evaluated": "1",
          "Flagged": "1",
          "StepsFromStart": "5",
          "StepsFromStartInLayer": "3",
          "FlaggingNode": "",
          "NumberOfFlags": "0",
          "NetworkStartNode": "0",
          "TopNode": "0",
          "DisplayProperties": {
            "NodeIcons": "",
            "IconOverride": "FutureUse",
            "Size": "FutureUse",
            "AuraWeight": "FutureUse",
            "AuraColour": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "ID",
                "Value": "167.0000"
              },
              {
                "Name": "FIRST_NAME",
                "Value": "Amit"
              },
              {
                "Name": "LAST_NAME",
                "Value": "Banda"
              },
              {
                "Name": "DATE_OF_BIRTH",
                "Value": "1954-08-11"
              },
              {
                "Name": "SEX",
                "Value": "MALE"
              },
              {
                "Name": "LABEL",
                "Value": "Amit Banda"
              },
              {
                "Name": "DEPARTMENT_ID",
                "Value": "80.0000"
              },
              {
                "Name": "MANAGER_ID",
                "Value": "147.0000"
              },
              {
                "Name": "NUMBER_OF_STAFF",
                "Value": "0.0000"
              }
            ]
          }
        },
        {
          "SID": "2459089",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "CopiedFromNodeSID": "",
          "DuplicatesNodeSID": "",
          "NodeID": "PEOPLE",
          "SubNodeID": "YOUNG_FEMALE_EMPLOYEE",
          "NodeType": "NODE",
          "Label": "Sundar Ande",
          "Key": "166Sundar Ande",
          "Description": "",
          "ValidFrom": "07-08-1968",
          "ValidTo": "",
          "Evaluated": "1",
          "Flagged": "1",
          "StepsFromStart": "5",
          "StepsFromStartInLayer": "3",
          "FlaggingNode": "",
          "NumberOfFlags": "0",
          "NetworkStartNode": "0",
          "TopNode": "0",
          "DisplayProperties": {
            "NodeIcons": "",
            "IconOverride": "FutureUse",
            "Size": "FutureUse",
            "AuraWeight": "FutureUse",
            "AuraColour": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "ID",
                "Value": "166.0000"
              },
              {
                "Name": "FIRST_NAME",
                "Value": "Sundar"
              },
              {
                "Name": "LAST_NAME",
                "Value": "Ande"
              },
              {
                "Name": "DATE_OF_BIRTH",
                "Value": "1968-08-07"
              },
              {
                "Name": "SEX",
                "Value": "FEMALE"
              },
              {
                "Name": "LABEL",
                "Value": "Sundar Ande"
              },
              {
                "Name": "DEPARTMENT_ID",
                "Value": "80.0000"
              },
              {
                "Name": "MANAGER_ID",
                "Value": "147.0000"
              },
              {
                "Name": "NUMBER_OF_STAFF",
                "Value": "0.0000"
              }
            ]
          }
        },
        {
          "SID": "2459091",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "CopiedFromNodeSID": "",
          "DuplicatesNodeSID": "",
          "NodeID": "PEOPLE",
          "SubNodeID": "YOUNG_MALE_EMPLOYEE",
          "NodeType": "NODE",
          "Label": "David Lee",
          "Key": "165David Lee",
          "Description": "",
          "ValidFrom": "18-09-1971",
          "ValidTo": "",
          "Evaluated": "1",
          "Flagged": "1",
          "StepsFromStart": "5",
          "StepsFromStartInLayer": "3",
          "FlaggingNode": "",
          "NumberOfFlags": "0",
          "NetworkStartNode": "0",
          "TopNode": "0",
          "DisplayProperties": {
            "NodeIcons": "",
            "IconOverride": "FutureUse",
            "Size": "FutureUse",
            "AuraWeight": "FutureUse",
            "AuraColour": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "ID",
                "Value": "165.0000"
              },
              {
                "Name": "FIRST_NAME",
                "Value": "David"
              },
              {
                "Name": "LAST_NAME",
                "Value": "Lee"
              },
              {
                "Name": "DATE_OF_BIRTH",
                "Value": "1971-09-18"
              },
              {
                "Name": "SEX",
                "Value": "MALE"
              },
              {
                "Name": "LABEL",
                "Value": "David Lee"
              },
              {
                "Name": "DEPARTMENT_ID",
                "Value": "80.0000"
              },
              {
                "Name": "MANAGER_ID",
                "Value": "147.0000"
              },
              {
                "Name": "NUMBER_OF_STAFF",
                "Value": "0.0000"
              }
            ]
          }
        },
        {
          "SID": "2459095",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "CopiedFromNodeSID": "",
          "DuplicatesNodeSID": "",
          "NodeID": "PEOPLE",
          "SubNodeID": "SEN_FEMALE_EMPLOYEE",
          "NodeType": "NODE",
          "Label": "Danielle Greene",
          "Key": "163Danielle Greene",
          "Description": "",
          "ValidFrom": "11-04-1963",
          "ValidTo": "",
          "Evaluated": "1",
          "Flagged": "1",
          "StepsFromStart": "5",
          "StepsFromStartInLayer": "3",
          "FlaggingNode": "",
          "NumberOfFlags": "0",
          "NetworkStartNode": "0",
          "TopNode": "0",
          "DisplayProperties": {
            "NodeIcons": "",
            "IconOverride": "FutureUse",
            "Size": "FutureUse",
            "AuraWeight": "FutureUse",
            "AuraColour": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "ID",
                "Value": "163.0000"
              },
              {
                "Name": "FIRST_NAME",
                "Value": "Danielle"
              },
              {
                "Name": "LAST_NAME",
                "Value": "Greene"
              },
              {
                "Name": "DATE_OF_BIRTH",
                "Value": "1963-04-11"
              },
              {
                "Name": "SEX",
                "Value": "FEMALE"
              },
              {
                "Name": "LABEL",
                "Value": "Danielle Greene"
              },
              {
                "Name": "DEPARTMENT_ID",
                "Value": "80.0000"
              },
              {
                "Name": "MANAGER_ID",
                "Value": "147.0000"
              },
              {
                "Name": "NUMBER_OF_STAFF",
                "Value": "0.0000"
              }
            ]
          }
        },
        {
          "SID": "2459097",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "CopiedFromNodeSID": "",
          "DuplicatesNodeSID": "",
          "NodeID": "PEOPLE",
          "SubNodeID": "SEN_FEMALE_EMPLOYEE",
          "NodeType": "NODE",
          "Label": "Clara Vishney",
          "Key": "162Clara Vishney",
          "Description": "",
          "ValidFrom": "22-05-1957",
          "ValidTo": "",
          "Evaluated": "1",
          "Flagged": "1",
          "StepsFromStart": "5",
          "StepsFromStartInLayer": "3",
          "FlaggingNode": "",
          "NumberOfFlags": "0",
          "NetworkStartNode": "0",
          "TopNode": "0",
          "DisplayProperties": {
            "NodeIcons": "",
            "IconOverride": "FutureUse",
            "Size": "FutureUse",
            "AuraWeight": "FutureUse",
            "AuraColour": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "ID",
                "Value": "162.0000"
              },
              {
                "Name": "FIRST_NAME",
                "Value": "Clara"
              },
              {
                "Name": "LAST_NAME",
                "Value": "Vishney"
              },
              {
                "Name": "DATE_OF_BIRTH",
                "Value": "1957-05-22"
              },
              {
                "Name": "SEX",
                "Value": "FEMALE"
              },
              {
                "Name": "LABEL",
                "Value": "Clara Vishney"
              },
              {
                "Name": "DEPARTMENT_ID",
                "Value": "80.0000"
              },
              {
                "Name": "MANAGER_ID",
                "Value": "147.0000"
              },
              {
                "Name": "NUMBER_OF_STAFF",
                "Value": "0.0000"
              }
            ]
          }
        },
        {
          "SID": "2459104",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "CopiedFromNodeSID": "",
          "DuplicatesNodeSID": "",
          "NodeID": "PEOPLE",
          "SubNodeID": "YOUNG_FEMALE_EMPLOYEE",
          "NodeType": "NODE",
          "Label": "Sarath Sewall",
          "Key": "161Sarath Sewall",
          "Description": "",
          "ValidFrom": "13-07-1976",
          "ValidTo": "",
          "Evaluated": "1",
          "Flagged": "1",
          "StepsFromStart": "5",
          "StepsFromStartInLayer": "3",
          "FlaggingNode": "",
          "NumberOfFlags": "0",
          "NetworkStartNode": "0",
          "TopNode": "0",
          "DisplayProperties": {
            "NodeIcons": "",
            "IconOverride": "FutureUse",
            "Size": "FutureUse",
            "AuraWeight": "FutureUse",
            "AuraColour": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "ID",
                "Value": "161.0000"
              },
              {
                "Name": "FIRST_NAME",
                "Value": "Sarath"
              },
              {
                "Name": "LAST_NAME",
                "Value": "Sewall"
              },
              {
                "Name": "DATE_OF_BIRTH",
                "Value": "1976-07-13"
              },
              {
                "Name": "SEX",
                "Value": "FEMALE"
              },
              {
                "Name": "LABEL",
                "Value": "Sarath Sewall"
              },
              {
                "Name": "DEPARTMENT_ID",
                "Value": "80.0000"
              },
              {
                "Name": "MANAGER_ID",
                "Value": "146.0000"
              },
              {
                "Name": "NUMBER_OF_STAFF",
                "Value": "0.0000"
              }
            ]
          }
        },
        {
          "SID": "2459106",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "CopiedFromNodeSID": "",
          "DuplicatesNodeSID": "",
          "NodeID": "PEOPLE",
          "SubNodeID": "SEN_FEMALE_EMPLOYEE",
          "NodeType": "NODE",
          "Label": "Louise Doran",
          "Key": "160Louise Doran",
          "Description": "",
          "ValidFrom": "06-02-1960",
          "ValidTo": "",
          "Evaluated": "1",
          "Flagged": "1",
          "StepsFromStart": "5",
          "StepsFromStartInLayer": "3",
          "FlaggingNode": "",
          "NumberOfFlags": "0",
          "NetworkStartNode": "0",
          "TopNode": "0",
          "DisplayProperties": {
            "NodeIcons": "",
            "IconOverride": "FutureUse",
            "Size": "FutureUse",
            "AuraWeight": "FutureUse",
            "AuraColour": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "ID",
                "Value": "160.0000"
              },
              {
                "Name": "FIRST_NAME",
                "Value": "Louise"
              },
              {
                "Name": "LAST_NAME",
                "Value": "Doran"
              },
              {
                "Name": "DATE_OF_BIRTH",
                "Value": "1960-02-06"
              },
              {
                "Name": "SEX",
                "Value": "FEMALE"
              },
              {
                "Name": "LABEL",
                "Value": "Louise Doran"
              },
              {
                "Name": "DEPARTMENT_ID",
                "Value": "80.0000"
              },
              {
                "Name": "MANAGER_ID",
                "Value": "146.0000"
              },
              {
                "Name": "NUMBER_OF_STAFF",
                "Value": "0.0000"
              }
            ]
          }
        },
        {
          "SID": "2459108",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "CopiedFromNodeSID": "",
          "DuplicatesNodeSID": "",
          "NodeID": "PEOPLE",
          "SubNodeID": "YOUNG_FEMALE_EMPLOYEE",
          "NodeType": "NODE",
          "Label": "Lindsey Smith",
          "Key": "159Lindsey Smith",
          "Description": "",
          "ValidFrom": "18-09-1970",
          "ValidTo": "",
          "Evaluated": "1",
          "Flagged": "1",
          "StepsFromStart": "5",
          "StepsFromStartInLayer": "3",
          "FlaggingNode": "",
          "NumberOfFlags": "0",
          "NetworkStartNode": "0",
          "TopNode": "0",
          "DisplayProperties": {
            "NodeIcons": "",
            "IconOverride": "FutureUse",
            "Size": "FutureUse",
            "AuraWeight": "FutureUse",
            "AuraColour": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "ID",
                "Value": "159.0000"
              },
              {
                "Name": "FIRST_NAME",
                "Value": "Lindsey"
              },
              {
                "Name": "LAST_NAME",
                "Value": "Smith"
              },
              {
                "Name": "DATE_OF_BIRTH",
                "Value": "1970-09-18"
              },
              {
                "Name": "SEX",
                "Value": "FEMALE"
              },
              {
                "Name": "LABEL",
                "Value": "Lindsey Smith"
              },
              {
                "Name": "DEPARTMENT_ID",
                "Value": "80.0000"
              },
              {
                "Name": "MANAGER_ID",
                "Value": "146.0000"
              },
              {
                "Name": "NUMBER_OF_STAFF",
                "Value": "0.0000"
              }
            ]
          }
        }
      ]
    }
  }
};