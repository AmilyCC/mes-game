const domain = 'https://liff.line.me/'
const LIFF_ID = '2003958153-Bg6DpwXW'
const LIFF_ID_V2 = '2003958153-OL85ylYd'
async function sendShare_Gift() {
	const sent = await InputExist()
	const name = await liff.getProfile().then((profile) => {
		return profile.displayName;
	}).catch((err) => {
		return err;
	});
	if (sent) {
		const result = await liff.shareTargetPicker([
			{
				"type": "flex",
				"altText": name + "送禮物來囉!",
				"contents": {
					"type": "bubble",
					"size": "kilo",
					"hero": {
						"type": "image",
						"url": "https://raw.githubusercontent.com/AmilyCC/imageStore/master/gift-banner.png",
						"size": "full",
						"aspectRatio": "18:19",
						"action": {
							"type": "message",
							"label": "action",
							// "uri": `${sendUri()}`,
							"text":`${sendMessage()}`
						},
						"offsetTop": "none",
						"offsetBottom": "none",
						"offsetStart": "none",
						"margin": "none",
						"align": "center",
						"aspectMode": "cover"
					},
					"body": {
						"type": "box",
						"layout": "horizontal",
						"spacing": "none",
						"action": {
							"type": "message",
							"label": "action",
							// "uri": `${sendUri()}`,
							"text":`${sendMessage()}`
						},
						"contents": [
							{
								"type": "image",
								"url": "https://raw.githubusercontent.com/AmilyCC/imageStore/master/starbucks.jpg",
								"align": "start",
								"size": "md",
								"offsetTop": "none",
								"offsetBottom": "none",
								"action": {
							"type": "message",
							"label": "action",
							// "uri": `${sendUri()}`,
							"text":`${sendMessage()}`
						},
								"offsetStart": "none",
								"position": "relative",
								"offsetEnd": "none"
							},
							{
								"type": "text",
								"text": "【星巴克】致敬女神組合",
								"size": "md",
								"weight": "bold",
								"margin": "none",
								"align": "start",
								"offsetTop": "xxl",
								"contents": [],
								"style": "normal",
								"offsetEnd": "none",
								"wrap": true,
								"offsetBottom": "none",
								"offsetStart": "none",
								"action": {
								"type": "message",
								"label": "action",
								// // "uri": `${sendUri()}`,
								"message":`${sendMessage()}`
							},
								"position": "relative"
							}
						],
						"margin": "none",
						"offsetTop": "none",
						"position": "relative",
						"offsetStart": "none",
						"offsetEnd": "none",
						"offsetBottom": "none"
					},
					"footer": {
						"type": "box",
						"layout": "vertical",
						"contents": [
							{
								"type": "button",
								"color": "#EEE9E9",
								"margin": "none",
								"action": {
									"type": "message",
									"label": "打開我的禮物",
									// "uri": `${sendUri()}`,
									"text":`${sendMessage()}`
								},
								"style": "secondary"
							},
							{
								"type": "button",
								"action": {
									"type": "message",
									"label": "傳送感謝小卡",
									// "uri": `${sendUri()}`,
									"text":`${sendMessage()}`
								}
							},
							{
								"type": "separator"
							},
							{
								"type": "box",
								"layout": "vertical",
								"contents": [
									{
										"type": "button",
										"action": {
											"type": "message",
											"label": "LINE禮物",
											// "uri": `${sendUri()}`,
											"text":`${sendMessage()}`
										},
										"position": "relative",
										"margin": "none",
										"height": "sm",
										"style": "link",
										"offsetTop": "none",
										"offsetStart": "none",
										"offsetEnd": "none"
									}
								],
								"action": {
									"type": "message",
									"label": "action",
									// "uri": `${sendUri()}`,
									"text":`${sendMessage()}`
								}
							}
						]
					}
				}
			}
		])

		if (result) {
			alert(`[${result.status}] Message sent!`)
		} else {
			const [majorVer, minorVer, patchVer] = (liff.getLineVersion() || "").split('.');

			if (minorVer === undefined) {
				alert('ShareTargetPicker was canceled in external browser')
				return
			}

			if (parseInt(majorVer) >= 10 && parseInt(minorVer) >= 10 && parseInt(patchVer) > 0) {
				alert('ShareTargetPicker was canceled in LINE app')
			}
		}
	}

}

async function sendShare_Ladder() {
	const sent = await InputExist()
	const name = await liff.getProfile().then((profile) => {
		return profile.displayName;
	}).catch((err) => {
		return err;
	});
	if (sent) {
		const result = await liff.shareTargetPicker([
			{
				"type": "flex",
				"altText": "爬梯子遊戲已建立，讓梯子決定您的命運吧！",
				"contents": {
					"type": "bubble",
					"size": "kilo",
					"hero": {
						"type": "image",
						"url": "https://raw.githubusercontent.com/AmilyCC/imageStore/master/ladder-banner.jpg",
						"size": "full",
						"aspectRatio": "20:13",
						"aspectMode": "cover",
						"action": {
							"type": sendAction(),
							// "uri": `${sendUri()}`,
									"message":`${sendMessage()}`
						}
					},
					"body": {
						"type": "box",
						"layout": "vertical",
						"contents": [
							{
								"type": "text",
								"text": "爬梯子",
								"weight": "bold",
								"size": "md"
							},
							{
								"type": "box",
								"layout": "vertical",
								"margin": "md",
								"spacing": "sm",
								"contents": [
									{
										"type": "text",
										"text": "我建立了一個爬梯子遊戲，馬上來看看結果吧！",
										"wrap": true,
										"color": "#666666",
										"size": "sm",
										"offsetEnd": "none",
										"offsetStart": "none",
										"offsetBottom": "none",
										"offsetTop": "none",
										"flex": 5
									}
								]
							}
						],
						"action": {
							"type": sendAction(),
							"label": "action",
							// "uri": `${sendUri()}`,
									"message":`${sendMessage()}`
						}
					},
					"footer": {
						"type": "box",
						"layout": "vertical",
						"spacing": "sm",
						"contents": [
							{
								"type": "separator",
								"margin": "none"
							},
							{
								"type": "button",
								"style": "link",
								"height": "sm",
								"action": {
									"type": sendAction(),
									"label": "開啟爬梯子遊戲",
									// "uri": `${sendUri()}`,
									"message":`${sendMessage()}`
								}
							},
							{
								"type": "button",
								"style": "link",
								"height": "sm",
								"action": {
									"type": sendAction(),
									"label": "查看全部結果",
									// "uri": `${sendUri()}`,
									"message":`${sendMessage()}`
								}
							},
							{
								"type": "separator"
							},
							{
								"type": "box",
								"layout": "vertical",
								"contents": [],
								"margin": "sm"
							}
						],
						"flex": 0,
						"margin": "none",
						"paddingTop": "none"
					}
				}
			}
		])
		if (result) {
			alert(`[${result.status}] Message sent!`)
		} else {
			const [majorVer, minorVer, patchVer] = (liff.getLineVersion() || "").split('.');

			if (minorVer === undefined) {
				alert('ShareTargetPicker was canceled in external browser')
				return
			}

			if (parseInt(majorVer) >= 10 && parseInt(minorVer) >= 10 && parseInt(patchVer) > 0) {
				alert('ShareTargetPicker was canceled in LINE app')
			}
		}
	}
}

async function sendShare_Pay() {
	const sent = await InputExist()
	const name = await liff.getProfile().then((profile) => {
		return profile.displayName;
	}).catch((err) => {
		return err;
	});
	if (sent) {
		const result = await liff.shareTargetPicker([
			{
				"type": "flex",
				"altText": "已收到NT$ 888的轉帳。",
				"contents": {
					"type": "bubble",
					"size": "hecto",
					"hero": {
						"type": "image",
						"url": "https://raw.githubusercontent.com/AmilyCC/imageStore/master/pay-banner.jpg",
						"size": "full",
						"aspectRatio": "20:13",
						"aspectMode": "cover",
						"action": {
							"type": sendAction(),
							// "uri": `${sendUri()}`,
									"message":`${sendMessage()}`
						},
						"position": "relative"
					},
					"body": {
						"type": "box",
						"layout": "vertical",
						"contents": [
							{
								"type": "text",
								"text": "LINE Pay",
								"weight": "bold",
								"size": "xs",
								"action": {
									"type": sendAction(),
									"label": "action",
									// "uri": `${sendUri()}`,
									"message":`${sendMessage()}`
								}
							},
							{
								"type": "text",
								"text": "您已收到 NT$ 888。（來自：" + name + "）",
								"size": "xs",
								"contents": [],
								"color": "#8E8E8E",
								"action": {
									"type": sendAction(),
									"label": "action",
									// "uri": `${sendUri()}`,
									"message":`${sendMessage()}`
								}
							},
							{
								"type": "button",
								"position": "relative",
								"style": "secondary",
								"height": "sm",
								"margin": "lg",
								"color": "#F0F0F0",
								"action": {
									"type": sendAction(),
									"label": "瞭解更多",
									// "uri": `${sendUri()}`,
									"message":`${sendMessage()}`
								},
								"scaling": true,
								"offsetEnd": "none"
							}
						],
						"action": {
							"type": sendAction(),
							"label": "action",
							// "uri": `${sendUri()}`,
									"message":`${sendMessage()}`
						}
					},
					"footer": {
						"type": "box",
						"layout": "baseline",
						"contents": [
							{
								"type": "icon",
								"url": "https://raw.githubusercontent.com/AmilyCC/imageStore/master/dollar.png",
								"margin": "none",
								"size": "xs",
								"scaling": true,
								"offsetTop": "xs"
							},
							{
								"type": "text",
								"text": "LINE Pay",
								"margin": "sm",
								"size": "xxs",
								"color": "#8E8E8E"
							},
							{
								"type": "icon",
								"url": "https://raw.githubusercontent.com/AmilyCC/imageStore/master/right-arrow.png",
								"margin": "sm",
								"size": "xxs",
								"offsetTop": "xs"
							}
						],
						"action": {
							"type": sendAction(),
							"label": "action",
							// "uri": `${sendUri()}`,
									"message":`${sendMessage()}`
						},
						"position": "relative"
					},
					"styles": {
						"footer": {
							"separator": true
						}
					}
				}
			}
		])
		if (result) {
			alert(`[${result.status}] Message sent!`)
		} else {
			const [majorVer, minorVer, patchVer] = (liff.getLineVersion() || "").split('.');

			if (minorVer === undefined) {
				alert('ShareTargetPicker was canceled in external browser')
				return
			}

			if (parseInt(majorVer) >= 10 && parseInt(minorVer) >= 10 && parseInt(patchVer) > 0) {
				alert('ShareTargetPicker was canceled in LINE app')
			}
		}
	}
}

async function Red_Env() {
	const sent = await InputExist()
	const name = await liff.getProfile().then((profile) => {
		return profile.displayName;
	}).catch((err) => {
		return err;
	});
	if (sent) {
		const result = await liff.shareTargetPicker([
			{
				"type": "flex",
				"altText": "您收到一則紅包訊息！",
				"contents": {
					"type": "bubble",
					"size": "kilo",
					"hero": {
						"type": "image",
						"url": "https://raw.githubusercontent.com/AmilyCC/imageStore/master/red-banner.png",
						"size": "full",
						"aspectRatio": "20:13",
						"aspectMode": "cover",
						"action": {
							"type": sendAction(),
							"label": "action",
							// "uri": `${sendUri()}`,
									"message":`${sendMessage()}`
						}
					},
					"body": {
						"type": "box",
						"layout": "vertical",
						"contents": [
							{
								"type": "text",
								"text": "LINE Pay 紅包",
								"weight": "bold",
								"size": "sm",
								"color": "#000000",
								"action": {
									"type": sendAction(),
									"label": "action",
									// "uri": `${sendUri()}`,
									"message":`${sendMessage()}`
								}
							},
							{
								"type": "text",
								"text": name + "發紅包了，限時3天！快來試試手氣！(紅包將在3天後過期並退還給好友。)",
								"size": "xs",
								"wrap": true,
								"offsetTop": "md",
								"action": {
									"type": sendAction(),
									"label": "action",
									// "uri": `${sendUri()}`,
									"message":`${sendMessage()}`
								}
							}
						]
					},
					"footer": {
						"type": "box",
						"layout": "vertical",
						"spacing": "sm",
						"contents": [
							{
								"type": "separator"
							},
							{
								"type": "button",
								"style": "link",
								"action": {
									"type": sendAction(),
									"label": "查看紅包狀態",
									// "uri": `${sendUri()}`,
									"message":`${sendMessage()}`
								},
								"margin": "none"
							},
							{
								"type": "box",
								"layout": "vertical",
								"contents": [
									{
										"type": "separator",
										"margin": "xs"
									},
									{
										"type": "box",
										"layout": "baseline",
										"contents": [
											{
												"type": "icon",
												"url": "https://raw.githubusercontent.com/AmilyCC/imageStore/master/env.png",
												"margin": "none",
												"scaling": true,
												"offsetTop": "sm"
											},
											{
												"type": "text",
												"text": "紅包",
												"color": "#8E8E8E",
												"margin": "sm",
												"size": "xs",
												"offsetTop": "xs"
											},
											{
												"type": "icon",
												"url": "https://raw.githubusercontent.com/AmilyCC/imageStore/master/right-arrow.png",
												"margin": "xs",
												"size": "xs",
												"offsetTop": "sm"
											}
										]
									}
								],
								"margin": "sm"
							}
						],
						"flex": 0
					}
				}


			}
		])
		if (result) {
			alert(`[${result.status}] Message sent!`)
		} else {
			const [majorVer, minorVer, patchVer] = (liff.getLineVersion() || "").split('.');

			if (minorVer === undefined) {
				alert('ShareTargetPicker was canceled in external browser')
				return
			}

			if (parseInt(majorVer) >= 10 && parseInt(minorVer) >= 10 && parseInt(patchVer) > 0) {
				alert('ShareTargetPicker was canceled in LINE app')
			}
		}
	}

}


function logOut() {
	liff.logout()
	window.location.reload()
}

async function main() {
	await liff.init({ 
		liffId: LIFF_ID 
	})
	if (liff.isLoggedIn()) {
		document.getElementById("sendForm").style.display = "block"
		document.getElementById("btnShare").style.display = "block"
		document.getElementById("btnShare2").style.display = "block"
		document.getElementById("btnShare3").style.display = "block"
		document.getElementById("btnShare4").style.display = "block"
		if (!liff.isInClient()) {
			document.getElementById("btnLogOut").style.display = "block"
		}
	} else {
		document.getElementById("btnLogin").style.display = "block"
	}
}

main()
