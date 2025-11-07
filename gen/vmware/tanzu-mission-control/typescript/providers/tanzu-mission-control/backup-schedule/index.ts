// https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/backup_schedule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BackupScheduleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Scope for backup schedule.
  * Valid values are (FULL_CLUSTER, SET_NAMESPACES, LABEL_SELECTOR)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/backup_schedule#backup_scope BackupSchedule#backup_scope}
  */
  readonly backupScope: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/backup_schedule#id BackupSchedule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the backup schedule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/backup_schedule#name BackupSchedule#name}
  */
  readonly name: string;
  /**
  * meta block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/backup_schedule#meta BackupSchedule#meta}
  */
  readonly meta?: BackupScheduleMeta;
  /**
  * scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/backup_schedule#scope BackupSchedule#scope}
  */
  readonly scope: BackupScheduleScope;
  /**
  * selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/backup_schedule#selector BackupSchedule#selector}
  */
  readonly selector?: BackupScheduleSelector[] | cdktf.IResolvable;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/backup_schedule#spec BackupSchedule#spec}
  */
  readonly spec: BackupScheduleSpec;
}
export interface BackupScheduleMeta {
  /**
  * Annotations for the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/backup_schedule#annotations BackupSchedule#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Description of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/backup_schedule#description BackupSchedule#description}
  */
  readonly description?: string;
  /**
  * Labels for the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/backup_schedule#labels BackupSchedule#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function backupScheduleMetaToTerraform(struct?: BackupScheduleMetaOutputReference | BackupScheduleMeta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    description: cdktf.stringToTerraform(struct!.description),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function backupScheduleMetaToHclTerraform(struct?: BackupScheduleMetaOutputReference | BackupScheduleMeta): any {
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
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupScheduleMetaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupScheduleMeta | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupScheduleMeta | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._annotations = undefined;
      this._description = undefined;
      this._labels = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._annotations = value.annotations;
      this._description = value.description;
      this._labels = value.labels;
    }
  }

  // annotations - computed: true, optional: true, required: false
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

  // resource_version - computed: true, optional: false, required: false
  public get resourceVersion() {
    return this.getStringAttribute('resource_version');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }
}
export interface BackupScheduleScopeCluster {
  /**
  * Cluster name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/backup_schedule#cluster_name BackupSchedule#cluster_name}
  */
  readonly clusterName: string;
  /**
  * Management cluster name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/backup_schedule#management_cluster_name BackupSchedule#management_cluster_name}
  */
  readonly managementClusterName: string;
  /**
  * Cluster provisioner name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/backup_schedule#provisioner_name BackupSchedule#provisioner_name}
  */
  readonly provisionerName: string;
}

export function backupScheduleScopeClusterToTerraform(struct?: BackupScheduleScopeClusterOutputReference | BackupScheduleScopeCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_name: cdktf.stringToTerraform(struct!.clusterName),
    management_cluster_name: cdktf.stringToTerraform(struct!.managementClusterName),
    provisioner_name: cdktf.stringToTerraform(struct!.provisionerName),
  }
}


export function backupScheduleScopeClusterToHclTerraform(struct?: BackupScheduleScopeClusterOutputReference | BackupScheduleScopeCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_name: {
      value: cdktf.stringToHclTerraform(struct!.clusterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    management_cluster_name: {
      value: cdktf.stringToHclTerraform(struct!.managementClusterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provisioner_name: {
      value: cdktf.stringToHclTerraform(struct!.provisionerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupScheduleScopeClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupScheduleScopeCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterName = this._clusterName;
    }
    if (this._managementClusterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.managementClusterName = this._managementClusterName;
    }
    if (this._provisionerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.provisionerName = this._provisionerName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupScheduleScopeCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterName = undefined;
      this._managementClusterName = undefined;
      this._provisionerName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterName = value.clusterName;
      this._managementClusterName = value.managementClusterName;
      this._provisionerName = value.provisionerName;
    }
  }

  // cluster_name - computed: false, optional: false, required: true
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // management_cluster_name - computed: false, optional: false, required: true
  private _managementClusterName?: string; 
  public get managementClusterName() {
    return this.getStringAttribute('management_cluster_name');
  }
  public set managementClusterName(value: string) {
    this._managementClusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managementClusterNameInput() {
    return this._managementClusterName;
  }

  // provisioner_name - computed: false, optional: false, required: true
  private _provisionerName?: string; 
  public get provisionerName() {
    return this.getStringAttribute('provisioner_name');
  }
  public set provisionerName(value: string) {
    this._provisionerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionerNameInput() {
    return this._provisionerName;
  }
}
export interface BackupScheduleScopeClusterGroup {
  /**
  * Cluster group name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/backup_schedule#cluster_group_name BackupSchedule#cluster_group_name}
  */
  readonly clusterGroupName: string;
}

export function backupScheduleScopeClusterGroupToTerraform(struct?: BackupScheduleScopeClusterGroupOutputReference | BackupScheduleScopeClusterGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_group_name: cdktf.stringToTerraform(struct!.clusterGroupName),
  }
}


export function backupScheduleScopeClusterGroupToHclTerraform(struct?: BackupScheduleScopeClusterGroupOutputReference | BackupScheduleScopeClusterGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_group_name: {
      value: cdktf.stringToHclTerraform(struct!.clusterGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupScheduleScopeClusterGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupScheduleScopeClusterGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterGroupName = this._clusterGroupName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupScheduleScopeClusterGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterGroupName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterGroupName = value.clusterGroupName;
    }
  }

  // cluster_group_name - computed: false, optional: false, required: true
  private _clusterGroupName?: string; 
  public get clusterGroupName() {
    return this.getStringAttribute('cluster_group_name');
  }
  public set clusterGroupName(value: string) {
    this._clusterGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterGroupNameInput() {
    return this._clusterGroupName;
  }
}
export interface BackupScheduleScope {
  /**
  * cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/backup_schedule#cluster BackupSchedule#cluster}
  */
  readonly cluster?: BackupScheduleScopeCluster;
  /**
  * cluster_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/backup_schedule#cluster_group BackupSchedule#cluster_group}
  */
  readonly clusterGroup?: BackupScheduleScopeClusterGroup;
}

export function backupScheduleScopeToTerraform(struct?: BackupScheduleScopeOutputReference | BackupScheduleScope): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster: backupScheduleScopeClusterToTerraform(struct!.cluster),
    cluster_group: backupScheduleScopeClusterGroupToTerraform(struct!.clusterGroup),
  }
}


export function backupScheduleScopeToHclTerraform(struct?: BackupScheduleScopeOutputReference | BackupScheduleScope): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster: {
      value: backupScheduleScopeClusterToHclTerraform(struct!.cluster),
      isBlock: true,
      type: "list",
      storageClassType: "BackupScheduleScopeClusterList",
    },
    cluster_group: {
      value: backupScheduleScopeClusterGroupToHclTerraform(struct!.clusterGroup),
      isBlock: true,
      type: "list",
      storageClassType: "BackupScheduleScopeClusterGroupList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupScheduleScopeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupScheduleScope | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cluster?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cluster = this._cluster?.internalValue;
    }
    if (this._clusterGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterGroup = this._clusterGroup?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupScheduleScope | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cluster.internalValue = undefined;
      this._clusterGroup.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cluster.internalValue = value.cluster;
      this._clusterGroup.internalValue = value.clusterGroup;
    }
  }

  // cluster - computed: false, optional: true, required: false
  private _cluster = new BackupScheduleScopeClusterOutputReference(this, "cluster");
  public get cluster() {
    return this._cluster;
  }
  public putCluster(value: BackupScheduleScopeCluster) {
    this._cluster.internalValue = value;
  }
  public resetCluster() {
    this._cluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster.internalValue;
  }

  // cluster_group - computed: false, optional: true, required: false
  private _clusterGroup = new BackupScheduleScopeClusterGroupOutputReference(this, "cluster_group");
  public get clusterGroup() {
    return this._clusterGroup;
  }
  public putClusterGroup(value: BackupScheduleScopeClusterGroup) {
    this._clusterGroup.internalValue = value;
  }
  public resetClusterGroup() {
    this._clusterGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterGroupInput() {
    return this._clusterGroup.internalValue;
  }
}
export interface BackupScheduleSelectorLabelSelectorMatchExpression {
  /**
  * Key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/backup_schedule#key BackupSchedule#key}
  */
  readonly key: string;
  /**
  * Operator represents a key's relationship to a set of values.
  * Valid operators are "In", "NotIn", "Exists" and "DoesNotExist".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/backup_schedule#operator BackupSchedule#operator}
  */
  readonly operator: string;
  /**
  * Values is an array of string values.
  * If the operator is "In" or "NotIn", the values array must be non-empty.
  * If the operator is "Exists" or "DoesNotExist", the values array must be empty.
  * This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/backup_schedule#values BackupSchedule#values}
  */
  readonly values?: string[];
}

export function backupScheduleSelectorLabelSelectorMatchExpressionToTerraform(struct?: BackupScheduleSelectorLabelSelectorMatchExpression | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function backupScheduleSelectorLabelSelectorMatchExpressionToHclTerraform(struct?: BackupScheduleSelectorLabelSelectorMatchExpression | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupScheduleSelectorLabelSelectorMatchExpressionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BackupScheduleSelectorLabelSelectorMatchExpression | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupScheduleSelectorLabelSelectorMatchExpression | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class BackupScheduleSelectorLabelSelectorMatchExpressionList extends cdktf.ComplexList {
  public internalValue? : BackupScheduleSelectorLabelSelectorMatchExpression[] | cdktf.IResolvable

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
  public get(index: number): BackupScheduleSelectorLabelSelectorMatchExpressionOutputReference {
    return new BackupScheduleSelectorLabelSelectorMatchExpressionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BackupScheduleSelectorLabelSelector {
  /**
  * A map of {key,value} pairs. A single {key,value} in the map is equivalent to an element of match_expressions, whose key field is "key", the operator is "In" and the values array contains only "value".
  * The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/backup_schedule#match_labels BackupSchedule#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expression block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/backup_schedule#match_expression BackupSchedule#match_expression}
  */
  readonly matchExpression?: BackupScheduleSelectorLabelSelectorMatchExpression[] | cdktf.IResolvable;
}

export function backupScheduleSelectorLabelSelectorToTerraform(struct?: BackupScheduleSelectorLabelSelectorOutputReference | BackupScheduleSelectorLabelSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    match_expression: cdktf.listMapper(backupScheduleSelectorLabelSelectorMatchExpressionToTerraform, true)(struct!.matchExpression),
  }
}


export function backupScheduleSelectorLabelSelectorToHclTerraform(struct?: BackupScheduleSelectorLabelSelectorOutputReference | BackupScheduleSelectorLabelSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    match_expression: {
      value: cdktf.listMapperHcl(backupScheduleSelectorLabelSelectorMatchExpressionToHclTerraform, true)(struct!.matchExpression),
      isBlock: true,
      type: "list",
      storageClassType: "BackupScheduleSelectorLabelSelectorMatchExpressionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupScheduleSelectorLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupScheduleSelectorLabelSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    if (this._matchExpression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpression = this._matchExpression?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupScheduleSelectorLabelSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchLabels = undefined;
      this._matchExpression.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchLabels = value.matchLabels;
      this._matchExpression.internalValue = value.matchExpression;
    }
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }

  // match_expression - computed: false, optional: true, required: false
  private _matchExpression = new BackupScheduleSelectorLabelSelectorMatchExpressionList(this, "match_expression", false);
  public get matchExpression() {
    return this._matchExpression;
  }
  public putMatchExpression(value: BackupScheduleSelectorLabelSelectorMatchExpression[] | cdktf.IResolvable) {
    this._matchExpression.internalValue = value;
  }
  public resetMatchExpression() {
    this._matchExpression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionInput() {
    return this._matchExpression.internalValue;
  }
}
export interface BackupScheduleSelector {
  /**
  * Specifies the name of excluded clusters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/backup_schedule#excluded_names BackupSchedule#excluded_names}
  */
  readonly excludedNames?: string[];
  /**
  * Specifies name of cluster to be selected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/backup_schedule#names BackupSchedule#names}
  */
  readonly names?: string[];
  /**
  * label_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/backup_schedule#label_selector BackupSchedule#label_selector}
  */
  readonly labelSelector?: BackupScheduleSelectorLabelSelector;
}

export function backupScheduleSelectorToTerraform(struct?: BackupScheduleSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    excluded_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedNames),
    names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.names),
    label_selector: backupScheduleSelectorLabelSelectorToTerraform(struct!.labelSelector),
  }
}


export function backupScheduleSelectorToHclTerraform(struct?: BackupScheduleSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    excluded_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludedNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.names),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    label_selector: {
      value: backupScheduleSelectorLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "list",
      storageClassType: "BackupScheduleSelectorLabelSelectorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupScheduleSelectorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BackupScheduleSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludedNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedNames = this._excludedNames;
    }
    if (this._names !== undefined) {
      hasAnyValues = true;
      internalValueResult.names = this._names;
    }
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupScheduleSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excludedNames = undefined;
      this._names = undefined;
      this._labelSelector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excludedNames = value.excludedNames;
      this._names = value.names;
      this._labelSelector.internalValue = value.labelSelector;
    }
  }

  // excluded_names - computed: false, optional: true, required: false
  private _excludedNames?: string[]; 
  public get excludedNames() {
    return this.getListAttribute('excluded_names');
  }
  public set excludedNames(value: string[]) {
    this._excludedNames = value;
  }
  public resetExcludedNames() {
    this._excludedNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedNamesInput() {
    return this._excludedNames;
  }

  // names - computed: false, optional: true, required: false
  private _names?: string[]; 
  public get names() {
    return this.getListAttribute('names');
  }
  public set names(value: string[]) {
    this._names = value;
  }
  public resetNames() {
    this._names = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namesInput() {
    return this._names;
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new BackupScheduleSelectorLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: BackupScheduleSelectorLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
  }
}

export class BackupScheduleSelectorList extends cdktf.ComplexList {
  public internalValue? : BackupScheduleSelector[] | cdktf.IResolvable

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
  public get(index: number): BackupScheduleSelectorOutputReference {
    return new BackupScheduleSelectorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BackupScheduleSpecSchedule {
  /**
  * Cron expression of backup schedule rate/interval
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/backup_schedule#rate BackupSchedule#rate}
  */
  readonly rate: string;
}

export function backupScheduleSpecScheduleToTerraform(struct?: BackupScheduleSpecScheduleOutputReference | BackupScheduleSpecSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rate: cdktf.stringToTerraform(struct!.rate),
  }
}


export function backupScheduleSpecScheduleToHclTerraform(struct?: BackupScheduleSpecScheduleOutputReference | BackupScheduleSpecSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rate: {
      value: cdktf.stringToHclTerraform(struct!.rate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupScheduleSpecScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupScheduleSpecSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rate !== undefined) {
      hasAnyValues = true;
      internalValueResult.rate = this._rate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupScheduleSpecSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rate = value.rate;
    }
  }

  // rate - computed: false, optional: false, required: true
  private _rate?: string; 
  public get rate() {
    return this.getStringAttribute('rate');
  }
  public set rate(value: string) {
    this._rate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rateInput() {
    return this._rate;
  }
}
export interface BackupScheduleSpecTemplateHooksResourceLabelSelectorMatchExpression {
  /**
  * Key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/backup_schedule#key BackupSchedule#key}
  */
  readonly key: string;
  /**
  * Operator represents a key's relationship to a set of values.
  * Valid operators are "In", "NotIn", "Exists" and "DoesNotExist".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/backup_schedule#operator BackupSchedule#operator}
  */
  readonly operator: string;
  /**
  * Values is an array of string values.
  * If the operator is "In" or "NotIn", the values array must be non-empty.
  * If the operator is "Exists" or "DoesNotExist", the values array must be empty.
  * This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/backup_schedule#values BackupSchedule#values}
  */
  readonly values?: string[];
}

export function backupScheduleSpecTemplateHooksResourceLabelSelectorMatchExpressionToTerraform(struct?: BackupScheduleSpecTemplateHooksResourceLabelSelectorMatchExpression | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function backupScheduleSpecTemplateHooksResourceLabelSelectorMatchExpressionToHclTerraform(struct?: BackupScheduleSpecTemplateHooksResourceLabelSelectorMatchExpression | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupScheduleSpecTemplateHooksResourceLabelSelectorMatchExpressionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BackupScheduleSpecTemplateHooksResourceLabelSelectorMatchExpression | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupScheduleSpecTemplateHooksResourceLabelSelectorMatchExpression | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class BackupScheduleSpecTemplateHooksResourceLabelSelectorMatchExpressionList extends cdktf.ComplexList {
  public internalValue? : BackupScheduleSpecTemplateHooksResourceLabelSelectorMatchExpression[] | cdktf.IResolvable

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
  public get(index: number): BackupScheduleSpecTemplateHooksResourceLabelSelectorMatchExpressionOutputReference {
    return new BackupScheduleSpecTemplateHooksResourceLabelSelectorMatchExpressionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BackupScheduleSpecTemplateHooksResourceLabelSelector {
  /**
  * A map of {key,value} pairs. A single {key,value} in the map is equivalent to an element of match_expressions, whose key field is "key", the operator is "In" and the values array contains only "value".
  * The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/backup_schedule#match_labels BackupSchedule#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expression block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/backup_schedule#match_expression BackupSchedule#match_expression}
  */
  readonly matchExpression?: BackupScheduleSpecTemplateHooksResourceLabelSelectorMatchExpression[] | cdktf.IResolvable;
}

export function backupScheduleSpecTemplateHooksResourceLabelSelectorToTerraform(struct?: BackupScheduleSpecTemplateHooksResourceLabelSelectorOutputReference | BackupScheduleSpecTemplateHooksResourceLabelSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    match_expression: cdktf.listMapper(backupScheduleSpecTemplateHooksResourceLabelSelectorMatchExpressionToTerraform, true)(struct!.matchExpression),
  }
}


export function backupScheduleSpecTemplateHooksResourceLabelSelectorToHclTerraform(struct?: BackupScheduleSpecTemplateHooksResourceLabelSelectorOutputReference | BackupScheduleSpecTemplateHooksResourceLabelSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    match_expression: {
      value: cdktf.listMapperHcl(backupScheduleSpecTemplateHooksResourceLabelSelectorMatchExpressionToHclTerraform, true)(struct!.matchExpression),
      isBlock: true,
      type: "list",
      storageClassType: "BackupScheduleSpecTemplateHooksResourceLabelSelectorMatchExpressionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupScheduleSpecTemplateHooksResourceLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupScheduleSpecTemplateHooksResourceLabelSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    if (this._matchExpression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpression = this._matchExpression?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupScheduleSpecTemplateHooksResourceLabelSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchLabels = undefined;
      this._matchExpression.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchLabels = value.matchLabels;
      this._matchExpression.internalValue = value.matchExpression;
    }
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }

  // match_expression - computed: false, optional: true, required: false
  private _matchExpression = new BackupScheduleSpecTemplateHooksResourceLabelSelectorMatchExpressionList(this, "match_expression", false);
  public get matchExpression() {
    return this._matchExpression;
  }
  public putMatchExpression(value: BackupScheduleSpecTemplateHooksResourceLabelSelectorMatchExpression[] | cdktf.IResolvable) {
    this._matchExpression.internalValue = value;
  }
  public resetMatchExpression() {
    this._matchExpression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionInput() {
    return this._matchExpression.internalValue;
  }
}
export interface BackupScheduleSpecTemplateHooksResourcePostHookExec {
  /**
  * The command and arguments to execute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/backup_schedule#command BackupSchedule#command}
  */
  readonly command: string[];
  /**
  * The container in the pod where the command should be executed.
  * If not specified, the pod's first container is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/backup_schedule#container BackupSchedule#container}
  */
  readonly container: string;
  /**
  * Specifies how Velero should behave if it encounters an error executing this hook.
  * Valid values are (FAIL, CONTINUE)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/backup_schedule#on_error BackupSchedule#on_error}
  */
  readonly onError?: string;
  /**
  * Defines the maximum amount of time Velero should wait for the hook to complete before considering the execution a failure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/backup_schedule#timeout BackupSchedule#timeout}
  */
  readonly timeout?: string;
}

export function backupScheduleSpecTemplateHooksResourcePostHookExecToTerraform(struct?: BackupScheduleSpecTemplateHooksResourcePostHookExecOutputReference | BackupScheduleSpecTemplateHooksResourcePostHookExec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
    container: cdktf.stringToTerraform(struct!.container),
    on_error: cdktf.stringToTerraform(struct!.onError),
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}


export function backupScheduleSpecTemplateHooksResourcePostHookExecToHclTerraform(struct?: BackupScheduleSpecTemplateHooksResourcePostHookExecOutputReference | BackupScheduleSpecTemplateHooksResourcePostHookExec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    command: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    container: {
      value: cdktf.stringToHclTerraform(struct!.container),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    on_error: {
      value: cdktf.stringToHclTerraform(struct!.onError),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupScheduleSpecTemplateHooksResourcePostHookExecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupScheduleSpecTemplateHooksResourcePostHookExec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._container !== undefined) {
      hasAnyValues = true;
      internalValueResult.container = this._container;
    }
    if (this._onError !== undefined) {
      hasAnyValues = true;
      internalValueResult.onError = this._onError;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupScheduleSpecTemplateHooksResourcePostHookExec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._command = undefined;
      this._container = undefined;
      this._onError = undefined;
      this._timeout = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._command = value.command;
      this._container = value.container;
      this._onError = value.onError;
      this._timeout = value.timeout;
    }
  }

  // command - computed: false, optional: false, required: true
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // container - computed: false, optional: false, required: true
  private _container?: string; 
  public get container() {
    return this.getStringAttribute('container');
  }
  public set container(value: string) {
    this._container = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container;
  }

  // on_error - computed: false, optional: true, required: false
  private _onError?: string; 
  public get onError() {
    return this.getStringAttribute('on_error');
  }
  public set onError(value: string) {
    this._onError = value;
  }
  public resetOnError() {
    this._onError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onErrorInput() {
    return this._onError;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }
}
export interface BackupScheduleSpecTemplateHooksResourcePostHook {
  /**
  * exec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/backup_schedule#exec BackupSchedule#exec}
  */
  readonly exec: BackupScheduleSpecTemplateHooksResourcePostHookExec;
}

export function backupScheduleSpecTemplateHooksResourcePostHookToTerraform(struct?: BackupScheduleSpecTemplateHooksResourcePostHook | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exec: backupScheduleSpecTemplateHooksResourcePostHookExecToTerraform(struct!.exec),
  }
}


export function backupScheduleSpecTemplateHooksResourcePostHookToHclTerraform(struct?: BackupScheduleSpecTemplateHooksResourcePostHook | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exec: {
      value: backupScheduleSpecTemplateHooksResourcePostHookExecToHclTerraform(struct!.exec),
      isBlock: true,
      type: "list",
      storageClassType: "BackupScheduleSpecTemplateHooksResourcePostHookExecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupScheduleSpecTemplateHooksResourcePostHookOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BackupScheduleSpecTemplateHooksResourcePostHook | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exec = this._exec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupScheduleSpecTemplateHooksResourcePostHook | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exec.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exec.internalValue = value.exec;
    }
  }

  // exec - computed: false, optional: false, required: true
  private _exec = new BackupScheduleSpecTemplateHooksResourcePostHookExecOutputReference(this, "exec");
  public get exec() {
    return this._exec;
  }
  public putExec(value: BackupScheduleSpecTemplateHooksResourcePostHookExec) {
    this._exec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get execInput() {
    return this._exec.internalValue;
  }
}

export class BackupScheduleSpecTemplateHooksResourcePostHookList extends cdktf.ComplexList {
  public internalValue? : BackupScheduleSpecTemplateHooksResourcePostHook[] | cdktf.IResolvable

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
  public get(index: number): BackupScheduleSpecTemplateHooksResourcePostHookOutputReference {
    return new BackupScheduleSpecTemplateHooksResourcePostHookOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BackupScheduleSpecTemplateHooksResourcePreHookExec {
  /**
  * The command and arguments to execute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/backup_schedule#command BackupSchedule#command}
  */
  readonly command: string[];
  /**
  * The container in the pod where the command should be executed.
  * If not specified, the pod's first container is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/backup_schedule#container BackupSchedule#container}
  */
  readonly container: string;
  /**
  * Specifies how Velero should behave if it encounters an error executing this hook.
  * Valid values are (FAIL, CONTINUE)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/backup_schedule#on_error BackupSchedule#on_error}
  */
  readonly onError?: string;
  /**
  * Defines the maximum amount of time Velero should wait for the hook to complete before considering the execution a failure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/backup_schedule#timeout BackupSchedule#timeout}
  */
  readonly timeout?: string;
}

export function backupScheduleSpecTemplateHooksResourcePreHookExecToTerraform(struct?: BackupScheduleSpecTemplateHooksResourcePreHookExecOutputReference | BackupScheduleSpecTemplateHooksResourcePreHookExec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
    container: cdktf.stringToTerraform(struct!.container),
    on_error: cdktf.stringToTerraform(struct!.onError),
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}


export function backupScheduleSpecTemplateHooksResourcePreHookExecToHclTerraform(struct?: BackupScheduleSpecTemplateHooksResourcePreHookExecOutputReference | BackupScheduleSpecTemplateHooksResourcePreHookExec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    command: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    container: {
      value: cdktf.stringToHclTerraform(struct!.container),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    on_error: {
      value: cdktf.stringToHclTerraform(struct!.onError),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupScheduleSpecTemplateHooksResourcePreHookExecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupScheduleSpecTemplateHooksResourcePreHookExec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._container !== undefined) {
      hasAnyValues = true;
      internalValueResult.container = this._container;
    }
    if (this._onError !== undefined) {
      hasAnyValues = true;
      internalValueResult.onError = this._onError;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupScheduleSpecTemplateHooksResourcePreHookExec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._command = undefined;
      this._container = undefined;
      this._onError = undefined;
      this._timeout = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._command = value.command;
      this._container = value.container;
      this._onError = value.onError;
      this._timeout = value.timeout;
    }
  }

  // command - computed: false, optional: false, required: true
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // container - computed: false, optional: false, required: true
  private _container?: string; 
  public get container() {
    return this.getStringAttribute('container');
  }
  public set container(value: string) {
    this._container = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container;
  }

  // on_error - computed: false, optional: true, required: false
  private _onError?: string; 
  public get onError() {
    return this.getStringAttribute('on_error');
  }
  public set onError(value: string) {
    this._onError = value;
  }
  public resetOnError() {
    this._onError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onErrorInput() {
    return this._onError;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }
}
export interface BackupScheduleSpecTemplateHooksResourcePreHook {
  /**
  * exec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/backup_schedule#exec BackupSchedule#exec}
  */
  readonly exec: BackupScheduleSpecTemplateHooksResourcePreHookExec;
}

export function backupScheduleSpecTemplateHooksResourcePreHookToTerraform(struct?: BackupScheduleSpecTemplateHooksResourcePreHook | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exec: backupScheduleSpecTemplateHooksResourcePreHookExecToTerraform(struct!.exec),
  }
}


export function backupScheduleSpecTemplateHooksResourcePreHookToHclTerraform(struct?: BackupScheduleSpecTemplateHooksResourcePreHook | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exec: {
      value: backupScheduleSpecTemplateHooksResourcePreHookExecToHclTerraform(struct!.exec),
      isBlock: true,
      type: "list",
      storageClassType: "BackupScheduleSpecTemplateHooksResourcePreHookExecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupScheduleSpecTemplateHooksResourcePreHookOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BackupScheduleSpecTemplateHooksResourcePreHook | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exec = this._exec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupScheduleSpecTemplateHooksResourcePreHook | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exec.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exec.internalValue = value.exec;
    }
  }

  // exec - computed: false, optional: false, required: true
  private _exec = new BackupScheduleSpecTemplateHooksResourcePreHookExecOutputReference(this, "exec");
  public get exec() {
    return this._exec;
  }
  public putExec(value: BackupScheduleSpecTemplateHooksResourcePreHookExec) {
    this._exec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get execInput() {
    return this._exec.internalValue;
  }
}

export class BackupScheduleSpecTemplateHooksResourcePreHookList extends cdktf.ComplexList {
  public internalValue? : BackupScheduleSpecTemplateHooksResourcePreHook[] | cdktf.IResolvable

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
  public get(index: number): BackupScheduleSpecTemplateHooksResourcePreHookOutputReference {
    return new BackupScheduleSpecTemplateHooksResourcePreHookOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BackupScheduleSpecTemplateHooksResource {
  /**
  * Specifies the namespaces to which this hook spec does not apply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/backup_schedule#excluded_namespaces BackupSchedule#excluded_namespaces}
  */
  readonly excludedNamespaces?: string[];
  /**
  * Specifies the namespaces to which this hook spec applies.
  * If empty, it applies to all namespaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/backup_schedule#included_namespaces BackupSchedule#included_namespaces}
  */
  readonly includedNamespaces?: string[];
  /**
  * The name of the hook resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/backup_schedule#name BackupSchedule#name}
  */
  readonly name: string;
  /**
  * label_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/backup_schedule#label_selector BackupSchedule#label_selector}
  */
  readonly labelSelector?: BackupScheduleSpecTemplateHooksResourceLabelSelector;
  /**
  * post_hook block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/backup_schedule#post_hook BackupSchedule#post_hook}
  */
  readonly postHook?: BackupScheduleSpecTemplateHooksResourcePostHook[] | cdktf.IResolvable;
  /**
  * pre_hook block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/backup_schedule#pre_hook BackupSchedule#pre_hook}
  */
  readonly preHook?: BackupScheduleSpecTemplateHooksResourcePreHook[] | cdktf.IResolvable;
}

export function backupScheduleSpecTemplateHooksResourceToTerraform(struct?: BackupScheduleSpecTemplateHooksResource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    excluded_namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedNamespaces),
    included_namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includedNamespaces),
    name: cdktf.stringToTerraform(struct!.name),
    label_selector: backupScheduleSpecTemplateHooksResourceLabelSelectorToTerraform(struct!.labelSelector),
    post_hook: cdktf.listMapper(backupScheduleSpecTemplateHooksResourcePostHookToTerraform, true)(struct!.postHook),
    pre_hook: cdktf.listMapper(backupScheduleSpecTemplateHooksResourcePreHookToTerraform, true)(struct!.preHook),
  }
}


export function backupScheduleSpecTemplateHooksResourceToHclTerraform(struct?: BackupScheduleSpecTemplateHooksResource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    excluded_namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludedNamespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    included_namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includedNamespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label_selector: {
      value: backupScheduleSpecTemplateHooksResourceLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "list",
      storageClassType: "BackupScheduleSpecTemplateHooksResourceLabelSelectorList",
    },
    post_hook: {
      value: cdktf.listMapperHcl(backupScheduleSpecTemplateHooksResourcePostHookToHclTerraform, true)(struct!.postHook),
      isBlock: true,
      type: "list",
      storageClassType: "BackupScheduleSpecTemplateHooksResourcePostHookList",
    },
    pre_hook: {
      value: cdktf.listMapperHcl(backupScheduleSpecTemplateHooksResourcePreHookToHclTerraform, true)(struct!.preHook),
      isBlock: true,
      type: "list",
      storageClassType: "BackupScheduleSpecTemplateHooksResourcePreHookList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupScheduleSpecTemplateHooksResourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BackupScheduleSpecTemplateHooksResource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludedNamespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedNamespaces = this._excludedNamespaces;
    }
    if (this._includedNamespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedNamespaces = this._includedNamespaces;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    if (this._postHook?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postHook = this._postHook?.internalValue;
    }
    if (this._preHook?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preHook = this._preHook?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupScheduleSpecTemplateHooksResource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excludedNamespaces = undefined;
      this._includedNamespaces = undefined;
      this._name = undefined;
      this._labelSelector.internalValue = undefined;
      this._postHook.internalValue = undefined;
      this._preHook.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excludedNamespaces = value.excludedNamespaces;
      this._includedNamespaces = value.includedNamespaces;
      this._name = value.name;
      this._labelSelector.internalValue = value.labelSelector;
      this._postHook.internalValue = value.postHook;
      this._preHook.internalValue = value.preHook;
    }
  }

  // excluded_namespaces - computed: false, optional: true, required: false
  private _excludedNamespaces?: string[]; 
  public get excludedNamespaces() {
    return this.getListAttribute('excluded_namespaces');
  }
  public set excludedNamespaces(value: string[]) {
    this._excludedNamespaces = value;
  }
  public resetExcludedNamespaces() {
    this._excludedNamespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedNamespacesInput() {
    return this._excludedNamespaces;
  }

  // included_namespaces - computed: false, optional: true, required: false
  private _includedNamespaces?: string[]; 
  public get includedNamespaces() {
    return this.getListAttribute('included_namespaces');
  }
  public set includedNamespaces(value: string[]) {
    this._includedNamespaces = value;
  }
  public resetIncludedNamespaces() {
    this._includedNamespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedNamespacesInput() {
    return this._includedNamespaces;
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

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new BackupScheduleSpecTemplateHooksResourceLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: BackupScheduleSpecTemplateHooksResourceLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
  }

  // post_hook - computed: false, optional: true, required: false
  private _postHook = new BackupScheduleSpecTemplateHooksResourcePostHookList(this, "post_hook", false);
  public get postHook() {
    return this._postHook;
  }
  public putPostHook(value: BackupScheduleSpecTemplateHooksResourcePostHook[] | cdktf.IResolvable) {
    this._postHook.internalValue = value;
  }
  public resetPostHook() {
    this._postHook.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postHookInput() {
    return this._postHook.internalValue;
  }

  // pre_hook - computed: false, optional: true, required: false
  private _preHook = new BackupScheduleSpecTemplateHooksResourcePreHookList(this, "pre_hook", false);
  public get preHook() {
    return this._preHook;
  }
  public putPreHook(value: BackupScheduleSpecTemplateHooksResourcePreHook[] | cdktf.IResolvable) {
    this._preHook.internalValue = value;
  }
  public resetPreHook() {
    this._preHook.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preHookInput() {
    return this._preHook.internalValue;
  }
}

export class BackupScheduleSpecTemplateHooksResourceList extends cdktf.ComplexList {
  public internalValue? : BackupScheduleSpecTemplateHooksResource[] | cdktf.IResolvable

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
  public get(index: number): BackupScheduleSpecTemplateHooksResourceOutputReference {
    return new BackupScheduleSpecTemplateHooksResourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BackupScheduleSpecTemplateHooks {
  /**
  * resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/backup_schedule#resource BackupSchedule#resource}
  */
  readonly resource?: BackupScheduleSpecTemplateHooksResource[] | cdktf.IResolvable;
}

export function backupScheduleSpecTemplateHooksToTerraform(struct?: BackupScheduleSpecTemplateHooksOutputReference | BackupScheduleSpecTemplateHooks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource: cdktf.listMapper(backupScheduleSpecTemplateHooksResourceToTerraform, true)(struct!.resource),
  }
}


export function backupScheduleSpecTemplateHooksToHclTerraform(struct?: BackupScheduleSpecTemplateHooksOutputReference | BackupScheduleSpecTemplateHooks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource: {
      value: cdktf.listMapperHcl(backupScheduleSpecTemplateHooksResourceToHclTerraform, true)(struct!.resource),
      isBlock: true,
      type: "list",
      storageClassType: "BackupScheduleSpecTemplateHooksResourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupScheduleSpecTemplateHooksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupScheduleSpecTemplateHooks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupScheduleSpecTemplateHooks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resource.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resource.internalValue = value.resource;
    }
  }

  // resource - computed: false, optional: true, required: false
  private _resource = new BackupScheduleSpecTemplateHooksResourceList(this, "resource", false);
  public get resource() {
    return this._resource;
  }
  public putResource(value: BackupScheduleSpecTemplateHooksResource[] | cdktf.IResolvable) {
    this._resource.internalValue = value;
  }
  public resetResource() {
    this._resource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource.internalValue;
  }
}
export interface BackupScheduleSpecTemplateLabelSelectorMatchExpression {
  /**
  * Key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/backup_schedule#key BackupSchedule#key}
  */
  readonly key: string;
  /**
  * Operator represents a key's relationship to a set of values.
  * Valid operators are "In", "NotIn", "Exists" and "DoesNotExist".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/backup_schedule#operator BackupSchedule#operator}
  */
  readonly operator: string;
  /**
  * Values is an array of string values.
  * If the operator is "In" or "NotIn", the values array must be non-empty.
  * If the operator is "Exists" or "DoesNotExist", the values array must be empty.
  * This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/backup_schedule#values BackupSchedule#values}
  */
  readonly values?: string[];
}

export function backupScheduleSpecTemplateLabelSelectorMatchExpressionToTerraform(struct?: BackupScheduleSpecTemplateLabelSelectorMatchExpression | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function backupScheduleSpecTemplateLabelSelectorMatchExpressionToHclTerraform(struct?: BackupScheduleSpecTemplateLabelSelectorMatchExpression | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupScheduleSpecTemplateLabelSelectorMatchExpressionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BackupScheduleSpecTemplateLabelSelectorMatchExpression | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupScheduleSpecTemplateLabelSelectorMatchExpression | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class BackupScheduleSpecTemplateLabelSelectorMatchExpressionList extends cdktf.ComplexList {
  public internalValue? : BackupScheduleSpecTemplateLabelSelectorMatchExpression[] | cdktf.IResolvable

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
  public get(index: number): BackupScheduleSpecTemplateLabelSelectorMatchExpressionOutputReference {
    return new BackupScheduleSpecTemplateLabelSelectorMatchExpressionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BackupScheduleSpecTemplateLabelSelector {
  /**
  * A map of {key,value} pairs. A single {key,value} in the map is equivalent to an element of match_expressions, whose key field is "key", the operator is "In" and the values array contains only "value".
  * The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/backup_schedule#match_labels BackupSchedule#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expression block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/backup_schedule#match_expression BackupSchedule#match_expression}
  */
  readonly matchExpression?: BackupScheduleSpecTemplateLabelSelectorMatchExpression[] | cdktf.IResolvable;
}

export function backupScheduleSpecTemplateLabelSelectorToTerraform(struct?: BackupScheduleSpecTemplateLabelSelectorOutputReference | BackupScheduleSpecTemplateLabelSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    match_expression: cdktf.listMapper(backupScheduleSpecTemplateLabelSelectorMatchExpressionToTerraform, true)(struct!.matchExpression),
  }
}


export function backupScheduleSpecTemplateLabelSelectorToHclTerraform(struct?: BackupScheduleSpecTemplateLabelSelectorOutputReference | BackupScheduleSpecTemplateLabelSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    match_expression: {
      value: cdktf.listMapperHcl(backupScheduleSpecTemplateLabelSelectorMatchExpressionToHclTerraform, true)(struct!.matchExpression),
      isBlock: true,
      type: "list",
      storageClassType: "BackupScheduleSpecTemplateLabelSelectorMatchExpressionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupScheduleSpecTemplateLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupScheduleSpecTemplateLabelSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    if (this._matchExpression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpression = this._matchExpression?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupScheduleSpecTemplateLabelSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchLabels = undefined;
      this._matchExpression.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchLabels = value.matchLabels;
      this._matchExpression.internalValue = value.matchExpression;
    }
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }

  // match_expression - computed: false, optional: true, required: false
  private _matchExpression = new BackupScheduleSpecTemplateLabelSelectorMatchExpressionList(this, "match_expression", false);
  public get matchExpression() {
    return this._matchExpression;
  }
  public putMatchExpression(value: BackupScheduleSpecTemplateLabelSelectorMatchExpression[] | cdktf.IResolvable) {
    this._matchExpression.internalValue = value;
  }
  public resetMatchExpression() {
    this._matchExpression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionInput() {
    return this._matchExpression.internalValue;
  }
}
export interface BackupScheduleSpecTemplateOrLabelSelectorMatchExpression {
  /**
  * Key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/backup_schedule#key BackupSchedule#key}
  */
  readonly key: string;
  /**
  * Operator represents a key's relationship to a set of values.
  * Valid operators are "In", "NotIn", "Exists" and "DoesNotExist".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/backup_schedule#operator BackupSchedule#operator}
  */
  readonly operator: string;
  /**
  * Values is an array of string values.
  * If the operator is "In" or "NotIn", the values array must be non-empty.
  * If the operator is "Exists" or "DoesNotExist", the values array must be empty.
  * This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/backup_schedule#values BackupSchedule#values}
  */
  readonly values?: string[];
}

export function backupScheduleSpecTemplateOrLabelSelectorMatchExpressionToTerraform(struct?: BackupScheduleSpecTemplateOrLabelSelectorMatchExpression | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function backupScheduleSpecTemplateOrLabelSelectorMatchExpressionToHclTerraform(struct?: BackupScheduleSpecTemplateOrLabelSelectorMatchExpression | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupScheduleSpecTemplateOrLabelSelectorMatchExpressionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BackupScheduleSpecTemplateOrLabelSelectorMatchExpression | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupScheduleSpecTemplateOrLabelSelectorMatchExpression | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class BackupScheduleSpecTemplateOrLabelSelectorMatchExpressionList extends cdktf.ComplexList {
  public internalValue? : BackupScheduleSpecTemplateOrLabelSelectorMatchExpression[] | cdktf.IResolvable

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
  public get(index: number): BackupScheduleSpecTemplateOrLabelSelectorMatchExpressionOutputReference {
    return new BackupScheduleSpecTemplateOrLabelSelectorMatchExpressionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BackupScheduleSpecTemplateOrLabelSelector {
  /**
  * A map of {key,value} pairs. A single {key,value} in the map is equivalent to an element of match_expressions, whose key field is "key", the operator is "In" and the values array contains only "value".
  * The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/backup_schedule#match_labels BackupSchedule#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expression block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/backup_schedule#match_expression BackupSchedule#match_expression}
  */
  readonly matchExpression?: BackupScheduleSpecTemplateOrLabelSelectorMatchExpression[] | cdktf.IResolvable;
}

export function backupScheduleSpecTemplateOrLabelSelectorToTerraform(struct?: BackupScheduleSpecTemplateOrLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    match_expression: cdktf.listMapper(backupScheduleSpecTemplateOrLabelSelectorMatchExpressionToTerraform, true)(struct!.matchExpression),
  }
}


export function backupScheduleSpecTemplateOrLabelSelectorToHclTerraform(struct?: BackupScheduleSpecTemplateOrLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    match_expression: {
      value: cdktf.listMapperHcl(backupScheduleSpecTemplateOrLabelSelectorMatchExpressionToHclTerraform, true)(struct!.matchExpression),
      isBlock: true,
      type: "list",
      storageClassType: "BackupScheduleSpecTemplateOrLabelSelectorMatchExpressionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupScheduleSpecTemplateOrLabelSelectorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BackupScheduleSpecTemplateOrLabelSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    if (this._matchExpression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpression = this._matchExpression?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupScheduleSpecTemplateOrLabelSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchLabels = undefined;
      this._matchExpression.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchLabels = value.matchLabels;
      this._matchExpression.internalValue = value.matchExpression;
    }
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }

  // match_expression - computed: false, optional: true, required: false
  private _matchExpression = new BackupScheduleSpecTemplateOrLabelSelectorMatchExpressionList(this, "match_expression", false);
  public get matchExpression() {
    return this._matchExpression;
  }
  public putMatchExpression(value: BackupScheduleSpecTemplateOrLabelSelectorMatchExpression[] | cdktf.IResolvable) {
    this._matchExpression.internalValue = value;
  }
  public resetMatchExpression() {
    this._matchExpression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionInput() {
    return this._matchExpression.internalValue;
  }
}

export class BackupScheduleSpecTemplateOrLabelSelectorList extends cdktf.ComplexList {
  public internalValue? : BackupScheduleSpecTemplateOrLabelSelector[] | cdktf.IResolvable

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
  public get(index: number): BackupScheduleSpecTemplateOrLabelSelectorOutputReference {
    return new BackupScheduleSpecTemplateOrLabelSelectorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BackupScheduleSpecTemplate {
  /**
  * The backup retention period.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/backup_schedule#backup_ttl BackupSchedule#backup_ttl}
  */
  readonly backupTtl?: string;
  /**
  * Specifies the time used to wait for CSI VolumeSnapshot status turns to ReadyToUse during creation, before returning error as timeout.
  * The default value is 10 minute.
  * Format is the time number and time sign, example: "50s" (50 seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/backup_schedule#csi_snapshot_timeout BackupSchedule#csi_snapshot_timeout}
  */
  readonly csiSnapshotTimeout?: string;
  /**
  * Specifies whether all pod volumes should be backed up via file system backup by default.
  * (Default: True)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/backup_schedule#default_volumes_to_fs_backup BackupSchedule#default_volumes_to_fs_backup}
  */
  readonly defaultVolumesToFsBackup?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether restic should be used to take a backup of all pod volumes by default.
  * (Default: False)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/backup_schedule#default_volumes_to_restic BackupSchedule#default_volumes_to_restic}
  */
  readonly defaultVolumesToRestic?: boolean | cdktf.IResolvable;
  /**
  * List of cluster-scoped resource type names to exclude from the backup.
  * If set to "*", all cluster-scoped resource types are excluded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/backup_schedule#excluded_cluster_scoped_resources BackupSchedule#excluded_cluster_scoped_resources}
  */
  readonly excludedClusterScopedResources?: string[];
  /**
  * List of of namespace-scoped resource type names to exclude from the backup.
  * If set to "*", all namespace-scoped resource types are excluded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/backup_schedule#excluded_namespace_scoped_resources BackupSchedule#excluded_namespace_scoped_resources}
  */
  readonly excludedNamespaceScopedResources?: string[];
  /**
  * The namespaces to be excluded in the backup.
  * Can't be used if scope is SET_NAMESPACES.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/backup_schedule#excluded_namespaces BackupSchedule#excluded_namespaces}
  */
  readonly excludedNamespaces?: string[];
  /**
  * The name list for the resources to be excluded in backup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/backup_schedule#excluded_resources BackupSchedule#excluded_resources}
  */
  readonly excludedResources?: string[];
  /**
  * A flag which specifies whether cluster-scoped resources should be included for consideration in the backup.
  * If set to true, all cluster-scoped resources will be backed up. If set to false, all cluster-scoped resources will be excluded from the backup.
  * If unset, all cluster-scoped resources are included if and only if all namespaces are included and there are no excluded namespaces.
  * Otherwise, only cluster-scoped resources associated with namespace-scoped resources included in the backup spec are backed up.
  * For example, if a PersistentVolumeClaim is included in the backup, its associated PersistentVolume (which is cluster-scoped) would also be backed up.
  * (Default: False)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/backup_schedule#include_cluster_resources BackupSchedule#include_cluster_resources}
  */
  readonly includeClusterResources?: boolean | cdktf.IResolvable;
  /**
  * List of cluster-scoped resource type names to include in the backup.
  * If set to "*", all cluster-scoped resource types are included.
  *   The default value is empty, which means only related cluster-scoped resources are included.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/backup_schedule#included_cluster_scoped_resources BackupSchedule#included_cluster_scoped_resources}
  */
  readonly includedClusterScopedResources?: string[];
  /**
  * List of of namespace-scoped resource type names to include in the backup.
  * The default value is "*".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/backup_schedule#included_namespace_scoped_resources BackupSchedule#included_namespace_scoped_resources}
  */
  readonly includedNamespaceScopedResources?: string[];
  /**
  * The namespace to be included for backup from.
  * If empty, all namespaces are included.
  * Can't be used if scope is FULL_CLUSTER.
  * Required if scope is SET_NAMESPACES.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/backup_schedule#included_namespaces BackupSchedule#included_namespaces}
  */
  readonly includedNamespaces?: string[];
  /**
  * The name list for the resources to be included into backup. If empty, all resources are included.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/backup_schedule#included_resources BackupSchedule#included_resources}
  */
  readonly includedResources?: string[];
  /**
  * Specifies the backup order of resources of specific Kind. The map key is the Kind name and value is a list of resource names separated by commas.
  * Each resource name has format "namespace/resourcename".
  * For cluster resources, simply use "resourcename".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/backup_schedule#ordered_resources BackupSchedule#ordered_resources}
  */
  readonly orderedResources?: { [key: string]: string };
  /**
  * Specifies whether snapshot data should be moved to the target location.(Default:False)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/backup_schedule#snapshot_move_data BackupSchedule#snapshot_move_data}
  */
  readonly snapshotMoveData?: boolean | cdktf.IResolvable;
  /**
  * A flag which specifies whether to take cloud snapshots of any PV's referenced in the set of objects included in the Backup.
  * If set to true, snapshots will be taken, otherwise, snapshots will be skipped.
  * If left unset, snapshots will be attempted if volume snapshots are configured for the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/backup_schedule#snapshot_volumes BackupSchedule#snapshot_volumes}
  */
  readonly snapshotVolumes?: boolean | cdktf.IResolvable;
  /**
  * The name of a BackupStorageLocation where the backup should be stored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/backup_schedule#storage_location BackupSchedule#storage_location}
  */
  readonly storageLocation?: string;
  /**
  * A list containing names of VolumeSnapshotLocations associated with this backup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/backup_schedule#volume_snapshot_locations BackupSchedule#volume_snapshot_locations}
  */
  readonly volumeSnapshotLocations?: string[];
  /**
  * hooks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/backup_schedule#hooks BackupSchedule#hooks}
  */
  readonly hooks?: BackupScheduleSpecTemplateHooks;
  /**
  * label_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/backup_schedule#label_selector BackupSchedule#label_selector}
  */
  readonly labelSelector?: BackupScheduleSpecTemplateLabelSelector;
  /**
  * or_label_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/backup_schedule#or_label_selector BackupSchedule#or_label_selector}
  */
  readonly orLabelSelector?: BackupScheduleSpecTemplateOrLabelSelector[] | cdktf.IResolvable;
}

export function backupScheduleSpecTemplateToTerraform(struct?: BackupScheduleSpecTemplateOutputReference | BackupScheduleSpecTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_ttl: cdktf.stringToTerraform(struct!.backupTtl),
    csi_snapshot_timeout: cdktf.stringToTerraform(struct!.csiSnapshotTimeout),
    default_volumes_to_fs_backup: cdktf.booleanToTerraform(struct!.defaultVolumesToFsBackup),
    default_volumes_to_restic: cdktf.booleanToTerraform(struct!.defaultVolumesToRestic),
    excluded_cluster_scoped_resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedClusterScopedResources),
    excluded_namespace_scoped_resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedNamespaceScopedResources),
    excluded_namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedNamespaces),
    excluded_resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedResources),
    include_cluster_resources: cdktf.booleanToTerraform(struct!.includeClusterResources),
    included_cluster_scoped_resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includedClusterScopedResources),
    included_namespace_scoped_resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includedNamespaceScopedResources),
    included_namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includedNamespaces),
    included_resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includedResources),
    ordered_resources: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.orderedResources),
    snapshot_move_data: cdktf.booleanToTerraform(struct!.snapshotMoveData),
    snapshot_volumes: cdktf.booleanToTerraform(struct!.snapshotVolumes),
    storage_location: cdktf.stringToTerraform(struct!.storageLocation),
    volume_snapshot_locations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.volumeSnapshotLocations),
    hooks: backupScheduleSpecTemplateHooksToTerraform(struct!.hooks),
    label_selector: backupScheduleSpecTemplateLabelSelectorToTerraform(struct!.labelSelector),
    or_label_selector: cdktf.listMapper(backupScheduleSpecTemplateOrLabelSelectorToTerraform, true)(struct!.orLabelSelector),
  }
}


export function backupScheduleSpecTemplateToHclTerraform(struct?: BackupScheduleSpecTemplateOutputReference | BackupScheduleSpecTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup_ttl: {
      value: cdktf.stringToHclTerraform(struct!.backupTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    csi_snapshot_timeout: {
      value: cdktf.stringToHclTerraform(struct!.csiSnapshotTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_volumes_to_fs_backup: {
      value: cdktf.booleanToHclTerraform(struct!.defaultVolumesToFsBackup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    default_volumes_to_restic: {
      value: cdktf.booleanToHclTerraform(struct!.defaultVolumesToRestic),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    excluded_cluster_scoped_resources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludedClusterScopedResources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    excluded_namespace_scoped_resources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludedNamespaceScopedResources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    excluded_namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludedNamespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    excluded_resources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludedResources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    include_cluster_resources: {
      value: cdktf.booleanToHclTerraform(struct!.includeClusterResources),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    included_cluster_scoped_resources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includedClusterScopedResources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    included_namespace_scoped_resources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includedNamespaceScopedResources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    included_namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includedNamespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    included_resources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includedResources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ordered_resources: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.orderedResources),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    snapshot_move_data: {
      value: cdktf.booleanToHclTerraform(struct!.snapshotMoveData),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    snapshot_volumes: {
      value: cdktf.booleanToHclTerraform(struct!.snapshotVolumes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    storage_location: {
      value: cdktf.stringToHclTerraform(struct!.storageLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_snapshot_locations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.volumeSnapshotLocations),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    hooks: {
      value: backupScheduleSpecTemplateHooksToHclTerraform(struct!.hooks),
      isBlock: true,
      type: "list",
      storageClassType: "BackupScheduleSpecTemplateHooksList",
    },
    label_selector: {
      value: backupScheduleSpecTemplateLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "list",
      storageClassType: "BackupScheduleSpecTemplateLabelSelectorList",
    },
    or_label_selector: {
      value: cdktf.listMapperHcl(backupScheduleSpecTemplateOrLabelSelectorToHclTerraform, true)(struct!.orLabelSelector),
      isBlock: true,
      type: "list",
      storageClassType: "BackupScheduleSpecTemplateOrLabelSelectorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupScheduleSpecTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupScheduleSpecTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupTtl = this._backupTtl;
    }
    if (this._csiSnapshotTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.csiSnapshotTimeout = this._csiSnapshotTimeout;
    }
    if (this._defaultVolumesToFsBackup !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultVolumesToFsBackup = this._defaultVolumesToFsBackup;
    }
    if (this._defaultVolumesToRestic !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultVolumesToRestic = this._defaultVolumesToRestic;
    }
    if (this._excludedClusterScopedResources !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedClusterScopedResources = this._excludedClusterScopedResources;
    }
    if (this._excludedNamespaceScopedResources !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedNamespaceScopedResources = this._excludedNamespaceScopedResources;
    }
    if (this._excludedNamespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedNamespaces = this._excludedNamespaces;
    }
    if (this._excludedResources !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedResources = this._excludedResources;
    }
    if (this._includeClusterResources !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeClusterResources = this._includeClusterResources;
    }
    if (this._includedClusterScopedResources !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedClusterScopedResources = this._includedClusterScopedResources;
    }
    if (this._includedNamespaceScopedResources !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedNamespaceScopedResources = this._includedNamespaceScopedResources;
    }
    if (this._includedNamespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedNamespaces = this._includedNamespaces;
    }
    if (this._includedResources !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedResources = this._includedResources;
    }
    if (this._orderedResources !== undefined) {
      hasAnyValues = true;
      internalValueResult.orderedResources = this._orderedResources;
    }
    if (this._snapshotMoveData !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotMoveData = this._snapshotMoveData;
    }
    if (this._snapshotVolumes !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotVolumes = this._snapshotVolumes;
    }
    if (this._storageLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageLocation = this._storageLocation;
    }
    if (this._volumeSnapshotLocations !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeSnapshotLocations = this._volumeSnapshotLocations;
    }
    if (this._hooks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hooks = this._hooks?.internalValue;
    }
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    if (this._orLabelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.orLabelSelector = this._orLabelSelector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupScheduleSpecTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backupTtl = undefined;
      this._csiSnapshotTimeout = undefined;
      this._defaultVolumesToFsBackup = undefined;
      this._defaultVolumesToRestic = undefined;
      this._excludedClusterScopedResources = undefined;
      this._excludedNamespaceScopedResources = undefined;
      this._excludedNamespaces = undefined;
      this._excludedResources = undefined;
      this._includeClusterResources = undefined;
      this._includedClusterScopedResources = undefined;
      this._includedNamespaceScopedResources = undefined;
      this._includedNamespaces = undefined;
      this._includedResources = undefined;
      this._orderedResources = undefined;
      this._snapshotMoveData = undefined;
      this._snapshotVolumes = undefined;
      this._storageLocation = undefined;
      this._volumeSnapshotLocations = undefined;
      this._hooks.internalValue = undefined;
      this._labelSelector.internalValue = undefined;
      this._orLabelSelector.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backupTtl = value.backupTtl;
      this._csiSnapshotTimeout = value.csiSnapshotTimeout;
      this._defaultVolumesToFsBackup = value.defaultVolumesToFsBackup;
      this._defaultVolumesToRestic = value.defaultVolumesToRestic;
      this._excludedClusterScopedResources = value.excludedClusterScopedResources;
      this._excludedNamespaceScopedResources = value.excludedNamespaceScopedResources;
      this._excludedNamespaces = value.excludedNamespaces;
      this._excludedResources = value.excludedResources;
      this._includeClusterResources = value.includeClusterResources;
      this._includedClusterScopedResources = value.includedClusterScopedResources;
      this._includedNamespaceScopedResources = value.includedNamespaceScopedResources;
      this._includedNamespaces = value.includedNamespaces;
      this._includedResources = value.includedResources;
      this._orderedResources = value.orderedResources;
      this._snapshotMoveData = value.snapshotMoveData;
      this._snapshotVolumes = value.snapshotVolumes;
      this._storageLocation = value.storageLocation;
      this._volumeSnapshotLocations = value.volumeSnapshotLocations;
      this._hooks.internalValue = value.hooks;
      this._labelSelector.internalValue = value.labelSelector;
      this._orLabelSelector.internalValue = value.orLabelSelector;
    }
  }

  // backup_ttl - computed: false, optional: true, required: false
  private _backupTtl?: string; 
  public get backupTtl() {
    return this.getStringAttribute('backup_ttl');
  }
  public set backupTtl(value: string) {
    this._backupTtl = value;
  }
  public resetBackupTtl() {
    this._backupTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupTtlInput() {
    return this._backupTtl;
  }

  // csi_snapshot_timeout - computed: false, optional: true, required: false
  private _csiSnapshotTimeout?: string; 
  public get csiSnapshotTimeout() {
    return this.getStringAttribute('csi_snapshot_timeout');
  }
  public set csiSnapshotTimeout(value: string) {
    this._csiSnapshotTimeout = value;
  }
  public resetCsiSnapshotTimeout() {
    this._csiSnapshotTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csiSnapshotTimeoutInput() {
    return this._csiSnapshotTimeout;
  }

  // default_volumes_to_fs_backup - computed: false, optional: true, required: false
  private _defaultVolumesToFsBackup?: boolean | cdktf.IResolvable; 
  public get defaultVolumesToFsBackup() {
    return this.getBooleanAttribute('default_volumes_to_fs_backup');
  }
  public set defaultVolumesToFsBackup(value: boolean | cdktf.IResolvable) {
    this._defaultVolumesToFsBackup = value;
  }
  public resetDefaultVolumesToFsBackup() {
    this._defaultVolumesToFsBackup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultVolumesToFsBackupInput() {
    return this._defaultVolumesToFsBackup;
  }

  // default_volumes_to_restic - computed: false, optional: true, required: false
  private _defaultVolumesToRestic?: boolean | cdktf.IResolvable; 
  public get defaultVolumesToRestic() {
    return this.getBooleanAttribute('default_volumes_to_restic');
  }
  public set defaultVolumesToRestic(value: boolean | cdktf.IResolvable) {
    this._defaultVolumesToRestic = value;
  }
  public resetDefaultVolumesToRestic() {
    this._defaultVolumesToRestic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultVolumesToResticInput() {
    return this._defaultVolumesToRestic;
  }

  // excluded_cluster_scoped_resources - computed: false, optional: true, required: false
  private _excludedClusterScopedResources?: string[]; 
  public get excludedClusterScopedResources() {
    return this.getListAttribute('excluded_cluster_scoped_resources');
  }
  public set excludedClusterScopedResources(value: string[]) {
    this._excludedClusterScopedResources = value;
  }
  public resetExcludedClusterScopedResources() {
    this._excludedClusterScopedResources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedClusterScopedResourcesInput() {
    return this._excludedClusterScopedResources;
  }

  // excluded_namespace_scoped_resources - computed: false, optional: true, required: false
  private _excludedNamespaceScopedResources?: string[]; 
  public get excludedNamespaceScopedResources() {
    return this.getListAttribute('excluded_namespace_scoped_resources');
  }
  public set excludedNamespaceScopedResources(value: string[]) {
    this._excludedNamespaceScopedResources = value;
  }
  public resetExcludedNamespaceScopedResources() {
    this._excludedNamespaceScopedResources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedNamespaceScopedResourcesInput() {
    return this._excludedNamespaceScopedResources;
  }

  // excluded_namespaces - computed: false, optional: true, required: false
  private _excludedNamespaces?: string[]; 
  public get excludedNamespaces() {
    return this.getListAttribute('excluded_namespaces');
  }
  public set excludedNamespaces(value: string[]) {
    this._excludedNamespaces = value;
  }
  public resetExcludedNamespaces() {
    this._excludedNamespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedNamespacesInput() {
    return this._excludedNamespaces;
  }

  // excluded_resources - computed: false, optional: true, required: false
  private _excludedResources?: string[]; 
  public get excludedResources() {
    return this.getListAttribute('excluded_resources');
  }
  public set excludedResources(value: string[]) {
    this._excludedResources = value;
  }
  public resetExcludedResources() {
    this._excludedResources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedResourcesInput() {
    return this._excludedResources;
  }

  // include_cluster_resources - computed: false, optional: true, required: false
  private _includeClusterResources?: boolean | cdktf.IResolvable; 
  public get includeClusterResources() {
    return this.getBooleanAttribute('include_cluster_resources');
  }
  public set includeClusterResources(value: boolean | cdktf.IResolvable) {
    this._includeClusterResources = value;
  }
  public resetIncludeClusterResources() {
    this._includeClusterResources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeClusterResourcesInput() {
    return this._includeClusterResources;
  }

  // included_cluster_scoped_resources - computed: false, optional: true, required: false
  private _includedClusterScopedResources?: string[]; 
  public get includedClusterScopedResources() {
    return this.getListAttribute('included_cluster_scoped_resources');
  }
  public set includedClusterScopedResources(value: string[]) {
    this._includedClusterScopedResources = value;
  }
  public resetIncludedClusterScopedResources() {
    this._includedClusterScopedResources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedClusterScopedResourcesInput() {
    return this._includedClusterScopedResources;
  }

  // included_namespace_scoped_resources - computed: false, optional: true, required: false
  private _includedNamespaceScopedResources?: string[]; 
  public get includedNamespaceScopedResources() {
    return this.getListAttribute('included_namespace_scoped_resources');
  }
  public set includedNamespaceScopedResources(value: string[]) {
    this._includedNamespaceScopedResources = value;
  }
  public resetIncludedNamespaceScopedResources() {
    this._includedNamespaceScopedResources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedNamespaceScopedResourcesInput() {
    return this._includedNamespaceScopedResources;
  }

  // included_namespaces - computed: false, optional: true, required: false
  private _includedNamespaces?: string[]; 
  public get includedNamespaces() {
    return this.getListAttribute('included_namespaces');
  }
  public set includedNamespaces(value: string[]) {
    this._includedNamespaces = value;
  }
  public resetIncludedNamespaces() {
    this._includedNamespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedNamespacesInput() {
    return this._includedNamespaces;
  }

  // included_resources - computed: false, optional: true, required: false
  private _includedResources?: string[]; 
  public get includedResources() {
    return this.getListAttribute('included_resources');
  }
  public set includedResources(value: string[]) {
    this._includedResources = value;
  }
  public resetIncludedResources() {
    this._includedResources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedResourcesInput() {
    return this._includedResources;
  }

  // ordered_resources - computed: false, optional: true, required: false
  private _orderedResources?: { [key: string]: string }; 
  public get orderedResources() {
    return this.getStringMapAttribute('ordered_resources');
  }
  public set orderedResources(value: { [key: string]: string }) {
    this._orderedResources = value;
  }
  public resetOrderedResources() {
    this._orderedResources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderedResourcesInput() {
    return this._orderedResources;
  }

  // snapshot_move_data - computed: false, optional: true, required: false
  private _snapshotMoveData?: boolean | cdktf.IResolvable; 
  public get snapshotMoveData() {
    return this.getBooleanAttribute('snapshot_move_data');
  }
  public set snapshotMoveData(value: boolean | cdktf.IResolvable) {
    this._snapshotMoveData = value;
  }
  public resetSnapshotMoveData() {
    this._snapshotMoveData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotMoveDataInput() {
    return this._snapshotMoveData;
  }

  // snapshot_volumes - computed: false, optional: true, required: false
  private _snapshotVolumes?: boolean | cdktf.IResolvable; 
  public get snapshotVolumes() {
    return this.getBooleanAttribute('snapshot_volumes');
  }
  public set snapshotVolumes(value: boolean | cdktf.IResolvable) {
    this._snapshotVolumes = value;
  }
  public resetSnapshotVolumes() {
    this._snapshotVolumes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotVolumesInput() {
    return this._snapshotVolumes;
  }

  // storage_location - computed: false, optional: true, required: false
  private _storageLocation?: string; 
  public get storageLocation() {
    return this.getStringAttribute('storage_location');
  }
  public set storageLocation(value: string) {
    this._storageLocation = value;
  }
  public resetStorageLocation() {
    this._storageLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageLocationInput() {
    return this._storageLocation;
  }

  // sys_excluded_namespaces - computed: true, optional: false, required: false
  public get sysExcludedNamespaces() {
    return this.getListAttribute('sys_excluded_namespaces');
  }

  // volume_snapshot_locations - computed: false, optional: true, required: false
  private _volumeSnapshotLocations?: string[]; 
  public get volumeSnapshotLocations() {
    return this.getListAttribute('volume_snapshot_locations');
  }
  public set volumeSnapshotLocations(value: string[]) {
    this._volumeSnapshotLocations = value;
  }
  public resetVolumeSnapshotLocations() {
    this._volumeSnapshotLocations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeSnapshotLocationsInput() {
    return this._volumeSnapshotLocations;
  }

  // hooks - computed: false, optional: true, required: false
  private _hooks = new BackupScheduleSpecTemplateHooksOutputReference(this, "hooks");
  public get hooks() {
    return this._hooks;
  }
  public putHooks(value: BackupScheduleSpecTemplateHooks) {
    this._hooks.internalValue = value;
  }
  public resetHooks() {
    this._hooks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hooksInput() {
    return this._hooks.internalValue;
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new BackupScheduleSpecTemplateLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: BackupScheduleSpecTemplateLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
  }

  // or_label_selector - computed: false, optional: true, required: false
  private _orLabelSelector = new BackupScheduleSpecTemplateOrLabelSelectorList(this, "or_label_selector", false);
  public get orLabelSelector() {
    return this._orLabelSelector;
  }
  public putOrLabelSelector(value: BackupScheduleSpecTemplateOrLabelSelector[] | cdktf.IResolvable) {
    this._orLabelSelector.internalValue = value;
  }
  public resetOrLabelSelector() {
    this._orLabelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orLabelSelectorInput() {
    return this._orLabelSelector.internalValue;
  }
}
export interface BackupScheduleSpec {
  /**
  * Paused specifies whether the schedule is paused or not. (Default: False)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/backup_schedule#paused BackupSchedule#paused}
  */
  readonly paused?: boolean | cdktf.IResolvable;
  /**
  * schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/backup_schedule#schedule BackupSchedule#schedule}
  */
  readonly schedule: BackupScheduleSpecSchedule;
  /**
  * template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/backup_schedule#template BackupSchedule#template}
  */
  readonly template?: BackupScheduleSpecTemplate;
}

export function backupScheduleSpecToTerraform(struct?: BackupScheduleSpecOutputReference | BackupScheduleSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    paused: cdktf.booleanToTerraform(struct!.paused),
    schedule: backupScheduleSpecScheduleToTerraform(struct!.schedule),
    template: backupScheduleSpecTemplateToTerraform(struct!.template),
  }
}


export function backupScheduleSpecToHclTerraform(struct?: BackupScheduleSpecOutputReference | BackupScheduleSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    paused: {
      value: cdktf.booleanToHclTerraform(struct!.paused),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    schedule: {
      value: backupScheduleSpecScheduleToHclTerraform(struct!.schedule),
      isBlock: true,
      type: "list",
      storageClassType: "BackupScheduleSpecScheduleList",
    },
    template: {
      value: backupScheduleSpecTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "list",
      storageClassType: "BackupScheduleSpecTemplateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupScheduleSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupScheduleSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._paused !== undefined) {
      hasAnyValues = true;
      internalValueResult.paused = this._paused;
    }
    if (this._schedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule?.internalValue;
    }
    if (this._template?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupScheduleSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._paused = undefined;
      this._schedule.internalValue = undefined;
      this._template.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._paused = value.paused;
      this._schedule.internalValue = value.schedule;
      this._template.internalValue = value.template;
    }
  }

  // paused - computed: false, optional: true, required: false
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

  // schedule - computed: false, optional: false, required: true
  private _schedule = new BackupScheduleSpecScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: BackupScheduleSpecSchedule) {
    this._schedule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }

  // template - computed: false, optional: true, required: false
  private _template = new BackupScheduleSpecTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: BackupScheduleSpecTemplate) {
    this._template.internalValue = value;
  }
  public resetTemplate() {
    this._template.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/backup_schedule tanzu-mission-control_backup_schedule}
*/
export class BackupSchedule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tanzu-mission-control_backup_schedule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BackupSchedule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BackupSchedule to import
  * @param importFromId The id of the existing BackupSchedule that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/backup_schedule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BackupSchedule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tanzu-mission-control_backup_schedule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/backup_schedule tanzu-mission-control_backup_schedule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BackupScheduleConfig
  */
  public constructor(scope: Construct, id: string, config: BackupScheduleConfig) {
    super(scope, id, {
      terraformResourceType: 'tanzu-mission-control_backup_schedule',
      terraformGeneratorMetadata: {
        providerName: 'tanzu-mission-control',
        providerVersion: '1.4.9'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._backupScope = config.backupScope;
    this._id = config.id;
    this._name = config.name;
    this._meta.internalValue = config.meta;
    this._scope.internalValue = config.scope;
    this._selector.internalValue = config.selector;
    this._spec.internalValue = config.spec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_scope - computed: false, optional: false, required: true
  private _backupScope?: string; 
  public get backupScope() {
    return this.getStringAttribute('backup_scope');
  }
  public set backupScope(value: string) {
    this._backupScope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupScopeInput() {
    return this._backupScope;
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

  // meta - computed: false, optional: true, required: false
  private _meta = new BackupScheduleMetaOutputReference(this, "meta");
  public get meta() {
    return this._meta;
  }
  public putMeta(value: BackupScheduleMeta) {
    this._meta.internalValue = value;
  }
  public resetMeta() {
    this._meta.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metaInput() {
    return this._meta.internalValue;
  }

  // scope - computed: false, optional: false, required: true
  private _scope = new BackupScheduleScopeOutputReference(this, "scope");
  public get scope() {
    return this._scope;
  }
  public putScope(value: BackupScheduleScope) {
    this._scope.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope.internalValue;
  }

  // selector - computed: false, optional: true, required: false
  private _selector = new BackupScheduleSelectorList(this, "selector", false);
  public get selector() {
    return this._selector;
  }
  public putSelector(value: BackupScheduleSelector[] | cdktf.IResolvable) {
    this._selector.internalValue = value;
  }
  public resetSelector() {
    this._selector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new BackupScheduleSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: BackupScheduleSpec) {
    this._spec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backup_scope: cdktf.stringToTerraform(this._backupScope),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      meta: backupScheduleMetaToTerraform(this._meta.internalValue),
      scope: backupScheduleScopeToTerraform(this._scope.internalValue),
      selector: cdktf.listMapper(backupScheduleSelectorToTerraform, true)(this._selector.internalValue),
      spec: backupScheduleSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backup_scope: {
        value: cdktf.stringToHclTerraform(this._backupScope),
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
      meta: {
        value: backupScheduleMetaToHclTerraform(this._meta.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BackupScheduleMetaList",
      },
      scope: {
        value: backupScheduleScopeToHclTerraform(this._scope.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BackupScheduleScopeList",
      },
      selector: {
        value: cdktf.listMapperHcl(backupScheduleSelectorToHclTerraform, true)(this._selector.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BackupScheduleSelectorList",
      },
      spec: {
        value: backupScheduleSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BackupScheduleSpecList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
