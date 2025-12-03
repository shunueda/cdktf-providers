// https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs/data-sources/work_queue
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPrefectWorkQueueConfig extends cdktf.TerraformMetaArguments {
  /**
  * Account ID (UUID), defaults to the account set in the provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs/data-sources/work_queue#account_id DataPrefectWorkQueue#account_id}
  */
  readonly accountId?: string;
  /**
  * The concurrency limit applied to this work queue
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs/data-sources/work_queue#concurrency_limit DataPrefectWorkQueue#concurrency_limit}
  */
  readonly concurrencyLimit?: number;
  /**
  * Description of the work queue
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs/data-sources/work_queue#description DataPrefectWorkQueue#description}
  */
  readonly description?: string;
  /**
  * Work queue ID (UUID)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs/data-sources/work_queue#id DataPrefectWorkQueue#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the work queue
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs/data-sources/work_queue#name DataPrefectWorkQueue#name}
  */
  readonly name?: string;
  /**
  * Name of the associated work pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs/data-sources/work_queue#work_pool_name DataPrefectWorkQueue#work_pool_name}
  */
  readonly workPoolName: string;
  /**
  * Workspace ID (UUID), defaults to the workspace set in the provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs/data-sources/work_queue#workspace_id DataPrefectWorkQueue#workspace_id}
  */
  readonly workspaceId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs/data-sources/work_queue prefect_work_queue}
*/
export class DataPrefectWorkQueue extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prefect_work_queue";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPrefectWorkQueue resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPrefectWorkQueue to import
  * @param importFromId The id of the existing DataPrefectWorkQueue that should be imported. Refer to the {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs/data-sources/work_queue#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPrefectWorkQueue to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prefect_work_queue", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs/data-sources/work_queue prefect_work_queue} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPrefectWorkQueueConfig
  */
  public constructor(scope: Construct, id: string, config: DataPrefectWorkQueueConfig) {
    super(scope, id, {
      terraformResourceType: 'prefect_work_queue',
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
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._workPoolName = config.workPoolName;
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

  // concurrency_limit - computed: true, optional: true, required: false
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

  // description - computed: true, optional: true, required: false
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

  // is_paused - computed: true, optional: false, required: false
  public get isPaused() {
    return this.getBooleanAttribute('is_paused');
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

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // updated - computed: true, optional: false, required: false
  public get updated() {
    return this.getStringAttribute('updated');
  }

  // work_pool_name - computed: false, optional: false, required: true
  private _workPoolName?: string; 
  public get workPoolName() {
    return this.getStringAttribute('work_pool_name');
  }
  public set workPoolName(value: string) {
    this._workPoolName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workPoolNameInput() {
    return this._workPoolName;
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
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      work_pool_name: cdktf.stringToTerraform(this._workPoolName),
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
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      work_pool_name: {
        value: cdktf.stringToHclTerraform(this._workPoolName),
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
