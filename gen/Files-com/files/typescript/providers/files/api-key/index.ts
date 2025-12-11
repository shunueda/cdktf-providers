// https://registry.terraform.io/providers/files-com/files/0.1.409/docs/resources/api_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * If `true`, this API key will be usable with AWS-compatible endpoints, such as our Inbound S3-compatible endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.409/docs/resources/api_key#aws_style_credentials ApiKey#aws_style_credentials}
  */
  readonly awsStyleCredentials?: boolean | cdktf.IResolvable;
  /**
  * User-supplied description of API key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.409/docs/resources/api_key#description ApiKey#description}
  */
  readonly description?: string;
  /**
  * API Key expiration date
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.409/docs/resources/api_key#expires_at ApiKey#expires_at}
  */
  readonly expiresAt?: string;
  /**
  * Internal name for the API Key.  For your use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.409/docs/resources/api_key#name ApiKey#name}
  */
  readonly name: string;
  /**
  * Folder path restriction for `office_integration` permission set API keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.409/docs/resources/api_key#path ApiKey#path}
  */
  readonly path?: string;
  /**
  * Permissions for this API Key. It must be full for site-wide API Keys.  Keys with the `desktop_app` permission set only have the ability to do the functions provided in our Desktop App (File and Share Link operations). Keys with the `office_integration` permission set are auto generated, and automatically expire, to allow users to interact with office integration platforms. Additional permission sets may become available in the future, such as for a Site Admin to give a key with no administrator privileges.  If you have ideas for permission sets, please let us know.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.409/docs/resources/api_key#permission_set ApiKey#permission_set}
  */
  readonly permissionSet?: string;
  /**
  * User ID for the owner of this API Key.  May be blank for Site-wide API Keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.409/docs/resources/api_key#user_id ApiKey#user_id}
  */
  readonly userId?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/files-com/files/0.1.409/docs/resources/api_key files_api_key}
*/
export class ApiKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "files_api_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApiKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApiKey to import
  * @param importFromId The id of the existing ApiKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/files-com/files/0.1.409/docs/resources/api_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApiKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "files_api_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/files-com/files/0.1.409/docs/resources/api_key files_api_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiKeyConfig
  */
  public constructor(scope: Construct, id: string, config: ApiKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'files_api_key',
      terraformGeneratorMetadata: {
        providerName: 'files',
        providerVersion: '0.1.409',
        providerVersionConstraint: '0.1.409'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._awsStyleCredentials = config.awsStyleCredentials;
    this._description = config.description;
    this._expiresAt = config.expiresAt;
    this._name = config.name;
    this._path = config.path;
    this._permissionSet = config.permissionSet;
    this._userId = config.userId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aws_access_key_id - computed: true, optional: false, required: false
  public get awsAccessKeyId() {
    return this.getStringAttribute('aws_access_key_id');
  }

  // aws_secret_key - computed: true, optional: false, required: false
  public get awsSecretKey() {
    return this.getStringAttribute('aws_secret_key');
  }

  // aws_style_credentials - computed: true, optional: true, required: false
  private _awsStyleCredentials?: boolean | cdktf.IResolvable; 
  public get awsStyleCredentials() {
    return this.getBooleanAttribute('aws_style_credentials');
  }
  public set awsStyleCredentials(value: boolean | cdktf.IResolvable) {
    this._awsStyleCredentials = value;
  }
  public resetAwsStyleCredentials() {
    this._awsStyleCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsStyleCredentialsInput() {
    return this._awsStyleCredentials;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // descriptive_label - computed: true, optional: false, required: false
  public get descriptiveLabel() {
    return this.getStringAttribute('descriptive_label');
  }

  // expires_at - computed: true, optional: true, required: false
  private _expiresAt?: string; 
  public get expiresAt() {
    return this.getStringAttribute('expires_at');
  }
  public set expiresAt(value: string) {
    this._expiresAt = value;
  }
  public resetExpiresAt() {
    this._expiresAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiresAtInput() {
    return this._expiresAt;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // last_use_at - computed: true, optional: false, required: false
  public get lastUseAt() {
    return this.getStringAttribute('last_use_at');
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

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // permission_set - computed: true, optional: true, required: false
  private _permissionSet?: string; 
  public get permissionSet() {
    return this.getStringAttribute('permission_set');
  }
  public set permissionSet(value: string) {
    this._permissionSet = value;
  }
  public resetPermissionSet() {
    this._permissionSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionSetInput() {
    return this._permissionSet;
  }

  // platform - computed: true, optional: false, required: false
  public get platform() {
    return this.getStringAttribute('platform');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // user_id - computed: true, optional: true, required: false
  private _userId?: number; 
  public get userId() {
    return this.getNumberAttribute('user_id');
  }
  public set userId(value: number) {
    this._userId = value;
  }
  public resetUserId() {
    this._userId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aws_style_credentials: cdktf.booleanToTerraform(this._awsStyleCredentials),
      description: cdktf.stringToTerraform(this._description),
      expires_at: cdktf.stringToTerraform(this._expiresAt),
      name: cdktf.stringToTerraform(this._name),
      path: cdktf.stringToTerraform(this._path),
      permission_set: cdktf.stringToTerraform(this._permissionSet),
      user_id: cdktf.numberToTerraform(this._userId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aws_style_credentials: {
        value: cdktf.booleanToHclTerraform(this._awsStyleCredentials),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expires_at: {
        value: cdktf.stringToHclTerraform(this._expiresAt),
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
      path: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      permission_set: {
        value: cdktf.stringToHclTerraform(this._permissionSet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_id: {
        value: cdktf.numberToHclTerraform(this._userId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
