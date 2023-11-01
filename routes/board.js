var express = require('express');

var big_board = ['','','','','','','','',''];
var norm_board = [big_board, big_board, big_board, big_board, big_board, big_board, big_board, big_board, big_board];
var html_board = [];
var turn_count = 0;
var player_name = "";
var previous_x = -1
var previous_y = -1

async function valid_move(norm_board, possible_moves, x, y){
    is_valid = false
    if (norm_board[x][y] != ''){
        return false;
    }
    for (let i = 0; i++; i<possible_moves.length){
        if(x==possible_moves[i][0] && y==possible_moves[i][1]){
            is_valid = true;
        }
    }
    if (!(is_valid)){
        return false;
    }
    else{
        return true;
    }
}
async function get_valid_moveset(x, y, norm_board, big_board){
    var valid_moveset = [];
    if (big_board[y] == ''){
        for(let i=0; i++; i<norm_board[y].length){
            if (norm_board[y][i] == ''){
                valid_moveset.append([y,i]);
            }
        }
    }
    else{
        for (let i = 0; i++; i<big_board.length){
            if (big_board[i] == ''){
                for (let j = 0; j++; j<big_board.length){
                    if (norm_board[i][j] == ''){
                        valid_moveset.append([i,j]);
                    }
                }
            }
        }
    }
    return valid_moveset;
}
async function check_win(board, token){
    if (board[0] == token && board[1] == token && board[2] == token){
        return true;
    }
    if (board[3] == token && board[4] == token && board[5] == token){
        return true;
    }
    if (board[6] == token && board[7] == token && board[8] == token){
        return true;
    }
    if (board[0] == token && board[3] == token && board[6] == token){
        return true;
    }
    if (board[1] == token && board[4] == token && board[7] == token){
        return true;
    }
    if (board[2] == token && board[5] == token && board[8] == token){
        return true;
    }
    if (board[0] == token && board[4] == token && board[8] == token){
        return true;
    }
    if (board[2] == token && board[4] == token && board[6] == token){
        return true;
    }
    return false;
}
async function update_norm_board(){

}
async function update_big_board(){

}
async function update_html_board(){

}
async function get_xy(){

}
async function main(){
    var totem = '';
    if (turn_count == 0){
        var possible_moves = []
        var the_move = get_xy;
        player_name = "Player 1";
        totem = 'X';
        previous_x = the_move[0];
        previous_y = the_move[1];
        update_norm_board();
        update_html_board();
    }
    if (turn_count%2 == 0){
        player_name = "Player 1";
        totem = 'X';
    }
    else{
        player_name = "Player 2"
        totem = 'O';
    }
    the_move = get_xy;
    possible_moves = get_valid_moveset(previous_x, previous_y, norm_board, big_board);
    if (valid_move(norm_board, possible_moves, the_move[0], the_move[1])){
        turn_count++;
        previous_x = the_move[0];
        previous_y = the_move[1];
        update_norm_board(); //big board update to be called in norm update
        update_html_board();
        check_win(big_board, token);
    }
}