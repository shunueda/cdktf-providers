// https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_machine_pool_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SHiveOpenshiftIoMachinePoolV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_machine_pool_v1_manifest#metadata DataK8SHiveOpenshiftIoMachinePoolV1Manifest#metadata}
  */
  readonly metadata: DataK8SHiveOpenshiftIoMachinePoolV1ManifestMetadata;
  /**
  * MachinePoolSpec defines the desired state of MachinePool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_machine_pool_v1_manifest#spec DataK8SHiveOpenshiftIoMachinePoolV1Manifest#spec}
  */
  readonly spec?: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpec;
}
export interface DataK8SHiveOpenshiftIoMachinePoolV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_machine_pool_v1_manifest#annotations DataK8SHiveOpenshiftIoMachinePoolV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_machine_pool_v1_manifest#labels DataK8SHiveOpenshiftIoMachinePoolV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_machine_pool_v1_manifest#name DataK8SHiveOpenshiftIoMachinePoolV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_machine_pool_v1_manifest#namespace DataK8SHiveOpenshiftIoMachinePoolV1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SHiveOpenshiftIoMachinePoolV1ManifestMetadataToTerraform(struct?: DataK8SHiveOpenshiftIoMachinePoolV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SHiveOpenshiftIoMachinePoolV1ManifestMetadataToHclTerraform(struct?: DataK8SHiveOpenshiftIoMachinePoolV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SHiveOpenshiftIoMachinePoolV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoMachinePoolV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoMachinePoolV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecAutoscaling {
  /**
  * MaxReplicas is the maximum number of replicas for the machine pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_machine_pool_v1_manifest#max_replicas DataK8SHiveOpenshiftIoMachinePoolV1Manifest#max_replicas}
  */
  readonly maxReplicas: number;
  /**
  * MinReplicas is the minimum number of replicas for the machine pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_machine_pool_v1_manifest#min_replicas DataK8SHiveOpenshiftIoMachinePoolV1Manifest#min_replicas}
  */
  readonly minReplicas: number;
}

export function dataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecAutoscalingToTerraform(struct?: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecAutoscaling | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_replicas: cdktf.numberToTerraform(struct!.maxReplicas),
    min_replicas: cdktf.numberToTerraform(struct!.minReplicas),
  }
}


export function dataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecAutoscalingToHclTerraform(struct?: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecAutoscaling | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_replicas: {
      value: cdktf.numberToHclTerraform(struct!.maxReplicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_replicas: {
      value: cdktf.numberToHclTerraform(struct!.minReplicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecAutoscalingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecAutoscaling | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxReplicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxReplicas = this._maxReplicas;
    }
    if (this._minReplicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.minReplicas = this._minReplicas;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecAutoscaling | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxReplicas = undefined;
      this._minReplicas = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxReplicas = value.maxReplicas;
      this._minReplicas = value.minReplicas;
    }
  }

  // max_replicas - computed: false, optional: false, required: true
  private _maxReplicas?: number; 
  public get maxReplicas() {
    return this.getNumberAttribute('max_replicas');
  }
  public set maxReplicas(value: number) {
    this._maxReplicas = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxReplicasInput() {
    return this._maxReplicas;
  }

  // min_replicas - computed: false, optional: false, required: true
  private _minReplicas?: number; 
  public get minReplicas() {
    return this.getNumberAttribute('min_replicas');
  }
  public set minReplicas(value: number) {
    this._minReplicas = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minReplicasInput() {
    return this._minReplicas;
  }
}
export interface DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecClusterDeploymentRef {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_machine_pool_v1_manifest#name DataK8SHiveOpenshiftIoMachinePoolV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecClusterDeploymentRefToTerraform(struct?: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecClusterDeploymentRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecClusterDeploymentRefToHclTerraform(struct?: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecClusterDeploymentRef | cdktf.IResolvable): any {
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

export class DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecClusterDeploymentRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecClusterDeploymentRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecClusterDeploymentRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformAwsMetadataService {
  /**
  * Authentication determines whether or not the host requires the use of authentication when interacting with the metadata service. When using authentication, this enforces v2 interaction method (IMDSv2) with the metadata service. When omitted, this means the user has no opinion and the value is left to the platform to choose a good default, which is subject to change over time. The current default is optional. At this point this field represents 'HttpTokens' parameter from 'InstanceMetadataOptionsRequest' structure in AWS EC2 API https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_InstanceMetadataOptionsRequest.html
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_machine_pool_v1_manifest#authentication DataK8SHiveOpenshiftIoMachinePoolV1Manifest#authentication}
  */
  readonly authentication?: string;
}

export function dataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformAwsMetadataServiceToTerraform(struct?: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformAwsMetadataService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: cdktf.stringToTerraform(struct!.authentication),
  }
}


export function dataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformAwsMetadataServiceToHclTerraform(struct?: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformAwsMetadataService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication: {
      value: cdktf.stringToHclTerraform(struct!.authentication),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformAwsMetadataServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformAwsMetadataService | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authentication !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformAwsMetadataService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authentication = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authentication = value.authentication;
    }
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication?: string; 
  public get authentication() {
    return this.getStringAttribute('authentication');
  }
  public set authentication(value: string) {
    this._authentication = value;
  }
  public resetAuthentication() {
    this._authentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication;
  }
}
export interface DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformAwsRootVolume {
  /**
  * IOPS defines the iops for the storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_machine_pool_v1_manifest#iops DataK8SHiveOpenshiftIoMachinePoolV1Manifest#iops}
  */
  readonly iops?: number;
  /**
  * The KMS key that will be used to encrypt the EBS volume. If no key is provided the default KMS key for the account will be used. https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetEbsDefaultKmsKeyId.html
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_machine_pool_v1_manifest#kms_key_arn DataK8SHiveOpenshiftIoMachinePoolV1Manifest#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
  /**
  * Size defines the size of the storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_machine_pool_v1_manifest#size DataK8SHiveOpenshiftIoMachinePoolV1Manifest#size}
  */
  readonly size: number;
  /**
  * Type defines the type of the storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_machine_pool_v1_manifest#type DataK8SHiveOpenshiftIoMachinePoolV1Manifest#type}
  */
  readonly type: string;
}

export function dataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformAwsRootVolumeToTerraform(struct?: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformAwsRootVolume | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    iops: cdktf.numberToTerraform(struct!.iops),
    kms_key_arn: cdktf.stringToTerraform(struct!.kmsKeyArn),
    size: cdktf.numberToTerraform(struct!.size),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformAwsRootVolumeToHclTerraform(struct?: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformAwsRootVolume | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    iops: {
      value: cdktf.numberToHclTerraform(struct!.iops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kms_key_arn: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformAwsRootVolumeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformAwsRootVolume | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._iops !== undefined) {
      hasAnyValues = true;
      internalValueResult.iops = this._iops;
    }
    if (this._kmsKeyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyArn = this._kmsKeyArn;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformAwsRootVolume | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._iops = undefined;
      this._kmsKeyArn = undefined;
      this._size = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._iops = value.iops;
      this._kmsKeyArn = value.kmsKeyArn;
      this._size = value.size;
      this._type = value.type;
    }
  }

  // iops - computed: false, optional: true, required: false
  private _iops?: number; 
  public get iops() {
    return this.getNumberAttribute('iops');
  }
  public set iops(value: number) {
    this._iops = value;
  }
  public resetIops() {
    this._iops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iopsInput() {
    return this._iops;
  }

  // kms_key_arn - computed: false, optional: true, required: false
  private _kmsKeyArn?: string; 
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
  public set kmsKeyArn(value: string) {
    this._kmsKeyArn = value;
  }
  public resetKmsKeyArn() {
    this._kmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyArnInput() {
    return this._kmsKeyArn;
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
export interface DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformAwsSpotMarketOptions {
  /**
  * The maximum price the user is willing to pay for their instances Default: On-Demand price
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_machine_pool_v1_manifest#max_price DataK8SHiveOpenshiftIoMachinePoolV1Manifest#max_price}
  */
  readonly maxPrice?: string;
}

export function dataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformAwsSpotMarketOptionsToTerraform(struct?: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformAwsSpotMarketOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_price: cdktf.stringToTerraform(struct!.maxPrice),
  }
}


export function dataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformAwsSpotMarketOptionsToHclTerraform(struct?: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformAwsSpotMarketOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_price: {
      value: cdktf.stringToHclTerraform(struct!.maxPrice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformAwsSpotMarketOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformAwsSpotMarketOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxPrice !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPrice = this._maxPrice;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformAwsSpotMarketOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxPrice = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxPrice = value.maxPrice;
    }
  }

  // max_price - computed: false, optional: true, required: false
  private _maxPrice?: string; 
  public get maxPrice() {
    return this.getStringAttribute('max_price');
  }
  public set maxPrice(value: string) {
    this._maxPrice = value;
  }
  public resetMaxPrice() {
    this._maxPrice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPriceInput() {
    return this._maxPrice;
  }
}
export interface DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformAws {
  /**
  * AdditionalSecurityGroupIDs contains IDs of additional security groups for machines, where each ID is presented in the format sg-xxxx.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_machine_pool_v1_manifest#additional_security_group_i_ds DataK8SHiveOpenshiftIoMachinePoolV1Manifest#additional_security_group_i_ds}
  */
  readonly additionalSecurityGroupIDs?: string[];
  /**
  * EC2MetadataOptions defines metadata service interaction options for EC2 instances in the machine pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_machine_pool_v1_manifest#metadata_service DataK8SHiveOpenshiftIoMachinePoolV1Manifest#metadata_service}
  */
  readonly metadataService?: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformAwsMetadataService;
  /**
  * EC2RootVolume defines the storage for ec2 instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_machine_pool_v1_manifest#root_volume DataK8SHiveOpenshiftIoMachinePoolV1Manifest#root_volume}
  */
  readonly rootVolume: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformAwsRootVolume;
  /**
  * SpotMarketOptions allows users to configure instances to be run using AWS Spot instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_machine_pool_v1_manifest#spot_market_options DataK8SHiveOpenshiftIoMachinePoolV1Manifest#spot_market_options}
  */
  readonly spotMarketOptions?: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformAwsSpotMarketOptions;
  /**
  * Subnets is the list of IDs of subnets to which to attach the machines. There must be exactly one subnet for each availability zone used. These subnets may be public or private. As a special case, for consistency with install-config, you may specify exactly one private and one public subnet for each availability zone. In this case, the public subnets will be filtered out and only the private subnets will be used. If empty/omitted, we will look for subnets in each availability zone tagged with Name=<clusterID>-private-<az> (legacy terraform) or <clusterID>-subnet-private-<az> (CAPA).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_machine_pool_v1_manifest#subnets DataK8SHiveOpenshiftIoMachinePoolV1Manifest#subnets}
  */
  readonly subnets?: string[];
  /**
  * InstanceType defines the ec2 instance type. eg. m4-large
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_machine_pool_v1_manifest#type DataK8SHiveOpenshiftIoMachinePoolV1Manifest#type}
  */
  readonly type: string;
  /**
  * UserTags contains the user defined tags to be supplied for the ec2 instance. Note that these will be merged with ClusterDeployment.Spec.Platform.AWS.UserTags, with this field taking precedence when keys collide.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_machine_pool_v1_manifest#user_tags DataK8SHiveOpenshiftIoMachinePoolV1Manifest#user_tags}
  */
  readonly userTags?: { [key: string]: string };
  /**
  * Zones is list of availability zones that can be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_machine_pool_v1_manifest#zones DataK8SHiveOpenshiftIoMachinePoolV1Manifest#zones}
  */
  readonly zones?: string[];
}

export function dataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformAwsToTerraform(struct?: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformAws | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_security_group_i_ds: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.additionalSecurityGroupIDs),
    metadata_service: dataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformAwsMetadataServiceToTerraform(struct!.metadataService),
    root_volume: dataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformAwsRootVolumeToTerraform(struct!.rootVolume),
    spot_market_options: dataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformAwsSpotMarketOptionsToTerraform(struct!.spotMarketOptions),
    subnets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subnets),
    type: cdktf.stringToTerraform(struct!.type),
    user_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.userTags),
    zones: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.zones),
  }
}


export function dataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformAwsToHclTerraform(struct?: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformAws | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_security_group_i_ds: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.additionalSecurityGroupIDs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    metadata_service: {
      value: dataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformAwsMetadataServiceToHclTerraform(struct!.metadataService),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformAwsMetadataService",
    },
    root_volume: {
      value: dataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformAwsRootVolumeToHclTerraform(struct!.rootVolume),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformAwsRootVolume",
    },
    spot_market_options: {
      value: dataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformAwsSpotMarketOptionsToHclTerraform(struct!.spotMarketOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformAwsSpotMarketOptions",
    },
    subnets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subnets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
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
    zones: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.zones),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformAwsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformAws | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalSecurityGroupIDs !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalSecurityGroupIDs = this._additionalSecurityGroupIDs;
    }
    if (this._metadataService?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataService = this._metadataService?.internalValue;
    }
    if (this._rootVolume?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootVolume = this._rootVolume?.internalValue;
    }
    if (this._spotMarketOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spotMarketOptions = this._spotMarketOptions?.internalValue;
    }
    if (this._subnets !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnets = this._subnets;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._userTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTags = this._userTags;
    }
    if (this._zones !== undefined) {
      hasAnyValues = true;
      internalValueResult.zones = this._zones;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformAws | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalSecurityGroupIDs = undefined;
      this._metadataService.internalValue = undefined;
      this._rootVolume.internalValue = undefined;
      this._spotMarketOptions.internalValue = undefined;
      this._subnets = undefined;
      this._type = undefined;
      this._userTags = undefined;
      this._zones = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalSecurityGroupIDs = value.additionalSecurityGroupIDs;
      this._metadataService.internalValue = value.metadataService;
      this._rootVolume.internalValue = value.rootVolume;
      this._spotMarketOptions.internalValue = value.spotMarketOptions;
      this._subnets = value.subnets;
      this._type = value.type;
      this._userTags = value.userTags;
      this._zones = value.zones;
    }
  }

  // additional_security_group_i_ds - computed: false, optional: true, required: false
  private _additionalSecurityGroupIDs?: string[]; 
  public get additionalSecurityGroupIDs() {
    return this.getListAttribute('additional_security_group_i_ds');
  }
  public set additionalSecurityGroupIDs(value: string[]) {
    this._additionalSecurityGroupIDs = value;
  }
  public resetAdditionalSecurityGroupIDs() {
    this._additionalSecurityGroupIDs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalSecurityGroupIDsInput() {
    return this._additionalSecurityGroupIDs;
  }

  // metadata_service - computed: false, optional: true, required: false
  private _metadataService = new DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformAwsMetadataServiceOutputReference(this, "metadata_service");
  public get metadataService() {
    return this._metadataService;
  }
  public putMetadataService(value: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformAwsMetadataService) {
    this._metadataService.internalValue = value;
  }
  public resetMetadataService() {
    this._metadataService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataServiceInput() {
    return this._metadataService.internalValue;
  }

  // root_volume - computed: false, optional: false, required: true
  private _rootVolume = new DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformAwsRootVolumeOutputReference(this, "root_volume");
  public get rootVolume() {
    return this._rootVolume;
  }
  public putRootVolume(value: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformAwsRootVolume) {
    this._rootVolume.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rootVolumeInput() {
    return this._rootVolume.internalValue;
  }

  // spot_market_options - computed: false, optional: true, required: false
  private _spotMarketOptions = new DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformAwsSpotMarketOptionsOutputReference(this, "spot_market_options");
  public get spotMarketOptions() {
    return this._spotMarketOptions;
  }
  public putSpotMarketOptions(value: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformAwsSpotMarketOptions) {
    this._spotMarketOptions.internalValue = value;
  }
  public resetSpotMarketOptions() {
    this._spotMarketOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotMarketOptionsInput() {
    return this._spotMarketOptions.internalValue;
  }

  // subnets - computed: false, optional: true, required: false
  private _subnets?: string[]; 
  public get subnets() {
    return this.getListAttribute('subnets');
  }
  public set subnets(value: string[]) {
    this._subnets = value;
  }
  public resetSubnets() {
    this._subnets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetsInput() {
    return this._subnets;
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

  // zones - computed: false, optional: true, required: false
  private _zones?: string[]; 
  public get zones() {
    return this.getListAttribute('zones');
  }
  public set zones(value: string[]) {
    this._zones = value;
  }
  public resetZones() {
    this._zones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zonesInput() {
    return this._zones;
  }
}
export interface DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformAzureOsDiskDiskEncryptionSet {
  /**
  * Name is the name of the disk encryption set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_machine_pool_v1_manifest#name DataK8SHiveOpenshiftIoMachinePoolV1Manifest#name}
  */
  readonly name: string;
  /**
  * ResourceGroup defines the Azure resource group used by the disk encryption set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_machine_pool_v1_manifest#resource_group DataK8SHiveOpenshiftIoMachinePoolV1Manifest#resource_group}
  */
  readonly resourceGroup: string;
  /**
  * SubscriptionID defines the Azure subscription the disk encryption set is in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_machine_pool_v1_manifest#subscription_id DataK8SHiveOpenshiftIoMachinePoolV1Manifest#subscription_id}
  */
  readonly subscriptionId?: string;
}

export function dataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformAzureOsDiskDiskEncryptionSetToTerraform(struct?: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformAzureOsDiskDiskEncryptionSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    resource_group: cdktf.stringToTerraform(struct!.resourceGroup),
    subscription_id: cdktf.stringToTerraform(struct!.subscriptionId),
  }
}


export function dataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformAzureOsDiskDiskEncryptionSetToHclTerraform(struct?: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformAzureOsDiskDiskEncryptionSet | cdktf.IResolvable): any {
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
    resource_group: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subscription_id: {
      value: cdktf.stringToHclTerraform(struct!.subscriptionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformAzureOsDiskDiskEncryptionSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformAzureOsDiskDiskEncryptionSet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._resourceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroup = this._resourceGroup;
    }
    if (this._subscriptionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscriptionId = this._subscriptionId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformAzureOsDiskDiskEncryptionSet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._resourceGroup = undefined;
      this._subscriptionId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._resourceGroup = value.resourceGroup;
      this._subscriptionId = value.subscriptionId;
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

  // resource_group - computed: false, optional: false, required: true
  private _resourceGroup?: string; 
  public get resourceGroup() {
    return this.getStringAttribute('resource_group');
  }
  public set resourceGroup(value: string) {
    this._resourceGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupInput() {
    return this._resourceGroup;
  }

  // subscription_id - computed: false, optional: true, required: false
  private _subscriptionId?: string; 
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
  public set subscriptionId(value: string) {
    this._subscriptionId = value;
  }
  public resetSubscriptionId() {
    this._subscriptionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId;
  }
}
export interface DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformAzureOsDisk {
  /**
  * DiskEncryptionSet defines a disk encryption set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_machine_pool_v1_manifest#disk_encryption_set DataK8SHiveOpenshiftIoMachinePoolV1Manifest#disk_encryption_set}
  */
  readonly diskEncryptionSet?: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformAzureOsDiskDiskEncryptionSet;
  /**
  * DiskSizeGB defines the size of disk in GB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_machine_pool_v1_manifest#disk_size_gb DataK8SHiveOpenshiftIoMachinePoolV1Manifest#disk_size_gb}
  */
  readonly diskSizeGb: number;
  /**
  * DiskType defines the type of disk. For control plane nodes, the valid values are Premium_LRS and StandardSSD_LRS. Default is Premium_LRS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_machine_pool_v1_manifest#disk_type DataK8SHiveOpenshiftIoMachinePoolV1Manifest#disk_type}
  */
  readonly diskType?: string;
}

export function dataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformAzureOsDiskToTerraform(struct?: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformAzureOsDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_encryption_set: dataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformAzureOsDiskDiskEncryptionSetToTerraform(struct!.diskEncryptionSet),
    disk_size_gb: cdktf.numberToTerraform(struct!.diskSizeGb),
    disk_type: cdktf.stringToTerraform(struct!.diskType),
  }
}


export function dataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformAzureOsDiskToHclTerraform(struct?: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformAzureOsDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_encryption_set: {
      value: dataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformAzureOsDiskDiskEncryptionSetToHclTerraform(struct!.diskEncryptionSet),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformAzureOsDiskDiskEncryptionSet",
    },
    disk_size_gb: {
      value: cdktf.numberToHclTerraform(struct!.diskSizeGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_type: {
      value: cdktf.stringToHclTerraform(struct!.diskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformAzureOsDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformAzureOsDisk | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskEncryptionSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskEncryptionSet = this._diskEncryptionSet?.internalValue;
    }
    if (this._diskSizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSizeGb = this._diskSizeGb;
    }
    if (this._diskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskType = this._diskType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformAzureOsDisk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._diskEncryptionSet.internalValue = undefined;
      this._diskSizeGb = undefined;
      this._diskType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._diskEncryptionSet.internalValue = value.diskEncryptionSet;
      this._diskSizeGb = value.diskSizeGb;
      this._diskType = value.diskType;
    }
  }

  // disk_encryption_set - computed: false, optional: true, required: false
  private _diskEncryptionSet = new DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformAzureOsDiskDiskEncryptionSetOutputReference(this, "disk_encryption_set");
  public get diskEncryptionSet() {
    return this._diskEncryptionSet;
  }
  public putDiskEncryptionSet(value: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformAzureOsDiskDiskEncryptionSet) {
    this._diskEncryptionSet.internalValue = value;
  }
  public resetDiskEncryptionSet() {
    this._diskEncryptionSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskEncryptionSetInput() {
    return this._diskEncryptionSet.internalValue;
  }

  // disk_size_gb - computed: false, optional: false, required: true
  private _diskSizeGb?: number; 
  public get diskSizeGb() {
    return this.getNumberAttribute('disk_size_gb');
  }
  public set diskSizeGb(value: number) {
    this._diskSizeGb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeGbInput() {
    return this._diskSizeGb;
  }

  // disk_type - computed: false, optional: true, required: false
  private _diskType?: string; 
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }
  public set diskType(value: string) {
    this._diskType = value;
  }
  public resetDiskType() {
    this._diskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskTypeInput() {
    return this._diskType;
  }
}
export interface DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformAzureOsImage {
  /**
  * Offer is the offer of the image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_machine_pool_v1_manifest#offer DataK8SHiveOpenshiftIoMachinePoolV1Manifest#offer}
  */
  readonly offer: string;
  /**
  * Publisher is the publisher of the image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_machine_pool_v1_manifest#publisher DataK8SHiveOpenshiftIoMachinePoolV1Manifest#publisher}
  */
  readonly publisher: string;
  /**
  * SKU is the SKU of the image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_machine_pool_v1_manifest#sku DataK8SHiveOpenshiftIoMachinePoolV1Manifest#sku}
  */
  readonly sku: string;
  /**
  * Version is the version of the image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_machine_pool_v1_manifest#version DataK8SHiveOpenshiftIoMachinePoolV1Manifest#version}
  */
  readonly version: string;
}

export function dataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformAzureOsImageToTerraform(struct?: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformAzureOsImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    offer: cdktf.stringToTerraform(struct!.offer),
    publisher: cdktf.stringToTerraform(struct!.publisher),
    sku: cdktf.stringToTerraform(struct!.sku),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformAzureOsImageToHclTerraform(struct?: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformAzureOsImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    offer: {
      value: cdktf.stringToHclTerraform(struct!.offer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    publisher: {
      value: cdktf.stringToHclTerraform(struct!.publisher),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sku: {
      value: cdktf.stringToHclTerraform(struct!.sku),
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

export class DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformAzureOsImageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformAzureOsImage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._offer !== undefined) {
      hasAnyValues = true;
      internalValueResult.offer = this._offer;
    }
    if (this._publisher !== undefined) {
      hasAnyValues = true;
      internalValueResult.publisher = this._publisher;
    }
    if (this._sku !== undefined) {
      hasAnyValues = true;
      internalValueResult.sku = this._sku;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformAzureOsImage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._offer = undefined;
      this._publisher = undefined;
      this._sku = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._offer = value.offer;
      this._publisher = value.publisher;
      this._sku = value.sku;
      this._version = value.version;
    }
  }

  // offer - computed: false, optional: false, required: true
  private _offer?: string; 
  public get offer() {
    return this.getStringAttribute('offer');
  }
  public set offer(value: string) {
    this._offer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get offerInput() {
    return this._offer;
  }

  // publisher - computed: false, optional: false, required: true
  private _publisher?: string; 
  public get publisher() {
    return this.getStringAttribute('publisher');
  }
  public set publisher(value: string) {
    this._publisher = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publisherInput() {
    return this._publisher;
  }

  // sku - computed: false, optional: false, required: true
  private _sku?: string; 
  public get sku() {
    return this.getStringAttribute('sku');
  }
  public set sku(value: string) {
    this._sku = value;
  }
  // Temporarily expose input value. Use with caution.
  public get skuInput() {
    return this._sku;
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
export interface DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformAzure {
  /**
  * ComputeSubnet specifies an existing subnet for use by compute nodes. If omitted, the default (${infraID}-worker-subnet) will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_machine_pool_v1_manifest#compute_subnet DataK8SHiveOpenshiftIoMachinePoolV1Manifest#compute_subnet}
  */
  readonly computeSubnet?: string;
  /**
  * NetworkResourceGroupName specifies the network resource group that contains an existing VNet. Ignored unless VirtualNetwork is also specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_machine_pool_v1_manifest#network_resource_group_name DataK8SHiveOpenshiftIoMachinePoolV1Manifest#network_resource_group_name}
  */
  readonly networkResourceGroupName?: string;
  /**
  * OSDisk defines the storage for instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_machine_pool_v1_manifest#os_disk DataK8SHiveOpenshiftIoMachinePoolV1Manifest#os_disk}
  */
  readonly osDisk: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformAzureOsDisk;
  /**
  * OSImage defines the image to use for the OS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_machine_pool_v1_manifest#os_image DataK8SHiveOpenshiftIoMachinePoolV1Manifest#os_image}
  */
  readonly osImage?: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformAzureOsImage;
  /**
  * InstanceType defines the azure instance type. eg. Standard_DS_V2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_machine_pool_v1_manifest#type DataK8SHiveOpenshiftIoMachinePoolV1Manifest#type}
  */
  readonly type: string;
  /**
  * VirtualNetwork specifies the name of an existing VNet for the Machines to use If omitted, the default (${infraID}-vnet) will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_machine_pool_v1_manifest#virtual_network DataK8SHiveOpenshiftIoMachinePoolV1Manifest#virtual_network}
  */
  readonly virtualNetwork?: string;
  /**
  * VMNetworkingType specifies whether to enable accelerated networking. Accelerated networking enables single root I/O virtualization (SR-IOV) to a VM, greatly improving its networking performance. eg. values: 'Accelerated', 'Basic'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_machine_pool_v1_manifest#vm_networking_type DataK8SHiveOpenshiftIoMachinePoolV1Manifest#vm_networking_type}
  */
  readonly vmNetworkingType?: string;
  /**
  * Zones is list of availability zones that can be used. eg. ['1', '2', '3']
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_machine_pool_v1_manifest#zones DataK8SHiveOpenshiftIoMachinePoolV1Manifest#zones}
  */
  readonly zones?: string[];
}

export function dataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformAzureToTerraform(struct?: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformAzure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compute_subnet: cdktf.stringToTerraform(struct!.computeSubnet),
    network_resource_group_name: cdktf.stringToTerraform(struct!.networkResourceGroupName),
    os_disk: dataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformAzureOsDiskToTerraform(struct!.osDisk),
    os_image: dataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformAzureOsImageToTerraform(struct!.osImage),
    type: cdktf.stringToTerraform(struct!.type),
    virtual_network: cdktf.stringToTerraform(struct!.virtualNetwork),
    vm_networking_type: cdktf.stringToTerraform(struct!.vmNetworkingType),
    zones: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.zones),
  }
}


export function dataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformAzureToHclTerraform(struct?: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformAzure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compute_subnet: {
      value: cdktf.stringToHclTerraform(struct!.computeSubnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_resource_group_name: {
      value: cdktf.stringToHclTerraform(struct!.networkResourceGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    os_disk: {
      value: dataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformAzureOsDiskToHclTerraform(struct!.osDisk),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformAzureOsDisk",
    },
    os_image: {
      value: dataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformAzureOsImageToHclTerraform(struct!.osImage),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformAzureOsImage",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virtual_network: {
      value: cdktf.stringToHclTerraform(struct!.virtualNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vm_networking_type: {
      value: cdktf.stringToHclTerraform(struct!.vmNetworkingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zones: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.zones),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformAzureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformAzure | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._computeSubnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeSubnet = this._computeSubnet;
    }
    if (this._networkResourceGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkResourceGroupName = this._networkResourceGroupName;
    }
    if (this._osDisk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.osDisk = this._osDisk?.internalValue;
    }
    if (this._osImage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.osImage = this._osImage?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._virtualNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualNetwork = this._virtualNetwork;
    }
    if (this._vmNetworkingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmNetworkingType = this._vmNetworkingType;
    }
    if (this._zones !== undefined) {
      hasAnyValues = true;
      internalValueResult.zones = this._zones;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformAzure | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._computeSubnet = undefined;
      this._networkResourceGroupName = undefined;
      this._osDisk.internalValue = undefined;
      this._osImage.internalValue = undefined;
      this._type = undefined;
      this._virtualNetwork = undefined;
      this._vmNetworkingType = undefined;
      this._zones = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._computeSubnet = value.computeSubnet;
      this._networkResourceGroupName = value.networkResourceGroupName;
      this._osDisk.internalValue = value.osDisk;
      this._osImage.internalValue = value.osImage;
      this._type = value.type;
      this._virtualNetwork = value.virtualNetwork;
      this._vmNetworkingType = value.vmNetworkingType;
      this._zones = value.zones;
    }
  }

  // compute_subnet - computed: false, optional: true, required: false
  private _computeSubnet?: string; 
  public get computeSubnet() {
    return this.getStringAttribute('compute_subnet');
  }
  public set computeSubnet(value: string) {
    this._computeSubnet = value;
  }
  public resetComputeSubnet() {
    this._computeSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeSubnetInput() {
    return this._computeSubnet;
  }

  // network_resource_group_name - computed: false, optional: true, required: false
  private _networkResourceGroupName?: string; 
  public get networkResourceGroupName() {
    return this.getStringAttribute('network_resource_group_name');
  }
  public set networkResourceGroupName(value: string) {
    this._networkResourceGroupName = value;
  }
  public resetNetworkResourceGroupName() {
    this._networkResourceGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkResourceGroupNameInput() {
    return this._networkResourceGroupName;
  }

  // os_disk - computed: false, optional: false, required: true
  private _osDisk = new DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformAzureOsDiskOutputReference(this, "os_disk");
  public get osDisk() {
    return this._osDisk;
  }
  public putOsDisk(value: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformAzureOsDisk) {
    this._osDisk.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get osDiskInput() {
    return this._osDisk.internalValue;
  }

  // os_image - computed: false, optional: true, required: false
  private _osImage = new DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformAzureOsImageOutputReference(this, "os_image");
  public get osImage() {
    return this._osImage;
  }
  public putOsImage(value: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformAzureOsImage) {
    this._osImage.internalValue = value;
  }
  public resetOsImage() {
    this._osImage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osImageInput() {
    return this._osImage.internalValue;
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

  // virtual_network - computed: false, optional: true, required: false
  private _virtualNetwork?: string; 
  public get virtualNetwork() {
    return this.getStringAttribute('virtual_network');
  }
  public set virtualNetwork(value: string) {
    this._virtualNetwork = value;
  }
  public resetVirtualNetwork() {
    this._virtualNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkInput() {
    return this._virtualNetwork;
  }

  // vm_networking_type - computed: false, optional: true, required: false
  private _vmNetworkingType?: string; 
  public get vmNetworkingType() {
    return this.getStringAttribute('vm_networking_type');
  }
  public set vmNetworkingType(value: string) {
    this._vmNetworkingType = value;
  }
  public resetVmNetworkingType() {
    this._vmNetworkingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmNetworkingTypeInput() {
    return this._vmNetworkingType;
  }

  // zones - computed: false, optional: true, required: false
  private _zones?: string[]; 
  public get zones() {
    return this.getListAttribute('zones');
  }
  public set zones(value: string[]) {
    this._zones = value;
  }
  public resetZones() {
    this._zones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zonesInput() {
    return this._zones;
  }
}
export interface DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformGcpOsDiskEncryptionKeyKmsKey {
  /**
  * KeyRing is the name of the KMS Key Ring which the KMS Key belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_machine_pool_v1_manifest#key_ring DataK8SHiveOpenshiftIoMachinePoolV1Manifest#key_ring}
  */
  readonly keyRing: string;
  /**
  * Location is the GCP location in which the Key Ring exists.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_machine_pool_v1_manifest#location DataK8SHiveOpenshiftIoMachinePoolV1Manifest#location}
  */
  readonly location: string;
  /**
  * Name is the name of the customer managed encryption key to be used for the disk encryption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_machine_pool_v1_manifest#name DataK8SHiveOpenshiftIoMachinePoolV1Manifest#name}
  */
  readonly name: string;
  /**
  * ProjectID is the ID of the Project in which the KMS Key Ring exists. Defaults to the VM ProjectID if not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_machine_pool_v1_manifest#project_id DataK8SHiveOpenshiftIoMachinePoolV1Manifest#project_id}
  */
  readonly projectId?: string;
}

export function dataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformGcpOsDiskEncryptionKeyKmsKeyToTerraform(struct?: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformGcpOsDiskEncryptionKeyKmsKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_ring: cdktf.stringToTerraform(struct!.keyRing),
    location: cdktf.stringToTerraform(struct!.location),
    name: cdktf.stringToTerraform(struct!.name),
    project_id: cdktf.stringToTerraform(struct!.projectId),
  }
}


export function dataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformGcpOsDiskEncryptionKeyKmsKeyToHclTerraform(struct?: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformGcpOsDiskEncryptionKeyKmsKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_ring: {
      value: cdktf.stringToHclTerraform(struct!.keyRing),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
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
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformGcpOsDiskEncryptionKeyKmsKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformGcpOsDiskEncryptionKeyKmsKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyRing !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyRing = this._keyRing;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformGcpOsDiskEncryptionKeyKmsKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keyRing = undefined;
      this._location = undefined;
      this._name = undefined;
      this._projectId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keyRing = value.keyRing;
      this._location = value.location;
      this._name = value.name;
      this._projectId = value.projectId;
    }
  }

  // key_ring - computed: false, optional: false, required: true
  private _keyRing?: string; 
  public get keyRing() {
    return this.getStringAttribute('key_ring');
  }
  public set keyRing(value: string) {
    this._keyRing = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyRingInput() {
    return this._keyRing;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
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

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }
}
export interface DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformGcpOsDiskEncryptionKey {
  /**
  * KMSKey is a reference to a KMS Key to use for the encryption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_machine_pool_v1_manifest#kms_key DataK8SHiveOpenshiftIoMachinePoolV1Manifest#kms_key}
  */
  readonly kmsKey?: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformGcpOsDiskEncryptionKeyKmsKey;
  /**
  * KMSKeyServiceAccount is the service account being used for the encryption request for the given KMS key. If absent, the Compute Engine default service account is used. See https://cloud.google.com/compute/docs/access/service-accounts#compute_engine_service_account for details on the default service account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_machine_pool_v1_manifest#kms_key_service_account DataK8SHiveOpenshiftIoMachinePoolV1Manifest#kms_key_service_account}
  */
  readonly kmsKeyServiceAccount?: string;
}

export function dataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformGcpOsDiskEncryptionKeyToTerraform(struct?: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformGcpOsDiskEncryptionKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key: dataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformGcpOsDiskEncryptionKeyKmsKeyToTerraform(struct!.kmsKey),
    kms_key_service_account: cdktf.stringToTerraform(struct!.kmsKeyServiceAccount),
  }
}


export function dataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformGcpOsDiskEncryptionKeyToHclTerraform(struct?: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformGcpOsDiskEncryptionKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kms_key: {
      value: dataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformGcpOsDiskEncryptionKeyKmsKeyToHclTerraform(struct!.kmsKey),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformGcpOsDiskEncryptionKeyKmsKey",
    },
    kms_key_service_account: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyServiceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformGcpOsDiskEncryptionKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformGcpOsDiskEncryptionKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKey = this._kmsKey?.internalValue;
    }
    if (this._kmsKeyServiceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyServiceAccount = this._kmsKeyServiceAccount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformGcpOsDiskEncryptionKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kmsKey.internalValue = undefined;
      this._kmsKeyServiceAccount = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kmsKey.internalValue = value.kmsKey;
      this._kmsKeyServiceAccount = value.kmsKeyServiceAccount;
    }
  }

  // kms_key - computed: false, optional: true, required: false
  private _kmsKey = new DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformGcpOsDiskEncryptionKeyKmsKeyOutputReference(this, "kms_key");
  public get kmsKey() {
    return this._kmsKey;
  }
  public putKmsKey(value: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformGcpOsDiskEncryptionKeyKmsKey) {
    this._kmsKey.internalValue = value;
  }
  public resetKmsKey() {
    this._kmsKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyInput() {
    return this._kmsKey.internalValue;
  }

  // kms_key_service_account - computed: false, optional: true, required: false
  private _kmsKeyServiceAccount?: string; 
  public get kmsKeyServiceAccount() {
    return this.getStringAttribute('kms_key_service_account');
  }
  public set kmsKeyServiceAccount(value: string) {
    this._kmsKeyServiceAccount = value;
  }
  public resetKmsKeyServiceAccount() {
    this._kmsKeyServiceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyServiceAccountInput() {
    return this._kmsKeyServiceAccount;
  }
}
export interface DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformGcpOsDisk {
  /**
  * DiskSizeGB defines the size of disk in GB. Defaulted internally to 128.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_machine_pool_v1_manifest#disk_size_gb DataK8SHiveOpenshiftIoMachinePoolV1Manifest#disk_size_gb}
  */
  readonly diskSizeGb?: number;
  /**
  * DiskType defines the type of disk. The valid values are pd-standard and pd-ssd. Defaulted internally to pd-ssd.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_machine_pool_v1_manifest#disk_type DataK8SHiveOpenshiftIoMachinePoolV1Manifest#disk_type}
  */
  readonly diskType?: string;
  /**
  * EncryptionKey defines the KMS key to be used to encrypt the disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_machine_pool_v1_manifest#encryption_key DataK8SHiveOpenshiftIoMachinePoolV1Manifest#encryption_key}
  */
  readonly encryptionKey?: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformGcpOsDiskEncryptionKey;
}

export function dataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformGcpOsDiskToTerraform(struct?: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformGcpOsDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_size_gb: cdktf.numberToTerraform(struct!.diskSizeGb),
    disk_type: cdktf.stringToTerraform(struct!.diskType),
    encryption_key: dataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformGcpOsDiskEncryptionKeyToTerraform(struct!.encryptionKey),
  }
}


export function dataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformGcpOsDiskToHclTerraform(struct?: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformGcpOsDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_size_gb: {
      value: cdktf.numberToHclTerraform(struct!.diskSizeGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_type: {
      value: cdktf.stringToHclTerraform(struct!.diskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encryption_key: {
      value: dataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformGcpOsDiskEncryptionKeyToHclTerraform(struct!.encryptionKey),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformGcpOsDiskEncryptionKey",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformGcpOsDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformGcpOsDisk | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskSizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSizeGb = this._diskSizeGb;
    }
    if (this._diskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskType = this._diskType;
    }
    if (this._encryptionKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionKey = this._encryptionKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformGcpOsDisk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._diskSizeGb = undefined;
      this._diskType = undefined;
      this._encryptionKey.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._diskSizeGb = value.diskSizeGb;
      this._diskType = value.diskType;
      this._encryptionKey.internalValue = value.encryptionKey;
    }
  }

  // disk_size_gb - computed: false, optional: true, required: false
  private _diskSizeGb?: number; 
  public get diskSizeGb() {
    return this.getNumberAttribute('disk_size_gb');
  }
  public set diskSizeGb(value: number) {
    this._diskSizeGb = value;
  }
  public resetDiskSizeGb() {
    this._diskSizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeGbInput() {
    return this._diskSizeGb;
  }

  // disk_type - computed: false, optional: true, required: false
  private _diskType?: string; 
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }
  public set diskType(value: string) {
    this._diskType = value;
  }
  public resetDiskType() {
    this._diskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskTypeInput() {
    return this._diskType;
  }

  // encryption_key - computed: false, optional: true, required: false
  private _encryptionKey = new DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformGcpOsDiskEncryptionKeyOutputReference(this, "encryption_key");
  public get encryptionKey() {
    return this._encryptionKey;
  }
  public putEncryptionKey(value: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformGcpOsDiskEncryptionKey) {
    this._encryptionKey.internalValue = value;
  }
  public resetEncryptionKey() {
    this._encryptionKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionKeyInput() {
    return this._encryptionKey.internalValue;
  }
}
export interface DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformGcpUserTags {
  /**
  * key is the key part of the tag. A tag key can have a maximum of 63 characters and cannot be empty. Tag key must begin and end with an alphanumeric character, and must contain only uppercase, lowercase alphanumeric characters, and the following special characters '._-'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_machine_pool_v1_manifest#key DataK8SHiveOpenshiftIoMachinePoolV1Manifest#key}
  */
  readonly key: string;
  /**
  * parentID is the ID of the hierarchical resource where the tags are defined, e.g. at the Organization or the Project level. To find the Organization ID or Project ID refer to the following pages: https://cloud.google.com/resource-manager/docs/creating-managing-organization#retrieving_your_organization_id, https://cloud.google.com/resource-manager/docs/creating-managing-projects#identifying_projects. An OrganizationID must consist of decimal numbers, and cannot have leading zeroes. A ProjectID must be 6 to 30 characters in length, can only contain lowercase letters, numbers, and hyphens, and must start with a letter, and cannot end with a hyphen.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_machine_pool_v1_manifest#parent_id DataK8SHiveOpenshiftIoMachinePoolV1Manifest#parent_id}
  */
  readonly parentId: string;
  /**
  * value is the value part of the tag. A tag value can have a maximum of 63 characters and cannot be empty. Tag value must begin and end with an alphanumeric character, and must contain only uppercase, lowercase alphanumeric characters, and the following special characters '_-.@%=+:,*#&(){}[]' and spaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_machine_pool_v1_manifest#value DataK8SHiveOpenshiftIoMachinePoolV1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformGcpUserTagsToTerraform(struct?: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformGcpUserTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    parent_id: cdktf.stringToTerraform(struct!.parentId),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformGcpUserTagsToHclTerraform(struct?: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformGcpUserTags | cdktf.IResolvable): any {
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
    parent_id: {
      value: cdktf.stringToHclTerraform(struct!.parentId),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformGcpUserTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformGcpUserTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._parentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.parentId = this._parentId;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformGcpUserTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._parentId = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._parentId = value.parentId;
      this._value = value.value;
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

  // parent_id - computed: false, optional: false, required: true
  private _parentId?: string; 
  public get parentId() {
    return this.getStringAttribute('parent_id');
  }
  public set parentId(value: string) {
    this._parentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentIdInput() {
    return this._parentId;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformGcpUserTagsList extends cdktf.ComplexList {
  public internalValue? : DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformGcpUserTags[] | cdktf.IResolvable

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
  public get(index: number): DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformGcpUserTagsOutputReference {
    return new DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformGcpUserTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformGcp {
  /**
  * NetworkProjectID specifies which project the network and subnets exist in when they are not in the main ProjectID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_machine_pool_v1_manifest#network_project_id DataK8SHiveOpenshiftIoMachinePoolV1Manifest#network_project_id}
  */
  readonly networkProjectId?: string;
  /**
  * OnHostMaintenance determines the behavior when a maintenance event occurs that might cause the instance to reboot. This is required to be set to 'Terminate' if you want to provision machine with attached GPUs. Otherwise, allowed values are 'Migrate' and 'Terminate'. If omitted, the platform chooses a default, which is subject to change over time, currently that default is 'Migrate'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_machine_pool_v1_manifest#on_host_maintenance DataK8SHiveOpenshiftIoMachinePoolV1Manifest#on_host_maintenance}
  */
  readonly onHostMaintenance?: string;
  /**
  * OSDisk defines the storage for instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_machine_pool_v1_manifest#os_disk DataK8SHiveOpenshiftIoMachinePoolV1Manifest#os_disk}
  */
  readonly osDisk?: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformGcpOsDisk;
  /**
  * SecureBoot Defines whether the instance should have secure boot enabled. Verifies the digital signature of all boot components, and halts the boot process if signature verification fails. If omitted, the platform chooses a default, which is subject to change over time. Currently that default is 'Disabled'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_machine_pool_v1_manifest#secure_boot DataK8SHiveOpenshiftIoMachinePoolV1Manifest#secure_boot}
  */
  readonly secureBoot?: string;
  /**
  * ServiceAccount is the email of a gcp service account to be attached to worker nodes in order to provide the permissions required by the cloud provider. For the default worker MachinePool, it is the user's responsibility to match this to the value provided in the install-config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_machine_pool_v1_manifest#service_account DataK8SHiveOpenshiftIoMachinePoolV1Manifest#service_account}
  */
  readonly serviceAccount?: string;
  /**
  * InstanceType defines the GCP instance type. eg. n1-standard-4
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_machine_pool_v1_manifest#type DataK8SHiveOpenshiftIoMachinePoolV1Manifest#type}
  */
  readonly type: string;
  /**
  * userTags has additional keys and values that we will add as tags to the providerSpec of MachineSets that we creates on GCP. Tag key and tag value should be the shortnames of the tag key and tag value resource. Consumer is responsible for using this only for spokes where custom tags are supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_machine_pool_v1_manifest#user_tags DataK8SHiveOpenshiftIoMachinePoolV1Manifest#user_tags}
  */
  readonly userTags?: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformGcpUserTags[] | cdktf.IResolvable;
  /**
  * Zones is list of availability zones that can be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_machine_pool_v1_manifest#zones DataK8SHiveOpenshiftIoMachinePoolV1Manifest#zones}
  */
  readonly zones?: string[];
}

export function dataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformGcpToTerraform(struct?: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformGcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_project_id: cdktf.stringToTerraform(struct!.networkProjectId),
    on_host_maintenance: cdktf.stringToTerraform(struct!.onHostMaintenance),
    os_disk: dataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformGcpOsDiskToTerraform(struct!.osDisk),
    secure_boot: cdktf.stringToTerraform(struct!.secureBoot),
    service_account: cdktf.stringToTerraform(struct!.serviceAccount),
    type: cdktf.stringToTerraform(struct!.type),
    user_tags: cdktf.listMapper(dataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformGcpUserTagsToTerraform, false)(struct!.userTags),
    zones: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.zones),
  }
}


export function dataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformGcpToHclTerraform(struct?: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformGcp | cdktf.IResolvable): any {
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
    on_host_maintenance: {
      value: cdktf.stringToHclTerraform(struct!.onHostMaintenance),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    os_disk: {
      value: dataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformGcpOsDiskToHclTerraform(struct!.osDisk),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformGcpOsDisk",
    },
    secure_boot: {
      value: cdktf.stringToHclTerraform(struct!.secureBoot),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccount),
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
    user_tags: {
      value: cdktf.listMapperHcl(dataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformGcpUserTagsToHclTerraform, false)(struct!.userTags),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformGcpUserTagsList",
    },
    zones: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.zones),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformGcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformGcp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkProjectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkProjectId = this._networkProjectId;
    }
    if (this._onHostMaintenance !== undefined) {
      hasAnyValues = true;
      internalValueResult.onHostMaintenance = this._onHostMaintenance;
    }
    if (this._osDisk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.osDisk = this._osDisk?.internalValue;
    }
    if (this._secureBoot !== undefined) {
      hasAnyValues = true;
      internalValueResult.secureBoot = this._secureBoot;
    }
    if (this._serviceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._userTags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTags = this._userTags?.internalValue;
    }
    if (this._zones !== undefined) {
      hasAnyValues = true;
      internalValueResult.zones = this._zones;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformGcp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._networkProjectId = undefined;
      this._onHostMaintenance = undefined;
      this._osDisk.internalValue = undefined;
      this._secureBoot = undefined;
      this._serviceAccount = undefined;
      this._type = undefined;
      this._userTags.internalValue = undefined;
      this._zones = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._networkProjectId = value.networkProjectId;
      this._onHostMaintenance = value.onHostMaintenance;
      this._osDisk.internalValue = value.osDisk;
      this._secureBoot = value.secureBoot;
      this._serviceAccount = value.serviceAccount;
      this._type = value.type;
      this._userTags.internalValue = value.userTags;
      this._zones = value.zones;
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

  // on_host_maintenance - computed: false, optional: true, required: false
  private _onHostMaintenance?: string; 
  public get onHostMaintenance() {
    return this.getStringAttribute('on_host_maintenance');
  }
  public set onHostMaintenance(value: string) {
    this._onHostMaintenance = value;
  }
  public resetOnHostMaintenance() {
    this._onHostMaintenance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onHostMaintenanceInput() {
    return this._onHostMaintenance;
  }

  // os_disk - computed: false, optional: true, required: false
  private _osDisk = new DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformGcpOsDiskOutputReference(this, "os_disk");
  public get osDisk() {
    return this._osDisk;
  }
  public putOsDisk(value: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformGcpOsDisk) {
    this._osDisk.internalValue = value;
  }
  public resetOsDisk() {
    this._osDisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osDiskInput() {
    return this._osDisk.internalValue;
  }

  // secure_boot - computed: false, optional: true, required: false
  private _secureBoot?: string; 
  public get secureBoot() {
    return this.getStringAttribute('secure_boot');
  }
  public set secureBoot(value: string) {
    this._secureBoot = value;
  }
  public resetSecureBoot() {
    this._secureBoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureBootInput() {
    return this._secureBoot;
  }

  // service_account - computed: false, optional: true, required: false
  private _serviceAccount?: string; 
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }
  public set serviceAccount(value: string) {
    this._serviceAccount = value;
  }
  public resetServiceAccount() {
    this._serviceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount;
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

  // user_tags - computed: false, optional: true, required: false
  private _userTags = new DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformGcpUserTagsList(this, "user_tags", false);
  public get userTags() {
    return this._userTags;
  }
  public putUserTags(value: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformGcpUserTags[] | cdktf.IResolvable) {
    this._userTags.internalValue = value;
  }
  public resetUserTags() {
    this._userTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagsInput() {
    return this._userTags.internalValue;
  }

  // zones - computed: false, optional: true, required: false
  private _zones?: string[]; 
  public get zones() {
    return this.getListAttribute('zones');
  }
  public set zones(value: string[]) {
    this._zones = value;
  }
  public resetZones() {
    this._zones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zonesInput() {
    return this._zones;
  }
}
export interface DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformIbmcloudBootVolume {
  /**
  * EncryptionKey is the CRN referencing a Key Protect or Hyper Protect Crypto Services key to use for volume encryption. If not specified, a provider managed encryption key will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_machine_pool_v1_manifest#encryption_key DataK8SHiveOpenshiftIoMachinePoolV1Manifest#encryption_key}
  */
  readonly encryptionKey?: string;
}

export function dataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformIbmcloudBootVolumeToTerraform(struct?: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformIbmcloudBootVolume | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encryption_key: cdktf.stringToTerraform(struct!.encryptionKey),
  }
}


export function dataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformIbmcloudBootVolumeToHclTerraform(struct?: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformIbmcloudBootVolume | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    encryption_key: {
      value: cdktf.stringToHclTerraform(struct!.encryptionKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformIbmcloudBootVolumeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformIbmcloudBootVolume | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryptionKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionKey = this._encryptionKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformIbmcloudBootVolume | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encryptionKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encryptionKey = value.encryptionKey;
    }
  }

  // encryption_key - computed: false, optional: true, required: false
  private _encryptionKey?: string; 
  public get encryptionKey() {
    return this.getStringAttribute('encryption_key');
  }
  public set encryptionKey(value: string) {
    this._encryptionKey = value;
  }
  public resetEncryptionKey() {
    this._encryptionKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionKeyInput() {
    return this._encryptionKey;
  }
}
export interface DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformIbmcloudDedicatedHosts {
  /**
  * Name is the name of the dedicated host to provision the machine on. If specified, machines will be created on pre-existing dedicated host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_machine_pool_v1_manifest#name DataK8SHiveOpenshiftIoMachinePoolV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Profile is the profile ID for the dedicated host. If specified, new dedicated host will be created for machines.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_machine_pool_v1_manifest#profile DataK8SHiveOpenshiftIoMachinePoolV1Manifest#profile}
  */
  readonly profile?: string;
}

export function dataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformIbmcloudDedicatedHostsToTerraform(struct?: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformIbmcloudDedicatedHosts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    profile: cdktf.stringToTerraform(struct!.profile),
  }
}


export function dataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformIbmcloudDedicatedHostsToHclTerraform(struct?: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformIbmcloudDedicatedHosts | cdktf.IResolvable): any {
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
    profile: {
      value: cdktf.stringToHclTerraform(struct!.profile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformIbmcloudDedicatedHostsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformIbmcloudDedicatedHosts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._profile !== undefined) {
      hasAnyValues = true;
      internalValueResult.profile = this._profile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformIbmcloudDedicatedHosts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._profile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._profile = value.profile;
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

  // profile - computed: false, optional: true, required: false
  private _profile?: string; 
  public get profile() {
    return this.getStringAttribute('profile');
  }
  public set profile(value: string) {
    this._profile = value;
  }
  public resetProfile() {
    this._profile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }
}

export class DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformIbmcloudDedicatedHostsList extends cdktf.ComplexList {
  public internalValue? : DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformIbmcloudDedicatedHosts[] | cdktf.IResolvable

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
  public get(index: number): DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformIbmcloudDedicatedHostsOutputReference {
    return new DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformIbmcloudDedicatedHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformIbmcloud {
  /**
  * BootVolume is the configuration for the machine's boot volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_machine_pool_v1_manifest#boot_volume DataK8SHiveOpenshiftIoMachinePoolV1Manifest#boot_volume}
  */
  readonly bootVolume?: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformIbmcloudBootVolume;
  /**
  * DedicatedHosts is the configuration for the machine's dedicated host and profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_machine_pool_v1_manifest#dedicated_hosts DataK8SHiveOpenshiftIoMachinePoolV1Manifest#dedicated_hosts}
  */
  readonly dedicatedHosts?: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformIbmcloudDedicatedHosts[] | cdktf.IResolvable;
  /**
  * InstanceType is the VSI machine profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_machine_pool_v1_manifest#type DataK8SHiveOpenshiftIoMachinePoolV1Manifest#type}
  */
  readonly type?: string;
  /**
  * Zones is the list of availability zones used for machines in the pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_machine_pool_v1_manifest#zones DataK8SHiveOpenshiftIoMachinePoolV1Manifest#zones}
  */
  readonly zones?: string[];
}

export function dataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformIbmcloudToTerraform(struct?: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformIbmcloud | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boot_volume: dataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformIbmcloudBootVolumeToTerraform(struct!.bootVolume),
    dedicated_hosts: cdktf.listMapper(dataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformIbmcloudDedicatedHostsToTerraform, false)(struct!.dedicatedHosts),
    type: cdktf.stringToTerraform(struct!.type),
    zones: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.zones),
  }
}


export function dataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformIbmcloudToHclTerraform(struct?: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformIbmcloud | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    boot_volume: {
      value: dataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformIbmcloudBootVolumeToHclTerraform(struct!.bootVolume),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformIbmcloudBootVolume",
    },
    dedicated_hosts: {
      value: cdktf.listMapperHcl(dataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformIbmcloudDedicatedHostsToHclTerraform, false)(struct!.dedicatedHosts),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformIbmcloudDedicatedHostsList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zones: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.zones),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformIbmcloudOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformIbmcloud | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bootVolume?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootVolume = this._bootVolume?.internalValue;
    }
    if (this._dedicatedHosts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dedicatedHosts = this._dedicatedHosts?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._zones !== undefined) {
      hasAnyValues = true;
      internalValueResult.zones = this._zones;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformIbmcloud | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bootVolume.internalValue = undefined;
      this._dedicatedHosts.internalValue = undefined;
      this._type = undefined;
      this._zones = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bootVolume.internalValue = value.bootVolume;
      this._dedicatedHosts.internalValue = value.dedicatedHosts;
      this._type = value.type;
      this._zones = value.zones;
    }
  }

  // boot_volume - computed: false, optional: true, required: false
  private _bootVolume = new DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformIbmcloudBootVolumeOutputReference(this, "boot_volume");
  public get bootVolume() {
    return this._bootVolume;
  }
  public putBootVolume(value: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformIbmcloudBootVolume) {
    this._bootVolume.internalValue = value;
  }
  public resetBootVolume() {
    this._bootVolume.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootVolumeInput() {
    return this._bootVolume.internalValue;
  }

  // dedicated_hosts - computed: false, optional: true, required: false
  private _dedicatedHosts = new DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformIbmcloudDedicatedHostsList(this, "dedicated_hosts", false);
  public get dedicatedHosts() {
    return this._dedicatedHosts;
  }
  public putDedicatedHosts(value: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformIbmcloudDedicatedHosts[] | cdktf.IResolvable) {
    this._dedicatedHosts.internalValue = value;
  }
  public resetDedicatedHosts() {
    this._dedicatedHosts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedHostsInput() {
    return this._dedicatedHosts.internalValue;
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

  // zones - computed: false, optional: true, required: false
  private _zones?: string[]; 
  public get zones() {
    return this.getListAttribute('zones');
  }
  public set zones(value: string[]) {
    this._zones = value;
  }
  public resetZones() {
    this._zones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zonesInput() {
    return this._zones;
  }
}
export interface DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformOpenstackRootVolume {
  /**
  * Size defines the size of the volume in gibibytes (GiB). Required
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_machine_pool_v1_manifest#size DataK8SHiveOpenshiftIoMachinePoolV1Manifest#size}
  */
  readonly size: number;
  /**
  * Type defines the type of the volume. Required
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_machine_pool_v1_manifest#type DataK8SHiveOpenshiftIoMachinePoolV1Manifest#type}
  */
  readonly type: string;
}

export function dataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformOpenstackRootVolumeToTerraform(struct?: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformOpenstackRootVolume | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    size: cdktf.numberToTerraform(struct!.size),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformOpenstackRootVolumeToHclTerraform(struct?: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformOpenstackRootVolume | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformOpenstackRootVolumeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformOpenstackRootVolume | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformOpenstackRootVolume | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._size = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._size = value.size;
      this._type = value.type;
    }
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
export interface DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformOpenstack {
  /**
  * Flavor defines the OpenStack Nova flavor. eg. m1.large The json key here differs from the installer which uses both 'computeFlavor' and type 'type' depending on which type you're looking at, and the resulting field on the MachineSet is 'flavor'. We are opting to stay consistent with the end result.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_machine_pool_v1_manifest#flavor DataK8SHiveOpenshiftIoMachinePoolV1Manifest#flavor}
  */
  readonly flavor: string;
  /**
  * RootVolume defines the root volume for instances in the machine pool. The instances use ephemeral disks if not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_machine_pool_v1_manifest#root_volume DataK8SHiveOpenshiftIoMachinePoolV1Manifest#root_volume}
  */
  readonly rootVolume?: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformOpenstackRootVolume;
}

export function dataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformOpenstackToTerraform(struct?: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformOpenstack | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    flavor: cdktf.stringToTerraform(struct!.flavor),
    root_volume: dataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformOpenstackRootVolumeToTerraform(struct!.rootVolume),
  }
}


export function dataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformOpenstackToHclTerraform(struct?: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformOpenstack | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    flavor: {
      value: cdktf.stringToHclTerraform(struct!.flavor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    root_volume: {
      value: dataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformOpenstackRootVolumeToHclTerraform(struct!.rootVolume),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformOpenstackRootVolume",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformOpenstackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformOpenstack | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._flavor !== undefined) {
      hasAnyValues = true;
      internalValueResult.flavor = this._flavor;
    }
    if (this._rootVolume?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootVolume = this._rootVolume?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformOpenstack | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._flavor = undefined;
      this._rootVolume.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._flavor = value.flavor;
      this._rootVolume.internalValue = value.rootVolume;
    }
  }

  // flavor - computed: false, optional: false, required: true
  private _flavor?: string; 
  public get flavor() {
    return this.getStringAttribute('flavor');
  }
  public set flavor(value: string) {
    this._flavor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get flavorInput() {
    return this._flavor;
  }

  // root_volume - computed: false, optional: true, required: false
  private _rootVolume = new DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformOpenstackRootVolumeOutputReference(this, "root_volume");
  public get rootVolume() {
    return this._rootVolume;
  }
  public putRootVolume(value: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformOpenstackRootVolume) {
    this._rootVolume.internalValue = value;
  }
  public resetRootVolume() {
    this._rootVolume.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootVolumeInput() {
    return this._rootVolume.internalValue;
  }
}
export interface DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformOvirtCpu {
  /**
  * Cores is the number of cores per socket. Total CPUs is (Sockets * Cores)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_machine_pool_v1_manifest#cores DataK8SHiveOpenshiftIoMachinePoolV1Manifest#cores}
  */
  readonly cores: number;
  /**
  * Sockets is the number of sockets for a VM. Total CPUs is (Sockets * Cores)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_machine_pool_v1_manifest#sockets DataK8SHiveOpenshiftIoMachinePoolV1Manifest#sockets}
  */
  readonly sockets: number;
}

export function dataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformOvirtCpuToTerraform(struct?: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformOvirtCpu | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cores: cdktf.numberToTerraform(struct!.cores),
    sockets: cdktf.numberToTerraform(struct!.sockets),
  }
}


export function dataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformOvirtCpuToHclTerraform(struct?: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformOvirtCpu | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cores: {
      value: cdktf.numberToHclTerraform(struct!.cores),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sockets: {
      value: cdktf.numberToHclTerraform(struct!.sockets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformOvirtCpuOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformOvirtCpu | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cores !== undefined) {
      hasAnyValues = true;
      internalValueResult.cores = this._cores;
    }
    if (this._sockets !== undefined) {
      hasAnyValues = true;
      internalValueResult.sockets = this._sockets;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformOvirtCpu | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cores = undefined;
      this._sockets = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cores = value.cores;
      this._sockets = value.sockets;
    }
  }

  // cores - computed: false, optional: false, required: true
  private _cores?: number; 
  public get cores() {
    return this.getNumberAttribute('cores');
  }
  public set cores(value: number) {
    this._cores = value;
  }
  // Temporarily expose input value. Use with caution.
  public get coresInput() {
    return this._cores;
  }

  // sockets - computed: false, optional: false, required: true
  private _sockets?: number; 
  public get sockets() {
    return this.getNumberAttribute('sockets');
  }
  public set sockets(value: number) {
    this._sockets = value;
  }
  // Temporarily expose input value. Use with caution.
  public get socketsInput() {
    return this._sockets;
  }
}
export interface DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformOvirtOsDisk {
  /**
  * SizeGB size of the bootable disk in GiB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_machine_pool_v1_manifest#size_gb DataK8SHiveOpenshiftIoMachinePoolV1Manifest#size_gb}
  */
  readonly sizeGb: number;
}

export function dataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformOvirtOsDiskToTerraform(struct?: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformOvirtOsDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    size_gb: cdktf.numberToTerraform(struct!.sizeGb),
  }
}


export function dataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformOvirtOsDiskToHclTerraform(struct?: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformOvirtOsDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    size_gb: {
      value: cdktf.numberToHclTerraform(struct!.sizeGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformOvirtOsDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformOvirtOsDisk | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeGb = this._sizeGb;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformOvirtOsDisk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sizeGb = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sizeGb = value.sizeGb;
    }
  }

  // size_gb - computed: false, optional: false, required: true
  private _sizeGb?: number; 
  public get sizeGb() {
    return this.getNumberAttribute('size_gb');
  }
  public set sizeGb(value: number) {
    this._sizeGb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeGbInput() {
    return this._sizeGb;
  }
}
export interface DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformOvirt {
  /**
  * CPU defines the VM CPU.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_machine_pool_v1_manifest#cpu DataK8SHiveOpenshiftIoMachinePoolV1Manifest#cpu}
  */
  readonly cpu?: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformOvirtCpu;
  /**
  * MemoryMB is the size of a VM's memory in MiBs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_machine_pool_v1_manifest#memory_mb DataK8SHiveOpenshiftIoMachinePoolV1Manifest#memory_mb}
  */
  readonly memoryMb?: number;
  /**
  * OSDisk is the the root disk of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_machine_pool_v1_manifest#os_disk DataK8SHiveOpenshiftIoMachinePoolV1Manifest#os_disk}
  */
  readonly osDisk?: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformOvirtOsDisk;
  /**
  * VMType defines the workload type of the VM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_machine_pool_v1_manifest#vm_type DataK8SHiveOpenshiftIoMachinePoolV1Manifest#vm_type}
  */
  readonly vmType?: string;
}

export function dataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformOvirtToTerraform(struct?: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformOvirt | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: dataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformOvirtCpuToTerraform(struct!.cpu),
    memory_mb: cdktf.numberToTerraform(struct!.memoryMb),
    os_disk: dataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformOvirtOsDiskToTerraform(struct!.osDisk),
    vm_type: cdktf.stringToTerraform(struct!.vmType),
  }
}


export function dataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformOvirtToHclTerraform(struct?: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformOvirt | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: dataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformOvirtCpuToHclTerraform(struct!.cpu),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformOvirtCpu",
    },
    memory_mb: {
      value: cdktf.numberToHclTerraform(struct!.memoryMb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    os_disk: {
      value: dataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformOvirtOsDiskToHclTerraform(struct!.osDisk),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformOvirtOsDisk",
    },
    vm_type: {
      value: cdktf.stringToHclTerraform(struct!.vmType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformOvirtOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformOvirt | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu?.internalValue;
    }
    if (this._memoryMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryMb = this._memoryMb;
    }
    if (this._osDisk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.osDisk = this._osDisk?.internalValue;
    }
    if (this._vmType !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmType = this._vmType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformOvirt | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpu.internalValue = undefined;
      this._memoryMb = undefined;
      this._osDisk.internalValue = undefined;
      this._vmType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cpu.internalValue = value.cpu;
      this._memoryMb = value.memoryMb;
      this._osDisk.internalValue = value.osDisk;
      this._vmType = value.vmType;
    }
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu = new DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformOvirtCpuOutputReference(this, "cpu");
  public get cpu() {
    return this._cpu;
  }
  public putCpu(value: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformOvirtCpu) {
    this._cpu.internalValue = value;
  }
  public resetCpu() {
    this._cpu.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu.internalValue;
  }

  // memory_mb - computed: false, optional: true, required: false
  private _memoryMb?: number; 
  public get memoryMb() {
    return this.getNumberAttribute('memory_mb');
  }
  public set memoryMb(value: number) {
    this._memoryMb = value;
  }
  public resetMemoryMb() {
    this._memoryMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryMbInput() {
    return this._memoryMb;
  }

  // os_disk - computed: false, optional: true, required: false
  private _osDisk = new DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformOvirtOsDiskOutputReference(this, "os_disk");
  public get osDisk() {
    return this._osDisk;
  }
  public putOsDisk(value: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformOvirtOsDisk) {
    this._osDisk.internalValue = value;
  }
  public resetOsDisk() {
    this._osDisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osDiskInput() {
    return this._osDisk.internalValue;
  }

  // vm_type - computed: false, optional: true, required: false
  private _vmType?: string; 
  public get vmType() {
    return this.getStringAttribute('vm_type');
  }
  public set vmType(value: string) {
    this._vmType = value;
  }
  public resetVmType() {
    this._vmType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmTypeInput() {
    return this._vmType;
  }
}
export interface DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformVsphereOsDisk {
  /**
  * DiskSizeGB defines the size of disk in GB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_machine_pool_v1_manifest#disk_size_gb DataK8SHiveOpenshiftIoMachinePoolV1Manifest#disk_size_gb}
  */
  readonly diskSizeGb: number;
}

export function dataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformVsphereOsDiskToTerraform(struct?: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformVsphereOsDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_size_gb: cdktf.numberToTerraform(struct!.diskSizeGb),
  }
}


export function dataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformVsphereOsDiskToHclTerraform(struct?: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformVsphereOsDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_size_gb: {
      value: cdktf.numberToHclTerraform(struct!.diskSizeGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformVsphereOsDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformVsphereOsDisk | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskSizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSizeGb = this._diskSizeGb;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformVsphereOsDisk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._diskSizeGb = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._diskSizeGb = value.diskSizeGb;
    }
  }

  // disk_size_gb - computed: false, optional: false, required: true
  private _diskSizeGb?: number; 
  public get diskSizeGb() {
    return this.getNumberAttribute('disk_size_gb');
  }
  public set diskSizeGb(value: number) {
    this._diskSizeGb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeGbInput() {
    return this._diskSizeGb;
  }
}
export interface DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformVsphere {
  /**
  * NumCoresPerSocket is the number of cores per socket in a vm. The number of vCPUs on the vm will be NumCPUs/NumCoresPerSocket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_machine_pool_v1_manifest#cores_per_socket DataK8SHiveOpenshiftIoMachinePoolV1Manifest#cores_per_socket}
  */
  readonly coresPerSocket: number;
  /**
  * NumCPUs is the total number of virtual processor cores to assign a vm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_machine_pool_v1_manifest#cpus DataK8SHiveOpenshiftIoMachinePoolV1Manifest#cpus}
  */
  readonly cpus: number;
  /**
  * Memory is the size of a VM's memory in MB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_machine_pool_v1_manifest#memory_mb DataK8SHiveOpenshiftIoMachinePoolV1Manifest#memory_mb}
  */
  readonly memoryMb: number;
  /**
  * OSDisk defines the storage for instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_machine_pool_v1_manifest#os_disk DataK8SHiveOpenshiftIoMachinePoolV1Manifest#os_disk}
  */
  readonly osDisk: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformVsphereOsDisk;
  /**
  * ResourcePool is the name of the resource pool that will be used for virtual machines. If it is not present, a default value will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_machine_pool_v1_manifest#resource_pool DataK8SHiveOpenshiftIoMachinePoolV1Manifest#resource_pool}
  */
  readonly resourcePool?: string;
}

export function dataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformVsphereToTerraform(struct?: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformVsphere | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cores_per_socket: cdktf.numberToTerraform(struct!.coresPerSocket),
    cpus: cdktf.numberToTerraform(struct!.cpus),
    memory_mb: cdktf.numberToTerraform(struct!.memoryMb),
    os_disk: dataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformVsphereOsDiskToTerraform(struct!.osDisk),
    resource_pool: cdktf.stringToTerraform(struct!.resourcePool),
  }
}


export function dataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformVsphereToHclTerraform(struct?: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformVsphere | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cores_per_socket: {
      value: cdktf.numberToHclTerraform(struct!.coresPerSocket),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpus: {
      value: cdktf.numberToHclTerraform(struct!.cpus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    memory_mb: {
      value: cdktf.numberToHclTerraform(struct!.memoryMb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    os_disk: {
      value: dataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformVsphereOsDiskToHclTerraform(struct!.osDisk),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformVsphereOsDisk",
    },
    resource_pool: {
      value: cdktf.stringToHclTerraform(struct!.resourcePool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformVsphereOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformVsphere | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._coresPerSocket !== undefined) {
      hasAnyValues = true;
      internalValueResult.coresPerSocket = this._coresPerSocket;
    }
    if (this._cpus !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpus = this._cpus;
    }
    if (this._memoryMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryMb = this._memoryMb;
    }
    if (this._osDisk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.osDisk = this._osDisk?.internalValue;
    }
    if (this._resourcePool !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourcePool = this._resourcePool;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformVsphere | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._coresPerSocket = undefined;
      this._cpus = undefined;
      this._memoryMb = undefined;
      this._osDisk.internalValue = undefined;
      this._resourcePool = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._coresPerSocket = value.coresPerSocket;
      this._cpus = value.cpus;
      this._memoryMb = value.memoryMb;
      this._osDisk.internalValue = value.osDisk;
      this._resourcePool = value.resourcePool;
    }
  }

  // cores_per_socket - computed: false, optional: false, required: true
  private _coresPerSocket?: number; 
  public get coresPerSocket() {
    return this.getNumberAttribute('cores_per_socket');
  }
  public set coresPerSocket(value: number) {
    this._coresPerSocket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get coresPerSocketInput() {
    return this._coresPerSocket;
  }

  // cpus - computed: false, optional: false, required: true
  private _cpus?: number; 
  public get cpus() {
    return this.getNumberAttribute('cpus');
  }
  public set cpus(value: number) {
    this._cpus = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cpusInput() {
    return this._cpus;
  }

  // memory_mb - computed: false, optional: false, required: true
  private _memoryMb?: number; 
  public get memoryMb() {
    return this.getNumberAttribute('memory_mb');
  }
  public set memoryMb(value: number) {
    this._memoryMb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryMbInput() {
    return this._memoryMb;
  }

  // os_disk - computed: false, optional: false, required: true
  private _osDisk = new DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformVsphereOsDiskOutputReference(this, "os_disk");
  public get osDisk() {
    return this._osDisk;
  }
  public putOsDisk(value: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformVsphereOsDisk) {
    this._osDisk.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get osDiskInput() {
    return this._osDisk.internalValue;
  }

  // resource_pool - computed: false, optional: true, required: false
  private _resourcePool?: string; 
  public get resourcePool() {
    return this.getStringAttribute('resource_pool');
  }
  public set resourcePool(value: string) {
    this._resourcePool = value;
  }
  public resetResourcePool() {
    this._resourcePool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcePoolInput() {
    return this._resourcePool;
  }
}
export interface DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatform {
  /**
  * AWS is the configuration used when installing on AWS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_machine_pool_v1_manifest#aws DataK8SHiveOpenshiftIoMachinePoolV1Manifest#aws}
  */
  readonly aws?: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformAws;
  /**
  * Azure is the configuration used when installing on Azure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_machine_pool_v1_manifest#azure DataK8SHiveOpenshiftIoMachinePoolV1Manifest#azure}
  */
  readonly azure?: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformAzure;
  /**
  * GCP is the configuration used when installing on GCP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_machine_pool_v1_manifest#gcp DataK8SHiveOpenshiftIoMachinePoolV1Manifest#gcp}
  */
  readonly gcp?: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformGcp;
  /**
  * IBMCloud is the configuration used when installing on IBM Cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_machine_pool_v1_manifest#ibmcloud DataK8SHiveOpenshiftIoMachinePoolV1Manifest#ibmcloud}
  */
  readonly ibmcloud?: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformIbmcloud;
  /**
  * OpenStack is the configuration used when installing on OpenStack.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_machine_pool_v1_manifest#openstack DataK8SHiveOpenshiftIoMachinePoolV1Manifest#openstack}
  */
  readonly openstack?: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformOpenstack;
  /**
  * Ovirt is the configuration used when installing on oVirt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_machine_pool_v1_manifest#ovirt DataK8SHiveOpenshiftIoMachinePoolV1Manifest#ovirt}
  */
  readonly ovirt?: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformOvirt;
  /**
  * VSphere is the configuration used when installing on vSphere
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_machine_pool_v1_manifest#vsphere DataK8SHiveOpenshiftIoMachinePoolV1Manifest#vsphere}
  */
  readonly vsphere?: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformVsphere;
}

export function dataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformToTerraform(struct?: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatform | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws: dataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformAwsToTerraform(struct!.aws),
    azure: dataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformAzureToTerraform(struct!.azure),
    gcp: dataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformGcpToTerraform(struct!.gcp),
    ibmcloud: dataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformIbmcloudToTerraform(struct!.ibmcloud),
    openstack: dataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformOpenstackToTerraform(struct!.openstack),
    ovirt: dataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformOvirtToTerraform(struct!.ovirt),
    vsphere: dataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformVsphereToTerraform(struct!.vsphere),
  }
}


export function dataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformToHclTerraform(struct?: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatform | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws: {
      value: dataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformAwsToHclTerraform(struct!.aws),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformAws",
    },
    azure: {
      value: dataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformAzureToHclTerraform(struct!.azure),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformAzure",
    },
    gcp: {
      value: dataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformGcpToHclTerraform(struct!.gcp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformGcp",
    },
    ibmcloud: {
      value: dataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformIbmcloudToHclTerraform(struct!.ibmcloud),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformIbmcloud",
    },
    openstack: {
      value: dataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformOpenstackToHclTerraform(struct!.openstack),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformOpenstack",
    },
    ovirt: {
      value: dataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformOvirtToHclTerraform(struct!.ovirt),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformOvirt",
    },
    vsphere: {
      value: dataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformVsphereToHclTerraform(struct!.vsphere),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformVsphere",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatform | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatform | cdktf.IResolvable | undefined) {
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
  private _aws = new DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformAwsOutputReference(this, "aws");
  public get aws() {
    return this._aws;
  }
  public putAws(value: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformAws) {
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
  private _azure = new DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformAzureOutputReference(this, "azure");
  public get azure() {
    return this._azure;
  }
  public putAzure(value: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformAzure) {
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
  private _gcp = new DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformGcpOutputReference(this, "gcp");
  public get gcp() {
    return this._gcp;
  }
  public putGcp(value: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformGcp) {
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
  private _ibmcloud = new DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformIbmcloudOutputReference(this, "ibmcloud");
  public get ibmcloud() {
    return this._ibmcloud;
  }
  public putIbmcloud(value: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformIbmcloud) {
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
  private _openstack = new DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformOpenstackOutputReference(this, "openstack");
  public get openstack() {
    return this._openstack;
  }
  public putOpenstack(value: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformOpenstack) {
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
  private _ovirt = new DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformOvirtOutputReference(this, "ovirt");
  public get ovirt() {
    return this._ovirt;
  }
  public putOvirt(value: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformOvirt) {
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
  private _vsphere = new DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformVsphereOutputReference(this, "vsphere");
  public get vsphere() {
    return this._vsphere;
  }
  public putVsphere(value: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformVsphere) {
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
export interface DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecTaints {
  /**
  * Required. The effect of the taint on pods that do not tolerate the taint. Valid effects are NoSchedule, PreferNoSchedule and NoExecute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_machine_pool_v1_manifest#effect DataK8SHiveOpenshiftIoMachinePoolV1Manifest#effect}
  */
  readonly effect: string;
  /**
  * Required. The taint key to be applied to a node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_machine_pool_v1_manifest#key DataK8SHiveOpenshiftIoMachinePoolV1Manifest#key}
  */
  readonly key: string;
  /**
  * TimeAdded represents the time at which the taint was added. It is only written for NoExecute taints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_machine_pool_v1_manifest#time_added DataK8SHiveOpenshiftIoMachinePoolV1Manifest#time_added}
  */
  readonly timeAdded?: string;
  /**
  * The taint value corresponding to the taint key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_machine_pool_v1_manifest#value DataK8SHiveOpenshiftIoMachinePoolV1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecTaintsToTerraform(struct?: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecTaints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    time_added: cdktf.stringToTerraform(struct!.timeAdded),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecTaintsToHclTerraform(struct?: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecTaints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_added: {
      value: cdktf.stringToHclTerraform(struct!.timeAdded),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecTaintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecTaints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._timeAdded !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeAdded = this._timeAdded;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecTaints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._key = undefined;
      this._timeAdded = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._key = value.key;
      this._timeAdded = value.timeAdded;
      this._value = value.value;
    }
  }

  // effect - computed: false, optional: false, required: true
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
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

  // time_added - computed: false, optional: true, required: false
  private _timeAdded?: string; 
  public get timeAdded() {
    return this.getStringAttribute('time_added');
  }
  public set timeAdded(value: string) {
    this._timeAdded = value;
  }
  public resetTimeAdded() {
    this._timeAdded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeAddedInput() {
    return this._timeAdded;
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
}

export class DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecTaintsList extends cdktf.ComplexList {
  public internalValue? : DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecTaints[] | cdktf.IResolvable

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
  public get(index: number): DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecTaintsOutputReference {
    return new DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecTaintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpec {
  /**
  * Autoscaling is the details for auto-scaling the machine pool. Replicas and autoscaling cannot be used together.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_machine_pool_v1_manifest#autoscaling DataK8SHiveOpenshiftIoMachinePoolV1Manifest#autoscaling}
  */
  readonly autoscaling?: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecAutoscaling;
  /**
  * ClusterDeploymentRef references the cluster deployment to which this machine pool belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_machine_pool_v1_manifest#cluster_deployment_ref DataK8SHiveOpenshiftIoMachinePoolV1Manifest#cluster_deployment_ref}
  */
  readonly clusterDeploymentRef: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecClusterDeploymentRef;
  /**
  * Map of label string keys and values that will be applied to the created MachineSet's MachineSpec. This affects the labels that will end up on the *Nodes* (in contrast with the MachineLabels field). This list will overwrite any modifications made to Node labels on an ongoing basis.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_machine_pool_v1_manifest#labels DataK8SHiveOpenshiftIoMachinePoolV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Map of label string keys and values that will be applied to the created MachineSet's MachineTemplateSpec. This affects the labels that will end up on the *Machines* (in contrast with the Labels field). This list will overwrite any modifications made to Machine labels on an ongoing basis. Note: We ignore entries that conflict with generated labels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_machine_pool_v1_manifest#machine_labels DataK8SHiveOpenshiftIoMachinePoolV1Manifest#machine_labels}
  */
  readonly machineLabels?: { [key: string]: string };
  /**
  * Name is the name of the machine pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_machine_pool_v1_manifest#name DataK8SHiveOpenshiftIoMachinePoolV1Manifest#name}
  */
  readonly name: string;
  /**
  * Platform is configuration for machine pool specific to the platform. When using a MachinePool to control the default worker machines created by installer, these must match the values provided in the install-config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_machine_pool_v1_manifest#platform DataK8SHiveOpenshiftIoMachinePoolV1Manifest#platform}
  */
  readonly platform: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatform;
  /**
  * Replicas is the count of machines for this machine pool. Replicas and autoscaling cannot be used together. Default is 1, if autoscaling is not used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_machine_pool_v1_manifest#replicas DataK8SHiveOpenshiftIoMachinePoolV1Manifest#replicas}
  */
  readonly replicas?: number;
  /**
  * List of taints that will be applied to the created MachineSet's MachineSpec. This list will overwrite any modifications made to Node taints on an ongoing basis. In case of duplicate entries, first encountered taint Value will be preserved, and the rest collapsed on the corresponding MachineSets. Note that taints are uniquely identified based on key+effect, not just key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_machine_pool_v1_manifest#taints DataK8SHiveOpenshiftIoMachinePoolV1Manifest#taints}
  */
  readonly taints?: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecTaints[] | cdktf.IResolvable;
}

export function dataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecToTerraform(struct?: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autoscaling: dataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecAutoscalingToTerraform(struct!.autoscaling),
    cluster_deployment_ref: dataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecClusterDeploymentRefToTerraform(struct!.clusterDeploymentRef),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    machine_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.machineLabels),
    name: cdktf.stringToTerraform(struct!.name),
    platform: dataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformToTerraform(struct!.platform),
    replicas: cdktf.numberToTerraform(struct!.replicas),
    taints: cdktf.listMapper(dataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecTaintsToTerraform, false)(struct!.taints),
  }
}


export function dataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecToHclTerraform(struct?: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    autoscaling: {
      value: dataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecAutoscalingToHclTerraform(struct!.autoscaling),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecAutoscaling",
    },
    cluster_deployment_ref: {
      value: dataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecClusterDeploymentRefToHclTerraform(struct!.clusterDeploymentRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecClusterDeploymentRef",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    machine_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.machineLabels),
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
    platform: {
      value: dataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformToHclTerraform(struct!.platform),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatform",
    },
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    taints: {
      value: cdktf.listMapperHcl(dataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecTaintsToHclTerraform, false)(struct!.taints),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecTaintsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoscaling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscaling = this._autoscaling?.internalValue;
    }
    if (this._clusterDeploymentRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterDeploymentRef = this._clusterDeploymentRef?.internalValue;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._machineLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineLabels = this._machineLabels;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._platform?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.platform = this._platform?.internalValue;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    if (this._taints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.taints = this._taints?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoscaling.internalValue = undefined;
      this._clusterDeploymentRef.internalValue = undefined;
      this._labels = undefined;
      this._machineLabels = undefined;
      this._name = undefined;
      this._platform.internalValue = undefined;
      this._replicas = undefined;
      this._taints.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoscaling.internalValue = value.autoscaling;
      this._clusterDeploymentRef.internalValue = value.clusterDeploymentRef;
      this._labels = value.labels;
      this._machineLabels = value.machineLabels;
      this._name = value.name;
      this._platform.internalValue = value.platform;
      this._replicas = value.replicas;
      this._taints.internalValue = value.taints;
    }
  }

  // autoscaling - computed: false, optional: true, required: false
  private _autoscaling = new DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecAutoscalingOutputReference(this, "autoscaling");
  public get autoscaling() {
    return this._autoscaling;
  }
  public putAutoscaling(value: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecAutoscaling) {
    this._autoscaling.internalValue = value;
  }
  public resetAutoscaling() {
    this._autoscaling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalingInput() {
    return this._autoscaling.internalValue;
  }

  // cluster_deployment_ref - computed: false, optional: false, required: true
  private _clusterDeploymentRef = new DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecClusterDeploymentRefOutputReference(this, "cluster_deployment_ref");
  public get clusterDeploymentRef() {
    return this._clusterDeploymentRef;
  }
  public putClusterDeploymentRef(value: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecClusterDeploymentRef) {
    this._clusterDeploymentRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterDeploymentRefInput() {
    return this._clusterDeploymentRef.internalValue;
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

  // machine_labels - computed: false, optional: true, required: false
  private _machineLabels?: { [key: string]: string }; 
  public get machineLabels() {
    return this.getStringMapAttribute('machine_labels');
  }
  public set machineLabels(value: { [key: string]: string }) {
    this._machineLabels = value;
  }
  public resetMachineLabels() {
    this._machineLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineLabelsInput() {
    return this._machineLabels;
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

  // platform - computed: false, optional: false, required: true
  private _platform = new DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatformOutputReference(this, "platform");
  public get platform() {
    return this._platform;
  }
  public putPlatform(value: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecPlatform) {
    this._platform.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get platformInput() {
    return this._platform.internalValue;
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

  // taints - computed: false, optional: true, required: false
  private _taints = new DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecTaintsList(this, "taints", false);
  public get taints() {
    return this._taints;
  }
  public putTaints(value: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecTaints[] | cdktf.IResolvable) {
    this._taints.internalValue = value;
  }
  public resetTaints() {
    this._taints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taintsInput() {
    return this._taints.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_machine_pool_v1_manifest k8s_hive_openshift_io_machine_pool_v1_manifest}
*/
export class DataK8SHiveOpenshiftIoMachinePoolV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_hive_openshift_io_machine_pool_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SHiveOpenshiftIoMachinePoolV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SHiveOpenshiftIoMachinePoolV1Manifest to import
  * @param importFromId The id of the existing DataK8SHiveOpenshiftIoMachinePoolV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_machine_pool_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SHiveOpenshiftIoMachinePoolV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_hive_openshift_io_machine_pool_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hive_openshift_io_machine_pool_v1_manifest k8s_hive_openshift_io_machine_pool_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SHiveOpenshiftIoMachinePoolV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SHiveOpenshiftIoMachinePoolV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_hive_openshift_io_machine_pool_v1_manifest',
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
  private _metadata = new DataK8SHiveOpenshiftIoMachinePoolV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SHiveOpenshiftIoMachinePoolV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpec) {
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
      metadata: dataK8SHiveOpenshiftIoMachinePoolV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SHiveOpenshiftIoMachinePoolV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SHiveOpenshiftIoMachinePoolV1ManifestMetadata",
      },
      spec: {
        value: dataK8SHiveOpenshiftIoMachinePoolV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SHiveOpenshiftIoMachinePoolV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
