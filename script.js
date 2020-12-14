// nodes.js
const ExampleNode = nodes.NetworkNodes.Nodes.Node[9];
console.log(ExampleNode);
for (const [key, value] of Object.entries(ExampleNode)) {
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
}

//document.querySelector(".example-node");


nodes.NetworkNodes.Nodes.Node.forEach((node, index) => {
  console.log(index, node)
  let nodeRow = `
    <tr>
      <td>${index}</td>
      <td>${node.Label}</td>
      <td>${node.SID}</td>
      <td>${node.NodeID}</td>
      <td>${node.NodeType}</td>
      <td>${node.SubNodeID}<img src="assets/${node.SubNodeID}.png" alt=""></td>
    </tr>
  `;
	document.querySelector(".allNodes table tbody").insertAdjacentHTML("beforeend", nodeRow);
});

let nodesArray = nodes.NetworkNodes.Nodes.Node;


edges.NetworkEdges.EdgeSets.EdgeSet.forEach((line, index) => {
  console.log(index, line)
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