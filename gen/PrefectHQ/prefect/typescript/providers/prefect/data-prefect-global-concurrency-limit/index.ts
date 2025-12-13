// https://registry.terraform.io/providers/prefecthq/prefect/2.91.0/docs/data-sources/global_concurrency_limit
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPrefectGlobalConcurrencyLimitConfig extends cdktf.TerraformMetaArguments {
  /**
  * Account ID (UUID), defaults to the account set in the provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.91.0/docs/data-sources/global_concurrency_limit#account_id DataPrefectGlobalConcurrencyLimit#account_id}
  */
  readonly accountId?: string;
  /**
  * Timestamp of when the resource was created (RFC3339)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.91.0/docs/data-sources/global_concurrency_limit#created DataPrefectGlobalConcurrencyLimit#created}
  */
  readonly created?: string;
  /**
  * Global Concurrency Limit ID (UUID)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.91.0/docs/data-sources/global_concurrency_limit#id DataPrefectGlobalConcurrencyLimit#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the global concurrency limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.91.0/docs/data-sources/global_concurrency_limit#name DataPrefectGlobalConcurrencyLimit#name}
  */
  readonly name?: string;
  /**
  * Timestamp of when the resource was updated (RFC3339)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.91.0/docs/data-sources/global_concurrency_limit#updated DataPrefectGlobalConcurrencyLimit#updated}
  */
  readonly updated?: string;
  /**
  * Workspace ID (UUID), defaults to the workspace set in the provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.91.0/docs/data-sources/global_concurrency_limit#workspace_id DataPrefectGlobalConcurrencyLimit#workspace_id}
  */
  readonly workspaceId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/prefecthq/prefect/2.91.0/docs/data-sources/global_concurrency_limit prefect_global_concurrency_limit}
*/
export class DataPrefectGlobalConcurrencyLimit extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prefect_global_concurrency_limit";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPrefectGlobalConcurrencyLimit resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPrefectGlobalConcurrencyLimit to import
  * @param importFromId The id of the existing DataPrefectGlobalConcurrencyLimit that should be imported. Refer to the {@link https://registry.terraform.io/providers/prefecthq/prefect/2.91.0/docs/data-sources/global_concurrency_limit#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPrefectGlobalConcurrencyLimit to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prefect_global_concurrency_limit", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/prefecthq/prefect/2.91.0/docs/data-sources/global_concurrency_limit prefect_global_concurrency_limit} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPrefectGlobalConcurrencyLimitConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataPrefectGlobalConcurrencyLimitConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'prefect_global_concurrency_limit',
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
    this._created = config.created;
    this._id = config.id;
    this._name = config.name;
    this._updated = config.updated;
    this._workspaceId = config.workspaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: true, required: false
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

  // active - computed: true, optional: false, required: false
  public get active() {
    return this.getBooleanAttribute('active');
  }

  // active_slots - computed: true, optional: false, required: false
  public get activeSlots() {
    return this.getNumberAttribute('active_slots');
  }

  // created - computed: true, optional: true, required: false
  private _created?: string; 
  public get created() {
    return this.getStringAttribute('created');
  }
  public set created(value: string) {
    this._created = value;
  }
  public resetCreated() {
    this._created = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdInput() {
    return this._created;
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

  // limit - computed: true, optional: false, required: false
  public get limit() {
    return this.getNumberAttribute('limit');
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

  // slot_decay_per_second - computed: true, optional: false, required: false
  public get slotDecayPerSecond() {
    return this.getNumberAttribute('slot_decay_per_second');
  }

  // updated - computed: true, optional: true, required: false
  private _updated?: string; 
  public get updated() {
    return this.getStringAttribute('updated');
  }
  public set updated(value: string) {
    this._updated = value;
  }
  public resetUpdated() {
    this._updated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedInput() {
    return this._updated;
  }

  // workspace_id - computed: true, optional: true, required: false
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
      created: cdktf.stringToTerraform(this._created),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      updated: cdktf.stringToTerraform(this._updated),
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
      created: {
        value: cdktf.stringToHclTerraform(this._created),
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
      updated: {
        value: cdktf.stringToHclTerraform(this._updated),
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
