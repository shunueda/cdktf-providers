// https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/snapshotpolicy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SnapshotpolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The threshold of good snapshots which are not failed/bad for compliance to change from warning to critical. (Update Supported)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/snapshotpolicy#compliance_count_critical Snapshotpolicy#compliance_count_critical}
  */
  readonly complianceCountCritical?: number;
  /**
  * The threshold of good snapshots which are not failed/bad for compliance to change from normal to warning. (Update Supported)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/snapshotpolicy#compliance_count_warning Snapshotpolicy#compliance_count_warning}
  */
  readonly complianceCountWarning?: number;
  /**
  * The interval between snapshots Enumeration values: 10 Minutes, 12 Minutes, 15 Minutes, 20 Minutes, 30 Minutes, 1 Hour, 2 Hours, 3 Hours, 4 Hours, 6 Hours, 8 Hours, 12 Hours, 1 Day, 7 Days. (Update Supported)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/snapshotpolicy#interval Snapshotpolicy#interval}
  */
  readonly interval?: string;
  /**
  * Number of minutes between each policy execution
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/snapshotpolicy#interval_minutes Snapshotpolicy#interval_minutes}
  */
  readonly intervalMinutes?: number;
  /**
  * The last time that the snapshot policy was run
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/snapshotpolicy#last_time_used Snapshotpolicy#last_time_used}
  */
  readonly lastTimeUsed?: string;
  /**
  * Number of minutes after 00:00 on Monday morning that the policy will execute. (Update Supported)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/snapshotpolicy#offset_minutes Snapshotpolicy#offset_minutes}
  */
  readonly offsetMinutes?: number;
  /**
  * The name of the cloud provider associated with this policy. Only applies to cloud policies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/snapshotpolicy#provider_name Snapshotpolicy#provider_name}
  */
  readonly providerName?: string;
  /**
  * The number of days that snapshots will be retained in the cloud for. Only applies to cloud policies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/snapshotpolicy#retention_days Snapshotpolicy#retention_days}
  */
  readonly retentionDays?: number;
  /**
  * Set if the snapshot policy creates secure snapshots. (Update Supported)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/snapshotpolicy#secure Snapshotpolicy#secure}
  */
  readonly secure?: boolean | cdktf.IResolvable;
  /**
  * Number of snapshots that will be taken before the oldest ones are no longer required. (Update Supported)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/snapshotpolicy#snapshot_count Snapshotpolicy#snapshot_count}
  */
  readonly snapshotCount?: number;
  /**
  * Name of the snapshot policy. Only alphanumeric characters, underscores ( _ ), and hyphens (-) are allowed and max length can be 32 characters. (Update Supported)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/snapshotpolicy#snapshot_policy_name Snapshotpolicy#snapshot_policy_name}
  */
  readonly snapshotPolicyName: string;
  /**
  * The storage groups associated with the snapshot policy. This field cannot be set during create and is only valid for Edit/Update.If user wants to delete the snapshot policy all associated storage groups will also be unlinked from the Snapshot Policy. (Update Supported)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/snapshotpolicy#storage_groups Snapshotpolicy#storage_groups}
  */
  readonly storageGroups?: string[];
  /**
  * Set if the snapshot policy has been suspended
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/snapshotpolicy#suspended Snapshotpolicy#suspended}
  */
  readonly suspended?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/snapshotpolicy powermax_snapshotpolicy}
*/
export class Snapshotpolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powermax_snapshotpolicy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Snapshotpolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Snapshotpolicy to import
  * @param importFromId The id of the existing Snapshotpolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/snapshotpolicy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Snapshotpolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powermax_snapshotpolicy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/snapshotpolicy powermax_snapshotpolicy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SnapshotpolicyConfig
  */
  public constructor(scope: Construct, id: string, config: SnapshotpolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'powermax_snapshotpolicy',
      terraformGeneratorMetadata: {
        providerName: 'powermax',
        providerVersion: '1.0.3',
        providerVersionConstraint: '1.0.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._complianceCountCritical = config.complianceCountCritical;
    this._complianceCountWarning = config.complianceCountWarning;
    this._interval = config.interval;
    this._intervalMinutes = config.intervalMinutes;
    this._lastTimeUsed = config.lastTimeUsed;
    this._offsetMinutes = config.offsetMinutes;
    this._providerName = config.providerName;
    this._retentionDays = config.retentionDays;
    this._secure = config.secure;
    this._snapshotCount = config.snapshotCount;
    this._snapshotPolicyName = config.snapshotPolicyName;
    this._storageGroups = config.storageGroups;
    this._suspended = config.suspended;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compliance_count_critical - computed: true, optional: true, required: false
  private _complianceCountCritical?: number; 
  public get complianceCountCritical() {
    return this.getNumberAttribute('compliance_count_critical');
  }
  public set complianceCountCritical(value: number) {
    this._complianceCountCritical = value;
  }
  public resetComplianceCountCritical() {
    this._complianceCountCritical = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get complianceCountCriticalInput() {
    return this._complianceCountCritical;
  }

  // compliance_count_warning - computed: true, optional: true, required: false
  private _complianceCountWarning?: number; 
  public get complianceCountWarning() {
    return this.getNumberAttribute('compliance_count_warning');
  }
  public set complianceCountWarning(value: number) {
    this._complianceCountWarning = value;
  }
  public resetComplianceCountWarning() {
    this._complianceCountWarning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get complianceCountWarningInput() {
    return this._complianceCountWarning;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interval - computed: true, optional: true, required: false
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // interval_minutes - computed: true, optional: true, required: false
  private _intervalMinutes?: number; 
  public get intervalMinutes() {
    return this.getNumberAttribute('interval_minutes');
  }
  public set intervalMinutes(value: number) {
    this._intervalMinutes = value;
  }
  public resetIntervalMinutes() {
    this._intervalMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalMinutesInput() {
    return this._intervalMinutes;
  }

  // last_time_used - computed: true, optional: true, required: false
  private _lastTimeUsed?: string; 
  public get lastTimeUsed() {
    return this.getStringAttribute('last_time_used');
  }
  public set lastTimeUsed(value: string) {
    this._lastTimeUsed = value;
  }
  public resetLastTimeUsed() {
    this._lastTimeUsed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastTimeUsedInput() {
    return this._lastTimeUsed;
  }

  // offset_minutes - computed: true, optional: true, required: false
  private _offsetMinutes?: number; 
  public get offsetMinutes() {
    return this.getNumberAttribute('offset_minutes');
  }
  public set offsetMinutes(value: number) {
    this._offsetMinutes = value;
  }
  public resetOffsetMinutes() {
    this._offsetMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetMinutesInput() {
    return this._offsetMinutes;
  }

  // provider_name - computed: true, optional: true, required: false
  private _providerName?: string; 
  public get providerName() {
    return this.getStringAttribute('provider_name');
  }
  public set providerName(value: string) {
    this._providerName = value;
  }
  public resetProviderName() {
    this._providerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerNameInput() {
    return this._providerName;
  }

  // retention_days - computed: true, optional: true, required: false
  private _retentionDays?: number; 
  public get retentionDays() {
    return this.getNumberAttribute('retention_days');
  }
  public set retentionDays(value: number) {
    this._retentionDays = value;
  }
  public resetRetentionDays() {
    this._retentionDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionDaysInput() {
    return this._retentionDays;
  }

  // secure - computed: true, optional: true, required: false
  private _secure?: boolean | cdktf.IResolvable; 
  public get secure() {
    return this.getBooleanAttribute('secure');
  }
  public set secure(value: boolean | cdktf.IResolvable) {
    this._secure = value;
  }
  public resetSecure() {
    this._secure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureInput() {
    return this._secure;
  }

  // snapshot_count - computed: true, optional: true, required: false
  private _snapshotCount?: number; 
  public get snapshotCount() {
    return this.getNumberAttribute('snapshot_count');
  }
  public set snapshotCount(value: number) {
    this._snapshotCount = value;
  }
  public resetSnapshotCount() {
    this._snapshotCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotCountInput() {
    return this._snapshotCount;
  }

  // snapshot_policy_name - computed: false, optional: false, required: true
  private _snapshotPolicyName?: string; 
  public get snapshotPolicyName() {
    return this.getStringAttribute('snapshot_policy_name');
  }
  public set snapshotPolicyName(value: string) {
    this._snapshotPolicyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotPolicyNameInput() {
    return this._snapshotPolicyName;
  }

  // storage_group_count - computed: true, optional: false, required: false
  public get storageGroupCount() {
    return this.getNumberAttribute('storage_group_count');
  }

  // storage_groups - computed: true, optional: true, required: false
  private _storageGroups?: string[]; 
  public get storageGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('storage_groups'));
  }
  public set storageGroups(value: string[]) {
    this._storageGroups = value;
  }
  public resetStorageGroups() {
    this._storageGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageGroupsInput() {
    return this._storageGroups;
  }

  // suspended - computed: true, optional: true, required: false
  private _suspended?: boolean | cdktf.IResolvable; 
  public get suspended() {
    return this.getBooleanAttribute('suspended');
  }
  public set suspended(value: boolean | cdktf.IResolvable) {
    this._suspended = value;
  }
  public resetSuspended() {
    this._suspended = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suspendedInput() {
    return this._suspended;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compliance_count_critical: cdktf.numberToTerraform(this._complianceCountCritical),
      compliance_count_warning: cdktf.numberToTerraform(this._complianceCountWarning),
      interval: cdktf.stringToTerraform(this._interval),
      interval_minutes: cdktf.numberToTerraform(this._intervalMinutes),
      last_time_used: cdktf.stringToTerraform(this._lastTimeUsed),
      offset_minutes: cdktf.numberToTerraform(this._offsetMinutes),
      provider_name: cdktf.stringToTerraform(this._providerName),
      retention_days: cdktf.numberToTerraform(this._retentionDays),
      secure: cdktf.booleanToTerraform(this._secure),
      snapshot_count: cdktf.numberToTerraform(this._snapshotCount),
      snapshot_policy_name: cdktf.stringToTerraform(this._snapshotPolicyName),
      storage_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._storageGroups),
      suspended: cdktf.booleanToTerraform(this._suspended),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compliance_count_critical: {
        value: cdktf.numberToHclTerraform(this._complianceCountCritical),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      compliance_count_warning: {
        value: cdktf.numberToHclTerraform(this._complianceCountWarning),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      interval: {
        value: cdktf.stringToHclTerraform(this._interval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interval_minutes: {
        value: cdktf.numberToHclTerraform(this._intervalMinutes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      last_time_used: {
        value: cdktf.stringToHclTerraform(this._lastTimeUsed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      offset_minutes: {
        value: cdktf.numberToHclTerraform(this._offsetMinutes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      provider_name: {
        value: cdktf.stringToHclTerraform(this._providerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retention_days: {
        value: cdktf.numberToHclTerraform(this._retentionDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      secure: {
        value: cdktf.booleanToHclTerraform(this._secure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      snapshot_count: {
        value: cdktf.numberToHclTerraform(this._snapshotCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      snapshot_policy_name: {
        value: cdktf.stringToHclTerraform(this._snapshotPolicyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._storageGroups),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      suspended: {
        value: cdktf.booleanToHclTerraform(this._suspended),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
