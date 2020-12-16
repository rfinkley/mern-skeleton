import React, { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';
import auth from './../auth/auth-helper';
import { read, update } from './api-user.js';
import { Redirect } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({}));

function EditProfile({ mathch }) {}

export default EditProfile;
