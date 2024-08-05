/** What's a graph
 * A collection of nodes and connections between those nodes
 */

import { Queue } from "./Queues";

/** Uses
 * used massively in networking and locations
 *
 * checkout this Facebook social network (friends): https://ndres.me/post/facebook-graph-network/
 * A separate node is a friend that you have no mutual friends with. U met in a trip or smth.
 * A cluster is maybe your atmy network, or high school, or Muslim brotherhood <3
 *
 * And this is Wikipedia links graph: https://en.wikipedia.org/wiki/Force-directed_graph_drawing#/media/File:Visualization_of_wiki_structure_using_prefuse_visualization_package.png
 * You can see how Wiki pages are linked to other pages
 *
 * "people also watched.."
 * "You might also like"
 * "People you might know"
 * "Frequently bought with "
 */

/** Terms
 * Vertex: node
 * Edge: a connection between 2 nodes
 * Undirected graph: an edge between 2 nodes has no specific direction
 * Like Facebook friends. If A & B are friends, A can see B's content, and vise versa.
 * Directed graph
 * If A->B, I can traverse from A to B, but not the other way around
 * If Kaka follows me on Instagram, he can see my hot pics, but I can't as I don't follow him
 * Weighted graph: A graph that has information about the connection (edge)
 * Khaitan-->Hawaly (Unweighted)
 * Khaitan-10km->Hawaly (Weighted)
 *
 * Question: If Google Maps were honored to have u model their graph, how would it be in terms of weigh/direction?
 * 🐉: Weighted / directed as I need to know the distance (edges) / directions as some roads are one way
 */

/** Representation with code
 * 🐉: Vertexes and edges?
 * Yup, but how a vertex would connect to others? As left/right or next/prev wouldn't work here. A vertex can connect to many others
 */

/** Adjacency Matrix
 * A matrix is a 2-dimensional structure, rows and cols, usually represented as nested arrays
 * A-B-C-D-A
 *
 * _ A B C D
 * A 0 1 0 1
 * B 1 0 1 0
 * C 0 1 0 1
 * D 1 0 1 0
 */

/** Adjacency List
 * 0-1-2-3-4-0
 *
 * [
 *   [1, 4],
 *   [0, 2],
 *   [1, 3],
 *   [2, 4],
 * ]
 *
 * If u wanted to know what edges (connections) 3 has, u go to index 3 => [2, 4]
 *
 * 🐉: What if the vertixes are not numeric?
 * u can use a hash table
 * A-B-C-D-A
 * {
 *   A: ["B", "D"]
 *   B: ["A", "C"]
 *   C: ["B", "D"]
 *   D: ["A", "C"]
 * }
 */

/** Adjacency Matrix vs List
 * Adjacency List                                   Adjacency Matrix
 *
 * Can take up less space                           Takes up more space in
 * (in sparce graphs)                               sparse graphs
 *
 * Faster to iterate over                           Slower to iterate over
 * all the edges                                    all the edges (the matrix has empty spaces "0")
 *
 * Looking up a specific edge                       Faster, all you need to find A and B
 * is slower                                        1 => there is, 0 => no
 * e.g. Is there a conneciton between
 * A and B
 * You would have to find A, then
 * iterate over its array
 *
 * sparse:
 * Vertexes don't have many edges
 * In Adjacency Matrix, whem you add a new vertex, u add new row/column,
 * but the connections are represented with 0/1s,
 * so it might be useful if you have many edges, but if u have connection for each node (sparsed graph), don't use it
 *
 * Most real graphs are sparced. Check the WikiPedia vertexes, so we're going with Adjacency List
 */

export default class Graph {
  adjacencyList: { [key: string]: string[] };

  constructor() {
    this.adjacencyList = {};
  }

  addVertex(value: string) {
    this.adjacencyList[value] = [];
  }

  addEdge(vtx1: string, vtx2: string) {
    this.adjacencyList[vtx1].push(vtx2);
    this.adjacencyList[vtx2].push(vtx1);
  }

  removeEdge(vtx1: string, vtx2: string) {
    this.adjacencyList[vtx1] = this.adjacencyList[vtx1].filter(
      function excludeVtx2(vtx) {
        return vtx != vtx2;
      }
    );
    this.adjacencyList[vtx2] = this.adjacencyList[vtx2].filter(
      function excludeVtx1(vtx) {
        return vtx != vtx1;
      }
    );
  }

  removeVertex(vtx: string) {
    for (const key of Object.keys(this.adjacencyList)) {
      this.removeEdge(key, vtx);
    }
    delete this.adjacencyList[vtx];
  }

  /**
   *
   * @param vtx a starting node
   * @param visited an object to store visited vertixes
   * @param result All the traversed vertexes
   * @returns result
   */
  dfsRecursive(
    vtx: string,
    visited: { [key: string]: boolean } = {},
    result: string[] = []
  ) {
    // Mark vertex as visited
    visited[vtx] = true;
    // Add vertex to results array
    result.push(vtx);
    // Call "DFSRecursive" on all non-visited neighbors
    for (const neighbor of this.adjacencyList[vtx]) {
      if (!visited[neighbor]) {
        this.dfsRecursive(neighbor, visited, result);
      }
    }

    return result;
  }

  /**
   *     A
   *    / \
   *   B   F
   *   |   |
   *   C   E
   *    \ /
   *     D
   * In DFS, we need to start from A (not necessarily), and visit its siblings: B, F
   * We need to remember where we stopped using a queue
   */

  bfs(vtx: string) {
    var result = [];
    var visited: { [key: string]: boolean } = {};
    var queue = new Queue(vtx);

    while (queue.size > 0) {
      var removed = queue.dequeue();
      if (!visited[removed.value]) {
        visited[removed.value] = true;
        result.push(removed.value);
      }
      for (const neighbor of this.adjacencyList[removed.value]) {
        if (!visited[neighbor]) {
          queue.enqueue(neighbor);
        }
      }
    }

    return result;
  }
}

const graph1 = new Graph();
graph1.addVertex("A");
graph1.addVertex("B");
graph1.addVertex("C");
graph1.addVertex("D");
graph1.addVertex("E");
graph1.addVertex("F");
graph1.addEdge("A", "B");
graph1.addEdge("A", "C");
graph1.addEdge("B", "D");
graph1.addEdge("C", "E");
graph1.addEdge("D", "E");
graph1.addEdge("D", "F");
graph1.addEdge("E", "F");
console.log("🗺️", graph1, graph1.bfs("A"));

/** Graph traversal uses
 * Peer to peer networking
 * Web crawlers (following links)
 * Finding "closest" match / recommendations
 * Shortest path (GPS)
 */

/** Depth first traversal
 * In depth traversal, visiting cildren is prioritized than siblings.
 * In graphs, depth means moving away from the starting point
 * A>B>C>D
 * A>F
 * If the starting point here is A, we go to B, then C instead of F
 */

/** Breadth-First Traversal
 * Visit siblings first
 */
