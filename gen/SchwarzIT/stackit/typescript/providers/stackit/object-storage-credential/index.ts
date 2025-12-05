// https://registry.terraform.io/providers/schwarzit/stackit/1.34.4/docs/resources/object_storage_credential
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectStorageCredentialConfig extends cdktf.TerraformMetaArguments {
  /**
  * credential group ID. changing this field will recreate the credential.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.4/docs/resources/object_storage_credential#credentials_group_id ObjectStorageCredential#credentials_group_id}
  */
  readonly credentialsGroupId?: string;
  /**
  * specifies if the credential should expire. changing this field will recreate the credential.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.4/docs/resources/object_storage_credential#expiry ObjectStorageCredential#expiry}
  */
  readonly expiry?: string;
  /**
  * The ID returned from `stackit_object_storage_project`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.4/docs/resources/object_storage_credential#object_storage_project_id ObjectStorageCredential#object_storage_project_id}
  */
  readonly objectStorageProjectId?: string;
  /**
  * The project UUID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.4/docs/resources/object_storage_credential#project_id ObjectStorageCredential#project_id}
  */
  readonly projectId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.4/docs/resources/object_storage_credential stackit_object_storage_credential}
*/
export class ObjectStorageCredential extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "stackit_object_storage_credential";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectStorageCredential resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectStorageCredential to import
  * @param importFromId The id of the existing ObjectStorageCredential that should be imported. Refer to the {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.4/docs/resources/object_storage_credential#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectStorageCredential to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "stackit_object_storage_credential", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.4/docs/resources/object_storage_credential stackit_object_storage_credential} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectStorageCredentialConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ObjectStorageCredentialConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'stackit_object_storage_credential',
      terraformGeneratorMetadata: {
        providerName: 'stackit',
        providerVersion: '1.34.4',
        providerVersionConstraint: '1.34.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._credentialsGroupId = config.credentialsGroupId;
    this._expiry = config.expiry;
    this._objectStorageProjectId = config.objectStorageProjectId;
    this._projectId = config.projectId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_key - computed: true, optional: false, required: false
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }

  // credentials_group_id - computed: true, optional: true, required: false
  private _credentialsGroupId?: string; 
  public get credentialsGroupId() {
    return this.getStringAttribute('credentials_group_id');
  }
  public set credentialsGroupId(value: string) {
    this._credentialsGroupId = value;
  }
  public resetCredentialsGroupId() {
    this._credentialsGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsGroupIdInput() {
    return this._credentialsGroupId;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // expiry - computed: true, optional: true, required: false
  private _expiry?: string; 
  public get expiry() {
    return this.getStringAttribute('expiry');
  }
  public set expiry(value: string) {
    this._expiry = value;
  }
  public resetExpiry() {
    this._expiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiryInput() {
    return this._expiry;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // object_storage_project_id - computed: true, optional: true, required: false
  private _objectStorageProjectId?: string; 
  public get objectStorageProjectId() {
    return this.getStringAttribute('object_storage_project_id');
  }
  public set objectStorageProjectId(value: string) {
    this._objectStorageProjectId = value;
  }
  public resetObjectStorageProjectId() {
    this._objectStorageProjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectStorageProjectIdInput() {
    return this._objectStorageProjectId;
  }

  // project_id - computed: true, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // secret_access_key - computed: true, optional: false, required: false
  public get secretAccessKey() {
    return this.getStringAttribute('secret_access_key');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      credentials_group_id: cdktf.stringToTerraform(this._credentialsGroupId),
      expiry: cdktf.stringToTerraform(this._expiry),
      object_storage_project_id: cdktf.stringToTerraform(this._objectStorageProjectId),
      project_id: cdktf.stringToTerraform(this._projectId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      credentials_group_id: {
        value: cdktf.stringToHclTerraform(this._credentialsGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expiry: {
        value: cdktf.stringToHclTerraform(this._expiry),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      object_storage_project_id: {
        value: cdktf.stringToHclTerraform(this._objectStorageProjectId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
