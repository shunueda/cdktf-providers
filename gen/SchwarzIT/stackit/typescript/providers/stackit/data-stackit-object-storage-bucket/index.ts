// https://registry.terraform.io/providers/schwarzit/stackit/1.34.3/docs/data-sources/object_storage_bucket
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataStackitObjectStorageBucketConfig extends cdktf.TerraformMetaArguments {
  /**
  * the bucket name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.3/docs/data-sources/object_storage_bucket#name DataStackitObjectStorageBucket#name}
  */
  readonly name: string;
  /**
  * The ID returned from `stackit_object_storage_project`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.3/docs/data-sources/object_storage_bucket#object_storage_project_id DataStackitObjectStorageBucket#object_storage_project_id}
  */
  readonly objectStorageProjectId?: string;
  /**
  * The ID returned from `stackit_object_storage_project`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.3/docs/data-sources/object_storage_bucket#project_id DataStackitObjectStorageBucket#project_id}
  */
  readonly projectId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.3/docs/data-sources/object_storage_bucket stackit_object_storage_bucket}
*/
export class DataStackitObjectStorageBucket extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "stackit_object_storage_bucket";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataStackitObjectStorageBucket resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataStackitObjectStorageBucket to import
  * @param importFromId The id of the existing DataStackitObjectStorageBucket that should be imported. Refer to the {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.3/docs/data-sources/object_storage_bucket#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataStackitObjectStorageBucket to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "stackit_object_storage_bucket", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.3/docs/data-sources/object_storage_bucket stackit_object_storage_bucket} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataStackitObjectStorageBucketConfig
  */
  public constructor(scope: Construct, id: string, config: DataStackitObjectStorageBucketConfig) {
    super(scope, id, {
      terraformResourceType: 'stackit_object_storage_bucket',
      terraformGeneratorMetadata: {
        providerName: 'stackit',
        providerVersion: '1.34.3',
        providerVersionConstraint: '1.34.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
    this._objectStorageProjectId = config.objectStorageProjectId;
    this._projectId = config.projectId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // host_style_url - computed: true, optional: false, required: false
  public get hostStyleUrl() {
    return this.getStringAttribute('host_style_url');
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

  // path_style_url - computed: true, optional: false, required: false
  public get pathStyleUrl() {
    return this.getStringAttribute('path_style_url');
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

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      object_storage_project_id: cdktf.stringToTerraform(this._objectStorageProjectId),
      project_id: cdktf.stringToTerraform(this._projectId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
