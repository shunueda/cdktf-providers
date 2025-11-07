// https://registry.terraform.io/providers/rancher/file/2.2.2/docs/data-sources/local
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFileLocalConfig extends cdktf.TerraformMetaArguments {
  /**
  * The directory where the file exists, if left empty the current local directory will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/file/2.2.2/docs/data-sources/local#directory DataFileLocal#directory}
  */
  readonly directory?: string;
  /**
  * A string used to generate the file identifier, you can pass this value in the environment variable `TF_FILE_HMAC_SECRET_KEY`. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/file/2.2.2/docs/data-sources/local#hmac_secret_key DataFileLocal#hmac_secret_key}
  */
  readonly hmacSecretKey?: string;
  /**
  * File name, required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/file/2.2.2/docs/data-sources/local#name DataFileLocal#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/rancher/file/2.2.2/docs/data-sources/local file_local}
*/
export class DataFileLocal extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "file_local";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFileLocal resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFileLocal to import
  * @param importFromId The id of the existing DataFileLocal that should be imported. Refer to the {@link https://registry.terraform.io/providers/rancher/file/2.2.2/docs/data-sources/local#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFileLocal to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "file_local", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rancher/file/2.2.2/docs/data-sources/local file_local} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFileLocalConfig
  */
  public constructor(scope: Construct, id: string, config: DataFileLocalConfig) {
    super(scope, id, {
      terraformResourceType: 'file_local',
      terraformGeneratorMetadata: {
        providerName: 'file',
        providerVersion: '2.2.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._directory = config.directory;
    this._hmacSecretKey = config.hmacSecretKey;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // contents - computed: true, optional: false, required: false
  public get contents() {
    return this.getStringAttribute('contents');
  }

  // directory - computed: true, optional: true, required: false
  private _directory?: string; 
  public get directory() {
    return this.getStringAttribute('directory');
  }
  public set directory(value: string) {
    this._directory = value;
  }
  public resetDirectory() {
    this._directory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryInput() {
    return this._directory;
  }

  // hmac_secret_key - computed: true, optional: true, required: false
  private _hmacSecretKey?: string; 
  public get hmacSecretKey() {
    return this.getStringAttribute('hmac_secret_key');
  }
  public set hmacSecretKey(value: string) {
    this._hmacSecretKey = value;
  }
  public resetHmacSecretKey() {
    this._hmacSecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hmacSecretKeyInput() {
    return this._hmacSecretKey;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // permissions - computed: true, optional: false, required: false
  public get permissions() {
    return this.getStringAttribute('permissions');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      directory: cdktf.stringToTerraform(this._directory),
      hmac_secret_key: cdktf.stringToTerraform(this._hmacSecretKey),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      directory: {
        value: cdktf.stringToHclTerraform(this._directory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hmac_secret_key: {
        value: cdktf.stringToHclTerraform(this._hmacSecretKey),
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
