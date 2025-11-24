// https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_provision_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SHiveOpenshiftIoClusterProvisionV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_provision_v1_manifest#metadata DataK8SHiveOpenshiftIoClusterProvisionV1Manifest#metadata}
  */
  readonly metadata: DataK8SHiveOpenshiftIoClusterProvisionV1ManifestMetadata;
  /**
  * ClusterProvisionSpec defines the results of provisioning a cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_provision_v1_manifest#spec DataK8SHiveOpenshiftIoClusterProvisionV1Manifest#spec}
  */
  readonly spec?: DataK8SHiveOpenshiftIoClusterProvisionV1ManifestSpec;
}
export interface DataK8SHiveOpenshiftIoClusterProvisionV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_provision_v1_manifest#annotations DataK8SHiveOpenshiftIoClusterProvisionV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_provision_v1_manifest#labels DataK8SHiveOpenshiftIoClusterProvisionV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_provision_v1_manifest#name DataK8SHiveOpenshiftIoClusterProvisionV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_provision_v1_manifest#namespace DataK8SHiveOpenshiftIoClusterProvisionV1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SHiveOpenshiftIoClusterProvisionV1ManifestMetadataToTerraform(struct?: DataK8SHiveOpenshiftIoClusterProvisionV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SHiveOpenshiftIoClusterProvisionV1ManifestMetadataToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterProvisionV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SHiveOpenshiftIoClusterProvisionV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterProvisionV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterProvisionV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SHiveOpenshiftIoClusterProvisionV1ManifestSpecAdminKubeconfigSecretRef {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_provision_v1_manifest#name DataK8SHiveOpenshiftIoClusterProvisionV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SHiveOpenshiftIoClusterProvisionV1ManifestSpecAdminKubeconfigSecretRefToTerraform(struct?: DataK8SHiveOpenshiftIoClusterProvisionV1ManifestSpecAdminKubeconfigSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SHiveOpenshiftIoClusterProvisionV1ManifestSpecAdminKubeconfigSecretRefToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterProvisionV1ManifestSpecAdminKubeconfigSecretRef | cdktf.IResolvable): any {
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

export class DataK8SHiveOpenshiftIoClusterProvisionV1ManifestSpecAdminKubeconfigSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterProvisionV1ManifestSpecAdminKubeconfigSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterProvisionV1ManifestSpecAdminKubeconfigSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SHiveOpenshiftIoClusterProvisionV1ManifestSpecAdminPasswordSecretRef {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_provision_v1_manifest#name DataK8SHiveOpenshiftIoClusterProvisionV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SHiveOpenshiftIoClusterProvisionV1ManifestSpecAdminPasswordSecretRefToTerraform(struct?: DataK8SHiveOpenshiftIoClusterProvisionV1ManifestSpecAdminPasswordSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SHiveOpenshiftIoClusterProvisionV1ManifestSpecAdminPasswordSecretRefToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterProvisionV1ManifestSpecAdminPasswordSecretRef | cdktf.IResolvable): any {
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

export class DataK8SHiveOpenshiftIoClusterProvisionV1ManifestSpecAdminPasswordSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterProvisionV1ManifestSpecAdminPasswordSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterProvisionV1ManifestSpecAdminPasswordSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SHiveOpenshiftIoClusterProvisionV1ManifestSpecClusterDeploymentRef {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_provision_v1_manifest#name DataK8SHiveOpenshiftIoClusterProvisionV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SHiveOpenshiftIoClusterProvisionV1ManifestSpecClusterDeploymentRefToTerraform(struct?: DataK8SHiveOpenshiftIoClusterProvisionV1ManifestSpecClusterDeploymentRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SHiveOpenshiftIoClusterProvisionV1ManifestSpecClusterDeploymentRefToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterProvisionV1ManifestSpecClusterDeploymentRef | cdktf.IResolvable): any {
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

export class DataK8SHiveOpenshiftIoClusterProvisionV1ManifestSpecClusterDeploymentRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterProvisionV1ManifestSpecClusterDeploymentRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterProvisionV1ManifestSpecClusterDeploymentRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SHiveOpenshiftIoClusterProvisionV1ManifestSpec {
  /**
  * AdminKubeconfigSecretRef references the secret containing the admin kubeconfig for this cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_provision_v1_manifest#admin_kubeconfig_secret_ref DataK8SHiveOpenshiftIoClusterProvisionV1Manifest#admin_kubeconfig_secret_ref}
  */
  readonly adminKubeconfigSecretRef?: DataK8SHiveOpenshiftIoClusterProvisionV1ManifestSpecAdminKubeconfigSecretRef;
  /**
  * AdminPasswordSecretRef references the secret containing the admin username/password which can be used to login to this cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_provision_v1_manifest#admin_password_secret_ref DataK8SHiveOpenshiftIoClusterProvisionV1Manifest#admin_password_secret_ref}
  */
  readonly adminPasswordSecretRef?: DataK8SHiveOpenshiftIoClusterProvisionV1ManifestSpecAdminPasswordSecretRef;
  /**
  * Attempt is which attempt number of the cluster deployment that this ClusterProvision is
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_provision_v1_manifest#attempt DataK8SHiveOpenshiftIoClusterProvisionV1Manifest#attempt}
  */
  readonly attempt: number;
  /**
  * ClusterDeploymentRef references the cluster deployment provisioned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_provision_v1_manifest#cluster_deployment_ref DataK8SHiveOpenshiftIoClusterProvisionV1Manifest#cluster_deployment_ref}
  */
  readonly clusterDeploymentRef: DataK8SHiveOpenshiftIoClusterProvisionV1ManifestSpecClusterDeploymentRef;
  /**
  * ClusterID is a globally unique identifier for this cluster generated during installation. Used for reporting metrics among other places.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_provision_v1_manifest#cluster_id DataK8SHiveOpenshiftIoClusterProvisionV1Manifest#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * InfraID is an identifier for this cluster generated during installation and used for tagging/naming resources in cloud providers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_provision_v1_manifest#infra_id DataK8SHiveOpenshiftIoClusterProvisionV1Manifest#infra_id}
  */
  readonly infraId?: string;
  /**
  * InstallLog is the log from the installer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_provision_v1_manifest#install_log DataK8SHiveOpenshiftIoClusterProvisionV1Manifest#install_log}
  */
  readonly installLog?: string;
  /**
  * Metadata is the metadata.json generated by the installer, providing metadata information about the cluster created. NOTE: This is not used because it didn't work (it was always empty). We think because the thing it's storing (ClusterMetadata from installer) is not a runtime.Object, so can't be put in a RawExtension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_provision_v1_manifest#metadata DataK8SHiveOpenshiftIoClusterProvisionV1Manifest#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * MetadataJSON is a JSON representation of the ClusterMetadata produced by the installer. We don't use a runtime.RawExtension because ClusterMetadata isn't a runtime.Object. We don't use ClusterMetadata itself because we don't want our API consumers to need to pull in the installer code and its dependencies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_provision_v1_manifest#metadata_json DataK8SHiveOpenshiftIoClusterProvisionV1Manifest#metadata_json}
  */
  readonly metadataJson?: string;
  /**
  * PrevClusterID is the cluster ID of the previous failed provision attempt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_provision_v1_manifest#prev_cluster_id DataK8SHiveOpenshiftIoClusterProvisionV1Manifest#prev_cluster_id}
  */
  readonly prevClusterId?: string;
  /**
  * PrevInfraID is the infra ID of the previous failed provision attempt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_provision_v1_manifest#prev_infra_id DataK8SHiveOpenshiftIoClusterProvisionV1Manifest#prev_infra_id}
  */
  readonly prevInfraId?: string;
  /**
  * PrevProvisionName is the name of the previous failed provision attempt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_provision_v1_manifest#prev_provision_name DataK8SHiveOpenshiftIoClusterProvisionV1Manifest#prev_provision_name}
  */
  readonly prevProvisionName?: string;
  /**
  * Stage is the stage of provisioning that the cluster deployment has reached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_provision_v1_manifest#stage DataK8SHiveOpenshiftIoClusterProvisionV1Manifest#stage}
  */
  readonly stage: string;
}

export function dataK8SHiveOpenshiftIoClusterProvisionV1ManifestSpecToTerraform(struct?: DataK8SHiveOpenshiftIoClusterProvisionV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_kubeconfig_secret_ref: dataK8SHiveOpenshiftIoClusterProvisionV1ManifestSpecAdminKubeconfigSecretRefToTerraform(struct!.adminKubeconfigSecretRef),
    admin_password_secret_ref: dataK8SHiveOpenshiftIoClusterProvisionV1ManifestSpecAdminPasswordSecretRefToTerraform(struct!.adminPasswordSecretRef),
    attempt: cdktf.numberToTerraform(struct!.attempt),
    cluster_deployment_ref: dataK8SHiveOpenshiftIoClusterProvisionV1ManifestSpecClusterDeploymentRefToTerraform(struct!.clusterDeploymentRef),
    cluster_id: cdktf.stringToTerraform(struct!.clusterId),
    infra_id: cdktf.stringToTerraform(struct!.infraId),
    install_log: cdktf.stringToTerraform(struct!.installLog),
    metadata: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.metadata),
    metadata_json: cdktf.stringToTerraform(struct!.metadataJson),
    prev_cluster_id: cdktf.stringToTerraform(struct!.prevClusterId),
    prev_infra_id: cdktf.stringToTerraform(struct!.prevInfraId),
    prev_provision_name: cdktf.stringToTerraform(struct!.prevProvisionName),
    stage: cdktf.stringToTerraform(struct!.stage),
  }
}


export function dataK8SHiveOpenshiftIoClusterProvisionV1ManifestSpecToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterProvisionV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_kubeconfig_secret_ref: {
      value: dataK8SHiveOpenshiftIoClusterProvisionV1ManifestSpecAdminKubeconfigSecretRefToHclTerraform(struct!.adminKubeconfigSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterProvisionV1ManifestSpecAdminKubeconfigSecretRef",
    },
    admin_password_secret_ref: {
      value: dataK8SHiveOpenshiftIoClusterProvisionV1ManifestSpecAdminPasswordSecretRefToHclTerraform(struct!.adminPasswordSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterProvisionV1ManifestSpecAdminPasswordSecretRef",
    },
    attempt: {
      value: cdktf.numberToHclTerraform(struct!.attempt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cluster_deployment_ref: {
      value: dataK8SHiveOpenshiftIoClusterProvisionV1ManifestSpecClusterDeploymentRefToHclTerraform(struct!.clusterDeploymentRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterProvisionV1ManifestSpecClusterDeploymentRef",
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
    install_log: {
      value: cdktf.stringToHclTerraform(struct!.installLog),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.metadata),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    metadata_json: {
      value: cdktf.stringToHclTerraform(struct!.metadataJson),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prev_cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.prevClusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prev_infra_id: {
      value: cdktf.stringToHclTerraform(struct!.prevInfraId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prev_provision_name: {
      value: cdktf.stringToHclTerraform(struct!.prevProvisionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stage: {
      value: cdktf.stringToHclTerraform(struct!.stage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoClusterProvisionV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterProvisionV1ManifestSpec | cdktf.IResolvable | undefined {
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
    if (this._attempt !== undefined) {
      hasAnyValues = true;
      internalValueResult.attempt = this._attempt;
    }
    if (this._clusterDeploymentRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterDeploymentRef = this._clusterDeploymentRef?.internalValue;
    }
    if (this._clusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterId = this._clusterId;
    }
    if (this._infraId !== undefined) {
      hasAnyValues = true;
      internalValueResult.infraId = this._infraId;
    }
    if (this._installLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.installLog = this._installLog;
    }
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    if (this._metadataJson !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataJson = this._metadataJson;
    }
    if (this._prevClusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.prevClusterId = this._prevClusterId;
    }
    if (this._prevInfraId !== undefined) {
      hasAnyValues = true;
      internalValueResult.prevInfraId = this._prevInfraId;
    }
    if (this._prevProvisionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.prevProvisionName = this._prevProvisionName;
    }
    if (this._stage !== undefined) {
      hasAnyValues = true;
      internalValueResult.stage = this._stage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterProvisionV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adminKubeconfigSecretRef.internalValue = undefined;
      this._adminPasswordSecretRef.internalValue = undefined;
      this._attempt = undefined;
      this._clusterDeploymentRef.internalValue = undefined;
      this._clusterId = undefined;
      this._infraId = undefined;
      this._installLog = undefined;
      this._metadata = undefined;
      this._metadataJson = undefined;
      this._prevClusterId = undefined;
      this._prevInfraId = undefined;
      this._prevProvisionName = undefined;
      this._stage = undefined;
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
      this._attempt = value.attempt;
      this._clusterDeploymentRef.internalValue = value.clusterDeploymentRef;
      this._clusterId = value.clusterId;
      this._infraId = value.infraId;
      this._installLog = value.installLog;
      this._metadata = value.metadata;
      this._metadataJson = value.metadataJson;
      this._prevClusterId = value.prevClusterId;
      this._prevInfraId = value.prevInfraId;
      this._prevProvisionName = value.prevProvisionName;
      this._stage = value.stage;
    }
  }

  // admin_kubeconfig_secret_ref - computed: false, optional: true, required: false
  private _adminKubeconfigSecretRef = new DataK8SHiveOpenshiftIoClusterProvisionV1ManifestSpecAdminKubeconfigSecretRefOutputReference(this, "admin_kubeconfig_secret_ref");
  public get adminKubeconfigSecretRef() {
    return this._adminKubeconfigSecretRef;
  }
  public putAdminKubeconfigSecretRef(value: DataK8SHiveOpenshiftIoClusterProvisionV1ManifestSpecAdminKubeconfigSecretRef) {
    this._adminKubeconfigSecretRef.internalValue = value;
  }
  public resetAdminKubeconfigSecretRef() {
    this._adminKubeconfigSecretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminKubeconfigSecretRefInput() {
    return this._adminKubeconfigSecretRef.internalValue;
  }

  // admin_password_secret_ref - computed: false, optional: true, required: false
  private _adminPasswordSecretRef = new DataK8SHiveOpenshiftIoClusterProvisionV1ManifestSpecAdminPasswordSecretRefOutputReference(this, "admin_password_secret_ref");
  public get adminPasswordSecretRef() {
    return this._adminPasswordSecretRef;
  }
  public putAdminPasswordSecretRef(value: DataK8SHiveOpenshiftIoClusterProvisionV1ManifestSpecAdminPasswordSecretRef) {
    this._adminPasswordSecretRef.internalValue = value;
  }
  public resetAdminPasswordSecretRef() {
    this._adminPasswordSecretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPasswordSecretRefInput() {
    return this._adminPasswordSecretRef.internalValue;
  }

  // attempt - computed: false, optional: false, required: true
  private _attempt?: number; 
  public get attempt() {
    return this.getNumberAttribute('attempt');
  }
  public set attempt(value: number) {
    this._attempt = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attemptInput() {
    return this._attempt;
  }

  // cluster_deployment_ref - computed: false, optional: false, required: true
  private _clusterDeploymentRef = new DataK8SHiveOpenshiftIoClusterProvisionV1ManifestSpecClusterDeploymentRefOutputReference(this, "cluster_deployment_ref");
  public get clusterDeploymentRef() {
    return this._clusterDeploymentRef;
  }
  public putClusterDeploymentRef(value: DataK8SHiveOpenshiftIoClusterProvisionV1ManifestSpecClusterDeploymentRef) {
    this._clusterDeploymentRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterDeploymentRefInput() {
    return this._clusterDeploymentRef.internalValue;
  }

  // cluster_id - computed: false, optional: true, required: false
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  public resetClusterId() {
    this._clusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // infra_id - computed: false, optional: true, required: false
  private _infraId?: string; 
  public get infraId() {
    return this.getStringAttribute('infra_id');
  }
  public set infraId(value: string) {
    this._infraId = value;
  }
  public resetInfraId() {
    this._infraId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infraIdInput() {
    return this._infraId;
  }

  // install_log - computed: false, optional: true, required: false
  private _installLog?: string; 
  public get installLog() {
    return this.getStringAttribute('install_log');
  }
  public set installLog(value: string) {
    this._installLog = value;
  }
  public resetInstallLog() {
    this._installLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installLogInput() {
    return this._installLog;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // metadata_json - computed: false, optional: true, required: false
  private _metadataJson?: string; 
  public get metadataJson() {
    return this.getStringAttribute('metadata_json');
  }
  public set metadataJson(value: string) {
    this._metadataJson = value;
  }
  public resetMetadataJson() {
    this._metadataJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataJsonInput() {
    return this._metadataJson;
  }

  // prev_cluster_id - computed: false, optional: true, required: false
  private _prevClusterId?: string; 
  public get prevClusterId() {
    return this.getStringAttribute('prev_cluster_id');
  }
  public set prevClusterId(value: string) {
    this._prevClusterId = value;
  }
  public resetPrevClusterId() {
    this._prevClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prevClusterIdInput() {
    return this._prevClusterId;
  }

  // prev_infra_id - computed: false, optional: true, required: false
  private _prevInfraId?: string; 
  public get prevInfraId() {
    return this.getStringAttribute('prev_infra_id');
  }
  public set prevInfraId(value: string) {
    this._prevInfraId = value;
  }
  public resetPrevInfraId() {
    this._prevInfraId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prevInfraIdInput() {
    return this._prevInfraId;
  }

  // prev_provision_name - computed: false, optional: true, required: false
  private _prevProvisionName?: string; 
  public get prevProvisionName() {
    return this.getStringAttribute('prev_provision_name');
  }
  public set prevProvisionName(value: string) {
    this._prevProvisionName = value;
  }
  public resetPrevProvisionName() {
    this._prevProvisionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prevProvisionNameInput() {
    return this._prevProvisionName;
  }

  // stage - computed: false, optional: false, required: true
  private _stage?: string; 
  public get stage() {
    return this.getStringAttribute('stage');
  }
  public set stage(value: string) {
    this._stage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stageInput() {
    return this._stage;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_provision_v1_manifest k8s_hive_openshift_io_cluster_provision_v1_manifest}
*/
export class DataK8SHiveOpenshiftIoClusterProvisionV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_hive_openshift_io_cluster_provision_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SHiveOpenshiftIoClusterProvisionV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SHiveOpenshiftIoClusterProvisionV1Manifest to import
  * @param importFromId The id of the existing DataK8SHiveOpenshiftIoClusterProvisionV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_provision_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SHiveOpenshiftIoClusterProvisionV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_hive_openshift_io_cluster_provision_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_provision_v1_manifest k8s_hive_openshift_io_cluster_provision_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SHiveOpenshiftIoClusterProvisionV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SHiveOpenshiftIoClusterProvisionV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_hive_openshift_io_cluster_provision_v1_manifest',
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
  private _metadata = new DataK8SHiveOpenshiftIoClusterProvisionV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SHiveOpenshiftIoClusterProvisionV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SHiveOpenshiftIoClusterProvisionV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SHiveOpenshiftIoClusterProvisionV1ManifestSpec) {
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
      metadata: dataK8SHiveOpenshiftIoClusterProvisionV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SHiveOpenshiftIoClusterProvisionV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SHiveOpenshiftIoClusterProvisionV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SHiveOpenshiftIoClusterProvisionV1ManifestMetadata",
      },
      spec: {
        value: dataK8SHiveOpenshiftIoClusterProvisionV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SHiveOpenshiftIoClusterProvisionV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
