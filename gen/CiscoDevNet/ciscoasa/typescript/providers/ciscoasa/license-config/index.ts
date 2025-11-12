// https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/license_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LicenseConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/license_config#id LicenseConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/license_config#license_server_url LicenseConfig#license_server_url}
  */
  readonly licenseServerUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/license_config#privacy_host_name LicenseConfig#privacy_host_name}
  */
  readonly privacyHostName?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/license_config#privacy_version LicenseConfig#privacy_version}
  */
  readonly privacyVersion?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/license_config#throughput LicenseConfig#throughput}
  */
  readonly throughput: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/license_config#transport_url LicenseConfig#transport_url}
  */
  readonly transportUrl?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/license_config ciscoasa_license_config}
*/
export class LicenseConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ciscoasa_license_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LicenseConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LicenseConfig to import
  * @param importFromId The id of the existing LicenseConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/license_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LicenseConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ciscoasa_license_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/license_config ciscoasa_license_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LicenseConfigConfig
  */
  public constructor(scope: Construct, id: string, config: LicenseConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'ciscoasa_license_config',
      terraformGeneratorMetadata: {
        providerName: 'ciscoasa',
        providerVersion: '1.3.0',
        providerVersionConstraint: '1.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._licenseServerUrl = config.licenseServerUrl;
    this._privacyHostName = config.privacyHostName;
    this._privacyVersion = config.privacyVersion;
    this._throughput = config.throughput;
    this._transportUrl = config.transportUrl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // license_server_url - computed: false, optional: true, required: false
  private _licenseServerUrl?: string; 
  public get licenseServerUrl() {
    return this.getStringAttribute('license_server_url');
  }
  public set licenseServerUrl(value: string) {
    this._licenseServerUrl = value;
  }
  public resetLicenseServerUrl() {
    this._licenseServerUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseServerUrlInput() {
    return this._licenseServerUrl;
  }

  // privacy_host_name - computed: false, optional: true, required: false
  private _privacyHostName?: boolean | cdktf.IResolvable; 
  public get privacyHostName() {
    return this.getBooleanAttribute('privacy_host_name');
  }
  public set privacyHostName(value: boolean | cdktf.IResolvable) {
    this._privacyHostName = value;
  }
  public resetPrivacyHostName() {
    this._privacyHostName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privacyHostNameInput() {
    return this._privacyHostName;
  }

  // privacy_version - computed: false, optional: true, required: false
  private _privacyVersion?: boolean | cdktf.IResolvable; 
  public get privacyVersion() {
    return this.getBooleanAttribute('privacy_version');
  }
  public set privacyVersion(value: boolean | cdktf.IResolvable) {
    this._privacyVersion = value;
  }
  public resetPrivacyVersion() {
    this._privacyVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privacyVersionInput() {
    return this._privacyVersion;
  }

  // throughput - computed: false, optional: false, required: true
  private _throughput?: string; 
  public get throughput() {
    return this.getStringAttribute('throughput');
  }
  public set throughput(value: string) {
    this._throughput = value;
  }
  // Temporarily expose input value. Use with caution.
  public get throughputInput() {
    return this._throughput;
  }

  // transport_url - computed: false, optional: true, required: false
  private _transportUrl?: boolean | cdktf.IResolvable; 
  public get transportUrl() {
    return this.getBooleanAttribute('transport_url');
  }
  public set transportUrl(value: boolean | cdktf.IResolvable) {
    this._transportUrl = value;
  }
  public resetTransportUrl() {
    this._transportUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportUrlInput() {
    return this._transportUrl;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      license_server_url: cdktf.stringToTerraform(this._licenseServerUrl),
      privacy_host_name: cdktf.booleanToTerraform(this._privacyHostName),
      privacy_version: cdktf.booleanToTerraform(this._privacyVersion),
      throughput: cdktf.stringToTerraform(this._throughput),
      transport_url: cdktf.booleanToTerraform(this._transportUrl),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      license_server_url: {
        value: cdktf.stringToHclTerraform(this._licenseServerUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      privacy_host_name: {
        value: cdktf.booleanToHclTerraform(this._privacyHostName),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      privacy_version: {
        value: cdktf.booleanToHclTerraform(this._privacyVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      throughput: {
        value: cdktf.stringToHclTerraform(this._throughput),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transport_url: {
        value: cdktf.booleanToHclTerraform(this._transportUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
