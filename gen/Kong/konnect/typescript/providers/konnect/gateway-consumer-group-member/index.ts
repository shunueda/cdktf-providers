// https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_consumer_group_member
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GatewayConsumerGroupMemberConfig extends cdktf.TerraformMetaArguments {
  /**
  * The UUID or name of the consumer group. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_consumer_group_member#consumer_group_id GatewayConsumerGroupMember#consumer_group_id}
  */
  readonly consumerGroupId: string;
  /**
  * Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_consumer_group_member#consumer_id GatewayConsumerGroupMember#consumer_id}
  */
  readonly consumerId?: string;
  /**
  * The UUID of your control plane. This variable is available in the Konnect manager. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_consumer_group_member#control_plane_id GatewayConsumerGroupMember#control_plane_id}
  */
  readonly controlPlaneId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_consumer_group_member konnect_gateway_consumer_group_member}
*/
export class GatewayConsumerGroupMember extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "konnect_gateway_consumer_group_member";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GatewayConsumerGroupMember resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GatewayConsumerGroupMember to import
  * @param importFromId The id of the existing GatewayConsumerGroupMember that should be imported. Refer to the {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_consumer_group_member#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GatewayConsumerGroupMember to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "konnect_gateway_consumer_group_member", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_consumer_group_member konnect_gateway_consumer_group_member} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GatewayConsumerGroupMemberConfig
  */
  public constructor(scope: Construct, id: string, config: GatewayConsumerGroupMemberConfig) {
    super(scope, id, {
      terraformResourceType: 'konnect_gateway_consumer_group_member',
      terraformGeneratorMetadata: {
        providerName: 'konnect',
        providerVersion: '3.4.2',
        providerVersionConstraint: '3.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._consumerGroupId = config.consumerGroupId;
    this._consumerId = config.consumerId;
    this._controlPlaneId = config.controlPlaneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // consumer_group_id - computed: false, optional: false, required: true
  private _consumerGroupId?: string; 
  public get consumerGroupId() {
    return this.getStringAttribute('consumer_group_id');
  }
  public set consumerGroupId(value: string) {
    this._consumerGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerGroupIdInput() {
    return this._consumerGroupId;
  }

  // consumer_id - computed: false, optional: true, required: false
  private _consumerId?: string; 
  public get consumerId() {
    return this.getStringAttribute('consumer_id');
  }
  public set consumerId(value: string) {
    this._consumerId = value;
  }
  public resetConsumerId() {
    this._consumerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerIdInput() {
    return this._consumerId;
  }

  // control_plane_id - computed: false, optional: false, required: true
  private _controlPlaneId?: string; 
  public get controlPlaneId() {
    return this.getStringAttribute('control_plane_id');
  }
  public set controlPlaneId(value: string) {
    this._controlPlaneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneIdInput() {
    return this._controlPlaneId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      consumer_group_id: cdktf.stringToTerraform(this._consumerGroupId),
      consumer_id: cdktf.stringToTerraform(this._consumerId),
      control_plane_id: cdktf.stringToTerraform(this._controlPlaneId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      consumer_group_id: {
        value: cdktf.stringToHclTerraform(this._consumerGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      consumer_id: {
        value: cdktf.stringToHclTerraform(this._consumerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      control_plane_id: {
        value: cdktf.stringToHclTerraform(this._controlPlaneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
