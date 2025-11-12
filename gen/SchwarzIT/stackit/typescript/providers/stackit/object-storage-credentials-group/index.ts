// https://registry.terraform.io/providers/schwarzit/stackit/1.34.3/docs/resources/object_storage_credentials_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectStorageCredentialsGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * the credential group display name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.3/docs/resources/object_storage_credentials_group#name ObjectStorageCredentialsGroup#name}
  */
  readonly name: string;
  /**
  * The ID returned from `stackit_object_storage_project`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.3/docs/resources/object_storage_credentials_group#object_storage_project_id ObjectStorageCredentialsGroup#object_storage_project_id}
  */
  readonly objectStorageProjectId?: string;
  /**
  * The project UUID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.3/docs/resources/object_storage_credentials_group#project_id ObjectStorageCredentialsGroup#project_id}
  */
  readonly projectId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.3/docs/resources/object_storage_credentials_group stackit_object_storage_credentials_group}
*/
export class ObjectStorageCredentialsGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "stackit_object_storage_credentials_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectStorageCredentialsGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectStorageCredentialsGroup to import
  * @param importFromId The id of the existing ObjectStorageCredentialsGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.3/docs/resources/object_storage_credentials_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectStorageCredentialsGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "stackit_object_storage_credentials_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.3/docs/resources/object_storage_credentials_group stackit_object_storage_credentials_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectStorageCredentialsGroupConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectStorageCredentialsGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'stackit_object_storage_credentials_group',
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

  // urn - computed: true, optional: false, required: false
  public get urn() {
    return this.getStringAttribute('urn');
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
