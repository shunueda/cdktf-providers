// https://registry.terraform.io/providers/files-com/files/0.1.417/docs/data-sources/automation_run
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFilesAutomationRunConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.417/docs/data-sources/automation_run#id DataFilesAutomationRun#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/files-com/files/0.1.417/docs/data-sources/automation_run files_automation_run}
*/
export class DataFilesAutomationRun extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "files_automation_run";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFilesAutomationRun resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFilesAutomationRun to import
  * @param importFromId The id of the existing DataFilesAutomationRun that should be imported. Refer to the {@link https://registry.terraform.io/providers/files-com/files/0.1.417/docs/data-sources/automation_run#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFilesAutomationRun to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "files_automation_run", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/files-com/files/0.1.417/docs/data-sources/automation_run files_automation_run} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFilesAutomationRunConfig
  */
  public constructor(scope: Construct, id: string, config: DataFilesAutomationRunConfig) {
    super(scope, id, {
      terraformResourceType: 'files_automation_run',
      terraformGeneratorMetadata: {
        providerName: 'files',
        providerVersion: '0.1.417',
        providerVersionConstraint: '0.1.417'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // automation_id - computed: true, optional: false, required: false
  public get automationId() {
    return this.getNumberAttribute('automation_id');
  }

  // completed_at - computed: true, optional: false, required: false
  public get completedAt() {
    return this.getStringAttribute('completed_at');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // failed_operations - computed: true, optional: false, required: false
  public get failedOperations() {
    return this.getNumberAttribute('failed_operations');
  }

  // id - computed: false, optional: false, required: true
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // retried_at - computed: true, optional: false, required: false
  public get retriedAt() {
    return this.getStringAttribute('retried_at');
  }

  // retried_in_run_id - computed: true, optional: false, required: false
  public get retriedInRunId() {
    return this.getNumberAttribute('retried_in_run_id');
  }

  // retry_at - computed: true, optional: false, required: false
  public get retryAt() {
    return this.getStringAttribute('retry_at');
  }

  // retry_of_run_id - computed: true, optional: false, required: false
  public get retryOfRunId() {
    return this.getNumberAttribute('retry_of_run_id');
  }

  // runtime - computed: true, optional: false, required: false
  public get runtime() {
    return this.getStringAttribute('runtime');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_messages_url - computed: true, optional: false, required: false
  public get statusMessagesUrl() {
    return this.getStringAttribute('status_messages_url');
  }

  // successful_operations - computed: true, optional: false, required: false
  public get successfulOperations() {
    return this.getNumberAttribute('successful_operations');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.numberToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.numberToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
