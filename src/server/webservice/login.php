<?php

/*
 * Return the user identifier for a user_token received by OneAll.
 * The goal is to check if there is an existing user account for a user_token received by OneAll.
 */
function get_user_id_for_user_token ($user_token){
    // Example Query: SELECT user_id FROM user_token_link WHERE user_token = <user_token>
    // Return the user_id or null if none found.
}

/*
 * Return the user_token for a given user identifier.
 * The goal is to check if the given user identifier has already been linked to a OneAll user_token.
 */
function get_user_token_for_user_id ($user_id){
    // Example Query: SELECT user_token FROM user_token_link WHERE user_id = <user_id>
    // Return the user_token or null if none found.
}

/*
 * Link a user_token to an existing user identifier.
 * The goal is to store a user_token for a given user_id so that we can recognize the user_token lateron.
 */
function link_user_token_to_user_id ($user_token, $user_id){
    // Example: INSERT INTO user_token_link SET user_token = <user_token>, user_id = <user_id>
    // Return true
}

