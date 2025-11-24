// https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hiveinternal_openshift_io_fake_cluster_install_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hiveinternal_openshift_io_fake_cluster_install_v1alpha1_manifest#metadata DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestMetadata;
  /**
  * FakeClusterInstallSpec defines the desired state of the FakeClusterInstall.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hiveinternal_openshift_io_fake_cluster_install_v1alpha1_manifest#spec DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1Manifest#spec}
  */
  readonly spec: DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpec;
}
export interface DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hiveinternal_openshift_io_fake_cluster_install_v1alpha1_manifest#annotations DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hiveinternal_openshift_io_fake_cluster_install_v1alpha1_manifest#labels DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hiveinternal_openshift_io_fake_cluster_install_v1alpha1_manifest#name DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hiveinternal_openshift_io_fake_cluster_install_v1alpha1_manifest#namespace DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecClusterDeploymentRef {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hiveinternal_openshift_io_fake_cluster_install_v1alpha1_manifest#name DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecClusterDeploymentRefToTerraform(struct?: DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecClusterDeploymentRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecClusterDeploymentRefToHclTerraform(struct?: DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecClusterDeploymentRef | cdktf.IResolvable): any {
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

export class DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecClusterDeploymentRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecClusterDeploymentRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecClusterDeploymentRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecClusterMetadataAdminKubeconfigSecretRef {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hiveinternal_openshift_io_fake_cluster_install_v1alpha1_manifest#name DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecClusterMetadataAdminKubeconfigSecretRefToTerraform(struct?: DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecClusterMetadataAdminKubeconfigSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecClusterMetadataAdminKubeconfigSecretRefToHclTerraform(struct?: DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecClusterMetadataAdminKubeconfigSecretRef | cdktf.IResolvable): any {
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

export class DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecClusterMetadataAdminKubeconfigSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecClusterMetadataAdminKubeconfigSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecClusterMetadataAdminKubeconfigSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecClusterMetadataAdminPasswordSecretRef {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hiveinternal_openshift_io_fake_cluster_install_v1alpha1_manifest#name DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecClusterMetadataAdminPasswordSecretRefToTerraform(struct?: DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecClusterMetadataAdminPasswordSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecClusterMetadataAdminPasswordSecretRefToHclTerraform(struct?: DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecClusterMetadataAdminPasswordSecretRef | cdktf.IResolvable): any {
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

export class DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecClusterMetadataAdminPasswordSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecClusterMetadataAdminPasswordSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecClusterMetadataAdminPasswordSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecClusterMetadataPlatformAws {
  /**
  * HostedZoneRole is the role to assume when performing operations on a hosted zone owned by another account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hiveinternal_openshift_io_fake_cluster_install_v1alpha1_manifest#hosted_zone_role DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1Manifest#hosted_zone_role}
  */
  readonly hostedZoneRole?: string;
}

export function dataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecClusterMetadataPlatformAwsToTerraform(struct?: DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecClusterMetadataPlatformAws | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hosted_zone_role: cdktf.stringToTerraform(struct!.hostedZoneRole),
  }
}


export function dataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecClusterMetadataPlatformAwsToHclTerraform(struct?: DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecClusterMetadataPlatformAws | cdktf.IResolvable): any {
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

export class DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecClusterMetadataPlatformAwsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecClusterMetadataPlatformAws | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecClusterMetadataPlatformAws | cdktf.IResolvable | undefined) {
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
export interface DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecClusterMetadataPlatformAzure {
  /**
  * ResourceGroupName is the name of the resource group in which the cluster resources were created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hiveinternal_openshift_io_fake_cluster_install_v1alpha1_manifest#resource_group_name DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1Manifest#resource_group_name}
  */
  readonly resourceGroupName: string;
}

export function dataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecClusterMetadataPlatformAzureToTerraform(struct?: DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecClusterMetadataPlatformAzure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_group_name: cdktf.stringToTerraform(struct!.resourceGroupName),
  }
}


export function dataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecClusterMetadataPlatformAzureToHclTerraform(struct?: DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecClusterMetadataPlatformAzure | cdktf.IResolvable): any {
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

export class DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecClusterMetadataPlatformAzureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecClusterMetadataPlatformAzure | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecClusterMetadataPlatformAzure | cdktf.IResolvable | undefined) {
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
export interface DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecClusterMetadataPlatformGcp {
  /**
  * NetworkProjectID is used for shared VPC setups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hiveinternal_openshift_io_fake_cluster_install_v1alpha1_manifest#network_project_id DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1Manifest#network_project_id}
  */
  readonly networkProjectId?: string;
}

export function dataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecClusterMetadataPlatformGcpToTerraform(struct?: DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecClusterMetadataPlatformGcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_project_id: cdktf.stringToTerraform(struct!.networkProjectId),
  }
}


export function dataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecClusterMetadataPlatformGcpToHclTerraform(struct?: DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecClusterMetadataPlatformGcp | cdktf.IResolvable): any {
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

export class DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecClusterMetadataPlatformGcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecClusterMetadataPlatformGcp | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecClusterMetadataPlatformGcp | cdktf.IResolvable | undefined) {
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
export interface DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecClusterMetadataPlatform {
  /**
  * AWS holds AWS-specific cluster metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hiveinternal_openshift_io_fake_cluster_install_v1alpha1_manifest#aws DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1Manifest#aws}
  */
  readonly aws?: DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecClusterMetadataPlatformAws;
  /**
  * Azure holds azure-specific cluster metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hiveinternal_openshift_io_fake_cluster_install_v1alpha1_manifest#azure DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1Manifest#azure}
  */
  readonly azure?: DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecClusterMetadataPlatformAzure;
  /**
  * GCP holds GCP-specific cluster metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hiveinternal_openshift_io_fake_cluster_install_v1alpha1_manifest#gcp DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1Manifest#gcp}
  */
  readonly gcp?: DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecClusterMetadataPlatformGcp;
}

export function dataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecClusterMetadataPlatformToTerraform(struct?: DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecClusterMetadataPlatform | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws: dataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecClusterMetadataPlatformAwsToTerraform(struct!.aws),
    azure: dataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecClusterMetadataPlatformAzureToTerraform(struct!.azure),
    gcp: dataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecClusterMetadataPlatformGcpToTerraform(struct!.gcp),
  }
}


export function dataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecClusterMetadataPlatformToHclTerraform(struct?: DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecClusterMetadataPlatform | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws: {
      value: dataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecClusterMetadataPlatformAwsToHclTerraform(struct!.aws),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecClusterMetadataPlatformAws",
    },
    azure: {
      value: dataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecClusterMetadataPlatformAzureToHclTerraform(struct!.azure),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecClusterMetadataPlatformAzure",
    },
    gcp: {
      value: dataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecClusterMetadataPlatformGcpToHclTerraform(struct!.gcp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecClusterMetadataPlatformGcp",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecClusterMetadataPlatformOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecClusterMetadataPlatform | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecClusterMetadataPlatform | cdktf.IResolvable | undefined) {
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
  private _aws = new DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecClusterMetadataPlatformAwsOutputReference(this, "aws");
  public get aws() {
    return this._aws;
  }
  public putAws(value: DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecClusterMetadataPlatformAws) {
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
  private _azure = new DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecClusterMetadataPlatformAzureOutputReference(this, "azure");
  public get azure() {
    return this._azure;
  }
  public putAzure(value: DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecClusterMetadataPlatformAzure) {
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
  private _gcp = new DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecClusterMetadataPlatformGcpOutputReference(this, "gcp");
  public get gcp() {
    return this._gcp;
  }
  public putGcp(value: DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecClusterMetadataPlatformGcp) {
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
export interface DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecClusterMetadata {
  /**
  * AdminKubeconfigSecretRef references the secret containing the admin kubeconfig for this cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hiveinternal_openshift_io_fake_cluster_install_v1alpha1_manifest#admin_kubeconfig_secret_ref DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1Manifest#admin_kubeconfig_secret_ref}
  */
  readonly adminKubeconfigSecretRef: DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecClusterMetadataAdminKubeconfigSecretRef;
  /**
  * AdminPasswordSecretRef references the secret containing the admin username/password which can be used to login to this cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hiveinternal_openshift_io_fake_cluster_install_v1alpha1_manifest#admin_password_secret_ref DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1Manifest#admin_password_secret_ref}
  */
  readonly adminPasswordSecretRef?: DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecClusterMetadataAdminPasswordSecretRef;
  /**
  * ClusterID is a globally unique identifier for this cluster generated during installation. Used for reporting metrics among other places.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hiveinternal_openshift_io_fake_cluster_install_v1alpha1_manifest#cluster_id DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1Manifest#cluster_id}
  */
  readonly clusterId: string;
  /**
  * InfraID is an identifier for this cluster generated during installation and used for tagging/naming resources in cloud providers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hiveinternal_openshift_io_fake_cluster_install_v1alpha1_manifest#infra_id DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1Manifest#infra_id}
  */
  readonly infraId: string;
  /**
  * Platform holds platform-specific cluster metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hiveinternal_openshift_io_fake_cluster_install_v1alpha1_manifest#platform DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1Manifest#platform}
  */
  readonly platform?: DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecClusterMetadataPlatform;
}

export function dataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecClusterMetadataToTerraform(struct?: DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecClusterMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_kubeconfig_secret_ref: dataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecClusterMetadataAdminKubeconfigSecretRefToTerraform(struct!.adminKubeconfigSecretRef),
    admin_password_secret_ref: dataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecClusterMetadataAdminPasswordSecretRefToTerraform(struct!.adminPasswordSecretRef),
    cluster_id: cdktf.stringToTerraform(struct!.clusterId),
    infra_id: cdktf.stringToTerraform(struct!.infraId),
    platform: dataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecClusterMetadataPlatformToTerraform(struct!.platform),
  }
}


export function dataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecClusterMetadataToHclTerraform(struct?: DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecClusterMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_kubeconfig_secret_ref: {
      value: dataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecClusterMetadataAdminKubeconfigSecretRefToHclTerraform(struct!.adminKubeconfigSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecClusterMetadataAdminKubeconfigSecretRef",
    },
    admin_password_secret_ref: {
      value: dataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecClusterMetadataAdminPasswordSecretRefToHclTerraform(struct!.adminPasswordSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecClusterMetadataAdminPasswordSecretRef",
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
      value: dataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecClusterMetadataPlatformToHclTerraform(struct!.platform),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecClusterMetadataPlatform",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecClusterMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecClusterMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecClusterMetadata | cdktf.IResolvable | undefined) {
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
  private _adminKubeconfigSecretRef = new DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecClusterMetadataAdminKubeconfigSecretRefOutputReference(this, "admin_kubeconfig_secret_ref");
  public get adminKubeconfigSecretRef() {
    return this._adminKubeconfigSecretRef;
  }
  public putAdminKubeconfigSecretRef(value: DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecClusterMetadataAdminKubeconfigSecretRef) {
    this._adminKubeconfigSecretRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminKubeconfigSecretRefInput() {
    return this._adminKubeconfigSecretRef.internalValue;
  }

  // admin_password_secret_ref - computed: false, optional: true, required: false
  private _adminPasswordSecretRef = new DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecClusterMetadataAdminPasswordSecretRefOutputReference(this, "admin_password_secret_ref");
  public get adminPasswordSecretRef() {
    return this._adminPasswordSecretRef;
  }
  public putAdminPasswordSecretRef(value: DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecClusterMetadataAdminPasswordSecretRef) {
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
  private _platform = new DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecClusterMetadataPlatformOutputReference(this, "platform");
  public get platform() {
    return this._platform;
  }
  public putPlatform(value: DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecClusterMetadataPlatform) {
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
export interface DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecImageSetRef {
  /**
  * Name is the name of the ClusterImageSet that this refers to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hiveinternal_openshift_io_fake_cluster_install_v1alpha1_manifest#name DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecImageSetRefToTerraform(struct?: DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecImageSetRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecImageSetRefToHclTerraform(struct?: DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecImageSetRef | cdktf.IResolvable): any {
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

export class DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecImageSetRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecImageSetRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecImageSetRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpec {
  /**
  * ClusterDeploymentRef is a reference to the ClusterDeployment associated with this AgentClusterInstall.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hiveinternal_openshift_io_fake_cluster_install_v1alpha1_manifest#cluster_deployment_ref DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1Manifest#cluster_deployment_ref}
  */
  readonly clusterDeploymentRef: DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecClusterDeploymentRef;
  /**
  * ClusterMetadata contains metadata information about the installed cluster. It should be populated once the cluster install is completed. (it can be populated sooner if desired, but Hive will not copy back to ClusterDeployment until the Installed condition goes True.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hiveinternal_openshift_io_fake_cluster_install_v1alpha1_manifest#cluster_metadata DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1Manifest#cluster_metadata}
  */
  readonly clusterMetadata?: DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecClusterMetadata;
  /**
  * ImageSetRef is a reference to a ClusterImageSet. The release image specified in the ClusterImageSet will be used to install the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hiveinternal_openshift_io_fake_cluster_install_v1alpha1_manifest#image_set_ref DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1Manifest#image_set_ref}
  */
  readonly imageSetRef: DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecImageSetRef;
}

export function dataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecToTerraform(struct?: DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_deployment_ref: dataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecClusterDeploymentRefToTerraform(struct!.clusterDeploymentRef),
    cluster_metadata: dataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecClusterMetadataToTerraform(struct!.clusterMetadata),
    image_set_ref: dataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecImageSetRefToTerraform(struct!.imageSetRef),
  }
}


export function dataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_deployment_ref: {
      value: dataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecClusterDeploymentRefToHclTerraform(struct!.clusterDeploymentRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecClusterDeploymentRef",
    },
    cluster_metadata: {
      value: dataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecClusterMetadataToHclTerraform(struct!.clusterMetadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecClusterMetadata",
    },
    image_set_ref: {
      value: dataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecImageSetRefToHclTerraform(struct!.imageSetRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecImageSetRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterDeploymentRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterDeploymentRef = this._clusterDeploymentRef?.internalValue;
    }
    if (this._clusterMetadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterMetadata = this._clusterMetadata?.internalValue;
    }
    if (this._imageSetRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageSetRef = this._imageSetRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterDeploymentRef.internalValue = undefined;
      this._clusterMetadata.internalValue = undefined;
      this._imageSetRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterDeploymentRef.internalValue = value.clusterDeploymentRef;
      this._clusterMetadata.internalValue = value.clusterMetadata;
      this._imageSetRef.internalValue = value.imageSetRef;
    }
  }

  // cluster_deployment_ref - computed: false, optional: false, required: true
  private _clusterDeploymentRef = new DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecClusterDeploymentRefOutputReference(this, "cluster_deployment_ref");
  public get clusterDeploymentRef() {
    return this._clusterDeploymentRef;
  }
  public putClusterDeploymentRef(value: DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecClusterDeploymentRef) {
    this._clusterDeploymentRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterDeploymentRefInput() {
    return this._clusterDeploymentRef.internalValue;
  }

  // cluster_metadata - computed: false, optional: true, required: false
  private _clusterMetadata = new DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecClusterMetadataOutputReference(this, "cluster_metadata");
  public get clusterMetadata() {
    return this._clusterMetadata;
  }
  public putClusterMetadata(value: DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecClusterMetadata) {
    this._clusterMetadata.internalValue = value;
  }
  public resetClusterMetadata() {
    this._clusterMetadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterMetadataInput() {
    return this._clusterMetadata.internalValue;
  }

  // image_set_ref - computed: false, optional: false, required: true
  private _imageSetRef = new DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecImageSetRefOutputReference(this, "image_set_ref");
  public get imageSetRef() {
    return this._imageSetRef;
  }
  public putImageSetRef(value: DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecImageSetRef) {
    this._imageSetRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageSetRefInput() {
    return this._imageSetRef.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hiveinternal_openshift_io_fake_cluster_install_v1alpha1_manifest k8s_hiveinternal_openshift_io_fake_cluster_install_v1alpha1_manifest}
*/
export class DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_hiveinternal_openshift_io_fake_cluster_install_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hiveinternal_openshift_io_fake_cluster_install_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_hiveinternal_openshift_io_fake_cluster_install_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hiveinternal_openshift_io_fake_cluster_install_v1alpha1_manifest k8s_hiveinternal_openshift_io_fake_cluster_install_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_hiveinternal_openshift_io_fake_cluster_install_v1alpha1_manifest',
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
  private _metadata = new DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpec) {
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
      metadata: dataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SHiveinternalOpenshiftIoFakeClusterInstallV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
