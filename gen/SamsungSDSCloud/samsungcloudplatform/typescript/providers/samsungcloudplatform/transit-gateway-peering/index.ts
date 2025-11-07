// https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/transit_gateway_peering
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TransitGatewayPeeringConfig extends cdktf.TerraformMetaArguments {
  /**
  * Approver Project ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/transit_gateway_peering#approver_project_id TransitGatewayPeering#approver_project_id}
  */
  readonly approverProjectId: string;
  /**
  * Approver TGW ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/transit_gateway_peering#approver_transit_gateway_id TransitGatewayPeering#approver_transit_gateway_id}
  */
  readonly approverTransitGatewayId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/transit_gateway_peering#id TransitGatewayPeering#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Requester Project ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/transit_gateway_peering#requester_project_id TransitGatewayPeering#requester_project_id}
  */
  readonly requesterProjectId: string;
  /**
  * Requester TGW ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/transit_gateway_peering#requester_transit_gateway_id TransitGatewayPeering#requester_transit_gateway_id}
  */
  readonly requesterTransitGatewayId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/transit_gateway_peering#tags TransitGatewayPeering#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Transit Gateway Peering Description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/transit_gateway_peering#transit_gateway_peering_description TransitGatewayPeering#transit_gateway_peering_description}
  */
  readonly transitGatewayPeeringDescription?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/transit_gateway_peering samsungcloudplatform_transit_gateway_peering}
*/
export class TransitGatewayPeering extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "samsungcloudplatform_transit_gateway_peering";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TransitGatewayPeering resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TransitGatewayPeering to import
  * @param importFromId The id of the existing TransitGatewayPeering that should be imported. Refer to the {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/transit_gateway_peering#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TransitGatewayPeering to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "samsungcloudplatform_transit_gateway_peering", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/transit_gateway_peering samsungcloudplatform_transit_gateway_peering} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TransitGatewayPeeringConfig
  */
  public constructor(scope: Construct, id: string, config: TransitGatewayPeeringConfig) {
    super(scope, id, {
      terraformResourceType: 'samsungcloudplatform_transit_gateway_peering',
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
    this._approverProjectId = config.approverProjectId;
    this._approverTransitGatewayId = config.approverTransitGatewayId;
    this._id = config.id;
    this._requesterProjectId = config.requesterProjectId;
    this._requesterTransitGatewayId = config.requesterTransitGatewayId;
    this._tags = config.tags;
    this._transitGatewayPeeringDescription = config.transitGatewayPeeringDescription;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // approver_project_id - computed: false, optional: false, required: true
  private _approverProjectId?: string; 
  public get approverProjectId() {
    return this.getStringAttribute('approver_project_id');
  }
  public set approverProjectId(value: string) {
    this._approverProjectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get approverProjectIdInput() {
    return this._approverProjectId;
  }

  // approver_transit_gateway_id - computed: false, optional: false, required: true
  private _approverTransitGatewayId?: string; 
  public get approverTransitGatewayId() {
    return this.getStringAttribute('approver_transit_gateway_id');
  }
  public set approverTransitGatewayId(value: string) {
    this._approverTransitGatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get approverTransitGatewayIdInput() {
    return this._approverTransitGatewayId;
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

  // requester_project_id - computed: false, optional: false, required: true
  private _requesterProjectId?: string; 
  public get requesterProjectId() {
    return this.getStringAttribute('requester_project_id');
  }
  public set requesterProjectId(value: string) {
    this._requesterProjectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requesterProjectIdInput() {
    return this._requesterProjectId;
  }

  // requester_transit_gateway_id - computed: false, optional: false, required: true
  private _requesterTransitGatewayId?: string; 
  public get requesterTransitGatewayId() {
    return this.getStringAttribute('requester_transit_gateway_id');
  }
  public set requesterTransitGatewayId(value: string) {
    this._requesterTransitGatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requesterTransitGatewayIdInput() {
    return this._requesterTransitGatewayId;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // transit_gateway_peering_description - computed: false, optional: true, required: false
  private _transitGatewayPeeringDescription?: string; 
  public get transitGatewayPeeringDescription() {
    return this.getStringAttribute('transit_gateway_peering_description');
  }
  public set transitGatewayPeeringDescription(value: string) {
    this._transitGatewayPeeringDescription = value;
  }
  public resetTransitGatewayPeeringDescription() {
    this._transitGatewayPeeringDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitGatewayPeeringDescriptionInput() {
    return this._transitGatewayPeeringDescription;
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
      approver_project_id: cdktf.stringToTerraform(this._approverProjectId),
      approver_transit_gateway_id: cdktf.stringToTerraform(this._approverTransitGatewayId),
      id: cdktf.stringToTerraform(this._id),
      requester_project_id: cdktf.stringToTerraform(this._requesterProjectId),
      requester_transit_gateway_id: cdktf.stringToTerraform(this._requesterTransitGatewayId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      transit_gateway_peering_description: cdktf.stringToTerraform(this._transitGatewayPeeringDescription),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      approver_project_id: {
        value: cdktf.stringToHclTerraform(this._approverProjectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      approver_transit_gateway_id: {
        value: cdktf.stringToHclTerraform(this._approverTransitGatewayId),
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
      requester_project_id: {
        value: cdktf.stringToHclTerraform(this._requesterProjectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      requester_transit_gateway_id: {
        value: cdktf.stringToHclTerraform(this._requesterTransitGatewayId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      transit_gateway_peering_description: {
        value: cdktf.stringToHclTerraform(this._transitGatewayPeeringDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
