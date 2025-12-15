// https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/apply_pending_fabric_events
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplyPendingFabricEventsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Pending fabric event ID resolved via GET and used for POST apply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/apply_pending_fabric_events#event_id ApplyPendingFabricEvents#event_id}
  */
  readonly eventId?: string;
  /**
  * ID of the fabric (used as GET query parameter and as the Terraform resource ID).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/apply_pending_fabric_events#fabric_id ApplyPendingFabricEvents#fabric_id}
  */
  readonly fabricId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/apply_pending_fabric_events catalystcenter_apply_pending_fabric_events}
*/
export class ApplyPendingFabricEvents extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "catalystcenter_apply_pending_fabric_events";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApplyPendingFabricEvents resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApplyPendingFabricEvents to import
  * @param importFromId The id of the existing ApplyPendingFabricEvents that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/apply_pending_fabric_events#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApplyPendingFabricEvents to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "catalystcenter_apply_pending_fabric_events", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/apply_pending_fabric_events catalystcenter_apply_pending_fabric_events} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplyPendingFabricEventsConfig
  */
  public constructor(scope: Construct, id: string, config: ApplyPendingFabricEventsConfig) {
    super(scope, id, {
      terraformResourceType: 'catalystcenter_apply_pending_fabric_events',
      terraformGeneratorMetadata: {
        providerName: 'catalystcenter',
        providerVersion: '0.4.6',
        providerVersionConstraint: '0.4.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._eventId = config.eventId;
    this._fabricId = config.fabricId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // event_id - computed: false, optional: true, required: false
  private _eventId?: string; 
  public get eventId() {
    return this.getStringAttribute('event_id');
  }
  public set eventId(value: string) {
    this._eventId = value;
  }
  public resetEventId() {
    this._eventId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventIdInput() {
    return this._eventId;
  }

  // fabric_id - computed: false, optional: false, required: true
  private _fabricId?: string; 
  public get fabricId() {
    return this.getStringAttribute('fabric_id');
  }
  public set fabricId(value: string) {
    this._fabricId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fabricIdInput() {
    return this._fabricId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      event_id: cdktf.stringToTerraform(this._eventId),
      fabric_id: cdktf.stringToTerraform(this._fabricId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      event_id: {
        value: cdktf.stringToHclTerraform(this._eventId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fabric_id: {
        value: cdktf.stringToHclTerraform(this._fabricId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
