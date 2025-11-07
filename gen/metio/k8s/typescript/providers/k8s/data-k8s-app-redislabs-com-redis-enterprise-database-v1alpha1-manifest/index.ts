// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_redislabs_com_redis_enterprise_database_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_redislabs_com_redis_enterprise_database_v1alpha1_manifest#metadata DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestMetadata;
  /**
  * RedisEnterpriseDatabaseSpec defines the desired state of RedisEnterpriseDatabase
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_redislabs_com_redis_enterprise_database_v1alpha1_manifest#spec DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpec;
}
export interface DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_redislabs_com_redis_enterprise_database_v1alpha1_manifest#annotations DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_redislabs_com_redis_enterprise_database_v1alpha1_manifest#labels DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_redislabs_com_redis_enterprise_database_v1alpha1_manifest#name DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_redislabs_com_redis_enterprise_database_v1alpha1_manifest#namespace DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecActiveActive {
  /**
  * The the corresponding Active-Active database name, Redis Enterprise Active Active Database custom resource name, this Resource is associated with. In case this resource is created manually at the active active database creation this field must be filled via the user, otherwise, the operator will assign this field automatically. Note: this feature is currently unsupported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_redislabs_com_redis_enterprise_database_v1alpha1_manifest#name DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * The corresponding participating cluster name, Redis Enterprise Remote Cluster custom resource name, in the Active-Active database, In case this resource is created manually at the active active database creation this field must be filled via the user, otherwise, the operator will assign this field automatically. Note: this feature is currently unsupported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_redislabs_com_redis_enterprise_database_v1alpha1_manifest#participating_cluster_name DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1Manifest#participating_cluster_name}
  */
  readonly participatingClusterName: string;
}

export function dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecActiveActiveToTerraform(struct?: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecActiveActive | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    participating_cluster_name: cdktf.stringToTerraform(struct!.participatingClusterName),
  }
}


export function dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecActiveActiveToHclTerraform(struct?: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecActiveActive | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    participating_cluster_name: {
      value: cdktf.stringToHclTerraform(struct!.participatingClusterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecActiveActiveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecActiveActive | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._participatingClusterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.participatingClusterName = this._participatingClusterName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecActiveActive | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._participatingClusterName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._participatingClusterName = value.participatingClusterName;
    }
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

  // participating_cluster_name - computed: false, optional: false, required: true
  private _participatingClusterName?: string; 
  public get participatingClusterName() {
    return this.getStringAttribute('participating_cluster_name');
  }
  public set participatingClusterName(value: string) {
    this._participatingClusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get participatingClusterNameInput() {
    return this._participatingClusterName;
  }
}
export interface DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbBackupDelayed {
  /**
  * Alert enabled or disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_redislabs_com_redis_enterprise_database_v1alpha1_manifest#enabled DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbBackupDelayedToTerraform(struct?: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbBackupDelayed | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbBackupDelayedToHclTerraform(struct?: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbBackupDelayed | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbBackupDelayedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbBackupDelayed | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbBackupDelayed | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
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
}
export interface DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbCrdtSrcHighSyncerLag {
  /**
  * Alert enabled or disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_redislabs_com_redis_enterprise_database_v1alpha1_manifest#enabled DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbCrdtSrcHighSyncerLagToTerraform(struct?: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbCrdtSrcHighSyncerLag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbCrdtSrcHighSyncerLagToHclTerraform(struct?: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbCrdtSrcHighSyncerLag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbCrdtSrcHighSyncerLagOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbCrdtSrcHighSyncerLag | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbCrdtSrcHighSyncerLag | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
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
}
export interface DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbCrdtSrcSyncerConnectionError {
  /**
  * Alert enabled or disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_redislabs_com_redis_enterprise_database_v1alpha1_manifest#enabled DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbCrdtSrcSyncerConnectionErrorToTerraform(struct?: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbCrdtSrcSyncerConnectionError | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbCrdtSrcSyncerConnectionErrorToHclTerraform(struct?: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbCrdtSrcSyncerConnectionError | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbCrdtSrcSyncerConnectionErrorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbCrdtSrcSyncerConnectionError | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbCrdtSrcSyncerConnectionError | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
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
}
export interface DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbCrdtSrcSyncerGeneralError {
  /**
  * Alert enabled or disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_redislabs_com_redis_enterprise_database_v1alpha1_manifest#enabled DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbCrdtSrcSyncerGeneralErrorToTerraform(struct?: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbCrdtSrcSyncerGeneralError | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbCrdtSrcSyncerGeneralErrorToHclTerraform(struct?: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbCrdtSrcSyncerGeneralError | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbCrdtSrcSyncerGeneralErrorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbCrdtSrcSyncerGeneralError | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbCrdtSrcSyncerGeneralError | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
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
}
export interface DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbHighLatency {
  /**
  * Alert enabled or disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_redislabs_com_redis_enterprise_database_v1alpha1_manifest#enabled DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbHighLatencyToTerraform(struct?: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbHighLatency | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbHighLatencyToHclTerraform(struct?: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbHighLatency | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbHighLatencyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbHighLatency | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbHighLatency | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
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
}
export interface DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbHighThroughput {
  /**
  * Alert enabled or disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_redislabs_com_redis_enterprise_database_v1alpha1_manifest#enabled DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbHighThroughputToTerraform(struct?: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbHighThroughput | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbHighThroughputToHclTerraform(struct?: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbHighThroughput | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbHighThroughputOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbHighThroughput | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbHighThroughput | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
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
}
export interface DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbLongRunningAction {
  /**
  * Alert enabled or disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_redislabs_com_redis_enterprise_database_v1alpha1_manifest#enabled DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbLongRunningActionToTerraform(struct?: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbLongRunningAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbLongRunningActionToHclTerraform(struct?: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbLongRunningAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbLongRunningActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbLongRunningAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbLongRunningAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
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
}
export interface DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbLowThroughput {
  /**
  * Alert enabled or disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_redislabs_com_redis_enterprise_database_v1alpha1_manifest#enabled DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbLowThroughputToTerraform(struct?: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbLowThroughput | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbLowThroughputToHclTerraform(struct?: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbLowThroughput | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbLowThroughputOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbLowThroughput | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbLowThroughput | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
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
}
export interface DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbRamDatasetOverhead {
  /**
  * Alert enabled or disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_redislabs_com_redis_enterprise_database_v1alpha1_manifest#enabled DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbRamDatasetOverheadToTerraform(struct?: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbRamDatasetOverhead | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbRamDatasetOverheadToHclTerraform(struct?: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbRamDatasetOverhead | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbRamDatasetOverheadOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbRamDatasetOverhead | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbRamDatasetOverhead | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
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
}
export interface DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbRamValues {
  /**
  * Alert enabled or disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_redislabs_com_redis_enterprise_database_v1alpha1_manifest#enabled DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbRamValuesToTerraform(struct?: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbRamValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbRamValuesToHclTerraform(struct?: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbRamValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbRamValuesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbRamValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbRamValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
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
}
export interface DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbReplicaSrcHighSyncerLag {
  /**
  * Alert enabled or disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_redislabs_com_redis_enterprise_database_v1alpha1_manifest#enabled DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbReplicaSrcHighSyncerLagToTerraform(struct?: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbReplicaSrcHighSyncerLag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbReplicaSrcHighSyncerLagToHclTerraform(struct?: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbReplicaSrcHighSyncerLag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbReplicaSrcHighSyncerLagOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbReplicaSrcHighSyncerLag | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbReplicaSrcHighSyncerLag | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
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
}
export interface DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbReplicaSrcSyncerConnectionError {
  /**
  * Alert enabled or disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_redislabs_com_redis_enterprise_database_v1alpha1_manifest#enabled DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbReplicaSrcSyncerConnectionErrorToTerraform(struct?: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbReplicaSrcSyncerConnectionError | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbReplicaSrcSyncerConnectionErrorToHclTerraform(struct?: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbReplicaSrcSyncerConnectionError | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbReplicaSrcSyncerConnectionErrorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbReplicaSrcSyncerConnectionError | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbReplicaSrcSyncerConnectionError | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
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
}
export interface DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbShardNumRamValues {
  /**
  * Alert enabled or disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_redislabs_com_redis_enterprise_database_v1alpha1_manifest#enabled DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbShardNumRamValuesToTerraform(struct?: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbShardNumRamValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbShardNumRamValuesToHclTerraform(struct?: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbShardNumRamValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbShardNumRamValuesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbShardNumRamValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbShardNumRamValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
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
}
export interface DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbSize {
  /**
  * Alert enabled or disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_redislabs_com_redis_enterprise_database_v1alpha1_manifest#enabled DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbSizeToTerraform(struct?: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbSize | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbSizeToHclTerraform(struct?: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbSize | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbSize | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbSize | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
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
}
export interface DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettings {
  /**
  * Periodic backup has been delayed for longer than specified threshold value [minutes]. -Note threshold is commented (allow string/int/float and support backwards compatibility) but is required
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_redislabs_com_redis_enterprise_database_v1alpha1_manifest#bdb_backup_delayed DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1Manifest#bdb_backup_delayed}
  */
  readonly bdbBackupDelayed?: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbBackupDelayed;
  /**
  * Active-active source - sync lag is higher than specified threshold value [seconds] -Note threshold is commented (allow string/int/float and support backwards compatibility) but is required
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_redislabs_com_redis_enterprise_database_v1alpha1_manifest#bdb_crdt_src_high_syncer_lag DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1Manifest#bdb_crdt_src_high_syncer_lag}
  */
  readonly bdbCrdtSrcHighSyncerLag?: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbCrdtSrcHighSyncerLag;
  /**
  * Active-active source - sync has connection error while trying to connect replica source -Note threshold is commented (allow string/int/float and support backwards compatibility) but is required
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_redislabs_com_redis_enterprise_database_v1alpha1_manifest#bdb_crdt_src_syncer_connection_error DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1Manifest#bdb_crdt_src_syncer_connection_error}
  */
  readonly bdbCrdtSrcSyncerConnectionError?: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbCrdtSrcSyncerConnectionError;
  /**
  * Active-active source - sync encountered in general error -Note threshold is commented (allow string/int/float and support backwards compatibility) but is required
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_redislabs_com_redis_enterprise_database_v1alpha1_manifest#bdb_crdt_src_syncer_general_error DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1Manifest#bdb_crdt_src_syncer_general_error}
  */
  readonly bdbCrdtSrcSyncerGeneralError?: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbCrdtSrcSyncerGeneralError;
  /**
  * Latency is higher than specified threshold value [micro-sec] -Note threshold is commented (allow string/int/float and support backwards compatibility) but is required
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_redislabs_com_redis_enterprise_database_v1alpha1_manifest#bdb_high_latency DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1Manifest#bdb_high_latency}
  */
  readonly bdbHighLatency?: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbHighLatency;
  /**
  * Throughput is higher than specified threshold value [requests / sec.] -Note threshold is commented (allow string/int/float and support backwards compatibility) but is required
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_redislabs_com_redis_enterprise_database_v1alpha1_manifest#bdb_high_throughput DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1Manifest#bdb_high_throughput}
  */
  readonly bdbHighThroughput?: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbHighThroughput;
  /**
  * An alert for state-machines that are running for too long -Note threshold is commented (allow string/int/float and support backwards compatibility) but is required
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_redislabs_com_redis_enterprise_database_v1alpha1_manifest#bdb_long_running_action DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1Manifest#bdb_long_running_action}
  */
  readonly bdbLongRunningAction?: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbLongRunningAction;
  /**
  * Throughput is lower than specified threshold value [requests / sec.] -Note threshold is commented (allow string/int/float and support backwards compatibility) but is required
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_redislabs_com_redis_enterprise_database_v1alpha1_manifest#bdb_low_throughput DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1Manifest#bdb_low_throughput}
  */
  readonly bdbLowThroughput?: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbLowThroughput;
  /**
  * Dataset RAM overhead of a shard has reached the threshold value [% of its RAM limit] -Note threshold is commented (allow string/int/float and support backwards compatibility) but is required
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_redislabs_com_redis_enterprise_database_v1alpha1_manifest#bdb_ram_dataset_overhead DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1Manifest#bdb_ram_dataset_overhead}
  */
  readonly bdbRamDatasetOverhead?: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbRamDatasetOverhead;
  /**
  * Percent of values kept in a shard's RAM is lower than [% of its key count] -Note threshold is commented (allow string/int/float and support backwards compatibility) but is required
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_redislabs_com_redis_enterprise_database_v1alpha1_manifest#bdb_ram_values DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1Manifest#bdb_ram_values}
  */
  readonly bdbRamValues?: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbRamValues;
  /**
  * Replica-of source - sync lag is higher than specified threshold value [seconds] -Note threshold is commented (allow string/int/float and support backwards compatibility) but is required
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_redislabs_com_redis_enterprise_database_v1alpha1_manifest#bdb_replica_src_high_syncer_lag DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1Manifest#bdb_replica_src_high_syncer_lag}
  */
  readonly bdbReplicaSrcHighSyncerLag?: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbReplicaSrcHighSyncerLag;
  /**
  * Replica-of source - sync has connection error while trying to connect replica source -Note threshold is commented (allow string/int/float and support backwards compatibility) but is required
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_redislabs_com_redis_enterprise_database_v1alpha1_manifest#bdb_replica_src_syncer_connection_error DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1Manifest#bdb_replica_src_syncer_connection_error}
  */
  readonly bdbReplicaSrcSyncerConnectionError?: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbReplicaSrcSyncerConnectionError;
  /**
  * Number of values kept in a shard's RAM is lower than [values] -Note threshold is commented (allow string/int/float and support backwards compatibility) but is required
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_redislabs_com_redis_enterprise_database_v1alpha1_manifest#bdb_shard_num_ram_values DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1Manifest#bdb_shard_num_ram_values}
  */
  readonly bdbShardNumRamValues?: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbShardNumRamValues;
  /**
  * Dataset size has reached the threshold value [% of the memory limit] expected fields: -Note threshold is commented (allow string/int/float and support backwards compatibility) but is required
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_redislabs_com_redis_enterprise_database_v1alpha1_manifest#bdb_size DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1Manifest#bdb_size}
  */
  readonly bdbSize?: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbSize;
}

export function dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsToTerraform(struct?: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bdb_backup_delayed: dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbBackupDelayedToTerraform(struct!.bdbBackupDelayed),
    bdb_crdt_src_high_syncer_lag: dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbCrdtSrcHighSyncerLagToTerraform(struct!.bdbCrdtSrcHighSyncerLag),
    bdb_crdt_src_syncer_connection_error: dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbCrdtSrcSyncerConnectionErrorToTerraform(struct!.bdbCrdtSrcSyncerConnectionError),
    bdb_crdt_src_syncer_general_error: dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbCrdtSrcSyncerGeneralErrorToTerraform(struct!.bdbCrdtSrcSyncerGeneralError),
    bdb_high_latency: dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbHighLatencyToTerraform(struct!.bdbHighLatency),
    bdb_high_throughput: dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbHighThroughputToTerraform(struct!.bdbHighThroughput),
    bdb_long_running_action: dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbLongRunningActionToTerraform(struct!.bdbLongRunningAction),
    bdb_low_throughput: dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbLowThroughputToTerraform(struct!.bdbLowThroughput),
    bdb_ram_dataset_overhead: dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbRamDatasetOverheadToTerraform(struct!.bdbRamDatasetOverhead),
    bdb_ram_values: dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbRamValuesToTerraform(struct!.bdbRamValues),
    bdb_replica_src_high_syncer_lag: dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbReplicaSrcHighSyncerLagToTerraform(struct!.bdbReplicaSrcHighSyncerLag),
    bdb_replica_src_syncer_connection_error: dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbReplicaSrcSyncerConnectionErrorToTerraform(struct!.bdbReplicaSrcSyncerConnectionError),
    bdb_shard_num_ram_values: dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbShardNumRamValuesToTerraform(struct!.bdbShardNumRamValues),
    bdb_size: dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbSizeToTerraform(struct!.bdbSize),
  }
}


export function dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsToHclTerraform(struct?: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bdb_backup_delayed: {
      value: dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbBackupDelayedToHclTerraform(struct!.bdbBackupDelayed),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbBackupDelayed",
    },
    bdb_crdt_src_high_syncer_lag: {
      value: dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbCrdtSrcHighSyncerLagToHclTerraform(struct!.bdbCrdtSrcHighSyncerLag),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbCrdtSrcHighSyncerLag",
    },
    bdb_crdt_src_syncer_connection_error: {
      value: dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbCrdtSrcSyncerConnectionErrorToHclTerraform(struct!.bdbCrdtSrcSyncerConnectionError),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbCrdtSrcSyncerConnectionError",
    },
    bdb_crdt_src_syncer_general_error: {
      value: dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbCrdtSrcSyncerGeneralErrorToHclTerraform(struct!.bdbCrdtSrcSyncerGeneralError),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbCrdtSrcSyncerGeneralError",
    },
    bdb_high_latency: {
      value: dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbHighLatencyToHclTerraform(struct!.bdbHighLatency),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbHighLatency",
    },
    bdb_high_throughput: {
      value: dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbHighThroughputToHclTerraform(struct!.bdbHighThroughput),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbHighThroughput",
    },
    bdb_long_running_action: {
      value: dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbLongRunningActionToHclTerraform(struct!.bdbLongRunningAction),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbLongRunningAction",
    },
    bdb_low_throughput: {
      value: dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbLowThroughputToHclTerraform(struct!.bdbLowThroughput),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbLowThroughput",
    },
    bdb_ram_dataset_overhead: {
      value: dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbRamDatasetOverheadToHclTerraform(struct!.bdbRamDatasetOverhead),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbRamDatasetOverhead",
    },
    bdb_ram_values: {
      value: dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbRamValuesToHclTerraform(struct!.bdbRamValues),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbRamValues",
    },
    bdb_replica_src_high_syncer_lag: {
      value: dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbReplicaSrcHighSyncerLagToHclTerraform(struct!.bdbReplicaSrcHighSyncerLag),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbReplicaSrcHighSyncerLag",
    },
    bdb_replica_src_syncer_connection_error: {
      value: dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbReplicaSrcSyncerConnectionErrorToHclTerraform(struct!.bdbReplicaSrcSyncerConnectionError),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbReplicaSrcSyncerConnectionError",
    },
    bdb_shard_num_ram_values: {
      value: dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbShardNumRamValuesToHclTerraform(struct!.bdbShardNumRamValues),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbShardNumRamValues",
    },
    bdb_size: {
      value: dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbSizeToHclTerraform(struct!.bdbSize),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbSize",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bdbBackupDelayed?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bdbBackupDelayed = this._bdbBackupDelayed?.internalValue;
    }
    if (this._bdbCrdtSrcHighSyncerLag?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bdbCrdtSrcHighSyncerLag = this._bdbCrdtSrcHighSyncerLag?.internalValue;
    }
    if (this._bdbCrdtSrcSyncerConnectionError?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bdbCrdtSrcSyncerConnectionError = this._bdbCrdtSrcSyncerConnectionError?.internalValue;
    }
    if (this._bdbCrdtSrcSyncerGeneralError?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bdbCrdtSrcSyncerGeneralError = this._bdbCrdtSrcSyncerGeneralError?.internalValue;
    }
    if (this._bdbHighLatency?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bdbHighLatency = this._bdbHighLatency?.internalValue;
    }
    if (this._bdbHighThroughput?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bdbHighThroughput = this._bdbHighThroughput?.internalValue;
    }
    if (this._bdbLongRunningAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bdbLongRunningAction = this._bdbLongRunningAction?.internalValue;
    }
    if (this._bdbLowThroughput?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bdbLowThroughput = this._bdbLowThroughput?.internalValue;
    }
    if (this._bdbRamDatasetOverhead?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bdbRamDatasetOverhead = this._bdbRamDatasetOverhead?.internalValue;
    }
    if (this._bdbRamValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bdbRamValues = this._bdbRamValues?.internalValue;
    }
    if (this._bdbReplicaSrcHighSyncerLag?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bdbReplicaSrcHighSyncerLag = this._bdbReplicaSrcHighSyncerLag?.internalValue;
    }
    if (this._bdbReplicaSrcSyncerConnectionError?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bdbReplicaSrcSyncerConnectionError = this._bdbReplicaSrcSyncerConnectionError?.internalValue;
    }
    if (this._bdbShardNumRamValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bdbShardNumRamValues = this._bdbShardNumRamValues?.internalValue;
    }
    if (this._bdbSize?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bdbSize = this._bdbSize?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bdbBackupDelayed.internalValue = undefined;
      this._bdbCrdtSrcHighSyncerLag.internalValue = undefined;
      this._bdbCrdtSrcSyncerConnectionError.internalValue = undefined;
      this._bdbCrdtSrcSyncerGeneralError.internalValue = undefined;
      this._bdbHighLatency.internalValue = undefined;
      this._bdbHighThroughput.internalValue = undefined;
      this._bdbLongRunningAction.internalValue = undefined;
      this._bdbLowThroughput.internalValue = undefined;
      this._bdbRamDatasetOverhead.internalValue = undefined;
      this._bdbRamValues.internalValue = undefined;
      this._bdbReplicaSrcHighSyncerLag.internalValue = undefined;
      this._bdbReplicaSrcSyncerConnectionError.internalValue = undefined;
      this._bdbShardNumRamValues.internalValue = undefined;
      this._bdbSize.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bdbBackupDelayed.internalValue = value.bdbBackupDelayed;
      this._bdbCrdtSrcHighSyncerLag.internalValue = value.bdbCrdtSrcHighSyncerLag;
      this._bdbCrdtSrcSyncerConnectionError.internalValue = value.bdbCrdtSrcSyncerConnectionError;
      this._bdbCrdtSrcSyncerGeneralError.internalValue = value.bdbCrdtSrcSyncerGeneralError;
      this._bdbHighLatency.internalValue = value.bdbHighLatency;
      this._bdbHighThroughput.internalValue = value.bdbHighThroughput;
      this._bdbLongRunningAction.internalValue = value.bdbLongRunningAction;
      this._bdbLowThroughput.internalValue = value.bdbLowThroughput;
      this._bdbRamDatasetOverhead.internalValue = value.bdbRamDatasetOverhead;
      this._bdbRamValues.internalValue = value.bdbRamValues;
      this._bdbReplicaSrcHighSyncerLag.internalValue = value.bdbReplicaSrcHighSyncerLag;
      this._bdbReplicaSrcSyncerConnectionError.internalValue = value.bdbReplicaSrcSyncerConnectionError;
      this._bdbShardNumRamValues.internalValue = value.bdbShardNumRamValues;
      this._bdbSize.internalValue = value.bdbSize;
    }
  }

  // bdb_backup_delayed - computed: false, optional: true, required: false
  private _bdbBackupDelayed = new DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbBackupDelayedOutputReference(this, "bdb_backup_delayed");
  public get bdbBackupDelayed() {
    return this._bdbBackupDelayed;
  }
  public putBdbBackupDelayed(value: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbBackupDelayed) {
    this._bdbBackupDelayed.internalValue = value;
  }
  public resetBdbBackupDelayed() {
    this._bdbBackupDelayed.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bdbBackupDelayedInput() {
    return this._bdbBackupDelayed.internalValue;
  }

  // bdb_crdt_src_high_syncer_lag - computed: false, optional: true, required: false
  private _bdbCrdtSrcHighSyncerLag = new DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbCrdtSrcHighSyncerLagOutputReference(this, "bdb_crdt_src_high_syncer_lag");
  public get bdbCrdtSrcHighSyncerLag() {
    return this._bdbCrdtSrcHighSyncerLag;
  }
  public putBdbCrdtSrcHighSyncerLag(value: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbCrdtSrcHighSyncerLag) {
    this._bdbCrdtSrcHighSyncerLag.internalValue = value;
  }
  public resetBdbCrdtSrcHighSyncerLag() {
    this._bdbCrdtSrcHighSyncerLag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bdbCrdtSrcHighSyncerLagInput() {
    return this._bdbCrdtSrcHighSyncerLag.internalValue;
  }

  // bdb_crdt_src_syncer_connection_error - computed: false, optional: true, required: false
  private _bdbCrdtSrcSyncerConnectionError = new DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbCrdtSrcSyncerConnectionErrorOutputReference(this, "bdb_crdt_src_syncer_connection_error");
  public get bdbCrdtSrcSyncerConnectionError() {
    return this._bdbCrdtSrcSyncerConnectionError;
  }
  public putBdbCrdtSrcSyncerConnectionError(value: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbCrdtSrcSyncerConnectionError) {
    this._bdbCrdtSrcSyncerConnectionError.internalValue = value;
  }
  public resetBdbCrdtSrcSyncerConnectionError() {
    this._bdbCrdtSrcSyncerConnectionError.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bdbCrdtSrcSyncerConnectionErrorInput() {
    return this._bdbCrdtSrcSyncerConnectionError.internalValue;
  }

  // bdb_crdt_src_syncer_general_error - computed: false, optional: true, required: false
  private _bdbCrdtSrcSyncerGeneralError = new DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbCrdtSrcSyncerGeneralErrorOutputReference(this, "bdb_crdt_src_syncer_general_error");
  public get bdbCrdtSrcSyncerGeneralError() {
    return this._bdbCrdtSrcSyncerGeneralError;
  }
  public putBdbCrdtSrcSyncerGeneralError(value: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbCrdtSrcSyncerGeneralError) {
    this._bdbCrdtSrcSyncerGeneralError.internalValue = value;
  }
  public resetBdbCrdtSrcSyncerGeneralError() {
    this._bdbCrdtSrcSyncerGeneralError.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bdbCrdtSrcSyncerGeneralErrorInput() {
    return this._bdbCrdtSrcSyncerGeneralError.internalValue;
  }

  // bdb_high_latency - computed: false, optional: true, required: false
  private _bdbHighLatency = new DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbHighLatencyOutputReference(this, "bdb_high_latency");
  public get bdbHighLatency() {
    return this._bdbHighLatency;
  }
  public putBdbHighLatency(value: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbHighLatency) {
    this._bdbHighLatency.internalValue = value;
  }
  public resetBdbHighLatency() {
    this._bdbHighLatency.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bdbHighLatencyInput() {
    return this._bdbHighLatency.internalValue;
  }

  // bdb_high_throughput - computed: false, optional: true, required: false
  private _bdbHighThroughput = new DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbHighThroughputOutputReference(this, "bdb_high_throughput");
  public get bdbHighThroughput() {
    return this._bdbHighThroughput;
  }
  public putBdbHighThroughput(value: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbHighThroughput) {
    this._bdbHighThroughput.internalValue = value;
  }
  public resetBdbHighThroughput() {
    this._bdbHighThroughput.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bdbHighThroughputInput() {
    return this._bdbHighThroughput.internalValue;
  }

  // bdb_long_running_action - computed: false, optional: true, required: false
  private _bdbLongRunningAction = new DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbLongRunningActionOutputReference(this, "bdb_long_running_action");
  public get bdbLongRunningAction() {
    return this._bdbLongRunningAction;
  }
  public putBdbLongRunningAction(value: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbLongRunningAction) {
    this._bdbLongRunningAction.internalValue = value;
  }
  public resetBdbLongRunningAction() {
    this._bdbLongRunningAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bdbLongRunningActionInput() {
    return this._bdbLongRunningAction.internalValue;
  }

  // bdb_low_throughput - computed: false, optional: true, required: false
  private _bdbLowThroughput = new DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbLowThroughputOutputReference(this, "bdb_low_throughput");
  public get bdbLowThroughput() {
    return this._bdbLowThroughput;
  }
  public putBdbLowThroughput(value: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbLowThroughput) {
    this._bdbLowThroughput.internalValue = value;
  }
  public resetBdbLowThroughput() {
    this._bdbLowThroughput.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bdbLowThroughputInput() {
    return this._bdbLowThroughput.internalValue;
  }

  // bdb_ram_dataset_overhead - computed: false, optional: true, required: false
  private _bdbRamDatasetOverhead = new DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbRamDatasetOverheadOutputReference(this, "bdb_ram_dataset_overhead");
  public get bdbRamDatasetOverhead() {
    return this._bdbRamDatasetOverhead;
  }
  public putBdbRamDatasetOverhead(value: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbRamDatasetOverhead) {
    this._bdbRamDatasetOverhead.internalValue = value;
  }
  public resetBdbRamDatasetOverhead() {
    this._bdbRamDatasetOverhead.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bdbRamDatasetOverheadInput() {
    return this._bdbRamDatasetOverhead.internalValue;
  }

  // bdb_ram_values - computed: false, optional: true, required: false
  private _bdbRamValues = new DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbRamValuesOutputReference(this, "bdb_ram_values");
  public get bdbRamValues() {
    return this._bdbRamValues;
  }
  public putBdbRamValues(value: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbRamValues) {
    this._bdbRamValues.internalValue = value;
  }
  public resetBdbRamValues() {
    this._bdbRamValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bdbRamValuesInput() {
    return this._bdbRamValues.internalValue;
  }

  // bdb_replica_src_high_syncer_lag - computed: false, optional: true, required: false
  private _bdbReplicaSrcHighSyncerLag = new DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbReplicaSrcHighSyncerLagOutputReference(this, "bdb_replica_src_high_syncer_lag");
  public get bdbReplicaSrcHighSyncerLag() {
    return this._bdbReplicaSrcHighSyncerLag;
  }
  public putBdbReplicaSrcHighSyncerLag(value: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbReplicaSrcHighSyncerLag) {
    this._bdbReplicaSrcHighSyncerLag.internalValue = value;
  }
  public resetBdbReplicaSrcHighSyncerLag() {
    this._bdbReplicaSrcHighSyncerLag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bdbReplicaSrcHighSyncerLagInput() {
    return this._bdbReplicaSrcHighSyncerLag.internalValue;
  }

  // bdb_replica_src_syncer_connection_error - computed: false, optional: true, required: false
  private _bdbReplicaSrcSyncerConnectionError = new DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbReplicaSrcSyncerConnectionErrorOutputReference(this, "bdb_replica_src_syncer_connection_error");
  public get bdbReplicaSrcSyncerConnectionError() {
    return this._bdbReplicaSrcSyncerConnectionError;
  }
  public putBdbReplicaSrcSyncerConnectionError(value: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbReplicaSrcSyncerConnectionError) {
    this._bdbReplicaSrcSyncerConnectionError.internalValue = value;
  }
  public resetBdbReplicaSrcSyncerConnectionError() {
    this._bdbReplicaSrcSyncerConnectionError.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bdbReplicaSrcSyncerConnectionErrorInput() {
    return this._bdbReplicaSrcSyncerConnectionError.internalValue;
  }

  // bdb_shard_num_ram_values - computed: false, optional: true, required: false
  private _bdbShardNumRamValues = new DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbShardNumRamValuesOutputReference(this, "bdb_shard_num_ram_values");
  public get bdbShardNumRamValues() {
    return this._bdbShardNumRamValues;
  }
  public putBdbShardNumRamValues(value: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbShardNumRamValues) {
    this._bdbShardNumRamValues.internalValue = value;
  }
  public resetBdbShardNumRamValues() {
    this._bdbShardNumRamValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bdbShardNumRamValuesInput() {
    return this._bdbShardNumRamValues.internalValue;
  }

  // bdb_size - computed: false, optional: true, required: false
  private _bdbSize = new DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbSizeOutputReference(this, "bdb_size");
  public get bdbSize() {
    return this._bdbSize;
  }
  public putBdbSize(value: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsBdbSize) {
    this._bdbSize.internalValue = value;
  }
  public resetBdbSize() {
    this._bdbSize.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bdbSizeInput() {
    return this._bdbSize.internalValue;
  }
}
export interface DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecBackupAbs {
  /**
  * The name of the K8s secret that holds ABS credentials. The secret must contain the keys 'AccountName' and 'AccountKey', and these must hold the corresponding credentials
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_redislabs_com_redis_enterprise_database_v1alpha1_manifest#abs_secret_name DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1Manifest#abs_secret_name}
  */
  readonly absSecretName: string;
  /**
  * Azure Blob Storage container name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_redislabs_com_redis_enterprise_database_v1alpha1_manifest#container DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1Manifest#container}
  */
  readonly container: string;
  /**
  * Optional. Azure Blob Storage subdir under container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_redislabs_com_redis_enterprise_database_v1alpha1_manifest#subdir DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1Manifest#subdir}
  */
  readonly subdir?: string;
}

export function dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecBackupAbsToTerraform(struct?: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecBackupAbs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    abs_secret_name: cdktf.stringToTerraform(struct!.absSecretName),
    container: cdktf.stringToTerraform(struct!.container),
    subdir: cdktf.stringToTerraform(struct!.subdir),
  }
}


export function dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecBackupAbsToHclTerraform(struct?: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecBackupAbs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    abs_secret_name: {
      value: cdktf.stringToHclTerraform(struct!.absSecretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    container: {
      value: cdktf.stringToHclTerraform(struct!.container),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subdir: {
      value: cdktf.stringToHclTerraform(struct!.subdir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecBackupAbsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecBackupAbs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._absSecretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.absSecretName = this._absSecretName;
    }
    if (this._container !== undefined) {
      hasAnyValues = true;
      internalValueResult.container = this._container;
    }
    if (this._subdir !== undefined) {
      hasAnyValues = true;
      internalValueResult.subdir = this._subdir;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecBackupAbs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._absSecretName = undefined;
      this._container = undefined;
      this._subdir = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._absSecretName = value.absSecretName;
      this._container = value.container;
      this._subdir = value.subdir;
    }
  }

  // abs_secret_name - computed: false, optional: false, required: true
  private _absSecretName?: string; 
  public get absSecretName() {
    return this.getStringAttribute('abs_secret_name');
  }
  public set absSecretName(value: string) {
    this._absSecretName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get absSecretNameInput() {
    return this._absSecretName;
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

  // subdir - computed: false, optional: true, required: false
  private _subdir?: string; 
  public get subdir() {
    return this.getStringAttribute('subdir');
  }
  public set subdir(value: string) {
    this._subdir = value;
  }
  public resetSubdir() {
    this._subdir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subdirInput() {
    return this._subdir;
  }
}
export interface DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecBackupFtp {
  /**
  * a URI of the ftps://[USER[:PASSWORD]@]HOST[:PORT]/PATH[/]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_redislabs_com_redis_enterprise_database_v1alpha1_manifest#url DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1Manifest#url}
  */
  readonly url: string;
}

export function dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecBackupFtpToTerraform(struct?: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecBackupFtp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecBackupFtpToHclTerraform(struct?: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecBackupFtp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecBackupFtpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecBackupFtp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecBackupFtp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._url = value.url;
    }
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecBackupGcs {
  /**
  * Google Storage bucket name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_redislabs_com_redis_enterprise_database_v1alpha1_manifest#bucket_name DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1Manifest#bucket_name}
  */
  readonly bucketName: string;
  /**
  * The name of the K8s secret that holds the Google Cloud Storage credentials. The secret must contain the keys 'CLIENT_ID', 'PRIVATE_KEY', 'PRIVATE_KEY_ID', 'CLIENT_EMAIL' and these must hold the corresponding credentials. The keys should correspond to the values in the key JSON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_redislabs_com_redis_enterprise_database_v1alpha1_manifest#gcs_secret_name DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1Manifest#gcs_secret_name}
  */
  readonly gcsSecretName: string;
  /**
  * Optional. Google Storage subdir under bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_redislabs_com_redis_enterprise_database_v1alpha1_manifest#subdir DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1Manifest#subdir}
  */
  readonly subdir?: string;
}

export function dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecBackupGcsToTerraform(struct?: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecBackupGcs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    gcs_secret_name: cdktf.stringToTerraform(struct!.gcsSecretName),
    subdir: cdktf.stringToTerraform(struct!.subdir),
  }
}


export function dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecBackupGcsToHclTerraform(struct?: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecBackupGcs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket_name: {
      value: cdktf.stringToHclTerraform(struct!.bucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gcs_secret_name: {
      value: cdktf.stringToHclTerraform(struct!.gcsSecretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subdir: {
      value: cdktf.stringToHclTerraform(struct!.subdir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecBackupGcsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecBackupGcs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._gcsSecretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcsSecretName = this._gcsSecretName;
    }
    if (this._subdir !== undefined) {
      hasAnyValues = true;
      internalValueResult.subdir = this._subdir;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecBackupGcs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucketName = undefined;
      this._gcsSecretName = undefined;
      this._subdir = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucketName = value.bucketName;
      this._gcsSecretName = value.gcsSecretName;
      this._subdir = value.subdir;
    }
  }

  // bucket_name - computed: false, optional: false, required: true
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // gcs_secret_name - computed: false, optional: false, required: true
  private _gcsSecretName?: string; 
  public get gcsSecretName() {
    return this.getStringAttribute('gcs_secret_name');
  }
  public set gcsSecretName(value: string) {
    this._gcsSecretName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsSecretNameInput() {
    return this._gcsSecretName;
  }

  // subdir - computed: false, optional: true, required: false
  private _subdir?: string; 
  public get subdir() {
    return this.getStringAttribute('subdir');
  }
  public set subdir(value: string) {
    this._subdir = value;
  }
  public resetSubdir() {
    this._subdir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subdirInput() {
    return this._subdir;
  }
}
export interface DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecBackupMount {
  /**
  * Path to the local mount point. You must create the mount point on all nodes, and the redislabs:redislabs user must have read and write permissions on the local mount point.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_redislabs_com_redis_enterprise_database_v1alpha1_manifest#path DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1Manifest#path}
  */
  readonly path: string;
}

export function dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecBackupMountToTerraform(struct?: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecBackupMount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecBackupMountToHclTerraform(struct?: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecBackupMount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecBackupMountOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecBackupMount | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecBackupMount | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._path = value.path;
    }
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}
export interface DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecBackupS3 {
  /**
  * The name of the K8s secret that holds the AWS credentials. The secret must contain the keys 'AWS_ACCESS_KEY_ID' and 'AWS_SECRET_ACCESS_KEY', and these must hold the corresponding credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_redislabs_com_redis_enterprise_database_v1alpha1_manifest#aws_secret_name DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1Manifest#aws_secret_name}
  */
  readonly awsSecretName: string;
  /**
  * Amazon S3 bucket name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_redislabs_com_redis_enterprise_database_v1alpha1_manifest#bucket_name DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1Manifest#bucket_name}
  */
  readonly bucketName: string;
  /**
  * Optional. Amazon S3 subdir under bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_redislabs_com_redis_enterprise_database_v1alpha1_manifest#subdir DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1Manifest#subdir}
  */
  readonly subdir?: string;
}

export function dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecBackupS3ToTerraform(struct?: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecBackupS3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_secret_name: cdktf.stringToTerraform(struct!.awsSecretName),
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    subdir: cdktf.stringToTerraform(struct!.subdir),
  }
}


export function dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecBackupS3ToHclTerraform(struct?: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecBackupS3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_secret_name: {
      value: cdktf.stringToHclTerraform(struct!.awsSecretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket_name: {
      value: cdktf.stringToHclTerraform(struct!.bucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subdir: {
      value: cdktf.stringToHclTerraform(struct!.subdir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecBackupS3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecBackupS3 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsSecretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsSecretName = this._awsSecretName;
    }
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._subdir !== undefined) {
      hasAnyValues = true;
      internalValueResult.subdir = this._subdir;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecBackupS3 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsSecretName = undefined;
      this._bucketName = undefined;
      this._subdir = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsSecretName = value.awsSecretName;
      this._bucketName = value.bucketName;
      this._subdir = value.subdir;
    }
  }

  // aws_secret_name - computed: false, optional: false, required: true
  private _awsSecretName?: string; 
  public get awsSecretName() {
    return this.getStringAttribute('aws_secret_name');
  }
  public set awsSecretName(value: string) {
    this._awsSecretName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSecretNameInput() {
    return this._awsSecretName;
  }

  // bucket_name - computed: false, optional: false, required: true
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // subdir - computed: false, optional: true, required: false
  private _subdir?: string; 
  public get subdir() {
    return this.getStringAttribute('subdir');
  }
  public set subdir(value: string) {
    this._subdir = value;
  }
  public resetSubdir() {
    this._subdir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subdirInput() {
    return this._subdir;
  }
}
export interface DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecBackupSftp {
  /**
  * The name of the K8s secret that holds SFTP credentials. The secret must contain the 'Key' key, which is the SSH private key for connecting to the sftp server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_redislabs_com_redis_enterprise_database_v1alpha1_manifest#sftp_secret_name DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1Manifest#sftp_secret_name}
  */
  readonly sftpSecretName: string;
  /**
  * SFTP url
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_redislabs_com_redis_enterprise_database_v1alpha1_manifest#sftp_url DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1Manifest#sftp_url}
  */
  readonly sftpUrl: string;
}

export function dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecBackupSftpToTerraform(struct?: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecBackupSftp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sftp_secret_name: cdktf.stringToTerraform(struct!.sftpSecretName),
    sftp_url: cdktf.stringToTerraform(struct!.sftpUrl),
  }
}


export function dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecBackupSftpToHclTerraform(struct?: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecBackupSftp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sftp_secret_name: {
      value: cdktf.stringToHclTerraform(struct!.sftpSecretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sftp_url: {
      value: cdktf.stringToHclTerraform(struct!.sftpUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecBackupSftpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecBackupSftp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sftpSecretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sftpSecretName = this._sftpSecretName;
    }
    if (this._sftpUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.sftpUrl = this._sftpUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecBackupSftp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sftpSecretName = undefined;
      this._sftpUrl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sftpSecretName = value.sftpSecretName;
      this._sftpUrl = value.sftpUrl;
    }
  }

  // sftp_secret_name - computed: false, optional: false, required: true
  private _sftpSecretName?: string; 
  public get sftpSecretName() {
    return this.getStringAttribute('sftp_secret_name');
  }
  public set sftpSecretName(value: string) {
    this._sftpSecretName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sftpSecretNameInput() {
    return this._sftpSecretName;
  }

  // sftp_url - computed: false, optional: false, required: true
  private _sftpUrl?: string; 
  public get sftpUrl() {
    return this.getStringAttribute('sftp_url');
  }
  public set sftpUrl(value: string) {
    this._sftpUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sftpUrlInput() {
    return this._sftpUrl;
  }
}
export interface DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecBackupSwift {
  /**
  * Swift service authentication URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_redislabs_com_redis_enterprise_database_v1alpha1_manifest#auth_url DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1Manifest#auth_url}
  */
  readonly authUrl: string;
  /**
  * Swift object store container for storing the backup files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_redislabs_com_redis_enterprise_database_v1alpha1_manifest#container DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1Manifest#container}
  */
  readonly container: string;
  /**
  * Optional. Prefix (path) of backup files in the swift container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_redislabs_com_redis_enterprise_database_v1alpha1_manifest#prefix DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1Manifest#prefix}
  */
  readonly prefix?: string;
  /**
  * The name of the K8s secret that holds Swift credentials. The secret must contain the keys 'Key' and 'User', and these must hold the corresponding credentials: service access key and service user name (pattern for the latter does not allow special characters &,<,>,')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_redislabs_com_redis_enterprise_database_v1alpha1_manifest#swift_secret_name DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1Manifest#swift_secret_name}
  */
  readonly swiftSecretName: string;
}

export function dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecBackupSwiftToTerraform(struct?: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecBackupSwift | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_url: cdktf.stringToTerraform(struct!.authUrl),
    container: cdktf.stringToTerraform(struct!.container),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    swift_secret_name: cdktf.stringToTerraform(struct!.swiftSecretName),
  }
}


export function dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecBackupSwiftToHclTerraform(struct?: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecBackupSwift | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_url: {
      value: cdktf.stringToHclTerraform(struct!.authUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    container: {
      value: cdktf.stringToHclTerraform(struct!.container),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    swift_secret_name: {
      value: cdktf.stringToHclTerraform(struct!.swiftSecretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecBackupSwiftOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecBackupSwift | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.authUrl = this._authUrl;
    }
    if (this._container !== undefined) {
      hasAnyValues = true;
      internalValueResult.container = this._container;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._swiftSecretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.swiftSecretName = this._swiftSecretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecBackupSwift | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authUrl = undefined;
      this._container = undefined;
      this._prefix = undefined;
      this._swiftSecretName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authUrl = value.authUrl;
      this._container = value.container;
      this._prefix = value.prefix;
      this._swiftSecretName = value.swiftSecretName;
    }
  }

  // auth_url - computed: false, optional: false, required: true
  private _authUrl?: string; 
  public get authUrl() {
    return this.getStringAttribute('auth_url');
  }
  public set authUrl(value: string) {
    this._authUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authUrlInput() {
    return this._authUrl;
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

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // swift_secret_name - computed: false, optional: false, required: true
  private _swiftSecretName?: string; 
  public get swiftSecretName() {
    return this.getStringAttribute('swift_secret_name');
  }
  public set swiftSecretName(value: string) {
    this._swiftSecretName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get swiftSecretNameInput() {
    return this._swiftSecretName;
  }
}
export interface DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecBackup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_redislabs_com_redis_enterprise_database_v1alpha1_manifest#abs DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1Manifest#abs}
  */
  readonly abs?: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecBackupAbs;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_redislabs_com_redis_enterprise_database_v1alpha1_manifest#ftp DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1Manifest#ftp}
  */
  readonly ftp?: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecBackupFtp;
  /**
  * GoogleStorage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_redislabs_com_redis_enterprise_database_v1alpha1_manifest#gcs DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1Manifest#gcs}
  */
  readonly gcs?: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecBackupGcs;
  /**
  * Backup Interval in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_redislabs_com_redis_enterprise_database_v1alpha1_manifest#interval DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1Manifest#interval}
  */
  readonly interval?: number;
  /**
  * MountPointStorage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_redislabs_com_redis_enterprise_database_v1alpha1_manifest#mount DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1Manifest#mount}
  */
  readonly mount?: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecBackupMount;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_redislabs_com_redis_enterprise_database_v1alpha1_manifest#s3 DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1Manifest#s3}
  */
  readonly s3?: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecBackupS3;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_redislabs_com_redis_enterprise_database_v1alpha1_manifest#sftp DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1Manifest#sftp}
  */
  readonly sftp?: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecBackupSftp;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_redislabs_com_redis_enterprise_database_v1alpha1_manifest#swift DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1Manifest#swift}
  */
  readonly swift?: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecBackupSwift;
}

export function dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecBackupToTerraform(struct?: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecBackup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    abs: dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecBackupAbsToTerraform(struct!.abs),
    ftp: dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecBackupFtpToTerraform(struct!.ftp),
    gcs: dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecBackupGcsToTerraform(struct!.gcs),
    interval: cdktf.numberToTerraform(struct!.interval),
    mount: dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecBackupMountToTerraform(struct!.mount),
    s3: dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecBackupS3ToTerraform(struct!.s3),
    sftp: dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecBackupSftpToTerraform(struct!.sftp),
    swift: dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecBackupSwiftToTerraform(struct!.swift),
  }
}


export function dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecBackupToHclTerraform(struct?: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecBackup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    abs: {
      value: dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecBackupAbsToHclTerraform(struct!.abs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecBackupAbs",
    },
    ftp: {
      value: dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecBackupFtpToHclTerraform(struct!.ftp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecBackupFtp",
    },
    gcs: {
      value: dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecBackupGcsToHclTerraform(struct!.gcs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecBackupGcs",
    },
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mount: {
      value: dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecBackupMountToHclTerraform(struct!.mount),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecBackupMount",
    },
    s3: {
      value: dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecBackupS3ToHclTerraform(struct!.s3),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecBackupS3",
    },
    sftp: {
      value: dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecBackupSftpToHclTerraform(struct!.sftp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecBackupSftp",
    },
    swift: {
      value: dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecBackupSwiftToHclTerraform(struct!.swift),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecBackupSwift",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecBackupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecBackup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._abs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.abs = this._abs?.internalValue;
    }
    if (this._ftp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ftp = this._ftp?.internalValue;
    }
    if (this._gcs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcs = this._gcs?.internalValue;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._mount?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mount = this._mount?.internalValue;
    }
    if (this._s3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3 = this._s3?.internalValue;
    }
    if (this._sftp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sftp = this._sftp?.internalValue;
    }
    if (this._swift?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.swift = this._swift?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecBackup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._abs.internalValue = undefined;
      this._ftp.internalValue = undefined;
      this._gcs.internalValue = undefined;
      this._interval = undefined;
      this._mount.internalValue = undefined;
      this._s3.internalValue = undefined;
      this._sftp.internalValue = undefined;
      this._swift.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._abs.internalValue = value.abs;
      this._ftp.internalValue = value.ftp;
      this._gcs.internalValue = value.gcs;
      this._interval = value.interval;
      this._mount.internalValue = value.mount;
      this._s3.internalValue = value.s3;
      this._sftp.internalValue = value.sftp;
      this._swift.internalValue = value.swift;
    }
  }

  // abs - computed: false, optional: true, required: false
  private _abs = new DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecBackupAbsOutputReference(this, "abs");
  public get abs() {
    return this._abs;
  }
  public putAbs(value: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecBackupAbs) {
    this._abs.internalValue = value;
  }
  public resetAbs() {
    this._abs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get absInput() {
    return this._abs.internalValue;
  }

  // ftp - computed: false, optional: true, required: false
  private _ftp = new DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecBackupFtpOutputReference(this, "ftp");
  public get ftp() {
    return this._ftp;
  }
  public putFtp(value: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecBackupFtp) {
    this._ftp.internalValue = value;
  }
  public resetFtp() {
    this._ftp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftpInput() {
    return this._ftp.internalValue;
  }

  // gcs - computed: false, optional: true, required: false
  private _gcs = new DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecBackupGcsOutputReference(this, "gcs");
  public get gcs() {
    return this._gcs;
  }
  public putGcs(value: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecBackupGcs) {
    this._gcs.internalValue = value;
  }
  public resetGcs() {
    this._gcs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsInput() {
    return this._gcs.internalValue;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // mount - computed: false, optional: true, required: false
  private _mount = new DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecBackupMountOutputReference(this, "mount");
  public get mount() {
    return this._mount;
  }
  public putMount(value: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecBackupMount) {
    this._mount.internalValue = value;
  }
  public resetMount() {
    this._mount.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountInput() {
    return this._mount.internalValue;
  }

  // s3 - computed: false, optional: true, required: false
  private _s3 = new DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecBackupS3OutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }
  public putS3(value: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecBackupS3) {
    this._s3.internalValue = value;
  }
  public resetS3() {
    this._s3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3.internalValue;
  }

  // sftp - computed: false, optional: true, required: false
  private _sftp = new DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecBackupSftpOutputReference(this, "sftp");
  public get sftp() {
    return this._sftp;
  }
  public putSftp(value: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecBackupSftp) {
    this._sftp.internalValue = value;
  }
  public resetSftp() {
    this._sftp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sftpInput() {
    return this._sftp.internalValue;
  }

  // swift - computed: false, optional: true, required: false
  private _swift = new DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecBackupSwiftOutputReference(this, "swift");
  public get swift() {
    return this._swift;
  }
  public putSwift(value: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecBackupSwift) {
    this._swift.internalValue = value;
  }
  public resetSwift() {
    this._swift.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get swiftInput() {
    return this._swift.internalValue;
  }
}
export interface DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecModulesListStruct {
  /**
  * Module command line arguments e.g. VKEY_MAX_ENTITY_COUNT 30
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_redislabs_com_redis_enterprise_database_v1alpha1_manifest#config DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1Manifest#config}
  */
  readonly config?: string;
  /**
  * The module's name e.g 'ft' for redissearch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_redislabs_com_redis_enterprise_database_v1alpha1_manifest#name DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Module's semantic version e.g '1.6.12' - optional only in REDB, must be set in REAADB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_redislabs_com_redis_enterprise_database_v1alpha1_manifest#version DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1Manifest#version}
  */
  readonly version?: string;
}

export function dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecModulesListStructToTerraform(struct?: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecModulesListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: cdktf.stringToTerraform(struct!.config),
    name: cdktf.stringToTerraform(struct!.name),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecModulesListStructToHclTerraform(struct?: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecModulesListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config: {
      value: cdktf.stringToHclTerraform(struct!.config),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecModulesListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecModulesListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecModulesListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._config = undefined;
      this._name = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._config = value.config;
      this._name = value.name;
      this._version = value.version;
    }
  }

  // config - computed: false, optional: true, required: false
  private _config?: string; 
  public get config() {
    return this.getStringAttribute('config');
  }
  public set config(value: string) {
    this._config = value;
  }
  public resetConfig() {
    this._config = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
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

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecModulesListStructList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecModulesListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecModulesListStructOutputReference {
    return new DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecModulesListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecRedisEnterpriseCluster {
  /**
  * The name of the Redis Enterprise Cluster where the database should be stored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_redislabs_com_redis_enterprise_database_v1alpha1_manifest#name DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecRedisEnterpriseClusterToTerraform(struct?: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecRedisEnterpriseCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecRedisEnterpriseClusterToHclTerraform(struct?: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecRedisEnterpriseCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecRedisEnterpriseClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecRedisEnterpriseCluster | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecRedisEnterpriseCluster | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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
}
export interface DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecReplicaSources {
  /**
  * Secret that defines the client certificate and key used by the syncer in the target database cluster. The secret must have 2 keys in its map: 'cert' which is the PEM encoded certificate, and 'key' which is the PEM encoded private key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_redislabs_com_redis_enterprise_database_v1alpha1_manifest#client_key_secret DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1Manifest#client_key_secret}
  */
  readonly clientKeySecret?: string;
  /**
  * GZIP compression level (0-6) to use for replication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_redislabs_com_redis_enterprise_database_v1alpha1_manifest#compression DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1Manifest#compression}
  */
  readonly compression?: number;
  /**
  * The name of the resource from which the source database URI is derived. The type of resource must match the type specified in the ReplicaSourceType field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_redislabs_com_redis_enterprise_database_v1alpha1_manifest#replica_source_name DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1Manifest#replica_source_name}
  */
  readonly replicaSourceName: string;
  /**
  * The type of resource from which the source database URI is derived. If set to 'SECRET', the source database URI is derived from the secret named in the ReplicaSourceName field. The secret must have a key named 'uri' that defines the URI of the source database in the form of 'redis://...'. The type of secret (kubernetes, vault, ...) is determined by the secret mechanism used by the underlying REC object. If set to 'REDB', the source database URI is derived from the RedisEnterpriseDatabase resource named in the ReplicaSourceName field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_redislabs_com_redis_enterprise_database_v1alpha1_manifest#replica_source_type DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1Manifest#replica_source_type}
  */
  readonly replicaSourceType: string;
  /**
  * Secret that defines the server certificate used by the proxy in the source database cluster. The secret must have 1 key in its map: 'cert' which is the PEM encoded certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_redislabs_com_redis_enterprise_database_v1alpha1_manifest#server_cert_secret DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1Manifest#server_cert_secret}
  */
  readonly serverCertSecret?: string;
  /**
  * TLS SNI name to use for the replication link.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_redislabs_com_redis_enterprise_database_v1alpha1_manifest#tls_sni_name DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1Manifest#tls_sni_name}
  */
  readonly tlsSniName?: string;
}

export function dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecReplicaSourcesToTerraform(struct?: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecReplicaSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_key_secret: cdktf.stringToTerraform(struct!.clientKeySecret),
    compression: cdktf.numberToTerraform(struct!.compression),
    replica_source_name: cdktf.stringToTerraform(struct!.replicaSourceName),
    replica_source_type: cdktf.stringToTerraform(struct!.replicaSourceType),
    server_cert_secret: cdktf.stringToTerraform(struct!.serverCertSecret),
    tls_sni_name: cdktf.stringToTerraform(struct!.tlsSniName),
  }
}


export function dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecReplicaSourcesToHclTerraform(struct?: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecReplicaSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_key_secret: {
      value: cdktf.stringToHclTerraform(struct!.clientKeySecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compression: {
      value: cdktf.numberToHclTerraform(struct!.compression),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    replica_source_name: {
      value: cdktf.stringToHclTerraform(struct!.replicaSourceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replica_source_type: {
      value: cdktf.stringToHclTerraform(struct!.replicaSourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_cert_secret: {
      value: cdktf.stringToHclTerraform(struct!.serverCertSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_sni_name: {
      value: cdktf.stringToHclTerraform(struct!.tlsSniName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecReplicaSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecReplicaSources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientKeySecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientKeySecret = this._clientKeySecret;
    }
    if (this._compression !== undefined) {
      hasAnyValues = true;
      internalValueResult.compression = this._compression;
    }
    if (this._replicaSourceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicaSourceName = this._replicaSourceName;
    }
    if (this._replicaSourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicaSourceType = this._replicaSourceType;
    }
    if (this._serverCertSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverCertSecret = this._serverCertSecret;
    }
    if (this._tlsSniName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsSniName = this._tlsSniName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecReplicaSources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientKeySecret = undefined;
      this._compression = undefined;
      this._replicaSourceName = undefined;
      this._replicaSourceType = undefined;
      this._serverCertSecret = undefined;
      this._tlsSniName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientKeySecret = value.clientKeySecret;
      this._compression = value.compression;
      this._replicaSourceName = value.replicaSourceName;
      this._replicaSourceType = value.replicaSourceType;
      this._serverCertSecret = value.serverCertSecret;
      this._tlsSniName = value.tlsSniName;
    }
  }

  // client_key_secret - computed: false, optional: true, required: false
  private _clientKeySecret?: string; 
  public get clientKeySecret() {
    return this.getStringAttribute('client_key_secret');
  }
  public set clientKeySecret(value: string) {
    this._clientKeySecret = value;
  }
  public resetClientKeySecret() {
    this._clientKeySecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientKeySecretInput() {
    return this._clientKeySecret;
  }

  // compression - computed: false, optional: true, required: false
  private _compression?: number; 
  public get compression() {
    return this.getNumberAttribute('compression');
  }
  public set compression(value: number) {
    this._compression = value;
  }
  public resetCompression() {
    this._compression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionInput() {
    return this._compression;
  }

  // replica_source_name - computed: false, optional: false, required: true
  private _replicaSourceName?: string; 
  public get replicaSourceName() {
    return this.getStringAttribute('replica_source_name');
  }
  public set replicaSourceName(value: string) {
    this._replicaSourceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaSourceNameInput() {
    return this._replicaSourceName;
  }

  // replica_source_type - computed: false, optional: false, required: true
  private _replicaSourceType?: string; 
  public get replicaSourceType() {
    return this.getStringAttribute('replica_source_type');
  }
  public set replicaSourceType(value: string) {
    this._replicaSourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaSourceTypeInput() {
    return this._replicaSourceType;
  }

  // server_cert_secret - computed: false, optional: true, required: false
  private _serverCertSecret?: string; 
  public get serverCertSecret() {
    return this.getStringAttribute('server_cert_secret');
  }
  public set serverCertSecret(value: string) {
    this._serverCertSecret = value;
  }
  public resetServerCertSecret() {
    this._serverCertSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverCertSecretInput() {
    return this._serverCertSecret;
  }

  // tls_sni_name - computed: false, optional: true, required: false
  private _tlsSniName?: string; 
  public get tlsSniName() {
    return this.getStringAttribute('tls_sni_name');
  }
  public set tlsSniName(value: string) {
    this._tlsSniName = value;
  }
  public resetTlsSniName() {
    this._tlsSniName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsSniNameInput() {
    return this._tlsSniName;
  }
}

export class DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecReplicaSourcesList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecReplicaSources[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecReplicaSourcesOutputReference {
    return new DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecReplicaSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecRolesPermissions {
  /**
  * Acl Name of RolePermissionType
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_redislabs_com_redis_enterprise_database_v1alpha1_manifest#acl DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1Manifest#acl}
  */
  readonly acl: string;
  /**
  * Role Name of RolePermissionType
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_redislabs_com_redis_enterprise_database_v1alpha1_manifest#role DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1Manifest#role}
  */
  readonly role: string;
  /**
  * Type of Redis Enterprise Database Role Permission
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_redislabs_com_redis_enterprise_database_v1alpha1_manifest#type DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1Manifest#type}
  */
  readonly type: string;
}

export function dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecRolesPermissionsToTerraform(struct?: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecRolesPermissions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acl: cdktf.stringToTerraform(struct!.acl),
    role: cdktf.stringToTerraform(struct!.role),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecRolesPermissionsToHclTerraform(struct?: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecRolesPermissions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acl: {
      value: cdktf.stringToHclTerraform(struct!.acl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecRolesPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecRolesPermissions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acl !== undefined) {
      hasAnyValues = true;
      internalValueResult.acl = this._acl;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecRolesPermissions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acl = undefined;
      this._role = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acl = value.acl;
      this._role = value.role;
      this._type = value.type;
    }
  }

  // acl - computed: false, optional: false, required: true
  private _acl?: string; 
  public get acl() {
    return this.getStringAttribute('acl');
  }
  public set acl(value: string) {
    this._acl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aclInput() {
    return this._acl;
  }

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
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
}

export class DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecRolesPermissionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecRolesPermissions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecRolesPermissionsOutputReference {
    return new DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecRolesPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecUpgradeSpec {
  /**
  * Upgrades the modules to the latest version that supportes the DB version during a DB upgrade action, to upgrade the DB version view the 'redisVersion' field. Notes - All modules must be without specifing the version. in addition, This field is currently not supported for Active-Active databases.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_redislabs_com_redis_enterprise_database_v1alpha1_manifest#upgrade_modules_to_latest DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1Manifest#upgrade_modules_to_latest}
  */
  readonly upgradeModulesToLatest: boolean | cdktf.IResolvable;
}

export function dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecUpgradeSpecToTerraform(struct?: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecUpgradeSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    upgrade_modules_to_latest: cdktf.booleanToTerraform(struct!.upgradeModulesToLatest),
  }
}


export function dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecUpgradeSpecToHclTerraform(struct?: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecUpgradeSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    upgrade_modules_to_latest: {
      value: cdktf.booleanToHclTerraform(struct!.upgradeModulesToLatest),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecUpgradeSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecUpgradeSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._upgradeModulesToLatest !== undefined) {
      hasAnyValues = true;
      internalValueResult.upgradeModulesToLatest = this._upgradeModulesToLatest;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecUpgradeSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._upgradeModulesToLatest = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._upgradeModulesToLatest = value.upgradeModulesToLatest;
    }
  }

  // upgrade_modules_to_latest - computed: false, optional: false, required: true
  private _upgradeModulesToLatest?: boolean | cdktf.IResolvable; 
  public get upgradeModulesToLatest() {
    return this.getBooleanAttribute('upgrade_modules_to_latest');
  }
  public set upgradeModulesToLatest(value: boolean | cdktf.IResolvable) {
    this._upgradeModulesToLatest = value;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeModulesToLatestInput() {
    return this._upgradeModulesToLatest;
  }
}
export interface DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpec {
  /**
  * Connection/ association to the Active-Active database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_redislabs_com_redis_enterprise_database_v1alpha1_manifest#active_active DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1Manifest#active_active}
  */
  readonly activeActive?: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecActiveActive;
  /**
  * Settings for database alerts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_redislabs_com_redis_enterprise_database_v1alpha1_manifest#alert_settings DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1Manifest#alert_settings}
  */
  readonly alertSettings?: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettings;
  /**
  * Target for automatic database backups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_redislabs_com_redis_enterprise_database_v1alpha1_manifest#backup DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1Manifest#backup}
  */
  readonly backup?: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecBackup;
  /**
  * The Secrets containing TLS Client Certificate to use for Authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_redislabs_com_redis_enterprise_database_v1alpha1_manifest#client_authentication_certificates DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1Manifest#client_authentication_certificates}
  */
  readonly clientAuthenticationCertificates?: string[];
  /**
  * Internode encryption (INE) setting. An optional boolean setting, overriding a similar cluster-wide policy. If set to False, INE is guaranteed to be turned off for this DB (regardless of cluster-wide policy). If set to True, INE will be turned on, unless the capability is not supported by the DB ( in such a case we will get an error and database creation will fail). If left unspecified, will be disabled if internode encryption is not supported by the DB (regardless of cluster default). Deleting this property after explicitly setting its value shall have no effect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_redislabs_com_redis_enterprise_database_v1alpha1_manifest#data_internode_encryption DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1Manifest#data_internode_encryption}
  */
  readonly dataInternodeEncryption?: boolean | cdktf.IResolvable;
  /**
  * Database port number. TCP port on which the database is available. Will be generated automatically if omitted. can not be changed after creation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_redislabs_com_redis_enterprise_database_v1alpha1_manifest#database_port DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1Manifest#database_port}
  */
  readonly databasePort?: number;
  /**
  * The name of the secret that holds the password to the database (redis databases only). If secret does not exist, it will be created. To define the password, create an opaque secret and set the name in the spec. The password will be taken from the value of the 'password' key. Use an empty string as value within the secret to disable authentication for the database. Notes - For Active-Active databases this secret will not be automatically created, and also, memcached databases must not be set with a value, and a secret/password will not be automatically created for them. Use the memcachedSaslSecretName field to set authentication parameters for memcached databases.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_redislabs_com_redis_enterprise_database_v1alpha1_manifest#database_secret_name DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1Manifest#database_secret_name}
  */
  readonly databaseSecretName?: string;
  /**
  * Is connecting with a default user allowed?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_redislabs_com_redis_enterprise_database_v1alpha1_manifest#default_user DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1Manifest#default_user}
  */
  readonly defaultUser?: boolean | cdktf.IResolvable;
  /**
  * Database eviction policy. see more https://docs.redislabs.com/latest/rs/administering/database-operations/eviction-policy/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_redislabs_com_redis_enterprise_database_v1alpha1_manifest#eviction_policy DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1Manifest#eviction_policy}
  */
  readonly evictionPolicy?: string;
  /**
  * Whether it is an RoF database or not. Applicable only for databases of type 'REDIS'. Assumed to be false if left blank.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_redislabs_com_redis_enterprise_database_v1alpha1_manifest#is_rof DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1Manifest#is_rof}
  */
  readonly isRof?: boolean | cdktf.IResolvable;
  /**
  * Credentials used for binary authentication in memcached databases. The credentials should be saved as an opaque secret and the name of that secret should be configured using this field. For username, use 'username' as the key and the actual username as the value. For password, use 'password' as the key and the actual password as the value. Note that connections are not encrypted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_redislabs_com_redis_enterprise_database_v1alpha1_manifest#memcached_sasl_secret_name DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1Manifest#memcached_sasl_secret_name}
  */
  readonly memcachedSaslSecretName?: string;
  /**
  * memory size of database. use formats like 100MB, 0.1GB. minimum value in 100MB. When redis on flash (RoF) is enabled, this value refers to RAM+Flash memory, and it must not be below 1GB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_redislabs_com_redis_enterprise_database_v1alpha1_manifest#memory_size DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1Manifest#memory_size}
  */
  readonly memorySize?: string;
  /**
  * List of modules associated with database. Note - For Active-Active databases this feature is currently in preview. For this feature to take effect for Active-Active databases, set a boolean environment variable with the name 'ENABLE_ALPHA_FEATURES' to True. This variable can be set via the redis-enterprise-operator pod spec, or through the operator-environment-config Config Map.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_redislabs_com_redis_enterprise_database_v1alpha1_manifest#modules_list DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1Manifest#modules_list}
  */
  readonly modulesList?: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecModulesListStruct[] | cdktf.IResolvable;
  /**
  * OSS Cluster mode option. Note that not all client libraries support OSS cluster mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_redislabs_com_redis_enterprise_database_v1alpha1_manifest#oss_cluster DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1Manifest#oss_cluster}
  */
  readonly ossCluster?: boolean | cdktf.IResolvable;
  /**
  * Database on-disk persistence policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_redislabs_com_redis_enterprise_database_v1alpha1_manifest#persistence DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1Manifest#persistence}
  */
  readonly persistence?: string;
  /**
  * The policy used for proxy binding to the endpoint. Supported proxy policies are: single/all-master-shards/all-nodes When left blank, the default value will be chosen according to the value of ossCluster - single if disabled, all-master-shards when enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_redislabs_com_redis_enterprise_database_v1alpha1_manifest#proxy_policy DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1Manifest#proxy_policy}
  */
  readonly proxyPolicy?: string;
  /**
  * Whether database should be rack aware. This improves availability - more information: https://docs.redislabs.com/latest/rs/concepts/high-availability/rack-zone-awareness/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_redislabs_com_redis_enterprise_database_v1alpha1_manifest#rack_aware DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1Manifest#rack_aware}
  */
  readonly rackAware?: boolean | cdktf.IResolvable;
  /**
  * Connection to Redis Enterprise Cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_redislabs_com_redis_enterprise_database_v1alpha1_manifest#redis_enterprise_cluster DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1Manifest#redis_enterprise_cluster}
  */
  readonly redisEnterpriseCluster?: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecRedisEnterpriseCluster;
  /**
  * Redis OSS version. Version can be specified via <major.minor> prefix, or via channels - for existing databases - Upgrade Redis OSS version. For new databases - the version which the database will be created with. If set to 'major' - will always upgrade to the most recent major Redis version. If set to 'latest' - will always upgrade to the most recent Redis version. Depends on 'redisUpgradePolicy' - if you want to set the value to 'latest' for some databases, you must set redisUpgradePolicy on the cluster before. Possible values are 'major' or 'latest' When using upgrade - make sure to backup the database before. This value is used only for database type 'redis'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_redislabs_com_redis_enterprise_database_v1alpha1_manifest#redis_version DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1Manifest#redis_version}
  */
  readonly redisVersion?: string;
  /**
  * What databases to replicate from
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_redislabs_com_redis_enterprise_database_v1alpha1_manifest#replica_sources DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1Manifest#replica_sources}
  */
  readonly replicaSources?: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecReplicaSources[] | cdktf.IResolvable;
  /**
  * In-memory database replication. When enabled, database will have replica shard for every master - leading to higher availability. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_redislabs_com_redis_enterprise_database_v1alpha1_manifest#replication DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1Manifest#replication}
  */
  readonly replication?: boolean | cdktf.IResolvable;
  /**
  * Whether this database supports RESP3 protocol. Note - Deleting this property after explicitly setting its value shall have no effect. Please view the corresponding field in RS doc for more info.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_redislabs_com_redis_enterprise_database_v1alpha1_manifest#resp3 DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1Manifest#resp3}
  */
  readonly resp3?: boolean | cdktf.IResolvable;
  /**
  * The size of the RAM portion of an RoF database. Similarly to 'memorySize' use formats like 100MB, 0.1GB. It must be at least 10% of combined memory size (RAM and Flash), as specified by 'memorySize'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_redislabs_com_redis_enterprise_database_v1alpha1_manifest#rof_ram_size DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1Manifest#rof_ram_size}
  */
  readonly rofRamSize?: string;
  /**
  * List of Redis Enteprise ACL and Role bindings to apply
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_redislabs_com_redis_enterprise_database_v1alpha1_manifest#roles_permissions DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1Manifest#roles_permissions}
  */
  readonly rolesPermissions?: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecRolesPermissions[] | cdktf.IResolvable;
  /**
  * Number of database server-side shards
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_redislabs_com_redis_enterprise_database_v1alpha1_manifest#shard_count DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1Manifest#shard_count}
  */
  readonly shardCount?: number;
  /**
  * Toggles database sharding for REAADBs (Active Active databases) and enabled by default. This field is blocked for REDB (non-Active Active databases) and sharding is toggled via the shardCount field - when shardCount is 1 this is disabled otherwise enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_redislabs_com_redis_enterprise_database_v1alpha1_manifest#sharding_enabled DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1Manifest#sharding_enabled}
  */
  readonly shardingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Control the density of shards - should they reside on as few or as many nodes as possible. Available options are 'dense' or 'sparse'. If left unset, defaults to 'dense'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_redislabs_com_redis_enterprise_database_v1alpha1_manifest#shards_placement DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1Manifest#shards_placement}
  */
  readonly shardsPlacement?: string;
  /**
  * Require SSL authenticated and encrypted connections to the database. enabled - all incoming connections to the Database must use SSL. disabled - no incoming connection to the Database should use SSL. replica_ssl - databases that replicate from this one need to use SSL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_redislabs_com_redis_enterprise_database_v1alpha1_manifest#tls_mode DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1Manifest#tls_mode}
  */
  readonly tlsMode?: string;
  /**
  * The type of the database (redis or memcached). Defaults to 'redis'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_redislabs_com_redis_enterprise_database_v1alpha1_manifest#type DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1Manifest#type}
  */
  readonly type?: string;
  /**
  * Specifications for DB upgrade.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_redislabs_com_redis_enterprise_database_v1alpha1_manifest#upgrade_spec DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1Manifest#upgrade_spec}
  */
  readonly upgradeSpec?: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecUpgradeSpec;
}

export function dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecToTerraform(struct?: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active_active: dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecActiveActiveToTerraform(struct!.activeActive),
    alert_settings: dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsToTerraform(struct!.alertSettings),
    backup: dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecBackupToTerraform(struct!.backup),
    client_authentication_certificates: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.clientAuthenticationCertificates),
    data_internode_encryption: cdktf.booleanToTerraform(struct!.dataInternodeEncryption),
    database_port: cdktf.numberToTerraform(struct!.databasePort),
    database_secret_name: cdktf.stringToTerraform(struct!.databaseSecretName),
    default_user: cdktf.booleanToTerraform(struct!.defaultUser),
    eviction_policy: cdktf.stringToTerraform(struct!.evictionPolicy),
    is_rof: cdktf.booleanToTerraform(struct!.isRof),
    memcached_sasl_secret_name: cdktf.stringToTerraform(struct!.memcachedSaslSecretName),
    memory_size: cdktf.stringToTerraform(struct!.memorySize),
    modules_list: cdktf.listMapper(dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecModulesListStructToTerraform, false)(struct!.modulesList),
    oss_cluster: cdktf.booleanToTerraform(struct!.ossCluster),
    persistence: cdktf.stringToTerraform(struct!.persistence),
    proxy_policy: cdktf.stringToTerraform(struct!.proxyPolicy),
    rack_aware: cdktf.booleanToTerraform(struct!.rackAware),
    redis_enterprise_cluster: dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecRedisEnterpriseClusterToTerraform(struct!.redisEnterpriseCluster),
    redis_version: cdktf.stringToTerraform(struct!.redisVersion),
    replica_sources: cdktf.listMapper(dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecReplicaSourcesToTerraform, false)(struct!.replicaSources),
    replication: cdktf.booleanToTerraform(struct!.replication),
    resp3: cdktf.booleanToTerraform(struct!.resp3),
    rof_ram_size: cdktf.stringToTerraform(struct!.rofRamSize),
    roles_permissions: cdktf.listMapper(dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecRolesPermissionsToTerraform, false)(struct!.rolesPermissions),
    shard_count: cdktf.numberToTerraform(struct!.shardCount),
    sharding_enabled: cdktf.booleanToTerraform(struct!.shardingEnabled),
    shards_placement: cdktf.stringToTerraform(struct!.shardsPlacement),
    tls_mode: cdktf.stringToTerraform(struct!.tlsMode),
    type: cdktf.stringToTerraform(struct!.type),
    upgrade_spec: dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecUpgradeSpecToTerraform(struct!.upgradeSpec),
  }
}


export function dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active_active: {
      value: dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecActiveActiveToHclTerraform(struct!.activeActive),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecActiveActive",
    },
    alert_settings: {
      value: dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsToHclTerraform(struct!.alertSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettings",
    },
    backup: {
      value: dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecBackupToHclTerraform(struct!.backup),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecBackup",
    },
    client_authentication_certificates: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.clientAuthenticationCertificates),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    data_internode_encryption: {
      value: cdktf.booleanToHclTerraform(struct!.dataInternodeEncryption),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    database_port: {
      value: cdktf.numberToHclTerraform(struct!.databasePort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    database_secret_name: {
      value: cdktf.stringToHclTerraform(struct!.databaseSecretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_user: {
      value: cdktf.booleanToHclTerraform(struct!.defaultUser),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    eviction_policy: {
      value: cdktf.stringToHclTerraform(struct!.evictionPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_rof: {
      value: cdktf.booleanToHclTerraform(struct!.isRof),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    memcached_sasl_secret_name: {
      value: cdktf.stringToHclTerraform(struct!.memcachedSaslSecretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory_size: {
      value: cdktf.stringToHclTerraform(struct!.memorySize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    modules_list: {
      value: cdktf.listMapperHcl(dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecModulesListStructToHclTerraform, false)(struct!.modulesList),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecModulesListStructList",
    },
    oss_cluster: {
      value: cdktf.booleanToHclTerraform(struct!.ossCluster),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    persistence: {
      value: cdktf.stringToHclTerraform(struct!.persistence),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy_policy: {
      value: cdktf.stringToHclTerraform(struct!.proxyPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rack_aware: {
      value: cdktf.booleanToHclTerraform(struct!.rackAware),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    redis_enterprise_cluster: {
      value: dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecRedisEnterpriseClusterToHclTerraform(struct!.redisEnterpriseCluster),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecRedisEnterpriseCluster",
    },
    redis_version: {
      value: cdktf.stringToHclTerraform(struct!.redisVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replica_sources: {
      value: cdktf.listMapperHcl(dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecReplicaSourcesToHclTerraform, false)(struct!.replicaSources),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecReplicaSourcesList",
    },
    replication: {
      value: cdktf.booleanToHclTerraform(struct!.replication),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    resp3: {
      value: cdktf.booleanToHclTerraform(struct!.resp3),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rof_ram_size: {
      value: cdktf.stringToHclTerraform(struct!.rofRamSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    roles_permissions: {
      value: cdktf.listMapperHcl(dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecRolesPermissionsToHclTerraform, false)(struct!.rolesPermissions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecRolesPermissionsList",
    },
    shard_count: {
      value: cdktf.numberToHclTerraform(struct!.shardCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sharding_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.shardingEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    shards_placement: {
      value: cdktf.stringToHclTerraform(struct!.shardsPlacement),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_mode: {
      value: cdktf.stringToHclTerraform(struct!.tlsMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upgrade_spec: {
      value: dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecUpgradeSpecToHclTerraform(struct!.upgradeSpec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecUpgradeSpec",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activeActive?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeActive = this._activeActive?.internalValue;
    }
    if (this._alertSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertSettings = this._alertSettings?.internalValue;
    }
    if (this._backup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backup = this._backup?.internalValue;
    }
    if (this._clientAuthenticationCertificates !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientAuthenticationCertificates = this._clientAuthenticationCertificates;
    }
    if (this._dataInternodeEncryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataInternodeEncryption = this._dataInternodeEncryption;
    }
    if (this._databasePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.databasePort = this._databasePort;
    }
    if (this._databaseSecretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseSecretName = this._databaseSecretName;
    }
    if (this._defaultUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultUser = this._defaultUser;
    }
    if (this._evictionPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.evictionPolicy = this._evictionPolicy;
    }
    if (this._isRof !== undefined) {
      hasAnyValues = true;
      internalValueResult.isRof = this._isRof;
    }
    if (this._memcachedSaslSecretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.memcachedSaslSecretName = this._memcachedSaslSecretName;
    }
    if (this._memorySize !== undefined) {
      hasAnyValues = true;
      internalValueResult.memorySize = this._memorySize;
    }
    if (this._modulesList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modulesList = this._modulesList?.internalValue;
    }
    if (this._ossCluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.ossCluster = this._ossCluster;
    }
    if (this._persistence !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistence = this._persistence;
    }
    if (this._proxyPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyPolicy = this._proxyPolicy;
    }
    if (this._rackAware !== undefined) {
      hasAnyValues = true;
      internalValueResult.rackAware = this._rackAware;
    }
    if (this._redisEnterpriseCluster?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redisEnterpriseCluster = this._redisEnterpriseCluster?.internalValue;
    }
    if (this._redisVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.redisVersion = this._redisVersion;
    }
    if (this._replicaSources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicaSources = this._replicaSources?.internalValue;
    }
    if (this._replication !== undefined) {
      hasAnyValues = true;
      internalValueResult.replication = this._replication;
    }
    if (this._resp3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.resp3 = this._resp3;
    }
    if (this._rofRamSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.rofRamSize = this._rofRamSize;
    }
    if (this._rolesPermissions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rolesPermissions = this._rolesPermissions?.internalValue;
    }
    if (this._shardCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.shardCount = this._shardCount;
    }
    if (this._shardingEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.shardingEnabled = this._shardingEnabled;
    }
    if (this._shardsPlacement !== undefined) {
      hasAnyValues = true;
      internalValueResult.shardsPlacement = this._shardsPlacement;
    }
    if (this._tlsMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsMode = this._tlsMode;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._upgradeSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.upgradeSpec = this._upgradeSpec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activeActive.internalValue = undefined;
      this._alertSettings.internalValue = undefined;
      this._backup.internalValue = undefined;
      this._clientAuthenticationCertificates = undefined;
      this._dataInternodeEncryption = undefined;
      this._databasePort = undefined;
      this._databaseSecretName = undefined;
      this._defaultUser = undefined;
      this._evictionPolicy = undefined;
      this._isRof = undefined;
      this._memcachedSaslSecretName = undefined;
      this._memorySize = undefined;
      this._modulesList.internalValue = undefined;
      this._ossCluster = undefined;
      this._persistence = undefined;
      this._proxyPolicy = undefined;
      this._rackAware = undefined;
      this._redisEnterpriseCluster.internalValue = undefined;
      this._redisVersion = undefined;
      this._replicaSources.internalValue = undefined;
      this._replication = undefined;
      this._resp3 = undefined;
      this._rofRamSize = undefined;
      this._rolesPermissions.internalValue = undefined;
      this._shardCount = undefined;
      this._shardingEnabled = undefined;
      this._shardsPlacement = undefined;
      this._tlsMode = undefined;
      this._type = undefined;
      this._upgradeSpec.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._activeActive.internalValue = value.activeActive;
      this._alertSettings.internalValue = value.alertSettings;
      this._backup.internalValue = value.backup;
      this._clientAuthenticationCertificates = value.clientAuthenticationCertificates;
      this._dataInternodeEncryption = value.dataInternodeEncryption;
      this._databasePort = value.databasePort;
      this._databaseSecretName = value.databaseSecretName;
      this._defaultUser = value.defaultUser;
      this._evictionPolicy = value.evictionPolicy;
      this._isRof = value.isRof;
      this._memcachedSaslSecretName = value.memcachedSaslSecretName;
      this._memorySize = value.memorySize;
      this._modulesList.internalValue = value.modulesList;
      this._ossCluster = value.ossCluster;
      this._persistence = value.persistence;
      this._proxyPolicy = value.proxyPolicy;
      this._rackAware = value.rackAware;
      this._redisEnterpriseCluster.internalValue = value.redisEnterpriseCluster;
      this._redisVersion = value.redisVersion;
      this._replicaSources.internalValue = value.replicaSources;
      this._replication = value.replication;
      this._resp3 = value.resp3;
      this._rofRamSize = value.rofRamSize;
      this._rolesPermissions.internalValue = value.rolesPermissions;
      this._shardCount = value.shardCount;
      this._shardingEnabled = value.shardingEnabled;
      this._shardsPlacement = value.shardsPlacement;
      this._tlsMode = value.tlsMode;
      this._type = value.type;
      this._upgradeSpec.internalValue = value.upgradeSpec;
    }
  }

  // active_active - computed: false, optional: true, required: false
  private _activeActive = new DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecActiveActiveOutputReference(this, "active_active");
  public get activeActive() {
    return this._activeActive;
  }
  public putActiveActive(value: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecActiveActive) {
    this._activeActive.internalValue = value;
  }
  public resetActiveActive() {
    this._activeActive.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeActiveInput() {
    return this._activeActive.internalValue;
  }

  // alert_settings - computed: false, optional: true, required: false
  private _alertSettings = new DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettingsOutputReference(this, "alert_settings");
  public get alertSettings() {
    return this._alertSettings;
  }
  public putAlertSettings(value: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecAlertSettings) {
    this._alertSettings.internalValue = value;
  }
  public resetAlertSettings() {
    this._alertSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertSettingsInput() {
    return this._alertSettings.internalValue;
  }

  // backup - computed: false, optional: true, required: false
  private _backup = new DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecBackupOutputReference(this, "backup");
  public get backup() {
    return this._backup;
  }
  public putBackup(value: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecBackup) {
    this._backup.internalValue = value;
  }
  public resetBackup() {
    this._backup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupInput() {
    return this._backup.internalValue;
  }

  // client_authentication_certificates - computed: false, optional: true, required: false
  private _clientAuthenticationCertificates?: string[]; 
  public get clientAuthenticationCertificates() {
    return this.getListAttribute('client_authentication_certificates');
  }
  public set clientAuthenticationCertificates(value: string[]) {
    this._clientAuthenticationCertificates = value;
  }
  public resetClientAuthenticationCertificates() {
    this._clientAuthenticationCertificates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAuthenticationCertificatesInput() {
    return this._clientAuthenticationCertificates;
  }

  // data_internode_encryption - computed: false, optional: true, required: false
  private _dataInternodeEncryption?: boolean | cdktf.IResolvable; 
  public get dataInternodeEncryption() {
    return this.getBooleanAttribute('data_internode_encryption');
  }
  public set dataInternodeEncryption(value: boolean | cdktf.IResolvable) {
    this._dataInternodeEncryption = value;
  }
  public resetDataInternodeEncryption() {
    this._dataInternodeEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInternodeEncryptionInput() {
    return this._dataInternodeEncryption;
  }

  // database_port - computed: false, optional: true, required: false
  private _databasePort?: number; 
  public get databasePort() {
    return this.getNumberAttribute('database_port');
  }
  public set databasePort(value: number) {
    this._databasePort = value;
  }
  public resetDatabasePort() {
    this._databasePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databasePortInput() {
    return this._databasePort;
  }

  // database_secret_name - computed: false, optional: true, required: false
  private _databaseSecretName?: string; 
  public get databaseSecretName() {
    return this.getStringAttribute('database_secret_name');
  }
  public set databaseSecretName(value: string) {
    this._databaseSecretName = value;
  }
  public resetDatabaseSecretName() {
    this._databaseSecretName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseSecretNameInput() {
    return this._databaseSecretName;
  }

  // default_user - computed: false, optional: true, required: false
  private _defaultUser?: boolean | cdktf.IResolvable; 
  public get defaultUser() {
    return this.getBooleanAttribute('default_user');
  }
  public set defaultUser(value: boolean | cdktf.IResolvable) {
    this._defaultUser = value;
  }
  public resetDefaultUser() {
    this._defaultUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultUserInput() {
    return this._defaultUser;
  }

  // eviction_policy - computed: false, optional: true, required: false
  private _evictionPolicy?: string; 
  public get evictionPolicy() {
    return this.getStringAttribute('eviction_policy');
  }
  public set evictionPolicy(value: string) {
    this._evictionPolicy = value;
  }
  public resetEvictionPolicy() {
    this._evictionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evictionPolicyInput() {
    return this._evictionPolicy;
  }

  // is_rof - computed: false, optional: true, required: false
  private _isRof?: boolean | cdktf.IResolvable; 
  public get isRof() {
    return this.getBooleanAttribute('is_rof');
  }
  public set isRof(value: boolean | cdktf.IResolvable) {
    this._isRof = value;
  }
  public resetIsRof() {
    this._isRof = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isRofInput() {
    return this._isRof;
  }

  // memcached_sasl_secret_name - computed: false, optional: true, required: false
  private _memcachedSaslSecretName?: string; 
  public get memcachedSaslSecretName() {
    return this.getStringAttribute('memcached_sasl_secret_name');
  }
  public set memcachedSaslSecretName(value: string) {
    this._memcachedSaslSecretName = value;
  }
  public resetMemcachedSaslSecretName() {
    this._memcachedSaslSecretName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memcachedSaslSecretNameInput() {
    return this._memcachedSaslSecretName;
  }

  // memory_size - computed: false, optional: true, required: false
  private _memorySize?: string; 
  public get memorySize() {
    return this.getStringAttribute('memory_size');
  }
  public set memorySize(value: string) {
    this._memorySize = value;
  }
  public resetMemorySize() {
    this._memorySize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memorySizeInput() {
    return this._memorySize;
  }

  // modules_list - computed: false, optional: true, required: false
  private _modulesList = new DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecModulesListStructList(this, "modules_list", false);
  public get modulesList() {
    return this._modulesList;
  }
  public putModulesList(value: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecModulesListStruct[] | cdktf.IResolvable) {
    this._modulesList.internalValue = value;
  }
  public resetModulesList() {
    this._modulesList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modulesListInput() {
    return this._modulesList.internalValue;
  }

  // oss_cluster - computed: false, optional: true, required: false
  private _ossCluster?: boolean | cdktf.IResolvable; 
  public get ossCluster() {
    return this.getBooleanAttribute('oss_cluster');
  }
  public set ossCluster(value: boolean | cdktf.IResolvable) {
    this._ossCluster = value;
  }
  public resetOssCluster() {
    this._ossCluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ossClusterInput() {
    return this._ossCluster;
  }

  // persistence - computed: false, optional: true, required: false
  private _persistence?: string; 
  public get persistence() {
    return this.getStringAttribute('persistence');
  }
  public set persistence(value: string) {
    this._persistence = value;
  }
  public resetPersistence() {
    this._persistence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistenceInput() {
    return this._persistence;
  }

  // proxy_policy - computed: false, optional: true, required: false
  private _proxyPolicy?: string; 
  public get proxyPolicy() {
    return this.getStringAttribute('proxy_policy');
  }
  public set proxyPolicy(value: string) {
    this._proxyPolicy = value;
  }
  public resetProxyPolicy() {
    this._proxyPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyPolicyInput() {
    return this._proxyPolicy;
  }

  // rack_aware - computed: false, optional: true, required: false
  private _rackAware?: boolean | cdktf.IResolvable; 
  public get rackAware() {
    return this.getBooleanAttribute('rack_aware');
  }
  public set rackAware(value: boolean | cdktf.IResolvable) {
    this._rackAware = value;
  }
  public resetRackAware() {
    this._rackAware = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rackAwareInput() {
    return this._rackAware;
  }

  // redis_enterprise_cluster - computed: false, optional: true, required: false
  private _redisEnterpriseCluster = new DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecRedisEnterpriseClusterOutputReference(this, "redis_enterprise_cluster");
  public get redisEnterpriseCluster() {
    return this._redisEnterpriseCluster;
  }
  public putRedisEnterpriseCluster(value: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecRedisEnterpriseCluster) {
    this._redisEnterpriseCluster.internalValue = value;
  }
  public resetRedisEnterpriseCluster() {
    this._redisEnterpriseCluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redisEnterpriseClusterInput() {
    return this._redisEnterpriseCluster.internalValue;
  }

  // redis_version - computed: false, optional: true, required: false
  private _redisVersion?: string; 
  public get redisVersion() {
    return this.getStringAttribute('redis_version');
  }
  public set redisVersion(value: string) {
    this._redisVersion = value;
  }
  public resetRedisVersion() {
    this._redisVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redisVersionInput() {
    return this._redisVersion;
  }

  // replica_sources - computed: false, optional: true, required: false
  private _replicaSources = new DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecReplicaSourcesList(this, "replica_sources", false);
  public get replicaSources() {
    return this._replicaSources;
  }
  public putReplicaSources(value: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecReplicaSources[] | cdktf.IResolvable) {
    this._replicaSources.internalValue = value;
  }
  public resetReplicaSources() {
    this._replicaSources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaSourcesInput() {
    return this._replicaSources.internalValue;
  }

  // replication - computed: false, optional: true, required: false
  private _replication?: boolean | cdktf.IResolvable; 
  public get replication() {
    return this.getBooleanAttribute('replication');
  }
  public set replication(value: boolean | cdktf.IResolvable) {
    this._replication = value;
  }
  public resetReplication() {
    this._replication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationInput() {
    return this._replication;
  }

  // resp3 - computed: false, optional: true, required: false
  private _resp3?: boolean | cdktf.IResolvable; 
  public get resp3() {
    return this.getBooleanAttribute('resp3');
  }
  public set resp3(value: boolean | cdktf.IResolvable) {
    this._resp3 = value;
  }
  public resetResp3() {
    this._resp3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resp3Input() {
    return this._resp3;
  }

  // rof_ram_size - computed: false, optional: true, required: false
  private _rofRamSize?: string; 
  public get rofRamSize() {
    return this.getStringAttribute('rof_ram_size');
  }
  public set rofRamSize(value: string) {
    this._rofRamSize = value;
  }
  public resetRofRamSize() {
    this._rofRamSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rofRamSizeInput() {
    return this._rofRamSize;
  }

  // roles_permissions - computed: false, optional: true, required: false
  private _rolesPermissions = new DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecRolesPermissionsList(this, "roles_permissions", false);
  public get rolesPermissions() {
    return this._rolesPermissions;
  }
  public putRolesPermissions(value: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecRolesPermissions[] | cdktf.IResolvable) {
    this._rolesPermissions.internalValue = value;
  }
  public resetRolesPermissions() {
    this._rolesPermissions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesPermissionsInput() {
    return this._rolesPermissions.internalValue;
  }

  // shard_count - computed: false, optional: true, required: false
  private _shardCount?: number; 
  public get shardCount() {
    return this.getNumberAttribute('shard_count');
  }
  public set shardCount(value: number) {
    this._shardCount = value;
  }
  public resetShardCount() {
    this._shardCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shardCountInput() {
    return this._shardCount;
  }

  // sharding_enabled - computed: false, optional: true, required: false
  private _shardingEnabled?: boolean | cdktf.IResolvable; 
  public get shardingEnabled() {
    return this.getBooleanAttribute('sharding_enabled');
  }
  public set shardingEnabled(value: boolean | cdktf.IResolvable) {
    this._shardingEnabled = value;
  }
  public resetShardingEnabled() {
    this._shardingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shardingEnabledInput() {
    return this._shardingEnabled;
  }

  // shards_placement - computed: false, optional: true, required: false
  private _shardsPlacement?: string; 
  public get shardsPlacement() {
    return this.getStringAttribute('shards_placement');
  }
  public set shardsPlacement(value: string) {
    this._shardsPlacement = value;
  }
  public resetShardsPlacement() {
    this._shardsPlacement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shardsPlacementInput() {
    return this._shardsPlacement;
  }

  // tls_mode - computed: false, optional: true, required: false
  private _tlsMode?: string; 
  public get tlsMode() {
    return this.getStringAttribute('tls_mode');
  }
  public set tlsMode(value: string) {
    this._tlsMode = value;
  }
  public resetTlsMode() {
    this._tlsMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsModeInput() {
    return this._tlsMode;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // upgrade_spec - computed: false, optional: true, required: false
  private _upgradeSpec = new DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecUpgradeSpecOutputReference(this, "upgrade_spec");
  public get upgradeSpec() {
    return this._upgradeSpec;
  }
  public putUpgradeSpec(value: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecUpgradeSpec) {
    this._upgradeSpec.internalValue = value;
  }
  public resetUpgradeSpec() {
    this._upgradeSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeSpecInput() {
    return this._upgradeSpec.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_redislabs_com_redis_enterprise_database_v1alpha1_manifest k8s_app_redislabs_com_redis_enterprise_database_v1alpha1_manifest}
*/
export class DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_app_redislabs_com_redis_enterprise_database_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_redislabs_com_redis_enterprise_database_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_app_redislabs_com_redis_enterprise_database_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_redislabs_com_redis_enterprise_database_v1alpha1_manifest k8s_app_redislabs_com_redis_enterprise_database_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_app_redislabs_com_redis_enterprise_database_v1alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.3'
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
  private _metadata = new DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpec) {
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
      metadata: dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAppRedislabsComRedisEnterpriseDatabaseV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
