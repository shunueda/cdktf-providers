// https://registry.terraform.io/providers/schwarzit/stackit/1.34.3/docs/data-sources/secrets_manager_user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataStackitSecretsManagerUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies the instance UUID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.3/docs/data-sources/secrets_manager_user#instance_id DataStackitSecretsManagerUser#instance_id}
  */
  readonly instanceId: string;
  /**
  * The project UUID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.3/docs/data-sources/secrets_manager_user#project_id DataStackitSecretsManagerUser#project_id}
  */
  readonly projectId: string;
  /**
  * Specifies the user name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.3/docs/data-sources/secrets_manager_user#username DataStackitSecretsManagerUser#username}
  */
  readonly username: string;
  /**
  * Specifies if the user can write secrets. `false` by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.3/docs/data-sources/secrets_manager_user#write_enabled DataStackitSecretsManagerUser#write_enabled}
  */
  readonly writeEnabled?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.3/docs/data-sources/secrets_manager_user stackit_secrets_manager_user}
*/
export class DataStackitSecretsManagerUser extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "stackit_secrets_manager_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataStackitSecretsManagerUser resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataStackitSecretsManagerUser to import
  * @param importFromId The id of the existing DataStackitSecretsManagerUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.3/docs/data-sources/secrets_manager_user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataStackitSecretsManagerUser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "stackit_secrets_manager_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.3/docs/data-sources/secrets_manager_user stackit_secrets_manager_user} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataStackitSecretsManagerUserConfig
  */
  public constructor(scope: Construct, id: string, config: DataStackitSecretsManagerUserConfig) {
    super(scope, id, {
      terraformResourceType: 'stackit_secrets_manager_user',
      terraformGeneratorMetadata: {
        providerName: 'stackit',
        providerVersion: '1.34.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._instanceId = config.instanceId;
    this._projectId = config.projectId;
    this._username = config.username;
    this._writeEnabled = config.writeEnabled;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // write_enabled - computed: false, optional: true, required: false
  private _writeEnabled?: boolean | cdktf.IResolvable; 
  public get writeEnabled() {
    return this.getBooleanAttribute('write_enabled');
  }
  public set writeEnabled(value: boolean | cdktf.IResolvable) {
    this._writeEnabled = value;
  }
  public resetWriteEnabled() {
    this._writeEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeEnabledInput() {
    return this._writeEnabled;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      instance_id: cdktf.stringToTerraform(this._instanceId),
      project_id: cdktf.stringToTerraform(this._projectId),
      username: cdktf.stringToTerraform(this._username),
      write_enabled: cdktf.booleanToTerraform(this._writeEnabled),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      write_enabled: {
        value: cdktf.booleanToHclTerraform(this._writeEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
