// https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/data-sources/analytics_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataBiganimalAnalyticsClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Allowed IP ranges.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/data-sources/analytics_cluster#allowed_ip_ranges DataBiganimalAnalyticsCluster#allowed_ip_ranges}
  */
  readonly allowedIpRanges?: DataBiganimalAnalyticsClusterAllowedIpRanges[] | cdktf.IResolvable;
  /**
  * Backup retention period. For example, "7d", "2w", or "3m".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/data-sources/analytics_cluster#backup_retention_period DataBiganimalAnalyticsCluster#backup_retention_period}
  */
  readonly backupRetentionPeriod?: string;
  /**
  * Backup schedule time in 24 hour cron expression format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/data-sources/analytics_cluster#backup_schedule_time DataBiganimalAnalyticsCluster#backup_schedule_time}
  */
  readonly backupScheduleTime?: string;
  /**
  * Cluster ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/data-sources/analytics_cluster#cluster_id DataBiganimalAnalyticsCluster#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Is authentication handled by the cloud service provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/data-sources/analytics_cluster#csp_auth DataBiganimalAnalyticsCluster#csp_auth}
  */
  readonly cspAuth?: boolean | cdktf.IResolvable;
  /**
  * Custom maintenance window.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/data-sources/analytics_cluster#maintenance_window DataBiganimalAnalyticsCluster#maintenance_window}
  */
  readonly maintenanceWindow?: DataBiganimalAnalyticsClusterMaintenanceWindow;
  /**
  * Pause cluster. If true it will put the cluster on pause and set the phase as paused, if false it will resume the cluster and set the phase as healthy. Pausing a cluster allows you to save on compute costs without losing data or cluster configuration settings. While paused, clusters aren't upgraded or patched, but changes are applied when the cluster resumes. Pausing a high availability cluster shuts down all cluster nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/data-sources/analytics_cluster#pause DataBiganimalAnalyticsCluster#pause}
  */
  readonly pause?: boolean | cdktf.IResolvable;
  /**
  * Cloud provider subscription/account ID, need to be specified when cluster is deployed on BigAnimal's cloud account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/data-sources/analytics_cluster#pe_allowed_principal_ids DataBiganimalAnalyticsCluster#pe_allowed_principal_ids}
  */
  readonly peAllowedPrincipalIds?: string[];
  /**
  * BigAnimal Project ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/data-sources/analytics_cluster#project_id DataBiganimalAnalyticsCluster#project_id}
  */
  readonly projectId: string;
  /**
  * A Google Cloud Service Account is used for logs. If you leave this blank, then you will be unable to access log details for this cluster. Required when cluster is deployed on BigAnimal's cloud account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/data-sources/analytics_cluster#service_account_ids DataBiganimalAnalyticsCluster#service_account_ids}
  */
  readonly serviceAccountIds?: string[];
  /**
  * show tags associated with this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/data-sources/analytics_cluster#tags DataBiganimalAnalyticsCluster#tags}
  */
  readonly tags?: DataBiganimalAnalyticsClusterTags[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/data-sources/analytics_cluster#timeouts DataBiganimalAnalyticsCluster#timeouts}
  */
  readonly timeouts?: DataBiganimalAnalyticsClusterTimeouts;
}
export interface DataBiganimalAnalyticsClusterAllowedIpRanges {
  /**
  * CIDR block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/data-sources/analytics_cluster#cidr_block DataBiganimalAnalyticsCluster#cidr_block}
  */
  readonly cidrBlock: string;
  /**
  * Description of CIDR block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/data-sources/analytics_cluster#description DataBiganimalAnalyticsCluster#description}
  */
  readonly description?: string;
}

export function dataBiganimalAnalyticsClusterAllowedIpRangesToTerraform(struct?: DataBiganimalAnalyticsClusterAllowedIpRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr_block: cdktf.stringToTerraform(struct!.cidrBlock),
    description: cdktf.stringToTerraform(struct!.description),
  }
}


export function dataBiganimalAnalyticsClusterAllowedIpRangesToHclTerraform(struct?: DataBiganimalAnalyticsClusterAllowedIpRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr_block: {
      value: cdktf.stringToHclTerraform(struct!.cidrBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBiganimalAnalyticsClusterAllowedIpRangesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataBiganimalAnalyticsClusterAllowedIpRanges | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidrBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrBlock = this._cidrBlock;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBiganimalAnalyticsClusterAllowedIpRanges | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidrBlock = undefined;
      this._description = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidrBlock = value.cidrBlock;
      this._description = value.description;
    }
  }

  // cidr_block - computed: true, optional: false, required: true
  private _cidrBlock?: string; 
  public get cidrBlock() {
    return this.getStringAttribute('cidr_block');
  }
  public set cidrBlock(value: string) {
    this._cidrBlock = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrBlockInput() {
    return this._cidrBlock;
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
}

export class DataBiganimalAnalyticsClusterAllowedIpRangesList extends cdktf.ComplexList {
  public internalValue? : DataBiganimalAnalyticsClusterAllowedIpRanges[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataBiganimalAnalyticsClusterAllowedIpRangesOutputReference {
    return new DataBiganimalAnalyticsClusterAllowedIpRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBiganimalAnalyticsClusterMaintenanceWindow {
  /**
  * Is maintenance window enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/data-sources/analytics_cluster#is_enabled DataBiganimalAnalyticsCluster#is_enabled}
  */
  readonly isEnabled: boolean | cdktf.IResolvable;
  /**
  * The day of week, 0 represents Sunday, 1 is Monday, and so on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/data-sources/analytics_cluster#start_day DataBiganimalAnalyticsCluster#start_day}
  */
  readonly startDay?: number;
  /**
  * Start time. "hh:mm", for example: "23:59".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/data-sources/analytics_cluster#start_time DataBiganimalAnalyticsCluster#start_time}
  */
  readonly startTime?: string;
}

export function dataBiganimalAnalyticsClusterMaintenanceWindowToTerraform(struct?: DataBiganimalAnalyticsClusterMaintenanceWindow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    start_day: cdktf.numberToTerraform(struct!.startDay),
    start_time: cdktf.stringToTerraform(struct!.startTime),
  }
}


export function dataBiganimalAnalyticsClusterMaintenanceWindowToHclTerraform(struct?: DataBiganimalAnalyticsClusterMaintenanceWindow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    start_day: {
      value: cdktf.numberToHclTerraform(struct!.startDay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBiganimalAnalyticsClusterMaintenanceWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBiganimalAnalyticsClusterMaintenanceWindow | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._startDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.startDay = this._startDay;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBiganimalAnalyticsClusterMaintenanceWindow | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isEnabled = undefined;
      this._startDay = undefined;
      this._startTime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isEnabled = value.isEnabled;
      this._startDay = value.startDay;
      this._startTime = value.startTime;
    }
  }

  // is_enabled - computed: true, optional: false, required: true
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }

  // start_day - computed: true, optional: true, required: false
  private _startDay?: number; 
  public get startDay() {
    return this.getNumberAttribute('start_day');
  }
  public set startDay(value: number) {
    this._startDay = value;
  }
  public resetStartDay() {
    this._startDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startDayInput() {
    return this._startDay;
  }

  // start_time - computed: true, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }
}
export interface DataBiganimalAnalyticsClusterTags {
}

export function dataBiganimalAnalyticsClusterTagsToTerraform(struct?: DataBiganimalAnalyticsClusterTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBiganimalAnalyticsClusterTagsToHclTerraform(struct?: DataBiganimalAnalyticsClusterTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBiganimalAnalyticsClusterTagsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataBiganimalAnalyticsClusterTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBiganimalAnalyticsClusterTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // color - computed: true, optional: false, required: false
  public get color() {
    return this.getStringAttribute('color');
  }

  // tag_name - computed: true, optional: false, required: false
  public get tagName() {
    return this.getStringAttribute('tag_name');
  }
}

export class DataBiganimalAnalyticsClusterTagsList extends cdktf.ComplexList {
  public internalValue? : DataBiganimalAnalyticsClusterTags[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataBiganimalAnalyticsClusterTagsOutputReference {
    return new DataBiganimalAnalyticsClusterTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBiganimalAnalyticsClusterTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/data-sources/analytics_cluster#create DataBiganimalAnalyticsCluster#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/data-sources/analytics_cluster#delete DataBiganimalAnalyticsCluster#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/data-sources/analytics_cluster#update DataBiganimalAnalyticsCluster#update}
  */
  readonly update?: string;
}

export function dataBiganimalAnalyticsClusterTimeoutsToTerraform(struct?: DataBiganimalAnalyticsClusterTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function dataBiganimalAnalyticsClusterTimeoutsToHclTerraform(struct?: DataBiganimalAnalyticsClusterTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBiganimalAnalyticsClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBiganimalAnalyticsClusterTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBiganimalAnalyticsClusterTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/data-sources/analytics_cluster biganimal_analytics_cluster}
*/
export class DataBiganimalAnalyticsCluster extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "biganimal_analytics_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataBiganimalAnalyticsCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataBiganimalAnalyticsCluster to import
  * @param importFromId The id of the existing DataBiganimalAnalyticsCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/data-sources/analytics_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataBiganimalAnalyticsCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "biganimal_analytics_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/data-sources/analytics_cluster biganimal_analytics_cluster} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataBiganimalAnalyticsClusterConfig
  */
  public constructor(scope: Construct, id: string, config: DataBiganimalAnalyticsClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'biganimal_analytics_cluster',
      terraformGeneratorMetadata: {
        providerName: 'biganimal',
        providerVersion: '3.1.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowedIpRanges.internalValue = config.allowedIpRanges;
    this._backupRetentionPeriod = config.backupRetentionPeriod;
    this._backupScheduleTime = config.backupScheduleTime;
    this._clusterId = config.clusterId;
    this._cspAuth = config.cspAuth;
    this._maintenanceWindow.internalValue = config.maintenanceWindow;
    this._pause = config.pause;
    this._peAllowedPrincipalIds = config.peAllowedPrincipalIds;
    this._projectId = config.projectId;
    this._serviceAccountIds = config.serviceAccountIds;
    this._tags.internalValue = config.tags;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_ip_ranges - computed: true, optional: true, required: false
  private _allowedIpRanges = new DataBiganimalAnalyticsClusterAllowedIpRangesList(this, "allowed_ip_ranges", true);
  public get allowedIpRanges() {
    return this._allowedIpRanges;
  }
  public putAllowedIpRanges(value: DataBiganimalAnalyticsClusterAllowedIpRanges[] | cdktf.IResolvable) {
    this._allowedIpRanges.internalValue = value;
  }
  public resetAllowedIpRanges() {
    this._allowedIpRanges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedIpRangesInput() {
    return this._allowedIpRanges.internalValue;
  }

  // backup_retention_period - computed: true, optional: true, required: false
  private _backupRetentionPeriod?: string; 
  public get backupRetentionPeriod() {
    return this.getStringAttribute('backup_retention_period');
  }
  public set backupRetentionPeriod(value: string) {
    this._backupRetentionPeriod = value;
  }
  public resetBackupRetentionPeriod() {
    this._backupRetentionPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupRetentionPeriodInput() {
    return this._backupRetentionPeriod;
  }

  // backup_schedule_time - computed: true, optional: true, required: false
  private _backupScheduleTime?: string; 
  public get backupScheduleTime() {
    return this.getStringAttribute('backup_schedule_time');
  }
  public set backupScheduleTime(value: string) {
    this._backupScheduleTime = value;
  }
  public resetBackupScheduleTime() {
    this._backupScheduleTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupScheduleTimeInput() {
    return this._backupScheduleTime;
  }

  // cloud_provider - computed: true, optional: false, required: false
  public get cloudProvider() {
    return this.getStringAttribute('cloud_provider');
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

  // cluster_name - computed: true, optional: false, required: false
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }

  // connection_uri - computed: true, optional: false, required: false
  public get connectionUri() {
    return this.getStringAttribute('connection_uri');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // csp_auth - computed: true, optional: true, required: false
  private _cspAuth?: boolean | cdktf.IResolvable; 
  public get cspAuth() {
    return this.getBooleanAttribute('csp_auth');
  }
  public set cspAuth(value: boolean | cdktf.IResolvable) {
    this._cspAuth = value;
  }
  public resetCspAuth() {
    this._cspAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cspAuthInput() {
    return this._cspAuth;
  }

  // first_recoverability_point_at - computed: true, optional: false, required: false
  public get firstRecoverabilityPointAt() {
    return this.getStringAttribute('first_recoverability_point_at');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_type - computed: true, optional: false, required: false
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }

  // logs_url - computed: true, optional: false, required: false
  public get logsUrl() {
    return this.getStringAttribute('logs_url');
  }

  // maintenance_window - computed: true, optional: true, required: false
  private _maintenanceWindow = new DataBiganimalAnalyticsClusterMaintenanceWindowOutputReference(this, "maintenance_window");
  public get maintenanceWindow() {
    return this._maintenanceWindow;
  }
  public putMaintenanceWindow(value: DataBiganimalAnalyticsClusterMaintenanceWindow) {
    this._maintenanceWindow.internalValue = value;
  }
  public resetMaintenanceWindow() {
    this._maintenanceWindow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowInput() {
    return this._maintenanceWindow.internalValue;
  }

  // metrics_url - computed: true, optional: false, required: false
  public get metricsUrl() {
    return this.getStringAttribute('metrics_url');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // pause - computed: false, optional: true, required: false
  private _pause?: boolean | cdktf.IResolvable; 
  public get pause() {
    return this.getBooleanAttribute('pause');
  }
  public set pause(value: boolean | cdktf.IResolvable) {
    this._pause = value;
  }
  public resetPause() {
    this._pause = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pauseInput() {
    return this._pause;
  }

  // pe_allowed_principal_ids - computed: true, optional: true, required: false
  private _peAllowedPrincipalIds?: string[]; 
  public get peAllowedPrincipalIds() {
    return cdktf.Fn.tolist(this.getListAttribute('pe_allowed_principal_ids'));
  }
  public set peAllowedPrincipalIds(value: string[]) {
    this._peAllowedPrincipalIds = value;
  }
  public resetPeAllowedPrincipalIds() {
    this._peAllowedPrincipalIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peAllowedPrincipalIdsInput() {
    return this._peAllowedPrincipalIds;
  }

  // pg_type - computed: true, optional: false, required: false
  public get pgType() {
    return this.getStringAttribute('pg_type');
  }

  // pg_version - computed: true, optional: false, required: false
  public get pgVersion() {
    return this.getStringAttribute('pg_version');
  }

  // phase - computed: true, optional: false, required: false
  public get phase() {
    return this.getStringAttribute('phase');
  }

  // private_link_service_alias - computed: true, optional: false, required: false
  public get privateLinkServiceAlias() {
    return this.getStringAttribute('private_link_service_alias');
  }

  // private_link_service_name - computed: true, optional: false, required: false
  public get privateLinkServiceName() {
    return this.getStringAttribute('private_link_service_name');
  }

  // private_networking - computed: true, optional: false, required: false
  public get privateNetworking() {
    return this.getBooleanAttribute('private_networking');
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

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // resizing_pvc - computed: true, optional: false, required: false
  public get resizingPvc() {
    return this.getListAttribute('resizing_pvc');
  }

  // service_account_ids - computed: true, optional: true, required: false
  private _serviceAccountIds?: string[]; 
  public get serviceAccountIds() {
    return cdktf.Fn.tolist(this.getListAttribute('service_account_ids'));
  }
  public set serviceAccountIds(value: string[]) {
    this._serviceAccountIds = value;
  }
  public resetServiceAccountIds() {
    this._serviceAccountIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountIdsInput() {
    return this._serviceAccountIds;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new DataBiganimalAnalyticsClusterTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DataBiganimalAnalyticsClusterTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataBiganimalAnalyticsClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataBiganimalAnalyticsClusterTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allowed_ip_ranges: cdktf.listMapper(dataBiganimalAnalyticsClusterAllowedIpRangesToTerraform, false)(this._allowedIpRanges.internalValue),
      backup_retention_period: cdktf.stringToTerraform(this._backupRetentionPeriod),
      backup_schedule_time: cdktf.stringToTerraform(this._backupScheduleTime),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      csp_auth: cdktf.booleanToTerraform(this._cspAuth),
      maintenance_window: dataBiganimalAnalyticsClusterMaintenanceWindowToTerraform(this._maintenanceWindow.internalValue),
      pause: cdktf.booleanToTerraform(this._pause),
      pe_allowed_principal_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._peAllowedPrincipalIds),
      project_id: cdktf.stringToTerraform(this._projectId),
      service_account_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._serviceAccountIds),
      tags: cdktf.listMapper(dataBiganimalAnalyticsClusterTagsToTerraform, false)(this._tags.internalValue),
      timeouts: dataBiganimalAnalyticsClusterTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowed_ip_ranges: {
        value: cdktf.listMapperHcl(dataBiganimalAnalyticsClusterAllowedIpRangesToHclTerraform, false)(this._allowedIpRanges.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataBiganimalAnalyticsClusterAllowedIpRangesList",
      },
      backup_retention_period: {
        value: cdktf.stringToHclTerraform(this._backupRetentionPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_schedule_time: {
        value: cdktf.stringToHclTerraform(this._backupScheduleTime),
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
      csp_auth: {
        value: cdktf.booleanToHclTerraform(this._cspAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      maintenance_window: {
        value: dataBiganimalAnalyticsClusterMaintenanceWindowToHclTerraform(this._maintenanceWindow.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataBiganimalAnalyticsClusterMaintenanceWindow",
      },
      pause: {
        value: cdktf.booleanToHclTerraform(this._pause),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      pe_allowed_principal_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._peAllowedPrincipalIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_account_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._serviceAccountIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tags: {
        value: cdktf.listMapperHcl(dataBiganimalAnalyticsClusterTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataBiganimalAnalyticsClusterTagsList",
      },
      timeouts: {
        value: dataBiganimalAnalyticsClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataBiganimalAnalyticsClusterTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
