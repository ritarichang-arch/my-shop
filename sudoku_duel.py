import random
import tkinter as tk
from tkinter import messagebox


PUZZLES = [
    {
        "name": "入門 01",
        "puzzle": "530070000600195000098000060800060003400803001700020006060000280000419005000080079",
        "solution": "534678912672195348198342567859761423426853791713924856961537284287419635345286179",
    },
    {
        "name": "標準 01",
        "puzzle": "000260701680070090190004500820100040004602900050003028009300074040050036703018000",
        "solution": "435269781682571493197834562826195347374682915951743628519326874248957136763418259",
    },
    {
        "name": "進階 01",
        "puzzle": "300000000005009000200504000020000700160000058704310600000890100000067080000005437",
        "solution": "341786925875239461296514873523648719169972358784351692657893142432167589918425437",
    },
]


PLAYERS = {
    1: {"name": "玩家 A", "color": "#276749", "masked": "#edf7ef"},
    2: {"name": "玩家 B", "color": "#9f580a", "masked": "#fff4e5"},
}


class SudokuDuel:
    def __init__(self, root):
        self.root = root
        self.root.title("雙人數獨對戰")
        self.root.geometry("1180x820")
        self.root.minsize(980, 720)

        self.puzzle_index = 0
        self.active_player = 1
        self.selected_number = "1"
        self.notes = []

        self.player_boards = {
            1: [""] * 81,
            2: [""] * 81,
        }
        self.cells = {1: [], 2: []}
        self.score_labels = {}
        self.status_var = tk.StringVar()
        self.number_buttons = []

        self.load_puzzle(0)
        self.build_ui()
        self.render_all()

    @property
    def puzzle(self):
        return PUZZLES[self.puzzle_index]["puzzle"]

    @property
    def solution(self):
        return PUZZLES[self.puzzle_index]["solution"]

    @property
    def puzzle_name(self):
        return PUZZLES[self.puzzle_index]["name"]

    def load_puzzle(self, index=None):
        if index is None:
            index = random.randrange(len(PUZZLES))
        self.puzzle_index = index
        self.player_boards = {
            1: [""] * 81,
            2: [""] * 81,
        }
        self.notes = []

    def build_ui(self):
        self.root.configure(bg="#f5f0e8")

        header = tk.Frame(self.root, bg="#17202a", padx=24, pady=16)
        header.pack(fill="x")

        title_block = tk.Frame(header, bg="#17202a")
        title_block.pack(side="left")

        tk.Label(
            title_block,
            text="雙人數獨對戰",
            bg="#17202a",
            fg="#ffffff",
            font=("Arial", 24, "bold"),
        ).pack(anchor="w")
        tk.Label(
            title_block,
            text="同一題庫、同一盤面。你看得到自己填的數字，但對手填入會變成 *。",
            bg="#17202a",
            fg="#cbd5e1",
            font=("Arial", 12),
        ).pack(anchor="w", pady=(4, 0))

        controls = tk.Frame(header, bg="#17202a")
        controls.pack(side="right")

        tk.Button(
            controls,
            text="換題",
            command=self.next_puzzle,
            bg="#f59e0b",
            fg="#17202a",
            activebackground="#fbbf24",
            font=("Arial", 12, "bold"),
            relief="flat",
            padx=16,
            pady=10,
        ).pack(side="left", padx=5)

        tk.Button(
            controls,
            text="重新開始",
            command=self.restart_puzzle,
            bg="#ffffff",
            fg="#17202a",
            activebackground="#e2e8f0",
            font=("Arial", 12, "bold"),
            relief="flat",
            padx=16,
            pady=10,
        ).pack(side="left", padx=5)

        main = tk.Frame(self.root, bg="#f5f0e8", padx=24, pady=20)
        main.pack(fill="both", expand=True)

        info = tk.Frame(main, bg="#f5f0e8")
        info.pack(fill="x", pady=(0, 16))

        self.status_label = tk.Label(
            info,
            textvariable=self.status_var,
            bg="#f5f0e8",
            fg="#17202a",
            font=("Arial", 14, "bold"),
        )
        self.status_label.pack(side="left")

        keypad = tk.Frame(info, bg="#f5f0e8")
        keypad.pack(side="right")

        for number in range(1, 10):
            button = tk.Button(
                keypad,
                text=str(number),
                command=lambda value=str(number): self.pick_number(value),
                width=3,
                height=1,
                font=("Arial", 13, "bold"),
                relief="flat",
                bg="#ffffff",
                fg="#17202a",
            )
            button.pack(side="left", padx=3)
            self.number_buttons.append(button)

        tk.Button(
            keypad,
            text="清除",
            command=lambda: self.pick_number(""),
            font=("Arial", 12, "bold"),
            relief="flat",
            bg="#e2e8f0",
            fg="#17202a",
            padx=12,
        ).pack(side="left", padx=(10, 0))

        boards = tk.Frame(main, bg="#f5f0e8")
        boards.pack(fill="both", expand=True)

        self.create_player_panel(boards, 1).pack(side="left", fill="both", expand=True, padx=(0, 10))
        self.create_player_panel(boards, 2).pack(side="left", fill="both", expand=True, padx=(10, 0))

        footer = tk.Frame(self.root, bg="#f5f0e8", padx=24, pady=14)
        footer.pack(fill="x")
        tk.Label(
            footer,
            text="玩法：先選上方數字，再點自己的空格。題目給的數字不能改；猜錯會提示但仍可修正。",
            bg="#f5f0e8",
            fg="#475569",
            font=("Arial", 11),
        ).pack(anchor="w")

    def create_player_panel(self, parent, player):
        meta = PLAYERS[player]
        panel = tk.Frame(parent, bg="#ffffff", highlightthickness=1, highlightbackground="#d6d3c9")

        top = tk.Frame(panel, bg="#ffffff", padx=16, pady=12)
        top.pack(fill="x")

        tk.Label(
            top,
            text=meta["name"],
            bg="#ffffff",
            fg=meta["color"],
            font=("Arial", 17, "bold"),
        ).pack(side="left")

        self.score_labels[player] = tk.Label(
            top,
            text="0 / 81",
            bg="#ffffff",
            fg="#475569",
            font=("Arial", 12, "bold"),
        )
        self.score_labels[player].pack(side="right")

        board_wrap = tk.Frame(panel, bg="#ffffff", padx=16, pady=16)
        board_wrap.pack(fill="both", expand=True)

        board = tk.Frame(board_wrap, bg="#17202a", padx=3, pady=3)
        board.pack(expand=True)

        for row in range(9):
            board.rowconfigure(row, weight=1)
            board.columnconfigure(row, weight=1)

        for row in range(9):
            row_cells = []
            for col in range(9):
                index = row * 9 + col
                holder = tk.Frame(board, bg="#17202a", padx=1, pady=1)
                holder.grid(
                    row=row,
                    column=col,
                    sticky="nsew",
                    padx=(2 if col in (0, 3, 6) else 0, 2 if col == 8 else 0),
                    pady=(2 if row in (0, 3, 6) else 0, 2 if row == 8 else 0),
                )

                cell = tk.Button(
                    holder,
                    text="",
                    command=lambda p=player, i=index: self.place_number(p, i),
                    width=2,
                    height=1,
                    font=("Arial", 18, "bold"),
                    relief="flat",
                    bg="#ffffff",
                    fg="#17202a",
                    activebackground="#e2e8f0",
                )
                cell.pack(fill="both", expand=True)
                row_cells.append(cell)
            self.cells[player].extend(row_cells)

        return panel

    def pick_number(self, number):
        self.selected_number = number
        self.update_status()
        self.render_number_buttons()

    def place_number(self, player, index):
        if player != self.active_player:
            self.active_player = player
            self.update_status()

        if self.puzzle[index] != "0":
            self.flash_note("題目給的數字不能修改。")
            return

        self.player_boards[player][index] = self.selected_number
        if self.selected_number and self.selected_number != self.solution[index]:
            self.flash_note(f"{PLAYERS[player]['name']}：這格目前不是 {self.selected_number}，可以再修正。")
        else:
            self.notes = []

        self.render_all()
        self.check_winner(player)

    def visible_value_for(self, viewer, index):
        clue = self.puzzle[index]
        if clue != "0":
            return clue, "clue"

        own_value = self.player_boards[viewer][index]
        if own_value:
            return own_value, "own-correct" if own_value == self.solution[index] else "own-wrong"

        opponent = 2 if viewer == 1 else 1
        if self.player_boards[opponent][index]:
            return "*", "masked"

        return "", "empty"

    def render_all(self):
        for player in (1, 2):
            for index, cell in enumerate(self.cells[player]):
                value, state = self.visible_value_for(player, index)
                cell.configure(text=value, bg=self.cell_bg(player, index, state), fg=self.cell_fg(player, state))
            correct = sum(
                1
                for i, value in enumerate(self.player_boards[player])
                if value and value == self.solution[i]
            )
            clues = sum(1 for value in self.puzzle if value != "0")
            self.score_labels[player].configure(text=f"{correct + clues} / 81")

        self.update_status()
        self.render_number_buttons()

    def cell_bg(self, player, index, state):
        if state == "clue":
            return "#e5e7eb"
        if state == "masked":
            return PLAYERS[player]["masked"]
        if state == "own-correct":
            return "#dcfce7"
        if state == "own-wrong":
            return "#fee2e2"
        box_row = index // 27
        box_col = (index % 9) // 3
        return "#ffffff" if (box_row + box_col) % 2 == 0 else "#f8fafc"

    def cell_fg(self, player, state):
        if state == "clue":
            return "#0f172a"
        if state == "masked":
            return "#64748b"
        if state == "own-wrong":
            return "#b91c1c"
        return PLAYERS[player]["color"]

    def render_number_buttons(self):
        for button in self.number_buttons:
            active = button["text"] == self.selected_number
            button.configure(
                bg="#17202a" if active else "#ffffff",
                fg="#ffffff" if active else "#17202a",
            )

    def update_status(self):
        number_label = self.selected_number if self.selected_number else "清除"
        base = f"題目：{self.puzzle_name}｜目前操作：{PLAYERS[self.active_player]['name']}｜選取：{number_label}"
        if self.notes:
            base += f"｜{self.notes[-1]}"
        self.status_var.set(base)

    def flash_note(self, text):
        self.notes.append(text)
        self.update_status()

    def check_winner(self, player):
        player_values = self.player_boards[player]
        solved = all(
            self.puzzle[index] != "0" or player_values[index] == self.solution[index]
            for index in range(81)
        )
        if solved:
            messagebox.showinfo("遊戲結束", f"{PLAYERS[player]['name']} 完成數獨，獲勝！")

    def next_puzzle(self):
        self.load_puzzle((self.puzzle_index + 1) % len(PUZZLES))
        self.render_all()

    def restart_puzzle(self):
        self.load_puzzle(self.puzzle_index)
        self.render_all()


def main():
    root = tk.Tk()
    SudokuDuel(root)
    root.mainloop()


if __name__ == "__main__":
    main()
