// https://registry.terraform.io/providers/disaster37/elasticsearch/8.4.0/docs/resources/license
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LicenseResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disaster37/elasticsearch/8.4.0/docs/resources/license#basic_license LicenseResource#basic_license}
  */
  readonly basicLicense?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disaster37/elasticsearch/8.4.0/docs/resources/license#id LicenseResource#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disaster37/elasticsearch/8.4.0/docs/resources/license#license LicenseResource#license}
  */
  readonly license?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disaster37/elasticsearch/8.4.0/docs/resources/license#use_basic_license LicenseResource#use_basic_license}
  */
  readonly useBasicLicense: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/disaster37/elasticsearch/8.4.0/docs/resources/license elasticsearch_license}
*/
export class LicenseResource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "elasticsearch_license";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LicenseResource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LicenseResource to import
  * @param importFromId The id of the existing LicenseResource that should be imported. Refer to the {@link https://registry.terraform.io/providers/disaster37/elasticsearch/8.4.0/docs/resources/license#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LicenseResource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "elasticsearch_license", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/disaster37/elasticsearch/8.4.0/docs/resources/license elasticsearch_license} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LicenseResourceConfig
  */
  public constructor(scope: Construct, id: string, config: LicenseResourceConfig) {
    super(scope, id, {
      terraformResourceType: 'elasticsearch_license',
      terraformGeneratorMetadata: {
        providerName: 'elasticsearch',
        providerVersion: '8.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._basicLicense = config.basicLicense;
    this._id = config.id;
    this._license = config.license;
    this._useBasicLicense = config.useBasicLicense;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // basic_license - computed: true, optional: true, required: false
  private _basicLicense?: string; 
  public get basicLicense() {
    return this.getStringAttribute('basic_license');
  }
  public set basicLicense(value: string) {
    this._basicLicense = value;
  }
  public resetBasicLicense() {
    this._basicLicense = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicLicenseInput() {
    return this._basicLicense;
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

  // license - computed: false, optional: true, required: false
  private _license?: string; 
  public get license() {
    return this.getStringAttribute('license');
  }
  public set license(value: string) {
    this._license = value;
  }
  public resetLicense() {
    this._license = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseInput() {
    return this._license;
  }

  // use_basic_license - computed: false, optional: false, required: true
  private _useBasicLicense?: boolean | cdktf.IResolvable; 
  public get useBasicLicense() {
    return this.getBooleanAttribute('use_basic_license');
  }
  public set useBasicLicense(value: boolean | cdktf.IResolvable) {
    this._useBasicLicense = value;
  }
  // Temporarily expose input value. Use with caution.
  public get useBasicLicenseInput() {
    return this._useBasicLicense;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      basic_license: cdktf.stringToTerraform(this._basicLicense),
      id: cdktf.stringToTerraform(this._id),
      license: cdktf.stringToTerraform(this._license),
      use_basic_license: cdktf.booleanToTerraform(this._useBasicLicense),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      basic_license: {
        value: cdktf.stringToHclTerraform(this._basicLicense),
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
      license: {
        value: cdktf.stringToHclTerraform(this._license),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_basic_license: {
        value: cdktf.booleanToHclTerraform(this._useBasicLicense),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
