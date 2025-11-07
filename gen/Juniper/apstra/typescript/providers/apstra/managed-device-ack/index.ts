// https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/managed_device_ack
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagedDeviceAckConfig extends cdktf.TerraformMetaArguments {
  /**
  * Apstra ID for the System Agent responsible for the Managed Device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/managed_device_ack#agent_id ManagedDeviceAck#agent_id}
  */
  readonly agentId: string;
  /**
  * Key which uniquely identifies a System asset, probably the serial number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/managed_device_ack#device_key ManagedDeviceAck#device_key}
  */
  readonly deviceKey: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/managed_device_ack apstra_managed_device_ack}
*/
export class ManagedDeviceAck extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apstra_managed_device_ack";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagedDeviceAck resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagedDeviceAck to import
  * @param importFromId The id of the existing ManagedDeviceAck that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/managed_device_ack#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagedDeviceAck to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apstra_managed_device_ack", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/managed_device_ack apstra_managed_device_ack} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagedDeviceAckConfig
  */
  public constructor(scope: Construct, id: string, config: ManagedDeviceAckConfig) {
    super(scope, id, {
      terraformResourceType: 'apstra_managed_device_ack',
      terraformGeneratorMetadata: {
        providerName: 'apstra',
        providerVersion: '0.95.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._agentId = config.agentId;
    this._deviceKey = config.deviceKey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agent_id - computed: false, optional: false, required: true
  private _agentId?: string; 
  public get agentId() {
    return this.getStringAttribute('agent_id');
  }
  public set agentId(value: string) {
    this._agentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agentIdInput() {
    return this._agentId;
  }

  // device_key - computed: false, optional: false, required: true
  private _deviceKey?: string; 
  public get deviceKey() {
    return this.getStringAttribute('device_key');
  }
  public set deviceKey(value: string) {
    this._deviceKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceKeyInput() {
    return this._deviceKey;
  }

  // system_id - computed: true, optional: false, required: false
  public get systemId() {
    return this.getStringAttribute('system_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      agent_id: cdktf.stringToTerraform(this._agentId),
      device_key: cdktf.stringToTerraform(this._deviceKey),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      agent_id: {
        value: cdktf.stringToHclTerraform(this._agentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_key: {
        value: cdktf.stringToHclTerraform(this._deviceKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
