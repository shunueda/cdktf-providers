// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_icap
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbIcapConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_icap#id SlbIcap#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_icap#uuid SlbIcap#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_icap#sampling_enable SlbIcap#sampling_enable}
  */
  readonly samplingEnable?: SlbIcapSamplingEnable[] | cdktf.IResolvable;
}
export interface SlbIcapSamplingEnable {
  /**
  * 'all': all; 'reqmod_request': Reqmod Request Stats; 'respmod_request': Respmod Request Stats; 'reqmod_request_after_100': Reqmod Request Sent After 100 Cont Stats; 'respmod_request_after_100': Respmod Request Sent After 100 Cont Stats; 'reqmod_response': Reqmod Response Stats; 'respmod_response': Respmod Response Stats; 'reqmod_response_after_100': Reqmod Response After 100 Cont Stats; 'respmod_response_after_100': Respmod Response After 100 Cont Stats; 'chunk_no_allow_204': Chunk so no Allow 204 Stats; 'len_exceed_no_allow_204': Length Exceeded so no Allow 204 Stats; 'result_continue': Result Continue Stats; 'result_icap_response': Result ICAP Response Stats; 'result_100_continue': Result 100 Continue Stats; 'result_other': Result Other Stats; 'status_2xx': Status 2xx Stats; 'status_200': Status 200 Stats; 'status_201': Status 201 Stats; 'status_202': Status 202 Stats; 'status_203': Status 203 Stats; 'status_204': Status 204 Stats; 'status_205': Status 205 Stats; 'status_206': Status 206 Stats; 'status_207': Status 207 Stats; 'status_1xx': Status 1xx Stats; 'status_100': Status 100 Stats; 'status_101': Status 101 Stats; 'status_102': Status 102 Stats; 'status_3xx': Status 3xx Stats; 'status_300': Status 300 Stats; 'status_301': Status 301 Stats; 'status_302': Status 302 Stats; 'status_303': Status 303 Stats; 'status_304': Status 304 Stats; 'status_305': Status 305 Stats; 'status_306': Status 306 Stats; 'status_307': Status 307 Stats; 'status_4xx': Status 4xx Stats; 'status_400': Status 400 Stats; 'status_401': Status 401 Stats; 'status_402': Status 402 Stats; 'status_403': Status 403 Stats; 'status_404': Status 404 Stats; 'status_405': Status 405 Stats; 'status_406': Status 406 Stats; 'status_407': Status 407 Stats; 'status_408': Status 408 Stats; 'status_409': Status 409 Stats; 'status_410': Status 410 Stats; 'status_411': Status 411 Stats; 'status_412': Status 412 Stats; 'status_413': Status 413 Stats; 'status_414': Status 414 Stats; 'status_415': Status 415 Stats; 'status_416': Status 416 Stats; 'status_417': Status 417 Stats; 'status_418': Status 418 Stats; 'status_419': Status 419 Stats; 'status_420': Status 420 Stats; 'status_422': Status 422 Stats; 'status_423': Status 423 Stats; 'status_424': Status 424 Stats; 'status_425': Status 425 Stats; 'status_426': Status 426 Stats; 'status_449': Status 449 Stats; 'status_450': Status 450 Stats; 'status_5xx': Status 5xx Stats; 'status_500': Status 500 Stats; 'status_501': Status 501 Stats; 'status_502': Status 502 Stats; 'status_503': Status 503 Stats; 'status_504': Status 504 Stats; 'status_505': Status 505 Stats; 'status_506': Status 506 Stats; 'status_507': Status 507 Stats; 'status_508': Status 508 Stats; 'status_509': Status 509 Stats; 'status_510': Status 510 Stats; 'status_6xx': Status 6xx Stats; 'status_unknown': Status Unknown Stats; 'send_option_req': Send Option Req Stats; 'app_serv_conn_no_pcb_err': App Server Conn no ES PCB Err Stats; 'app_serv_conn_err': App Server Conn Err Stats; 'chunk1_hdr_err': Chunk Hdr Err1 Stats; 'chunk2_hdr_err': Chunk Hdr Err2 Stats; 'chunk_bad_trail_err': Chunk Bad Trail Err Stats; 'no_payload_next_buff_err': No Payload In Next Buff Err Stats; 'no_payload_buff_err': No Payload Buff Err Stats; 'resp_hdr_incomplete_err': Resp Hdr Incomplete Err Stats; 'serv_sel_fail_err': Server Select Fail Err Stats; 'start_icap_conn_fail_err': Start ICAP conn fail Stats; 'prep_req_fail_err': Prepare ICAP req fail Err Stats; 'icap_ver_err': ICAP Ver Err Stats; 'icap_line_err': ICAP Line Err Stats; 'encap_hdr_incomplete_err': Encap HDR Incomplete Err Stats; 'no_icap_resp_err': No ICAP Resp Err Stats; 'resp_line_read_err': Resp Line Read Err Stats; 'resp_line_parse_err': Resp Line Parse Err Stats; 'resp_hdr_err': Resp Hdr Err Stats; 'req_hdr_incomplete_err': Req Hdr Incomplete Err Stats; 'no_status_code_err': No Status Code Err Stats; 'http_resp_line_read_err': HTTP Response Line Read Err Stats; 'http_resp_line_parse_err': HTTP Response Line Parse Err Stats; 'http_resp_hdr_err': HTTP Resp Hdr Err Stats; 'recv_option_resp': Send Option Req Stats; 'http_connect_reqmod_request': HTTP CONNECT Reqmod Request Stats;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_icap#counters1 SlbIcap#counters1}
  */
  readonly counters1?: string;
}

export function slbIcapSamplingEnableToTerraform(struct?: SlbIcapSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function slbIcapSamplingEnableToHclTerraform(struct?: SlbIcapSamplingEnable | cdktf.IResolvable): any {
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

export class SlbIcapSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbIcapSamplingEnable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SlbIcapSamplingEnable | cdktf.IResolvable | undefined) {
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

export class SlbIcapSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : SlbIcapSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): SlbIcapSamplingEnableOutputReference {
    return new SlbIcapSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_icap thunder_slb_icap}
*/
export class SlbIcap extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_icap";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbIcap resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbIcap to import
  * @param importFromId The id of the existing SlbIcap that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_icap#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbIcap to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_icap", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_icap thunder_slb_icap} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbIcapConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SlbIcapConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_icap',
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
  private _samplingEnable = new SlbIcapSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: SlbIcapSamplingEnable[] | cdktf.IResolvable) {
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
      sampling_enable: cdktf.listMapper(slbIcapSamplingEnableToTerraform, true)(this._samplingEnable.internalValue),
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
        value: cdktf.listMapperHcl(slbIcapSamplingEnableToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbIcapSamplingEnableList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
