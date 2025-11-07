// https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/interface_maps
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataApstraInterfaceMapsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Optional filter to select only Interface Maps associated with the specified Device Profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/interface_maps#device_profile_id DataApstraInterfaceMaps#device_profile_id}
  */
  readonly deviceProfileId?: string;
  /**
  * Optional filter to select only Interface Maps associated with the specified Logical Device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/interface_maps#logical_device_id DataApstraInterfaceMaps#logical_device_id}
  */
  readonly logicalDeviceId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/interface_maps apstra_interface_maps}
*/
export class DataApstraInterfaceMaps extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apstra_interface_maps";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataApstraInterfaceMaps resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataApstraInterfaceMaps to import
  * @param importFromId The id of the existing DataApstraInterfaceMaps that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/interface_maps#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataApstraInterfaceMaps to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apstra_interface_maps", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/interface_maps apstra_interface_maps} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataApstraInterfaceMapsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataApstraInterfaceMapsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'apstra_interface_maps',
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
    this._deviceProfileId = config.deviceProfileId;
    this._logicalDeviceId = config.logicalDeviceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device_profile_id - computed: false, optional: true, required: false
  private _deviceProfileId?: string; 
  public get deviceProfileId() {
    return this.getStringAttribute('device_profile_id');
  }
  public set deviceProfileId(value: string) {
    this._deviceProfileId = value;
  }
  public resetDeviceProfileId() {
    this._deviceProfileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceProfileIdInput() {
    return this._deviceProfileId;
  }

  // ids - computed: true, optional: false, required: false
  public get ids() {
    return cdktf.Fn.tolist(this.getListAttribute('ids'));
  }

  // logical_device_id - computed: false, optional: true, required: false
  private _logicalDeviceId?: string; 
  public get logicalDeviceId() {
    return this.getStringAttribute('logical_device_id');
  }
  public set logicalDeviceId(value: string) {
    this._logicalDeviceId = value;
  }
  public resetLogicalDeviceId() {
    this._logicalDeviceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicalDeviceIdInput() {
    return this._logicalDeviceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_profile_id: cdktf.stringToTerraform(this._deviceProfileId),
      logical_device_id: cdktf.stringToTerraform(this._logicalDeviceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device_profile_id: {
        value: cdktf.stringToHclTerraform(this._deviceProfileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logical_device_id: {
        value: cdktf.stringToHclTerraform(this._logicalDeviceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
