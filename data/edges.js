const edges = {
	"NetworkEdges": {
		"EdgeCategories": {
			"EdgeCategory": [
				{
					"ID": "MANAGER2EMPLOYEE",
					"Description": "Manager naar Employee",
					"Strength": "1",
					"Direction": "DOWN",
					"EvaluationSeq": "",
					"DisplayProperties": {
						"LineWeight": "FutureUse",
						"LineType": "FutureUse",
						"LineColour": "FutureUse"
					},
					"Attributes": {
						"Attribute": [
							{
								"Name": "EDGE_NOTES1",
								"DataType": "VARCHAR2",
								"Description": "EdgeNotes1",
								"IsDescriptionColumn": "1",
								"IsLabelColumn": "0",
								"IsValidFromColumn": "0",
								"IsValidToColumn": "0",
								"PrimaryDescriptionColumn": "1"
							},
							{
								"Name": "LABEL",
								"DataType": "VARCHAR2",
								"Description": "Label",
								"IsDescriptionColumn": "1",
								"IsLabelColumn": "1",
								"IsValidFromColumn": "0",
								"IsValidToColumn": "0",
								"PrimaryDescriptionColumn": "1"
							},
							{
								"Name": "EDGE_NOTES2",
								"DataType": "VARCHAR2",
								"Description": "EdgeNotes2",
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
					"ID": "REL2",
					"Description": "IRRTST School Relationship",
					"Strength": "1",
					"Direction": "ANY",
					"EvaluationSeq": "",
					"DisplayProperties": {
						"LineWeight": "FutureUse",
						"LineType": "FutureUse",
						"LineColour": "FutureUse"
					},
					"Attributes": {
						"Attribute": [
							{
								"Name": "EDGE_LABEL",
								"DataType": "VARCHAR2",
								"Description": "Label",
								"IsDescriptionColumn": "0",
								"IsLabelColumn": "1",
								"IsValidFromColumn": "0",
								"IsValidToColumn": "0",
								"PrimaryDescriptionColumn": "0"
							},
							{
								"Name": "EDGE_NOTES2",
								"DataType": "VARCHAR2",
								"Description": "Notes2",
								"IsDescriptionColumn": "1",
								"IsLabelColumn": "0",
								"IsValidFromColumn": "0",
								"IsValidToColumn": "0",
								"PrimaryDescriptionColumn": "0"
							},
							{
								"Name": "EDGE_NOTES1",
								"DataType": "VARCHAR2",
								"Description": "Notes1",
								"IsDescriptionColumn": "1",
								"IsLabelColumn": "0",
								"IsValidFromColumn": "0",
								"IsValidToColumn": "0",
								"PrimaryDescriptionColumn": "1"
							}
						]
					}
				},
				{
					"ID": "REL1",
					"Description": "IRRTST Work Relationship",
					"Strength": "1",
					"Direction": "ANY",
					"EvaluationSeq": "",
					"DisplayProperties": {
						"LineWeight": "FutureUse",
						"LineType": "FutureUse",
						"LineColour": "FutureUse"
					},
					"Attributes": {
						"Attribute": [
							{
								"Name": "EDGE_LABEL",
								"DataType": "VARCHAR2",
								"Description": "Label",
								"IsDescriptionColumn": "0",
								"IsLabelColumn": "1",
								"IsValidFromColumn": "0",
								"IsValidToColumn": "0",
								"PrimaryDescriptionColumn": "0"
							},
							{
								"Name": "EDGE_NOTES2",
								"DataType": "VARCHAR2",
								"Description": "Notes2",
								"IsDescriptionColumn": "1",
								"IsLabelColumn": "1",
								"IsValidFromColumn": "0",
								"IsValidToColumn": "0",
								"PrimaryDescriptionColumn": "0"
							},
							{
								"Name": "EDGE_NOTES1",
								"DataType": "VARCHAR2",
								"Description": "Notes1",
								"IsDescriptionColumn": "1",
								"IsLabelColumn": "0",
								"IsValidFromColumn": "0",
								"IsValidToColumn": "0",
								"PrimaryDescriptionColumn": "1"
							}
						]
					}
				},
				{
					"ID": "EMPLOYEE2MANAGER",
					"Description": "Employee to Manager",
					"Strength": "1",
					"Direction": "UP",
					"EvaluationSeq": "",
					"DisplayProperties": {
						"LineWeight": "FutureUse",
						"LineType": "FutureUse",
						"LineColour": "FutureUse"
					},
					"Attributes": {
						"Attribute": [
							{
								"Name": "EDGE_NOTES1",
								"DataType": "VARCHAR2",
								"Description": "EdgeNotes1",
								"IsDescriptionColumn": "1",
								"IsLabelColumn": "0",
								"IsValidFromColumn": "0",
								"IsValidToColumn": "0",
								"PrimaryDescriptionColumn": "0"
							},
							{
								"Name": "EDGE_NOTES2",
								"DataType": "VARCHAR2",
								"Description": "EdgeNotes2",
								"IsDescriptionColumn": "1",
								"IsLabelColumn": "0",
								"IsValidFromColumn": "0",
								"IsValidToColumn": "0",
								"PrimaryDescriptionColumn": "0"
							},
							{
								"Name": "NOTES2",
								"DataType": "VARCHAR2",
								"Description": "SecDesc",
								"IsDescriptionColumn": "0",
								"IsLabelColumn": "0",
								"IsValidFromColumn": "0",
								"IsValidToColumn": "0",
								"PrimaryDescriptionColumn": "0"
							},
							{
								"Name": "NOTES1",
								"DataType": "VARCHAR2",
								"Description": "PrimDesc",
								"IsDescriptionColumn": "1",
								"IsLabelColumn": "0",
								"IsValidFromColumn": "0",
								"IsValidToColumn": "0",
								"PrimaryDescriptionColumn": "1"
							},
							{
								"Name": "LABEL",
								"DataType": "VARCHAR2",
								"Description": "Label",
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
					"ID": "REL4",
					"Description": "IRRTST Family Relationship",
					"Strength": "1",
					"Direction": "ANY",
					"EvaluationSeq": "",
					"DisplayProperties": {
						"LineWeight": "FutureUse",
						"LineType": "FutureUse",
						"LineColour": "FutureUse"
					},
					"Attributes": {
						"Attribute": [
							{
								"Name": "EDGE_LABEL",
								"DataType": "VARCHAR2",
								"Description": "Label",
								"IsDescriptionColumn": "0",
								"IsLabelColumn": "1",
								"IsValidFromColumn": "0",
								"IsValidToColumn": "0",
								"PrimaryDescriptionColumn": "0"
							},
							{
								"Name": "EDGE_NOTES2",
								"DataType": "VARCHAR2",
								"Description": "Notes2",
								"IsDescriptionColumn": "1",
								"IsLabelColumn": "0",
								"IsValidFromColumn": "0",
								"IsValidToColumn": "0",
								"PrimaryDescriptionColumn": "0"
							},
							{
								"Name": "EDGE_NOTES1",
								"DataType": "VARCHAR2",
								"Description": "Notes1",
								"IsDescriptionColumn": "1",
								"IsLabelColumn": "0",
								"IsValidFromColumn": "0",
								"IsValidToColumn": "0",
								"PrimaryDescriptionColumn": "1"
							}
						]
					}
				},
				{
					"ID": "PEOPLE2DEPARTMENT",
					"Description": "People naar Department",
					"Strength": "1",
					"Direction": "UP",
					"EvaluationSeq": "",
					"DisplayProperties": {
						"LineWeight": "FutureUse",
						"LineType": "FutureUse",
						"LineColour": "FutureUse"
					},
					"Attributes": {
						"Attribute": {
							"Name": "LABEL",
							"DataType": "VARCHAR2",
							"Description": "Label",
							"IsDescriptionColumn": "1",
							"IsLabelColumn": "1",
							"IsValidFromColumn": "0",
							"IsValidToColumn": "0",
							"PrimaryDescriptionColumn": "1"
						}
					}
				},
				{
					"ID": "PEOPLE2FLAG",
					"Description": "IRRTST Van People naar Flag",
					"Strength": "1",
					"Direction": "ANY",
					"EvaluationSeq": "",
					"DisplayProperties": {
						"LineWeight": "FutureUse",
						"LineType": "FutureUse",
						"LineColour": "FutureUse"
					},
					"Attributes": {
						"Attribute": {
							"Name": "TYPE",
							"DataType": "VARCHAR2",
							"Description": "Type",
							"IsDescriptionColumn": "0",
							"IsLabelColumn": "1",
							"IsValidFromColumn": "0",
							"IsValidToColumn": "0",
							"PrimaryDescriptionColumn": "0"
						}
					}
				},
				{
					"ID": "PEOPLE2ADDRESS",
					"Description": "People naar Adres",
					"Strength": "1",
					"Direction": "ANY",
					"EvaluationSeq": "",
					"DisplayProperties": {
						"LineWeight": "FutureUse",
						"LineType": "FutureUse",
						"LineColour": "FutureUse"
					},
					"Attributes": {
						"Attribute": {
							"Name": "LABEL",
							"DataType": "VARCHAR2",
							"Description": "Label",
							"IsDescriptionColumn": "0",
							"IsLabelColumn": "1",
							"IsValidFromColumn": "0",
							"IsValidToColumn": "0",
							"PrimaryDescriptionColumn": "0"
						}
					}
				},
				{
					"ID": "REL3",
					"Description": "IRRTST Social Relationship",
					"Strength": "1",
					"Direction": "ANY",
					"EvaluationSeq": "",
					"DisplayProperties": {
						"LineWeight": "FutureUse",
						"LineType": "FutureUse",
						"LineColour": "FutureUse"
					},
					"Attributes": {
						"Attribute": [
							{
								"Name": "EDGE_LABEL",
								"DataType": "VARCHAR2",
								"Description": "Label",
								"IsDescriptionColumn": "0",
								"IsLabelColumn": "1",
								"IsValidFromColumn": "0",
								"IsValidToColumn": "0",
								"PrimaryDescriptionColumn": "0"
							},
							{
								"Name": "EDGE_NOTES2",
								"DataType": "VARCHAR2",
								"Description": "Notes2",
								"IsDescriptionColumn": "1",
								"IsLabelColumn": "0",
								"IsValidFromColumn": "0",
								"IsValidToColumn": "0",
								"PrimaryDescriptionColumn": "0"
							},
							{
								"Name": "EDGE_NOTES1",
								"DataType": "VARCHAR2",
								"Description": "Notes1",
								"IsDescriptionColumn": "1",
								"IsLabelColumn": "0",
								"IsValidFromColumn": "0",
								"IsValidToColumn": "0",
								"PrimaryDescriptionColumn": "1"
							}
						]
					}
				},
				{
					"ID": "DEPARTMENT2PEOPLE",
					"Description": "Department naar People",
					"Strength": "1",
					"Direction": "DOWN",
					"EvaluationSeq": "",
					"DisplayProperties": {
						"LineWeight": "FutureUse",
						"LineType": "FutureUse",
						"LineColour": "FutureUse"
					},
					"Attributes": {
						"Attribute": {
							"Name": "LABEL",
							"DataType": "VARCHAR2",
							"Description": "Label",
							"IsDescriptionColumn": "1",
							"IsLabelColumn": "1",
							"IsValidFromColumn": "0",
							"IsValidToColumn": "0",
							"PrimaryDescriptionColumn": "1"
						}
					}
				}
			]
		},
		"EdgeSets": {
			"EdgeSet": [
  {
    "SetID": "6043140558336",
    "FromNodeSID": "2458272",
    "ToNodeSID": "2458288",
    "NumberInSet": "1",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2458287",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458272",
          "ToNodeSID": "2458288",
          "FromLayerSID": "2458261",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "101Neena Kochhar",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "DEPARTMENT2PEOPLE",
          "Direction": "DOWN",
          "Label": "Department to People",
          "Description": "Department to People",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "Department to People"
            }
          }
        },
        {
          "SID": "2458606",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458288",
          "ToNodeSID": "2458272",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "90",
          "ToNodeCategory": "DEPARTMENT",
          "EdgeCategory": "PEOPLE2DEPARTMENT",
          "Direction": "UP",
          "Label": "People to Department",
          "Description": "People to Department",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "People to Department"
            }
          }
        }
      ]
    },
    "source": "2458272",
    "target": "2458288"
  },
  {
    "SetID": "6043145474880",
    "FromNodeSID": "2458272",
    "ToNodeSID": "2458290",
    "NumberInSet": "1",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2458289",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458272",
          "ToNodeSID": "2458290",
          "FromLayerSID": "2458261",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "102Lex De Haan",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "DEPARTMENT2PEOPLE",
          "Direction": "DOWN",
          "Label": "Department to People",
          "Description": "Department to People",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "Department to People"
            }
          }
        },
        {
          "SID": "2458622",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458290",
          "ToNodeSID": "2458272",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "90",
          "ToNodeCategory": "DEPARTMENT",
          "EdgeCategory": "PEOPLE2DEPARTMENT",
          "Direction": "UP",
          "Label": "People to Department",
          "Description": "People to Department",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "People to Department"
            }
          }
        }
      ]
    },
    "source": "2458272",
    "target": "2458290"
  },
  {
    "SetID": "6043150391424",
    "FromNodeSID": "2458272",
    "ToNodeSID": "2458292",
    "NumberInSet": "1",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2458291",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458272",
          "ToNodeSID": "2458292",
          "FromLayerSID": "2458261",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "100Steven King",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "DEPARTMENT2PEOPLE",
          "Direction": "DOWN",
          "Label": "Department to People",
          "Description": "Department to People",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "Department to People"
            }
          }
        },
        {
          "SID": "2458638",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458292",
          "ToNodeSID": "2458272",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "90",
          "ToNodeCategory": "DEPARTMENT",
          "EdgeCategory": "PEOPLE2DEPARTMENT",
          "Direction": "UP",
          "Label": "People to Department",
          "Description": "People to Department",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "People to Department"
            }
          }
        }
      ]
    },
    "source": "2458272",
    "target": "2458292"
  },
  {
    "SetID": "6043189724096",
    "FromNodeSID": "2458288",
    "ToNodeSID": "2458292",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2458609",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458288",
          "ToNodeSID": "2458292",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "100Steven King",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "EMPLOYEE2MANAGER",
          "Direction": "UP",
          "Label": "Employee to Manager",
          "Description": "E2M-",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "omschrijving bij Employee2Manager edge 11111111111111111111111 111111111111111111111111 111111111111111111111111111111111111111111111"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "omschrijving bij Employee2Manager edge 22222222222222 2222222222222222222 22222222222222222"
              },
              {
                "Name": "NOTES2",
                "Value": "E2M-"
              },
              {
                "Name": "NOTES1",
                "Value": "E2M-"
              },
              {
                "Name": "LABEL",
                "Value": "Employee to Manager"
              }
            ]
          }
        },
        {
          "SID": "2458667",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458292",
          "ToNodeSID": "2458288",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "101Neena Kochhar",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "MANAGER2EMPLOYEE",
          "Direction": "DOWN",
          "Label": "Manager to Employee",
          "Description": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111"
              },
              {
                "Name": "LABEL",
                "Value": "Manager to Employee"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 2222222 22222222222222222222222"
              }
            ]
          }
        }
      ]
    },
    "source": "2458288",
    "target": "2458292"
  },
  {
    "SetID": "6043194640680",
    "FromNodeSID": "2458290",
    "ToNodeSID": "2458292",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2458625",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458290",
          "ToNodeSID": "2458292",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "100Steven King",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "EMPLOYEE2MANAGER",
          "Direction": "UP",
          "Label": "Employee to Manager",
          "Description": "E2M-",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "omschrijving bij Employee2Manager edge 11111111111111111111111 111111111111111111111111 111111111111111111111111111111111111111111111"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "omschrijving bij Employee2Manager edge 22222222222222 2222222222222222222 22222222222222222"
              },
              {
                "Name": "NOTES2",
                "Value": "E2M-"
              },
              {
                "Name": "NOTES1",
                "Value": "E2M-"
              },
              {
                "Name": "LABEL",
                "Value": "Employee to Manager"
              }
            ]
          }
        },
        {
          "SID": "2458669",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458292",
          "ToNodeSID": "2458290",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "102Lex De Haan",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "MANAGER2EMPLOYEE",
          "Direction": "DOWN",
          "Label": "Manager to Employee",
          "Description": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111"
              },
              {
                "Name": "LABEL",
                "Value": "Manager to Employee"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 2222222 22222222222222222222222"
              }
            ]
          }
        }
      ]
    },
    "source": "2458290",
    "target": "2458292"
  },
  {
    "SetID": "6043715795920",
    "FromNodeSID": "2458280",
    "ToNodeSID": "2458514",
    "NumberInSet": "1",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2458513",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458280",
          "ToNodeSID": "2458514",
          "FromLayerSID": "2458261",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "132TJ Olson",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "DEPARTMENT2PEOPLE",
          "Direction": "DOWN",
          "Label": "Department to People",
          "Description": "Department to People",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "Department to People"
            }
          }
        },
        {
          "SID": "2458814",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458514",
          "ToNodeSID": "2458280",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "50",
          "ToNodeCategory": "DEPARTMENT",
          "EdgeCategory": "PEOPLE2DEPARTMENT",
          "Direction": "UP",
          "Label": "People to Department",
          "Description": "People to Department",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "People to Department"
            }
          }
        }
      ]
    },
    "source": "2458280",
    "target": "2458514"
  },
  {
    "SetID": "6043720712480",
    "FromNodeSID": "2458280",
    "ToNodeSID": "2458516",
    "NumberInSet": "1",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2458515",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458280",
          "ToNodeSID": "2458516",
          "FromLayerSID": "2458261",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "128Steven Markle",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "DEPARTMENT2PEOPLE",
          "Direction": "DOWN",
          "Label": "Department to People",
          "Description": "Department to People",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "Department to People"
            }
          }
        },
        {
          "SID": "2458819",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458516",
          "ToNodeSID": "2458280",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "50",
          "ToNodeCategory": "DEPARTMENT",
          "EdgeCategory": "PEOPLE2DEPARTMENT",
          "Direction": "UP",
          "Label": "People to Department",
          "Description": "People to Department",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "People to Department"
            }
          }
        }
      ]
    },
    "source": "2458280",
    "target": "2458516"
  },
  {
    "SetID": "6043725629040",
    "FromNodeSID": "2458280",
    "ToNodeSID": "2458518",
    "NumberInSet": "1",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2458517",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458280",
          "ToNodeSID": "2458518",
          "FromLayerSID": "2458261",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "136Hazel Philtanker",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "DEPARTMENT2PEOPLE",
          "Direction": "DOWN",
          "Label": "Department to People",
          "Description": "Department to People",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "Department to People"
            }
          }
        },
        {
          "SID": "2458854",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458518",
          "ToNodeSID": "2458280",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "50",
          "ToNodeCategory": "DEPARTMENT",
          "EdgeCategory": "PEOPLE2DEPARTMENT",
          "Direction": "UP",
          "Label": "People to Department",
          "Description": "People to Department",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "People to Department"
            }
          }
        }
      ]
    },
    "source": "2458280",
    "target": "2458518"
  },
  {
    "SetID": "6043730545600",
    "FromNodeSID": "2458280",
    "ToNodeSID": "2458520",
    "NumberInSet": "1",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2458519",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458280",
          "ToNodeSID": "2458520",
          "FromLayerSID": "2458261",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "127James Landry",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "DEPARTMENT2PEOPLE",
          "Direction": "DOWN",
          "Label": "Department to People",
          "Description": "Department to People",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "Department to People"
            }
          }
        },
        {
          "SID": "2458909",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458520",
          "ToNodeSID": "2458280",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "50",
          "ToNodeCategory": "DEPARTMENT",
          "EdgeCategory": "PEOPLE2DEPARTMENT",
          "Direction": "UP",
          "Label": "People to Department",
          "Description": "People to Department",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "People to Department"
            }
          }
        }
      ]
    },
    "source": "2458280",
    "target": "2458520"
  },
  {
    "SetID": "6043735462160",
    "FromNodeSID": "2458280",
    "ToNodeSID": "2458522",
    "NumberInSet": "1",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2458521",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458280",
          "ToNodeSID": "2458522",
          "FromLayerSID": "2458261",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "135Ki Gee",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "DEPARTMENT2PEOPLE",
          "Direction": "DOWN",
          "Label": "Department to People",
          "Description": "Department to People",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "Department to People"
            }
          }
        },
        {
          "SID": "2458914",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458522",
          "ToNodeSID": "2458280",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "50",
          "ToNodeCategory": "DEPARTMENT",
          "EdgeCategory": "PEOPLE2DEPARTMENT",
          "Direction": "UP",
          "Label": "People to Department",
          "Description": "People to Department",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "People to Department"
            }
          }
        }
      ]
    },
    "source": "2458280",
    "target": "2458522"
  },
  {
    "SetID": "6043740378720",
    "FromNodeSID": "2458280",
    "ToNodeSID": "2458524",
    "NumberInSet": "1",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2458523",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458280",
          "ToNodeSID": "2458524",
          "FromLayerSID": "2458261",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "182Martha Sullivan",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "DEPARTMENT2PEOPLE",
          "Direction": "DOWN",
          "Label": "Department to People",
          "Description": "Department to People",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "Department to People"
            }
          }
        },
        {
          "SID": "2458859",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458524",
          "ToNodeSID": "2458280",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "50",
          "ToNodeCategory": "DEPARTMENT",
          "EdgeCategory": "PEOPLE2DEPARTMENT",
          "Direction": "UP",
          "Label": "People to Department",
          "Description": "People to Department",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "People to Department"
            }
          }
        }
      ]
    },
    "source": "2458280",
    "target": "2458524"
  },
  {
    "SetID": "6043745295280",
    "FromNodeSID": "2458280",
    "ToNodeSID": "2458526",
    "NumberInSet": "1",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2458525",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458280",
          "ToNodeSID": "2458526",
          "FromLayerSID": "2458261",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "131James Marlow",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "DEPARTMENT2PEOPLE",
          "Direction": "DOWN",
          "Label": "Department to People",
          "Description": "Department to People",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "Department to People"
            }
          }
        },
        {
          "SID": "2458919",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458526",
          "ToNodeSID": "2458280",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "50",
          "ToNodeCategory": "DEPARTMENT",
          "EdgeCategory": "PEOPLE2DEPARTMENT",
          "Direction": "UP",
          "Label": "People to Department",
          "Description": "People to Department",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "People to Department"
            }
          }
        }
      ]
    },
    "source": "2458280",
    "target": "2458526"
  },
  {
    "SetID": "6043750211840",
    "FromNodeSID": "2458280",
    "ToNodeSID": "2458528",
    "NumberInSet": "1",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2458527",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458280",
          "ToNodeSID": "2458528",
          "FromLayerSID": "2458261",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "191Randall Perkins",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "DEPARTMENT2PEOPLE",
          "Direction": "DOWN",
          "Label": "Department to People",
          "Description": "Department to People",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "Department to People"
            }
          }
        },
        {
          "SID": "2458924",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458528",
          "ToNodeSID": "2458280",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "50",
          "ToNodeCategory": "DEPARTMENT",
          "EdgeCategory": "PEOPLE2DEPARTMENT",
          "Direction": "UP",
          "Label": "People to Department",
          "Description": "People to Department",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "People to Department"
            }
          }
        }
      ]
    },
    "source": "2458280",
    "target": "2458528"
  },
  {
    "SetID": "6043755128400",
    "FromNodeSID": "2458280",
    "ToNodeSID": "2458530",
    "NumberInSet": "1",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2458529",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458280",
          "ToNodeSID": "2458530",
          "FromLayerSID": "2458261",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "140Joshua Patel",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "DEPARTMENT2PEOPLE",
          "Direction": "DOWN",
          "Label": "Department to People",
          "Description": "Department to People",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "Department to People"
            }
          }
        },
        {
          "SID": "2458824",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458530",
          "ToNodeSID": "2458280",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "50",
          "ToNodeCategory": "DEPARTMENT",
          "EdgeCategory": "PEOPLE2DEPARTMENT",
          "Direction": "UP",
          "Label": "People to Department",
          "Description": "People to Department",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "People to Department"
            }
          }
        }
      ]
    },
    "source": "2458280",
    "target": "2458530"
  },
  {
    "SetID": "6043760044960",
    "FromNodeSID": "2458280",
    "ToNodeSID": "2458532",
    "NumberInSet": "1",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2458531",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458280",
          "ToNodeSID": "2458532",
          "FromLayerSID": "2458261",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "144Peter Vargas",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "DEPARTMENT2PEOPLE",
          "Direction": "DOWN",
          "Label": "Department to People",
          "Description": "Department to People",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "Department to People"
            }
          }
        },
        {
          "SID": "2458929",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458532",
          "ToNodeSID": "2458280",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "50",
          "ToNodeCategory": "DEPARTMENT",
          "EdgeCategory": "PEOPLE2DEPARTMENT",
          "Direction": "UP",
          "Label": "People to Department",
          "Description": "People to Department",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "People to Department"
            }
          }
        }
      ]
    },
    "source": "2458280",
    "target": "2458532"
  },
  {
    "SetID": "6043764961520",
    "FromNodeSID": "2458280",
    "ToNodeSID": "2458534",
    "NumberInSet": "1",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2458533",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458280",
          "ToNodeSID": "2458534",
          "FromLayerSID": "2458261",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "143Randall Matos",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "DEPARTMENT2PEOPLE",
          "Direction": "DOWN",
          "Label": "Department to People",
          "Description": "Department to People",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "Department to People"
            }
          }
        },
        {
          "SID": "2458936",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458534",
          "ToNodeSID": "2458280",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "50",
          "ToNodeCategory": "DEPARTMENT",
          "EdgeCategory": "PEOPLE2DEPARTMENT",
          "Direction": "UP",
          "Label": "People to Department",
          "Description": "People to Department",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "People to Department"
            }
          }
        }
      ]
    },
    "source": "2458280",
    "target": "2458534"
  },
  {
    "SetID": "6043769878080",
    "FromNodeSID": "2458280",
    "ToNodeSID": "2458536",
    "NumberInSet": "1",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2458535",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458280",
          "ToNodeSID": "2458536",
          "FromLayerSID": "2458261",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "198Donald OConnell",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "DEPARTMENT2PEOPLE",
          "Direction": "DOWN",
          "Label": "Department to People",
          "Description": "Department to People",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "Department to People"
            }
          }
        },
        {
          "SID": "2458829",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458536",
          "ToNodeSID": "2458280",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "50",
          "ToNodeCategory": "DEPARTMENT",
          "EdgeCategory": "PEOPLE2DEPARTMENT",
          "Direction": "UP",
          "Label": "People to Department",
          "Description": "People to Department",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "People to Department"
            }
          }
        }
      ]
    },
    "source": "2458280",
    "target": "2458536"
  },
  {
    "SetID": "6043774794640",
    "FromNodeSID": "2458280",
    "ToNodeSID": "2458538",
    "NumberInSet": "1",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2458537",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458280",
          "ToNodeSID": "2458538",
          "FromLayerSID": "2458261",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "199Douglas Grant",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "DEPARTMENT2PEOPLE",
          "Direction": "DOWN",
          "Label": "Department to People",
          "Description": "Department to People",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "Department to People"
            }
          }
        },
        {
          "SID": "2458941",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458538",
          "ToNodeSID": "2458280",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "50",
          "ToNodeCategory": "DEPARTMENT",
          "EdgeCategory": "PEOPLE2DEPARTMENT",
          "Direction": "UP",
          "Label": "People to Department",
          "Description": "People to Department",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "People to Department"
            }
          }
        }
      ]
    },
    "source": "2458280",
    "target": "2458538"
  },
  {
    "SetID": "6043779711200",
    "FromNodeSID": "2458280",
    "ToNodeSID": "2458540",
    "NumberInSet": "1",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2458539",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458280",
          "ToNodeSID": "2458540",
          "FromLayerSID": "2458261",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "126Irene Mikkilineni",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "DEPARTMENT2PEOPLE",
          "Direction": "DOWN",
          "Label": "Department to People",
          "Description": "Department to People",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "Department to People"
            }
          }
        },
        {
          "SID": "2458864",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458540",
          "ToNodeSID": "2458280",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "50",
          "ToNodeCategory": "DEPARTMENT",
          "EdgeCategory": "PEOPLE2DEPARTMENT",
          "Direction": "UP",
          "Label": "People to Department",
          "Description": "People to Department",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "People to Department"
            }
          }
        }
      ]
    },
    "source": "2458280",
    "target": "2458540"
  },
  {
    "SetID": "6043784627760",
    "FromNodeSID": "2458280",
    "ToNodeSID": "2458542",
    "NumberInSet": "1",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2458541",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458280",
          "ToNodeSID": "2458542",
          "FromLayerSID": "2458261",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "139John Seo",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "DEPARTMENT2PEOPLE",
          "Direction": "DOWN",
          "Label": "Department to People",
          "Description": "Department to People",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "Department to People"
            }
          }
        },
        {
          "SID": "2458946",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458542",
          "ToNodeSID": "2458280",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "50",
          "ToNodeCategory": "DEPARTMENT",
          "EdgeCategory": "PEOPLE2DEPARTMENT",
          "Direction": "UP",
          "Label": "People to Department",
          "Description": "People to Department",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "People to Department"
            }
          }
        }
      ]
    },
    "source": "2458280",
    "target": "2458542"
  },
  {
    "SetID": "6043789544320",
    "FromNodeSID": "2458280",
    "ToNodeSID": "2458544",
    "NumberInSet": "1",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2458543",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458280",
          "ToNodeSID": "2458544",
          "FromLayerSID": "2458261",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "183Girard Geoni",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "DEPARTMENT2PEOPLE",
          "Direction": "DOWN",
          "Label": "Department to People",
          "Description": "Department to People",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "Department to People"
            }
          }
        },
        {
          "SID": "2458834",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458544",
          "ToNodeSID": "2458280",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "50",
          "ToNodeCategory": "DEPARTMENT",
          "EdgeCategory": "PEOPLE2DEPARTMENT",
          "Direction": "UP",
          "Label": "People to Department",
          "Description": "People to Department",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "People to Department"
            }
          }
        }
      ]
    },
    "source": "2458280",
    "target": "2458544"
  },
  {
    "SetID": "6043794460880",
    "FromNodeSID": "2458280",
    "ToNodeSID": "2458546",
    "NumberInSet": "1",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2458545",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458280",
          "ToNodeSID": "2458546",
          "FromLayerSID": "2458261",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "130Mozhe Atkinson",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "DEPARTMENT2PEOPLE",
          "Direction": "DOWN",
          "Label": "Department to People",
          "Description": "Department to People",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "Department to People"
            }
          }
        },
        {
          "SID": "2458951",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458546",
          "ToNodeSID": "2458280",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "50",
          "ToNodeCategory": "DEPARTMENT",
          "EdgeCategory": "PEOPLE2DEPARTMENT",
          "Direction": "UP",
          "Label": "People to Department",
          "Description": "People to Department",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "People to Department"
            }
          }
        }
      ]
    },
    "source": "2458280",
    "target": "2458546"
  },
  {
    "SetID": "6043799377440",
    "FromNodeSID": "2458280",
    "ToNodeSID": "2458548",
    "NumberInSet": "1",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2458547",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458280",
          "ToNodeSID": "2458548",
          "FromLayerSID": "2458261",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "195Vance Jones",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "DEPARTMENT2PEOPLE",
          "Direction": "DOWN",
          "Label": "Department to People",
          "Description": "Department to People",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "Department to People"
            }
          }
        },
        {
          "SID": "2458839",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458548",
          "ToNodeSID": "2458280",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "50",
          "ToNodeCategory": "DEPARTMENT",
          "EdgeCategory": "PEOPLE2DEPARTMENT",
          "Direction": "UP",
          "Label": "People to Department",
          "Description": "People to Department",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "People to Department"
            }
          }
        }
      ]
    },
    "source": "2458280",
    "target": "2458548"
  },
  {
    "SetID": "6043804294000",
    "FromNodeSID": "2458280",
    "ToNodeSID": "2458550",
    "NumberInSet": "1",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2458549",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458280",
          "ToNodeSID": "2458550",
          "FromLayerSID": "2458261",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "134Michael Rogers",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "DEPARTMENT2PEOPLE",
          "Direction": "DOWN",
          "Label": "Department to People",
          "Description": "Department to People",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "Department to People"
            }
          }
        },
        {
          "SID": "2458844",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458550",
          "ToNodeSID": "2458280",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "50",
          "ToNodeCategory": "DEPARTMENT",
          "EdgeCategory": "PEOPLE2DEPARTMENT",
          "Direction": "UP",
          "Label": "People to Department",
          "Description": "People to Department",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "People to Department"
            }
          }
        }
      ]
    },
    "source": "2458280",
    "target": "2458550"
  },
  {
    "SetID": "6043809210560",
    "FromNodeSID": "2458280",
    "ToNodeSID": "2458552",
    "NumberInSet": "1",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2458551",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458280",
          "ToNodeSID": "2458552",
          "FromLayerSID": "2458261",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "190Timothy Gates",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "DEPARTMENT2PEOPLE",
          "Direction": "DOWN",
          "Label": "Department to People",
          "Description": "Department to People",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "Department to People"
            }
          }
        },
        {
          "SID": "2458956",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458552",
          "ToNodeSID": "2458280",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "50",
          "ToNodeCategory": "DEPARTMENT",
          "EdgeCategory": "PEOPLE2DEPARTMENT",
          "Direction": "UP",
          "Label": "People to Department",
          "Description": "People to Department",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "People to Department"
            }
          }
        }
      ]
    },
    "source": "2458280",
    "target": "2458552"
  },
  {
    "SetID": "6043814127120",
    "FromNodeSID": "2458280",
    "ToNodeSID": "2458554",
    "NumberInSet": "1",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2458553",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458280",
          "ToNodeSID": "2458554",
          "FromLayerSID": "2458261",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "187Anthony Cabrio",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "DEPARTMENT2PEOPLE",
          "Direction": "DOWN",
          "Label": "Department to People",
          "Description": "Department to People",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "Department to People"
            }
          }
        },
        {
          "SID": "2458961",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458554",
          "ToNodeSID": "2458280",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "50",
          "ToNodeCategory": "DEPARTMENT",
          "EdgeCategory": "PEOPLE2DEPARTMENT",
          "Direction": "UP",
          "Label": "People to Department",
          "Description": "People to Department",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "People to Department"
            }
          }
        }
      ]
    },
    "source": "2458280",
    "target": "2458554"
  },
  {
    "SetID": "6043819043680",
    "FromNodeSID": "2458280",
    "ToNodeSID": "2458556",
    "NumberInSet": "1",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2458555",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458280",
          "ToNodeSID": "2458556",
          "FromLayerSID": "2458261",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "197Kevin Feeney",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "DEPARTMENT2PEOPLE",
          "Direction": "DOWN",
          "Label": "Department to People",
          "Description": "Department to People",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "Department to People"
            }
          }
        },
        {
          "SID": "2458849",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458556",
          "ToNodeSID": "2458280",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "50",
          "ToNodeCategory": "DEPARTMENT",
          "EdgeCategory": "PEOPLE2DEPARTMENT",
          "Direction": "UP",
          "Label": "People to Department",
          "Description": "People to Department",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "People to Department"
            }
          }
        }
      ]
    },
    "source": "2458280",
    "target": "2458556"
  },
  {
    "SetID": "6043823960240",
    "FromNodeSID": "2458280",
    "ToNodeSID": "2458558",
    "NumberInSet": "1",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2458557",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458280",
          "ToNodeSID": "2458558",
          "FromLayerSID": "2458261",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "181Jean Fleaur",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "DEPARTMENT2PEOPLE",
          "Direction": "DOWN",
          "Label": "Department to People",
          "Description": "Department to People",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "Department to People"
            }
          }
        },
        {
          "SID": "2458869",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458558",
          "ToNodeSID": "2458280",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "50",
          "ToNodeCategory": "DEPARTMENT",
          "EdgeCategory": "PEOPLE2DEPARTMENT",
          "Direction": "UP",
          "Label": "People to Department",
          "Description": "People to Department",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "People to Department"
            }
          }
        }
      ]
    },
    "source": "2458280",
    "target": "2458558"
  },
  {
    "SetID": "6043828876800",
    "FromNodeSID": "2458280",
    "ToNodeSID": "2458560",
    "NumberInSet": "1",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2458559",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458280",
          "ToNodeSID": "2458560",
          "FromLayerSID": "2458261",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "142Curtis Davies",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "DEPARTMENT2PEOPLE",
          "Direction": "DOWN",
          "Label": "Department to People",
          "Description": "Department to People",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "Department to People"
            }
          }
        },
        {
          "SID": "2458966",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458560",
          "ToNodeSID": "2458280",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "50",
          "ToNodeCategory": "DEPARTMENT",
          "EdgeCategory": "PEOPLE2DEPARTMENT",
          "Direction": "UP",
          "Label": "People to Department",
          "Description": "People to Department",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "People to Department"
            }
          }
        }
      ]
    },
    "source": "2458280",
    "target": "2458560"
  },
  {
    "SetID": "6043833793360",
    "FromNodeSID": "2458280",
    "ToNodeSID": "2458562",
    "NumberInSet": "1",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2458561",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458280",
          "ToNodeSID": "2458562",
          "FromLayerSID": "2458261",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "196Alana Walsh",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "DEPARTMENT2PEOPLE",
          "Direction": "DOWN",
          "Label": "Department to People",
          "Description": "Department to People",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "Department to People"
            }
          }
        },
        {
          "SID": "2458789",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458562",
          "ToNodeSID": "2458280",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "50",
          "ToNodeCategory": "DEPARTMENT",
          "EdgeCategory": "PEOPLE2DEPARTMENT",
          "Direction": "UP",
          "Label": "People to Department",
          "Description": "People to Department",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "People to Department"
            }
          }
        }
      ]
    },
    "source": "2458280",
    "target": "2458562"
  },
  {
    "SetID": "6043838709920",
    "FromNodeSID": "2458280",
    "ToNodeSID": "2458564",
    "NumberInSet": "1",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2458563",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458280",
          "ToNodeSID": "2458564",
          "FromLayerSID": "2458261",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "125Julia Nayer",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "DEPARTMENT2PEOPLE",
          "Direction": "DOWN",
          "Label": "Department to People",
          "Description": "Department to People",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "Department to People"
            }
          }
        },
        {
          "SID": "2458874",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458564",
          "ToNodeSID": "2458280",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "50",
          "ToNodeCategory": "DEPARTMENT",
          "EdgeCategory": "PEOPLE2DEPARTMENT",
          "Direction": "UP",
          "Label": "People to Department",
          "Description": "People to Department",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "People to Department"
            }
          }
        }
      ]
    },
    "source": "2458280",
    "target": "2458564"
  },
  {
    "SetID": "6043843626480",
    "FromNodeSID": "2458280",
    "ToNodeSID": "2458566",
    "NumberInSet": "1",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2458565",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458280",
          "ToNodeSID": "2458566",
          "FromLayerSID": "2458261",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "180Winston Taylor",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "DEPARTMENT2PEOPLE",
          "Direction": "DOWN",
          "Label": "Department to People",
          "Description": "Department to People",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "Department to People"
            }
          }
        },
        {
          "SID": "2458971",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458566",
          "ToNodeSID": "2458280",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "50",
          "ToNodeCategory": "DEPARTMENT",
          "EdgeCategory": "PEOPLE2DEPARTMENT",
          "Direction": "UP",
          "Label": "People to Department",
          "Description": "People to Department",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "People to Department"
            }
          }
        }
      ]
    },
    "source": "2458280",
    "target": "2458566"
  },
  {
    "SetID": "6043848543040",
    "FromNodeSID": "2458280",
    "ToNodeSID": "2458568",
    "NumberInSet": "1",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2458567",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458280",
          "ToNodeSID": "2458568",
          "FromLayerSID": "2458261",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "138Stephen Stiles",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "DEPARTMENT2PEOPLE",
          "Direction": "DOWN",
          "Label": "Department to People",
          "Description": "Department to People",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "Department to People"
            }
          }
        },
        {
          "SID": "2458976",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458568",
          "ToNodeSID": "2458280",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "50",
          "ToNodeCategory": "DEPARTMENT",
          "EdgeCategory": "PEOPLE2DEPARTMENT",
          "Direction": "UP",
          "Label": "People to Department",
          "Description": "People to Department",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "People to Department"
            }
          }
        }
      ]
    },
    "source": "2458280",
    "target": "2458568"
  },
  {
    "SetID": "6043853459600",
    "FromNodeSID": "2458280",
    "ToNodeSID": "2458570",
    "NumberInSet": "1",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2458569",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458280",
          "ToNodeSID": "2458570",
          "FromLayerSID": "2458261",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "194Samuel McCain",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "DEPARTMENT2PEOPLE",
          "Direction": "DOWN",
          "Label": "Department to People",
          "Description": "Department to People",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "Department to People"
            }
          }
        },
        {
          "SID": "2458981",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458570",
          "ToNodeSID": "2458280",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "50",
          "ToNodeCategory": "DEPARTMENT",
          "EdgeCategory": "PEOPLE2DEPARTMENT",
          "Direction": "UP",
          "Label": "People to Department",
          "Description": "People to Department",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "People to Department"
            }
          }
        }
      ]
    },
    "source": "2458280",
    "target": "2458570"
  },
  {
    "SetID": "6043858376160",
    "FromNodeSID": "2458280",
    "ToNodeSID": "2458572",
    "NumberInSet": "1",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2458571",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458280",
          "ToNodeSID": "2458572",
          "FromLayerSID": "2458261",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "129Laura Bissot",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "DEPARTMENT2PEOPLE",
          "Direction": "DOWN",
          "Label": "Department to People",
          "Description": "Department to People",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "Department to People"
            }
          }
        },
        {
          "SID": "2458794",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458572",
          "ToNodeSID": "2458280",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "50",
          "ToNodeCategory": "DEPARTMENT",
          "EdgeCategory": "PEOPLE2DEPARTMENT",
          "Direction": "UP",
          "Label": "People to Department",
          "Description": "People to Department",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "People to Department"
            }
          }
        }
      ]
    },
    "source": "2458280",
    "target": "2458572"
  },
  {
    "SetID": "6043863292720",
    "FromNodeSID": "2458280",
    "ToNodeSID": "2458574",
    "NumberInSet": "1",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2458573",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458280",
          "ToNodeSID": "2458574",
          "FromLayerSID": "2458261",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "133Jason Mallin",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "DEPARTMENT2PEOPLE",
          "Direction": "DOWN",
          "Label": "Department to People",
          "Description": "Department to People",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "Department to People"
            }
          }
        },
        {
          "SID": "2458986",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458574",
          "ToNodeSID": "2458280",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "50",
          "ToNodeCategory": "DEPARTMENT",
          "EdgeCategory": "PEOPLE2DEPARTMENT",
          "Direction": "UP",
          "Label": "People to Department",
          "Description": "People to Department",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "People to Department"
            }
          }
        }
      ]
    },
    "source": "2458280",
    "target": "2458574"
  },
  {
    "SetID": "6043868209280",
    "FromNodeSID": "2458280",
    "ToNodeSID": "2458576",
    "NumberInSet": "1",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2458575",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458280",
          "ToNodeSID": "2458576",
          "FromLayerSID": "2458261",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "186Julia Dellinger",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "DEPARTMENT2PEOPLE",
          "Direction": "DOWN",
          "Label": "Department to People",
          "Description": "Department to People",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "Department to People"
            }
          }
        },
        {
          "SID": "2458879",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458576",
          "ToNodeSID": "2458280",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "50",
          "ToNodeCategory": "DEPARTMENT",
          "EdgeCategory": "PEOPLE2DEPARTMENT",
          "Direction": "UP",
          "Label": "People to Department",
          "Description": "People to Department",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "People to Department"
            }
          }
        }
      ]
    },
    "source": "2458280",
    "target": "2458576"
  },
  {
    "SetID": "6043873125840",
    "FromNodeSID": "2458280",
    "ToNodeSID": "2458578",
    "NumberInSet": "1",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2458577",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458280",
          "ToNodeSID": "2458578",
          "FromLayerSID": "2458261",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "141Trenna Rajs",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "DEPARTMENT2PEOPLE",
          "Direction": "DOWN",
          "Label": "Department to People",
          "Description": "Department to People",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "Department to People"
            }
          }
        },
        {
          "SID": "2458884",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458578",
          "ToNodeSID": "2458280",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "50",
          "ToNodeCategory": "DEPARTMENT",
          "EdgeCategory": "PEOPLE2DEPARTMENT",
          "Direction": "UP",
          "Label": "People to Department",
          "Description": "People to Department",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "People to Department"
            }
          }
        }
      ]
    },
    "source": "2458280",
    "target": "2458578"
  },
  {
    "SetID": "6043878042400",
    "FromNodeSID": "2458280",
    "ToNodeSID": "2458580",
    "NumberInSet": "1",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2458579",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458280",
          "ToNodeSID": "2458580",
          "FromLayerSID": "2458261",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "189Jennifer Dilly",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "DEPARTMENT2PEOPLE",
          "Direction": "DOWN",
          "Label": "Department to People",
          "Description": "Department to People",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "Department to People"
            }
          }
        },
        {
          "SID": "2458799",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458580",
          "ToNodeSID": "2458280",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "50",
          "ToNodeCategory": "DEPARTMENT",
          "EdgeCategory": "PEOPLE2DEPARTMENT",
          "Direction": "UP",
          "Label": "People to Department",
          "Description": "People to Department",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "People to Department"
            }
          }
        }
      ]
    },
    "source": "2458280",
    "target": "2458580"
  },
  {
    "SetID": "6043882958960",
    "FromNodeSID": "2458280",
    "ToNodeSID": "2458582",
    "NumberInSet": "1",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2458581",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458280",
          "ToNodeSID": "2458582",
          "FromLayerSID": "2458261",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "137Renske Ladwig",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "DEPARTMENT2PEOPLE",
          "Direction": "DOWN",
          "Label": "Department to People",
          "Description": "Department to People",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "Department to People"
            }
          }
        },
        {
          "SID": "2458804",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458582",
          "ToNodeSID": "2458280",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "50",
          "ToNodeCategory": "DEPARTMENT",
          "EdgeCategory": "PEOPLE2DEPARTMENT",
          "Direction": "UP",
          "Label": "People to Department",
          "Description": "People to Department",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "People to Department"
            }
          }
        }
      ]
    },
    "source": "2458280",
    "target": "2458582"
  },
  {
    "SetID": "6043887875520",
    "FromNodeSID": "2458280",
    "ToNodeSID": "2458584",
    "NumberInSet": "1",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2458583",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458280",
          "ToNodeSID": "2458584",
          "FromLayerSID": "2458261",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "188Kelly Chung",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "DEPARTMENT2PEOPLE",
          "Direction": "DOWN",
          "Label": "Department to People",
          "Description": "Department to People",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "Department to People"
            }
          }
        },
        {
          "SID": "2458889",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458584",
          "ToNodeSID": "2458280",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "50",
          "ToNodeCategory": "DEPARTMENT",
          "EdgeCategory": "PEOPLE2DEPARTMENT",
          "Direction": "UP",
          "Label": "People to Department",
          "Description": "People to Department",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "People to Department"
            }
          }
        }
      ]
    },
    "source": "2458280",
    "target": "2458584"
  },
  {
    "SetID": "6043892792080",
    "FromNodeSID": "2458280",
    "ToNodeSID": "2458586",
    "NumberInSet": "1",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2458585",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458280",
          "ToNodeSID": "2458586",
          "FromLayerSID": "2458261",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "193Britney Everett",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "DEPARTMENT2PEOPLE",
          "Direction": "DOWN",
          "Label": "Department to People",
          "Description": "Department to People",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "Department to People"
            }
          }
        },
        {
          "SID": "2458809",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458586",
          "ToNodeSID": "2458280",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "50",
          "ToNodeCategory": "DEPARTMENT",
          "EdgeCategory": "PEOPLE2DEPARTMENT",
          "Direction": "UP",
          "Label": "People to Department",
          "Description": "People to Department",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "People to Department"
            }
          }
        }
      ]
    },
    "source": "2458280",
    "target": "2458586"
  },
  {
    "SetID": "6043897708640",
    "FromNodeSID": "2458280",
    "ToNodeSID": "2458588",
    "NumberInSet": "1",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2458587",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458280",
          "ToNodeSID": "2458588",
          "FromLayerSID": "2458261",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "192Sarah Bell",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "DEPARTMENT2PEOPLE",
          "Direction": "DOWN",
          "Label": "Department to People",
          "Description": "Department to People",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "Department to People"
            }
          }
        },
        {
          "SID": "2458894",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458588",
          "ToNodeSID": "2458280",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "50",
          "ToNodeCategory": "DEPARTMENT",
          "EdgeCategory": "PEOPLE2DEPARTMENT",
          "Direction": "UP",
          "Label": "People to Department",
          "Description": "People to Department",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "People to Department"
            }
          }
        }
      ]
    },
    "source": "2458280",
    "target": "2458588"
  },
  {
    "SetID": "6043902625200",
    "FromNodeSID": "2458280",
    "ToNodeSID": "2458590",
    "NumberInSet": "1",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2458589",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458280",
          "ToNodeSID": "2458590",
          "FromLayerSID": "2458261",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "185Alexis Bull",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "DEPARTMENT2PEOPLE",
          "Direction": "DOWN",
          "Label": "Department to People",
          "Description": "Department to People",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "Department to People"
            }
          }
        },
        {
          "SID": "2458899",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458590",
          "ToNodeSID": "2458280",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "50",
          "ToNodeCategory": "DEPARTMENT",
          "EdgeCategory": "PEOPLE2DEPARTMENT",
          "Direction": "UP",
          "Label": "People to Department",
          "Description": "People to Department",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "People to Department"
            }
          }
        }
      ]
    },
    "source": "2458280",
    "target": "2458590"
  },
  {
    "SetID": "6043907541760",
    "FromNodeSID": "2458280",
    "ToNodeSID": "2458592",
    "NumberInSet": "1",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2458591",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458280",
          "ToNodeSID": "2458592",
          "FromLayerSID": "2458261",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "184Nandita Sarchand",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "DEPARTMENT2PEOPLE",
          "Direction": "DOWN",
          "Label": "Department to People",
          "Description": "Department to People",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "Department to People"
            }
          }
        },
        {
          "SID": "2458904",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458592",
          "ToNodeSID": "2458280",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "50",
          "ToNodeCategory": "DEPARTMENT",
          "EdgeCategory": "PEOPLE2DEPARTMENT",
          "Direction": "UP",
          "Label": "People to Department",
          "Description": "People to Department",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "People to Department"
            }
          }
        }
      ]
    },
    "source": "2458280",
    "target": "2458592"
  },
  {
    "SetID": "6043912458320",
    "FromNodeSID": "2458280",
    "ToNodeSID": "2458594",
    "NumberInSet": "1",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2458593",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458280",
          "ToNodeSID": "2458594",
          "FromLayerSID": "2458261",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "124Kevin Mourgos",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "DEPARTMENT2PEOPLE",
          "Direction": "DOWN",
          "Label": "Department to People",
          "Description": "Department to People",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "Department to People"
            }
          }
        },
        {
          "SID": "2458674",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458594",
          "ToNodeSID": "2458280",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "50",
          "ToNodeCategory": "DEPARTMENT",
          "EdgeCategory": "PEOPLE2DEPARTMENT",
          "Direction": "UP",
          "Label": "People to Department",
          "Description": "People to Department",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "People to Department"
            }
          }
        }
      ]
    },
    "source": "2458280",
    "target": "2458594"
  },
  {
    "SetID": "6043917374880",
    "FromNodeSID": "2458280",
    "ToNodeSID": "2458596",
    "NumberInSet": "1",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2458595",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458280",
          "ToNodeSID": "2458596",
          "FromLayerSID": "2458261",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "123Shanta Vollman",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "DEPARTMENT2PEOPLE",
          "Direction": "DOWN",
          "Label": "Department to People",
          "Description": "Department to People",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "Department to People"
            }
          }
        },
        {
          "SID": "2458696",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458596",
          "ToNodeSID": "2458280",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "50",
          "ToNodeCategory": "DEPARTMENT",
          "EdgeCategory": "PEOPLE2DEPARTMENT",
          "Direction": "UP",
          "Label": "People to Department",
          "Description": "People to Department",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "People to Department"
            }
          }
        }
      ]
    },
    "source": "2458280",
    "target": "2458596"
  },
  {
    "SetID": "6043922291440",
    "FromNodeSID": "2458280",
    "ToNodeSID": "2458598",
    "NumberInSet": "1",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2458597",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458280",
          "ToNodeSID": "2458598",
          "FromLayerSID": "2458261",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "122Payam Kaufling",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "DEPARTMENT2PEOPLE",
          "Direction": "DOWN",
          "Label": "Department to People",
          "Description": "Department to People",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "Department to People"
            }
          }
        },
        {
          "SID": "2458720",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458598",
          "ToNodeSID": "2458280",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "50",
          "ToNodeCategory": "DEPARTMENT",
          "EdgeCategory": "PEOPLE2DEPARTMENT",
          "Direction": "UP",
          "Label": "People to Department",
          "Description": "People to Department",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "People to Department"
            }
          }
        }
      ]
    },
    "source": "2458280",
    "target": "2458598"
  },
  {
    "SetID": "6043927208000",
    "FromNodeSID": "2458280",
    "ToNodeSID": "2458600",
    "NumberInSet": "1",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2458599",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458280",
          "ToNodeSID": "2458600",
          "FromLayerSID": "2458261",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "120Matthew Weiss",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "DEPARTMENT2PEOPLE",
          "Direction": "DOWN",
          "Label": "Department to People",
          "Description": "Department to People",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "Department to People"
            }
          }
        },
        {
          "SID": "2458744",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458600",
          "ToNodeSID": "2458280",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "50",
          "ToNodeCategory": "DEPARTMENT",
          "EdgeCategory": "PEOPLE2DEPARTMENT",
          "Direction": "UP",
          "Label": "People to Department",
          "Description": "People to Department",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "People to Department"
            }
          }
        }
      ]
    },
    "source": "2458280",
    "target": "2458600"
  },
  {
    "SetID": "6043932124560",
    "FromNodeSID": "2458280",
    "ToNodeSID": "2458602",
    "NumberInSet": "1",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2458601",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458280",
          "ToNodeSID": "2458602",
          "FromLayerSID": "2458261",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "121Adam Fripp",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "DEPARTMENT2PEOPLE",
          "Direction": "DOWN",
          "Label": "Department to People",
          "Description": "Department to People",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "Department to People"
            }
          }
        },
        {
          "SID": "2458767",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458602",
          "ToNodeSID": "2458280",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "50",
          "ToNodeCategory": "DEPARTMENT",
          "EdgeCategory": "PEOPLE2DEPARTMENT",
          "Direction": "UP",
          "Label": "People to Department",
          "Description": "People to Department",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "People to Department"
            }
          }
        }
      ]
    },
    "source": "2458280",
    "target": "2458602"
  },
  {
    "SetID": "6043941961448",
    "FromNodeSID": "2458292",
    "ToNodeSID": "2458594",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2458643",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458292",
          "ToNodeSID": "2458594",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "124Kevin Mourgos",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "MANAGER2EMPLOYEE",
          "Direction": "DOWN",
          "Label": "Manager to Employee",
          "Description": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111"
              },
              {
                "Name": "LABEL",
                "Value": "Manager to Employee"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 2222222 22222222222222222222222"
              }
            ]
          }
        },
        {
          "SID": "2458677",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458594",
          "ToNodeSID": "2458292",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "100Steven King",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "EMPLOYEE2MANAGER",
          "Direction": "UP",
          "Label": "Employee to Manager",
          "Description": "E2M-",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "omschrijving bij Employee2Manager edge 11111111111111111111111 111111111111111111111111 111111111111111111111111111111111111111111111"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "omschrijving bij Employee2Manager edge 22222222222222 2222222222222222222 22222222222222222"
              },
              {
                "Name": "NOTES2",
                "Value": "E2M-"
              },
              {
                "Name": "NOTES1",
                "Value": "E2M-"
              },
              {
                "Name": "LABEL",
                "Value": "Employee to Manager"
              }
            ]
          }
        }
      ]
    },
    "source": "2458292",
    "target": "2458594"
  },
  {
    "SetID": "6043946878032",
    "FromNodeSID": "2458292",
    "ToNodeSID": "2458596",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2458645",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458292",
          "ToNodeSID": "2458596",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "123Shanta Vollman",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "MANAGER2EMPLOYEE",
          "Direction": "DOWN",
          "Label": "Manager to Employee",
          "Description": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111"
              },
              {
                "Name": "LABEL",
                "Value": "Manager to Employee"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 2222222 22222222222222222222222"
              }
            ]
          }
        },
        {
          "SID": "2458699",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458596",
          "ToNodeSID": "2458292",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "100Steven King",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "EMPLOYEE2MANAGER",
          "Direction": "UP",
          "Label": "Employee to Manager",
          "Description": "E2M-",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "omschrijving bij Employee2Manager edge 11111111111111111111111 111111111111111111111111 111111111111111111111111111111111111111111111"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "omschrijving bij Employee2Manager edge 22222222222222 2222222222222222222 22222222222222222"
              },
              {
                "Name": "NOTES2",
                "Value": "E2M-"
              },
              {
                "Name": "NOTES1",
                "Value": "E2M-"
              },
              {
                "Name": "LABEL",
                "Value": "Employee to Manager"
              }
            ]
          }
        }
      ]
    },
    "source": "2458292",
    "target": "2458596"
  },
  {
    "SetID": "6043951794616",
    "FromNodeSID": "2458292",
    "ToNodeSID": "2458598",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2458647",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458292",
          "ToNodeSID": "2458598",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "122Payam Kaufling",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "MANAGER2EMPLOYEE",
          "Direction": "DOWN",
          "Label": "Manager to Employee",
          "Description": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111"
              },
              {
                "Name": "LABEL",
                "Value": "Manager to Employee"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 2222222 22222222222222222222222"
              }
            ]
          }
        },
        {
          "SID": "2458723",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458598",
          "ToNodeSID": "2458292",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "100Steven King",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "EMPLOYEE2MANAGER",
          "Direction": "UP",
          "Label": "Employee to Manager",
          "Description": "E2M-",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "omschrijving bij Employee2Manager edge 11111111111111111111111 111111111111111111111111 111111111111111111111111111111111111111111111"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "omschrijving bij Employee2Manager edge 22222222222222 2222222222222222222 22222222222222222"
              },
              {
                "Name": "NOTES2",
                "Value": "E2M-"
              },
              {
                "Name": "NOTES1",
                "Value": "E2M-"
              },
              {
                "Name": "LABEL",
                "Value": "Employee to Manager"
              }
            ]
          }
        }
      ]
    },
    "source": "2458292",
    "target": "2458598"
  },
  {
    "SetID": "6043956711200",
    "FromNodeSID": "2458292",
    "ToNodeSID": "2458600",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2458649",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458292",
          "ToNodeSID": "2458600",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "120Matthew Weiss",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "MANAGER2EMPLOYEE",
          "Direction": "DOWN",
          "Label": "Manager to Employee",
          "Description": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111"
              },
              {
                "Name": "LABEL",
                "Value": "Manager to Employee"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 2222222 22222222222222222222222"
              }
            ]
          }
        },
        {
          "SID": "2458747",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458600",
          "ToNodeSID": "2458292",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "100Steven King",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "EMPLOYEE2MANAGER",
          "Direction": "UP",
          "Label": "Employee to Manager",
          "Description": "E2M-",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "omschrijving bij Employee2Manager edge 11111111111111111111111 111111111111111111111111 111111111111111111111111111111111111111111111"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "omschrijving bij Employee2Manager edge 22222222222222 2222222222222222222 22222222222222222"
              },
              {
                "Name": "NOTES2",
                "Value": "E2M-"
              },
              {
                "Name": "NOTES1",
                "Value": "E2M-"
              },
              {
                "Name": "LABEL",
                "Value": "Employee to Manager"
              }
            ]
          }
        }
      ]
    },
    "source": "2458292",
    "target": "2458600"
  },
  {
    "SetID": "6043959168240",
    "FromNodeSID": "2458288",
    "ToNodeSID": "2458605",
    "NumberInSet": "1",
    "EdgesInSet": {
      "Edge": {
        "SID": "2458604",
        "NetworkSID": "2458250",
        "NetworkLayerSID": "2458271",
        "FromNodeSID": "2458288",
        "ToNodeSID": "2458605",
        "FromLayerSID": "",
        "ToLayerSID": "",
        "ToNodeType": "FLAG",
        "ToNodeKey": "B",
        "ToNodeCategory": "FLAG",
        "EdgeCategory": "PEOPLE2FLAG",
        "Direction": "ANY",
        "Label": "B",
        "Description": "",
        "ValidFrom": "",
        "ValidTo": "",
        "Priority": "FutureUse",
        "DisplayProperties": {
          "LineWeightOverride": "FutureUse",
          "LineTypeOverride": "FutureUse",
          "LineColourOverride": "FutureUse"
        },
        "Attributes": {
          "Attribute": {
            "Name": "TYPE",
            "Value": "B"
          }
        }
      }
    },
    "source": "2458288",
    "target": "2458605"
  },
  {
    "SetID": "6043961627784",
    "FromNodeSID": "2458292",
    "ToNodeSID": "2458602",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2458651",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458292",
          "ToNodeSID": "2458602",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "121Adam Fripp",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "MANAGER2EMPLOYEE",
          "Direction": "DOWN",
          "Label": "Manager to Employee",
          "Description": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111"
              },
              {
                "Name": "LABEL",
                "Value": "Manager to Employee"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 2222222 22222222222222222222222"
              }
            ]
          }
        },
        {
          "SID": "2458770",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458602",
          "ToNodeSID": "2458292",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "100Steven King",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "EMPLOYEE2MANAGER",
          "Direction": "UP",
          "Label": "Employee to Manager",
          "Description": "E2M-",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "omschrijving bij Employee2Manager edge 11111111111111111111111 111111111111111111111111 111111111111111111111111111111111111111111111"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "omschrijving bij Employee2Manager edge 22222222222222 2222222222222222222 22222222222222222"
              },
              {
                "Name": "NOTES2",
                "Value": "E2M-"
              },
              {
                "Name": "NOTES1",
                "Value": "E2M-"
              },
              {
                "Name": "LABEL",
                "Value": "Employee to Manager"
              }
            ]
          }
        }
      ]
    },
    "source": "2458292",
    "target": "2458602"
  },
  {
    "SetID": "6043978834544",
    "FromNodeSID": "2458288",
    "ToNodeSID": "2458613",
    "NumberInSet": "1",
    "EdgesInSet": {
      "Edge": {
        "SID": "2458612",
        "NetworkSID": "2458250",
        "NetworkLayerSID": "2458271",
        "FromNodeSID": "2458288",
        "ToNodeSID": "2458613",
        "FromLayerSID": "",
        "ToLayerSID": "",
        "ToNodeType": "NODE",
        "ToNodeKey": "200Jennifer Whalen",
        "ToNodeCategory": "PEOPLE",
        "EdgeCategory": "MANAGER2EMPLOYEE",
        "Direction": "DOWN",
        "Label": "Manager to Employee",
        "Description": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111",
        "ValidFrom": "",
        "ValidTo": "",
        "Priority": "FutureUse",
        "DisplayProperties": {
          "LineWeightOverride": "FutureUse",
          "LineTypeOverride": "FutureUse",
          "LineColourOverride": "FutureUse"
        },
        "Attributes": {
          "Attribute": [
            {
              "Name": "EDGE_NOTES1",
              "Value": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111"
            },
            {
              "Name": "LABEL",
              "Value": "Manager to Employee"
            },
            {
              "Name": "EDGE_NOTES2",
              "Value": "MANAGER2EMPLOYEENOTESSSSS1111 2222222 22222222222222222222222"
            }
          ]
        }
      }
    },
    "source": "2458288",
    "target": "2458613"
  },
  {
    "SetID": "6043983751120",
    "FromNodeSID": "2458288",
    "ToNodeSID": "2458615",
    "NumberInSet": "1",
    "EdgesInSet": {
      "Edge": {
        "SID": "2458614",
        "NetworkSID": "2458250",
        "NetworkLayerSID": "2458271",
        "FromNodeSID": "2458288",
        "ToNodeSID": "2458615",
        "FromLayerSID": "",
        "ToLayerSID": "",
        "ToNodeType": "NODE",
        "ToNodeKey": "203Susan Mavris",
        "ToNodeCategory": "PEOPLE",
        "EdgeCategory": "MANAGER2EMPLOYEE",
        "Direction": "DOWN",
        "Label": "Manager to Employee",
        "Description": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111",
        "ValidFrom": "",
        "ValidTo": "",
        "Priority": "FutureUse",
        "DisplayProperties": {
          "LineWeightOverride": "FutureUse",
          "LineTypeOverride": "FutureUse",
          "LineColourOverride": "FutureUse"
        },
        "Attributes": {
          "Attribute": [
            {
              "Name": "EDGE_NOTES1",
              "Value": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111"
            },
            {
              "Name": "LABEL",
              "Value": "Manager to Employee"
            },
            {
              "Name": "EDGE_NOTES2",
              "Value": "MANAGER2EMPLOYEENOTESSSSS1111 2222222 22222222222222222222222"
            }
          ]
        }
      }
    },
    "source": "2458288",
    "target": "2458615"
  },
  {
    "SetID": "6043988667696",
    "FromNodeSID": "2458288",
    "ToNodeSID": "2458617",
    "NumberInSet": "1",
    "EdgesInSet": {
      "Edge": {
        "SID": "2458616",
        "NetworkSID": "2458250",
        "NetworkLayerSID": "2458271",
        "FromNodeSID": "2458288",
        "ToNodeSID": "2458617",
        "FromLayerSID": "",
        "ToLayerSID": "",
        "ToNodeType": "NODE",
        "ToNodeKey": "204Hermann Baer",
        "ToNodeCategory": "PEOPLE",
        "EdgeCategory": "MANAGER2EMPLOYEE",
        "Direction": "DOWN",
        "Label": "Manager to Employee",
        "Description": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111",
        "ValidFrom": "",
        "ValidTo": "",
        "Priority": "FutureUse",
        "DisplayProperties": {
          "LineWeightOverride": "FutureUse",
          "LineTypeOverride": "FutureUse",
          "LineColourOverride": "FutureUse"
        },
        "Attributes": {
          "Attribute": [
            {
              "Name": "EDGE_NOTES1",
              "Value": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111"
            },
            {
              "Name": "LABEL",
              "Value": "Manager to Employee"
            },
            {
              "Name": "EDGE_NOTES2",
              "Value": "MANAGER2EMPLOYEENOTESSSSS1111 2222222 22222222222222222222222"
            }
          ]
        }
      }
    },
    "source": "2458288",
    "target": "2458617"
  },
  {
    "SetID": "6043993584272",
    "FromNodeSID": "2458288",
    "ToNodeSID": "2458619",
    "NumberInSet": "1",
    "EdgesInSet": {
      "Edge": {
        "SID": "2458618",
        "NetworkSID": "2458250",
        "NetworkLayerSID": "2458271",
        "FromNodeSID": "2458288",
        "ToNodeSID": "2458619",
        "FromLayerSID": "",
        "ToLayerSID": "",
        "ToNodeType": "NODE",
        "ToNodeKey": "108Nancy Greenberg",
        "ToNodeCategory": "PEOPLE",
        "EdgeCategory": "MANAGER2EMPLOYEE",
        "Direction": "DOWN",
        "Label": "Manager to Employee",
        "Description": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111",
        "ValidFrom": "",
        "ValidTo": "",
        "Priority": "FutureUse",
        "DisplayProperties": {
          "LineWeightOverride": "FutureUse",
          "LineTypeOverride": "FutureUse",
          "LineColourOverride": "FutureUse"
        },
        "Attributes": {
          "Attribute": [
            {
              "Name": "EDGE_NOTES1",
              "Value": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111"
            },
            {
              "Name": "LABEL",
              "Value": "Manager to Employee"
            },
            {
              "Name": "EDGE_NOTES2",
              "Value": "MANAGER2EMPLOYEENOTESSSSS1111 2222222 22222222222222222222222"
            }
          ]
        }
      }
    },
    "source": "2458288",
    "target": "2458619"
  },
  {
    "SetID": "6043998500848",
    "FromNodeSID": "2458288",
    "ToNodeSID": "2458621",
    "NumberInSet": "1",
    "EdgesInSet": {
      "Edge": {
        "SID": "2458620",
        "NetworkSID": "2458250",
        "NetworkLayerSID": "2458271",
        "FromNodeSID": "2458288",
        "ToNodeSID": "2458621",
        "FromLayerSID": "",
        "ToLayerSID": "",
        "ToNodeType": "NODE",
        "ToNodeKey": "205Shelley Higgins",
        "ToNodeCategory": "PEOPLE",
        "EdgeCategory": "MANAGER2EMPLOYEE",
        "Direction": "DOWN",
        "Label": "Manager to Employee",
        "Description": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111",
        "ValidFrom": "",
        "ValidTo": "",
        "Priority": "FutureUse",
        "DisplayProperties": {
          "LineWeightOverride": "FutureUse",
          "LineTypeOverride": "FutureUse",
          "LineColourOverride": "FutureUse"
        },
        "Attributes": {
          "Attribute": [
            {
              "Name": "EDGE_NOTES1",
              "Value": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111"
            },
            {
              "Name": "LABEL",
              "Value": "Manager to Employee"
            },
            {
              "Name": "EDGE_NOTES2",
              "Value": "MANAGER2EMPLOYEENOTESSSSS1111 2222222 22222222222222222222222"
            }
          ]
        }
      }
    },
    "source": "2458288",
    "target": "2458621"
  },
  {
    "SetID": "6044023084410",
    "FromNodeSID": "2458290",
    "ToNodeSID": "2458629",
    "NumberInSet": "1",
    "EdgesInSet": {
      "Edge": {
        "SID": "2458628",
        "NetworkSID": "2458250",
        "NetworkLayerSID": "2458271",
        "FromNodeSID": "2458290",
        "ToNodeSID": "2458629",
        "FromLayerSID": "",
        "ToLayerSID": "",
        "ToNodeType": "NODE",
        "ToNodeKey": "103Alexander Hunold",
        "ToNodeCategory": "PEOPLE",
        "EdgeCategory": "MANAGER2EMPLOYEE",
        "Direction": "DOWN",
        "Label": "Manager to Employee",
        "Description": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111",
        "ValidFrom": "",
        "ValidTo": "",
        "Priority": "FutureUse",
        "DisplayProperties": {
          "LineWeightOverride": "FutureUse",
          "LineTypeOverride": "FutureUse",
          "LineColourOverride": "FutureUse"
        },
        "Attributes": {
          "Attribute": [
            {
              "Name": "EDGE_NOTES1",
              "Value": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111"
            },
            {
              "Name": "LABEL",
              "Value": "Manager to Employee"
            },
            {
              "Name": "EDGE_NOTES2",
              "Value": "MANAGER2EMPLOYEENOTESSSSS1111 2222222 22222222222222222222222"
            }
          ]
        }
      }
    },
    "source": "2458290",
    "target": "2458629"
  },
  {
    "SetID": "6044032918252",
    "FromNodeSID": "2458292",
    "ToNodeSID": "2458631",
    "NumberInSet": "1",
    "EdgesInSet": {
      "Edge": {
        "SID": "2458630",
        "NetworkSID": "2458250",
        "NetworkLayerSID": "2458271",
        "FromNodeSID": "2458292",
        "ToNodeSID": "2458631",
        "FromLayerSID": "",
        "ToLayerSID": "",
        "ToNodeType": "FLAG",
        "ToNodeKey": "A",
        "ToNodeCategory": "FLAG",
        "EdgeCategory": "PEOPLE2FLAG",
        "Direction": "ANY",
        "Label": "A",
        "Description": "",
        "ValidFrom": "",
        "ValidTo": "",
        "Priority": "FutureUse",
        "DisplayProperties": {
          "LineWeightOverride": "FutureUse",
          "LineTypeOverride": "FutureUse",
          "LineColourOverride": "FutureUse"
        },
        "Attributes": {
          "Attribute": {
            "Name": "TYPE",
            "Value": "A"
          }
        }
      }
    },
    "source": "2458292",
    "target": "2458631"
  },
  {
    "SetID": "6044037834836",
    "FromNodeSID": "2458292",
    "ToNodeSID": "2458633",
    "NumberInSet": "1",
    "EdgesInSet": {
      "Edge": {
        "SID": "2458632",
        "NetworkSID": "2458250",
        "NetworkLayerSID": "2458271",
        "FromNodeSID": "2458292",
        "ToNodeSID": "2458633",
        "FromLayerSID": "",
        "ToLayerSID": "",
        "ToNodeType": "NODE",
        "ToNodeKey": "Sterren 40Nederland1111AADen Haag",
        "ToNodeCategory": "ADDRESS",
        "EdgeCategory": "PEOPLE2ADDRESS",
        "Direction": "ANY",
        "Label": "Home Address",
        "Description": "",
        "ValidFrom": "",
        "ValidTo": "",
        "Priority": "FutureUse",
        "DisplayProperties": {
          "LineWeightOverride": "FutureUse",
          "LineTypeOverride": "FutureUse",
          "LineColourOverride": "FutureUse"
        },
        "Attributes": {
          "Attribute": {
            "Name": "LABEL",
            "Value": "Home Address"
          }
        }
      }
    },
    "source": "2458292",
    "target": "2458633"
  },
  {
    "SetID": "6044042751420",
    "FromNodeSID": "2458292",
    "ToNodeSID": "2458635",
    "NumberInSet": "1",
    "EdgesInSet": {
      "Edge": {
        "SID": "2458634",
        "NetworkSID": "2458250",
        "NetworkLayerSID": "2458271",
        "FromNodeSID": "2458292",
        "ToNodeSID": "2458635",
        "FromLayerSID": "",
        "ToLayerSID": "",
        "ToNodeType": "NODE",
        "ToNodeKey": "VliegenstraatNederland2222BBLeiden",
        "ToNodeCategory": "ADDRESS",
        "EdgeCategory": "PEOPLE2ADDRESS",
        "Direction": "ANY",
        "Label": "Home Address",
        "Description": "",
        "ValidFrom": "",
        "ValidTo": "",
        "Priority": "FutureUse",
        "DisplayProperties": {
          "LineWeightOverride": "FutureUse",
          "LineTypeOverride": "FutureUse",
          "LineColourOverride": "FutureUse"
        },
        "Attributes": {
          "Attribute": {
            "Name": "LABEL",
            "Value": "Home Address"
          }
        }
      }
    },
    "source": "2458292",
    "target": "2458635"
  },
  {
    "SetID": "6044047668004",
    "FromNodeSID": "2458292",
    "ToNodeSID": "2458637",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2458641",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458292",
          "ToNodeSID": "2458637",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "156Janette King",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "REL3",
          "Direction": "ANY",
          "Label": "Social",
          "Description": "1-100-156",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_LABEL",
                "Value": "Social"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "(1-100-156)"
              },
              {
                "Name": "EDGE_NOTES1",
                "Value": "1-100-156"
              }
            ]
          }
        },
        {
          "SID": "2458636",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458292",
          "ToNodeSID": "2458637",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "156Janette King",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "REL2",
          "Direction": "ANY",
          "Label": "School",
          "Description": "2-100-156",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_LABEL",
                "Value": "School"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "(2-100-156)"
              },
              {
                "Name": "EDGE_NOTES1",
                "Value": "2-100-156"
              }
            ]
          }
        }
      ]
    },
    "source": "2458292",
    "target": "2458637"
  },
  {
    "SetID": "6044089458968",
    "FromNodeSID": "2458292",
    "ToNodeSID": "2458654",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2458653",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458292",
          "ToNodeSID": "2458654",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "149Eleni Zlotkey",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "MANAGER2EMPLOYEE",
          "Direction": "DOWN",
          "Label": "Manager to Employee",
          "Description": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111"
              },
              {
                "Name": "LABEL",
                "Value": "Manager to Employee"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 2222222 22222222222222222222222"
              }
            ]
          }
        },
        {
          "SID": "2459125",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458654",
          "ToNodeSID": "2458292",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "100Steven King",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "EMPLOYEE2MANAGER",
          "Direction": "UP",
          "Label": "Employee to Manager",
          "Description": "E2M-",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "omschrijving bij Employee2Manager edge 11111111111111111111111 111111111111111111111111 111111111111111111111111111111111111111111111"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "omschrijving bij Employee2Manager edge 22222222222222 2222222222222222222 22222222222222222"
              },
              {
                "Name": "NOTES2",
                "Value": "E2M-"
              },
              {
                "Name": "NOTES1",
                "Value": "E2M-"
              },
              {
                "Name": "LABEL",
                "Value": "Employee to Manager"
              }
            ]
          }
        }
      ]
    },
    "source": "2458292",
    "target": "2458654"
  },
  {
    "SetID": "6044094375552",
    "FromNodeSID": "2458292",
    "ToNodeSID": "2458656",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2458655",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458292",
          "ToNodeSID": "2458656",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "148Gerald Cambrault",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "MANAGER2EMPLOYEE",
          "Direction": "DOWN",
          "Label": "Manager to Employee",
          "Description": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111"
              },
              {
                "Name": "LABEL",
                "Value": "Manager to Employee"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 2222222 22222222222222222222222"
              }
            ]
          }
        },
        {
          "SID": "2459142",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458656",
          "ToNodeSID": "2458292",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "100Steven King",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "EMPLOYEE2MANAGER",
          "Direction": "UP",
          "Label": "Employee to Manager",
          "Description": "E2M-",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "omschrijving bij Employee2Manager edge 11111111111111111111111 111111111111111111111111 111111111111111111111111111111111111111111111"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "omschrijving bij Employee2Manager edge 22222222222222 2222222222222222222 22222222222222222"
              },
              {
                "Name": "NOTES2",
                "Value": "E2M-"
              },
              {
                "Name": "NOTES1",
                "Value": "E2M-"
              },
              {
                "Name": "LABEL",
                "Value": "Employee to Manager"
              }
            ]
          }
        }
      ]
    },
    "source": "2458292",
    "target": "2458656"
  },
  {
    "SetID": "6044099292136",
    "FromNodeSID": "2458292",
    "ToNodeSID": "2458658",
    "NumberInSet": "1",
    "EdgesInSet": {
      "Edge": {
        "SID": "2458657",
        "NetworkSID": "2458250",
        "NetworkLayerSID": "2458271",
        "FromNodeSID": "2458292",
        "ToNodeSID": "2458658",
        "FromLayerSID": "",
        "ToLayerSID": "",
        "ToNodeType": "NODE",
        "ToNodeKey": "114Den Raphaely",
        "ToNodeCategory": "PEOPLE",
        "EdgeCategory": "MANAGER2EMPLOYEE",
        "Direction": "DOWN",
        "Label": "Manager to Employee",
        "Description": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111",
        "ValidFrom": "",
        "ValidTo": "",
        "Priority": "FutureUse",
        "DisplayProperties": {
          "LineWeightOverride": "FutureUse",
          "LineTypeOverride": "FutureUse",
          "LineColourOverride": "FutureUse"
        },
        "Attributes": {
          "Attribute": [
            {
              "Name": "EDGE_NOTES1",
              "Value": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111"
            },
            {
              "Name": "LABEL",
              "Value": "Manager to Employee"
            },
            {
              "Name": "EDGE_NOTES2",
              "Value": "MANAGER2EMPLOYEENOTESSSSS1111 2222222 22222222222222222222222"
            }
          ]
        }
      }
    },
    "source": "2458292",
    "target": "2458658"
  },
  {
    "SetID": "6044104208720",
    "FromNodeSID": "2458292",
    "ToNodeSID": "2458660",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2458659",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458292",
          "ToNodeSID": "2458660",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "147Alberto Errazuriz",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "MANAGER2EMPLOYEE",
          "Direction": "DOWN",
          "Label": "Manager to Employee",
          "Description": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111"
              },
              {
                "Name": "LABEL",
                "Value": "Manager to Employee"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 2222222 22222222222222222222222"
              }
            ]
          }
        },
        {
          "SID": "2459083",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458660",
          "ToNodeSID": "2458292",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "100Steven King",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "EMPLOYEE2MANAGER",
          "Direction": "UP",
          "Label": "Employee to Manager",
          "Description": "E2M-",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "omschrijving bij Employee2Manager edge 11111111111111111111111 111111111111111111111111 111111111111111111111111111111111111111111111"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "omschrijving bij Employee2Manager edge 22222222222222 2222222222222222222 22222222222222222"
              },
              {
                "Name": "NOTES2",
                "Value": "E2M-"
              },
              {
                "Name": "NOTES1",
                "Value": "E2M-"
              },
              {
                "Name": "LABEL",
                "Value": "Employee to Manager"
              }
            ]
          }
        }
      ]
    },
    "source": "2458292",
    "target": "2458660"
  },
  {
    "SetID": "6044109125304",
    "FromNodeSID": "2458292",
    "ToNodeSID": "2458662",
    "NumberInSet": "1",
    "EdgesInSet": {
      "Edge": {
        "SID": "2458661",
        "NetworkSID": "2458250",
        "NetworkLayerSID": "2458271",
        "FromNodeSID": "2458292",
        "ToNodeSID": "2458662",
        "FromLayerSID": "",
        "ToLayerSID": "",
        "ToNodeType": "NODE",
        "ToNodeKey": "201Michael Hartstein",
        "ToNodeCategory": "PEOPLE",
        "EdgeCategory": "MANAGER2EMPLOYEE",
        "Direction": "DOWN",
        "Label": "Manager to Employee",
        "Description": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111",
        "ValidFrom": "",
        "ValidTo": "",
        "Priority": "FutureUse",
        "DisplayProperties": {
          "LineWeightOverride": "FutureUse",
          "LineTypeOverride": "FutureUse",
          "LineColourOverride": "FutureUse"
        },
        "Attributes": {
          "Attribute": [
            {
              "Name": "EDGE_NOTES1",
              "Value": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111"
            },
            {
              "Name": "LABEL",
              "Value": "Manager to Employee"
            },
            {
              "Name": "EDGE_NOTES2",
              "Value": "MANAGER2EMPLOYEENOTESSSSS1111 2222222 22222222222222222222222"
            }
          ]
        }
      }
    },
    "source": "2458292",
    "target": "2458662"
  },
  {
    "SetID": "6044114041888",
    "FromNodeSID": "2458292",
    "ToNodeSID": "2458664",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2458663",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458292",
          "ToNodeSID": "2458664",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "146Karen Partners",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "MANAGER2EMPLOYEE",
          "Direction": "DOWN",
          "Label": "Manager to Employee",
          "Description": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111"
              },
              {
                "Name": "LABEL",
                "Value": "Manager to Employee"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 2222222 22222222222222222222222"
              }
            ]
          }
        },
        {
          "SID": "2459100",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458664",
          "ToNodeSID": "2458292",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "100Steven King",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "EMPLOYEE2MANAGER",
          "Direction": "UP",
          "Label": "Employee to Manager",
          "Description": "E2M-",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "omschrijving bij Employee2Manager edge 11111111111111111111111 111111111111111111111111 111111111111111111111111111111111111111111111"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "omschrijving bij Employee2Manager edge 22222222222222 2222222222222222222 22222222222222222"
              },
              {
                "Name": "NOTES2",
                "Value": "E2M-"
              },
              {
                "Name": "NOTES1",
                "Value": "E2M-"
              },
              {
                "Name": "LABEL",
                "Value": "Employee to Manager"
              }
            ]
          }
        }
      ]
    },
    "source": "2458292",
    "target": "2458664"
  },
  {
    "SetID": "6044118958472",
    "FromNodeSID": "2458292",
    "ToNodeSID": "2458666",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2458665",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458292",
          "ToNodeSID": "2458666",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "145John Russell",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "MANAGER2EMPLOYEE",
          "Direction": "DOWN",
          "Label": "Manager to Employee",
          "Description": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111"
              },
              {
                "Name": "LABEL",
                "Value": "Manager to Employee"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 2222222 22222222222222222222222"
              }
            ]
          }
        },
        {
          "SID": "2459159",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458666",
          "ToNodeSID": "2458292",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "100Steven King",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "EMPLOYEE2MANAGER",
          "Direction": "UP",
          "Label": "Employee to Manager",
          "Description": "E2M-",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "omschrijving bij Employee2Manager edge 11111111111111111111111 111111111111111111111111 111111111111111111111111111111111111111111111"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "omschrijving bij Employee2Manager edge 22222222222222 2222222222222222222 22222222222222222"
              },
              {
                "Name": "NOTES2",
                "Value": "E2M-"
              },
              {
                "Name": "NOTES1",
                "Value": "E2M-"
              },
              {
                "Name": "LABEL",
                "Value": "Employee to Manager"
              }
            ]
          }
        }
      ]
    },
    "source": "2458292",
    "target": "2458666"
  },
  {
    "SetID": "6044507437428",
    "FromNodeSID": "2458514",
    "ToNodeSID": "2458602",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2458817",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458514",
          "ToNodeSID": "2458602",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "121Adam Fripp",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "EMPLOYEE2MANAGER",
          "Direction": "UP",
          "Label": "Employee to Manager",
          "Description": "E2M-",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "omschrijving bij Employee2Manager edge 11111111111111111111111 111111111111111111111111 111111111111111111111111111111111111111111111"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "omschrijving bij Employee2Manager edge 22222222222222 2222222222222222222 22222222222222222"
              },
              {
                "Name": "NOTES2",
                "Value": "E2M-"
              },
              {
                "Name": "NOTES1",
                "Value": "E2M-"
              },
              {
                "Name": "LABEL",
                "Value": "Employee to Manager"
              }
            ]
          }
        },
        {
          "SID": "2458773",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458602",
          "ToNodeSID": "2458514",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "132TJ Olson",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "MANAGER2EMPLOYEE",
          "Direction": "DOWN",
          "Label": "Manager to Employee",
          "Description": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111"
              },
              {
                "Name": "LABEL",
                "Value": "Manager to Employee"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 2222222 22222222222222222222222"
              }
            ]
          }
        }
      ]
    },
    "source": "2458514",
    "target": "2458602"
  },
  {
    "SetID": "6044507437600",
    "FromNodeSID": "2458516",
    "ToNodeSID": "2458600",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2458822",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458516",
          "ToNodeSID": "2458600",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "120Matthew Weiss",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "EMPLOYEE2MANAGER",
          "Direction": "UP",
          "Label": "Employee to Manager",
          "Description": "E2M-",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "omschrijving bij Employee2Manager edge 11111111111111111111111 111111111111111111111111 111111111111111111111111111111111111111111111"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "omschrijving bij Employee2Manager edge 22222222222222 2222222222222222222 22222222222222222"
              },
              {
                "Name": "NOTES2",
                "Value": "E2M-"
              },
              {
                "Name": "NOTES1",
                "Value": "E2M-"
              },
              {
                "Name": "LABEL",
                "Value": "Employee to Manager"
              }
            ]
          }
        },
        {
          "SID": "2458750",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458600",
          "ToNodeSID": "2458516",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "128Steven Markle",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "MANAGER2EMPLOYEE",
          "Direction": "DOWN",
          "Label": "Manager to Employee",
          "Description": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111"
              },
              {
                "Name": "LABEL",
                "Value": "Manager to Employee"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 2222222 22222222222222222222222"
              }
            ]
          }
        }
      ]
    },
    "source": "2458516",
    "target": "2458600"
  },
  {
    "SetID": "6044507437764",
    "FromNodeSID": "2458518",
    "ToNodeSID": "2458598",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2458857",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458518",
          "ToNodeSID": "2458598",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "122Payam Kaufling",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "EMPLOYEE2MANAGER",
          "Direction": "UP",
          "Label": "Employee to Manager",
          "Description": "E2M-",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "omschrijving bij Employee2Manager edge 11111111111111111111111 111111111111111111111111 111111111111111111111111111111111111111111111"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "omschrijving bij Employee2Manager edge 22222222222222 2222222222222222222 22222222222222222"
              },
              {
                "Name": "NOTES2",
                "Value": "E2M-"
              },
              {
                "Name": "NOTES1",
                "Value": "E2M-"
              },
              {
                "Name": "LABEL",
                "Value": "Employee to Manager"
              }
            ]
          }
        },
        {
          "SID": "2458728",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458598",
          "ToNodeSID": "2458518",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "136Hazel Philtanker",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "MANAGER2EMPLOYEE",
          "Direction": "DOWN",
          "Label": "Manager to Employee",
          "Description": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111"
              },
              {
                "Name": "LABEL",
                "Value": "Manager to Employee"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 2222222 22222222222222222222222"
              }
            ]
          }
        }
      ]
    },
    "source": "2458518",
    "target": "2458598"
  },
  {
    "SetID": "6044517272000",
    "FromNodeSID": "2458520",
    "ToNodeSID": "2458600",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2458912",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458520",
          "ToNodeSID": "2458600",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "120Matthew Weiss",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "EMPLOYEE2MANAGER",
          "Direction": "UP",
          "Label": "Employee to Manager",
          "Description": "E2M-",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "omschrijving bij Employee2Manager edge 11111111111111111111111 111111111111111111111111 111111111111111111111111111111111111111111111"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "omschrijving bij Employee2Manager edge 22222222222222 2222222222222222222 22222222222222222"
              },
              {
                "Name": "NOTES2",
                "Value": "E2M-"
              },
              {
                "Name": "NOTES1",
                "Value": "E2M-"
              },
              {
                "Name": "LABEL",
                "Value": "Employee to Manager"
              }
            ]
          }
        },
        {
          "SID": "2458752",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458600",
          "ToNodeSID": "2458520",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "127James Landry",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "MANAGER2EMPLOYEE",
          "Direction": "DOWN",
          "Label": "Manager to Employee",
          "Description": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111"
              },
              {
                "Name": "LABEL",
                "Value": "Manager to Employee"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 2222222 22222222222222222222222"
              }
            ]
          }
        }
      ]
    },
    "source": "2458520",
    "target": "2458600"
  },
  {
    "SetID": "6044517272156",
    "FromNodeSID": "2458522",
    "ToNodeSID": "2458598",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2458917",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458522",
          "ToNodeSID": "2458598",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "122Payam Kaufling",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "EMPLOYEE2MANAGER",
          "Direction": "UP",
          "Label": "Employee to Manager",
          "Description": "E2M-",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "omschrijving bij Employee2Manager edge 11111111111111111111111 111111111111111111111111 111111111111111111111111111111111111111111111"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "omschrijving bij Employee2Manager edge 22222222222222 2222222222222222222 22222222222222222"
              },
              {
                "Name": "NOTES2",
                "Value": "E2M-"
              },
              {
                "Name": "NOTES1",
                "Value": "E2M-"
              },
              {
                "Name": "LABEL",
                "Value": "Employee to Manager"
              }
            ]
          }
        },
        {
          "SID": "2458730",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458598",
          "ToNodeSID": "2458522",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "135Ki Gee",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "MANAGER2EMPLOYEE",
          "Direction": "DOWN",
          "Label": "Manager to Employee",
          "Description": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111"
              },
              {
                "Name": "LABEL",
                "Value": "Manager to Employee"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 2222222 22222222222222222222222"
              }
            ]
          }
        }
      ]
    },
    "source": "2458522",
    "target": "2458598"
  },
  {
    "SetID": "6044527106400",
    "FromNodeSID": "2458524",
    "ToNodeSID": "2458600",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2458862",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458524",
          "ToNodeSID": "2458600",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "120Matthew Weiss",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "EMPLOYEE2MANAGER",
          "Direction": "UP",
          "Label": "Employee to Manager",
          "Description": "E2M-",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "omschrijving bij Employee2Manager edge 11111111111111111111111 111111111111111111111111 111111111111111111111111111111111111111111111"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "omschrijving bij Employee2Manager edge 22222222222222 2222222222222222222 22222222222222222"
              },
              {
                "Name": "NOTES2",
                "Value": "E2M-"
              },
              {
                "Name": "NOTES1",
                "Value": "E2M-"
              },
              {
                "Name": "LABEL",
                "Value": "Employee to Manager"
              }
            ]
          }
        },
        {
          "SID": "2458754",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458600",
          "ToNodeSID": "2458524",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "182Martha Sullivan",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "MANAGER2EMPLOYEE",
          "Direction": "DOWN",
          "Label": "Manager to Employee",
          "Description": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111"
              },
              {
                "Name": "LABEL",
                "Value": "Manager to Employee"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 2222222 22222222222222222222222"
              }
            ]
          }
        }
      ]
    },
    "source": "2458524",
    "target": "2458600"
  },
  {
    "SetID": "6044532023744",
    "FromNodeSID": "2458528",
    "ToNodeSID": "2458598",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2458927",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458528",
          "ToNodeSID": "2458598",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "122Payam Kaufling",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "EMPLOYEE2MANAGER",
          "Direction": "UP",
          "Label": "Employee to Manager",
          "Description": "E2M-",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "omschrijving bij Employee2Manager edge 11111111111111111111111 111111111111111111111111 111111111111111111111111111111111111111111111"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "omschrijving bij Employee2Manager edge 22222222222222 2222222222222222222 22222222222222222"
              },
              {
                "Name": "NOTES2",
                "Value": "E2M-"
              },
              {
                "Name": "NOTES1",
                "Value": "E2M-"
              },
              {
                "Name": "LABEL",
                "Value": "Employee to Manager"
              }
            ]
          }
        },
        {
          "SID": "2458732",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458598",
          "ToNodeSID": "2458528",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "191Randall Perkins",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "MANAGER2EMPLOYEE",
          "Direction": "DOWN",
          "Label": "Manager to Employee",
          "Description": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111"
              },
              {
                "Name": "LABEL",
                "Value": "Manager to Employee"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 2222222 22222222222222222222222"
              }
            ]
          }
        }
      ]
    },
    "source": "2458528",
    "target": "2458598"
  },
  {
    "SetID": "6044532023880",
    "FromNodeSID": "2458530",
    "ToNodeSID": "2458596",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2458827",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458530",
          "ToNodeSID": "2458596",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "123Shanta Vollman",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "EMPLOYEE2MANAGER",
          "Direction": "UP",
          "Label": "Employee to Manager",
          "Description": "E2M-",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "omschrijving bij Employee2Manager edge 11111111111111111111111 111111111111111111111111 111111111111111111111111111111111111111111111"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "omschrijving bij Employee2Manager edge 22222222222222 2222222222222222222 22222222222222222"
              },
              {
                "Name": "NOTES2",
                "Value": "E2M-"
              },
              {
                "Name": "NOTES1",
                "Value": "E2M-"
              },
              {
                "Name": "LABEL",
                "Value": "Employee to Manager"
              }
            ]
          }
        },
        {
          "SID": "2458704",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458596",
          "ToNodeSID": "2458530",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "140Joshua Patel",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "MANAGER2EMPLOYEE",
          "Direction": "DOWN",
          "Label": "Manager to Employee",
          "Description": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111"
              },
              {
                "Name": "LABEL",
                "Value": "Manager to Employee"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 2222222 22222222222222222222222"
              }
            ]
          }
        }
      ]
    },
    "source": "2458530",
    "target": "2458596"
  },
  {
    "SetID": "6044532024008",
    "FromNodeSID": "2458532",
    "ToNodeSID": "2458594",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2458932",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458532",
          "ToNodeSID": "2458594",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "124Kevin Mourgos",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "EMPLOYEE2MANAGER",
          "Direction": "UP",
          "Label": "Employee to Manager",
          "Description": "E2M-",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "omschrijving bij Employee2Manager edge 11111111111111111111111 111111111111111111111111 111111111111111111111111111111111111111111111"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "omschrijving bij Employee2Manager edge 22222222222222 2222222222222222222 22222222222222222"
              },
              {
                "Name": "NOTES2",
                "Value": "E2M-"
              },
              {
                "Name": "NOTES1",
                "Value": "E2M-"
              },
              {
                "Name": "LABEL",
                "Value": "Employee to Manager"
              }
            ]
          }
        },
        {
          "SID": "2458680",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458594",
          "ToNodeSID": "2458532",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "144Peter Vargas",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "MANAGER2EMPLOYEE",
          "Direction": "DOWN",
          "Label": "Manager to Employee",
          "Description": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111"
              },
              {
                "Name": "LABEL",
                "Value": "Manager to Employee"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 2222222 22222222222222222222222"
              }
            ]
          }
        }
      ]
    },
    "source": "2458532",
    "target": "2458594"
  },
  {
    "SetID": "6044536940652",
    "FromNodeSID": "2458526",
    "ToNodeSID": "2458602",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2458922",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458526",
          "ToNodeSID": "2458602",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "121Adam Fripp",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "EMPLOYEE2MANAGER",
          "Direction": "UP",
          "Label": "Employee to Manager",
          "Description": "E2M-",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "omschrijving bij Employee2Manager edge 11111111111111111111111 111111111111111111111111 111111111111111111111111111111111111111111111"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "omschrijving bij Employee2Manager edge 22222222222222 2222222222222222222 22222222222222222"
              },
              {
                "Name": "NOTES2",
                "Value": "E2M-"
              },
              {
                "Name": "NOTES1",
                "Value": "E2M-"
              },
              {
                "Name": "LABEL",
                "Value": "Employee to Manager"
              }
            ]
          }
        },
        {
          "SID": "2458775",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458602",
          "ToNodeSID": "2458526",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "131James Marlow",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "MANAGER2EMPLOYEE",
          "Direction": "DOWN",
          "Label": "Manager to Employee",
          "Description": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111"
              },
              {
                "Name": "LABEL",
                "Value": "Manager to Employee"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 2222222 22222222222222222222222"
              }
            ]
          }
        }
      ]
    },
    "source": "2458526",
    "target": "2458602"
  },
  {
    "SetID": "6044536941072",
    "FromNodeSID": "2458532",
    "ToNodeSID": "2458596",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2458934",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458532",
          "ToNodeSID": "2458596",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "123Shanta Vollman",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "REL3",
          "Direction": "ANY",
          "Label": "Social",
          "Description": "3-144-123",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_LABEL",
                "Value": "Social"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "(3-144-123)"
              },
              {
                "Name": "EDGE_NOTES1",
                "Value": "3-144-123"
              }
            ]
          }
        },
        {
          "SID": "2458702",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458596",
          "ToNodeSID": "2458532",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "144Peter Vargas",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "REL3",
          "Direction": "ANY",
          "Label": "Social",
          "Description": "3-123-144",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_LABEL",
                "Value": "Social"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "(3-123-144)"
              },
              {
                "Name": "EDGE_NOTES1",
                "Value": "3-123-144"
              }
            ]
          }
        }
      ]
    },
    "source": "2458532",
    "target": "2458596"
  },
  {
    "SetID": "6044536941196",
    "FromNodeSID": "2458534",
    "ToNodeSID": "2458594",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2458939",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458534",
          "ToNodeSID": "2458594",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "124Kevin Mourgos",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "EMPLOYEE2MANAGER",
          "Direction": "UP",
          "Label": "Employee to Manager",
          "Description": "E2M-",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "omschrijving bij Employee2Manager edge 11111111111111111111111 111111111111111111111111 111111111111111111111111111111111111111111111"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "omschrijving bij Employee2Manager edge 22222222222222 2222222222222222222 22222222222222222"
              },
              {
                "Name": "NOTES2",
                "Value": "E2M-"
              },
              {
                "Name": "NOTES1",
                "Value": "E2M-"
              },
              {
                "Name": "LABEL",
                "Value": "Employee to Manager"
              }
            ]
          }
        },
        {
          "SID": "2458682",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458594",
          "ToNodeSID": "2458534",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "143Randall Matos",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "MANAGER2EMPLOYEE",
          "Direction": "DOWN",
          "Label": "Manager to Employee",
          "Description": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111"
              },
              {
                "Name": "LABEL",
                "Value": "Manager to Employee"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 2222222 22222222222222222222222"
              }
            ]
          }
        }
      ]
    },
    "source": "2458534",
    "target": "2458594"
  },
  {
    "SetID": "6044541858384",
    "FromNodeSID": "2458536",
    "ToNodeSID": "2458594",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2458832",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458536",
          "ToNodeSID": "2458594",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "124Kevin Mourgos",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "EMPLOYEE2MANAGER",
          "Direction": "UP",
          "Label": "Employee to Manager",
          "Description": "E2M-",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "omschrijving bij Employee2Manager edge 11111111111111111111111 111111111111111111111111 111111111111111111111111111111111111111111111"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "omschrijving bij Employee2Manager edge 22222222222222 2222222222222222222 22222222222222222"
              },
              {
                "Name": "NOTES2",
                "Value": "E2M-"
              },
              {
                "Name": "NOTES1",
                "Value": "E2M-"
              },
              {
                "Name": "LABEL",
                "Value": "Employee to Manager"
              }
            ]
          }
        },
        {
          "SID": "2458684",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458594",
          "ToNodeSID": "2458536",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "198Donald OConnell",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "MANAGER2EMPLOYEE",
          "Direction": "DOWN",
          "Label": "Manager to Employee",
          "Description": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111"
              },
              {
                "Name": "LABEL",
                "Value": "Manager to Employee"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 2222222 22222222222222222222222"
              }
            ]
          }
        }
      ]
    },
    "source": "2458536",
    "target": "2458594"
  },
  {
    "SetID": "6044546775572",
    "FromNodeSID": "2458538",
    "ToNodeSID": "2458594",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2458944",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458538",
          "ToNodeSID": "2458594",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "124Kevin Mourgos",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "EMPLOYEE2MANAGER",
          "Direction": "UP",
          "Label": "Employee to Manager",
          "Description": "E2M-",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "omschrijving bij Employee2Manager edge 11111111111111111111111 111111111111111111111111 111111111111111111111111111111111111111111111"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "omschrijving bij Employee2Manager edge 22222222222222 2222222222222222222 22222222222222222"
              },
              {
                "Name": "NOTES2",
                "Value": "E2M-"
              },
              {
                "Name": "NOTES1",
                "Value": "E2M-"
              },
              {
                "Name": "LABEL",
                "Value": "Employee to Manager"
              }
            ]
          }
        },
        {
          "SID": "2458686",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458594",
          "ToNodeSID": "2458538",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "199Douglas Grant",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "MANAGER2EMPLOYEE",
          "Direction": "DOWN",
          "Label": "Manager to Employee",
          "Description": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111"
              },
              {
                "Name": "LABEL",
                "Value": "Manager to Employee"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 2222222 22222222222222222222222"
              }
            ]
          }
        }
      ]
    },
    "source": "2458538",
    "target": "2458594"
  },
  {
    "SetID": "6044561527032",
    "FromNodeSID": "2458542",
    "ToNodeSID": "2458596",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2458949",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458542",
          "ToNodeSID": "2458596",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "123Shanta Vollman",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "EMPLOYEE2MANAGER",
          "Direction": "UP",
          "Label": "Employee to Manager",
          "Description": "E2M-",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "omschrijving bij Employee2Manager edge 11111111111111111111111 111111111111111111111111 111111111111111111111111111111111111111111111"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "omschrijving bij Employee2Manager edge 22222222222222 2222222222222222222 22222222222222222"
              },
              {
                "Name": "NOTES2",
                "Value": "E2M-"
              },
              {
                "Name": "NOTES1",
                "Value": "E2M-"
              },
              {
                "Name": "LABEL",
                "Value": "Employee to Manager"
              }
            ]
          }
        },
        {
          "SID": "2458706",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458596",
          "ToNodeSID": "2458542",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "139John Seo",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "MANAGER2EMPLOYEE",
          "Direction": "DOWN",
          "Label": "Manager to Employee",
          "Description": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111"
              },
              {
                "Name": "LABEL",
                "Value": "Manager to Employee"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 2222222 22222222222222222222222"
              }
            ]
          }
        }
      ]
    },
    "source": "2458542",
    "target": "2458596"
  },
  {
    "SetID": "6044566444000",
    "FromNodeSID": "2458540",
    "ToNodeSID": "2458600",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2458867",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458540",
          "ToNodeSID": "2458600",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "120Matthew Weiss",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "EMPLOYEE2MANAGER",
          "Direction": "UP",
          "Label": "Employee to Manager",
          "Description": "E2M-",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "omschrijving bij Employee2Manager edge 11111111111111111111111 111111111111111111111111 111111111111111111111111111111111111111111111"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "omschrijving bij Employee2Manager edge 22222222222222 2222222222222222222 22222222222222222"
              },
              {
                "Name": "NOTES2",
                "Value": "E2M-"
              },
              {
                "Name": "NOTES1",
                "Value": "E2M-"
              },
              {
                "Name": "LABEL",
                "Value": "Employee to Manager"
              }
            ]
          }
        },
        {
          "SID": "2458756",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458600",
          "ToNodeSID": "2458540",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "126Irene Mikkilineni",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "MANAGER2EMPLOYEE",
          "Direction": "DOWN",
          "Label": "Manager to Employee",
          "Description": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111"
              },
              {
                "Name": "LABEL",
                "Value": "Manager to Employee"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 2222222 22222222222222222222222"
              }
            ]
          }
        }
      ]
    },
    "source": "2458540",
    "target": "2458600"
  },
  {
    "SetID": "6044576278400",
    "FromNodeSID": "2458544",
    "ToNodeSID": "2458600",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2458837",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458544",
          "ToNodeSID": "2458600",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "120Matthew Weiss",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "EMPLOYEE2MANAGER",
          "Direction": "UP",
          "Label": "Employee to Manager",
          "Description": "E2M-",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "omschrijving bij Employee2Manager edge 11111111111111111111111 111111111111111111111111 111111111111111111111111111111111111111111111"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "omschrijving bij Employee2Manager edge 22222222222222 2222222222222222222 22222222222222222"
              },
              {
                "Name": "NOTES2",
                "Value": "E2M-"
              },
              {
                "Name": "NOTES1",
                "Value": "E2M-"
              },
              {
                "Name": "LABEL",
                "Value": "Employee to Manager"
              }
            ]
          }
        },
        {
          "SID": "2458758",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458600",
          "ToNodeSID": "2458544",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "183Girard Geoni",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "MANAGER2EMPLOYEE",
          "Direction": "DOWN",
          "Label": "Manager to Employee",
          "Description": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111"
              },
              {
                "Name": "LABEL",
                "Value": "Manager to Employee"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 2222222 22222222222222222222222"
              }
            ]
          }
        }
      ]
    },
    "source": "2458544",
    "target": "2458600"
  },
  {
    "SetID": "6044576278608",
    "FromNodeSID": "2458548",
    "ToNodeSID": "2458596",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2458842",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458548",
          "ToNodeSID": "2458596",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "123Shanta Vollman",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "EMPLOYEE2MANAGER",
          "Direction": "UP",
          "Label": "Employee to Manager",
          "Description": "E2M-",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "omschrijving bij Employee2Manager edge 11111111111111111111111 111111111111111111111111 111111111111111111111111111111111111111111111"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "omschrijving bij Employee2Manager edge 22222222222222 2222222222222222222 22222222222222222"
              },
              {
                "Name": "NOTES2",
                "Value": "E2M-"
              },
              {
                "Name": "NOTES1",
                "Value": "E2M-"
              },
              {
                "Name": "LABEL",
                "Value": "Employee to Manager"
              }
            ]
          }
        },
        {
          "SID": "2458708",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458596",
          "ToNodeSID": "2458548",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "195Vance Jones",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "MANAGER2EMPLOYEE",
          "Direction": "DOWN",
          "Label": "Manager to Employee",
          "Description": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111"
              },
              {
                "Name": "LABEL",
                "Value": "Manager to Employee"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 2222222 22222222222222222222222"
              }
            ]
          }
        }
      ]
    },
    "source": "2458548",
    "target": "2458596"
  },
  {
    "SetID": "6044586112692",
    "FromNodeSID": "2458546",
    "ToNodeSID": "2458602",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2458954",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458546",
          "ToNodeSID": "2458602",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "121Adam Fripp",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "EMPLOYEE2MANAGER",
          "Direction": "UP",
          "Label": "Employee to Manager",
          "Description": "E2M-",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "omschrijving bij Employee2Manager edge 11111111111111111111111 111111111111111111111111 111111111111111111111111111111111111111111111"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "omschrijving bij Employee2Manager edge 22222222222222 2222222222222222222 22222222222222222"
              },
              {
                "Name": "NOTES2",
                "Value": "E2M-"
              },
              {
                "Name": "NOTES1",
                "Value": "E2M-"
              },
              {
                "Name": "LABEL",
                "Value": "Employee to Manager"
              }
            ]
          }
        },
        {
          "SID": "2458777",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458602",
          "ToNodeSID": "2458546",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "130Mozhe Atkinson",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "MANAGER2EMPLOYEE",
          "Direction": "DOWN",
          "Label": "Manager to Employee",
          "Description": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111"
              },
              {
                "Name": "LABEL",
                "Value": "Manager to Employee"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 2222222 22222222222222222222222"
              }
            ]
          }
        }
      ]
    },
    "source": "2458546",
    "target": "2458602"
  },
  {
    "SetID": "6044586112900",
    "FromNodeSID": "2458550",
    "ToNodeSID": "2458598",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2458847",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458550",
          "ToNodeSID": "2458598",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "122Payam Kaufling",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "EMPLOYEE2MANAGER",
          "Direction": "UP",
          "Label": "Employee to Manager",
          "Description": "E2M-",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "omschrijving bij Employee2Manager edge 11111111111111111111111 111111111111111111111111 111111111111111111111111111111111111111111111"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "omschrijving bij Employee2Manager edge 22222222222222 2222222222222222222 22222222222222222"
              },
              {
                "Name": "NOTES2",
                "Value": "E2M-"
              },
              {
                "Name": "NOTES1",
                "Value": "E2M-"
              },
              {
                "Name": "LABEL",
                "Value": "Employee to Manager"
              }
            ]
          }
        },
        {
          "SID": "2458734",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458598",
          "ToNodeSID": "2458550",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "134Michael Rogers",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "MANAGER2EMPLOYEE",
          "Direction": "DOWN",
          "Label": "Manager to Employee",
          "Description": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111"
              },
              {
                "Name": "LABEL",
                "Value": "Manager to Employee"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 2222222 22222222222222222222222"
              }
            ]
          }
        }
      ]
    },
    "source": "2458550",
    "target": "2458598"
  },
  {
    "SetID": "6044591030096",
    "FromNodeSID": "2458552",
    "ToNodeSID": "2458598",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2458959",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458552",
          "ToNodeSID": "2458598",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "122Payam Kaufling",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "EMPLOYEE2MANAGER",
          "Direction": "UP",
          "Label": "Employee to Manager",
          "Description": "E2M-",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "omschrijving bij Employee2Manager edge 11111111111111111111111 111111111111111111111111 111111111111111111111111111111111111111111111"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "omschrijving bij Employee2Manager edge 22222222222222 2222222222222222222 22222222222222222"
              },
              {
                "Name": "NOTES2",
                "Value": "E2M-"
              },
              {
                "Name": "NOTES1",
                "Value": "E2M-"
              },
              {
                "Name": "LABEL",
                "Value": "Employee to Manager"
              }
            ]
          }
        },
        {
          "SID": "2458736",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458598",
          "ToNodeSID": "2458552",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "190Timothy Gates",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "MANAGER2EMPLOYEE",
          "Direction": "DOWN",
          "Label": "Manager to Employee",
          "Description": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111"
              },
              {
                "Name": "LABEL",
                "Value": "Manager to Employee"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 2222222 22222222222222222222222"
              }
            ]
          }
        }
      ]
    },
    "source": "2458552",
    "target": "2458598"
  },
  {
    "SetID": "6044591030264",
    "FromNodeSID": "2458556",
    "ToNodeSID": "2458594",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2458852",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458556",
          "ToNodeSID": "2458594",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "124Kevin Mourgos",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "EMPLOYEE2MANAGER",
          "Direction": "UP",
          "Label": "Employee to Manager",
          "Description": "E2M-",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "omschrijving bij Employee2Manager edge 11111111111111111111111 111111111111111111111111 111111111111111111111111111111111111111111111"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "omschrijving bij Employee2Manager edge 22222222222222 2222222222222222222 22222222222222222"
              },
              {
                "Name": "NOTES2",
                "Value": "E2M-"
              },
              {
                "Name": "NOTES1",
                "Value": "E2M-"
              },
              {
                "Name": "LABEL",
                "Value": "Employee to Manager"
              }
            ]
          }
        },
        {
          "SID": "2458688",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458594",
          "ToNodeSID": "2458556",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "197Kevin Feeney",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "MANAGER2EMPLOYEE",
          "Direction": "DOWN",
          "Label": "Manager to Employee",
          "Description": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111"
              },
              {
                "Name": "LABEL",
                "Value": "Manager to Employee"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 2222222 22222222222222222222222"
              }
            ]
          }
        }
      ]
    },
    "source": "2458556",
    "target": "2458594"
  },
  {
    "SetID": "6044600864640",
    "FromNodeSID": "2458560",
    "ToNodeSID": "2458594",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2458969",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458560",
          "ToNodeSID": "2458594",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "124Kevin Mourgos",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "EMPLOYEE2MANAGER",
          "Direction": "UP",
          "Label": "Employee to Manager",
          "Description": "E2M-",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "omschrijving bij Employee2Manager edge 11111111111111111111111 111111111111111111111111 111111111111111111111111111111111111111111111"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "omschrijving bij Employee2Manager edge 22222222222222 2222222222222222222 22222222222222222"
              },
              {
                "Name": "NOTES2",
                "Value": "E2M-"
              },
              {
                "Name": "NOTES1",
                "Value": "E2M-"
              },
              {
                "Name": "LABEL",
                "Value": "Employee to Manager"
              }
            ]
          }
        },
        {
          "SID": "2458690",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458594",
          "ToNodeSID": "2458560",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "142Curtis Davies",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "MANAGER2EMPLOYEE",
          "Direction": "DOWN",
          "Label": "Manager to Employee",
          "Description": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111"
              },
              {
                "Name": "LABEL",
                "Value": "Manager to Employee"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 2222222 22222222222222222222222"
              }
            ]
          }
        }
      ]
    },
    "source": "2458560",
    "target": "2458594"
  },
  {
    "SetID": "6044605781508",
    "FromNodeSID": "2458554",
    "ToNodeSID": "2458602",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2458964",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458554",
          "ToNodeSID": "2458602",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "121Adam Fripp",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "EMPLOYEE2MANAGER",
          "Direction": "UP",
          "Label": "Employee to Manager",
          "Description": "E2M-",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "omschrijving bij Employee2Manager edge 11111111111111111111111 111111111111111111111111 111111111111111111111111111111111111111111111"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "omschrijving bij Employee2Manager edge 22222222222222 2222222222222222222 22222222222222222"
              },
              {
                "Name": "NOTES2",
                "Value": "E2M-"
              },
              {
                "Name": "NOTES1",
                "Value": "E2M-"
              },
              {
                "Name": "LABEL",
                "Value": "Employee to Manager"
              }
            ]
          }
        },
        {
          "SID": "2458779",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458602",
          "ToNodeSID": "2458554",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "187Anthony Cabrio",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "MANAGER2EMPLOYEE",
          "Direction": "DOWN",
          "Label": "Manager to Employee",
          "Description": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111"
              },
              {
                "Name": "LABEL",
                "Value": "Manager to Employee"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 2222222 22222222222222222222222"
              }
            ]
          }
        }
      ]
    },
    "source": "2458554",
    "target": "2458602"
  },
  {
    "SetID": "6044605781828",
    "FromNodeSID": "2458562",
    "ToNodeSID": "2458594",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2458792",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458562",
          "ToNodeSID": "2458594",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "124Kevin Mourgos",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "EMPLOYEE2MANAGER",
          "Direction": "UP",
          "Label": "Employee to Manager",
          "Description": "E2M-",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "omschrijving bij Employee2Manager edge 11111111111111111111111 111111111111111111111111 111111111111111111111111111111111111111111111"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "omschrijving bij Employee2Manager edge 22222222222222 2222222222222222222 22222222222222222"
              },
              {
                "Name": "NOTES2",
                "Value": "E2M-"
              },
              {
                "Name": "NOTES1",
                "Value": "E2M-"
              },
              {
                "Name": "LABEL",
                "Value": "Employee to Manager"
              }
            ]
          }
        },
        {
          "SID": "2458692",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458594",
          "ToNodeSID": "2458562",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "196Alana Walsh",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "MANAGER2EMPLOYEE",
          "Direction": "DOWN",
          "Label": "Manager to Employee",
          "Description": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111"
              },
              {
                "Name": "LABEL",
                "Value": "Manager to Employee"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 2222222 22222222222222222222222"
              }
            ]
          }
        }
      ]
    },
    "source": "2458562",
    "target": "2458594"
  },
  {
    "SetID": "6044610698800",
    "FromNodeSID": "2458558",
    "ToNodeSID": "2458600",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2458872",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458558",
          "ToNodeSID": "2458600",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "120Matthew Weiss",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "EMPLOYEE2MANAGER",
          "Direction": "UP",
          "Label": "Employee to Manager",
          "Description": "E2M-",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "omschrijving bij Employee2Manager edge 11111111111111111111111 111111111111111111111111 111111111111111111111111111111111111111111111"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "omschrijving bij Employee2Manager edge 22222222222222 2222222222222222222 22222222222222222"
              },
              {
                "Name": "NOTES2",
                "Value": "E2M-"
              },
              {
                "Name": "NOTES1",
                "Value": "E2M-"
              },
              {
                "Name": "LABEL",
                "Value": "Employee to Manager"
              }
            ]
          }
        },
        {
          "SID": "2458760",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458600",
          "ToNodeSID": "2458558",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "181Jean Fleaur",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "MANAGER2EMPLOYEE",
          "Direction": "DOWN",
          "Label": "Manager to Employee",
          "Description": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111"
              },
              {
                "Name": "LABEL",
                "Value": "Manager to Employee"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 2222222 22222222222222222222222"
              }
            ]
          }
        }
      ]
    },
    "source": "2458558",
    "target": "2458600"
  },
  {
    "SetID": "6044625450400",
    "FromNodeSID": "2458564",
    "ToNodeSID": "2458600",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2458877",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458564",
          "ToNodeSID": "2458600",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "120Matthew Weiss",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "EMPLOYEE2MANAGER",
          "Direction": "UP",
          "Label": "Employee to Manager",
          "Description": "E2M-",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "omschrijving bij Employee2Manager edge 11111111111111111111111 111111111111111111111111 111111111111111111111111111111111111111111111"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "omschrijving bij Employee2Manager edge 22222222222222 2222222222222222222 22222222222222222"
              },
              {
                "Name": "NOTES2",
                "Value": "E2M-"
              },
              {
                "Name": "NOTES1",
                "Value": "E2M-"
              },
              {
                "Name": "LABEL",
                "Value": "Employee to Manager"
              }
            ]
          }
        },
        {
          "SID": "2458762",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458600",
          "ToNodeSID": "2458564",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "125Julia Nayer",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "MANAGER2EMPLOYEE",
          "Direction": "DOWN",
          "Label": "Manager to Employee",
          "Description": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111"
              },
              {
                "Name": "LABEL",
                "Value": "Manager to Employee"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 2222222 22222222222222222222222"
              }
            ]
          }
        }
      ]
    },
    "source": "2458564",
    "target": "2458600"
  },
  {
    "SetID": "6044625450528",
    "FromNodeSID": "2458568",
    "ToNodeSID": "2458596",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2458979",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458568",
          "ToNodeSID": "2458596",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "123Shanta Vollman",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "EMPLOYEE2MANAGER",
          "Direction": "UP",
          "Label": "Employee to Manager",
          "Description": "E2M-",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "omschrijving bij Employee2Manager edge 11111111111111111111111 111111111111111111111111 111111111111111111111111111111111111111111111"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "omschrijving bij Employee2Manager edge 22222222222222 2222222222222222222 22222222222222222"
              },
              {
                "Name": "NOTES2",
                "Value": "E2M-"
              },
              {
                "Name": "NOTES1",
                "Value": "E2M-"
              },
              {
                "Name": "LABEL",
                "Value": "Employee to Manager"
              }
            ]
          }
        },
        {
          "SID": "2458710",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458596",
          "ToNodeSID": "2458568",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "138Stephen Stiles",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "MANAGER2EMPLOYEE",
          "Direction": "DOWN",
          "Label": "Manager to Employee",
          "Description": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111"
              },
              {
                "Name": "LABEL",
                "Value": "Manager to Employee"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 2222222 22222222222222222222222"
              }
            ]
          }
        }
      ]
    },
    "source": "2458568",
    "target": "2458596"
  },
  {
    "SetID": "6044630367600",
    "FromNodeSID": "2458566",
    "ToNodeSID": "2458600",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2458974",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458566",
          "ToNodeSID": "2458600",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "120Matthew Weiss",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "EMPLOYEE2MANAGER",
          "Direction": "UP",
          "Label": "Employee to Manager",
          "Description": "E2M-",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "omschrijving bij Employee2Manager edge 11111111111111111111111 111111111111111111111111 111111111111111111111111111111111111111111111"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "omschrijving bij Employee2Manager edge 22222222222222 2222222222222222222 22222222222222222"
              },
              {
                "Name": "NOTES2",
                "Value": "E2M-"
              },
              {
                "Name": "NOTES1",
                "Value": "E2M-"
              },
              {
                "Name": "LABEL",
                "Value": "Employee to Manager"
              }
            ]
          }
        },
        {
          "SID": "2458764",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458600",
          "ToNodeSID": "2458566",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "180Winston Taylor",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "MANAGER2EMPLOYEE",
          "Direction": "DOWN",
          "Label": "Manager to Employee",
          "Description": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111"
              },
              {
                "Name": "LABEL",
                "Value": "Manager to Employee"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 2222222 22222222222222222222222"
              }
            ]
          }
        }
      ]
    },
    "source": "2458566",
    "target": "2458600"
  },
  {
    "SetID": "6044630367720",
    "FromNodeSID": "2458570",
    "ToNodeSID": "2458596",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2458984",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458570",
          "ToNodeSID": "2458596",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "123Shanta Vollman",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "EMPLOYEE2MANAGER",
          "Direction": "UP",
          "Label": "Employee to Manager",
          "Description": "E2M-",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "omschrijving bij Employee2Manager edge 11111111111111111111111 111111111111111111111111 111111111111111111111111111111111111111111111"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "omschrijving bij Employee2Manager edge 22222222222222 2222222222222222222 22222222222222222"
              },
              {
                "Name": "NOTES2",
                "Value": "E2M-"
              },
              {
                "Name": "NOTES1",
                "Value": "E2M-"
              },
              {
                "Name": "LABEL",
                "Value": "Employee to Manager"
              }
            ]
          }
        },
        {
          "SID": "2458712",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458596",
          "ToNodeSID": "2458570",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "194Samuel McCain",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "MANAGER2EMPLOYEE",
          "Direction": "DOWN",
          "Label": "Manager to Employee",
          "Description": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111"
              },
              {
                "Name": "LABEL",
                "Value": "Manager to Employee"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 2222222 22222222222222222222222"
              }
            ]
          }
        }
      ]
    },
    "source": "2458570",
    "target": "2458596"
  },
  {
    "SetID": "6044645119252",
    "FromNodeSID": "2458574",
    "ToNodeSID": "2458598",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2458989",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458574",
          "ToNodeSID": "2458598",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "122Payam Kaufling",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "EMPLOYEE2MANAGER",
          "Direction": "UP",
          "Label": "Employee to Manager",
          "Description": "E2M-",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "omschrijving bij Employee2Manager edge 11111111111111111111111 111111111111111111111111 111111111111111111111111111111111111111111111"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "omschrijving bij Employee2Manager edge 22222222222222 2222222222222222222 22222222222222222"
              },
              {
                "Name": "NOTES2",
                "Value": "E2M-"
              },
              {
                "Name": "NOTES1",
                "Value": "E2M-"
              },
              {
                "Name": "LABEL",
                "Value": "Employee to Manager"
              }
            ]
          }
        },
        {
          "SID": "2458738",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458598",
          "ToNodeSID": "2458574",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "133Jason Mallin",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "MANAGER2EMPLOYEE",
          "Direction": "DOWN",
          "Label": "Manager to Employee",
          "Description": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111"
              },
              {
                "Name": "LABEL",
                "Value": "Manager to Employee"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 2222222 22222222222222222222222"
              }
            ]
          }
        }
      ]
    },
    "source": "2458574",
    "target": "2458598"
  },
  {
    "SetID": "6044645119332",
    "FromNodeSID": "2458578",
    "ToNodeSID": "2458594",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2458887",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458578",
          "ToNodeSID": "2458594",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "124Kevin Mourgos",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "EMPLOYEE2MANAGER",
          "Direction": "UP",
          "Label": "Employee to Manager",
          "Description": "E2M-",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "omschrijving bij Employee2Manager edge 11111111111111111111111 111111111111111111111111 111111111111111111111111111111111111111111111"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "omschrijving bij Employee2Manager edge 22222222222222 2222222222222222222 22222222222222222"
              },
              {
                "Name": "NOTES2",
                "Value": "E2M-"
              },
              {
                "Name": "NOTES1",
                "Value": "E2M-"
              },
              {
                "Name": "LABEL",
                "Value": "Employee to Manager"
              }
            ]
          }
        },
        {
          "SID": "2458694",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458594",
          "ToNodeSID": "2458578",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "141Trenna Rajs",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "MANAGER2EMPLOYEE",
          "Direction": "DOWN",
          "Label": "Manager to Employee",
          "Description": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111"
              },
              {
                "Name": "LABEL",
                "Value": "Manager to Employee"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 2222222 22222222222222222222222"
              }
            ]
          }
        }
      ]
    },
    "source": "2458578",
    "target": "2458594"
  },
  {
    "SetID": "6044650036344",
    "FromNodeSID": "2458572",
    "ToNodeSID": "2458602",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2458797",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458572",
          "ToNodeSID": "2458602",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "121Adam Fripp",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "EMPLOYEE2MANAGER",
          "Direction": "UP",
          "Label": "Employee to Manager",
          "Description": "E2M-",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "omschrijving bij Employee2Manager edge 11111111111111111111111 111111111111111111111111 111111111111111111111111111111111111111111111"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "omschrijving bij Employee2Manager edge 22222222222222 2222222222222222222 22222222222222222"
              },
              {
                "Name": "NOTES2",
                "Value": "E2M-"
              },
              {
                "Name": "NOTES1",
                "Value": "E2M-"
              },
              {
                "Name": "LABEL",
                "Value": "Employee to Manager"
              }
            ]
          }
        },
        {
          "SID": "2458781",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458602",
          "ToNodeSID": "2458572",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "129Laura Bissot",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "MANAGER2EMPLOYEE",
          "Direction": "DOWN",
          "Label": "Manager to Employee",
          "Description": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111"
              },
              {
                "Name": "LABEL",
                "Value": "Manager to Employee"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 2222222 22222222222222222222222"
              }
            ]
          }
        }
      ]
    },
    "source": "2458572",
    "target": "2458602"
  },
  {
    "SetID": "6044659870752",
    "FromNodeSID": "2458576",
    "ToNodeSID": "2458602",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2458882",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458576",
          "ToNodeSID": "2458602",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "121Adam Fripp",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "EMPLOYEE2MANAGER",
          "Direction": "UP",
          "Label": "Employee to Manager",
          "Description": "E2M-",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "omschrijving bij Employee2Manager edge 11111111111111111111111 111111111111111111111111 111111111111111111111111111111111111111111111"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "omschrijving bij Employee2Manager edge 22222222222222 2222222222222222222 22222222222222222"
              },
              {
                "Name": "NOTES2",
                "Value": "E2M-"
              },
              {
                "Name": "NOTES1",
                "Value": "E2M-"
              },
              {
                "Name": "LABEL",
                "Value": "Employee to Manager"
              }
            ]
          }
        },
        {
          "SID": "2458783",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458602",
          "ToNodeSID": "2458576",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "186Julia Dellinger",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "MANAGER2EMPLOYEE",
          "Direction": "DOWN",
          "Label": "Manager to Employee",
          "Description": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111"
              },
              {
                "Name": "LABEL",
                "Value": "Manager to Employee"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 2222222 22222222222222222222222"
              }
            ]
          }
        }
      ]
    },
    "source": "2458576",
    "target": "2458602"
  },
  {
    "SetID": "6044659870840",
    "FromNodeSID": "2458580",
    "ToNodeSID": "2458598",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2458802",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458580",
          "ToNodeSID": "2458598",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "122Payam Kaufling",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "EMPLOYEE2MANAGER",
          "Direction": "UP",
          "Label": "Employee to Manager",
          "Description": "E2M-",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "omschrijving bij Employee2Manager edge 11111111111111111111111 111111111111111111111111 111111111111111111111111111111111111111111111"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "omschrijving bij Employee2Manager edge 22222222222222 2222222222222222222 22222222222222222"
              },
              {
                "Name": "NOTES2",
                "Value": "E2M-"
              },
              {
                "Name": "NOTES1",
                "Value": "E2M-"
              },
              {
                "Name": "LABEL",
                "Value": "Employee to Manager"
              }
            ]
          }
        },
        {
          "SID": "2458740",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458598",
          "ToNodeSID": "2458580",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "189Jennifer Dilly",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "MANAGER2EMPLOYEE",
          "Direction": "DOWN",
          "Label": "Manager to Employee",
          "Description": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111"
              },
              {
                "Name": "LABEL",
                "Value": "Manager to Employee"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 2222222 22222222222222222222222"
              }
            ]
          }
        }
      ]
    },
    "source": "2458580",
    "target": "2458598"
  },
  {
    "SetID": "6044659870872",
    "FromNodeSID": "2458582",
    "ToNodeSID": "2458596",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2458807",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458582",
          "ToNodeSID": "2458596",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "123Shanta Vollman",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "EMPLOYEE2MANAGER",
          "Direction": "UP",
          "Label": "Employee to Manager",
          "Description": "E2M-",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "omschrijving bij Employee2Manager edge 11111111111111111111111 111111111111111111111111 111111111111111111111111111111111111111111111"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "omschrijving bij Employee2Manager edge 22222222222222 2222222222222222222 22222222222222222"
              },
              {
                "Name": "NOTES2",
                "Value": "E2M-"
              },
              {
                "Name": "NOTES1",
                "Value": "E2M-"
              },
              {
                "Name": "LABEL",
                "Value": "Employee to Manager"
              }
            ]
          }
        },
        {
          "SID": "2458714",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458596",
          "ToNodeSID": "2458582",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "137Renske Ladwig",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "MANAGER2EMPLOYEE",
          "Direction": "DOWN",
          "Label": "Manager to Employee",
          "Description": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111"
              },
              {
                "Name": "LABEL",
                "Value": "Manager to Employee"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 2222222 22222222222222222222222"
              }
            ]
          }
        }
      ]
    },
    "source": "2458582",
    "target": "2458596"
  },
  {
    "SetID": "6044669705232",
    "FromNodeSID": "2458584",
    "ToNodeSID": "2458598",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2458892",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458584",
          "ToNodeSID": "2458598",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "122Payam Kaufling",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "EMPLOYEE2MANAGER",
          "Direction": "UP",
          "Label": "Employee to Manager",
          "Description": "E2M-",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "omschrijving bij Employee2Manager edge 11111111111111111111111 111111111111111111111111 111111111111111111111111111111111111111111111"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "omschrijving bij Employee2Manager edge 22222222222222 2222222222222222222 22222222222222222"
              },
              {
                "Name": "NOTES2",
                "Value": "E2M-"
              },
              {
                "Name": "NOTES1",
                "Value": "E2M-"
              },
              {
                "Name": "LABEL",
                "Value": "Employee to Manager"
              }
            ]
          }
        },
        {
          "SID": "2458742",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458598",
          "ToNodeSID": "2458584",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "188Kelly Chung",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "MANAGER2EMPLOYEE",
          "Direction": "DOWN",
          "Label": "Manager to Employee",
          "Description": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111"
              },
              {
                "Name": "LABEL",
                "Value": "Manager to Employee"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 2222222 22222222222222222222222"
              }
            ]
          }
        }
      ]
    },
    "source": "2458584",
    "target": "2458598"
  },
  {
    "SetID": "6044669705256",
    "FromNodeSID": "2458586",
    "ToNodeSID": "2458596",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2458812",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458586",
          "ToNodeSID": "2458596",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "123Shanta Vollman",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "EMPLOYEE2MANAGER",
          "Direction": "UP",
          "Label": "Employee to Manager",
          "Description": "E2M-",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "omschrijving bij Employee2Manager edge 11111111111111111111111 111111111111111111111111 111111111111111111111111111111111111111111111"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "omschrijving bij Employee2Manager edge 22222222222222 2222222222222222222 22222222222222222"
              },
              {
                "Name": "NOTES2",
                "Value": "E2M-"
              },
              {
                "Name": "NOTES1",
                "Value": "E2M-"
              },
              {
                "Name": "LABEL",
                "Value": "Employee to Manager"
              }
            ]
          }
        },
        {
          "SID": "2458716",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458596",
          "ToNodeSID": "2458586",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "193Britney Everett",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "MANAGER2EMPLOYEE",
          "Direction": "DOWN",
          "Label": "Manager to Employee",
          "Description": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111"
              },
              {
                "Name": "LABEL",
                "Value": "Manager to Employee"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 2222222 22222222222222222222222"
              }
            ]
          }
        }
      ]
    },
    "source": "2458586",
    "target": "2458596"
  },
  {
    "SetID": "6044674622448",
    "FromNodeSID": "2458588",
    "ToNodeSID": "2458596",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2458897",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458588",
          "ToNodeSID": "2458596",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "123Shanta Vollman",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "EMPLOYEE2MANAGER",
          "Direction": "UP",
          "Label": "Employee to Manager",
          "Description": "E2M-",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "omschrijving bij Employee2Manager edge 11111111111111111111111 111111111111111111111111 111111111111111111111111111111111111111111111"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "omschrijving bij Employee2Manager edge 22222222222222 2222222222222222222 22222222222222222"
              },
              {
                "Name": "NOTES2",
                "Value": "E2M-"
              },
              {
                "Name": "NOTES1",
                "Value": "E2M-"
              },
              {
                "Name": "LABEL",
                "Value": "Employee to Manager"
              }
            ]
          }
        },
        {
          "SID": "2458718",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458596",
          "ToNodeSID": "2458588",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "192Sarah Bell",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "MANAGER2EMPLOYEE",
          "Direction": "DOWN",
          "Label": "Manager to Employee",
          "Description": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111"
              },
              {
                "Name": "LABEL",
                "Value": "Manager to Employee"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 2222222 22222222222222222222222"
              }
            ]
          }
        }
      ]
    },
    "source": "2458588",
    "target": "2458596"
  },
  {
    "SetID": "6044694291180",
    "FromNodeSID": "2458590",
    "ToNodeSID": "2458602",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2458902",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458590",
          "ToNodeSID": "2458602",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "121Adam Fripp",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "EMPLOYEE2MANAGER",
          "Direction": "UP",
          "Label": "Employee to Manager",
          "Description": "E2M-",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "omschrijving bij Employee2Manager edge 11111111111111111111111 111111111111111111111111 111111111111111111111111111111111111111111111"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "omschrijving bij Employee2Manager edge 22222222222222 2222222222222222222 22222222222222222"
              },
              {
                "Name": "NOTES2",
                "Value": "E2M-"
              },
              {
                "Name": "NOTES1",
                "Value": "E2M-"
              },
              {
                "Name": "LABEL",
                "Value": "Employee to Manager"
              }
            ]
          }
        },
        {
          "SID": "2458785",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458602",
          "ToNodeSID": "2458590",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "185Alexis Bull",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "MANAGER2EMPLOYEE",
          "Direction": "DOWN",
          "Label": "Manager to Employee",
          "Description": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111"
              },
              {
                "Name": "LABEL",
                "Value": "Manager to Employee"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 2222222 22222222222222222222222"
              }
            ]
          }
        }
      ]
    },
    "source": "2458590",
    "target": "2458602"
  },
  {
    "SetID": "6044699208384",
    "FromNodeSID": "2458592",
    "ToNodeSID": "2458602",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2458907",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458592",
          "ToNodeSID": "2458602",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "121Adam Fripp",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "EMPLOYEE2MANAGER",
          "Direction": "UP",
          "Label": "Employee to Manager",
          "Description": "E2M-",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "omschrijving bij Employee2Manager edge 11111111111111111111111 111111111111111111111111 111111111111111111111111111111111111111111111"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "omschrijving bij Employee2Manager edge 22222222222222 2222222222222222222 22222222222222222"
              },
              {
                "Name": "NOTES2",
                "Value": "E2M-"
              },
              {
                "Name": "NOTES1",
                "Value": "E2M-"
              },
              {
                "Name": "LABEL",
                "Value": "Employee to Manager"
              }
            ]
          }
        },
        {
          "SID": "2458787",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458602",
          "ToNodeSID": "2458592",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "184Nandita Sarchand",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "MANAGER2EMPLOYEE",
          "Direction": "DOWN",
          "Label": "Manager to Employee",
          "Description": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111"
              },
              {
                "Name": "LABEL",
                "Value": "Manager to Employee"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 2222222 22222222222222222222222"
              }
            ]
          }
        }
      ]
    },
    "source": "2458592",
    "target": "2458602"
  },
  {
    "SetID": "6044775424814",
    "FromNodeSID": "2458594",
    "ToNodeSID": "2458631",
    "NumberInSet": "1",
    "EdgesInSet": {
      "Edge": {
        "SID": "2458672",
        "NetworkSID": "2458250",
        "NetworkLayerSID": "2458271",
        "FromNodeSID": "2458594",
        "ToNodeSID": "2458631",
        "FromLayerSID": "",
        "ToLayerSID": "",
        "ToNodeType": "FLAG",
        "ToNodeKey": "A",
        "ToNodeCategory": "FLAG",
        "EdgeCategory": "PEOPLE2FLAG",
        "Direction": "ANY",
        "Label": "A",
        "Description": "",
        "ValidFrom": "",
        "ValidTo": "",
        "Priority": "FutureUse",
        "DisplayProperties": {
          "LineWeightOverride": "FutureUse",
          "LineTypeOverride": "FutureUse",
          "LineColourOverride": "FutureUse"
        },
        "Attributes": {
          "Attribute": {
            "Name": "TYPE",
            "Value": "A"
          }
        }
      }
    },
    "source": "2458594",
    "target": "2458631"
  },
  {
    "SetID": "6044886063221",
    "FromNodeSID": "2458633",
    "ToNodeSID": "2458637",
    "NumberInSet": "1",
    "EdgesInSet": {
      "Edge": {
        "SID": "2459005",
        "NetworkSID": "2458250",
        "NetworkLayerSID": "2458271",
        "FromNodeSID": "2458637",
        "ToNodeSID": "2458633",
        "FromLayerSID": "",
        "ToLayerSID": "",
        "ToNodeType": "NODE",
        "ToNodeKey": "Sterren 40Nederland1111AADen Haag",
        "ToNodeCategory": "ADDRESS",
        "EdgeCategory": "PEOPLE2ADDRESS",
        "Direction": "ANY",
        "Label": "Home Address",
        "Description": "",
        "ValidFrom": "",
        "ValidTo": "",
        "Priority": "FutureUse",
        "DisplayProperties": {
          "LineWeightOverride": "FutureUse",
          "LineTypeOverride": "FutureUse",
          "LineColourOverride": "FutureUse"
        },
        "Attributes": {
          "Attribute": {
            "Name": "LABEL",
            "Value": "Home Address"
          }
        }
      }
    },
    "source": "2458633",
    "target": "2458637"
  },
  {
    "SetID": "6044890980495",
    "FromNodeSID": "2458635",
    "ToNodeSID": "2458637",
    "NumberInSet": "1",
    "EdgesInSet": {
      "Edge": {
        "SID": "2459007",
        "NetworkSID": "2458250",
        "NetworkLayerSID": "2458271",
        "FromNodeSID": "2458637",
        "ToNodeSID": "2458635",
        "FromLayerSID": "",
        "ToLayerSID": "",
        "ToNodeType": "NODE",
        "ToNodeKey": "VliegenstraatNederland2222BBLeiden",
        "ToNodeCategory": "ADDRESS",
        "EdgeCategory": "PEOPLE2ADDRESS",
        "Direction": "ANY",
        "Label": "Home Address",
        "Description": "",
        "ValidFrom": "",
        "ValidTo": "",
        "Priority": "FutureUse",
        "DisplayProperties": {
          "LineWeightOverride": "FutureUse",
          "LineTypeOverride": "FutureUse",
          "LineColourOverride": "FutureUse"
        },
        "Attributes": {
          "Attribute": {
            "Name": "LABEL",
            "Value": "Home Address"
          }
        }
      }
    },
    "source": "2458635",
    "target": "2458637"
  },
  {
    "SetID": "6044962280968",
    "FromNodeSID": "2458637",
    "ToNodeSID": "2458664",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2459011",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458637",
          "ToNodeSID": "2458664",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "146Karen Partners",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "EMPLOYEE2MANAGER",
          "Direction": "UP",
          "Label": "Employee to Manager",
          "Description": "E2M-",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "omschrijving bij Employee2Manager edge 11111111111111111111111 111111111111111111111111 111111111111111111111111111111111111111111111"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "omschrijving bij Employee2Manager edge 22222222222222 2222222222222222222 22222222222222222"
              },
              {
                "Name": "NOTES2",
                "Value": "E2M-"
              },
              {
                "Name": "NOTES1",
                "Value": "E2M-"
              },
              {
                "Name": "LABEL",
                "Value": "Employee to Manager"
              }
            ]
          }
        },
        {
          "SID": "2459113",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458664",
          "ToNodeSID": "2458637",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "156Janette King",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "MANAGER2EMPLOYEE",
          "Direction": "DOWN",
          "Label": "Manager to Employee",
          "Description": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111"
              },
              {
                "Name": "LABEL",
                "Value": "Manager to Employee"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 2222222 22222222222222222222222"
              }
            ]
          }
        }
      ]
    },
    "source": "2458637",
    "target": "2458664"
  },
  {
    "SetID": "6045021284746",
    "FromNodeSID": "2458598",
    "ToNodeSID": "2458727",
    "NumberInSet": "1",
    "EdgesInSet": {
      "Edge": {
        "SID": "2458726",
        "NetworkSID": "2458250",
        "NetworkLayerSID": "2458271",
        "FromNodeSID": "2458598",
        "ToNodeSID": "2458727",
        "FromLayerSID": "",
        "ToLayerSID": "",
        "ToNodeType": "NODE",
        "ToNodeKey": "164Mattea Marvins",
        "ToNodeCategory": "PEOPLE",
        "EdgeCategory": "REL4",
        "Direction": "ANY",
        "Label": "4-122-164",
        "Description": "4-122-164",
        "ValidFrom": "",
        "ValidTo": "",
        "Priority": "FutureUse",
        "DisplayProperties": {
          "LineWeightOverride": "FutureUse",
          "LineTypeOverride": "FutureUse",
          "LineColourOverride": "FutureUse"
        },
        "Attributes": {
          "Attribute": [
            {
              "Name": "EDGE_LABEL",
              "Value": "4-122-164"
            },
            {
              "Name": "EDGE_NOTES2",
              "Value": "(4-122-164)"
            },
            {
              "Name": "EDGE_NOTES1",
              "Value": "4-122-164"
            }
          ]
        }
      }
    },
    "source": "2458598",
    "target": "2458727"
  },
  {
    "SetID": "6045173725820",
    "FromNodeSID": "2458660",
    "ToNodeSID": "2458727",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2459092",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458660",
          "ToNodeSID": "2458727",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "164Mattea Marvins",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "MANAGER2EMPLOYEE",
          "Direction": "DOWN",
          "Label": "Manager to Employee",
          "Description": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111"
              },
              {
                "Name": "LABEL",
                "Value": "Manager to Employee"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 2222222 22222222222222222222222"
              }
            ]
          }
        },
        {
          "SID": "2459003",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458727",
          "ToNodeSID": "2458660",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "147Alberto Errazuriz",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "EMPLOYEE2MANAGER",
          "Direction": "UP",
          "Label": "Employee to Manager",
          "Description": "E2M-",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "omschrijving bij Employee2Manager edge 11111111111111111111111 111111111111111111111111 111111111111111111111111111111111111111111111"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "omschrijving bij Employee2Manager edge 22222222222222 2222222222222222222 22222222222222222"
              },
              {
                "Name": "NOTES2",
                "Value": "E2M-"
              },
              {
                "Name": "NOTES1",
                "Value": "E2M-"
              },
              {
                "Name": "LABEL",
                "Value": "Employee to Manager"
              }
            ]
          }
        }
      ]
    },
    "source": "2458660",
    "target": "2458727"
  },
  {
    "SetID": "6045778548452",
    "FromNodeSID": "2458637",
    "ToNodeSID": "2458996",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2459009",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458637",
          "ToNodeSID": "2458996",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "80",
          "ToNodeCategory": "DEPARTMENT",
          "EdgeCategory": "PEOPLE2DEPARTMENT",
          "Direction": "UP",
          "Label": "People to Department",
          "Description": "People to Department",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "People to Department"
            }
          }
        },
        {
          "SID": "2459063",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458996",
          "ToNodeSID": "2458637",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "156Janette King",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "DEPARTMENT2PEOPLE",
          "Direction": "DOWN",
          "Label": "Department to People",
          "Description": "Department to People",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "Department to People"
            }
          }
        }
      ]
    },
    "source": "2458637",
    "target": "2458996"
  },
  {
    "SetID": "6045820351384",
    "FromNodeSID": "2458654",
    "ToNodeSID": "2458996",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2459123",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458654",
          "ToNodeSID": "2458996",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "80",
          "ToNodeCategory": "DEPARTMENT",
          "EdgeCategory": "PEOPLE2DEPARTMENT",
          "Direction": "UP",
          "Label": "People to Department",
          "Description": "People to Department",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "People to Department"
            }
          }
        },
        {
          "SID": "2459065",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458996",
          "ToNodeSID": "2458654",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "149Eleni Zlotkey",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "DEPARTMENT2PEOPLE",
          "Direction": "DOWN",
          "Label": "Department to People",
          "Description": "Department to People",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "Department to People"
            }
          }
        }
      ]
    },
    "source": "2458654",
    "target": "2458996"
  },
  {
    "SetID": "6045825269376",
    "FromNodeSID": "2458656",
    "ToNodeSID": "2458996",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2459140",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458656",
          "ToNodeSID": "2458996",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "80",
          "ToNodeCategory": "DEPARTMENT",
          "EdgeCategory": "PEOPLE2DEPARTMENT",
          "Direction": "UP",
          "Label": "People to Department",
          "Description": "People to Department",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "People to Department"
            }
          }
        },
        {
          "SID": "2459069",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458996",
          "ToNodeSID": "2458656",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "148Gerald Cambrault",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "DEPARTMENT2PEOPLE",
          "Direction": "DOWN",
          "Label": "Department to People",
          "Description": "Department to People",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "Department to People"
            }
          }
        }
      ]
    },
    "source": "2458656",
    "target": "2458996"
  },
  {
    "SetID": "6045835105360",
    "FromNodeSID": "2458660",
    "ToNodeSID": "2458996",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2459081",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458660",
          "ToNodeSID": "2458996",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "80",
          "ToNodeCategory": "DEPARTMENT",
          "EdgeCategory": "PEOPLE2DEPARTMENT",
          "Direction": "UP",
          "Label": "People to Department",
          "Description": "People to Department",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "People to Department"
            }
          }
        },
        {
          "SID": "2459075",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458996",
          "ToNodeSID": "2458660",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "147Alberto Errazuriz",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "DEPARTMENT2PEOPLE",
          "Direction": "DOWN",
          "Label": "Department to People",
          "Description": "Department to People",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "Department to People"
            }
          }
        }
      ]
    },
    "source": "2458660",
    "target": "2458996"
  },
  {
    "SetID": "6045840024672",
    "FromNodeSID": "2458666",
    "ToNodeSID": "2458992",
    "NumberInSet": "3",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2459164",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458666",
          "ToNodeSID": "2458992",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "154Nanette Cambrault",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "MANAGER2EMPLOYEE",
          "Direction": "DOWN",
          "Label": "Manager to Employee",
          "Description": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111"
              },
              {
                "Name": "LABEL",
                "Value": "Manager to Employee"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 2222222 22222222222222222222222"
              }
            ]
          }
        },
        {
          "SID": "2458991",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458666",
          "ToNodeSID": "2458992",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "154Nanette Cambrault",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "REL1",
          "Direction": "ANY",
          "Label": "(1-145-154)",
          "Description": "1-145-154",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_LABEL",
                "Value": "Work"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "(1-145-154)"
              },
              {
                "Name": "EDGE_NOTES1",
                "Value": "1-145-154"
              }
            ]
          }
        },
        {
          "SID": "2459121",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458992",
          "ToNodeSID": "2458666",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "145John Russell",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "EMPLOYEE2MANAGER",
          "Direction": "UP",
          "Label": "Employee to Manager",
          "Description": "E2M-",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "omschrijving bij Employee2Manager edge 11111111111111111111111 111111111111111111111111 111111111111111111111111111111111111111111111"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "omschrijving bij Employee2Manager edge 22222222222222 2222222222222222222 22222222222222222"
              },
              {
                "Name": "NOTES2",
                "Value": "E2M-"
              },
              {
                "Name": "NOTES1",
                "Value": "E2M-"
              },
              {
                "Name": "LABEL",
                "Value": "Employee to Manager"
              }
            ]
          }
        }
      ]
    },
    "source": "2458666",
    "target": "2458992"
  },
  {
    "SetID": "6045844941344",
    "FromNodeSID": "2458664",
    "ToNodeSID": "2458996",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2459098",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458664",
          "ToNodeSID": "2458996",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "80",
          "ToNodeCategory": "DEPARTMENT",
          "EdgeCategory": "PEOPLE2DEPARTMENT",
          "Direction": "UP",
          "Label": "People to Department",
          "Description": "People to Department",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "People to Department"
            }
          }
        },
        {
          "SID": "2459077",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458996",
          "ToNodeSID": "2458664",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "146Karen Partners",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "DEPARTMENT2PEOPLE",
          "Direction": "DOWN",
          "Label": "Department to People",
          "Description": "Department to People",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "Department to People"
            }
          }
        }
      ]
    },
    "source": "2458664",
    "target": "2458996"
  },
  {
    "SetID": "6045844942004",
    "FromNodeSID": "2458666",
    "ToNodeSID": "2458994",
    "NumberInSet": "3",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2459166",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458666",
          "ToNodeSID": "2458994",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "153Christopher Olsen",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "MANAGER2EMPLOYEE",
          "Direction": "DOWN",
          "Label": "Manager to Employee",
          "Description": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111"
              },
              {
                "Name": "LABEL",
                "Value": "Manager to Employee"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 2222222 22222222222222222222222"
              }
            ]
          }
        },
        {
          "SID": "2458993",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458666",
          "ToNodeSID": "2458994",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "153Christopher Olsen",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "REL1",
          "Direction": "ANY",
          "Label": "(1-145-153)",
          "Description": "1-145-153",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_LABEL",
                "Value": "Work"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "(1-145-153)"
              },
              {
                "Name": "EDGE_NOTES1",
                "Value": "1-145-153"
              }
            ]
          }
        },
        {
          "SID": "2459117",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458994",
          "ToNodeSID": "2458666",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "145John Russell",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "EMPLOYEE2MANAGER",
          "Direction": "UP",
          "Label": "Employee to Manager",
          "Description": "E2M-",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "omschrijving bij Employee2Manager edge 11111111111111111111111 111111111111111111111111 111111111111111111111111111111111111111111111"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "omschrijving bij Employee2Manager edge 22222222222222 2222222222222222222 22222222222222222"
              },
              {
                "Name": "NOTES2",
                "Value": "E2M-"
              },
              {
                "Name": "NOTES1",
                "Value": "E2M-"
              },
              {
                "Name": "LABEL",
                "Value": "Employee to Manager"
              }
            ]
          }
        }
      ]
    },
    "source": "2458666",
    "target": "2458994"
  },
  {
    "SetID": "6045849859336",
    "FromNodeSID": "2458666",
    "ToNodeSID": "2458996",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2459157",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458666",
          "ToNodeSID": "2458996",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "80",
          "ToNodeCategory": "DEPARTMENT",
          "EdgeCategory": "PEOPLE2DEPARTMENT",
          "Direction": "UP",
          "Label": "People to Department",
          "Description": "People to Department",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "People to Department"
            }
          }
        },
        {
          "SID": "2459079",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458996",
          "ToNodeSID": "2458666",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "145John Russell",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "DEPARTMENT2PEOPLE",
          "Direction": "DOWN",
          "Label": "Department to People",
          "Description": "Department to People",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "Department to People"
            }
          }
        }
      ]
    },
    "source": "2458666",
    "target": "2458996"
  },
  {
    "SetID": "6045999858092",
    "FromNodeSID": "2458727",
    "ToNodeSID": "2458996",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2458995",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458727",
          "ToNodeSID": "2458996",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "80",
          "ToNodeCategory": "DEPARTMENT",
          "EdgeCategory": "PEOPLE2DEPARTMENT",
          "Direction": "UP",
          "Label": "People to Department",
          "Description": "People to Department",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "People to Department"
            }
          }
        },
        {
          "SID": "2459027",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458996",
          "ToNodeSID": "2458727",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "164Mattea Marvins",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "DEPARTMENT2PEOPLE",
          "Direction": "DOWN",
          "Label": "Department to People",
          "Description": "Department to People",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "Department to People"
            }
          }
        }
      ]
    },
    "source": "2458727",
    "target": "2458996"
  },
  {
    "SetID": "6046058843420",
    "FromNodeSID": "2458660",
    "ToNodeSID": "2459087",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2459086",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458660",
          "ToNodeSID": "2459087",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "167Amit Banda",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "MANAGER2EMPLOYEE",
          "Direction": "DOWN",
          "Label": "Manager to Employee",
          "Description": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111"
              },
              {
                "Name": "LABEL",
                "Value": "Manager to Employee"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 2222222 22222222222222222222222"
              }
            ]
          }
        },
        {
          "SID": "2459192",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2459087",
          "ToNodeSID": "2458660",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "147Alberto Errazuriz",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "EMPLOYEE2MANAGER",
          "Direction": "UP",
          "Label": "Employee to Manager",
          "Description": "E2M-",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "omschrijving bij Employee2Manager edge 11111111111111111111111 111111111111111111111111 111111111111111111111111111111111111111111111"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "omschrijving bij Employee2Manager edge 22222222222222 2222222222222222222 22222222222222222"
              },
              {
                "Name": "NOTES2",
                "Value": "E2M-"
              },
              {
                "Name": "NOTES1",
                "Value": "E2M-"
              },
              {
                "Name": "LABEL",
                "Value": "Employee to Manager"
              }
            ]
          }
        }
      ]
    },
    "source": "2458660",
    "target": "2459087"
  },
  {
    "SetID": "6046063760740",
    "FromNodeSID": "2458660",
    "ToNodeSID": "2459089",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2459088",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458660",
          "ToNodeSID": "2459089",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "166Sundar Ande",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "MANAGER2EMPLOYEE",
          "Direction": "DOWN",
          "Label": "Manager to Employee",
          "Description": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111"
              },
              {
                "Name": "LABEL",
                "Value": "Manager to Employee"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 2222222 22222222222222222222222"
              }
            ]
          }
        },
        {
          "SID": "2459196",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2459089",
          "ToNodeSID": "2458660",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "147Alberto Errazuriz",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "EMPLOYEE2MANAGER",
          "Direction": "UP",
          "Label": "Employee to Manager",
          "Description": "E2M-",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "omschrijving bij Employee2Manager edge 11111111111111111111111 111111111111111111111111 111111111111111111111111111111111111111111111"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "omschrijving bij Employee2Manager edge 22222222222222 2222222222222222222 22222222222222222"
              },
              {
                "Name": "NOTES2",
                "Value": "E2M-"
              },
              {
                "Name": "NOTES1",
                "Value": "E2M-"
              },
              {
                "Name": "LABEL",
                "Value": "Employee to Manager"
              }
            ]
          }
        }
      ]
    },
    "source": "2458660",
    "target": "2459089"
  },
  {
    "SetID": "6046068678060",
    "FromNodeSID": "2458660",
    "ToNodeSID": "2459091",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2459090",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458660",
          "ToNodeSID": "2459091",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "165David Lee",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "MANAGER2EMPLOYEE",
          "Direction": "DOWN",
          "Label": "Manager to Employee",
          "Description": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111"
              },
              {
                "Name": "LABEL",
                "Value": "Manager to Employee"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 2222222 22222222222222222222222"
              }
            ]
          }
        },
        {
          "SID": "2459212",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2459091",
          "ToNodeSID": "2458660",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "147Alberto Errazuriz",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "EMPLOYEE2MANAGER",
          "Direction": "UP",
          "Label": "Employee to Manager",
          "Description": "E2M-",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "omschrijving bij Employee2Manager edge 11111111111111111111111 111111111111111111111111 111111111111111111111111111111111111111111111"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "omschrijving bij Employee2Manager edge 22222222222222 2222222222222222222 22222222222222222"
              },
              {
                "Name": "NOTES2",
                "Value": "E2M-"
              },
              {
                "Name": "NOTES1",
                "Value": "E2M-"
              },
              {
                "Name": "LABEL",
                "Value": "Employee to Manager"
              }
            ]
          }
        }
      ]
    },
    "source": "2458660",
    "target": "2459091"
  },
  {
    "SetID": "6046078512700",
    "FromNodeSID": "2458660",
    "ToNodeSID": "2459095",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2459094",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458660",
          "ToNodeSID": "2459095",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "163Danielle Greene",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "MANAGER2EMPLOYEE",
          "Direction": "DOWN",
          "Label": "Manager to Employee",
          "Description": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111"
              },
              {
                "Name": "LABEL",
                "Value": "Manager to Employee"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 2222222 22222222222222222222222"
              }
            ]
          }
        },
        {
          "SID": "2459176",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2459095",
          "ToNodeSID": "2458660",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "147Alberto Errazuriz",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "EMPLOYEE2MANAGER",
          "Direction": "UP",
          "Label": "Employee to Manager",
          "Description": "E2M-",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "omschrijving bij Employee2Manager edge 11111111111111111111111 111111111111111111111111 111111111111111111111111111111111111111111111"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "omschrijving bij Employee2Manager edge 22222222222222 2222222222222222222 22222222222222222"
              },
              {
                "Name": "NOTES2",
                "Value": "E2M-"
              },
              {
                "Name": "NOTES1",
                "Value": "E2M-"
              },
              {
                "Name": "LABEL",
                "Value": "Employee to Manager"
              }
            ]
          }
        }
      ]
    },
    "source": "2458660",
    "target": "2459095"
  },
  {
    "SetID": "6046083430020",
    "FromNodeSID": "2458660",
    "ToNodeSID": "2459097",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2459096",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458660",
          "ToNodeSID": "2459097",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "162Clara Vishney",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "MANAGER2EMPLOYEE",
          "Direction": "DOWN",
          "Label": "Manager to Employee",
          "Description": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111"
              },
              {
                "Name": "LABEL",
                "Value": "Manager to Employee"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 2222222 22222222222222222222222"
              }
            ]
          }
        },
        {
          "SID": "2459180",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2459097",
          "ToNodeSID": "2458660",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "147Alberto Errazuriz",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "EMPLOYEE2MANAGER",
          "Direction": "UP",
          "Label": "Employee to Manager",
          "Description": "E2M-",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "omschrijving bij Employee2Manager edge 11111111111111111111111 111111111111111111111111 111111111111111111111111111111111111111111111"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "omschrijving bij Employee2Manager edge 22222222222222 2222222222222222222 22222222222222222"
              },
              {
                "Name": "NOTES2",
                "Value": "E2M-"
              },
              {
                "Name": "NOTES1",
                "Value": "E2M-"
              },
              {
                "Name": "LABEL",
                "Value": "Employee to Manager"
              }
            ]
          }
        }
      ]
    },
    "source": "2458660",
    "target": "2459097"
  },
  {
    "SetID": "6046110477056",
    "FromNodeSID": "2458664",
    "ToNodeSID": "2459104",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2459103",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458664",
          "ToNodeSID": "2459104",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "161Sarath Sewall",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "MANAGER2EMPLOYEE",
          "Direction": "DOWN",
          "Label": "Manager to Employee",
          "Description": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111"
              },
              {
                "Name": "LABEL",
                "Value": "Manager to Employee"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 2222222 22222222222222222222222"
              }
            ]
          }
        },
        {
          "SID": "2459200",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2459104",
          "ToNodeSID": "2458664",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "146Karen Partners",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "EMPLOYEE2MANAGER",
          "Direction": "UP",
          "Label": "Employee to Manager",
          "Description": "E2M-",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "omschrijving bij Employee2Manager edge 11111111111111111111111 111111111111111111111111 111111111111111111111111111111111111111111111"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "omschrijving bij Employee2Manager edge 22222222222222 2222222222222222222 22222222222222222"
              },
              {
                "Name": "NOTES2",
                "Value": "E2M-"
              },
              {
                "Name": "NOTES1",
                "Value": "E2M-"
              },
              {
                "Name": "LABEL",
                "Value": "Employee to Manager"
              }
            ]
          }
        }
      ]
    },
    "source": "2458664",
    "target": "2459104"
  },
  {
    "SetID": "6046115394384",
    "FromNodeSID": "2458664",
    "ToNodeSID": "2459106",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2459105",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458664",
          "ToNodeSID": "2459106",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "160Louise Doran",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "MANAGER2EMPLOYEE",
          "Direction": "DOWN",
          "Label": "Manager to Employee",
          "Description": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111"
              },
              {
                "Name": "LABEL",
                "Value": "Manager to Employee"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 2222222 22222222222222222222222"
              }
            ]
          }
        },
        {
          "SID": "2459184",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2459106",
          "ToNodeSID": "2458664",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "146Karen Partners",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "EMPLOYEE2MANAGER",
          "Direction": "UP",
          "Label": "Employee to Manager",
          "Description": "E2M-",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "omschrijving bij Employee2Manager edge 11111111111111111111111 111111111111111111111111 111111111111111111111111111111111111111111111"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "omschrijving bij Employee2Manager edge 22222222222222 2222222222222222222 22222222222222222"
              },
              {
                "Name": "NOTES2",
                "Value": "E2M-"
              },
              {
                "Name": "NOTES1",
                "Value": "E2M-"
              },
              {
                "Name": "LABEL",
                "Value": "Employee to Manager"
              }
            ]
          }
        }
      ]
    },
    "source": "2458664",
    "target": "2459106"
  },
  {
    "SetID": "6046120311712",
    "FromNodeSID": "2458664",
    "ToNodeSID": "2459108",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2459107",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458664",
          "ToNodeSID": "2459108",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "159Lindsey Smith",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "MANAGER2EMPLOYEE",
          "Direction": "DOWN",
          "Label": "Manager to Employee",
          "Description": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111"
              },
              {
                "Name": "LABEL",
                "Value": "Manager to Employee"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 2222222 22222222222222222222222"
              }
            ]
          }
        },
        {
          "SID": "2459204",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2459108",
          "ToNodeSID": "2458664",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "146Karen Partners",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "EMPLOYEE2MANAGER",
          "Direction": "UP",
          "Label": "Employee to Manager",
          "Description": "E2M-",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "omschrijving bij Employee2Manager edge 11111111111111111111111 111111111111111111111111 111111111111111111111111111111111111111111111"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "omschrijving bij Employee2Manager edge 22222222222222 2222222222222222222 22222222222222222"
              },
              {
                "Name": "NOTES2",
                "Value": "E2M-"
              },
              {
                "Name": "NOTES1",
                "Value": "E2M-"
              },
              {
                "Name": "LABEL",
                "Value": "Employee to Manager"
              }
            ]
          }
        }
      ]
    },
    "source": "2458664",
    "target": "2459108"
  },
  {
    "SetID": "6046125229040",
    "FromNodeSID": "2458664",
    "ToNodeSID": "2459110",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2459109",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458664",
          "ToNodeSID": "2459110",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "158Allan McEwen",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "MANAGER2EMPLOYEE",
          "Direction": "DOWN",
          "Label": "Manager to Employee",
          "Description": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111"
              },
              {
                "Name": "LABEL",
                "Value": "Manager to Employee"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 2222222 22222222222222222222222"
              }
            ]
          }
        },
        {
          "SID": "2459188",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2459110",
          "ToNodeSID": "2458664",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "146Karen Partners",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "EMPLOYEE2MANAGER",
          "Direction": "UP",
          "Label": "Employee to Manager",
          "Description": "E2M-",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "omschrijving bij Employee2Manager edge 11111111111111111111111 111111111111111111111111 111111111111111111111111111111111111111111111"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "omschrijving bij Employee2Manager edge 22222222222222 2222222222222222222 22222222222222222"
              },
              {
                "Name": "NOTES2",
                "Value": "E2M-"
              },
              {
                "Name": "NOTES1",
                "Value": "E2M-"
              },
              {
                "Name": "LABEL",
                "Value": "Employee to Manager"
              }
            ]
          }
        }
      ]
    },
    "source": "2458664",
    "target": "2459110"
  },
  {
    "SetID": "6046130146368",
    "FromNodeSID": "2458664",
    "ToNodeSID": "2459112",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2459111",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458664",
          "ToNodeSID": "2459112",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "157Patrick Sully",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "MANAGER2EMPLOYEE",
          "Direction": "DOWN",
          "Label": "Manager to Employee",
          "Description": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111"
              },
              {
                "Name": "LABEL",
                "Value": "Manager to Employee"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 2222222 22222222222222222222222"
              }
            ]
          }
        },
        {
          "SID": "2459208",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2459112",
          "ToNodeSID": "2458664",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "146Karen Partners",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "EMPLOYEE2MANAGER",
          "Direction": "UP",
          "Label": "Employee to Manager",
          "Description": "E2M-",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "omschrijving bij Employee2Manager edge 11111111111111111111111 111111111111111111111111 111111111111111111111111111111111111111111111"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "omschrijving bij Employee2Manager edge 22222222222222 2222222222222222222 22222222222222222"
              },
              {
                "Name": "NOTES2",
                "Value": "E2M-"
              },
              {
                "Name": "NOTES1",
                "Value": "E2M-"
              },
              {
                "Name": "LABEL",
                "Value": "Employee to Manager"
              }
            ]
          }
        }
      ]
    },
    "source": "2458664",
    "target": "2459112"
  },
  {
    "SetID": "6046147352366",
    "FromNodeSID": "2458654",
    "ToNodeSID": "2459129",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2459128",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458654",
          "ToNodeSID": "2459129",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "179Charles Johnson",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "MANAGER2EMPLOYEE",
          "Direction": "DOWN",
          "Label": "Manager to Employee",
          "Description": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111"
              },
              {
                "Name": "LABEL",
                "Value": "Manager to Employee"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 2222222 22222222222222222222222"
              }
            ]
          }
        },
        {
          "SID": "2459248",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2459129",
          "ToNodeSID": "2458654",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "149Eleni Zlotkey",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "EMPLOYEE2MANAGER",
          "Direction": "UP",
          "Label": "Employee to Manager",
          "Description": "E2M-",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "omschrijving bij Employee2Manager edge 11111111111111111111111 111111111111111111111111 111111111111111111111111111111111111111111111"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "omschrijving bij Employee2Manager edge 22222222222222 2222222222222222222 22222222222222222"
              },
              {
                "Name": "NOTES2",
                "Value": "E2M-"
              },
              {
                "Name": "NOTES1",
                "Value": "E2M-"
              },
              {
                "Name": "LABEL",
                "Value": "Employee to Manager"
              }
            ]
          }
        }
      ]
    },
    "source": "2458654",
    "target": "2459129"
  },
  {
    "SetID": "6046152269674",
    "FromNodeSID": "2458654",
    "ToNodeSID": "2459131",
    "NumberInSet": "1",
    "EdgesInSet": {
      "Edge": {
        "SID": "2459130",
        "NetworkSID": "2458250",
        "NetworkLayerSID": "2458271",
        "FromNodeSID": "2458654",
        "ToNodeSID": "2459131",
        "FromLayerSID": "",
        "ToLayerSID": "",
        "ToNodeType": "NODE",
        "ToNodeKey": "178Kimberely Grant",
        "ToNodeCategory": "PEOPLE",
        "EdgeCategory": "MANAGER2EMPLOYEE",
        "Direction": "DOWN",
        "Label": "Manager to Employee",
        "Description": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111",
        "ValidFrom": "",
        "ValidTo": "",
        "Priority": "FutureUse",
        "DisplayProperties": {
          "LineWeightOverride": "FutureUse",
          "LineTypeOverride": "FutureUse",
          "LineColourOverride": "FutureUse"
        },
        "Attributes": {
          "Attribute": [
            {
              "Name": "EDGE_NOTES1",
              "Value": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111"
            },
            {
              "Name": "LABEL",
              "Value": "Manager to Employee"
            },
            {
              "Name": "EDGE_NOTES2",
              "Value": "MANAGER2EMPLOYEENOTESSSSS1111 2222222 22222222222222222222222"
            }
          ]
        }
      }
    },
    "source": "2458654",
    "target": "2459131"
  },
  {
    "SetID": "6046157186982",
    "FromNodeSID": "2458654",
    "ToNodeSID": "2459133",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2459132",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458654",
          "ToNodeSID": "2459133",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "177Jack Livingston",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "MANAGER2EMPLOYEE",
          "Direction": "DOWN",
          "Label": "Manager to Employee",
          "Description": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111"
              },
              {
                "Name": "LABEL",
                "Value": "Manager to Employee"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 2222222 22222222222222222222222"
              }
            ]
          }
        },
        {
          "SID": "2459224",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2459133",
          "ToNodeSID": "2458654",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "149Eleni Zlotkey",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "EMPLOYEE2MANAGER",
          "Direction": "UP",
          "Label": "Employee to Manager",
          "Description": "E2M-",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "omschrijving bij Employee2Manager edge 11111111111111111111111 111111111111111111111111 111111111111111111111111111111111111111111111"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "omschrijving bij Employee2Manager edge 22222222222222 2222222222222222222 22222222222222222"
              },
              {
                "Name": "NOTES2",
                "Value": "E2M-"
              },
              {
                "Name": "NOTES1",
                "Value": "E2M-"
              },
              {
                "Name": "LABEL",
                "Value": "Employee to Manager"
              }
            ]
          }
        }
      ]
    },
    "source": "2458654",
    "target": "2459133"
  },
  {
    "SetID": "6046162104290",
    "FromNodeSID": "2458654",
    "ToNodeSID": "2459135",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2459134",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458654",
          "ToNodeSID": "2459135",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "176Jonathon Taylor",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "MANAGER2EMPLOYEE",
          "Direction": "DOWN",
          "Label": "Manager to Employee",
          "Description": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111"
              },
              {
                "Name": "LABEL",
                "Value": "Manager to Employee"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 2222222 22222222222222222222222"
              }
            ]
          }
        },
        {
          "SID": "2459252",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2459135",
          "ToNodeSID": "2458654",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "149Eleni Zlotkey",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "EMPLOYEE2MANAGER",
          "Direction": "UP",
          "Label": "Employee to Manager",
          "Description": "E2M-",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "omschrijving bij Employee2Manager edge 11111111111111111111111 111111111111111111111111 111111111111111111111111111111111111111111111"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "omschrijving bij Employee2Manager edge 22222222222222 2222222222222222222 22222222222222222"
              },
              {
                "Name": "NOTES2",
                "Value": "E2M-"
              },
              {
                "Name": "NOTES1",
                "Value": "E2M-"
              },
              {
                "Name": "LABEL",
                "Value": "Employee to Manager"
              }
            ]
          }
        }
      ]
    },
    "source": "2458654",
    "target": "2459135"
  },
  {
    "SetID": "6046167021598",
    "FromNodeSID": "2458654",
    "ToNodeSID": "2459137",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2459136",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458654",
          "ToNodeSID": "2459137",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "175Alyssa Hutton",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "MANAGER2EMPLOYEE",
          "Direction": "DOWN",
          "Label": "Manager to Employee",
          "Description": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111"
              },
              {
                "Name": "LABEL",
                "Value": "Manager to Employee"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 2222222 22222222222222222222222"
              }
            ]
          }
        },
        {
          "SID": "2459236",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2459137",
          "ToNodeSID": "2458654",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "149Eleni Zlotkey",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "EMPLOYEE2MANAGER",
          "Direction": "UP",
          "Label": "Employee to Manager",
          "Description": "E2M-",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "omschrijving bij Employee2Manager edge 11111111111111111111111 111111111111111111111111 111111111111111111111111111111111111111111111"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "omschrijving bij Employee2Manager edge 22222222222222 2222222222222222222 22222222222222222"
              },
              {
                "Name": "NOTES2",
                "Value": "E2M-"
              },
              {
                "Name": "NOTES1",
                "Value": "E2M-"
              },
              {
                "Name": "LABEL",
                "Value": "Employee to Manager"
              }
            ]
          }
        }
      ]
    },
    "source": "2458654",
    "target": "2459137"
  },
  {
    "SetID": "6046171938906",
    "FromNodeSID": "2458654",
    "ToNodeSID": "2459139",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2459138",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458654",
          "ToNodeSID": "2459139",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "174Ellen Abel",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "MANAGER2EMPLOYEE",
          "Direction": "DOWN",
          "Label": "Manager to Employee",
          "Description": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111"
              },
              {
                "Name": "LABEL",
                "Value": "Manager to Employee"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 2222222 22222222222222222222222"
              }
            ]
          }
        },
        {
          "SID": "2459216",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2459139",
          "ToNodeSID": "2458654",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "149Eleni Zlotkey",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "EMPLOYEE2MANAGER",
          "Direction": "UP",
          "Label": "Employee to Manager",
          "Description": "E2M-",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "omschrijving bij Employee2Manager edge 11111111111111111111111 111111111111111111111111 111111111111111111111111111111111111111111111"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "omschrijving bij Employee2Manager edge 22222222222222 2222222222222222222 22222222222222222"
              },
              {
                "Name": "NOTES2",
                "Value": "E2M-"
              },
              {
                "Name": "NOTES1",
                "Value": "E2M-"
              },
              {
                "Name": "LABEL",
                "Value": "Employee to Manager"
              }
            ]
          }
        }
      ]
    },
    "source": "2458654",
    "target": "2459139"
  },
  {
    "SetID": "6046194067776",
    "FromNodeSID": "2458656",
    "ToNodeSID": "2459146",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2459145",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458656",
          "ToNodeSID": "2459146",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "173Sundita Kumar",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "MANAGER2EMPLOYEE",
          "Direction": "DOWN",
          "Label": "Manager to Employee",
          "Description": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111"
              },
              {
                "Name": "LABEL",
                "Value": "Manager to Employee"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 2222222 22222222222222222222222"
              }
            ]
          }
        },
        {
          "SID": "2459240",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2459146",
          "ToNodeSID": "2458656",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "148Gerald Cambrault",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "EMPLOYEE2MANAGER",
          "Direction": "UP",
          "Label": "Employee to Manager",
          "Description": "E2M-",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "omschrijving bij Employee2Manager edge 11111111111111111111111 111111111111111111111111 111111111111111111111111111111111111111111111"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "omschrijving bij Employee2Manager edge 22222222222222 2222222222222222222 22222222222222222"
              },
              {
                "Name": "NOTES2",
                "Value": "E2M-"
              },
              {
                "Name": "NOTES1",
                "Value": "E2M-"
              },
              {
                "Name": "LABEL",
                "Value": "Employee to Manager"
              }
            ]
          }
        }
      ]
    },
    "source": "2458656",
    "target": "2459146"
  },
  {
    "SetID": "6046198985088",
    "FromNodeSID": "2458656",
    "ToNodeSID": "2459148",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2459147",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458656",
          "ToNodeSID": "2459148",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "172Elizabeth Bates",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "MANAGER2EMPLOYEE",
          "Direction": "DOWN",
          "Label": "Manager to Employee",
          "Description": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111"
              },
              {
                "Name": "LABEL",
                "Value": "Manager to Employee"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 2222222 22222222222222222222222"
              }
            ]
          }
        },
        {
          "SID": "2459220",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2459148",
          "ToNodeSID": "2458656",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "148Gerald Cambrault",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "EMPLOYEE2MANAGER",
          "Direction": "UP",
          "Label": "Employee to Manager",
          "Description": "E2M-",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "omschrijving bij Employee2Manager edge 11111111111111111111111 111111111111111111111111 111111111111111111111111111111111111111111111"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "omschrijving bij Employee2Manager edge 22222222222222 2222222222222222222 22222222222222222"
              },
              {
                "Name": "NOTES2",
                "Value": "E2M-"
              },
              {
                "Name": "NOTES1",
                "Value": "E2M-"
              },
              {
                "Name": "LABEL",
                "Value": "Employee to Manager"
              }
            ]
          }
        }
      ]
    },
    "source": "2458656",
    "target": "2459148"
  },
  {
    "SetID": "6046203902400",
    "FromNodeSID": "2458656",
    "ToNodeSID": "2459150",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2459149",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458656",
          "ToNodeSID": "2459150",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "171William Smith",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "MANAGER2EMPLOYEE",
          "Direction": "DOWN",
          "Label": "Manager to Employee",
          "Description": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111"
              },
              {
                "Name": "LABEL",
                "Value": "Manager to Employee"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 2222222 22222222222222222222222"
              }
            ]
          }
        },
        {
          "SID": "2459256",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2459150",
          "ToNodeSID": "2458656",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "148Gerald Cambrault",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "EMPLOYEE2MANAGER",
          "Direction": "UP",
          "Label": "Employee to Manager",
          "Description": "E2M-",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "omschrijving bij Employee2Manager edge 11111111111111111111111 111111111111111111111111 111111111111111111111111111111111111111111111"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "omschrijving bij Employee2Manager edge 22222222222222 2222222222222222222 22222222222222222"
              },
              {
                "Name": "NOTES2",
                "Value": "E2M-"
              },
              {
                "Name": "NOTES1",
                "Value": "E2M-"
              },
              {
                "Name": "LABEL",
                "Value": "Employee to Manager"
              }
            ]
          }
        }
      ]
    },
    "source": "2458656",
    "target": "2459150"
  },
  {
    "SetID": "6046208819712",
    "FromNodeSID": "2458656",
    "ToNodeSID": "2459152",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2459151",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458656",
          "ToNodeSID": "2459152",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "170Tayler Fox",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "MANAGER2EMPLOYEE",
          "Direction": "DOWN",
          "Label": "Manager to Employee",
          "Description": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111"
              },
              {
                "Name": "LABEL",
                "Value": "Manager to Employee"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 2222222 22222222222222222222222"
              }
            ]
          }
        },
        {
          "SID": "2459260",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2459152",
          "ToNodeSID": "2458656",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "148Gerald Cambrault",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "EMPLOYEE2MANAGER",
          "Direction": "UP",
          "Label": "Employee to Manager",
          "Description": "E2M-",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "omschrijving bij Employee2Manager edge 11111111111111111111111 111111111111111111111111 111111111111111111111111111111111111111111111"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "omschrijving bij Employee2Manager edge 22222222222222 2222222222222222222 22222222222222222"
              },
              {
                "Name": "NOTES2",
                "Value": "E2M-"
              },
              {
                "Name": "NOTES1",
                "Value": "E2M-"
              },
              {
                "Name": "LABEL",
                "Value": "Employee to Manager"
              }
            ]
          }
        }
      ]
    },
    "source": "2458656",
    "target": "2459152"
  },
  {
    "SetID": "6046213737024",
    "FromNodeSID": "2458656",
    "ToNodeSID": "2459154",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2459153",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458656",
          "ToNodeSID": "2459154",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "169Harrison Bloom",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "MANAGER2EMPLOYEE",
          "Direction": "DOWN",
          "Label": "Manager to Employee",
          "Description": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111"
              },
              {
                "Name": "LABEL",
                "Value": "Manager to Employee"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 2222222 22222222222222222222222"
              }
            ]
          }
        },
        {
          "SID": "2459228",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2459154",
          "ToNodeSID": "2458656",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "148Gerald Cambrault",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "EMPLOYEE2MANAGER",
          "Direction": "UP",
          "Label": "Employee to Manager",
          "Description": "E2M-",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "omschrijving bij Employee2Manager edge 11111111111111111111111 111111111111111111111111 111111111111111111111111111111111111111111111"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "omschrijving bij Employee2Manager edge 22222222222222 2222222222222222222 22222222222222222"
              },
              {
                "Name": "NOTES2",
                "Value": "E2M-"
              },
              {
                "Name": "NOTES1",
                "Value": "E2M-"
              },
              {
                "Name": "LABEL",
                "Value": "Employee to Manager"
              }
            ]
          }
        }
      ]
    },
    "source": "2458656",
    "target": "2459154"
  },
  {
    "SetID": "6046218654336",
    "FromNodeSID": "2458656",
    "ToNodeSID": "2459156",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2459155",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458656",
          "ToNodeSID": "2459156",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "168Lisa Ozer",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "MANAGER2EMPLOYEE",
          "Direction": "DOWN",
          "Label": "Manager to Employee",
          "Description": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111"
              },
              {
                "Name": "LABEL",
                "Value": "Manager to Employee"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 2222222 22222222222222222222222"
              }
            ]
          }
        },
        {
          "SID": "2459244",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2459156",
          "ToNodeSID": "2458656",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "148Gerald Cambrault",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "EMPLOYEE2MANAGER",
          "Direction": "UP",
          "Label": "Employee to Manager",
          "Description": "E2M-",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "omschrijving bij Employee2Manager edge 11111111111111111111111 111111111111111111111111 111111111111111111111111111111111111111111111"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "omschrijving bij Employee2Manager edge 22222222222222 2222222222222222222 22222222222222222"
              },
              {
                "Name": "NOTES2",
                "Value": "E2M-"
              },
              {
                "Name": "NOTES1",
                "Value": "E2M-"
              },
              {
                "Name": "LABEL",
                "Value": "Employee to Manager"
              }
            ]
          }
        }
      ]
    },
    "source": "2458656",
    "target": "2459156"
  },
  {
    "SetID": "6046260456558",
    "FromNodeSID": "2458666",
    "ToNodeSID": "2459163",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2459162",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458666",
          "ToNodeSID": "2459163",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "155Oliver Tuvault",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "MANAGER2EMPLOYEE",
          "Direction": "DOWN",
          "Label": "Manager to Employee",
          "Description": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111"
              },
              {
                "Name": "LABEL",
                "Value": "Manager to Employee"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 2222222 22222222222222222222222"
              }
            ]
          }
        },
        {
          "SID": "2459264",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2459163",
          "ToNodeSID": "2458666",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "145John Russell",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "EMPLOYEE2MANAGER",
          "Direction": "UP",
          "Label": "Employee to Manager",
          "Description": "E2M-",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "omschrijving bij Employee2Manager edge 11111111111111111111111 111111111111111111111111 111111111111111111111111111111111111111111111"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "omschrijving bij Employee2Manager edge 22222222222222 2222222222222222222 22222222222222222"
              },
              {
                "Name": "NOTES2",
                "Value": "E2M-"
              },
              {
                "Name": "NOTES1",
                "Value": "E2M-"
              },
              {
                "Name": "LABEL",
                "Value": "Employee to Manager"
              }
            ]
          }
        }
      ]
    },
    "source": "2458666",
    "target": "2459163"
  },
  {
    "SetID": "6046275208554",
    "FromNodeSID": "2458666",
    "ToNodeSID": "2459169",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2459168",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458666",
          "ToNodeSID": "2459169",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "152Peter Hall",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "MANAGER2EMPLOYEE",
          "Direction": "DOWN",
          "Label": "Manager to Employee",
          "Description": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111"
              },
              {
                "Name": "LABEL",
                "Value": "Manager to Employee"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 2222222 22222222222222222222222"
              }
            ]
          }
        },
        {
          "SID": "2459232",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2459169",
          "ToNodeSID": "2458666",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "145John Russell",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "EMPLOYEE2MANAGER",
          "Direction": "UP",
          "Label": "Employee to Manager",
          "Description": "E2M-",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "omschrijving bij Employee2Manager edge 11111111111111111111111 111111111111111111111111 111111111111111111111111111111111111111111111"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "omschrijving bij Employee2Manager edge 22222222222222 2222222222222222222 22222222222222222"
              },
              {
                "Name": "NOTES2",
                "Value": "E2M-"
              },
              {
                "Name": "NOTES1",
                "Value": "E2M-"
              },
              {
                "Name": "LABEL",
                "Value": "Employee to Manager"
              }
            ]
          }
        }
      ]
    },
    "source": "2458666",
    "target": "2459169"
  },
  {
    "SetID": "6046280125886",
    "FromNodeSID": "2458666",
    "ToNodeSID": "2459171",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2459170",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458666",
          "ToNodeSID": "2459171",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "151David Bernstein",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "MANAGER2EMPLOYEE",
          "Direction": "DOWN",
          "Label": "Manager to Employee",
          "Description": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111"
              },
              {
                "Name": "LABEL",
                "Value": "Manager to Employee"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 2222222 22222222222222222222222"
              }
            ]
          }
        },
        {
          "SID": "2459268",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2459171",
          "ToNodeSID": "2458666",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "145John Russell",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "EMPLOYEE2MANAGER",
          "Direction": "UP",
          "Label": "Employee to Manager",
          "Description": "E2M-",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "omschrijving bij Employee2Manager edge 11111111111111111111111 111111111111111111111111 111111111111111111111111111111111111111111111"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "omschrijving bij Employee2Manager edge 22222222222222 2222222222222222222 22222222222222222"
              },
              {
                "Name": "NOTES2",
                "Value": "E2M-"
              },
              {
                "Name": "NOTES1",
                "Value": "E2M-"
              },
              {
                "Name": "LABEL",
                "Value": "Employee to Manager"
              }
            ]
          }
        }
      ]
    },
    "source": "2458666",
    "target": "2459171"
  },
  {
    "SetID": "6046285043218",
    "FromNodeSID": "2458666",
    "ToNodeSID": "2459173",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2459172",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458666",
          "ToNodeSID": "2459173",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "150Peter Tucker",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "MANAGER2EMPLOYEE",
          "Direction": "DOWN",
          "Label": "Manager to Employee",
          "Description": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 111111 111111"
              },
              {
                "Name": "LABEL",
                "Value": "Manager to Employee"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "MANAGER2EMPLOYEENOTESSSSS1111 2222222 22222222222222222222222"
              }
            ]
          }
        },
        {
          "SID": "2459272",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2459173",
          "ToNodeSID": "2458666",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "145John Russell",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "EMPLOYEE2MANAGER",
          "Direction": "UP",
          "Label": "Employee to Manager",
          "Description": "E2M-",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": [
              {
                "Name": "EDGE_NOTES1",
                "Value": "omschrijving bij Employee2Manager edge 11111111111111111111111 111111111111111111111111 111111111111111111111111111111111111111111111"
              },
              {
                "Name": "EDGE_NOTES2",
                "Value": "omschrijving bij Employee2Manager edge 22222222222222 2222222222222222222 22222222222222222"
              },
              {
                "Name": "NOTES2",
                "Value": "E2M-"
              },
              {
                "Name": "NOTES1",
                "Value": "E2M-"
              },
              {
                "Name": "LABEL",
                "Value": "Employee to Manager"
              }
            ]
          }
        }
      ]
    },
    "source": "2458666",
    "target": "2459173"
  },
  {
    "SetID": "6046651492032",
    "FromNodeSID": "2458992",
    "ToNodeSID": "2458996",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2459119",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458992",
          "ToNodeSID": "2458996",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "80",
          "ToNodeCategory": "DEPARTMENT",
          "EdgeCategory": "PEOPLE2DEPARTMENT",
          "Direction": "UP",
          "Label": "People to Department",
          "Description": "People to Department",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "People to Department"
            }
          }
        },
        {
          "SID": "2459033",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458996",
          "ToNodeSID": "2458992",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "154Nanette Cambrault",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "DEPARTMENT2PEOPLE",
          "Direction": "DOWN",
          "Label": "Department to People",
          "Description": "Department to People",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "Department to People"
            }
          }
        }
      ]
    },
    "source": "2458992",
    "target": "2458996"
  },
  {
    "SetID": "6046656410024",
    "FromNodeSID": "2458994",
    "ToNodeSID": "2458996",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2459115",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458994",
          "ToNodeSID": "2458996",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "80",
          "ToNodeCategory": "DEPARTMENT",
          "EdgeCategory": "PEOPLE2DEPARTMENT",
          "Direction": "UP",
          "Label": "People to Department",
          "Description": "People to Department",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "People to Department"
            }
          }
        },
        {
          "SID": "2459037",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458996",
          "ToNodeSID": "2458994",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "153Christopher Olsen",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "DEPARTMENT2PEOPLE",
          "Direction": "DOWN",
          "Label": "Department to People",
          "Description": "Department to People",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "Department to People"
            }
          }
        }
      ]
    },
    "source": "2458994",
    "target": "2458996"
  },
  {
    "SetID": "6046885096652",
    "FromNodeSID": "2458996",
    "ToNodeSID": "2459087",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2459015",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458996",
          "ToNodeSID": "2459087",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "167Amit Banda",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "DEPARTMENT2PEOPLE",
          "Direction": "DOWN",
          "Label": "Department to People",
          "Description": "Department to People",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "Department to People"
            }
          }
        },
        {
          "SID": "2459190",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2459087",
          "ToNodeSID": "2458996",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "80",
          "ToNodeCategory": "DEPARTMENT",
          "EdgeCategory": "PEOPLE2DEPARTMENT",
          "Direction": "UP",
          "Label": "People to Department",
          "Description": "People to Department",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "People to Department"
            }
          }
        }
      ]
    },
    "source": "2458996",
    "target": "2459087"
  },
  {
    "SetID": "6046890014644",
    "FromNodeSID": "2458996",
    "ToNodeSID": "2459089",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2459019",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458996",
          "ToNodeSID": "2459089",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "166Sundar Ande",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "DEPARTMENT2PEOPLE",
          "Direction": "DOWN",
          "Label": "Department to People",
          "Description": "Department to People",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "Department to People"
            }
          }
        },
        {
          "SID": "2459194",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2459089",
          "ToNodeSID": "2458996",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "80",
          "ToNodeCategory": "DEPARTMENT",
          "EdgeCategory": "PEOPLE2DEPARTMENT",
          "Direction": "UP",
          "Label": "People to Department",
          "Description": "People to Department",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "People to Department"
            }
          }
        }
      ]
    },
    "source": "2458996",
    "target": "2459089"
  },
  {
    "SetID": "6046894932636",
    "FromNodeSID": "2458996",
    "ToNodeSID": "2459091",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2459021",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458996",
          "ToNodeSID": "2459091",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "165David Lee",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "DEPARTMENT2PEOPLE",
          "Direction": "DOWN",
          "Label": "Department to People",
          "Description": "Department to People",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "Department to People"
            }
          }
        },
        {
          "SID": "2459210",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2459091",
          "ToNodeSID": "2458996",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "80",
          "ToNodeCategory": "DEPARTMENT",
          "EdgeCategory": "PEOPLE2DEPARTMENT",
          "Direction": "UP",
          "Label": "People to Department",
          "Description": "People to Department",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "People to Department"
            }
          }
        }
      ]
    },
    "source": "2458996",
    "target": "2459091"
  },
  {
    "SetID": "6046904768620",
    "FromNodeSID": "2458996",
    "ToNodeSID": "2459095",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2459051",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458996",
          "ToNodeSID": "2459095",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "163Danielle Greene",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "DEPARTMENT2PEOPLE",
          "Direction": "DOWN",
          "Label": "Department to People",
          "Description": "Department to People",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "Department to People"
            }
          }
        },
        {
          "SID": "2459174",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2459095",
          "ToNodeSID": "2458996",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "80",
          "ToNodeCategory": "DEPARTMENT",
          "EdgeCategory": "PEOPLE2DEPARTMENT",
          "Direction": "UP",
          "Label": "People to Department",
          "Description": "People to Department",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "People to Department"
            }
          }
        }
      ]
    },
    "source": "2458996",
    "target": "2459095"
  },
  {
    "SetID": "6046909686612",
    "FromNodeSID": "2458996",
    "ToNodeSID": "2459097",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2459067",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458996",
          "ToNodeSID": "2459097",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "162Clara Vishney",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "DEPARTMENT2PEOPLE",
          "Direction": "DOWN",
          "Label": "Department to People",
          "Description": "Department to People",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "Department to People"
            }
          }
        },
        {
          "SID": "2459178",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2459097",
          "ToNodeSID": "2458996",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "80",
          "ToNodeCategory": "DEPARTMENT",
          "EdgeCategory": "PEOPLE2DEPARTMENT",
          "Direction": "UP",
          "Label": "People to Department",
          "Description": "People to Department",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "People to Department"
            }
          }
        }
      ]
    },
    "source": "2458996",
    "target": "2459097"
  },
  {
    "SetID": "6046926899584",
    "FromNodeSID": "2458996",
    "ToNodeSID": "2459104",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2459025",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458996",
          "ToNodeSID": "2459104",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "161Sarath Sewall",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "DEPARTMENT2PEOPLE",
          "Direction": "DOWN",
          "Label": "Department to People",
          "Description": "Department to People",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "Department to People"
            }
          }
        },
        {
          "SID": "2459198",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2459104",
          "ToNodeSID": "2458996",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "80",
          "ToNodeCategory": "DEPARTMENT",
          "EdgeCategory": "PEOPLE2DEPARTMENT",
          "Direction": "UP",
          "Label": "People to Department",
          "Description": "People to Department",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "People to Department"
            }
          }
        }
      ]
    },
    "source": "2458996",
    "target": "2459104"
  },
  {
    "SetID": "6046931817576",
    "FromNodeSID": "2458996",
    "ToNodeSID": "2459106",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2459035",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458996",
          "ToNodeSID": "2459106",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "160Louise Doran",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "DEPARTMENT2PEOPLE",
          "Direction": "DOWN",
          "Label": "Department to People",
          "Description": "Department to People",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "Department to People"
            }
          }
        },
        {
          "SID": "2459182",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2459106",
          "ToNodeSID": "2458996",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "80",
          "ToNodeCategory": "DEPARTMENT",
          "EdgeCategory": "PEOPLE2DEPARTMENT",
          "Direction": "UP",
          "Label": "People to Department",
          "Description": "People to Department",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "People to Department"
            }
          }
        }
      ]
    },
    "source": "2458996",
    "target": "2459106"
  },
  {
    "SetID": "6046936735568",
    "FromNodeSID": "2458996",
    "ToNodeSID": "2459108",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2459039",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458996",
          "ToNodeSID": "2459108",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "159Lindsey Smith",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "DEPARTMENT2PEOPLE",
          "Direction": "DOWN",
          "Label": "Department to People",
          "Description": "Department to People",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "Department to People"
            }
          }
        },
        {
          "SID": "2459202",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2459108",
          "ToNodeSID": "2458996",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "80",
          "ToNodeCategory": "DEPARTMENT",
          "EdgeCategory": "PEOPLE2DEPARTMENT",
          "Direction": "UP",
          "Label": "People to Department",
          "Description": "People to Department",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "People to Department"
            }
          }
        }
      ]
    },
    "source": "2458996",
    "target": "2459108"
  },
  {
    "SetID": "6046941653560",
    "FromNodeSID": "2458996",
    "ToNodeSID": "2459110",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2459049",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458996",
          "ToNodeSID": "2459110",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "158Allan McEwen",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "DEPARTMENT2PEOPLE",
          "Direction": "DOWN",
          "Label": "Department to People",
          "Description": "Department to People",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "Department to People"
            }
          }
        },
        {
          "SID": "2459186",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2459110",
          "ToNodeSID": "2458996",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "80",
          "ToNodeCategory": "DEPARTMENT",
          "EdgeCategory": "PEOPLE2DEPARTMENT",
          "Direction": "UP",
          "Label": "People to Department",
          "Description": "People to Department",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "People to Department"
            }
          }
        }
      ]
    },
    "source": "2458996",
    "target": "2459110"
  },
  {
    "SetID": "6046946571552",
    "FromNodeSID": "2458996",
    "ToNodeSID": "2459112",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2459055",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458996",
          "ToNodeSID": "2459112",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "157Patrick Sully",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "DEPARTMENT2PEOPLE",
          "Direction": "DOWN",
          "Label": "Department to People",
          "Description": "Department to People",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "Department to People"
            }
          }
        },
        {
          "SID": "2459206",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2459112",
          "ToNodeSID": "2458996",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "80",
          "ToNodeCategory": "DEPARTMENT",
          "EdgeCategory": "PEOPLE2DEPARTMENT",
          "Direction": "UP",
          "Label": "People to Department",
          "Description": "People to Department",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "People to Department"
            }
          }
        }
      ]
    },
    "source": "2458996",
    "target": "2459112"
  },
  {
    "SetID": "6046988374484",
    "FromNodeSID": "2458996",
    "ToNodeSID": "2459129",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2459017",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458996",
          "ToNodeSID": "2459129",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "179Charles Johnson",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "DEPARTMENT2PEOPLE",
          "Direction": "DOWN",
          "Label": "Department to People",
          "Description": "Department to People",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "Department to People"
            }
          }
        },
        {
          "SID": "2459246",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2459129",
          "ToNodeSID": "2458996",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "80",
          "ToNodeCategory": "DEPARTMENT",
          "EdgeCategory": "PEOPLE2DEPARTMENT",
          "Direction": "UP",
          "Label": "People to Department",
          "Description": "People to Department",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "People to Department"
            }
          }
        }
      ]
    },
    "source": "2458996",
    "target": "2459129"
  },
  {
    "SetID": "6046998210468",
    "FromNodeSID": "2458996",
    "ToNodeSID": "2459133",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2459041",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458996",
          "ToNodeSID": "2459133",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "177Jack Livingston",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "DEPARTMENT2PEOPLE",
          "Direction": "DOWN",
          "Label": "Department to People",
          "Description": "Department to People",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "Department to People"
            }
          }
        },
        {
          "SID": "2459222",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2459133",
          "ToNodeSID": "2458996",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "80",
          "ToNodeCategory": "DEPARTMENT",
          "EdgeCategory": "PEOPLE2DEPARTMENT",
          "Direction": "UP",
          "Label": "People to Department",
          "Description": "People to Department",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "People to Department"
            }
          }
        }
      ]
    },
    "source": "2458996",
    "target": "2459133"
  },
  {
    "SetID": "6047003128460",
    "FromNodeSID": "2458996",
    "ToNodeSID": "2459135",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2459043",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458996",
          "ToNodeSID": "2459135",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "176Jonathon Taylor",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "DEPARTMENT2PEOPLE",
          "Direction": "DOWN",
          "Label": "Department to People",
          "Description": "Department to People",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "Department to People"
            }
          }
        },
        {
          "SID": "2459250",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2459135",
          "ToNodeSID": "2458996",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "80",
          "ToNodeCategory": "DEPARTMENT",
          "EdgeCategory": "PEOPLE2DEPARTMENT",
          "Direction": "UP",
          "Label": "People to Department",
          "Description": "People to Department",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "People to Department"
            }
          }
        }
      ]
    },
    "source": "2458996",
    "target": "2459135"
  },
  {
    "SetID": "6047008046452",
    "FromNodeSID": "2458996",
    "ToNodeSID": "2459137",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2459045",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458996",
          "ToNodeSID": "2459137",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "175Alyssa Hutton",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "DEPARTMENT2PEOPLE",
          "Direction": "DOWN",
          "Label": "Department to People",
          "Description": "Department to People",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "Department to People"
            }
          }
        },
        {
          "SID": "2459234",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2459137",
          "ToNodeSID": "2458996",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "80",
          "ToNodeCategory": "DEPARTMENT",
          "EdgeCategory": "PEOPLE2DEPARTMENT",
          "Direction": "UP",
          "Label": "People to Department",
          "Description": "People to Department",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "People to Department"
            }
          }
        }
      ]
    },
    "source": "2458996",
    "target": "2459137"
  },
  {
    "SetID": "6047012964444",
    "FromNodeSID": "2458996",
    "ToNodeSID": "2459139",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2459071",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458996",
          "ToNodeSID": "2459139",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "174Ellen Abel",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "DEPARTMENT2PEOPLE",
          "Direction": "DOWN",
          "Label": "Department to People",
          "Description": "Department to People",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "Department to People"
            }
          }
        },
        {
          "SID": "2459214",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2459139",
          "ToNodeSID": "2458996",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "80",
          "ToNodeCategory": "DEPARTMENT",
          "EdgeCategory": "PEOPLE2DEPARTMENT",
          "Direction": "UP",
          "Label": "People to Department",
          "Description": "People to Department",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "People to Department"
            }
          }
        }
      ]
    },
    "source": "2458996",
    "target": "2459139"
  },
  {
    "SetID": "6047030177416",
    "FromNodeSID": "2458996",
    "ToNodeSID": "2459146",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2459013",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458996",
          "ToNodeSID": "2459146",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "173Sundita Kumar",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "DEPARTMENT2PEOPLE",
          "Direction": "DOWN",
          "Label": "Department to People",
          "Description": "Department to People",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "Department to People"
            }
          }
        },
        {
          "SID": "2459238",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2459146",
          "ToNodeSID": "2458996",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "80",
          "ToNodeCategory": "DEPARTMENT",
          "EdgeCategory": "PEOPLE2DEPARTMENT",
          "Direction": "UP",
          "Label": "People to Department",
          "Description": "People to Department",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "People to Department"
            }
          }
        }
      ]
    },
    "source": "2458996",
    "target": "2459146"
  },
  {
    "SetID": "6047035095408",
    "FromNodeSID": "2458996",
    "ToNodeSID": "2459148",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2459029",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458996",
          "ToNodeSID": "2459148",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "172Elizabeth Bates",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "DEPARTMENT2PEOPLE",
          "Direction": "DOWN",
          "Label": "Department to People",
          "Description": "Department to People",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "Department to People"
            }
          }
        },
        {
          "SID": "2459218",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2459148",
          "ToNodeSID": "2458996",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "80",
          "ToNodeCategory": "DEPARTMENT",
          "EdgeCategory": "PEOPLE2DEPARTMENT",
          "Direction": "UP",
          "Label": "People to Department",
          "Description": "People to Department",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "People to Department"
            }
          }
        }
      ]
    },
    "source": "2458996",
    "target": "2459148"
  },
  {
    "SetID": "6047040013400",
    "FromNodeSID": "2458996",
    "ToNodeSID": "2459150",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2459031",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458996",
          "ToNodeSID": "2459150",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "171William Smith",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "DEPARTMENT2PEOPLE",
          "Direction": "DOWN",
          "Label": "Department to People",
          "Description": "Department to People",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "Department to People"
            }
          }
        },
        {
          "SID": "2459254",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2459150",
          "ToNodeSID": "2458996",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "80",
          "ToNodeCategory": "DEPARTMENT",
          "EdgeCategory": "PEOPLE2DEPARTMENT",
          "Direction": "UP",
          "Label": "People to Department",
          "Description": "People to Department",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "People to Department"
            }
          }
        }
      ]
    },
    "source": "2458996",
    "target": "2459150"
  },
  {
    "SetID": "6047044931392",
    "FromNodeSID": "2458996",
    "ToNodeSID": "2459152",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2459057",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458996",
          "ToNodeSID": "2459152",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "170Tayler Fox",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "DEPARTMENT2PEOPLE",
          "Direction": "DOWN",
          "Label": "Department to People",
          "Description": "Department to People",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "Department to People"
            }
          }
        },
        {
          "SID": "2459258",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2459152",
          "ToNodeSID": "2458996",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "80",
          "ToNodeCategory": "DEPARTMENT",
          "EdgeCategory": "PEOPLE2DEPARTMENT",
          "Direction": "UP",
          "Label": "People to Department",
          "Description": "People to Department",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "People to Department"
            }
          }
        }
      ]
    },
    "source": "2458996",
    "target": "2459152"
  },
  {
    "SetID": "6047049849384",
    "FromNodeSID": "2458996",
    "ToNodeSID": "2459154",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2459059",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458996",
          "ToNodeSID": "2459154",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "169Harrison Bloom",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "DEPARTMENT2PEOPLE",
          "Direction": "DOWN",
          "Label": "Department to People",
          "Description": "Department to People",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "Department to People"
            }
          }
        },
        {
          "SID": "2459226",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2459154",
          "ToNodeSID": "2458996",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "80",
          "ToNodeCategory": "DEPARTMENT",
          "EdgeCategory": "PEOPLE2DEPARTMENT",
          "Direction": "UP",
          "Label": "People to Department",
          "Description": "People to Department",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "People to Department"
            }
          }
        }
      ]
    },
    "source": "2458996",
    "target": "2459154"
  },
  {
    "SetID": "6047054767376",
    "FromNodeSID": "2458996",
    "ToNodeSID": "2459156",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2459073",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458996",
          "ToNodeSID": "2459156",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "168Lisa Ozer",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "DEPARTMENT2PEOPLE",
          "Direction": "DOWN",
          "Label": "Department to People",
          "Description": "Department to People",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "Department to People"
            }
          }
        },
        {
          "SID": "2459242",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2459156",
          "ToNodeSID": "2458996",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "80",
          "ToNodeCategory": "DEPARTMENT",
          "EdgeCategory": "PEOPLE2DEPARTMENT",
          "Direction": "UP",
          "Label": "People to Department",
          "Description": "People to Department",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "People to Department"
            }
          }
        }
      ]
    },
    "source": "2458996",
    "target": "2459156"
  },
  {
    "SetID": "6047071980348",
    "FromNodeSID": "2458996",
    "ToNodeSID": "2459163",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2459023",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458996",
          "ToNodeSID": "2459163",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "155Oliver Tuvault",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "DEPARTMENT2PEOPLE",
          "Direction": "DOWN",
          "Label": "Department to People",
          "Description": "Department to People",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "Department to People"
            }
          }
        },
        {
          "SID": "2459262",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2459163",
          "ToNodeSID": "2458996",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "80",
          "ToNodeCategory": "DEPARTMENT",
          "EdgeCategory": "PEOPLE2DEPARTMENT",
          "Direction": "UP",
          "Label": "People to Department",
          "Description": "People to Department",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "People to Department"
            }
          }
        }
      ]
    },
    "source": "2458996",
    "target": "2459163"
  },
  {
    "SetID": "6047086734324",
    "FromNodeSID": "2458996",
    "ToNodeSID": "2459169",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2459047",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458996",
          "ToNodeSID": "2459169",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "152Peter Hall",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "DEPARTMENT2PEOPLE",
          "Direction": "DOWN",
          "Label": "Department to People",
          "Description": "Department to People",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "Department to People"
            }
          }
        },
        {
          "SID": "2459230",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2459169",
          "ToNodeSID": "2458996",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "80",
          "ToNodeCategory": "DEPARTMENT",
          "EdgeCategory": "PEOPLE2DEPARTMENT",
          "Direction": "UP",
          "Label": "People to Department",
          "Description": "People to Department",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "People to Department"
            }
          }
        }
      ]
    },
    "source": "2458996",
    "target": "2459169"
  },
  {
    "SetID": "6047091652316",
    "FromNodeSID": "2458996",
    "ToNodeSID": "2459171",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2459053",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458996",
          "ToNodeSID": "2459171",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "151David Bernstein",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "DEPARTMENT2PEOPLE",
          "Direction": "DOWN",
          "Label": "Department to People",
          "Description": "Department to People",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "Department to People"
            }
          }
        },
        {
          "SID": "2459266",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2459171",
          "ToNodeSID": "2458996",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "80",
          "ToNodeCategory": "DEPARTMENT",
          "EdgeCategory": "PEOPLE2DEPARTMENT",
          "Direction": "UP",
          "Label": "People to Department",
          "Description": "People to Department",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "People to Department"
            }
          }
        }
      ]
    },
    "source": "2458996",
    "target": "2459171"
  },
  {
    "SetID": "6047096570308",
    "FromNodeSID": "2458996",
    "ToNodeSID": "2459173",
    "NumberInSet": "2",
    "EdgesInSet": {
      "Edge": [
        {
          "SID": "2459061",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2458996",
          "ToNodeSID": "2459173",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "150Peter Tucker",
          "ToNodeCategory": "PEOPLE",
          "EdgeCategory": "DEPARTMENT2PEOPLE",
          "Direction": "DOWN",
          "Label": "Department to People",
          "Description": "Department to People",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "Department to People"
            }
          }
        },
        {
          "SID": "2459270",
          "NetworkSID": "2458250",
          "NetworkLayerSID": "2458271",
          "FromNodeSID": "2459173",
          "ToNodeSID": "2458996",
          "FromLayerSID": "",
          "ToLayerSID": "",
          "ToNodeType": "NODE",
          "ToNodeKey": "80",
          "ToNodeCategory": "DEPARTMENT",
          "EdgeCategory": "PEOPLE2DEPARTMENT",
          "Direction": "UP",
          "Label": "People to Department",
          "Description": "People to Department",
          "ValidFrom": "",
          "ValidTo": "",
          "Priority": "FutureUse",
          "DisplayProperties": {
            "LineWeightOverride": "FutureUse",
            "LineTypeOverride": "FutureUse",
            "LineColourOverride": "FutureUse"
          },
          "Attributes": {
            "Attribute": {
              "Name": "LABEL",
              "Value": "People to Department"
            }
          }
        }
      ]
    },
    "source": "2458996",
    "target": "2459173"
  }
]
		}
	}
};