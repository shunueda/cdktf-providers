// https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SHiveOpenshiftIoClusterPoolV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#metadata DataK8SHiveOpenshiftIoClusterPoolV1Manifest#metadata}
  */
  readonly metadata: DataK8SHiveOpenshiftIoClusterPoolV1ManifestMetadata;
  /**
  * ClusterPoolSpec defines the desired state of the ClusterPool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#spec DataK8SHiveOpenshiftIoClusterPoolV1Manifest#spec}
  */
  readonly spec: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpec;
}
export interface DataK8SHiveOpenshiftIoClusterPoolV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#annotations DataK8SHiveOpenshiftIoClusterPoolV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#labels DataK8SHiveOpenshiftIoClusterPoolV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#name DataK8SHiveOpenshiftIoClusterPoolV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#namespace DataK8SHiveOpenshiftIoClusterPoolV1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SHiveOpenshiftIoClusterPoolV1ManifestMetadataToTerraform(struct?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SHiveOpenshiftIoClusterPoolV1ManifestMetadataToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SHiveOpenshiftIoClusterPoolV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterPoolV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterPoolV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecClaimLifetime {
  /**
  * Default is the default lifetime of the claim when no lifetime is set on the claim itself. This is a Duration value; see https://pkg.go.dev/time#ParseDuration for accepted formats. Note: due to discrepancies in validation vs parsing, we use a Pattern instead of 'Format=duration'. See https://bugzilla.redhat.com/show_bug.cgi?id=2050332 https://github.com/kubernetes/apimachinery/issues/131 https://github.com/kubernetes/apiextensions-apiserver/issues/56
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#default DataK8SHiveOpenshiftIoClusterPoolV1Manifest#default}
  */
  readonly default?: string;
  /**
  * Maximum is the maximum lifetime of the claim after it is assigned a cluster. If the claim still exists when the lifetime has elapsed, the claim will be deleted by Hive. The lifetime of a claim is the mimimum of the lifetimes set by the cluster pool and the claim itself. This is a Duration value; see https://pkg.go.dev/time#ParseDuration for accepted formats. Note: due to discrepancies in validation vs parsing, we use a Pattern instead of 'Format=duration'. See https://bugzilla.redhat.com/show_bug.cgi?id=2050332 https://github.com/kubernetes/apimachinery/issues/131 https://github.com/kubernetes/apiextensions-apiserver/issues/56
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#maximum DataK8SHiveOpenshiftIoClusterPoolV1Manifest#maximum}
  */
  readonly maximum?: string;
}

export function dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecClaimLifetimeToTerraform(struct?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecClaimLifetime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.stringToTerraform(struct!.default),
    maximum: cdktf.stringToTerraform(struct!.maximum),
  }
}


export function dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecClaimLifetimeToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecClaimLifetime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maximum: {
      value: cdktf.stringToHclTerraform(struct!.maximum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecClaimLifetimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecClaimLifetime | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._maximum !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximum = this._maximum;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecClaimLifetime | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default = undefined;
      this._maximum = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._default = value.default;
      this._maximum = value.maximum;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // maximum - computed: false, optional: true, required: false
  private _maximum?: string; 
  public get maximum() {
    return this.getStringAttribute('maximum');
  }
  public set maximum(value: string) {
    this._maximum = value;
  }
  public resetMaximum() {
    this._maximum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumInput() {
    return this._maximum;
  }
}
export interface DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecHibernationConfig {
  /**
  * ResumeTimeout is the maximum amount of time we will wait for an unclaimed ClusterDeployment to resume from hibernation (e.g. at the behest of runningCount, or in preparation for being claimed). If this time is exceeded, the ClusterDeployment will be considered Broken and we will replace it. The default (unspecified or zero) means no timeout -- we will allow the ClusterDeployment to continue trying to resume 'forever'. This is a Duration value; see https://pkg.go.dev/time#ParseDuration for accepted formats. Note: due to discrepancies in validation vs parsing, we use a Pattern instead of 'Format=duration'. See https://bugzilla.redhat.com/show_bug.cgi?id=2050332 https://github.com/kubernetes/apimachinery/issues/131 https://github.com/kubernetes/apiextensions-apiserver/issues/56
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#resume_timeout DataK8SHiveOpenshiftIoClusterPoolV1Manifest#resume_timeout}
  */
  readonly resumeTimeout?: string;
}

export function dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecHibernationConfigToTerraform(struct?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecHibernationConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resume_timeout: cdktf.stringToTerraform(struct!.resumeTimeout),
  }
}


export function dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecHibernationConfigToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecHibernationConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resume_timeout: {
      value: cdktf.stringToHclTerraform(struct!.resumeTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecHibernationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecHibernationConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resumeTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.resumeTimeout = this._resumeTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecHibernationConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resumeTimeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resumeTimeout = value.resumeTimeout;
    }
  }

  // resume_timeout - computed: false, optional: true, required: false
  private _resumeTimeout?: string; 
  public get resumeTimeout() {
    return this.getStringAttribute('resume_timeout');
  }
  public set resumeTimeout(value: string) {
    this._resumeTimeout = value;
  }
  public resetResumeTimeout() {
    this._resumeTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resumeTimeoutInput() {
    return this._resumeTimeout;
  }
}
export interface DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecImageSetRef {
  /**
  * Name is the name of the ClusterImageSet that this refers to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#name DataK8SHiveOpenshiftIoClusterPoolV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecImageSetRefToTerraform(struct?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecImageSetRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecImageSetRefToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecImageSetRef | cdktf.IResolvable): any {
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

export class DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecImageSetRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecImageSetRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecImageSetRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInstallConfigSecretTemplateRef {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#name DataK8SHiveOpenshiftIoClusterPoolV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInstallConfigSecretTemplateRefToTerraform(struct?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInstallConfigSecretTemplateRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInstallConfigSecretTemplateRefToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInstallConfigSecretTemplateRef | cdktf.IResolvable): any {
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

export class DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInstallConfigSecretTemplateRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInstallConfigSecretTemplateRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInstallConfigSecretTemplateRef | cdktf.IResolvable | undefined) {
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

  // name - computed: false, optional: true, required: false
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
}
export interface DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInstallerEnvValueFromConfigMapKeyRef {
  /**
  * The key to select.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#key DataK8SHiveOpenshiftIoClusterPoolV1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#name DataK8SHiveOpenshiftIoClusterPoolV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#optional DataK8SHiveOpenshiftIoClusterPoolV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInstallerEnvValueFromConfigMapKeyRefToTerraform(struct?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInstallerEnvValueFromConfigMapKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInstallerEnvValueFromConfigMapKeyRefToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInstallerEnvValueFromConfigMapKeyRef | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInstallerEnvValueFromConfigMapKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInstallerEnvValueFromConfigMapKeyRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInstallerEnvValueFromConfigMapKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
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

  // name - computed: false, optional: true, required: false
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInstallerEnvValueFromFieldRef {
  /**
  * Version of the schema the FieldPath is written in terms of, defaults to 'v1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#api_version DataK8SHiveOpenshiftIoClusterPoolV1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Path of the field to select in the specified API version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#field_path DataK8SHiveOpenshiftIoClusterPoolV1Manifest#field_path}
  */
  readonly fieldPath: string;
}

export function dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInstallerEnvValueFromFieldRefToTerraform(struct?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInstallerEnvValueFromFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}


export function dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInstallerEnvValueFromFieldRefToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInstallerEnvValueFromFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_version: {
      value: cdktf.stringToHclTerraform(struct!.apiVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_path: {
      value: cdktf.stringToHclTerraform(struct!.fieldPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInstallerEnvValueFromFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInstallerEnvValueFromFieldRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._fieldPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldPath = this._fieldPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInstallerEnvValueFromFieldRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._fieldPath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiVersion = value.apiVersion;
      this._fieldPath = value.fieldPath;
    }
  }

  // api_version - computed: false, optional: true, required: false
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  public resetApiVersion() {
    this._apiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
  }

  // field_path - computed: false, optional: false, required: true
  private _fieldPath?: string; 
  public get fieldPath() {
    return this.getStringAttribute('field_path');
  }
  public set fieldPath(value: string) {
    this._fieldPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldPathInput() {
    return this._fieldPath;
  }
}
export interface DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInstallerEnvValueFromResourceFieldRef {
  /**
  * Container name: required for volumes, optional for env vars
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#container_name DataK8SHiveOpenshiftIoClusterPoolV1Manifest#container_name}
  */
  readonly containerName?: string;
  /**
  * Specifies the output format of the exposed resources, defaults to '1'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#divisor DataK8SHiveOpenshiftIoClusterPoolV1Manifest#divisor}
  */
  readonly divisor?: string;
  /**
  * Required: resource to select
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#resource DataK8SHiveOpenshiftIoClusterPoolV1Manifest#resource}
  */
  readonly resource: string;
}

export function dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInstallerEnvValueFromResourceFieldRefToTerraform(struct?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInstallerEnvValueFromResourceFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_name: cdktf.stringToTerraform(struct!.containerName),
    divisor: cdktf.stringToTerraform(struct!.divisor),
    resource: cdktf.stringToTerraform(struct!.resource),
  }
}


export function dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInstallerEnvValueFromResourceFieldRefToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInstallerEnvValueFromResourceFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_name: {
      value: cdktf.stringToHclTerraform(struct!.containerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    divisor: {
      value: cdktf.stringToHclTerraform(struct!.divisor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource: {
      value: cdktf.stringToHclTerraform(struct!.resource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInstallerEnvValueFromResourceFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInstallerEnvValueFromResourceFieldRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerName = this._containerName;
    }
    if (this._divisor !== undefined) {
      hasAnyValues = true;
      internalValueResult.divisor = this._divisor;
    }
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInstallerEnvValueFromResourceFieldRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerName = undefined;
      this._divisor = undefined;
      this._resource = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerName = value.containerName;
      this._divisor = value.divisor;
      this._resource = value.resource;
    }
  }

  // container_name - computed: false, optional: true, required: false
  private _containerName?: string; 
  public get containerName() {
    return this.getStringAttribute('container_name');
  }
  public set containerName(value: string) {
    this._containerName = value;
  }
  public resetContainerName() {
    this._containerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerNameInput() {
    return this._containerName;
  }

  // divisor - computed: false, optional: true, required: false
  private _divisor?: string; 
  public get divisor() {
    return this.getStringAttribute('divisor');
  }
  public set divisor(value: string) {
    this._divisor = value;
  }
  public resetDivisor() {
    this._divisor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get divisorInput() {
    return this._divisor;
  }

  // resource - computed: false, optional: false, required: true
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }
}
export interface DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInstallerEnvValueFromSecretKeyRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#key DataK8SHiveOpenshiftIoClusterPoolV1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#name DataK8SHiveOpenshiftIoClusterPoolV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#optional DataK8SHiveOpenshiftIoClusterPoolV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInstallerEnvValueFromSecretKeyRefToTerraform(struct?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInstallerEnvValueFromSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInstallerEnvValueFromSecretKeyRefToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInstallerEnvValueFromSecretKeyRef | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInstallerEnvValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInstallerEnvValueFromSecretKeyRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInstallerEnvValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
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

  // name - computed: false, optional: true, required: false
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInstallerEnvValueFrom {
  /**
  * Selects a key of a ConfigMap.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#config_map_key_ref DataK8SHiveOpenshiftIoClusterPoolV1Manifest#config_map_key_ref}
  */
  readonly configMapKeyRef?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInstallerEnvValueFromConfigMapKeyRef;
  /**
  * Selects a field of the pod: supports metadata.name, metadata.namespace, 'metadata.labels['<KEY>']', 'metadata.annotations['<KEY>']', spec.nodeName, spec.serviceAccountName, status.hostIP, status.podIP, status.podIPs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#field_ref DataK8SHiveOpenshiftIoClusterPoolV1Manifest#field_ref}
  */
  readonly fieldRef?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInstallerEnvValueFromFieldRef;
  /**
  * Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, limits.ephemeral-storage, requests.cpu, requests.memory and requests.ephemeral-storage) are currently supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#resource_field_ref DataK8SHiveOpenshiftIoClusterPoolV1Manifest#resource_field_ref}
  */
  readonly resourceFieldRef?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInstallerEnvValueFromResourceFieldRef;
  /**
  * Selects a key of a secret in the pod's namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#secret_key_ref DataK8SHiveOpenshiftIoClusterPoolV1Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInstallerEnvValueFromSecretKeyRef;
}

export function dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInstallerEnvValueFromToTerraform(struct?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInstallerEnvValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map_key_ref: dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInstallerEnvValueFromConfigMapKeyRefToTerraform(struct!.configMapKeyRef),
    field_ref: dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInstallerEnvValueFromFieldRefToTerraform(struct!.fieldRef),
    resource_field_ref: dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInstallerEnvValueFromResourceFieldRefToTerraform(struct!.resourceFieldRef),
    secret_key_ref: dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInstallerEnvValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInstallerEnvValueFromToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInstallerEnvValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map_key_ref: {
      value: dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInstallerEnvValueFromConfigMapKeyRefToHclTerraform(struct!.configMapKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInstallerEnvValueFromConfigMapKeyRef",
    },
    field_ref: {
      value: dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInstallerEnvValueFromFieldRefToHclTerraform(struct!.fieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInstallerEnvValueFromFieldRef",
    },
    resource_field_ref: {
      value: dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInstallerEnvValueFromResourceFieldRefToHclTerraform(struct!.resourceFieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInstallerEnvValueFromResourceFieldRef",
    },
    secret_key_ref: {
      value: dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInstallerEnvValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInstallerEnvValueFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInstallerEnvValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInstallerEnvValueFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMapKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMapKeyRef = this._configMapKeyRef?.internalValue;
    }
    if (this._fieldRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldRef = this._fieldRef?.internalValue;
    }
    if (this._resourceFieldRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceFieldRef = this._resourceFieldRef?.internalValue;
    }
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInstallerEnvValueFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMapKeyRef.internalValue = undefined;
      this._fieldRef.internalValue = undefined;
      this._resourceFieldRef.internalValue = undefined;
      this._secretKeyRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMapKeyRef.internalValue = value.configMapKeyRef;
      this._fieldRef.internalValue = value.fieldRef;
      this._resourceFieldRef.internalValue = value.resourceFieldRef;
      this._secretKeyRef.internalValue = value.secretKeyRef;
    }
  }

  // config_map_key_ref - computed: false, optional: true, required: false
  private _configMapKeyRef = new DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInstallerEnvValueFromConfigMapKeyRefOutputReference(this, "config_map_key_ref");
  public get configMapKeyRef() {
    return this._configMapKeyRef;
  }
  public putConfigMapKeyRef(value: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInstallerEnvValueFromConfigMapKeyRef) {
    this._configMapKeyRef.internalValue = value;
  }
  public resetConfigMapKeyRef() {
    this._configMapKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapKeyRefInput() {
    return this._configMapKeyRef.internalValue;
  }

  // field_ref - computed: false, optional: true, required: false
  private _fieldRef = new DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInstallerEnvValueFromFieldRefOutputReference(this, "field_ref");
  public get fieldRef() {
    return this._fieldRef;
  }
  public putFieldRef(value: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInstallerEnvValueFromFieldRef) {
    this._fieldRef.internalValue = value;
  }
  public resetFieldRef() {
    this._fieldRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldRefInput() {
    return this._fieldRef.internalValue;
  }

  // resource_field_ref - computed: false, optional: true, required: false
  private _resourceFieldRef = new DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInstallerEnvValueFromResourceFieldRefOutputReference(this, "resource_field_ref");
  public get resourceFieldRef() {
    return this._resourceFieldRef;
  }
  public putResourceFieldRef(value: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInstallerEnvValueFromResourceFieldRef) {
    this._resourceFieldRef.internalValue = value;
  }
  public resetResourceFieldRef() {
    this._resourceFieldRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceFieldRefInput() {
    return this._resourceFieldRef.internalValue;
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInstallerEnvValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInstallerEnvValueFromSecretKeyRef) {
    this._secretKeyRef.internalValue = value;
  }
  public resetSecretKeyRef() {
    this._secretKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyRefInput() {
    return this._secretKeyRef.internalValue;
  }
}
export interface DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInstallerEnv {
  /**
  * Name of the environment variable. Must be a C_IDENTIFIER.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#name DataK8SHiveOpenshiftIoClusterPoolV1Manifest#name}
  */
  readonly name: string;
  /**
  * Variable references $(VAR_NAME) are expanded using the previously defined environment variables in the container and any service environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. '$$(VAR_NAME)' will produce the string literal '$(VAR_NAME)'. Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to ''.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#value DataK8SHiveOpenshiftIoClusterPoolV1Manifest#value}
  */
  readonly value?: string;
  /**
  * Source for the environment variable's value. Cannot be used if value is not empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#value_from DataK8SHiveOpenshiftIoClusterPoolV1Manifest#value_from}
  */
  readonly valueFrom?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInstallerEnvValueFrom;
}

export function dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInstallerEnvToTerraform(struct?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInstallerEnv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
    value_from: dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInstallerEnvValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInstallerEnvToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInstallerEnv | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_from: {
      value: dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInstallerEnvValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInstallerEnvValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInstallerEnvOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInstallerEnv | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._valueFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFrom = this._valueFrom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInstallerEnv | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
      this._valueFrom.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
      this._valueFrom.internalValue = value.valueFrom;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // value_from - computed: false, optional: true, required: false
  private _valueFrom = new DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInstallerEnvValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInstallerEnvValueFrom) {
    this._valueFrom.internalValue = value;
  }
  public resetValueFrom() {
    this._valueFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFromInput() {
    return this._valueFrom.internalValue;
  }
}

export class DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInstallerEnvList extends cdktf.ComplexList {
  public internalValue? : DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInstallerEnv[] | cdktf.IResolvable

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
  public get(index: number): DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInstallerEnvOutputReference {
    return new DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInstallerEnvOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInventory {
  /**
  * Kind denotes the kind of the referenced resource. The default is ClusterDeploymentCustomization, which is also currently the only supported value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#kind DataK8SHiveOpenshiftIoClusterPoolV1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Name is the name of the referenced resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#name DataK8SHiveOpenshiftIoClusterPoolV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInventoryToTerraform(struct?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInventory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInventoryToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInventory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInventoryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInventory | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInventory | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kind = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kind = value.kind;
      this._name = value.name;
    }
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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

export class DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInventoryList extends cdktf.ComplexList {
  public internalValue? : DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInventory[] | cdktf.IResolvable

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
  public get(index: number): DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInventoryOutputReference {
    return new DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInventoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAgentBareMetalAgentSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#key DataK8SHiveOpenshiftIoClusterPoolV1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#operator DataK8SHiveOpenshiftIoClusterPoolV1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#values DataK8SHiveOpenshiftIoClusterPoolV1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAgentBareMetalAgentSelectorMatchExpressionsToTerraform(struct?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAgentBareMetalAgentSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAgentBareMetalAgentSelectorMatchExpressionsToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAgentBareMetalAgentSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAgentBareMetalAgentSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAgentBareMetalAgentSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAgentBareMetalAgentSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAgentBareMetalAgentSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAgentBareMetalAgentSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAgentBareMetalAgentSelectorMatchExpressionsOutputReference {
    return new DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAgentBareMetalAgentSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAgentBareMetalAgentSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#match_expressions DataK8SHiveOpenshiftIoClusterPoolV1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAgentBareMetalAgentSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#match_labels DataK8SHiveOpenshiftIoClusterPoolV1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAgentBareMetalAgentSelectorToTerraform(struct?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAgentBareMetalAgentSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAgentBareMetalAgentSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAgentBareMetalAgentSelectorToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAgentBareMetalAgentSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAgentBareMetalAgentSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAgentBareMetalAgentSelectorMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAgentBareMetalAgentSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAgentBareMetalAgentSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAgentBareMetalAgentSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAgentBareMetalAgentSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAgentBareMetalAgentSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
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
}
export interface DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAgentBareMetal {
  /**
  * AgentSelector is a label selector used for associating relevant custom resources with this cluster. (Agent, BareMetalHost, etc)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#agent_selector DataK8SHiveOpenshiftIoClusterPoolV1Manifest#agent_selector}
  */
  readonly agentSelector: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAgentBareMetalAgentSelector;
}

export function dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAgentBareMetalToTerraform(struct?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAgentBareMetal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agent_selector: dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAgentBareMetalAgentSelectorToTerraform(struct!.agentSelector),
  }
}


export function dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAgentBareMetalToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAgentBareMetal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    agent_selector: {
      value: dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAgentBareMetalAgentSelectorToHclTerraform(struct!.agentSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAgentBareMetalAgentSelector",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAgentBareMetalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAgentBareMetal | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agentSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentSelector = this._agentSelector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAgentBareMetal | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._agentSelector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._agentSelector.internalValue = value.agentSelector;
    }
  }

  // agent_selector - computed: false, optional: false, required: true
  private _agentSelector = new DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAgentBareMetalAgentSelectorOutputReference(this, "agent_selector");
  public get agentSelector() {
    return this._agentSelector;
  }
  public putAgentSelector(value: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAgentBareMetalAgentSelector) {
    this._agentSelector.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agentSelectorInput() {
    return this._agentSelector.internalValue;
  }
}
export interface DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAwsCredentialsAssumeRole {
  /**
  * ExternalID is random string generated by platform so that assume role is protected from confused deputy problem. more info: https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-user_externalid.html
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#external_id DataK8SHiveOpenshiftIoClusterPoolV1Manifest#external_id}
  */
  readonly externalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#role_arn DataK8SHiveOpenshiftIoClusterPoolV1Manifest#role_arn}
  */
  readonly roleArn: string;
}

export function dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAwsCredentialsAssumeRoleToTerraform(struct?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAwsCredentialsAssumeRole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external_id: cdktf.stringToTerraform(struct!.externalId),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}


export function dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAwsCredentialsAssumeRoleToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAwsCredentialsAssumeRole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    external_id: {
      value: cdktf.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAwsCredentialsAssumeRoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAwsCredentialsAssumeRole | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAwsCredentialsAssumeRole | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._externalId = undefined;
      this._roleArn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._externalId = value.externalId;
      this._roleArn = value.roleArn;
    }
  }

  // external_id - computed: false, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }
}
export interface DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAwsCredentialsSecretRef {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#name DataK8SHiveOpenshiftIoClusterPoolV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAwsCredentialsSecretRefToTerraform(struct?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAwsCredentialsSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAwsCredentialsSecretRefToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAwsCredentialsSecretRef | cdktf.IResolvable): any {
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

export class DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAwsCredentialsSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAwsCredentialsSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAwsCredentialsSecretRef | cdktf.IResolvable | undefined) {
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

  // name - computed: false, optional: true, required: false
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
}
export interface DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAwsPrivateLink {
  /**
  * AdditionalAllowedPrincipals is a list of additional allowed principal ARNs to be configured for the Private Link cluster's VPC Endpoint Service. ARNs provided as AdditionalAllowedPrincipals will be configured for the cluster's VPC Endpoint Service in addition to the IAM entity used by Hive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#additional_allowed_principals DataK8SHiveOpenshiftIoClusterPoolV1Manifest#additional_allowed_principals}
  */
  readonly additionalAllowedPrincipals?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#enabled DataK8SHiveOpenshiftIoClusterPoolV1Manifest#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAwsPrivateLinkToTerraform(struct?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAwsPrivateLink | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_allowed_principals: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.additionalAllowedPrincipals),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAwsPrivateLinkToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAwsPrivateLink | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_allowed_principals: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.additionalAllowedPrincipals),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
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

export class DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAwsPrivateLinkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAwsPrivateLink | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalAllowedPrincipals !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalAllowedPrincipals = this._additionalAllowedPrincipals;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAwsPrivateLink | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalAllowedPrincipals = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalAllowedPrincipals = value.additionalAllowedPrincipals;
      this._enabled = value.enabled;
    }
  }

  // additional_allowed_principals - computed: false, optional: true, required: false
  private _additionalAllowedPrincipals?: string[]; 
  public get additionalAllowedPrincipals() {
    return this.getListAttribute('additional_allowed_principals');
  }
  public set additionalAllowedPrincipals(value: string[]) {
    this._additionalAllowedPrincipals = value;
  }
  public resetAdditionalAllowedPrincipals() {
    this._additionalAllowedPrincipals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalAllowedPrincipalsInput() {
    return this._additionalAllowedPrincipals;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAws {
  /**
  * CredentialsAssumeRole refers to the IAM role that must be assumed to obtain AWS account access for the cluster operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#credentials_assume_role DataK8SHiveOpenshiftIoClusterPoolV1Manifest#credentials_assume_role}
  */
  readonly credentialsAssumeRole?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAwsCredentialsAssumeRole;
  /**
  * CredentialsSecretRef refers to a secret that contains the AWS account access credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#credentials_secret_ref DataK8SHiveOpenshiftIoClusterPoolV1Manifest#credentials_secret_ref}
  */
  readonly credentialsSecretRef?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAwsCredentialsSecretRef;
  /**
  * PrivateLink allows uses to enable access to the cluster's API server using AWS PrivateLink. AWS PrivateLink includes a pair of VPC Endpoint Service and VPC Endpoint accross AWS accounts and allows clients to connect to services using AWS's internal networking instead of the Internet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#private_link DataK8SHiveOpenshiftIoClusterPoolV1Manifest#private_link}
  */
  readonly privateLink?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAwsPrivateLink;
  /**
  * Region specifies the AWS region where the cluster will be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#region DataK8SHiveOpenshiftIoClusterPoolV1Manifest#region}
  */
  readonly region: string;
  /**
  * UserTags specifies additional tags for AWS resources created for the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#user_tags DataK8SHiveOpenshiftIoClusterPoolV1Manifest#user_tags}
  */
  readonly userTags?: { [key: string]: string };
}

export function dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAwsToTerraform(struct?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAws | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credentials_assume_role: dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAwsCredentialsAssumeRoleToTerraform(struct!.credentialsAssumeRole),
    credentials_secret_ref: dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAwsCredentialsSecretRefToTerraform(struct!.credentialsSecretRef),
    private_link: dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAwsPrivateLinkToTerraform(struct!.privateLink),
    region: cdktf.stringToTerraform(struct!.region),
    user_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.userTags),
  }
}


export function dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAwsToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAws | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    credentials_assume_role: {
      value: dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAwsCredentialsAssumeRoleToHclTerraform(struct!.credentialsAssumeRole),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAwsCredentialsAssumeRole",
    },
    credentials_secret_ref: {
      value: dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAwsCredentialsSecretRefToHclTerraform(struct!.credentialsSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAwsCredentialsSecretRef",
    },
    private_link: {
      value: dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAwsPrivateLinkToHclTerraform(struct!.privateLink),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAwsPrivateLink",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.userTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAwsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAws | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credentialsAssumeRole?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialsAssumeRole = this._credentialsAssumeRole?.internalValue;
    }
    if (this._credentialsSecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialsSecretRef = this._credentialsSecretRef?.internalValue;
    }
    if (this._privateLink?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateLink = this._privateLink?.internalValue;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._userTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTags = this._userTags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAws | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._credentialsAssumeRole.internalValue = undefined;
      this._credentialsSecretRef.internalValue = undefined;
      this._privateLink.internalValue = undefined;
      this._region = undefined;
      this._userTags = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._credentialsAssumeRole.internalValue = value.credentialsAssumeRole;
      this._credentialsSecretRef.internalValue = value.credentialsSecretRef;
      this._privateLink.internalValue = value.privateLink;
      this._region = value.region;
      this._userTags = value.userTags;
    }
  }

  // credentials_assume_role - computed: false, optional: true, required: false
  private _credentialsAssumeRole = new DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAwsCredentialsAssumeRoleOutputReference(this, "credentials_assume_role");
  public get credentialsAssumeRole() {
    return this._credentialsAssumeRole;
  }
  public putCredentialsAssumeRole(value: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAwsCredentialsAssumeRole) {
    this._credentialsAssumeRole.internalValue = value;
  }
  public resetCredentialsAssumeRole() {
    this._credentialsAssumeRole.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsAssumeRoleInput() {
    return this._credentialsAssumeRole.internalValue;
  }

  // credentials_secret_ref - computed: false, optional: true, required: false
  private _credentialsSecretRef = new DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAwsCredentialsSecretRefOutputReference(this, "credentials_secret_ref");
  public get credentialsSecretRef() {
    return this._credentialsSecretRef;
  }
  public putCredentialsSecretRef(value: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAwsCredentialsSecretRef) {
    this._credentialsSecretRef.internalValue = value;
  }
  public resetCredentialsSecretRef() {
    this._credentialsSecretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsSecretRefInput() {
    return this._credentialsSecretRef.internalValue;
  }

  // private_link - computed: false, optional: true, required: false
  private _privateLink = new DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAwsPrivateLinkOutputReference(this, "private_link");
  public get privateLink() {
    return this._privateLink;
  }
  public putPrivateLink(value: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAwsPrivateLink) {
    this._privateLink.internalValue = value;
  }
  public resetPrivateLink() {
    this._privateLink.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateLinkInput() {
    return this._privateLink.internalValue;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // user_tags - computed: false, optional: true, required: false
  private _userTags?: { [key: string]: string }; 
  public get userTags() {
    return this.getStringMapAttribute('user_tags');
  }
  public set userTags(value: { [key: string]: string }) {
    this._userTags = value;
  }
  public resetUserTags() {
    this._userTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagsInput() {
    return this._userTags;
  }
}
export interface DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAzureCredentialsSecretRef {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#name DataK8SHiveOpenshiftIoClusterPoolV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAzureCredentialsSecretRefToTerraform(struct?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAzureCredentialsSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAzureCredentialsSecretRefToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAzureCredentialsSecretRef | cdktf.IResolvable): any {
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

export class DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAzureCredentialsSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAzureCredentialsSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAzureCredentialsSecretRef | cdktf.IResolvable | undefined) {
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

  // name - computed: false, optional: true, required: false
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
}
export interface DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAzure {
  /**
  * BaseDomainResourceGroupName specifies the resource group where the azure DNS zone for the base domain is found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#base_domain_resource_group_name DataK8SHiveOpenshiftIoClusterPoolV1Manifest#base_domain_resource_group_name}
  */
  readonly baseDomainResourceGroupName?: string;
  /**
  * cloudName is the name of the Azure cloud environment which can be used to configure the Azure SDK with the appropriate Azure API endpoints. If empty, the value is equal to 'AzurePublicCloud'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#cloud_name DataK8SHiveOpenshiftIoClusterPoolV1Manifest#cloud_name}
  */
  readonly cloudName?: string;
  /**
  * CredentialsSecretRef refers to a secret that contains the Azure account access credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#credentials_secret_ref DataK8SHiveOpenshiftIoClusterPoolV1Manifest#credentials_secret_ref}
  */
  readonly credentialsSecretRef: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAzureCredentialsSecretRef;
  /**
  * Region specifies the Azure region where the cluster will be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#region DataK8SHiveOpenshiftIoClusterPoolV1Manifest#region}
  */
  readonly region: string;
}

export function dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAzureToTerraform(struct?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAzure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_domain_resource_group_name: cdktf.stringToTerraform(struct!.baseDomainResourceGroupName),
    cloud_name: cdktf.stringToTerraform(struct!.cloudName),
    credentials_secret_ref: dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAzureCredentialsSecretRefToTerraform(struct!.credentialsSecretRef),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAzureToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAzure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base_domain_resource_group_name: {
      value: cdktf.stringToHclTerraform(struct!.baseDomainResourceGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloud_name: {
      value: cdktf.stringToHclTerraform(struct!.cloudName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credentials_secret_ref: {
      value: dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAzureCredentialsSecretRefToHclTerraform(struct!.credentialsSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAzureCredentialsSecretRef",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAzureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAzure | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseDomainResourceGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseDomainResourceGroupName = this._baseDomainResourceGroupName;
    }
    if (this._cloudName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudName = this._cloudName;
    }
    if (this._credentialsSecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialsSecretRef = this._credentialsSecretRef?.internalValue;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAzure | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._baseDomainResourceGroupName = undefined;
      this._cloudName = undefined;
      this._credentialsSecretRef.internalValue = undefined;
      this._region = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._baseDomainResourceGroupName = value.baseDomainResourceGroupName;
      this._cloudName = value.cloudName;
      this._credentialsSecretRef.internalValue = value.credentialsSecretRef;
      this._region = value.region;
    }
  }

  // base_domain_resource_group_name - computed: false, optional: true, required: false
  private _baseDomainResourceGroupName?: string; 
  public get baseDomainResourceGroupName() {
    return this.getStringAttribute('base_domain_resource_group_name');
  }
  public set baseDomainResourceGroupName(value: string) {
    this._baseDomainResourceGroupName = value;
  }
  public resetBaseDomainResourceGroupName() {
    this._baseDomainResourceGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseDomainResourceGroupNameInput() {
    return this._baseDomainResourceGroupName;
  }

  // cloud_name - computed: false, optional: true, required: false
  private _cloudName?: string; 
  public get cloudName() {
    return this.getStringAttribute('cloud_name');
  }
  public set cloudName(value: string) {
    this._cloudName = value;
  }
  public resetCloudName() {
    this._cloudName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudNameInput() {
    return this._cloudName;
  }

  // credentials_secret_ref - computed: false, optional: false, required: true
  private _credentialsSecretRef = new DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAzureCredentialsSecretRefOutputReference(this, "credentials_secret_ref");
  public get credentialsSecretRef() {
    return this._credentialsSecretRef;
  }
  public putCredentialsSecretRef(value: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAzureCredentialsSecretRef) {
    this._credentialsSecretRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsSecretRefInput() {
    return this._credentialsSecretRef.internalValue;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}
export interface DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformBaremetalLibvirtSshPrivateKeySecretRef {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#name DataK8SHiveOpenshiftIoClusterPoolV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformBaremetalLibvirtSshPrivateKeySecretRefToTerraform(struct?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformBaremetalLibvirtSshPrivateKeySecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformBaremetalLibvirtSshPrivateKeySecretRefToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformBaremetalLibvirtSshPrivateKeySecretRef | cdktf.IResolvable): any {
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

export class DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformBaremetalLibvirtSshPrivateKeySecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformBaremetalLibvirtSshPrivateKeySecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformBaremetalLibvirtSshPrivateKeySecretRef | cdktf.IResolvable | undefined) {
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

  // name - computed: false, optional: true, required: false
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
}
export interface DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformBaremetal {
  /**
  * LibvirtSSHPrivateKeySecretRef is the reference to the secret that contains the private SSH key to use for access to the libvirt provisioning host. The SSH private key is expected to be in the secret data under the 'ssh-privatekey' key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#libvirt_ssh_private_key_secret_ref DataK8SHiveOpenshiftIoClusterPoolV1Manifest#libvirt_ssh_private_key_secret_ref}
  */
  readonly libvirtSshPrivateKeySecretRef: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformBaremetalLibvirtSshPrivateKeySecretRef;
}

export function dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformBaremetalToTerraform(struct?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformBaremetal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    libvirt_ssh_private_key_secret_ref: dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformBaremetalLibvirtSshPrivateKeySecretRefToTerraform(struct!.libvirtSshPrivateKeySecretRef),
  }
}


export function dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformBaremetalToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformBaremetal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    libvirt_ssh_private_key_secret_ref: {
      value: dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformBaremetalLibvirtSshPrivateKeySecretRefToHclTerraform(struct!.libvirtSshPrivateKeySecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformBaremetalLibvirtSshPrivateKeySecretRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformBaremetalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformBaremetal | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._libvirtSshPrivateKeySecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.libvirtSshPrivateKeySecretRef = this._libvirtSshPrivateKeySecretRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformBaremetal | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._libvirtSshPrivateKeySecretRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._libvirtSshPrivateKeySecretRef.internalValue = value.libvirtSshPrivateKeySecretRef;
    }
  }

  // libvirt_ssh_private_key_secret_ref - computed: false, optional: false, required: true
  private _libvirtSshPrivateKeySecretRef = new DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformBaremetalLibvirtSshPrivateKeySecretRefOutputReference(this, "libvirt_ssh_private_key_secret_ref");
  public get libvirtSshPrivateKeySecretRef() {
    return this._libvirtSshPrivateKeySecretRef;
  }
  public putLibvirtSshPrivateKeySecretRef(value: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformBaremetalLibvirtSshPrivateKeySecretRef) {
    this._libvirtSshPrivateKeySecretRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get libvirtSshPrivateKeySecretRefInput() {
    return this._libvirtSshPrivateKeySecretRef.internalValue;
  }
}
export interface DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformGcpCredentialsSecretRef {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#name DataK8SHiveOpenshiftIoClusterPoolV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformGcpCredentialsSecretRefToTerraform(struct?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformGcpCredentialsSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformGcpCredentialsSecretRefToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformGcpCredentialsSecretRef | cdktf.IResolvable): any {
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

export class DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformGcpCredentialsSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformGcpCredentialsSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformGcpCredentialsSecretRef | cdktf.IResolvable | undefined) {
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

  // name - computed: false, optional: true, required: false
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
}
export interface DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformGcpPrivateServiceConnectServiceAttachmentSubnetExisting {
  /**
  * Name specifies the name of the existing subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#name DataK8SHiveOpenshiftIoClusterPoolV1Manifest#name}
  */
  readonly name: string;
  /**
  * Project specifies the project the subnet exists in. This is required for Shared VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#project DataK8SHiveOpenshiftIoClusterPoolV1Manifest#project}
  */
  readonly project?: string;
}

export function dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformGcpPrivateServiceConnectServiceAttachmentSubnetExistingToTerraform(struct?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformGcpPrivateServiceConnectServiceAttachmentSubnetExisting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    project: cdktf.stringToTerraform(struct!.project),
  }
}


export function dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformGcpPrivateServiceConnectServiceAttachmentSubnetExistingToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformGcpPrivateServiceConnectServiceAttachmentSubnetExisting | cdktf.IResolvable): any {
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
    project: {
      value: cdktf.stringToHclTerraform(struct!.project),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformGcpPrivateServiceConnectServiceAttachmentSubnetExistingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformGcpPrivateServiceConnectServiceAttachmentSubnetExisting | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._project !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformGcpPrivateServiceConnectServiceAttachmentSubnetExisting | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._project = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._project = value.project;
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

  // project - computed: false, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }
}
export interface DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformGcpPrivateServiceConnectServiceAttachmentSubnet {
  /**
  * Cidr specifies the cidr to use when creating a service attachment subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#cidr DataK8SHiveOpenshiftIoClusterPoolV1Manifest#cidr}
  */
  readonly cidr?: string;
  /**
  * Existing specifies a pre-existing subnet to use instead of creating a new service attachment subnet. This is required when using BYO VPCs. It must be in the same region as the api-int load balancer, be configured with a purpose of 'Private Service Connect', and have sufficient routing and firewall rules to access the api-int load balancer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#existing DataK8SHiveOpenshiftIoClusterPoolV1Manifest#existing}
  */
  readonly existing?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformGcpPrivateServiceConnectServiceAttachmentSubnetExisting;
}

export function dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformGcpPrivateServiceConnectServiceAttachmentSubnetToTerraform(struct?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformGcpPrivateServiceConnectServiceAttachmentSubnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr: cdktf.stringToTerraform(struct!.cidr),
    existing: dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformGcpPrivateServiceConnectServiceAttachmentSubnetExistingToTerraform(struct!.existing),
  }
}


export function dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformGcpPrivateServiceConnectServiceAttachmentSubnetToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformGcpPrivateServiceConnectServiceAttachmentSubnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr: {
      value: cdktf.stringToHclTerraform(struct!.cidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    existing: {
      value: dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformGcpPrivateServiceConnectServiceAttachmentSubnetExistingToHclTerraform(struct!.existing),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformGcpPrivateServiceConnectServiceAttachmentSubnetExisting",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformGcpPrivateServiceConnectServiceAttachmentSubnetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformGcpPrivateServiceConnectServiceAttachmentSubnet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidr = this._cidr;
    }
    if (this._existing?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.existing = this._existing?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformGcpPrivateServiceConnectServiceAttachmentSubnet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidr = undefined;
      this._existing.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidr = value.cidr;
      this._existing.internalValue = value.existing;
    }
  }

  // cidr - computed: false, optional: true, required: false
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  public resetCidr() {
    this._cidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }

  // existing - computed: false, optional: true, required: false
  private _existing = new DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformGcpPrivateServiceConnectServiceAttachmentSubnetExistingOutputReference(this, "existing");
  public get existing() {
    return this._existing;
  }
  public putExisting(value: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformGcpPrivateServiceConnectServiceAttachmentSubnetExisting) {
    this._existing.internalValue = value;
  }
  public resetExisting() {
    this._existing.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get existingInput() {
    return this._existing.internalValue;
  }
}
export interface DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformGcpPrivateServiceConnectServiceAttachment {
  /**
  * Subnet configures the subnetwork that contains the service attachment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#subnet DataK8SHiveOpenshiftIoClusterPoolV1Manifest#subnet}
  */
  readonly subnet?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformGcpPrivateServiceConnectServiceAttachmentSubnet;
}

export function dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformGcpPrivateServiceConnectServiceAttachmentToTerraform(struct?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformGcpPrivateServiceConnectServiceAttachment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subnet: dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformGcpPrivateServiceConnectServiceAttachmentSubnetToTerraform(struct!.subnet),
  }
}


export function dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformGcpPrivateServiceConnectServiceAttachmentToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformGcpPrivateServiceConnectServiceAttachment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    subnet: {
      value: dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformGcpPrivateServiceConnectServiceAttachmentSubnetToHclTerraform(struct!.subnet),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformGcpPrivateServiceConnectServiceAttachmentSubnet",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformGcpPrivateServiceConnectServiceAttachmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformGcpPrivateServiceConnectServiceAttachment | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subnet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnet = this._subnet?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformGcpPrivateServiceConnectServiceAttachment | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._subnet.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._subnet.internalValue = value.subnet;
    }
  }

  // subnet - computed: false, optional: true, required: false
  private _subnet = new DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformGcpPrivateServiceConnectServiceAttachmentSubnetOutputReference(this, "subnet");
  public get subnet() {
    return this._subnet;
  }
  public putSubnet(value: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformGcpPrivateServiceConnectServiceAttachmentSubnet) {
    this._subnet.internalValue = value;
  }
  public resetSubnet() {
    this._subnet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet.internalValue;
  }
}
export interface DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformGcpPrivateServiceConnect {
  /**
  * Enabled specifies if Private Service Connect is to be enabled on the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#enabled DataK8SHiveOpenshiftIoClusterPoolV1Manifest#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * ServiceAttachment configures the service attachment to be used by the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#service_attachment DataK8SHiveOpenshiftIoClusterPoolV1Manifest#service_attachment}
  */
  readonly serviceAttachment?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformGcpPrivateServiceConnectServiceAttachment;
}

export function dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformGcpPrivateServiceConnectToTerraform(struct?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformGcpPrivateServiceConnect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    service_attachment: dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformGcpPrivateServiceConnectServiceAttachmentToTerraform(struct!.serviceAttachment),
  }
}


export function dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformGcpPrivateServiceConnectToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformGcpPrivateServiceConnect | cdktf.IResolvable): any {
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
    service_attachment: {
      value: dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformGcpPrivateServiceConnectServiceAttachmentToHclTerraform(struct!.serviceAttachment),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformGcpPrivateServiceConnectServiceAttachment",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformGcpPrivateServiceConnectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformGcpPrivateServiceConnect | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._serviceAttachment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAttachment = this._serviceAttachment?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformGcpPrivateServiceConnect | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._serviceAttachment.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._serviceAttachment.internalValue = value.serviceAttachment;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // service_attachment - computed: false, optional: true, required: false
  private _serviceAttachment = new DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformGcpPrivateServiceConnectServiceAttachmentOutputReference(this, "service_attachment");
  public get serviceAttachment() {
    return this._serviceAttachment;
  }
  public putServiceAttachment(value: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformGcpPrivateServiceConnectServiceAttachment) {
    this._serviceAttachment.internalValue = value;
  }
  public resetServiceAttachment() {
    this._serviceAttachment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAttachmentInput() {
    return this._serviceAttachment.internalValue;
  }
}
export interface DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformGcp {
  /**
  * CredentialsSecretRef refers to a secret that contains the GCP account access credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#credentials_secret_ref DataK8SHiveOpenshiftIoClusterPoolV1Manifest#credentials_secret_ref}
  */
  readonly credentialsSecretRef?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformGcpCredentialsSecretRef;
  /**
  * PrivateSericeConnect allows users to enable access to the cluster's API server using GCP Private Service Connect. It includes a forwarding rule paired with a Service Attachment across GCP accounts and allows clients to connect to services using GCP internal networking of using public load balancers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#private_service_connect DataK8SHiveOpenshiftIoClusterPoolV1Manifest#private_service_connect}
  */
  readonly privateServiceConnect?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformGcpPrivateServiceConnect;
  /**
  * Region specifies the GCP region where the cluster will be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#region DataK8SHiveOpenshiftIoClusterPoolV1Manifest#region}
  */
  readonly region: string;
}

export function dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformGcpToTerraform(struct?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformGcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credentials_secret_ref: dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformGcpCredentialsSecretRefToTerraform(struct!.credentialsSecretRef),
    private_service_connect: dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformGcpPrivateServiceConnectToTerraform(struct!.privateServiceConnect),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformGcpToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformGcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    credentials_secret_ref: {
      value: dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformGcpCredentialsSecretRefToHclTerraform(struct!.credentialsSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformGcpCredentialsSecretRef",
    },
    private_service_connect: {
      value: dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformGcpPrivateServiceConnectToHclTerraform(struct!.privateServiceConnect),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformGcpPrivateServiceConnect",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformGcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformGcp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credentialsSecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialsSecretRef = this._credentialsSecretRef?.internalValue;
    }
    if (this._privateServiceConnect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateServiceConnect = this._privateServiceConnect?.internalValue;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformGcp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._credentialsSecretRef.internalValue = undefined;
      this._privateServiceConnect.internalValue = undefined;
      this._region = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._credentialsSecretRef.internalValue = value.credentialsSecretRef;
      this._privateServiceConnect.internalValue = value.privateServiceConnect;
      this._region = value.region;
    }
  }

  // credentials_secret_ref - computed: false, optional: true, required: false
  private _credentialsSecretRef = new DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformGcpCredentialsSecretRefOutputReference(this, "credentials_secret_ref");
  public get credentialsSecretRef() {
    return this._credentialsSecretRef;
  }
  public putCredentialsSecretRef(value: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformGcpCredentialsSecretRef) {
    this._credentialsSecretRef.internalValue = value;
  }
  public resetCredentialsSecretRef() {
    this._credentialsSecretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsSecretRefInput() {
    return this._credentialsSecretRef.internalValue;
  }

  // private_service_connect - computed: false, optional: true, required: false
  private _privateServiceConnect = new DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformGcpPrivateServiceConnectOutputReference(this, "private_service_connect");
  public get privateServiceConnect() {
    return this._privateServiceConnect;
  }
  public putPrivateServiceConnect(value: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformGcpPrivateServiceConnect) {
    this._privateServiceConnect.internalValue = value;
  }
  public resetPrivateServiceConnect() {
    this._privateServiceConnect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateServiceConnectInput() {
    return this._privateServiceConnect.internalValue;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}
export interface DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformIbmcloudCredentialsSecretRef {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#name DataK8SHiveOpenshiftIoClusterPoolV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformIbmcloudCredentialsSecretRefToTerraform(struct?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformIbmcloudCredentialsSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformIbmcloudCredentialsSecretRefToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformIbmcloudCredentialsSecretRef | cdktf.IResolvable): any {
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

export class DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformIbmcloudCredentialsSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformIbmcloudCredentialsSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformIbmcloudCredentialsSecretRef | cdktf.IResolvable | undefined) {
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

  // name - computed: false, optional: true, required: false
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
}
export interface DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformIbmcloud {
  /**
  * AccountID is the IBM Cloud Account ID. AccountID is DEPRECATED and is gathered via the IBM Cloud API for the provided credentials. This field will be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#account_id DataK8SHiveOpenshiftIoClusterPoolV1Manifest#account_id}
  */
  readonly accountId?: string;
  /**
  * CISInstanceCRN is the IBM Cloud Internet Services Instance CRN CISInstanceCRN is DEPRECATED and gathered via the IBM Cloud API for the provided credentials and cluster deployment base domain. This field will be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#cis_instance_crn DataK8SHiveOpenshiftIoClusterPoolV1Manifest#cis_instance_crn}
  */
  readonly cisInstanceCrn?: string;
  /**
  * CredentialsSecretRef refers to a secret that contains IBM Cloud account access credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#credentials_secret_ref DataK8SHiveOpenshiftIoClusterPoolV1Manifest#credentials_secret_ref}
  */
  readonly credentialsSecretRef: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformIbmcloudCredentialsSecretRef;
  /**
  * Region specifies the IBM Cloud region where the cluster will be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#region DataK8SHiveOpenshiftIoClusterPoolV1Manifest#region}
  */
  readonly region: string;
}

export function dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformIbmcloudToTerraform(struct?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformIbmcloud | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_id: cdktf.stringToTerraform(struct!.accountId),
    cis_instance_crn: cdktf.stringToTerraform(struct!.cisInstanceCrn),
    credentials_secret_ref: dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformIbmcloudCredentialsSecretRefToTerraform(struct!.credentialsSecretRef),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformIbmcloudToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformIbmcloud | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_id: {
      value: cdktf.stringToHclTerraform(struct!.accountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cis_instance_crn: {
      value: cdktf.stringToHclTerraform(struct!.cisInstanceCrn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credentials_secret_ref: {
      value: dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformIbmcloudCredentialsSecretRefToHclTerraform(struct!.credentialsSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformIbmcloudCredentialsSecretRef",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformIbmcloudOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformIbmcloud | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountId = this._accountId;
    }
    if (this._cisInstanceCrn !== undefined) {
      hasAnyValues = true;
      internalValueResult.cisInstanceCrn = this._cisInstanceCrn;
    }
    if (this._credentialsSecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialsSecretRef = this._credentialsSecretRef?.internalValue;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformIbmcloud | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountId = undefined;
      this._cisInstanceCrn = undefined;
      this._credentialsSecretRef.internalValue = undefined;
      this._region = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountId = value.accountId;
      this._cisInstanceCrn = value.cisInstanceCrn;
      this._credentialsSecretRef.internalValue = value.credentialsSecretRef;
      this._region = value.region;
    }
  }

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

  // cis_instance_crn - computed: false, optional: true, required: false
  private _cisInstanceCrn?: string; 
  public get cisInstanceCrn() {
    return this.getStringAttribute('cis_instance_crn');
  }
  public set cisInstanceCrn(value: string) {
    this._cisInstanceCrn = value;
  }
  public resetCisInstanceCrn() {
    this._cisInstanceCrn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cisInstanceCrnInput() {
    return this._cisInstanceCrn;
  }

  // credentials_secret_ref - computed: false, optional: false, required: true
  private _credentialsSecretRef = new DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformIbmcloudCredentialsSecretRefOutputReference(this, "credentials_secret_ref");
  public get credentialsSecretRef() {
    return this._credentialsSecretRef;
  }
  public putCredentialsSecretRef(value: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformIbmcloudCredentialsSecretRef) {
    this._credentialsSecretRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsSecretRefInput() {
    return this._credentialsSecretRef.internalValue;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}
export interface DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformOpenstackCertificatesSecretRef {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#name DataK8SHiveOpenshiftIoClusterPoolV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformOpenstackCertificatesSecretRefToTerraform(struct?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformOpenstackCertificatesSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformOpenstackCertificatesSecretRefToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformOpenstackCertificatesSecretRef | cdktf.IResolvable): any {
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

export class DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformOpenstackCertificatesSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformOpenstackCertificatesSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformOpenstackCertificatesSecretRef | cdktf.IResolvable | undefined) {
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

  // name - computed: false, optional: true, required: false
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
}
export interface DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformOpenstackCredentialsSecretRef {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#name DataK8SHiveOpenshiftIoClusterPoolV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformOpenstackCredentialsSecretRefToTerraform(struct?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformOpenstackCredentialsSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformOpenstackCredentialsSecretRefToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformOpenstackCredentialsSecretRef | cdktf.IResolvable): any {
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

export class DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformOpenstackCredentialsSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformOpenstackCredentialsSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformOpenstackCredentialsSecretRef | cdktf.IResolvable | undefined) {
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

  // name - computed: false, optional: true, required: false
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
}
export interface DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformOpenstack {
  /**
  * CertificatesSecretRef refers to a secret that contains CA certificates necessary for communicating with the OpenStack. There is additional configuration required for the OpenShift cluster to trust the certificates provided in this secret. The 'clouds.yaml' file included in the credentialsSecretRef Secret must also include a reference to the certificate bundle file for the OpenShift cluster being created to trust the OpenStack endpoints. The 'clouds.yaml' file must set the 'cacert' field to either '/etc/openstack-ca/<key name containing the trust bundle in credentialsSecretRef Secret>' or '/etc/pki/ca-trust/extracted/pem/tls-ca-bundle.pem'. For example, ```clouds.yaml clouds: shiftstack: auth: ... cacert: '/etc/pki/ca-trust/extracted/pem/tls-ca-bundle.pem' ```
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#certificates_secret_ref DataK8SHiveOpenshiftIoClusterPoolV1Manifest#certificates_secret_ref}
  */
  readonly certificatesSecretRef?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformOpenstackCertificatesSecretRef;
  /**
  * Cloud will be used to indicate the OS_CLOUD value to use the right section from the clouds.yaml in the CredentialsSecretRef.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#cloud DataK8SHiveOpenshiftIoClusterPoolV1Manifest#cloud}
  */
  readonly cloud: string;
  /**
  * CredentialsSecretRef refers to a secret that contains the OpenStack account access credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#credentials_secret_ref DataK8SHiveOpenshiftIoClusterPoolV1Manifest#credentials_secret_ref}
  */
  readonly credentialsSecretRef: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformOpenstackCredentialsSecretRef;
  /**
  * TrunkSupport indicates whether or not to use trunk ports in your OpenShift cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#trunk_support DataK8SHiveOpenshiftIoClusterPoolV1Manifest#trunk_support}
  */
  readonly trunkSupport?: boolean | cdktf.IResolvable;
}

export function dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformOpenstackToTerraform(struct?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformOpenstack | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificates_secret_ref: dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformOpenstackCertificatesSecretRefToTerraform(struct!.certificatesSecretRef),
    cloud: cdktf.stringToTerraform(struct!.cloud),
    credentials_secret_ref: dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformOpenstackCredentialsSecretRefToTerraform(struct!.credentialsSecretRef),
    trunk_support: cdktf.booleanToTerraform(struct!.trunkSupport),
  }
}


export function dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformOpenstackToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformOpenstack | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificates_secret_ref: {
      value: dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformOpenstackCertificatesSecretRefToHclTerraform(struct!.certificatesSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformOpenstackCertificatesSecretRef",
    },
    cloud: {
      value: cdktf.stringToHclTerraform(struct!.cloud),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credentials_secret_ref: {
      value: dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformOpenstackCredentialsSecretRefToHclTerraform(struct!.credentialsSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformOpenstackCredentialsSecretRef",
    },
    trunk_support: {
      value: cdktf.booleanToHclTerraform(struct!.trunkSupport),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformOpenstackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformOpenstack | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificatesSecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificatesSecretRef = this._certificatesSecretRef?.internalValue;
    }
    if (this._cloud !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloud = this._cloud;
    }
    if (this._credentialsSecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialsSecretRef = this._credentialsSecretRef?.internalValue;
    }
    if (this._trunkSupport !== undefined) {
      hasAnyValues = true;
      internalValueResult.trunkSupport = this._trunkSupport;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformOpenstack | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificatesSecretRef.internalValue = undefined;
      this._cloud = undefined;
      this._credentialsSecretRef.internalValue = undefined;
      this._trunkSupport = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificatesSecretRef.internalValue = value.certificatesSecretRef;
      this._cloud = value.cloud;
      this._credentialsSecretRef.internalValue = value.credentialsSecretRef;
      this._trunkSupport = value.trunkSupport;
    }
  }

  // certificates_secret_ref - computed: false, optional: true, required: false
  private _certificatesSecretRef = new DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformOpenstackCertificatesSecretRefOutputReference(this, "certificates_secret_ref");
  public get certificatesSecretRef() {
    return this._certificatesSecretRef;
  }
  public putCertificatesSecretRef(value: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformOpenstackCertificatesSecretRef) {
    this._certificatesSecretRef.internalValue = value;
  }
  public resetCertificatesSecretRef() {
    this._certificatesSecretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificatesSecretRefInput() {
    return this._certificatesSecretRef.internalValue;
  }

  // cloud - computed: false, optional: false, required: true
  private _cloud?: string; 
  public get cloud() {
    return this.getStringAttribute('cloud');
  }
  public set cloud(value: string) {
    this._cloud = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudInput() {
    return this._cloud;
  }

  // credentials_secret_ref - computed: false, optional: false, required: true
  private _credentialsSecretRef = new DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformOpenstackCredentialsSecretRefOutputReference(this, "credentials_secret_ref");
  public get credentialsSecretRef() {
    return this._credentialsSecretRef;
  }
  public putCredentialsSecretRef(value: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformOpenstackCredentialsSecretRef) {
    this._credentialsSecretRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsSecretRefInput() {
    return this._credentialsSecretRef.internalValue;
  }

  // trunk_support - computed: false, optional: true, required: false
  private _trunkSupport?: boolean | cdktf.IResolvable; 
  public get trunkSupport() {
    return this.getBooleanAttribute('trunk_support');
  }
  public set trunkSupport(value: boolean | cdktf.IResolvable) {
    this._trunkSupport = value;
  }
  public resetTrunkSupport() {
    this._trunkSupport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkSupportInput() {
    return this._trunkSupport;
  }
}
export interface DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformOvirtCertificatesSecretRef {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#name DataK8SHiveOpenshiftIoClusterPoolV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformOvirtCertificatesSecretRefToTerraform(struct?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformOvirtCertificatesSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformOvirtCertificatesSecretRefToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformOvirtCertificatesSecretRef | cdktf.IResolvable): any {
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

export class DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformOvirtCertificatesSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformOvirtCertificatesSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformOvirtCertificatesSecretRef | cdktf.IResolvable | undefined) {
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

  // name - computed: false, optional: true, required: false
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
}
export interface DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformOvirtCredentialsSecretRef {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#name DataK8SHiveOpenshiftIoClusterPoolV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformOvirtCredentialsSecretRefToTerraform(struct?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformOvirtCredentialsSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformOvirtCredentialsSecretRefToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformOvirtCredentialsSecretRef | cdktf.IResolvable): any {
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

export class DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformOvirtCredentialsSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformOvirtCredentialsSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformOvirtCredentialsSecretRef | cdktf.IResolvable | undefined) {
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

  // name - computed: false, optional: true, required: false
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
}
export interface DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformOvirt {
  /**
  * CertificatesSecretRef refers to a secret that contains the oVirt CA certificates necessary for communicating with oVirt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#certificates_secret_ref DataK8SHiveOpenshiftIoClusterPoolV1Manifest#certificates_secret_ref}
  */
  readonly certificatesSecretRef: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformOvirtCertificatesSecretRef;
  /**
  * CredentialsSecretRef refers to a secret that contains the oVirt account access credentials with fields: ovirt_url, ovirt_username, ovirt_password, ovirt_ca_bundle
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#credentials_secret_ref DataK8SHiveOpenshiftIoClusterPoolV1Manifest#credentials_secret_ref}
  */
  readonly credentialsSecretRef: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformOvirtCredentialsSecretRef;
  /**
  * The target cluster under which all VMs will run
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#ovirt_cluster_id DataK8SHiveOpenshiftIoClusterPoolV1Manifest#ovirt_cluster_id}
  */
  readonly ovirtClusterId: string;
  /**
  * The target network of all the network interfaces of the nodes. Omitting defaults to ovirtmgmt network which is a default network for evert ovirt cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#ovirt_network_name DataK8SHiveOpenshiftIoClusterPoolV1Manifest#ovirt_network_name}
  */
  readonly ovirtNetworkName?: string;
  /**
  * The target storage domain under which all VM disk would be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#storage_domain_id DataK8SHiveOpenshiftIoClusterPoolV1Manifest#storage_domain_id}
  */
  readonly storageDomainId: string;
}

export function dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformOvirtToTerraform(struct?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformOvirt | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificates_secret_ref: dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformOvirtCertificatesSecretRefToTerraform(struct!.certificatesSecretRef),
    credentials_secret_ref: dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformOvirtCredentialsSecretRefToTerraform(struct!.credentialsSecretRef),
    ovirt_cluster_id: cdktf.stringToTerraform(struct!.ovirtClusterId),
    ovirt_network_name: cdktf.stringToTerraform(struct!.ovirtNetworkName),
    storage_domain_id: cdktf.stringToTerraform(struct!.storageDomainId),
  }
}


export function dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformOvirtToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformOvirt | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificates_secret_ref: {
      value: dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformOvirtCertificatesSecretRefToHclTerraform(struct!.certificatesSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformOvirtCertificatesSecretRef",
    },
    credentials_secret_ref: {
      value: dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformOvirtCredentialsSecretRefToHclTerraform(struct!.credentialsSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformOvirtCredentialsSecretRef",
    },
    ovirt_cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.ovirtClusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ovirt_network_name: {
      value: cdktf.stringToHclTerraform(struct!.ovirtNetworkName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_domain_id: {
      value: cdktf.stringToHclTerraform(struct!.storageDomainId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformOvirtOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformOvirt | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificatesSecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificatesSecretRef = this._certificatesSecretRef?.internalValue;
    }
    if (this._credentialsSecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialsSecretRef = this._credentialsSecretRef?.internalValue;
    }
    if (this._ovirtClusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ovirtClusterId = this._ovirtClusterId;
    }
    if (this._ovirtNetworkName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ovirtNetworkName = this._ovirtNetworkName;
    }
    if (this._storageDomainId !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageDomainId = this._storageDomainId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformOvirt | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificatesSecretRef.internalValue = undefined;
      this._credentialsSecretRef.internalValue = undefined;
      this._ovirtClusterId = undefined;
      this._ovirtNetworkName = undefined;
      this._storageDomainId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificatesSecretRef.internalValue = value.certificatesSecretRef;
      this._credentialsSecretRef.internalValue = value.credentialsSecretRef;
      this._ovirtClusterId = value.ovirtClusterId;
      this._ovirtNetworkName = value.ovirtNetworkName;
      this._storageDomainId = value.storageDomainId;
    }
  }

  // certificates_secret_ref - computed: false, optional: false, required: true
  private _certificatesSecretRef = new DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformOvirtCertificatesSecretRefOutputReference(this, "certificates_secret_ref");
  public get certificatesSecretRef() {
    return this._certificatesSecretRef;
  }
  public putCertificatesSecretRef(value: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformOvirtCertificatesSecretRef) {
    this._certificatesSecretRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificatesSecretRefInput() {
    return this._certificatesSecretRef.internalValue;
  }

  // credentials_secret_ref - computed: false, optional: false, required: true
  private _credentialsSecretRef = new DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformOvirtCredentialsSecretRefOutputReference(this, "credentials_secret_ref");
  public get credentialsSecretRef() {
    return this._credentialsSecretRef;
  }
  public putCredentialsSecretRef(value: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformOvirtCredentialsSecretRef) {
    this._credentialsSecretRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsSecretRefInput() {
    return this._credentialsSecretRef.internalValue;
  }

  // ovirt_cluster_id - computed: false, optional: false, required: true
  private _ovirtClusterId?: string; 
  public get ovirtClusterId() {
    return this.getStringAttribute('ovirt_cluster_id');
  }
  public set ovirtClusterId(value: string) {
    this._ovirtClusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ovirtClusterIdInput() {
    return this._ovirtClusterId;
  }

  // ovirt_network_name - computed: false, optional: true, required: false
  private _ovirtNetworkName?: string; 
  public get ovirtNetworkName() {
    return this.getStringAttribute('ovirt_network_name');
  }
  public set ovirtNetworkName(value: string) {
    this._ovirtNetworkName = value;
  }
  public resetOvirtNetworkName() {
    this._ovirtNetworkName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ovirtNetworkNameInput() {
    return this._ovirtNetworkName;
  }

  // storage_domain_id - computed: false, optional: false, required: true
  private _storageDomainId?: string; 
  public get storageDomainId() {
    return this.getStringAttribute('storage_domain_id');
  }
  public set storageDomainId(value: string) {
    this._storageDomainId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageDomainIdInput() {
    return this._storageDomainId;
  }
}
export interface DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformVsphereCertificatesSecretRef {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#name DataK8SHiveOpenshiftIoClusterPoolV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformVsphereCertificatesSecretRefToTerraform(struct?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformVsphereCertificatesSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformVsphereCertificatesSecretRefToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformVsphereCertificatesSecretRef | cdktf.IResolvable): any {
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

export class DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformVsphereCertificatesSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformVsphereCertificatesSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformVsphereCertificatesSecretRef | cdktf.IResolvable | undefined) {
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

  // name - computed: false, optional: true, required: false
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
}
export interface DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformVsphereCredentialsSecretRef {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#name DataK8SHiveOpenshiftIoClusterPoolV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformVsphereCredentialsSecretRefToTerraform(struct?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformVsphereCredentialsSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformVsphereCredentialsSecretRefToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformVsphereCredentialsSecretRef | cdktf.IResolvable): any {
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

export class DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformVsphereCredentialsSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformVsphereCredentialsSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformVsphereCredentialsSecretRef | cdktf.IResolvable | undefined) {
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

  // name - computed: false, optional: true, required: false
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
}
export interface DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformVsphere {
  /**
  * CertificatesSecretRef refers to a secret that contains the vSphere CA certificates necessary for communicating with the VCenter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#certificates_secret_ref DataK8SHiveOpenshiftIoClusterPoolV1Manifest#certificates_secret_ref}
  */
  readonly certificatesSecretRef: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformVsphereCertificatesSecretRef;
  /**
  * Cluster is the name of the cluster virtual machines will be cloned into.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#cluster DataK8SHiveOpenshiftIoClusterPoolV1Manifest#cluster}
  */
  readonly cluster?: string;
  /**
  * CredentialsSecretRef refers to a secret that contains the vSphere account access credentials: GOVC_USERNAME, GOVC_PASSWORD fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#credentials_secret_ref DataK8SHiveOpenshiftIoClusterPoolV1Manifest#credentials_secret_ref}
  */
  readonly credentialsSecretRef: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformVsphereCredentialsSecretRef;
  /**
  * Datacenter is the name of the datacenter to use in the vCenter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#datacenter DataK8SHiveOpenshiftIoClusterPoolV1Manifest#datacenter}
  */
  readonly datacenter: string;
  /**
  * DefaultDatastore is the default datastore to use for provisioning volumes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#default_datastore DataK8SHiveOpenshiftIoClusterPoolV1Manifest#default_datastore}
  */
  readonly defaultDatastore: string;
  /**
  * Folder is the name of the folder that will be used and/or created for virtual machines.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#folder DataK8SHiveOpenshiftIoClusterPoolV1Manifest#folder}
  */
  readonly folder?: string;
  /**
  * Network specifies the name of the network to be used by the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#network DataK8SHiveOpenshiftIoClusterPoolV1Manifest#network}
  */
  readonly network?: string;
  /**
  * VCenter is the domain name or IP address of the vCenter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#v_center DataK8SHiveOpenshiftIoClusterPoolV1Manifest#v_center}
  */
  readonly vCenter: string;
}

export function dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformVsphereToTerraform(struct?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformVsphere | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificates_secret_ref: dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformVsphereCertificatesSecretRefToTerraform(struct!.certificatesSecretRef),
    cluster: cdktf.stringToTerraform(struct!.cluster),
    credentials_secret_ref: dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformVsphereCredentialsSecretRefToTerraform(struct!.credentialsSecretRef),
    datacenter: cdktf.stringToTerraform(struct!.datacenter),
    default_datastore: cdktf.stringToTerraform(struct!.defaultDatastore),
    folder: cdktf.stringToTerraform(struct!.folder),
    network: cdktf.stringToTerraform(struct!.network),
    v_center: cdktf.stringToTerraform(struct!.vCenter),
  }
}


export function dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformVsphereToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformVsphere | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificates_secret_ref: {
      value: dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformVsphereCertificatesSecretRefToHclTerraform(struct!.certificatesSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformVsphereCertificatesSecretRef",
    },
    cluster: {
      value: cdktf.stringToHclTerraform(struct!.cluster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credentials_secret_ref: {
      value: dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformVsphereCredentialsSecretRefToHclTerraform(struct!.credentialsSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformVsphereCredentialsSecretRef",
    },
    datacenter: {
      value: cdktf.stringToHclTerraform(struct!.datacenter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_datastore: {
      value: cdktf.stringToHclTerraform(struct!.defaultDatastore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    folder: {
      value: cdktf.stringToHclTerraform(struct!.folder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    v_center: {
      value: cdktf.stringToHclTerraform(struct!.vCenter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformVsphereOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformVsphere | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificatesSecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificatesSecretRef = this._certificatesSecretRef?.internalValue;
    }
    if (this._cluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.cluster = this._cluster;
    }
    if (this._credentialsSecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialsSecretRef = this._credentialsSecretRef?.internalValue;
    }
    if (this._datacenter !== undefined) {
      hasAnyValues = true;
      internalValueResult.datacenter = this._datacenter;
    }
    if (this._defaultDatastore !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultDatastore = this._defaultDatastore;
    }
    if (this._folder !== undefined) {
      hasAnyValues = true;
      internalValueResult.folder = this._folder;
    }
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._vCenter !== undefined) {
      hasAnyValues = true;
      internalValueResult.vCenter = this._vCenter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformVsphere | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificatesSecretRef.internalValue = undefined;
      this._cluster = undefined;
      this._credentialsSecretRef.internalValue = undefined;
      this._datacenter = undefined;
      this._defaultDatastore = undefined;
      this._folder = undefined;
      this._network = undefined;
      this._vCenter = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificatesSecretRef.internalValue = value.certificatesSecretRef;
      this._cluster = value.cluster;
      this._credentialsSecretRef.internalValue = value.credentialsSecretRef;
      this._datacenter = value.datacenter;
      this._defaultDatastore = value.defaultDatastore;
      this._folder = value.folder;
      this._network = value.network;
      this._vCenter = value.vCenter;
    }
  }

  // certificates_secret_ref - computed: false, optional: false, required: true
  private _certificatesSecretRef = new DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformVsphereCertificatesSecretRefOutputReference(this, "certificates_secret_ref");
  public get certificatesSecretRef() {
    return this._certificatesSecretRef;
  }
  public putCertificatesSecretRef(value: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformVsphereCertificatesSecretRef) {
    this._certificatesSecretRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificatesSecretRefInput() {
    return this._certificatesSecretRef.internalValue;
  }

  // cluster - computed: false, optional: true, required: false
  private _cluster?: string; 
  public get cluster() {
    return this.getStringAttribute('cluster');
  }
  public set cluster(value: string) {
    this._cluster = value;
  }
  public resetCluster() {
    this._cluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster;
  }

  // credentials_secret_ref - computed: false, optional: false, required: true
  private _credentialsSecretRef = new DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformVsphereCredentialsSecretRefOutputReference(this, "credentials_secret_ref");
  public get credentialsSecretRef() {
    return this._credentialsSecretRef;
  }
  public putCredentialsSecretRef(value: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformVsphereCredentialsSecretRef) {
    this._credentialsSecretRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsSecretRefInput() {
    return this._credentialsSecretRef.internalValue;
  }

  // datacenter - computed: false, optional: false, required: true
  private _datacenter?: string; 
  public get datacenter() {
    return this.getStringAttribute('datacenter');
  }
  public set datacenter(value: string) {
    this._datacenter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datacenterInput() {
    return this._datacenter;
  }

  // default_datastore - computed: false, optional: false, required: true
  private _defaultDatastore?: string; 
  public get defaultDatastore() {
    return this.getStringAttribute('default_datastore');
  }
  public set defaultDatastore(value: string) {
    this._defaultDatastore = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultDatastoreInput() {
    return this._defaultDatastore;
  }

  // folder - computed: false, optional: true, required: false
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  public resetFolder() {
    this._folder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
  }

  // network - computed: false, optional: true, required: false
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  public resetNetwork() {
    this._network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // v_center - computed: false, optional: false, required: true
  private _vCenter?: string; 
  public get vCenter() {
    return this.getStringAttribute('v_center');
  }
  public set vCenter(value: string) {
    this._vCenter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vCenterInput() {
    return this._vCenter;
  }
}
export interface DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatform {
  /**
  * AgentBareMetal is the configuration used when performing an Assisted Agent based installation to bare metal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#agent_bare_metal DataK8SHiveOpenshiftIoClusterPoolV1Manifest#agent_bare_metal}
  */
  readonly agentBareMetal?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAgentBareMetal;
  /**
  * AWS is the configuration used when installing on AWS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#aws DataK8SHiveOpenshiftIoClusterPoolV1Manifest#aws}
  */
  readonly aws?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAws;
  /**
  * Azure is the configuration used when installing on Azure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#azure DataK8SHiveOpenshiftIoClusterPoolV1Manifest#azure}
  */
  readonly azure?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAzure;
  /**
  * BareMetal is the configuration used when installing on bare metal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#baremetal DataK8SHiveOpenshiftIoClusterPoolV1Manifest#baremetal}
  */
  readonly baremetal?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformBaremetal;
  /**
  * GCP is the configuration used when installing on Google Cloud Platform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#gcp DataK8SHiveOpenshiftIoClusterPoolV1Manifest#gcp}
  */
  readonly gcp?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformGcp;
  /**
  * IBMCloud is the configuration used when installing on IBM Cloud
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#ibmcloud DataK8SHiveOpenshiftIoClusterPoolV1Manifest#ibmcloud}
  */
  readonly ibmcloud?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformIbmcloud;
  /**
  * None indicates platform-agnostic install. https://docs.openshift.com/container-platform/4.7/installing/installing_platform_agnostic/installing-platform-agnostic.html
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#none DataK8SHiveOpenshiftIoClusterPoolV1Manifest#none}
  */
  readonly none?: { [key: string]: string };
  /**
  * OpenStack is the configuration used when installing on OpenStack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#openstack DataK8SHiveOpenshiftIoClusterPoolV1Manifest#openstack}
  */
  readonly openstack?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformOpenstack;
  /**
  * Ovirt is the configuration used when installing on oVirt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#ovirt DataK8SHiveOpenshiftIoClusterPoolV1Manifest#ovirt}
  */
  readonly ovirt?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformOvirt;
  /**
  * VSphere is the configuration used when installing on vSphere
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#vsphere DataK8SHiveOpenshiftIoClusterPoolV1Manifest#vsphere}
  */
  readonly vsphere?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformVsphere;
}

export function dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformToTerraform(struct?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatform | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agent_bare_metal: dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAgentBareMetalToTerraform(struct!.agentBareMetal),
    aws: dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAwsToTerraform(struct!.aws),
    azure: dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAzureToTerraform(struct!.azure),
    baremetal: dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformBaremetalToTerraform(struct!.baremetal),
    gcp: dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformGcpToTerraform(struct!.gcp),
    ibmcloud: dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformIbmcloudToTerraform(struct!.ibmcloud),
    none: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.none),
    openstack: dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformOpenstackToTerraform(struct!.openstack),
    ovirt: dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformOvirtToTerraform(struct!.ovirt),
    vsphere: dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformVsphereToTerraform(struct!.vsphere),
  }
}


export function dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatform | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    agent_bare_metal: {
      value: dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAgentBareMetalToHclTerraform(struct!.agentBareMetal),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAgentBareMetal",
    },
    aws: {
      value: dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAwsToHclTerraform(struct!.aws),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAws",
    },
    azure: {
      value: dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAzureToHclTerraform(struct!.azure),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAzure",
    },
    baremetal: {
      value: dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformBaremetalToHclTerraform(struct!.baremetal),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformBaremetal",
    },
    gcp: {
      value: dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformGcpToHclTerraform(struct!.gcp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformGcp",
    },
    ibmcloud: {
      value: dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformIbmcloudToHclTerraform(struct!.ibmcloud),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformIbmcloud",
    },
    none: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.none),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    openstack: {
      value: dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformOpenstackToHclTerraform(struct!.openstack),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformOpenstack",
    },
    ovirt: {
      value: dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformOvirtToHclTerraform(struct!.ovirt),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformOvirt",
    },
    vsphere: {
      value: dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformVsphereToHclTerraform(struct!.vsphere),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformVsphere",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatform | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agentBareMetal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentBareMetal = this._agentBareMetal?.internalValue;
    }
    if (this._aws?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aws = this._aws?.internalValue;
    }
    if (this._azure?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azure = this._azure?.internalValue;
    }
    if (this._baremetal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.baremetal = this._baremetal?.internalValue;
    }
    if (this._gcp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcp = this._gcp?.internalValue;
    }
    if (this._ibmcloud?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ibmcloud = this._ibmcloud?.internalValue;
    }
    if (this._none !== undefined) {
      hasAnyValues = true;
      internalValueResult.none = this._none;
    }
    if (this._openstack?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.openstack = this._openstack?.internalValue;
    }
    if (this._ovirt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ovirt = this._ovirt?.internalValue;
    }
    if (this._vsphere?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsphere = this._vsphere?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatform | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._agentBareMetal.internalValue = undefined;
      this._aws.internalValue = undefined;
      this._azure.internalValue = undefined;
      this._baremetal.internalValue = undefined;
      this._gcp.internalValue = undefined;
      this._ibmcloud.internalValue = undefined;
      this._none = undefined;
      this._openstack.internalValue = undefined;
      this._ovirt.internalValue = undefined;
      this._vsphere.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._agentBareMetal.internalValue = value.agentBareMetal;
      this._aws.internalValue = value.aws;
      this._azure.internalValue = value.azure;
      this._baremetal.internalValue = value.baremetal;
      this._gcp.internalValue = value.gcp;
      this._ibmcloud.internalValue = value.ibmcloud;
      this._none = value.none;
      this._openstack.internalValue = value.openstack;
      this._ovirt.internalValue = value.ovirt;
      this._vsphere.internalValue = value.vsphere;
    }
  }

  // agent_bare_metal - computed: false, optional: true, required: false
  private _agentBareMetal = new DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAgentBareMetalOutputReference(this, "agent_bare_metal");
  public get agentBareMetal() {
    return this._agentBareMetal;
  }
  public putAgentBareMetal(value: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAgentBareMetal) {
    this._agentBareMetal.internalValue = value;
  }
  public resetAgentBareMetal() {
    this._agentBareMetal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentBareMetalInput() {
    return this._agentBareMetal.internalValue;
  }

  // aws - computed: false, optional: true, required: false
  private _aws = new DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAwsOutputReference(this, "aws");
  public get aws() {
    return this._aws;
  }
  public putAws(value: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAws) {
    this._aws.internalValue = value;
  }
  public resetAws() {
    this._aws.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsInput() {
    return this._aws.internalValue;
  }

  // azure - computed: false, optional: true, required: false
  private _azure = new DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAzureOutputReference(this, "azure");
  public get azure() {
    return this._azure;
  }
  public putAzure(value: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformAzure) {
    this._azure.internalValue = value;
  }
  public resetAzure() {
    this._azure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureInput() {
    return this._azure.internalValue;
  }

  // baremetal - computed: false, optional: true, required: false
  private _baremetal = new DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformBaremetalOutputReference(this, "baremetal");
  public get baremetal() {
    return this._baremetal;
  }
  public putBaremetal(value: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformBaremetal) {
    this._baremetal.internalValue = value;
  }
  public resetBaremetal() {
    this._baremetal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baremetalInput() {
    return this._baremetal.internalValue;
  }

  // gcp - computed: false, optional: true, required: false
  private _gcp = new DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformGcpOutputReference(this, "gcp");
  public get gcp() {
    return this._gcp;
  }
  public putGcp(value: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformGcp) {
    this._gcp.internalValue = value;
  }
  public resetGcp() {
    this._gcp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpInput() {
    return this._gcp.internalValue;
  }

  // ibmcloud - computed: false, optional: true, required: false
  private _ibmcloud = new DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformIbmcloudOutputReference(this, "ibmcloud");
  public get ibmcloud() {
    return this._ibmcloud;
  }
  public putIbmcloud(value: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformIbmcloud) {
    this._ibmcloud.internalValue = value;
  }
  public resetIbmcloud() {
    this._ibmcloud.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ibmcloudInput() {
    return this._ibmcloud.internalValue;
  }

  // none - computed: false, optional: true, required: false
  private _none?: { [key: string]: string }; 
  public get none() {
    return this.getStringMapAttribute('none');
  }
  public set none(value: { [key: string]: string }) {
    this._none = value;
  }
  public resetNone() {
    this._none = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noneInput() {
    return this._none;
  }

  // openstack - computed: false, optional: true, required: false
  private _openstack = new DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformOpenstackOutputReference(this, "openstack");
  public get openstack() {
    return this._openstack;
  }
  public putOpenstack(value: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformOpenstack) {
    this._openstack.internalValue = value;
  }
  public resetOpenstack() {
    this._openstack.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openstackInput() {
    return this._openstack.internalValue;
  }

  // ovirt - computed: false, optional: true, required: false
  private _ovirt = new DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformOvirtOutputReference(this, "ovirt");
  public get ovirt() {
    return this._ovirt;
  }
  public putOvirt(value: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformOvirt) {
    this._ovirt.internalValue = value;
  }
  public resetOvirt() {
    this._ovirt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ovirtInput() {
    return this._ovirt.internalValue;
  }

  // vsphere - computed: false, optional: true, required: false
  private _vsphere = new DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformVsphereOutputReference(this, "vsphere");
  public get vsphere() {
    return this._vsphere;
  }
  public putVsphere(value: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformVsphere) {
    this._vsphere.internalValue = value;
  }
  public resetVsphere() {
    this._vsphere.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsphereInput() {
    return this._vsphere.internalValue;
  }
}
export interface DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPullSecretRef {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#name DataK8SHiveOpenshiftIoClusterPoolV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPullSecretRefToTerraform(struct?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPullSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPullSecretRefToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPullSecretRef | cdktf.IResolvable): any {
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

export class DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPullSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPullSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPullSecretRef | cdktf.IResolvable | undefined) {
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

  // name - computed: false, optional: true, required: false
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
}
export interface DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpec {
  /**
  * Annotations to be applied to new ClusterDeployments created for the pool. ClusterDeployments that have already been claimed will not be affected when this value is modified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#annotations DataK8SHiveOpenshiftIoClusterPoolV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * BaseDomain is the base domain to use for all clusters created in this pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#base_domain DataK8SHiveOpenshiftIoClusterPoolV1Manifest#base_domain}
  */
  readonly baseDomain: string;
  /**
  * ClaimLifetime defines the lifetimes for claims for the cluster pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#claim_lifetime DataK8SHiveOpenshiftIoClusterPoolV1Manifest#claim_lifetime}
  */
  readonly claimLifetime?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecClaimLifetime;
  /**
  * HibernateAfter will be applied to new ClusterDeployments created for the pool. HibernateAfter will transition clusters in the clusterpool to hibernating power state after it has been running for the given duration. The time that a cluster has been running is the time since the cluster was installed or the time since the cluster last came out of hibernation. This is a Duration value; see https://pkg.go.dev/time#ParseDuration for accepted formats. Note: due to discrepancies in validation vs parsing, we use a Pattern instead of 'Format=duration'. See https://bugzilla.redhat.com/show_bug.cgi?id=2050332 https://github.com/kubernetes/apimachinery/issues/131 https://github.com/kubernetes/apiextensions-apiserver/issues/56
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#hibernate_after DataK8SHiveOpenshiftIoClusterPoolV1Manifest#hibernate_after}
  */
  readonly hibernateAfter?: string;
  /**
  * HibernationConfig configures the hibernation/resume behavior of ClusterDeployments owned by the ClusterPool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#hibernation_config DataK8SHiveOpenshiftIoClusterPoolV1Manifest#hibernation_config}
  */
  readonly hibernationConfig?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecHibernationConfig;
  /**
  * ImageSetRef is a reference to a ClusterImageSet. The release image specified in the ClusterImageSet will be used by clusters created for this cluster pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#image_set_ref DataK8SHiveOpenshiftIoClusterPoolV1Manifest#image_set_ref}
  */
  readonly imageSetRef: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecImageSetRef;
  /**
  * InstallAttemptsLimit is the maximum number of times Hive will attempt to install the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#install_attempts_limit DataK8SHiveOpenshiftIoClusterPoolV1Manifest#install_attempts_limit}
  */
  readonly installAttemptsLimit?: number;
  /**
  * InstallConfigSecretTemplateRef is a secret with the key install-config.yaml consisting of the content of the install-config.yaml to be used as a template for all clusters in this pool. Cluster specific settings (name, basedomain) will be injected dynamically when the ClusterDeployment install-config Secret is generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#install_config_secret_template_ref DataK8SHiveOpenshiftIoClusterPoolV1Manifest#install_config_secret_template_ref}
  */
  readonly installConfigSecretTemplateRef?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInstallConfigSecretTemplateRef;
  /**
  * InstallerEnv are extra environment variables to pass through to the installer. This may be used to enable additional features of the installer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#installer_env DataK8SHiveOpenshiftIoClusterPoolV1Manifest#installer_env}
  */
  readonly installerEnv?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInstallerEnv[] | cdktf.IResolvable;
  /**
  * Inventory maintains a list of entries consumed by the ClusterPool to customize the default ClusterDeployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#inventory DataK8SHiveOpenshiftIoClusterPoolV1Manifest#inventory}
  */
  readonly inventory?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInventory[] | cdktf.IResolvable;
  /**
  * Labels to be applied to new ClusterDeployments created for the pool. ClusterDeployments that have already been claimed will not be affected when this value is modified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#labels DataK8SHiveOpenshiftIoClusterPoolV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * MaxConcurrent is the maximum number of clusters that will be provisioned or deprovisioned at an time. This includes the claimed clusters being deprovisioned. By default there is no limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#max_concurrent DataK8SHiveOpenshiftIoClusterPoolV1Manifest#max_concurrent}
  */
  readonly maxConcurrent?: number;
  /**
  * MaxSize is the maximum number of clusters that will be provisioned including clusters that have been claimed and ones waiting to be used. By default there is no limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#max_size DataK8SHiveOpenshiftIoClusterPoolV1Manifest#max_size}
  */
  readonly maxSize?: number;
  /**
  * Platform encompasses the desired platform for the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#platform DataK8SHiveOpenshiftIoClusterPoolV1Manifest#platform}
  */
  readonly platform: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatform;
  /**
  * PullSecretRef is the reference to the secret to use when pulling images.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#pull_secret_ref DataK8SHiveOpenshiftIoClusterPoolV1Manifest#pull_secret_ref}
  */
  readonly pullSecretRef?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPullSecretRef;
  /**
  * RunningCount is the number of clusters we should keep running. The remainder will be kept hibernated until claimed. By default no clusters will be kept running (all will be hibernated).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#running_count DataK8SHiveOpenshiftIoClusterPoolV1Manifest#running_count}
  */
  readonly runningCount?: number;
  /**
  * Size is the default number of clusters that we should keep provisioned and waiting for use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#size DataK8SHiveOpenshiftIoClusterPoolV1Manifest#size}
  */
  readonly size: number;
  /**
  * SkipMachinePools allows creating clusterpools where the machinepools are not managed by hive after cluster creation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#skip_machine_pools DataK8SHiveOpenshiftIoClusterPoolV1Manifest#skip_machine_pools}
  */
  readonly skipMachinePools?: boolean | cdktf.IResolvable;
}

export function dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecToTerraform(struct?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    base_domain: cdktf.stringToTerraform(struct!.baseDomain),
    claim_lifetime: dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecClaimLifetimeToTerraform(struct!.claimLifetime),
    hibernate_after: cdktf.stringToTerraform(struct!.hibernateAfter),
    hibernation_config: dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecHibernationConfigToTerraform(struct!.hibernationConfig),
    image_set_ref: dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecImageSetRefToTerraform(struct!.imageSetRef),
    install_attempts_limit: cdktf.numberToTerraform(struct!.installAttemptsLimit),
    install_config_secret_template_ref: dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInstallConfigSecretTemplateRefToTerraform(struct!.installConfigSecretTemplateRef),
    installer_env: cdktf.listMapper(dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInstallerEnvToTerraform, false)(struct!.installerEnv),
    inventory: cdktf.listMapper(dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInventoryToTerraform, false)(struct!.inventory),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    max_concurrent: cdktf.numberToTerraform(struct!.maxConcurrent),
    max_size: cdktf.numberToTerraform(struct!.maxSize),
    platform: dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformToTerraform(struct!.platform),
    pull_secret_ref: dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPullSecretRefToTerraform(struct!.pullSecretRef),
    running_count: cdktf.numberToTerraform(struct!.runningCount),
    size: cdktf.numberToTerraform(struct!.size),
    skip_machine_pools: cdktf.booleanToTerraform(struct!.skipMachinePools),
  }
}


export function dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpec | cdktf.IResolvable): any {
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
    base_domain: {
      value: cdktf.stringToHclTerraform(struct!.baseDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    claim_lifetime: {
      value: dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecClaimLifetimeToHclTerraform(struct!.claimLifetime),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecClaimLifetime",
    },
    hibernate_after: {
      value: cdktf.stringToHclTerraform(struct!.hibernateAfter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hibernation_config: {
      value: dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecHibernationConfigToHclTerraform(struct!.hibernationConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecHibernationConfig",
    },
    image_set_ref: {
      value: dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecImageSetRefToHclTerraform(struct!.imageSetRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecImageSetRef",
    },
    install_attempts_limit: {
      value: cdktf.numberToHclTerraform(struct!.installAttemptsLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    install_config_secret_template_ref: {
      value: dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInstallConfigSecretTemplateRefToHclTerraform(struct!.installConfigSecretTemplateRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInstallConfigSecretTemplateRef",
    },
    installer_env: {
      value: cdktf.listMapperHcl(dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInstallerEnvToHclTerraform, false)(struct!.installerEnv),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInstallerEnvList",
    },
    inventory: {
      value: cdktf.listMapperHcl(dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInventoryToHclTerraform, false)(struct!.inventory),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInventoryList",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    max_concurrent: {
      value: cdktf.numberToHclTerraform(struct!.maxConcurrent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_size: {
      value: cdktf.numberToHclTerraform(struct!.maxSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    platform: {
      value: dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformToHclTerraform(struct!.platform),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatform",
    },
    pull_secret_ref: {
      value: dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPullSecretRefToHclTerraform(struct!.pullSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPullSecretRef",
    },
    running_count: {
      value: cdktf.numberToHclTerraform(struct!.runningCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    skip_machine_pools: {
      value: cdktf.booleanToHclTerraform(struct!.skipMachinePools),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._baseDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseDomain = this._baseDomain;
    }
    if (this._claimLifetime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.claimLifetime = this._claimLifetime?.internalValue;
    }
    if (this._hibernateAfter !== undefined) {
      hasAnyValues = true;
      internalValueResult.hibernateAfter = this._hibernateAfter;
    }
    if (this._hibernationConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hibernationConfig = this._hibernationConfig?.internalValue;
    }
    if (this._imageSetRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageSetRef = this._imageSetRef?.internalValue;
    }
    if (this._installAttemptsLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.installAttemptsLimit = this._installAttemptsLimit;
    }
    if (this._installConfigSecretTemplateRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.installConfigSecretTemplateRef = this._installConfigSecretTemplateRef?.internalValue;
    }
    if (this._installerEnv?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.installerEnv = this._installerEnv?.internalValue;
    }
    if (this._inventory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inventory = this._inventory?.internalValue;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._maxConcurrent !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConcurrent = this._maxConcurrent;
    }
    if (this._maxSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSize = this._maxSize;
    }
    if (this._platform?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.platform = this._platform?.internalValue;
    }
    if (this._pullSecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pullSecretRef = this._pullSecretRef?.internalValue;
    }
    if (this._runningCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.runningCount = this._runningCount;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._skipMachinePools !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipMachinePools = this._skipMachinePools;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._baseDomain = undefined;
      this._claimLifetime.internalValue = undefined;
      this._hibernateAfter = undefined;
      this._hibernationConfig.internalValue = undefined;
      this._imageSetRef.internalValue = undefined;
      this._installAttemptsLimit = undefined;
      this._installConfigSecretTemplateRef.internalValue = undefined;
      this._installerEnv.internalValue = undefined;
      this._inventory.internalValue = undefined;
      this._labels = undefined;
      this._maxConcurrent = undefined;
      this._maxSize = undefined;
      this._platform.internalValue = undefined;
      this._pullSecretRef.internalValue = undefined;
      this._runningCount = undefined;
      this._size = undefined;
      this._skipMachinePools = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._baseDomain = value.baseDomain;
      this._claimLifetime.internalValue = value.claimLifetime;
      this._hibernateAfter = value.hibernateAfter;
      this._hibernationConfig.internalValue = value.hibernationConfig;
      this._imageSetRef.internalValue = value.imageSetRef;
      this._installAttemptsLimit = value.installAttemptsLimit;
      this._installConfigSecretTemplateRef.internalValue = value.installConfigSecretTemplateRef;
      this._installerEnv.internalValue = value.installerEnv;
      this._inventory.internalValue = value.inventory;
      this._labels = value.labels;
      this._maxConcurrent = value.maxConcurrent;
      this._maxSize = value.maxSize;
      this._platform.internalValue = value.platform;
      this._pullSecretRef.internalValue = value.pullSecretRef;
      this._runningCount = value.runningCount;
      this._size = value.size;
      this._skipMachinePools = value.skipMachinePools;
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

  // base_domain - computed: false, optional: false, required: true
  private _baseDomain?: string; 
  public get baseDomain() {
    return this.getStringAttribute('base_domain');
  }
  public set baseDomain(value: string) {
    this._baseDomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseDomainInput() {
    return this._baseDomain;
  }

  // claim_lifetime - computed: false, optional: true, required: false
  private _claimLifetime = new DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecClaimLifetimeOutputReference(this, "claim_lifetime");
  public get claimLifetime() {
    return this._claimLifetime;
  }
  public putClaimLifetime(value: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecClaimLifetime) {
    this._claimLifetime.internalValue = value;
  }
  public resetClaimLifetime() {
    this._claimLifetime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimLifetimeInput() {
    return this._claimLifetime.internalValue;
  }

  // hibernate_after - computed: false, optional: true, required: false
  private _hibernateAfter?: string; 
  public get hibernateAfter() {
    return this.getStringAttribute('hibernate_after');
  }
  public set hibernateAfter(value: string) {
    this._hibernateAfter = value;
  }
  public resetHibernateAfter() {
    this._hibernateAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hibernateAfterInput() {
    return this._hibernateAfter;
  }

  // hibernation_config - computed: false, optional: true, required: false
  private _hibernationConfig = new DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecHibernationConfigOutputReference(this, "hibernation_config");
  public get hibernationConfig() {
    return this._hibernationConfig;
  }
  public putHibernationConfig(value: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecHibernationConfig) {
    this._hibernationConfig.internalValue = value;
  }
  public resetHibernationConfig() {
    this._hibernationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hibernationConfigInput() {
    return this._hibernationConfig.internalValue;
  }

  // image_set_ref - computed: false, optional: false, required: true
  private _imageSetRef = new DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecImageSetRefOutputReference(this, "image_set_ref");
  public get imageSetRef() {
    return this._imageSetRef;
  }
  public putImageSetRef(value: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecImageSetRef) {
    this._imageSetRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageSetRefInput() {
    return this._imageSetRef.internalValue;
  }

  // install_attempts_limit - computed: false, optional: true, required: false
  private _installAttemptsLimit?: number; 
  public get installAttemptsLimit() {
    return this.getNumberAttribute('install_attempts_limit');
  }
  public set installAttemptsLimit(value: number) {
    this._installAttemptsLimit = value;
  }
  public resetInstallAttemptsLimit() {
    this._installAttemptsLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installAttemptsLimitInput() {
    return this._installAttemptsLimit;
  }

  // install_config_secret_template_ref - computed: false, optional: true, required: false
  private _installConfigSecretTemplateRef = new DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInstallConfigSecretTemplateRefOutputReference(this, "install_config_secret_template_ref");
  public get installConfigSecretTemplateRef() {
    return this._installConfigSecretTemplateRef;
  }
  public putInstallConfigSecretTemplateRef(value: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInstallConfigSecretTemplateRef) {
    this._installConfigSecretTemplateRef.internalValue = value;
  }
  public resetInstallConfigSecretTemplateRef() {
    this._installConfigSecretTemplateRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installConfigSecretTemplateRefInput() {
    return this._installConfigSecretTemplateRef.internalValue;
  }

  // installer_env - computed: false, optional: true, required: false
  private _installerEnv = new DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInstallerEnvList(this, "installer_env", false);
  public get installerEnv() {
    return this._installerEnv;
  }
  public putInstallerEnv(value: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInstallerEnv[] | cdktf.IResolvable) {
    this._installerEnv.internalValue = value;
  }
  public resetInstallerEnv() {
    this._installerEnv.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installerEnvInput() {
    return this._installerEnv.internalValue;
  }

  // inventory - computed: false, optional: true, required: false
  private _inventory = new DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInventoryList(this, "inventory", false);
  public get inventory() {
    return this._inventory;
  }
  public putInventory(value: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecInventory[] | cdktf.IResolvable) {
    this._inventory.internalValue = value;
  }
  public resetInventory() {
    this._inventory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inventoryInput() {
    return this._inventory.internalValue;
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

  // max_concurrent - computed: false, optional: true, required: false
  private _maxConcurrent?: number; 
  public get maxConcurrent() {
    return this.getNumberAttribute('max_concurrent');
  }
  public set maxConcurrent(value: number) {
    this._maxConcurrent = value;
  }
  public resetMaxConcurrent() {
    this._maxConcurrent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrentInput() {
    return this._maxConcurrent;
  }

  // max_size - computed: false, optional: true, required: false
  private _maxSize?: number; 
  public get maxSize() {
    return this.getNumberAttribute('max_size');
  }
  public set maxSize(value: number) {
    this._maxSize = value;
  }
  public resetMaxSize() {
    this._maxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeInput() {
    return this._maxSize;
  }

  // platform - computed: false, optional: false, required: true
  private _platform = new DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatformOutputReference(this, "platform");
  public get platform() {
    return this._platform;
  }
  public putPlatform(value: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPlatform) {
    this._platform.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get platformInput() {
    return this._platform.internalValue;
  }

  // pull_secret_ref - computed: false, optional: true, required: false
  private _pullSecretRef = new DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPullSecretRefOutputReference(this, "pull_secret_ref");
  public get pullSecretRef() {
    return this._pullSecretRef;
  }
  public putPullSecretRef(value: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecPullSecretRef) {
    this._pullSecretRef.internalValue = value;
  }
  public resetPullSecretRef() {
    this._pullSecretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pullSecretRefInput() {
    return this._pullSecretRef.internalValue;
  }

  // running_count - computed: false, optional: true, required: false
  private _runningCount?: number; 
  public get runningCount() {
    return this.getNumberAttribute('running_count');
  }
  public set runningCount(value: number) {
    this._runningCount = value;
  }
  public resetRunningCount() {
    this._runningCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runningCountInput() {
    return this._runningCount;
  }

  // size - computed: false, optional: false, required: true
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // skip_machine_pools - computed: false, optional: true, required: false
  private _skipMachinePools?: boolean | cdktf.IResolvable; 
  public get skipMachinePools() {
    return this.getBooleanAttribute('skip_machine_pools');
  }
  public set skipMachinePools(value: boolean | cdktf.IResolvable) {
    this._skipMachinePools = value;
  }
  public resetSkipMachinePools() {
    this._skipMachinePools = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipMachinePoolsInput() {
    return this._skipMachinePools;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest k8s_hive_openshift_io_cluster_pool_v1_manifest}
*/
export class DataK8SHiveOpenshiftIoClusterPoolV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_hive_openshift_io_cluster_pool_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SHiveOpenshiftIoClusterPoolV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SHiveOpenshiftIoClusterPoolV1Manifest to import
  * @param importFromId The id of the existing DataK8SHiveOpenshiftIoClusterPoolV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SHiveOpenshiftIoClusterPoolV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_hive_openshift_io_cluster_pool_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_pool_v1_manifest k8s_hive_openshift_io_cluster_pool_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SHiveOpenshiftIoClusterPoolV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SHiveOpenshiftIoClusterPoolV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_hive_openshift_io_cluster_pool_v1_manifest',
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
  private _metadata = new DataK8SHiveOpenshiftIoClusterPoolV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SHiveOpenshiftIoClusterPoolV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpec) {
    this._spec.internalValue = value;
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
      metadata: dataK8SHiveOpenshiftIoClusterPoolV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SHiveOpenshiftIoClusterPoolV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SHiveOpenshiftIoClusterPoolV1ManifestMetadata",
      },
      spec: {
        value: dataK8SHiveOpenshiftIoClusterPoolV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SHiveOpenshiftIoClusterPoolV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
