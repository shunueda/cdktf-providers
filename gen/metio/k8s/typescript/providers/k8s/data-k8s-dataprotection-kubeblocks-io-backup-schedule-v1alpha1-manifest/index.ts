// https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/dataprotection_kubeblocks_io_backup_schedule_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SDataprotectionKubeblocksIoBackupScheduleV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/dataprotection_kubeblocks_io_backup_schedule_v1alpha1_manifest#metadata DataK8SDataprotectionKubeblocksIoBackupScheduleV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SDataprotectionKubeblocksIoBackupScheduleV1Alpha1ManifestMetadata;
  /**
  * BackupScheduleSpec defines the desired state of BackupSchedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/dataprotection_kubeblocks_io_backup_schedule_v1alpha1_manifest#spec DataK8SDataprotectionKubeblocksIoBackupScheduleV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SDataprotectionKubeblocksIoBackupScheduleV1Alpha1ManifestSpec;
}
export interface DataK8SDataprotectionKubeblocksIoBackupScheduleV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/dataprotection_kubeblocks_io_backup_schedule_v1alpha1_manifest#annotations DataK8SDataprotectionKubeblocksIoBackupScheduleV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/dataprotection_kubeblocks_io_backup_schedule_v1alpha1_manifest#labels DataK8SDataprotectionKubeblocksIoBackupScheduleV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/dataprotection_kubeblocks_io_backup_schedule_v1alpha1_manifest#name DataK8SDataprotectionKubeblocksIoBackupScheduleV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/dataprotection_kubeblocks_io_backup_schedule_v1alpha1_manifest#namespace DataK8SDataprotectionKubeblocksIoBackupScheduleV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SDataprotectionKubeblocksIoBackupScheduleV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupScheduleV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SDataprotectionKubeblocksIoBackupScheduleV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupScheduleV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.annotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataprotectionKubeblocksIoBackupScheduleV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoBackupScheduleV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoBackupScheduleV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
      this._name = undefined;
      this._namespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._labels = value.labels;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}
export interface DataK8SDataprotectionKubeblocksIoBackupScheduleV1Alpha1ManifestSpecSchedules {
  /**
  * Specifies the backup method name that is defined in backupPolicy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/dataprotection_kubeblocks_io_backup_schedule_v1alpha1_manifest#backup_method DataK8SDataprotectionKubeblocksIoBackupScheduleV1Alpha1Manifest#backup_method}
  */
  readonly backupMethod: string;
  /**
  * Specifies the cron expression for the schedule. The timezone is in UTC. see https://en.wikipedia.org/wiki/Cron.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/dataprotection_kubeblocks_io_backup_schedule_v1alpha1_manifest#cron_expression DataK8SDataprotectionKubeblocksIoBackupScheduleV1Alpha1Manifest#cron_expression}
  */
  readonly cronExpression: string;
  /**
  * Specifies whether the backup schedule is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/dataprotection_kubeblocks_io_backup_schedule_v1alpha1_manifest#enabled DataK8SDataprotectionKubeblocksIoBackupScheduleV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Determines the duration for which the backup should be kept. KubeBlocks will remove all backups that are older than the RetentionPeriod. For example, RetentionPeriod of '30d' will keep only the backups of last 30 days. Sample duration format: - years: 2y - months: 6mo - days: 30d - hours: 12h - minutes: 30m You can also combine the above durations. For example: 30d12h30m
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/dataprotection_kubeblocks_io_backup_schedule_v1alpha1_manifest#retention_period DataK8SDataprotectionKubeblocksIoBackupScheduleV1Alpha1Manifest#retention_period}
  */
  readonly retentionPeriod?: string;
}

export function dataK8SDataprotectionKubeblocksIoBackupScheduleV1Alpha1ManifestSpecSchedulesToTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupScheduleV1Alpha1ManifestSpecSchedules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_method: cdktf.stringToTerraform(struct!.backupMethod),
    cron_expression: cdktf.stringToTerraform(struct!.cronExpression),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    retention_period: cdktf.stringToTerraform(struct!.retentionPeriod),
  }
}


export function dataK8SDataprotectionKubeblocksIoBackupScheduleV1Alpha1ManifestSpecSchedulesToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupScheduleV1Alpha1ManifestSpecSchedules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup_method: {
      value: cdktf.stringToHclTerraform(struct!.backupMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cron_expression: {
      value: cdktf.stringToHclTerraform(struct!.cronExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    retention_period: {
      value: cdktf.stringToHclTerraform(struct!.retentionPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataprotectionKubeblocksIoBackupScheduleV1Alpha1ManifestSpecSchedulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDataprotectionKubeblocksIoBackupScheduleV1Alpha1ManifestSpecSchedules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupMethod = this._backupMethod;
    }
    if (this._cronExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.cronExpression = this._cronExpression;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._retentionPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionPeriod = this._retentionPeriod;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoBackupScheduleV1Alpha1ManifestSpecSchedules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backupMethod = undefined;
      this._cronExpression = undefined;
      this._enabled = undefined;
      this._retentionPeriod = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backupMethod = value.backupMethod;
      this._cronExpression = value.cronExpression;
      this._enabled = value.enabled;
      this._retentionPeriod = value.retentionPeriod;
    }
  }

  // backup_method - computed: false, optional: false, required: true
  private _backupMethod?: string; 
  public get backupMethod() {
    return this.getStringAttribute('backup_method');
  }
  public set backupMethod(value: string) {
    this._backupMethod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupMethodInput() {
    return this._backupMethod;
  }

  // cron_expression - computed: false, optional: false, required: true
  private _cronExpression?: string; 
  public get cronExpression() {
    return this.getStringAttribute('cron_expression');
  }
  public set cronExpression(value: string) {
    this._cronExpression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cronExpressionInput() {
    return this._cronExpression;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // retention_period - computed: false, optional: true, required: false
  private _retentionPeriod?: string; 
  public get retentionPeriod() {
    return this.getStringAttribute('retention_period');
  }
  public set retentionPeriod(value: string) {
    this._retentionPeriod = value;
  }
  public resetRetentionPeriod() {
    this._retentionPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPeriodInput() {
    return this._retentionPeriod;
  }
}

export class DataK8SDataprotectionKubeblocksIoBackupScheduleV1Alpha1ManifestSpecSchedulesList extends cdktf.ComplexList {
  public internalValue? : DataK8SDataprotectionKubeblocksIoBackupScheduleV1Alpha1ManifestSpecSchedules[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDataprotectionKubeblocksIoBackupScheduleV1Alpha1ManifestSpecSchedulesOutputReference {
    return new DataK8SDataprotectionKubeblocksIoBackupScheduleV1Alpha1ManifestSpecSchedulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDataprotectionKubeblocksIoBackupScheduleV1Alpha1ManifestSpec {
  /**
  * Specifies the backupPolicy to be applied for the 'schedules'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/dataprotection_kubeblocks_io_backup_schedule_v1alpha1_manifest#backup_policy_name DataK8SDataprotectionKubeblocksIoBackupScheduleV1Alpha1Manifest#backup_policy_name}
  */
  readonly backupPolicyName: string;
  /**
  * Defines the list of backup schedules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/dataprotection_kubeblocks_io_backup_schedule_v1alpha1_manifest#schedules DataK8SDataprotectionKubeblocksIoBackupScheduleV1Alpha1Manifest#schedules}
  */
  readonly schedules: DataK8SDataprotectionKubeblocksIoBackupScheduleV1Alpha1ManifestSpecSchedules[] | cdktf.IResolvable;
  /**
  * Defines the deadline in minutes for starting the backup workload if it misses its scheduled time for any reason.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/dataprotection_kubeblocks_io_backup_schedule_v1alpha1_manifest#starting_deadline_minutes DataK8SDataprotectionKubeblocksIoBackupScheduleV1Alpha1Manifest#starting_deadline_minutes}
  */
  readonly startingDeadlineMinutes?: number;
}

export function dataK8SDataprotectionKubeblocksIoBackupScheduleV1Alpha1ManifestSpecToTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupScheduleV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_policy_name: cdktf.stringToTerraform(struct!.backupPolicyName),
    schedules: cdktf.listMapper(dataK8SDataprotectionKubeblocksIoBackupScheduleV1Alpha1ManifestSpecSchedulesToTerraform, false)(struct!.schedules),
    starting_deadline_minutes: cdktf.numberToTerraform(struct!.startingDeadlineMinutes),
  }
}


export function dataK8SDataprotectionKubeblocksIoBackupScheduleV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupScheduleV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup_policy_name: {
      value: cdktf.stringToHclTerraform(struct!.backupPolicyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schedules: {
      value: cdktf.listMapperHcl(dataK8SDataprotectionKubeblocksIoBackupScheduleV1Alpha1ManifestSpecSchedulesToHclTerraform, false)(struct!.schedules),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDataprotectionKubeblocksIoBackupScheduleV1Alpha1ManifestSpecSchedulesList",
    },
    starting_deadline_minutes: {
      value: cdktf.numberToHclTerraform(struct!.startingDeadlineMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataprotectionKubeblocksIoBackupScheduleV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoBackupScheduleV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupPolicyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupPolicyName = this._backupPolicyName;
    }
    if (this._schedules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedules = this._schedules?.internalValue;
    }
    if (this._startingDeadlineMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.startingDeadlineMinutes = this._startingDeadlineMinutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoBackupScheduleV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backupPolicyName = undefined;
      this._schedules.internalValue = undefined;
      this._startingDeadlineMinutes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backupPolicyName = value.backupPolicyName;
      this._schedules.internalValue = value.schedules;
      this._startingDeadlineMinutes = value.startingDeadlineMinutes;
    }
  }

  // backup_policy_name - computed: false, optional: false, required: true
  private _backupPolicyName?: string; 
  public get backupPolicyName() {
    return this.getStringAttribute('backup_policy_name');
  }
  public set backupPolicyName(value: string) {
    this._backupPolicyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupPolicyNameInput() {
    return this._backupPolicyName;
  }

  // schedules - computed: false, optional: false, required: true
  private _schedules = new DataK8SDataprotectionKubeblocksIoBackupScheduleV1Alpha1ManifestSpecSchedulesList(this, "schedules", false);
  public get schedules() {
    return this._schedules;
  }
  public putSchedules(value: DataK8SDataprotectionKubeblocksIoBackupScheduleV1Alpha1ManifestSpecSchedules[] | cdktf.IResolvable) {
    this._schedules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulesInput() {
    return this._schedules.internalValue;
  }

  // starting_deadline_minutes - computed: false, optional: true, required: false
  private _startingDeadlineMinutes?: number; 
  public get startingDeadlineMinutes() {
    return this.getNumberAttribute('starting_deadline_minutes');
  }
  public set startingDeadlineMinutes(value: number) {
    this._startingDeadlineMinutes = value;
  }
  public resetStartingDeadlineMinutes() {
    this._startingDeadlineMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startingDeadlineMinutesInput() {
    return this._startingDeadlineMinutes;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/dataprotection_kubeblocks_io_backup_schedule_v1alpha1_manifest k8s_dataprotection_kubeblocks_io_backup_schedule_v1alpha1_manifest}
*/
export class DataK8SDataprotectionKubeblocksIoBackupScheduleV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_dataprotection_kubeblocks_io_backup_schedule_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SDataprotectionKubeblocksIoBackupScheduleV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SDataprotectionKubeblocksIoBackupScheduleV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SDataprotectionKubeblocksIoBackupScheduleV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/dataprotection_kubeblocks_io_backup_schedule_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SDataprotectionKubeblocksIoBackupScheduleV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_dataprotection_kubeblocks_io_backup_schedule_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/dataprotection_kubeblocks_io_backup_schedule_v1alpha1_manifest k8s_dataprotection_kubeblocks_io_backup_schedule_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SDataprotectionKubeblocksIoBackupScheduleV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SDataprotectionKubeblocksIoBackupScheduleV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_dataprotection_kubeblocks_io_backup_schedule_v1alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.24',
        providerVersionConstraint: '2025.11.24'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._metadata.internalValue = config.metadata;
    this._spec.internalValue = config.spec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // metadata - computed: false, optional: false, required: true
  private _metadata = new DataK8SDataprotectionKubeblocksIoBackupScheduleV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SDataprotectionKubeblocksIoBackupScheduleV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SDataprotectionKubeblocksIoBackupScheduleV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SDataprotectionKubeblocksIoBackupScheduleV1Alpha1ManifestSpec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // yaml - computed: true, optional: false, required: false
  public get yaml() {
    return this.getStringAttribute('yaml');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      metadata: dataK8SDataprotectionKubeblocksIoBackupScheduleV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SDataprotectionKubeblocksIoBackupScheduleV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SDataprotectionKubeblocksIoBackupScheduleV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SDataprotectionKubeblocksIoBackupScheduleV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SDataprotectionKubeblocksIoBackupScheduleV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SDataprotectionKubeblocksIoBackupScheduleV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
