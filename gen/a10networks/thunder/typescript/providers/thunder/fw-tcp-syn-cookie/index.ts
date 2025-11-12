// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_tcp_syn_cookie
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FwTcpSynCookieConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_tcp_syn_cookie#id FwTcpSynCookie#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable Firewall Syn-Cookie Protection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_tcp_syn_cookie#syn_cookie_enable FwTcpSynCookie#syn_cookie_enable}
  */
  readonly synCookieEnable?: number;
  /**
  * on-threshold for Syn-cookie (Decimal number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_tcp_syn_cookie#syn_cookie_on_threshold FwTcpSynCookie#syn_cookie_on_threshold}
  */
  readonly synCookieOnThreshold?: number;
  /**
  * on-timeout for Syn-cookie (Timeout in seconds, default is 120 seconds (2 minutes))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_tcp_syn_cookie#syn_cookie_on_timeout FwTcpSynCookie#syn_cookie_on_timeout}
  */
  readonly synCookieOnTimeout?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_tcp_syn_cookie#uuid FwTcpSynCookie#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_tcp_syn_cookie#sampling_enable FwTcpSynCookie#sampling_enable}
  */
  readonly samplingEnable?: FwTcpSynCookieSamplingEnable[] | cdktf.IResolvable;
}
export interface FwTcpSynCookieSamplingEnable {
  /**
  * 'all': all; 'syn_ack_sent': SYN cookie SYN ACK sent; 'verification_passed': SYN cookie verification passed; 'verification_failed': SYN cookie verification failed; 'conn_setup_failed': SYN cookie connection setup failed;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_tcp_syn_cookie#counters1 FwTcpSynCookie#counters1}
  */
  readonly counters1?: string;
}

export function fwTcpSynCookieSamplingEnableToTerraform(struct?: FwTcpSynCookieSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function fwTcpSynCookieSamplingEnableToHclTerraform(struct?: FwTcpSynCookieSamplingEnable | cdktf.IResolvable): any {
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

export class FwTcpSynCookieSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FwTcpSynCookieSamplingEnable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FwTcpSynCookieSamplingEnable | cdktf.IResolvable | undefined) {
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

export class FwTcpSynCookieSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : FwTcpSynCookieSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): FwTcpSynCookieSamplingEnableOutputReference {
    return new FwTcpSynCookieSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_tcp_syn_cookie thunder_fw_tcp_syn_cookie}
*/
export class FwTcpSynCookie extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_fw_tcp_syn_cookie";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FwTcpSynCookie resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FwTcpSynCookie to import
  * @param importFromId The id of the existing FwTcpSynCookie that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_tcp_syn_cookie#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FwTcpSynCookie to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_fw_tcp_syn_cookie", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_tcp_syn_cookie thunder_fw_tcp_syn_cookie} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FwTcpSynCookieConfig = {}
  */
  public constructor(scope: Construct, id: string, config: FwTcpSynCookieConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_fw_tcp_syn_cookie',
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
    this._synCookieEnable = config.synCookieEnable;
    this._synCookieOnThreshold = config.synCookieOnThreshold;
    this._synCookieOnTimeout = config.synCookieOnTimeout;
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

  // syn_cookie_enable - computed: false, optional: true, required: false
  private _synCookieEnable?: number; 
  public get synCookieEnable() {
    return this.getNumberAttribute('syn_cookie_enable');
  }
  public set synCookieEnable(value: number) {
    this._synCookieEnable = value;
  }
  public resetSynCookieEnable() {
    this._synCookieEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synCookieEnableInput() {
    return this._synCookieEnable;
  }

  // syn_cookie_on_threshold - computed: false, optional: true, required: false
  private _synCookieOnThreshold?: number; 
  public get synCookieOnThreshold() {
    return this.getNumberAttribute('syn_cookie_on_threshold');
  }
  public set synCookieOnThreshold(value: number) {
    this._synCookieOnThreshold = value;
  }
  public resetSynCookieOnThreshold() {
    this._synCookieOnThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synCookieOnThresholdInput() {
    return this._synCookieOnThreshold;
  }

  // syn_cookie_on_timeout - computed: false, optional: true, required: false
  private _synCookieOnTimeout?: number; 
  public get synCookieOnTimeout() {
    return this.getNumberAttribute('syn_cookie_on_timeout');
  }
  public set synCookieOnTimeout(value: number) {
    this._synCookieOnTimeout = value;
  }
  public resetSynCookieOnTimeout() {
    this._synCookieOnTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synCookieOnTimeoutInput() {
    return this._synCookieOnTimeout;
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
  private _samplingEnable = new FwTcpSynCookieSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: FwTcpSynCookieSamplingEnable[] | cdktf.IResolvable) {
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
      syn_cookie_enable: cdktf.numberToTerraform(this._synCookieEnable),
      syn_cookie_on_threshold: cdktf.numberToTerraform(this._synCookieOnThreshold),
      syn_cookie_on_timeout: cdktf.numberToTerraform(this._synCookieOnTimeout),
      uuid: cdktf.stringToTerraform(this._uuid),
      sampling_enable: cdktf.listMapper(fwTcpSynCookieSamplingEnableToTerraform, true)(this._samplingEnable.internalValue),
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
      syn_cookie_enable: {
        value: cdktf.numberToHclTerraform(this._synCookieEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      syn_cookie_on_threshold: {
        value: cdktf.numberToHclTerraform(this._synCookieOnThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      syn_cookie_on_timeout: {
        value: cdktf.numberToHclTerraform(this._synCookieOnTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sampling_enable: {
        value: cdktf.listMapperHcl(fwTcpSynCookieSamplingEnableToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FwTcpSynCookieSamplingEnableList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
