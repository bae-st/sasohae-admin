const express = require("express");
const router = express.Router();
const {
    getBoards,
    deleteBoards,
    createBoards,
} = require("../controllers/boards");
const {
    getAllGifts,
    getSelectedGift,
    createGift,
    updateGift,
    deleteGift,
} = require("../controllers/gifts");
const {
    getAllMenus,
    getSelectedMenu,
    createMenu,
    updateMenu,
    deleteMenu,
} = require("../controllers/menus");
const {
    getAllGiftQuestions,
    getSelectedGiftQuestion,
    createGiftQuestion,
    updateGiftQuestion,
    deleteGiftQuestion,
} = require("../controllers/giftQuestions");
const upload = require("../middleware/upload");

/* ==================== controllers ====================*/
router.get("/boards", getBoards);
router.delete("/boards/:board_id", deleteBoards);
router.post("/boards", createBoards);

router.get("/gifts", getAllGifts);
router.get("/gifts/:gift_id", getSelectedGift);
router.post("/gifts", upload.single("img"), createGift);
router.put("/gifts/:gift_id", upload.single("img"), updateGift);
router.delete("/gifts/:gift_id", deleteGift);

router.get("/menus", getAllMenus);
router.get("/menus/:menu_id", getSelectedMenu);
router.post("/menus", upload.single("img"), createMenu);
router.put("/menus/:menu_id", upload.single("img"), updateMenu);
router.delete("/menus/:menu_id", deleteMenu);

router.get("/giftQuestions", getAllGiftQuestions);
router.get("/giftQuestions/:giftQuestion_id", getSelectedGiftQuestion);
router.post("/giftQuestions", createGiftQuestion);
router.put("/giftQuestions/:giftQuestion_id", updateGiftQuestion);
router.delete("/giftQuestions/:giftQuestion_id", deleteGiftQuestion);
/* ==================================================*/

/* ==================== middleware ====================*/

/* ==================================================*/

/* ==================== router ====================*/

/* ==================================================*/

module.exports = router;
