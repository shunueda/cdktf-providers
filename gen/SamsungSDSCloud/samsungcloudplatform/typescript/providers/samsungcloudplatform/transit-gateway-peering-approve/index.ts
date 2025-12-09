// https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/transit_gateway_peering_approve
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TransitGatewayPeeringApproveConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/transit_gateway_peering_approve#id TransitGatewayPeeringApprove#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Transit Gateway Peering Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/transit_gateway_peering_approve#transit_gateway_peering_id TransitGatewayPeeringApprove#transit_gateway_peering_id}
  */
  readonly transitGatewayPeeringId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/transit_gateway_peering_approve samsungcloudplatform_transit_gateway_peering_approve}
*/
export class TransitGatewayPeeringApprove extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "samsungcloudplatform_transit_gateway_peering_approve";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TransitGatewayPeeringApprove resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TransitGatewayPeeringApprove to import
  * @param importFromId The id of the existing TransitGatewayPeeringApprove that should be imported. Refer to the {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/transit_gateway_peering_approve#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TransitGatewayPeeringApprove to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "samsungcloudplatform_transit_gateway_peering_approve", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/transit_gateway_peering_approve samsungcloudplatform_transit_gateway_peering_approve} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TransitGatewayPeeringApproveConfig
  */
  public constructor(scope: Construct, id: string, config: TransitGatewayPeeringApproveConfig) {
    super(scope, id, {
      terraformResourceType: 'samsungcloudplatform_transit_gateway_peering_approve',
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
    this._transitGatewayPeeringId = config.transitGatewayPeeringId;
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
