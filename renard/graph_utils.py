from typing import List
import networkx as nx


def cumulative_graph(graphs: List[nx.Graph]) -> List[nx.Graph]:
    """Turns a dynamic graph to a cumulative graph, weight wise

    :param graphs: A list of sequential graphs
    """
    if len(graphs) == 0:
        return []

    cumulative_graph = []
    G = graphs[0]
    for H in graphs[1:]:
        # nx.compose creates a new graph with the nodes and edges
        # from both graphs...
        K = nx.compose(H, G)
        # ... however it doesn't sum the weights : we readjust
        # these here.
        for n1, n2 in K.edges:
            G_weight = G.edges.get([n1, n2], default={"weight": 0})["weight"]
            H_weight = H.edges.get([n1, n2], default={"weight": 0})["weight"]
            K.add_edge(n1, n2, weight=G_weight + H_weight)
        # finally, add the newly created graph to the sequence of
        # cumulative graphs
        cumulative_graph.append(K)

    return cumulative_graph
