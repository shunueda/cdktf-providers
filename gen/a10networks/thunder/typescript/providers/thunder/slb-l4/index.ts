// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_l4
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbL4Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_l4#id SlbL4#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_l4#uuid SlbL4#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_l4#sampling_enable SlbL4#sampling_enable}
  */
  readonly samplingEnable?: SlbL4SamplingEnable[] | cdktf.IResolvable;
}
export interface SlbL4SamplingEnable {
  /**
  * 'all': all; 'intcp': TCP received; 'synreceived': TCP SYN received; 'tcp_fwd_last_ack': L4 rcv fwd last ACK; 'tcp_rev_last_ack': L4 rcv rev last ACK; 'tcp_rev_fin': L4 rcv rev FIN; 'tcp_fwd_fin': L4 rcv fwd FIN; 'tcp_fwd_ackfin': L4 rcv fwd FIN|ACK; 'inudp': UDP received; 'syncookiessent': TCP SYN cookie snt; 'syncookiessent_ts': TCP SYN cookie snt ts; 'syncookiessentfailed': TCP SYN cookie snt fail; 'outrst': TCP out RST; 'outrst_nosyn': TCP out RST no SYN; 'outrst_broker': TCP out RST L4 proxy; 'outrst_ack_attack': TCP out RST ACK attack; 'outrst_aflex': TCP out RST aFleX; 'outrst_stale_sess': TCP out RST stale sess; 'syn_stale_sess': SYN stale sess drop; 'outrst_tcpproxy': TCP out RST TCP proxy; 'svrselfail': Server sel failure; 'noroute': IP out noroute; 'snat_fail': Source NAT failure; 'snat_no_fwd_route': Source NAT no fwd route; 'snat_no_rev_route': Source NAT no rev route; 'snat_icmp_error_process': Source NAT ICMP Process; 'snat_icmp_no_match': Source NAT ICMP No Match; 'smart_nat_id_mismatch': Auto NAT id mismatch; 'syncookiescheckfailed': TCP SYN cookie failed; 'novport_drop': NAT no session drops; 'no_vport_drop': vport not matching drops; 'nosyn_drop': No SYN pkt drops; 'nosyn_drop_fin': No SYN pkt drops - FIN; 'nosyn_drop_rst': No SYN pkt drops - RST; 'nosyn_drop_ack': No SYN pkt drops - ACK; 'connlimit_drop': Conn Limit drops; 'connlimit_reset': Conn Limit resets; 'conn_rate_limit_drop': Conn rate limit drops; 'conn_rate_limit_reset': Conn rate limit resets; 'proxy_nosock_drop': Proxy no sock drops; 'drop_aflex': aFleX drops; 'sess_aged_out': Session aged out; 'tcp_sess_aged_out': TCP Session aged out; 'udp_sess_aged_out': UDP Session aged out; 'other_sess_aged_out': Other Session aged out; 'tcp_no_slb': TCP no SLB; 'udp_no_slb': UDP no SLB; 'throttle_syn': SYN Throttle; 'drop_gslb': Drop GSLB; 'inband_hm_retry': Inband HM retry; 'inband_hm_reassign': Inband HM reassign; 'auto_reassign': Auto-reselect server; 'fast_aging_set': Fast aging set; 'fast_aging_reset': Fast aging reset; 'dns_policy_drop': DNS Policy Drop; 'tcp_invalid_drop': TCP invalid drop; 'anomaly_out_seq': Anomaly out of sequence; 'anomaly_zero_win': Anomaly zero window; 'anomaly_bad_content': Anomaly bad content; 'anomaly_pbslb_drop': Anomaly pbslb drop; 'no_resourse_drop': No resource drop; 'reset_unknown_conn': Reset unknown conn; 'reset_l7_on_failover': RST L7 on failover; 'ignore_msl': ignore msl; 'l2_dsr': L2 DSR received; 'l3_dsr': L3 DSR received; 'port_preserve_attempt': NAT Port Preserve Try; 'port_preserve_succ': NAT Port Preserve Succ; 'tcpsyndata_drop': TCP SYN With Data Drop; 'tcpotherflags_drop': TCP SYN Other Flags Drop; 'bw_rate_limit_exceed': BW-Limit Exceed drop; 'bw_watermark_drop': BW-Watermark drop; 'l4_cps_exceed': L4 CPS exceed drop; 'nat_cps_exceed': NAT CPS exceed drop; 'l7_cps_exceed': L7 CPS exceed drop; 'ssl_cps_exceed': SSL CPS exceed drop; 'ssl_tpt_exceed': SSL TPT exceed drop; 'ssl_watermark_drop': SSL TPT-Watermark drop; 'concurrent_conn_exceed': L3V Conn Limit Drop; 'svr_syn_handshake_fail': L4 server handshake fail; 'stateless_conn_timeout': L4 stateless Conn TO; 'tcp_ax_rexmit_syn': L4 AX re-xmit SYN; 'tcp_syn_rcv_ack': L4 rcv ACK on SYN; 'tcp_syn_rcv_rst': L4 rcv RST on SYN; 'tcp_sess_noest_aged_out': TCP no-Est Sess aged out; 'tcp_sess_noest_csyn_rcv_aged_out': no-Est CSYN rcv aged out; 'tcp_sess_noest_ssyn_xmit_aged_out': no-Est SSYN snt aged out; 'tcp_rexmit_syn': L4 rcv rexmit SYN; 'tcp_rexmit_syn_delq': L4 rcv rexmit SYN (delq); 'tcp_rexmit_synack': L4 rcv rexmit SYN|ACK; 'tcp_rexmit_synack_delq': L4 rcv rexmit SYN|ACK DQ; 'tcp_fwd_fin_dup': L4 rcv fwd FIN dup; 'tcp_rev_fin_dup': L4 rcv rev FIN dup; 'tcp_rev_ackfin': L4 rcv rev FIN|ACK; 'tcp_fwd_rst': L4 rcv fwd RST; 'tcp_rev_rst': L4 rcv rev RST; 'udp_req_oneplus_no_resp': L4 UDP reqs no rsp; 'udp_req_one_oneplus_resp': L4 UDP req rsps; 'udp_req_resp_notmatch': L4 UDP req/rsp not match; 'udp_req_more_resp': L4 UDP req greater than rsps; 'udp_resp_more_req': L4 UDP rsps greater than reqs; 'udp_req_oneplus': L4 UDP reqs; 'udp_resp_oneplus': L4 UDP rsps; 'out_seq_ack_drop': Out of sequence ACK drop; 'tcp_est': L4 TCP Established; 'synattack': L4 SYN attack; 'syn_rate': TCP SYN rate per sec; 'syncookie_buff_drop': TCP SYN cookie buff drop; 'syncookie_buff_queue': TCP SYN cookie buff queue; 'skip_insert_client_ip': Skip Insert-client-ip; 'synreceived_hw': TCP SYN (HW SYN cookie); 'dns_id_switch': DNS query id switch; 'server_down_del': Server Down Del switch; 'dnssec_switch': DNSSEC SG switch; 'rate_drop_reset_unkn': Rate Drop reset; 'tcp_connections_closed': TCP Connections Closed; 'gtp_c_invalid_port': Invalid Packet Received on GTP VIP; 'gtp_c_invalid_header': Invalid Header Received on GTP VIP; 'gtp_c_invalid_message': Non Create Session/PDP Context Request/Response Received on GTP VIP; 'reselect_svrselfail': Server reselect failure; 'snat_port_overload_fail': Snat port overload fail; 'snat_force_preserve_alloc': Snat port preserve allocated; 'snat_force_preserve_free': Snat port preserve freed; 'proxy_header_insert': PROXY protocol header inserted; 'proxy_header_rexmit': PROXY protocol header retransmitted; 'proxy_prot_error': PROXY protocol error; 'proxy_prot_drop': PROXY protocol drop; 'slb_gtp_proxy_pkt_rcv_rr': SLB GTP proxy packet received on RR; 'slb_gtp_proxy_smp_match': SLB GTP proxy helper session found; 'slb_gtp_proxy_smp_no_match': SLB GTP proxy helper session not found; 'slb_gtp_proxy_c_process_local_rr': SLB GTP proxy messageprocessed locally on RR; 'slb_gtp_proxy_smp_creation_failed': SLB GTP proxy helper session creation failed; 'slb_gtp_proxy_smp_created': SLB GTP proxy helper session created; 'slb_gtp_proxy_smp_free_not_found': SLB GTP proxy session helper not found during cleanup; 'slb_gtp_proxy_smp_freed': SLB GTP proxy session helper freed; 'slb_gtp_proxy_retx_requests': SLB GTP proxy retx requests; 'pbslb_entry_limit_exceed': pbslb entry limit Exceed; 'fast_path_reroute': Fast Path Reroute; 'fast_path_l2_reroute': Fast Path L2 Reroute;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_l4#counters1 SlbL4#counters1}
  */
  readonly counters1?: string;
}

export function slbL4SamplingEnableToTerraform(struct?: SlbL4SamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function slbL4SamplingEnableToHclTerraform(struct?: SlbL4SamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbL4SamplingEnableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SlbL4SamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbL4SamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class SlbL4SamplingEnableList extends cdktf.ComplexList {
  public internalValue? : SlbL4SamplingEnable[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SlbL4SamplingEnableOutputReference {
    return new SlbL4SamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_l4 thunder_slb_l4}
*/
export class SlbL4 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_l4";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbL4 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbL4 to import
  * @param importFromId The id of the existing SlbL4 that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_l4#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbL4 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_l4", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_l4 thunder_slb_l4} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbL4Config = {}
  */
  public constructor(scope: Construct, id: string, config: SlbL4Config = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_l4',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
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
    this._uuid = config.uuid;
    this._samplingEnable.internalValue = config.samplingEnable;
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

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new SlbL4SamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: SlbL4SamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
      sampling_enable: cdktf.listMapper(slbL4SamplingEnableToTerraform, true)(this._samplingEnable.internalValue),
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
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sampling_enable: {
        value: cdktf.listMapperHcl(slbL4SamplingEnableToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbL4SamplingEnableList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
