// https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.5.3/docs/resources/backup_schedule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BackupScheduleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The GUID4 ID of the bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.5.3/docs/resources/backup_schedule#bucket_id BackupSchedule#bucket_id}
  */
  readonly bucketId: string;
  /**
  * The GUID4 ID of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.5.3/docs/resources/backup_schedule#cluster_id BackupSchedule#cluster_id}
  */
  readonly clusterId: string;
  /**
  * The GUID4 ID of the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.5.3/docs/resources/backup_schedule#organization_id BackupSchedule#organization_id}
  */
  readonly organizationId: string;
  /**
  * The GUID4 ID of the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.5.3/docs/resources/backup_schedule#project_id BackupSchedule#project_id}
  */
  readonly projectId: string;
  /**
  * Type of the backup schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.5.3/docs/resources/backup_schedule#type BackupSchedule#type}
  */
  readonly type: string;
  /**
  * Schedule a full backup once a week with regular incrementals.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.5.3/docs/resources/backup_schedule#weekly_schedule BackupSchedule#weekly_schedule}
  */
  readonly weeklySchedule: BackupScheduleWeeklySchedule;
}
export interface BackupScheduleWeeklySchedule {
  /**
  * Optimize backup retention to reduce total cost of ownership (TCO). This gives the option to keep all but the last backup cycle of the month for thirty days; the last cycle will be kept for the defined retention period.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.5.3/docs/resources/backup_schedule#cost_optimized_retention BackupSchedule#cost_optimized_retention}
  */
  readonly costOptimizedRetention: boolean | cdktf.IResolvable;
  /**
  * Day of the week for the backup. Values can be "sunday", "monday", "tuesday", "wednesday", "thursday", "friday", or "saturday"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.5.3/docs/resources/backup_schedule#day_of_week BackupSchedule#day_of_week}
  */
  readonly dayOfWeek: string;
  /**
  * Interval in hours for incremental backup. Integer value between 1 and 24.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.5.3/docs/resources/backup_schedule#incremental_every BackupSchedule#incremental_every}
  */
  readonly incrementalEvery: number;
  /**
  * Retention time in days. For example: 30days, 1year, 5years.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.5.3/docs/resources/backup_schedule#retention_time BackupSchedule#retention_time}
  */
  readonly retentionTime: string;
  /**
  * The starting hour (in 24-Hour format). Integer value between 0 and 23.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.5.3/docs/resources/backup_schedule#start_at BackupSchedule#start_at}
  */
  readonly startAt: number;
}

export function backupScheduleWeeklyScheduleToTerraform(struct?: BackupScheduleWeeklySchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cost_optimized_retention: cdktf.booleanToTerraform(struct!.costOptimizedRetention),
    day_of_week: cdktf.stringToTerraform(struct!.dayOfWeek),
    incremental_every: cdktf.numberToTerraform(struct!.incrementalEvery),
    retention_time: cdktf.stringToTerraform(struct!.retentionTime),
    start_at: cdktf.numberToTerraform(struct!.startAt),
  }
}


export function backupScheduleWeeklyScheduleToHclTerraform(struct?: BackupScheduleWeeklySchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cost_optimized_retention: {
      value: cdktf.booleanToHclTerraform(struct!.costOptimizedRetention),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    day_of_week: {
      value: cdktf.stringToHclTerraform(struct!.dayOfWeek),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    incremental_every: {
      value: cdktf.numberToHclTerraform(struct!.incrementalEvery),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retention_time: {
      value: cdktf.stringToHclTerraform(struct!.retentionTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_at: {
      value: cdktf.numberToHclTerraform(struct!.startAt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupScheduleWeeklyScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BackupScheduleWeeklySchedule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._costOptimizedRetention !== undefined) {
      hasAnyValues = true;
      internalValueResult.costOptimizedRetention = this._costOptimizedRetention;
    }
    if (this._dayOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfWeek = this._dayOfWeek;
    }
    if (this._incrementalEvery !== undefined) {
      hasAnyValues = true;
      internalValueResult.incrementalEvery = this._incrementalEvery;
    }
    if (this._retentionTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionTime = this._retentionTime;
    }
    if (this._startAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.startAt = this._startAt;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupScheduleWeeklySchedule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._costOptimizedRetention = undefined;
      this._dayOfWeek = undefined;
      this._incrementalEvery = undefined;
      this._retentionTime = undefined;
      this._startAt = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._costOptimizedRetention = value.costOptimizedRetention;
      this._dayOfWeek = value.dayOfWeek;
      this._incrementalEvery = value.incrementalEvery;
      this._retentionTime = value.retentionTime;
      this._startAt = value.startAt;
    }
  }

  // cost_optimized_retention - computed: false, optional: false, required: true
  private _costOptimizedRetention?: boolean | cdktf.IResolvable; 
  public get costOptimizedRetention() {
    return this.getBooleanAttribute('cost_optimized_retention');
  }
  public set costOptimizedRetention(value: boolean | cdktf.IResolvable) {
    this._costOptimizedRetention = value;
  }
  // Temporarily expose input value. Use with caution.
  public get costOptimizedRetentionInput() {
    return this._costOptimizedRetention;
  }

  // day_of_week - computed: false, optional: false, required: true
  private _dayOfWeek?: string; 
  public get dayOfWeek() {
    return this.getStringAttribute('day_of_week');
  }
  public set dayOfWeek(value: string) {
    this._dayOfWeek = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekInput() {
    return this._dayOfWeek;
  }

  // incremental_every - computed: false, optional: false, required: true
  private _incrementalEvery?: number; 
  public get incrementalEvery() {
    return this.getNumberAttribute('incremental_every');
  }
  public set incrementalEvery(value: number) {
    this._incrementalEvery = value;
  }
  // Temporarily expose input value. Use with caution.
  public get incrementalEveryInput() {
    return this._incrementalEvery;
  }

  // retention_time - computed: false, optional: false, required: true
  private _retentionTime?: string; 
  public get retentionTime() {
    return this.getStringAttribute('retention_time');
  }
  public set retentionTime(value: string) {
    this._retentionTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionTimeInput() {
    return this._retentionTime;
  }

  // start_at - computed: false, optional: false, required: true
  private _startAt?: number; 
  public get startAt() {
    return this.getNumberAttribute('start_at');
  }
  public set startAt(value: number) {
    this._startAt = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startAtInput() {
    return this._startAt;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.5.3/docs/resources/backup_schedule couchbase-capella_backup_schedule}
*/
export class BackupSchedule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "couchbase-capella_backup_schedule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BackupSchedule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BackupSchedule to import
  * @param importFromId The id of the existing BackupSchedule that should be imported. Refer to the {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.5.3/docs/resources/backup_schedule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BackupSchedule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "couchbase-capella_backup_schedule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.5.3/docs/resources/backup_schedule couchbase-capella_backup_schedule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BackupScheduleConfig
  */
  public constructor(scope: Construct, id: string, config: BackupScheduleConfig) {
    super(scope, id, {
      terraformResourceType: 'couchbase-capella_backup_schedule',
      terraformGeneratorMetadata: {
        providerName: 'couchbase-capella',
        providerVersion: '1.5.3',
        providerVersionConstraint: '1.5.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bucketId = config.bucketId;
    this._clusterId = config.clusterId;
    this._organizationId = config.organizationId;
    this._projectId = config.projectId;
    this._type = config.type;
    this._weeklySchedule.internalValue = config.weeklySchedule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bucket_id - computed: false, optional: false, required: true
  private _bucketId?: string; 
  public get bucketId() {
    return this.getStringAttribute('bucket_id');
  }
  public set bucketId(value: string) {
    this._bucketId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketIdInput() {
    return this._bucketId;
  }

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // organization_id - computed: false, optional: false, required: true
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // weekly_schedule - computed: false, optional: false, required: true
  private _weeklySchedule = new BackupScheduleWeeklyScheduleOutputReference(this, "weekly_schedule");
  public get weeklySchedule() {
    return this._weeklySchedule;
  }
  public putWeeklySchedule(value: BackupScheduleWeeklySchedule) {
    this._weeklySchedule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weeklyScheduleInput() {
    return this._weeklySchedule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket_id: cdktf.stringToTerraform(this._bucketId),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      organization_id: cdktf.stringToTerraform(this._organizationId),
      project_id: cdktf.stringToTerraform(this._projectId),
      type: cdktf.stringToTerraform(this._type),
      weekly_schedule: backupScheduleWeeklyScheduleToTerraform(this._weeklySchedule.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bucket_id: {
        value: cdktf.stringToHclTerraform(this._bucketId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization_id: {
        value: cdktf.stringToHclTerraform(this._organizationId),
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
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      weekly_schedule: {
        value: backupScheduleWeeklyScheduleToHclTerraform(this._weeklySchedule.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BackupScheduleWeeklySchedule",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
