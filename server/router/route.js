import { Router } from "express";
const router = Router();

/** import controllers */
import * as controller from '../controllers/controller.js';

/** Questions Routes API */

router.route('/questions')
        .get(controller.getQuestions) /** GET Request */
        .post(controller.insertQuestions) /** POST Request */
        .delete(controller.dropQuestions) /** DELETE Request */

router.route('/questions/:category')
        .get(controller.getQuestionsByCategory) /** GET Request for specific category */

router.route('/populate')
        .post(controller.insertQuestions) /** POST Request to populate all questions */

router.route('/result')
        .get(controller.getResult)
        .post(controller.storeResult)
        .delete(controller.dropResult)

export default router;