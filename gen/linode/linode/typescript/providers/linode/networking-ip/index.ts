// https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/networking_ip
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkingIpConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the Linode to allocate an IPv4 address for. Required when reserved is false or not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/networking_ip#linode_id NetworkingIp#linode_id}
  */
  readonly linodeId?: number;
  /**
  * Whether the IPv4 address is public or private.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/networking_ip#public NetworkingIp#public}
  */
  readonly public?: boolean | cdktf.IResolvable;
  /**
  * The region for the reserved IPv4 address. Required when reserved is true and linode_id is not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/networking_ip#region NetworkingIp#region}
  */
  readonly region?: string;
  /**
  * Whether the IPv4 address should be reserved.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/networking_ip#reserved NetworkingIp#reserved}
  */
  readonly reserved?: boolean | cdktf.IResolvable;
  /**
  * The type of IP address (ipv4).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/networking_ip#type NetworkingIp#type}
  */
  readonly type?: string;
}
export interface NetworkingIpVpcNat11 {
}

export function networkingIpVpcNat11ToTerraform(struct?: NetworkingIpVpcNat11): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function networkingIpVpcNat11ToHclTerraform(struct?: NetworkingIpVpcNat11): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NetworkingIpVpcNat11OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkingIpVpcNat11 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkingIpVpcNat11 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getNumberAttribute('subnet_id');
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getNumberAttribute('vpc_id');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/networking_ip linode_networking_ip}
*/
export class NetworkingIp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "linode_networking_ip";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkingIp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkingIp to import
  * @param importFromId The id of the existing NetworkingIp that should be imported. Refer to the {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/networking_ip#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkingIp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "linode_networking_ip", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/networking_ip linode_networking_ip} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkingIpConfig = {}
  */
  public constructor(scope: Construct, id: string, config: NetworkingIpConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'linode_networking_ip',
      terraformGeneratorMetadata: {
        providerName: 'linode',
        providerVersion: '3.7.0',
        providerVersionConstraint: '3.7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._linodeId = config.linodeId;
    this._public = config.public;
    this._region = config.region;
    this._reserved = config.reserved;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // gateway - computed: true, optional: false, required: false
  public get gateway() {
    return this.getStringAttribute('gateway');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // linode_id - computed: true, optional: true, required: false
  private _linodeId?: number; 
  public get linodeId() {
    return this.getNumberAttribute('linode_id');
  }
  public set linodeId(value: number) {
    this._linodeId = value;
  }
  public resetLinodeId() {
    this._linodeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linodeIdInput() {
    return this._linodeId;
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getNumberAttribute('prefix');
  }

  // public - computed: true, optional: true, required: false
  private _public?: boolean | cdktf.IResolvable; 
  public get public() {
    return this.getBooleanAttribute('public');
  }
  public set public(value: boolean | cdktf.IResolvable) {
    this._public = value;
  }
  public resetPublic() {
    this._public = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicInput() {
    return this._public;
  }

  // rdns - computed: true, optional: false, required: false
  public get rdns() {
    return this.getStringAttribute('rdns');
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // reserved - computed: true, optional: true, required: false
  private _reserved?: boolean | cdktf.IResolvable; 
  public get reserved() {
    return this.getBooleanAttribute('reserved');
  }
  public set reserved(value: boolean | cdktf.IResolvable) {
    this._reserved = value;
  }
  public resetReserved() {
    this._reserved = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservedInput() {
    return this._reserved;
  }

  // subnet_mask - computed: true, optional: false, required: false
  public get subnetMask() {
    return this.getStringAttribute('subnet_mask');
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // vpc_nat_1_1 - computed: true, optional: false, required: false
  private _vpcNat11 = new NetworkingIpVpcNat11OutputReference(this, "vpc_nat_1_1");
  public get vpcNat11() {
    return this._vpcNat11;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      linode_id: cdktf.numberToTerraform(this._linodeId),
      public: cdktf.booleanToTerraform(this._public),
      region: cdktf.stringToTerraform(this._region),
      reserved: cdktf.booleanToTerraform(this._reserved),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      linode_id: {
        value: cdktf.numberToHclTerraform(this._linodeId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      public: {
        value: cdktf.booleanToHclTerraform(this._public),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reserved: {
        value: cdktf.booleanToHclTerraform(this._reserved),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
