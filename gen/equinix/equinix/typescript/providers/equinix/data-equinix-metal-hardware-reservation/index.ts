// https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/metal_hardware_reservation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataEquinixMetalHardwareReservationConfig extends cdktf.TerraformMetaArguments {
  /**
  * UUID of device occupying the reservation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/metal_hardware_reservation#device_id DataEquinixMetalHardwareReservation#device_id}
  */
  readonly deviceId?: string;
  /**
  * ID of the hardware reservation to look up
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/metal_hardware_reservation#id DataEquinixMetalHardwareReservation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/metal_hardware_reservation equinix_metal_hardware_reservation}
*/
export class DataEquinixMetalHardwareReservation extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "equinix_metal_hardware_reservation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataEquinixMetalHardwareReservation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataEquinixMetalHardwareReservation to import
  * @param importFromId The id of the existing DataEquinixMetalHardwareReservation that should be imported. Refer to the {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/metal_hardware_reservation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataEquinixMetalHardwareReservation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "equinix_metal_hardware_reservation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/metal_hardware_reservation equinix_metal_hardware_reservation} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataEquinixMetalHardwareReservationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataEquinixMetalHardwareReservationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'equinix_metal_hardware_reservation',
      terraformGeneratorMetadata: {
        providerName: 'equinix',
        providerVersion: '4.11.1',
        providerVersionConstraint: '4.11.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deviceId = config.deviceId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device_id - computed: true, optional: true, required: false
  private _deviceId?: string; 
  public get deviceId() {
    return this.getStringAttribute('device_id');
  }
  public set deviceId(value: string) {
    this._deviceId = value;
  }
  public resetDeviceId() {
    this._deviceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIdInput() {
    return this._deviceId;
  }

  // facility - computed: true, optional: false, required: false
  public get facility() {
    return this.getStringAttribute('facility');
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

  // plan - computed: true, optional: false, required: false
  public get plan() {
    return this.getStringAttribute('plan');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // provisionable - computed: true, optional: false, required: false
  public get provisionable() {
    return this.getBooleanAttribute('provisionable');
  }

  // short_id - computed: true, optional: false, required: false
  public get shortId() {
    return this.getStringAttribute('short_id');
  }

  // spare - computed: true, optional: false, required: false
  public get spare() {
    return this.getBooleanAttribute('spare');
  }

  // switch_uuid - computed: true, optional: false, required: false
  public get switchUuid() {
    return this.getStringAttribute('switch_uuid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_id: cdktf.stringToTerraform(this._deviceId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device_id: {
        value: cdktf.stringToHclTerraform(this._deviceId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
