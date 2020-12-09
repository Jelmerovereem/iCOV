// nodes.js
nodes.NetworkNodes.Nodes.Node.forEach(node => {
  let nodeRow = `
    <tr>
      <td>${node.Label}</td>
      <td>${node.NodeID}</td>
      <td>${node.NodeType}</td>
      <td>${node.SubNodeID}</td>
    </tr>
  `;
	document.querySelector(".allNodes table tbody").insertAdjacentHTML("beforeend", nodeRow);
});

console.log(anb)
anb.Chart.ChartItemCollection.ChartItem.forEach(ChartItem => {
  console.log(ChartItem)
  var iCOVNodeID = "";
  if (Array.isArray(ChartItem.AttributeCollection.Attribute)) {
    iCOVNodeID = ChartItem.AttributeCollection.Attribute.find(obj => obj._AttributeClassReference === "iCOV_node_id")._Value;
    if (iCOVNodeID === undefined) {
      iCOVNodeID = "Onbekend";
    }
  } else {
    iCOVNodeID = "Onbekend"
  }
  let ChartItemRow = `
    <tr>
      <td>${ChartItem._Label}</td>
      <td>${iCOVNodeID}</td>
      <td><img src="assets/${ChartItem.End.Entity.Icon.IconStyle._Type}.png" alt="">${ChartItem.End.Entity.Icon.IconStyle._Type}</td>
      <td></td>
    </tr>
  `;
  document.querySelector(".anb table tbody").insertAdjacentHTML("beforeend", ChartItemRow);
});