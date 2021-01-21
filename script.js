// d3 network graph
const graphMargin = {
    top: 10,
    right: 30,
    bottom: 30,
    left: 40
};

const width = 1920 - graphMargin.left - graphMargin.right;
const height = 800 - graphMargin.top - graphMargin.bottom;

const svg = d3.select("#networkGraph")
    .append("svg")
    .attr("width", width + graphMargin.left + graphMargin.right)
    .attr("height", height + graphMargin.top + graphMargin.bottom)
    .call(d3.zoom().on("zoom", function(event, d) {
        svg.attr("transform", event.transform)
    }))
    .append("g")
    .attr("transform",
        `translate(${graphMargin.left},${graphMargin.top})`)
    .attr("class", "everything");

const valueline = d3.line()
    .x(function(d) {
        return d[0]
    })
    .y(function(d) {
        return d[1]
    })
    .curve(d3.curveCatmullRomClosed)

const simulation = d3.forceSimulation()
    .force("charge", d3.forceManyBody().strength(-400))
    .force("link", d3.forceLink().id(d => d.id).distance(200))
    .force("center", d3.forceCenter(width / 2, height / 2))
    .force("x", d3.forceX())
    .force("y", d3.forceY())
    .on("tick", ticked);

const groups = svg.append("g").attr("class", "groups");

let link = svg.append("g")
    .attr("class", "link")
    .selectAll("line")
/*.data(edges.NetworkEdges.EdgeSets.EdgeSet)
.enter()
.append("line")
  .style("stroke", "#aaa")
  .attr("x1", function(d) { return d.source.x; })
  .attr("y1", function(d) { return d.source.y; })
  .attr("x2", function(d) { return d.target.x; })
  .attr("y2", function(d) { return d.target.y; });*/

let updatedNodes = nodes.NetworkNodes.Nodes.Node;
let updatedEdges = edges.NetworkEdges.EdgeSets.EdgeSet;

function calcAge(birthDate) {
    let today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age
}

const ownSymbols = {
    child: "M6.5 13C10.0898 13 13 10.0898 13 6.5C13 2.91016 10.0898 0 6.5 0C2.91016 0 0 2.91016 0 6.5C0 10.0898 2.91016 13 6.5 13ZM1.01018 7C1.01018 7 0.511108 1 6.5 1C12.4889 1 11.9898 7 11.9898 7H1.01018Z",
    victim: "M11.56 10.5806C12.4607 9.46484 13 8.04541 13 6.5C13 2.91016 10.0899 0 6.5 0C4.95462 0 3.5352 0.539062 2.41968 1.43994L11.56 10.5806ZM10.5691 11.5688C9.45527 12.4639 8.04019 13 6.5 13C2.91015 13 0 10.0898 0 6.5C0 4.95996 0.535698 3.54492 1.43092 2.43115L10.5691 11.5688Z",
    victimManager: "M13 6.5C13 8.04541 12.4607 9.46484 11.56 10.5806L8.61914 7.63965L9.84624 6.38477L6.38492 3L5.19572 4.21631L2.41968 1.43994C3.5352 0.539062 4.95462 0 6.5 0C10.0898 0 13 2.91016 13 6.5ZM4.21692 5.2168L1.43092 2.43115C0.535698 3.54492 0 4.95996 0 6.5C0 10.0898 2.91016 13 6.5 13C8.04019 13 9.45526 12.4639 10.5691 11.5688L7.64047 8.64062L6.46132 9.84619L3 6.46143L4.21692 5.2168Z",
    manager: "M6.5 13C10.0899 13 13 10.0898 13 6.5C13 2.91016 10.0899 0 6.5 0C2.91015 0 0 2.91016 0 6.5C0 10.0898 2.91015 13 6.5 13ZM6.40067 4.41406L8.43208 6.40088L6.4455 8.43213L4.41409 6.44531L6.40067 4.41406ZM6.38489 3L7.09984 3.69922L9.13126 5.68555L9.84621 6.38477L9.14703 7.1001L7.16046 9.13135L6.46129 9.84619L5.74634 9.14697L3.71492 7.16064L2.99997 6.46143L3.69914 5.74658L5.68571 3.71484L6.38489 3Z",
    employee: "M6.5 13C10.0898 13 13 10.0898 13 6.5C13 2.91016 10.0898 0 6.5 0C2.91016 0 0 2.91016 0 6.5C0 10.0898 2.91016 13 6.5 13ZM9 4H4V9H9V4Z",
    victimEmployee: "M11.0962 11.0962C9.91992 12.2725 8.29492 13 6.5 13C2.91016 13 0 10.0898 0 6.5C0 4.70508 0.727539 3.08008 1.90381 1.90381L4 4V9H9L11.0962 11.0962ZM11.9788 9.99902L9 7.02051V4H5.97969L3.00092 1.021C4.01103 0.374512 5.21175 0 6.5 0C10.0898 0 13 2.91016 13 6.5C13 7.78809 12.6252 8.98877 11.9788 9.99902Z"
}

function checkNode(d) {
    //console.log(d)
    if (d.NodeID === "DEPARTMENT") {
        return d3.symbol().type(d3.symbolSquare).size(120)()
    } else if (d.NodeID === "PEOPLE") {
        let birthDate = new Date(d.Attributes.Attribute[d.Attributes.Attribute.findIndex(obj => obj.Name === "DATE_OF_BIRTH")].Value);
        let age = calcAge(birthDate)
        if (age < 18) {
            return ownSymbols.child
        }
        if (d.Victim && d.SubNodeID === "MANAGER") {
            return ownSymbols.victimManager
        } else if (d.Victim && (d.SubNodeID === "SEN_FEMALE_EMPLOYEE" || d.SubNodeID === "YOUNG_FEMALE_EMPLOYEE" || d.SubNodeID === "YOUNG_MALE_EMPLOYEE" || d.SubNodeID === "SEN_MALE_EMPLOYEE")) {
            return ownSymbols.victimEmployee
        } else if (d.Victim) {
            return ownSymbols.victim
        } else if (d.SubNodeID === "MANAGER") {
            return ownSymbols.manager
        } else if (d.SubNodeID === "SEN_FEMALE_EMPLOYEE" || d.SubNodeID === "YOUNG_FEMALE_EMPLOYEE" || d.SubNodeID === "YOUNG_MALE_EMPLOYEE" || d.SubNodeID === "SEN_MALE_EMPLOYEE") {
            return ownSymbols.employee
        }
        return d3.symbol().type(d3.symbolCircle).size(120)()
    } else if (d.NodeID === "ADDRESS") {
        return d3.symbol().type(d3.symbolTriangle).size(120)()
    } else if (d.NodeID === "FLAG") {
        return d3.symbol().type(d3.symbolWye).size(120)()
    }
}

const susAmount = 3;

let node = svg.append("g")
    .attr("class", "node")
    .selectAll("path")
/*.data(nodes.NetworkNodes.Nodes.Node)
.enter()
.append("g")
  .attr("class", "groupNode")
.append("path")
  .attr("d", checkNode)
  .attr("transform", function(d){return `translate(${d.x}, ${d.y})`;})
  .attr("fill", (obj) => {
    if (obj.CriminalHistory) {
      return "#FFDD64"
    } else if (obj.PossibleMoneyLaundering) {
      return "#F75C03"
    } else {
      return "#C4C4C4"
    }
  })
  .attr("class", function(d) {
    let allClasses = "";
    d.CriminalHistory ? allClasses += " criminalNode" : "";
    d.QuickPossessions ? allClasses += " quickPos topExtra" : "";
    d.ExpensivePossessions > susAmount ? allClasses += " expensivePos topExtra" : "";
    d.Authority ? allClasses += " authority bottomExtra" : "";
    d.TownshipRelation ? allClasses += " township bottomExtra" : "";
    allClasses ? allClasses += " extra" : "";
    return allClasses
  })
  .attr("fill-rule", "evenodd")
  .attr("clip-rule", "evenodd")
  .on("click", openPerson)
  .on("mouseover", hoverPerson)
  .on("mouseout", hoverOutPerson)
  .call(d3.drag().on("start", dragStarted).on("drag", dragged).on("end", dragEnded))*/

/*invalidation.then(() => simulation.stop())*/

function updateChart(nodes, links) {
    const old = new Map(node.data().map(d => [d.id, d]));
    nodes = nodes.map(d => Object.assign(old.get(d.id) || {}, d));
    //links = links.map(d => Object.assign({}, d));

    let newLinks = [];
    links.forEach((link) => {
        let sourceSid = link.FromNodeSID;
        let sourceNode = nodes.find(obj => obj.SID === sourceSid);
        if (sourceNode) {
            link.source = sourceNode;
            link.source = sourceNode;
        }

        let targetSid = link.ToNodeSID;
        let targetNode = nodes.find(obj => obj.SID === targetSid);
        if (targetNode) {
            link.target = targetNode;
            link.target = targetNode;
        }
        newLinks.push(link);
    })

    node = node
        .data(nodes, d => d.id)
        .join(enter => enter.append("g")
            .attr("class", "groupNode")
            .append("path")
            .attr("d", checkNode)
            .attr("fill", (obj) => {
                if (obj.CriminalHistory) {
                    return "#FFDD64"
                } else if (obj.PossibleMoneyLaundering) {
                    return "#F75C03"
                } else {
                    return "#C4C4C4"
                }
            })
            .attr("class", function(d) {
                let allClasses = "singleNode";
                d.CriminalHistory ? allClasses += " criminalNode" : "";
                d.QuickPossessions ? allClasses += " quickPos topExtra" : "";
                d.ExpensivePossessions > susAmount ? allClasses += " expensivePos topExtra" : "";
                d.Authority ? allClasses += " authority bottomExtra" : "";
                d.TownshipRelation ? allClasses += " township bottomExtra" : "";
                allClasses ? allClasses += " extra" : "";
                return allClasses
            })
            .attr("fill-rule", "evenodd")
            .attr("clip-rule", "evenodd")
            .on("click", openPerson)
            .on("mouseover", hoverPerson)
            .on("mouseout", hoverOutPerson)
            .call(d3.drag().on("start", dragStarted).on("drag", dragged).on("end", dragEnded))
        )


    //console.log(links)
    link = link
        .data(newLinks, (d) => {
            return [d.source, d.target]
        })
        .join(enter => enter.append("line")
            .style("stroke", "#aaa"))

    addExtraContainers()
    addLabels()
    console.log(newLinks)
    simulation.nodes(nodes);
    simulation.force("link").links(newLinks);
    simulation.force("link", d3.forceLink(newLinks));
    simulation.alpha(1).restart()
}

updateChart(nodes.NetworkNodes.Nodes.Node, edges.NetworkEdges.EdgeSets.EdgeSet)

function addLabels() {
    d3.selectAll(".nodesLabel").remove()
    d3.selectAll(".extrasContainer")
        .append("text")
        .attr("class", "nodesLabel")
        .attr("fill", function(d, index, paths) {
            return paths[index].parentNode.previousSibling.getAttribute("fill")
        })
        .attr("font-size", "8px")
        .text(function(d) {
            if (d.NodeID === "PEOPLE") {
                let firstNameIndex = d.Attributes.Attribute.findIndex(obj => obj.Name === "FIRST_NAME");
                let firstLetter = d.Attributes.Attribute[firstNameIndex].Value.charAt(0);
                let lastNameIndex = d.Attributes.Attribute.findIndex(obj => obj.Name === "LAST_NAME");
                let lastName = d.Attributes.Attribute[lastNameIndex].Value;
                return `${firstLetter}. ${lastName}`;
            } else if (d.NodeID === "ADDRESS") {
                let postalCodeIndex = d.Attributes.Attribute.findIndex(obj => obj.Name === "POSTAL_CODE");
                let postalCode = d.Attributes.Attribute[postalCodeIndex].Value;
                return postalCode;
            } else {
                return d.Label;
            }
        })
}

function addExtraContainers() {
    d3.selectAll(".extrasContainer").remove()
    const extraContainers = d3.selectAll(".groupNode")
        .append("g")
        .attr("class", "extrasContainer")


    const extraSymbols = {
        topContainer: "M16.2304 0.267673C19.0699 0.840605 21.6511 2.30845 23.5953 4.45586C25.5396 6.60328 26.7444 9.31723 27.0332 12.1996L18.9435 13.01C18.828 11.8571 18.346 10.7715 17.5683 9.91255C16.7907 9.05358 15.7582 8.46645 14.6223 8.23727L16.2304 0.267673Z",
        bottomContainer: "M0.719025 17.9057C1.44363 20.0405 2.68942 21.9607 4.34351 23.4925C5.99761 25.0242 8.00774 26.1191 10.1918 26.6779L12.2069 18.8014C11.3333 18.5778 10.5292 18.1399 9.86761 17.5272C9.20597 16.9145 8.70766 16.1464 8.41781 15.2925L0.719025 17.9057Z",
        ExpensivePossessions: "M22.093 4.12402L22.4237 5.14175H23.4938L22.628 5.77073L22.9587 6.78846L22.093 6.15947L21.2273 6.78846L21.5579 5.77073L20.6922 5.14175H21.7623L22.093 4.12402Z",
        QuickPossessions: "M18.0312 2.13013L17.7823 1.90353L18.8527 1.76758L18.7282 2.69661L18.4793 2.51534L18.1557 2.80991L18.554 3.19512L17.8818 3.78427L18.1557 4.01086L17.0853 4.12416L17.2346 3.19512L17.4587 3.39906L17.8321 3.10448L17.384 2.69661L18.0312 2.13013Z",
        TownshipRelation: "M7.93196 22.6495L7.06979 22.3877V24.177L7.93196 24.7443L8.83723 24.177V22.3877L7.93196 22.6495Z",
        UnaccountableBalance: "M24.181 8.84361C24.1501 8.84985 24.1177 8.86286 24.0143 8.91047C23.9766 8.92784 23.9581 8.93872 23.9591 8.94298C23.9599 8.94649 23.9923 9.03978 24.0311 9.15026L24.1016 9.35115L24.143 9.33126C24.1938 9.30683 24.254 9.28611 24.3124 9.27291C24.3726 9.25932 24.5176 9.25812 24.5766 9.27073C24.6372 9.28371 24.7018 9.30525 24.7517 9.32913L24.7977 9.3511L24.8682 9.15024C24.9069 9.03977 24.9393 8.94645 24.9401 8.94287C24.9418 8.93532 24.7782 8.8591 24.7361 8.84779C24.6716 8.8305 24.5997 8.83501 24.5344 8.86048C24.4718 8.88488 24.4251 8.88522 24.3683 8.86169C24.3102 8.83763 24.2428 8.83113 24.181 8.84361ZM24.3548 9.40573C24.1876 9.43419 24.0151 9.5506 23.8733 9.73076C23.6324 10.0369 23.51 10.4862 23.5906 10.7686C23.6572 11.0019 23.8474 11.1361 24.1707 11.1777C24.3781 11.2045 24.6498 11.1977 24.8305 11.1613C24.8936 11.1486 24.9876 11.1169 25.0385 11.0912C25.2055 11.0069 25.3022 10.8676 25.327 10.6753C25.3619 10.4052 25.2505 10.0363 25.0521 9.76549C24.9043 9.56359 24.7242 9.4369 24.5406 9.40559C24.489 9.3968 24.4069 9.39686 24.3548 9.40573ZM24.4904 9.91579V9.95901L24.512 9.96228C24.5425 9.96691 24.6 9.98592 24.6412 10.0049L24.6763 10.0212L24.6439 10.0839C24.6261 10.1183 24.6099 10.1484 24.6078 10.1508C24.6055 10.1533 24.5952 10.1502 24.5824 10.1432C24.5585 10.1302 24.4982 10.1074 24.4877 10.1074C24.4822 10.1074 24.4812 10.1143 24.4823 10.145L24.4836 10.1826L24.5267 10.1972C24.601 10.2226 24.6397 10.2461 24.6627 10.28C24.6943 10.3267 24.6987 10.4029 24.6729 10.4583C24.6447 10.5189 24.5939 10.5518 24.5074 10.5656L24.4904 10.5683V10.6187V10.6691H24.4564H24.4224V10.6168V10.5644L24.3959 10.5614C24.3545 10.5566 24.2888 10.5372 24.2473 10.5175L24.2095 10.4995L24.2319 10.4511C24.2604 10.3892 24.277 10.356 24.2793 10.356C24.2804 10.356 24.2992 10.3652 24.3212 10.3764C24.3584 10.3952 24.415 10.4159 24.4297 10.4159C24.4346 10.4159 24.436 10.4076 24.436 10.3797V10.3434L24.3986 10.331C24.3184 10.3044 24.2707 10.2722 24.2492 10.2304C24.2341 10.2009 24.2322 10.1336 24.2454 10.094C24.2681 10.0256 24.3211 9.97946 24.3944 9.96409L24.4224 9.95821V9.91539V9.87257H24.4564H24.4904V9.91579ZM24.4179 10.1087C24.4087 10.1135 24.4065 10.118 24.4065 10.1326C24.4065 10.1481 24.4086 10.1519 24.4213 10.1594L24.436 10.1681V10.1354C24.436 10.1175 24.4345 10.1028 24.4326 10.1029C24.4307 10.1029 24.4241 10.1055 24.4179 10.1087ZM24.4813 10.3899C24.4813 10.4188 24.4815 10.4192 24.4928 10.417C24.5069 10.4143 24.5174 10.4 24.5143 10.3879C24.512 10.3788 24.4926 10.3606 24.4853 10.3606C24.4831 10.3606 24.4813 10.3738 24.4813 10.3899Z",
        Authority: "M4.82276 19.1909C4.76747 19.1305 4.70172 19.0825 4.62929 19.0497C4.55686 19.017 4.47918 19.0001 4.40071 19C4.25229 19 4.10929 19.0605 4.00003 19.1696C3.89077 19.0605 3.74776 19 3.59934 19C3.52078 19.0001 3.44301 19.017 3.37051 19.0499C3.29801 19.0827 3.23221 19.1308 3.17689 19.1913C2.94095 19.4485 2.94105 19.8507 3.17709 20.1068L4.00003 21L4.82296 20.1068C5.059 19.8507 5.0591 19.4485 4.82276 19.1909V19.1909Z"
    }

    extraContainers._groups[0].forEach((el) => {
        let nodePath = el.previousSibling;
        if (!nodePath) {
            el.parentNode.remove()
        } else {
            if (nodePath.classList.contains("extra")) {
                if (nodePath.classList.contains("topExtra")) {
                    d3.select(el)
                        .append("path")
                        .attr("d", extraSymbols.topContainer)
                        .attr("fill", "#45496A")
                }
                if (nodePath.classList.contains("bottomExtra")) {
                    d3.select(el)
                        .append("path")
                        .attr("d", extraSymbols.bottomContainer)
                        .attr("fill", "#45496A")
                }
                if (nodePath.classList.contains("quickPos")) {
                    d3.select(el)
                        .append("path")
                        .attr("d", extraSymbols.QuickPossessions)
                        .attr("fill", "#7AF5A7")
                    //.attr("transform", function(d){return `translate(${d.x}, ${d.y})`})
                }
                if (nodePath.classList.contains("expensivePos")) {
                    d3.select(el)
                        .append("path")
                        .attr("d", extraSymbols.ExpensivePossessions)
                        .attr("fill", "#7AF5A7")
                    //.attr("transform", function(d){return `translate(${d.x + 50}, ${d.y})`})
                }
                if (nodePath.classList.contains("authority")) {
                    d3.select(el)
                        .append("path")
                        .attr("d", extraSymbols.Authority)
                        .attr("fill", "#A68FEF")
                }
                if (nodePath.classList.contains("township")) {
                    d3.select(el)
                        .append("path")
                        .attr("d", extraSymbols.TownshipRelation)
                        .attr("fill", "#A68FEF")
                }
            }
        }
    })

}

function checkExtras(d, index, paths) {
    if (paths[index].parentNode.previousSibling.classList.contains("extra")) {

    }
}

function removeDuplicates(originalArray, prop) {
    let newArray = [];
    let lookupObject = {};

    for (let i in originalArray) {
        lookupObject[originalArray[i][prop]] = originalArray[i];
    }

    for (i in lookupObject) {
        newArray.push(lookupObject[i])
    }
    console.log(newArray)
    return newArray;
}

const allSwitches = document.querySelectorAll(".switch input");

allSwitches.forEach((switchInput) => {
    switchInput.addEventListener("change", function() {
      console.log(this.name)
        if (this.name === "criminal") {
            if (!this.checked) {
                updatedNodes = updatedNodes.filter((obj) => {
                    if (obj.NodeID === "PEOPLE") {
                        if (obj.CriminalHistory === false) {
                            return obj
                        }
                    } else {
                        return obj
                    }
                });
                let allCriminals = nodes.NetworkNodes.Nodes.Node.filter(obj => obj.CriminalHistory === true);
                let allCriminalSIDs = [];
                allCriminals.forEach((criminal) => {
                    allCriminalSIDs.push(criminal.SID)
                })
                updatedEdges = updatedEdges.filter((obj) => {
                    if (allCriminalSIDs.indexOf(obj.FromNodeSID && obj.ToNodeSID) == -1) {
                        return obj
                    }
                })
                console.log(updatedEdges)
                updateChart(updatedNodes, updatedEdges);
            } else if (this.checked) {
                let allCriminals = nodes.NetworkNodes.Nodes.Node.filter(obj => obj.CriminalHistory === true);
                allCriminals.forEach((criminal) => {
                    updatedNodes.push(criminal)
                })

                updatedNodes = Array.from(new Set(updatedNodes.map(a => a.SID)))
                    .map(SID => {
                        return updatedNodes.find(a => a.SID === SID)
                    })

                    /*updatedEdges*/

                updateChart(updatedNodes, edges.NetworkEdges.EdgeSets.EdgeSet)
            }
        }
        if (this.name === "person") {
          if (!this.checked) {
            updatedNodes = updatedNodes.filter((obj) => {
              if (obj.NodeID != "PEOPLE") {
                return obj
              }
            })

            let allPeople = nodes.NetworkNodes.Nodes.Node.filter(obj => obj.NodeID === "PEOPLE");
            let allPeopleSIDs = [];
            allPeople.forEach((people) => {
              allPeopleSIDs.push(people.SID)
            })
            console.log(allPeopleSIDs)
            updatedEdges = updatedEdges.filter((obj) => {
              if (allPeopleSIDs.indexOf(obj.FromNodeSID && obj.ToNodeSID) == -1) {
                        return obj
                    }
            })
            updateChart(updatedNodes, updatedEdges)
          } else if (this.checked) {
            let allPeople = nodes.NetworkNodes.Nodes.Node.filter(obj => obj.NodeID === "PEOPLE");
            allPeople.forEach((people) => {
              updatedNodes.push(people)
            })

            updatedNodes = Array.from(new Set(updatedNodes.map(a => a.SID)))
                    .map(SID => {
                        return updatedNodes.find(a => a.SID === SID)
                    })

                    updateChart(updatedNodes, edges.NetworkEdges.EdgeSets.EdgeSet)
          }
        }
    })
})


const groupIds = Array.from(
        new Set(nodes.NetworkNodes.Nodes.Node.map(function(n) {
            if (n.NodeID === "PEOPLE") {
                let departmentIdIndex = n.Attributes.Attribute.findIndex(obj => obj.Name === "DEPARTMENT_ID");
                if (n.Attributes.Attribute[departmentIdIndex] === undefined) {
                    return "20"
                } else {
                    return n.Attributes.Attribute[departmentIdIndex].Value;
                }
            } else {
                return "20"
            }
        }))).map(function(departmentId) {
        return {
            departmentId: departmentId,
            count: nodes.NetworkNodes.Nodes.Node.filter(function(n) {
                if (n.NodeID === "PEOPLE") {
                    let departmentIdIndex = n.Attributes.Attribute.findIndex(obj => obj.Name === "DEPARTMENT_ID");
                    if (n.Attributes.Attribute[departmentIdIndex] === undefined) {

                    } else {
                        return n.Attributes.Attribute[departmentIdIndex].Value == departmentId;
                    }
                }
            }).length
        };
    })
    .filter(function(department) {
        return department.count > 0;
    })
    .map(function(department) {
        return department.departmentId;
    });


const paths = groups.selectAll(".path_placeholder")
    .data(groupIds, function(d) {
        return d;
    })
    .enter()
    .append("g")
    .attr("class", "path_placeholder")
    .append("path")
    //.attr("stroke", "green")
    .attr("fill", "#313A7E")
    .attr("opacity", 0);

paths
    .transition()
    .duration(2000)
    .attr("opacity", 1)

groups.selectAll(".path_placeholder")
    .call(d3.drag()
        .on('start', group_dragstarted)
        .on('drag', group_dragged)
        .on('end', group_dragended)
    );

const personPopup = document.querySelector(".personPopup");
const d3personPopup = d3.select(".personPopup");
const d3personPopupWithContent = d3.selectAll(".personPopup, .personPopup *");

const nodeSizeRange = document.querySelector(".nodeSizeRange");
const sizeSpan = document.querySelector(".rangeNumber");

function changeNodeSize() {
    let scaleValue = this.value;
    sizeSpan.innerText = scaleValue;
    let nodesArray = svg.selectAll(".node path");
    nodesArray.attr("transform", function(d) {
        return `translate(${d.x}, ${d.y}) scale(${scaleValue})`
    });
}

nodeSizeRange.addEventListener("input", changeNodeSize);

function checkIcons(obj) {
    let icons = "";
    if (obj.QuickPossessions) {
        icons += `<img src="assets/quickpos (2).svg" alt="">`
    }
    if (obj.ExpensivePossessions > susAmount) {
        icons += `<img src="assets/expensivepos.svg" alt="">`;
    }
    if (obj.Authority) {
        icons += `<img src="assets/authority.svg" alt="">`;
    }
    if (obj.TownshipRelation) {
        icons += `<img src="assets/township.svg" alt="">`
    }
    return icons;
}

function checkSaved(SID) {
    const savedNodes = JSON.parse(localStorage.getItem("savedNodes"));
    if (savedNodes) {
        if (savedNodes.includes(SID)) {
            return `<a href="javascript:void(0)" data-SID="${SID}" data-saved="true" class="saveNode nodeIsSaved"><img src="assets/savedPin.svg">Opgeslagen</a>`
        } else {
            return `<a href="javascript:void(0)" data-SID="${SID}" data-saved="false" class="saveNode"><img src="assets/savePin.svg">Opslaan</a>`
        }
    } else {
        return `<a href="javascript:void(0)" data-SID="${SID}" data-saved="false" class="saveNode"><img src="assets/savePin.svg">Opslaan</a>`
    }
}

function checkDepartment(SID) {
    const nodeObj = getNodeObject(SID);
    const departmentIdIndex = nodeObj.Attributes.Attribute.findIndex(obj => obj.Name === "DEPARTMENT_ID");
    if (departmentIdIndex === -1) {
        return "Onbekend"
    }
    const departmentId = nodeObj.Attributes.Attribute[departmentIdIndex].Value;
    if (departmentId === "80.0000") {
        return "80 Sales"
    } else if (departmentId === "90.0000") {
        return "90 Executive"
    } else if (departmentId === "50.0000") {
        return "50 Shipping"
    }
}

function checkEmployees(SID) {
    const allEdges = edges.NetworkEdges.EdgeSets.EdgeSet;

    const result = allEdges.filter(el => el.FromNodeSID === SID || el.ToNodeSID === SID);
    let managerCount = 0;
    let employeeCount = 0;
    result.forEach(el => {
        if (el.EdgesInSet.Edge[0].EdgeCategory === "DEPARTMENT2PEOPLE") {
            const typeNode = getNodeObject(el.EdgesInSet.Edge[0].ToNodeSID).SubNodeID;
            typeNode === "MANAGER" ? managerCount++ : employeeCount++;
        }
        if (el.EdgesInSet.Edge[0].EdgeCategory === "PEOPLE2DEPARTMENT") {
            const typeNode = getNodeObject(el.EdgesInSet.Edge[0].FromNodeSID).SubNodeID;
            typeNode === "MANAGER" ? managerCount++ : employeeCount++;
        }
    })
    return `
    <tr>
      <td>Aantal managers:</td>
      <td>${managerCount}</td>
    </tr>
    <tr>
      <td>Aantal werknemers:</td>
      <td>${employeeCount}</td>
    </tr>
    `
}

function getAddressData(SID) {
    const nodeObj = getNodeObject(SID);
    const streetNameIndex = nodeObj.Attributes.Attribute.findIndex(obj => obj.Name === "STREET_ADDRESS");
    const postalCodeIndex = nodeObj.Attributes.Attribute.findIndex(obj => obj.Name === "POSTAL_CODE");
    const cityIndex = nodeObj.Attributes.Attribute.findIndex(obj => obj.Name === "CITY");
    const streetName = nodeObj.Attributes.Attribute[streetNameIndex].Value;
    const postalCode = nodeObj.Attributes.Attribute[postalCodeIndex].Value;
    const city = nodeObj.Attributes.Attribute[cityIndex].Value;

    return `
    <tr>
      <td>Straatnaam:</td>
      <td>${streetName}</td>
    </tr>
    <tr>
      <td>Postcode:</td>
      <td>${postalCode}</td>
    </tr>
    <tr>
      <td>Woonplaats:</td>
      <td>${city}</td>
    </tr>
  `
}

function openPerson(event, obj) {
    console.log(obj)
    personPopup.style.display = "block";

    function getColor() {
        if (obj.CriminalHistory) {
            return "#FFDD64"
        } else if (obj.PossibleMoneyLaundering) {
            return "#F75C03"
        } else {
            return "#C4C4C4"
        }
    }

    function getAddress() {
        let allEdges = edges.NetworkEdges.EdgeSets.EdgeSet;

        let results = allEdges.filter(el => el.FromNodeSID === obj.SID || el.ToNodeSID === obj.SID);
        let nextResults = results.filter(el => el.EdgesInSet.Edge.Label === "Home Address");
        if (nextResults.length) {
            let finalSource = nextResults.filter(el => el.source.NodeID === "ADDRESS")
            if (finalSource.length) {
                let finalfinalFilter = finalSource.filter((el) => {
                    let toDateIndex = el.source.Attributes.Attribute.findIndex(obj => obj.Name === "TO_DATE");
                    return el.source.Attributes.Attribute[toDateIndex] === undefined;
                })
                let streetNameIndex = finalfinalFilter[0].source.Attributes.Attribute.findIndex(obj => obj.Name === "STREET_ADDRESS");
                let postalCodeIndex = finalfinalFilter[0].source.Attributes.Attribute.findIndex(obj => obj.Name === "POSTAL_CODE");
                let cityIndex = finalfinalFilter[0].source.Attributes.Attribute.findIndex(obj => obj.Name === "CITY");
                return `
          <tr>
            <td>Straatnaam:</td>
            <td>${finalfinalFilter[0].source.Attributes.Attribute[streetNameIndex].Value}</td>
          </tr>
          <tr>
            <td>Postcode:</td>
            <td>${finalfinalFilter[0].source.Attributes.Attribute[postalCodeIndex].Value}</td>
          </tr>
          <tr>
            <td>Woonplaats:</td>
            <td>${finalfinalFilter[0].source.Attributes.Attribute[cityIndex].Value}</td>
          </tr>
        `
            }
            let finalTarget = nextResults.filter(el => el.target.NodeID === "ADDRESS")
            if (finalTarget.length) {
                let finalfinalFilter = finalTarget.filter((el) => {
                    let toDateIndex = el.target.Attributes.Attribute.findIndex(obj => obj.Name === "TO_DATE");
                    return el.target.Attributes.Attribute[toDateIndex] === undefined;
                })
                let streetNameIndex = finalfinalFilter[0].target.Attributes.Attribute.findIndex(obj => obj.Name === "STREET_ADDRESS");
                let postalCodeIndex = finalfinalFilter[0].target.Attributes.Attribute.findIndex(obj => obj.Name === "POSTAL_CODE");
                let cityIndex = finalfinalFilter[0].target.Attributes.Attribute.findIndex(obj => obj.Name === "CITY");
                return `
          <tr>
            <td>Straatnaam:</td>
            <td>${finalfinalFilter[0].target.Attributes.Attribute[streetNameIndex].Value}</td>
          </tr>
          <tr>
            <td>Postcode:</td>
            <td>${finalfinalFilter[0].target.Attributes.Attribute[postalCodeIndex].Value}</td>
          </tr>
          <tr>
            <td>Woonplaats:</td>
            <td>${finalfinalFilter[0].target.Attributes.Attribute[cityIndex].Value}</td>
          </tr>
        `
            }
        } else {
            return `
              <tr>
                <td>Straatnaam:</td>
                <td>Onbekend</td>
              </tr>
              <tr>
                <td>Postcode:</td>
                <td>Onbekend</td>
              </tr>
              <tr>
                <td>Woonplaats:</td>
                <td>Onbekend</td>
              </tr>
            `
        }
    }
    if (obj.NodeID === "PEOPLE") {
        personPopup.innerHTML = `
      <div class="detailTop">
        <div class="detailTopLeft">
          <h3 style="color: ${getColor()};">${obj.Label}</h3>
          <div class="detailExtras">${checkIcons(obj)}</div>
        </div>
        <div>
          <span class="closePopup">&times;</span>
        </div>
      </div>
      <div class="betweenBar">
        <div class="criminalSwitchContainer">(switch)<input type="checkbox" name="" id="">Crimineel verleden</div>
        <div class="saveContainer">${checkSaved(obj.SID)}</div>
      </div>
      <div class="personInfo">
        <div class="generalInfo">
          <table>
            <tr>
              <td>Gender:</td>
              <td>${obj.Attributes.Attribute[obj.Attributes.Attribute.findIndex(data => data.Name === "SEX")].Value === "FEMALE" ? "Vrouw" : "Man"}</td>
            </tr>
            <tr>
              <td>Voornaam:</td>
              <td>${obj.Attributes.Attribute[obj.Attributes.Attribute.findIndex(data => data.Name === "FIRST_NAME")].Value}</td>
            </tr>
            <tr>
              <td>Achternaam:</td>
              <td>${obj.Attributes.Attribute[obj.Attributes.Attribute.findIndex(data => data.Name === "LAST_NAME")].Value}</td>
            </tr>
            <tr>
              <td>Nationaliteit:</td>
              <td>Nederlands</td>
            </tr>
            <tr>
              <td>Geboortedatum:</td>
              <td>${obj.Attributes.Attribute[obj.Attributes.Attribute.findIndex(data => data.Name === "DATE_OF_BIRTH")].Value}</td>
            </tr>
            ${getAddress()}
          </table>
        </div>
        <div class="rightColumn">
          <div class="workInfo">
            <table>
              <tr>
                <td>Laatste functie:</td>
                <td>${obj.SubNodeID === "MANAGER" ? "Manager" : "Werknemer"}</td>
              </tr>
              <tr>
                <td>Bedrijfsnaam:</td>
                <td>${checkDepartment(obj.SID)}</td>
              </tr>
            </table>
          </div>
          <div class="criminalInfo">
          <table>
            <tr>
              <td>Veroordeeld voor:</td>
              <td>${obj.SentencedFor ? obj.SentencedFor : "n.v.t."}</td>
            </tr>
            <tr>
              <td>Datum:</td>
              <td>...</td>
            </tr>
          </table>
          </div>
        </div>
      </div>

      <div class="detailAccordionContainer">
        <a href="javascript:void(0)" class="detailAccordionTab">Gegevens</a>
        <div class="detailAccordionPanel">
          <p>Content</p>
        </div>
      </div>
      `;
    } else if (obj.NodeID === "DEPARTMENT") {
        personPopup.innerHTML = `
      <div class="detailTop">
        <div class="detailTopLeft">
          <h3 style="color: ${getColor()};">${obj.Label}</h3>
        </div>
        <div>
          <span class="closePopup">&times;</span>
        </div>
      </div>
      <div class="betweenBar">
        <div class="criminalSwitchContainer">(switch)<input type="checkbox" name="" id="">Verdacht bedrijf</div>
        <div class="saveContainer">${checkSaved(obj.SID)}</div>
      </div>
      <div class="personInfo">
        <div class="generalInfo">
          <table>
            ${getAddress()}
          </table>
        </div>
        <div class="rightColumn departmentRightColumn">
            <table>
            ${checkEmployees(obj.SID)}
            </table>
        </div>
      </div>
    `;
    } else if (obj.NodeID === "ADDRESS") {
        personPopup.innerHTML = `
      <div class="detailTop">
        <div>
          <h3 style="color: ${getColor()};">${obj.Label}</h3>
        </div>
        <div>
          <span class="closePopup">&times;</span>
        </div>
      </div>
      <div class="betweenBar">
        <div class="criminalSwitchContainer">(switch)<input type="checkbox" name="" id="">Verdacht adres</div>
        <div class="saveContainer">${checkSaved(obj.SID)}</div>
      </div>
      <div class="personInfo">
        <div class="generalInfo">
          <table>
            ${getAddressData(obj.SID)}
          </table>
        </div>
        <div class="rightColumn departmentRightColumn">
          <p>lol</p>
        </div>
      </div>
    `;
    }
    let detailAccordions = document.querySelectorAll(".detailAccordionTab");

    detailAccordions.forEach((accordion) => {
        accordion.addEventListener("click", function() {
            this.classList.toggle("activeAccordion");

            let panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        })
    })

    personPopup.style.left = `${(event.pageX)}px`;
    personPopup.style.top = `${(event.pageY + 10)}px`;
    personPopup.classList.add("focus");
    personPopup.style.opacity = "1";

    let saveNodeBtn = document.querySelector(".saveNode");
    saveNodeBtn.addEventListener("click", () => {
        let savedNodes = localStorage.getItem("savedNodes");
        if (!savedNodes) {
            localStorage.setItem("savedNodes", JSON.stringify([saveNodeBtn.dataset.sid]))
        } else {
            let savedNodesArray = JSON.parse(savedNodes);
            if (!savedNodesArray.includes(saveNodeBtn.dataset.sid)) {
                savedNodesArray.push(saveNodeBtn.dataset.sid);
                localStorage.setItem("savedNodes", JSON.stringify(savedNodesArray))
                saveNodeBtn.classList.add("nodeIsSaved");
                saveNodeBtn.innerHTML = `<img src="assets/savedPin.svg">Opgeslagen`;
            }
        }
        getSavedNodes()
    })
}

const hoverPopupContainer = document.querySelector(".hoverPopupContainer");
const hoverPopup = document.querySelector(".hoverPopup");

function hoverPerson(event, obj) {
    hoverPopupContainer.style.left = `${event.pageX + 10}px`;
    hoverPopupContainer.style.top = `${event.pageY - 10}px`;
    hoverPopup.innerHTML = `${obj.Label}`;
    //hoverPopup.style.left = `${event.pageX + 10}px`;
    //hoverPopup.style.top = `${event.pageY - 10}px`;
    hoverPopup.style.background = `${d3.select(event.target).attr("fill")}`;
    hoverPopup.classList.add("hoverPopupActive")
}

function hoverOutPerson() {
    hoverPopup.innerHTML = "";
    hoverPopup.style.left = "";
    hoverPopup.style.right = "";
    hoverPopup.style.background = "";
    hoverPopup.classList.remove("hoverPopupActive");
}

function getNodeObject(SID) {
    return nodes.NetworkNodes.Nodes.Node.find(obj => obj.SID === SID);
}

function getSavedNodes() {
    let savedNodes = localStorage.getItem("savedNodes");
    let savedNodesArray = JSON.parse(savedNodes);
    if (savedNodesArray) {
        document.querySelector(".savedCount").innerText = `(${savedNodesArray.length})`;
        let savedNodesHtml = ``;
        savedNodesArray.forEach((node) => {
            let nodeObj = getNodeObject(node);
            savedNodesHtml += `<p>${nodeObj.Label} ${checkIcons(nodeObj)} <a href="javascript:void(0)" data-SID="${node}" class="deleteSavedNode"><img src="assets/deleteSavedNode.svg"></a></p>`;
        })
        document.querySelector(".savedNodesPanel").innerHTML = savedNodesHtml;
        let deleteBtns = document.querySelectorAll(".deleteSavedNode");
        deleteBtns.forEach(btn => {
            btn.addEventListener("click", function() {
                let SID = this.dataset.sid;
                localStorage.setItem("savedNodes", JSON.stringify(savedNodesArray.filter(item => item != SID)));
                getSavedNodes()
            })
        })
    }
}

getSavedNodes()

function handleEventClick(event) {
    let element = event.target;
    if (element.classList.contains("closePopup")) {
        personPopup.style.opacity = "0";
        personPopup.style.display = "none";
    }
}

document.addEventListener("click", handleEventClick);

function dragStarted(event, d) {
    d3.select(this)
        .attr("stroke", "white")
        .attr("stroke-width", 1);
}

function dragged(event, d) {
    d3.select(this).attr("transform", `translate(${d.x = event.x}, ${d.y = event.y}) scale(${nodeSizeRange.value})`)
    link.filter(function(l) {
        return l.source === event.subject;
    }).attr("x1", d.x).attr("y1", d.y);
    link.filter(function(l) {
        return l.target === event.subject;
    }).attr("x2", d.x).attr("y2", d.y);
}

function dragEnded(event, d) {
    d3.select(this).attr("stroke", null)
}

function ticked() {
    link
        .attr("x1", function(d) {
            return d.source.x;
        })
        .attr("y1", function(d) {
            return d.source.y;
        })
        .attr("x2", function(d) {
            return d.target.x;
        })
        .attr("y2", function(d) {
            return d.target.y;
        });

    node
        .attr("transform", function(d) {
            return `translate(${d.x - 5}, ${d.y - 7}) scale(${nodeSizeRange.value})`;
        })

    /*d3.selectAll(".groupNode")
        .attr("transform", function(d){return `translate(${d.x}, ${d.y}) scale(${nodeSizeRange.value})`;})*/

    d3.selectAll(".nodesLabel")
        .attr("transform", function(d) {
            return `translate(${d.x - 15}, ${d.y + 25})`
        })

    d3.selectAll(".extrasContainer path")
        .attr("transform", function(d) {
            return `translate(${d.x - 13}, ${d.y - 14})`
        })

    updateGroups();
}

const polygonGenerator = function(groupId) {
    const node_coords = node
        .filter(function(n) {
            if (n.NodeID === "PEOPLE") {
                let departmentIdIndex = n.Attributes.Attribute.findIndex(obj => obj.Name === "DEPARTMENT_ID");
                if (n.Attributes.Attribute[departmentIdIndex] === undefined) {
                    return false
                } else {
                    return n.Attributes.Attribute[departmentIdIndex].Value == groupId;
                }
            } else {
                return false
            }
        })
        .data()
        .map(function(d) {
            return [d.x, d.y];
        });

    return d3.polygonHull(node_coords);
};

function updateGroups() {
    groupIds.forEach(function(groupId) {
        var path = paths.filter(function(d) {
                return d == groupId;
            })
            .attr("transform", "scale(1) translate(0,0)")
            .attr("d", function(d) {
                polygon = polygonGenerator(d);
                if (polygon != null) {
                    centroid = d3.polygonCentroid(polygon);
                    return valueline(
                        polygon.map(function(point) {
                            return [point[0] - centroid[0], point[1] - centroid[1]];
                        })
                    );
                }

            })
        d3.select(path.node().parentNode).attr('transform', 'translate(' + centroid[0] + ',' + (centroid[1]) + ') scale(' + 1.8 + ')');
    })
}

function group_dragstarted(dragevent, groupId) {
    if (!dragevent.active) {
        simulation.alphaTarget(0.3).restart();
    }
    d3.select(this).select("path").style("fill", "#1f2870");
}

function group_dragged(dragevent, groupId) {
    node
        .filter(function(n) {
            if (n.NodeID === "PEOPLE") {
                let departmentIdIndex = n.Attributes.Attribute.findIndex(obj => obj.Name === "DEPARTMENT_ID");
                if (n.Attributes.Attribute[departmentIdIndex] === undefined) {
                    return false
                } else {
                    return n.Attributes.Attribute[departmentIdIndex].Value == groupId;
                }
            } else {
                return false
            }
        })
        .each(function(d) {
            //console.log(event.subject, event.target)
            d.x += event.movementX;
            d.y += event.movementY;
            d3.select(this).attr("transform", `translate(${d.x += event.movementX}, ${d.y += event.movementY})`)
            link.filter(function(l) {
                return l.source === d;
            }).attr("x1", d.x += event.movementX).attr("y1", d.y += event.movementY);
            link.filter(function(l) {
                return l.target === d;
            }).attr("x2", d.x += event.movementX).attr("y2", d.y += event.movementY);
            //console.log(d.x, d.y)
        })
}

function group_dragended(dragevent, groupId) {
    if (!dragevent.active) {
        simulation.alphaTarget(0.3).restart();
    }
    d3.select(this).select("path").style("fill", "#313A7E");
}

// src = https://www.d3-graph-gallery.com/graph/network_basic.html


//Open & Close Legenda

const openCloseBtn = document.querySelector(".openLegenda");
const legendaSideBar = document.querySelector(".legendaSideBar");

function toggleLegenda() {
    legendaSideBar.classList.toggle("activeSideBar");
    openCloseBtn.querySelector(".openIcon").classList.toggle("activeIcon");
}

openCloseBtn.addEventListener("click", toggleLegenda);

//accordions
const accordions = document.querySelectorAll(".accordionTab");

accordions.forEach((accordion) => {
    accordion.addEventListener("click", function() {
        this.classList.toggle("activeAccordion");

        let panel = this.nextElementSibling;
        panel.classList.toggle("activePanel");
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    })
})