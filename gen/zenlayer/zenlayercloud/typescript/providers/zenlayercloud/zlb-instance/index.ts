// https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.14/docs/resources/zlb_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ZlbInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.14/docs/resources/zlb_instance#id ZlbInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID of region that the load balancer instance locates at.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.14/docs/resources/zlb_instance#region_id ZlbInstance#region_id}
  */
  readonly regionId: string;
  /**
  * The resource group id the load balancer belongs to, default to Default Resource Group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.14/docs/resources/zlb_instance#resource_group_id ZlbInstance#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * The ID of VPC that the load balancer instance belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.14/docs/resources/zlb_instance#vpc_id ZlbInstance#vpc_id}
  */
  readonly vpcId: string;
  /**
  * The name of the load balancer instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.14/docs/resources/zlb_instance#zlb_name ZlbInstance#zlb_name}
  */
  readonly zlbName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.14/docs/resources/zlb_instance zenlayercloud_zlb_instance}
*/
export class ZlbInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zenlayercloud_zlb_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ZlbInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ZlbInstance to import
  * @param importFromId The id of the existing ZlbInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.14/docs/resources/zlb_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ZlbInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zenlayercloud_zlb_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.14/docs/resources/zlb_instance zenlayercloud_zlb_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ZlbInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: ZlbInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'zenlayercloud_zlb_instance',
      terraformGeneratorMetadata: {
        providerName: 'zenlayercloud',
        providerVersion: '0.2.14',
        providerVersionConstraint: '0.2.14'
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
    this._regionId = config.regionId;
    this._resourceGroupId = config.resourceGroupId;
    this._vpcId = config.vpcId;
    this._zlbName = config.zlbName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // private_ip_addresses - computed: true, optional: false, required: false
  public get privateIpAddresses() {
    return cdktf.Fn.tolist(this.getListAttribute('private_ip_addresses'));
  }

  // public_ip_addresses - computed: true, optional: false, required: false
  public get publicIpAddresses() {
    return cdktf.Fn.tolist(this.getListAttribute('public_ip_addresses'));
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

  // resource_group_name - computed: true, optional: false, required: false
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
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

  // zlb_name - computed: false, optional: true, required: false
  private _zlbName?: string; 
  public get zlbName() {
    return this.getStringAttribute('zlb_name');
  }
  public set zlbName(value: string) {
    this._zlbName = value;
  }
  public resetZlbName() {
    this._zlbName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zlbNameInput() {
    return this._zlbName;
  }

  // zlb_status - computed: true, optional: false, required: false
  public get zlbStatus() {
    return this.getStringAttribute('zlb_status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      region_id: cdktf.stringToTerraform(this._regionId),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      zlb_name: cdktf.stringToTerraform(this._zlbName),
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
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zlb_name: {
        value: cdktf.stringToHclTerraform(this._zlbName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
