// https://registry.terraform.io/providers/magalucloud/mgc/0.40.1/docs/resources/block_storage_schedule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BlockStorageScheduleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the snapshot schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.1/docs/resources/block_storage_schedule#description BlockStorageSchedule#description}
  */
  readonly description?: string;
  /**
  * The name of the snapshot schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.1/docs/resources/block_storage_schedule#name BlockStorageSchedule#name}
  */
  readonly name: string;
  /**
  * Start time for daily snapshot creation (HH:MM:SS format).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.1/docs/resources/block_storage_schedule#policy_frequency_daily_start_time BlockStorageSchedule#policy_frequency_daily_start_time}
  */
  readonly policyFrequencyDailyStartTime: string;
  /**
  * Number of days to retain snapshots.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.1/docs/resources/block_storage_schedule#policy_retention_in_days BlockStorageSchedule#policy_retention_in_days}
  */
  readonly policyRetentionInDays: number;
  /**
  * Type of snapshot to create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.1/docs/resources/block_storage_schedule#snapshot_type BlockStorageSchedule#snapshot_type}
  */
  readonly snapshotType: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.1/docs/resources/block_storage_schedule mgc_block_storage_schedule}
*/
export class BlockStorageSchedule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mgc_block_storage_schedule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BlockStorageSchedule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BlockStorageSchedule to import
  * @param importFromId The id of the existing BlockStorageSchedule that should be imported. Refer to the {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.1/docs/resources/block_storage_schedule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BlockStorageSchedule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mgc_block_storage_schedule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.1/docs/resources/block_storage_schedule mgc_block_storage_schedule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BlockStorageScheduleConfig
  */
  public constructor(scope: Construct, id: string, config: BlockStorageScheduleConfig) {
    super(scope, id, {
      terraformResourceType: 'mgc_block_storage_schedule',
      terraformGeneratorMetadata: {
        providerName: 'mgc',
        providerVersion: '0.40.1',
        providerVersionConstraint: '0.40.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._name = config.name;
    this._policyFrequencyDailyStartTime = config.policyFrequencyDailyStartTime;
    this._policyRetentionInDays = config.policyRetentionInDays;
    this._snapshotType = config.snapshotType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // policy_frequency_daily_start_time - computed: false, optional: false, required: true
  private _policyFrequencyDailyStartTime?: string; 
  public get policyFrequencyDailyStartTime() {
    return this.getStringAttribute('policy_frequency_daily_start_time');
  }
  public set policyFrequencyDailyStartTime(value: string) {
    this._policyFrequencyDailyStartTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyFrequencyDailyStartTimeInput() {
    return this._policyFrequencyDailyStartTime;
  }

  // policy_retention_in_days - computed: false, optional: false, required: true
  private _policyRetentionInDays?: number; 
  public get policyRetentionInDays() {
    return this.getNumberAttribute('policy_retention_in_days');
  }
  public set policyRetentionInDays(value: number) {
    this._policyRetentionInDays = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyRetentionInDaysInput() {
    return this._policyRetentionInDays;
  }

  // snapshot_type - computed: false, optional: false, required: true
  private _snapshotType?: string; 
  public get snapshotType() {
    return this.getStringAttribute('snapshot_type');
  }
  public set snapshotType(value: string) {
    this._snapshotType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotTypeInput() {
    return this._snapshotType;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // volumes - computed: true, optional: false, required: false
  public get volumes() {
    return this.getListAttribute('volumes');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      policy_frequency_daily_start_time: cdktf.stringToTerraform(this._policyFrequencyDailyStartTime),
      policy_retention_in_days: cdktf.numberToTerraform(this._policyRetentionInDays),
      snapshot_type: cdktf.stringToTerraform(this._snapshotType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      policy_frequency_daily_start_time: {
        value: cdktf.stringToHclTerraform(this._policyFrequencyDailyStartTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_retention_in_days: {
        value: cdktf.numberToHclTerraform(this._policyRetentionInDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      snapshot_type: {
        value: cdktf.stringToHclTerraform(this._snapshotType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
