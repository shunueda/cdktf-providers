// https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.17/docs/resources/zec_vpc
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ZecVpcConfig extends cdktf.TerraformMetaArguments {
  /**
  * A network address block which should be a subnet of the three internal network segments (10.0.0.0/8, 172.16.0.0/12 and 192.168.0.0/16).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.17/docs/resources/zec_vpc#cidr_block ZecVpc#cidr_block}
  */
  readonly cidrBlock: string;
  /**
  * Whether to enable the private IPv6 network segment. Once the ipv6 is enabled, disable it will cause the resource to `ForceNew`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.17/docs/resources/zec_vpc#enable_ipv6 ZecVpc#enable_ipv6}
  */
  readonly enableIpv6?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.17/docs/resources/zec_vpc#id ZecVpc#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The maximum transmission unit. This value cannot be changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.17/docs/resources/zec_vpc#mtu ZecVpc#mtu}
  */
  readonly mtu?: number;
  /**
  * The name of the global VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.17/docs/resources/zec_vpc#name ZecVpc#name}
  */
  readonly name?: string;
  /**
  * The resource group id the global VPC belongs to, default to ID of Default Resource Group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.17/docs/resources/zec_vpc#resource_group_id ZecVpc#resource_group_id}
  */
  readonly resourceGroupId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.17/docs/resources/zec_vpc zenlayercloud_zec_vpc}
*/
export class ZecVpc extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zenlayercloud_zec_vpc";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ZecVpc resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ZecVpc to import
  * @param importFromId The id of the existing ZecVpc that should be imported. Refer to the {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.17/docs/resources/zec_vpc#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ZecVpc to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zenlayercloud_zec_vpc", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.17/docs/resources/zec_vpc zenlayercloud_zec_vpc} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ZecVpcConfig
  */
  public constructor(scope: Construct, id: string, config: ZecVpcConfig) {
    super(scope, id, {
      terraformResourceType: 'zenlayercloud_zec_vpc',
      terraformGeneratorMetadata: {
        providerName: 'zenlayercloud',
        providerVersion: '0.2.17',
        providerVersionConstraint: '0.2.17'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cidrBlock = config.cidrBlock;
    this._enableIpv6 = config.enableIpv6;
    this._id = config.id;
    this._mtu = config.mtu;
    this._name = config.name;
    this._resourceGroupId = config.resourceGroupId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cidr_block - computed: false, optional: false, required: true
  private _cidrBlock?: string; 
  public get cidrBlock() {
    return this.getStringAttribute('cidr_block');
  }
  public set cidrBlock(value: string) {
    this._cidrBlock = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrBlockInput() {
    return this._cidrBlock;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // enable_ipv6 - computed: false, optional: true, required: false
  private _enableIpv6?: boolean | cdktf.IResolvable; 
  public get enableIpv6() {
    return this.getBooleanAttribute('enable_ipv6');
  }
  public set enableIpv6(value: boolean | cdktf.IResolvable) {
    this._enableIpv6 = value;
  }
  public resetEnableIpv6() {
    this._enableIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIpv6Input() {
    return this._enableIpv6;
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

  // ipv6_cidr_block - computed: true, optional: false, required: false
  public get ipv6CidrBlock() {
    return this.getStringAttribute('ipv6_cidr_block');
  }

  // is_default - computed: true, optional: false, required: false
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }

  // mtu - computed: false, optional: true, required: false
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // resource_group_id - computed: true, optional: true, required: false
  private _resourceGroupId?: string; 
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }
  public set resourceGroupId(value: string) {
    this._resourceGroupId = value;
  }
  public resetResourceGroupId() {
    this._resourceGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupIdInput() {
    return this._resourceGroupId;
  }

  // resource_group_name - computed: true, optional: false, required: false
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cidr_block: cdktf.stringToTerraform(this._cidrBlock),
      enable_ipv6: cdktf.booleanToTerraform(this._enableIpv6),
      id: cdktf.stringToTerraform(this._id),
      mtu: cdktf.numberToTerraform(this._mtu),
      name: cdktf.stringToTerraform(this._name),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cidr_block: {
        value: cdktf.stringToHclTerraform(this._cidrBlock),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_ipv6: {
        value: cdktf.booleanToHclTerraform(this._enableIpv6),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mtu: {
        value: cdktf.numberToHclTerraform(this._mtu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_id: {
        value: cdktf.stringToHclTerraform(this._resourceGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
