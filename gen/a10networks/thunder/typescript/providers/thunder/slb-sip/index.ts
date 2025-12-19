// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_sip
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbSipConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_sip#id SlbSip#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_sip#uuid SlbSip#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_sip#sampling_enable SlbSip#sampling_enable}
  */
  readonly samplingEnable?: SlbSipSamplingEnable[] | cdktf.IResolvable;
}
export interface SlbSipSamplingEnable {
  /**
  * 'all': all; 'msg_proxy_current': Number of current sip proxy connections; 'msg_proxy_total': Total number of sip proxy connections; 'msg_proxy_mem_allocd': msg_proxy_mem_allocd; 'msg_proxy_mem_cached': msg_proxy_mem_cached; 'msg_proxy_mem_freed': msg_proxy_mem_freed; 'msg_proxy_client_recv': Number of SIP messages received from client; 'msg_proxy_client_send_success': Number of SIP messages received from client and forwarded to server; 'msg_proxy_client_incomplete': Number of packet which contains incomplete message; 'msg_proxy_client_drop': Number of AX drop; 'msg_proxy_client_connection': Connecting server; 'msg_proxy_client_fail': Number of SIP messages received from client but failed to forward to server; 'msg_proxy_client_fail_parse': msg_proxy_client_fail_parse; 'msg_proxy_client_fail_process': msg_proxy_client_fail_process; 'msg_proxy_client_fail_snat': msg_proxy_client_fail_snat; 'msg_proxy_client_exceed_tmp_buff': msg_proxy_client_exceed_tmp_buff; 'msg_proxy_client_fail_send_pkt': msg_proxy_client_fail_send_pkt; 'msg_proxy_client_fail_start_server_Conn': msg_proxy_client_fail_start_server_Conn; 'msg_proxy_server_recv': Number of SIP messages received from server; 'msg_proxy_server_send_success': Number of SIP messages received from server and forwarded to client; 'msg_proxy_server_incomplete': Number of packet which contains incomplete message; 'msg_proxy_server_drop': Number of AX drop; 'msg_proxy_server_fail': Number of SIP messages received from server but failed to forward to client; 'msg_proxy_server_fail_parse': msg_proxy_server_fail_parse; 'msg_proxy_server_fail_process': msg_proxy_server_fail_process; 'msg_proxy_server_fail_selec_connt': msg_proxy_server_fail_selec_connt; 'msg_proxy_server_fail_snat': msg_proxy_server_fail_snat; 'msg_proxy_server_exceed_tmp_buff': msg_proxy_server_exceed_tmp_buff; 'msg_proxy_server_fail_send_pkt': msg_proxy_server_fail_send_pkt; 'msg_proxy_create_server_conn': Number of server connection system tries to create; 'msg_proxy_start_server_conn': Number of server connection created successfully; 'msg_proxy_fail_start_server_conn': Number of server connection create failed; 'msg_proxy_server_conn_fail_snat': msg_proxy_server_conn_fail_snat; 'msg_proxy_fail_construct_server_conn': msg_proxy_fail_construct_server_conn; 'msg_proxy_fail_reserve_pconn': msg_proxy_fail_reserve_pconn; 'msg_proxy_start_server_conn_failed': msg_proxy_start_server_conn_failed; 'msg_proxy_server_conn_already_exists': msg_proxy_server_conn_already_exists; 'msg_proxy_fail_insert_server_conn': msg_proxy_fail_insert_server_conn; 'msg_proxy_parse_msg_fail': msg_proxy_parse_msg_fail; 'msg_proxy_process_msg_fail': msg_proxy_process_msg_fail; 'msg_proxy_no_vport': msg_proxy_no_vport; 'msg_proxy_fail_select_server': msg_proxy_fail_select_server; 'msg_proxy_fail_alloc_mem': msg_proxy_fail_alloc_mem; 'msg_proxy_unexpected_err': msg_proxy_unexpected_err; 'msg_proxy_l7_cpu_failed': msg_proxy_l7_cpu_failed; 'msg_proxy_l4_to_l7': msg_proxy_l4_to_l7; 'msg_proxy_l4_from_l7': msg_proxy_l4_from_l7; 'msg_proxy_to_l4_send_pkt': msg_proxy_to_l4_send_pkt; 'msg_proxy_l4_from_l4_send': msg_proxy_l4_from_l4_send; 'msg_proxy_l7_to_L4': msg_proxy_l7_to_L4; 'msg_proxy_mag_back': msg_proxy_mag_back; 'msg_proxy_fail_dcmsg': msg_proxy_fail_dcmsg; 'msg_proxy_deprecated_conn': msg_proxy_deprecated_conn; 'msg_proxy_hold_msg': msg_proxy_hold_msg; 'msg_proxy_split_pkt': msg_proxy_split_pkt; 'msg_proxy_pipline_msg': msg_proxy_pipline_msg; 'msg_proxy_client_reset': msg_proxy_client_reset; 'msg_proxy_server_reset': msg_proxy_server_reset; 'session_created': SIP Session created; 'session_freed': SIP Session freed; 'session_in_rml': session_in_rml; 'session_invalid': session_invalid; 'conn_allocd': conn_allocd; 'conn_freed': conn_freed; 'session_callid_allocd': session_callid_allocd; 'session_callid_freed': session_callid_freed; 'line_mem_allocd': line_mem_allocd; 'line_mem_freed': line_mem_freed; 'table_mem_allocd': table_mem_allocd; 'table_mem_freed': table_mem_freed; 'cmsg_no_uri_header': cmsg_no_uri_header; 'cmsg_no_uri_session': cmsg_no_uri_session; 'sg_no_uri_header': sg_no_uri_header; 'smsg_no_uri_session': smsg_no_uri_session; 'line_too_long': line_too_long; 'fail_read_start_line': fail_read_start_line; 'fail_parse_start_line': fail_parse_start_line; 'invalid_start_line': invalid_start_line; 'request_unknown_version': request_unknown_version; 'response_unknown_version': response_unknown_version; 'request_unknown': request_unknown; 'fail_parse_headers': fail_parse_headers; 'too_many_headers': too_many_headers; 'invalid_header': invalid_header; 'header_name_too_long': header_name_too_long; 'body_too_big': body_too_big; 'fail_get_counter': fail_get_counter; 'msg_no_call_id': msg_no_call_id; 'identify_dir_failed': identify_dir_failed; 'no_sip_request': no_sip_request; 'deprecated_msg': deprecated_msg; 'fail_insert_callid_session': fail_insert_callid_session; 'fail_insert_uri_session': fail_insert_uri_session; 'fail_insert_header': fail_insert_header; 'select_server_conn': select_server_conn; 'select_server_conn_by_callid': select_server_conn_by_callid; 'select_server_conn_by_uri': select_server_conn_by_uri; 'select_server_conn_by_rev_tuple': select_server_conn_by_rev_tuple; 'select_server_conn_failed': select_server_conn_failed; 'select_client_conn': select_client_conn; 'X_forward_for_select_client': X_forward_for_select_client; 'call_id_select_client': call_id_select_client; 'uri_select_client': uri_select_client; 'client_select_failed': client_select_failed; 'acl_denied': acl_denied; 'assemble_frag_failed': assemble_frag_failed; 'wrong_ip_version': wrong_ip_version; 'size_too_large': size_too_large; 'fail_split_fragment': fail_split_fragment; 'client_keepalive_received': client_keepalive_received; 'server_keepalive_received': server_keepalive_received; 'client_keepalive_send': client_keepalive_send; 'server_keepalive_send': server_keepalive_send; 'ax_health_check_received': ax_health_check_received; 'client_request': client_request; 'client_request_ok': client_request_ok; 'concatenate_msg': concatenate_msg; 'save_uri': save_uri; 'save_uri_ok': save_uri_ok; 'save_call_id': save_call_id; 'save_call_id_ok': save_call_id_ok; 'msg_translation': msg_translation; 'msg_translation_fail': msg_translation_fail; 'msg_trans_start_line': msg_trans_start_line; 'msg_trans_start_headers': msg_trans_start_headers; 'msg_trans_body': msg_trans_body; 'request_register': request_register; 'request_invite': request_invite; 'request_ack': request_ack; 'request_cancel': request_cancel; 'request_bye': request_bye; 'request_options': request_options; 'request_prack': request_prack; 'request_subscribe': request_subscribe; 'request_notify': request_notify; 'request_publish': request_publish; 'request_info': request_info; 'request_refer': request_refer; 'request_message': request_message; 'request_update': request_update; 'response_unknown': response_unknown; 'response_1XX': response_1XX; 'response_2XX': response_2XX; 'response_3XX': response_3XX; 'response_4XX': response_4XX; 'response_5XX': response_5XX; 'response_6XX': response_6XX; 'ha_send_sip_session': ha_send_sip_session; 'ha_send_sip_session_ok': ha_send_sip_session_ok; 'ha_fail_get_msg_header': ha_fail_get_msg_header; 'ha_recv_sip_session': ha_recv_sip_session; 'ha_insert_sip_session_ok': ha_insert_sip_session_ok; 'ha_update_sip_session_ok': ha_update_sip_session_ok; 'ha_invalid_pkt': ha_invalid_pkt; 'ha_fail_alloc_sip_session': ha_fail_alloc_sip_session; 'ha_fail_alloc_call_id': ha_fail_alloc_call_id; 'ha_fail_clone_sip_session': ha_fail_clone_sip_session; 'save_smp_call_id_rtp': save_smp_call_id_rtp; 'update_smp_call_id_rtp': update_smp_call_id_rtp; 'smp_call_id_rtp_session_match': smp_call_id_rtp_session_match; 'smp_call_id_rtp_session_not_match': smp_call_id_rtp_session_not_match; 'process_error_when_message_switch': process_error_when_message_switch;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_sip#counters1 SlbSip#counters1}
  */
  readonly counters1?: string;
}

export function slbSipSamplingEnableToTerraform(struct?: SlbSipSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function slbSipSamplingEnableToHclTerraform(struct?: SlbSipSamplingEnable | cdktf.IResolvable): any {
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

export class SlbSipSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbSipSamplingEnable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SlbSipSamplingEnable | cdktf.IResolvable | undefined) {
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

export class SlbSipSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : SlbSipSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): SlbSipSamplingEnableOutputReference {
    return new SlbSipSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_sip thunder_slb_sip}
*/
export class SlbSip extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_sip";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbSip resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbSip to import
  * @param importFromId The id of the existing SlbSip that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_sip#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbSip to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_sip", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_sip thunder_slb_sip} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbSipConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SlbSipConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_sip',
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
  private _samplingEnable = new SlbSipSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: SlbSipSamplingEnable[] | cdktf.IResolvable) {
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
      sampling_enable: cdktf.listMapper(slbSipSamplingEnableToTerraform, true)(this._samplingEnable.internalValue),
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
        value: cdktf.listMapperHcl(slbSipSamplingEnableToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbSipSamplingEnableList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
