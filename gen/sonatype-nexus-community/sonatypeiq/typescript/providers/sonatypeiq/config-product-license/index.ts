// https://registry.terraform.io/providers/sonatype-nexus-community/sonatypeiq/0.12.1/docs/resources/config_product_license
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConfigProductLicenseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Base64 encoded license data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sonatype-nexus-community/sonatypeiq/0.12.1/docs/resources/config_product_license#license_data ConfigProductLicense#license_data}
  */
  readonly licenseData: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/sonatype-nexus-community/sonatypeiq/0.12.1/docs/resources/config_product_license sonatypeiq_config_product_license}
*/
export class ConfigProductLicense extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sonatypeiq_config_product_license";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConfigProductLicense resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConfigProductLicense to import
  * @param importFromId The id of the existing ConfigProductLicense that should be imported. Refer to the {@link https://registry.terraform.io/providers/sonatype-nexus-community/sonatypeiq/0.12.1/docs/resources/config_product_license#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConfigProductLicense to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sonatypeiq_config_product_license", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/sonatype-nexus-community/sonatypeiq/0.12.1/docs/resources/config_product_license sonatypeiq_config_product_license} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConfigProductLicenseConfig
  */
  public constructor(scope: Construct, id: string, config: ConfigProductLicenseConfig) {
    super(scope, id, {
      terraformResourceType: 'sonatypeiq_config_product_license',
      terraformGeneratorMetadata: {
        providerName: 'sonatypeiq',
        providerVersion: '0.12.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._licenseData = config.licenseData;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // license_data - computed: false, optional: false, required: true
  private _licenseData?: string; 
  public get licenseData() {
    return this.getStringAttribute('license_data');
  }
  public set licenseData(value: string) {
    this._licenseData = value;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseDataInput() {
    return this._licenseData;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      license_data: cdktf.stringToTerraform(this._licenseData),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      license_data: {
        value: cdktf.stringToHclTerraform(this._licenseData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
