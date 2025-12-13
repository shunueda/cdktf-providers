// https://registry.terraform.io/providers/rundeck/rundeck/1.0.0/docs/resources/public_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PublicKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The public key data to store, in the usual OpenSSH public key file format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/1.0.0/docs/resources/public_key#key_material PublicKey#key_material}
  */
  readonly keyMaterial?: string;
  /**
  * Path to the key within the key store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/1.0.0/docs/resources/public_key#path PublicKey#path}
  */
  readonly path: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/rundeck/rundeck/1.0.0/docs/resources/public_key rundeck_public_key}
*/
export class PublicKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rundeck_public_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PublicKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PublicKey to import
  * @param importFromId The id of the existing PublicKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/rundeck/rundeck/1.0.0/docs/resources/public_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PublicKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rundeck_public_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rundeck/rundeck/1.0.0/docs/resources/public_key rundeck_public_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PublicKeyConfig
  */
  public constructor(scope: Construct, id: string, config: PublicKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'rundeck_public_key',
      terraformGeneratorMetadata: {
        providerName: 'rundeck',
        providerVersion: '1.0.0',
        providerVersionConstraint: '1.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._keyMaterial = config.keyMaterial;
    this._path = config.path;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // delete - computed: true, optional: false, required: false
  public get delete() {
    return this.getBooleanAttribute('delete');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key_material - computed: true, optional: true, required: false
  private _keyMaterial?: string; 
  public get keyMaterial() {
    return this.getStringAttribute('key_material');
  }
  public set keyMaterial(value: string) {
    this._keyMaterial = value;
  }
  public resetKeyMaterial() {
    this._keyMaterial = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyMaterialInput() {
    return this._keyMaterial;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      key_material: cdktf.stringToTerraform(this._keyMaterial),
      path: cdktf.stringToTerraform(this._path),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      key_material: {
        value: cdktf.stringToHclTerraform(this._keyMaterial),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      path: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
