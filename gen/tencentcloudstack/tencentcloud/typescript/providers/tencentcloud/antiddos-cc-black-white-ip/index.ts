// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/antiddos_cc_black_white_ip
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AntiddosCcBlackWhiteIpConfig extends cdktf.TerraformMetaArguments {
  /**
  * domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/antiddos_cc_black_white_ip#domain AntiddosCcBlackWhiteIp#domain}
  */
  readonly domain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/antiddos_cc_black_white_ip#id AntiddosCcBlackWhiteIp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * instance id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/antiddos_cc_black_white_ip#instance_id AntiddosCcBlackWhiteIp#instance_id}
  */
  readonly instanceId: string;
  /**
  * ip address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/antiddos_cc_black_white_ip#ip AntiddosCcBlackWhiteIp#ip}
  */
  readonly ip: string;
  /**
  * protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/antiddos_cc_black_white_ip#protocol AntiddosCcBlackWhiteIp#protocol}
  */
  readonly protocol: string;
  /**
  * IP type, value [black(blacklist IP), white(whitelist IP)].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/antiddos_cc_black_white_ip#type AntiddosCcBlackWhiteIp#type}
  */
  readonly type: string;
  /**
  * black_white_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/antiddos_cc_black_white_ip#black_white_ip AntiddosCcBlackWhiteIp#black_white_ip}
  */
  readonly blackWhiteIp: AntiddosCcBlackWhiteIpBlackWhiteIp;
}
export interface AntiddosCcBlackWhiteIpBlackWhiteIp {
  /**
  * ip address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/antiddos_cc_black_white_ip#ip AntiddosCcBlackWhiteIp#ip}
  */
  readonly ip: string;
  /**
  * ip mask.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/antiddos_cc_black_white_ip#mask AntiddosCcBlackWhiteIp#mask}
  */
  readonly mask: number;
}

export function antiddosCcBlackWhiteIpBlackWhiteIpToTerraform(struct?: AntiddosCcBlackWhiteIpBlackWhiteIpOutputReference | AntiddosCcBlackWhiteIpBlackWhiteIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    mask: cdktf.numberToTerraform(struct!.mask),
  }
}


export function antiddosCcBlackWhiteIpBlackWhiteIpToHclTerraform(struct?: AntiddosCcBlackWhiteIpBlackWhiteIpOutputReference | AntiddosCcBlackWhiteIpBlackWhiteIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mask: {
      value: cdktf.numberToHclTerraform(struct!.mask),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AntiddosCcBlackWhiteIpBlackWhiteIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AntiddosCcBlackWhiteIpBlackWhiteIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._mask !== undefined) {
      hasAnyValues = true;
      internalValueResult.mask = this._mask;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AntiddosCcBlackWhiteIpBlackWhiteIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ip = undefined;
      this._mask = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ip = value.ip;
      this._mask = value.mask;
    }
  }

  // ip - computed: false, optional: false, required: true
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // mask - computed: false, optional: false, required: true
  private _mask?: number; 
  public get mask() {
    return this.getNumberAttribute('mask');
  }
  public set mask(value: number) {
    this._mask = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maskInput() {
    return this._mask;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/antiddos_cc_black_white_ip tencentcloud_antiddos_cc_black_white_ip}
*/
export class AntiddosCcBlackWhiteIp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_antiddos_cc_black_white_ip";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AntiddosCcBlackWhiteIp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AntiddosCcBlackWhiteIp to import
  * @param importFromId The id of the existing AntiddosCcBlackWhiteIp that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/antiddos_cc_black_white_ip#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AntiddosCcBlackWhiteIp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_antiddos_cc_black_white_ip", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/antiddos_cc_black_white_ip tencentcloud_antiddos_cc_black_white_ip} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AntiddosCcBlackWhiteIpConfig
  */
  public constructor(scope: Construct, id: string, config: AntiddosCcBlackWhiteIpConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_antiddos_cc_black_white_ip',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.42',
        providerVersionConstraint: '1.82.42'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._domain = config.domain;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._ip = config.ip;
    this._protocol = config.protocol;
    this._type = config.type;
    this._blackWhiteIp.internalValue = config.blackWhiteIp;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // ip - computed: false, optional: false, required: true
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // black_white_ip - computed: false, optional: false, required: true
  private _blackWhiteIp = new AntiddosCcBlackWhiteIpBlackWhiteIpOutputReference(this, "black_white_ip");
  public get blackWhiteIp() {
    return this._blackWhiteIp;
  }
  public putBlackWhiteIp(value: AntiddosCcBlackWhiteIpBlackWhiteIp) {
    this._blackWhiteIp.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blackWhiteIpInput() {
    return this._blackWhiteIp.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain: cdktf.stringToTerraform(this._domain),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      ip: cdktf.stringToTerraform(this._ip),
      protocol: cdktf.stringToTerraform(this._protocol),
      type: cdktf.stringToTerraform(this._type),
      black_white_ip: antiddosCcBlackWhiteIpBlackWhiteIpToTerraform(this._blackWhiteIp.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip: {
        value: cdktf.stringToHclTerraform(this._ip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      black_white_ip: {
        value: antiddosCcBlackWhiteIpBlackWhiteIpToHclTerraform(this._blackWhiteIp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AntiddosCcBlackWhiteIpBlackWhiteIpList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
