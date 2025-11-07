// https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/license
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LicenseResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The additional registration keys from a license server for the device license activation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/license#addon_keys LicenseResource#addon_keys}
  */
  readonly addonKeys?: string[];
  /**
  * The license server url.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/license#license_server LicenseResource#license_server}
  */
  readonly licenseServer?: string;
  /**
  * The Base registration key from a license server for the device license activation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/license#registration_key LicenseResource#registration_key}
  */
  readonly registrationKey: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/license f5os_license}
*/
export class LicenseResource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "f5os_license";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LicenseResource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LicenseResource to import
  * @param importFromId The id of the existing LicenseResource that should be imported. Refer to the {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/license#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LicenseResource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "f5os_license", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/license f5os_license} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LicenseResourceConfig
  */
  public constructor(scope: Construct, id: string, config: LicenseResourceConfig) {
    super(scope, id, {
      terraformResourceType: 'f5os_license',
      terraformGeneratorMetadata: {
        providerName: 'f5os',
        providerVersion: '1.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addonKeys = config.addonKeys;
    this._licenseServer = config.licenseServer;
    this._registrationKey = config.registrationKey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // addon_keys - computed: false, optional: true, required: false
  private _addonKeys?: string[]; 
  public get addonKeys() {
    return this.getListAttribute('addon_keys');
  }
  public set addonKeys(value: string[]) {
    this._addonKeys = value;
  }
  public resetAddonKeys() {
    this._addonKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addonKeysInput() {
    return this._addonKeys;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // license_server - computed: false, optional: true, required: false
  private _licenseServer?: string; 
  public get licenseServer() {
    return this.getStringAttribute('license_server');
  }
  public set licenseServer(value: string) {
    this._licenseServer = value;
  }
  public resetLicenseServer() {
    this._licenseServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseServerInput() {
    return this._licenseServer;
  }

  // registration_key - computed: false, optional: false, required: true
  private _registrationKey?: string; 
  public get registrationKey() {
    return this.getStringAttribute('registration_key');
  }
  public set registrationKey(value: string) {
    this._registrationKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get registrationKeyInput() {
    return this._registrationKey;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      addon_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(this._addonKeys),
      license_server: cdktf.stringToTerraform(this._licenseServer),
      registration_key: cdktf.stringToTerraform(this._registrationKey),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      addon_keys: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._addonKeys),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      license_server: {
        value: cdktf.stringToHclTerraform(this._licenseServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      registration_key: {
        value: cdktf.stringToHclTerraform(this._registrationKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
