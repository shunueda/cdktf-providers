// https://registry.terraform.io/providers/martian-cloud/tharsis/0.15.0/docs/resources/gpg_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GpgKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ASCII armored key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/martian-cloud/tharsis/0.15.0/docs/resources/gpg_key#ascii_armor GpgKey#ascii_armor}
  */
  readonly asciiArmor: string;
  /**
  * Path of the parent group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/martian-cloud/tharsis/0.15.0/docs/resources/gpg_key#group_path GpgKey#group_path}
  */
  readonly groupPath: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/martian-cloud/tharsis/0.15.0/docs/resources/gpg_key tharsis_gpg_key}
*/
export class GpgKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tharsis_gpg_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GpgKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GpgKey to import
  * @param importFromId The id of the existing GpgKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/martian-cloud/tharsis/0.15.0/docs/resources/gpg_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GpgKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tharsis_gpg_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/martian-cloud/tharsis/0.15.0/docs/resources/gpg_key tharsis_gpg_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GpgKeyConfig
  */
  public constructor(scope: Construct, id: string, config: GpgKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'tharsis_gpg_key',
      terraformGeneratorMetadata: {
        providerName: 'tharsis',
        providerVersion: '0.15.0',
        providerVersionConstraint: '0.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._asciiArmor = config.asciiArmor;
    this._groupPath = config.groupPath;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ascii_armor - computed: false, optional: false, required: true
  private _asciiArmor?: string; 
  public get asciiArmor() {
    return this.getStringAttribute('ascii_armor');
  }
  public set asciiArmor(value: string) {
    this._asciiArmor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asciiArmorInput() {
    return this._asciiArmor;
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // fingerprint - computed: true, optional: false, required: false
  public get fingerprint() {
    return this.getStringAttribute('fingerprint');
  }

  // gpg_key_id - computed: true, optional: false, required: false
  public get gpgKeyId() {
    return this.getStringAttribute('gpg_key_id');
  }

  // group_path - computed: false, optional: false, required: true
  private _groupPath?: string; 
  public get groupPath() {
    return this.getStringAttribute('group_path');
  }
  public set groupPath(value: string) {
    this._groupPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupPathInput() {
    return this._groupPath;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // resource_path - computed: true, optional: false, required: false
  public get resourcePath() {
    return this.getStringAttribute('resource_path');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ascii_armor: cdktf.stringToTerraform(this._asciiArmor),
      group_path: cdktf.stringToTerraform(this._groupPath),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ascii_armor: {
        value: cdktf.stringToHclTerraform(this._asciiArmor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_path: {
        value: cdktf.stringToHclTerraform(this._groupPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
