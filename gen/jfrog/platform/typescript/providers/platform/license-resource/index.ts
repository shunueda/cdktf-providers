// https://registry.terraform.io/providers/jfrog/platform/2.2.7/docs/resources/license
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LicenseResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * License key. Any newline characters must be represented by escape sequence `
  * `
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/platform/2.2.7/docs/resources/license#key LicenseResource#key}
  */
  readonly key: string;
  /**
  * Name of the license
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/platform/2.2.7/docs/resources/license#name LicenseResource#name}
  */
  readonly name?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jfrog/platform/2.2.7/docs/resources/license platform_license}
*/
export class LicenseResource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "platform_license";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LicenseResource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LicenseResource to import
  * @param importFromId The id of the existing LicenseResource that should be imported. Refer to the {@link https://registry.terraform.io/providers/jfrog/platform/2.2.7/docs/resources/license#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LicenseResource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "platform_license", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jfrog/platform/2.2.7/docs/resources/license platform_license} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LicenseResourceConfig
  */
  public constructor(scope: Construct, id: string, config: LicenseResourceConfig) {
    super(scope, id, {
      terraformResourceType: 'platform_license',
      terraformGeneratorMetadata: {
        providerName: 'platform',
        providerVersion: '2.2.7',
        providerVersionConstraint: '2.2.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._key = config.key;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // licensed_to - computed: true, optional: false, required: false
  public get licensedTo() {
    return this.getStringAttribute('licensed_to');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // valid_through - computed: true, optional: false, required: false
  public get validThrough() {
    return this.getStringAttribute('valid_through');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      key: cdktf.stringToTerraform(this._key),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      key: {
        value: cdktf.stringToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
