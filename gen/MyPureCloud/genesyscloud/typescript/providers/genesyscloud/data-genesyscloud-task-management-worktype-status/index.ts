// https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/data-sources/task_management_worktype_status
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGenesyscloudTaskManagementWorktypeStatusConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/data-sources/task_management_worktype_status#id DataGenesyscloudTaskManagementWorktypeStatus#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Task management worktype status name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/data-sources/task_management_worktype_status#name DataGenesyscloudTaskManagementWorktypeStatus#name}
  */
  readonly name: string;
  /**
  * The id of the worktype the status belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/data-sources/task_management_worktype_status#worktype_id DataGenesyscloudTaskManagementWorktypeStatus#worktype_id}
  */
  readonly worktypeId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/data-sources/task_management_worktype_status genesyscloud_task_management_worktype_status}
*/
export class DataGenesyscloudTaskManagementWorktypeStatus extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "genesyscloud_task_management_worktype_status";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGenesyscloudTaskManagementWorktypeStatus resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGenesyscloudTaskManagementWorktypeStatus to import
  * @param importFromId The id of the existing DataGenesyscloudTaskManagementWorktypeStatus that should be imported. Refer to the {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/data-sources/task_management_worktype_status#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGenesyscloudTaskManagementWorktypeStatus to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "genesyscloud_task_management_worktype_status", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/data-sources/task_management_worktype_status genesyscloud_task_management_worktype_status} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGenesyscloudTaskManagementWorktypeStatusConfig
  */
  public constructor(scope: Construct, id: string, config: DataGenesyscloudTaskManagementWorktypeStatusConfig) {
    super(scope, id, {
      terraformResourceType: 'genesyscloud_task_management_worktype_status',
      terraformGeneratorMetadata: {
        providerName: 'genesyscloud',
        providerVersion: '1.73.0',
        providerVersionConstraint: '1.73.0'
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
    this._worktypeId = config.worktypeId;
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

  // worktype_id - computed: false, optional: false, required: true
  private _worktypeId?: string; 
  public get worktypeId() {
    return this.getStringAttribute('worktype_id');
  }
  public set worktypeId(value: string) {
    this._worktypeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get worktypeIdInput() {
    return this._worktypeId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      worktype_id: cdktf.stringToTerraform(this._worktypeId),
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
      worktype_id: {
        value: cdktf.stringToHclTerraform(this._worktypeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
