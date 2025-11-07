// https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/camera_device_wireless_profiles
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CameraDeviceWirelessProfilesConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of the backup wireless profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/camera_device_wireless_profiles#ids_backup CameraDeviceWirelessProfiles#ids_backup}
  */
  readonly idsBackup?: string;
  /**
  * The id of the primary wireless profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/camera_device_wireless_profiles#ids_primary CameraDeviceWirelessProfiles#ids_primary}
  */
  readonly idsPrimary: string;
  /**
  * The id of the secondary wireless profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/camera_device_wireless_profiles#ids_secondary CameraDeviceWirelessProfiles#ids_secondary}
  */
  readonly idsSecondary: string;
  /**
  * Device serial
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/camera_device_wireless_profiles#serial CameraDeviceWirelessProfiles#serial}
  */
  readonly serial: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/camera_device_wireless_profiles meraki_camera_device_wireless_profiles}
*/
export class CameraDeviceWirelessProfiles extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_camera_device_wireless_profiles";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CameraDeviceWirelessProfiles resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CameraDeviceWirelessProfiles to import
  * @param importFromId The id of the existing CameraDeviceWirelessProfiles that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/camera_device_wireless_profiles#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CameraDeviceWirelessProfiles to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_camera_device_wireless_profiles", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/camera_device_wireless_profiles meraki_camera_device_wireless_profiles} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CameraDeviceWirelessProfilesConfig
  */
  public constructor(scope: Construct, id: string, config: CameraDeviceWirelessProfilesConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_camera_device_wireless_profiles',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.7.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._idsBackup = config.idsBackup;
    this._idsPrimary = config.idsPrimary;
    this._idsSecondary = config.idsSecondary;
    this._serial = config.serial;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ids_backup - computed: false, optional: true, required: false
  private _idsBackup?: string; 
  public get idsBackup() {
    return this.getStringAttribute('ids_backup');
  }
  public set idsBackup(value: string) {
    this._idsBackup = value;
  }
  public resetIdsBackup() {
    this._idsBackup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsBackupInput() {
    return this._idsBackup;
  }

  // ids_primary - computed: false, optional: false, required: true
  private _idsPrimary?: string; 
  public get idsPrimary() {
    return this.getStringAttribute('ids_primary');
  }
  public set idsPrimary(value: string) {
    this._idsPrimary = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idsPrimaryInput() {
    return this._idsPrimary;
  }

  // ids_secondary - computed: false, optional: false, required: true
  private _idsSecondary?: string; 
  public get idsSecondary() {
    return this.getStringAttribute('ids_secondary');
  }
  public set idsSecondary(value: string) {
    this._idsSecondary = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idsSecondaryInput() {
    return this._idsSecondary;
  }

  // serial - computed: false, optional: false, required: true
  private _serial?: string; 
  public get serial() {
    return this.getStringAttribute('serial');
  }
  public set serial(value: string) {
    this._serial = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serialInput() {
    return this._serial;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ids_backup: cdktf.stringToTerraform(this._idsBackup),
      ids_primary: cdktf.stringToTerraform(this._idsPrimary),
      ids_secondary: cdktf.stringToTerraform(this._idsSecondary),
      serial: cdktf.stringToTerraform(this._serial),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ids_backup: {
        value: cdktf.stringToHclTerraform(this._idsBackup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ids_primary: {
        value: cdktf.stringToHclTerraform(this._idsPrimary),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ids_secondary: {
        value: cdktf.stringToHclTerraform(this._idsSecondary),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      serial: {
        value: cdktf.stringToHclTerraform(this._serial),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
