// https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SHiveOpenshiftIoHiveConfigV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#metadata DataK8SHiveOpenshiftIoHiveConfigV1Manifest#metadata}
  */
  readonly metadata: DataK8SHiveOpenshiftIoHiveConfigV1ManifestMetadata;
  /**
  * HiveConfigSpec defines the desired state of Hive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#spec DataK8SHiveOpenshiftIoHiveConfigV1Manifest#spec}
  */
  readonly spec?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpec;
}
export interface DataK8SHiveOpenshiftIoHiveConfigV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#annotations DataK8SHiveOpenshiftIoHiveConfigV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#labels DataK8SHiveOpenshiftIoHiveConfigV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#name DataK8SHiveOpenshiftIoHiveConfigV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SHiveOpenshiftIoHiveConfigV1ManifestMetadataToTerraform(struct?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SHiveOpenshiftIoHiveConfigV1ManifestMetadataToHclTerraform(struct?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestMetadata | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoHiveConfigV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoHiveConfigV1ManifestMetadata | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoHiveConfigV1ManifestMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
      this._name = undefined;
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
}
export interface DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAdditionalCertificateAuthoritiesSecretRef {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#name DataK8SHiveOpenshiftIoHiveConfigV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAdditionalCertificateAuthoritiesSecretRefToTerraform(struct?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAdditionalCertificateAuthoritiesSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAdditionalCertificateAuthoritiesSecretRefToHclTerraform(struct?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAdditionalCertificateAuthoritiesSecretRef | cdktf.IResolvable): any {
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

export class DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAdditionalCertificateAuthoritiesSecretRefOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAdditionalCertificateAuthoritiesSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAdditionalCertificateAuthoritiesSecretRef | cdktf.IResolvable | undefined) {
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

export class DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAdditionalCertificateAuthoritiesSecretRefList extends cdktf.ComplexList {
  public internalValue? : DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAdditionalCertificateAuthoritiesSecretRef[] | cdktf.IResolvable

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
  public get(index: number): DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAdditionalCertificateAuthoritiesSecretRefOutputReference {
    return new DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAdditionalCertificateAuthoritiesSecretRefOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecArgoCdConfig {
  /**
  * Enabled dictates if ArgoCD gitops integration is enabled. If not specified, the default is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#enabled DataK8SHiveOpenshiftIoHiveConfigV1Manifest#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Namespace specifies the namespace where ArgoCD is installed. Used for the location of cluster secrets. Defaults to 'argocd'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#namespace DataK8SHiveOpenshiftIoHiveConfigV1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecArgoCdConfigToTerraform(struct?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecArgoCdConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecArgoCdConfigToHclTerraform(struct?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecArgoCdConfig | cdktf.IResolvable): any {
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

export class DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecArgoCdConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecArgoCdConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecArgoCdConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._namespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._namespace = value.namespace;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}
export interface DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAwsPrivateLinkAssociatedVpCsCredentialsSecretRef {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#name DataK8SHiveOpenshiftIoHiveConfigV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAwsPrivateLinkAssociatedVpCsCredentialsSecretRefToTerraform(struct?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAwsPrivateLinkAssociatedVpCsCredentialsSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAwsPrivateLinkAssociatedVpCsCredentialsSecretRefToHclTerraform(struct?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAwsPrivateLinkAssociatedVpCsCredentialsSecretRef | cdktf.IResolvable): any {
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

export class DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAwsPrivateLinkAssociatedVpCsCredentialsSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAwsPrivateLinkAssociatedVpCsCredentialsSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAwsPrivateLinkAssociatedVpCsCredentialsSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAwsPrivateLinkAssociatedVpCs {
  /**
  * CredentialsSecretRef references a secret in the TargetNamespace that will be used to authenticate with AWS for associating the VPC with the Private HostedZone created for PrivateLink. When not provided, the common credentials for the controller should be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#credentials_secret_ref DataK8SHiveOpenshiftIoHiveConfigV1Manifest#credentials_secret_ref}
  */
  readonly credentialsSecretRef?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAwsPrivateLinkAssociatedVpCsCredentialsSecretRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#region DataK8SHiveOpenshiftIoHiveConfigV1Manifest#region}
  */
  readonly region: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#vpc_id DataK8SHiveOpenshiftIoHiveConfigV1Manifest#vpc_id}
  */
  readonly vpcId: string;
}

export function dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAwsPrivateLinkAssociatedVpCsToTerraform(struct?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAwsPrivateLinkAssociatedVpCs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credentials_secret_ref: dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAwsPrivateLinkAssociatedVpCsCredentialsSecretRefToTerraform(struct!.credentialsSecretRef),
    region: cdktf.stringToTerraform(struct!.region),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
  }
}


export function dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAwsPrivateLinkAssociatedVpCsToHclTerraform(struct?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAwsPrivateLinkAssociatedVpCs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    credentials_secret_ref: {
      value: dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAwsPrivateLinkAssociatedVpCsCredentialsSecretRefToHclTerraform(struct!.credentialsSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAwsPrivateLinkAssociatedVpCsCredentialsSecretRef",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_id: {
      value: cdktf.stringToHclTerraform(struct!.vpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAwsPrivateLinkAssociatedVpCsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAwsPrivateLinkAssociatedVpCs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credentialsSecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialsSecretRef = this._credentialsSecretRef?.internalValue;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAwsPrivateLinkAssociatedVpCs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._credentialsSecretRef.internalValue = undefined;
      this._region = undefined;
      this._vpcId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._credentialsSecretRef.internalValue = value.credentialsSecretRef;
      this._region = value.region;
      this._vpcId = value.vpcId;
    }
  }

  // credentials_secret_ref - computed: false, optional: true, required: false
  private _credentialsSecretRef = new DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAwsPrivateLinkAssociatedVpCsCredentialsSecretRefOutputReference(this, "credentials_secret_ref");
  public get credentialsSecretRef() {
    return this._credentialsSecretRef;
  }
  public putCredentialsSecretRef(value: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAwsPrivateLinkAssociatedVpCsCredentialsSecretRef) {
    this._credentialsSecretRef.internalValue = value;
  }
  public resetCredentialsSecretRef() {
    this._credentialsSecretRef.internalValue = undefined;
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

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }
}

export class DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAwsPrivateLinkAssociatedVpCsList extends cdktf.ComplexList {
  public internalValue? : DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAwsPrivateLinkAssociatedVpCs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAwsPrivateLinkAssociatedVpCsOutputReference {
    return new DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAwsPrivateLinkAssociatedVpCsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAwsPrivateLinkCredentialsSecretRef {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#name DataK8SHiveOpenshiftIoHiveConfigV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAwsPrivateLinkCredentialsSecretRefToTerraform(struct?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAwsPrivateLinkCredentialsSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAwsPrivateLinkCredentialsSecretRefToHclTerraform(struct?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAwsPrivateLinkCredentialsSecretRef | cdktf.IResolvable): any {
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

export class DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAwsPrivateLinkCredentialsSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAwsPrivateLinkCredentialsSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAwsPrivateLinkCredentialsSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAwsPrivateLinkEndpointVpcInventorySubnets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#availability_zone DataK8SHiveOpenshiftIoHiveConfigV1Manifest#availability_zone}
  */
  readonly availabilityZone: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#subnet_id DataK8SHiveOpenshiftIoHiveConfigV1Manifest#subnet_id}
  */
  readonly subnetId: string;
}

export function dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAwsPrivateLinkEndpointVpcInventorySubnetsToTerraform(struct?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAwsPrivateLinkEndpointVpcInventorySubnets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability_zone: cdktf.stringToTerraform(struct!.availabilityZone),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
  }
}


export function dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAwsPrivateLinkEndpointVpcInventorySubnetsToHclTerraform(struct?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAwsPrivateLinkEndpointVpcInventorySubnets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    availability_zone: {
      value: cdktf.stringToHclTerraform(struct!.availabilityZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAwsPrivateLinkEndpointVpcInventorySubnetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAwsPrivateLinkEndpointVpcInventorySubnets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilityZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityZone = this._availabilityZone;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAwsPrivateLinkEndpointVpcInventorySubnets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._availabilityZone = undefined;
      this._subnetId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._availabilityZone = value.availabilityZone;
      this._subnetId = value.subnetId;
    }
  }

  // availability_zone - computed: false, optional: false, required: true
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }
}

export class DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAwsPrivateLinkEndpointVpcInventorySubnetsList extends cdktf.ComplexList {
  public internalValue? : DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAwsPrivateLinkEndpointVpcInventorySubnets[] | cdktf.IResolvable

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
  public get(index: number): DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAwsPrivateLinkEndpointVpcInventorySubnetsOutputReference {
    return new DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAwsPrivateLinkEndpointVpcInventorySubnetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAwsPrivateLinkEndpointVpcInventory {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#region DataK8SHiveOpenshiftIoHiveConfigV1Manifest#region}
  */
  readonly region: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#subnets DataK8SHiveOpenshiftIoHiveConfigV1Manifest#subnets}
  */
  readonly subnets: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAwsPrivateLinkEndpointVpcInventorySubnets[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#vpc_id DataK8SHiveOpenshiftIoHiveConfigV1Manifest#vpc_id}
  */
  readonly vpcId: string;
}

export function dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAwsPrivateLinkEndpointVpcInventoryToTerraform(struct?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAwsPrivateLinkEndpointVpcInventory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    region: cdktf.stringToTerraform(struct!.region),
    subnets: cdktf.listMapper(dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAwsPrivateLinkEndpointVpcInventorySubnetsToTerraform, false)(struct!.subnets),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
  }
}


export function dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAwsPrivateLinkEndpointVpcInventoryToHclTerraform(struct?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAwsPrivateLinkEndpointVpcInventory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnets: {
      value: cdktf.listMapperHcl(dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAwsPrivateLinkEndpointVpcInventorySubnetsToHclTerraform, false)(struct!.subnets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAwsPrivateLinkEndpointVpcInventorySubnetsList",
    },
    vpc_id: {
      value: cdktf.stringToHclTerraform(struct!.vpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAwsPrivateLinkEndpointVpcInventoryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAwsPrivateLinkEndpointVpcInventory | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._subnets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnets = this._subnets?.internalValue;
    }
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAwsPrivateLinkEndpointVpcInventory | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._region = undefined;
      this._subnets.internalValue = undefined;
      this._vpcId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._region = value.region;
      this._subnets.internalValue = value.subnets;
      this._vpcId = value.vpcId;
    }
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

  // subnets - computed: false, optional: false, required: true
  private _subnets = new DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAwsPrivateLinkEndpointVpcInventorySubnetsList(this, "subnets", false);
  public get subnets() {
    return this._subnets;
  }
  public putSubnets(value: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAwsPrivateLinkEndpointVpcInventorySubnets[] | cdktf.IResolvable) {
    this._subnets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetsInput() {
    return this._subnets.internalValue;
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }
}

export class DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAwsPrivateLinkEndpointVpcInventoryList extends cdktf.ComplexList {
  public internalValue? : DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAwsPrivateLinkEndpointVpcInventory[] | cdktf.IResolvable

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
  public get(index: number): DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAwsPrivateLinkEndpointVpcInventoryOutputReference {
    return new DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAwsPrivateLinkEndpointVpcInventoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAwsPrivateLink {
  /**
  * AssociatedVPCs is the list of VPCs that should be able to resolve the DNS addresses setup for Private Link. This allows clients in VPC to resolve the AWS PrivateLink address using AWS's default DNS resolver for Private Route53 Hosted Zones. This list should at minimum include the VPC where the current Hive controller is running.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#associated_vp_cs DataK8SHiveOpenshiftIoHiveConfigV1Manifest#associated_vp_cs}
  */
  readonly associatedVpCs?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAwsPrivateLinkAssociatedVpCs[] | cdktf.IResolvable;
  /**
  * CredentialsSecretRef references a secret in the TargetNamespace that will be used to authenticate with AWS for creating the resources for AWS PrivateLink.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#credentials_secret_ref DataK8SHiveOpenshiftIoHiveConfigV1Manifest#credentials_secret_ref}
  */
  readonly credentialsSecretRef: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAwsPrivateLinkCredentialsSecretRef;
  /**
  * DNSRecordType defines what type of DNS record should be created in Private Hosted Zone for the customer cluster's API endpoint (which is the VPC Endpoint's regional DNS name).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#dns_record_type DataK8SHiveOpenshiftIoHiveConfigV1Manifest#dns_record_type}
  */
  readonly dnsRecordType?: string;
  /**
  * EndpointVPCInventory is a list of VPCs and the corresponding subnets in various AWS regions. The controller uses this list to choose a VPC for creating AWS VPC Endpoints. Since the VPC Endpoints must be in the same region as the ClusterDeployment, we must have VPCs in that region to be able to setup Private Link.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#endpoint_vpc_inventory DataK8SHiveOpenshiftIoHiveConfigV1Manifest#endpoint_vpc_inventory}
  */
  readonly endpointVpcInventory?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAwsPrivateLinkEndpointVpcInventory[] | cdktf.IResolvable;
}

export function dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAwsPrivateLinkToTerraform(struct?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAwsPrivateLink | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    associated_vp_cs: cdktf.listMapper(dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAwsPrivateLinkAssociatedVpCsToTerraform, false)(struct!.associatedVpCs),
    credentials_secret_ref: dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAwsPrivateLinkCredentialsSecretRefToTerraform(struct!.credentialsSecretRef),
    dns_record_type: cdktf.stringToTerraform(struct!.dnsRecordType),
    endpoint_vpc_inventory: cdktf.listMapper(dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAwsPrivateLinkEndpointVpcInventoryToTerraform, false)(struct!.endpointVpcInventory),
  }
}


export function dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAwsPrivateLinkToHclTerraform(struct?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAwsPrivateLink | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    associated_vp_cs: {
      value: cdktf.listMapperHcl(dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAwsPrivateLinkAssociatedVpCsToHclTerraform, false)(struct!.associatedVpCs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAwsPrivateLinkAssociatedVpCsList",
    },
    credentials_secret_ref: {
      value: dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAwsPrivateLinkCredentialsSecretRefToHclTerraform(struct!.credentialsSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAwsPrivateLinkCredentialsSecretRef",
    },
    dns_record_type: {
      value: cdktf.stringToHclTerraform(struct!.dnsRecordType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint_vpc_inventory: {
      value: cdktf.listMapperHcl(dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAwsPrivateLinkEndpointVpcInventoryToHclTerraform, false)(struct!.endpointVpcInventory),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAwsPrivateLinkEndpointVpcInventoryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAwsPrivateLinkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAwsPrivateLink | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._associatedVpCs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.associatedVpCs = this._associatedVpCs?.internalValue;
    }
    if (this._credentialsSecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialsSecretRef = this._credentialsSecretRef?.internalValue;
    }
    if (this._dnsRecordType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsRecordType = this._dnsRecordType;
    }
    if (this._endpointVpcInventory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointVpcInventory = this._endpointVpcInventory?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAwsPrivateLink | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._associatedVpCs.internalValue = undefined;
      this._credentialsSecretRef.internalValue = undefined;
      this._dnsRecordType = undefined;
      this._endpointVpcInventory.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._associatedVpCs.internalValue = value.associatedVpCs;
      this._credentialsSecretRef.internalValue = value.credentialsSecretRef;
      this._dnsRecordType = value.dnsRecordType;
      this._endpointVpcInventory.internalValue = value.endpointVpcInventory;
    }
  }

  // associated_vp_cs - computed: false, optional: true, required: false
  private _associatedVpCs = new DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAwsPrivateLinkAssociatedVpCsList(this, "associated_vp_cs", false);
  public get associatedVpCs() {
    return this._associatedVpCs;
  }
  public putAssociatedVpCs(value: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAwsPrivateLinkAssociatedVpCs[] | cdktf.IResolvable) {
    this._associatedVpCs.internalValue = value;
  }
  public resetAssociatedVpCs() {
    this._associatedVpCs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associatedVpCsInput() {
    return this._associatedVpCs.internalValue;
  }

  // credentials_secret_ref - computed: false, optional: false, required: true
  private _credentialsSecretRef = new DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAwsPrivateLinkCredentialsSecretRefOutputReference(this, "credentials_secret_ref");
  public get credentialsSecretRef() {
    return this._credentialsSecretRef;
  }
  public putCredentialsSecretRef(value: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAwsPrivateLinkCredentialsSecretRef) {
    this._credentialsSecretRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsSecretRefInput() {
    return this._credentialsSecretRef.internalValue;
  }

  // dns_record_type - computed: false, optional: true, required: false
  private _dnsRecordType?: string; 
  public get dnsRecordType() {
    return this.getStringAttribute('dns_record_type');
  }
  public set dnsRecordType(value: string) {
    this._dnsRecordType = value;
  }
  public resetDnsRecordType() {
    this._dnsRecordType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRecordTypeInput() {
    return this._dnsRecordType;
  }

  // endpoint_vpc_inventory - computed: false, optional: true, required: false
  private _endpointVpcInventory = new DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAwsPrivateLinkEndpointVpcInventoryList(this, "endpoint_vpc_inventory", false);
  public get endpointVpcInventory() {
    return this._endpointVpcInventory;
  }
  public putEndpointVpcInventory(value: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAwsPrivateLinkEndpointVpcInventory[] | cdktf.IResolvable) {
    this._endpointVpcInventory.internalValue = value;
  }
  public resetEndpointVpcInventory() {
    this._endpointVpcInventory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointVpcInventoryInput() {
    return this._endpointVpcInventory.internalValue;
  }
}
export interface DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecBackupVelero {
  /**
  * Enabled dictates if Velero backup integration is enabled. If not specified, the default is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#enabled DataK8SHiveOpenshiftIoHiveConfigV1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Namespace specifies in which namespace velero backup objects should be created. If not specified, the default is a namespace named 'velero'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#namespace DataK8SHiveOpenshiftIoHiveConfigV1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecBackupVeleroToTerraform(struct?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecBackupVelero | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecBackupVeleroToHclTerraform(struct?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecBackupVelero | cdktf.IResolvable): any {
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

export class DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecBackupVeleroOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecBackupVelero | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecBackupVelero | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._namespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._namespace = value.namespace;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}
export interface DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecBackup {
  /**
  * MinBackupPeriodSeconds specifies that a minimum of MinBackupPeriodSeconds will occur in between each backup. This is used to rate limit backups. This potentially batches together multiple changes into 1 backup. No backups will be lost as changes that happen during this interval are queued up and will result in a backup happening once the interval has been completed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#min_backup_period_seconds DataK8SHiveOpenshiftIoHiveConfigV1Manifest#min_backup_period_seconds}
  */
  readonly minBackupPeriodSeconds?: number;
  /**
  * Velero specifies configuration for the Velero backup integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#velero DataK8SHiveOpenshiftIoHiveConfigV1Manifest#velero}
  */
  readonly velero?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecBackupVelero;
}

export function dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecBackupToTerraform(struct?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecBackup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    min_backup_period_seconds: cdktf.numberToTerraform(struct!.minBackupPeriodSeconds),
    velero: dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecBackupVeleroToTerraform(struct!.velero),
  }
}


export function dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecBackupToHclTerraform(struct?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecBackup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    min_backup_period_seconds: {
      value: cdktf.numberToHclTerraform(struct!.minBackupPeriodSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    velero: {
      value: dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecBackupVeleroToHclTerraform(struct!.velero),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecBackupVelero",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecBackupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecBackup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minBackupPeriodSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.minBackupPeriodSeconds = this._minBackupPeriodSeconds;
    }
    if (this._velero?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.velero = this._velero?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecBackup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._minBackupPeriodSeconds = undefined;
      this._velero.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._minBackupPeriodSeconds = value.minBackupPeriodSeconds;
      this._velero.internalValue = value.velero;
    }
  }

  // min_backup_period_seconds - computed: false, optional: true, required: false
  private _minBackupPeriodSeconds?: number; 
  public get minBackupPeriodSeconds() {
    return this.getNumberAttribute('min_backup_period_seconds');
  }
  public set minBackupPeriodSeconds(value: number) {
    this._minBackupPeriodSeconds = value;
  }
  public resetMinBackupPeriodSeconds() {
    this._minBackupPeriodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minBackupPeriodSecondsInput() {
    return this._minBackupPeriodSeconds;
  }

  // velero - computed: false, optional: true, required: false
  private _velero = new DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecBackupVeleroOutputReference(this, "velero");
  public get velero() {
    return this._velero;
  }
  public putVelero(value: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecBackupVelero) {
    this._velero.internalValue = value;
  }
  public resetVelero() {
    this._velero.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get veleroInput() {
    return this._velero.internalValue;
  }
}
export interface DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigControllersConfigResourcesClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#name DataK8SHiveOpenshiftIoHiveConfigV1Manifest#name}
  */
  readonly name: string;
  /**
  * Request is the name chosen for a request in the referenced claim. If empty, everything from the claim is made available, otherwise only the result of this request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#request DataK8SHiveOpenshiftIoHiveConfigV1Manifest#request}
  */
  readonly request?: string;
}

export function dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigControllersConfigResourcesClaimsToTerraform(struct?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigControllersConfigResourcesClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    request: cdktf.stringToTerraform(struct!.request),
  }
}


export function dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigControllersConfigResourcesClaimsToHclTerraform(struct?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigControllersConfigResourcesClaims | cdktf.IResolvable): any {
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
    request: {
      value: cdktf.stringToHclTerraform(struct!.request),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigControllersConfigResourcesClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigControllersConfigResourcesClaims | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._request !== undefined) {
      hasAnyValues = true;
      internalValueResult.request = this._request;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigControllersConfigResourcesClaims | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._request = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._request = value.request;
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

  // request - computed: false, optional: true, required: false
  private _request?: string; 
  public get request() {
    return this.getStringAttribute('request');
  }
  public set request(value: string) {
    this._request = value;
  }
  public resetRequest() {
    this._request = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestInput() {
    return this._request;
  }
}

export class DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigControllersConfigResourcesClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigControllersConfigResourcesClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigControllersConfigResourcesClaimsOutputReference {
    return new DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigControllersConfigResourcesClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigControllersConfigResources {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#claims DataK8SHiveOpenshiftIoHiveConfigV1Manifest#claims}
  */
  readonly claims?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigControllersConfigResourcesClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#limits DataK8SHiveOpenshiftIoHiveConfigV1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#requests DataK8SHiveOpenshiftIoHiveConfigV1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigControllersConfigResourcesToTerraform(struct?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigControllersConfigResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigControllersConfigResourcesClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigControllersConfigResourcesToHclTerraform(struct?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigControllersConfigResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigControllersConfigResourcesClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigControllersConfigResourcesClaimsList",
    },
    limits: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.limits),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    requests: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.requests),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigControllersConfigResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigControllersConfigResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._claims?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.claims = this._claims?.internalValue;
    }
    if (this._limits !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits;
    }
    if (this._requests !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigControllersConfigResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._claims.internalValue = undefined;
      this._limits = undefined;
      this._requests = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._claims.internalValue = value.claims;
      this._limits = value.limits;
      this._requests = value.requests;
    }
  }

  // claims - computed: false, optional: true, required: false
  private _claims = new DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigControllersConfigResourcesClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigControllersConfigResourcesClaims[] | cdktf.IResolvable) {
    this._claims.internalValue = value;
  }
  public resetClaims() {
    this._claims.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimsInput() {
    return this._claims.internalValue;
  }

  // limits - computed: false, optional: true, required: false
  private _limits?: { [key: string]: string }; 
  public get limits() {
    return this.getStringMapAttribute('limits');
  }
  public set limits(value: { [key: string]: string }) {
    this._limits = value;
  }
  public resetLimits() {
    this._limits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits;
  }

  // requests - computed: false, optional: true, required: false
  private _requests?: { [key: string]: string }; 
  public get requests() {
    return this.getStringMapAttribute('requests');
  }
  public set requests(value: { [key: string]: string }) {
    this._requests = value;
  }
  public resetRequests() {
    this._requests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests;
  }
}
export interface DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigControllersConfig {
  /**
  * ClientBurst specifies client rate limiter burst for a controller
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#client_burst DataK8SHiveOpenshiftIoHiveConfigV1Manifest#client_burst}
  */
  readonly clientBurst?: number;
  /**
  * ClientQPS specifies client rate limiter QPS for a controller
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#client_qps DataK8SHiveOpenshiftIoHiveConfigV1Manifest#client_qps}
  */
  readonly clientQps?: number;
  /**
  * ConcurrentReconciles specifies number of concurrent reconciles for a controller
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#concurrent_reconciles DataK8SHiveOpenshiftIoHiveConfigV1Manifest#concurrent_reconciles}
  */
  readonly concurrentReconciles?: number;
  /**
  * QueueBurst specifies workqueue rate limiter burst for a controller
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#queue_burst DataK8SHiveOpenshiftIoHiveConfigV1Manifest#queue_burst}
  */
  readonly queueBurst?: number;
  /**
  * QueueQPS specifies workqueue rate limiter QPS for a controller
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#queue_qps DataK8SHiveOpenshiftIoHiveConfigV1Manifest#queue_qps}
  */
  readonly queueQps?: number;
  /**
  * Replicas specifies the number of replicas the specific controller pod should use. This is ONLY for controllers that have been split out into their own pods. This is ignored for all others.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#replicas DataK8SHiveOpenshiftIoHiveConfigV1Manifest#replicas}
  */
  readonly replicas?: number;
  /**
  * Resources describes the compute resource requirements of the controller container. This is ONLY for controllers that have been split out into their own pods. This is ignored for all others.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#resources DataK8SHiveOpenshiftIoHiveConfigV1Manifest#resources}
  */
  readonly resources?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigControllersConfigResources;
}

export function dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigControllersConfigToTerraform(struct?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigControllersConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_burst: cdktf.numberToTerraform(struct!.clientBurst),
    client_qps: cdktf.numberToTerraform(struct!.clientQps),
    concurrent_reconciles: cdktf.numberToTerraform(struct!.concurrentReconciles),
    queue_burst: cdktf.numberToTerraform(struct!.queueBurst),
    queue_qps: cdktf.numberToTerraform(struct!.queueQps),
    replicas: cdktf.numberToTerraform(struct!.replicas),
    resources: dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigControllersConfigResourcesToTerraform(struct!.resources),
  }
}


export function dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigControllersConfigToHclTerraform(struct?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigControllersConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_burst: {
      value: cdktf.numberToHclTerraform(struct!.clientBurst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_qps: {
      value: cdktf.numberToHclTerraform(struct!.clientQps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    concurrent_reconciles: {
      value: cdktf.numberToHclTerraform(struct!.concurrentReconciles),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    queue_burst: {
      value: cdktf.numberToHclTerraform(struct!.queueBurst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    queue_qps: {
      value: cdktf.numberToHclTerraform(struct!.queueQps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resources: {
      value: dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigControllersConfigResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigControllersConfigResources",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigControllersConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigControllersConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientBurst !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientBurst = this._clientBurst;
    }
    if (this._clientQps !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientQps = this._clientQps;
    }
    if (this._concurrentReconciles !== undefined) {
      hasAnyValues = true;
      internalValueResult.concurrentReconciles = this._concurrentReconciles;
    }
    if (this._queueBurst !== undefined) {
      hasAnyValues = true;
      internalValueResult.queueBurst = this._queueBurst;
    }
    if (this._queueQps !== undefined) {
      hasAnyValues = true;
      internalValueResult.queueQps = this._queueQps;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigControllersConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientBurst = undefined;
      this._clientQps = undefined;
      this._concurrentReconciles = undefined;
      this._queueBurst = undefined;
      this._queueQps = undefined;
      this._replicas = undefined;
      this._resources.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientBurst = value.clientBurst;
      this._clientQps = value.clientQps;
      this._concurrentReconciles = value.concurrentReconciles;
      this._queueBurst = value.queueBurst;
      this._queueQps = value.queueQps;
      this._replicas = value.replicas;
      this._resources.internalValue = value.resources;
    }
  }

  // client_burst - computed: false, optional: true, required: false
  private _clientBurst?: number; 
  public get clientBurst() {
    return this.getNumberAttribute('client_burst');
  }
  public set clientBurst(value: number) {
    this._clientBurst = value;
  }
  public resetClientBurst() {
    this._clientBurst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientBurstInput() {
    return this._clientBurst;
  }

  // client_qps - computed: false, optional: true, required: false
  private _clientQps?: number; 
  public get clientQps() {
    return this.getNumberAttribute('client_qps');
  }
  public set clientQps(value: number) {
    this._clientQps = value;
  }
  public resetClientQps() {
    this._clientQps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientQpsInput() {
    return this._clientQps;
  }

  // concurrent_reconciles - computed: false, optional: true, required: false
  private _concurrentReconciles?: number; 
  public get concurrentReconciles() {
    return this.getNumberAttribute('concurrent_reconciles');
  }
  public set concurrentReconciles(value: number) {
    this._concurrentReconciles = value;
  }
  public resetConcurrentReconciles() {
    this._concurrentReconciles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrentReconcilesInput() {
    return this._concurrentReconciles;
  }

  // queue_burst - computed: false, optional: true, required: false
  private _queueBurst?: number; 
  public get queueBurst() {
    return this.getNumberAttribute('queue_burst');
  }
  public set queueBurst(value: number) {
    this._queueBurst = value;
  }
  public resetQueueBurst() {
    this._queueBurst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueBurstInput() {
    return this._queueBurst;
  }

  // queue_qps - computed: false, optional: true, required: false
  private _queueQps?: number; 
  public get queueQps() {
    return this.getNumberAttribute('queue_qps');
  }
  public set queueQps(value: number) {
    this._queueQps = value;
  }
  public resetQueueQps() {
    this._queueQps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueQpsInput() {
    return this._queueQps;
  }

  // replicas - computed: false, optional: true, required: false
  private _replicas?: number; 
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }
  public set replicas(value: number) {
    this._replicas = value;
  }
  public resetReplicas() {
    this._replicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigControllersConfigResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigControllersConfigResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }
}
export interface DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigControllers {
  /**
  * ControllerConfig contains the configuration for the controller specified by Name field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#config DataK8SHiveOpenshiftIoHiveConfigV1Manifest#config}
  */
  readonly config: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigControllersConfig;
  /**
  * Name specifies the name of the controller
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#name DataK8SHiveOpenshiftIoHiveConfigV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigControllersToTerraform(struct?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigControllers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigControllersConfigToTerraform(struct!.config),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigControllersToHclTerraform(struct?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigControllers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config: {
      value: dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigControllersConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigControllersConfig",
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

export class DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigControllersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigControllers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigControllers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._config.internalValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._config.internalValue = value.config;
      this._name = value.name;
    }
  }

  // config - computed: false, optional: false, required: true
  private _config = new DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigControllersConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigControllersConfig) {
    this._config.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
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

export class DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigControllersList extends cdktf.ComplexList {
  public internalValue? : DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigControllers[] | cdktf.IResolvable

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
  public get(index: number): DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigControllersOutputReference {
    return new DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigControllersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigDefaultResourcesClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#name DataK8SHiveOpenshiftIoHiveConfigV1Manifest#name}
  */
  readonly name: string;
  /**
  * Request is the name chosen for a request in the referenced claim. If empty, everything from the claim is made available, otherwise only the result of this request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#request DataK8SHiveOpenshiftIoHiveConfigV1Manifest#request}
  */
  readonly request?: string;
}

export function dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigDefaultResourcesClaimsToTerraform(struct?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigDefaultResourcesClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    request: cdktf.stringToTerraform(struct!.request),
  }
}


export function dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigDefaultResourcesClaimsToHclTerraform(struct?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigDefaultResourcesClaims | cdktf.IResolvable): any {
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
    request: {
      value: cdktf.stringToHclTerraform(struct!.request),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigDefaultResourcesClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigDefaultResourcesClaims | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._request !== undefined) {
      hasAnyValues = true;
      internalValueResult.request = this._request;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigDefaultResourcesClaims | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._request = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._request = value.request;
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

  // request - computed: false, optional: true, required: false
  private _request?: string; 
  public get request() {
    return this.getStringAttribute('request');
  }
  public set request(value: string) {
    this._request = value;
  }
  public resetRequest() {
    this._request = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestInput() {
    return this._request;
  }
}

export class DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigDefaultResourcesClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigDefaultResourcesClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigDefaultResourcesClaimsOutputReference {
    return new DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigDefaultResourcesClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigDefaultResources {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#claims DataK8SHiveOpenshiftIoHiveConfigV1Manifest#claims}
  */
  readonly claims?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigDefaultResourcesClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#limits DataK8SHiveOpenshiftIoHiveConfigV1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#requests DataK8SHiveOpenshiftIoHiveConfigV1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigDefaultResourcesToTerraform(struct?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigDefaultResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigDefaultResourcesClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigDefaultResourcesToHclTerraform(struct?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigDefaultResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigDefaultResourcesClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigDefaultResourcesClaimsList",
    },
    limits: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.limits),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    requests: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.requests),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigDefaultResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigDefaultResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._claims?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.claims = this._claims?.internalValue;
    }
    if (this._limits !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits;
    }
    if (this._requests !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigDefaultResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._claims.internalValue = undefined;
      this._limits = undefined;
      this._requests = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._claims.internalValue = value.claims;
      this._limits = value.limits;
      this._requests = value.requests;
    }
  }

  // claims - computed: false, optional: true, required: false
  private _claims = new DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigDefaultResourcesClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigDefaultResourcesClaims[] | cdktf.IResolvable) {
    this._claims.internalValue = value;
  }
  public resetClaims() {
    this._claims.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimsInput() {
    return this._claims.internalValue;
  }

  // limits - computed: false, optional: true, required: false
  private _limits?: { [key: string]: string }; 
  public get limits() {
    return this.getStringMapAttribute('limits');
  }
  public set limits(value: { [key: string]: string }) {
    this._limits = value;
  }
  public resetLimits() {
    this._limits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits;
  }

  // requests - computed: false, optional: true, required: false
  private _requests?: { [key: string]: string }; 
  public get requests() {
    return this.getStringMapAttribute('requests');
  }
  public set requests(value: { [key: string]: string }) {
    this._requests = value;
  }
  public resetRequests() {
    this._requests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests;
  }
}
export interface DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigDefault {
  /**
  * ClientBurst specifies client rate limiter burst for a controller
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#client_burst DataK8SHiveOpenshiftIoHiveConfigV1Manifest#client_burst}
  */
  readonly clientBurst?: number;
  /**
  * ClientQPS specifies client rate limiter QPS for a controller
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#client_qps DataK8SHiveOpenshiftIoHiveConfigV1Manifest#client_qps}
  */
  readonly clientQps?: number;
  /**
  * ConcurrentReconciles specifies number of concurrent reconciles for a controller
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#concurrent_reconciles DataK8SHiveOpenshiftIoHiveConfigV1Manifest#concurrent_reconciles}
  */
  readonly concurrentReconciles?: number;
  /**
  * QueueBurst specifies workqueue rate limiter burst for a controller
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#queue_burst DataK8SHiveOpenshiftIoHiveConfigV1Manifest#queue_burst}
  */
  readonly queueBurst?: number;
  /**
  * QueueQPS specifies workqueue rate limiter QPS for a controller
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#queue_qps DataK8SHiveOpenshiftIoHiveConfigV1Manifest#queue_qps}
  */
  readonly queueQps?: number;
  /**
  * Replicas specifies the number of replicas the specific controller pod should use. This is ONLY for controllers that have been split out into their own pods. This is ignored for all others.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#replicas DataK8SHiveOpenshiftIoHiveConfigV1Manifest#replicas}
  */
  readonly replicas?: number;
  /**
  * Resources describes the compute resource requirements of the controller container. This is ONLY for controllers that have been split out into their own pods. This is ignored for all others.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#resources DataK8SHiveOpenshiftIoHiveConfigV1Manifest#resources}
  */
  readonly resources?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigDefaultResources;
}

export function dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigDefaultToTerraform(struct?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigDefault | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_burst: cdktf.numberToTerraform(struct!.clientBurst),
    client_qps: cdktf.numberToTerraform(struct!.clientQps),
    concurrent_reconciles: cdktf.numberToTerraform(struct!.concurrentReconciles),
    queue_burst: cdktf.numberToTerraform(struct!.queueBurst),
    queue_qps: cdktf.numberToTerraform(struct!.queueQps),
    replicas: cdktf.numberToTerraform(struct!.replicas),
    resources: dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigDefaultResourcesToTerraform(struct!.resources),
  }
}


export function dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigDefaultToHclTerraform(struct?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigDefault | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_burst: {
      value: cdktf.numberToHclTerraform(struct!.clientBurst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_qps: {
      value: cdktf.numberToHclTerraform(struct!.clientQps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    concurrent_reconciles: {
      value: cdktf.numberToHclTerraform(struct!.concurrentReconciles),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    queue_burst: {
      value: cdktf.numberToHclTerraform(struct!.queueBurst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    queue_qps: {
      value: cdktf.numberToHclTerraform(struct!.queueQps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resources: {
      value: dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigDefaultResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigDefaultResources",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigDefaultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigDefault | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientBurst !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientBurst = this._clientBurst;
    }
    if (this._clientQps !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientQps = this._clientQps;
    }
    if (this._concurrentReconciles !== undefined) {
      hasAnyValues = true;
      internalValueResult.concurrentReconciles = this._concurrentReconciles;
    }
    if (this._queueBurst !== undefined) {
      hasAnyValues = true;
      internalValueResult.queueBurst = this._queueBurst;
    }
    if (this._queueQps !== undefined) {
      hasAnyValues = true;
      internalValueResult.queueQps = this._queueQps;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigDefault | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientBurst = undefined;
      this._clientQps = undefined;
      this._concurrentReconciles = undefined;
      this._queueBurst = undefined;
      this._queueQps = undefined;
      this._replicas = undefined;
      this._resources.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientBurst = value.clientBurst;
      this._clientQps = value.clientQps;
      this._concurrentReconciles = value.concurrentReconciles;
      this._queueBurst = value.queueBurst;
      this._queueQps = value.queueQps;
      this._replicas = value.replicas;
      this._resources.internalValue = value.resources;
    }
  }

  // client_burst - computed: false, optional: true, required: false
  private _clientBurst?: number; 
  public get clientBurst() {
    return this.getNumberAttribute('client_burst');
  }
  public set clientBurst(value: number) {
    this._clientBurst = value;
  }
  public resetClientBurst() {
    this._clientBurst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientBurstInput() {
    return this._clientBurst;
  }

  // client_qps - computed: false, optional: true, required: false
  private _clientQps?: number; 
  public get clientQps() {
    return this.getNumberAttribute('client_qps');
  }
  public set clientQps(value: number) {
    this._clientQps = value;
  }
  public resetClientQps() {
    this._clientQps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientQpsInput() {
    return this._clientQps;
  }

  // concurrent_reconciles - computed: false, optional: true, required: false
  private _concurrentReconciles?: number; 
  public get concurrentReconciles() {
    return this.getNumberAttribute('concurrent_reconciles');
  }
  public set concurrentReconciles(value: number) {
    this._concurrentReconciles = value;
  }
  public resetConcurrentReconciles() {
    this._concurrentReconciles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrentReconcilesInput() {
    return this._concurrentReconciles;
  }

  // queue_burst - computed: false, optional: true, required: false
  private _queueBurst?: number; 
  public get queueBurst() {
    return this.getNumberAttribute('queue_burst');
  }
  public set queueBurst(value: number) {
    this._queueBurst = value;
  }
  public resetQueueBurst() {
    this._queueBurst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueBurstInput() {
    return this._queueBurst;
  }

  // queue_qps - computed: false, optional: true, required: false
  private _queueQps?: number; 
  public get queueQps() {
    return this.getNumberAttribute('queue_qps');
  }
  public set queueQps(value: number) {
    this._queueQps = value;
  }
  public resetQueueQps() {
    this._queueQps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueQpsInput() {
    return this._queueQps;
  }

  // replicas - computed: false, optional: true, required: false
  private _replicas?: number; 
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }
  public set replicas(value: number) {
    this._replicas = value;
  }
  public resetReplicas() {
    this._replicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigDefaultResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigDefaultResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }
}
export interface DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfig {
  /**
  * Controllers contains a list of configurations for different controllers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#controllers DataK8SHiveOpenshiftIoHiveConfigV1Manifest#controllers}
  */
  readonly controllers?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigControllers[] | cdktf.IResolvable;
  /**
  * Default specifies default configuration for all the controllers, can be used to override following coded defaults default for concurrent reconciles is 5 default for client qps is 5 default for client burst is 10 default for queue qps is 10 default for queue burst is 100
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#default DataK8SHiveOpenshiftIoHiveConfigV1Manifest#default}
  */
  readonly default?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigDefault;
}

export function dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigToTerraform(struct?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    controllers: cdktf.listMapper(dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigControllersToTerraform, false)(struct!.controllers),
    default: dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigDefaultToTerraform(struct!.default),
  }
}


export function dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigToHclTerraform(struct?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    controllers: {
      value: cdktf.listMapperHcl(dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigControllersToHclTerraform, false)(struct!.controllers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigControllersList",
    },
    default: {
      value: dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigDefaultToHclTerraform(struct!.default),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigDefault",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._controllers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.controllers = this._controllers?.internalValue;
    }
    if (this._default?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._controllers.internalValue = undefined;
      this._default.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._controllers.internalValue = value.controllers;
      this._default.internalValue = value.default;
    }
  }

  // controllers - computed: false, optional: true, required: false
  private _controllers = new DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigControllersList(this, "controllers", false);
  public get controllers() {
    return this._controllers;
  }
  public putControllers(value: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigControllers[] | cdktf.IResolvable) {
    this._controllers.internalValue = value;
  }
  public resetControllers() {
    this._controllers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllersInput() {
    return this._controllers.internalValue;
  }

  // default - computed: false, optional: true, required: false
  private _default = new DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigDefaultOutputReference(this, "default");
  public get default() {
    return this._default;
  }
  public putDefault(value: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigDefault) {
    this._default.internalValue = value;
  }
  public resetDefault() {
    this._default.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default.internalValue;
  }
}
export interface DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecDeploymentConfigResourcesClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#name DataK8SHiveOpenshiftIoHiveConfigV1Manifest#name}
  */
  readonly name: string;
  /**
  * Request is the name chosen for a request in the referenced claim. If empty, everything from the claim is made available, otherwise only the result of this request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#request DataK8SHiveOpenshiftIoHiveConfigV1Manifest#request}
  */
  readonly request?: string;
}

export function dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecDeploymentConfigResourcesClaimsToTerraform(struct?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecDeploymentConfigResourcesClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    request: cdktf.stringToTerraform(struct!.request),
  }
}


export function dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecDeploymentConfigResourcesClaimsToHclTerraform(struct?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecDeploymentConfigResourcesClaims | cdktf.IResolvable): any {
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
    request: {
      value: cdktf.stringToHclTerraform(struct!.request),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecDeploymentConfigResourcesClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecDeploymentConfigResourcesClaims | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._request !== undefined) {
      hasAnyValues = true;
      internalValueResult.request = this._request;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecDeploymentConfigResourcesClaims | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._request = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._request = value.request;
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

  // request - computed: false, optional: true, required: false
  private _request?: string; 
  public get request() {
    return this.getStringAttribute('request');
  }
  public set request(value: string) {
    this._request = value;
  }
  public resetRequest() {
    this._request = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestInput() {
    return this._request;
  }
}

export class DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecDeploymentConfigResourcesClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecDeploymentConfigResourcesClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecDeploymentConfigResourcesClaimsOutputReference {
    return new DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecDeploymentConfigResourcesClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecDeploymentConfigResources {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#claims DataK8SHiveOpenshiftIoHiveConfigV1Manifest#claims}
  */
  readonly claims?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecDeploymentConfigResourcesClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#limits DataK8SHiveOpenshiftIoHiveConfigV1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#requests DataK8SHiveOpenshiftIoHiveConfigV1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecDeploymentConfigResourcesToTerraform(struct?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecDeploymentConfigResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecDeploymentConfigResourcesClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecDeploymentConfigResourcesToHclTerraform(struct?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecDeploymentConfigResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecDeploymentConfigResourcesClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecDeploymentConfigResourcesClaimsList",
    },
    limits: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.limits),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    requests: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.requests),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecDeploymentConfigResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecDeploymentConfigResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._claims?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.claims = this._claims?.internalValue;
    }
    if (this._limits !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits;
    }
    if (this._requests !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecDeploymentConfigResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._claims.internalValue = undefined;
      this._limits = undefined;
      this._requests = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._claims.internalValue = value.claims;
      this._limits = value.limits;
      this._requests = value.requests;
    }
  }

  // claims - computed: false, optional: true, required: false
  private _claims = new DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecDeploymentConfigResourcesClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecDeploymentConfigResourcesClaims[] | cdktf.IResolvable) {
    this._claims.internalValue = value;
  }
  public resetClaims() {
    this._claims.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimsInput() {
    return this._claims.internalValue;
  }

  // limits - computed: false, optional: true, required: false
  private _limits?: { [key: string]: string }; 
  public get limits() {
    return this.getStringMapAttribute('limits');
  }
  public set limits(value: { [key: string]: string }) {
    this._limits = value;
  }
  public resetLimits() {
    this._limits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits;
  }

  // requests - computed: false, optional: true, required: false
  private _requests?: { [key: string]: string }; 
  public get requests() {
    return this.getStringMapAttribute('requests');
  }
  public set requests(value: { [key: string]: string }) {
    this._requests = value;
  }
  public resetRequests() {
    this._requests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests;
  }
}
export interface DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecDeploymentConfig {
  /**
  * DeploymentName is the name of one of the Deployments/StatefulSets managed by hive-operator. NOTE: At this time each deployment has only one container. In the future, we may provide a way to specify which container this DeploymentConfig will be applied to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#deployment_name DataK8SHiveOpenshiftIoHiveConfigV1Manifest#deployment_name}
  */
  readonly deploymentName: string;
  /**
  * Resources allows customization of the resource (memory, CPU, etc.) limits and requests used by containers in the Deployment/StatefulSet named by DeploymentName.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#resources DataK8SHiveOpenshiftIoHiveConfigV1Manifest#resources}
  */
  readonly resources?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecDeploymentConfigResources;
}

export function dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecDeploymentConfigToTerraform(struct?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecDeploymentConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deployment_name: cdktf.stringToTerraform(struct!.deploymentName),
    resources: dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecDeploymentConfigResourcesToTerraform(struct!.resources),
  }
}


export function dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecDeploymentConfigToHclTerraform(struct?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecDeploymentConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deployment_name: {
      value: cdktf.stringToHclTerraform(struct!.deploymentName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resources: {
      value: dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecDeploymentConfigResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecDeploymentConfigResources",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecDeploymentConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecDeploymentConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deploymentName !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploymentName = this._deploymentName;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecDeploymentConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deploymentName = undefined;
      this._resources.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deploymentName = value.deploymentName;
      this._resources.internalValue = value.resources;
    }
  }

  // deployment_name - computed: false, optional: false, required: true
  private _deploymentName?: string; 
  public get deploymentName() {
    return this.getStringAttribute('deployment_name');
  }
  public set deploymentName(value: string) {
    this._deploymentName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentNameInput() {
    return this._deploymentName;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecDeploymentConfigResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecDeploymentConfigResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }
}

export class DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecDeploymentConfigList extends cdktf.ComplexList {
  public internalValue? : DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecDeploymentConfig[] | cdktf.IResolvable

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
  public get(index: number): DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecDeploymentConfigOutputReference {
    return new DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecDeploymentConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecFailedProvisionConfigAwsCredentialsSecretRef {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#name DataK8SHiveOpenshiftIoHiveConfigV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecFailedProvisionConfigAwsCredentialsSecretRefToTerraform(struct?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecFailedProvisionConfigAwsCredentialsSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecFailedProvisionConfigAwsCredentialsSecretRefToHclTerraform(struct?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecFailedProvisionConfigAwsCredentialsSecretRef | cdktf.IResolvable): any {
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

export class DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecFailedProvisionConfigAwsCredentialsSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecFailedProvisionConfigAwsCredentialsSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecFailedProvisionConfigAwsCredentialsSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecFailedProvisionConfigAws {
  /**
  * Bucket is the S3 bucket to store the logs in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#bucket DataK8SHiveOpenshiftIoHiveConfigV1Manifest#bucket}
  */
  readonly bucket?: string;
  /**
  * CredentialsSecretRef references a secret in the TargetNamespace that will be used to authenticate with AWS S3. It will need permission to upload logs to S3. Secret should have keys named aws_access_key_id and aws_secret_access_key that contain the AWS credentials. Example Secret: data: aws_access_key_id: minio aws_secret_access_key: minio123
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#credentials_secret_ref DataK8SHiveOpenshiftIoHiveConfigV1Manifest#credentials_secret_ref}
  */
  readonly credentialsSecretRef: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecFailedProvisionConfigAwsCredentialsSecretRef;
  /**
  * Region is the AWS region to use for S3 operations. This defaults to us-east-1. For AWS China, use cn-northwest-1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#region DataK8SHiveOpenshiftIoHiveConfigV1Manifest#region}
  */
  readonly region?: string;
  /**
  * ServiceEndpoint is the url to connect to an S3 compatible provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#service_endpoint DataK8SHiveOpenshiftIoHiveConfigV1Manifest#service_endpoint}
  */
  readonly serviceEndpoint?: string;
}

export function dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecFailedProvisionConfigAwsToTerraform(struct?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecFailedProvisionConfigAws | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    credentials_secret_ref: dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecFailedProvisionConfigAwsCredentialsSecretRefToTerraform(struct!.credentialsSecretRef),
    region: cdktf.stringToTerraform(struct!.region),
    service_endpoint: cdktf.stringToTerraform(struct!.serviceEndpoint),
  }
}


export function dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecFailedProvisionConfigAwsToHclTerraform(struct?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecFailedProvisionConfigAws | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credentials_secret_ref: {
      value: dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecFailedProvisionConfigAwsCredentialsSecretRefToHclTerraform(struct!.credentialsSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecFailedProvisionConfigAwsCredentialsSecretRef",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.serviceEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecFailedProvisionConfigAwsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecFailedProvisionConfigAws | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._credentialsSecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialsSecretRef = this._credentialsSecretRef?.internalValue;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._serviceEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceEndpoint = this._serviceEndpoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecFailedProvisionConfigAws | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucket = undefined;
      this._credentialsSecretRef.internalValue = undefined;
      this._region = undefined;
      this._serviceEndpoint = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucket = value.bucket;
      this._credentialsSecretRef.internalValue = value.credentialsSecretRef;
      this._region = value.region;
      this._serviceEndpoint = value.serviceEndpoint;
    }
  }

  // bucket - computed: false, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // credentials_secret_ref - computed: false, optional: false, required: true
  private _credentialsSecretRef = new DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecFailedProvisionConfigAwsCredentialsSecretRefOutputReference(this, "credentials_secret_ref");
  public get credentialsSecretRef() {
    return this._credentialsSecretRef;
  }
  public putCredentialsSecretRef(value: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecFailedProvisionConfigAwsCredentialsSecretRef) {
    this._credentialsSecretRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsSecretRefInput() {
    return this._credentialsSecretRef.internalValue;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // service_endpoint - computed: false, optional: true, required: false
  private _serviceEndpoint?: string; 
  public get serviceEndpoint() {
    return this.getStringAttribute('service_endpoint');
  }
  public set serviceEndpoint(value: string) {
    this._serviceEndpoint = value;
  }
  public resetServiceEndpoint() {
    this._serviceEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceEndpointInput() {
    return this._serviceEndpoint;
  }
}
export interface DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecFailedProvisionConfig {
  /**
  * FailedProvisionAWSConfig contains AWS-specific info to upload log files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#aws DataK8SHiveOpenshiftIoHiveConfigV1Manifest#aws}
  */
  readonly aws?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecFailedProvisionConfigAws;
  /**
  * RetryReasons is a list of installFailingReason strings from the [additional-]install-log-regexes ConfigMaps. If specified, Hive will only retry a failed installation if it results in one of the listed reasons. If omitted (not the same thing as empty!), Hive will retry regardless of the failure reason. (The total number of install attempts is still constrained by ClusterDeployment.Spec.InstallAttemptsLimit.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#retry_reasons DataK8SHiveOpenshiftIoHiveConfigV1Manifest#retry_reasons}
  */
  readonly retryReasons?: string[];
  /**
  * DEPRECATED: This flag is no longer respected and will be removed in the future.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#skip_gather_logs DataK8SHiveOpenshiftIoHiveConfigV1Manifest#skip_gather_logs}
  */
  readonly skipGatherLogs?: boolean | cdktf.IResolvable;
}

export function dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecFailedProvisionConfigToTerraform(struct?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecFailedProvisionConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws: dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecFailedProvisionConfigAwsToTerraform(struct!.aws),
    retry_reasons: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.retryReasons),
    skip_gather_logs: cdktf.booleanToTerraform(struct!.skipGatherLogs),
  }
}


export function dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecFailedProvisionConfigToHclTerraform(struct?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecFailedProvisionConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws: {
      value: dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecFailedProvisionConfigAwsToHclTerraform(struct!.aws),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecFailedProvisionConfigAws",
    },
    retry_reasons: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.retryReasons),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    skip_gather_logs: {
      value: cdktf.booleanToHclTerraform(struct!.skipGatherLogs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecFailedProvisionConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecFailedProvisionConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aws?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aws = this._aws?.internalValue;
    }
    if (this._retryReasons !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryReasons = this._retryReasons;
    }
    if (this._skipGatherLogs !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipGatherLogs = this._skipGatherLogs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecFailedProvisionConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aws.internalValue = undefined;
      this._retryReasons = undefined;
      this._skipGatherLogs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aws.internalValue = value.aws;
      this._retryReasons = value.retryReasons;
      this._skipGatherLogs = value.skipGatherLogs;
    }
  }

  // aws - computed: false, optional: true, required: false
  private _aws = new DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecFailedProvisionConfigAwsOutputReference(this, "aws");
  public get aws() {
    return this._aws;
  }
  public putAws(value: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecFailedProvisionConfigAws) {
    this._aws.internalValue = value;
  }
  public resetAws() {
    this._aws.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsInput() {
    return this._aws.internalValue;
  }

  // retry_reasons - computed: false, optional: true, required: false
  private _retryReasons?: string[]; 
  public get retryReasons() {
    return this.getListAttribute('retry_reasons');
  }
  public set retryReasons(value: string[]) {
    this._retryReasons = value;
  }
  public resetRetryReasons() {
    this._retryReasons = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryReasonsInput() {
    return this._retryReasons;
  }

  // skip_gather_logs - computed: false, optional: true, required: false
  private _skipGatherLogs?: boolean | cdktf.IResolvable; 
  public get skipGatherLogs() {
    return this.getBooleanAttribute('skip_gather_logs');
  }
  public set skipGatherLogs(value: boolean | cdktf.IResolvable) {
    this._skipGatherLogs = value;
  }
  public resetSkipGatherLogs() {
    this._skipGatherLogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipGatherLogsInput() {
    return this._skipGatherLogs;
  }
}
export interface DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecFeatureGatesCustom {
  /**
  * enabled is a list of all feature gates that you want to force on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#enabled DataK8SHiveOpenshiftIoHiveConfigV1Manifest#enabled}
  */
  readonly enabled?: string[];
}

export function dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecFeatureGatesCustomToTerraform(struct?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecFeatureGatesCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.enabled),
  }
}


export function dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecFeatureGatesCustomToHclTerraform(struct?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecFeatureGatesCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.enabled),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecFeatureGatesCustomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecFeatureGatesCustom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecFeatureGatesCustom | cdktf.IResolvable | undefined) {
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
  private _enabled?: string[]; 
  public get enabled() {
    return this.getListAttribute('enabled');
  }
  public set enabled(value: string[]) {
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
export interface DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecFeatureGates {
  /**
  * custom allows the enabling or disabling of any feature. Because of its nature, this setting cannot be validated. If you have any typos or accidentally apply invalid combinations might cause unknown behavior. featureSet must equal 'Custom' must be set to use this field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#custom DataK8SHiveOpenshiftIoHiveConfigV1Manifest#custom}
  */
  readonly custom?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecFeatureGatesCustom;
  /**
  * featureSet changes the list of features in the cluster. The default is empty. Be very careful adjusting this setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#feature_set DataK8SHiveOpenshiftIoHiveConfigV1Manifest#feature_set}
  */
  readonly featureSet?: string;
}

export function dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecFeatureGatesToTerraform(struct?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecFeatureGates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom: dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecFeatureGatesCustomToTerraform(struct!.custom),
    feature_set: cdktf.stringToTerraform(struct!.featureSet),
  }
}


export function dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecFeatureGatesToHclTerraform(struct?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecFeatureGates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom: {
      value: dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecFeatureGatesCustomToHclTerraform(struct!.custom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecFeatureGatesCustom",
    },
    feature_set: {
      value: cdktf.stringToHclTerraform(struct!.featureSet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecFeatureGatesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecFeatureGates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._custom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom = this._custom?.internalValue;
    }
    if (this._featureSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.featureSet = this._featureSet;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecFeatureGates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._custom.internalValue = undefined;
      this._featureSet = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._custom.internalValue = value.custom;
      this._featureSet = value.featureSet;
    }
  }

  // custom - computed: false, optional: true, required: false
  private _custom = new DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecFeatureGatesCustomOutputReference(this, "custom");
  public get custom() {
    return this._custom;
  }
  public putCustom(value: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecFeatureGatesCustom) {
    this._custom.internalValue = value;
  }
  public resetCustom() {
    this._custom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInput() {
    return this._custom.internalValue;
  }

  // feature_set - computed: false, optional: true, required: false
  private _featureSet?: string; 
  public get featureSet() {
    return this.getStringAttribute('feature_set');
  }
  public set featureSet(value: string) {
    this._featureSet = value;
  }
  public resetFeatureSet() {
    this._featureSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featureSetInput() {
    return this._featureSet;
  }
}
export interface DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecGlobalPullSecretRef {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#name DataK8SHiveOpenshiftIoHiveConfigV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecGlobalPullSecretRefToTerraform(struct?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecGlobalPullSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecGlobalPullSecretRefToHclTerraform(struct?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecGlobalPullSecretRef | cdktf.IResolvable): any {
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

export class DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecGlobalPullSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecGlobalPullSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecGlobalPullSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecManagedDomainsAwsCredentialsSecretRef {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#name DataK8SHiveOpenshiftIoHiveConfigV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecManagedDomainsAwsCredentialsSecretRefToTerraform(struct?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecManagedDomainsAwsCredentialsSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecManagedDomainsAwsCredentialsSecretRefToHclTerraform(struct?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecManagedDomainsAwsCredentialsSecretRef | cdktf.IResolvable): any {
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

export class DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecManagedDomainsAwsCredentialsSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecManagedDomainsAwsCredentialsSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecManagedDomainsAwsCredentialsSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecManagedDomainsAws {
  /**
  * CredentialsSecretRef references a secret in the TargetNamespace that will be used to authenticate with AWS Route53. It will need permission to manage entries for the domain listed in the parent ManageDNSConfig object. Secret should have AWS keys named 'aws_access_key_id' and 'aws_secret_access_key'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#credentials_secret_ref DataK8SHiveOpenshiftIoHiveConfigV1Manifest#credentials_secret_ref}
  */
  readonly credentialsSecretRef: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecManagedDomainsAwsCredentialsSecretRef;
  /**
  * Region is the AWS region to use for route53 operations. This defaults to us-east-1. For AWS China, use cn-northwest-1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#region DataK8SHiveOpenshiftIoHiveConfigV1Manifest#region}
  */
  readonly region?: string;
}

export function dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecManagedDomainsAwsToTerraform(struct?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecManagedDomainsAws | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credentials_secret_ref: dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecManagedDomainsAwsCredentialsSecretRefToTerraform(struct!.credentialsSecretRef),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecManagedDomainsAwsToHclTerraform(struct?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecManagedDomainsAws | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    credentials_secret_ref: {
      value: dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecManagedDomainsAwsCredentialsSecretRefToHclTerraform(struct!.credentialsSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecManagedDomainsAwsCredentialsSecretRef",
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

export class DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecManagedDomainsAwsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecManagedDomainsAws | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecManagedDomainsAws | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._credentialsSecretRef.internalValue = value.credentialsSecretRef;
      this._region = value.region;
    }
  }

  // credentials_secret_ref - computed: false, optional: false, required: true
  private _credentialsSecretRef = new DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecManagedDomainsAwsCredentialsSecretRefOutputReference(this, "credentials_secret_ref");
  public get credentialsSecretRef() {
    return this._credentialsSecretRef;
  }
  public putCredentialsSecretRef(value: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecManagedDomainsAwsCredentialsSecretRef) {
    this._credentialsSecretRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsSecretRefInput() {
    return this._credentialsSecretRef.internalValue;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}
export interface DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecManagedDomainsAzureCredentialsSecretRef {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#name DataK8SHiveOpenshiftIoHiveConfigV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecManagedDomainsAzureCredentialsSecretRefToTerraform(struct?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecManagedDomainsAzureCredentialsSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecManagedDomainsAzureCredentialsSecretRefToHclTerraform(struct?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecManagedDomainsAzureCredentialsSecretRef | cdktf.IResolvable): any {
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

export class DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecManagedDomainsAzureCredentialsSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecManagedDomainsAzureCredentialsSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecManagedDomainsAzureCredentialsSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecManagedDomainsAzure {
  /**
  * CloudName is the name of the Azure cloud environment which can be used to configure the Azure SDK with the appropriate Azure API endpoints. If empty, the value is equal to 'AzurePublicCloud'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#cloud_name DataK8SHiveOpenshiftIoHiveConfigV1Manifest#cloud_name}
  */
  readonly cloudName?: string;
  /**
  * CredentialsSecretRef references a secret in the TargetNamespace that will be used to authenticate with Azure DNS. It wil need permission to manage entries in each of the managed domains listed in the parent ManageDNSConfig object. Secret should have a key named 'osServicePrincipal.json'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#credentials_secret_ref DataK8SHiveOpenshiftIoHiveConfigV1Manifest#credentials_secret_ref}
  */
  readonly credentialsSecretRef: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecManagedDomainsAzureCredentialsSecretRef;
  /**
  * ResourceGroupName specifies the Azure resource group containing the DNS zones for the domains being managed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#resource_group_name DataK8SHiveOpenshiftIoHiveConfigV1Manifest#resource_group_name}
  */
  readonly resourceGroupName: string;
}

export function dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecManagedDomainsAzureToTerraform(struct?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecManagedDomainsAzure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_name: cdktf.stringToTerraform(struct!.cloudName),
    credentials_secret_ref: dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecManagedDomainsAzureCredentialsSecretRefToTerraform(struct!.credentialsSecretRef),
    resource_group_name: cdktf.stringToTerraform(struct!.resourceGroupName),
  }
}


export function dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecManagedDomainsAzureToHclTerraform(struct?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecManagedDomainsAzure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud_name: {
      value: cdktf.stringToHclTerraform(struct!.cloudName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credentials_secret_ref: {
      value: dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecManagedDomainsAzureCredentialsSecretRefToHclTerraform(struct!.credentialsSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecManagedDomainsAzureCredentialsSecretRef",
    },
    resource_group_name: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecManagedDomainsAzureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecManagedDomainsAzure | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudName = this._cloudName;
    }
    if (this._credentialsSecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialsSecretRef = this._credentialsSecretRef?.internalValue;
    }
    if (this._resourceGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroupName = this._resourceGroupName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecManagedDomainsAzure | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cloudName = undefined;
      this._credentialsSecretRef.internalValue = undefined;
      this._resourceGroupName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cloudName = value.cloudName;
      this._credentialsSecretRef.internalValue = value.credentialsSecretRef;
      this._resourceGroupName = value.resourceGroupName;
    }
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
  private _credentialsSecretRef = new DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecManagedDomainsAzureCredentialsSecretRefOutputReference(this, "credentials_secret_ref");
  public get credentialsSecretRef() {
    return this._credentialsSecretRef;
  }
  public putCredentialsSecretRef(value: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecManagedDomainsAzureCredentialsSecretRef) {
    this._credentialsSecretRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsSecretRefInput() {
    return this._credentialsSecretRef.internalValue;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName?: string; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName;
  }
}
export interface DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecManagedDomainsGcpCredentialsSecretRef {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#name DataK8SHiveOpenshiftIoHiveConfigV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecManagedDomainsGcpCredentialsSecretRefToTerraform(struct?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecManagedDomainsGcpCredentialsSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecManagedDomainsGcpCredentialsSecretRefToHclTerraform(struct?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecManagedDomainsGcpCredentialsSecretRef | cdktf.IResolvable): any {
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

export class DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecManagedDomainsGcpCredentialsSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecManagedDomainsGcpCredentialsSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecManagedDomainsGcpCredentialsSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecManagedDomainsGcp {
  /**
  * CredentialsSecretRef references a secret in the TargetNamespace that will be used to authenticate with GCP DNS. It will need permission to manage entries in each of the managed domains for this cluster. listed in the parent ManageDNSConfig object. Secret should have a key named 'osServiceAccount.json'. The credentials must specify the project to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#credentials_secret_ref DataK8SHiveOpenshiftIoHiveConfigV1Manifest#credentials_secret_ref}
  */
  readonly credentialsSecretRef: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecManagedDomainsGcpCredentialsSecretRef;
}

export function dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecManagedDomainsGcpToTerraform(struct?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecManagedDomainsGcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credentials_secret_ref: dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecManagedDomainsGcpCredentialsSecretRefToTerraform(struct!.credentialsSecretRef),
  }
}


export function dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecManagedDomainsGcpToHclTerraform(struct?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecManagedDomainsGcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    credentials_secret_ref: {
      value: dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecManagedDomainsGcpCredentialsSecretRefToHclTerraform(struct!.credentialsSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecManagedDomainsGcpCredentialsSecretRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecManagedDomainsGcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecManagedDomainsGcp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credentialsSecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialsSecretRef = this._credentialsSecretRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecManagedDomainsGcp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._credentialsSecretRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._credentialsSecretRef.internalValue = value.credentialsSecretRef;
    }
  }

  // credentials_secret_ref - computed: false, optional: false, required: true
  private _credentialsSecretRef = new DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecManagedDomainsGcpCredentialsSecretRefOutputReference(this, "credentials_secret_ref");
  public get credentialsSecretRef() {
    return this._credentialsSecretRef;
  }
  public putCredentialsSecretRef(value: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecManagedDomainsGcpCredentialsSecretRef) {
    this._credentialsSecretRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsSecretRefInput() {
    return this._credentialsSecretRef.internalValue;
  }
}
export interface DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecManagedDomains {
  /**
  * AWS contains AWS-specific settings for external DNS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#aws DataK8SHiveOpenshiftIoHiveConfigV1Manifest#aws}
  */
  readonly aws?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecManagedDomainsAws;
  /**
  * Azure contains Azure-specific settings for external DNS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#azure DataK8SHiveOpenshiftIoHiveConfigV1Manifest#azure}
  */
  readonly azure?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecManagedDomainsAzure;
  /**
  * Domains is the list of domains that hive will be managing entries for with the provided credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#domains DataK8SHiveOpenshiftIoHiveConfigV1Manifest#domains}
  */
  readonly domains: string[];
  /**
  * GCP contains GCP-specific settings for external DNS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#gcp DataK8SHiveOpenshiftIoHiveConfigV1Manifest#gcp}
  */
  readonly gcp?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecManagedDomainsGcp;
}

export function dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecManagedDomainsToTerraform(struct?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecManagedDomains | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws: dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecManagedDomainsAwsToTerraform(struct!.aws),
    azure: dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecManagedDomainsAzureToTerraform(struct!.azure),
    domains: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.domains),
    gcp: dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecManagedDomainsGcpToTerraform(struct!.gcp),
  }
}


export function dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecManagedDomainsToHclTerraform(struct?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecManagedDomains | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws: {
      value: dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecManagedDomainsAwsToHclTerraform(struct!.aws),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecManagedDomainsAws",
    },
    azure: {
      value: dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecManagedDomainsAzureToHclTerraform(struct!.azure),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecManagedDomainsAzure",
    },
    domains: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.domains),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    gcp: {
      value: dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecManagedDomainsGcpToHclTerraform(struct!.gcp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecManagedDomainsGcp",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecManagedDomainsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecManagedDomains | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aws?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aws = this._aws?.internalValue;
    }
    if (this._azure?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azure = this._azure?.internalValue;
    }
    if (this._domains !== undefined) {
      hasAnyValues = true;
      internalValueResult.domains = this._domains;
    }
    if (this._gcp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcp = this._gcp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecManagedDomains | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aws.internalValue = undefined;
      this._azure.internalValue = undefined;
      this._domains = undefined;
      this._gcp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aws.internalValue = value.aws;
      this._azure.internalValue = value.azure;
      this._domains = value.domains;
      this._gcp.internalValue = value.gcp;
    }
  }

  // aws - computed: false, optional: true, required: false
  private _aws = new DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecManagedDomainsAwsOutputReference(this, "aws");
  public get aws() {
    return this._aws;
  }
  public putAws(value: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecManagedDomainsAws) {
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
  private _azure = new DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecManagedDomainsAzureOutputReference(this, "azure");
  public get azure() {
    return this._azure;
  }
  public putAzure(value: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecManagedDomainsAzure) {
    this._azure.internalValue = value;
  }
  public resetAzure() {
    this._azure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureInput() {
    return this._azure.internalValue;
  }

  // domains - computed: false, optional: false, required: true
  private _domains?: string[]; 
  public get domains() {
    return this.getListAttribute('domains');
  }
  public set domains(value: string[]) {
    this._domains = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainsInput() {
    return this._domains;
  }

  // gcp - computed: false, optional: true, required: false
  private _gcp = new DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecManagedDomainsGcpOutputReference(this, "gcp");
  public get gcp() {
    return this._gcp;
  }
  public putGcp(value: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecManagedDomainsGcp) {
    this._gcp.internalValue = value;
  }
  public resetGcp() {
    this._gcp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpInput() {
    return this._gcp.internalValue;
  }
}

export class DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecManagedDomainsList extends cdktf.ComplexList {
  public internalValue? : DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecManagedDomains[] | cdktf.IResolvable

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
  public get(index: number): DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecManagedDomainsOutputReference {
    return new DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecManagedDomainsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecMetricsConfigMetricsWithDuration {
  /**
  * Duration is the minimum time taken - the relevant metric will be logged only if the value reported by that metric is more than the time mentioned here. For example, if a user opts-in for current clusters stopping and mentions 1 hour here, only the clusters stopping for more than an hour will be reported. This is a Duration value; see https://pkg.go.dev/time#ParseDuration for accepted formats.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#duration DataK8SHiveOpenshiftIoHiveConfigV1Manifest#duration}
  */
  readonly duration: string;
  /**
  * Name of the metric. It will correspond to an optional relevant metric in hive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#name DataK8SHiveOpenshiftIoHiveConfigV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecMetricsConfigMetricsWithDurationToTerraform(struct?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecMetricsConfigMetricsWithDuration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.stringToTerraform(struct!.duration),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecMetricsConfigMetricsWithDurationToHclTerraform(struct?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecMetricsConfigMetricsWithDuration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.stringToHclTerraform(struct!.duration),
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

export class DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecMetricsConfigMetricsWithDurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecMetricsConfigMetricsWithDuration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecMetricsConfigMetricsWithDuration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._duration = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._duration = value.duration;
      this._name = value.name;
    }
  }

  // duration - computed: false, optional: false, required: true
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
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

export class DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecMetricsConfigMetricsWithDurationList extends cdktf.ComplexList {
  public internalValue? : DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecMetricsConfigMetricsWithDuration[] | cdktf.IResolvable

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
  public get(index: number): DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecMetricsConfigMetricsWithDurationOutputReference {
    return new DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecMetricsConfigMetricsWithDurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecMetricsConfig {
  /**
  * AdditionalClusterDeploymentLabels allows configuration of additional labels to be applied to certain metrics. The keys can be any string value suitable for a metric label (see https://prometheus.io/docs/concepts/data_model/#metric-names-and-labels). The values can be any ClusterDeployment label key (from metadata.labels). When observing an affected metric, hive will label it with the specified metric key, and copy the value from the specified ClusterDeployment label. For example, including {'ocp_major_version': 'hive.openshift.io/version-major'} will cause affected metrics to include a label key ocp_major_version with the value from the hive.openshift.io/version-major ClusterDeployment label -- e.g. '4'. NOTE: Avoid ClusterDeployment labels whose values are unbounded, such as those representing cluster names or IDs, as these will cause your prometheus database to grow indefinitely. Affected metrics are those whose type implements the metricsWithDynamicLabels interface found in pkg/controller/metrics/metrics_with_dynamic_labels.go
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#additional_cluster_deployment_labels DataK8SHiveOpenshiftIoHiveConfigV1Manifest#additional_cluster_deployment_labels}
  */
  readonly additionalClusterDeploymentLabels?: { [key: string]: string };
  /**
  * Optional metrics and their configurations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#metrics_with_duration DataK8SHiveOpenshiftIoHiveConfigV1Manifest#metrics_with_duration}
  */
  readonly metricsWithDuration?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecMetricsConfigMetricsWithDuration[] | cdktf.IResolvable;
}

export function dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecMetricsConfigToTerraform(struct?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecMetricsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_cluster_deployment_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.additionalClusterDeploymentLabels),
    metrics_with_duration: cdktf.listMapper(dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecMetricsConfigMetricsWithDurationToTerraform, false)(struct!.metricsWithDuration),
  }
}


export function dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecMetricsConfigToHclTerraform(struct?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecMetricsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_cluster_deployment_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.additionalClusterDeploymentLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    metrics_with_duration: {
      value: cdktf.listMapperHcl(dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecMetricsConfigMetricsWithDurationToHclTerraform, false)(struct!.metricsWithDuration),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecMetricsConfigMetricsWithDurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecMetricsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecMetricsConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalClusterDeploymentLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalClusterDeploymentLabels = this._additionalClusterDeploymentLabels;
    }
    if (this._metricsWithDuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsWithDuration = this._metricsWithDuration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecMetricsConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalClusterDeploymentLabels = undefined;
      this._metricsWithDuration.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalClusterDeploymentLabels = value.additionalClusterDeploymentLabels;
      this._metricsWithDuration.internalValue = value.metricsWithDuration;
    }
  }

  // additional_cluster_deployment_labels - computed: false, optional: true, required: false
  private _additionalClusterDeploymentLabels?: { [key: string]: string }; 
  public get additionalClusterDeploymentLabels() {
    return this.getStringMapAttribute('additional_cluster_deployment_labels');
  }
  public set additionalClusterDeploymentLabels(value: { [key: string]: string }) {
    this._additionalClusterDeploymentLabels = value;
  }
  public resetAdditionalClusterDeploymentLabels() {
    this._additionalClusterDeploymentLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalClusterDeploymentLabelsInput() {
    return this._additionalClusterDeploymentLabels;
  }

  // metrics_with_duration - computed: false, optional: true, required: false
  private _metricsWithDuration = new DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecMetricsConfigMetricsWithDurationList(this, "metrics_with_duration", false);
  public get metricsWithDuration() {
    return this._metricsWithDuration;
  }
  public putMetricsWithDuration(value: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecMetricsConfigMetricsWithDuration[] | cdktf.IResolvable) {
    this._metricsWithDuration.internalValue = value;
  }
  public resetMetricsWithDuration() {
    this._metricsWithDuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsWithDurationInput() {
    return this._metricsWithDuration.internalValue;
  }
}
export interface DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecPrivateLinkGcpCredentialsSecretRef {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#name DataK8SHiveOpenshiftIoHiveConfigV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecPrivateLinkGcpCredentialsSecretRefToTerraform(struct?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecPrivateLinkGcpCredentialsSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecPrivateLinkGcpCredentialsSecretRefToHclTerraform(struct?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecPrivateLinkGcpCredentialsSecretRef | cdktf.IResolvable): any {
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

export class DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecPrivateLinkGcpCredentialsSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecPrivateLinkGcpCredentialsSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecPrivateLinkGcpCredentialsSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecPrivateLinkGcpEndpointVpcInventorySubnets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#region DataK8SHiveOpenshiftIoHiveConfigV1Manifest#region}
  */
  readonly region: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#subnet DataK8SHiveOpenshiftIoHiveConfigV1Manifest#subnet}
  */
  readonly subnet: string;
}

export function dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecPrivateLinkGcpEndpointVpcInventorySubnetsToTerraform(struct?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecPrivateLinkGcpEndpointVpcInventorySubnets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    region: cdktf.stringToTerraform(struct!.region),
    subnet: cdktf.stringToTerraform(struct!.subnet),
  }
}


export function dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecPrivateLinkGcpEndpointVpcInventorySubnetsToHclTerraform(struct?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecPrivateLinkGcpEndpointVpcInventorySubnets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet: {
      value: cdktf.stringToHclTerraform(struct!.subnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecPrivateLinkGcpEndpointVpcInventorySubnetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecPrivateLinkGcpEndpointVpcInventorySubnets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._subnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnet = this._subnet;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecPrivateLinkGcpEndpointVpcInventorySubnets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._region = undefined;
      this._subnet = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._region = value.region;
      this._subnet = value.subnet;
    }
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

  // subnet - computed: false, optional: false, required: true
  private _subnet?: string; 
  public get subnet() {
    return this.getStringAttribute('subnet');
  }
  public set subnet(value: string) {
    this._subnet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet;
  }
}

export class DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecPrivateLinkGcpEndpointVpcInventorySubnetsList extends cdktf.ComplexList {
  public internalValue? : DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecPrivateLinkGcpEndpointVpcInventorySubnets[] | cdktf.IResolvable

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
  public get(index: number): DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecPrivateLinkGcpEndpointVpcInventorySubnetsOutputReference {
    return new DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecPrivateLinkGcpEndpointVpcInventorySubnetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecPrivateLinkGcpEndpointVpcInventory {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#network DataK8SHiveOpenshiftIoHiveConfigV1Manifest#network}
  */
  readonly network: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#subnets DataK8SHiveOpenshiftIoHiveConfigV1Manifest#subnets}
  */
  readonly subnets: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecPrivateLinkGcpEndpointVpcInventorySubnets[] | cdktf.IResolvable;
}

export function dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecPrivateLinkGcpEndpointVpcInventoryToTerraform(struct?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecPrivateLinkGcpEndpointVpcInventory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network: cdktf.stringToTerraform(struct!.network),
    subnets: cdktf.listMapper(dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecPrivateLinkGcpEndpointVpcInventorySubnetsToTerraform, false)(struct!.subnets),
  }
}


export function dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecPrivateLinkGcpEndpointVpcInventoryToHclTerraform(struct?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecPrivateLinkGcpEndpointVpcInventory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnets: {
      value: cdktf.listMapperHcl(dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecPrivateLinkGcpEndpointVpcInventorySubnetsToHclTerraform, false)(struct!.subnets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecPrivateLinkGcpEndpointVpcInventorySubnetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecPrivateLinkGcpEndpointVpcInventoryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecPrivateLinkGcpEndpointVpcInventory | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._subnets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnets = this._subnets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecPrivateLinkGcpEndpointVpcInventory | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._network = undefined;
      this._subnets.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._network = value.network;
      this._subnets.internalValue = value.subnets;
    }
  }

  // network - computed: false, optional: false, required: true
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // subnets - computed: false, optional: false, required: true
  private _subnets = new DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecPrivateLinkGcpEndpointVpcInventorySubnetsList(this, "subnets", false);
  public get subnets() {
    return this._subnets;
  }
  public putSubnets(value: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecPrivateLinkGcpEndpointVpcInventorySubnets[] | cdktf.IResolvable) {
    this._subnets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetsInput() {
    return this._subnets.internalValue;
  }
}

export class DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecPrivateLinkGcpEndpointVpcInventoryList extends cdktf.ComplexList {
  public internalValue? : DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecPrivateLinkGcpEndpointVpcInventory[] | cdktf.IResolvable

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
  public get(index: number): DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecPrivateLinkGcpEndpointVpcInventoryOutputReference {
    return new DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecPrivateLinkGcpEndpointVpcInventoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecPrivateLinkGcp {
  /**
  * CredentialsSecretRef references a secret in the TargetNamespace that will be used to authenticate with GCP for creating the resources for GCP Private Service Connect
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#credentials_secret_ref DataK8SHiveOpenshiftIoHiveConfigV1Manifest#credentials_secret_ref}
  */
  readonly credentialsSecretRef: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecPrivateLinkGcpCredentialsSecretRef;
  /**
  * EndpointVPCInventory is a list of VPCs and the corresponding subnets in various GCP regions. The controller uses this list to choose a VPC for creating GCP Endpoints. Since the VPC Endpoints must be in the same region as the ClusterDeployment, we must have VPCs in that region to be able to setup Private Service Connect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#endpoint_vpc_inventory DataK8SHiveOpenshiftIoHiveConfigV1Manifest#endpoint_vpc_inventory}
  */
  readonly endpointVpcInventory?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecPrivateLinkGcpEndpointVpcInventory[] | cdktf.IResolvable;
}

export function dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecPrivateLinkGcpToTerraform(struct?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecPrivateLinkGcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credentials_secret_ref: dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecPrivateLinkGcpCredentialsSecretRefToTerraform(struct!.credentialsSecretRef),
    endpoint_vpc_inventory: cdktf.listMapper(dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecPrivateLinkGcpEndpointVpcInventoryToTerraform, false)(struct!.endpointVpcInventory),
  }
}


export function dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecPrivateLinkGcpToHclTerraform(struct?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecPrivateLinkGcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    credentials_secret_ref: {
      value: dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecPrivateLinkGcpCredentialsSecretRefToHclTerraform(struct!.credentialsSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecPrivateLinkGcpCredentialsSecretRef",
    },
    endpoint_vpc_inventory: {
      value: cdktf.listMapperHcl(dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecPrivateLinkGcpEndpointVpcInventoryToHclTerraform, false)(struct!.endpointVpcInventory),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecPrivateLinkGcpEndpointVpcInventoryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecPrivateLinkGcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecPrivateLinkGcp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credentialsSecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialsSecretRef = this._credentialsSecretRef?.internalValue;
    }
    if (this._endpointVpcInventory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointVpcInventory = this._endpointVpcInventory?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecPrivateLinkGcp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._credentialsSecretRef.internalValue = undefined;
      this._endpointVpcInventory.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._credentialsSecretRef.internalValue = value.credentialsSecretRef;
      this._endpointVpcInventory.internalValue = value.endpointVpcInventory;
    }
  }

  // credentials_secret_ref - computed: false, optional: false, required: true
  private _credentialsSecretRef = new DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecPrivateLinkGcpCredentialsSecretRefOutputReference(this, "credentials_secret_ref");
  public get credentialsSecretRef() {
    return this._credentialsSecretRef;
  }
  public putCredentialsSecretRef(value: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecPrivateLinkGcpCredentialsSecretRef) {
    this._credentialsSecretRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsSecretRefInput() {
    return this._credentialsSecretRef.internalValue;
  }

  // endpoint_vpc_inventory - computed: false, optional: true, required: false
  private _endpointVpcInventory = new DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecPrivateLinkGcpEndpointVpcInventoryList(this, "endpoint_vpc_inventory", false);
  public get endpointVpcInventory() {
    return this._endpointVpcInventory;
  }
  public putEndpointVpcInventory(value: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecPrivateLinkGcpEndpointVpcInventory[] | cdktf.IResolvable) {
    this._endpointVpcInventory.internalValue = value;
  }
  public resetEndpointVpcInventory() {
    this._endpointVpcInventory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointVpcInventoryInput() {
    return this._endpointVpcInventory.internalValue;
  }
}
export interface DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecPrivateLink {
  /**
  * GCP is the configuration for GCP hub and link resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#gcp DataK8SHiveOpenshiftIoHiveConfigV1Manifest#gcp}
  */
  readonly gcp?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecPrivateLinkGcp;
}

export function dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecPrivateLinkToTerraform(struct?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecPrivateLink | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gcp: dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecPrivateLinkGcpToTerraform(struct!.gcp),
  }
}


export function dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecPrivateLinkToHclTerraform(struct?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecPrivateLink | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gcp: {
      value: dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecPrivateLinkGcpToHclTerraform(struct!.gcp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecPrivateLinkGcp",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecPrivateLinkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecPrivateLink | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gcp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcp = this._gcp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecPrivateLink | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gcp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gcp.internalValue = value.gcp;
    }
  }

  // gcp - computed: false, optional: true, required: false
  private _gcp = new DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecPrivateLinkGcpOutputReference(this, "gcp");
  public get gcp() {
    return this._gcp;
  }
  public putGcp(value: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecPrivateLinkGcp) {
    this._gcp.internalValue = value;
  }
  public resetGcp() {
    this._gcp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpInput() {
    return this._gcp.internalValue;
  }
}
export interface DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecReleaseImageVerificationConfigMapRef {
  /**
  * Name of the ConfigMap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#name DataK8SHiveOpenshiftIoHiveConfigV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace of the ConfigMap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#namespace DataK8SHiveOpenshiftIoHiveConfigV1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecReleaseImageVerificationConfigMapRefToTerraform(struct?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecReleaseImageVerificationConfigMapRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecReleaseImageVerificationConfigMapRefToHclTerraform(struct?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecReleaseImageVerificationConfigMapRef | cdktf.IResolvable): any {
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

export class DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecReleaseImageVerificationConfigMapRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecReleaseImageVerificationConfigMapRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecReleaseImageVerificationConfigMapRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._name = value.name;
      this._namespace = value.namespace;
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
export interface DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecServiceProviderCredentialsConfigAwsCredentialsSecretRef {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#name DataK8SHiveOpenshiftIoHiveConfigV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecServiceProviderCredentialsConfigAwsCredentialsSecretRefToTerraform(struct?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecServiceProviderCredentialsConfigAwsCredentialsSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecServiceProviderCredentialsConfigAwsCredentialsSecretRefToHclTerraform(struct?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecServiceProviderCredentialsConfigAwsCredentialsSecretRef | cdktf.IResolvable): any {
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

export class DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecServiceProviderCredentialsConfigAwsCredentialsSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecServiceProviderCredentialsConfigAwsCredentialsSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecServiceProviderCredentialsConfigAwsCredentialsSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecServiceProviderCredentialsConfigAws {
  /**
  * CredentialsSecretRef references a secret in the TargetNamespace that will be used to authenticate with AWS to become the Service Provider. Being a Service Provider allows the controllers to assume the role in customer AWS accounts to manager clusters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#credentials_secret_ref DataK8SHiveOpenshiftIoHiveConfigV1Manifest#credentials_secret_ref}
  */
  readonly credentialsSecretRef?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecServiceProviderCredentialsConfigAwsCredentialsSecretRef;
}

export function dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecServiceProviderCredentialsConfigAwsToTerraform(struct?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecServiceProviderCredentialsConfigAws | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credentials_secret_ref: dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecServiceProviderCredentialsConfigAwsCredentialsSecretRefToTerraform(struct!.credentialsSecretRef),
  }
}


export function dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecServiceProviderCredentialsConfigAwsToHclTerraform(struct?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecServiceProviderCredentialsConfigAws | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    credentials_secret_ref: {
      value: dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecServiceProviderCredentialsConfigAwsCredentialsSecretRefToHclTerraform(struct!.credentialsSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecServiceProviderCredentialsConfigAwsCredentialsSecretRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecServiceProviderCredentialsConfigAwsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecServiceProviderCredentialsConfigAws | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credentialsSecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialsSecretRef = this._credentialsSecretRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecServiceProviderCredentialsConfigAws | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._credentialsSecretRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._credentialsSecretRef.internalValue = value.credentialsSecretRef;
    }
  }

  // credentials_secret_ref - computed: false, optional: true, required: false
  private _credentialsSecretRef = new DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecServiceProviderCredentialsConfigAwsCredentialsSecretRefOutputReference(this, "credentials_secret_ref");
  public get credentialsSecretRef() {
    return this._credentialsSecretRef;
  }
  public putCredentialsSecretRef(value: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecServiceProviderCredentialsConfigAwsCredentialsSecretRef) {
    this._credentialsSecretRef.internalValue = value;
  }
  public resetCredentialsSecretRef() {
    this._credentialsSecretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsSecretRefInput() {
    return this._credentialsSecretRef.internalValue;
  }
}
export interface DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecServiceProviderCredentialsConfig {
  /**
  * AWS is used to configure credentials related to being a service provider on AWS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#aws DataK8SHiveOpenshiftIoHiveConfigV1Manifest#aws}
  */
  readonly aws?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecServiceProviderCredentialsConfigAws;
}

export function dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecServiceProviderCredentialsConfigToTerraform(struct?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecServiceProviderCredentialsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws: dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecServiceProviderCredentialsConfigAwsToTerraform(struct!.aws),
  }
}


export function dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecServiceProviderCredentialsConfigToHclTerraform(struct?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecServiceProviderCredentialsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws: {
      value: dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecServiceProviderCredentialsConfigAwsToHclTerraform(struct!.aws),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecServiceProviderCredentialsConfigAws",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecServiceProviderCredentialsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecServiceProviderCredentialsConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aws?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aws = this._aws?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecServiceProviderCredentialsConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aws.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aws.internalValue = value.aws;
    }
  }

  // aws - computed: false, optional: true, required: false
  private _aws = new DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecServiceProviderCredentialsConfigAwsOutputReference(this, "aws");
  public get aws() {
    return this._aws;
  }
  public putAws(value: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecServiceProviderCredentialsConfigAws) {
    this._aws.internalValue = value;
  }
  public resetAws() {
    this._aws.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsInput() {
    return this._aws.internalValue;
  }
}
export interface DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpec {
  /**
  * AdditionalCertificateAuthoritiesSecretRef is a list of references to secrets in the TargetNamespace that contain an additional Certificate Authority to use when communicating with target clusters. These certificate authorities will be used in addition to any self-signed CA generated by each cluster on installation. The cert data should be stored in the Secret key named 'ca.crt'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#additional_certificate_authorities_secret_ref DataK8SHiveOpenshiftIoHiveConfigV1Manifest#additional_certificate_authorities_secret_ref}
  */
  readonly additionalCertificateAuthoritiesSecretRef?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAdditionalCertificateAuthoritiesSecretRef[] | cdktf.IResolvable;
  /**
  * ArgoCD specifies configuration for ArgoCD integration. If enabled, Hive will automatically add provisioned clusters to ArgoCD, and remove them when they are deprovisioned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#argo_cd_config DataK8SHiveOpenshiftIoHiveConfigV1Manifest#argo_cd_config}
  */
  readonly argoCdConfig?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecArgoCdConfig;
  /**
  * AWSPrivateLink defines the configuration for the aws-private-link controller. It provides 3 major pieces of information required by the controller, 1. The Credentials that should be used to create AWS PrivateLink resources other than what exist in the customer's account. 2. A list of VPCs that can be used by the controller to choose one to create AWS VPC Endpoints for the AWS VPC Endpoint Services created for ClusterDeployments in their corresponding regions. 3. A list of VPCs that should be able to resolve the DNS addresses setup for Private Link.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#aws_private_link DataK8SHiveOpenshiftIoHiveConfigV1Manifest#aws_private_link}
  */
  readonly awsPrivateLink?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAwsPrivateLink;
  /**
  * Backup specifies configuration for backup integration. If absent, backup integration will be disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#backup DataK8SHiveOpenshiftIoHiveConfigV1Manifest#backup}
  */
  readonly backup?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecBackup;
  /**
  * ClusterVersionPollInterval is a string duration indicating how much time must pass before checking whether we need to update the hive.openshift.io/version* labels on ClusterDeployment. If zero or unset, we'll only reconcile when the ClusterDeployment changes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#cluster_version_poll_interval DataK8SHiveOpenshiftIoHiveConfigV1Manifest#cluster_version_poll_interval}
  */
  readonly clusterVersionPollInterval?: string;
  /**
  * ControllersConfig is used to configure different hive controllers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#controllers_config DataK8SHiveOpenshiftIoHiveConfigV1Manifest#controllers_config}
  */
  readonly controllersConfig?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfig;
  /**
  * DeleteProtection can be set to 'enabled' to turn on automatic delete protection for ClusterDeployments. When enabled, Hive will add the 'hive.openshift.io/protected-delete' annotation to new ClusterDeployments. Once a ClusterDeployment has been installed, a user must remove the annotation from a ClusterDeployment prior to deleting it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#delete_protection DataK8SHiveOpenshiftIoHiveConfigV1Manifest#delete_protection}
  */
  readonly deleteProtection?: string;
  /**
  * DeploymentConfig is used to configure (pods/containers of) the Deployments generated by hive-operator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#deployment_config DataK8SHiveOpenshiftIoHiveConfigV1Manifest#deployment_config}
  */
  readonly deploymentConfig?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecDeploymentConfig[] | cdktf.IResolvable;
  /**
  * DeprovisionsDisabled can be set to true to block deprovision jobs from running.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#deprovisions_disabled DataK8SHiveOpenshiftIoHiveConfigV1Manifest#deprovisions_disabled}
  */
  readonly deprovisionsDisabled?: boolean | cdktf.IResolvable;
  /**
  * DisabledControllers allows selectively disabling Hive controllers by name. The name of an individual controller matches the name of the controller as seen in the Hive logging output.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#disabled_controllers DataK8SHiveOpenshiftIoHiveConfigV1Manifest#disabled_controllers}
  */
  readonly disabledControllers?: string[];
  /**
  * ExportMetrics has been disabled and has no effect. If upgrading from a version where it was active, please be aware of the following in your HiveConfig.Spec.TargetNamespace (default 'hive' if unset): 1) ServiceMonitors named hive-controllers and hive-clustersync; 2) Role and RoleBinding named prometheus-k8s; 3) The 'openshift.io/cluster-monitoring' metadata.label on the Namespace itself. You may wish to delete these resources. Or you may wish to continue using them to enable monitoring in your environment; but be aware that hive will no longer reconcile them.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#export_metrics DataK8SHiveOpenshiftIoHiveConfigV1Manifest#export_metrics}
  */
  readonly exportMetrics?: boolean | cdktf.IResolvable;
  /**
  * FailedProvisionConfig is used to configure settings related to handling provision failures.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#failed_provision_config DataK8SHiveOpenshiftIoHiveConfigV1Manifest#failed_provision_config}
  */
  readonly failedProvisionConfig?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecFailedProvisionConfig;
  /**
  * FeatureGateSelection allows selecting feature gates for the controller.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#feature_gates DataK8SHiveOpenshiftIoHiveConfigV1Manifest#feature_gates}
  */
  readonly featureGates?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecFeatureGates;
  /**
  * GlobalPullSecretRef is used to specify a pull secret that will be used globally by all of the cluster deployments. For each cluster deployment, the contents of GlobalPullSecret will be merged with the specific pull secret for a cluster deployment(if specified), with precedence given to the contents of the pull secret for the cluster deployment. The global pull secret is assumed to be in the TargetNamespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#global_pull_secret_ref DataK8SHiveOpenshiftIoHiveConfigV1Manifest#global_pull_secret_ref}
  */
  readonly globalPullSecretRef?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecGlobalPullSecretRef;
  /**
  * LogLevel is the level of logging to use for the Hive controllers. Acceptable levels, from coarsest to finest, are panic, fatal, error, warn, info, debug, and trace. The default level is info.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#log_level DataK8SHiveOpenshiftIoHiveConfigV1Manifest#log_level}
  */
  readonly logLevel?: string;
  /**
  * MachinePoolPollInterval is a string duration indicating how much time must pass before checking whether remote resources related to MachinePools need to be reapplied. Set to zero to disable polling -- we'll only reconcile when hub objects change. The default interval is 30m.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#machine_pool_poll_interval DataK8SHiveOpenshiftIoHiveConfigV1Manifest#machine_pool_poll_interval}
  */
  readonly machinePoolPollInterval?: string;
  /**
  * MaintenanceMode can be set to true to disable the hive controllers in situations where we need to ensure nothing is running that will add or act upon finalizers on Hive types. This should rarely be needed. Sets replicas to 0 for the hive-controllers deployment to accomplish this.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#maintenance_mode DataK8SHiveOpenshiftIoHiveConfigV1Manifest#maintenance_mode}
  */
  readonly maintenanceMode?: boolean | cdktf.IResolvable;
  /**
  * ManagedDomains is the list of DNS domains that are managed by the Hive cluster When specifying 'manageDNS: true' in a ClusterDeployment, the ClusterDeployment's baseDomain should be a direct child of one of these domains, otherwise the ClusterDeployment creation will result in a validation error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#managed_domains DataK8SHiveOpenshiftIoHiveConfigV1Manifest#managed_domains}
  */
  readonly managedDomains?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecManagedDomains[] | cdktf.IResolvable;
  /**
  * MetricsConfig encapsulates metrics specific configurations, like opting in for certain metrics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#metrics_config DataK8SHiveOpenshiftIoHiveConfigV1Manifest#metrics_config}
  */
  readonly metricsConfig?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecMetricsConfig;
  /**
  * PrivateLink is used to configure the privatelink controller.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#private_link DataK8SHiveOpenshiftIoHiveConfigV1Manifest#private_link}
  */
  readonly privateLink?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecPrivateLink;
  /**
  * ReleaseImageVerificationConfigMapRef is a reference to the ConfigMap that will be used to verify release images. The config map structure is exactly the same as the config map used for verification of release images for OpenShift 4 during upgrades. Therefore you can usually set this to the config map shipped as part of OpenShift (openshift-config-managed/release-verification). See https://github.com/openshift/cluster-update-keys for more details. The keys within the config map in the data field define how verification is performed: verifier-public-key-*: One or more GPG public keys in ASCII form that must have signed the release image by digest. store-*: A URL (scheme file://, http://, or https://) location that contains signatures. These signatures are in the atomic container signature format. The URL will have the digest of the image appended to it as '<STORE>/<ALGO>=<DIGEST>/signature-<NUMBER>' as described in the container image signing format. The docker-image-manifest section of the signature must match the release image digest. Signatures are searched starting at NUMBER 1 and incrementing if the signature exists but is not valid. The signature is a GPG signed and encrypted JSON message. The file store is provided for testing only at the current time, although future versions of the CVO might allow host mounting of signatures. See https://github.com/containers/image/blob/ab49b0a48428c623a8f03b41b9083d48966b34a9/docs/signature-protocols.md for a description of the signature store The returned verifier will require that any new release image will only be considered verified if each provided public key has signed the release image digest. The signature may be in any store and the lookup order is internally defined. If not set, no verification will be performed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#release_image_verification_config_map_ref DataK8SHiveOpenshiftIoHiveConfigV1Manifest#release_image_verification_config_map_ref}
  */
  readonly releaseImageVerificationConfigMapRef?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecReleaseImageVerificationConfigMapRef;
  /**
  * ServiceProviderCredentialsConfig is used to configure credentials related to being a service provider on various cloud platforms.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#service_provider_credentials_config DataK8SHiveOpenshiftIoHiveConfigV1Manifest#service_provider_credentials_config}
  */
  readonly serviceProviderCredentialsConfig?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecServiceProviderCredentialsConfig;
  /**
  * SyncSetReapplyInterval is a string duration indicating how much time must pass before SyncSet resources will be reapplied. The default reapply interval is two hours.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#sync_set_reapply_interval DataK8SHiveOpenshiftIoHiveConfigV1Manifest#sync_set_reapply_interval}
  */
  readonly syncSetReapplyInterval?: string;
  /**
  * TargetNamespace is the namespace where the core Hive components should be run. Defaults to 'hive'. Will be created if it does not already exist. All resource references in HiveConfig can be assumed to be in the TargetNamespace. NOTE: Whereas it is possible to edit this value, causing hive to 'move' its core components to the new namespace, the old namespace is not deleted, as it will still contain resources created by kubernetes and/or other OpenShift controllers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#target_namespace DataK8SHiveOpenshiftIoHiveConfigV1Manifest#target_namespace}
  */
  readonly targetNamespace?: string;
}

export function dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecToTerraform(struct?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_certificate_authorities_secret_ref: cdktf.listMapper(dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAdditionalCertificateAuthoritiesSecretRefToTerraform, false)(struct!.additionalCertificateAuthoritiesSecretRef),
    argo_cd_config: dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecArgoCdConfigToTerraform(struct!.argoCdConfig),
    aws_private_link: dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAwsPrivateLinkToTerraform(struct!.awsPrivateLink),
    backup: dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecBackupToTerraform(struct!.backup),
    cluster_version_poll_interval: cdktf.stringToTerraform(struct!.clusterVersionPollInterval),
    controllers_config: dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigToTerraform(struct!.controllersConfig),
    delete_protection: cdktf.stringToTerraform(struct!.deleteProtection),
    deployment_config: cdktf.listMapper(dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecDeploymentConfigToTerraform, false)(struct!.deploymentConfig),
    deprovisions_disabled: cdktf.booleanToTerraform(struct!.deprovisionsDisabled),
    disabled_controllers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.disabledControllers),
    export_metrics: cdktf.booleanToTerraform(struct!.exportMetrics),
    failed_provision_config: dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecFailedProvisionConfigToTerraform(struct!.failedProvisionConfig),
    feature_gates: dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecFeatureGatesToTerraform(struct!.featureGates),
    global_pull_secret_ref: dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecGlobalPullSecretRefToTerraform(struct!.globalPullSecretRef),
    log_level: cdktf.stringToTerraform(struct!.logLevel),
    machine_pool_poll_interval: cdktf.stringToTerraform(struct!.machinePoolPollInterval),
    maintenance_mode: cdktf.booleanToTerraform(struct!.maintenanceMode),
    managed_domains: cdktf.listMapper(dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecManagedDomainsToTerraform, false)(struct!.managedDomains),
    metrics_config: dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecMetricsConfigToTerraform(struct!.metricsConfig),
    private_link: dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecPrivateLinkToTerraform(struct!.privateLink),
    release_image_verification_config_map_ref: dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecReleaseImageVerificationConfigMapRefToTerraform(struct!.releaseImageVerificationConfigMapRef),
    service_provider_credentials_config: dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecServiceProviderCredentialsConfigToTerraform(struct!.serviceProviderCredentialsConfig),
    sync_set_reapply_interval: cdktf.stringToTerraform(struct!.syncSetReapplyInterval),
    target_namespace: cdktf.stringToTerraform(struct!.targetNamespace),
  }
}


export function dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecToHclTerraform(struct?: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_certificate_authorities_secret_ref: {
      value: cdktf.listMapperHcl(dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAdditionalCertificateAuthoritiesSecretRefToHclTerraform, false)(struct!.additionalCertificateAuthoritiesSecretRef),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAdditionalCertificateAuthoritiesSecretRefList",
    },
    argo_cd_config: {
      value: dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecArgoCdConfigToHclTerraform(struct!.argoCdConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecArgoCdConfig",
    },
    aws_private_link: {
      value: dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAwsPrivateLinkToHclTerraform(struct!.awsPrivateLink),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAwsPrivateLink",
    },
    backup: {
      value: dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecBackupToHclTerraform(struct!.backup),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecBackup",
    },
    cluster_version_poll_interval: {
      value: cdktf.stringToHclTerraform(struct!.clusterVersionPollInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    controllers_config: {
      value: dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigToHclTerraform(struct!.controllersConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfig",
    },
    delete_protection: {
      value: cdktf.stringToHclTerraform(struct!.deleteProtection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deployment_config: {
      value: cdktf.listMapperHcl(dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecDeploymentConfigToHclTerraform, false)(struct!.deploymentConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecDeploymentConfigList",
    },
    deprovisions_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.deprovisionsDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disabled_controllers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.disabledControllers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    export_metrics: {
      value: cdktf.booleanToHclTerraform(struct!.exportMetrics),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    failed_provision_config: {
      value: dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecFailedProvisionConfigToHclTerraform(struct!.failedProvisionConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecFailedProvisionConfig",
    },
    feature_gates: {
      value: dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecFeatureGatesToHclTerraform(struct!.featureGates),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecFeatureGates",
    },
    global_pull_secret_ref: {
      value: dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecGlobalPullSecretRefToHclTerraform(struct!.globalPullSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecGlobalPullSecretRef",
    },
    log_level: {
      value: cdktf.stringToHclTerraform(struct!.logLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    machine_pool_poll_interval: {
      value: cdktf.stringToHclTerraform(struct!.machinePoolPollInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maintenance_mode: {
      value: cdktf.booleanToHclTerraform(struct!.maintenanceMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    managed_domains: {
      value: cdktf.listMapperHcl(dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecManagedDomainsToHclTerraform, false)(struct!.managedDomains),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecManagedDomainsList",
    },
    metrics_config: {
      value: dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecMetricsConfigToHclTerraform(struct!.metricsConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecMetricsConfig",
    },
    private_link: {
      value: dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecPrivateLinkToHclTerraform(struct!.privateLink),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecPrivateLink",
    },
    release_image_verification_config_map_ref: {
      value: dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecReleaseImageVerificationConfigMapRefToHclTerraform(struct!.releaseImageVerificationConfigMapRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecReleaseImageVerificationConfigMapRef",
    },
    service_provider_credentials_config: {
      value: dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecServiceProviderCredentialsConfigToHclTerraform(struct!.serviceProviderCredentialsConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecServiceProviderCredentialsConfig",
    },
    sync_set_reapply_interval: {
      value: cdktf.stringToHclTerraform(struct!.syncSetReapplyInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_namespace: {
      value: cdktf.stringToHclTerraform(struct!.targetNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalCertificateAuthoritiesSecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalCertificateAuthoritiesSecretRef = this._additionalCertificateAuthoritiesSecretRef?.internalValue;
    }
    if (this._argoCdConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.argoCdConfig = this._argoCdConfig?.internalValue;
    }
    if (this._awsPrivateLink?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsPrivateLink = this._awsPrivateLink?.internalValue;
    }
    if (this._backup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backup = this._backup?.internalValue;
    }
    if (this._clusterVersionPollInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterVersionPollInterval = this._clusterVersionPollInterval;
    }
    if (this._controllersConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.controllersConfig = this._controllersConfig?.internalValue;
    }
    if (this._deleteProtection !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteProtection = this._deleteProtection;
    }
    if (this._deploymentConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploymentConfig = this._deploymentConfig?.internalValue;
    }
    if (this._deprovisionsDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.deprovisionsDisabled = this._deprovisionsDisabled;
    }
    if (this._disabledControllers !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabledControllers = this._disabledControllers;
    }
    if (this._exportMetrics !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportMetrics = this._exportMetrics;
    }
    if (this._failedProvisionConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.failedProvisionConfig = this._failedProvisionConfig?.internalValue;
    }
    if (this._featureGates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.featureGates = this._featureGates?.internalValue;
    }
    if (this._globalPullSecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalPullSecretRef = this._globalPullSecretRef?.internalValue;
    }
    if (this._logLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevel = this._logLevel;
    }
    if (this._machinePoolPollInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.machinePoolPollInterval = this._machinePoolPollInterval;
    }
    if (this._maintenanceMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenanceMode = this._maintenanceMode;
    }
    if (this._managedDomains?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedDomains = this._managedDomains?.internalValue;
    }
    if (this._metricsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsConfig = this._metricsConfig?.internalValue;
    }
    if (this._privateLink?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateLink = this._privateLink?.internalValue;
    }
    if (this._releaseImageVerificationConfigMapRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.releaseImageVerificationConfigMapRef = this._releaseImageVerificationConfigMapRef?.internalValue;
    }
    if (this._serviceProviderCredentialsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceProviderCredentialsConfig = this._serviceProviderCredentialsConfig?.internalValue;
    }
    if (this._syncSetReapplyInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncSetReapplyInterval = this._syncSetReapplyInterval;
    }
    if (this._targetNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetNamespace = this._targetNamespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalCertificateAuthoritiesSecretRef.internalValue = undefined;
      this._argoCdConfig.internalValue = undefined;
      this._awsPrivateLink.internalValue = undefined;
      this._backup.internalValue = undefined;
      this._clusterVersionPollInterval = undefined;
      this._controllersConfig.internalValue = undefined;
      this._deleteProtection = undefined;
      this._deploymentConfig.internalValue = undefined;
      this._deprovisionsDisabled = undefined;
      this._disabledControllers = undefined;
      this._exportMetrics = undefined;
      this._failedProvisionConfig.internalValue = undefined;
      this._featureGates.internalValue = undefined;
      this._globalPullSecretRef.internalValue = undefined;
      this._logLevel = undefined;
      this._machinePoolPollInterval = undefined;
      this._maintenanceMode = undefined;
      this._managedDomains.internalValue = undefined;
      this._metricsConfig.internalValue = undefined;
      this._privateLink.internalValue = undefined;
      this._releaseImageVerificationConfigMapRef.internalValue = undefined;
      this._serviceProviderCredentialsConfig.internalValue = undefined;
      this._syncSetReapplyInterval = undefined;
      this._targetNamespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalCertificateAuthoritiesSecretRef.internalValue = value.additionalCertificateAuthoritiesSecretRef;
      this._argoCdConfig.internalValue = value.argoCdConfig;
      this._awsPrivateLink.internalValue = value.awsPrivateLink;
      this._backup.internalValue = value.backup;
      this._clusterVersionPollInterval = value.clusterVersionPollInterval;
      this._controllersConfig.internalValue = value.controllersConfig;
      this._deleteProtection = value.deleteProtection;
      this._deploymentConfig.internalValue = value.deploymentConfig;
      this._deprovisionsDisabled = value.deprovisionsDisabled;
      this._disabledControllers = value.disabledControllers;
      this._exportMetrics = value.exportMetrics;
      this._failedProvisionConfig.internalValue = value.failedProvisionConfig;
      this._featureGates.internalValue = value.featureGates;
      this._globalPullSecretRef.internalValue = value.globalPullSecretRef;
      this._logLevel = value.logLevel;
      this._machinePoolPollInterval = value.machinePoolPollInterval;
      this._maintenanceMode = value.maintenanceMode;
      this._managedDomains.internalValue = value.managedDomains;
      this._metricsConfig.internalValue = value.metricsConfig;
      this._privateLink.internalValue = value.privateLink;
      this._releaseImageVerificationConfigMapRef.internalValue = value.releaseImageVerificationConfigMapRef;
      this._serviceProviderCredentialsConfig.internalValue = value.serviceProviderCredentialsConfig;
      this._syncSetReapplyInterval = value.syncSetReapplyInterval;
      this._targetNamespace = value.targetNamespace;
    }
  }

  // additional_certificate_authorities_secret_ref - computed: false, optional: true, required: false
  private _additionalCertificateAuthoritiesSecretRef = new DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAdditionalCertificateAuthoritiesSecretRefList(this, "additional_certificate_authorities_secret_ref", false);
  public get additionalCertificateAuthoritiesSecretRef() {
    return this._additionalCertificateAuthoritiesSecretRef;
  }
  public putAdditionalCertificateAuthoritiesSecretRef(value: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAdditionalCertificateAuthoritiesSecretRef[] | cdktf.IResolvable) {
    this._additionalCertificateAuthoritiesSecretRef.internalValue = value;
  }
  public resetAdditionalCertificateAuthoritiesSecretRef() {
    this._additionalCertificateAuthoritiesSecretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalCertificateAuthoritiesSecretRefInput() {
    return this._additionalCertificateAuthoritiesSecretRef.internalValue;
  }

  // argo_cd_config - computed: false, optional: true, required: false
  private _argoCdConfig = new DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecArgoCdConfigOutputReference(this, "argo_cd_config");
  public get argoCdConfig() {
    return this._argoCdConfig;
  }
  public putArgoCdConfig(value: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecArgoCdConfig) {
    this._argoCdConfig.internalValue = value;
  }
  public resetArgoCdConfig() {
    this._argoCdConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argoCdConfigInput() {
    return this._argoCdConfig.internalValue;
  }

  // aws_private_link - computed: false, optional: true, required: false
  private _awsPrivateLink = new DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAwsPrivateLinkOutputReference(this, "aws_private_link");
  public get awsPrivateLink() {
    return this._awsPrivateLink;
  }
  public putAwsPrivateLink(value: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecAwsPrivateLink) {
    this._awsPrivateLink.internalValue = value;
  }
  public resetAwsPrivateLink() {
    this._awsPrivateLink.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsPrivateLinkInput() {
    return this._awsPrivateLink.internalValue;
  }

  // backup - computed: false, optional: true, required: false
  private _backup = new DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecBackupOutputReference(this, "backup");
  public get backup() {
    return this._backup;
  }
  public putBackup(value: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecBackup) {
    this._backup.internalValue = value;
  }
  public resetBackup() {
    this._backup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupInput() {
    return this._backup.internalValue;
  }

  // cluster_version_poll_interval - computed: false, optional: true, required: false
  private _clusterVersionPollInterval?: string; 
  public get clusterVersionPollInterval() {
    return this.getStringAttribute('cluster_version_poll_interval');
  }
  public set clusterVersionPollInterval(value: string) {
    this._clusterVersionPollInterval = value;
  }
  public resetClusterVersionPollInterval() {
    this._clusterVersionPollInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterVersionPollIntervalInput() {
    return this._clusterVersionPollInterval;
  }

  // controllers_config - computed: false, optional: true, required: false
  private _controllersConfig = new DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfigOutputReference(this, "controllers_config");
  public get controllersConfig() {
    return this._controllersConfig;
  }
  public putControllersConfig(value: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecControllersConfig) {
    this._controllersConfig.internalValue = value;
  }
  public resetControllersConfig() {
    this._controllersConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllersConfigInput() {
    return this._controllersConfig.internalValue;
  }

  // delete_protection - computed: false, optional: true, required: false
  private _deleteProtection?: string; 
  public get deleteProtection() {
    return this.getStringAttribute('delete_protection');
  }
  public set deleteProtection(value: string) {
    this._deleteProtection = value;
  }
  public resetDeleteProtection() {
    this._deleteProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteProtectionInput() {
    return this._deleteProtection;
  }

  // deployment_config - computed: false, optional: true, required: false
  private _deploymentConfig = new DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecDeploymentConfigList(this, "deployment_config", false);
  public get deploymentConfig() {
    return this._deploymentConfig;
  }
  public putDeploymentConfig(value: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecDeploymentConfig[] | cdktf.IResolvable) {
    this._deploymentConfig.internalValue = value;
  }
  public resetDeploymentConfig() {
    this._deploymentConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentConfigInput() {
    return this._deploymentConfig.internalValue;
  }

  // deprovisions_disabled - computed: false, optional: true, required: false
  private _deprovisionsDisabled?: boolean | cdktf.IResolvable; 
  public get deprovisionsDisabled() {
    return this.getBooleanAttribute('deprovisions_disabled');
  }
  public set deprovisionsDisabled(value: boolean | cdktf.IResolvable) {
    this._deprovisionsDisabled = value;
  }
  public resetDeprovisionsDisabled() {
    this._deprovisionsDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deprovisionsDisabledInput() {
    return this._deprovisionsDisabled;
  }

  // disabled_controllers - computed: false, optional: true, required: false
  private _disabledControllers?: string[]; 
  public get disabledControllers() {
    return this.getListAttribute('disabled_controllers');
  }
  public set disabledControllers(value: string[]) {
    this._disabledControllers = value;
  }
  public resetDisabledControllers() {
    this._disabledControllers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledControllersInput() {
    return this._disabledControllers;
  }

  // export_metrics - computed: false, optional: true, required: false
  private _exportMetrics?: boolean | cdktf.IResolvable; 
  public get exportMetrics() {
    return this.getBooleanAttribute('export_metrics');
  }
  public set exportMetrics(value: boolean | cdktf.IResolvable) {
    this._exportMetrics = value;
  }
  public resetExportMetrics() {
    this._exportMetrics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportMetricsInput() {
    return this._exportMetrics;
  }

  // failed_provision_config - computed: false, optional: true, required: false
  private _failedProvisionConfig = new DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecFailedProvisionConfigOutputReference(this, "failed_provision_config");
  public get failedProvisionConfig() {
    return this._failedProvisionConfig;
  }
  public putFailedProvisionConfig(value: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecFailedProvisionConfig) {
    this._failedProvisionConfig.internalValue = value;
  }
  public resetFailedProvisionConfig() {
    this._failedProvisionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failedProvisionConfigInput() {
    return this._failedProvisionConfig.internalValue;
  }

  // feature_gates - computed: false, optional: true, required: false
  private _featureGates = new DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecFeatureGatesOutputReference(this, "feature_gates");
  public get featureGates() {
    return this._featureGates;
  }
  public putFeatureGates(value: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecFeatureGates) {
    this._featureGates.internalValue = value;
  }
  public resetFeatureGates() {
    this._featureGates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featureGatesInput() {
    return this._featureGates.internalValue;
  }

  // global_pull_secret_ref - computed: false, optional: true, required: false
  private _globalPullSecretRef = new DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecGlobalPullSecretRefOutputReference(this, "global_pull_secret_ref");
  public get globalPullSecretRef() {
    return this._globalPullSecretRef;
  }
  public putGlobalPullSecretRef(value: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecGlobalPullSecretRef) {
    this._globalPullSecretRef.internalValue = value;
  }
  public resetGlobalPullSecretRef() {
    this._globalPullSecretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalPullSecretRefInput() {
    return this._globalPullSecretRef.internalValue;
  }

  // log_level - computed: false, optional: true, required: false
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
  }

  // machine_pool_poll_interval - computed: false, optional: true, required: false
  private _machinePoolPollInterval?: string; 
  public get machinePoolPollInterval() {
    return this.getStringAttribute('machine_pool_poll_interval');
  }
  public set machinePoolPollInterval(value: string) {
    this._machinePoolPollInterval = value;
  }
  public resetMachinePoolPollInterval() {
    this._machinePoolPollInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machinePoolPollIntervalInput() {
    return this._machinePoolPollInterval;
  }

  // maintenance_mode - computed: false, optional: true, required: false
  private _maintenanceMode?: boolean | cdktf.IResolvable; 
  public get maintenanceMode() {
    return this.getBooleanAttribute('maintenance_mode');
  }
  public set maintenanceMode(value: boolean | cdktf.IResolvable) {
    this._maintenanceMode = value;
  }
  public resetMaintenanceMode() {
    this._maintenanceMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceModeInput() {
    return this._maintenanceMode;
  }

  // managed_domains - computed: false, optional: true, required: false
  private _managedDomains = new DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecManagedDomainsList(this, "managed_domains", false);
  public get managedDomains() {
    return this._managedDomains;
  }
  public putManagedDomains(value: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecManagedDomains[] | cdktf.IResolvable) {
    this._managedDomains.internalValue = value;
  }
  public resetManagedDomains() {
    this._managedDomains.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedDomainsInput() {
    return this._managedDomains.internalValue;
  }

  // metrics_config - computed: false, optional: true, required: false
  private _metricsConfig = new DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecMetricsConfigOutputReference(this, "metrics_config");
  public get metricsConfig() {
    return this._metricsConfig;
  }
  public putMetricsConfig(value: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecMetricsConfig) {
    this._metricsConfig.internalValue = value;
  }
  public resetMetricsConfig() {
    this._metricsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsConfigInput() {
    return this._metricsConfig.internalValue;
  }

  // private_link - computed: false, optional: true, required: false
  private _privateLink = new DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecPrivateLinkOutputReference(this, "private_link");
  public get privateLink() {
    return this._privateLink;
  }
  public putPrivateLink(value: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecPrivateLink) {
    this._privateLink.internalValue = value;
  }
  public resetPrivateLink() {
    this._privateLink.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateLinkInput() {
    return this._privateLink.internalValue;
  }

  // release_image_verification_config_map_ref - computed: false, optional: true, required: false
  private _releaseImageVerificationConfigMapRef = new DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecReleaseImageVerificationConfigMapRefOutputReference(this, "release_image_verification_config_map_ref");
  public get releaseImageVerificationConfigMapRef() {
    return this._releaseImageVerificationConfigMapRef;
  }
  public putReleaseImageVerificationConfigMapRef(value: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecReleaseImageVerificationConfigMapRef) {
    this._releaseImageVerificationConfigMapRef.internalValue = value;
  }
  public resetReleaseImageVerificationConfigMapRef() {
    this._releaseImageVerificationConfigMapRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseImageVerificationConfigMapRefInput() {
    return this._releaseImageVerificationConfigMapRef.internalValue;
  }

  // service_provider_credentials_config - computed: false, optional: true, required: false
  private _serviceProviderCredentialsConfig = new DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecServiceProviderCredentialsConfigOutputReference(this, "service_provider_credentials_config");
  public get serviceProviderCredentialsConfig() {
    return this._serviceProviderCredentialsConfig;
  }
  public putServiceProviderCredentialsConfig(value: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecServiceProviderCredentialsConfig) {
    this._serviceProviderCredentialsConfig.internalValue = value;
  }
  public resetServiceProviderCredentialsConfig() {
    this._serviceProviderCredentialsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceProviderCredentialsConfigInput() {
    return this._serviceProviderCredentialsConfig.internalValue;
  }

  // sync_set_reapply_interval - computed: false, optional: true, required: false
  private _syncSetReapplyInterval?: string; 
  public get syncSetReapplyInterval() {
    return this.getStringAttribute('sync_set_reapply_interval');
  }
  public set syncSetReapplyInterval(value: string) {
    this._syncSetReapplyInterval = value;
  }
  public resetSyncSetReapplyInterval() {
    this._syncSetReapplyInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncSetReapplyIntervalInput() {
    return this._syncSetReapplyInterval;
  }

  // target_namespace - computed: false, optional: true, required: false
  private _targetNamespace?: string; 
  public get targetNamespace() {
    return this.getStringAttribute('target_namespace');
  }
  public set targetNamespace(value: string) {
    this._targetNamespace = value;
  }
  public resetTargetNamespace() {
    this._targetNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetNamespaceInput() {
    return this._targetNamespace;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest k8s_hive_openshift_io_hive_config_v1_manifest}
*/
export class DataK8SHiveOpenshiftIoHiveConfigV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_hive_openshift_io_hive_config_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SHiveOpenshiftIoHiveConfigV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SHiveOpenshiftIoHiveConfigV1Manifest to import
  * @param importFromId The id of the existing DataK8SHiveOpenshiftIoHiveConfigV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SHiveOpenshiftIoHiveConfigV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_hive_openshift_io_hive_config_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_hive_config_v1_manifest k8s_hive_openshift_io_hive_config_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SHiveOpenshiftIoHiveConfigV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SHiveOpenshiftIoHiveConfigV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_hive_openshift_io_hive_config_v1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.1',
        providerVersionConstraint: '2025.12.1'
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
  private _metadata = new DataK8SHiveOpenshiftIoHiveConfigV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SHiveOpenshiftIoHiveConfigV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpec) {
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
      metadata: dataK8SHiveOpenshiftIoHiveConfigV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SHiveOpenshiftIoHiveConfigV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SHiveOpenshiftIoHiveConfigV1ManifestMetadata",
      },
      spec: {
        value: dataK8SHiveOpenshiftIoHiveConfigV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SHiveOpenshiftIoHiveConfigV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
