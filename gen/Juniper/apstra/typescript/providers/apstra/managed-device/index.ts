// https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/managed_device
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagedDeviceConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the Agent Profile used when instantiating the Agent. An Agent Profile isrequired to specify the login credentials and platform type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/managed_device#agent_profile_id ManagedDevice#agent_profile_id}
  */
  readonly agentProfileId: string;
  /**
  * Key which uniquely identifies a System asset. Possibly a MAC address or serial number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/managed_device#device_key ManagedDevice#device_key}
  */
  readonly deviceKey?: string;
  /**
  * Device `location` field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/managed_device#location ManagedDevice#location}
  */
  readonly location?: string;
  /**
  * Management IP address of the system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/managed_device#management_ip ManagedDevice#management_ip}
  */
  readonly managementIp: string;
  /**
  * Indicates that an *offbox* agent should be created (required for Junos devices, default: `true`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/managed_device#off_box ManagedDevice#off_box}
  */
  readonly offBox?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/managed_device apstra_managed_device}
*/
export class ManagedDevice extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apstra_managed_device";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagedDevice resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagedDevice to import
  * @param importFromId The id of the existing ManagedDevice that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/managed_device#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagedDevice to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apstra_managed_device", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/managed_device apstra_managed_device} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagedDeviceConfig
  */
  public constructor(scope: Construct, id: string, config: ManagedDeviceConfig) {
    super(scope, id, {
      terraformResourceType: 'apstra_managed_device',
      terraformGeneratorMetadata: {
        providerName: 'apstra',
        providerVersion: '0.95.1',
        providerVersionConstraint: '0.95.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._agentProfileId = config.agentProfileId;
    this._deviceKey = config.deviceKey;
    this._location = config.location;
    this._managementIp = config.managementIp;
    this._offBox = config.offBox;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agent_id - computed: true, optional: false, required: false
  public get agentId() {
    return this.getStringAttribute('agent_id');
  }

  // agent_profile_id - computed: false, optional: false, required: true
  private _agentProfileId?: string; 
  public get agentProfileId() {
    return this.getStringAttribute('agent_profile_id');
  }
  public set agentProfileId(value: string) {
    this._agentProfileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agentProfileIdInput() {
    return this._agentProfileId;
  }

  // device_key - computed: false, optional: true, required: false
  private _deviceKey?: string; 
  public get deviceKey() {
    return this.getStringAttribute('device_key');
  }
  public set deviceKey(value: string) {
    this._deviceKey = value;
  }
  public resetDeviceKey() {
    this._deviceKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceKeyInput() {
    return this._deviceKey;
  }

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // management_ip - computed: false, optional: false, required: true
  private _managementIp?: string; 
  public get managementIp() {
    return this.getStringAttribute('management_ip');
  }
  public set managementIp(value: string) {
    this._managementIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managementIpInput() {
    return this._managementIp;
  }

  // off_box - computed: true, optional: true, required: false
  private _offBox?: boolean | cdktf.IResolvable; 
  public get offBox() {
    return this.getBooleanAttribute('off_box');
  }
  public set offBox(value: boolean | cdktf.IResolvable) {
    this._offBox = value;
  }
  public resetOffBox() {
    this._offBox = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offBoxInput() {
    return this._offBox;
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
      agent_profile_id: cdktf.stringToTerraform(this._agentProfileId),
      device_key: cdktf.stringToTerraform(this._deviceKey),
      location: cdktf.stringToTerraform(this._location),
      management_ip: cdktf.stringToTerraform(this._managementIp),
      off_box: cdktf.booleanToTerraform(this._offBox),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      agent_profile_id: {
        value: cdktf.stringToHclTerraform(this._agentProfileId),
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
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      management_ip: {
        value: cdktf.stringToHclTerraform(this._managementIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      off_box: {
        value: cdktf.booleanToHclTerraform(this._offBox),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
