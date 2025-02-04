package com.dragon.test;

import com.dragon.flow.main.FlowFrontApplication;
import com.dragon.flow.model.hr.Leave;
import com.dragon.flow.service.hr.ILeaveService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

/**
 * @program: flow
 * @description:
 * @author: Bruce.Liu
 * @create: 2021-05-13 14:56
 **/
@RunWith(SpringRunner.class)
@SpringBootTest(classes = FlowFrontApplication.class)
public class TestBpmn {

    @Autowired
    private ILeaveService leaveService;

    @Test
    public void testStartFlow() {
        Leave leave = new Leave();
        String applyerCode = "0000001";
        leave.setApplyerCode(applyerCode);
        leave.setDays(2f);
        leave.setTitle("年假");
        leave.setNote("年假");
        leave.setType("1");
        leaveService.saveLeave(leave);
    }


}
