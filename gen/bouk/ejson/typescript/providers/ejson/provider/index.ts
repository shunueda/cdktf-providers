// https://registry.terraform.io/providers/bouk/ejson/1.2.3/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EjsonProviderConfig {
  /**
  * Directory to read private keys from. Defaults to $EJSON_KEYDIR or /opt/ejson/keys if not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bouk/ejson/1.2.3/docs#keydir EjsonProvider#keydir}
  */
  readonly keydir?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bouk/ejson/1.2.3/docs#alias EjsonProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/bouk/ejson/1.2.3/docs ejson}
*/
export class EjsonProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ejson";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EjsonProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EjsonProvider to import
  * @param importFromId The id of the existing EjsonProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/bouk/ejson/1.2.3/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EjsonProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ejson", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/bouk/ejson/1.2.3/docs ejson} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EjsonProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: EjsonProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'ejson',
      terraformGeneratorMetadata: {
        providerName: 'ejson',
        providerVersion: '1.2.3',
        providerVersionConstraint: '1.2.3'
      },
      terraformProviderSource: 'bouk/ejson'
    });
    this._keydir = config.keydir;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // keydir - computed: false, optional: true, required: false
  private _keydir?: string; 
  public get keydir() {
    return this._keydir;
  }
  public set keydir(value: string | undefined) {
    this._keydir = value;
  }
  public resetKeydir() {
    this._keydir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keydirInput() {
    return this._keydir;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      keydir: cdktf.stringToTerraform(this._keydir),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      keydir: {
        value: cdktf.stringToHclTerraform(this._keydir),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
