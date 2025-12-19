// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_dns_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSlbDnsStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_dns_stats#id DataThunderSlbDnsStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_dns_stats#stats DataThunderSlbDnsStats#stats}
  */
  readonly stats?: DataThunderSlbDnsStatsStats;
}
export interface DataThunderSlbDnsStatsStats {
  /**
  * Total Query Class Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_dns_stats#filter_class_drop DataThunderSlbDnsStats#filter_class_drop}
  */
  readonly filterClassDrop?: number;
  /**
  * Total Query ANY Type Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_dns_stats#filter_type_any_drop DataThunderSlbDnsStats#filter_type_any_drop}
  */
  readonly filterTypeAnyDrop?: number;
  /**
  * Total Query Type Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_dns_stats#filter_type_drop DataThunderSlbDnsStats#filter_type_drop}
  */
  readonly filterTypeDrop?: number;
  /**
  * invalid query length to conver to UDP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_dns_stats#invalid_q_len_to_udp DataThunderSlbDnsStats#invalid_q_len_to_udp}
  */
  readonly invalidQLenToUdp?: number;
  /**
  * (NAT) No. of resource failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_dns_stats#nat_no_resource DataThunderSlbDnsStats#nat_no_resource}
  */
  readonly natNoResource?: number;
  /**
  * (NAT) No. of resource failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_dns_stats#nat_no_resp DataThunderSlbDnsStats#nat_no_resp}
  */
  readonly natNoResp?: number;
  /**
  * (NAT) No. of requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_dns_stats#nat_req DataThunderSlbDnsStats#nat_req}
  */
  readonly natReq?: number;
  /**
  * (NAT) No. of request retransmits
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_dns_stats#nat_req_rexmit DataThunderSlbDnsStats#nat_req_rexmit}
  */
  readonly natReqRexmit?: number;
  /**
  * (NAT) No. of responses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_dns_stats#nat_resp DataThunderSlbDnsStats#nat_resp}
  */
  readonly natResp?: number;
  /**
  * (NAT) No. of requests with no response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_dns_stats#nat_resp_no_match DataThunderSlbDnsStats#nat_resp_no_match}
  */
  readonly natRespNoMatch?: number;
  /**
  * (NAT)DNS requests drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_dns_stats#nat_slb_drop DataThunderSlbDnsStats#nat_slb_drop}
  */
  readonly natSlbDrop?: number;
  /**
  * (NAT) No. of requests reusing a transaction id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_dns_stats#nat_xid_reused DataThunderSlbDnsStats#nat_xid_reused}
  */
  readonly natXidReused?: number;
  /**
  * RPZ Action Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_dns_stats#rpz_action_drop DataThunderSlbDnsStats#rpz_action_drop}
  */
  readonly rpzActionDrop?: number;
  /**
  * RPZ Action Local Data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_dns_stats#rpz_action_local_data DataThunderSlbDnsStats#rpz_action_local_data}
  */
  readonly rpzActionLocalData?: number;
  /**
  * RPZ Action NODATA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_dns_stats#rpz_action_nodata DataThunderSlbDnsStats#rpz_action_nodata}
  */
  readonly rpzActionNodata?: number;
  /**
  * RPZ Action NXDOMAIN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_dns_stats#rpz_action_nxdomain DataThunderSlbDnsStats#rpz_action_nxdomain}
  */
  readonly rpzActionNxdomain?: number;
  /**
  * RPZ Action Pass Through
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_dns_stats#rpz_action_pass_thru DataThunderSlbDnsStats#rpz_action_pass_thru}
  */
  readonly rpzActionPassThru?: number;
  /**
  * RPZ Action TCP Only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_dns_stats#rpz_action_tcp_only DataThunderSlbDnsStats#rpz_action_tcp_only}
  */
  readonly rpzActionTcpOnly?: number;
  /**
  * No. of client ssl success
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_dns_stats#slb_dns_client_ssl_succ DataThunderSlbDnsStats#slb_dns_client_ssl_succ}
  */
  readonly slbDnsClientSslSucc?: number;
  /**
  * Number of ecs inserted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_dns_stats#slb_dns_edns_ecs_inserted DataThunderSlbDnsStats#slb_dns_edns_ecs_inserted}
  */
  readonly slbDnsEdnsEcsInserted?: number;
  /**
  * Number of ecs from client received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_dns_stats#slb_dns_edns_ecs_received DataThunderSlbDnsStats#slb_dns_edns_ecs_received}
  */
  readonly slbDnsEdnsEcsReceived?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_dns_stats#slb_dns_edns_subnet_to_server_removed DataThunderSlbDnsStats#slb_dns_edns_subnet_to_server_removed}
  */
  readonly slbDnsEdnsSubnetToServerRemoved?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_dns_stats#slb_dns_padding_to_client_added DataThunderSlbDnsStats#slb_dns_padding_to_client_added}
  */
  readonly slbDnsPaddingToClientAdded?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_dns_stats#slb_dns_padding_to_server_removed DataThunderSlbDnsStats#slb_dns_padding_to_server_removed}
  */
  readonly slbDnsPaddingToServerRemoved?: number;
  /**
  * No. of server ssl success
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_dns_stats#slb_dns_server_ssl_succ DataThunderSlbDnsStats#slb_dns_server_ssl_succ}
  */
  readonly slbDnsServerSslSucc?: number;
  /**
  * No. of backend udp connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_dns_stats#slb_dns_udp_conn DataThunderSlbDnsStats#slb_dns_udp_conn}
  */
  readonly slbDnsUdpConn?: number;
  /**
  * No. of backend udp conn established
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_dns_stats#slb_dns_udp_conn_succ DataThunderSlbDnsStats#slb_dns_udp_conn_succ}
  */
  readonly slbDnsUdpConnSucc?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_dns_stats#slb_dns_udp_retransmit DataThunderSlbDnsStats#slb_dns_udp_retransmit}
  */
  readonly slbDnsUdpRetransmit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_dns_stats#slb_dns_udp_retransmit_fail DataThunderSlbDnsStats#slb_dns_udp_retransmit_fail}
  */
  readonly slbDnsUdpRetransmitFail?: number;
  /**
  * DNS requests drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_dns_stats#slb_drop DataThunderSlbDnsStats#slb_drop}
  */
  readonly slbDrop?: number;
  /**
  * No. of resource failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_dns_stats#slb_no_resource DataThunderSlbDnsStats#slb_no_resource}
  */
  readonly slbNoResource?: number;
  /**
  * No. of requests with no response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_dns_stats#slb_no_resp DataThunderSlbDnsStats#slb_no_resp}
  */
  readonly slbNoResp?: number;
  /**
  * No. of requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_dns_stats#slb_req DataThunderSlbDnsStats#slb_req}
  */
  readonly slbReq?: number;
  /**
  * No. of requests retransmit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_dns_stats#slb_req_rexmit DataThunderSlbDnsStats#slb_req_rexmit}
  */
  readonly slbReqRexmit?: number;
  /**
  * No. of responses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_dns_stats#slb_resp DataThunderSlbDnsStats#slb_resp}
  */
  readonly slbResp?: number;
  /**
  * No. of requests and responses with no match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_dns_stats#slb_resp_no_match DataThunderSlbDnsStats#slb_resp_no_match}
  */
  readonly slbRespNoMatch?: number;
}

export function dataThunderSlbDnsStatsStatsToTerraform(struct?: DataThunderSlbDnsStatsStatsOutputReference | DataThunderSlbDnsStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter_class_drop: cdktf.numberToTerraform(struct!.filterClassDrop),
    filter_type_any_drop: cdktf.numberToTerraform(struct!.filterTypeAnyDrop),
    filter_type_drop: cdktf.numberToTerraform(struct!.filterTypeDrop),
    invalid_q_len_to_udp: cdktf.numberToTerraform(struct!.invalidQLenToUdp),
    nat_no_resource: cdktf.numberToTerraform(struct!.natNoResource),
    nat_no_resp: cdktf.numberToTerraform(struct!.natNoResp),
    nat_req: cdktf.numberToTerraform(struct!.natReq),
    nat_req_rexmit: cdktf.numberToTerraform(struct!.natReqRexmit),
    nat_resp: cdktf.numberToTerraform(struct!.natResp),
    nat_resp_no_match: cdktf.numberToTerraform(struct!.natRespNoMatch),
    nat_slb_drop: cdktf.numberToTerraform(struct!.natSlbDrop),
    nat_xid_reused: cdktf.numberToTerraform(struct!.natXidReused),
    rpz_action_drop: cdktf.numberToTerraform(struct!.rpzActionDrop),
    rpz_action_local_data: cdktf.numberToTerraform(struct!.rpzActionLocalData),
    rpz_action_nodata: cdktf.numberToTerraform(struct!.rpzActionNodata),
    rpz_action_nxdomain: cdktf.numberToTerraform(struct!.rpzActionNxdomain),
    rpz_action_pass_thru: cdktf.numberToTerraform(struct!.rpzActionPassThru),
    rpz_action_tcp_only: cdktf.numberToTerraform(struct!.rpzActionTcpOnly),
    slb_dns_client_ssl_succ: cdktf.numberToTerraform(struct!.slbDnsClientSslSucc),
    slb_dns_edns_ecs_inserted: cdktf.numberToTerraform(struct!.slbDnsEdnsEcsInserted),
    slb_dns_edns_ecs_received: cdktf.numberToTerraform(struct!.slbDnsEdnsEcsReceived),
    slb_dns_edns_subnet_to_server_removed: cdktf.numberToTerraform(struct!.slbDnsEdnsSubnetToServerRemoved),
    slb_dns_padding_to_client_added: cdktf.numberToTerraform(struct!.slbDnsPaddingToClientAdded),
    slb_dns_padding_to_server_removed: cdktf.numberToTerraform(struct!.slbDnsPaddingToServerRemoved),
    slb_dns_server_ssl_succ: cdktf.numberToTerraform(struct!.slbDnsServerSslSucc),
    slb_dns_udp_conn: cdktf.numberToTerraform(struct!.slbDnsUdpConn),
    slb_dns_udp_conn_succ: cdktf.numberToTerraform(struct!.slbDnsUdpConnSucc),
    slb_dns_udp_retransmit: cdktf.numberToTerraform(struct!.slbDnsUdpRetransmit),
    slb_dns_udp_retransmit_fail: cdktf.numberToTerraform(struct!.slbDnsUdpRetransmitFail),
    slb_drop: cdktf.numberToTerraform(struct!.slbDrop),
    slb_no_resource: cdktf.numberToTerraform(struct!.slbNoResource),
    slb_no_resp: cdktf.numberToTerraform(struct!.slbNoResp),
    slb_req: cdktf.numberToTerraform(struct!.slbReq),
    slb_req_rexmit: cdktf.numberToTerraform(struct!.slbReqRexmit),
    slb_resp: cdktf.numberToTerraform(struct!.slbResp),
    slb_resp_no_match: cdktf.numberToTerraform(struct!.slbRespNoMatch),
  }
}


export function dataThunderSlbDnsStatsStatsToHclTerraform(struct?: DataThunderSlbDnsStatsStatsOutputReference | DataThunderSlbDnsStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter_class_drop: {
      value: cdktf.numberToHclTerraform(struct!.filterClassDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    filter_type_any_drop: {
      value: cdktf.numberToHclTerraform(struct!.filterTypeAnyDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    filter_type_drop: {
      value: cdktf.numberToHclTerraform(struct!.filterTypeDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    invalid_q_len_to_udp: {
      value: cdktf.numberToHclTerraform(struct!.invalidQLenToUdp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nat_no_resource: {
      value: cdktf.numberToHclTerraform(struct!.natNoResource),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nat_no_resp: {
      value: cdktf.numberToHclTerraform(struct!.natNoResp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nat_req: {
      value: cdktf.numberToHclTerraform(struct!.natReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nat_req_rexmit: {
      value: cdktf.numberToHclTerraform(struct!.natReqRexmit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nat_resp: {
      value: cdktf.numberToHclTerraform(struct!.natResp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nat_resp_no_match: {
      value: cdktf.numberToHclTerraform(struct!.natRespNoMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nat_slb_drop: {
      value: cdktf.numberToHclTerraform(struct!.natSlbDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nat_xid_reused: {
      value: cdktf.numberToHclTerraform(struct!.natXidReused),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rpz_action_drop: {
      value: cdktf.numberToHclTerraform(struct!.rpzActionDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rpz_action_local_data: {
      value: cdktf.numberToHclTerraform(struct!.rpzActionLocalData),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rpz_action_nodata: {
      value: cdktf.numberToHclTerraform(struct!.rpzActionNodata),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rpz_action_nxdomain: {
      value: cdktf.numberToHclTerraform(struct!.rpzActionNxdomain),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rpz_action_pass_thru: {
      value: cdktf.numberToHclTerraform(struct!.rpzActionPassThru),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rpz_action_tcp_only: {
      value: cdktf.numberToHclTerraform(struct!.rpzActionTcpOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slb_dns_client_ssl_succ: {
      value: cdktf.numberToHclTerraform(struct!.slbDnsClientSslSucc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slb_dns_edns_ecs_inserted: {
      value: cdktf.numberToHclTerraform(struct!.slbDnsEdnsEcsInserted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slb_dns_edns_ecs_received: {
      value: cdktf.numberToHclTerraform(struct!.slbDnsEdnsEcsReceived),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slb_dns_edns_subnet_to_server_removed: {
      value: cdktf.numberToHclTerraform(struct!.slbDnsEdnsSubnetToServerRemoved),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slb_dns_padding_to_client_added: {
      value: cdktf.numberToHclTerraform(struct!.slbDnsPaddingToClientAdded),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slb_dns_padding_to_server_removed: {
      value: cdktf.numberToHclTerraform(struct!.slbDnsPaddingToServerRemoved),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slb_dns_server_ssl_succ: {
      value: cdktf.numberToHclTerraform(struct!.slbDnsServerSslSucc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slb_dns_udp_conn: {
      value: cdktf.numberToHclTerraform(struct!.slbDnsUdpConn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slb_dns_udp_conn_succ: {
      value: cdktf.numberToHclTerraform(struct!.slbDnsUdpConnSucc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slb_dns_udp_retransmit: {
      value: cdktf.numberToHclTerraform(struct!.slbDnsUdpRetransmit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slb_dns_udp_retransmit_fail: {
      value: cdktf.numberToHclTerraform(struct!.slbDnsUdpRetransmitFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slb_drop: {
      value: cdktf.numberToHclTerraform(struct!.slbDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slb_no_resource: {
      value: cdktf.numberToHclTerraform(struct!.slbNoResource),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slb_no_resp: {
      value: cdktf.numberToHclTerraform(struct!.slbNoResp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slb_req: {
      value: cdktf.numberToHclTerraform(struct!.slbReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slb_req_rexmit: {
      value: cdktf.numberToHclTerraform(struct!.slbReqRexmit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slb_resp: {
      value: cdktf.numberToHclTerraform(struct!.slbResp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slb_resp_no_match: {
      value: cdktf.numberToHclTerraform(struct!.slbRespNoMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbDnsStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSlbDnsStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filterClassDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterClassDrop = this._filterClassDrop;
    }
    if (this._filterTypeAnyDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterTypeAnyDrop = this._filterTypeAnyDrop;
    }
    if (this._filterTypeDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterTypeDrop = this._filterTypeDrop;
    }
    if (this._invalidQLenToUdp !== undefined) {
      hasAnyValues = true;
      internalValueResult.invalidQLenToUdp = this._invalidQLenToUdp;
    }
    if (this._natNoResource !== undefined) {
      hasAnyValues = true;
      internalValueResult.natNoResource = this._natNoResource;
    }
    if (this._natNoResp !== undefined) {
      hasAnyValues = true;
      internalValueResult.natNoResp = this._natNoResp;
    }
    if (this._natReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.natReq = this._natReq;
    }
    if (this._natReqRexmit !== undefined) {
      hasAnyValues = true;
      internalValueResult.natReqRexmit = this._natReqRexmit;
    }
    if (this._natResp !== undefined) {
      hasAnyValues = true;
      internalValueResult.natResp = this._natResp;
    }
    if (this._natRespNoMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.natRespNoMatch = this._natRespNoMatch;
    }
    if (this._natSlbDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.natSlbDrop = this._natSlbDrop;
    }
    if (this._natXidReused !== undefined) {
      hasAnyValues = true;
      internalValueResult.natXidReused = this._natXidReused;
    }
    if (this._rpzActionDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.rpzActionDrop = this._rpzActionDrop;
    }
    if (this._rpzActionLocalData !== undefined) {
      hasAnyValues = true;
      internalValueResult.rpzActionLocalData = this._rpzActionLocalData;
    }
    if (this._rpzActionNodata !== undefined) {
      hasAnyValues = true;
      internalValueResult.rpzActionNodata = this._rpzActionNodata;
    }
    if (this._rpzActionNxdomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.rpzActionNxdomain = this._rpzActionNxdomain;
    }
    if (this._rpzActionPassThru !== undefined) {
      hasAnyValues = true;
      internalValueResult.rpzActionPassThru = this._rpzActionPassThru;
    }
    if (this._rpzActionTcpOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.rpzActionTcpOnly = this._rpzActionTcpOnly;
    }
    if (this._slbDnsClientSslSucc !== undefined) {
      hasAnyValues = true;
      internalValueResult.slbDnsClientSslSucc = this._slbDnsClientSslSucc;
    }
    if (this._slbDnsEdnsEcsInserted !== undefined) {
      hasAnyValues = true;
      internalValueResult.slbDnsEdnsEcsInserted = this._slbDnsEdnsEcsInserted;
    }
    if (this._slbDnsEdnsEcsReceived !== undefined) {
      hasAnyValues = true;
      internalValueResult.slbDnsEdnsEcsReceived = this._slbDnsEdnsEcsReceived;
    }
    if (this._slbDnsEdnsSubnetToServerRemoved !== undefined) {
      hasAnyValues = true;
      internalValueResult.slbDnsEdnsSubnetToServerRemoved = this._slbDnsEdnsSubnetToServerRemoved;
    }
    if (this._slbDnsPaddingToClientAdded !== undefined) {
      hasAnyValues = true;
      internalValueResult.slbDnsPaddingToClientAdded = this._slbDnsPaddingToClientAdded;
    }
    if (this._slbDnsPaddingToServerRemoved !== undefined) {
      hasAnyValues = true;
      internalValueResult.slbDnsPaddingToServerRemoved = this._slbDnsPaddingToServerRemoved;
    }
    if (this._slbDnsServerSslSucc !== undefined) {
      hasAnyValues = true;
      internalValueResult.slbDnsServerSslSucc = this._slbDnsServerSslSucc;
    }
    if (this._slbDnsUdpConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.slbDnsUdpConn = this._slbDnsUdpConn;
    }
    if (this._slbDnsUdpConnSucc !== undefined) {
      hasAnyValues = true;
      internalValueResult.slbDnsUdpConnSucc = this._slbDnsUdpConnSucc;
    }
    if (this._slbDnsUdpRetransmit !== undefined) {
      hasAnyValues = true;
      internalValueResult.slbDnsUdpRetransmit = this._slbDnsUdpRetransmit;
    }
    if (this._slbDnsUdpRetransmitFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.slbDnsUdpRetransmitFail = this._slbDnsUdpRetransmitFail;
    }
    if (this._slbDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.slbDrop = this._slbDrop;
    }
    if (this._slbNoResource !== undefined) {
      hasAnyValues = true;
      internalValueResult.slbNoResource = this._slbNoResource;
    }
    if (this._slbNoResp !== undefined) {
      hasAnyValues = true;
      internalValueResult.slbNoResp = this._slbNoResp;
    }
    if (this._slbReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.slbReq = this._slbReq;
    }
    if (this._slbReqRexmit !== undefined) {
      hasAnyValues = true;
      internalValueResult.slbReqRexmit = this._slbReqRexmit;
    }
    if (this._slbResp !== undefined) {
      hasAnyValues = true;
      internalValueResult.slbResp = this._slbResp;
    }
    if (this._slbRespNoMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.slbRespNoMatch = this._slbRespNoMatch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbDnsStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._filterClassDrop = undefined;
      this._filterTypeAnyDrop = undefined;
      this._filterTypeDrop = undefined;
      this._invalidQLenToUdp = undefined;
      this._natNoResource = undefined;
      this._natNoResp = undefined;
      this._natReq = undefined;
      this._natReqRexmit = undefined;
      this._natResp = undefined;
      this._natRespNoMatch = undefined;
      this._natSlbDrop = undefined;
      this._natXidReused = undefined;
      this._rpzActionDrop = undefined;
      this._rpzActionLocalData = undefined;
      this._rpzActionNodata = undefined;
      this._rpzActionNxdomain = undefined;
      this._rpzActionPassThru = undefined;
      this._rpzActionTcpOnly = undefined;
      this._slbDnsClientSslSucc = undefined;
      this._slbDnsEdnsEcsInserted = undefined;
      this._slbDnsEdnsEcsReceived = undefined;
      this._slbDnsEdnsSubnetToServerRemoved = undefined;
      this._slbDnsPaddingToClientAdded = undefined;
      this._slbDnsPaddingToServerRemoved = undefined;
      this._slbDnsServerSslSucc = undefined;
      this._slbDnsUdpConn = undefined;
      this._slbDnsUdpConnSucc = undefined;
      this._slbDnsUdpRetransmit = undefined;
      this._slbDnsUdpRetransmitFail = undefined;
      this._slbDrop = undefined;
      this._slbNoResource = undefined;
      this._slbNoResp = undefined;
      this._slbReq = undefined;
      this._slbReqRexmit = undefined;
      this._slbResp = undefined;
      this._slbRespNoMatch = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._filterClassDrop = value.filterClassDrop;
      this._filterTypeAnyDrop = value.filterTypeAnyDrop;
      this._filterTypeDrop = value.filterTypeDrop;
      this._invalidQLenToUdp = value.invalidQLenToUdp;
      this._natNoResource = value.natNoResource;
      this._natNoResp = value.natNoResp;
      this._natReq = value.natReq;
      this._natReqRexmit = value.natReqRexmit;
      this._natResp = value.natResp;
      this._natRespNoMatch = value.natRespNoMatch;
      this._natSlbDrop = value.natSlbDrop;
      this._natXidReused = value.natXidReused;
      this._rpzActionDrop = value.rpzActionDrop;
      this._rpzActionLocalData = value.rpzActionLocalData;
      this._rpzActionNodata = value.rpzActionNodata;
      this._rpzActionNxdomain = value.rpzActionNxdomain;
      this._rpzActionPassThru = value.rpzActionPassThru;
      this._rpzActionTcpOnly = value.rpzActionTcpOnly;
      this._slbDnsClientSslSucc = value.slbDnsClientSslSucc;
      this._slbDnsEdnsEcsInserted = value.slbDnsEdnsEcsInserted;
      this._slbDnsEdnsEcsReceived = value.slbDnsEdnsEcsReceived;
      this._slbDnsEdnsSubnetToServerRemoved = value.slbDnsEdnsSubnetToServerRemoved;
      this._slbDnsPaddingToClientAdded = value.slbDnsPaddingToClientAdded;
      this._slbDnsPaddingToServerRemoved = value.slbDnsPaddingToServerRemoved;
      this._slbDnsServerSslSucc = value.slbDnsServerSslSucc;
      this._slbDnsUdpConn = value.slbDnsUdpConn;
      this._slbDnsUdpConnSucc = value.slbDnsUdpConnSucc;
      this._slbDnsUdpRetransmit = value.slbDnsUdpRetransmit;
      this._slbDnsUdpRetransmitFail = value.slbDnsUdpRetransmitFail;
      this._slbDrop = value.slbDrop;
      this._slbNoResource = value.slbNoResource;
      this._slbNoResp = value.slbNoResp;
      this._slbReq = value.slbReq;
      this._slbReqRexmit = value.slbReqRexmit;
      this._slbResp = value.slbResp;
      this._slbRespNoMatch = value.slbRespNoMatch;
    }
  }

  // filter_class_drop - computed: false, optional: true, required: false
  private _filterClassDrop?: number; 
  public get filterClassDrop() {
    return this.getNumberAttribute('filter_class_drop');
  }
  public set filterClassDrop(value: number) {
    this._filterClassDrop = value;
  }
  public resetFilterClassDrop() {
    this._filterClassDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterClassDropInput() {
    return this._filterClassDrop;
  }

  // filter_type_any_drop - computed: false, optional: true, required: false
  private _filterTypeAnyDrop?: number; 
  public get filterTypeAnyDrop() {
    return this.getNumberAttribute('filter_type_any_drop');
  }
  public set filterTypeAnyDrop(value: number) {
    this._filterTypeAnyDrop = value;
  }
  public resetFilterTypeAnyDrop() {
    this._filterTypeAnyDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterTypeAnyDropInput() {
    return this._filterTypeAnyDrop;
  }

  // filter_type_drop - computed: false, optional: true, required: false
  private _filterTypeDrop?: number; 
  public get filterTypeDrop() {
    return this.getNumberAttribute('filter_type_drop');
  }
  public set filterTypeDrop(value: number) {
    this._filterTypeDrop = value;
  }
  public resetFilterTypeDrop() {
    this._filterTypeDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterTypeDropInput() {
    return this._filterTypeDrop;
  }

  // invalid_q_len_to_udp - computed: false, optional: true, required: false
  private _invalidQLenToUdp?: number; 
  public get invalidQLenToUdp() {
    return this.getNumberAttribute('invalid_q_len_to_udp');
  }
  public set invalidQLenToUdp(value: number) {
    this._invalidQLenToUdp = value;
  }
  public resetInvalidQLenToUdp() {
    this._invalidQLenToUdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidQLenToUdpInput() {
    return this._invalidQLenToUdp;
  }

  // nat_no_resource - computed: false, optional: true, required: false
  private _natNoResource?: number; 
  public get natNoResource() {
    return this.getNumberAttribute('nat_no_resource');
  }
  public set natNoResource(value: number) {
    this._natNoResource = value;
  }
  public resetNatNoResource() {
    this._natNoResource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natNoResourceInput() {
    return this._natNoResource;
  }

  // nat_no_resp - computed: false, optional: true, required: false
  private _natNoResp?: number; 
  public get natNoResp() {
    return this.getNumberAttribute('nat_no_resp');
  }
  public set natNoResp(value: number) {
    this._natNoResp = value;
  }
  public resetNatNoResp() {
    this._natNoResp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natNoRespInput() {
    return this._natNoResp;
  }

  // nat_req - computed: false, optional: true, required: false
  private _natReq?: number; 
  public get natReq() {
    return this.getNumberAttribute('nat_req');
  }
  public set natReq(value: number) {
    this._natReq = value;
  }
  public resetNatReq() {
    this._natReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natReqInput() {
    return this._natReq;
  }

  // nat_req_rexmit - computed: false, optional: true, required: false
  private _natReqRexmit?: number; 
  public get natReqRexmit() {
    return this.getNumberAttribute('nat_req_rexmit');
  }
  public set natReqRexmit(value: number) {
    this._natReqRexmit = value;
  }
  public resetNatReqRexmit() {
    this._natReqRexmit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natReqRexmitInput() {
    return this._natReqRexmit;
  }

  // nat_resp - computed: false, optional: true, required: false
  private _natResp?: number; 
  public get natResp() {
    return this.getNumberAttribute('nat_resp');
  }
  public set natResp(value: number) {
    this._natResp = value;
  }
  public resetNatResp() {
    this._natResp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natRespInput() {
    return this._natResp;
  }

  // nat_resp_no_match - computed: false, optional: true, required: false
  private _natRespNoMatch?: number; 
  public get natRespNoMatch() {
    return this.getNumberAttribute('nat_resp_no_match');
  }
  public set natRespNoMatch(value: number) {
    this._natRespNoMatch = value;
  }
  public resetNatRespNoMatch() {
    this._natRespNoMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natRespNoMatchInput() {
    return this._natRespNoMatch;
  }

  // nat_slb_drop - computed: false, optional: true, required: false
  private _natSlbDrop?: number; 
  public get natSlbDrop() {
    return this.getNumberAttribute('nat_slb_drop');
  }
  public set natSlbDrop(value: number) {
    this._natSlbDrop = value;
  }
  public resetNatSlbDrop() {
    this._natSlbDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natSlbDropInput() {
    return this._natSlbDrop;
  }

  // nat_xid_reused - computed: false, optional: true, required: false
  private _natXidReused?: number; 
  public get natXidReused() {
    return this.getNumberAttribute('nat_xid_reused');
  }
  public set natXidReused(value: number) {
    this._natXidReused = value;
  }
  public resetNatXidReused() {
    this._natXidReused = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natXidReusedInput() {
    return this._natXidReused;
  }

  // rpz_action_drop - computed: false, optional: true, required: false
  private _rpzActionDrop?: number; 
  public get rpzActionDrop() {
    return this.getNumberAttribute('rpz_action_drop');
  }
  public set rpzActionDrop(value: number) {
    this._rpzActionDrop = value;
  }
  public resetRpzActionDrop() {
    this._rpzActionDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpzActionDropInput() {
    return this._rpzActionDrop;
  }

  // rpz_action_local_data - computed: false, optional: true, required: false
  private _rpzActionLocalData?: number; 
  public get rpzActionLocalData() {
    return this.getNumberAttribute('rpz_action_local_data');
  }
  public set rpzActionLocalData(value: number) {
    this._rpzActionLocalData = value;
  }
  public resetRpzActionLocalData() {
    this._rpzActionLocalData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpzActionLocalDataInput() {
    return this._rpzActionLocalData;
  }

  // rpz_action_nodata - computed: false, optional: true, required: false
  private _rpzActionNodata?: number; 
  public get rpzActionNodata() {
    return this.getNumberAttribute('rpz_action_nodata');
  }
  public set rpzActionNodata(value: number) {
    this._rpzActionNodata = value;
  }
  public resetRpzActionNodata() {
    this._rpzActionNodata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpzActionNodataInput() {
    return this._rpzActionNodata;
  }

  // rpz_action_nxdomain - computed: false, optional: true, required: false
  private _rpzActionNxdomain?: number; 
  public get rpzActionNxdomain() {
    return this.getNumberAttribute('rpz_action_nxdomain');
  }
  public set rpzActionNxdomain(value: number) {
    this._rpzActionNxdomain = value;
  }
  public resetRpzActionNxdomain() {
    this._rpzActionNxdomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpzActionNxdomainInput() {
    return this._rpzActionNxdomain;
  }

  // rpz_action_pass_thru - computed: false, optional: true, required: false
  private _rpzActionPassThru?: number; 
  public get rpzActionPassThru() {
    return this.getNumberAttribute('rpz_action_pass_thru');
  }
  public set rpzActionPassThru(value: number) {
    this._rpzActionPassThru = value;
  }
  public resetRpzActionPassThru() {
    this._rpzActionPassThru = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpzActionPassThruInput() {
    return this._rpzActionPassThru;
  }

  // rpz_action_tcp_only - computed: false, optional: true, required: false
  private _rpzActionTcpOnly?: number; 
  public get rpzActionTcpOnly() {
    return this.getNumberAttribute('rpz_action_tcp_only');
  }
  public set rpzActionTcpOnly(value: number) {
    this._rpzActionTcpOnly = value;
  }
  public resetRpzActionTcpOnly() {
    this._rpzActionTcpOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpzActionTcpOnlyInput() {
    return this._rpzActionTcpOnly;
  }

  // slb_dns_client_ssl_succ - computed: false, optional: true, required: false
  private _slbDnsClientSslSucc?: number; 
  public get slbDnsClientSslSucc() {
    return this.getNumberAttribute('slb_dns_client_ssl_succ');
  }
  public set slbDnsClientSslSucc(value: number) {
    this._slbDnsClientSslSucc = value;
  }
  public resetSlbDnsClientSslSucc() {
    this._slbDnsClientSslSucc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slbDnsClientSslSuccInput() {
    return this._slbDnsClientSslSucc;
  }

  // slb_dns_edns_ecs_inserted - computed: false, optional: true, required: false
  private _slbDnsEdnsEcsInserted?: number; 
  public get slbDnsEdnsEcsInserted() {
    return this.getNumberAttribute('slb_dns_edns_ecs_inserted');
  }
  public set slbDnsEdnsEcsInserted(value: number) {
    this._slbDnsEdnsEcsInserted = value;
  }
  public resetSlbDnsEdnsEcsInserted() {
    this._slbDnsEdnsEcsInserted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slbDnsEdnsEcsInsertedInput() {
    return this._slbDnsEdnsEcsInserted;
  }

  // slb_dns_edns_ecs_received - computed: false, optional: true, required: false
  private _slbDnsEdnsEcsReceived?: number; 
  public get slbDnsEdnsEcsReceived() {
    return this.getNumberAttribute('slb_dns_edns_ecs_received');
  }
  public set slbDnsEdnsEcsReceived(value: number) {
    this._slbDnsEdnsEcsReceived = value;
  }
  public resetSlbDnsEdnsEcsReceived() {
    this._slbDnsEdnsEcsReceived = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slbDnsEdnsEcsReceivedInput() {
    return this._slbDnsEdnsEcsReceived;
  }

  // slb_dns_edns_subnet_to_server_removed - computed: false, optional: true, required: false
  private _slbDnsEdnsSubnetToServerRemoved?: number; 
  public get slbDnsEdnsSubnetToServerRemoved() {
    return this.getNumberAttribute('slb_dns_edns_subnet_to_server_removed');
  }
  public set slbDnsEdnsSubnetToServerRemoved(value: number) {
    this._slbDnsEdnsSubnetToServerRemoved = value;
  }
  public resetSlbDnsEdnsSubnetToServerRemoved() {
    this._slbDnsEdnsSubnetToServerRemoved = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slbDnsEdnsSubnetToServerRemovedInput() {
    return this._slbDnsEdnsSubnetToServerRemoved;
  }

  // slb_dns_padding_to_client_added - computed: false, optional: true, required: false
  private _slbDnsPaddingToClientAdded?: number; 
  public get slbDnsPaddingToClientAdded() {
    return this.getNumberAttribute('slb_dns_padding_to_client_added');
  }
  public set slbDnsPaddingToClientAdded(value: number) {
    this._slbDnsPaddingToClientAdded = value;
  }
  public resetSlbDnsPaddingToClientAdded() {
    this._slbDnsPaddingToClientAdded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slbDnsPaddingToClientAddedInput() {
    return this._slbDnsPaddingToClientAdded;
  }

  // slb_dns_padding_to_server_removed - computed: false, optional: true, required: false
  private _slbDnsPaddingToServerRemoved?: number; 
  public get slbDnsPaddingToServerRemoved() {
    return this.getNumberAttribute('slb_dns_padding_to_server_removed');
  }
  public set slbDnsPaddingToServerRemoved(value: number) {
    this._slbDnsPaddingToServerRemoved = value;
  }
  public resetSlbDnsPaddingToServerRemoved() {
    this._slbDnsPaddingToServerRemoved = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slbDnsPaddingToServerRemovedInput() {
    return this._slbDnsPaddingToServerRemoved;
  }

  // slb_dns_server_ssl_succ - computed: false, optional: true, required: false
  private _slbDnsServerSslSucc?: number; 
  public get slbDnsServerSslSucc() {
    return this.getNumberAttribute('slb_dns_server_ssl_succ');
  }
  public set slbDnsServerSslSucc(value: number) {
    this._slbDnsServerSslSucc = value;
  }
  public resetSlbDnsServerSslSucc() {
    this._slbDnsServerSslSucc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slbDnsServerSslSuccInput() {
    return this._slbDnsServerSslSucc;
  }

  // slb_dns_udp_conn - computed: false, optional: true, required: false
  private _slbDnsUdpConn?: number; 
  public get slbDnsUdpConn() {
    return this.getNumberAttribute('slb_dns_udp_conn');
  }
  public set slbDnsUdpConn(value: number) {
    this._slbDnsUdpConn = value;
  }
  public resetSlbDnsUdpConn() {
    this._slbDnsUdpConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slbDnsUdpConnInput() {
    return this._slbDnsUdpConn;
  }

  // slb_dns_udp_conn_succ - computed: false, optional: true, required: false
  private _slbDnsUdpConnSucc?: number; 
  public get slbDnsUdpConnSucc() {
    return this.getNumberAttribute('slb_dns_udp_conn_succ');
  }
  public set slbDnsUdpConnSucc(value: number) {
    this._slbDnsUdpConnSucc = value;
  }
  public resetSlbDnsUdpConnSucc() {
    this._slbDnsUdpConnSucc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slbDnsUdpConnSuccInput() {
    return this._slbDnsUdpConnSucc;
  }

  // slb_dns_udp_retransmit - computed: false, optional: true, required: false
  private _slbDnsUdpRetransmit?: number; 
  public get slbDnsUdpRetransmit() {
    return this.getNumberAttribute('slb_dns_udp_retransmit');
  }
  public set slbDnsUdpRetransmit(value: number) {
    this._slbDnsUdpRetransmit = value;
  }
  public resetSlbDnsUdpRetransmit() {
    this._slbDnsUdpRetransmit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slbDnsUdpRetransmitInput() {
    return this._slbDnsUdpRetransmit;
  }

  // slb_dns_udp_retransmit_fail - computed: false, optional: true, required: false
  private _slbDnsUdpRetransmitFail?: number; 
  public get slbDnsUdpRetransmitFail() {
    return this.getNumberAttribute('slb_dns_udp_retransmit_fail');
  }
  public set slbDnsUdpRetransmitFail(value: number) {
    this._slbDnsUdpRetransmitFail = value;
  }
  public resetSlbDnsUdpRetransmitFail() {
    this._slbDnsUdpRetransmitFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slbDnsUdpRetransmitFailInput() {
    return this._slbDnsUdpRetransmitFail;
  }

  // slb_drop - computed: false, optional: true, required: false
  private _slbDrop?: number; 
  public get slbDrop() {
    return this.getNumberAttribute('slb_drop');
  }
  public set slbDrop(value: number) {
    this._slbDrop = value;
  }
  public resetSlbDrop() {
    this._slbDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slbDropInput() {
    return this._slbDrop;
  }

  // slb_no_resource - computed: false, optional: true, required: false
  private _slbNoResource?: number; 
  public get slbNoResource() {
    return this.getNumberAttribute('slb_no_resource');
  }
  public set slbNoResource(value: number) {
    this._slbNoResource = value;
  }
  public resetSlbNoResource() {
    this._slbNoResource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slbNoResourceInput() {
    return this._slbNoResource;
  }

  // slb_no_resp - computed: false, optional: true, required: false
  private _slbNoResp?: number; 
  public get slbNoResp() {
    return this.getNumberAttribute('slb_no_resp');
  }
  public set slbNoResp(value: number) {
    this._slbNoResp = value;
  }
  public resetSlbNoResp() {
    this._slbNoResp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slbNoRespInput() {
    return this._slbNoResp;
  }

  // slb_req - computed: false, optional: true, required: false
  private _slbReq?: number; 
  public get slbReq() {
    return this.getNumberAttribute('slb_req');
  }
  public set slbReq(value: number) {
    this._slbReq = value;
  }
  public resetSlbReq() {
    this._slbReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slbReqInput() {
    return this._slbReq;
  }

  // slb_req_rexmit - computed: false, optional: true, required: false
  private _slbReqRexmit?: number; 
  public get slbReqRexmit() {
    return this.getNumberAttribute('slb_req_rexmit');
  }
  public set slbReqRexmit(value: number) {
    this._slbReqRexmit = value;
  }
  public resetSlbReqRexmit() {
    this._slbReqRexmit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slbReqRexmitInput() {
    return this._slbReqRexmit;
  }

  // slb_resp - computed: false, optional: true, required: false
  private _slbResp?: number; 
  public get slbResp() {
    return this.getNumberAttribute('slb_resp');
  }
  public set slbResp(value: number) {
    this._slbResp = value;
  }
  public resetSlbResp() {
    this._slbResp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slbRespInput() {
    return this._slbResp;
  }

  // slb_resp_no_match - computed: false, optional: true, required: false
  private _slbRespNoMatch?: number; 
  public get slbRespNoMatch() {
    return this.getNumberAttribute('slb_resp_no_match');
  }
  public set slbRespNoMatch(value: number) {
    this._slbRespNoMatch = value;
  }
  public resetSlbRespNoMatch() {
    this._slbRespNoMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slbRespNoMatchInput() {
    return this._slbRespNoMatch;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_dns_stats thunder_slb_dns_stats}
*/
export class DataThunderSlbDnsStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_dns_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSlbDnsStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSlbDnsStats to import
  * @param importFromId The id of the existing DataThunderSlbDnsStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_dns_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSlbDnsStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_dns_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_dns_stats thunder_slb_dns_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSlbDnsStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSlbDnsStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_dns_stats',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
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
    this._stats.internalValue = config.stats;
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

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderSlbDnsStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderSlbDnsStatsStats) {
    this._stats.internalValue = value;
  }
  public resetStats() {
    this._stats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsInput() {
    return this._stats.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      stats: dataThunderSlbDnsStatsStatsToTerraform(this._stats.internalValue),
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
      stats: {
        value: dataThunderSlbDnsStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSlbDnsStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
