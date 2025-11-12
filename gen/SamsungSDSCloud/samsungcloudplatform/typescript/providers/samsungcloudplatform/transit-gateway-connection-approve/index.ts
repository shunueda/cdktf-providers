// https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/transit_gateway_connection_approve
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TransitGatewayConnectionApproveConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/transit_gateway_connection_approve#id TransitGatewayConnectionApprove#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * TGW - VPC Connection description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/transit_gateway_connection_approve#transit_gateway_connection_description TransitGatewayConnectionApprove#transit_gateway_connection_description}
  */
  readonly transitGatewayConnectionDescription?: string;
  /**
  * TGW-VPC Connection ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/transit_gateway_connection_approve#transit_gateway_connection_id TransitGatewayConnectionApprove#transit_gateway_connection_id}
  */
  readonly transitGatewayConnectionId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/transit_gateway_connection_approve samsungcloudplatform_transit_gateway_connection_approve}
*/
export class TransitGatewayConnectionApprove extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "samsungcloudplatform_transit_gateway_connection_approve";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TransitGatewayConnectionApprove resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TransitGatewayConnectionApprove to import
  * @param importFromId The id of the existing TransitGatewayConnectionApprove that should be imported. Refer to the {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/transit_gateway_connection_approve#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TransitGatewayConnectionApprove to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "samsungcloudplatform_transit_gateway_connection_approve", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/transit_gateway_connection_approve samsungcloudplatform_transit_gateway_connection_approve} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TransitGatewayConnectionApproveConfig
  */
  public constructor(scope: Construct, id: string, config: TransitGatewayConnectionApproveConfig) {
    super(scope, id, {
      terraformResourceType: 'samsungcloudplatform_transit_gateway_connection_approve',
      terraformGeneratorMetadata: {
        providerName: 'samsungcloudplatform',
        providerVersion: '3.15.0',
        providerVersionConstraint: '3.15.0'
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
    this._transitGatewayConnectionDescription = config.transitGatewayConnectionDescription;
    this._transitGatewayConnectionId = config.transitGatewayConnectionId;
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

  // transit_gateway_connection_description - computed: false, optional: true, required: false
  private _transitGatewayConnectionDescription?: string; 
  public get transitGatewayConnectionDescription() {
    return this.getStringAttribute('transit_gateway_connection_description');
  }
  public set transitGatewayConnectionDescription(value: string) {
    this._transitGatewayConnectionDescription = value;
  }
  public resetTransitGatewayConnectionDescription() {
    this._transitGatewayConnectionDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitGatewayConnectionDescriptionInput() {
    return this._transitGatewayConnectionDescription;
  }

  // transit_gateway_connection_id - computed: false, optional: false, required: true
  private _transitGatewayConnectionId?: string; 
  public get transitGatewayConnectionId() {
    return this.getStringAttribute('transit_gateway_connection_id');
  }
  public set transitGatewayConnectionId(value: string) {
    this._transitGatewayConnectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transitGatewayConnectionIdInput() {
    return this._transitGatewayConnectionId;
  }

  // transit_gateway_connection_state - computed: true, optional: false, required: false
  public get transitGatewayConnectionState() {
    return this.getStringAttribute('transit_gateway_connection_state');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      transit_gateway_connection_description: cdktf.stringToTerraform(this._transitGatewayConnectionDescription),
      transit_gateway_connection_id: cdktf.stringToTerraform(this._transitGatewayConnectionId),
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
      transit_gateway_connection_description: {
        value: cdktf.stringToHclTerraform(this._transitGatewayConnectionDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transit_gateway_connection_id: {
        value: cdktf.stringToHclTerraform(this._transitGatewayConnectionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
