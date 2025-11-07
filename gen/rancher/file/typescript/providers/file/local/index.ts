// https://registry.terraform.io/providers/rancher/file/2.2.2/docs/resources/local
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LocalConfig extends cdktf.TerraformMetaArguments {
  /**
  * File contents, required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/file/2.2.2/docs/resources/local#contents Local#contents}
  */
  readonly contents: string;
  /**
  * The directory where the file will be placed, defaults to the current working directory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/file/2.2.2/docs/resources/local#directory Local#directory}
  */
  readonly directory?: string;
  /**
  * A string used to generate the file identifier, you can pass this value in the environment variable `TF_FILE_HMAC_SECRET_KEY`. The provider will use a hard coded value as the secret key for unprotected files. As this is used to calculate the id of the file, it can't be updated, any change will force a recreate. Since this also protects delete operations, you will need to first remove the old resource from your configuration with the old key, then add a new resource with the new key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/file/2.2.2/docs/resources/local#hmac_secret_key Local#hmac_secret_key}
  */
  readonly hmacSecretKey?: string;
  /**
  * Identifier derived from sha256+HMAC hash of file contents. When setting 'protected' to true this argument is required. However, when 'protected' is false then this should be left empty (computed by the provider).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/file/2.2.2/docs/resources/local#id Local#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * File name, required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/file/2.2.2/docs/resources/local#name Local#name}
  */
  readonly name: string;
  /**
  * The file permissions to assign to the file, defaults to '0600'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/file/2.2.2/docs/resources/local#permissions Local#permissions}
  */
  readonly permissions?: string;
  /**
  * Whether or not to fail update or create if the calculated id doesn't match the given id. When this is true, the 'id' field is required and must match what we calculate as the hash at both create and update times. If the 'id' configured doesn't match what we calculate then the provider will error rather than updating or creating the file. When setting this to true, you will need to either set the `TF_FILE_HMAC_SECRET_KEY` environment variable or set the hmac_secret_key argument. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/file/2.2.2/docs/resources/local#protected Local#protected}
  */
  readonly protected?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/rancher/file/2.2.2/docs/resources/local file_local}
*/
export class Local extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "file_local";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Local resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Local to import
  * @param importFromId The id of the existing Local that should be imported. Refer to the {@link https://registry.terraform.io/providers/rancher/file/2.2.2/docs/resources/local#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Local to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "file_local", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rancher/file/2.2.2/docs/resources/local file_local} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LocalConfig
  */
  public constructor(scope: Construct, id: string, config: LocalConfig) {
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
    this._contents = config.contents;
    this._directory = config.directory;
    this._hmacSecretKey = config.hmacSecretKey;
    this._id = config.id;
    this._name = config.name;
    this._permissions = config.permissions;
    this._protected = config.protected;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // contents - computed: false, optional: false, required: true
  private _contents?: string; 
  public get contents() {
    return this.getStringAttribute('contents');
  }
  public set contents(value: string) {
    this._contents = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentsInput() {
    return this._contents;
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

  // permissions - computed: true, optional: true, required: false
  private _permissions?: string; 
  public get permissions() {
    return this.getStringAttribute('permissions');
  }
  public set permissions(value: string) {
    this._permissions = value;
  }
  public resetPermissions() {
    this._permissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions;
  }

  // protected - computed: true, optional: true, required: false
  private _protected?: boolean | cdktf.IResolvable; 
  public get protected() {
    return this.getBooleanAttribute('protected');
  }
  public set protected(value: boolean | cdktf.IResolvable) {
    this._protected = value;
  }
  public resetProtected() {
    this._protected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectedInput() {
    return this._protected;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      contents: cdktf.stringToTerraform(this._contents),
      directory: cdktf.stringToTerraform(this._directory),
      hmac_secret_key: cdktf.stringToTerraform(this._hmacSecretKey),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      permissions: cdktf.stringToTerraform(this._permissions),
      protected: cdktf.booleanToTerraform(this._protected),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      contents: {
        value: cdktf.stringToHclTerraform(this._contents),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      permissions: {
        value: cdktf.stringToHclTerraform(this._permissions),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protected: {
        value: cdktf.booleanToHclTerraform(this._protected),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
