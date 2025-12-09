// https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/vpc_peering_detail
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSamsungcloudplatformVpcPeeringDetailConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/vpc_peering_detail#id DataSamsungcloudplatformVpcPeeringDetail#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Vpc Peering Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/vpc_peering_detail#vpc_peering_id DataSamsungcloudplatformVpcPeeringDetail#vpc_peering_id}
  */
  readonly vpcPeeringId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/vpc_peering_detail samsungcloudplatform_vpc_peering_detail}
*/
export class DataSamsungcloudplatformVpcPeeringDetail extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "samsungcloudplatform_vpc_peering_detail";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSamsungcloudplatformVpcPeeringDetail resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSamsungcloudplatformVpcPeeringDetail to import
  * @param importFromId The id of the existing DataSamsungcloudplatformVpcPeeringDetail that should be imported. Refer to the {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/vpc_peering_detail#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSamsungcloudplatformVpcPeeringDetail to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "samsungcloudplatform_vpc_peering_detail", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/vpc_peering_detail samsungcloudplatform_vpc_peering_detail} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSamsungcloudplatformVpcPeeringDetailConfig
  */
  public constructor(scope: Construct, id: string, config: DataSamsungcloudplatformVpcPeeringDetailConfig) {
    super(scope, id, {
      terraformResourceType: 'samsungcloudplatform_vpc_peering_detail',
      terraformGeneratorMetadata: {
        providerName: 'samsungcloudplatform',
        providerVersion: '3.16.0',
        providerVersionConstraint: '3.16.0'
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
    this._vpcPeeringId = config.vpcPeeringId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // approved_by - computed: true, optional: false, required: false
  public get approvedBy() {
    return this.getStringAttribute('approved_by');
  }

  // approved_dt - computed: true, optional: false, required: false
  public get approvedDt() {
    return this.getStringAttribute('approved_dt');
  }

  // approver_firewall_enabled - computed: true, optional: false, required: false
  public get approverFirewallEnabled() {
    return this.getBooleanAttribute('approver_firewall_enabled');
  }

  // approver_project_id - computed: true, optional: false, required: false
  public get approverProjectId() {
    return this.getStringAttribute('approver_project_id');
  }

  // approver_vpc_id - computed: true, optional: false, required: false
  public get approverVpcId() {
    return this.getStringAttribute('approver_vpc_id');
  }

  // block_id - computed: true, optional: false, required: false
  public get blockId() {
    return this.getStringAttribute('block_id');
  }

  // completed_dt - computed: true, optional: false, required: false
  public get completedDt() {
    return this.getStringAttribute('completed_dt');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_dt - computed: true, optional: false, required: false
  public get createdDt() {
    return this.getStringAttribute('created_dt');
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

  // modified_by - computed: true, optional: false, required: false
  public get modifiedBy() {
    return this.getStringAttribute('modified_by');
  }

  // modified_dt - computed: true, optional: false, required: false
  public get modifiedDt() {
    return this.getStringAttribute('modified_dt');
  }

  // product_group_id - computed: true, optional: false, required: false
  public get productGroupId() {
    return this.getStringAttribute('product_group_id');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // requested_by - computed: true, optional: false, required: false
  public get requestedBy() {
    return this.getStringAttribute('requested_by');
  }

  // requested_dt - computed: true, optional: false, required: false
  public get requestedDt() {
    return this.getStringAttribute('requested_dt');
  }

  // requester_firewall_enabled - computed: true, optional: false, required: false
  public get requesterFirewallEnabled() {
    return this.getBooleanAttribute('requester_firewall_enabled');
  }

  // requester_project_id - computed: true, optional: false, required: false
  public get requesterProjectId() {
    return this.getStringAttribute('requester_project_id');
  }

  // requester_vpc_id - computed: true, optional: false, required: false
  public get requesterVpcId() {
    return this.getStringAttribute('requester_vpc_id');
  }

  // service_zone_id - computed: true, optional: false, required: false
  public get serviceZoneId() {
    return this.getStringAttribute('service_zone_id');
  }

  // vpc_peering_description - computed: true, optional: false, required: false
  public get vpcPeeringDescription() {
    return this.getStringAttribute('vpc_peering_description');
  }

  // vpc_peering_id - computed: false, optional: false, required: true
  private _vpcPeeringId?: string; 
  public get vpcPeeringId() {
    return this.getStringAttribute('vpc_peering_id');
  }
  public set vpcPeeringId(value: string) {
    this._vpcPeeringId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcPeeringIdInput() {
    return this._vpcPeeringId;
  }

  // vpc_peering_name - computed: true, optional: false, required: false
  public get vpcPeeringName() {
    return this.getStringAttribute('vpc_peering_name');
  }

  // vpc_peering_state - computed: true, optional: false, required: false
  public get vpcPeeringState() {
    return this.getStringAttribute('vpc_peering_state');
  }

  // vpc_peering_type - computed: true, optional: false, required: false
  public get vpcPeeringType() {
    return this.getStringAttribute('vpc_peering_type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      vpc_peering_id: cdktf.stringToTerraform(this._vpcPeeringId),
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
      vpc_peering_id: {
        value: cdktf.stringToHclTerraform(this._vpcPeeringId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
