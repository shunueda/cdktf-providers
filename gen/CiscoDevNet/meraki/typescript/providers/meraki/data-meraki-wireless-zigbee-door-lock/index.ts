// https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/data-sources/wireless_zigbee_door_lock
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMerakiWirelessZigbeeDoorLockConfig extends cdktf.TerraformMetaArguments {
  /**
  * Door lock ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/data-sources/wireless_zigbee_door_lock#door_lock_id DataMerakiWirelessZigbeeDoorLock#door_lock_id}
  */
  readonly doorLockId: string;
  /**
  * Organization ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/data-sources/wireless_zigbee_door_lock#organization_id DataMerakiWirelessZigbeeDoorLock#organization_id}
  */
  readonly organizationId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/data-sources/wireless_zigbee_door_lock meraki_wireless_zigbee_door_lock}
*/
export class DataMerakiWirelessZigbeeDoorLock extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_wireless_zigbee_door_lock";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMerakiWirelessZigbeeDoorLock resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMerakiWirelessZigbeeDoorLock to import
  * @param importFromId The id of the existing DataMerakiWirelessZigbeeDoorLock that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/data-sources/wireless_zigbee_door_lock#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMerakiWirelessZigbeeDoorLock to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_wireless_zigbee_door_lock", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/data-sources/wireless_zigbee_door_lock meraki_wireless_zigbee_door_lock} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMerakiWirelessZigbeeDoorLockConfig
  */
  public constructor(scope: Construct, id: string, config: DataMerakiWirelessZigbeeDoorLockConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_wireless_zigbee_door_lock',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.8.0',
        providerVersionConstraint: '1.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._doorLockId = config.doorLockId;
    this._organizationId = config.organizationId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // door_lock_id - computed: false, optional: false, required: true
  private _doorLockId?: string; 
  public get doorLockId() {
    return this.getStringAttribute('door_lock_id');
  }
  public set doorLockId(value: string) {
    this._doorLockId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get doorLockIdInput() {
    return this._doorLockId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // organization_id - computed: false, optional: false, required: true
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      door_lock_id: cdktf.stringToTerraform(this._doorLockId),
      organization_id: cdktf.stringToTerraform(this._organizationId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      door_lock_id: {
        value: cdktf.stringToHclTerraform(this._doorLockId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization_id: {
        value: cdktf.stringToHclTerraform(this._organizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
