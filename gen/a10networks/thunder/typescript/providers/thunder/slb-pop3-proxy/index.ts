// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_pop3_proxy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbPop3ProxyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_pop3_proxy#id SlbPop3Proxy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_pop3_proxy#uuid SlbPop3Proxy#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_pop3_proxy#sampling_enable SlbPop3Proxy#sampling_enable}
  */
  readonly samplingEnable?: SlbPop3ProxySamplingEnable[] | cdktf.IResolvable;
}
export interface SlbPop3ProxySamplingEnable {
  /**
  * 'all': all; 'num': Num; 'curr': Current proxy conns; 'total': Total proxy conns; 'svrsel_fail': Server selection failure; 'no_route': no route failure; 'snat_fail': source nat failure; 'line_too_long': line too long; 'line_mem_freed': request line freed; 'invalid_start_line': invalid start line; 'stls': stls cmd; 'request_dont_care': other cmd; 'unsupported_command': Unsupported cmd; 'bad_sequence': Bad Sequence; 'rsv_persist_conn_fail': Serv Sel Persist fail; 'smp_v6_fail': Serv Sel SMPv6 fail; 'smp_v4_fail': Serv Sel SMPv4 fail; 'insert_tuple_fail': Serv Sel insert tuple fail; 'cl_est_err': Client EST state erro; 'ser_connecting_err': Serv CTNG state error; 'server_response_err': Serv RESP state error; 'cl_request_err': Client RQ state error; 'request': Total POP3 Request; 'control_to_ssl': Control chn ssl;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_pop3_proxy#counters1 SlbPop3Proxy#counters1}
  */
  readonly counters1?: string;
}

export function slbPop3ProxySamplingEnableToTerraform(struct?: SlbPop3ProxySamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function slbPop3ProxySamplingEnableToHclTerraform(struct?: SlbPop3ProxySamplingEnable | cdktf.IResolvable): any {
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

export class SlbPop3ProxySamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbPop3ProxySamplingEnable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SlbPop3ProxySamplingEnable | cdktf.IResolvable | undefined) {
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

export class SlbPop3ProxySamplingEnableList extends cdktf.ComplexList {
  public internalValue? : SlbPop3ProxySamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): SlbPop3ProxySamplingEnableOutputReference {
    return new SlbPop3ProxySamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_pop3_proxy thunder_slb_pop3_proxy}
*/
export class SlbPop3Proxy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_pop3_proxy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbPop3Proxy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbPop3Proxy to import
  * @param importFromId The id of the existing SlbPop3Proxy that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_pop3_proxy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbPop3Proxy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_pop3_proxy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_pop3_proxy thunder_slb_pop3_proxy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbPop3ProxyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SlbPop3ProxyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_pop3_proxy',
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
  private _samplingEnable = new SlbPop3ProxySamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: SlbPop3ProxySamplingEnable[] | cdktf.IResolvable) {
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
      sampling_enable: cdktf.listMapper(slbPop3ProxySamplingEnableToTerraform, true)(this._samplingEnable.internalValue),
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
        value: cdktf.listMapperHcl(slbPop3ProxySamplingEnableToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbPop3ProxySamplingEnableList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
