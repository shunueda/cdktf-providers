// https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#metadata DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#metadata}
  */
  readonly metadata: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestMetadata;
  /**
  * ClusterDeploymentSpec defines the desired state of ClusterDeployment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#spec DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#spec}
  */
  readonly spec?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpec;
}
export interface DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#annotations DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#labels DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#name DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#namespace DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestMetadataToTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestMetadataToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecBoundServiceAccountSigningKeySecretRef {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#name DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecBoundServiceAccountSigningKeySecretRefToTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecBoundServiceAccountSigningKeySecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecBoundServiceAccountSigningKeySecretRefToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecBoundServiceAccountSigningKeySecretRef | cdktf.IResolvable): any {
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

export class DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecBoundServiceAccountSigningKeySecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecBoundServiceAccountSigningKeySecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecBoundServiceAccountSigningKeySecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecCertificateBundlesCertificateSecretRef {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#name DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecCertificateBundlesCertificateSecretRefToTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecCertificateBundlesCertificateSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecCertificateBundlesCertificateSecretRefToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecCertificateBundlesCertificateSecretRef | cdktf.IResolvable): any {
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

export class DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecCertificateBundlesCertificateSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecCertificateBundlesCertificateSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecCertificateBundlesCertificateSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecCertificateBundles {
  /**
  * CertificateSecretRef is the reference to the secret that contains the certificate bundle. If the certificate bundle is to be generated, it will be generated with the name in this reference. Otherwise, it is expected that the secret should exist in the same namespace as the ClusterDeployment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#certificate_secret_ref DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#certificate_secret_ref}
  */
  readonly certificateSecretRef: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecCertificateBundlesCertificateSecretRef;
  /**
  * Generate indicates whether this bundle should have real certificates generated for it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#generate DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#generate}
  */
  readonly generate?: boolean | cdktf.IResolvable;
  /**
  * Name is an identifier that must be unique within the bundle and must be referenced by an ingress or by the control plane serving certs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#name DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecCertificateBundlesToTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecCertificateBundles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_secret_ref: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecCertificateBundlesCertificateSecretRefToTerraform(struct!.certificateSecretRef),
    generate: cdktf.booleanToTerraform(struct!.generate),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecCertificateBundlesToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecCertificateBundles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_secret_ref: {
      value: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecCertificateBundlesCertificateSecretRefToHclTerraform(struct!.certificateSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecCertificateBundlesCertificateSecretRef",
    },
    generate: {
      value: cdktf.booleanToHclTerraform(struct!.generate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecCertificateBundlesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecCertificateBundles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateSecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateSecretRef = this._certificateSecretRef?.internalValue;
    }
    if (this._generate !== undefined) {
      hasAnyValues = true;
      internalValueResult.generate = this._generate;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecCertificateBundles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateSecretRef.internalValue = undefined;
      this._generate = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateSecretRef.internalValue = value.certificateSecretRef;
      this._generate = value.generate;
      this._name = value.name;
    }
  }

  // certificate_secret_ref - computed: false, optional: false, required: true
  private _certificateSecretRef = new DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecCertificateBundlesCertificateSecretRefOutputReference(this, "certificate_secret_ref");
  public get certificateSecretRef() {
    return this._certificateSecretRef;
  }
  public putCertificateSecretRef(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecCertificateBundlesCertificateSecretRef) {
    this._certificateSecretRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateSecretRefInput() {
    return this._certificateSecretRef.internalValue;
  }

  // generate - computed: false, optional: true, required: false
  private _generate?: boolean | cdktf.IResolvable; 
  public get generate() {
    return this.getBooleanAttribute('generate');
  }
  public set generate(value: boolean | cdktf.IResolvable) {
    this._generate = value;
  }
  public resetGenerate() {
    this._generate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateInput() {
    return this._generate;
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

export class DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecCertificateBundlesList extends cdktf.ComplexList {
  public internalValue? : DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecCertificateBundles[] | cdktf.IResolvable

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
  public get(index: number): DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecCertificateBundlesOutputReference {
    return new DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecCertificateBundlesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterInstallRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#group DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#group}
  */
  readonly group: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#kind DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#name DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#version DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#version}
  */
  readonly version: string;
}

export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterInstallRefToTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterInstallRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterInstallRefToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterInstallRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterInstallRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterInstallRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
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

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterInstallRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
      this._kind = undefined;
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
      this._group = value.group;
      this._kind = value.kind;
      this._name = value.name;
      this._version = value.version;
    }
  }

  // group - computed: false, optional: false, required: true
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
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

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterMetadataAdminKubeconfigSecretRef {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#name DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterMetadataAdminKubeconfigSecretRefToTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterMetadataAdminKubeconfigSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterMetadataAdminKubeconfigSecretRefToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterMetadataAdminKubeconfigSecretRef | cdktf.IResolvable): any {
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

export class DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterMetadataAdminKubeconfigSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterMetadataAdminKubeconfigSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterMetadataAdminKubeconfigSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterMetadataAdminPasswordSecretRef {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#name DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterMetadataAdminPasswordSecretRefToTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterMetadataAdminPasswordSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterMetadataAdminPasswordSecretRefToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterMetadataAdminPasswordSecretRef | cdktf.IResolvable): any {
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

export class DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterMetadataAdminPasswordSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterMetadataAdminPasswordSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterMetadataAdminPasswordSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterMetadataPlatformAws {
  /**
  * HostedZoneRole is the role to assume when performing operations on a hosted zone owned by another account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#hosted_zone_role DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#hosted_zone_role}
  */
  readonly hostedZoneRole?: string;
}

export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterMetadataPlatformAwsToTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterMetadataPlatformAws | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hosted_zone_role: cdktf.stringToTerraform(struct!.hostedZoneRole),
  }
}


export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterMetadataPlatformAwsToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterMetadataPlatformAws | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hosted_zone_role: {
      value: cdktf.stringToHclTerraform(struct!.hostedZoneRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterMetadataPlatformAwsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterMetadataPlatformAws | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostedZoneRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostedZoneRole = this._hostedZoneRole;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterMetadataPlatformAws | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostedZoneRole = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostedZoneRole = value.hostedZoneRole;
    }
  }

  // hosted_zone_role - computed: false, optional: true, required: false
  private _hostedZoneRole?: string; 
  public get hostedZoneRole() {
    return this.getStringAttribute('hosted_zone_role');
  }
  public set hostedZoneRole(value: string) {
    this._hostedZoneRole = value;
  }
  public resetHostedZoneRole() {
    this._hostedZoneRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostedZoneRoleInput() {
    return this._hostedZoneRole;
  }
}
export interface DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterMetadataPlatformAzure {
  /**
  * ResourceGroupName is the name of the resource group in which the cluster resources were created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#resource_group_name DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#resource_group_name}
  */
  readonly resourceGroupName: string;
}

export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterMetadataPlatformAzureToTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterMetadataPlatformAzure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_group_name: cdktf.stringToTerraform(struct!.resourceGroupName),
  }
}


export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterMetadataPlatformAzureToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterMetadataPlatformAzure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterMetadataPlatformAzureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterMetadataPlatformAzure | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroupName = this._resourceGroupName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterMetadataPlatformAzure | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceGroupName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceGroupName = value.resourceGroupName;
    }
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
export interface DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterMetadataPlatformGcp {
  /**
  * NetworkProjectID is used for shared VPC setups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#network_project_id DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#network_project_id}
  */
  readonly networkProjectId?: string;
}

export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterMetadataPlatformGcpToTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterMetadataPlatformGcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_project_id: cdktf.stringToTerraform(struct!.networkProjectId),
  }
}


export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterMetadataPlatformGcpToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterMetadataPlatformGcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_project_id: {
      value: cdktf.stringToHclTerraform(struct!.networkProjectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterMetadataPlatformGcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterMetadataPlatformGcp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkProjectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkProjectId = this._networkProjectId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterMetadataPlatformGcp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._networkProjectId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._networkProjectId = value.networkProjectId;
    }
  }

  // network_project_id - computed: false, optional: true, required: false
  private _networkProjectId?: string; 
  public get networkProjectId() {
    return this.getStringAttribute('network_project_id');
  }
  public set networkProjectId(value: string) {
    this._networkProjectId = value;
  }
  public resetNetworkProjectId() {
    this._networkProjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkProjectIdInput() {
    return this._networkProjectId;
  }
}
export interface DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterMetadataPlatform {
  /**
  * AWS holds AWS-specific cluster metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#aws DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#aws}
  */
  readonly aws?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterMetadataPlatformAws;
  /**
  * Azure holds azure-specific cluster metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#azure DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#azure}
  */
  readonly azure?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterMetadataPlatformAzure;
  /**
  * GCP holds GCP-specific cluster metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#gcp DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#gcp}
  */
  readonly gcp?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterMetadataPlatformGcp;
}

export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterMetadataPlatformToTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterMetadataPlatform | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterMetadataPlatformAwsToTerraform(struct!.aws),
    azure: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterMetadataPlatformAzureToTerraform(struct!.azure),
    gcp: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterMetadataPlatformGcpToTerraform(struct!.gcp),
  }
}


export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterMetadataPlatformToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterMetadataPlatform | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws: {
      value: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterMetadataPlatformAwsToHclTerraform(struct!.aws),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterMetadataPlatformAws",
    },
    azure: {
      value: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterMetadataPlatformAzureToHclTerraform(struct!.azure),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterMetadataPlatformAzure",
    },
    gcp: {
      value: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterMetadataPlatformGcpToHclTerraform(struct!.gcp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterMetadataPlatformGcp",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterMetadataPlatformOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterMetadataPlatform | cdktf.IResolvable | undefined {
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
    if (this._gcp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcp = this._gcp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterMetadataPlatform | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aws.internalValue = undefined;
      this._azure.internalValue = undefined;
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
      this._gcp.internalValue = value.gcp;
    }
  }

  // aws - computed: false, optional: true, required: false
  private _aws = new DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterMetadataPlatformAwsOutputReference(this, "aws");
  public get aws() {
    return this._aws;
  }
  public putAws(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterMetadataPlatformAws) {
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
  private _azure = new DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterMetadataPlatformAzureOutputReference(this, "azure");
  public get azure() {
    return this._azure;
  }
  public putAzure(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterMetadataPlatformAzure) {
    this._azure.internalValue = value;
  }
  public resetAzure() {
    this._azure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureInput() {
    return this._azure.internalValue;
  }

  // gcp - computed: false, optional: true, required: false
  private _gcp = new DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterMetadataPlatformGcpOutputReference(this, "gcp");
  public get gcp() {
    return this._gcp;
  }
  public putGcp(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterMetadataPlatformGcp) {
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
export interface DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterMetadata {
  /**
  * AdminKubeconfigSecretRef references the secret containing the admin kubeconfig for this cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#admin_kubeconfig_secret_ref DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#admin_kubeconfig_secret_ref}
  */
  readonly adminKubeconfigSecretRef: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterMetadataAdminKubeconfigSecretRef;
  /**
  * AdminPasswordSecretRef references the secret containing the admin username/password which can be used to login to this cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#admin_password_secret_ref DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#admin_password_secret_ref}
  */
  readonly adminPasswordSecretRef?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterMetadataAdminPasswordSecretRef;
  /**
  * ClusterID is a globally unique identifier for this cluster generated during installation. Used for reporting metrics among other places.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#cluster_id DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#cluster_id}
  */
  readonly clusterId: string;
  /**
  * InfraID is an identifier for this cluster generated during installation and used for tagging/naming resources in cloud providers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#infra_id DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#infra_id}
  */
  readonly infraId: string;
  /**
  * Platform holds platform-specific cluster metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#platform DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#platform}
  */
  readonly platform?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterMetadataPlatform;
}

export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterMetadataToTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_kubeconfig_secret_ref: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterMetadataAdminKubeconfigSecretRefToTerraform(struct!.adminKubeconfigSecretRef),
    admin_password_secret_ref: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterMetadataAdminPasswordSecretRefToTerraform(struct!.adminPasswordSecretRef),
    cluster_id: cdktf.stringToTerraform(struct!.clusterId),
    infra_id: cdktf.stringToTerraform(struct!.infraId),
    platform: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterMetadataPlatformToTerraform(struct!.platform),
  }
}


export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterMetadataToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_kubeconfig_secret_ref: {
      value: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterMetadataAdminKubeconfigSecretRefToHclTerraform(struct!.adminKubeconfigSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterMetadataAdminKubeconfigSecretRef",
    },
    admin_password_secret_ref: {
      value: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterMetadataAdminPasswordSecretRefToHclTerraform(struct!.adminPasswordSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterMetadataAdminPasswordSecretRef",
    },
    cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.clusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    infra_id: {
      value: cdktf.stringToHclTerraform(struct!.infraId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    platform: {
      value: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterMetadataPlatformToHclTerraform(struct!.platform),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterMetadataPlatform",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminKubeconfigSecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminKubeconfigSecretRef = this._adminKubeconfigSecretRef?.internalValue;
    }
    if (this._adminPasswordSecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminPasswordSecretRef = this._adminPasswordSecretRef?.internalValue;
    }
    if (this._clusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterId = this._clusterId;
    }
    if (this._infraId !== undefined) {
      hasAnyValues = true;
      internalValueResult.infraId = this._infraId;
    }
    if (this._platform?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.platform = this._platform?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adminKubeconfigSecretRef.internalValue = undefined;
      this._adminPasswordSecretRef.internalValue = undefined;
      this._clusterId = undefined;
      this._infraId = undefined;
      this._platform.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adminKubeconfigSecretRef.internalValue = value.adminKubeconfigSecretRef;
      this._adminPasswordSecretRef.internalValue = value.adminPasswordSecretRef;
      this._clusterId = value.clusterId;
      this._infraId = value.infraId;
      this._platform.internalValue = value.platform;
    }
  }

  // admin_kubeconfig_secret_ref - computed: false, optional: false, required: true
  private _adminKubeconfigSecretRef = new DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterMetadataAdminKubeconfigSecretRefOutputReference(this, "admin_kubeconfig_secret_ref");
  public get adminKubeconfigSecretRef() {
    return this._adminKubeconfigSecretRef;
  }
  public putAdminKubeconfigSecretRef(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterMetadataAdminKubeconfigSecretRef) {
    this._adminKubeconfigSecretRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminKubeconfigSecretRefInput() {
    return this._adminKubeconfigSecretRef.internalValue;
  }

  // admin_password_secret_ref - computed: false, optional: true, required: false
  private _adminPasswordSecretRef = new DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterMetadataAdminPasswordSecretRefOutputReference(this, "admin_password_secret_ref");
  public get adminPasswordSecretRef() {
    return this._adminPasswordSecretRef;
  }
  public putAdminPasswordSecretRef(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterMetadataAdminPasswordSecretRef) {
    this._adminPasswordSecretRef.internalValue = value;
  }
  public resetAdminPasswordSecretRef() {
    this._adminPasswordSecretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPasswordSecretRefInput() {
    return this._adminPasswordSecretRef.internalValue;
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

  // infra_id - computed: false, optional: false, required: true
  private _infraId?: string; 
  public get infraId() {
    return this.getStringAttribute('infra_id');
  }
  public set infraId(value: string) {
    this._infraId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get infraIdInput() {
    return this._infraId;
  }

  // platform - computed: false, optional: true, required: false
  private _platform = new DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterMetadataPlatformOutputReference(this, "platform");
  public get platform() {
    return this._platform;
  }
  public putPlatform(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterMetadataPlatform) {
    this._platform.internalValue = value;
  }
  public resetPlatform() {
    this._platform.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformInput() {
    return this._platform.internalValue;
  }
}
export interface DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterPoolRefClusterDeploymentCustomization {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#name DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterPoolRefClusterDeploymentCustomizationToTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterPoolRefClusterDeploymentCustomization | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterPoolRefClusterDeploymentCustomizationToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterPoolRefClusterDeploymentCustomization | cdktf.IResolvable): any {
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

export class DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterPoolRefClusterDeploymentCustomizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterPoolRefClusterDeploymentCustomization | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterPoolRefClusterDeploymentCustomization | cdktf.IResolvable | undefined) {
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
export interface DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterPoolRef {
  /**
  * ClaimName is the name of the ClusterClaim that claimed the cluster from the pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#claim_name DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#claim_name}
  */
  readonly claimName?: string;
  /**
  * ClaimedTimestamp is the time this cluster was assigned to a ClusterClaim. This is only used for ClusterDeployments belonging to ClusterPools.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#claimed_timestamp DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#claimed_timestamp}
  */
  readonly claimedTimestamp?: string;
  /**
  * CustomizationRef is the ClusterPool Inventory claimed customization for this ClusterDeployment. The Customization exists in the ClusterPool namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#cluster_deployment_customization DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#cluster_deployment_customization}
  */
  readonly clusterDeploymentCustomization?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterPoolRefClusterDeploymentCustomization;
  /**
  * Namespace is the namespace where the ClusterPool resides.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#namespace DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#namespace}
  */
  readonly namespace: string;
  /**
  * PoolName is the name of the ClusterPool for which the cluster was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#pool_name DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#pool_name}
  */
  readonly poolName: string;
}

export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterPoolRefToTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterPoolRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claim_name: cdktf.stringToTerraform(struct!.claimName),
    claimed_timestamp: cdktf.stringToTerraform(struct!.claimedTimestamp),
    cluster_deployment_customization: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterPoolRefClusterDeploymentCustomizationToTerraform(struct!.clusterDeploymentCustomization),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    pool_name: cdktf.stringToTerraform(struct!.poolName),
  }
}


export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterPoolRefToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterPoolRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claim_name: {
      value: cdktf.stringToHclTerraform(struct!.claimName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    claimed_timestamp: {
      value: cdktf.stringToHclTerraform(struct!.claimedTimestamp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_deployment_customization: {
      value: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterPoolRefClusterDeploymentCustomizationToHclTerraform(struct!.clusterDeploymentCustomization),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterPoolRefClusterDeploymentCustomization",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pool_name: {
      value: cdktf.stringToHclTerraform(struct!.poolName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterPoolRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterPoolRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._claimName !== undefined) {
      hasAnyValues = true;
      internalValueResult.claimName = this._claimName;
    }
    if (this._claimedTimestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.claimedTimestamp = this._claimedTimestamp;
    }
    if (this._clusterDeploymentCustomization?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterDeploymentCustomization = this._clusterDeploymentCustomization?.internalValue;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._poolName !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolName = this._poolName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterPoolRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._claimName = undefined;
      this._claimedTimestamp = undefined;
      this._clusterDeploymentCustomization.internalValue = undefined;
      this._namespace = undefined;
      this._poolName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._claimName = value.claimName;
      this._claimedTimestamp = value.claimedTimestamp;
      this._clusterDeploymentCustomization.internalValue = value.clusterDeploymentCustomization;
      this._namespace = value.namespace;
      this._poolName = value.poolName;
    }
  }

  // claim_name - computed: false, optional: true, required: false
  private _claimName?: string; 
  public get claimName() {
    return this.getStringAttribute('claim_name');
  }
  public set claimName(value: string) {
    this._claimName = value;
  }
  public resetClaimName() {
    this._claimName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimNameInput() {
    return this._claimName;
  }

  // claimed_timestamp - computed: false, optional: true, required: false
  private _claimedTimestamp?: string; 
  public get claimedTimestamp() {
    return this.getStringAttribute('claimed_timestamp');
  }
  public set claimedTimestamp(value: string) {
    this._claimedTimestamp = value;
  }
  public resetClaimedTimestamp() {
    this._claimedTimestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimedTimestampInput() {
    return this._claimedTimestamp;
  }

  // cluster_deployment_customization - computed: false, optional: true, required: false
  private _clusterDeploymentCustomization = new DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterPoolRefClusterDeploymentCustomizationOutputReference(this, "cluster_deployment_customization");
  public get clusterDeploymentCustomization() {
    return this._clusterDeploymentCustomization;
  }
  public putClusterDeploymentCustomization(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterPoolRefClusterDeploymentCustomization) {
    this._clusterDeploymentCustomization.internalValue = value;
  }
  public resetClusterDeploymentCustomization() {
    this._clusterDeploymentCustomization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterDeploymentCustomizationInput() {
    return this._clusterDeploymentCustomization.internalValue;
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

  // pool_name - computed: false, optional: false, required: true
  private _poolName?: string; 
  public get poolName() {
    return this.getStringAttribute('pool_name');
  }
  public set poolName(value: string) {
    this._poolName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get poolNameInput() {
    return this._poolName;
  }
}
export interface DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecControlPlaneConfigServingCertificatesAdditional {
  /**
  * Domain is the domain of the additional control plane certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#domain DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#domain}
  */
  readonly domain: string;
  /**
  * Name references a CertificateBundle in the ClusterDeployment.Spec that should be used for this additional certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#name DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecControlPlaneConfigServingCertificatesAdditionalToTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecControlPlaneConfigServingCertificatesAdditional | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain: cdktf.stringToTerraform(struct!.domain),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecControlPlaneConfigServingCertificatesAdditionalToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecControlPlaneConfigServingCertificatesAdditional | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
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

export class DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecControlPlaneConfigServingCertificatesAdditionalOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecControlPlaneConfigServingCertificatesAdditional | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecControlPlaneConfigServingCertificatesAdditional | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domain = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domain = value.domain;
      this._name = value.name;
    }
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
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

export class DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecControlPlaneConfigServingCertificatesAdditionalList extends cdktf.ComplexList {
  public internalValue? : DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecControlPlaneConfigServingCertificatesAdditional[] | cdktf.IResolvable

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
  public get(index: number): DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecControlPlaneConfigServingCertificatesAdditionalOutputReference {
    return new DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecControlPlaneConfigServingCertificatesAdditionalOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecControlPlaneConfigServingCertificates {
  /**
  * Additional is a list of additional domains and certificates that are also associated with the control plane's api endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#additional DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#additional}
  */
  readonly additional?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecControlPlaneConfigServingCertificatesAdditional[] | cdktf.IResolvable;
  /**
  * Default references the name of a CertificateBundle in the ClusterDeployment that should be used for the control plane's default endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#default DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#default}
  */
  readonly default?: string;
}

export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecControlPlaneConfigServingCertificatesToTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecControlPlaneConfigServingCertificates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional: cdktf.listMapper(dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecControlPlaneConfigServingCertificatesAdditionalToTerraform, false)(struct!.additional),
    default: cdktf.stringToTerraform(struct!.default),
  }
}


export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecControlPlaneConfigServingCertificatesToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecControlPlaneConfigServingCertificates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional: {
      value: cdktf.listMapperHcl(dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecControlPlaneConfigServingCertificatesAdditionalToHclTerraform, false)(struct!.additional),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecControlPlaneConfigServingCertificatesAdditionalList",
    },
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecControlPlaneConfigServingCertificatesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecControlPlaneConfigServingCertificates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additional?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additional = this._additional?.internalValue;
    }
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecControlPlaneConfigServingCertificates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additional.internalValue = undefined;
      this._default = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additional.internalValue = value.additional;
      this._default = value.default;
    }
  }

  // additional - computed: false, optional: true, required: false
  private _additional = new DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecControlPlaneConfigServingCertificatesAdditionalList(this, "additional", false);
  public get additional() {
    return this._additional;
  }
  public putAdditional(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecControlPlaneConfigServingCertificatesAdditional[] | cdktf.IResolvable) {
    this._additional.internalValue = value;
  }
  public resetAdditional() {
    this._additional.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalInput() {
    return this._additional.internalValue;
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
}
export interface DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecControlPlaneConfig {
  /**
  * APIServerIPOverride is the optional override of the API server IP address. Hive will use this IP address for creating TCP connections. Port from the original API server URL will be used. This field can be used when repointing the APIServer's DNS is not viable option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#api_server_ip_override DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#api_server_ip_override}
  */
  readonly apiServerIpOverride?: string;
  /**
  * APIURLOverride is the optional URL override to which Hive will transition for communication with the API server of the remote cluster. When a remote cluster is created, Hive will initially communicate using the API URL established during installation. If an API URL Override is specified, Hive will periodically attempt to connect to the remote cluster using the override URL. Once Hive has determined that the override URL is active, Hive will use the override URL for further communications with the API server of the remote cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#api_url_override DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#api_url_override}
  */
  readonly apiUrlOverride?: string;
  /**
  * ServingCertificates specifies serving certificates for the control plane
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#serving_certificates DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#serving_certificates}
  */
  readonly servingCertificates?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecControlPlaneConfigServingCertificates;
}

export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecControlPlaneConfigToTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecControlPlaneConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_server_ip_override: cdktf.stringToTerraform(struct!.apiServerIpOverride),
    api_url_override: cdktf.stringToTerraform(struct!.apiUrlOverride),
    serving_certificates: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecControlPlaneConfigServingCertificatesToTerraform(struct!.servingCertificates),
  }
}


export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecControlPlaneConfigToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecControlPlaneConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_server_ip_override: {
      value: cdktf.stringToHclTerraform(struct!.apiServerIpOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_url_override: {
      value: cdktf.stringToHclTerraform(struct!.apiUrlOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    serving_certificates: {
      value: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecControlPlaneConfigServingCertificatesToHclTerraform(struct!.servingCertificates),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecControlPlaneConfigServingCertificates",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecControlPlaneConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecControlPlaneConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiServerIpOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiServerIpOverride = this._apiServerIpOverride;
    }
    if (this._apiUrlOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiUrlOverride = this._apiUrlOverride;
    }
    if (this._servingCertificates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.servingCertificates = this._servingCertificates?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecControlPlaneConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiServerIpOverride = undefined;
      this._apiUrlOverride = undefined;
      this._servingCertificates.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiServerIpOverride = value.apiServerIpOverride;
      this._apiUrlOverride = value.apiUrlOverride;
      this._servingCertificates.internalValue = value.servingCertificates;
    }
  }

  // api_server_ip_override - computed: false, optional: true, required: false
  private _apiServerIpOverride?: string; 
  public get apiServerIpOverride() {
    return this.getStringAttribute('api_server_ip_override');
  }
  public set apiServerIpOverride(value: string) {
    this._apiServerIpOverride = value;
  }
  public resetApiServerIpOverride() {
    this._apiServerIpOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiServerIpOverrideInput() {
    return this._apiServerIpOverride;
  }

  // api_url_override - computed: false, optional: true, required: false
  private _apiUrlOverride?: string; 
  public get apiUrlOverride() {
    return this.getStringAttribute('api_url_override');
  }
  public set apiUrlOverride(value: string) {
    this._apiUrlOverride = value;
  }
  public resetApiUrlOverride() {
    this._apiUrlOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiUrlOverrideInput() {
    return this._apiUrlOverride;
  }

  // serving_certificates - computed: false, optional: true, required: false
  private _servingCertificates = new DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecControlPlaneConfigServingCertificatesOutputReference(this, "serving_certificates");
  public get servingCertificates() {
    return this._servingCertificates;
  }
  public putServingCertificates(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecControlPlaneConfigServingCertificates) {
    this._servingCertificates.internalValue = value;
  }
  public resetServingCertificates() {
    this._servingCertificates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servingCertificatesInput() {
    return this._servingCertificates.internalValue;
  }
}
export interface DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecIngressHttpErrorCodePages {
  /**
  * name is the metadata.name of the referenced config map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#name DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecIngressHttpErrorCodePagesToTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecIngressHttpErrorCodePages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecIngressHttpErrorCodePagesToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecIngressHttpErrorCodePages | cdktf.IResolvable): any {
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

export class DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecIngressHttpErrorCodePagesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecIngressHttpErrorCodePages | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecIngressHttpErrorCodePages | cdktf.IResolvable | undefined) {
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
export interface DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecIngressNamespaceSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#key DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#operator DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#values DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecIngressNamespaceSelectorMatchExpressionsToTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecIngressNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecIngressNamespaceSelectorMatchExpressionsToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecIngressNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecIngressNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecIngressNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecIngressNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecIngressNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecIngressNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecIngressNamespaceSelectorMatchExpressionsOutputReference {
    return new DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecIngressNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecIngressNamespaceSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#match_expressions DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecIngressNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#match_labels DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecIngressNamespaceSelectorToTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecIngressNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecIngressNamespaceSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecIngressNamespaceSelectorToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecIngressNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecIngressNamespaceSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecIngressNamespaceSelectorMatchExpressionsList",
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

export class DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecIngressNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecIngressNamespaceSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecIngressNamespaceSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecIngressNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecIngressNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecIngressRouteSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#key DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#operator DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#values DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecIngressRouteSelectorMatchExpressionsToTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecIngressRouteSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecIngressRouteSelectorMatchExpressionsToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecIngressRouteSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecIngressRouteSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecIngressRouteSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecIngressRouteSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecIngressRouteSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecIngressRouteSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecIngressRouteSelectorMatchExpressionsOutputReference {
    return new DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecIngressRouteSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecIngressRouteSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#match_expressions DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecIngressRouteSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#match_labels DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecIngressRouteSelectorToTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecIngressRouteSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecIngressRouteSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecIngressRouteSelectorToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecIngressRouteSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecIngressRouteSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecIngressRouteSelectorMatchExpressionsList",
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

export class DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecIngressRouteSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecIngressRouteSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecIngressRouteSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecIngressRouteSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecIngressRouteSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecIngress {
  /**
  * Domain (sometimes referred to as shard) is the full DNS suffix that the resulting IngressController object will service (eg abcd.mycluster.mydomain.com).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#domain DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#domain}
  */
  readonly domain: string;
  /**
  * HttpErrorCodePages allows configuring custom HTTP error pages using the IngressController object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#http_error_code_pages DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#http_error_code_pages}
  */
  readonly httpErrorCodePages?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecIngressHttpErrorCodePages;
  /**
  * Name of the ClusterIngress object to create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#name DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#name}
  */
  readonly name: string;
  /**
  * NamespaceSelector allows filtering the list of namespaces serviced by the ingress controller.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#namespace_selector DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#namespace_selector}
  */
  readonly namespaceSelector?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecIngressNamespaceSelector;
  /**
  * RouteSelector allows filtering the set of Routes serviced by the ingress controller
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#route_selector DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#route_selector}
  */
  readonly routeSelector?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecIngressRouteSelector;
  /**
  * ServingCertificate references a CertificateBundle in the ClusterDeployment.Spec that should be used for this Ingress
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#serving_certificate DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#serving_certificate}
  */
  readonly servingCertificate?: string;
}

export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecIngressToTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecIngress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain: cdktf.stringToTerraform(struct!.domain),
    http_error_code_pages: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecIngressHttpErrorCodePagesToTerraform(struct!.httpErrorCodePages),
    name: cdktf.stringToTerraform(struct!.name),
    namespace_selector: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecIngressNamespaceSelectorToTerraform(struct!.namespaceSelector),
    route_selector: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecIngressRouteSelectorToTerraform(struct!.routeSelector),
    serving_certificate: cdktf.stringToTerraform(struct!.servingCertificate),
  }
}


export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecIngressToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecIngress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_error_code_pages: {
      value: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecIngressHttpErrorCodePagesToHclTerraform(struct!.httpErrorCodePages),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecIngressHttpErrorCodePages",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace_selector: {
      value: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecIngressNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecIngressNamespaceSelector",
    },
    route_selector: {
      value: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecIngressRouteSelectorToHclTerraform(struct!.routeSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecIngressRouteSelector",
    },
    serving_certificate: {
      value: cdktf.stringToHclTerraform(struct!.servingCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecIngressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecIngress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._httpErrorCodePages?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpErrorCodePages = this._httpErrorCodePages?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespaceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceSelector = this._namespaceSelector?.internalValue;
    }
    if (this._routeSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeSelector = this._routeSelector?.internalValue;
    }
    if (this._servingCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.servingCertificate = this._servingCertificate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecIngress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domain = undefined;
      this._httpErrorCodePages.internalValue = undefined;
      this._name = undefined;
      this._namespaceSelector.internalValue = undefined;
      this._routeSelector.internalValue = undefined;
      this._servingCertificate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domain = value.domain;
      this._httpErrorCodePages.internalValue = value.httpErrorCodePages;
      this._name = value.name;
      this._namespaceSelector.internalValue = value.namespaceSelector;
      this._routeSelector.internalValue = value.routeSelector;
      this._servingCertificate = value.servingCertificate;
    }
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // http_error_code_pages - computed: false, optional: true, required: false
  private _httpErrorCodePages = new DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecIngressHttpErrorCodePagesOutputReference(this, "http_error_code_pages");
  public get httpErrorCodePages() {
    return this._httpErrorCodePages;
  }
  public putHttpErrorCodePages(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecIngressHttpErrorCodePages) {
    this._httpErrorCodePages.internalValue = value;
  }
  public resetHttpErrorCodePages() {
    this._httpErrorCodePages.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpErrorCodePagesInput() {
    return this._httpErrorCodePages.internalValue;
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

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector = new DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecIngressNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecIngressNamespaceSelector) {
    this._namespaceSelector.internalValue = value;
  }
  public resetNamespaceSelector() {
    this._namespaceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorInput() {
    return this._namespaceSelector.internalValue;
  }

  // route_selector - computed: false, optional: true, required: false
  private _routeSelector = new DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecIngressRouteSelectorOutputReference(this, "route_selector");
  public get routeSelector() {
    return this._routeSelector;
  }
  public putRouteSelector(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecIngressRouteSelector) {
    this._routeSelector.internalValue = value;
  }
  public resetRouteSelector() {
    this._routeSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeSelectorInput() {
    return this._routeSelector.internalValue;
  }

  // serving_certificate - computed: false, optional: true, required: false
  private _servingCertificate?: string; 
  public get servingCertificate() {
    return this.getStringAttribute('serving_certificate');
  }
  public set servingCertificate(value: string) {
    this._servingCertificate = value;
  }
  public resetServingCertificate() {
    this._servingCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servingCertificateInput() {
    return this._servingCertificate;
  }
}

export class DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecIngressList extends cdktf.ComplexList {
  public internalValue? : DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecIngress[] | cdktf.IResolvable

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
  public get(index: number): DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecIngressOutputReference {
    return new DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecIngressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAgentBareMetalAgentSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#key DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#operator DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#values DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAgentBareMetalAgentSelectorMatchExpressionsToTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAgentBareMetalAgentSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAgentBareMetalAgentSelectorMatchExpressionsToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAgentBareMetalAgentSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAgentBareMetalAgentSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAgentBareMetalAgentSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAgentBareMetalAgentSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAgentBareMetalAgentSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAgentBareMetalAgentSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAgentBareMetalAgentSelectorMatchExpressionsOutputReference {
    return new DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAgentBareMetalAgentSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAgentBareMetalAgentSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#match_expressions DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAgentBareMetalAgentSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#match_labels DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAgentBareMetalAgentSelectorToTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAgentBareMetalAgentSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAgentBareMetalAgentSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAgentBareMetalAgentSelectorToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAgentBareMetalAgentSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAgentBareMetalAgentSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAgentBareMetalAgentSelectorMatchExpressionsList",
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

export class DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAgentBareMetalAgentSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAgentBareMetalAgentSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAgentBareMetalAgentSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAgentBareMetalAgentSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAgentBareMetalAgentSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAgentBareMetal {
  /**
  * AgentSelector is a label selector used for associating relevant custom resources with this cluster. (Agent, BareMetalHost, etc)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#agent_selector DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#agent_selector}
  */
  readonly agentSelector: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAgentBareMetalAgentSelector;
}

export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAgentBareMetalToTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAgentBareMetal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agent_selector: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAgentBareMetalAgentSelectorToTerraform(struct!.agentSelector),
  }
}


export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAgentBareMetalToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAgentBareMetal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    agent_selector: {
      value: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAgentBareMetalAgentSelectorToHclTerraform(struct!.agentSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAgentBareMetalAgentSelector",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAgentBareMetalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAgentBareMetal | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAgentBareMetal | cdktf.IResolvable | undefined) {
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
  private _agentSelector = new DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAgentBareMetalAgentSelectorOutputReference(this, "agent_selector");
  public get agentSelector() {
    return this._agentSelector;
  }
  public putAgentSelector(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAgentBareMetalAgentSelector) {
    this._agentSelector.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agentSelectorInput() {
    return this._agentSelector.internalValue;
  }
}
export interface DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAwsCredentialsAssumeRole {
  /**
  * ExternalID is random string generated by platform so that assume role is protected from confused deputy problem. more info: https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-user_externalid.html
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#external_id DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#external_id}
  */
  readonly externalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#role_arn DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#role_arn}
  */
  readonly roleArn: string;
}

export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAwsCredentialsAssumeRoleToTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAwsCredentialsAssumeRole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external_id: cdktf.stringToTerraform(struct!.externalId),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}


export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAwsCredentialsAssumeRoleToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAwsCredentialsAssumeRole | cdktf.IResolvable): any {
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

export class DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAwsCredentialsAssumeRoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAwsCredentialsAssumeRole | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAwsCredentialsAssumeRole | cdktf.IResolvable | undefined) {
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
export interface DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAwsCredentialsSecretRef {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#name DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAwsCredentialsSecretRefToTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAwsCredentialsSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAwsCredentialsSecretRefToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAwsCredentialsSecretRef | cdktf.IResolvable): any {
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

export class DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAwsCredentialsSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAwsCredentialsSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAwsCredentialsSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAwsPrivateLink {
  /**
  * AdditionalAllowedPrincipals is a list of additional allowed principal ARNs to be configured for the Private Link cluster's VPC Endpoint Service. ARNs provided as AdditionalAllowedPrincipals will be configured for the cluster's VPC Endpoint Service in addition to the IAM entity used by Hive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#additional_allowed_principals DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#additional_allowed_principals}
  */
  readonly additionalAllowedPrincipals?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#enabled DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAwsPrivateLinkToTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAwsPrivateLink | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_allowed_principals: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.additionalAllowedPrincipals),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAwsPrivateLinkToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAwsPrivateLink | cdktf.IResolvable): any {
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

export class DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAwsPrivateLinkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAwsPrivateLink | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAwsPrivateLink | cdktf.IResolvable | undefined) {
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
export interface DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAws {
  /**
  * CredentialsAssumeRole refers to the IAM role that must be assumed to obtain AWS account access for the cluster operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#credentials_assume_role DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#credentials_assume_role}
  */
  readonly credentialsAssumeRole?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAwsCredentialsAssumeRole;
  /**
  * CredentialsSecretRef refers to a secret that contains the AWS account access credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#credentials_secret_ref DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#credentials_secret_ref}
  */
  readonly credentialsSecretRef?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAwsCredentialsSecretRef;
  /**
  * PrivateLink allows uses to enable access to the cluster's API server using AWS PrivateLink. AWS PrivateLink includes a pair of VPC Endpoint Service and VPC Endpoint accross AWS accounts and allows clients to connect to services using AWS's internal networking instead of the Internet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#private_link DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#private_link}
  */
  readonly privateLink?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAwsPrivateLink;
  /**
  * Region specifies the AWS region where the cluster will be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#region DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#region}
  */
  readonly region: string;
  /**
  * UserTags specifies additional tags for AWS resources created for the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#user_tags DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#user_tags}
  */
  readonly userTags?: { [key: string]: string };
}

export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAwsToTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAws | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credentials_assume_role: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAwsCredentialsAssumeRoleToTerraform(struct!.credentialsAssumeRole),
    credentials_secret_ref: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAwsCredentialsSecretRefToTerraform(struct!.credentialsSecretRef),
    private_link: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAwsPrivateLinkToTerraform(struct!.privateLink),
    region: cdktf.stringToTerraform(struct!.region),
    user_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.userTags),
  }
}


export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAwsToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAws | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    credentials_assume_role: {
      value: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAwsCredentialsAssumeRoleToHclTerraform(struct!.credentialsAssumeRole),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAwsCredentialsAssumeRole",
    },
    credentials_secret_ref: {
      value: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAwsCredentialsSecretRefToHclTerraform(struct!.credentialsSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAwsCredentialsSecretRef",
    },
    private_link: {
      value: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAwsPrivateLinkToHclTerraform(struct!.privateLink),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAwsPrivateLink",
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

export class DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAwsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAws | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAws | cdktf.IResolvable | undefined) {
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
  private _credentialsAssumeRole = new DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAwsCredentialsAssumeRoleOutputReference(this, "credentials_assume_role");
  public get credentialsAssumeRole() {
    return this._credentialsAssumeRole;
  }
  public putCredentialsAssumeRole(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAwsCredentialsAssumeRole) {
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
  private _credentialsSecretRef = new DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAwsCredentialsSecretRefOutputReference(this, "credentials_secret_ref");
  public get credentialsSecretRef() {
    return this._credentialsSecretRef;
  }
  public putCredentialsSecretRef(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAwsCredentialsSecretRef) {
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
  private _privateLink = new DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAwsPrivateLinkOutputReference(this, "private_link");
  public get privateLink() {
    return this._privateLink;
  }
  public putPrivateLink(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAwsPrivateLink) {
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
export interface DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAzureCredentialsSecretRef {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#name DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAzureCredentialsSecretRefToTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAzureCredentialsSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAzureCredentialsSecretRefToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAzureCredentialsSecretRef | cdktf.IResolvable): any {
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

export class DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAzureCredentialsSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAzureCredentialsSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAzureCredentialsSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAzure {
  /**
  * BaseDomainResourceGroupName specifies the resource group where the azure DNS zone for the base domain is found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#base_domain_resource_group_name DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#base_domain_resource_group_name}
  */
  readonly baseDomainResourceGroupName?: string;
  /**
  * cloudName is the name of the Azure cloud environment which can be used to configure the Azure SDK with the appropriate Azure API endpoints. If empty, the value is equal to 'AzurePublicCloud'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#cloud_name DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#cloud_name}
  */
  readonly cloudName?: string;
  /**
  * CredentialsSecretRef refers to a secret that contains the Azure account access credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#credentials_secret_ref DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#credentials_secret_ref}
  */
  readonly credentialsSecretRef: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAzureCredentialsSecretRef;
  /**
  * Region specifies the Azure region where the cluster will be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#region DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#region}
  */
  readonly region: string;
}

export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAzureToTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAzure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_domain_resource_group_name: cdktf.stringToTerraform(struct!.baseDomainResourceGroupName),
    cloud_name: cdktf.stringToTerraform(struct!.cloudName),
    credentials_secret_ref: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAzureCredentialsSecretRefToTerraform(struct!.credentialsSecretRef),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAzureToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAzure | cdktf.IResolvable): any {
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
      value: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAzureCredentialsSecretRefToHclTerraform(struct!.credentialsSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAzureCredentialsSecretRef",
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

export class DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAzureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAzure | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAzure | cdktf.IResolvable | undefined) {
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
  private _credentialsSecretRef = new DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAzureCredentialsSecretRefOutputReference(this, "credentials_secret_ref");
  public get credentialsSecretRef() {
    return this._credentialsSecretRef;
  }
  public putCredentialsSecretRef(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAzureCredentialsSecretRef) {
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
export interface DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformBaremetalLibvirtSshPrivateKeySecretRef {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#name DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformBaremetalLibvirtSshPrivateKeySecretRefToTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformBaremetalLibvirtSshPrivateKeySecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformBaremetalLibvirtSshPrivateKeySecretRefToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformBaremetalLibvirtSshPrivateKeySecretRef | cdktf.IResolvable): any {
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

export class DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformBaremetalLibvirtSshPrivateKeySecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformBaremetalLibvirtSshPrivateKeySecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformBaremetalLibvirtSshPrivateKeySecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformBaremetal {
  /**
  * LibvirtSSHPrivateKeySecretRef is the reference to the secret that contains the private SSH key to use for access to the libvirt provisioning host. The SSH private key is expected to be in the secret data under the 'ssh-privatekey' key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#libvirt_ssh_private_key_secret_ref DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#libvirt_ssh_private_key_secret_ref}
  */
  readonly libvirtSshPrivateKeySecretRef: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformBaremetalLibvirtSshPrivateKeySecretRef;
}

export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformBaremetalToTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformBaremetal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    libvirt_ssh_private_key_secret_ref: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformBaremetalLibvirtSshPrivateKeySecretRefToTerraform(struct!.libvirtSshPrivateKeySecretRef),
  }
}


export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformBaremetalToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformBaremetal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    libvirt_ssh_private_key_secret_ref: {
      value: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformBaremetalLibvirtSshPrivateKeySecretRefToHclTerraform(struct!.libvirtSshPrivateKeySecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformBaremetalLibvirtSshPrivateKeySecretRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformBaremetalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformBaremetal | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformBaremetal | cdktf.IResolvable | undefined) {
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
  private _libvirtSshPrivateKeySecretRef = new DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformBaremetalLibvirtSshPrivateKeySecretRefOutputReference(this, "libvirt_ssh_private_key_secret_ref");
  public get libvirtSshPrivateKeySecretRef() {
    return this._libvirtSshPrivateKeySecretRef;
  }
  public putLibvirtSshPrivateKeySecretRef(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformBaremetalLibvirtSshPrivateKeySecretRef) {
    this._libvirtSshPrivateKeySecretRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get libvirtSshPrivateKeySecretRefInput() {
    return this._libvirtSshPrivateKeySecretRef.internalValue;
  }
}
export interface DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformGcpCredentialsSecretRef {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#name DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformGcpCredentialsSecretRefToTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformGcpCredentialsSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformGcpCredentialsSecretRefToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformGcpCredentialsSecretRef | cdktf.IResolvable): any {
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

export class DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformGcpCredentialsSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformGcpCredentialsSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformGcpCredentialsSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformGcpPrivateServiceConnectServiceAttachmentSubnetExisting {
  /**
  * Name specifies the name of the existing subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#name DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#name}
  */
  readonly name: string;
  /**
  * Project specifies the project the subnet exists in. This is required for Shared VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#project DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#project}
  */
  readonly project?: string;
}

export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformGcpPrivateServiceConnectServiceAttachmentSubnetExistingToTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformGcpPrivateServiceConnectServiceAttachmentSubnetExisting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    project: cdktf.stringToTerraform(struct!.project),
  }
}


export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformGcpPrivateServiceConnectServiceAttachmentSubnetExistingToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformGcpPrivateServiceConnectServiceAttachmentSubnetExisting | cdktf.IResolvable): any {
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

export class DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformGcpPrivateServiceConnectServiceAttachmentSubnetExistingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformGcpPrivateServiceConnectServiceAttachmentSubnetExisting | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformGcpPrivateServiceConnectServiceAttachmentSubnetExisting | cdktf.IResolvable | undefined) {
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
export interface DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformGcpPrivateServiceConnectServiceAttachmentSubnet {
  /**
  * Cidr specifies the cidr to use when creating a service attachment subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#cidr DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#cidr}
  */
  readonly cidr?: string;
  /**
  * Existing specifies a pre-existing subnet to use instead of creating a new service attachment subnet. This is required when using BYO VPCs. It must be in the same region as the api-int load balancer, be configured with a purpose of 'Private Service Connect', and have sufficient routing and firewall rules to access the api-int load balancer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#existing DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#existing}
  */
  readonly existing?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformGcpPrivateServiceConnectServiceAttachmentSubnetExisting;
}

export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformGcpPrivateServiceConnectServiceAttachmentSubnetToTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformGcpPrivateServiceConnectServiceAttachmentSubnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr: cdktf.stringToTerraform(struct!.cidr),
    existing: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformGcpPrivateServiceConnectServiceAttachmentSubnetExistingToTerraform(struct!.existing),
  }
}


export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformGcpPrivateServiceConnectServiceAttachmentSubnetToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformGcpPrivateServiceConnectServiceAttachmentSubnet | cdktf.IResolvable): any {
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
      value: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformGcpPrivateServiceConnectServiceAttachmentSubnetExistingToHclTerraform(struct!.existing),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformGcpPrivateServiceConnectServiceAttachmentSubnetExisting",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformGcpPrivateServiceConnectServiceAttachmentSubnetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformGcpPrivateServiceConnectServiceAttachmentSubnet | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformGcpPrivateServiceConnectServiceAttachmentSubnet | cdktf.IResolvable | undefined) {
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
  private _existing = new DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformGcpPrivateServiceConnectServiceAttachmentSubnetExistingOutputReference(this, "existing");
  public get existing() {
    return this._existing;
  }
  public putExisting(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformGcpPrivateServiceConnectServiceAttachmentSubnetExisting) {
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
export interface DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformGcpPrivateServiceConnectServiceAttachment {
  /**
  * Subnet configures the subnetwork that contains the service attachment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#subnet DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#subnet}
  */
  readonly subnet?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformGcpPrivateServiceConnectServiceAttachmentSubnet;
}

export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformGcpPrivateServiceConnectServiceAttachmentToTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformGcpPrivateServiceConnectServiceAttachment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subnet: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformGcpPrivateServiceConnectServiceAttachmentSubnetToTerraform(struct!.subnet),
  }
}


export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformGcpPrivateServiceConnectServiceAttachmentToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformGcpPrivateServiceConnectServiceAttachment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    subnet: {
      value: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformGcpPrivateServiceConnectServiceAttachmentSubnetToHclTerraform(struct!.subnet),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformGcpPrivateServiceConnectServiceAttachmentSubnet",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformGcpPrivateServiceConnectServiceAttachmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformGcpPrivateServiceConnectServiceAttachment | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformGcpPrivateServiceConnectServiceAttachment | cdktf.IResolvable | undefined) {
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
  private _subnet = new DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformGcpPrivateServiceConnectServiceAttachmentSubnetOutputReference(this, "subnet");
  public get subnet() {
    return this._subnet;
  }
  public putSubnet(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformGcpPrivateServiceConnectServiceAttachmentSubnet) {
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
export interface DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformGcpPrivateServiceConnect {
  /**
  * Enabled specifies if Private Service Connect is to be enabled on the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#enabled DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * ServiceAttachment configures the service attachment to be used by the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#service_attachment DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#service_attachment}
  */
  readonly serviceAttachment?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformGcpPrivateServiceConnectServiceAttachment;
}

export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformGcpPrivateServiceConnectToTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformGcpPrivateServiceConnect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    service_attachment: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformGcpPrivateServiceConnectServiceAttachmentToTerraform(struct!.serviceAttachment),
  }
}


export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformGcpPrivateServiceConnectToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformGcpPrivateServiceConnect | cdktf.IResolvable): any {
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
      value: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformGcpPrivateServiceConnectServiceAttachmentToHclTerraform(struct!.serviceAttachment),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformGcpPrivateServiceConnectServiceAttachment",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformGcpPrivateServiceConnectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformGcpPrivateServiceConnect | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformGcpPrivateServiceConnect | cdktf.IResolvable | undefined) {
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
  private _serviceAttachment = new DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformGcpPrivateServiceConnectServiceAttachmentOutputReference(this, "service_attachment");
  public get serviceAttachment() {
    return this._serviceAttachment;
  }
  public putServiceAttachment(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformGcpPrivateServiceConnectServiceAttachment) {
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
export interface DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformGcp {
  /**
  * CredentialsSecretRef refers to a secret that contains the GCP account access credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#credentials_secret_ref DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#credentials_secret_ref}
  */
  readonly credentialsSecretRef?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformGcpCredentialsSecretRef;
  /**
  * PrivateSericeConnect allows users to enable access to the cluster's API server using GCP Private Service Connect. It includes a forwarding rule paired with a Service Attachment across GCP accounts and allows clients to connect to services using GCP internal networking of using public load balancers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#private_service_connect DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#private_service_connect}
  */
  readonly privateServiceConnect?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformGcpPrivateServiceConnect;
  /**
  * Region specifies the GCP region where the cluster will be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#region DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#region}
  */
  readonly region: string;
}

export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformGcpToTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformGcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credentials_secret_ref: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformGcpCredentialsSecretRefToTerraform(struct!.credentialsSecretRef),
    private_service_connect: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformGcpPrivateServiceConnectToTerraform(struct!.privateServiceConnect),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformGcpToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformGcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    credentials_secret_ref: {
      value: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformGcpCredentialsSecretRefToHclTerraform(struct!.credentialsSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformGcpCredentialsSecretRef",
    },
    private_service_connect: {
      value: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformGcpPrivateServiceConnectToHclTerraform(struct!.privateServiceConnect),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformGcpPrivateServiceConnect",
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

export class DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformGcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformGcp | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformGcp | cdktf.IResolvable | undefined) {
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
  private _credentialsSecretRef = new DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformGcpCredentialsSecretRefOutputReference(this, "credentials_secret_ref");
  public get credentialsSecretRef() {
    return this._credentialsSecretRef;
  }
  public putCredentialsSecretRef(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformGcpCredentialsSecretRef) {
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
  private _privateServiceConnect = new DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformGcpPrivateServiceConnectOutputReference(this, "private_service_connect");
  public get privateServiceConnect() {
    return this._privateServiceConnect;
  }
  public putPrivateServiceConnect(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformGcpPrivateServiceConnect) {
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
export interface DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformIbmcloudCredentialsSecretRef {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#name DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformIbmcloudCredentialsSecretRefToTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformIbmcloudCredentialsSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformIbmcloudCredentialsSecretRefToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformIbmcloudCredentialsSecretRef | cdktf.IResolvable): any {
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

export class DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformIbmcloudCredentialsSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformIbmcloudCredentialsSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformIbmcloudCredentialsSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformIbmcloud {
  /**
  * AccountID is the IBM Cloud Account ID. AccountID is DEPRECATED and is gathered via the IBM Cloud API for the provided credentials. This field will be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#account_id DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#account_id}
  */
  readonly accountId?: string;
  /**
  * CISInstanceCRN is the IBM Cloud Internet Services Instance CRN CISInstanceCRN is DEPRECATED and gathered via the IBM Cloud API for the provided credentials and cluster deployment base domain. This field will be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#cis_instance_crn DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#cis_instance_crn}
  */
  readonly cisInstanceCrn?: string;
  /**
  * CredentialsSecretRef refers to a secret that contains IBM Cloud account access credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#credentials_secret_ref DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#credentials_secret_ref}
  */
  readonly credentialsSecretRef: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformIbmcloudCredentialsSecretRef;
  /**
  * Region specifies the IBM Cloud region where the cluster will be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#region DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#region}
  */
  readonly region: string;
}

export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformIbmcloudToTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformIbmcloud | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_id: cdktf.stringToTerraform(struct!.accountId),
    cis_instance_crn: cdktf.stringToTerraform(struct!.cisInstanceCrn),
    credentials_secret_ref: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformIbmcloudCredentialsSecretRefToTerraform(struct!.credentialsSecretRef),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformIbmcloudToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformIbmcloud | cdktf.IResolvable): any {
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
      value: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformIbmcloudCredentialsSecretRefToHclTerraform(struct!.credentialsSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformIbmcloudCredentialsSecretRef",
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

export class DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformIbmcloudOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformIbmcloud | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformIbmcloud | cdktf.IResolvable | undefined) {
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
  private _credentialsSecretRef = new DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformIbmcloudCredentialsSecretRefOutputReference(this, "credentials_secret_ref");
  public get credentialsSecretRef() {
    return this._credentialsSecretRef;
  }
  public putCredentialsSecretRef(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformIbmcloudCredentialsSecretRef) {
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
export interface DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformOpenstackCertificatesSecretRef {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#name DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformOpenstackCertificatesSecretRefToTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformOpenstackCertificatesSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformOpenstackCertificatesSecretRefToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformOpenstackCertificatesSecretRef | cdktf.IResolvable): any {
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

export class DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformOpenstackCertificatesSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformOpenstackCertificatesSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformOpenstackCertificatesSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformOpenstackCredentialsSecretRef {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#name DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformOpenstackCredentialsSecretRefToTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformOpenstackCredentialsSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformOpenstackCredentialsSecretRefToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformOpenstackCredentialsSecretRef | cdktf.IResolvable): any {
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

export class DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformOpenstackCredentialsSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformOpenstackCredentialsSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformOpenstackCredentialsSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformOpenstack {
  /**
  * CertificatesSecretRef refers to a secret that contains CA certificates necessary for communicating with the OpenStack. There is additional configuration required for the OpenShift cluster to trust the certificates provided in this secret. The 'clouds.yaml' file included in the credentialsSecretRef Secret must also include a reference to the certificate bundle file for the OpenShift cluster being created to trust the OpenStack endpoints. The 'clouds.yaml' file must set the 'cacert' field to either '/etc/openstack-ca/<key name containing the trust bundle in credentialsSecretRef Secret>' or '/etc/pki/ca-trust/extracted/pem/tls-ca-bundle.pem'. For example, ```clouds.yaml clouds: shiftstack: auth: ... cacert: '/etc/pki/ca-trust/extracted/pem/tls-ca-bundle.pem' ```
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#certificates_secret_ref DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#certificates_secret_ref}
  */
  readonly certificatesSecretRef?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformOpenstackCertificatesSecretRef;
  /**
  * Cloud will be used to indicate the OS_CLOUD value to use the right section from the clouds.yaml in the CredentialsSecretRef.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#cloud DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#cloud}
  */
  readonly cloud: string;
  /**
  * CredentialsSecretRef refers to a secret that contains the OpenStack account access credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#credentials_secret_ref DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#credentials_secret_ref}
  */
  readonly credentialsSecretRef: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformOpenstackCredentialsSecretRef;
  /**
  * TrunkSupport indicates whether or not to use trunk ports in your OpenShift cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#trunk_support DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#trunk_support}
  */
  readonly trunkSupport?: boolean | cdktf.IResolvable;
}

export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformOpenstackToTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformOpenstack | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificates_secret_ref: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformOpenstackCertificatesSecretRefToTerraform(struct!.certificatesSecretRef),
    cloud: cdktf.stringToTerraform(struct!.cloud),
    credentials_secret_ref: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformOpenstackCredentialsSecretRefToTerraform(struct!.credentialsSecretRef),
    trunk_support: cdktf.booleanToTerraform(struct!.trunkSupport),
  }
}


export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformOpenstackToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformOpenstack | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificates_secret_ref: {
      value: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformOpenstackCertificatesSecretRefToHclTerraform(struct!.certificatesSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformOpenstackCertificatesSecretRef",
    },
    cloud: {
      value: cdktf.stringToHclTerraform(struct!.cloud),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credentials_secret_ref: {
      value: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformOpenstackCredentialsSecretRefToHclTerraform(struct!.credentialsSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformOpenstackCredentialsSecretRef",
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

export class DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformOpenstackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformOpenstack | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformOpenstack | cdktf.IResolvable | undefined) {
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
  private _certificatesSecretRef = new DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformOpenstackCertificatesSecretRefOutputReference(this, "certificates_secret_ref");
  public get certificatesSecretRef() {
    return this._certificatesSecretRef;
  }
  public putCertificatesSecretRef(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformOpenstackCertificatesSecretRef) {
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
  private _credentialsSecretRef = new DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformOpenstackCredentialsSecretRefOutputReference(this, "credentials_secret_ref");
  public get credentialsSecretRef() {
    return this._credentialsSecretRef;
  }
  public putCredentialsSecretRef(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformOpenstackCredentialsSecretRef) {
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
export interface DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformOvirtCertificatesSecretRef {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#name DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformOvirtCertificatesSecretRefToTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformOvirtCertificatesSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformOvirtCertificatesSecretRefToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformOvirtCertificatesSecretRef | cdktf.IResolvable): any {
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

export class DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformOvirtCertificatesSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformOvirtCertificatesSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformOvirtCertificatesSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformOvirtCredentialsSecretRef {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#name DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformOvirtCredentialsSecretRefToTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformOvirtCredentialsSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformOvirtCredentialsSecretRefToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformOvirtCredentialsSecretRef | cdktf.IResolvable): any {
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

export class DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformOvirtCredentialsSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformOvirtCredentialsSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformOvirtCredentialsSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformOvirt {
  /**
  * CertificatesSecretRef refers to a secret that contains the oVirt CA certificates necessary for communicating with oVirt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#certificates_secret_ref DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#certificates_secret_ref}
  */
  readonly certificatesSecretRef: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformOvirtCertificatesSecretRef;
  /**
  * CredentialsSecretRef refers to a secret that contains the oVirt account access credentials with fields: ovirt_url, ovirt_username, ovirt_password, ovirt_ca_bundle
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#credentials_secret_ref DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#credentials_secret_ref}
  */
  readonly credentialsSecretRef: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformOvirtCredentialsSecretRef;
  /**
  * The target cluster under which all VMs will run
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#ovirt_cluster_id DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#ovirt_cluster_id}
  */
  readonly ovirtClusterId: string;
  /**
  * The target network of all the network interfaces of the nodes. Omitting defaults to ovirtmgmt network which is a default network for evert ovirt cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#ovirt_network_name DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#ovirt_network_name}
  */
  readonly ovirtNetworkName?: string;
  /**
  * The target storage domain under which all VM disk would be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#storage_domain_id DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#storage_domain_id}
  */
  readonly storageDomainId: string;
}

export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformOvirtToTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformOvirt | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificates_secret_ref: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformOvirtCertificatesSecretRefToTerraform(struct!.certificatesSecretRef),
    credentials_secret_ref: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformOvirtCredentialsSecretRefToTerraform(struct!.credentialsSecretRef),
    ovirt_cluster_id: cdktf.stringToTerraform(struct!.ovirtClusterId),
    ovirt_network_name: cdktf.stringToTerraform(struct!.ovirtNetworkName),
    storage_domain_id: cdktf.stringToTerraform(struct!.storageDomainId),
  }
}


export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformOvirtToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformOvirt | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificates_secret_ref: {
      value: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformOvirtCertificatesSecretRefToHclTerraform(struct!.certificatesSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformOvirtCertificatesSecretRef",
    },
    credentials_secret_ref: {
      value: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformOvirtCredentialsSecretRefToHclTerraform(struct!.credentialsSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformOvirtCredentialsSecretRef",
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

export class DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformOvirtOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformOvirt | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformOvirt | cdktf.IResolvable | undefined) {
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
  private _certificatesSecretRef = new DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformOvirtCertificatesSecretRefOutputReference(this, "certificates_secret_ref");
  public get certificatesSecretRef() {
    return this._certificatesSecretRef;
  }
  public putCertificatesSecretRef(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformOvirtCertificatesSecretRef) {
    this._certificatesSecretRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificatesSecretRefInput() {
    return this._certificatesSecretRef.internalValue;
  }

  // credentials_secret_ref - computed: false, optional: false, required: true
  private _credentialsSecretRef = new DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformOvirtCredentialsSecretRefOutputReference(this, "credentials_secret_ref");
  public get credentialsSecretRef() {
    return this._credentialsSecretRef;
  }
  public putCredentialsSecretRef(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformOvirtCredentialsSecretRef) {
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
export interface DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformVsphereCertificatesSecretRef {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#name DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformVsphereCertificatesSecretRefToTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformVsphereCertificatesSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformVsphereCertificatesSecretRefToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformVsphereCertificatesSecretRef | cdktf.IResolvable): any {
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

export class DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformVsphereCertificatesSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformVsphereCertificatesSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformVsphereCertificatesSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformVsphereCredentialsSecretRef {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#name DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformVsphereCredentialsSecretRefToTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformVsphereCredentialsSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformVsphereCredentialsSecretRefToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformVsphereCredentialsSecretRef | cdktf.IResolvable): any {
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

export class DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformVsphereCredentialsSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformVsphereCredentialsSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformVsphereCredentialsSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformVsphere {
  /**
  * CertificatesSecretRef refers to a secret that contains the vSphere CA certificates necessary for communicating with the VCenter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#certificates_secret_ref DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#certificates_secret_ref}
  */
  readonly certificatesSecretRef: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformVsphereCertificatesSecretRef;
  /**
  * Cluster is the name of the cluster virtual machines will be cloned into.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#cluster DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#cluster}
  */
  readonly cluster?: string;
  /**
  * CredentialsSecretRef refers to a secret that contains the vSphere account access credentials: GOVC_USERNAME, GOVC_PASSWORD fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#credentials_secret_ref DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#credentials_secret_ref}
  */
  readonly credentialsSecretRef: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformVsphereCredentialsSecretRef;
  /**
  * Datacenter is the name of the datacenter to use in the vCenter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#datacenter DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#datacenter}
  */
  readonly datacenter: string;
  /**
  * DefaultDatastore is the default datastore to use for provisioning volumes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#default_datastore DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#default_datastore}
  */
  readonly defaultDatastore: string;
  /**
  * Folder is the name of the folder that will be used and/or created for virtual machines.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#folder DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#folder}
  */
  readonly folder?: string;
  /**
  * Network specifies the name of the network to be used by the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#network DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#network}
  */
  readonly network?: string;
  /**
  * VCenter is the domain name or IP address of the vCenter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#v_center DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#v_center}
  */
  readonly vCenter: string;
}

export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformVsphereToTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformVsphere | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificates_secret_ref: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformVsphereCertificatesSecretRefToTerraform(struct!.certificatesSecretRef),
    cluster: cdktf.stringToTerraform(struct!.cluster),
    credentials_secret_ref: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformVsphereCredentialsSecretRefToTerraform(struct!.credentialsSecretRef),
    datacenter: cdktf.stringToTerraform(struct!.datacenter),
    default_datastore: cdktf.stringToTerraform(struct!.defaultDatastore),
    folder: cdktf.stringToTerraform(struct!.folder),
    network: cdktf.stringToTerraform(struct!.network),
    v_center: cdktf.stringToTerraform(struct!.vCenter),
  }
}


export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformVsphereToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformVsphere | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificates_secret_ref: {
      value: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformVsphereCertificatesSecretRefToHclTerraform(struct!.certificatesSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformVsphereCertificatesSecretRef",
    },
    cluster: {
      value: cdktf.stringToHclTerraform(struct!.cluster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credentials_secret_ref: {
      value: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformVsphereCredentialsSecretRefToHclTerraform(struct!.credentialsSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformVsphereCredentialsSecretRef",
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

export class DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformVsphereOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformVsphere | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformVsphere | cdktf.IResolvable | undefined) {
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
  private _certificatesSecretRef = new DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformVsphereCertificatesSecretRefOutputReference(this, "certificates_secret_ref");
  public get certificatesSecretRef() {
    return this._certificatesSecretRef;
  }
  public putCertificatesSecretRef(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformVsphereCertificatesSecretRef) {
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
  private _credentialsSecretRef = new DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformVsphereCredentialsSecretRefOutputReference(this, "credentials_secret_ref");
  public get credentialsSecretRef() {
    return this._credentialsSecretRef;
  }
  public putCredentialsSecretRef(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformVsphereCredentialsSecretRef) {
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
export interface DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatform {
  /**
  * AgentBareMetal is the configuration used when performing an Assisted Agent based installation to bare metal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#agent_bare_metal DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#agent_bare_metal}
  */
  readonly agentBareMetal?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAgentBareMetal;
  /**
  * AWS is the configuration used when installing on AWS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#aws DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#aws}
  */
  readonly aws?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAws;
  /**
  * Azure is the configuration used when installing on Azure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#azure DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#azure}
  */
  readonly azure?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAzure;
  /**
  * BareMetal is the configuration used when installing on bare metal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#baremetal DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#baremetal}
  */
  readonly baremetal?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformBaremetal;
  /**
  * GCP is the configuration used when installing on Google Cloud Platform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#gcp DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#gcp}
  */
  readonly gcp?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformGcp;
  /**
  * IBMCloud is the configuration used when installing on IBM Cloud
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#ibmcloud DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#ibmcloud}
  */
  readonly ibmcloud?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformIbmcloud;
  /**
  * None indicates platform-agnostic install. https://docs.openshift.com/container-platform/4.7/installing/installing_platform_agnostic/installing-platform-agnostic.html
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#none DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#none}
  */
  readonly none?: { [key: string]: string };
  /**
  * OpenStack is the configuration used when installing on OpenStack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#openstack DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#openstack}
  */
  readonly openstack?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformOpenstack;
  /**
  * Ovirt is the configuration used when installing on oVirt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#ovirt DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#ovirt}
  */
  readonly ovirt?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformOvirt;
  /**
  * VSphere is the configuration used when installing on vSphere
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#vsphere DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#vsphere}
  */
  readonly vsphere?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformVsphere;
}

export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformToTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatform | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agent_bare_metal: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAgentBareMetalToTerraform(struct!.agentBareMetal),
    aws: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAwsToTerraform(struct!.aws),
    azure: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAzureToTerraform(struct!.azure),
    baremetal: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformBaremetalToTerraform(struct!.baremetal),
    gcp: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformGcpToTerraform(struct!.gcp),
    ibmcloud: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformIbmcloudToTerraform(struct!.ibmcloud),
    none: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.none),
    openstack: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformOpenstackToTerraform(struct!.openstack),
    ovirt: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformOvirtToTerraform(struct!.ovirt),
    vsphere: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformVsphereToTerraform(struct!.vsphere),
  }
}


export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatform | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    agent_bare_metal: {
      value: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAgentBareMetalToHclTerraform(struct!.agentBareMetal),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAgentBareMetal",
    },
    aws: {
      value: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAwsToHclTerraform(struct!.aws),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAws",
    },
    azure: {
      value: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAzureToHclTerraform(struct!.azure),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAzure",
    },
    baremetal: {
      value: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformBaremetalToHclTerraform(struct!.baremetal),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformBaremetal",
    },
    gcp: {
      value: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformGcpToHclTerraform(struct!.gcp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformGcp",
    },
    ibmcloud: {
      value: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformIbmcloudToHclTerraform(struct!.ibmcloud),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformIbmcloud",
    },
    none: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.none),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    openstack: {
      value: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformOpenstackToHclTerraform(struct!.openstack),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformOpenstack",
    },
    ovirt: {
      value: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformOvirtToHclTerraform(struct!.ovirt),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformOvirt",
    },
    vsphere: {
      value: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformVsphereToHclTerraform(struct!.vsphere),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformVsphere",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatform | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatform | cdktf.IResolvable | undefined) {
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
  private _agentBareMetal = new DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAgentBareMetalOutputReference(this, "agent_bare_metal");
  public get agentBareMetal() {
    return this._agentBareMetal;
  }
  public putAgentBareMetal(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAgentBareMetal) {
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
  private _aws = new DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAwsOutputReference(this, "aws");
  public get aws() {
    return this._aws;
  }
  public putAws(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAws) {
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
  private _azure = new DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAzureOutputReference(this, "azure");
  public get azure() {
    return this._azure;
  }
  public putAzure(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformAzure) {
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
  private _baremetal = new DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformBaremetalOutputReference(this, "baremetal");
  public get baremetal() {
    return this._baremetal;
  }
  public putBaremetal(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformBaremetal) {
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
  private _gcp = new DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformGcpOutputReference(this, "gcp");
  public get gcp() {
    return this._gcp;
  }
  public putGcp(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformGcp) {
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
  private _ibmcloud = new DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformIbmcloudOutputReference(this, "ibmcloud");
  public get ibmcloud() {
    return this._ibmcloud;
  }
  public putIbmcloud(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformIbmcloud) {
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
  private _openstack = new DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformOpenstackOutputReference(this, "openstack");
  public get openstack() {
    return this._openstack;
  }
  public putOpenstack(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformOpenstack) {
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
  private _ovirt = new DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformOvirtOutputReference(this, "ovirt");
  public get ovirt() {
    return this._ovirt;
  }
  public putOvirt(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformOvirt) {
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
  private _vsphere = new DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformVsphereOutputReference(this, "vsphere");
  public get vsphere() {
    return this._vsphere;
  }
  public putVsphere(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformVsphere) {
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
export interface DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningImageSetRef {
  /**
  * Name is the name of the ClusterImageSet that this refers to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#name DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningImageSetRefToTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningImageSetRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningImageSetRefToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningImageSetRef | cdktf.IResolvable): any {
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

export class DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningImageSetRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningImageSetRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningImageSetRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningInstallConfigSecretRef {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#name DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningInstallConfigSecretRefToTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningInstallConfigSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningInstallConfigSecretRefToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningInstallConfigSecretRef | cdktf.IResolvable): any {
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

export class DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningInstallConfigSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningInstallConfigSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningInstallConfigSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningInstallerEnvValueFromConfigMapKeyRef {
  /**
  * The key to select.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#key DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#name DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#optional DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningInstallerEnvValueFromConfigMapKeyRefToTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningInstallerEnvValueFromConfigMapKeyRef | cdktf.IResolvable): any {
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


export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningInstallerEnvValueFromConfigMapKeyRefToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningInstallerEnvValueFromConfigMapKeyRef | cdktf.IResolvable): any {
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

export class DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningInstallerEnvValueFromConfigMapKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningInstallerEnvValueFromConfigMapKeyRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningInstallerEnvValueFromConfigMapKeyRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningInstallerEnvValueFromFieldRef {
  /**
  * Version of the schema the FieldPath is written in terms of, defaults to 'v1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#api_version DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Path of the field to select in the specified API version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#field_path DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#field_path}
  */
  readonly fieldPath: string;
}

export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningInstallerEnvValueFromFieldRefToTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningInstallerEnvValueFromFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}


export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningInstallerEnvValueFromFieldRefToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningInstallerEnvValueFromFieldRef | cdktf.IResolvable): any {
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

export class DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningInstallerEnvValueFromFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningInstallerEnvValueFromFieldRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningInstallerEnvValueFromFieldRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningInstallerEnvValueFromResourceFieldRef {
  /**
  * Container name: required for volumes, optional for env vars
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#container_name DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#container_name}
  */
  readonly containerName?: string;
  /**
  * Specifies the output format of the exposed resources, defaults to '1'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#divisor DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#divisor}
  */
  readonly divisor?: string;
  /**
  * Required: resource to select
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#resource DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#resource}
  */
  readonly resource: string;
}

export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningInstallerEnvValueFromResourceFieldRefToTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningInstallerEnvValueFromResourceFieldRef | cdktf.IResolvable): any {
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


export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningInstallerEnvValueFromResourceFieldRefToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningInstallerEnvValueFromResourceFieldRef | cdktf.IResolvable): any {
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

export class DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningInstallerEnvValueFromResourceFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningInstallerEnvValueFromResourceFieldRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningInstallerEnvValueFromResourceFieldRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningInstallerEnvValueFromSecretKeyRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#key DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#name DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#optional DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningInstallerEnvValueFromSecretKeyRefToTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningInstallerEnvValueFromSecretKeyRef | cdktf.IResolvable): any {
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


export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningInstallerEnvValueFromSecretKeyRefToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningInstallerEnvValueFromSecretKeyRef | cdktf.IResolvable): any {
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

export class DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningInstallerEnvValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningInstallerEnvValueFromSecretKeyRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningInstallerEnvValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningInstallerEnvValueFrom {
  /**
  * Selects a key of a ConfigMap.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#config_map_key_ref DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#config_map_key_ref}
  */
  readonly configMapKeyRef?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningInstallerEnvValueFromConfigMapKeyRef;
  /**
  * Selects a field of the pod: supports metadata.name, metadata.namespace, 'metadata.labels['<KEY>']', 'metadata.annotations['<KEY>']', spec.nodeName, spec.serviceAccountName, status.hostIP, status.podIP, status.podIPs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#field_ref DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#field_ref}
  */
  readonly fieldRef?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningInstallerEnvValueFromFieldRef;
  /**
  * Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, limits.ephemeral-storage, requests.cpu, requests.memory and requests.ephemeral-storage) are currently supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#resource_field_ref DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#resource_field_ref}
  */
  readonly resourceFieldRef?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningInstallerEnvValueFromResourceFieldRef;
  /**
  * Selects a key of a secret in the pod's namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#secret_key_ref DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningInstallerEnvValueFromSecretKeyRef;
}

export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningInstallerEnvValueFromToTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningInstallerEnvValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map_key_ref: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningInstallerEnvValueFromConfigMapKeyRefToTerraform(struct!.configMapKeyRef),
    field_ref: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningInstallerEnvValueFromFieldRefToTerraform(struct!.fieldRef),
    resource_field_ref: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningInstallerEnvValueFromResourceFieldRefToTerraform(struct!.resourceFieldRef),
    secret_key_ref: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningInstallerEnvValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningInstallerEnvValueFromToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningInstallerEnvValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map_key_ref: {
      value: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningInstallerEnvValueFromConfigMapKeyRefToHclTerraform(struct!.configMapKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningInstallerEnvValueFromConfigMapKeyRef",
    },
    field_ref: {
      value: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningInstallerEnvValueFromFieldRefToHclTerraform(struct!.fieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningInstallerEnvValueFromFieldRef",
    },
    resource_field_ref: {
      value: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningInstallerEnvValueFromResourceFieldRefToHclTerraform(struct!.resourceFieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningInstallerEnvValueFromResourceFieldRef",
    },
    secret_key_ref: {
      value: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningInstallerEnvValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningInstallerEnvValueFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningInstallerEnvValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningInstallerEnvValueFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningInstallerEnvValueFrom | cdktf.IResolvable | undefined) {
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
  private _configMapKeyRef = new DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningInstallerEnvValueFromConfigMapKeyRefOutputReference(this, "config_map_key_ref");
  public get configMapKeyRef() {
    return this._configMapKeyRef;
  }
  public putConfigMapKeyRef(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningInstallerEnvValueFromConfigMapKeyRef) {
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
  private _fieldRef = new DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningInstallerEnvValueFromFieldRefOutputReference(this, "field_ref");
  public get fieldRef() {
    return this._fieldRef;
  }
  public putFieldRef(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningInstallerEnvValueFromFieldRef) {
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
  private _resourceFieldRef = new DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningInstallerEnvValueFromResourceFieldRefOutputReference(this, "resource_field_ref");
  public get resourceFieldRef() {
    return this._resourceFieldRef;
  }
  public putResourceFieldRef(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningInstallerEnvValueFromResourceFieldRef) {
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
  private _secretKeyRef = new DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningInstallerEnvValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningInstallerEnvValueFromSecretKeyRef) {
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
export interface DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningInstallerEnv {
  /**
  * Name of the environment variable. Must be a C_IDENTIFIER.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#name DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#name}
  */
  readonly name: string;
  /**
  * Variable references $(VAR_NAME) are expanded using the previously defined environment variables in the container and any service environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. '$$(VAR_NAME)' will produce the string literal '$(VAR_NAME)'. Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to ''.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#value DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#value}
  */
  readonly value?: string;
  /**
  * Source for the environment variable's value. Cannot be used if value is not empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#value_from DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#value_from}
  */
  readonly valueFrom?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningInstallerEnvValueFrom;
}

export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningInstallerEnvToTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningInstallerEnv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
    value_from: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningInstallerEnvValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningInstallerEnvToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningInstallerEnv | cdktf.IResolvable): any {
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
      value: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningInstallerEnvValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningInstallerEnvValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningInstallerEnvOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningInstallerEnv | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningInstallerEnv | cdktf.IResolvable | undefined) {
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
  private _valueFrom = new DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningInstallerEnvValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningInstallerEnvValueFrom) {
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

export class DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningInstallerEnvList extends cdktf.ComplexList {
  public internalValue? : DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningInstallerEnv[] | cdktf.IResolvable

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
  public get(index: number): DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningInstallerEnvOutputReference {
    return new DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningInstallerEnvOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningManifestsConfigMapRef {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#name DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningManifestsConfigMapRefToTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningManifestsConfigMapRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningManifestsConfigMapRefToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningManifestsConfigMapRef | cdktf.IResolvable): any {
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

export class DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningManifestsConfigMapRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningManifestsConfigMapRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningManifestsConfigMapRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningManifestsSecretRef {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#name DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningManifestsSecretRefToTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningManifestsSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningManifestsSecretRefToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningManifestsSecretRef | cdktf.IResolvable): any {
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

export class DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningManifestsSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningManifestsSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningManifestsSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningSshPrivateKeySecretRef {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#name DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningSshPrivateKeySecretRefToTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningSshPrivateKeySecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningSshPrivateKeySecretRefToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningSshPrivateKeySecretRef | cdktf.IResolvable): any {
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

export class DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningSshPrivateKeySecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningSshPrivateKeySecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningSshPrivateKeySecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioning {
  /**
  * ImageSetRef is a reference to a ClusterImageSet. If a value is specified for ReleaseImage, that will take precedence over the one from the ClusterImageSet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#image_set_ref DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#image_set_ref}
  */
  readonly imageSetRef?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningImageSetRef;
  /**
  * InstallConfigSecretRef is the reference to a secret that contains an openshift-install InstallConfig. This file will be passed through directly to the installer. Any version of InstallConfig can be used, provided it can be parsed by the openshift-install version for the release you are provisioning.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#install_config_secret_ref DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#install_config_secret_ref}
  */
  readonly installConfigSecretRef?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningInstallConfigSecretRef;
  /**
  * InstallerEnv are extra environment variables to pass through to the installer. This may be used to enable additional features of the installer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#installer_env DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#installer_env}
  */
  readonly installerEnv?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningInstallerEnv[] | cdktf.IResolvable;
  /**
  * InstallerImageOverride allows specifying a URI for the installer image, normally gleaned from the metadata within the ReleaseImage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#installer_image_override DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#installer_image_override}
  */
  readonly installerImageOverride?: string;
  /**
  * ManifestsConfigMapRef is a reference to user-provided manifests to add to or replace manifests that are generated by the installer. It serves the same purpose as, and is mutually exclusive with, ManifestsSecretRef.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#manifests_config_map_ref DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#manifests_config_map_ref}
  */
  readonly manifestsConfigMapRef?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningManifestsConfigMapRef;
  /**
  * ManifestsSecretRef is a reference to user-provided manifests to add to or replace manifests that are generated by the installer. It serves the same purpose as, and is mutually exclusive with, ManifestsConfigMapRef.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#manifests_secret_ref DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#manifests_secret_ref}
  */
  readonly manifestsSecretRef?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningManifestsSecretRef;
  /**
  * ReleaseImage is the image containing metadata for all components that run in the cluster, and is the primary and best way to specify what specific version of OpenShift you wish to install.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#release_image DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#release_image}
  */
  readonly releaseImage?: string;
  /**
  * SSHKnownHosts are known hosts to be configured in the hive install manager pod to avoid ssh prompts. Use of ssh in the install pod is somewhat limited today (failure log gathering from cluster, some bare metal provisioning scenarios), so this setting is often not needed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#ssh_known_hosts DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#ssh_known_hosts}
  */
  readonly sshKnownHosts?: string[];
  /**
  * SSHPrivateKeySecretRef is the reference to the secret that contains the private SSH key to use for access to compute instances. This private key should correspond to the public key included in the InstallConfig. The private key is used by Hive to gather logs on the target cluster if there are install failures. The SSH private key is expected to be in the secret data under the 'ssh-privatekey' key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#ssh_private_key_secret_ref DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#ssh_private_key_secret_ref}
  */
  readonly sshPrivateKeySecretRef?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningSshPrivateKeySecretRef;
}

export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningToTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioning | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image_set_ref: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningImageSetRefToTerraform(struct!.imageSetRef),
    install_config_secret_ref: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningInstallConfigSecretRefToTerraform(struct!.installConfigSecretRef),
    installer_env: cdktf.listMapper(dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningInstallerEnvToTerraform, false)(struct!.installerEnv),
    installer_image_override: cdktf.stringToTerraform(struct!.installerImageOverride),
    manifests_config_map_ref: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningManifestsConfigMapRefToTerraform(struct!.manifestsConfigMapRef),
    manifests_secret_ref: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningManifestsSecretRefToTerraform(struct!.manifestsSecretRef),
    release_image: cdktf.stringToTerraform(struct!.releaseImage),
    ssh_known_hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sshKnownHosts),
    ssh_private_key_secret_ref: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningSshPrivateKeySecretRefToTerraform(struct!.sshPrivateKeySecretRef),
  }
}


export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioning | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image_set_ref: {
      value: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningImageSetRefToHclTerraform(struct!.imageSetRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningImageSetRef",
    },
    install_config_secret_ref: {
      value: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningInstallConfigSecretRefToHclTerraform(struct!.installConfigSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningInstallConfigSecretRef",
    },
    installer_env: {
      value: cdktf.listMapperHcl(dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningInstallerEnvToHclTerraform, false)(struct!.installerEnv),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningInstallerEnvList",
    },
    installer_image_override: {
      value: cdktf.stringToHclTerraform(struct!.installerImageOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    manifests_config_map_ref: {
      value: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningManifestsConfigMapRefToHclTerraform(struct!.manifestsConfigMapRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningManifestsConfigMapRef",
    },
    manifests_secret_ref: {
      value: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningManifestsSecretRefToHclTerraform(struct!.manifestsSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningManifestsSecretRef",
    },
    release_image: {
      value: cdktf.stringToHclTerraform(struct!.releaseImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_known_hosts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sshKnownHosts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ssh_private_key_secret_ref: {
      value: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningSshPrivateKeySecretRefToHclTerraform(struct!.sshPrivateKeySecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningSshPrivateKeySecretRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioning | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imageSetRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageSetRef = this._imageSetRef?.internalValue;
    }
    if (this._installConfigSecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.installConfigSecretRef = this._installConfigSecretRef?.internalValue;
    }
    if (this._installerEnv?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.installerEnv = this._installerEnv?.internalValue;
    }
    if (this._installerImageOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.installerImageOverride = this._installerImageOverride;
    }
    if (this._manifestsConfigMapRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.manifestsConfigMapRef = this._manifestsConfigMapRef?.internalValue;
    }
    if (this._manifestsSecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.manifestsSecretRef = this._manifestsSecretRef?.internalValue;
    }
    if (this._releaseImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.releaseImage = this._releaseImage;
    }
    if (this._sshKnownHosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshKnownHosts = this._sshKnownHosts;
    }
    if (this._sshPrivateKeySecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshPrivateKeySecretRef = this._sshPrivateKeySecretRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioning | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._imageSetRef.internalValue = undefined;
      this._installConfigSecretRef.internalValue = undefined;
      this._installerEnv.internalValue = undefined;
      this._installerImageOverride = undefined;
      this._manifestsConfigMapRef.internalValue = undefined;
      this._manifestsSecretRef.internalValue = undefined;
      this._releaseImage = undefined;
      this._sshKnownHosts = undefined;
      this._sshPrivateKeySecretRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._imageSetRef.internalValue = value.imageSetRef;
      this._installConfigSecretRef.internalValue = value.installConfigSecretRef;
      this._installerEnv.internalValue = value.installerEnv;
      this._installerImageOverride = value.installerImageOverride;
      this._manifestsConfigMapRef.internalValue = value.manifestsConfigMapRef;
      this._manifestsSecretRef.internalValue = value.manifestsSecretRef;
      this._releaseImage = value.releaseImage;
      this._sshKnownHosts = value.sshKnownHosts;
      this._sshPrivateKeySecretRef.internalValue = value.sshPrivateKeySecretRef;
    }
  }

  // image_set_ref - computed: false, optional: true, required: false
  private _imageSetRef = new DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningImageSetRefOutputReference(this, "image_set_ref");
  public get imageSetRef() {
    return this._imageSetRef;
  }
  public putImageSetRef(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningImageSetRef) {
    this._imageSetRef.internalValue = value;
  }
  public resetImageSetRef() {
    this._imageSetRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageSetRefInput() {
    return this._imageSetRef.internalValue;
  }

  // install_config_secret_ref - computed: false, optional: true, required: false
  private _installConfigSecretRef = new DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningInstallConfigSecretRefOutputReference(this, "install_config_secret_ref");
  public get installConfigSecretRef() {
    return this._installConfigSecretRef;
  }
  public putInstallConfigSecretRef(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningInstallConfigSecretRef) {
    this._installConfigSecretRef.internalValue = value;
  }
  public resetInstallConfigSecretRef() {
    this._installConfigSecretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installConfigSecretRefInput() {
    return this._installConfigSecretRef.internalValue;
  }

  // installer_env - computed: false, optional: true, required: false
  private _installerEnv = new DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningInstallerEnvList(this, "installer_env", false);
  public get installerEnv() {
    return this._installerEnv;
  }
  public putInstallerEnv(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningInstallerEnv[] | cdktf.IResolvable) {
    this._installerEnv.internalValue = value;
  }
  public resetInstallerEnv() {
    this._installerEnv.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installerEnvInput() {
    return this._installerEnv.internalValue;
  }

  // installer_image_override - computed: false, optional: true, required: false
  private _installerImageOverride?: string; 
  public get installerImageOverride() {
    return this.getStringAttribute('installer_image_override');
  }
  public set installerImageOverride(value: string) {
    this._installerImageOverride = value;
  }
  public resetInstallerImageOverride() {
    this._installerImageOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installerImageOverrideInput() {
    return this._installerImageOverride;
  }

  // manifests_config_map_ref - computed: false, optional: true, required: false
  private _manifestsConfigMapRef = new DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningManifestsConfigMapRefOutputReference(this, "manifests_config_map_ref");
  public get manifestsConfigMapRef() {
    return this._manifestsConfigMapRef;
  }
  public putManifestsConfigMapRef(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningManifestsConfigMapRef) {
    this._manifestsConfigMapRef.internalValue = value;
  }
  public resetManifestsConfigMapRef() {
    this._manifestsConfigMapRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manifestsConfigMapRefInput() {
    return this._manifestsConfigMapRef.internalValue;
  }

  // manifests_secret_ref - computed: false, optional: true, required: false
  private _manifestsSecretRef = new DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningManifestsSecretRefOutputReference(this, "manifests_secret_ref");
  public get manifestsSecretRef() {
    return this._manifestsSecretRef;
  }
  public putManifestsSecretRef(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningManifestsSecretRef) {
    this._manifestsSecretRef.internalValue = value;
  }
  public resetManifestsSecretRef() {
    this._manifestsSecretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manifestsSecretRefInput() {
    return this._manifestsSecretRef.internalValue;
  }

  // release_image - computed: false, optional: true, required: false
  private _releaseImage?: string; 
  public get releaseImage() {
    return this.getStringAttribute('release_image');
  }
  public set releaseImage(value: string) {
    this._releaseImage = value;
  }
  public resetReleaseImage() {
    this._releaseImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseImageInput() {
    return this._releaseImage;
  }

  // ssh_known_hosts - computed: false, optional: true, required: false
  private _sshKnownHosts?: string[]; 
  public get sshKnownHosts() {
    return this.getListAttribute('ssh_known_hosts');
  }
  public set sshKnownHosts(value: string[]) {
    this._sshKnownHosts = value;
  }
  public resetSshKnownHosts() {
    this._sshKnownHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKnownHostsInput() {
    return this._sshKnownHosts;
  }

  // ssh_private_key_secret_ref - computed: false, optional: true, required: false
  private _sshPrivateKeySecretRef = new DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningSshPrivateKeySecretRefOutputReference(this, "ssh_private_key_secret_ref");
  public get sshPrivateKeySecretRef() {
    return this._sshPrivateKeySecretRef;
  }
  public putSshPrivateKeySecretRef(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningSshPrivateKeySecretRef) {
    this._sshPrivateKeySecretRef.internalValue = value;
  }
  public resetSshPrivateKeySecretRef() {
    this._sshPrivateKeySecretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPrivateKeySecretRefInput() {
    return this._sshPrivateKeySecretRef.internalValue;
  }
}
export interface DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPullSecretRef {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#name DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPullSecretRefToTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPullSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPullSecretRefToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPullSecretRef | cdktf.IResolvable): any {
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

export class DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPullSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPullSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPullSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpec {
  /**
  * BaseDomain is the base domain to which the cluster should belong.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#base_domain DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#base_domain}
  */
  readonly baseDomain: string;
  /**
  * BoundServiceAccountSigningKeySecretRef refers to a Secret that contains a 'bound-service-account-signing-key.key' data key pointing to the private key that will be used to sign ServiceAccount objects. Primarily used to provision AWS clusters to use Amazon's Security Token Service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#bound_service_account_signing_key_secret_ref DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#bound_service_account_signing_key_secret_ref}
  */
  readonly boundServiceAccountSigningKeySecretRef?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecBoundServiceAccountSigningKeySecretRef;
  /**
  * CertificateBundles is a list of certificate bundles associated with this cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#certificate_bundles DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#certificate_bundles}
  */
  readonly certificateBundles?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecCertificateBundles[] | cdktf.IResolvable;
  /**
  * ClusterInstallLocalReference provides reference to an object that implements the hivecontract ClusterInstall. The namespace of the object is same as the ClusterDeployment. This cannot be set when Provisioning is also set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#cluster_install_ref DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#cluster_install_ref}
  */
  readonly clusterInstallRef?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterInstallRef;
  /**
  * ClusterMetadata contains metadata information about the installed cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#cluster_metadata DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#cluster_metadata}
  */
  readonly clusterMetadata?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterMetadata;
  /**
  * ClusterName is the friendly name of the cluster. It is used for subdomains, some resource tagging, and other instances where a friendly name for the cluster is useful.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#cluster_name DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#cluster_name}
  */
  readonly clusterName: string;
  /**
  * ClusterPoolRef is a reference to the ClusterPool that this ClusterDeployment originated from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#cluster_pool_ref DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#cluster_pool_ref}
  */
  readonly clusterPoolRef?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterPoolRef;
  /**
  * ControlPlaneConfig contains additional configuration for the target cluster's control plane
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#control_plane_config DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#control_plane_config}
  */
  readonly controlPlaneConfig?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecControlPlaneConfig;
  /**
  * HibernateAfter will transition a cluster to hibernating power state after it has been running for the given duration. The time that a cluster has been running is the time since the cluster was installed or the time since the cluster last came out of hibernation. This is a Duration value; see https://pkg.go.dev/time#ParseDuration for accepted formats. Note: due to discrepancies in validation vs parsing, we use a Pattern instead of 'Format=duration'. See https://bugzilla.redhat.com/show_bug.cgi?id=2050332 https://github.com/kubernetes/apimachinery/issues/131 https://github.com/kubernetes/apiextensions-apiserver/issues/56
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#hibernate_after DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#hibernate_after}
  */
  readonly hibernateAfter?: string;
  /**
  * Ingress allows defining desired clusteringress/shards to be configured on the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#ingress DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#ingress}
  */
  readonly ingress?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecIngress[] | cdktf.IResolvable;
  /**
  * InstallAttemptsLimit is the maximum number of times Hive will attempt to install the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#install_attempts_limit DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#install_attempts_limit}
  */
  readonly installAttemptsLimit?: number;
  /**
  * Installed is true if the cluster has been installed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#installed DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#installed}
  */
  readonly installed?: boolean | cdktf.IResolvable;
  /**
  * ManageDNS specifies whether a DNSZone should be created and managed automatically for this ClusterDeployment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#manage_dns DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#manage_dns}
  */
  readonly manageDns?: boolean | cdktf.IResolvable;
  /**
  * Platform is the configuration for the specific platform upon which to perform the installation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#platform DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#platform}
  */
  readonly platform: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatform;
  /**
  * PowerState indicates whether a cluster should be running or hibernating. When omitted, PowerState defaults to the Running state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#power_state DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#power_state}
  */
  readonly powerState?: string;
  /**
  * PreserveOnDelete allows the user to disconnect a cluster from Hive without deprovisioning it. This can also be used to abandon ongoing cluster deprovision.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#preserve_on_delete DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#preserve_on_delete}
  */
  readonly preserveOnDelete?: boolean | cdktf.IResolvable;
  /**
  * Provisioning contains settings used only for initial cluster provisioning. May be unset in the case of adopted clusters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#provisioning DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#provisioning}
  */
  readonly provisioning?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioning;
  /**
  * PullSecretRef is the reference to the secret to use when pulling images.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#pull_secret_ref DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest#pull_secret_ref}
  */
  readonly pullSecretRef?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPullSecretRef;
}

export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecToTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_domain: cdktf.stringToTerraform(struct!.baseDomain),
    bound_service_account_signing_key_secret_ref: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecBoundServiceAccountSigningKeySecretRefToTerraform(struct!.boundServiceAccountSigningKeySecretRef),
    certificate_bundles: cdktf.listMapper(dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecCertificateBundlesToTerraform, false)(struct!.certificateBundles),
    cluster_install_ref: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterInstallRefToTerraform(struct!.clusterInstallRef),
    cluster_metadata: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterMetadataToTerraform(struct!.clusterMetadata),
    cluster_name: cdktf.stringToTerraform(struct!.clusterName),
    cluster_pool_ref: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterPoolRefToTerraform(struct!.clusterPoolRef),
    control_plane_config: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecControlPlaneConfigToTerraform(struct!.controlPlaneConfig),
    hibernate_after: cdktf.stringToTerraform(struct!.hibernateAfter),
    ingress: cdktf.listMapper(dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecIngressToTerraform, false)(struct!.ingress),
    install_attempts_limit: cdktf.numberToTerraform(struct!.installAttemptsLimit),
    installed: cdktf.booleanToTerraform(struct!.installed),
    manage_dns: cdktf.booleanToTerraform(struct!.manageDns),
    platform: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformToTerraform(struct!.platform),
    power_state: cdktf.stringToTerraform(struct!.powerState),
    preserve_on_delete: cdktf.booleanToTerraform(struct!.preserveOnDelete),
    provisioning: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningToTerraform(struct!.provisioning),
    pull_secret_ref: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPullSecretRefToTerraform(struct!.pullSecretRef),
  }
}


export function dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base_domain: {
      value: cdktf.stringToHclTerraform(struct!.baseDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bound_service_account_signing_key_secret_ref: {
      value: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecBoundServiceAccountSigningKeySecretRefToHclTerraform(struct!.boundServiceAccountSigningKeySecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecBoundServiceAccountSigningKeySecretRef",
    },
    certificate_bundles: {
      value: cdktf.listMapperHcl(dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecCertificateBundlesToHclTerraform, false)(struct!.certificateBundles),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecCertificateBundlesList",
    },
    cluster_install_ref: {
      value: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterInstallRefToHclTerraform(struct!.clusterInstallRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterInstallRef",
    },
    cluster_metadata: {
      value: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterMetadataToHclTerraform(struct!.clusterMetadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterMetadata",
    },
    cluster_name: {
      value: cdktf.stringToHclTerraform(struct!.clusterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_pool_ref: {
      value: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterPoolRefToHclTerraform(struct!.clusterPoolRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterPoolRef",
    },
    control_plane_config: {
      value: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecControlPlaneConfigToHclTerraform(struct!.controlPlaneConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecControlPlaneConfig",
    },
    hibernate_after: {
      value: cdktf.stringToHclTerraform(struct!.hibernateAfter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ingress: {
      value: cdktf.listMapperHcl(dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecIngressToHclTerraform, false)(struct!.ingress),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecIngressList",
    },
    install_attempts_limit: {
      value: cdktf.numberToHclTerraform(struct!.installAttemptsLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    installed: {
      value: cdktf.booleanToHclTerraform(struct!.installed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    manage_dns: {
      value: cdktf.booleanToHclTerraform(struct!.manageDns),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    platform: {
      value: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformToHclTerraform(struct!.platform),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatform",
    },
    power_state: {
      value: cdktf.stringToHclTerraform(struct!.powerState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preserve_on_delete: {
      value: cdktf.booleanToHclTerraform(struct!.preserveOnDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    provisioning: {
      value: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningToHclTerraform(struct!.provisioning),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioning",
    },
    pull_secret_ref: {
      value: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPullSecretRefToHclTerraform(struct!.pullSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPullSecretRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseDomain = this._baseDomain;
    }
    if (this._boundServiceAccountSigningKeySecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.boundServiceAccountSigningKeySecretRef = this._boundServiceAccountSigningKeySecretRef?.internalValue;
    }
    if (this._certificateBundles?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateBundles = this._certificateBundles?.internalValue;
    }
    if (this._clusterInstallRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterInstallRef = this._clusterInstallRef?.internalValue;
    }
    if (this._clusterMetadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterMetadata = this._clusterMetadata?.internalValue;
    }
    if (this._clusterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterName = this._clusterName;
    }
    if (this._clusterPoolRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterPoolRef = this._clusterPoolRef?.internalValue;
    }
    if (this._controlPlaneConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.controlPlaneConfig = this._controlPlaneConfig?.internalValue;
    }
    if (this._hibernateAfter !== undefined) {
      hasAnyValues = true;
      internalValueResult.hibernateAfter = this._hibernateAfter;
    }
    if (this._ingress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingress = this._ingress?.internalValue;
    }
    if (this._installAttemptsLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.installAttemptsLimit = this._installAttemptsLimit;
    }
    if (this._installed !== undefined) {
      hasAnyValues = true;
      internalValueResult.installed = this._installed;
    }
    if (this._manageDns !== undefined) {
      hasAnyValues = true;
      internalValueResult.manageDns = this._manageDns;
    }
    if (this._platform?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.platform = this._platform?.internalValue;
    }
    if (this._powerState !== undefined) {
      hasAnyValues = true;
      internalValueResult.powerState = this._powerState;
    }
    if (this._preserveOnDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.preserveOnDelete = this._preserveOnDelete;
    }
    if (this._provisioning?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.provisioning = this._provisioning?.internalValue;
    }
    if (this._pullSecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pullSecretRef = this._pullSecretRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._baseDomain = undefined;
      this._boundServiceAccountSigningKeySecretRef.internalValue = undefined;
      this._certificateBundles.internalValue = undefined;
      this._clusterInstallRef.internalValue = undefined;
      this._clusterMetadata.internalValue = undefined;
      this._clusterName = undefined;
      this._clusterPoolRef.internalValue = undefined;
      this._controlPlaneConfig.internalValue = undefined;
      this._hibernateAfter = undefined;
      this._ingress.internalValue = undefined;
      this._installAttemptsLimit = undefined;
      this._installed = undefined;
      this._manageDns = undefined;
      this._platform.internalValue = undefined;
      this._powerState = undefined;
      this._preserveOnDelete = undefined;
      this._provisioning.internalValue = undefined;
      this._pullSecretRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._baseDomain = value.baseDomain;
      this._boundServiceAccountSigningKeySecretRef.internalValue = value.boundServiceAccountSigningKeySecretRef;
      this._certificateBundles.internalValue = value.certificateBundles;
      this._clusterInstallRef.internalValue = value.clusterInstallRef;
      this._clusterMetadata.internalValue = value.clusterMetadata;
      this._clusterName = value.clusterName;
      this._clusterPoolRef.internalValue = value.clusterPoolRef;
      this._controlPlaneConfig.internalValue = value.controlPlaneConfig;
      this._hibernateAfter = value.hibernateAfter;
      this._ingress.internalValue = value.ingress;
      this._installAttemptsLimit = value.installAttemptsLimit;
      this._installed = value.installed;
      this._manageDns = value.manageDns;
      this._platform.internalValue = value.platform;
      this._powerState = value.powerState;
      this._preserveOnDelete = value.preserveOnDelete;
      this._provisioning.internalValue = value.provisioning;
      this._pullSecretRef.internalValue = value.pullSecretRef;
    }
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

  // bound_service_account_signing_key_secret_ref - computed: false, optional: true, required: false
  private _boundServiceAccountSigningKeySecretRef = new DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecBoundServiceAccountSigningKeySecretRefOutputReference(this, "bound_service_account_signing_key_secret_ref");
  public get boundServiceAccountSigningKeySecretRef() {
    return this._boundServiceAccountSigningKeySecretRef;
  }
  public putBoundServiceAccountSigningKeySecretRef(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecBoundServiceAccountSigningKeySecretRef) {
    this._boundServiceAccountSigningKeySecretRef.internalValue = value;
  }
  public resetBoundServiceAccountSigningKeySecretRef() {
    this._boundServiceAccountSigningKeySecretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boundServiceAccountSigningKeySecretRefInput() {
    return this._boundServiceAccountSigningKeySecretRef.internalValue;
  }

  // certificate_bundles - computed: false, optional: true, required: false
  private _certificateBundles = new DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecCertificateBundlesList(this, "certificate_bundles", false);
  public get certificateBundles() {
    return this._certificateBundles;
  }
  public putCertificateBundles(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecCertificateBundles[] | cdktf.IResolvable) {
    this._certificateBundles.internalValue = value;
  }
  public resetCertificateBundles() {
    this._certificateBundles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateBundlesInput() {
    return this._certificateBundles.internalValue;
  }

  // cluster_install_ref - computed: false, optional: true, required: false
  private _clusterInstallRef = new DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterInstallRefOutputReference(this, "cluster_install_ref");
  public get clusterInstallRef() {
    return this._clusterInstallRef;
  }
  public putClusterInstallRef(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterInstallRef) {
    this._clusterInstallRef.internalValue = value;
  }
  public resetClusterInstallRef() {
    this._clusterInstallRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInstallRefInput() {
    return this._clusterInstallRef.internalValue;
  }

  // cluster_metadata - computed: false, optional: true, required: false
  private _clusterMetadata = new DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterMetadataOutputReference(this, "cluster_metadata");
  public get clusterMetadata() {
    return this._clusterMetadata;
  }
  public putClusterMetadata(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterMetadata) {
    this._clusterMetadata.internalValue = value;
  }
  public resetClusterMetadata() {
    this._clusterMetadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterMetadataInput() {
    return this._clusterMetadata.internalValue;
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

  // cluster_pool_ref - computed: false, optional: true, required: false
  private _clusterPoolRef = new DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterPoolRefOutputReference(this, "cluster_pool_ref");
  public get clusterPoolRef() {
    return this._clusterPoolRef;
  }
  public putClusterPoolRef(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecClusterPoolRef) {
    this._clusterPoolRef.internalValue = value;
  }
  public resetClusterPoolRef() {
    this._clusterPoolRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterPoolRefInput() {
    return this._clusterPoolRef.internalValue;
  }

  // control_plane_config - computed: false, optional: true, required: false
  private _controlPlaneConfig = new DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecControlPlaneConfigOutputReference(this, "control_plane_config");
  public get controlPlaneConfig() {
    return this._controlPlaneConfig;
  }
  public putControlPlaneConfig(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecControlPlaneConfig) {
    this._controlPlaneConfig.internalValue = value;
  }
  public resetControlPlaneConfig() {
    this._controlPlaneConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneConfigInput() {
    return this._controlPlaneConfig.internalValue;
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

  // ingress - computed: false, optional: true, required: false
  private _ingress = new DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecIngressList(this, "ingress", false);
  public get ingress() {
    return this._ingress;
  }
  public putIngress(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecIngress[] | cdktf.IResolvable) {
    this._ingress.internalValue = value;
  }
  public resetIngress() {
    this._ingress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressInput() {
    return this._ingress.internalValue;
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

  // installed - computed: false, optional: true, required: false
  private _installed?: boolean | cdktf.IResolvable; 
  public get installed() {
    return this.getBooleanAttribute('installed');
  }
  public set installed(value: boolean | cdktf.IResolvable) {
    this._installed = value;
  }
  public resetInstalled() {
    this._installed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installedInput() {
    return this._installed;
  }

  // manage_dns - computed: false, optional: true, required: false
  private _manageDns?: boolean | cdktf.IResolvable; 
  public get manageDns() {
    return this.getBooleanAttribute('manage_dns');
  }
  public set manageDns(value: boolean | cdktf.IResolvable) {
    this._manageDns = value;
  }
  public resetManageDns() {
    this._manageDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manageDnsInput() {
    return this._manageDns;
  }

  // platform - computed: false, optional: false, required: true
  private _platform = new DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatformOutputReference(this, "platform");
  public get platform() {
    return this._platform;
  }
  public putPlatform(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPlatform) {
    this._platform.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get platformInput() {
    return this._platform.internalValue;
  }

  // power_state - computed: false, optional: true, required: false
  private _powerState?: string; 
  public get powerState() {
    return this.getStringAttribute('power_state');
  }
  public set powerState(value: string) {
    this._powerState = value;
  }
  public resetPowerState() {
    this._powerState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerStateInput() {
    return this._powerState;
  }

  // preserve_on_delete - computed: false, optional: true, required: false
  private _preserveOnDelete?: boolean | cdktf.IResolvable; 
  public get preserveOnDelete() {
    return this.getBooleanAttribute('preserve_on_delete');
  }
  public set preserveOnDelete(value: boolean | cdktf.IResolvable) {
    this._preserveOnDelete = value;
  }
  public resetPreserveOnDelete() {
    this._preserveOnDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preserveOnDeleteInput() {
    return this._preserveOnDelete;
  }

  // provisioning - computed: false, optional: true, required: false
  private _provisioning = new DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioningOutputReference(this, "provisioning");
  public get provisioning() {
    return this._provisioning;
  }
  public putProvisioning(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecProvisioning) {
    this._provisioning.internalValue = value;
  }
  public resetProvisioning() {
    this._provisioning.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisioningInput() {
    return this._provisioning.internalValue;
  }

  // pull_secret_ref - computed: false, optional: true, required: false
  private _pullSecretRef = new DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPullSecretRefOutputReference(this, "pull_secret_ref");
  public get pullSecretRef() {
    return this._pullSecretRef;
  }
  public putPullSecretRef(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecPullSecretRef) {
    this._pullSecretRef.internalValue = value;
  }
  public resetPullSecretRef() {
    this._pullSecretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pullSecretRefInput() {
    return this._pullSecretRef.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest k8s_hive_openshift_io_cluster_deployment_v1_manifest}
*/
export class DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_hive_openshift_io_cluster_deployment_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest to import
  * @param importFromId The id of the existing DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SHiveOpenshiftIoClusterDeploymentV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_hive_openshift_io_cluster_deployment_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/hive_openshift_io_cluster_deployment_v1_manifest k8s_hive_openshift_io_cluster_deployment_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_hive_openshift_io_cluster_deployment_v1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.22',
        providerVersionConstraint: '2025.12.22'
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
  private _metadata = new DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpec) {
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
      metadata: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestMetadata",
      },
      spec: {
        value: dataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SHiveOpenshiftIoClusterDeploymentV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
