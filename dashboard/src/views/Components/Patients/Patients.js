import React, {Component} from "react";
import {Bar, Line, Pie} from "react-chartjs-2";
import {
  Badge,
  Row,
  Col,
  Progress,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Card,
  CardHeader,
  CardBlock,
  CardFooter,
  CardTitle,
  Button,
  ButtonToolbar,
  ButtonGroup,
  ButtonDropdown,
  Label,
  Input,
  Table
} from "reactstrap";

class Patients extends Component {
  render (){
    return (
      <Row>
        <Col>
          <Card>
            <CardHeader>
              My Patients 
            </CardHeader>
            <CardBlock className="card-body">
              <Table hover responsive className="table-outline mb-0 d-none d-sm-table">
                <thead className="thead-default">
                <tr>
                  <th className="text-center"><i className="icon-people"></i></th>
                  <th>Patient</th>
                  <th className="text-center">Sector</th>
                  <th>Severity Score</th>
                  <th className="text-center">Symptoms</th>
                  <th>Last Submission</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td className="text-center">
                    <div className="avatar">
                      <img src={'img/avatars/1.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com"/>
                    </div>
                  </td>
                  <td>
                    <div>Yiorgos Avraamu</div>
                  </td>
                  <td className="text-center">
                    <img src={'img/flags/USA.png'} alt="USA" style={{height: 24 + 'px'}}/>
                  </td>
                  <td>
                    <div className="clearfix">
                      <div className="float-left">
                        <strong>0</strong>
                      </div>
                      <div className="float-right">
                        <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                      </div>
                    </div>
                    <Progress className="progress-xs" color="success" value="100"/>
                  </td>
                  <td className="text-center">
                    <div>Vomitting</div>
                  </td>
                  <td>
                    <strong>10 sec ago</strong>
                  </td>
                </tr>
                <tr>
                  <td className="text-center">
                    <div className="avatar">
                      <img src={'img/avatars/2.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com"/>
                    </div>
                  </td>
                  <td>
                    <div>Avram Tarasios</div>
                  </td>
                  <td className="text-center">
                    <img src={'img/flags/Brazil.png'} alt="Brazil" style={{height: 24 + 'px'}}/>
                  </td>
                  <td>
                    <div className="clearfix">
                      <div className="float-left">
                        <strong>1</strong>
                      </div>
                      <div className="float-right">
                        <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                      </div>
                    </div>
                    <Progress className="progress-xs" color="success" value="100"/>
                  </td>
                  <td className="text-center">
                  <div>Depression</div>
                  </td>
                  <td>
                    <strong>5 minutes ago</strong>
                  </td>
                </tr>
                <tr>
                  <td className="text-center">
                    <div className="avatar">
                      <img src={'img/avatars/3.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com"/>
                    </div>
                  </td>
                  <td>
                    <div>Quintin Ed</div>
                  </td>
                  <td className="text-center">
                    <img src={'img/flags/India.png'} alt="India" style={{height: 24 + 'px'}}/>
                  </td>
                  <td>
                    <div className="clearfix">
                      <div className="float-left">
                        <strong>3</strong>
                      </div>
                      <div className="float-right">
                        <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                      </div>
                    </div>
                    <Progress className="progress-xs" color="warning" value="100"/>
                  </td>
                  <td className="text-center">
                  <div>Breathless</div>
                  </td>
                  <td>
                    <strong>1 hour ago</strong>
                  </td>
                </tr>
                <tr>
                  <td className="text-center">
                    <div className="avatar">
                      <img src={'img/avatars/4.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com"/>
                    </div>
                  </td>
                  <td>
                    <div>Elena Kwadwo</div>
                  </td>
                  <td className="text-center">
                    <img src={'img/flags/France.png'} alt="France" style={{height: 24 + 'px'}}/>
                  </td>
                  <td>
                    <div className="clearfix">
                      <div className="float-left">
                        <strong>4</strong>
                      </div>
                      <div className="float-right">
                        <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                      </div>
                    </div>
                    <Progress className="progress-xs" color="danger" value="98"/>
                  </td>
                  <td className="text-center">
                    <div>Pain</div>
                  </td>
                  <td>
                    <strong>Last month</strong>
                  </td>
                </tr>
                <tr>
                  <td className="text-center">
                    <div className="avatar">
                      <img src={'img/avatars/5.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com"/>
                    </div>
                  </td>
                  <td>
                    <div>Agapetus Tadeas</div>
                  </td>
                  <td className="text-center">
                    <img src={'img/flags/Spain.png'} alt="Spain" style={{height: 24 + 'px'}}/>
                  </td>
                  <td>
                    <div className="clearfix">
                      <div className="float-left">
                        <strong>2</strong>
                      </div>
                      <div className="float-right">
                        <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                      </div>
                    </div>
                    <Progress className="progress-xs" color="info" value="100"/>
                  </td>
                  <td className="text-center">
                  <div>Headache</div>
                  </td>
                  <td>
                    <strong>Last week</strong>
                  </td>
                </tr>
                <tr>
                  <td className="text-center">
                    <div className="avatar">
                      <img src={'img/avatars/6.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com"/>
                    </div>
                  </td>
                  <td>
                    <div>Friderik David</div>
                  </td>
                  <td className="text-center">
                    <img src={'img/flags/Poland.png'} alt="Poland" style={{height: 24 + 'px'}}/>
                  </td>
                  <td>
                    <div className="clearfix">
                      <div className="float-left">
                        <strong>1</strong>
                      </div>
                      <div className="float-right">
                        <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                      </div>
                    </div>
                    <Progress className="progress-xs" color="success" value="100"/>
                  </td>
                  <td className="text-center">
                  <div>Weak</div>
                  </td>
                  <td>
                    <strong>Yesterday</strong>
                  </td>
                </tr>
                </tbody>
              </Table>
            </CardBlock>
          </Card>
        </Col>
      </Row>
    )
  }
}

export default Patients;
