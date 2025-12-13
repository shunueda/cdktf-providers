// https://registry.terraform.io/providers/prefecthq/prefect/2.91.0/docs/resources/work_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkPoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Account ID (UUID), defaults to the account set in the provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.91.0/docs/resources/work_pool#account_id WorkPool#account_id}
  */
  readonly accountId?: string;
  /**
  * The base job template for the work pool, as a JSON string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.91.0/docs/resources/work_pool#base_job_template WorkPool#base_job_template}
  */
  readonly baseJobTemplate?: string;
  /**
  * The concurrency limit applied to this work pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.91.0/docs/resources/work_pool#concurrency_limit WorkPool#concurrency_limit}
  */
  readonly concurrencyLimit?: number;
  /**
  * Description of the work pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.91.0/docs/resources/work_pool#description WorkPool#description}
  */
  readonly description?: string;
  /**
  * Name of the work pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.91.0/docs/resources/work_pool#name WorkPool#name}
  */
  readonly name: string;
  /**
  * Whether this work pool is paused
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.91.0/docs/resources/work_pool#paused WorkPool#paused}
  */
  readonly paused?: boolean | cdktf.IResolvable;
  /**
  * Type of the work pool, eg. kubernetes, ecs, process, etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.91.0/docs/resources/work_pool#type WorkPool#type}
  */
  readonly type?: string;
  /**
  * Workspace ID (UUID), defaults to the workspace set in the provider. In Prefect Cloud, either the `work_pool` resource or the provider's `workspace_id` must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.91.0/docs/resources/work_pool#workspace_id WorkPool#workspace_id}
  */
  readonly workspaceId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/prefecthq/prefect/2.91.0/docs/resources/work_pool prefect_work_pool}
*/
export class WorkPool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prefect_work_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WorkPool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WorkPool to import
  * @param importFromId The id of the existing WorkPool that should be imported. Refer to the {@link https://registry.terraform.io/providers/prefecthq/prefect/2.91.0/docs/resources/work_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WorkPool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prefect_work_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/prefecthq/prefect/2.91.0/docs/resources/work_pool prefect_work_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkPoolConfig
  */
  public constructor(scope: Construct, id: string, config: WorkPoolConfig) {
    super(scope, id, {
      terraformResourceType: 'prefect_work_pool',
      terraformGeneratorMetadata: {
        providerName: 'prefect',
        providerVersion: '2.91.0',
        providerVersionConstraint: '2.91.0'
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
    this._baseJobTemplate = config.baseJobTemplate;
    this._concurrencyLimit = config.concurrencyLimit;
    this._description = config.description;
    this._name = config.name;
    this._paused = config.paused;
    this._type = config.type;
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

  // base_job_template - computed: false, optional: true, required: false
  private _baseJobTemplate?: string; 
  public get baseJobTemplate() {
    return this.getStringAttribute('base_job_template');
  }
  public set baseJobTemplate(value: string) {
    this._baseJobTemplate = value;
  }
  public resetBaseJobTemplate() {
    this._baseJobTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseJobTemplateInput() {
    return this._baseJobTemplate;
  }

  // concurrency_limit - computed: false, optional: true, required: false
  private _concurrencyLimit?: number; 
  public get concurrencyLimit() {
    return this.getNumberAttribute('concurrency_limit');
  }
  public set concurrencyLimit(value: number) {
    this._concurrencyLimit = value;
  }
  public resetConcurrencyLimit() {
    this._concurrencyLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrencyLimitInput() {
    return this._concurrencyLimit;
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // default_queue_id - computed: true, optional: false, required: false
  public get defaultQueueId() {
    return this.getStringAttribute('default_queue_id');
  }

  // description - computed: false, optional: true, required: false
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

  // paused - computed: true, optional: true, required: false
  private _paused?: boolean | cdktf.IResolvable; 
  public get paused() {
    return this.getBooleanAttribute('paused');
  }
  public set paused(value: boolean | cdktf.IResolvable) {
    this._paused = value;
  }
  public resetPaused() {
    this._paused = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pausedInput() {
    return this._paused;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
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
      base_job_template: cdktf.stringToTerraform(this._baseJobTemplate),
      concurrency_limit: cdktf.numberToTerraform(this._concurrencyLimit),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      paused: cdktf.booleanToTerraform(this._paused),
      type: cdktf.stringToTerraform(this._type),
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
      base_job_template: {
        value: cdktf.stringToHclTerraform(this._baseJobTemplate),
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
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      paused: {
        value: cdktf.booleanToHclTerraform(this._paused),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
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
