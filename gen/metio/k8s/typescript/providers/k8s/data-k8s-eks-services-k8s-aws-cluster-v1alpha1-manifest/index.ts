// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/eks_services_k8s_aws_cluster_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/eks_services_k8s_aws_cluster_v1alpha1_manifest#metadata DataK8SEksServicesK8SAwsClusterV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestMetadata;
  /**
  * ClusterSpec defines the desired state of Cluster. An object representing an Amazon EKS cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/eks_services_k8s_aws_cluster_v1alpha1_manifest#spec DataK8SEksServicesK8SAwsClusterV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpec;
}
export interface DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/eks_services_k8s_aws_cluster_v1alpha1_manifest#annotations DataK8SEksServicesK8SAwsClusterV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/eks_services_k8s_aws_cluster_v1alpha1_manifest#labels DataK8SEksServicesK8SAwsClusterV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/eks_services_k8s_aws_cluster_v1alpha1_manifest#name DataK8SEksServicesK8SAwsClusterV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/eks_services_k8s_aws_cluster_v1alpha1_manifest#namespace DataK8SEksServicesK8SAwsClusterV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SEksServicesK8SAwsClusterV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SEksServicesK8SAwsClusterV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecAccessConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/eks_services_k8s_aws_cluster_v1alpha1_manifest#authentication_mode DataK8SEksServicesK8SAwsClusterV1Alpha1Manifest#authentication_mode}
  */
  readonly authenticationMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/eks_services_k8s_aws_cluster_v1alpha1_manifest#bootstrap_cluster_creator_admin_permissions DataK8SEksServicesK8SAwsClusterV1Alpha1Manifest#bootstrap_cluster_creator_admin_permissions}
  */
  readonly bootstrapClusterCreatorAdminPermissions?: boolean | cdktf.IResolvable;
}

export function dataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecAccessConfigToTerraform(struct?: DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecAccessConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_mode: cdktf.stringToTerraform(struct!.authenticationMode),
    bootstrap_cluster_creator_admin_permissions: cdktf.booleanToTerraform(struct!.bootstrapClusterCreatorAdminPermissions),
  }
}


export function dataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecAccessConfigToHclTerraform(struct?: DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecAccessConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication_mode: {
      value: cdktf.stringToHclTerraform(struct!.authenticationMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bootstrap_cluster_creator_admin_permissions: {
      value: cdktf.booleanToHclTerraform(struct!.bootstrapClusterCreatorAdminPermissions),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecAccessConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecAccessConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationMode = this._authenticationMode;
    }
    if (this._bootstrapClusterCreatorAdminPermissions !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootstrapClusterCreatorAdminPermissions = this._bootstrapClusterCreatorAdminPermissions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecAccessConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authenticationMode = undefined;
      this._bootstrapClusterCreatorAdminPermissions = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authenticationMode = value.authenticationMode;
      this._bootstrapClusterCreatorAdminPermissions = value.bootstrapClusterCreatorAdminPermissions;
    }
  }

  // authentication_mode - computed: false, optional: true, required: false
  private _authenticationMode?: string; 
  public get authenticationMode() {
    return this.getStringAttribute('authentication_mode');
  }
  public set authenticationMode(value: string) {
    this._authenticationMode = value;
  }
  public resetAuthenticationMode() {
    this._authenticationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationModeInput() {
    return this._authenticationMode;
  }

  // bootstrap_cluster_creator_admin_permissions - computed: false, optional: true, required: false
  private _bootstrapClusterCreatorAdminPermissions?: boolean | cdktf.IResolvable; 
  public get bootstrapClusterCreatorAdminPermissions() {
    return this.getBooleanAttribute('bootstrap_cluster_creator_admin_permissions');
  }
  public set bootstrapClusterCreatorAdminPermissions(value: boolean | cdktf.IResolvable) {
    this._bootstrapClusterCreatorAdminPermissions = value;
  }
  public resetBootstrapClusterCreatorAdminPermissions() {
    this._bootstrapClusterCreatorAdminPermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootstrapClusterCreatorAdminPermissionsInput() {
    return this._bootstrapClusterCreatorAdminPermissions;
  }
}
export interface DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecEncryptionConfigProviderKeyRefFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/eks_services_k8s_aws_cluster_v1alpha1_manifest#name DataK8SEksServicesK8SAwsClusterV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/eks_services_k8s_aws_cluster_v1alpha1_manifest#namespace DataK8SEksServicesK8SAwsClusterV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecEncryptionConfigProviderKeyRefFromToTerraform(struct?: DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecEncryptionConfigProviderKeyRefFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecEncryptionConfigProviderKeyRefFromToHclTerraform(struct?: DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecEncryptionConfigProviderKeyRefFrom | cdktf.IResolvable): any {
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

export class DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecEncryptionConfigProviderKeyRefFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecEncryptionConfigProviderKeyRefFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecEncryptionConfigProviderKeyRefFrom | cdktf.IResolvable | undefined) {
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
export interface DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecEncryptionConfigProviderKeyRef {
  /**
  * AWSResourceReference provides all the values necessary to reference another k8s resource for finding the identifier(Id/ARN/Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/eks_services_k8s_aws_cluster_v1alpha1_manifest#from DataK8SEksServicesK8SAwsClusterV1Alpha1Manifest#from}
  */
  readonly from?: DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecEncryptionConfigProviderKeyRefFrom;
}

export function dataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecEncryptionConfigProviderKeyRefToTerraform(struct?: DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecEncryptionConfigProviderKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: dataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecEncryptionConfigProviderKeyRefFromToTerraform(struct!.from),
  }
}


export function dataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecEncryptionConfigProviderKeyRefToHclTerraform(struct?: DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecEncryptionConfigProviderKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: dataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecEncryptionConfigProviderKeyRefFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecEncryptionConfigProviderKeyRefFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecEncryptionConfigProviderKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecEncryptionConfigProviderKeyRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecEncryptionConfigProviderKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._from.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._from.internalValue = value.from;
    }
  }

  // from - computed: false, optional: true, required: false
  private _from = new DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecEncryptionConfigProviderKeyRefFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecEncryptionConfigProviderKeyRefFrom) {
    this._from.internalValue = value;
  }
  public resetFrom() {
    this._from.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from.internalValue;
  }
}
export interface DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecEncryptionConfigProvider {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/eks_services_k8s_aws_cluster_v1alpha1_manifest#key_arn DataK8SEksServicesK8SAwsClusterV1Alpha1Manifest#key_arn}
  */
  readonly keyArn?: string;
  /**
  * Reference field for KeyARN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/eks_services_k8s_aws_cluster_v1alpha1_manifest#key_ref DataK8SEksServicesK8SAwsClusterV1Alpha1Manifest#key_ref}
  */
  readonly keyRef?: DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecEncryptionConfigProviderKeyRef;
}

export function dataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecEncryptionConfigProviderToTerraform(struct?: DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecEncryptionConfigProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_arn: cdktf.stringToTerraform(struct!.keyArn),
    key_ref: dataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecEncryptionConfigProviderKeyRefToTerraform(struct!.keyRef),
  }
}


export function dataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecEncryptionConfigProviderToHclTerraform(struct?: DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecEncryptionConfigProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_arn: {
      value: cdktf.stringToHclTerraform(struct!.keyArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_ref: {
      value: dataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecEncryptionConfigProviderKeyRefToHclTerraform(struct!.keyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecEncryptionConfigProviderKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecEncryptionConfigProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecEncryptionConfigProvider | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyArn = this._keyArn;
    }
    if (this._keyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyRef = this._keyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecEncryptionConfigProvider | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keyArn = undefined;
      this._keyRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keyArn = value.keyArn;
      this._keyRef.internalValue = value.keyRef;
    }
  }

  // key_arn - computed: false, optional: true, required: false
  private _keyArn?: string; 
  public get keyArn() {
    return this.getStringAttribute('key_arn');
  }
  public set keyArn(value: string) {
    this._keyArn = value;
  }
  public resetKeyArn() {
    this._keyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyArnInput() {
    return this._keyArn;
  }

  // key_ref - computed: false, optional: true, required: false
  private _keyRef = new DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecEncryptionConfigProviderKeyRefOutputReference(this, "key_ref");
  public get keyRef() {
    return this._keyRef;
  }
  public putKeyRef(value: DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecEncryptionConfigProviderKeyRef) {
    this._keyRef.internalValue = value;
  }
  public resetKeyRef() {
    this._keyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyRefInput() {
    return this._keyRef.internalValue;
  }
}
export interface DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecEncryptionConfig {
  /**
  * Identifies the Key Management Service (KMS) key used to encrypt the secrets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/eks_services_k8s_aws_cluster_v1alpha1_manifest#provider DataK8SEksServicesK8SAwsClusterV1Alpha1Manifest#provider}
  */
  readonly provider?: DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecEncryptionConfigProvider;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/eks_services_k8s_aws_cluster_v1alpha1_manifest#resources DataK8SEksServicesK8SAwsClusterV1Alpha1Manifest#resources}
  */
  readonly resources?: string[];
}

export function dataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecEncryptionConfigToTerraform(struct?: DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecEncryptionConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: dataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecEncryptionConfigProviderToTerraform(struct!.provider),
    resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resources),
  }
}


export function dataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecEncryptionConfigToHclTerraform(struct?: DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecEncryptionConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provider: {
      value: dataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecEncryptionConfigProviderToHclTerraform(struct!.provider),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecEncryptionConfigProvider",
    },
    resources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecEncryptionConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecEncryptionConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._provider?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider?.internalValue;
    }
    if (this._resources !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecEncryptionConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._provider.internalValue = undefined;
      this._resources = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._provider.internalValue = value.provider;
      this._resources = value.resources;
    }
  }

  // provider - computed: false, optional: true, required: false
  private _provider = new DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecEncryptionConfigProviderOutputReference(this, "provider");
  public get provider() {
    return this._provider;
  }
  public putProvider(value: DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecEncryptionConfigProvider) {
    this._provider.internalValue = value;
  }
  public resetProvider() {
    this._provider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider.internalValue;
  }

  // resources - computed: false, optional: true, required: false
  private _resources?: string[]; 
  public get resources() {
    return this.getListAttribute('resources');
  }
  public set resources(value: string[]) {
    this._resources = value;
  }
  public resetResources() {
    this._resources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources;
  }
}

export class DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecEncryptionConfigList extends cdktf.ComplexList {
  public internalValue? : DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecEncryptionConfig[] | cdktf.IResolvable

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
  public get(index: number): DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecEncryptionConfigOutputReference {
    return new DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecEncryptionConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecKubernetesNetworkConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/eks_services_k8s_aws_cluster_v1alpha1_manifest#ip_family DataK8SEksServicesK8SAwsClusterV1Alpha1Manifest#ip_family}
  */
  readonly ipFamily?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/eks_services_k8s_aws_cluster_v1alpha1_manifest#service_i_pv4_cidr DataK8SEksServicesK8SAwsClusterV1Alpha1Manifest#service_i_pv4_cidr}
  */
  readonly serviceIPv4Cidr?: string;
}

export function dataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecKubernetesNetworkConfigToTerraform(struct?: DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecKubernetesNetworkConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_family: cdktf.stringToTerraform(struct!.ipFamily),
    service_i_pv4_cidr: cdktf.stringToTerraform(struct!.serviceIPv4Cidr),
  }
}


export function dataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecKubernetesNetworkConfigToHclTerraform(struct?: DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecKubernetesNetworkConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_family: {
      value: cdktf.stringToHclTerraform(struct!.ipFamily),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_i_pv4_cidr: {
      value: cdktf.stringToHclTerraform(struct!.serviceIPv4Cidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecKubernetesNetworkConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecKubernetesNetworkConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipFamily !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipFamily = this._ipFamily;
    }
    if (this._serviceIPv4Cidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceIPv4Cidr = this._serviceIPv4Cidr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecKubernetesNetworkConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipFamily = undefined;
      this._serviceIPv4Cidr = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipFamily = value.ipFamily;
      this._serviceIPv4Cidr = value.serviceIPv4Cidr;
    }
  }

  // ip_family - computed: false, optional: true, required: false
  private _ipFamily?: string; 
  public get ipFamily() {
    return this.getStringAttribute('ip_family');
  }
  public set ipFamily(value: string) {
    this._ipFamily = value;
  }
  public resetIpFamily() {
    this._ipFamily = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipFamilyInput() {
    return this._ipFamily;
  }

  // service_i_pv4_cidr - computed: false, optional: true, required: false
  private _serviceIPv4Cidr?: string; 
  public get serviceIPv4Cidr() {
    return this.getStringAttribute('service_i_pv4_cidr');
  }
  public set serviceIPv4Cidr(value: string) {
    this._serviceIPv4Cidr = value;
  }
  public resetServiceIPv4Cidr() {
    this._serviceIPv4Cidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIPv4CidrInput() {
    return this._serviceIPv4Cidr;
  }
}
export interface DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecLoggingClusterLogging {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/eks_services_k8s_aws_cluster_v1alpha1_manifest#enabled DataK8SEksServicesK8SAwsClusterV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/eks_services_k8s_aws_cluster_v1alpha1_manifest#types DataK8SEksServicesK8SAwsClusterV1Alpha1Manifest#types}
  */
  readonly types?: string[];
}

export function dataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecLoggingClusterLoggingToTerraform(struct?: DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecLoggingClusterLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.types),
  }
}


export function dataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecLoggingClusterLoggingToHclTerraform(struct?: DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecLoggingClusterLogging | cdktf.IResolvable): any {
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
    types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.types),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecLoggingClusterLoggingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecLoggingClusterLogging | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._types !== undefined) {
      hasAnyValues = true;
      internalValueResult.types = this._types;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecLoggingClusterLogging | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._types = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._types = value.types;
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

  // types - computed: false, optional: true, required: false
  private _types?: string[]; 
  public get types() {
    return this.getListAttribute('types');
  }
  public set types(value: string[]) {
    this._types = value;
  }
  public resetTypes() {
    this._types = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typesInput() {
    return this._types;
  }
}

export class DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecLoggingClusterLoggingList extends cdktf.ComplexList {
  public internalValue? : DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecLoggingClusterLogging[] | cdktf.IResolvable

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
  public get(index: number): DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecLoggingClusterLoggingOutputReference {
    return new DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecLoggingClusterLoggingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecLogging {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/eks_services_k8s_aws_cluster_v1alpha1_manifest#cluster_logging DataK8SEksServicesK8SAwsClusterV1Alpha1Manifest#cluster_logging}
  */
  readonly clusterLogging?: DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecLoggingClusterLogging[] | cdktf.IResolvable;
}

export function dataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecLoggingToTerraform(struct?: DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_logging: cdktf.listMapper(dataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecLoggingClusterLoggingToTerraform, false)(struct!.clusterLogging),
  }
}


export function dataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecLoggingToHclTerraform(struct?: DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_logging: {
      value: cdktf.listMapperHcl(dataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecLoggingClusterLoggingToHclTerraform, false)(struct!.clusterLogging),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecLoggingClusterLoggingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecLoggingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecLogging | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterLogging?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterLogging = this._clusterLogging?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecLogging | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterLogging.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterLogging.internalValue = value.clusterLogging;
    }
  }

  // cluster_logging - computed: false, optional: true, required: false
  private _clusterLogging = new DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecLoggingClusterLoggingList(this, "cluster_logging", false);
  public get clusterLogging() {
    return this._clusterLogging;
  }
  public putClusterLogging(value: DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecLoggingClusterLogging[] | cdktf.IResolvable) {
    this._clusterLogging.internalValue = value;
  }
  public resetClusterLogging() {
    this._clusterLogging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterLoggingInput() {
    return this._clusterLogging.internalValue;
  }
}
export interface DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecOutpostConfigControlPlanePlacement {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/eks_services_k8s_aws_cluster_v1alpha1_manifest#group_name DataK8SEksServicesK8SAwsClusterV1Alpha1Manifest#group_name}
  */
  readonly groupName?: string;
}

export function dataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecOutpostConfigControlPlanePlacementToTerraform(struct?: DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecOutpostConfigControlPlanePlacement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_name: cdktf.stringToTerraform(struct!.groupName),
  }
}


export function dataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecOutpostConfigControlPlanePlacementToHclTerraform(struct?: DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecOutpostConfigControlPlanePlacement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_name: {
      value: cdktf.stringToHclTerraform(struct!.groupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecOutpostConfigControlPlanePlacementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecOutpostConfigControlPlanePlacement | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupName = this._groupName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecOutpostConfigControlPlanePlacement | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupName = value.groupName;
    }
  }

  // group_name - computed: false, optional: true, required: false
  private _groupName?: string; 
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  public resetGroupName() {
    this._groupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName;
  }
}
export interface DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecOutpostConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/eks_services_k8s_aws_cluster_v1alpha1_manifest#control_plane_instance_type DataK8SEksServicesK8SAwsClusterV1Alpha1Manifest#control_plane_instance_type}
  */
  readonly controlPlaneInstanceType?: string;
  /**
  * The placement configuration for all the control plane instances of your local Amazon EKS cluster on an Amazon Web Services Outpost. For more information, see Capacity considerations (https://docs.aws.amazon.com/eks/latest/userguide/eks-outposts-capacity-considerations.html) in the Amazon EKS User Guide.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/eks_services_k8s_aws_cluster_v1alpha1_manifest#control_plane_placement DataK8SEksServicesK8SAwsClusterV1Alpha1Manifest#control_plane_placement}
  */
  readonly controlPlanePlacement?: DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecOutpostConfigControlPlanePlacement;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/eks_services_k8s_aws_cluster_v1alpha1_manifest#outpost_ar_ns DataK8SEksServicesK8SAwsClusterV1Alpha1Manifest#outpost_ar_ns}
  */
  readonly outpostArNs?: string[];
}

export function dataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecOutpostConfigToTerraform(struct?: DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecOutpostConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    control_plane_instance_type: cdktf.stringToTerraform(struct!.controlPlaneInstanceType),
    control_plane_placement: dataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecOutpostConfigControlPlanePlacementToTerraform(struct!.controlPlanePlacement),
    outpost_ar_ns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.outpostArNs),
  }
}


export function dataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecOutpostConfigToHclTerraform(struct?: DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecOutpostConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    control_plane_instance_type: {
      value: cdktf.stringToHclTerraform(struct!.controlPlaneInstanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    control_plane_placement: {
      value: dataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecOutpostConfigControlPlanePlacementToHclTerraform(struct!.controlPlanePlacement),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecOutpostConfigControlPlanePlacement",
    },
    outpost_ar_ns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.outpostArNs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecOutpostConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecOutpostConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._controlPlaneInstanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.controlPlaneInstanceType = this._controlPlaneInstanceType;
    }
    if (this._controlPlanePlacement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.controlPlanePlacement = this._controlPlanePlacement?.internalValue;
    }
    if (this._outpostArNs !== undefined) {
      hasAnyValues = true;
      internalValueResult.outpostArNs = this._outpostArNs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecOutpostConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._controlPlaneInstanceType = undefined;
      this._controlPlanePlacement.internalValue = undefined;
      this._outpostArNs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._controlPlaneInstanceType = value.controlPlaneInstanceType;
      this._controlPlanePlacement.internalValue = value.controlPlanePlacement;
      this._outpostArNs = value.outpostArNs;
    }
  }

  // control_plane_instance_type - computed: false, optional: true, required: false
  private _controlPlaneInstanceType?: string; 
  public get controlPlaneInstanceType() {
    return this.getStringAttribute('control_plane_instance_type');
  }
  public set controlPlaneInstanceType(value: string) {
    this._controlPlaneInstanceType = value;
  }
  public resetControlPlaneInstanceType() {
    this._controlPlaneInstanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneInstanceTypeInput() {
    return this._controlPlaneInstanceType;
  }

  // control_plane_placement - computed: false, optional: true, required: false
  private _controlPlanePlacement = new DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecOutpostConfigControlPlanePlacementOutputReference(this, "control_plane_placement");
  public get controlPlanePlacement() {
    return this._controlPlanePlacement;
  }
  public putControlPlanePlacement(value: DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecOutpostConfigControlPlanePlacement) {
    this._controlPlanePlacement.internalValue = value;
  }
  public resetControlPlanePlacement() {
    this._controlPlanePlacement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlanePlacementInput() {
    return this._controlPlanePlacement.internalValue;
  }

  // outpost_ar_ns - computed: false, optional: true, required: false
  private _outpostArNs?: string[]; 
  public get outpostArNs() {
    return this.getListAttribute('outpost_ar_ns');
  }
  public set outpostArNs(value: string[]) {
    this._outpostArNs = value;
  }
  public resetOutpostArNs() {
    this._outpostArNs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outpostArNsInput() {
    return this._outpostArNs;
  }
}
export interface DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecResourcesVpcConfigSecurityGroupRefsFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/eks_services_k8s_aws_cluster_v1alpha1_manifest#name DataK8SEksServicesK8SAwsClusterV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/eks_services_k8s_aws_cluster_v1alpha1_manifest#namespace DataK8SEksServicesK8SAwsClusterV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecResourcesVpcConfigSecurityGroupRefsFromToTerraform(struct?: DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecResourcesVpcConfigSecurityGroupRefsFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecResourcesVpcConfigSecurityGroupRefsFromToHclTerraform(struct?: DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecResourcesVpcConfigSecurityGroupRefsFrom | cdktf.IResolvable): any {
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

export class DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecResourcesVpcConfigSecurityGroupRefsFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecResourcesVpcConfigSecurityGroupRefsFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecResourcesVpcConfigSecurityGroupRefsFrom | cdktf.IResolvable | undefined) {
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
export interface DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecResourcesVpcConfigSecurityGroupRefs {
  /**
  * AWSResourceReference provides all the values necessary to reference another k8s resource for finding the identifier(Id/ARN/Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/eks_services_k8s_aws_cluster_v1alpha1_manifest#from DataK8SEksServicesK8SAwsClusterV1Alpha1Manifest#from}
  */
  readonly from?: DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecResourcesVpcConfigSecurityGroupRefsFrom;
}

export function dataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecResourcesVpcConfigSecurityGroupRefsToTerraform(struct?: DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecResourcesVpcConfigSecurityGroupRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: dataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecResourcesVpcConfigSecurityGroupRefsFromToTerraform(struct!.from),
  }
}


export function dataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecResourcesVpcConfigSecurityGroupRefsToHclTerraform(struct?: DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecResourcesVpcConfigSecurityGroupRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: dataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecResourcesVpcConfigSecurityGroupRefsFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecResourcesVpcConfigSecurityGroupRefsFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecResourcesVpcConfigSecurityGroupRefsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecResourcesVpcConfigSecurityGroupRefs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecResourcesVpcConfigSecurityGroupRefs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._from.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._from.internalValue = value.from;
    }
  }

  // from - computed: false, optional: true, required: false
  private _from = new DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecResourcesVpcConfigSecurityGroupRefsFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecResourcesVpcConfigSecurityGroupRefsFrom) {
    this._from.internalValue = value;
  }
  public resetFrom() {
    this._from.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from.internalValue;
  }
}

export class DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecResourcesVpcConfigSecurityGroupRefsList extends cdktf.ComplexList {
  public internalValue? : DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecResourcesVpcConfigSecurityGroupRefs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecResourcesVpcConfigSecurityGroupRefsOutputReference {
    return new DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecResourcesVpcConfigSecurityGroupRefsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecResourcesVpcConfigSubnetRefsFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/eks_services_k8s_aws_cluster_v1alpha1_manifest#name DataK8SEksServicesK8SAwsClusterV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/eks_services_k8s_aws_cluster_v1alpha1_manifest#namespace DataK8SEksServicesK8SAwsClusterV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecResourcesVpcConfigSubnetRefsFromToTerraform(struct?: DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecResourcesVpcConfigSubnetRefsFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecResourcesVpcConfigSubnetRefsFromToHclTerraform(struct?: DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecResourcesVpcConfigSubnetRefsFrom | cdktf.IResolvable): any {
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

export class DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecResourcesVpcConfigSubnetRefsFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecResourcesVpcConfigSubnetRefsFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecResourcesVpcConfigSubnetRefsFrom | cdktf.IResolvable | undefined) {
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
export interface DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecResourcesVpcConfigSubnetRefs {
  /**
  * AWSResourceReference provides all the values necessary to reference another k8s resource for finding the identifier(Id/ARN/Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/eks_services_k8s_aws_cluster_v1alpha1_manifest#from DataK8SEksServicesK8SAwsClusterV1Alpha1Manifest#from}
  */
  readonly from?: DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecResourcesVpcConfigSubnetRefsFrom;
}

export function dataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecResourcesVpcConfigSubnetRefsToTerraform(struct?: DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecResourcesVpcConfigSubnetRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: dataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecResourcesVpcConfigSubnetRefsFromToTerraform(struct!.from),
  }
}


export function dataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecResourcesVpcConfigSubnetRefsToHclTerraform(struct?: DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecResourcesVpcConfigSubnetRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: dataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecResourcesVpcConfigSubnetRefsFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecResourcesVpcConfigSubnetRefsFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecResourcesVpcConfigSubnetRefsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecResourcesVpcConfigSubnetRefs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecResourcesVpcConfigSubnetRefs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._from.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._from.internalValue = value.from;
    }
  }

  // from - computed: false, optional: true, required: false
  private _from = new DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecResourcesVpcConfigSubnetRefsFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecResourcesVpcConfigSubnetRefsFrom) {
    this._from.internalValue = value;
  }
  public resetFrom() {
    this._from.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from.internalValue;
  }
}

export class DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecResourcesVpcConfigSubnetRefsList extends cdktf.ComplexList {
  public internalValue? : DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecResourcesVpcConfigSubnetRefs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecResourcesVpcConfigSubnetRefsOutputReference {
    return new DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecResourcesVpcConfigSubnetRefsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecResourcesVpcConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/eks_services_k8s_aws_cluster_v1alpha1_manifest#endpoint_private_access DataK8SEksServicesK8SAwsClusterV1Alpha1Manifest#endpoint_private_access}
  */
  readonly endpointPrivateAccess?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/eks_services_k8s_aws_cluster_v1alpha1_manifest#endpoint_public_access DataK8SEksServicesK8SAwsClusterV1Alpha1Manifest#endpoint_public_access}
  */
  readonly endpointPublicAccess?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/eks_services_k8s_aws_cluster_v1alpha1_manifest#public_access_cidrs DataK8SEksServicesK8SAwsClusterV1Alpha1Manifest#public_access_cidrs}
  */
  readonly publicAccessCidrs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/eks_services_k8s_aws_cluster_v1alpha1_manifest#security_group_i_ds DataK8SEksServicesK8SAwsClusterV1Alpha1Manifest#security_group_i_ds}
  */
  readonly securityGroupIDs?: string[];
  /**
  * Reference field for SecurityGroupIDs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/eks_services_k8s_aws_cluster_v1alpha1_manifest#security_group_refs DataK8SEksServicesK8SAwsClusterV1Alpha1Manifest#security_group_refs}
  */
  readonly securityGroupRefs?: DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecResourcesVpcConfigSecurityGroupRefs[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/eks_services_k8s_aws_cluster_v1alpha1_manifest#subnet_i_ds DataK8SEksServicesK8SAwsClusterV1Alpha1Manifest#subnet_i_ds}
  */
  readonly subnetIDs?: string[];
  /**
  * Reference field for SubnetIDs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/eks_services_k8s_aws_cluster_v1alpha1_manifest#subnet_refs DataK8SEksServicesK8SAwsClusterV1Alpha1Manifest#subnet_refs}
  */
  readonly subnetRefs?: DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecResourcesVpcConfigSubnetRefs[] | cdktf.IResolvable;
}

export function dataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecResourcesVpcConfigToTerraform(struct?: DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecResourcesVpcConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint_private_access: cdktf.booleanToTerraform(struct!.endpointPrivateAccess),
    endpoint_public_access: cdktf.booleanToTerraform(struct!.endpointPublicAccess),
    public_access_cidrs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.publicAccessCidrs),
    security_group_i_ds: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroupIDs),
    security_group_refs: cdktf.listMapper(dataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecResourcesVpcConfigSecurityGroupRefsToTerraform, false)(struct!.securityGroupRefs),
    subnet_i_ds: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subnetIDs),
    subnet_refs: cdktf.listMapper(dataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecResourcesVpcConfigSubnetRefsToTerraform, false)(struct!.subnetRefs),
  }
}


export function dataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecResourcesVpcConfigToHclTerraform(struct?: DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecResourcesVpcConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpoint_private_access: {
      value: cdktf.booleanToHclTerraform(struct!.endpointPrivateAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    endpoint_public_access: {
      value: cdktf.booleanToHclTerraform(struct!.endpointPublicAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    public_access_cidrs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.publicAccessCidrs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    security_group_i_ds: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroupIDs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    security_group_refs: {
      value: cdktf.listMapperHcl(dataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecResourcesVpcConfigSecurityGroupRefsToHclTerraform, false)(struct!.securityGroupRefs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecResourcesVpcConfigSecurityGroupRefsList",
    },
    subnet_i_ds: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subnetIDs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    subnet_refs: {
      value: cdktf.listMapperHcl(dataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecResourcesVpcConfigSubnetRefsToHclTerraform, false)(struct!.subnetRefs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecResourcesVpcConfigSubnetRefsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecResourcesVpcConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecResourcesVpcConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpointPrivateAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointPrivateAccess = this._endpointPrivateAccess;
    }
    if (this._endpointPublicAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointPublicAccess = this._endpointPublicAccess;
    }
    if (this._publicAccessCidrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicAccessCidrs = this._publicAccessCidrs;
    }
    if (this._securityGroupIDs !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIDs = this._securityGroupIDs;
    }
    if (this._securityGroupRefs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupRefs = this._securityGroupRefs?.internalValue;
    }
    if (this._subnetIDs !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetIDs = this._subnetIDs;
    }
    if (this._subnetRefs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetRefs = this._subnetRefs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecResourcesVpcConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endpointPrivateAccess = undefined;
      this._endpointPublicAccess = undefined;
      this._publicAccessCidrs = undefined;
      this._securityGroupIDs = undefined;
      this._securityGroupRefs.internalValue = undefined;
      this._subnetIDs = undefined;
      this._subnetRefs.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endpointPrivateAccess = value.endpointPrivateAccess;
      this._endpointPublicAccess = value.endpointPublicAccess;
      this._publicAccessCidrs = value.publicAccessCidrs;
      this._securityGroupIDs = value.securityGroupIDs;
      this._securityGroupRefs.internalValue = value.securityGroupRefs;
      this._subnetIDs = value.subnetIDs;
      this._subnetRefs.internalValue = value.subnetRefs;
    }
  }

  // endpoint_private_access - computed: false, optional: true, required: false
  private _endpointPrivateAccess?: boolean | cdktf.IResolvable; 
  public get endpointPrivateAccess() {
    return this.getBooleanAttribute('endpoint_private_access');
  }
  public set endpointPrivateAccess(value: boolean | cdktf.IResolvable) {
    this._endpointPrivateAccess = value;
  }
  public resetEndpointPrivateAccess() {
    this._endpointPrivateAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointPrivateAccessInput() {
    return this._endpointPrivateAccess;
  }

  // endpoint_public_access - computed: false, optional: true, required: false
  private _endpointPublicAccess?: boolean | cdktf.IResolvable; 
  public get endpointPublicAccess() {
    return this.getBooleanAttribute('endpoint_public_access');
  }
  public set endpointPublicAccess(value: boolean | cdktf.IResolvable) {
    this._endpointPublicAccess = value;
  }
  public resetEndpointPublicAccess() {
    this._endpointPublicAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointPublicAccessInput() {
    return this._endpointPublicAccess;
  }

  // public_access_cidrs - computed: false, optional: true, required: false
  private _publicAccessCidrs?: string[]; 
  public get publicAccessCidrs() {
    return this.getListAttribute('public_access_cidrs');
  }
  public set publicAccessCidrs(value: string[]) {
    this._publicAccessCidrs = value;
  }
  public resetPublicAccessCidrs() {
    this._publicAccessCidrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicAccessCidrsInput() {
    return this._publicAccessCidrs;
  }

  // security_group_i_ds - computed: false, optional: true, required: false
  private _securityGroupIDs?: string[]; 
  public get securityGroupIDs() {
    return this.getListAttribute('security_group_i_ds');
  }
  public set securityGroupIDs(value: string[]) {
    this._securityGroupIDs = value;
  }
  public resetSecurityGroupIDs() {
    this._securityGroupIDs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIDsInput() {
    return this._securityGroupIDs;
  }

  // security_group_refs - computed: false, optional: true, required: false
  private _securityGroupRefs = new DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecResourcesVpcConfigSecurityGroupRefsList(this, "security_group_refs", false);
  public get securityGroupRefs() {
    return this._securityGroupRefs;
  }
  public putSecurityGroupRefs(value: DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecResourcesVpcConfigSecurityGroupRefs[] | cdktf.IResolvable) {
    this._securityGroupRefs.internalValue = value;
  }
  public resetSecurityGroupRefs() {
    this._securityGroupRefs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupRefsInput() {
    return this._securityGroupRefs.internalValue;
  }

  // subnet_i_ds - computed: false, optional: true, required: false
  private _subnetIDs?: string[]; 
  public get subnetIDs() {
    return this.getListAttribute('subnet_i_ds');
  }
  public set subnetIDs(value: string[]) {
    this._subnetIDs = value;
  }
  public resetSubnetIDs() {
    this._subnetIDs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIDsInput() {
    return this._subnetIDs;
  }

  // subnet_refs - computed: false, optional: true, required: false
  private _subnetRefs = new DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecResourcesVpcConfigSubnetRefsList(this, "subnet_refs", false);
  public get subnetRefs() {
    return this._subnetRefs;
  }
  public putSubnetRefs(value: DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecResourcesVpcConfigSubnetRefs[] | cdktf.IResolvable) {
    this._subnetRefs.internalValue = value;
  }
  public resetSubnetRefs() {
    this._subnetRefs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetRefsInput() {
    return this._subnetRefs.internalValue;
  }
}
export interface DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecRoleRefFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/eks_services_k8s_aws_cluster_v1alpha1_manifest#name DataK8SEksServicesK8SAwsClusterV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/eks_services_k8s_aws_cluster_v1alpha1_manifest#namespace DataK8SEksServicesK8SAwsClusterV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecRoleRefFromToTerraform(struct?: DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecRoleRefFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecRoleRefFromToHclTerraform(struct?: DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecRoleRefFrom | cdktf.IResolvable): any {
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

export class DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecRoleRefFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecRoleRefFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecRoleRefFrom | cdktf.IResolvable | undefined) {
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
export interface DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecRoleRef {
  /**
  * AWSResourceReference provides all the values necessary to reference another k8s resource for finding the identifier(Id/ARN/Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/eks_services_k8s_aws_cluster_v1alpha1_manifest#from DataK8SEksServicesK8SAwsClusterV1Alpha1Manifest#from}
  */
  readonly from?: DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecRoleRefFrom;
}

export function dataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecRoleRefToTerraform(struct?: DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecRoleRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: dataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecRoleRefFromToTerraform(struct!.from),
  }
}


export function dataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecRoleRefToHclTerraform(struct?: DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecRoleRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: dataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecRoleRefFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecRoleRefFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecRoleRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecRoleRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecRoleRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._from.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._from.internalValue = value.from;
    }
  }

  // from - computed: false, optional: true, required: false
  private _from = new DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecRoleRefFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecRoleRefFrom) {
    this._from.internalValue = value;
  }
  public resetFrom() {
    this._from.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from.internalValue;
  }
}
export interface DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecUpgradePolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/eks_services_k8s_aws_cluster_v1alpha1_manifest#support_type DataK8SEksServicesK8SAwsClusterV1Alpha1Manifest#support_type}
  */
  readonly supportType?: string;
}

export function dataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecUpgradePolicyToTerraform(struct?: DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecUpgradePolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    support_type: cdktf.stringToTerraform(struct!.supportType),
  }
}


export function dataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecUpgradePolicyToHclTerraform(struct?: DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecUpgradePolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    support_type: {
      value: cdktf.stringToHclTerraform(struct!.supportType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecUpgradePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecUpgradePolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._supportType !== undefined) {
      hasAnyValues = true;
      internalValueResult.supportType = this._supportType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecUpgradePolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._supportType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._supportType = value.supportType;
    }
  }

  // support_type - computed: false, optional: true, required: false
  private _supportType?: string; 
  public get supportType() {
    return this.getStringAttribute('support_type');
  }
  public set supportType(value: string) {
    this._supportType = value;
  }
  public resetSupportType() {
    this._supportType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportTypeInput() {
    return this._supportType;
  }
}
export interface DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpec {
  /**
  * The access configuration for the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/eks_services_k8s_aws_cluster_v1alpha1_manifest#access_config DataK8SEksServicesK8SAwsClusterV1Alpha1Manifest#access_config}
  */
  readonly accessConfig?: DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecAccessConfig;
  /**
  * If you set this value to False when creating a cluster, the default networking add-ons will not be installed. The default networking addons include vpc-cni, coredns, and kube-proxy. Use this option when you plan to install third-party alternative add-ons or self-manage the default networking add-ons.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/eks_services_k8s_aws_cluster_v1alpha1_manifest#bootstrap_self_managed_addons DataK8SEksServicesK8SAwsClusterV1Alpha1Manifest#bootstrap_self_managed_addons}
  */
  readonly bootstrapSelfManagedAddons?: boolean | cdktf.IResolvable;
  /**
  * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/eks_services_k8s_aws_cluster_v1alpha1_manifest#client_request_token DataK8SEksServicesK8SAwsClusterV1Alpha1Manifest#client_request_token}
  */
  readonly clientRequestToken?: string;
  /**
  * The encryption configuration for the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/eks_services_k8s_aws_cluster_v1alpha1_manifest#encryption_config DataK8SEksServicesK8SAwsClusterV1Alpha1Manifest#encryption_config}
  */
  readonly encryptionConfig?: DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecEncryptionConfig[] | cdktf.IResolvable;
  /**
  * The Kubernetes network configuration for the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/eks_services_k8s_aws_cluster_v1alpha1_manifest#kubernetes_network_config DataK8SEksServicesK8SAwsClusterV1Alpha1Manifest#kubernetes_network_config}
  */
  readonly kubernetesNetworkConfig?: DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecKubernetesNetworkConfig;
  /**
  * Enable or disable exporting the Kubernetes control plane logs for your cluster to CloudWatch Logs. By default, cluster control plane logs aren't exported to CloudWatch Logs. For more information, see Amazon EKS Cluster control plane logs (https://docs.aws.amazon.com/eks/latest/userguide/control-plane-logs.html) in the Amazon EKS User Guide . CloudWatch Logs ingestion, archive storage, and data scanning rates apply to exported control plane logs. For more information, see CloudWatch Pricing (http://aws.amazon.com/cloudwatch/pricing/).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/eks_services_k8s_aws_cluster_v1alpha1_manifest#logging DataK8SEksServicesK8SAwsClusterV1Alpha1Manifest#logging}
  */
  readonly logging?: DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecLogging;
  /**
  * The unique name to give to your cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/eks_services_k8s_aws_cluster_v1alpha1_manifest#name DataK8SEksServicesK8SAwsClusterV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * An object representing the configuration of your local Amazon EKS cluster on an Amazon Web Services Outpost. Before creating a local cluster on an Outpost, review Local clusters for Amazon EKS on Amazon Web Services Outposts (https://docs.aws.amazon.com/eks/latest/userguide/eks-outposts-local-cluster-overview.html) in the Amazon EKS User Guide. This object isn't available for creating Amazon EKS clusters on the Amazon Web Services cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/eks_services_k8s_aws_cluster_v1alpha1_manifest#outpost_config DataK8SEksServicesK8SAwsClusterV1Alpha1Manifest#outpost_config}
  */
  readonly outpostConfig?: DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecOutpostConfig;
  /**
  * The VPC configuration that's used by the cluster control plane. Amazon EKS VPC resources have specific requirements to work properly with Kubernetes. For more information, see Cluster VPC Considerations (https://docs.aws.amazon.com/eks/latest/userguide/network_reqs.html) and Cluster Security Group Considerations (https://docs.aws.amazon.com/eks/latest/userguide/sec-group-reqs.html) in the Amazon EKS User Guide. You must specify at least two subnets. You can specify up to five security groups. However, we recommend that you use a dedicated security group for your cluster control plane.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/eks_services_k8s_aws_cluster_v1alpha1_manifest#resources_vpc_config DataK8SEksServicesK8SAwsClusterV1Alpha1Manifest#resources_vpc_config}
  */
  readonly resourcesVpcConfig: DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecResourcesVpcConfig;
  /**
  * The Amazon Resource Name (ARN) of the IAM role that provides permissions for the Kubernetes control plane to make calls to Amazon Web Services API operations on your behalf. For more information, see Amazon EKS Service IAM Role (https://docs.aws.amazon.com/eks/latest/userguide/service_IAM_role.html) in the Amazon EKS User Guide .
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/eks_services_k8s_aws_cluster_v1alpha1_manifest#role_arn DataK8SEksServicesK8SAwsClusterV1Alpha1Manifest#role_arn}
  */
  readonly roleArn?: string;
  /**
  * AWSResourceReferenceWrapper provides a wrapper around *AWSResourceReference type to provide more user friendly syntax for references using 'from' field Ex: APIIDRef: from: name: my-api
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/eks_services_k8s_aws_cluster_v1alpha1_manifest#role_ref DataK8SEksServicesK8SAwsClusterV1Alpha1Manifest#role_ref}
  */
  readonly roleRef?: DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecRoleRef;
  /**
  * Metadata that assists with categorization and organization. Each tag consists of a key and an optional value. You define both. Tags don't propagate to any other cluster or Amazon Web Services resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/eks_services_k8s_aws_cluster_v1alpha1_manifest#tags DataK8SEksServicesK8SAwsClusterV1Alpha1Manifest#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * New clusters, by default, have extended support enabled. You can disable extended support when creating a cluster by setting this value to STANDARD.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/eks_services_k8s_aws_cluster_v1alpha1_manifest#upgrade_policy DataK8SEksServicesK8SAwsClusterV1Alpha1Manifest#upgrade_policy}
  */
  readonly upgradePolicy?: DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecUpgradePolicy;
  /**
  * The desired Kubernetes version for your cluster. If you don't specify a value here, the default version available in Amazon EKS is used. The default version might not be the latest version available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/eks_services_k8s_aws_cluster_v1alpha1_manifest#version DataK8SEksServicesK8SAwsClusterV1Alpha1Manifest#version}
  */
  readonly version?: string;
}

export function dataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecToTerraform(struct?: DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_config: dataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecAccessConfigToTerraform(struct!.accessConfig),
    bootstrap_self_managed_addons: cdktf.booleanToTerraform(struct!.bootstrapSelfManagedAddons),
    client_request_token: cdktf.stringToTerraform(struct!.clientRequestToken),
    encryption_config: cdktf.listMapper(dataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecEncryptionConfigToTerraform, false)(struct!.encryptionConfig),
    kubernetes_network_config: dataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecKubernetesNetworkConfigToTerraform(struct!.kubernetesNetworkConfig),
    logging: dataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecLoggingToTerraform(struct!.logging),
    name: cdktf.stringToTerraform(struct!.name),
    outpost_config: dataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecOutpostConfigToTerraform(struct!.outpostConfig),
    resources_vpc_config: dataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecResourcesVpcConfigToTerraform(struct!.resourcesVpcConfig),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    role_ref: dataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecRoleRefToTerraform(struct!.roleRef),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
    upgrade_policy: dataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecUpgradePolicyToTerraform(struct!.upgradePolicy),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_config: {
      value: dataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecAccessConfigToHclTerraform(struct!.accessConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecAccessConfig",
    },
    bootstrap_self_managed_addons: {
      value: cdktf.booleanToHclTerraform(struct!.bootstrapSelfManagedAddons),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    client_request_token: {
      value: cdktf.stringToHclTerraform(struct!.clientRequestToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encryption_config: {
      value: cdktf.listMapperHcl(dataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecEncryptionConfigToHclTerraform, false)(struct!.encryptionConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecEncryptionConfigList",
    },
    kubernetes_network_config: {
      value: dataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecKubernetesNetworkConfigToHclTerraform(struct!.kubernetesNetworkConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecKubernetesNetworkConfig",
    },
    logging: {
      value: dataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecLoggingToHclTerraform(struct!.logging),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecLogging",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    outpost_config: {
      value: dataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecOutpostConfigToHclTerraform(struct!.outpostConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecOutpostConfig",
    },
    resources_vpc_config: {
      value: dataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecResourcesVpcConfigToHclTerraform(struct!.resourcesVpcConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecResourcesVpcConfig",
    },
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_ref: {
      value: dataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecRoleRefToHclTerraform(struct!.roleRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecRoleRef",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    upgrade_policy: {
      value: dataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecUpgradePolicyToHclTerraform(struct!.upgradePolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecUpgradePolicy",
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

export class DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessConfig = this._accessConfig?.internalValue;
    }
    if (this._bootstrapSelfManagedAddons !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootstrapSelfManagedAddons = this._bootstrapSelfManagedAddons;
    }
    if (this._clientRequestToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientRequestToken = this._clientRequestToken;
    }
    if (this._encryptionConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionConfig = this._encryptionConfig?.internalValue;
    }
    if (this._kubernetesNetworkConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetesNetworkConfig = this._kubernetesNetworkConfig?.internalValue;
    }
    if (this._logging?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logging = this._logging?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._outpostConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outpostConfig = this._outpostConfig?.internalValue;
    }
    if (this._resourcesVpcConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourcesVpcConfig = this._resourcesVpcConfig?.internalValue;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._roleRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleRef = this._roleRef?.internalValue;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._upgradePolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.upgradePolicy = this._upgradePolicy?.internalValue;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessConfig.internalValue = undefined;
      this._bootstrapSelfManagedAddons = undefined;
      this._clientRequestToken = undefined;
      this._encryptionConfig.internalValue = undefined;
      this._kubernetesNetworkConfig.internalValue = undefined;
      this._logging.internalValue = undefined;
      this._name = undefined;
      this._outpostConfig.internalValue = undefined;
      this._resourcesVpcConfig.internalValue = undefined;
      this._roleArn = undefined;
      this._roleRef.internalValue = undefined;
      this._tags = undefined;
      this._upgradePolicy.internalValue = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessConfig.internalValue = value.accessConfig;
      this._bootstrapSelfManagedAddons = value.bootstrapSelfManagedAddons;
      this._clientRequestToken = value.clientRequestToken;
      this._encryptionConfig.internalValue = value.encryptionConfig;
      this._kubernetesNetworkConfig.internalValue = value.kubernetesNetworkConfig;
      this._logging.internalValue = value.logging;
      this._name = value.name;
      this._outpostConfig.internalValue = value.outpostConfig;
      this._resourcesVpcConfig.internalValue = value.resourcesVpcConfig;
      this._roleArn = value.roleArn;
      this._roleRef.internalValue = value.roleRef;
      this._tags = value.tags;
      this._upgradePolicy.internalValue = value.upgradePolicy;
      this._version = value.version;
    }
  }

  // access_config - computed: false, optional: true, required: false
  private _accessConfig = new DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecAccessConfigOutputReference(this, "access_config");
  public get accessConfig() {
    return this._accessConfig;
  }
  public putAccessConfig(value: DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecAccessConfig) {
    this._accessConfig.internalValue = value;
  }
  public resetAccessConfig() {
    this._accessConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessConfigInput() {
    return this._accessConfig.internalValue;
  }

  // bootstrap_self_managed_addons - computed: false, optional: true, required: false
  private _bootstrapSelfManagedAddons?: boolean | cdktf.IResolvable; 
  public get bootstrapSelfManagedAddons() {
    return this.getBooleanAttribute('bootstrap_self_managed_addons');
  }
  public set bootstrapSelfManagedAddons(value: boolean | cdktf.IResolvable) {
    this._bootstrapSelfManagedAddons = value;
  }
  public resetBootstrapSelfManagedAddons() {
    this._bootstrapSelfManagedAddons = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootstrapSelfManagedAddonsInput() {
    return this._bootstrapSelfManagedAddons;
  }

  // client_request_token - computed: false, optional: true, required: false
  private _clientRequestToken?: string; 
  public get clientRequestToken() {
    return this.getStringAttribute('client_request_token');
  }
  public set clientRequestToken(value: string) {
    this._clientRequestToken = value;
  }
  public resetClientRequestToken() {
    this._clientRequestToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientRequestTokenInput() {
    return this._clientRequestToken;
  }

  // encryption_config - computed: false, optional: true, required: false
  private _encryptionConfig = new DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecEncryptionConfigList(this, "encryption_config", false);
  public get encryptionConfig() {
    return this._encryptionConfig;
  }
  public putEncryptionConfig(value: DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecEncryptionConfig[] | cdktf.IResolvable) {
    this._encryptionConfig.internalValue = value;
  }
  public resetEncryptionConfig() {
    this._encryptionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionConfigInput() {
    return this._encryptionConfig.internalValue;
  }

  // kubernetes_network_config - computed: false, optional: true, required: false
  private _kubernetesNetworkConfig = new DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecKubernetesNetworkConfigOutputReference(this, "kubernetes_network_config");
  public get kubernetesNetworkConfig() {
    return this._kubernetesNetworkConfig;
  }
  public putKubernetesNetworkConfig(value: DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecKubernetesNetworkConfig) {
    this._kubernetesNetworkConfig.internalValue = value;
  }
  public resetKubernetesNetworkConfig() {
    this._kubernetesNetworkConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesNetworkConfigInput() {
    return this._kubernetesNetworkConfig.internalValue;
  }

  // logging - computed: false, optional: true, required: false
  private _logging = new DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecLoggingOutputReference(this, "logging");
  public get logging() {
    return this._logging;
  }
  public putLogging(value: DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecLogging) {
    this._logging.internalValue = value;
  }
  public resetLogging() {
    this._logging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging.internalValue;
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

  // outpost_config - computed: false, optional: true, required: false
  private _outpostConfig = new DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecOutpostConfigOutputReference(this, "outpost_config");
  public get outpostConfig() {
    return this._outpostConfig;
  }
  public putOutpostConfig(value: DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecOutpostConfig) {
    this._outpostConfig.internalValue = value;
  }
  public resetOutpostConfig() {
    this._outpostConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outpostConfigInput() {
    return this._outpostConfig.internalValue;
  }

  // resources_vpc_config - computed: false, optional: false, required: true
  private _resourcesVpcConfig = new DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecResourcesVpcConfigOutputReference(this, "resources_vpc_config");
  public get resourcesVpcConfig() {
    return this._resourcesVpcConfig;
  }
  public putResourcesVpcConfig(value: DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecResourcesVpcConfig) {
    this._resourcesVpcConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesVpcConfigInput() {
    return this._resourcesVpcConfig.internalValue;
  }

  // role_arn - computed: false, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // role_ref - computed: false, optional: true, required: false
  private _roleRef = new DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecRoleRefOutputReference(this, "role_ref");
  public get roleRef() {
    return this._roleRef;
  }
  public putRoleRef(value: DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecRoleRef) {
    this._roleRef.internalValue = value;
  }
  public resetRoleRef() {
    this._roleRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleRefInput() {
    return this._roleRef.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // upgrade_policy - computed: false, optional: true, required: false
  private _upgradePolicy = new DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecUpgradePolicyOutputReference(this, "upgrade_policy");
  public get upgradePolicy() {
    return this._upgradePolicy;
  }
  public putUpgradePolicy(value: DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecUpgradePolicy) {
    this._upgradePolicy.internalValue = value;
  }
  public resetUpgradePolicy() {
    this._upgradePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradePolicyInput() {
    return this._upgradePolicy.internalValue;
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

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/eks_services_k8s_aws_cluster_v1alpha1_manifest k8s_eks_services_k8s_aws_cluster_v1alpha1_manifest}
*/
export class DataK8SEksServicesK8SAwsClusterV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_eks_services_k8s_aws_cluster_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SEksServicesK8SAwsClusterV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SEksServicesK8SAwsClusterV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SEksServicesK8SAwsClusterV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/eks_services_k8s_aws_cluster_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SEksServicesK8SAwsClusterV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_eks_services_k8s_aws_cluster_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/eks_services_k8s_aws_cluster_v1alpha1_manifest k8s_eks_services_k8s_aws_cluster_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_eks_services_k8s_aws_cluster_v1alpha1_manifest',
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
  private _metadata = new DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpec) {
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
      metadata: dataK8SEksServicesK8SAwsClusterV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SEksServicesK8SAwsClusterV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SEksServicesK8SAwsClusterV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
