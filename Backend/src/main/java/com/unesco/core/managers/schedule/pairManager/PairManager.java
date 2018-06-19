package com.unesco.core.managers.schedule.pairManager;

import com.unesco.core.managers.schedule.pairManager.interfaces.pair.IPairManager;
import com.unesco.core.models.additional.ResponseStatus;
import com.unesco.core.models.shedule.PairModel;
import com.unesco.core.utils.StatusTypes;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
@Scope("prototype")
public class PairManager implements IPairManager {

    PairModel pair;

    public PairManager() {
        pair = new PairModel();
    }

    public ResponseStatus CheckIntersection(List<PairModel> pairsForValidate) {

        ResponseStatus result = new ResponseStatus();
        result.setStatus(StatusTypes.OK);

        int size = pairsForValidate.size();
        if (size == 0) {
            return result;
        }

        List<String> messages = new ArrayList<>();

        for (PairModel p: pairsForValidate) {

            if (pair.getId() == p.getId()) {
                continue;
            }

            if(pair.getDayofweek().equals(p.getDayofweek())
                    && pair.getPairNumber() == p.getPairNumber()) {

                boolean profEq = pair.getLesson().getProfessor().getId() == p.getLesson().getProfessor().getId();
                boolean groupEq = pair.getLesson().getGroup().getId() == p.getLesson().getGroup().getId();
                boolean roomEq = pair.getRoom().getId() == p.getRoom().getId();
                boolean weektypeEq = pair.getWeektype().equals(p.getWeektype());

                if(profEq && groupEq && (weektypeEq || (pair.getWeektype().equals("Все"))
                    || (p.getWeektype().equals("Все"))) )
                {
                    messages.add(" В это время у "+p.getLesson().getProfessor().getUser().getUserFIO()
                            +" и "+p.getLesson().getGroup().getName()+" уже назначено занятие ");
                    break;
                }

                if(roomEq && (weektypeEq || (pair.getWeektype().equals("Все"))
                        || (p.getWeektype().equals("Все"))))
                {
                    messages.add("В аудитории "+p.getRoom().getRoom()
                            +" уже назначено занятие в это время у преподавателя "+p.getLesson().getProfessor().getUser().getUserFIO());
                    break;
                }

                if(profEq && (weektypeEq || (pair.getWeektype().equals("Все"))
                        || (p.getWeektype().equals("Все"))))
                {
                    messages.add("Для преподавателя "+p.getLesson().getProfessor().getUser().getUserFIO()
                            +" уже назначено занятие в это время у группы "+p.getLesson().getGroup().getName());
                    break;
                }

                if(groupEq && (weektypeEq || (pair.getWeektype().equals("Все"))
                        || (p.getWeektype().equals("Все"))))
                {
                    messages.add("У группы "+p.getLesson().getGroup().getName()
                            +" уже назначено занятие в это время у преподавателя "+p.getLesson().getProfessor().getUser().getUserFIO());
                    break;
                }
            }
        }

        if(messages.size()>0)
        {
            result.setStatus(StatusTypes.ERROR);
            result.setErrors(messages);
        }

        return result;
    }

    public void Init(PairModel Pair) {
        pair = Pair;
    }

    public PairModel Get() {
        return pair;
    }

    public ResponseStatus Validate() {
        ResponseStatus responseStatus = new ResponseStatus();
        responseStatus.setStatus(StatusTypes.OK);
        if (pair.getLesson().getGroup() == null || pair.getLesson().getGroup().getId() == 0) {
            responseStatus.setStatus(StatusTypes.ERROR);
            responseStatus.addErrors("Не указанна группа");
        }
        if (pair.getLesson().getDiscipline() == null || pair.getLesson().getDiscipline().getId() == 0) {
            responseStatus.setStatus(StatusTypes.ERROR);
            responseStatus.addErrors("Не указанна дисциплина");
        }
        if (pair.getLesson().getProfessor() == null || pair.getLesson().getProfessor().getId() == 0) {
            responseStatus.setStatus(StatusTypes.ERROR);
            responseStatus.addErrors("Не указан преподаватель");
        }
        if (pair.getWeektype().equals("")) {
            responseStatus.setStatus(StatusTypes.ERROR);
            responseStatus.addErrors("Не указана переодичность");
        }
        if (pair.getDayofweek().equals("")) {
            responseStatus.setStatus(StatusTypes.ERROR);
            responseStatus.addErrors("Не указан день недели");
        }
        if (pair.getRoom() == null || pair.getRoom().getId() == 0) {
            responseStatus.setStatus(StatusTypes.ERROR);
            responseStatus.addErrors("Не указана аудитория");
        }
        if (pair.getPairNumber() == 0) {
            responseStatus.setStatus(StatusTypes.ERROR);
            responseStatus.addErrors("Не указана аудитория");
        }
        return responseStatus;
    }

}
