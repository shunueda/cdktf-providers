// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_check_details_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSlbHealthCheckDetailsOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_check_details_oper#id DataThunderSlbHealthCheckDetailsOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_check_details_oper#oper DataThunderSlbHealthCheckDetailsOper#oper}
  */
  readonly oper?: DataThunderSlbHealthCheckDetailsOperOper;
}
export interface DataThunderSlbHealthCheckDetailsOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_check_details_oper#arguments DataThunderSlbHealthCheckDetailsOper#arguments}
  */
  readonly arguments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_check_details_oper#attr_alias_addr DataThunderSlbHealthCheckDetailsOper#attr_alias_addr}
  */
  readonly attrAliasAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_check_details_oper#attr_port DataThunderSlbHealthCheckDetailsOper#attr_port}
  */
  readonly attrPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_check_details_oper#attr_program DataThunderSlbHealthCheckDetailsOper#attr_program}
  */
  readonly attrProgram?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_check_details_oper#attr_rpn DataThunderSlbHealthCheckDetailsOper#attr_rpn}
  */
  readonly attrRpn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_check_details_oper#attr_type DataThunderSlbHealthCheckDetailsOper#attr_type}
  */
  readonly attrType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_check_details_oper#avg_rtt DataThunderSlbHealthCheckDetailsOper#avg_rtt}
  */
  readonly avgRtt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_check_details_oper#avg_tcp_rtt DataThunderSlbHealthCheckDetailsOper#avg_tcp_rtt}
  */
  readonly avgTcpRtt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_check_details_oper#base_dn DataThunderSlbHealthCheckDetailsOper#base_dn}
  */
  readonly baseDn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_check_details_oper#community DataThunderSlbHealthCheckDetailsOper#community}
  */
  readonly community?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_check_details_oper#curr_interval DataThunderSlbHealthCheckDetailsOper#curr_interval}
  */
  readonly currInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_check_details_oper#curr_rtt DataThunderSlbHealthCheckDetailsOper#curr_rtt}
  */
  readonly currRtt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_check_details_oper#curr_tcp_rtt DataThunderSlbHealthCheckDetailsOper#curr_tcp_rtt}
  */
  readonly currTcpRtt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_check_details_oper#db_column DataThunderSlbHealthCheckDetailsOper#db_column}
  */
  readonly dbColumn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_check_details_oper#db_name DataThunderSlbHealthCheckDetailsOper#db_name}
  */
  readonly dbName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_check_details_oper#db_row DataThunderSlbHealthCheckDetailsOper#db_row}
  */
  readonly dbRow?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_check_details_oper#dns_expect DataThunderSlbHealthCheckDetailsOper#dns_expect}
  */
  readonly dnsExpect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_check_details_oper#dns_expect_type DataThunderSlbHealthCheckDetailsOper#dns_expect_type}
  */
  readonly dnsExpectType?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_check_details_oper#dns_qtype DataThunderSlbHealthCheckDetailsOper#dns_qtype}
  */
  readonly dnsQtype?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_check_details_oper#dns_recurse DataThunderSlbHealthCheckDetailsOper#dns_recurse}
  */
  readonly dnsRecurse?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_check_details_oper#domain DataThunderSlbHealthCheckDetailsOper#domain}
  */
  readonly domain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_check_details_oper#expect_resp_code DataThunderSlbHealthCheckDetailsOper#expect_resp_code}
  */
  readonly expectRespCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_check_details_oper#expect_resp_regex_code DataThunderSlbHealthCheckDetailsOper#expect_resp_regex_code}
  */
  readonly expectRespRegexCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_check_details_oper#expect_text DataThunderSlbHealthCheckDetailsOper#expect_text}
  */
  readonly expectText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_check_details_oper#expect_text_regex DataThunderSlbHealthCheckDetailsOper#expect_text_regex}
  */
  readonly expectTextRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_check_details_oper#force_up DataThunderSlbHealthCheckDetailsOper#force_up}
  */
  readonly forceUp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_check_details_oper#half_open DataThunderSlbHealthCheckDetailsOper#half_open}
  */
  readonly halfOpen?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_check_details_oper#health_state DataThunderSlbHealthCheckDetailsOper#health_state}
  */
  readonly healthState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_check_details_oper#host DataThunderSlbHealthCheckDetailsOper#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_check_details_oper#http_errors DataThunderSlbHealthCheckDetailsOper#http_errors}
  */
  readonly httpErrors?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_check_details_oper#http_req_sent DataThunderSlbHealthCheckDetailsOper#http_req_sent}
  */
  readonly httpReqSent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_check_details_oper#http_wait_resp DataThunderSlbHealthCheckDetailsOper#http_wait_resp}
  */
  readonly httpWaitResp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_check_details_oper#ipaddr DataThunderSlbHealthCheckDetailsOper#ipaddr}
  */
  readonly ipaddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_check_details_oper#kerberos_kdc DataThunderSlbHealthCheckDetailsOper#kerberos_kdc}
  */
  readonly kerberosKdc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_check_details_oper#kerberos_port DataThunderSlbHealthCheckDetailsOper#kerberos_port}
  */
  readonly kerberosPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_check_details_oper#kerberos_realm DataThunderSlbHealthCheckDetailsOper#kerberos_realm}
  */
  readonly kerberosRealm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_check_details_oper#l4_conn_num DataThunderSlbHealthCheckDetailsOper#l4_conn_num}
  */
  readonly l4ConnNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_check_details_oper#l4_errors DataThunderSlbHealthCheckDetailsOper#l4_errors}
  */
  readonly l4Errors?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_check_details_oper#ldap_ssl DataThunderSlbHealthCheckDetailsOper#ldap_ssl}
  */
  readonly ldapSsl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_check_details_oper#ldap_tls DataThunderSlbHealthCheckDetailsOper#ldap_tls}
  */
  readonly ldapTls?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_check_details_oper#mac_addr DataThunderSlbHealthCheckDetailsOper#mac_addr}
  */
  readonly macAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_check_details_oper#mail_from DataThunderSlbHealthCheckDetailsOper#mail_from}
  */
  readonly mailFrom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_check_details_oper#maintenance_code DataThunderSlbHealthCheckDetailsOper#maintenance_code}
  */
  readonly maintenanceCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_check_details_oper#method DataThunderSlbHealthCheckDetailsOper#method}
  */
  readonly method?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_check_details_oper#monitor_name DataThunderSlbHealthCheckDetailsOper#monitor_name}
  */
  readonly monitorName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_check_details_oper#oid DataThunderSlbHealthCheckDetailsOper#oid}
  */
  readonly oid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_check_details_oper#pass DataThunderSlbHealthCheckDetailsOper#pass}
  */
  readonly pass?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_check_details_oper#pin_id DataThunderSlbHealthCheckDetailsOper#pin_id}
  */
  readonly pinId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_check_details_oper#pname DataThunderSlbHealthCheckDetailsOper#pname}
  */
  readonly pname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_check_details_oper#postdata DataThunderSlbHealthCheckDetailsOper#postdata}
  */
  readonly postdata?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_check_details_oper#process_index DataThunderSlbHealthCheckDetailsOper#process_index}
  */
  readonly processIndex?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_check_details_oper#query DataThunderSlbHealthCheckDetailsOper#query}
  */
  readonly query?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_check_details_oper#rcpt_to DataThunderSlbHealthCheckDetailsOper#rcpt_to}
  */
  readonly rcptTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_check_details_oper#rcv_integer DataThunderSlbHealthCheckDetailsOper#rcv_integer}
  */
  readonly rcvInteger?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_check_details_oper#receive DataThunderSlbHealthCheckDetailsOper#receive}
  */
  readonly receive?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_check_details_oper#received_fail DataThunderSlbHealthCheckDetailsOper#received_fail}
  */
  readonly receivedFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_check_details_oper#received_success DataThunderSlbHealthCheckDetailsOper#received_success}
  */
  readonly receivedSuccess?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_check_details_oper#resp_cont DataThunderSlbHealthCheckDetailsOper#resp_cont}
  */
  readonly respCont?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_check_details_oper#response_timeout DataThunderSlbHealthCheckDetailsOper#response_timeout}
  */
  readonly responseTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_check_details_oper#secret DataThunderSlbHealthCheckDetailsOper#secret}
  */
  readonly secret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_check_details_oper#send DataThunderSlbHealthCheckDetailsOper#send}
  */
  readonly send?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_check_details_oper#sip_register DataThunderSlbHealthCheckDetailsOper#sip_register}
  */
  readonly sipRegister?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_check_details_oper#snmp_operation DataThunderSlbHealthCheckDetailsOper#snmp_operation}
  */
  readonly snmpOperation?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_check_details_oper#starttls DataThunderSlbHealthCheckDetailsOper#starttls}
  */
  readonly starttls?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_check_details_oper#state_reason DataThunderSlbHealthCheckDetailsOper#state_reason}
  */
  readonly stateReason?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_check_details_oper#status_code_rcv DataThunderSlbHealthCheckDetailsOper#status_code_rcv}
  */
  readonly statusCodeRcv?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_check_details_oper#tcp_only DataThunderSlbHealthCheckDetailsOper#tcp_only}
  */
  readonly tcpOnly?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_check_details_oper#transport_proto DataThunderSlbHealthCheckDetailsOper#transport_proto}
  */
  readonly transportProto?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_check_details_oper#url DataThunderSlbHealthCheckDetailsOper#url}
  */
  readonly url?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_check_details_oper#user DataThunderSlbHealthCheckDetailsOper#user}
  */
  readonly user?: string;
}

export function dataThunderSlbHealthCheckDetailsOperOperToTerraform(struct?: DataThunderSlbHealthCheckDetailsOperOperOutputReference | DataThunderSlbHealthCheckDetailsOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arguments: cdktf.stringToTerraform(struct!.arguments),
    attr_alias_addr: cdktf.stringToTerraform(struct!.attrAliasAddr),
    attr_port: cdktf.numberToTerraform(struct!.attrPort),
    attr_program: cdktf.stringToTerraform(struct!.attrProgram),
    attr_rpn: cdktf.stringToTerraform(struct!.attrRpn),
    attr_type: cdktf.stringToTerraform(struct!.attrType),
    avg_rtt: cdktf.numberToTerraform(struct!.avgRtt),
    avg_tcp_rtt: cdktf.numberToTerraform(struct!.avgTcpRtt),
    base_dn: cdktf.stringToTerraform(struct!.baseDn),
    community: cdktf.stringToTerraform(struct!.community),
    curr_interval: cdktf.numberToTerraform(struct!.currInterval),
    curr_rtt: cdktf.numberToTerraform(struct!.currRtt),
    curr_tcp_rtt: cdktf.numberToTerraform(struct!.currTcpRtt),
    db_column: cdktf.numberToTerraform(struct!.dbColumn),
    db_name: cdktf.stringToTerraform(struct!.dbName),
    db_row: cdktf.numberToTerraform(struct!.dbRow),
    dns_expect: cdktf.stringToTerraform(struct!.dnsExpect),
    dns_expect_type: cdktf.numberToTerraform(struct!.dnsExpectType),
    dns_qtype: cdktf.numberToTerraform(struct!.dnsQtype),
    dns_recurse: cdktf.numberToTerraform(struct!.dnsRecurse),
    domain: cdktf.stringToTerraform(struct!.domain),
    expect_resp_code: cdktf.stringToTerraform(struct!.expectRespCode),
    expect_resp_regex_code: cdktf.stringToTerraform(struct!.expectRespRegexCode),
    expect_text: cdktf.stringToTerraform(struct!.expectText),
    expect_text_regex: cdktf.stringToTerraform(struct!.expectTextRegex),
    force_up: cdktf.numberToTerraform(struct!.forceUp),
    half_open: cdktf.numberToTerraform(struct!.halfOpen),
    health_state: cdktf.stringToTerraform(struct!.healthState),
    host: cdktf.stringToTerraform(struct!.host),
    http_errors: cdktf.numberToTerraform(struct!.httpErrors),
    http_req_sent: cdktf.numberToTerraform(struct!.httpReqSent),
    http_wait_resp: cdktf.numberToTerraform(struct!.httpWaitResp),
    ipaddr: cdktf.stringToTerraform(struct!.ipaddr),
    kerberos_kdc: cdktf.stringToTerraform(struct!.kerberosKdc),
    kerberos_port: cdktf.numberToTerraform(struct!.kerberosPort),
    kerberos_realm: cdktf.stringToTerraform(struct!.kerberosRealm),
    l4_conn_num: cdktf.numberToTerraform(struct!.l4ConnNum),
    l4_errors: cdktf.numberToTerraform(struct!.l4Errors),
    ldap_ssl: cdktf.numberToTerraform(struct!.ldapSsl),
    ldap_tls: cdktf.numberToTerraform(struct!.ldapTls),
    mac_addr: cdktf.stringToTerraform(struct!.macAddr),
    mail_from: cdktf.stringToTerraform(struct!.mailFrom),
    maintenance_code: cdktf.stringToTerraform(struct!.maintenanceCode),
    method: cdktf.stringToTerraform(struct!.method),
    monitor_name: cdktf.stringToTerraform(struct!.monitorName),
    oid: cdktf.stringToTerraform(struct!.oid),
    pass: cdktf.stringToTerraform(struct!.pass),
    pin_id: cdktf.numberToTerraform(struct!.pinId),
    pname: cdktf.stringToTerraform(struct!.pname),
    postdata: cdktf.stringToTerraform(struct!.postdata),
    process_index: cdktf.numberToTerraform(struct!.processIndex),
    query: cdktf.stringToTerraform(struct!.query),
    rcpt_to: cdktf.stringToTerraform(struct!.rcptTo),
    rcv_integer: cdktf.numberToTerraform(struct!.rcvInteger),
    receive: cdktf.stringToTerraform(struct!.receive),
    received_fail: cdktf.numberToTerraform(struct!.receivedFail),
    received_success: cdktf.numberToTerraform(struct!.receivedSuccess),
    resp_cont: cdktf.stringToTerraform(struct!.respCont),
    response_timeout: cdktf.numberToTerraform(struct!.responseTimeout),
    secret: cdktf.stringToTerraform(struct!.secret),
    send: cdktf.stringToTerraform(struct!.send),
    sip_register: cdktf.numberToTerraform(struct!.sipRegister),
    snmp_operation: cdktf.numberToTerraform(struct!.snmpOperation),
    starttls: cdktf.numberToTerraform(struct!.starttls),
    state_reason: cdktf.stringToTerraform(struct!.stateReason),
    status_code_rcv: cdktf.numberToTerraform(struct!.statusCodeRcv),
    tcp_only: cdktf.numberToTerraform(struct!.tcpOnly),
    transport_proto: cdktf.numberToTerraform(struct!.transportProto),
    url: cdktf.stringToTerraform(struct!.url),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function dataThunderSlbHealthCheckDetailsOperOperToHclTerraform(struct?: DataThunderSlbHealthCheckDetailsOperOperOutputReference | DataThunderSlbHealthCheckDetailsOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    arguments: {
      value: cdktf.stringToHclTerraform(struct!.arguments),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attr_alias_addr: {
      value: cdktf.stringToHclTerraform(struct!.attrAliasAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attr_port: {
      value: cdktf.numberToHclTerraform(struct!.attrPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    attr_program: {
      value: cdktf.stringToHclTerraform(struct!.attrProgram),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attr_rpn: {
      value: cdktf.stringToHclTerraform(struct!.attrRpn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attr_type: {
      value: cdktf.stringToHclTerraform(struct!.attrType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    avg_rtt: {
      value: cdktf.numberToHclTerraform(struct!.avgRtt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    avg_tcp_rtt: {
      value: cdktf.numberToHclTerraform(struct!.avgTcpRtt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    base_dn: {
      value: cdktf.stringToHclTerraform(struct!.baseDn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    community: {
      value: cdktf.stringToHclTerraform(struct!.community),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    curr_interval: {
      value: cdktf.numberToHclTerraform(struct!.currInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    curr_rtt: {
      value: cdktf.numberToHclTerraform(struct!.currRtt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    curr_tcp_rtt: {
      value: cdktf.numberToHclTerraform(struct!.currTcpRtt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    db_column: {
      value: cdktf.numberToHclTerraform(struct!.dbColumn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    db_name: {
      value: cdktf.stringToHclTerraform(struct!.dbName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    db_row: {
      value: cdktf.numberToHclTerraform(struct!.dbRow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_expect: {
      value: cdktf.stringToHclTerraform(struct!.dnsExpect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_expect_type: {
      value: cdktf.numberToHclTerraform(struct!.dnsExpectType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_qtype: {
      value: cdktf.numberToHclTerraform(struct!.dnsQtype),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_recurse: {
      value: cdktf.numberToHclTerraform(struct!.dnsRecurse),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expect_resp_code: {
      value: cdktf.stringToHclTerraform(struct!.expectRespCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expect_resp_regex_code: {
      value: cdktf.stringToHclTerraform(struct!.expectRespRegexCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expect_text: {
      value: cdktf.stringToHclTerraform(struct!.expectText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expect_text_regex: {
      value: cdktf.stringToHclTerraform(struct!.expectTextRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    force_up: {
      value: cdktf.numberToHclTerraform(struct!.forceUp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    half_open: {
      value: cdktf.numberToHclTerraform(struct!.halfOpen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    health_state: {
      value: cdktf.stringToHclTerraform(struct!.healthState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_errors: {
      value: cdktf.numberToHclTerraform(struct!.httpErrors),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_req_sent: {
      value: cdktf.numberToHclTerraform(struct!.httpReqSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_wait_resp: {
      value: cdktf.numberToHclTerraform(struct!.httpWaitResp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipaddr: {
      value: cdktf.stringToHclTerraform(struct!.ipaddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kerberos_kdc: {
      value: cdktf.stringToHclTerraform(struct!.kerberosKdc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kerberos_port: {
      value: cdktf.numberToHclTerraform(struct!.kerberosPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kerberos_realm: {
      value: cdktf.stringToHclTerraform(struct!.kerberosRealm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    l4_conn_num: {
      value: cdktf.numberToHclTerraform(struct!.l4ConnNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l4_errors: {
      value: cdktf.numberToHclTerraform(struct!.l4Errors),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ldap_ssl: {
      value: cdktf.numberToHclTerraform(struct!.ldapSsl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ldap_tls: {
      value: cdktf.numberToHclTerraform(struct!.ldapTls),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mac_addr: {
      value: cdktf.stringToHclTerraform(struct!.macAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mail_from: {
      value: cdktf.stringToHclTerraform(struct!.mailFrom),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maintenance_code: {
      value: cdktf.stringToHclTerraform(struct!.maintenanceCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    monitor_name: {
      value: cdktf.stringToHclTerraform(struct!.monitorName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oid: {
      value: cdktf.stringToHclTerraform(struct!.oid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pass: {
      value: cdktf.stringToHclTerraform(struct!.pass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pin_id: {
      value: cdktf.numberToHclTerraform(struct!.pinId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pname: {
      value: cdktf.stringToHclTerraform(struct!.pname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    postdata: {
      value: cdktf.stringToHclTerraform(struct!.postdata),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    process_index: {
      value: cdktf.numberToHclTerraform(struct!.processIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rcpt_to: {
      value: cdktf.stringToHclTerraform(struct!.rcptTo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rcv_integer: {
      value: cdktf.numberToHclTerraform(struct!.rcvInteger),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    receive: {
      value: cdktf.stringToHclTerraform(struct!.receive),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    received_fail: {
      value: cdktf.numberToHclTerraform(struct!.receivedFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    received_success: {
      value: cdktf.numberToHclTerraform(struct!.receivedSuccess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resp_cont: {
      value: cdktf.stringToHclTerraform(struct!.respCont),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_timeout: {
      value: cdktf.numberToHclTerraform(struct!.responseTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    send: {
      value: cdktf.stringToHclTerraform(struct!.send),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sip_register: {
      value: cdktf.numberToHclTerraform(struct!.sipRegister),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    snmp_operation: {
      value: cdktf.numberToHclTerraform(struct!.snmpOperation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    starttls: {
      value: cdktf.numberToHclTerraform(struct!.starttls),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    state_reason: {
      value: cdktf.stringToHclTerraform(struct!.stateReason),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status_code_rcv: {
      value: cdktf.numberToHclTerraform(struct!.statusCodeRcv),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_only: {
      value: cdktf.numberToHclTerraform(struct!.tcpOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    transport_proto: {
      value: cdktf.numberToHclTerraform(struct!.transportProto),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbHealthCheckDetailsOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSlbHealthCheckDetailsOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arguments !== undefined) {
      hasAnyValues = true;
      internalValueResult.arguments = this._arguments;
    }
    if (this._attrAliasAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.attrAliasAddr = this._attrAliasAddr;
    }
    if (this._attrPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.attrPort = this._attrPort;
    }
    if (this._attrProgram !== undefined) {
      hasAnyValues = true;
      internalValueResult.attrProgram = this._attrProgram;
    }
    if (this._attrRpn !== undefined) {
      hasAnyValues = true;
      internalValueResult.attrRpn = this._attrRpn;
    }
    if (this._attrType !== undefined) {
      hasAnyValues = true;
      internalValueResult.attrType = this._attrType;
    }
    if (this._avgRtt !== undefined) {
      hasAnyValues = true;
      internalValueResult.avgRtt = this._avgRtt;
    }
    if (this._avgTcpRtt !== undefined) {
      hasAnyValues = true;
      internalValueResult.avgTcpRtt = this._avgTcpRtt;
    }
    if (this._baseDn !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseDn = this._baseDn;
    }
    if (this._community !== undefined) {
      hasAnyValues = true;
      internalValueResult.community = this._community;
    }
    if (this._currInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.currInterval = this._currInterval;
    }
    if (this._currRtt !== undefined) {
      hasAnyValues = true;
      internalValueResult.currRtt = this._currRtt;
    }
    if (this._currTcpRtt !== undefined) {
      hasAnyValues = true;
      internalValueResult.currTcpRtt = this._currTcpRtt;
    }
    if (this._dbColumn !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbColumn = this._dbColumn;
    }
    if (this._dbName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbName = this._dbName;
    }
    if (this._dbRow !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbRow = this._dbRow;
    }
    if (this._dnsExpect !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsExpect = this._dnsExpect;
    }
    if (this._dnsExpectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsExpectType = this._dnsExpectType;
    }
    if (this._dnsQtype !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsQtype = this._dnsQtype;
    }
    if (this._dnsRecurse !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsRecurse = this._dnsRecurse;
    }
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._expectRespCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.expectRespCode = this._expectRespCode;
    }
    if (this._expectRespRegexCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.expectRespRegexCode = this._expectRespRegexCode;
    }
    if (this._expectText !== undefined) {
      hasAnyValues = true;
      internalValueResult.expectText = this._expectText;
    }
    if (this._expectTextRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.expectTextRegex = this._expectTextRegex;
    }
    if (this._forceUp !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceUp = this._forceUp;
    }
    if (this._halfOpen !== undefined) {
      hasAnyValues = true;
      internalValueResult.halfOpen = this._halfOpen;
    }
    if (this._healthState !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthState = this._healthState;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._httpErrors !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpErrors = this._httpErrors;
    }
    if (this._httpReqSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpReqSent = this._httpReqSent;
    }
    if (this._httpWaitResp !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpWaitResp = this._httpWaitResp;
    }
    if (this._ipaddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipaddr = this._ipaddr;
    }
    if (this._kerberosKdc !== undefined) {
      hasAnyValues = true;
      internalValueResult.kerberosKdc = this._kerberosKdc;
    }
    if (this._kerberosPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.kerberosPort = this._kerberosPort;
    }
    if (this._kerberosRealm !== undefined) {
      hasAnyValues = true;
      internalValueResult.kerberosRealm = this._kerberosRealm;
    }
    if (this._l4ConnNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4ConnNum = this._l4ConnNum;
    }
    if (this._l4Errors !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4Errors = this._l4Errors;
    }
    if (this._ldapSsl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ldapSsl = this._ldapSsl;
    }
    if (this._ldapTls !== undefined) {
      hasAnyValues = true;
      internalValueResult.ldapTls = this._ldapTls;
    }
    if (this._macAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.macAddr = this._macAddr;
    }
    if (this._mailFrom !== undefined) {
      hasAnyValues = true;
      internalValueResult.mailFrom = this._mailFrom;
    }
    if (this._maintenanceCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenanceCode = this._maintenanceCode;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._monitorName !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorName = this._monitorName;
    }
    if (this._oid !== undefined) {
      hasAnyValues = true;
      internalValueResult.oid = this._oid;
    }
    if (this._pass !== undefined) {
      hasAnyValues = true;
      internalValueResult.pass = this._pass;
    }
    if (this._pinId !== undefined) {
      hasAnyValues = true;
      internalValueResult.pinId = this._pinId;
    }
    if (this._pname !== undefined) {
      hasAnyValues = true;
      internalValueResult.pname = this._pname;
    }
    if (this._postdata !== undefined) {
      hasAnyValues = true;
      internalValueResult.postdata = this._postdata;
    }
    if (this._processIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.processIndex = this._processIndex;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._rcptTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.rcptTo = this._rcptTo;
    }
    if (this._rcvInteger !== undefined) {
      hasAnyValues = true;
      internalValueResult.rcvInteger = this._rcvInteger;
    }
    if (this._receive !== undefined) {
      hasAnyValues = true;
      internalValueResult.receive = this._receive;
    }
    if (this._receivedFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.receivedFail = this._receivedFail;
    }
    if (this._receivedSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.receivedSuccess = this._receivedSuccess;
    }
    if (this._respCont !== undefined) {
      hasAnyValues = true;
      internalValueResult.respCont = this._respCont;
    }
    if (this._responseTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseTimeout = this._responseTimeout;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    if (this._send !== undefined) {
      hasAnyValues = true;
      internalValueResult.send = this._send;
    }
    if (this._sipRegister !== undefined) {
      hasAnyValues = true;
      internalValueResult.sipRegister = this._sipRegister;
    }
    if (this._snmpOperation !== undefined) {
      hasAnyValues = true;
      internalValueResult.snmpOperation = this._snmpOperation;
    }
    if (this._starttls !== undefined) {
      hasAnyValues = true;
      internalValueResult.starttls = this._starttls;
    }
    if (this._stateReason !== undefined) {
      hasAnyValues = true;
      internalValueResult.stateReason = this._stateReason;
    }
    if (this._statusCodeRcv !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCodeRcv = this._statusCodeRcv;
    }
    if (this._tcpOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpOnly = this._tcpOnly;
    }
    if (this._transportProto !== undefined) {
      hasAnyValues = true;
      internalValueResult.transportProto = this._transportProto;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbHealthCheckDetailsOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._arguments = undefined;
      this._attrAliasAddr = undefined;
      this._attrPort = undefined;
      this._attrProgram = undefined;
      this._attrRpn = undefined;
      this._attrType = undefined;
      this._avgRtt = undefined;
      this._avgTcpRtt = undefined;
      this._baseDn = undefined;
      this._community = undefined;
      this._currInterval = undefined;
      this._currRtt = undefined;
      this._currTcpRtt = undefined;
      this._dbColumn = undefined;
      this._dbName = undefined;
      this._dbRow = undefined;
      this._dnsExpect = undefined;
      this._dnsExpectType = undefined;
      this._dnsQtype = undefined;
      this._dnsRecurse = undefined;
      this._domain = undefined;
      this._expectRespCode = undefined;
      this._expectRespRegexCode = undefined;
      this._expectText = undefined;
      this._expectTextRegex = undefined;
      this._forceUp = undefined;
      this._halfOpen = undefined;
      this._healthState = undefined;
      this._host = undefined;
      this._httpErrors = undefined;
      this._httpReqSent = undefined;
      this._httpWaitResp = undefined;
      this._ipaddr = undefined;
      this._kerberosKdc = undefined;
      this._kerberosPort = undefined;
      this._kerberosRealm = undefined;
      this._l4ConnNum = undefined;
      this._l4Errors = undefined;
      this._ldapSsl = undefined;
      this._ldapTls = undefined;
      this._macAddr = undefined;
      this._mailFrom = undefined;
      this._maintenanceCode = undefined;
      this._method = undefined;
      this._monitorName = undefined;
      this._oid = undefined;
      this._pass = undefined;
      this._pinId = undefined;
      this._pname = undefined;
      this._postdata = undefined;
      this._processIndex = undefined;
      this._query = undefined;
      this._rcptTo = undefined;
      this._rcvInteger = undefined;
      this._receive = undefined;
      this._receivedFail = undefined;
      this._receivedSuccess = undefined;
      this._respCont = undefined;
      this._responseTimeout = undefined;
      this._secret = undefined;
      this._send = undefined;
      this._sipRegister = undefined;
      this._snmpOperation = undefined;
      this._starttls = undefined;
      this._stateReason = undefined;
      this._statusCodeRcv = undefined;
      this._tcpOnly = undefined;
      this._transportProto = undefined;
      this._url = undefined;
      this._user = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._arguments = value.arguments;
      this._attrAliasAddr = value.attrAliasAddr;
      this._attrPort = value.attrPort;
      this._attrProgram = value.attrProgram;
      this._attrRpn = value.attrRpn;
      this._attrType = value.attrType;
      this._avgRtt = value.avgRtt;
      this._avgTcpRtt = value.avgTcpRtt;
      this._baseDn = value.baseDn;
      this._community = value.community;
      this._currInterval = value.currInterval;
      this._currRtt = value.currRtt;
      this._currTcpRtt = value.currTcpRtt;
      this._dbColumn = value.dbColumn;
      this._dbName = value.dbName;
      this._dbRow = value.dbRow;
      this._dnsExpect = value.dnsExpect;
      this._dnsExpectType = value.dnsExpectType;
      this._dnsQtype = value.dnsQtype;
      this._dnsRecurse = value.dnsRecurse;
      this._domain = value.domain;
      this._expectRespCode = value.expectRespCode;
      this._expectRespRegexCode = value.expectRespRegexCode;
      this._expectText = value.expectText;
      this._expectTextRegex = value.expectTextRegex;
      this._forceUp = value.forceUp;
      this._halfOpen = value.halfOpen;
      this._healthState = value.healthState;
      this._host = value.host;
      this._httpErrors = value.httpErrors;
      this._httpReqSent = value.httpReqSent;
      this._httpWaitResp = value.httpWaitResp;
      this._ipaddr = value.ipaddr;
      this._kerberosKdc = value.kerberosKdc;
      this._kerberosPort = value.kerberosPort;
      this._kerberosRealm = value.kerberosRealm;
      this._l4ConnNum = value.l4ConnNum;
      this._l4Errors = value.l4Errors;
      this._ldapSsl = value.ldapSsl;
      this._ldapTls = value.ldapTls;
      this._macAddr = value.macAddr;
      this._mailFrom = value.mailFrom;
      this._maintenanceCode = value.maintenanceCode;
      this._method = value.method;
      this._monitorName = value.monitorName;
      this._oid = value.oid;
      this._pass = value.pass;
      this._pinId = value.pinId;
      this._pname = value.pname;
      this._postdata = value.postdata;
      this._processIndex = value.processIndex;
      this._query = value.query;
      this._rcptTo = value.rcptTo;
      this._rcvInteger = value.rcvInteger;
      this._receive = value.receive;
      this._receivedFail = value.receivedFail;
      this._receivedSuccess = value.receivedSuccess;
      this._respCont = value.respCont;
      this._responseTimeout = value.responseTimeout;
      this._secret = value.secret;
      this._send = value.send;
      this._sipRegister = value.sipRegister;
      this._snmpOperation = value.snmpOperation;
      this._starttls = value.starttls;
      this._stateReason = value.stateReason;
      this._statusCodeRcv = value.statusCodeRcv;
      this._tcpOnly = value.tcpOnly;
      this._transportProto = value.transportProto;
      this._url = value.url;
      this._user = value.user;
    }
  }

  // arguments - computed: false, optional: true, required: false
  private _arguments?: string; 
  public get arguments() {
    return this.getStringAttribute('arguments');
  }
  public set arguments(value: string) {
    this._arguments = value;
  }
  public resetArguments() {
    this._arguments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argumentsInput() {
    return this._arguments;
  }

  // attr_alias_addr - computed: false, optional: true, required: false
  private _attrAliasAddr?: string; 
  public get attrAliasAddr() {
    return this.getStringAttribute('attr_alias_addr');
  }
  public set attrAliasAddr(value: string) {
    this._attrAliasAddr = value;
  }
  public resetAttrAliasAddr() {
    this._attrAliasAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attrAliasAddrInput() {
    return this._attrAliasAddr;
  }

  // attr_port - computed: false, optional: true, required: false
  private _attrPort?: number; 
  public get attrPort() {
    return this.getNumberAttribute('attr_port');
  }
  public set attrPort(value: number) {
    this._attrPort = value;
  }
  public resetAttrPort() {
    this._attrPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attrPortInput() {
    return this._attrPort;
  }

  // attr_program - computed: false, optional: true, required: false
  private _attrProgram?: string; 
  public get attrProgram() {
    return this.getStringAttribute('attr_program');
  }
  public set attrProgram(value: string) {
    this._attrProgram = value;
  }
  public resetAttrProgram() {
    this._attrProgram = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attrProgramInput() {
    return this._attrProgram;
  }

  // attr_rpn - computed: false, optional: true, required: false
  private _attrRpn?: string; 
  public get attrRpn() {
    return this.getStringAttribute('attr_rpn');
  }
  public set attrRpn(value: string) {
    this._attrRpn = value;
  }
  public resetAttrRpn() {
    this._attrRpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attrRpnInput() {
    return this._attrRpn;
  }

  // attr_type - computed: false, optional: true, required: false
  private _attrType?: string; 
  public get attrType() {
    return this.getStringAttribute('attr_type');
  }
  public set attrType(value: string) {
    this._attrType = value;
  }
  public resetAttrType() {
    this._attrType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attrTypeInput() {
    return this._attrType;
  }

  // avg_rtt - computed: false, optional: true, required: false
  private _avgRtt?: number; 
  public get avgRtt() {
    return this.getNumberAttribute('avg_rtt');
  }
  public set avgRtt(value: number) {
    this._avgRtt = value;
  }
  public resetAvgRtt() {
    this._avgRtt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avgRttInput() {
    return this._avgRtt;
  }

  // avg_tcp_rtt - computed: false, optional: true, required: false
  private _avgTcpRtt?: number; 
  public get avgTcpRtt() {
    return this.getNumberAttribute('avg_tcp_rtt');
  }
  public set avgTcpRtt(value: number) {
    this._avgTcpRtt = value;
  }
  public resetAvgTcpRtt() {
    this._avgTcpRtt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avgTcpRttInput() {
    return this._avgTcpRtt;
  }

  // base_dn - computed: false, optional: true, required: false
  private _baseDn?: string; 
  public get baseDn() {
    return this.getStringAttribute('base_dn');
  }
  public set baseDn(value: string) {
    this._baseDn = value;
  }
  public resetBaseDn() {
    this._baseDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseDnInput() {
    return this._baseDn;
  }

  // community - computed: false, optional: true, required: false
  private _community?: string; 
  public get community() {
    return this.getStringAttribute('community');
  }
  public set community(value: string) {
    this._community = value;
  }
  public resetCommunity() {
    this._community = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get communityInput() {
    return this._community;
  }

  // curr_interval - computed: false, optional: true, required: false
  private _currInterval?: number; 
  public get currInterval() {
    return this.getNumberAttribute('curr_interval');
  }
  public set currInterval(value: number) {
    this._currInterval = value;
  }
  public resetCurrInterval() {
    this._currInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currIntervalInput() {
    return this._currInterval;
  }

  // curr_rtt - computed: false, optional: true, required: false
  private _currRtt?: number; 
  public get currRtt() {
    return this.getNumberAttribute('curr_rtt');
  }
  public set currRtt(value: number) {
    this._currRtt = value;
  }
  public resetCurrRtt() {
    this._currRtt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currRttInput() {
    return this._currRtt;
  }

  // curr_tcp_rtt - computed: false, optional: true, required: false
  private _currTcpRtt?: number; 
  public get currTcpRtt() {
    return this.getNumberAttribute('curr_tcp_rtt');
  }
  public set currTcpRtt(value: number) {
    this._currTcpRtt = value;
  }
  public resetCurrTcpRtt() {
    this._currTcpRtt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currTcpRttInput() {
    return this._currTcpRtt;
  }

  // db_column - computed: false, optional: true, required: false
  private _dbColumn?: number; 
  public get dbColumn() {
    return this.getNumberAttribute('db_column');
  }
  public set dbColumn(value: number) {
    this._dbColumn = value;
  }
  public resetDbColumn() {
    this._dbColumn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbColumnInput() {
    return this._dbColumn;
  }

  // db_name - computed: false, optional: true, required: false
  private _dbName?: string; 
  public get dbName() {
    return this.getStringAttribute('db_name');
  }
  public set dbName(value: string) {
    this._dbName = value;
  }
  public resetDbName() {
    this._dbName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbNameInput() {
    return this._dbName;
  }

  // db_row - computed: false, optional: true, required: false
  private _dbRow?: number; 
  public get dbRow() {
    return this.getNumberAttribute('db_row');
  }
  public set dbRow(value: number) {
    this._dbRow = value;
  }
  public resetDbRow() {
    this._dbRow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbRowInput() {
    return this._dbRow;
  }

  // dns_expect - computed: false, optional: true, required: false
  private _dnsExpect?: string; 
  public get dnsExpect() {
    return this.getStringAttribute('dns_expect');
  }
  public set dnsExpect(value: string) {
    this._dnsExpect = value;
  }
  public resetDnsExpect() {
    this._dnsExpect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsExpectInput() {
    return this._dnsExpect;
  }

  // dns_expect_type - computed: false, optional: true, required: false
  private _dnsExpectType?: number; 
  public get dnsExpectType() {
    return this.getNumberAttribute('dns_expect_type');
  }
  public set dnsExpectType(value: number) {
    this._dnsExpectType = value;
  }
  public resetDnsExpectType() {
    this._dnsExpectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsExpectTypeInput() {
    return this._dnsExpectType;
  }

  // dns_qtype - computed: false, optional: true, required: false
  private _dnsQtype?: number; 
  public get dnsQtype() {
    return this.getNumberAttribute('dns_qtype');
  }
  public set dnsQtype(value: number) {
    this._dnsQtype = value;
  }
  public resetDnsQtype() {
    this._dnsQtype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsQtypeInput() {
    return this._dnsQtype;
  }

  // dns_recurse - computed: false, optional: true, required: false
  private _dnsRecurse?: number; 
  public get dnsRecurse() {
    return this.getNumberAttribute('dns_recurse');
  }
  public set dnsRecurse(value: number) {
    this._dnsRecurse = value;
  }
  public resetDnsRecurse() {
    this._dnsRecurse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRecurseInput() {
    return this._dnsRecurse;
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // expect_resp_code - computed: false, optional: true, required: false
  private _expectRespCode?: string; 
  public get expectRespCode() {
    return this.getStringAttribute('expect_resp_code');
  }
  public set expectRespCode(value: string) {
    this._expectRespCode = value;
  }
  public resetExpectRespCode() {
    this._expectRespCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectRespCodeInput() {
    return this._expectRespCode;
  }

  // expect_resp_regex_code - computed: false, optional: true, required: false
  private _expectRespRegexCode?: string; 
  public get expectRespRegexCode() {
    return this.getStringAttribute('expect_resp_regex_code');
  }
  public set expectRespRegexCode(value: string) {
    this._expectRespRegexCode = value;
  }
  public resetExpectRespRegexCode() {
    this._expectRespRegexCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectRespRegexCodeInput() {
    return this._expectRespRegexCode;
  }

  // expect_text - computed: false, optional: true, required: false
  private _expectText?: string; 
  public get expectText() {
    return this.getStringAttribute('expect_text');
  }
  public set expectText(value: string) {
    this._expectText = value;
  }
  public resetExpectText() {
    this._expectText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectTextInput() {
    return this._expectText;
  }

  // expect_text_regex - computed: false, optional: true, required: false
  private _expectTextRegex?: string; 
  public get expectTextRegex() {
    return this.getStringAttribute('expect_text_regex');
  }
  public set expectTextRegex(value: string) {
    this._expectTextRegex = value;
  }
  public resetExpectTextRegex() {
    this._expectTextRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectTextRegexInput() {
    return this._expectTextRegex;
  }

  // force_up - computed: false, optional: true, required: false
  private _forceUp?: number; 
  public get forceUp() {
    return this.getNumberAttribute('force_up');
  }
  public set forceUp(value: number) {
    this._forceUp = value;
  }
  public resetForceUp() {
    this._forceUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceUpInput() {
    return this._forceUp;
  }

  // half_open - computed: false, optional: true, required: false
  private _halfOpen?: number; 
  public get halfOpen() {
    return this.getNumberAttribute('half_open');
  }
  public set halfOpen(value: number) {
    this._halfOpen = value;
  }
  public resetHalfOpen() {
    this._halfOpen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get halfOpenInput() {
    return this._halfOpen;
  }

  // health_state - computed: false, optional: true, required: false
  private _healthState?: string; 
  public get healthState() {
    return this.getStringAttribute('health_state');
  }
  public set healthState(value: string) {
    this._healthState = value;
  }
  public resetHealthState() {
    this._healthState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthStateInput() {
    return this._healthState;
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // http_errors - computed: false, optional: true, required: false
  private _httpErrors?: number; 
  public get httpErrors() {
    return this.getNumberAttribute('http_errors');
  }
  public set httpErrors(value: number) {
    this._httpErrors = value;
  }
  public resetHttpErrors() {
    this._httpErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpErrorsInput() {
    return this._httpErrors;
  }

  // http_req_sent - computed: false, optional: true, required: false
  private _httpReqSent?: number; 
  public get httpReqSent() {
    return this.getNumberAttribute('http_req_sent');
  }
  public set httpReqSent(value: number) {
    this._httpReqSent = value;
  }
  public resetHttpReqSent() {
    this._httpReqSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpReqSentInput() {
    return this._httpReqSent;
  }

  // http_wait_resp - computed: false, optional: true, required: false
  private _httpWaitResp?: number; 
  public get httpWaitResp() {
    return this.getNumberAttribute('http_wait_resp');
  }
  public set httpWaitResp(value: number) {
    this._httpWaitResp = value;
  }
  public resetHttpWaitResp() {
    this._httpWaitResp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpWaitRespInput() {
    return this._httpWaitResp;
  }

  // ipaddr - computed: false, optional: true, required: false
  private _ipaddr?: string; 
  public get ipaddr() {
    return this.getStringAttribute('ipaddr');
  }
  public set ipaddr(value: string) {
    this._ipaddr = value;
  }
  public resetIpaddr() {
    this._ipaddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipaddrInput() {
    return this._ipaddr;
  }

  // kerberos_kdc - computed: false, optional: true, required: false
  private _kerberosKdc?: string; 
  public get kerberosKdc() {
    return this.getStringAttribute('kerberos_kdc');
  }
  public set kerberosKdc(value: string) {
    this._kerberosKdc = value;
  }
  public resetKerberosKdc() {
    this._kerberosKdc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosKdcInput() {
    return this._kerberosKdc;
  }

  // kerberos_port - computed: false, optional: true, required: false
  private _kerberosPort?: number; 
  public get kerberosPort() {
    return this.getNumberAttribute('kerberos_port');
  }
  public set kerberosPort(value: number) {
    this._kerberosPort = value;
  }
  public resetKerberosPort() {
    this._kerberosPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosPortInput() {
    return this._kerberosPort;
  }

  // kerberos_realm - computed: false, optional: true, required: false
  private _kerberosRealm?: string; 
  public get kerberosRealm() {
    return this.getStringAttribute('kerberos_realm');
  }
  public set kerberosRealm(value: string) {
    this._kerberosRealm = value;
  }
  public resetKerberosRealm() {
    this._kerberosRealm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosRealmInput() {
    return this._kerberosRealm;
  }

  // l4_conn_num - computed: false, optional: true, required: false
  private _l4ConnNum?: number; 
  public get l4ConnNum() {
    return this.getNumberAttribute('l4_conn_num');
  }
  public set l4ConnNum(value: number) {
    this._l4ConnNum = value;
  }
  public resetL4ConnNum() {
    this._l4ConnNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4ConnNumInput() {
    return this._l4ConnNum;
  }

  // l4_errors - computed: false, optional: true, required: false
  private _l4Errors?: number; 
  public get l4Errors() {
    return this.getNumberAttribute('l4_errors');
  }
  public set l4Errors(value: number) {
    this._l4Errors = value;
  }
  public resetL4Errors() {
    this._l4Errors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4ErrorsInput() {
    return this._l4Errors;
  }

  // ldap_ssl - computed: false, optional: true, required: false
  private _ldapSsl?: number; 
  public get ldapSsl() {
    return this.getNumberAttribute('ldap_ssl');
  }
  public set ldapSsl(value: number) {
    this._ldapSsl = value;
  }
  public resetLdapSsl() {
    this._ldapSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapSslInput() {
    return this._ldapSsl;
  }

  // ldap_tls - computed: false, optional: true, required: false
  private _ldapTls?: number; 
  public get ldapTls() {
    return this.getNumberAttribute('ldap_tls');
  }
  public set ldapTls(value: number) {
    this._ldapTls = value;
  }
  public resetLdapTls() {
    this._ldapTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapTlsInput() {
    return this._ldapTls;
  }

  // mac_addr - computed: false, optional: true, required: false
  private _macAddr?: string; 
  public get macAddr() {
    return this.getStringAttribute('mac_addr');
  }
  public set macAddr(value: string) {
    this._macAddr = value;
  }
  public resetMacAddr() {
    this._macAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAddrInput() {
    return this._macAddr;
  }

  // mail_from - computed: false, optional: true, required: false
  private _mailFrom?: string; 
  public get mailFrom() {
    return this.getStringAttribute('mail_from');
  }
  public set mailFrom(value: string) {
    this._mailFrom = value;
  }
  public resetMailFrom() {
    this._mailFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mailFromInput() {
    return this._mailFrom;
  }

  // maintenance_code - computed: false, optional: true, required: false
  private _maintenanceCode?: string; 
  public get maintenanceCode() {
    return this.getStringAttribute('maintenance_code');
  }
  public set maintenanceCode(value: string) {
    this._maintenanceCode = value;
  }
  public resetMaintenanceCode() {
    this._maintenanceCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceCodeInput() {
    return this._maintenanceCode;
  }

  // method - computed: false, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // monitor_name - computed: false, optional: true, required: false
  private _monitorName?: string; 
  public get monitorName() {
    return this.getStringAttribute('monitor_name');
  }
  public set monitorName(value: string) {
    this._monitorName = value;
  }
  public resetMonitorName() {
    this._monitorName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorNameInput() {
    return this._monitorName;
  }

  // oid - computed: false, optional: true, required: false
  private _oid?: string; 
  public get oid() {
    return this.getStringAttribute('oid');
  }
  public set oid(value: string) {
    this._oid = value;
  }
  public resetOid() {
    this._oid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidInput() {
    return this._oid;
  }

  // pass - computed: false, optional: true, required: false
  private _pass?: string; 
  public get pass() {
    return this.getStringAttribute('pass');
  }
  public set pass(value: string) {
    this._pass = value;
  }
  public resetPass() {
    this._pass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passInput() {
    return this._pass;
  }

  // pin_id - computed: false, optional: true, required: false
  private _pinId?: number; 
  public get pinId() {
    return this.getNumberAttribute('pin_id');
  }
  public set pinId(value: number) {
    this._pinId = value;
  }
  public resetPinId() {
    this._pinId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pinIdInput() {
    return this._pinId;
  }

  // pname - computed: false, optional: true, required: false
  private _pname?: string; 
  public get pname() {
    return this.getStringAttribute('pname');
  }
  public set pname(value: string) {
    this._pname = value;
  }
  public resetPname() {
    this._pname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pnameInput() {
    return this._pname;
  }

  // postdata - computed: false, optional: true, required: false
  private _postdata?: string; 
  public get postdata() {
    return this.getStringAttribute('postdata');
  }
  public set postdata(value: string) {
    this._postdata = value;
  }
  public resetPostdata() {
    this._postdata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postdataInput() {
    return this._postdata;
  }

  // process_index - computed: false, optional: true, required: false
  private _processIndex?: number; 
  public get processIndex() {
    return this.getNumberAttribute('process_index');
  }
  public set processIndex(value: number) {
    this._processIndex = value;
  }
  public resetProcessIndex() {
    this._processIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processIndexInput() {
    return this._processIndex;
  }

  // query - computed: false, optional: true, required: false
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  public resetQuery() {
    this._query = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // rcpt_to - computed: false, optional: true, required: false
  private _rcptTo?: string; 
  public get rcptTo() {
    return this.getStringAttribute('rcpt_to');
  }
  public set rcptTo(value: string) {
    this._rcptTo = value;
  }
  public resetRcptTo() {
    this._rcptTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcptToInput() {
    return this._rcptTo;
  }

  // rcv_integer - computed: false, optional: true, required: false
  private _rcvInteger?: number; 
  public get rcvInteger() {
    return this.getNumberAttribute('rcv_integer');
  }
  public set rcvInteger(value: number) {
    this._rcvInteger = value;
  }
  public resetRcvInteger() {
    this._rcvInteger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcvIntegerInput() {
    return this._rcvInteger;
  }

  // receive - computed: false, optional: true, required: false
  private _receive?: string; 
  public get receive() {
    return this.getStringAttribute('receive');
  }
  public set receive(value: string) {
    this._receive = value;
  }
  public resetReceive() {
    this._receive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receiveInput() {
    return this._receive;
  }

  // received_fail - computed: false, optional: true, required: false
  private _receivedFail?: number; 
  public get receivedFail() {
    return this.getNumberAttribute('received_fail');
  }
  public set receivedFail(value: number) {
    this._receivedFail = value;
  }
  public resetReceivedFail() {
    this._receivedFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receivedFailInput() {
    return this._receivedFail;
  }

  // received_success - computed: false, optional: true, required: false
  private _receivedSuccess?: number; 
  public get receivedSuccess() {
    return this.getNumberAttribute('received_success');
  }
  public set receivedSuccess(value: number) {
    this._receivedSuccess = value;
  }
  public resetReceivedSuccess() {
    this._receivedSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receivedSuccessInput() {
    return this._receivedSuccess;
  }

  // resp_cont - computed: false, optional: true, required: false
  private _respCont?: string; 
  public get respCont() {
    return this.getStringAttribute('resp_cont');
  }
  public set respCont(value: string) {
    this._respCont = value;
  }
  public resetRespCont() {
    this._respCont = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get respContInput() {
    return this._respCont;
  }

  // response_timeout - computed: false, optional: true, required: false
  private _responseTimeout?: number; 
  public get responseTimeout() {
    return this.getNumberAttribute('response_timeout');
  }
  public set responseTimeout(value: number) {
    this._responseTimeout = value;
  }
  public resetResponseTimeout() {
    this._responseTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseTimeoutInput() {
    return this._responseTimeout;
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // send - computed: false, optional: true, required: false
  private _send?: string; 
  public get send() {
    return this.getStringAttribute('send');
  }
  public set send(value: string) {
    this._send = value;
  }
  public resetSend() {
    this._send = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendInput() {
    return this._send;
  }

  // sip_register - computed: false, optional: true, required: false
  private _sipRegister?: number; 
  public get sipRegister() {
    return this.getNumberAttribute('sip_register');
  }
  public set sipRegister(value: number) {
    this._sipRegister = value;
  }
  public resetSipRegister() {
    this._sipRegister = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipRegisterInput() {
    return this._sipRegister;
  }

  // snmp_operation - computed: false, optional: true, required: false
  private _snmpOperation?: number; 
  public get snmpOperation() {
    return this.getNumberAttribute('snmp_operation');
  }
  public set snmpOperation(value: number) {
    this._snmpOperation = value;
  }
  public resetSnmpOperation() {
    this._snmpOperation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpOperationInput() {
    return this._snmpOperation;
  }

  // starttls - computed: false, optional: true, required: false
  private _starttls?: number; 
  public get starttls() {
    return this.getNumberAttribute('starttls');
  }
  public set starttls(value: number) {
    this._starttls = value;
  }
  public resetStarttls() {
    this._starttls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get starttlsInput() {
    return this._starttls;
  }

  // state_reason - computed: false, optional: true, required: false
  private _stateReason?: string; 
  public get stateReason() {
    return this.getStringAttribute('state_reason');
  }
  public set stateReason(value: string) {
    this._stateReason = value;
  }
  public resetStateReason() {
    this._stateReason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateReasonInput() {
    return this._stateReason;
  }

  // status_code_rcv - computed: false, optional: true, required: false
  private _statusCodeRcv?: number; 
  public get statusCodeRcv() {
    return this.getNumberAttribute('status_code_rcv');
  }
  public set statusCodeRcv(value: number) {
    this._statusCodeRcv = value;
  }
  public resetStatusCodeRcv() {
    this._statusCodeRcv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCodeRcvInput() {
    return this._statusCodeRcv;
  }

  // tcp_only - computed: false, optional: true, required: false
  private _tcpOnly?: number; 
  public get tcpOnly() {
    return this.getNumberAttribute('tcp_only');
  }
  public set tcpOnly(value: number) {
    this._tcpOnly = value;
  }
  public resetTcpOnly() {
    this._tcpOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpOnlyInput() {
    return this._tcpOnly;
  }

  // transport_proto - computed: false, optional: true, required: false
  private _transportProto?: number; 
  public get transportProto() {
    return this.getNumberAttribute('transport_proto');
  }
  public set transportProto(value: number) {
    this._transportProto = value;
  }
  public resetTransportProto() {
    this._transportProto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportProtoInput() {
    return this._transportProto;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_check_details_oper thunder_slb_health_check_details_oper}
*/
export class DataThunderSlbHealthCheckDetailsOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_health_check_details_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSlbHealthCheckDetailsOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSlbHealthCheckDetailsOper to import
  * @param importFromId The id of the existing DataThunderSlbHealthCheckDetailsOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_check_details_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSlbHealthCheckDetailsOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_health_check_details_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_check_details_oper thunder_slb_health_check_details_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSlbHealthCheckDetailsOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSlbHealthCheckDetailsOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_health_check_details_oper',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._oper.internalValue = config.oper;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderSlbHealthCheckDetailsOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSlbHealthCheckDetailsOperOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      oper: dataThunderSlbHealthCheckDetailsOperOperToTerraform(this._oper.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oper: {
        value: dataThunderSlbHealthCheckDetailsOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSlbHealthCheckDetailsOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
