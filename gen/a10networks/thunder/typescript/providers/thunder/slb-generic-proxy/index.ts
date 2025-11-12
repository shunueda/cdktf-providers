// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_generic_proxy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbGenericProxyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_generic_proxy#id SlbGenericProxy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_generic_proxy#uuid SlbGenericProxy#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_generic_proxy#sampling_enable SlbGenericProxy#sampling_enable}
  */
  readonly samplingEnable?: SlbGenericProxySamplingEnable[] | cdktf.IResolvable;
}
export interface SlbGenericProxySamplingEnable {
  /**
  * 'all': all; 'num': Number; 'curr': Current; 'total': Total; 'svrsel_fail': Number of server selection failed; 'no_route': Number of no routes; 'snat_fail': Number of snat failures; 'client_fail': Number of client failures; 'server_fail': Number of server failures; 'no_sess': Number of no sessions; 'user_session': Number of user sessions; 'acr_out': Number of ACRs out; 'acr_in': Number of ACRs in; 'aca_out': Number of ACAs out; 'aca_in': Number of ACAs in; 'cea_out': Number of CEAs out; 'cea_in': Number of CEAs in; 'cer_out': Number of CERs out; 'cer_in': Number of CERs in; 'dwr_out': Number of DWRs out; 'dwr_in': Number of DWRs in; 'dwa_out': Number of DWAs out; 'dwa_in': Number of DWAs in; 'str_out': Number of STRs out; 'str_in': Number of STRs in; 'sta_out': Number of STAs out; 'sta_in': Number of STAs in; 'asr_out': Number of ASRs out; 'asr_in': Number of ASRs in; 'asa_out': Number of ASAs out; 'asa_in': Number of ASAs in; 'other_out': Number of other messages out; 'other_in': Number of other messages in; 'total_http_req_enter_gen': Total number of HTTP requests enter generic proxy; 'mismatch_fwd_id': Diameter mismatch fwd session id; 'mismatch_rev_id': Diameter mismatch rev session id; 'unkwn_cmd_code': Diameter unkown cmd code; 'no_session_id': Diameter no session id avp; 'no_fwd_tuple': Diameter no fwd tuple matched; 'no_rev_tuple': Diameter no rev tuple matched; 'dcmsg_fwd_in': Diameter cross cpu fwd in; 'dcmsg_fwd_out': Diameter cross cpu fwd out; 'dcmsg_rev_in': Diameter cross cpu rev in; 'dcmsg_rev_out': Diameter cross cpu rev out; 'dcmsg_error': Diameter cross cpu error; 'retry_client_request': Diameter retry client request; 'retry_client_request_fail': Diameter retry client request fail; 'reply_unknown_session_id': Reply with unknown session ID error info; 'ccr_out': Number of CCRs out; 'ccr_in': Number of CCRs in; 'cca_out': Number of CCAs out; 'cca_in': Number of CCAs in; 'ccr_i': Number of CCRs initial; 'ccr_u': Number of CCRs update; 'ccr_t': Number of CCRs terminate; 'cca_t': Number of CCAs terminate; 'terminate_on_cca_t': Diameter terminate on cca_t; 'forward_unknown_session_id': Forward server side message with unknown session id; 'update_latest_server': Update to the latest server that used a session id; 'client_select_fail': Fail to select client; 'close_conn_when_vport_down': Close client conn when virtual port is down; 'invalid_avp': AVP value contains illegal chars; 'reselect_fwd_tuple': Original client tuple does not exist so reselect another one; 'reselect_fwd_tuple_other_cpu': Original client tuple does not exist so reselect another one on other CPUs; 'reselect_rev_tuple': Original server tuple does not exist so reselect another one; 'conn_closed_by_client': Client initiates TCP close/reset; 'conn_closed_by_server': Server initiates TCP close/reset; 'reply_invalid_avp_value': Reply with invalid AVP error info; 'reply_unable_to_deliver': Reply with unable to deliver error info; 'reply_error_info_fail': Fail to reply error info to peer; 'dpr_out': Number of DPRs out; 'dpr_in': Number of DPRs in; 'dpa_out': Number of DPAs out; 'dpa_in': Number of DPAs in;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_generic_proxy#counters1 SlbGenericProxy#counters1}
  */
  readonly counters1?: string;
}

export function slbGenericProxySamplingEnableToTerraform(struct?: SlbGenericProxySamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function slbGenericProxySamplingEnableToHclTerraform(struct?: SlbGenericProxySamplingEnable | cdktf.IResolvable): any {
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

export class SlbGenericProxySamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbGenericProxySamplingEnable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SlbGenericProxySamplingEnable | cdktf.IResolvable | undefined) {
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

export class SlbGenericProxySamplingEnableList extends cdktf.ComplexList {
  public internalValue? : SlbGenericProxySamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): SlbGenericProxySamplingEnableOutputReference {
    return new SlbGenericProxySamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_generic_proxy thunder_slb_generic_proxy}
*/
export class SlbGenericProxy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_generic_proxy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbGenericProxy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbGenericProxy to import
  * @param importFromId The id of the existing SlbGenericProxy that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_generic_proxy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbGenericProxy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_generic_proxy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_generic_proxy thunder_slb_generic_proxy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbGenericProxyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SlbGenericProxyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_generic_proxy',
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
  private _samplingEnable = new SlbGenericProxySamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: SlbGenericProxySamplingEnable[] | cdktf.IResolvable) {
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
      sampling_enable: cdktf.listMapper(slbGenericProxySamplingEnableToTerraform, true)(this._samplingEnable.internalValue),
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
        value: cdktf.listMapperHcl(slbGenericProxySamplingEnableToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbGenericProxySamplingEnableList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
