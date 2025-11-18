// https://registry.terraform.io/providers/prefecthq/prefect/2.90.2/docs/resources/global_concurrency_limit
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GlobalConcurrencyLimitConfig extends cdktf.TerraformMetaArguments {
  /**
  * Account ID (UUID)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.2/docs/resources/global_concurrency_limit#account_id GlobalConcurrencyLimit#account_id}
  */
  readonly accountId?: string;
  /**
  * Whether the global concurrency limit is active.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.2/docs/resources/global_concurrency_limit#active GlobalConcurrencyLimit#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * The number of active slots.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.2/docs/resources/global_concurrency_limit#active_slots GlobalConcurrencyLimit#active_slots}
  */
  readonly activeSlots?: number;
  /**
  * The maximum number of tasks that can run simultaneously.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.2/docs/resources/global_concurrency_limit#limit GlobalConcurrencyLimit#limit}
  */
  readonly limit: number;
  /**
  * The name of the global concurrency limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.2/docs/resources/global_concurrency_limit#name GlobalConcurrencyLimit#name}
  */
  readonly name: string;
  /**
  * Slot Decay Per Second (number or null)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.2/docs/resources/global_concurrency_limit#slot_decay_per_second GlobalConcurrencyLimit#slot_decay_per_second}
  */
  readonly slotDecayPerSecond?: number;
  /**
  * Workspace ID (UUID)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.2/docs/resources/global_concurrency_limit#workspace_id GlobalConcurrencyLimit#workspace_id}
  */
  readonly workspaceId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.2/docs/resources/global_concurrency_limit prefect_global_concurrency_limit}
*/
export class GlobalConcurrencyLimit extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prefect_global_concurrency_limit";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GlobalConcurrencyLimit resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GlobalConcurrencyLimit to import
  * @param importFromId The id of the existing GlobalConcurrencyLimit that should be imported. Refer to the {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.2/docs/resources/global_concurrency_limit#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GlobalConcurrencyLimit to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prefect_global_concurrency_limit", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.2/docs/resources/global_concurrency_limit prefect_global_concurrency_limit} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GlobalConcurrencyLimitConfig
  */
  public constructor(scope: Construct, id: string, config: GlobalConcurrencyLimitConfig) {
    super(scope, id, {
      terraformResourceType: 'prefect_global_concurrency_limit',
      terraformGeneratorMetadata: {
        providerName: 'prefect',
        providerVersion: '2.90.2',
        providerVersionConstraint: '2.90.2'
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
    this._active = config.active;
    this._activeSlots = config.activeSlots;
    this._limit = config.limit;
    this._name = config.name;
    this._slotDecayPerSecond = config.slotDecayPerSecond;
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

  // active - computed: true, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // active_slots - computed: true, optional: true, required: false
  private _activeSlots?: number; 
  public get activeSlots() {
    return this.getNumberAttribute('active_slots');
  }
  public set activeSlots(value: number) {
    this._activeSlots = value;
  }
  public resetActiveSlots() {
    this._activeSlots = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeSlotsInput() {
    return this._activeSlots;
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // limit - computed: false, optional: false, required: true
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
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

  // slot_decay_per_second - computed: true, optional: true, required: false
  private _slotDecayPerSecond?: number; 
  public get slotDecayPerSecond() {
    return this.getNumberAttribute('slot_decay_per_second');
  }
  public set slotDecayPerSecond(value: number) {
    this._slotDecayPerSecond = value;
  }
  public resetSlotDecayPerSecond() {
    this._slotDecayPerSecond = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotDecayPerSecondInput() {
    return this._slotDecayPerSecond;
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
      active: cdktf.booleanToTerraform(this._active),
      active_slots: cdktf.numberToTerraform(this._activeSlots),
      limit: cdktf.numberToTerraform(this._limit),
      name: cdktf.stringToTerraform(this._name),
      slot_decay_per_second: cdktf.numberToTerraform(this._slotDecayPerSecond),
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
      active: {
        value: cdktf.booleanToHclTerraform(this._active),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      active_slots: {
        value: cdktf.numberToHclTerraform(this._activeSlots),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      limit: {
        value: cdktf.numberToHclTerraform(this._limit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_decay_per_second: {
        value: cdktf.numberToHclTerraform(this._slotDecayPerSecond),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
