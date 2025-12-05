// https://registry.terraform.io/providers/schwarzit/stackit/1.34.4/docs/data-sources/object_storage_credentials_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataStackitObjectStorageCredentialsGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * the credential group ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.4/docs/data-sources/object_storage_credentials_group#id DataStackitObjectStorageCredentialsGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * the credential group's display name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.4/docs/data-sources/object_storage_credentials_group#name DataStackitObjectStorageCredentialsGroup#name}
  */
  readonly name?: string;
  /**
  * The ID returned from `stackit_object_storage_project`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.4/docs/data-sources/object_storage_credentials_group#object_storage_project_id DataStackitObjectStorageCredentialsGroup#object_storage_project_id}
  */
  readonly objectStorageProjectId?: string;
  /**
  * The ID returned from `stackit_object_storage_project`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.4/docs/data-sources/object_storage_credentials_group#project_id DataStackitObjectStorageCredentialsGroup#project_id}
  */
  readonly projectId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.4/docs/data-sources/object_storage_credentials_group stackit_object_storage_credentials_group}
*/
export class DataStackitObjectStorageCredentialsGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "stackit_object_storage_credentials_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataStackitObjectStorageCredentialsGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataStackitObjectStorageCredentialsGroup to import
  * @param importFromId The id of the existing DataStackitObjectStorageCredentialsGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.4/docs/data-sources/object_storage_credentials_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataStackitObjectStorageCredentialsGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "stackit_object_storage_credentials_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.4/docs/data-sources/object_storage_credentials_group stackit_object_storage_credentials_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataStackitObjectStorageCredentialsGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DataStackitObjectStorageCredentialsGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'stackit_object_storage_credentials_group',
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
    this._id = config.id;
    this._name = config.name;
    this._objectStorageProjectId = config.objectStorageProjectId;
    this._projectId = config.projectId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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

  // urn - computed: true, optional: false, required: false
  public get urn() {
    return this.getStringAttribute('urn');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      object_storage_project_id: cdktf.stringToTerraform(this._objectStorageProjectId),
      project_id: cdktf.stringToTerraform(this._projectId),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
