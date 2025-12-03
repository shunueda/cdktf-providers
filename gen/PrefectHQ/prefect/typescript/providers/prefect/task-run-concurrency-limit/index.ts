// https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs/resources/task_run_concurrency_limit
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TaskRunConcurrencyLimitConfig extends cdktf.TerraformMetaArguments {
  /**
  * Account ID (UUID)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs/resources/task_run_concurrency_limit#account_id TaskRunConcurrencyLimit#account_id}
  */
  readonly accountId?: string;
  /**
  * The task run concurrency limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs/resources/task_run_concurrency_limit#concurrency_limit TaskRunConcurrencyLimit#concurrency_limit}
  */
  readonly concurrencyLimit: number;
  /**
  * A tag the task run concurrency limit is applied to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs/resources/task_run_concurrency_limit#tag TaskRunConcurrencyLimit#tag}
  */
  readonly tag: string;
  /**
  * Workspace ID (UUID)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs/resources/task_run_concurrency_limit#workspace_id TaskRunConcurrencyLimit#workspace_id}
  */
  readonly workspaceId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs/resources/task_run_concurrency_limit prefect_task_run_concurrency_limit}
*/
export class TaskRunConcurrencyLimit extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prefect_task_run_concurrency_limit";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TaskRunConcurrencyLimit resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TaskRunConcurrencyLimit to import
  * @param importFromId The id of the existing TaskRunConcurrencyLimit that should be imported. Refer to the {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs/resources/task_run_concurrency_limit#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TaskRunConcurrencyLimit to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prefect_task_run_concurrency_limit", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs/resources/task_run_concurrency_limit prefect_task_run_concurrency_limit} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TaskRunConcurrencyLimitConfig
  */
  public constructor(scope: Construct, id: string, config: TaskRunConcurrencyLimitConfig) {
    super(scope, id, {
      terraformResourceType: 'prefect_task_run_concurrency_limit',
      terraformGeneratorMetadata: {
        providerName: 'prefect',
        providerVersion: '2.90.4',
        providerVersionConstraint: '2.90.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountId = config.accountId;
    this._concurrencyLimit = config.concurrencyLimit;
    this._tag = config.tag;
    this._workspaceId = config.workspaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // concurrency_limit - computed: false, optional: false, required: true
  private _concurrencyLimit?: number; 
  public get concurrencyLimit() {
    return this.getNumberAttribute('concurrency_limit');
  }
  public set concurrencyLimit(value: number) {
    this._concurrencyLimit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrencyLimitInput() {
    return this._concurrencyLimit;
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // tag - computed: false, optional: false, required: true
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }

  // updated - computed: true, optional: false, required: false
  public get updated() {
    return this.getStringAttribute('updated');
  }

  // workspace_id - computed: false, optional: true, required: false
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  public resetWorkspaceId() {
    this._workspaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      concurrency_limit: cdktf.numberToTerraform(this._concurrencyLimit),
      tag: cdktf.stringToTerraform(this._tag),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      concurrency_limit: {
        value: cdktf.numberToHclTerraform(this._concurrencyLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tag: {
        value: cdktf.stringToHclTerraform(this._tag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workspace_id: {
        value: cdktf.stringToHclTerraform(this._workspaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
