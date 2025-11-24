// https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_deprovision_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_deprovision_v1_manifest#metadata DataK8SHiveOpenshiftIoClusterDeprovisionV1Manifest#metadata}
  */
  readonly metadata: DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestMetadata;
  /**
  * ClusterDeprovisionSpec defines the desired state of ClusterDeprovision
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_deprovision_v1_manifest#spec DataK8SHiveOpenshiftIoClusterDeprovisionV1Manifest#spec}
  */
  readonly spec?: DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpec;
}
export interface DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_deprovision_v1_manifest#annotations DataK8SHiveOpenshiftIoClusterDeprovisionV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_deprovision_v1_manifest#labels DataK8SHiveOpenshiftIoClusterDeprovisionV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_deprovision_v1_manifest#name DataK8SHiveOpenshiftIoClusterDeprovisionV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_deprovision_v1_manifest#namespace DataK8SHiveOpenshiftIoClusterDeprovisionV1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestMetadataToTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestMetadataToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformAwsCredentialsAssumeRole {
  /**
  * ExternalID is random string generated by platform so that assume role is protected from confused deputy problem. more info: https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-user_externalid.html
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_deprovision_v1_manifest#external_id DataK8SHiveOpenshiftIoClusterDeprovisionV1Manifest#external_id}
  */
  readonly externalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_deprovision_v1_manifest#role_arn DataK8SHiveOpenshiftIoClusterDeprovisionV1Manifest#role_arn}
  */
  readonly roleArn: string;
}

export function dataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformAwsCredentialsAssumeRoleToTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformAwsCredentialsAssumeRole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external_id: cdktf.stringToTerraform(struct!.externalId),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}


export function dataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformAwsCredentialsAssumeRoleToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformAwsCredentialsAssumeRole | cdktf.IResolvable): any {
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

export class DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformAwsCredentialsAssumeRoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformAwsCredentialsAssumeRole | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformAwsCredentialsAssumeRole | cdktf.IResolvable | undefined) {
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
export interface DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformAwsCredentialsSecretRef {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_deprovision_v1_manifest#name DataK8SHiveOpenshiftIoClusterDeprovisionV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformAwsCredentialsSecretRefToTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformAwsCredentialsSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformAwsCredentialsSecretRefToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformAwsCredentialsSecretRef | cdktf.IResolvable): any {
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

export class DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformAwsCredentialsSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformAwsCredentialsSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformAwsCredentialsSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformAws {
  /**
  * CredentialsAssumeRole refers to the IAM role that must be assumed to obtain AWS account access for deprovisioning the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_deprovision_v1_manifest#credentials_assume_role DataK8SHiveOpenshiftIoClusterDeprovisionV1Manifest#credentials_assume_role}
  */
  readonly credentialsAssumeRole?: DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformAwsCredentialsAssumeRole;
  /**
  * CredentialsSecretRef is the AWS account credentials to use for deprovisioning the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_deprovision_v1_manifest#credentials_secret_ref DataK8SHiveOpenshiftIoClusterDeprovisionV1Manifest#credentials_secret_ref}
  */
  readonly credentialsSecretRef?: DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformAwsCredentialsSecretRef;
  /**
  * HostedZoneRole is the role to assume when performing operations on a hosted zone owned by another account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_deprovision_v1_manifest#hosted_zone_role DataK8SHiveOpenshiftIoClusterDeprovisionV1Manifest#hosted_zone_role}
  */
  readonly hostedZoneRole?: string;
  /**
  * Region is the AWS region for this deprovisioning
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_deprovision_v1_manifest#region DataK8SHiveOpenshiftIoClusterDeprovisionV1Manifest#region}
  */
  readonly region: string;
}

export function dataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformAwsToTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformAws | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credentials_assume_role: dataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformAwsCredentialsAssumeRoleToTerraform(struct!.credentialsAssumeRole),
    credentials_secret_ref: dataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformAwsCredentialsSecretRefToTerraform(struct!.credentialsSecretRef),
    hosted_zone_role: cdktf.stringToTerraform(struct!.hostedZoneRole),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function dataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformAwsToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformAws | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    credentials_assume_role: {
      value: dataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformAwsCredentialsAssumeRoleToHclTerraform(struct!.credentialsAssumeRole),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformAwsCredentialsAssumeRole",
    },
    credentials_secret_ref: {
      value: dataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformAwsCredentialsSecretRefToHclTerraform(struct!.credentialsSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformAwsCredentialsSecretRef",
    },
    hosted_zone_role: {
      value: cdktf.stringToHclTerraform(struct!.hostedZoneRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformAwsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformAws | cdktf.IResolvable | undefined {
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
    if (this._hostedZoneRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostedZoneRole = this._hostedZoneRole;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformAws | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._credentialsAssumeRole.internalValue = undefined;
      this._credentialsSecretRef.internalValue = undefined;
      this._hostedZoneRole = undefined;
      this._region = undefined;
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
      this._hostedZoneRole = value.hostedZoneRole;
      this._region = value.region;
    }
  }

  // credentials_assume_role - computed: false, optional: true, required: false
  private _credentialsAssumeRole = new DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformAwsCredentialsAssumeRoleOutputReference(this, "credentials_assume_role");
  public get credentialsAssumeRole() {
    return this._credentialsAssumeRole;
  }
  public putCredentialsAssumeRole(value: DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformAwsCredentialsAssumeRole) {
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
  private _credentialsSecretRef = new DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformAwsCredentialsSecretRefOutputReference(this, "credentials_secret_ref");
  public get credentialsSecretRef() {
    return this._credentialsSecretRef;
  }
  public putCredentialsSecretRef(value: DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformAwsCredentialsSecretRef) {
    this._credentialsSecretRef.internalValue = value;
  }
  public resetCredentialsSecretRef() {
    this._credentialsSecretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsSecretRefInput() {
    return this._credentialsSecretRef.internalValue;
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
export interface DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformAzureCredentialsSecretRef {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_deprovision_v1_manifest#name DataK8SHiveOpenshiftIoClusterDeprovisionV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformAzureCredentialsSecretRefToTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformAzureCredentialsSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformAzureCredentialsSecretRefToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformAzureCredentialsSecretRef | cdktf.IResolvable): any {
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

export class DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformAzureCredentialsSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformAzureCredentialsSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformAzureCredentialsSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformAzure {
  /**
  * cloudName is the name of the Azure cloud environment which can be used to configure the Azure SDK with the appropriate Azure API endpoints. If empty, the value is equal to 'AzurePublicCloud'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_deprovision_v1_manifest#cloud_name DataK8SHiveOpenshiftIoClusterDeprovisionV1Manifest#cloud_name}
  */
  readonly cloudName?: string;
  /**
  * CredentialsSecretRef is the Azure account credentials to use for deprovisioning the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_deprovision_v1_manifest#credentials_secret_ref DataK8SHiveOpenshiftIoClusterDeprovisionV1Manifest#credentials_secret_ref}
  */
  readonly credentialsSecretRef?: DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformAzureCredentialsSecretRef;
  /**
  * ResourceGroupName is the name of the resource group where the cluster was installed. Required for new deprovisions (schema notwithstanding).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_deprovision_v1_manifest#resource_group_name DataK8SHiveOpenshiftIoClusterDeprovisionV1Manifest#resource_group_name}
  */
  readonly resourceGroupName?: string;
}

export function dataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformAzureToTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformAzure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_name: cdktf.stringToTerraform(struct!.cloudName),
    credentials_secret_ref: dataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformAzureCredentialsSecretRefToTerraform(struct!.credentialsSecretRef),
    resource_group_name: cdktf.stringToTerraform(struct!.resourceGroupName),
  }
}


export function dataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformAzureToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformAzure | cdktf.IResolvable): any {
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
      value: dataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformAzureCredentialsSecretRefToHclTerraform(struct!.credentialsSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformAzureCredentialsSecretRef",
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

export class DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformAzureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformAzure | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformAzure | cdktf.IResolvable | undefined) {
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

  // credentials_secret_ref - computed: false, optional: true, required: false
  private _credentialsSecretRef = new DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformAzureCredentialsSecretRefOutputReference(this, "credentials_secret_ref");
  public get credentialsSecretRef() {
    return this._credentialsSecretRef;
  }
  public putCredentialsSecretRef(value: DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformAzureCredentialsSecretRef) {
    this._credentialsSecretRef.internalValue = value;
  }
  public resetCredentialsSecretRef() {
    this._credentialsSecretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsSecretRefInput() {
    return this._credentialsSecretRef.internalValue;
  }

  // resource_group_name - computed: false, optional: true, required: false
  private _resourceGroupName?: string; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  public resetResourceGroupName() {
    this._resourceGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName;
  }
}
export interface DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformGcpCredentialsSecretRef {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_deprovision_v1_manifest#name DataK8SHiveOpenshiftIoClusterDeprovisionV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformGcpCredentialsSecretRefToTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformGcpCredentialsSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformGcpCredentialsSecretRefToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformGcpCredentialsSecretRef | cdktf.IResolvable): any {
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

export class DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformGcpCredentialsSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformGcpCredentialsSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformGcpCredentialsSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformGcp {
  /**
  * CredentialsSecretRef is the GCP account credentials to use for deprovisioning the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_deprovision_v1_manifest#credentials_secret_ref DataK8SHiveOpenshiftIoClusterDeprovisionV1Manifest#credentials_secret_ref}
  */
  readonly credentialsSecretRef?: DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformGcpCredentialsSecretRef;
  /**
  * NetworkProjectID is used for shared VPC setups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_deprovision_v1_manifest#network_project_id DataK8SHiveOpenshiftIoClusterDeprovisionV1Manifest#network_project_id}
  */
  readonly networkProjectId?: string;
  /**
  * Region is the GCP region for this deprovision
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_deprovision_v1_manifest#region DataK8SHiveOpenshiftIoClusterDeprovisionV1Manifest#region}
  */
  readonly region: string;
}

export function dataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformGcpToTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformGcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credentials_secret_ref: dataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformGcpCredentialsSecretRefToTerraform(struct!.credentialsSecretRef),
    network_project_id: cdktf.stringToTerraform(struct!.networkProjectId),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function dataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformGcpToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformGcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    credentials_secret_ref: {
      value: dataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformGcpCredentialsSecretRefToHclTerraform(struct!.credentialsSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformGcpCredentialsSecretRef",
    },
    network_project_id: {
      value: cdktf.stringToHclTerraform(struct!.networkProjectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformGcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformGcp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credentialsSecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialsSecretRef = this._credentialsSecretRef?.internalValue;
    }
    if (this._networkProjectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkProjectId = this._networkProjectId;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformGcp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._credentialsSecretRef.internalValue = undefined;
      this._networkProjectId = undefined;
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
      this._networkProjectId = value.networkProjectId;
      this._region = value.region;
    }
  }

  // credentials_secret_ref - computed: false, optional: true, required: false
  private _credentialsSecretRef = new DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformGcpCredentialsSecretRefOutputReference(this, "credentials_secret_ref");
  public get credentialsSecretRef() {
    return this._credentialsSecretRef;
  }
  public putCredentialsSecretRef(value: DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformGcpCredentialsSecretRef) {
    this._credentialsSecretRef.internalValue = value;
  }
  public resetCredentialsSecretRef() {
    this._credentialsSecretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsSecretRefInput() {
    return this._credentialsSecretRef.internalValue;
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
export interface DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformIbmcloudCredentialsSecretRef {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_deprovision_v1_manifest#name DataK8SHiveOpenshiftIoClusterDeprovisionV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformIbmcloudCredentialsSecretRefToTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformIbmcloudCredentialsSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformIbmcloudCredentialsSecretRefToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformIbmcloudCredentialsSecretRef | cdktf.IResolvable): any {
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

export class DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformIbmcloudCredentialsSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformIbmcloudCredentialsSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformIbmcloudCredentialsSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformIbmcloud {
  /**
  * BaseDomain is the DNS base domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_deprovision_v1_manifest#base_domain DataK8SHiveOpenshiftIoClusterDeprovisionV1Manifest#base_domain}
  */
  readonly baseDomain: string;
  /**
  * CredentialsSecretRef is the IBM Cloud credentials to use for deprovisioning the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_deprovision_v1_manifest#credentials_secret_ref DataK8SHiveOpenshiftIoClusterDeprovisionV1Manifest#credentials_secret_ref}
  */
  readonly credentialsSecretRef: DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformIbmcloudCredentialsSecretRef;
  /**
  * Region specifies the IBM Cloud region
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_deprovision_v1_manifest#region DataK8SHiveOpenshiftIoClusterDeprovisionV1Manifest#region}
  */
  readonly region: string;
}

export function dataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformIbmcloudToTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformIbmcloud | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_domain: cdktf.stringToTerraform(struct!.baseDomain),
    credentials_secret_ref: dataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformIbmcloudCredentialsSecretRefToTerraform(struct!.credentialsSecretRef),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function dataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformIbmcloudToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformIbmcloud | cdktf.IResolvable): any {
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
    credentials_secret_ref: {
      value: dataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformIbmcloudCredentialsSecretRefToHclTerraform(struct!.credentialsSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformIbmcloudCredentialsSecretRef",
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

export class DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformIbmcloudOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformIbmcloud | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseDomain = this._baseDomain;
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

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformIbmcloud | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._baseDomain = undefined;
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
      this._baseDomain = value.baseDomain;
      this._credentialsSecretRef.internalValue = value.credentialsSecretRef;
      this._region = value.region;
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

  // credentials_secret_ref - computed: false, optional: false, required: true
  private _credentialsSecretRef = new DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformIbmcloudCredentialsSecretRefOutputReference(this, "credentials_secret_ref");
  public get credentialsSecretRef() {
    return this._credentialsSecretRef;
  }
  public putCredentialsSecretRef(value: DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformIbmcloudCredentialsSecretRef) {
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
export interface DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformOpenstackCertificatesSecretRef {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_deprovision_v1_manifest#name DataK8SHiveOpenshiftIoClusterDeprovisionV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformOpenstackCertificatesSecretRefToTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformOpenstackCertificatesSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformOpenstackCertificatesSecretRefToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformOpenstackCertificatesSecretRef | cdktf.IResolvable): any {
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

export class DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformOpenstackCertificatesSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformOpenstackCertificatesSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformOpenstackCertificatesSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformOpenstackCredentialsSecretRef {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_deprovision_v1_manifest#name DataK8SHiveOpenshiftIoClusterDeprovisionV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformOpenstackCredentialsSecretRefToTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformOpenstackCredentialsSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformOpenstackCredentialsSecretRefToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformOpenstackCredentialsSecretRef | cdktf.IResolvable): any {
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

export class DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformOpenstackCredentialsSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformOpenstackCredentialsSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformOpenstackCredentialsSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformOpenstack {
  /**
  * CertificatesSecretRef refers to a secret that contains CA certificates necessary for communicating with the OpenStack.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_deprovision_v1_manifest#certificates_secret_ref DataK8SHiveOpenshiftIoClusterDeprovisionV1Manifest#certificates_secret_ref}
  */
  readonly certificatesSecretRef?: DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformOpenstackCertificatesSecretRef;
  /**
  * Cloud is the secion in the clouds.yaml secret below to use for auth/connectivity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_deprovision_v1_manifest#cloud DataK8SHiveOpenshiftIoClusterDeprovisionV1Manifest#cloud}
  */
  readonly cloud: string;
  /**
  * CredentialsSecretRef is the OpenStack account credentials to use for deprovisioning the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_deprovision_v1_manifest#credentials_secret_ref DataK8SHiveOpenshiftIoClusterDeprovisionV1Manifest#credentials_secret_ref}
  */
  readonly credentialsSecretRef?: DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformOpenstackCredentialsSecretRef;
}

export function dataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformOpenstackToTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformOpenstack | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificates_secret_ref: dataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformOpenstackCertificatesSecretRefToTerraform(struct!.certificatesSecretRef),
    cloud: cdktf.stringToTerraform(struct!.cloud),
    credentials_secret_ref: dataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformOpenstackCredentialsSecretRefToTerraform(struct!.credentialsSecretRef),
  }
}


export function dataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformOpenstackToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformOpenstack | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificates_secret_ref: {
      value: dataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformOpenstackCertificatesSecretRefToHclTerraform(struct!.certificatesSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformOpenstackCertificatesSecretRef",
    },
    cloud: {
      value: cdktf.stringToHclTerraform(struct!.cloud),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credentials_secret_ref: {
      value: dataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformOpenstackCredentialsSecretRefToHclTerraform(struct!.credentialsSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformOpenstackCredentialsSecretRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformOpenstackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformOpenstack | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformOpenstack | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificatesSecretRef.internalValue = undefined;
      this._cloud = undefined;
      this._credentialsSecretRef.internalValue = undefined;
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
    }
  }

  // certificates_secret_ref - computed: false, optional: true, required: false
  private _certificatesSecretRef = new DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformOpenstackCertificatesSecretRefOutputReference(this, "certificates_secret_ref");
  public get certificatesSecretRef() {
    return this._certificatesSecretRef;
  }
  public putCertificatesSecretRef(value: DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformOpenstackCertificatesSecretRef) {
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

  // credentials_secret_ref - computed: false, optional: true, required: false
  private _credentialsSecretRef = new DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformOpenstackCredentialsSecretRefOutputReference(this, "credentials_secret_ref");
  public get credentialsSecretRef() {
    return this._credentialsSecretRef;
  }
  public putCredentialsSecretRef(value: DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformOpenstackCredentialsSecretRef) {
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
export interface DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformOvirtCertificatesSecretRef {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_deprovision_v1_manifest#name DataK8SHiveOpenshiftIoClusterDeprovisionV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformOvirtCertificatesSecretRefToTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformOvirtCertificatesSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformOvirtCertificatesSecretRefToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformOvirtCertificatesSecretRef | cdktf.IResolvable): any {
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

export class DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformOvirtCertificatesSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformOvirtCertificatesSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformOvirtCertificatesSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformOvirtCredentialsSecretRef {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_deprovision_v1_manifest#name DataK8SHiveOpenshiftIoClusterDeprovisionV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformOvirtCredentialsSecretRefToTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformOvirtCredentialsSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformOvirtCredentialsSecretRefToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformOvirtCredentialsSecretRef | cdktf.IResolvable): any {
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

export class DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformOvirtCredentialsSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformOvirtCredentialsSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformOvirtCredentialsSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformOvirt {
  /**
  * CertificatesSecretRef refers to a secret that contains the oVirt CA certificates necessary for communicating with the oVirt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_deprovision_v1_manifest#certificates_secret_ref DataK8SHiveOpenshiftIoClusterDeprovisionV1Manifest#certificates_secret_ref}
  */
  readonly certificatesSecretRef: DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformOvirtCertificatesSecretRef;
  /**
  * The oVirt cluster ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_deprovision_v1_manifest#cluster_id DataK8SHiveOpenshiftIoClusterDeprovisionV1Manifest#cluster_id}
  */
  readonly clusterId: string;
  /**
  * CredentialsSecretRef is the oVirt account credentials to use for deprovisioning the cluster secret fields: ovirt_url, ovirt_username, ovirt_password, ovirt_ca_bundle
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_deprovision_v1_manifest#credentials_secret_ref DataK8SHiveOpenshiftIoClusterDeprovisionV1Manifest#credentials_secret_ref}
  */
  readonly credentialsSecretRef: DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformOvirtCredentialsSecretRef;
}

export function dataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformOvirtToTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformOvirt | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificates_secret_ref: dataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformOvirtCertificatesSecretRefToTerraform(struct!.certificatesSecretRef),
    cluster_id: cdktf.stringToTerraform(struct!.clusterId),
    credentials_secret_ref: dataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformOvirtCredentialsSecretRefToTerraform(struct!.credentialsSecretRef),
  }
}


export function dataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformOvirtToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformOvirt | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificates_secret_ref: {
      value: dataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformOvirtCertificatesSecretRefToHclTerraform(struct!.certificatesSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformOvirtCertificatesSecretRef",
    },
    cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.clusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credentials_secret_ref: {
      value: dataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformOvirtCredentialsSecretRefToHclTerraform(struct!.credentialsSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformOvirtCredentialsSecretRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformOvirtOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformOvirt | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificatesSecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificatesSecretRef = this._certificatesSecretRef?.internalValue;
    }
    if (this._clusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterId = this._clusterId;
    }
    if (this._credentialsSecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialsSecretRef = this._credentialsSecretRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformOvirt | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificatesSecretRef.internalValue = undefined;
      this._clusterId = undefined;
      this._credentialsSecretRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificatesSecretRef.internalValue = value.certificatesSecretRef;
      this._clusterId = value.clusterId;
      this._credentialsSecretRef.internalValue = value.credentialsSecretRef;
    }
  }

  // certificates_secret_ref - computed: false, optional: false, required: true
  private _certificatesSecretRef = new DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformOvirtCertificatesSecretRefOutputReference(this, "certificates_secret_ref");
  public get certificatesSecretRef() {
    return this._certificatesSecretRef;
  }
  public putCertificatesSecretRef(value: DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformOvirtCertificatesSecretRef) {
    this._certificatesSecretRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificatesSecretRefInput() {
    return this._certificatesSecretRef.internalValue;
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

  // credentials_secret_ref - computed: false, optional: false, required: true
  private _credentialsSecretRef = new DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformOvirtCredentialsSecretRefOutputReference(this, "credentials_secret_ref");
  public get credentialsSecretRef() {
    return this._credentialsSecretRef;
  }
  public putCredentialsSecretRef(value: DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformOvirtCredentialsSecretRef) {
    this._credentialsSecretRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsSecretRefInput() {
    return this._credentialsSecretRef.internalValue;
  }
}
export interface DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformVsphereCertificatesSecretRef {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_deprovision_v1_manifest#name DataK8SHiveOpenshiftIoClusterDeprovisionV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformVsphereCertificatesSecretRefToTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformVsphereCertificatesSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformVsphereCertificatesSecretRefToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformVsphereCertificatesSecretRef | cdktf.IResolvable): any {
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

export class DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformVsphereCertificatesSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformVsphereCertificatesSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformVsphereCertificatesSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformVsphereCredentialsSecretRef {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_deprovision_v1_manifest#name DataK8SHiveOpenshiftIoClusterDeprovisionV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformVsphereCredentialsSecretRefToTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformVsphereCredentialsSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformVsphereCredentialsSecretRefToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformVsphereCredentialsSecretRef | cdktf.IResolvable): any {
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

export class DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformVsphereCredentialsSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformVsphereCredentialsSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformVsphereCredentialsSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformVsphere {
  /**
  * CertificatesSecretRef refers to a secret that contains the vSphere CA certificates necessary for communicating with the VCenter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_deprovision_v1_manifest#certificates_secret_ref DataK8SHiveOpenshiftIoClusterDeprovisionV1Manifest#certificates_secret_ref}
  */
  readonly certificatesSecretRef: DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformVsphereCertificatesSecretRef;
  /**
  * CredentialsSecretRef is the vSphere account credentials to use for deprovisioning the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_deprovision_v1_manifest#credentials_secret_ref DataK8SHiveOpenshiftIoClusterDeprovisionV1Manifest#credentials_secret_ref}
  */
  readonly credentialsSecretRef: DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformVsphereCredentialsSecretRef;
  /**
  * VCenter is the vSphere vCenter hostname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_deprovision_v1_manifest#v_center DataK8SHiveOpenshiftIoClusterDeprovisionV1Manifest#v_center}
  */
  readonly vCenter: string;
}

export function dataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformVsphereToTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformVsphere | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificates_secret_ref: dataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformVsphereCertificatesSecretRefToTerraform(struct!.certificatesSecretRef),
    credentials_secret_ref: dataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformVsphereCredentialsSecretRefToTerraform(struct!.credentialsSecretRef),
    v_center: cdktf.stringToTerraform(struct!.vCenter),
  }
}


export function dataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformVsphereToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformVsphere | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificates_secret_ref: {
      value: dataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformVsphereCertificatesSecretRefToHclTerraform(struct!.certificatesSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformVsphereCertificatesSecretRef",
    },
    credentials_secret_ref: {
      value: dataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformVsphereCredentialsSecretRefToHclTerraform(struct!.credentialsSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformVsphereCredentialsSecretRef",
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

export class DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformVsphereOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformVsphere | cdktf.IResolvable | undefined {
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
    if (this._vCenter !== undefined) {
      hasAnyValues = true;
      internalValueResult.vCenter = this._vCenter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformVsphere | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificatesSecretRef.internalValue = undefined;
      this._credentialsSecretRef.internalValue = undefined;
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
      this._credentialsSecretRef.internalValue = value.credentialsSecretRef;
      this._vCenter = value.vCenter;
    }
  }

  // certificates_secret_ref - computed: false, optional: false, required: true
  private _certificatesSecretRef = new DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformVsphereCertificatesSecretRefOutputReference(this, "certificates_secret_ref");
  public get certificatesSecretRef() {
    return this._certificatesSecretRef;
  }
  public putCertificatesSecretRef(value: DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformVsphereCertificatesSecretRef) {
    this._certificatesSecretRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificatesSecretRefInput() {
    return this._certificatesSecretRef.internalValue;
  }

  // credentials_secret_ref - computed: false, optional: false, required: true
  private _credentialsSecretRef = new DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformVsphereCredentialsSecretRefOutputReference(this, "credentials_secret_ref");
  public get credentialsSecretRef() {
    return this._credentialsSecretRef;
  }
  public putCredentialsSecretRef(value: DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformVsphereCredentialsSecretRef) {
    this._credentialsSecretRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsSecretRefInput() {
    return this._credentialsSecretRef.internalValue;
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
export interface DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatform {
  /**
  * AWS contains AWS-specific deprovision settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_deprovision_v1_manifest#aws DataK8SHiveOpenshiftIoClusterDeprovisionV1Manifest#aws}
  */
  readonly aws?: DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformAws;
  /**
  * Azure contains Azure-specific deprovision settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_deprovision_v1_manifest#azure DataK8SHiveOpenshiftIoClusterDeprovisionV1Manifest#azure}
  */
  readonly azure?: DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformAzure;
  /**
  * GCP contains GCP-specific deprovision settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_deprovision_v1_manifest#gcp DataK8SHiveOpenshiftIoClusterDeprovisionV1Manifest#gcp}
  */
  readonly gcp?: DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformGcp;
  /**
  * IBMCloud contains IBM Cloud specific deprovision settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_deprovision_v1_manifest#ibmcloud DataK8SHiveOpenshiftIoClusterDeprovisionV1Manifest#ibmcloud}
  */
  readonly ibmcloud?: DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformIbmcloud;
  /**
  * OpenStack contains OpenStack-specific deprovision settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_deprovision_v1_manifest#openstack DataK8SHiveOpenshiftIoClusterDeprovisionV1Manifest#openstack}
  */
  readonly openstack?: DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformOpenstack;
  /**
  * Ovirt contains oVirt-specific deprovision settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_deprovision_v1_manifest#ovirt DataK8SHiveOpenshiftIoClusterDeprovisionV1Manifest#ovirt}
  */
  readonly ovirt?: DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformOvirt;
  /**
  * VSphere contains VMWare vSphere-specific deprovision settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_deprovision_v1_manifest#vsphere DataK8SHiveOpenshiftIoClusterDeprovisionV1Manifest#vsphere}
  */
  readonly vsphere?: DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformVsphere;
}

export function dataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformToTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatform | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws: dataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformAwsToTerraform(struct!.aws),
    azure: dataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformAzureToTerraform(struct!.azure),
    gcp: dataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformGcpToTerraform(struct!.gcp),
    ibmcloud: dataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformIbmcloudToTerraform(struct!.ibmcloud),
    openstack: dataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformOpenstackToTerraform(struct!.openstack),
    ovirt: dataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformOvirtToTerraform(struct!.ovirt),
    vsphere: dataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformVsphereToTerraform(struct!.vsphere),
  }
}


export function dataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatform | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws: {
      value: dataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformAwsToHclTerraform(struct!.aws),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformAws",
    },
    azure: {
      value: dataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformAzureToHclTerraform(struct!.azure),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformAzure",
    },
    gcp: {
      value: dataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformGcpToHclTerraform(struct!.gcp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformGcp",
    },
    ibmcloud: {
      value: dataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformIbmcloudToHclTerraform(struct!.ibmcloud),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformIbmcloud",
    },
    openstack: {
      value: dataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformOpenstackToHclTerraform(struct!.openstack),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformOpenstack",
    },
    ovirt: {
      value: dataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformOvirtToHclTerraform(struct!.ovirt),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformOvirt",
    },
    vsphere: {
      value: dataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformVsphereToHclTerraform(struct!.vsphere),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformVsphere",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatform | cdktf.IResolvable | undefined {
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
    if (this._ibmcloud?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ibmcloud = this._ibmcloud?.internalValue;
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

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatform | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aws.internalValue = undefined;
      this._azure.internalValue = undefined;
      this._gcp.internalValue = undefined;
      this._ibmcloud.internalValue = undefined;
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
      this._aws.internalValue = value.aws;
      this._azure.internalValue = value.azure;
      this._gcp.internalValue = value.gcp;
      this._ibmcloud.internalValue = value.ibmcloud;
      this._openstack.internalValue = value.openstack;
      this._ovirt.internalValue = value.ovirt;
      this._vsphere.internalValue = value.vsphere;
    }
  }

  // aws - computed: false, optional: true, required: false
  private _aws = new DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformAwsOutputReference(this, "aws");
  public get aws() {
    return this._aws;
  }
  public putAws(value: DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformAws) {
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
  private _azure = new DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformAzureOutputReference(this, "azure");
  public get azure() {
    return this._azure;
  }
  public putAzure(value: DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformAzure) {
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
  private _gcp = new DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformGcpOutputReference(this, "gcp");
  public get gcp() {
    return this._gcp;
  }
  public putGcp(value: DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformGcp) {
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
  private _ibmcloud = new DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformIbmcloudOutputReference(this, "ibmcloud");
  public get ibmcloud() {
    return this._ibmcloud;
  }
  public putIbmcloud(value: DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformIbmcloud) {
    this._ibmcloud.internalValue = value;
  }
  public resetIbmcloud() {
    this._ibmcloud.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ibmcloudInput() {
    return this._ibmcloud.internalValue;
  }

  // openstack - computed: false, optional: true, required: false
  private _openstack = new DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformOpenstackOutputReference(this, "openstack");
  public get openstack() {
    return this._openstack;
  }
  public putOpenstack(value: DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformOpenstack) {
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
  private _ovirt = new DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformOvirtOutputReference(this, "ovirt");
  public get ovirt() {
    return this._ovirt;
  }
  public putOvirt(value: DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformOvirt) {
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
  private _vsphere = new DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformVsphereOutputReference(this, "vsphere");
  public get vsphere() {
    return this._vsphere;
  }
  public putVsphere(value: DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformVsphere) {
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
export interface DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpec {
  /**
  * BaseDomain is the DNS base domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_deprovision_v1_manifest#base_domain DataK8SHiveOpenshiftIoClusterDeprovisionV1Manifest#base_domain}
  */
  readonly baseDomain?: string;
  /**
  * ClusterID is a globally unique identifier for the cluster to deprovision. It will be used if specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_deprovision_v1_manifest#cluster_id DataK8SHiveOpenshiftIoClusterDeprovisionV1Manifest#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * ClusterName is the friendly name of the cluster. It is used for subdomains, some resource tagging, and other instances where a friendly name for the cluster is useful.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_deprovision_v1_manifest#cluster_name DataK8SHiveOpenshiftIoClusterDeprovisionV1Manifest#cluster_name}
  */
  readonly clusterName?: string;
  /**
  * InfraID is the identifier generated during installation for a cluster. It is used for tagging/naming resources in cloud providers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_deprovision_v1_manifest#infra_id DataK8SHiveOpenshiftIoClusterDeprovisionV1Manifest#infra_id}
  */
  readonly infraId: string;
  /**
  * Platform contains platform-specific configuration for a ClusterDeprovision
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_deprovision_v1_manifest#platform DataK8SHiveOpenshiftIoClusterDeprovisionV1Manifest#platform}
  */
  readonly platform?: DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatform;
}

export function dataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecToTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_domain: cdktf.stringToTerraform(struct!.baseDomain),
    cluster_id: cdktf.stringToTerraform(struct!.clusterId),
    cluster_name: cdktf.stringToTerraform(struct!.clusterName),
    infra_id: cdktf.stringToTerraform(struct!.infraId),
    platform: dataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformToTerraform(struct!.platform),
  }
}


export function dataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpec | cdktf.IResolvable): any {
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
    cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.clusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_name: {
      value: cdktf.stringToHclTerraform(struct!.clusterName),
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
      value: dataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformToHclTerraform(struct!.platform),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatform",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseDomain = this._baseDomain;
    }
    if (this._clusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterId = this._clusterId;
    }
    if (this._clusterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterName = this._clusterName;
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

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._baseDomain = undefined;
      this._clusterId = undefined;
      this._clusterName = undefined;
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
      this._baseDomain = value.baseDomain;
      this._clusterId = value.clusterId;
      this._clusterName = value.clusterName;
      this._infraId = value.infraId;
      this._platform.internalValue = value.platform;
    }
  }

  // base_domain - computed: false, optional: true, required: false
  private _baseDomain?: string; 
  public get baseDomain() {
    return this.getStringAttribute('base_domain');
  }
  public set baseDomain(value: string) {
    this._baseDomain = value;
  }
  public resetBaseDomain() {
    this._baseDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseDomainInput() {
    return this._baseDomain;
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

  // cluster_name - computed: false, optional: true, required: false
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  public resetClusterName() {
    this._clusterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
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
  private _platform = new DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatformOutputReference(this, "platform");
  public get platform() {
    return this._platform;
  }
  public putPlatform(value: DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecPlatform) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_deprovision_v1_manifest k8s_hive_openshift_io_cluster_deprovision_v1_manifest}
*/
export class DataK8SHiveOpenshiftIoClusterDeprovisionV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_hive_openshift_io_cluster_deprovision_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SHiveOpenshiftIoClusterDeprovisionV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SHiveOpenshiftIoClusterDeprovisionV1Manifest to import
  * @param importFromId The id of the existing DataK8SHiveOpenshiftIoClusterDeprovisionV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_deprovision_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SHiveOpenshiftIoClusterDeprovisionV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_hive_openshift_io_cluster_deprovision_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hive_openshift_io_cluster_deprovision_v1_manifest k8s_hive_openshift_io_cluster_deprovision_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_hive_openshift_io_cluster_deprovision_v1_manifest',
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
  private _metadata = new DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpec) {
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
      metadata: dataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestMetadata",
      },
      spec: {
        value: dataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SHiveOpenshiftIoClusterDeprovisionV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
