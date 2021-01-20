// nodes.js
const ExampleNode = nodes.NetworkNodes.Nodes.Node[9];
// the example node
/*for (const [key, value] of Object.entries(ExampleNode)) {
  document.querySelector(".example-node").insertAdjacentHTML("beforeend", `<p><strong>${key}:</strong> ${value}</p>`)
  if (key === "DisplayProperties") {
    for (const [nestedKey, nestedValue] of Object.entries(value)) {
      document.querySelector(".example-node").insertAdjacentHTML("beforeend", `<p style="margin-left: 100px;"><strong>${nestedKey}:</strong>${nestedValue}</p>`)
    }
   }
  if (key === "Attributes") {
    value.Attribute.forEach((attr) => {
      document.querySelector(".example-node").insertAdjacentHTML("beforeend", `<p style="margin-left: 100px;"><strong>${attr.Name}:</strong> ${attr.Value}</p>`)
    })
  }
}*/

//document.querySelector(".example-node");


nodes.NetworkNodes.Nodes.Node.forEach((node, index) => {
  console.log(index, node)
  let nodeRow = `
    <tr class="nodeRow">
      <td>${index}</td>
      <td>${node.Label}</td>
      <td class="nodeSID">${node.SID}</td>
      <!--<td>${node.NodeID}</td>-->
      <!--<td>${node.NodeType}</td>-->
      <td>${node.SubNodeID}<img src="assets/${node.SubNodeID}.png" alt=""></td>
      <td>${node.SentencedFor ? node.SentencedFor : "nee"}</td>
      <td>${node.Victim ? "ja" : "nee"}</td>
      <td>${node.QuickPossessions ? "ja" : "nee"}</td>
      <td>${node.ExpensivePossessions}</td>
      <td>${node.TownshipRelation ? "ja" : "nee"}</td>
      <td>${node.Authority ? node.AuthorityOrganization : "nee"}</td>
      <!--<td>Mogelijk witwas bedrijf: <input type="checkbox"></td>
      <td>Crimineel: <input type="checkbox" name="criminal"></td>
      <td>Slachtoffer: <input type="checkbox" name="victim"></td>
      <td>Meerdere woon/werk adressen: <input type="checkbox" name="multipleAddress"></td>
      <td>Buitenlands adres: <input type="checkbox" name="foreignAddress"></td>
      <td>Snel wisselende bezittingen: <input type="checkbox" name="quickAddress"></td>
      <td>Aantal dure spullen: <input type="number" name="expensivePossessions"></td>
      <td>Openbaar gezag tegengegaan: <input type="text" name="authority"></td>--?
    </tr>
  `;
	document.querySelector(".allNodes table tbody").insertAdjacentHTML("beforeend", nodeRow);
});

const nonProf = ["SoccerClub", "EnvironmentOrganization", "HealthOrganization", "ArtOrganization"];
const crimes = ["Murder", "Arson", "Theft", "DrugSmuggling", "GunPossession", "Abuse", "TaxTheft", "MoneyLaundering", "Threat", "Cybercrime", "CarTheft"];

const allNodesArray = nodes.NetworkNodes.Nodes.Node;
console.log(nodes);

function randomBoolean(prob) {
  return Math.random() < prob;
}

let newNodesArray = [];

document.querySelector(".saveNodes").addEventListener("click", () => {
  allNodesArray.forEach((node) => {
    if (node.NodeID === "PEOPLE") {
      node.CriminalHistory = randomBoolean(.5);
      if (node.CriminalHistory) {
        node.SentencedFor = crimes[Math.floor(Math.random() * crimes.length)];
      }
      node.Victim = randomBoolean(.5);
      node.QuickPossessions = randomBoolean(.5);
      node.ExpensivePossessions = Math.floor(Math.random() * 11);
      node.Authority = randomBoolean(.5);
      if (node.Authority) {
        node.AuthorityOrganization = nonProf[Math.floor(Math.random() * nonProf.length)];
      }
      node.TownshipRelation = randomBoolean(.5);
    } else if (node.NodeID === "DEPARTMENT") {
      node.PossibleMoneyLaundering = randomBoolean(.5);
    }
    node.id = node.SID;
    node.name = node.Label;
    //console.log(node);
    newNodesArray.push(node);
  })
  console.log(newNodesArray)
  let allRows = document.querySelectorAll(".nodeRow");
/*  allRows.forEach((row) => {
    let nodeSid = row.querySelector(`.nodeSID`).innerText;
    //console.log(nodeSid);
    let chosenNode = nodes.NetworkNodes.Nodes.Node.find(obj => {
      return obj.SID === nodeSid;
    })
    chosenNode.Criminal = row.querySelector(`input[name="criminal"]`).checked;
    chosenNode.Victim = row.querySelector(`input[name="victim"]`).checked;
    chosenNode.MultipleAddress = row.querySelector(`input[name="multipleAddress"]`).checked;
    chosenNode.ForeignAddress = row.querySelector(`input[name="foreignAddress"]`).checked;
    chosenNode.QuickAddress = row.querySelector(`input[name="quickAddress"]`).checked;
    chosenNode.ExpensivePossessions = row.querySelector(`input[name="expensivePossessions"]`).value;
    chosenNode.Authority = row.querySelector(`input[name="authority"]`).value;
    console.log(chosenNode);
  })*/
})

document.querySelectorAll(".saveNode").forEach((btn) => {
  btn.addEventListener("click", () => {
    //console.log(btn.parentElement.parentElement.querySelector(`input[name="victim"]`));
    let parentRow = btn.parentElement.parentElement;
    let nodeSid = btn.parentElement.parentElement.querySelector(`.nodeSID`).innerText;
    console.log(nodeSid);
    let chosenNode = nodes.NetworkNodes.Nodes.Node.find(obj => {
      return obj.SID === nodeSid;
    })
    chosenNode.Criminal = parentRow.querySelector(`input[name="criminal"]`).checked;
    console.log(chosenNode);
  })
})

let nodesArray = nodes.NetworkNodes.Nodes.Node;

const egdesArray = [];
edges.NetworkEdges.EdgeSets.EdgeSet.forEach((line, index) => {
  //console.log(index, line)
  if (Array.isArray(line.EdgesInSet.Edge)) {
    var fromNodeObj = nodesArray.find((obj) => {
      return obj.SID === line.EdgesInSet.Edge[0].FromNodeSID
    });
    var fromNodeLabel = fromNodeObj.Label;
    var fromNodeIcon = fromNodeObj.SubNodeID;

    var toNodeObj = nodesArray.find((obj) => {
      return obj.SID === line.EdgesInSet.Edge[0].ToNodeSID
    });
    var toNodeLabel = toNodeObj.Label;
    var toNodeIcon = toNodeObj.SubNodeID;


    var SecondFromNodeObj = nodesArray.find((obj) => {
      return obj.SID === line.EdgesInSet.Edge[1].FromNodeSID
    });
    var SecondFromNodeLabel = SecondFromNodeObj.Label;
    var SecondFromNodeIcon = SecondFromNodeObj.SubNodeID;

    var SecondToNodeObj = nodesArray.find((obj) => {
      return obj.SID === line.EdgesInSet.Edge[1].ToNodeSID
    });
    var SecondToNodeLabel = SecondToNodeObj.Label;
    var SecondToNodeIcon = SecondToNodeObj.SubNodeID;

    var firstConnection = line.EdgesInSet.Edge[0].Label;

    var secondConnection = line.EdgesInSet.Edge[1].Label;
  } else {
    var fromNodeObj = nodesArray.find((obj) => {
      return obj.SID === line.EdgesInSet.Edge.FromNodeSID
    });
    var fromNodeLabel = fromNodeObj.Label;
    var fromNodeIcon = fromNodeObj.SubNodeID;

    var toNodeObj = nodesArray.find((obj) => {
      return obj.SID === line.EdgesInSet.Edge.ToNodeSID
    });
    var toNodeLabel = toNodeObj.Label;
    var toNodeIcon = toNodeObj.SubNodeID;

    var firstConnection = line.EdgesInSet.Edge.Label;
  }

  line.source = line.FromNodeSID;
  line.target = line.ToNodeSID;
  console.log(index, line);
  egdesArray.push(line);
  let lineHtml = `<p>${fromNodeLabel} ---> ${toNodeLabel}</p>`;
  let tableRowHtml = `
    <tr>
      <td>${index}</td>
      <td>${fromNodeLabel}<img src="assets/${fromNodeIcon}.png" alt=""><br><br>${SecondFromNodeLabel}<img src="assets/${SecondFromNodeIcon}.png" alt=""></td>
      <td>${toNodeLabel}<img src="assets/${toNodeIcon}.png" alt=""><br><br>${SecondToNodeLabel}<img src="assets/${SecondToNodeIcon}.png" alt=""></td>
      <td>${firstConnection}<br><br>${secondConnection}</td>
    </tr>
  `;
  //document.querySelector(".edges").insertAdjacentHTML("beforeend", lineHtml)
  document.querySelector(".network table tbody").insertAdjacentHTML("beforeend", tableRowHtml);
})
console.log(egdesArray);