import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Button,
    TextField,
} from '@material-ui/core';
import { store } from '../../../redux/store';
import client from "../../../API/api";

const useStyles = makeStyles((theme) => ({
    alignCenter: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    comment: {
        float: "right",
        marginLeft: 5,
        border: "1px solid #bdbdbd",
        borderRadius: 5,
        padding: 8,
        '&:hover': {
            borderColor: "black"
        },
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
    },
}))

export default function CommentSeller(props) {
    const classes = useStyles();
    const [seller, setSeller] = React.useState(props.userInfo);
    const [comment, setComment] = React.useState('');
    const [buyer, setBuyer] = React.useState({})
    const [buyerId, setBuyerId] = React.useState(store.getState().id)
    const [commentedOn, setCommentedOn] = React.useState(false)

    useEffect(() => {
        if (seller) {
            setSeller(props.userInfo)
            setBuyerId(store.getState().id) 
            console.log(buyerId)
            client.user.getUserById(buyerId).then(buyerInfo => {
                setBuyer(buyerInfo.data)
                let commentedUsers = buyerInfo.data.commentedUsers
                if (commentedUsers.length) {
                    commentedUsers.forEach(comment => {
                        if (comment.user === seller.id) {
                            console.log("commented on already")
                            setComment(comment)
                            setCommentedOn(true)
                        }
                    })
                }
            })
        } else {
            setSeller({})
        }
    }, [props.userInfo, store.getState().id])

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };

    const handleSubmitComment = () => {
        let sellerId = seller.id;
        console.log(buyerId)
        client.user.commentSeller({sellerId, comment, buyerId})
    }

    return (
        <div className={classes.comment}>
            {commentedOn
            ? 
            <div>
                <TextField
                id="comment-seller-textfield"
                label="Your current comment:"
                multiline
                rows={3}
                value={comment.comment}
                onChange={handleCommentChange}
            />
            <Button onClick={handleSubmitComment}>Update Comment</Button>
            </div>
            :
            <div>
            <TextField
                id="comment-seller-textfield"
                label="Leave a comment!"
                multiline
                rows={3}
                value={comment}
                onChange={handleCommentChange}
            />
            <Button onClick={handleSubmitComment}>Submit Comment</Button>
            </div>
            }
            
        </div>
    )
}