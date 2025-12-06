// https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/enable_data_protection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EnableDataProtectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/enable_data_protection#id EnableDataProtection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * deletion_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/enable_data_protection#deletion_policy EnableDataProtection#deletion_policy}
  */
  readonly deletionPolicy?: EnableDataProtectionDeletionPolicy;
  /**
  * meta block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/enable_data_protection#meta EnableDataProtection#meta}
  */
  readonly meta?: EnableDataProtectionMeta;
  /**
  * scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/enable_data_protection#scope EnableDataProtection#scope}
  */
  readonly scope: EnableDataProtectionScope;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/enable_data_protection#spec EnableDataProtection#spec}
  */
  readonly spec?: EnableDataProtectionSpec;
}
export interface EnableDataProtectionDeletionPolicy {
  /**
  * Destroy backups upon deleting data protection.
  * (default: false)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/enable_data_protection#delete_backups EnableDataProtection#delete_backups}
  */
  readonly deleteBackups?: boolean | cdktf.IResolvable;
  /**
  * Disable data protection on all clusters in the cluster group even if cluster level schedules present.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/enable_data_protection#force EnableDataProtection#force}
  */
  readonly force?: boolean | cdktf.IResolvable;
}

export function enableDataProtectionDeletionPolicyToTerraform(struct?: EnableDataProtectionDeletionPolicyOutputReference | EnableDataProtectionDeletionPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete_backups: cdktf.booleanToTerraform(struct!.deleteBackups),
    force: cdktf.booleanToTerraform(struct!.force),
  }
}


export function enableDataProtectionDeletionPolicyToHclTerraform(struct?: EnableDataProtectionDeletionPolicyOutputReference | EnableDataProtectionDeletionPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delete_backups: {
      value: cdktf.booleanToHclTerraform(struct!.deleteBackups),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    force: {
      value: cdktf.booleanToHclTerraform(struct!.force),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnableDataProtectionDeletionPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnableDataProtectionDeletionPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deleteBackups !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteBackups = this._deleteBackups;
    }
    if (this._force !== undefined) {
      hasAnyValues = true;
      internalValueResult.force = this._force;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnableDataProtectionDeletionPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deleteBackups = undefined;
      this._force = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deleteBackups = value.deleteBackups;
      this._force = value.force;
    }
  }

  // delete_backups - computed: false, optional: true, required: false
  private _deleteBackups?: boolean | cdktf.IResolvable; 
  public get deleteBackups() {
    return this.getBooleanAttribute('delete_backups');
  }
  public set deleteBackups(value: boolean | cdktf.IResolvable) {
    this._deleteBackups = value;
  }
  public resetDeleteBackups() {
    this._deleteBackups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteBackupsInput() {
    return this._deleteBackups;
  }

  // force - computed: true, optional: true, required: false
  private _force?: boolean | cdktf.IResolvable; 
  public get force() {
    return this.getBooleanAttribute('force');
  }
  public set force(value: boolean | cdktf.IResolvable) {
    this._force = value;
  }
  public resetForce() {
    this._force = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceInput() {
    return this._force;
  }
}
export interface EnableDataProtectionMeta {
  /**
  * Annotations for the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/enable_data_protection#annotations EnableDataProtection#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Description of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/enable_data_protection#description EnableDataProtection#description}
  */
  readonly description?: string;
  /**
  * Labels for the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/enable_data_protection#labels EnableDataProtection#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function enableDataProtectionMetaToTerraform(struct?: EnableDataProtectionMetaOutputReference | EnableDataProtectionMeta): any {
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


export function enableDataProtectionMetaToHclTerraform(struct?: EnableDataProtectionMetaOutputReference | EnableDataProtectionMeta): any {
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

export class EnableDataProtectionMetaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnableDataProtectionMeta | undefined {
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

  public set internalValue(value: EnableDataProtectionMeta | undefined) {
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
export interface EnableDataProtectionScopeCluster {
  /**
  * Cluster name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/enable_data_protection#cluster_name EnableDataProtection#cluster_name}
  */
  readonly clusterName: string;
  /**
  * Management cluster name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/enable_data_protection#management_cluster_name EnableDataProtection#management_cluster_name}
  */
  readonly managementClusterName: string;
  /**
  * Cluster provisioner name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/enable_data_protection#provisioner_name EnableDataProtection#provisioner_name}
  */
  readonly provisionerName: string;
}

export function enableDataProtectionScopeClusterToTerraform(struct?: EnableDataProtectionScopeClusterOutputReference | EnableDataProtectionScopeCluster): any {
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


export function enableDataProtectionScopeClusterToHclTerraform(struct?: EnableDataProtectionScopeClusterOutputReference | EnableDataProtectionScopeCluster): any {
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

export class EnableDataProtectionScopeClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnableDataProtectionScopeCluster | undefined {
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

  public set internalValue(value: EnableDataProtectionScopeCluster | undefined) {
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
export interface EnableDataProtectionScopeClusterGroup {
  /**
  * Cluster group name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/enable_data_protection#cluster_group_name EnableDataProtection#cluster_group_name}
  */
  readonly clusterGroupName: string;
}

export function enableDataProtectionScopeClusterGroupToTerraform(struct?: EnableDataProtectionScopeClusterGroupOutputReference | EnableDataProtectionScopeClusterGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_group_name: cdktf.stringToTerraform(struct!.clusterGroupName),
  }
}


export function enableDataProtectionScopeClusterGroupToHclTerraform(struct?: EnableDataProtectionScopeClusterGroupOutputReference | EnableDataProtectionScopeClusterGroup): any {
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

export class EnableDataProtectionScopeClusterGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnableDataProtectionScopeClusterGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterGroupName = this._clusterGroupName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnableDataProtectionScopeClusterGroup | undefined) {
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
export interface EnableDataProtectionScope {
  /**
  * cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/enable_data_protection#cluster EnableDataProtection#cluster}
  */
  readonly cluster?: EnableDataProtectionScopeCluster;
  /**
  * cluster_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/enable_data_protection#cluster_group EnableDataProtection#cluster_group}
  */
  readonly clusterGroup?: EnableDataProtectionScopeClusterGroup;
}

export function enableDataProtectionScopeToTerraform(struct?: EnableDataProtectionScopeOutputReference | EnableDataProtectionScope): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster: enableDataProtectionScopeClusterToTerraform(struct!.cluster),
    cluster_group: enableDataProtectionScopeClusterGroupToTerraform(struct!.clusterGroup),
  }
}


export function enableDataProtectionScopeToHclTerraform(struct?: EnableDataProtectionScopeOutputReference | EnableDataProtectionScope): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster: {
      value: enableDataProtectionScopeClusterToHclTerraform(struct!.cluster),
      isBlock: true,
      type: "list",
      storageClassType: "EnableDataProtectionScopeClusterList",
    },
    cluster_group: {
      value: enableDataProtectionScopeClusterGroupToHclTerraform(struct!.clusterGroup),
      isBlock: true,
      type: "list",
      storageClassType: "EnableDataProtectionScopeClusterGroupList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnableDataProtectionScopeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnableDataProtectionScope | undefined {
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

  public set internalValue(value: EnableDataProtectionScope | undefined) {
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
  private _cluster = new EnableDataProtectionScopeClusterOutputReference(this, "cluster");
  public get cluster() {
    return this._cluster;
  }
  public putCluster(value: EnableDataProtectionScopeCluster) {
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
  private _clusterGroup = new EnableDataProtectionScopeClusterGroupOutputReference(this, "cluster_group");
  public get clusterGroup() {
    return this._clusterGroup;
  }
  public putClusterGroup(value: EnableDataProtectionScopeClusterGroup) {
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
export interface EnableDataProtectionSpecSelectorLabelselectorMatchexpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/enable_data_protection#key EnableDataProtection#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/enable_data_protection#operator EnableDataProtection#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/enable_data_protection#values EnableDataProtection#values}
  */
  readonly values: string[];
}

export function enableDataProtectionSpecSelectorLabelselectorMatchexpressionsToTerraform(struct?: EnableDataProtectionSpecSelectorLabelselectorMatchexpressions | cdktf.IResolvable): any {
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


export function enableDataProtectionSpecSelectorLabelselectorMatchexpressionsToHclTerraform(struct?: EnableDataProtectionSpecSelectorLabelselectorMatchexpressions | cdktf.IResolvable): any {
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

export class EnableDataProtectionSpecSelectorLabelselectorMatchexpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnableDataProtectionSpecSelectorLabelselectorMatchexpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EnableDataProtectionSpecSelectorLabelselectorMatchexpressions | cdktf.IResolvable | undefined) {
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

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class EnableDataProtectionSpecSelectorLabelselectorMatchexpressionsList extends cdktf.ComplexList {
  public internalValue? : EnableDataProtectionSpecSelectorLabelselectorMatchexpressions[] | cdktf.IResolvable

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
  public get(index: number): EnableDataProtectionSpecSelectorLabelselectorMatchexpressionsOutputReference {
    return new EnableDataProtectionSpecSelectorLabelselectorMatchexpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnableDataProtectionSpecSelectorLabelselector {
  /**
  * matchexpressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/enable_data_protection#matchexpressions EnableDataProtection#matchexpressions}
  */
  readonly matchexpressions?: EnableDataProtectionSpecSelectorLabelselectorMatchexpressions[] | cdktf.IResolvable;
}

export function enableDataProtectionSpecSelectorLabelselectorToTerraform(struct?: EnableDataProtectionSpecSelectorLabelselector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    matchexpressions: cdktf.listMapper(enableDataProtectionSpecSelectorLabelselectorMatchexpressionsToTerraform, true)(struct!.matchexpressions),
  }
}


export function enableDataProtectionSpecSelectorLabelselectorToHclTerraform(struct?: EnableDataProtectionSpecSelectorLabelselector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    matchexpressions: {
      value: cdktf.listMapperHcl(enableDataProtectionSpecSelectorLabelselectorMatchexpressionsToHclTerraform, true)(struct!.matchexpressions),
      isBlock: true,
      type: "list",
      storageClassType: "EnableDataProtectionSpecSelectorLabelselectorMatchexpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnableDataProtectionSpecSelectorLabelselectorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnableDataProtectionSpecSelectorLabelselector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchexpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchexpressions = this._matchexpressions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnableDataProtectionSpecSelectorLabelselector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchexpressions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchexpressions.internalValue = value.matchexpressions;
    }
  }

  // matchexpressions - computed: false, optional: true, required: false
  private _matchexpressions = new EnableDataProtectionSpecSelectorLabelselectorMatchexpressionsList(this, "matchexpressions", false);
  public get matchexpressions() {
    return this._matchexpressions;
  }
  public putMatchexpressions(value: EnableDataProtectionSpecSelectorLabelselectorMatchexpressions[] | cdktf.IResolvable) {
    this._matchexpressions.internalValue = value;
  }
  public resetMatchexpressions() {
    this._matchexpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchexpressionsInput() {
    return this._matchexpressions.internalValue;
  }
}

export class EnableDataProtectionSpecSelectorLabelselectorList extends cdktf.ComplexList {
  public internalValue? : EnableDataProtectionSpecSelectorLabelselector[] | cdktf.IResolvable

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
  public get(index: number): EnableDataProtectionSpecSelectorLabelselectorOutputReference {
    return new EnableDataProtectionSpecSelectorLabelselectorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnableDataProtectionSpecSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/enable_data_protection#excludednames EnableDataProtection#excludednames}
  */
  readonly excludednames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/enable_data_protection#names EnableDataProtection#names}
  */
  readonly names?: string[];
  /**
  * labelselector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/enable_data_protection#labelselector EnableDataProtection#labelselector}
  */
  readonly labelselector?: EnableDataProtectionSpecSelectorLabelselector[] | cdktf.IResolvable;
}

export function enableDataProtectionSpecSelectorToTerraform(struct?: EnableDataProtectionSpecSelectorOutputReference | EnableDataProtectionSpecSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    excludednames: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludednames),
    names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.names),
    labelselector: cdktf.listMapper(enableDataProtectionSpecSelectorLabelselectorToTerraform, true)(struct!.labelselector),
  }
}


export function enableDataProtectionSpecSelectorToHclTerraform(struct?: EnableDataProtectionSpecSelectorOutputReference | EnableDataProtectionSpecSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    excludednames: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludednames),
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
    labelselector: {
      value: cdktf.listMapperHcl(enableDataProtectionSpecSelectorLabelselectorToHclTerraform, true)(struct!.labelselector),
      isBlock: true,
      type: "list",
      storageClassType: "EnableDataProtectionSpecSelectorLabelselectorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnableDataProtectionSpecSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnableDataProtectionSpecSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludednames !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludednames = this._excludednames;
    }
    if (this._names !== undefined) {
      hasAnyValues = true;
      internalValueResult.names = this._names;
    }
    if (this._labelselector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelselector = this._labelselector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnableDataProtectionSpecSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._excludednames = undefined;
      this._names = undefined;
      this._labelselector.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._excludednames = value.excludednames;
      this._names = value.names;
      this._labelselector.internalValue = value.labelselector;
    }
  }

  // excludednames - computed: false, optional: true, required: false
  private _excludednames?: string[]; 
  public get excludednames() {
    return this.getListAttribute('excludednames');
  }
  public set excludednames(value: string[]) {
    this._excludednames = value;
  }
  public resetExcludednames() {
    this._excludednames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludednamesInput() {
    return this._excludednames;
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

  // labelselector - computed: false, optional: true, required: false
  private _labelselector = new EnableDataProtectionSpecSelectorLabelselectorList(this, "labelselector", false);
  public get labelselector() {
    return this._labelselector;
  }
  public putLabelselector(value: EnableDataProtectionSpecSelectorLabelselector[] | cdktf.IResolvable) {
    this._labelselector.internalValue = value;
  }
  public resetLabelselector() {
    this._labelselector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelselectorInput() {
    return this._labelselector.internalValue;
  }
}
export interface EnableDataProtectionSpec {
  /**
  * A flag to indicate whether to skip installation of restic server (https://github.com/restic/restic).
  * Otherwise, restic would be enabled by default as part of Data Protection installation.
  * (Default: False)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/enable_data_protection#disable_restic EnableDataProtection#disable_restic}
  */
  readonly disableRestic?: boolean | cdktf.IResolvable;
  /**
  * A flag to indicate whether to backup all the supported API Group versions of a resource on the cluster.
  * (Default: False)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/enable_data_protection#enable_all_api_group_versions_backup EnableDataProtection#enable_all_api_group_versions_backup}
  */
  readonly enableAllApiGroupVersionsBackup?: boolean | cdktf.IResolvable;
  /**
  * A flag to indicate whether to install CSI snapshotting related capabilities.
  * (Default: False)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/enable_data_protection#enable_csi_snapshots EnableDataProtection#enable_csi_snapshots}
  */
  readonly enableCsiSnapshots?: boolean | cdktf.IResolvable;
  /**
  * A flag to indicate whether to install the node agent daemonset which is responsible for volume data transfer to the target location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/enable_data_protection#use_node_agent EnableDataProtection#use_node_agent}
  */
  readonly useNodeAgent?: boolean | cdktf.IResolvable;
  /**
  * selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/enable_data_protection#selector EnableDataProtection#selector}
  */
  readonly selector?: EnableDataProtectionSpecSelector;
}

export function enableDataProtectionSpecToTerraform(struct?: EnableDataProtectionSpecOutputReference | EnableDataProtectionSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_restic: cdktf.booleanToTerraform(struct!.disableRestic),
    enable_all_api_group_versions_backup: cdktf.booleanToTerraform(struct!.enableAllApiGroupVersionsBackup),
    enable_csi_snapshots: cdktf.booleanToTerraform(struct!.enableCsiSnapshots),
    use_node_agent: cdktf.booleanToTerraform(struct!.useNodeAgent),
    selector: enableDataProtectionSpecSelectorToTerraform(struct!.selector),
  }
}


export function enableDataProtectionSpecToHclTerraform(struct?: EnableDataProtectionSpecOutputReference | EnableDataProtectionSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_restic: {
      value: cdktf.booleanToHclTerraform(struct!.disableRestic),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_all_api_group_versions_backup: {
      value: cdktf.booleanToHclTerraform(struct!.enableAllApiGroupVersionsBackup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_csi_snapshots: {
      value: cdktf.booleanToHclTerraform(struct!.enableCsiSnapshots),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_node_agent: {
      value: cdktf.booleanToHclTerraform(struct!.useNodeAgent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    selector: {
      value: enableDataProtectionSpecSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "list",
      storageClassType: "EnableDataProtectionSpecSelectorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnableDataProtectionSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnableDataProtectionSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableRestic !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableRestic = this._disableRestic;
    }
    if (this._enableAllApiGroupVersionsBackup !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAllApiGroupVersionsBackup = this._enableAllApiGroupVersionsBackup;
    }
    if (this._enableCsiSnapshots !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableCsiSnapshots = this._enableCsiSnapshots;
    }
    if (this._useNodeAgent !== undefined) {
      hasAnyValues = true;
      internalValueResult.useNodeAgent = this._useNodeAgent;
    }
    if (this._selector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnableDataProtectionSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableRestic = undefined;
      this._enableAllApiGroupVersionsBackup = undefined;
      this._enableCsiSnapshots = undefined;
      this._useNodeAgent = undefined;
      this._selector.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableRestic = value.disableRestic;
      this._enableAllApiGroupVersionsBackup = value.enableAllApiGroupVersionsBackup;
      this._enableCsiSnapshots = value.enableCsiSnapshots;
      this._useNodeAgent = value.useNodeAgent;
      this._selector.internalValue = value.selector;
    }
  }

  // disable_restic - computed: true, optional: true, required: false
  private _disableRestic?: boolean | cdktf.IResolvable; 
  public get disableRestic() {
    return this.getBooleanAttribute('disable_restic');
  }
  public set disableRestic(value: boolean | cdktf.IResolvable) {
    this._disableRestic = value;
  }
  public resetDisableRestic() {
    this._disableRestic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableResticInput() {
    return this._disableRestic;
  }

  // enable_all_api_group_versions_backup - computed: true, optional: true, required: false
  private _enableAllApiGroupVersionsBackup?: boolean | cdktf.IResolvable; 
  public get enableAllApiGroupVersionsBackup() {
    return this.getBooleanAttribute('enable_all_api_group_versions_backup');
  }
  public set enableAllApiGroupVersionsBackup(value: boolean | cdktf.IResolvable) {
    this._enableAllApiGroupVersionsBackup = value;
  }
  public resetEnableAllApiGroupVersionsBackup() {
    this._enableAllApiGroupVersionsBackup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAllApiGroupVersionsBackupInput() {
    return this._enableAllApiGroupVersionsBackup;
  }

  // enable_csi_snapshots - computed: true, optional: true, required: false
  private _enableCsiSnapshots?: boolean | cdktf.IResolvable; 
  public get enableCsiSnapshots() {
    return this.getBooleanAttribute('enable_csi_snapshots');
  }
  public set enableCsiSnapshots(value: boolean | cdktf.IResolvable) {
    this._enableCsiSnapshots = value;
  }
  public resetEnableCsiSnapshots() {
    this._enableCsiSnapshots = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCsiSnapshotsInput() {
    return this._enableCsiSnapshots;
  }

  // use_node_agent - computed: true, optional: true, required: false
  private _useNodeAgent?: boolean | cdktf.IResolvable; 
  public get useNodeAgent() {
    return this.getBooleanAttribute('use_node_agent');
  }
  public set useNodeAgent(value: boolean | cdktf.IResolvable) {
    this._useNodeAgent = value;
  }
  public resetUseNodeAgent() {
    this._useNodeAgent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useNodeAgentInput() {
    return this._useNodeAgent;
  }

  // selector - computed: false, optional: true, required: false
  private _selector = new EnableDataProtectionSpecSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: EnableDataProtectionSpecSelector) {
    this._selector.internalValue = value;
  }
  public resetSelector() {
    this._selector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/enable_data_protection tanzu-mission-control_enable_data_protection}
*/
export class EnableDataProtection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tanzu-mission-control_enable_data_protection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EnableDataProtection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EnableDataProtection to import
  * @param importFromId The id of the existing EnableDataProtection that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/enable_data_protection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EnableDataProtection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tanzu-mission-control_enable_data_protection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/enable_data_protection tanzu-mission-control_enable_data_protection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EnableDataProtectionConfig
  */
  public constructor(scope: Construct, id: string, config: EnableDataProtectionConfig) {
    super(scope, id, {
      terraformResourceType: 'tanzu-mission-control_enable_data_protection',
      terraformGeneratorMetadata: {
        providerName: 'tanzu-mission-control',
        providerVersion: '1.4.10',
        providerVersionConstraint: '1.4.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._deletionPolicy.internalValue = config.deletionPolicy;
    this._meta.internalValue = config.meta;
    this._scope.internalValue = config.scope;
    this._spec.internalValue = config.spec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // deletion_policy - computed: false, optional: true, required: false
  private _deletionPolicy = new EnableDataProtectionDeletionPolicyOutputReference(this, "deletion_policy");
  public get deletionPolicy() {
    return this._deletionPolicy;
  }
  public putDeletionPolicy(value: EnableDataProtectionDeletionPolicy) {
    this._deletionPolicy.internalValue = value;
  }
  public resetDeletionPolicy() {
    this._deletionPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionPolicyInput() {
    return this._deletionPolicy.internalValue;
  }

  // meta - computed: false, optional: true, required: false
  private _meta = new EnableDataProtectionMetaOutputReference(this, "meta");
  public get meta() {
    return this._meta;
  }
  public putMeta(value: EnableDataProtectionMeta) {
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
  private _scope = new EnableDataProtectionScopeOutputReference(this, "scope");
  public get scope() {
    return this._scope;
  }
  public putScope(value: EnableDataProtectionScope) {
    this._scope.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new EnableDataProtectionSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: EnableDataProtectionSpec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
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
      id: cdktf.stringToTerraform(this._id),
      deletion_policy: enableDataProtectionDeletionPolicyToTerraform(this._deletionPolicy.internalValue),
      meta: enableDataProtectionMetaToTerraform(this._meta.internalValue),
      scope: enableDataProtectionScopeToTerraform(this._scope.internalValue),
      spec: enableDataProtectionSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deletion_policy: {
        value: enableDataProtectionDeletionPolicyToHclTerraform(this._deletionPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EnableDataProtectionDeletionPolicyList",
      },
      meta: {
        value: enableDataProtectionMetaToHclTerraform(this._meta.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EnableDataProtectionMetaList",
      },
      scope: {
        value: enableDataProtectionScopeToHclTerraform(this._scope.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EnableDataProtectionScopeList",
      },
      spec: {
        value: enableDataProtectionSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EnableDataProtectionSpecList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
