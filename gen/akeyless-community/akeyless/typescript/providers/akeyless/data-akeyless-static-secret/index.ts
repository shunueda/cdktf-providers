// https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/data-sources/static_secret
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAkeylessStaticSecretConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/data-sources/static_secret#id DataAkeylessStaticSecret#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Retrieve the Secret value without checking the Gateway's cache [true/false]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/data-sources/static_secret#ignore_cache DataAkeylessStaticSecret#ignore_cache}
  */
  readonly ignoreCache?: string;
  /**
  * The path where the secret is stored. Defaults to the latest version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/data-sources/static_secret#path DataAkeylessStaticSecret#path}
  */
  readonly path: string;
  /**
  * The version of the secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/data-sources/static_secret#version DataAkeylessStaticSecret#version}
  */
  readonly version?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/data-sources/static_secret akeyless_static_secret}
*/
export class DataAkeylessStaticSecret extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akeyless_static_secret";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAkeylessStaticSecret resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAkeylessStaticSecret to import
  * @param importFromId The id of the existing DataAkeylessStaticSecret that should be imported. Refer to the {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/data-sources/static_secret#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAkeylessStaticSecret to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akeyless_static_secret", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/data-sources/static_secret akeyless_static_secret} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAkeylessStaticSecretConfig
  */
  public constructor(scope: Construct, id: string, config: DataAkeylessStaticSecretConfig) {
    super(scope, id, {
      terraformResourceType: 'akeyless_static_secret',
      terraformGeneratorMetadata: {
        providerName: 'akeyless',
        providerVersion: '1.11.2',
        providerVersionConstraint: '1.11.2'
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
    this._ignoreCache = config.ignoreCache;
    this._path = config.path;
    this._version = config.version;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // custom_field - computed: true, optional: false, required: false
  private _customField = new cdktf.StringMap(this, "custom_field");
  public get customField() {
    return this._customField;
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

  // ignore_cache - computed: false, optional: true, required: false
  private _ignoreCache?: string; 
  public get ignoreCache() {
    return this.getStringAttribute('ignore_cache');
  }
  public set ignoreCache(value: string) {
    this._ignoreCache = value;
  }
  public resetIgnoreCache() {
    this._ignoreCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreCacheInput() {
    return this._ignoreCache;
  }

  // inject_url - computed: true, optional: false, required: false
  public get injectUrl() {
    return cdktf.Fn.tolist(this.getListAttribute('inject_url'));
  }

  // key_value_pairs - computed: true, optional: false, required: false
  private _keyValuePairs = new cdktf.StringMap(this, "key_value_pairs");
  public get keyValuePairs() {
    return this._keyValuePairs;
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
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

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }

  // version - computed: true, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ignore_cache: cdktf.stringToTerraform(this._ignoreCache),
      path: cdktf.stringToTerraform(this._path),
      version: cdktf.numberToTerraform(this._version),
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
      ignore_cache: {
        value: cdktf.stringToHclTerraform(this._ignoreCache),
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
      version: {
        value: cdktf.numberToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
