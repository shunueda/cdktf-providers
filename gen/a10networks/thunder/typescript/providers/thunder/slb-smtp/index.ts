// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_smtp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbSmtpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_smtp#id SlbSmtp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_smtp#uuid SlbSmtp#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_smtp#sampling_enable SlbSmtp#sampling_enable}
  */
  readonly samplingEnable?: SlbSmtpSamplingEnable[] | cdktf.IResolvable;
}
export interface SlbSmtpSamplingEnable {
  /**
  * 'all': all; 'curr_proxy': Current proxy conns; 'total_proxy': Total proxy conns; 'request': SMTP requests; 'request_success': SMTP requests (success); 'no_proxy': No proxy error; 'client_reset': Client reset; 'server_reset': Server reset; 'no_tuple': No tuple error; 'parse_req_fail': Parse request failure; 'server_select_fail': Server selection failure; 'forward_req_fail': Forward request failure; 'forward_req_data_fail': Forward REQ data failure; 'req_retran': Request retransmit; 'req_ofo': Request pkt out-of-order; 'server_reselect': Server reselection; 'server_prem_close': Server premature close; 'new_server_conn': Server connection made; 'snat_fail': Source NAT failure; 'tcp_out_reset': TCP out reset; 'Aflex_switch': aFleX switching; 'Aflex_switch_ok': aFleX switching (succ); 'recv_client_command_EHLO': Recv client EHLO; 'recv_client_command_HELO': Recv client HELO; 'recv_client_command_MAIL': Recv client MAIL; 'recv_client_command_RCPT': Recv client RCPT; 'recv_client_command_DATA': Recv client DATA; 'recv_client_command_RSET': Recv client RSET; 'recv_client_command_VRFY': Recv client VRFY; 'recv_client_command_EXPN': Recv client EXPN; 'recv_client_command_HELP': Recv client HELP; 'recv_client_command_NOOP': Recv client NOOP; 'recv_client_command_QUIT': Recv client QUIT; 'recv_client_command_STARTTLS': Recv client STARTTLS; 'recv_client_command_others': Recv client other cmds; 'send_client_service_ready': Sent client serv-rdy; 'send_client_service_not_ready': Sent client serv-not-rdy; 'send_client_close_connection': Sent client close-conn; 'send_client_go_ahead': Sent client go-ahead; 'send_client_start_TLS_first': Sent client STARTTLS-1st; 'send_client_TLS_not_available': Sent client TLS-not-aval; 'send_client_no_command': Sent client no-such-cmd; 'send_server_cmd_reset': Sent server RSET; 'TLS_established': SSL session established; 'L4_switch': L4 switching; 'recv_server_service_not_ready': Recv server serv-not-rdy; 'recv_server_unknow_reply_code': Recv server unknown-code; 'client_domain_switch': Client domain switching; 'client_domain_switch_ok': Client domain sw (succ); 'LB_switch': LB switching; 'LB_switch_ok': LB switching (succ); 'read_request_line_fail': Read request line fail; 'get_all_headers_fail': Get all headers fail; 'too_many_headers': Too many headers; 'line_too_long': Line too long; 'line_across_packet': Line across packets; 'line_extend': Line extend; 'line_extend_fail': Line extend fail; 'line_table_extend': Table extend; 'line_table_extend_fail': Table extend fail; 'parse_request_line_fail': Parse request line fail; 'insert_resonse_line_fail': Ins response line fail; 'remove_resonse_line_fail': Del response line fail; 'parse_resonse_line_fail': Parse response line fail; 'Aflex_lb_reselect': aFleX lb reselect; 'Aflex_lb_reselect_ok': aFleX lb reselect (succ); 'server_STARTTLS_init': Init server side STARTTLS; 'server_STARTTLS_fail': Server side STARTTLS fail; 'rserver_STARTTLS_disable': real server not support STARTTLS; 'recv_client_command_TURN': Recv client TURN; 'recv_client_command_ETRN': Recv client ETRN; 'send_server_ehlo': Proxy sends server EHLO; 'fail_to_save_client_ehlo': Failed to save client EHLO; 'aflex_mail_fail': aFlex Mail event failed; 'drop_server_ehlo_ok': Server EHLO_OK dropped; 'client_ehlo_saved': Client EHLO saved;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_smtp#counters1 SlbSmtp#counters1}
  */
  readonly counters1?: string;
}

export function slbSmtpSamplingEnableToTerraform(struct?: SlbSmtpSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function slbSmtpSamplingEnableToHclTerraform(struct?: SlbSmtpSamplingEnable | cdktf.IResolvable): any {
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

export class SlbSmtpSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbSmtpSamplingEnable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SlbSmtpSamplingEnable | cdktf.IResolvable | undefined) {
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

export class SlbSmtpSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : SlbSmtpSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): SlbSmtpSamplingEnableOutputReference {
    return new SlbSmtpSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_smtp thunder_slb_smtp}
*/
export class SlbSmtp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_smtp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbSmtp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbSmtp to import
  * @param importFromId The id of the existing SlbSmtp that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_smtp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbSmtp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_smtp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_smtp thunder_slb_smtp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbSmtpConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SlbSmtpConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_smtp',
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
  private _samplingEnable = new SlbSmtpSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: SlbSmtpSamplingEnable[] | cdktf.IResolvable) {
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
      sampling_enable: cdktf.listMapper(slbSmtpSamplingEnableToTerraform, true)(this._samplingEnable.internalValue),
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
        value: cdktf.listMapperHcl(slbSmtpSamplingEnableToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbSmtpSamplingEnableList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
