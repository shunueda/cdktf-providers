// https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/license
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LicenseResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * License key. Required to add or update a license key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/license#key LicenseResource#key}
  */
  readonly key?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/license sftpgo_license}
*/
export class LicenseResource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sftpgo_license";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LicenseResource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LicenseResource to import
  * @param importFromId The id of the existing LicenseResource that should be imported. Refer to the {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/license#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LicenseResource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sftpgo_license", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/license sftpgo_license} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LicenseResourceConfig = {}
  */
  public constructor(scope: Construct, id: string, config: LicenseResourceConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'sftpgo_license',
      terraformGeneratorMetadata: {
        providerName: 'sftpgo',
        providerVersion: '0.0.18'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getNumberAttribute('type');
  }

  // valid_from - computed: true, optional: false, required: false
  public get validFrom() {
    return this.getNumberAttribute('valid_from');
  }

  // valid_to - computed: true, optional: false, required: false
  public get validTo() {
    return this.getNumberAttribute('valid_to');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      key: cdktf.stringToTerraform(this._key),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
