import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Edit from '@material-ui/icons/Edit';
import Person from '@material-ui/icons/Person';
import Divider from '@material-ui/core/Divider';
import DeleteUser from './DeleteUser';
import auth from './../auth/auth-helper';
import { read } from './api-user.js';
import { Redirect, Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({}));

const Profile = () => {};

export default Profile;
