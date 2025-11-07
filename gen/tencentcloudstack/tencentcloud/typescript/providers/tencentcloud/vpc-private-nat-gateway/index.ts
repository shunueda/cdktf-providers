// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/vpc_private_nat_gateway
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcPrivateNatGatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * Cloud Connect Network type The Cloud Connect Network instance ID required to be bound to the private network NAT gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/vpc_private_nat_gateway#ccn_id VpcPrivateNatGateway#ccn_id}
  */
  readonly ccnId?: string;
  /**
  * Cross-domain parameters. Cross-domain binding of VPCs is supported only when the value is True.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/vpc_private_nat_gateway#cross_domain VpcPrivateNatGateway#cross_domain}
  */
  readonly crossDomain?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/vpc_private_nat_gateway#id VpcPrivateNatGateway#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Private network gateway name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/vpc_private_nat_gateway#nat_gateway_name VpcPrivateNatGateway#nat_gateway_name}
  */
  readonly natGatewayName: string;
  /**
  * Private Cloud instance ID. This parameter is required when creating a VPC type private network NAT gateway or a private network NAT gateway of private network gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/vpc_private_nat_gateway#vpc_id VpcPrivateNatGateway#vpc_id}
  */
  readonly vpcId?: string;
  /**
  * VPC type private network NAT gateway. Only when the value is True will a VPC type private network NAT gateway be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/vpc_private_nat_gateway#vpc_type VpcPrivateNatGateway#vpc_type}
  */
  readonly vpcType?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/vpc_private_nat_gateway tencentcloud_vpc_private_nat_gateway}
*/
export class VpcPrivateNatGateway extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_vpc_private_nat_gateway";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpcPrivateNatGateway resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpcPrivateNatGateway to import
  * @param importFromId The id of the existing VpcPrivateNatGateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/vpc_private_nat_gateway#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpcPrivateNatGateway to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_vpc_private_nat_gateway", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/vpc_private_nat_gateway tencentcloud_vpc_private_nat_gateway} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpcPrivateNatGatewayConfig
  */
  public constructor(scope: Construct, id: string, config: VpcPrivateNatGatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_vpc_private_nat_gateway',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.35'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._ccnId = config.ccnId;
    this._crossDomain = config.crossDomain;
    this._id = config.id;
    this._natGatewayName = config.natGatewayName;
    this._vpcId = config.vpcId;
    this._vpcType = config.vpcType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ccn_id - computed: true, optional: true, required: false
  private _ccnId?: string; 
  public get ccnId() {
    return this.getStringAttribute('ccn_id');
  }
  public set ccnId(value: string) {
    this._ccnId = value;
  }
  public resetCcnId() {
    this._ccnId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ccnIdInput() {
    return this._ccnId;
  }

  // cross_domain - computed: true, optional: true, required: false
  private _crossDomain?: boolean | cdktf.IResolvable; 
  public get crossDomain() {
    return this.getBooleanAttribute('cross_domain');
  }
  public set crossDomain(value: boolean | cdktf.IResolvable) {
    this._crossDomain = value;
  }
  public resetCrossDomain() {
    this._crossDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossDomainInput() {
    return this._crossDomain;
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

  // nat_gateway_name - computed: false, optional: false, required: true
  private _natGatewayName?: string; 
  public get natGatewayName() {
    return this.getStringAttribute('nat_gateway_name');
  }
  public set natGatewayName(value: string) {
    this._natGatewayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get natGatewayNameInput() {
    return this._natGatewayName;
  }

  // vpc_id - computed: true, optional: true, required: false
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  public resetVpcId() {
    this._vpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // vpc_type - computed: true, optional: true, required: false
  private _vpcType?: boolean | cdktf.IResolvable; 
  public get vpcType() {
    return this.getBooleanAttribute('vpc_type');
  }
  public set vpcType(value: boolean | cdktf.IResolvable) {
    this._vpcType = value;
  }
  public resetVpcType() {
    this._vpcType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcTypeInput() {
    return this._vpcType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ccn_id: cdktf.stringToTerraform(this._ccnId),
      cross_domain: cdktf.booleanToTerraform(this._crossDomain),
      id: cdktf.stringToTerraform(this._id),
      nat_gateway_name: cdktf.stringToTerraform(this._natGatewayName),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      vpc_type: cdktf.booleanToTerraform(this._vpcType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ccn_id: {
        value: cdktf.stringToHclTerraform(this._ccnId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cross_domain: {
        value: cdktf.booleanToHclTerraform(this._crossDomain),
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
      nat_gateway_name: {
        value: cdktf.stringToHclTerraform(this._natGatewayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_type: {
        value: cdktf.booleanToHclTerraform(this._vpcType),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
