// https://registry.terraform.io/providers/ciscodevnet/sccfm/0.2.5/docs/resources/ftd_device_version
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FtdDeviceVersionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The unique identifier of the FTD device to upgrade.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.2.5/docs/resources/ftd_device_version#ftd_uid FtdDeviceVersion#ftd_uid}
  */
  readonly ftdUid: string;
  /**
  * The software version to upgrade the FTD device to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.2.5/docs/resources/ftd_device_version#software_version FtdDeviceVersion#software_version}
  */
  readonly softwareVersion: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.2.5/docs/resources/ftd_device_version sccfm_ftd_device_version}
*/
export class FtdDeviceVersion extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sccfm_ftd_device_version";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FtdDeviceVersion resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FtdDeviceVersion to import
  * @param importFromId The id of the existing FtdDeviceVersion that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.2.5/docs/resources/ftd_device_version#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FtdDeviceVersion to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sccfm_ftd_device_version", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.2.5/docs/resources/ftd_device_version sccfm_ftd_device_version} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FtdDeviceVersionConfig
  */
  public constructor(scope: Construct, id: string, config: FtdDeviceVersionConfig) {
    super(scope, id, {
      terraformResourceType: 'sccfm_ftd_device_version',
      terraformGeneratorMetadata: {
        providerName: 'sccfm',
        providerVersion: '0.2.5',
        providerVersionConstraint: '0.2.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._ftdUid = config.ftdUid;
    this._softwareVersion = config.softwareVersion;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ftd_uid - computed: false, optional: false, required: true
  private _ftdUid?: string; 
  public get ftdUid() {
    return this.getStringAttribute('ftd_uid');
  }
  public set ftdUid(value: string) {
    this._ftdUid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ftdUidInput() {
    return this._ftdUid;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // software_version - computed: false, optional: false, required: true
  private _softwareVersion?: string; 
  public get softwareVersion() {
    return this.getStringAttribute('software_version');
  }
  public set softwareVersion(value: string) {
    this._softwareVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get softwareVersionInput() {
    return this._softwareVersion;
  }

  // software_version_on_device - computed: true, optional: false, required: false
  public get softwareVersionOnDevice() {
    return this.getStringAttribute('software_version_on_device');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ftd_uid: cdktf.stringToTerraform(this._ftdUid),
      software_version: cdktf.stringToTerraform(this._softwareVersion),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ftd_uid: {
        value: cdktf.stringToHclTerraform(this._ftdUid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      software_version: {
        value: cdktf.stringToHclTerraform(this._softwareVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
