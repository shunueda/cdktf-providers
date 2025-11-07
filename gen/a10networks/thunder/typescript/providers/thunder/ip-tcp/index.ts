// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_tcp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpTcpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_tcp#id IpTcp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_tcp#uuid IpTcp#uuid}
  */
  readonly uuid?: string;
  /**
  * syn_cookie block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_tcp#syn_cookie IpTcp#syn_cookie}
  */
  readonly synCookie?: IpTcpSynCookie;
}
export interface IpTcpSynCookie {
  /**
  * Enable HW Syn-Cookie SACK support
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_tcp#sack_enable IpTcp#sack_enable}
  */
  readonly sackEnable?: number;
  /**
  * SYN cookie expire threshold (seconds (default is 4))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_tcp#threshold IpTcp#threshold}
  */
  readonly threshold?: number;
}

export function ipTcpSynCookieToTerraform(struct?: IpTcpSynCookieOutputReference | IpTcpSynCookie): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sack_enable: cdktf.numberToTerraform(struct!.sackEnable),
    threshold: cdktf.numberToTerraform(struct!.threshold),
  }
}


export function ipTcpSynCookieToHclTerraform(struct?: IpTcpSynCookieOutputReference | IpTcpSynCookie): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sack_enable: {
      value: cdktf.numberToHclTerraform(struct!.sackEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpTcpSynCookieOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IpTcpSynCookie | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sackEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.sackEnable = this._sackEnable;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpTcpSynCookie | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sackEnable = undefined;
      this._threshold = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sackEnable = value.sackEnable;
      this._threshold = value.threshold;
    }
  }

  // sack_enable - computed: false, optional: true, required: false
  private _sackEnable?: number; 
  public get sackEnable() {
    return this.getNumberAttribute('sack_enable');
  }
  public set sackEnable(value: number) {
    this._sackEnable = value;
  }
  public resetSackEnable() {
    this._sackEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sackEnableInput() {
    return this._sackEnable;
  }

  // threshold - computed: false, optional: true, required: false
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_tcp thunder_ip_tcp}
*/
export class IpTcp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ip_tcp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IpTcp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IpTcp to import
  * @param importFromId The id of the existing IpTcp that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_tcp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IpTcp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ip_tcp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_tcp thunder_ip_tcp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpTcpConfig = {}
  */
  public constructor(scope: Construct, id: string, config: IpTcpConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_ip_tcp',
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
    this._synCookie.internalValue = config.synCookie;
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

  // syn_cookie - computed: false, optional: true, required: false
  private _synCookie = new IpTcpSynCookieOutputReference(this, "syn_cookie");
  public get synCookie() {
    return this._synCookie;
  }
  public putSynCookie(value: IpTcpSynCookie) {
    this._synCookie.internalValue = value;
  }
  public resetSynCookie() {
    this._synCookie.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synCookieInput() {
    return this._synCookie.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
      syn_cookie: ipTcpSynCookieToTerraform(this._synCookie.internalValue),
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
      syn_cookie: {
        value: ipTcpSynCookieToHclTerraform(this._synCookie.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IpTcpSynCookieList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
