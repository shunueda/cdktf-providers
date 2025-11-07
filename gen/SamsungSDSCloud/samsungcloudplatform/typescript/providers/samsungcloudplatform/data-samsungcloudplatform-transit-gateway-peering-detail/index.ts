// https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/transit_gateway_peering_detail
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSamsungcloudplatformTransitGatewayPeeringDetailConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/transit_gateway_peering_detail#id DataSamsungcloudplatformTransitGatewayPeeringDetail#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Transit Gateway Peering Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/transit_gateway_peering_detail#transit_gateway_peering_id DataSamsungcloudplatformTransitGatewayPeeringDetail#transit_gateway_peering_id}
  */
  readonly transitGatewayPeeringId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/transit_gateway_peering_detail samsungcloudplatform_transit_gateway_peering_detail}
*/
export class DataSamsungcloudplatformTransitGatewayPeeringDetail extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "samsungcloudplatform_transit_gateway_peering_detail";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSamsungcloudplatformTransitGatewayPeeringDetail resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSamsungcloudplatformTransitGatewayPeeringDetail to import
  * @param importFromId The id of the existing DataSamsungcloudplatformTransitGatewayPeeringDetail that should be imported. Refer to the {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/transit_gateway_peering_detail#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSamsungcloudplatformTransitGatewayPeeringDetail to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "samsungcloudplatform_transit_gateway_peering_detail", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/transit_gateway_peering_detail samsungcloudplatform_transit_gateway_peering_detail} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSamsungcloudplatformTransitGatewayPeeringDetailConfig
  */
  public constructor(scope: Construct, id: string, config: DataSamsungcloudplatformTransitGatewayPeeringDetailConfig) {
    super(scope, id, {
      terraformResourceType: 'samsungcloudplatform_transit_gateway_peering_detail',
      terraformGeneratorMetadata: {
        providerName: 'samsungcloudplatform',
        providerVersion: '3.15.0'
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
    this._transitGatewayPeeringId = config.transitGatewayPeeringId;
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

  // approver_project_id - computed: true, optional: false, required: false
  public get approverProjectId() {
    return this.getStringAttribute('approver_project_id');
  }

  // approver_transit_gateway_id - computed: true, optional: false, required: false
  public get approverTransitGatewayId() {
    return this.getStringAttribute('approver_transit_gateway_id');
  }

  // automated - computed: true, optional: false, required: false
  public get automated() {
    return this.getBooleanAttribute('automated');
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

  // requester_project_id - computed: true, optional: false, required: false
  public get requesterProjectId() {
    return this.getStringAttribute('requester_project_id');
  }

  // requester_transit_gateway_id - computed: true, optional: false, required: false
  public get requesterTransitGatewayId() {
    return this.getStringAttribute('requester_transit_gateway_id');
  }

  // service_zone_id - computed: true, optional: false, required: false
  public get serviceZoneId() {
    return this.getStringAttribute('service_zone_id');
  }

  // transit_gateway_peering_description - computed: true, optional: false, required: false
  public get transitGatewayPeeringDescription() {
    return this.getStringAttribute('transit_gateway_peering_description');
  }

  // transit_gateway_peering_id - computed: false, optional: false, required: true
  private _transitGatewayPeeringId?: string; 
  public get transitGatewayPeeringId() {
    return this.getStringAttribute('transit_gateway_peering_id');
  }
  public set transitGatewayPeeringId(value: string) {
    this._transitGatewayPeeringId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transitGatewayPeeringIdInput() {
    return this._transitGatewayPeeringId;
  }

  // transit_gateway_peering_name - computed: true, optional: false, required: false
  public get transitGatewayPeeringName() {
    return this.getStringAttribute('transit_gateway_peering_name');
  }

  // transit_gateway_peering_state - computed: true, optional: false, required: false
  public get transitGatewayPeeringState() {
    return this.getStringAttribute('transit_gateway_peering_state');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      transit_gateway_peering_id: cdktf.stringToTerraform(this._transitGatewayPeeringId),
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
      transit_gateway_peering_id: {
        value: cdktf.stringToHclTerraform(this._transitGatewayPeeringId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
