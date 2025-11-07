// https://registry.terraform.io/providers/schwarzit/stackit/1.34.3/docs/data-sources/object_storage_credential
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataStackitObjectStorageCredentialConfig extends cdktf.TerraformMetaArguments {
  /**
  * the credentials group ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.3/docs/data-sources/object_storage_credential#credentials_group_id DataStackitObjectStorageCredential#credentials_group_id}
  */
  readonly credentialsGroupId: string;
  /**
  * the credential's display name in the portal
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.3/docs/data-sources/object_storage_credential#display_name DataStackitObjectStorageCredential#display_name}
  */
  readonly displayName?: string;
  /**
  * the credential ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.3/docs/data-sources/object_storage_credential#id DataStackitObjectStorageCredential#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID returned from `stackit_object_storage_project`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.3/docs/data-sources/object_storage_credential#object_storage_project_id DataStackitObjectStorageCredential#object_storage_project_id}
  */
  readonly objectStorageProjectId?: string;
  /**
  * The ID returned from `stackit_object_storage_project`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.3/docs/data-sources/object_storage_credential#project_id DataStackitObjectStorageCredential#project_id}
  */
  readonly projectId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.3/docs/data-sources/object_storage_credential stackit_object_storage_credential}
*/
export class DataStackitObjectStorageCredential extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "stackit_object_storage_credential";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataStackitObjectStorageCredential resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataStackitObjectStorageCredential to import
  * @param importFromId The id of the existing DataStackitObjectStorageCredential that should be imported. Refer to the {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.3/docs/data-sources/object_storage_credential#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataStackitObjectStorageCredential to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "stackit_object_storage_credential", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.3/docs/data-sources/object_storage_credential stackit_object_storage_credential} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataStackitObjectStorageCredentialConfig
  */
  public constructor(scope: Construct, id: string, config: DataStackitObjectStorageCredentialConfig) {
    super(scope, id, {
      terraformResourceType: 'stackit_object_storage_credential',
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
    this._credentialsGroupId = config.credentialsGroupId;
    this._displayName = config.displayName;
    this._id = config.id;
    this._objectStorageProjectId = config.objectStorageProjectId;
    this._projectId = config.projectId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // credentials_group_id - computed: false, optional: false, required: true
  private _credentialsGroupId?: string; 
  public get credentialsGroupId() {
    return this.getStringAttribute('credentials_group_id');
  }
  public set credentialsGroupId(value: string) {
    this._credentialsGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsGroupIdInput() {
    return this._credentialsGroupId;
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // expiry - computed: true, optional: false, required: false
  public get expiry() {
    return this.getStringAttribute('expiry');
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

  // object_storage_project_id - computed: false, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      credentials_group_id: cdktf.stringToTerraform(this._credentialsGroupId),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
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
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
