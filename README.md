# Tic-Tac-Toe
Simple library to play Tic-Tac-Toe game using pre-defined winning situations. No AI or auto-detection on run time, CPU Mode available as well as 2 player mode. CPU mode is random play and not AI based


# Sample Game Play 
## vs CPU Mode
    Let's Play Tic-Tac-Toe
    Single Player (default) or Double Player (S/D):
    Select Player 1's Symbol (X/O):

                    | 0 | 1 | 2 |   |   |   |   |
                    -------------
                    | 3 | 4 | 5 |   |   |   |   |
                    -------------
                    | 6 | 7 | 8 |   |   |   |   |

    Player 1, Your Move: 0
    Player 1 played X at position 0
    Player 2 (CPU) played O at position 8

                    | 0 | 1 | 2 |   | X |   |   |
                    -------------
                    | 3 | 4 | 5 |   |   |   |   |
                    -------------
                    | 6 | 7 | 8 |   |   |   | O |

    Player 1, Your Move: 4
    Player 1 played X at position 4
    Player 2 (CPU) played O at position 3

                    | 0 | 1 | 2 |   | X |   |   |
                    -------------
                    | 3 | 4 | 5 |   | O | X |   |
                    -------------
                    | 6 | 7 | 8 |   |   |   | O |

    Player 1, Your Move: 1
    Player 1 played X at position 1
    Player 2 (CPU) played O at position 5

                    | 0 | 1 | 2 |   | X | X |   |
                    -------------
                    | 3 | 4 | 5 |   | O | X | O |
                    -------------
                    | 6 | 7 | 8 |   |   |   | O |

    Player 1, Your Move: 2
    Player 1 played X at position 2

                    | X | X | X |
                    -------------
                    | O | X | O |
                    -------------
                    |   |   | O |

    { result: 'winner',
    details: { player: 1, token: 'X', position: [ 0, 1, 2 ] } }

## Two Player Mode

    Let's Play Tic-Tac-Toe
    Single Player (default) or Double Player (S/D): d
    Select Player 1's Symbol (X/O): o

                    | 0 | 1 | 2 |   |   |   |   |
                    -------------
                    | 3 | 4 | 5 |   |   |   |   |
                    -------------
                    | 6 | 7 | 8 |   |   |   |   |

    Player 1, Your Move: 0
    Player 1 played O at position 0

                    | 0 | 1 | 2 |   | O |   |   |
                    -------------
                    | 3 | 4 | 5 |   |   |   |   |
                    -------------
                    | 6 | 7 | 8 |   |   |   |   |

    Player 2, Your Move: 1
    Player 2 played X at position 1

                    | 0 | 1 | 2 |   | O | X |   |
                    -------------
                    | 3 | 4 | 5 |   |   |   |   |
                    -------------
                    | 6 | 7 | 8 |   |   |   |   |

    Player 1, Your Move: 7
    Player 1 played O at position 7

                    | 0 | 1 | 2 |   | O | X |   |
                    -------------
                    | 3 | 4 | 5 |   |   |   |   |
                    -------------
                    | 6 | 7 | 8 |   |   | O |   |

    Player 2, Your Move: 4
    Player 2 played X at position 4

                    | 0 | 1 | 2 |   | O | X |   |
                    -------------
                    | 3 | 4 | 5 |   |   | X |   |
                    -------------
                    | 6 | 7 | 8 |   |   | O |   |

    Player 1, Your Move: 6
    Player 1 played O at position 6

                    | 0 | 1 | 2 |   | O | X |   |
                    -------------
                    | 3 | 4 | 5 |   |   | X |   |
                    -------------
                    | 6 | 7 | 8 |   | O | O |   |

    Player 2, Your Move: 4
    ---- INVALID MOVE ----

                    | 0 | 1 | 2 |   | O | X |   |
                    -------------
                    | 3 | 4 | 5 |   |   | X |   |
                    -------------
                    | 6 | 7 | 8 |   | O | O |   |

    Player 2, Your Move: 7
    ---- INVALID MOVE ----

                    | 0 | 1 | 2 |   | O | X |   |
                    -------------
                    | 3 | 4 | 5 |   |   | X |   |
                    -------------
                    | 6 | 7 | 8 |   | O | O |   |

    Player 2, Your Move: 3
    Player 2 played X at position 3

                    | 0 | 1 | 2 |   | O | X |   |
                    -------------
                    | 3 | 4 | 5 |   | X | X |   |
                    -------------
                    | 6 | 7 | 8 |   | O | O |   |

    Player 1, Your Move: 6
    ---- INVALID MOVE ----

                    | 0 | 1 | 2 |   | O | X |   |
                    -------------
                    | 3 | 4 | 5 |   | X | X |   |
                    -------------
                    | 6 | 7 | 8 |   | O | O |   |

    Player 1, Your Move: 8
    Player 1 played O at position 8

                    | O | X |   |
                    -------------
                    | X | X |   |
                    -------------
                    | O | O | O |

    { result: 'winner',
    details: { player: 1, token: 'O', position: [ 6, 7, 8 ] } }

