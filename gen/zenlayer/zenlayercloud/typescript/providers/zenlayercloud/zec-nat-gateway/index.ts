// https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/resources/zec_nat_gateway
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ZecNatGatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * Indicates whether ICMP replay is enabled. Default is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/resources/zec_nat_gateway#enable_icmp_reply ZecNatGateway#enable_icmp_reply}
  */
  readonly enableIcmpReply?: boolean | cdktf.IResolvable;
  /**
  * Indicate whether to force delete the NAT gateway. Default is `true`. If set true, the NAT gateway will be permanently deleted instead of being moved into the recycle bin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/resources/zec_nat_gateway#force_delete ZecNatGateway#force_delete}
  */
  readonly forceDelete?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/resources/zec_nat_gateway#id ZecNatGateway#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Indicates whether all the subnets of region is assigned to NAT gateway. This field is conflict with `subnet_ids`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/resources/zec_nat_gateway#is_all_subnets ZecNatGateway#is_all_subnets}
  */
  readonly isAllSubnets?: boolean | cdktf.IResolvable;
  /**
  * The name of the NAT gateway, the default value is 'Terraform-Subnet'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/resources/zec_nat_gateway#name ZecNatGateway#name}
  */
  readonly name?: string;
  /**
  * The region that the NAT gateway locates at.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/resources/zec_nat_gateway#region_id ZecNatGateway#region_id}
  */
  readonly regionId: string;
  /**
  * The resource group id the NAT gateway belongs to, default to ID of Default Resource Group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/resources/zec_nat_gateway#resource_group_id ZecNatGateway#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * The ID of a security group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/resources/zec_nat_gateway#security_group_id ZecNatGateway#security_group_id}
  */
  readonly securityGroupId: string;
  /**
  * IDs of the subnets to be associated. The subnets must belong to the specified VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/resources/zec_nat_gateway#subnet_ids ZecNatGateway#subnet_ids}
  */
  readonly subnetIds?: string[];
  /**
  * ID of the VPC to be associated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/resources/zec_nat_gateway#vpc_id ZecNatGateway#vpc_id}
  */
  readonly vpcId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/resources/zec_nat_gateway zenlayercloud_zec_nat_gateway}
*/
export class ZecNatGateway extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zenlayercloud_zec_nat_gateway";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ZecNatGateway resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ZecNatGateway to import
  * @param importFromId The id of the existing ZecNatGateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/resources/zec_nat_gateway#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ZecNatGateway to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zenlayercloud_zec_nat_gateway", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/resources/zec_nat_gateway zenlayercloud_zec_nat_gateway} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ZecNatGatewayConfig
  */
  public constructor(scope: Construct, id: string, config: ZecNatGatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'zenlayercloud_zec_nat_gateway',
      terraformGeneratorMetadata: {
        providerName: 'zenlayercloud',
        providerVersion: '0.2.9',
        providerVersionConstraint: '0.2.9'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enableIcmpReply = config.enableIcmpReply;
    this._forceDelete = config.forceDelete;
    this._id = config.id;
    this._isAllSubnets = config.isAllSubnets;
    this._name = config.name;
    this._regionId = config.regionId;
    this._resourceGroupId = config.resourceGroupId;
    this._securityGroupId = config.securityGroupId;
    this._subnetIds = config.subnetIds;
    this._vpcId = config.vpcId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // enable_icmp_reply - computed: true, optional: true, required: false
  private _enableIcmpReply?: boolean | cdktf.IResolvable; 
  public get enableIcmpReply() {
    return this.getBooleanAttribute('enable_icmp_reply');
  }
  public set enableIcmpReply(value: boolean | cdktf.IResolvable) {
    this._enableIcmpReply = value;
  }
  public resetEnableIcmpReply() {
    this._enableIcmpReply = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIcmpReplyInput() {
    return this._enableIcmpReply;
  }

  // force_delete - computed: false, optional: true, required: false
  private _forceDelete?: boolean | cdktf.IResolvable; 
  public get forceDelete() {
    return this.getBooleanAttribute('force_delete');
  }
  public set forceDelete(value: boolean | cdktf.IResolvable) {
    this._forceDelete = value;
  }
  public resetForceDelete() {
    this._forceDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDeleteInput() {
    return this._forceDelete;
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

  // is_all_subnets - computed: false, optional: true, required: false
  private _isAllSubnets?: boolean | cdktf.IResolvable; 
  public get isAllSubnets() {
    return this.getBooleanAttribute('is_all_subnets');
  }
  public set isAllSubnets(value: boolean | cdktf.IResolvable) {
    this._isAllSubnets = value;
  }
  public resetIsAllSubnets() {
    this._isAllSubnets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAllSubnetsInput() {
    return this._isAllSubnets;
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

  // region_id - computed: false, optional: false, required: true
  private _regionId?: string; 
  public get regionId() {
    return this.getStringAttribute('region_id');
  }
  public set regionId(value: string) {
    this._regionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionIdInput() {
    return this._regionId;
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

  // security_group_id - computed: false, optional: false, required: true
  private _securityGroupId?: string; 
  public get securityGroupId() {
    return this.getStringAttribute('security_group_id');
  }
  public set securityGroupId(value: string) {
    this._securityGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdInput() {
    return this._securityGroupId;
  }

  // subnet_ids - computed: false, optional: true, required: false
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return cdktf.Fn.tolist(this.getListAttribute('subnet_ids'));
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  public resetSubnetIds() {
    this._subnetIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds;
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enable_icmp_reply: cdktf.booleanToTerraform(this._enableIcmpReply),
      force_delete: cdktf.booleanToTerraform(this._forceDelete),
      id: cdktf.stringToTerraform(this._id),
      is_all_subnets: cdktf.booleanToTerraform(this._isAllSubnets),
      name: cdktf.stringToTerraform(this._name),
      region_id: cdktf.stringToTerraform(this._regionId),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      security_group_id: cdktf.stringToTerraform(this._securityGroupId),
      subnet_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._subnetIds),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enable_icmp_reply: {
        value: cdktf.booleanToHclTerraform(this._enableIcmpReply),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      force_delete: {
        value: cdktf.booleanToHclTerraform(this._forceDelete),
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
      is_all_subnets: {
        value: cdktf.booleanToHclTerraform(this._isAllSubnets),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region_id: {
        value: cdktf.stringToHclTerraform(this._regionId),
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
      security_group_id: {
        value: cdktf.stringToHclTerraform(this._securityGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._subnetIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
