// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#metadata DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestMetadata;
  /**
  * InstanceSpec defines the desired state of Instance. Describes an instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#spec DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpec;
}
export interface DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#annotations DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#labels DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#name DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#namespace DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecBlockDeviceMappingsEbs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#delete_on_termination DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#delete_on_termination}
  */
  readonly deleteOnTermination?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#encrypted DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#encrypted}
  */
  readonly encrypted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#iops DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#iops}
  */
  readonly iops?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#kms_key_id DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#outpost_arn DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#outpost_arn}
  */
  readonly outpostArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#snapshot_id DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#snapshot_id}
  */
  readonly snapshotId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#throughput DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#throughput}
  */
  readonly throughput?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#volume_size DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#volume_size}
  */
  readonly volumeSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#volume_type DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#volume_type}
  */
  readonly volumeType?: string;
}

export function dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecBlockDeviceMappingsEbsToTerraform(struct?: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecBlockDeviceMappingsEbs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete_on_termination: cdktf.booleanToTerraform(struct!.deleteOnTermination),
    encrypted: cdktf.booleanToTerraform(struct!.encrypted),
    iops: cdktf.numberToTerraform(struct!.iops),
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    outpost_arn: cdktf.stringToTerraform(struct!.outpostArn),
    snapshot_id: cdktf.stringToTerraform(struct!.snapshotId),
    throughput: cdktf.numberToTerraform(struct!.throughput),
    volume_size: cdktf.numberToTerraform(struct!.volumeSize),
    volume_type: cdktf.stringToTerraform(struct!.volumeType),
  }
}


export function dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecBlockDeviceMappingsEbsToHclTerraform(struct?: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecBlockDeviceMappingsEbs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delete_on_termination: {
      value: cdktf.booleanToHclTerraform(struct!.deleteOnTermination),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    encrypted: {
      value: cdktf.booleanToHclTerraform(struct!.encrypted),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    iops: {
      value: cdktf.numberToHclTerraform(struct!.iops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kms_key_id: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    outpost_arn: {
      value: cdktf.stringToHclTerraform(struct!.outpostArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snapshot_id: {
      value: cdktf.stringToHclTerraform(struct!.snapshotId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    throughput: {
      value: cdktf.numberToHclTerraform(struct!.throughput),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    volume_size: {
      value: cdktf.numberToHclTerraform(struct!.volumeSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    volume_type: {
      value: cdktf.stringToHclTerraform(struct!.volumeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecBlockDeviceMappingsEbsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecBlockDeviceMappingsEbs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deleteOnTermination !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteOnTermination = this._deleteOnTermination;
    }
    if (this._encrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.encrypted = this._encrypted;
    }
    if (this._iops !== undefined) {
      hasAnyValues = true;
      internalValueResult.iops = this._iops;
    }
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    if (this._outpostArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.outpostArn = this._outpostArn;
    }
    if (this._snapshotId !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotId = this._snapshotId;
    }
    if (this._throughput !== undefined) {
      hasAnyValues = true;
      internalValueResult.throughput = this._throughput;
    }
    if (this._volumeSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeSize = this._volumeSize;
    }
    if (this._volumeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeType = this._volumeType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecBlockDeviceMappingsEbs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deleteOnTermination = undefined;
      this._encrypted = undefined;
      this._iops = undefined;
      this._kmsKeyId = undefined;
      this._outpostArn = undefined;
      this._snapshotId = undefined;
      this._throughput = undefined;
      this._volumeSize = undefined;
      this._volumeType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deleteOnTermination = value.deleteOnTermination;
      this._encrypted = value.encrypted;
      this._iops = value.iops;
      this._kmsKeyId = value.kmsKeyId;
      this._outpostArn = value.outpostArn;
      this._snapshotId = value.snapshotId;
      this._throughput = value.throughput;
      this._volumeSize = value.volumeSize;
      this._volumeType = value.volumeType;
    }
  }

  // delete_on_termination - computed: false, optional: true, required: false
  private _deleteOnTermination?: boolean | cdktf.IResolvable; 
  public get deleteOnTermination() {
    return this.getBooleanAttribute('delete_on_termination');
  }
  public set deleteOnTermination(value: boolean | cdktf.IResolvable) {
    this._deleteOnTermination = value;
  }
  public resetDeleteOnTermination() {
    this._deleteOnTermination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteOnTerminationInput() {
    return this._deleteOnTermination;
  }

  // encrypted - computed: false, optional: true, required: false
  private _encrypted?: boolean | cdktf.IResolvable; 
  public get encrypted() {
    return this.getBooleanAttribute('encrypted');
  }
  public set encrypted(value: boolean | cdktf.IResolvable) {
    this._encrypted = value;
  }
  public resetEncrypted() {
    this._encrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedInput() {
    return this._encrypted;
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

  // kms_key_id - computed: false, optional: true, required: false
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }

  // outpost_arn - computed: false, optional: true, required: false
  private _outpostArn?: string; 
  public get outpostArn() {
    return this.getStringAttribute('outpost_arn');
  }
  public set outpostArn(value: string) {
    this._outpostArn = value;
  }
  public resetOutpostArn() {
    this._outpostArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outpostArnInput() {
    return this._outpostArn;
  }

  // snapshot_id - computed: false, optional: true, required: false
  private _snapshotId?: string; 
  public get snapshotId() {
    return this.getStringAttribute('snapshot_id');
  }
  public set snapshotId(value: string) {
    this._snapshotId = value;
  }
  public resetSnapshotId() {
    this._snapshotId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotIdInput() {
    return this._snapshotId;
  }

  // throughput - computed: false, optional: true, required: false
  private _throughput?: number; 
  public get throughput() {
    return this.getNumberAttribute('throughput');
  }
  public set throughput(value: number) {
    this._throughput = value;
  }
  public resetThroughput() {
    this._throughput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throughputInput() {
    return this._throughput;
  }

  // volume_size - computed: false, optional: true, required: false
  private _volumeSize?: number; 
  public get volumeSize() {
    return this.getNumberAttribute('volume_size');
  }
  public set volumeSize(value: number) {
    this._volumeSize = value;
  }
  public resetVolumeSize() {
    this._volumeSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeSizeInput() {
    return this._volumeSize;
  }

  // volume_type - computed: false, optional: true, required: false
  private _volumeType?: string; 
  public get volumeType() {
    return this.getStringAttribute('volume_type');
  }
  public set volumeType(value: string) {
    this._volumeType = value;
  }
  public resetVolumeType() {
    this._volumeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeTypeInput() {
    return this._volumeType;
  }
}
export interface DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecBlockDeviceMappings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#device_name DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#device_name}
  */
  readonly deviceName?: string;
  /**
  * Describes a block device for an EBS volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#ebs DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#ebs}
  */
  readonly ebs?: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecBlockDeviceMappingsEbs;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#no_device DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#no_device}
  */
  readonly noDevice?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#virtual_name DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#virtual_name}
  */
  readonly virtualName?: string;
}

export function dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecBlockDeviceMappingsToTerraform(struct?: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecBlockDeviceMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_name: cdktf.stringToTerraform(struct!.deviceName),
    ebs: dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecBlockDeviceMappingsEbsToTerraform(struct!.ebs),
    no_device: cdktf.stringToTerraform(struct!.noDevice),
    virtual_name: cdktf.stringToTerraform(struct!.virtualName),
  }
}


export function dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecBlockDeviceMappingsToHclTerraform(struct?: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecBlockDeviceMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device_name: {
      value: cdktf.stringToHclTerraform(struct!.deviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ebs: {
      value: dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecBlockDeviceMappingsEbsToHclTerraform(struct!.ebs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecBlockDeviceMappingsEbs",
    },
    no_device: {
      value: cdktf.stringToHclTerraform(struct!.noDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virtual_name: {
      value: cdktf.stringToHclTerraform(struct!.virtualName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecBlockDeviceMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecBlockDeviceMappings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceName = this._deviceName;
    }
    if (this._ebs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebs = this._ebs?.internalValue;
    }
    if (this._noDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.noDevice = this._noDevice;
    }
    if (this._virtualName !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualName = this._virtualName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecBlockDeviceMappings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deviceName = undefined;
      this._ebs.internalValue = undefined;
      this._noDevice = undefined;
      this._virtualName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deviceName = value.deviceName;
      this._ebs.internalValue = value.ebs;
      this._noDevice = value.noDevice;
      this._virtualName = value.virtualName;
    }
  }

  // device_name - computed: false, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // ebs - computed: false, optional: true, required: false
  private _ebs = new DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecBlockDeviceMappingsEbsOutputReference(this, "ebs");
  public get ebs() {
    return this._ebs;
  }
  public putEbs(value: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecBlockDeviceMappingsEbs) {
    this._ebs.internalValue = value;
  }
  public resetEbs() {
    this._ebs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsInput() {
    return this._ebs.internalValue;
  }

  // no_device - computed: false, optional: true, required: false
  private _noDevice?: string; 
  public get noDevice() {
    return this.getStringAttribute('no_device');
  }
  public set noDevice(value: string) {
    this._noDevice = value;
  }
  public resetNoDevice() {
    this._noDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noDeviceInput() {
    return this._noDevice;
  }

  // virtual_name - computed: false, optional: true, required: false
  private _virtualName?: string; 
  public get virtualName() {
    return this.getStringAttribute('virtual_name');
  }
  public set virtualName(value: string) {
    this._virtualName = value;
  }
  public resetVirtualName() {
    this._virtualName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNameInput() {
    return this._virtualName;
  }
}

export class DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecBlockDeviceMappingsList extends cdktf.ComplexList {
  public internalValue? : DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecBlockDeviceMappings[] | cdktf.IResolvable

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
  public get(index: number): DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecBlockDeviceMappingsOutputReference {
    return new DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecBlockDeviceMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecCapacityReservationSpecificationCapacityReservationTarget {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#capacity_reservation_id DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#capacity_reservation_id}
  */
  readonly capacityReservationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#capacity_reservation_resource_group_arn DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#capacity_reservation_resource_group_arn}
  */
  readonly capacityReservationResourceGroupArn?: string;
}

export function dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecCapacityReservationSpecificationCapacityReservationTargetToTerraform(struct?: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecCapacityReservationSpecificationCapacityReservationTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capacity_reservation_id: cdktf.stringToTerraform(struct!.capacityReservationId),
    capacity_reservation_resource_group_arn: cdktf.stringToTerraform(struct!.capacityReservationResourceGroupArn),
  }
}


export function dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecCapacityReservationSpecificationCapacityReservationTargetToHclTerraform(struct?: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecCapacityReservationSpecificationCapacityReservationTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capacity_reservation_id: {
      value: cdktf.stringToHclTerraform(struct!.capacityReservationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    capacity_reservation_resource_group_arn: {
      value: cdktf.stringToHclTerraform(struct!.capacityReservationResourceGroupArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecCapacityReservationSpecificationCapacityReservationTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecCapacityReservationSpecificationCapacityReservationTarget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capacityReservationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacityReservationId = this._capacityReservationId;
    }
    if (this._capacityReservationResourceGroupArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacityReservationResourceGroupArn = this._capacityReservationResourceGroupArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecCapacityReservationSpecificationCapacityReservationTarget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._capacityReservationId = undefined;
      this._capacityReservationResourceGroupArn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._capacityReservationId = value.capacityReservationId;
      this._capacityReservationResourceGroupArn = value.capacityReservationResourceGroupArn;
    }
  }

  // capacity_reservation_id - computed: false, optional: true, required: false
  private _capacityReservationId?: string; 
  public get capacityReservationId() {
    return this.getStringAttribute('capacity_reservation_id');
  }
  public set capacityReservationId(value: string) {
    this._capacityReservationId = value;
  }
  public resetCapacityReservationId() {
    this._capacityReservationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityReservationIdInput() {
    return this._capacityReservationId;
  }

  // capacity_reservation_resource_group_arn - computed: false, optional: true, required: false
  private _capacityReservationResourceGroupArn?: string; 
  public get capacityReservationResourceGroupArn() {
    return this.getStringAttribute('capacity_reservation_resource_group_arn');
  }
  public set capacityReservationResourceGroupArn(value: string) {
    this._capacityReservationResourceGroupArn = value;
  }
  public resetCapacityReservationResourceGroupArn() {
    this._capacityReservationResourceGroupArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityReservationResourceGroupArnInput() {
    return this._capacityReservationResourceGroupArn;
  }
}
export interface DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecCapacityReservationSpecification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#capacity_reservation_preference DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#capacity_reservation_preference}
  */
  readonly capacityReservationPreference?: string;
  /**
  * Describes a target Capacity Reservation or Capacity Reservation group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#capacity_reservation_target DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#capacity_reservation_target}
  */
  readonly capacityReservationTarget?: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecCapacityReservationSpecificationCapacityReservationTarget;
}

export function dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecCapacityReservationSpecificationToTerraform(struct?: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecCapacityReservationSpecification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capacity_reservation_preference: cdktf.stringToTerraform(struct!.capacityReservationPreference),
    capacity_reservation_target: dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecCapacityReservationSpecificationCapacityReservationTargetToTerraform(struct!.capacityReservationTarget),
  }
}


export function dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecCapacityReservationSpecificationToHclTerraform(struct?: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecCapacityReservationSpecification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capacity_reservation_preference: {
      value: cdktf.stringToHclTerraform(struct!.capacityReservationPreference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    capacity_reservation_target: {
      value: dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecCapacityReservationSpecificationCapacityReservationTargetToHclTerraform(struct!.capacityReservationTarget),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecCapacityReservationSpecificationCapacityReservationTarget",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecCapacityReservationSpecificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecCapacityReservationSpecification | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capacityReservationPreference !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacityReservationPreference = this._capacityReservationPreference;
    }
    if (this._capacityReservationTarget?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacityReservationTarget = this._capacityReservationTarget?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecCapacityReservationSpecification | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._capacityReservationPreference = undefined;
      this._capacityReservationTarget.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._capacityReservationPreference = value.capacityReservationPreference;
      this._capacityReservationTarget.internalValue = value.capacityReservationTarget;
    }
  }

  // capacity_reservation_preference - computed: false, optional: true, required: false
  private _capacityReservationPreference?: string; 
  public get capacityReservationPreference() {
    return this.getStringAttribute('capacity_reservation_preference');
  }
  public set capacityReservationPreference(value: string) {
    this._capacityReservationPreference = value;
  }
  public resetCapacityReservationPreference() {
    this._capacityReservationPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityReservationPreferenceInput() {
    return this._capacityReservationPreference;
  }

  // capacity_reservation_target - computed: false, optional: true, required: false
  private _capacityReservationTarget = new DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecCapacityReservationSpecificationCapacityReservationTargetOutputReference(this, "capacity_reservation_target");
  public get capacityReservationTarget() {
    return this._capacityReservationTarget;
  }
  public putCapacityReservationTarget(value: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecCapacityReservationSpecificationCapacityReservationTarget) {
    this._capacityReservationTarget.internalValue = value;
  }
  public resetCapacityReservationTarget() {
    this._capacityReservationTarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityReservationTargetInput() {
    return this._capacityReservationTarget.internalValue;
  }
}
export interface DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecCpuOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#core_count DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#core_count}
  */
  readonly coreCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#threads_per_core DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#threads_per_core}
  */
  readonly threadsPerCore?: number;
}

export function dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecCpuOptionsToTerraform(struct?: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecCpuOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    core_count: cdktf.numberToTerraform(struct!.coreCount),
    threads_per_core: cdktf.numberToTerraform(struct!.threadsPerCore),
  }
}


export function dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecCpuOptionsToHclTerraform(struct?: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecCpuOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    core_count: {
      value: cdktf.numberToHclTerraform(struct!.coreCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threads_per_core: {
      value: cdktf.numberToHclTerraform(struct!.threadsPerCore),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecCpuOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecCpuOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._coreCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.coreCount = this._coreCount;
    }
    if (this._threadsPerCore !== undefined) {
      hasAnyValues = true;
      internalValueResult.threadsPerCore = this._threadsPerCore;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecCpuOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._coreCount = undefined;
      this._threadsPerCore = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._coreCount = value.coreCount;
      this._threadsPerCore = value.threadsPerCore;
    }
  }

  // core_count - computed: false, optional: true, required: false
  private _coreCount?: number; 
  public get coreCount() {
    return this.getNumberAttribute('core_count');
  }
  public set coreCount(value: number) {
    this._coreCount = value;
  }
  public resetCoreCount() {
    this._coreCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coreCountInput() {
    return this._coreCount;
  }

  // threads_per_core - computed: false, optional: true, required: false
  private _threadsPerCore?: number; 
  public get threadsPerCore() {
    return this.getNumberAttribute('threads_per_core');
  }
  public set threadsPerCore(value: number) {
    this._threadsPerCore = value;
  }
  public resetThreadsPerCore() {
    this._threadsPerCore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threadsPerCoreInput() {
    return this._threadsPerCore;
  }
}
export interface DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecCreditSpecification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#cpu_credits DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#cpu_credits}
  */
  readonly cpuCredits?: string;
}

export function dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecCreditSpecificationToTerraform(struct?: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecCreditSpecification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_credits: cdktf.stringToTerraform(struct!.cpuCredits),
  }
}


export function dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecCreditSpecificationToHclTerraform(struct?: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecCreditSpecification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu_credits: {
      value: cdktf.stringToHclTerraform(struct!.cpuCredits),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecCreditSpecificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecCreditSpecification | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuCredits !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuCredits = this._cpuCredits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecCreditSpecification | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpuCredits = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cpuCredits = value.cpuCredits;
    }
  }

  // cpu_credits - computed: false, optional: true, required: false
  private _cpuCredits?: string; 
  public get cpuCredits() {
    return this.getStringAttribute('cpu_credits');
  }
  public set cpuCredits(value: string) {
    this._cpuCredits = value;
  }
  public resetCpuCredits() {
    this._cpuCredits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuCreditsInput() {
    return this._cpuCredits;
  }
}
export interface DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecElasticGpuSpecification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#type_ DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#type_}
  */
  readonly type?: string;
}

export function dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecElasticGpuSpecificationToTerraform(struct?: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecElasticGpuSpecification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type_: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecElasticGpuSpecificationToHclTerraform(struct?: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecElasticGpuSpecification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type_: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecElasticGpuSpecificationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecElasticGpuSpecification | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecElasticGpuSpecification | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
    }
  }

  // type_ - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type_');
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
}

export class DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecElasticGpuSpecificationList extends cdktf.ComplexList {
  public internalValue? : DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecElasticGpuSpecification[] | cdktf.IResolvable

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
  public get(index: number): DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecElasticGpuSpecificationOutputReference {
    return new DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecElasticGpuSpecificationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecElasticInferenceAccelerators {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#count DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#count}
  */
  readonly count?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#type_ DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#type_}
  */
  readonly type?: string;
}

export function dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecElasticInferenceAcceleratorsToTerraform(struct?: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecElasticInferenceAccelerators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    type_: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecElasticInferenceAcceleratorsToHclTerraform(struct?: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecElasticInferenceAccelerators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type_: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecElasticInferenceAcceleratorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecElasticInferenceAccelerators | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecElasticInferenceAccelerators | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
      this._type = value.type;
    }
  }

  // count - computed: false, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // type_ - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type_');
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
}

export class DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecElasticInferenceAcceleratorsList extends cdktf.ComplexList {
  public internalValue? : DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecElasticInferenceAccelerators[] | cdktf.IResolvable

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
  public get(index: number): DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecElasticInferenceAcceleratorsOutputReference {
    return new DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecElasticInferenceAcceleratorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecEnclaveOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#enabled DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecEnclaveOptionsToTerraform(struct?: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecEnclaveOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecEnclaveOptionsToHclTerraform(struct?: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecEnclaveOptions | cdktf.IResolvable): any {
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

export class DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecEnclaveOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecEnclaveOptions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecEnclaveOptions | cdktf.IResolvable | undefined) {
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
export interface DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecHibernationOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#configured DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#configured}
  */
  readonly configured?: boolean | cdktf.IResolvable;
}

export function dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecHibernationOptionsToTerraform(struct?: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecHibernationOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configured: cdktf.booleanToTerraform(struct!.configured),
  }
}


export function dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecHibernationOptionsToHclTerraform(struct?: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecHibernationOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configured: {
      value: cdktf.booleanToHclTerraform(struct!.configured),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecHibernationOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecHibernationOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configured !== undefined) {
      hasAnyValues = true;
      internalValueResult.configured = this._configured;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecHibernationOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configured = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configured = value.configured;
    }
  }

  // configured - computed: false, optional: true, required: false
  private _configured?: boolean | cdktf.IResolvable; 
  public get configured() {
    return this.getBooleanAttribute('configured');
  }
  public set configured(value: boolean | cdktf.IResolvable) {
    this._configured = value;
  }
  public resetConfigured() {
    this._configured = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configuredInput() {
    return this._configured;
  }
}
export interface DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecIamInstanceProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#arn DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#arn}
  */
  readonly arn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#name DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecIamInstanceProfileToTerraform(struct?: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecIamInstanceProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecIamInstanceProfileToHclTerraform(struct?: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecIamInstanceProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    arn: {
      value: cdktf.stringToHclTerraform(struct!.arn),
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

export class DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecIamInstanceProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecIamInstanceProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecIamInstanceProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arn = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arn = value.arn;
      this._name = value.name;
    }
  }

  // arn - computed: false, optional: true, required: false
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  public resetArn() {
    this._arn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
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
export interface DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecInstanceMarketOptionsSpotOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#block_duration_minutes DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#block_duration_minutes}
  */
  readonly blockDurationMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#instance_interruption_behavior DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#instance_interruption_behavior}
  */
  readonly instanceInterruptionBehavior?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#max_price DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#max_price}
  */
  readonly maxPrice?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#spot_instance_type DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#spot_instance_type}
  */
  readonly spotInstanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#valid_until DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#valid_until}
  */
  readonly validUntil?: string;
}

export function dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecInstanceMarketOptionsSpotOptionsToTerraform(struct?: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecInstanceMarketOptionsSpotOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_duration_minutes: cdktf.numberToTerraform(struct!.blockDurationMinutes),
    instance_interruption_behavior: cdktf.stringToTerraform(struct!.instanceInterruptionBehavior),
    max_price: cdktf.stringToTerraform(struct!.maxPrice),
    spot_instance_type: cdktf.stringToTerraform(struct!.spotInstanceType),
    valid_until: cdktf.stringToTerraform(struct!.validUntil),
  }
}


export function dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecInstanceMarketOptionsSpotOptionsToHclTerraform(struct?: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecInstanceMarketOptionsSpotOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block_duration_minutes: {
      value: cdktf.numberToHclTerraform(struct!.blockDurationMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_interruption_behavior: {
      value: cdktf.stringToHclTerraform(struct!.instanceInterruptionBehavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_price: {
      value: cdktf.stringToHclTerraform(struct!.maxPrice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spot_instance_type: {
      value: cdktf.stringToHclTerraform(struct!.spotInstanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    valid_until: {
      value: cdktf.stringToHclTerraform(struct!.validUntil),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecInstanceMarketOptionsSpotOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecInstanceMarketOptionsSpotOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockDurationMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockDurationMinutes = this._blockDurationMinutes;
    }
    if (this._instanceInterruptionBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceInterruptionBehavior = this._instanceInterruptionBehavior;
    }
    if (this._maxPrice !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPrice = this._maxPrice;
    }
    if (this._spotInstanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.spotInstanceType = this._spotInstanceType;
    }
    if (this._validUntil !== undefined) {
      hasAnyValues = true;
      internalValueResult.validUntil = this._validUntil;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecInstanceMarketOptionsSpotOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._blockDurationMinutes = undefined;
      this._instanceInterruptionBehavior = undefined;
      this._maxPrice = undefined;
      this._spotInstanceType = undefined;
      this._validUntil = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._blockDurationMinutes = value.blockDurationMinutes;
      this._instanceInterruptionBehavior = value.instanceInterruptionBehavior;
      this._maxPrice = value.maxPrice;
      this._spotInstanceType = value.spotInstanceType;
      this._validUntil = value.validUntil;
    }
  }

  // block_duration_minutes - computed: false, optional: true, required: false
  private _blockDurationMinutes?: number; 
  public get blockDurationMinutes() {
    return this.getNumberAttribute('block_duration_minutes');
  }
  public set blockDurationMinutes(value: number) {
    this._blockDurationMinutes = value;
  }
  public resetBlockDurationMinutes() {
    this._blockDurationMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockDurationMinutesInput() {
    return this._blockDurationMinutes;
  }

  // instance_interruption_behavior - computed: false, optional: true, required: false
  private _instanceInterruptionBehavior?: string; 
  public get instanceInterruptionBehavior() {
    return this.getStringAttribute('instance_interruption_behavior');
  }
  public set instanceInterruptionBehavior(value: string) {
    this._instanceInterruptionBehavior = value;
  }
  public resetInstanceInterruptionBehavior() {
    this._instanceInterruptionBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceInterruptionBehaviorInput() {
    return this._instanceInterruptionBehavior;
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

  // spot_instance_type - computed: false, optional: true, required: false
  private _spotInstanceType?: string; 
  public get spotInstanceType() {
    return this.getStringAttribute('spot_instance_type');
  }
  public set spotInstanceType(value: string) {
    this._spotInstanceType = value;
  }
  public resetSpotInstanceType() {
    this._spotInstanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotInstanceTypeInput() {
    return this._spotInstanceType;
  }

  // valid_until - computed: false, optional: true, required: false
  private _validUntil?: string; 
  public get validUntil() {
    return this.getStringAttribute('valid_until');
  }
  public set validUntil(value: string) {
    this._validUntil = value;
  }
  public resetValidUntil() {
    this._validUntil = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validUntilInput() {
    return this._validUntil;
  }
}
export interface DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecInstanceMarketOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#market_type DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#market_type}
  */
  readonly marketType?: string;
  /**
  * The options for Spot Instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#spot_options DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#spot_options}
  */
  readonly spotOptions?: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecInstanceMarketOptionsSpotOptions;
}

export function dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecInstanceMarketOptionsToTerraform(struct?: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecInstanceMarketOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    market_type: cdktf.stringToTerraform(struct!.marketType),
    spot_options: dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecInstanceMarketOptionsSpotOptionsToTerraform(struct!.spotOptions),
  }
}


export function dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecInstanceMarketOptionsToHclTerraform(struct?: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecInstanceMarketOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    market_type: {
      value: cdktf.stringToHclTerraform(struct!.marketType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spot_options: {
      value: dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecInstanceMarketOptionsSpotOptionsToHclTerraform(struct!.spotOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecInstanceMarketOptionsSpotOptions",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecInstanceMarketOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecInstanceMarketOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._marketType !== undefined) {
      hasAnyValues = true;
      internalValueResult.marketType = this._marketType;
    }
    if (this._spotOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spotOptions = this._spotOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecInstanceMarketOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._marketType = undefined;
      this._spotOptions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._marketType = value.marketType;
      this._spotOptions.internalValue = value.spotOptions;
    }
  }

  // market_type - computed: false, optional: true, required: false
  private _marketType?: string; 
  public get marketType() {
    return this.getStringAttribute('market_type');
  }
  public set marketType(value: string) {
    this._marketType = value;
  }
  public resetMarketType() {
    this._marketType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get marketTypeInput() {
    return this._marketType;
  }

  // spot_options - computed: false, optional: true, required: false
  private _spotOptions = new DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecInstanceMarketOptionsSpotOptionsOutputReference(this, "spot_options");
  public get spotOptions() {
    return this._spotOptions;
  }
  public putSpotOptions(value: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecInstanceMarketOptionsSpotOptions) {
    this._spotOptions.internalValue = value;
  }
  public resetSpotOptions() {
    this._spotOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotOptionsInput() {
    return this._spotOptions.internalValue;
  }
}
export interface DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecIpv6Addresses {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#ipv6_address DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#ipv6_address}
  */
  readonly ipv6Address?: string;
}

export function dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecIpv6AddressesToTerraform(struct?: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecIpv6Addresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv6_address: cdktf.stringToTerraform(struct!.ipv6Address),
  }
}


export function dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecIpv6AddressesToHclTerraform(struct?: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecIpv6Addresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv6_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecIpv6AddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecIpv6Addresses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Address = this._ipv6Address;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecIpv6Addresses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv6Address = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv6Address = value.ipv6Address;
    }
  }

  // ipv6_address - computed: false, optional: true, required: false
  private _ipv6Address?: string; 
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }
  public set ipv6Address(value: string) {
    this._ipv6Address = value;
  }
  public resetIpv6Address() {
    this._ipv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressInput() {
    return this._ipv6Address;
  }
}

export class DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecIpv6AddressesList extends cdktf.ComplexList {
  public internalValue? : DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecIpv6Addresses[] | cdktf.IResolvable

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
  public get(index: number): DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecIpv6AddressesOutputReference {
    return new DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecIpv6AddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecLaunchTemplate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#launch_template_id DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#launch_template_id}
  */
  readonly launchTemplateId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#launch_template_name DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#launch_template_name}
  */
  readonly launchTemplateName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#version DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#version}
  */
  readonly version?: string;
}

export function dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecLaunchTemplateToTerraform(struct?: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecLaunchTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    launch_template_id: cdktf.stringToTerraform(struct!.launchTemplateId),
    launch_template_name: cdktf.stringToTerraform(struct!.launchTemplateName),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecLaunchTemplateToHclTerraform(struct?: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecLaunchTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    launch_template_id: {
      value: cdktf.stringToHclTerraform(struct!.launchTemplateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    launch_template_name: {
      value: cdktf.stringToHclTerraform(struct!.launchTemplateName),
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

export class DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecLaunchTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecLaunchTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._launchTemplateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.launchTemplateId = this._launchTemplateId;
    }
    if (this._launchTemplateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.launchTemplateName = this._launchTemplateName;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecLaunchTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._launchTemplateId = undefined;
      this._launchTemplateName = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._launchTemplateId = value.launchTemplateId;
      this._launchTemplateName = value.launchTemplateName;
      this._version = value.version;
    }
  }

  // launch_template_id - computed: false, optional: true, required: false
  private _launchTemplateId?: string; 
  public get launchTemplateId() {
    return this.getStringAttribute('launch_template_id');
  }
  public set launchTemplateId(value: string) {
    this._launchTemplateId = value;
  }
  public resetLaunchTemplateId() {
    this._launchTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchTemplateIdInput() {
    return this._launchTemplateId;
  }

  // launch_template_name - computed: false, optional: true, required: false
  private _launchTemplateName?: string; 
  public get launchTemplateName() {
    return this.getStringAttribute('launch_template_name');
  }
  public set launchTemplateName(value: string) {
    this._launchTemplateName = value;
  }
  public resetLaunchTemplateName() {
    this._launchTemplateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchTemplateNameInput() {
    return this._launchTemplateName;
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
export interface DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecLicenseSpecifications {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#license_configuration_arn DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#license_configuration_arn}
  */
  readonly licenseConfigurationArn?: string;
}

export function dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecLicenseSpecificationsToTerraform(struct?: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecLicenseSpecifications | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    license_configuration_arn: cdktf.stringToTerraform(struct!.licenseConfigurationArn),
  }
}


export function dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecLicenseSpecificationsToHclTerraform(struct?: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecLicenseSpecifications | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    license_configuration_arn: {
      value: cdktf.stringToHclTerraform(struct!.licenseConfigurationArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecLicenseSpecificationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecLicenseSpecifications | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._licenseConfigurationArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.licenseConfigurationArn = this._licenseConfigurationArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecLicenseSpecifications | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._licenseConfigurationArn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._licenseConfigurationArn = value.licenseConfigurationArn;
    }
  }

  // license_configuration_arn - computed: false, optional: true, required: false
  private _licenseConfigurationArn?: string; 
  public get licenseConfigurationArn() {
    return this.getStringAttribute('license_configuration_arn');
  }
  public set licenseConfigurationArn(value: string) {
    this._licenseConfigurationArn = value;
  }
  public resetLicenseConfigurationArn() {
    this._licenseConfigurationArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseConfigurationArnInput() {
    return this._licenseConfigurationArn;
  }
}

export class DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecLicenseSpecificationsList extends cdktf.ComplexList {
  public internalValue? : DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecLicenseSpecifications[] | cdktf.IResolvable

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
  public get(index: number): DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecLicenseSpecificationsOutputReference {
    return new DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecLicenseSpecificationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecMaintenanceOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#auto_recovery DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#auto_recovery}
  */
  readonly autoRecovery?: string;
}

export function dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecMaintenanceOptionsToTerraform(struct?: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecMaintenanceOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_recovery: cdktf.stringToTerraform(struct!.autoRecovery),
  }
}


export function dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecMaintenanceOptionsToHclTerraform(struct?: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecMaintenanceOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_recovery: {
      value: cdktf.stringToHclTerraform(struct!.autoRecovery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecMaintenanceOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecMaintenanceOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoRecovery !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoRecovery = this._autoRecovery;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecMaintenanceOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoRecovery = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoRecovery = value.autoRecovery;
    }
  }

  // auto_recovery - computed: false, optional: true, required: false
  private _autoRecovery?: string; 
  public get autoRecovery() {
    return this.getStringAttribute('auto_recovery');
  }
  public set autoRecovery(value: string) {
    this._autoRecovery = value;
  }
  public resetAutoRecovery() {
    this._autoRecovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRecoveryInput() {
    return this._autoRecovery;
  }
}
export interface DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecMetadataOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#http_endpoint DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#http_endpoint}
  */
  readonly httpEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#http_protocol_i_pv6 DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#http_protocol_i_pv6}
  */
  readonly httpProtocolIPv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#http_put_response_hop_limit DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#http_put_response_hop_limit}
  */
  readonly httpPutResponseHopLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#http_tokens DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#http_tokens}
  */
  readonly httpTokens?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#instance_metadata_tags DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#instance_metadata_tags}
  */
  readonly instanceMetadataTags?: string;
}

export function dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecMetadataOptionsToTerraform(struct?: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecMetadataOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_endpoint: cdktf.stringToTerraform(struct!.httpEndpoint),
    http_protocol_i_pv6: cdktf.stringToTerraform(struct!.httpProtocolIPv6),
    http_put_response_hop_limit: cdktf.numberToTerraform(struct!.httpPutResponseHopLimit),
    http_tokens: cdktf.stringToTerraform(struct!.httpTokens),
    instance_metadata_tags: cdktf.stringToTerraform(struct!.instanceMetadataTags),
  }
}


export function dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecMetadataOptionsToHclTerraform(struct?: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecMetadataOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.httpEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_protocol_i_pv6: {
      value: cdktf.stringToHclTerraform(struct!.httpProtocolIPv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_put_response_hop_limit: {
      value: cdktf.numberToHclTerraform(struct!.httpPutResponseHopLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_tokens: {
      value: cdktf.stringToHclTerraform(struct!.httpTokens),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_metadata_tags: {
      value: cdktf.stringToHclTerraform(struct!.instanceMetadataTags),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecMetadataOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecMetadataOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpEndpoint = this._httpEndpoint;
    }
    if (this._httpProtocolIPv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpProtocolIPv6 = this._httpProtocolIPv6;
    }
    if (this._httpPutResponseHopLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpPutResponseHopLimit = this._httpPutResponseHopLimit;
    }
    if (this._httpTokens !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpTokens = this._httpTokens;
    }
    if (this._instanceMetadataTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceMetadataTags = this._instanceMetadataTags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecMetadataOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._httpEndpoint = undefined;
      this._httpProtocolIPv6 = undefined;
      this._httpPutResponseHopLimit = undefined;
      this._httpTokens = undefined;
      this._instanceMetadataTags = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._httpEndpoint = value.httpEndpoint;
      this._httpProtocolIPv6 = value.httpProtocolIPv6;
      this._httpPutResponseHopLimit = value.httpPutResponseHopLimit;
      this._httpTokens = value.httpTokens;
      this._instanceMetadataTags = value.instanceMetadataTags;
    }
  }

  // http_endpoint - computed: false, optional: true, required: false
  private _httpEndpoint?: string; 
  public get httpEndpoint() {
    return this.getStringAttribute('http_endpoint');
  }
  public set httpEndpoint(value: string) {
    this._httpEndpoint = value;
  }
  public resetHttpEndpoint() {
    this._httpEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpEndpointInput() {
    return this._httpEndpoint;
  }

  // http_protocol_i_pv6 - computed: false, optional: true, required: false
  private _httpProtocolIPv6?: string; 
  public get httpProtocolIPv6() {
    return this.getStringAttribute('http_protocol_i_pv6');
  }
  public set httpProtocolIPv6(value: string) {
    this._httpProtocolIPv6 = value;
  }
  public resetHttpProtocolIPv6() {
    this._httpProtocolIPv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpProtocolIPv6Input() {
    return this._httpProtocolIPv6;
  }

  // http_put_response_hop_limit - computed: false, optional: true, required: false
  private _httpPutResponseHopLimit?: number; 
  public get httpPutResponseHopLimit() {
    return this.getNumberAttribute('http_put_response_hop_limit');
  }
  public set httpPutResponseHopLimit(value: number) {
    this._httpPutResponseHopLimit = value;
  }
  public resetHttpPutResponseHopLimit() {
    this._httpPutResponseHopLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpPutResponseHopLimitInput() {
    return this._httpPutResponseHopLimit;
  }

  // http_tokens - computed: false, optional: true, required: false
  private _httpTokens?: string; 
  public get httpTokens() {
    return this.getStringAttribute('http_tokens');
  }
  public set httpTokens(value: string) {
    this._httpTokens = value;
  }
  public resetHttpTokens() {
    this._httpTokens = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpTokensInput() {
    return this._httpTokens;
  }

  // instance_metadata_tags - computed: false, optional: true, required: false
  private _instanceMetadataTags?: string; 
  public get instanceMetadataTags() {
    return this.getStringAttribute('instance_metadata_tags');
  }
  public set instanceMetadataTags(value: string) {
    this._instanceMetadataTags = value;
  }
  public resetInstanceMetadataTags() {
    this._instanceMetadataTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceMetadataTagsInput() {
    return this._instanceMetadataTags;
  }
}
export interface DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecMonitoring {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#enabled DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecMonitoringToTerraform(struct?: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecMonitoring | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecMonitoringToHclTerraform(struct?: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecMonitoring | cdktf.IResolvable): any {
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

export class DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecMonitoringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecMonitoring | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecMonitoring | cdktf.IResolvable | undefined) {
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
export interface DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecNetworkInterfacesIpv4Prefixes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#ipv4_prefix DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#ipv4_prefix}
  */
  readonly ipv4Prefix?: string;
}

export function dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecNetworkInterfacesIpv4PrefixesToTerraform(struct?: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecNetworkInterfacesIpv4Prefixes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4_prefix: cdktf.stringToTerraform(struct!.ipv4Prefix),
  }
}


export function dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecNetworkInterfacesIpv4PrefixesToHclTerraform(struct?: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecNetworkInterfacesIpv4Prefixes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4_prefix: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecNetworkInterfacesIpv4PrefixesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecNetworkInterfacesIpv4Prefixes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4Prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Prefix = this._ipv4Prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecNetworkInterfacesIpv4Prefixes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4Prefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4Prefix = value.ipv4Prefix;
    }
  }

  // ipv4_prefix - computed: false, optional: true, required: false
  private _ipv4Prefix?: string; 
  public get ipv4Prefix() {
    return this.getStringAttribute('ipv4_prefix');
  }
  public set ipv4Prefix(value: string) {
    this._ipv4Prefix = value;
  }
  public resetIpv4Prefix() {
    this._ipv4Prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4PrefixInput() {
    return this._ipv4Prefix;
  }
}

export class DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecNetworkInterfacesIpv4PrefixesList extends cdktf.ComplexList {
  public internalValue? : DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecNetworkInterfacesIpv4Prefixes[] | cdktf.IResolvable

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
  public get(index: number): DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecNetworkInterfacesIpv4PrefixesOutputReference {
    return new DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecNetworkInterfacesIpv4PrefixesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecNetworkInterfacesIpv6Addresses {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#ipv6_address DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#ipv6_address}
  */
  readonly ipv6Address?: string;
}

export function dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecNetworkInterfacesIpv6AddressesToTerraform(struct?: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecNetworkInterfacesIpv6Addresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv6_address: cdktf.stringToTerraform(struct!.ipv6Address),
  }
}


export function dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecNetworkInterfacesIpv6AddressesToHclTerraform(struct?: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecNetworkInterfacesIpv6Addresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv6_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecNetworkInterfacesIpv6AddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecNetworkInterfacesIpv6Addresses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Address = this._ipv6Address;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecNetworkInterfacesIpv6Addresses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv6Address = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv6Address = value.ipv6Address;
    }
  }

  // ipv6_address - computed: false, optional: true, required: false
  private _ipv6Address?: string; 
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }
  public set ipv6Address(value: string) {
    this._ipv6Address = value;
  }
  public resetIpv6Address() {
    this._ipv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressInput() {
    return this._ipv6Address;
  }
}

export class DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecNetworkInterfacesIpv6AddressesList extends cdktf.ComplexList {
  public internalValue? : DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecNetworkInterfacesIpv6Addresses[] | cdktf.IResolvable

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
  public get(index: number): DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecNetworkInterfacesIpv6AddressesOutputReference {
    return new DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecNetworkInterfacesIpv6AddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecNetworkInterfacesIpv6Prefixes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#ipv6_prefix DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#ipv6_prefix}
  */
  readonly ipv6Prefix?: string;
}

export function dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecNetworkInterfacesIpv6PrefixesToTerraform(struct?: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecNetworkInterfacesIpv6Prefixes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv6_prefix: cdktf.stringToTerraform(struct!.ipv6Prefix),
  }
}


export function dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecNetworkInterfacesIpv6PrefixesToHclTerraform(struct?: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecNetworkInterfacesIpv6Prefixes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv6_prefix: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecNetworkInterfacesIpv6PrefixesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecNetworkInterfacesIpv6Prefixes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv6Prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Prefix = this._ipv6Prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecNetworkInterfacesIpv6Prefixes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv6Prefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv6Prefix = value.ipv6Prefix;
    }
  }

  // ipv6_prefix - computed: false, optional: true, required: false
  private _ipv6Prefix?: string; 
  public get ipv6Prefix() {
    return this.getStringAttribute('ipv6_prefix');
  }
  public set ipv6Prefix(value: string) {
    this._ipv6Prefix = value;
  }
  public resetIpv6Prefix() {
    this._ipv6Prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PrefixInput() {
    return this._ipv6Prefix;
  }
}

export class DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecNetworkInterfacesIpv6PrefixesList extends cdktf.ComplexList {
  public internalValue? : DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecNetworkInterfacesIpv6Prefixes[] | cdktf.IResolvable

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
  public get(index: number): DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecNetworkInterfacesIpv6PrefixesOutputReference {
    return new DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecNetworkInterfacesIpv6PrefixesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecNetworkInterfacesPrivateIpAddresses {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#primary DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#primary}
  */
  readonly primary?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#private_ip_address DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#private_ip_address}
  */
  readonly privateIpAddress?: string;
}

export function dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecNetworkInterfacesPrivateIpAddressesToTerraform(struct?: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecNetworkInterfacesPrivateIpAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    primary: cdktf.booleanToTerraform(struct!.primary),
    private_ip_address: cdktf.stringToTerraform(struct!.privateIpAddress),
  }
}


export function dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecNetworkInterfacesPrivateIpAddressesToHclTerraform(struct?: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecNetworkInterfacesPrivateIpAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    primary: {
      value: cdktf.booleanToHclTerraform(struct!.primary),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    private_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.privateIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecNetworkInterfacesPrivateIpAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecNetworkInterfacesPrivateIpAddresses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._primary !== undefined) {
      hasAnyValues = true;
      internalValueResult.primary = this._primary;
    }
    if (this._privateIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateIpAddress = this._privateIpAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecNetworkInterfacesPrivateIpAddresses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._primary = undefined;
      this._privateIpAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._primary = value.primary;
      this._privateIpAddress = value.privateIpAddress;
    }
  }

  // primary - computed: false, optional: true, required: false
  private _primary?: boolean | cdktf.IResolvable; 
  public get primary() {
    return this.getBooleanAttribute('primary');
  }
  public set primary(value: boolean | cdktf.IResolvable) {
    this._primary = value;
  }
  public resetPrimary() {
    this._primary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryInput() {
    return this._primary;
  }

  // private_ip_address - computed: false, optional: true, required: false
  private _privateIpAddress?: string; 
  public get privateIpAddress() {
    return this.getStringAttribute('private_ip_address');
  }
  public set privateIpAddress(value: string) {
    this._privateIpAddress = value;
  }
  public resetPrivateIpAddress() {
    this._privateIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpAddressInput() {
    return this._privateIpAddress;
  }
}

export class DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecNetworkInterfacesPrivateIpAddressesList extends cdktf.ComplexList {
  public internalValue? : DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecNetworkInterfacesPrivateIpAddresses[] | cdktf.IResolvable

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
  public get(index: number): DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecNetworkInterfacesPrivateIpAddressesOutputReference {
    return new DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecNetworkInterfacesPrivateIpAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecNetworkInterfaces {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#associate_carrier_ip_address DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#associate_carrier_ip_address}
  */
  readonly associateCarrierIpAddress?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#associate_public_ip_address DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#associate_public_ip_address}
  */
  readonly associatePublicIpAddress?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#delete_on_termination DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#delete_on_termination}
  */
  readonly deleteOnTermination?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#description DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#device_index DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#device_index}
  */
  readonly deviceIndex?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#interface_type DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#interface_type}
  */
  readonly interfaceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#ipv4_prefix_count DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#ipv4_prefix_count}
  */
  readonly ipv4PrefixCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#ipv4_prefixes DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#ipv4_prefixes}
  */
  readonly ipv4Prefixes?: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecNetworkInterfacesIpv4Prefixes[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#ipv6_address_count DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#ipv6_address_count}
  */
  readonly ipv6AddressCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#ipv6_addresses DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#ipv6_addresses}
  */
  readonly ipv6Addresses?: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecNetworkInterfacesIpv6Addresses[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#ipv6_prefix_count DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#ipv6_prefix_count}
  */
  readonly ipv6PrefixCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#ipv6_prefixes DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#ipv6_prefixes}
  */
  readonly ipv6Prefixes?: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecNetworkInterfacesIpv6Prefixes[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#network_card_index DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#network_card_index}
  */
  readonly networkCardIndex?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#network_interface_id DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#network_interface_id}
  */
  readonly networkInterfaceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#private_ip_address DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#private_ip_address}
  */
  readonly privateIpAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#private_ip_addresses DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#private_ip_addresses}
  */
  readonly privateIpAddresses?: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecNetworkInterfacesPrivateIpAddresses[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#secondary_private_ip_address_count DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#secondary_private_ip_address_count}
  */
  readonly secondaryPrivateIpAddressCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#subnet_id DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#subnet_id}
  */
  readonly subnetId?: string;
}

export function dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecNetworkInterfacesToTerraform(struct?: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecNetworkInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    associate_carrier_ip_address: cdktf.booleanToTerraform(struct!.associateCarrierIpAddress),
    associate_public_ip_address: cdktf.booleanToTerraform(struct!.associatePublicIpAddress),
    delete_on_termination: cdktf.booleanToTerraform(struct!.deleteOnTermination),
    description: cdktf.stringToTerraform(struct!.description),
    device_index: cdktf.numberToTerraform(struct!.deviceIndex),
    interface_type: cdktf.stringToTerraform(struct!.interfaceType),
    ipv4_prefix_count: cdktf.numberToTerraform(struct!.ipv4PrefixCount),
    ipv4_prefixes: cdktf.listMapper(dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecNetworkInterfacesIpv4PrefixesToTerraform, false)(struct!.ipv4Prefixes),
    ipv6_address_count: cdktf.numberToTerraform(struct!.ipv6AddressCount),
    ipv6_addresses: cdktf.listMapper(dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecNetworkInterfacesIpv6AddressesToTerraform, false)(struct!.ipv6Addresses),
    ipv6_prefix_count: cdktf.numberToTerraform(struct!.ipv6PrefixCount),
    ipv6_prefixes: cdktf.listMapper(dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecNetworkInterfacesIpv6PrefixesToTerraform, false)(struct!.ipv6Prefixes),
    network_card_index: cdktf.numberToTerraform(struct!.networkCardIndex),
    network_interface_id: cdktf.stringToTerraform(struct!.networkInterfaceId),
    private_ip_address: cdktf.stringToTerraform(struct!.privateIpAddress),
    private_ip_addresses: cdktf.listMapper(dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecNetworkInterfacesPrivateIpAddressesToTerraform, false)(struct!.privateIpAddresses),
    secondary_private_ip_address_count: cdktf.numberToTerraform(struct!.secondaryPrivateIpAddressCount),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
  }
}


export function dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecNetworkInterfacesToHclTerraform(struct?: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecNetworkInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    associate_carrier_ip_address: {
      value: cdktf.booleanToHclTerraform(struct!.associateCarrierIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    associate_public_ip_address: {
      value: cdktf.booleanToHclTerraform(struct!.associatePublicIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    delete_on_termination: {
      value: cdktf.booleanToHclTerraform(struct!.deleteOnTermination),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_index: {
      value: cdktf.numberToHclTerraform(struct!.deviceIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interface_type: {
      value: cdktf.stringToHclTerraform(struct!.interfaceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_prefix_count: {
      value: cdktf.numberToHclTerraform(struct!.ipv4PrefixCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv4_prefixes: {
      value: cdktf.listMapperHcl(dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecNetworkInterfacesIpv4PrefixesToHclTerraform, false)(struct!.ipv4Prefixes),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecNetworkInterfacesIpv4PrefixesList",
    },
    ipv6_address_count: {
      value: cdktf.numberToHclTerraform(struct!.ipv6AddressCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_addresses: {
      value: cdktf.listMapperHcl(dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecNetworkInterfacesIpv6AddressesToHclTerraform, false)(struct!.ipv6Addresses),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecNetworkInterfacesIpv6AddressesList",
    },
    ipv6_prefix_count: {
      value: cdktf.numberToHclTerraform(struct!.ipv6PrefixCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_prefixes: {
      value: cdktf.listMapperHcl(dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecNetworkInterfacesIpv6PrefixesToHclTerraform, false)(struct!.ipv6Prefixes),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecNetworkInterfacesIpv6PrefixesList",
    },
    network_card_index: {
      value: cdktf.numberToHclTerraform(struct!.networkCardIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    network_interface_id: {
      value: cdktf.stringToHclTerraform(struct!.networkInterfaceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.privateIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_ip_addresses: {
      value: cdktf.listMapperHcl(dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecNetworkInterfacesPrivateIpAddressesToHclTerraform, false)(struct!.privateIpAddresses),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecNetworkInterfacesPrivateIpAddressesList",
    },
    secondary_private_ip_address_count: {
      value: cdktf.numberToHclTerraform(struct!.secondaryPrivateIpAddressCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecNetworkInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecNetworkInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._associateCarrierIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.associateCarrierIpAddress = this._associateCarrierIpAddress;
    }
    if (this._associatePublicIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.associatePublicIpAddress = this._associatePublicIpAddress;
    }
    if (this._deleteOnTermination !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteOnTermination = this._deleteOnTermination;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._deviceIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceIndex = this._deviceIndex;
    }
    if (this._interfaceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceType = this._interfaceType;
    }
    if (this._ipv4PrefixCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4PrefixCount = this._ipv4PrefixCount;
    }
    if (this._ipv4Prefixes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Prefixes = this._ipv4Prefixes?.internalValue;
    }
    if (this._ipv6AddressCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6AddressCount = this._ipv6AddressCount;
    }
    if (this._ipv6Addresses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Addresses = this._ipv6Addresses?.internalValue;
    }
    if (this._ipv6PrefixCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6PrefixCount = this._ipv6PrefixCount;
    }
    if (this._ipv6Prefixes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Prefixes = this._ipv6Prefixes?.internalValue;
    }
    if (this._networkCardIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkCardIndex = this._networkCardIndex;
    }
    if (this._networkInterfaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkInterfaceId = this._networkInterfaceId;
    }
    if (this._privateIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateIpAddress = this._privateIpAddress;
    }
    if (this._privateIpAddresses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateIpAddresses = this._privateIpAddresses?.internalValue;
    }
    if (this._secondaryPrivateIpAddressCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryPrivateIpAddressCount = this._secondaryPrivateIpAddressCount;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecNetworkInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._associateCarrierIpAddress = undefined;
      this._associatePublicIpAddress = undefined;
      this._deleteOnTermination = undefined;
      this._description = undefined;
      this._deviceIndex = undefined;
      this._interfaceType = undefined;
      this._ipv4PrefixCount = undefined;
      this._ipv4Prefixes.internalValue = undefined;
      this._ipv6AddressCount = undefined;
      this._ipv6Addresses.internalValue = undefined;
      this._ipv6PrefixCount = undefined;
      this._ipv6Prefixes.internalValue = undefined;
      this._networkCardIndex = undefined;
      this._networkInterfaceId = undefined;
      this._privateIpAddress = undefined;
      this._privateIpAddresses.internalValue = undefined;
      this._secondaryPrivateIpAddressCount = undefined;
      this._subnetId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._associateCarrierIpAddress = value.associateCarrierIpAddress;
      this._associatePublicIpAddress = value.associatePublicIpAddress;
      this._deleteOnTermination = value.deleteOnTermination;
      this._description = value.description;
      this._deviceIndex = value.deviceIndex;
      this._interfaceType = value.interfaceType;
      this._ipv4PrefixCount = value.ipv4PrefixCount;
      this._ipv4Prefixes.internalValue = value.ipv4Prefixes;
      this._ipv6AddressCount = value.ipv6AddressCount;
      this._ipv6Addresses.internalValue = value.ipv6Addresses;
      this._ipv6PrefixCount = value.ipv6PrefixCount;
      this._ipv6Prefixes.internalValue = value.ipv6Prefixes;
      this._networkCardIndex = value.networkCardIndex;
      this._networkInterfaceId = value.networkInterfaceId;
      this._privateIpAddress = value.privateIpAddress;
      this._privateIpAddresses.internalValue = value.privateIpAddresses;
      this._secondaryPrivateIpAddressCount = value.secondaryPrivateIpAddressCount;
      this._subnetId = value.subnetId;
    }
  }

  // associate_carrier_ip_address - computed: false, optional: true, required: false
  private _associateCarrierIpAddress?: boolean | cdktf.IResolvable; 
  public get associateCarrierIpAddress() {
    return this.getBooleanAttribute('associate_carrier_ip_address');
  }
  public set associateCarrierIpAddress(value: boolean | cdktf.IResolvable) {
    this._associateCarrierIpAddress = value;
  }
  public resetAssociateCarrierIpAddress() {
    this._associateCarrierIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associateCarrierIpAddressInput() {
    return this._associateCarrierIpAddress;
  }

  // associate_public_ip_address - computed: false, optional: true, required: false
  private _associatePublicIpAddress?: boolean | cdktf.IResolvable; 
  public get associatePublicIpAddress() {
    return this.getBooleanAttribute('associate_public_ip_address');
  }
  public set associatePublicIpAddress(value: boolean | cdktf.IResolvable) {
    this._associatePublicIpAddress = value;
  }
  public resetAssociatePublicIpAddress() {
    this._associatePublicIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associatePublicIpAddressInput() {
    return this._associatePublicIpAddress;
  }

  // delete_on_termination - computed: false, optional: true, required: false
  private _deleteOnTermination?: boolean | cdktf.IResolvable; 
  public get deleteOnTermination() {
    return this.getBooleanAttribute('delete_on_termination');
  }
  public set deleteOnTermination(value: boolean | cdktf.IResolvable) {
    this._deleteOnTermination = value;
  }
  public resetDeleteOnTermination() {
    this._deleteOnTermination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteOnTerminationInput() {
    return this._deleteOnTermination;
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

  // device_index - computed: false, optional: true, required: false
  private _deviceIndex?: number; 
  public get deviceIndex() {
    return this.getNumberAttribute('device_index');
  }
  public set deviceIndex(value: number) {
    this._deviceIndex = value;
  }
  public resetDeviceIndex() {
    this._deviceIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIndexInput() {
    return this._deviceIndex;
  }

  // interface_type - computed: false, optional: true, required: false
  private _interfaceType?: string; 
  public get interfaceType() {
    return this.getStringAttribute('interface_type');
  }
  public set interfaceType(value: string) {
    this._interfaceType = value;
  }
  public resetInterfaceType() {
    this._interfaceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceTypeInput() {
    return this._interfaceType;
  }

  // ipv4_prefix_count - computed: false, optional: true, required: false
  private _ipv4PrefixCount?: number; 
  public get ipv4PrefixCount() {
    return this.getNumberAttribute('ipv4_prefix_count');
  }
  public set ipv4PrefixCount(value: number) {
    this._ipv4PrefixCount = value;
  }
  public resetIpv4PrefixCount() {
    this._ipv4PrefixCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4PrefixCountInput() {
    return this._ipv4PrefixCount;
  }

  // ipv4_prefixes - computed: false, optional: true, required: false
  private _ipv4Prefixes = new DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecNetworkInterfacesIpv4PrefixesList(this, "ipv4_prefixes", false);
  public get ipv4Prefixes() {
    return this._ipv4Prefixes;
  }
  public putIpv4Prefixes(value: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecNetworkInterfacesIpv4Prefixes[] | cdktf.IResolvable) {
    this._ipv4Prefixes.internalValue = value;
  }
  public resetIpv4Prefixes() {
    this._ipv4Prefixes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4PrefixesInput() {
    return this._ipv4Prefixes.internalValue;
  }

  // ipv6_address_count - computed: false, optional: true, required: false
  private _ipv6AddressCount?: number; 
  public get ipv6AddressCount() {
    return this.getNumberAttribute('ipv6_address_count');
  }
  public set ipv6AddressCount(value: number) {
    this._ipv6AddressCount = value;
  }
  public resetIpv6AddressCount() {
    this._ipv6AddressCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressCountInput() {
    return this._ipv6AddressCount;
  }

  // ipv6_addresses - computed: false, optional: true, required: false
  private _ipv6Addresses = new DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecNetworkInterfacesIpv6AddressesList(this, "ipv6_addresses", false);
  public get ipv6Addresses() {
    return this._ipv6Addresses;
  }
  public putIpv6Addresses(value: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecNetworkInterfacesIpv6Addresses[] | cdktf.IResolvable) {
    this._ipv6Addresses.internalValue = value;
  }
  public resetIpv6Addresses() {
    this._ipv6Addresses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressesInput() {
    return this._ipv6Addresses.internalValue;
  }

  // ipv6_prefix_count - computed: false, optional: true, required: false
  private _ipv6PrefixCount?: number; 
  public get ipv6PrefixCount() {
    return this.getNumberAttribute('ipv6_prefix_count');
  }
  public set ipv6PrefixCount(value: number) {
    this._ipv6PrefixCount = value;
  }
  public resetIpv6PrefixCount() {
    this._ipv6PrefixCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PrefixCountInput() {
    return this._ipv6PrefixCount;
  }

  // ipv6_prefixes - computed: false, optional: true, required: false
  private _ipv6Prefixes = new DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecNetworkInterfacesIpv6PrefixesList(this, "ipv6_prefixes", false);
  public get ipv6Prefixes() {
    return this._ipv6Prefixes;
  }
  public putIpv6Prefixes(value: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecNetworkInterfacesIpv6Prefixes[] | cdktf.IResolvable) {
    this._ipv6Prefixes.internalValue = value;
  }
  public resetIpv6Prefixes() {
    this._ipv6Prefixes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PrefixesInput() {
    return this._ipv6Prefixes.internalValue;
  }

  // network_card_index - computed: false, optional: true, required: false
  private _networkCardIndex?: number; 
  public get networkCardIndex() {
    return this.getNumberAttribute('network_card_index');
  }
  public set networkCardIndex(value: number) {
    this._networkCardIndex = value;
  }
  public resetNetworkCardIndex() {
    this._networkCardIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkCardIndexInput() {
    return this._networkCardIndex;
  }

  // network_interface_id - computed: false, optional: true, required: false
  private _networkInterfaceId?: string; 
  public get networkInterfaceId() {
    return this.getStringAttribute('network_interface_id');
  }
  public set networkInterfaceId(value: string) {
    this._networkInterfaceId = value;
  }
  public resetNetworkInterfaceId() {
    this._networkInterfaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceIdInput() {
    return this._networkInterfaceId;
  }

  // private_ip_address - computed: false, optional: true, required: false
  private _privateIpAddress?: string; 
  public get privateIpAddress() {
    return this.getStringAttribute('private_ip_address');
  }
  public set privateIpAddress(value: string) {
    this._privateIpAddress = value;
  }
  public resetPrivateIpAddress() {
    this._privateIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpAddressInput() {
    return this._privateIpAddress;
  }

  // private_ip_addresses - computed: false, optional: true, required: false
  private _privateIpAddresses = new DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecNetworkInterfacesPrivateIpAddressesList(this, "private_ip_addresses", false);
  public get privateIpAddresses() {
    return this._privateIpAddresses;
  }
  public putPrivateIpAddresses(value: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecNetworkInterfacesPrivateIpAddresses[] | cdktf.IResolvable) {
    this._privateIpAddresses.internalValue = value;
  }
  public resetPrivateIpAddresses() {
    this._privateIpAddresses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpAddressesInput() {
    return this._privateIpAddresses.internalValue;
  }

  // secondary_private_ip_address_count - computed: false, optional: true, required: false
  private _secondaryPrivateIpAddressCount?: number; 
  public get secondaryPrivateIpAddressCount() {
    return this.getNumberAttribute('secondary_private_ip_address_count');
  }
  public set secondaryPrivateIpAddressCount(value: number) {
    this._secondaryPrivateIpAddressCount = value;
  }
  public resetSecondaryPrivateIpAddressCount() {
    this._secondaryPrivateIpAddressCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryPrivateIpAddressCountInput() {
    return this._secondaryPrivateIpAddressCount;
  }

  // subnet_id - computed: false, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }
}

export class DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecNetworkInterfacesList extends cdktf.ComplexList {
  public internalValue? : DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecNetworkInterfaces[] | cdktf.IResolvable

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
  public get(index: number): DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecNetworkInterfacesOutputReference {
    return new DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecNetworkInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecPlacement {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#affinity DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#affinity}
  */
  readonly affinity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#availability_zone DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#group_name DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#group_name}
  */
  readonly groupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#host_id DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#host_id}
  */
  readonly hostId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#host_resource_group_arn DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#host_resource_group_arn}
  */
  readonly hostResourceGroupArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#partition_number DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#partition_number}
  */
  readonly partitionNumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#spread_domain DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#spread_domain}
  */
  readonly spreadDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#tenancy DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#tenancy}
  */
  readonly tenancy?: string;
}

export function dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecPlacementToTerraform(struct?: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecPlacement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    affinity: cdktf.stringToTerraform(struct!.affinity),
    availability_zone: cdktf.stringToTerraform(struct!.availabilityZone),
    group_name: cdktf.stringToTerraform(struct!.groupName),
    host_id: cdktf.stringToTerraform(struct!.hostId),
    host_resource_group_arn: cdktf.stringToTerraform(struct!.hostResourceGroupArn),
    partition_number: cdktf.numberToTerraform(struct!.partitionNumber),
    spread_domain: cdktf.stringToTerraform(struct!.spreadDomain),
    tenancy: cdktf.stringToTerraform(struct!.tenancy),
  }
}


export function dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecPlacementToHclTerraform(struct?: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecPlacement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    affinity: {
      value: cdktf.stringToHclTerraform(struct!.affinity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    availability_zone: {
      value: cdktf.stringToHclTerraform(struct!.availabilityZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_name: {
      value: cdktf.stringToHclTerraform(struct!.groupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_id: {
      value: cdktf.stringToHclTerraform(struct!.hostId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_resource_group_arn: {
      value: cdktf.stringToHclTerraform(struct!.hostResourceGroupArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    partition_number: {
      value: cdktf.numberToHclTerraform(struct!.partitionNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    spread_domain: {
      value: cdktf.stringToHclTerraform(struct!.spreadDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenancy: {
      value: cdktf.stringToHclTerraform(struct!.tenancy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecPlacementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecPlacement | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._affinity !== undefined) {
      hasAnyValues = true;
      internalValueResult.affinity = this._affinity;
    }
    if (this._availabilityZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityZone = this._availabilityZone;
    }
    if (this._groupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupName = this._groupName;
    }
    if (this._hostId !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostId = this._hostId;
    }
    if (this._hostResourceGroupArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostResourceGroupArn = this._hostResourceGroupArn;
    }
    if (this._partitionNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.partitionNumber = this._partitionNumber;
    }
    if (this._spreadDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.spreadDomain = this._spreadDomain;
    }
    if (this._tenancy !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenancy = this._tenancy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecPlacement | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._affinity = undefined;
      this._availabilityZone = undefined;
      this._groupName = undefined;
      this._hostId = undefined;
      this._hostResourceGroupArn = undefined;
      this._partitionNumber = undefined;
      this._spreadDomain = undefined;
      this._tenancy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._affinity = value.affinity;
      this._availabilityZone = value.availabilityZone;
      this._groupName = value.groupName;
      this._hostId = value.hostId;
      this._hostResourceGroupArn = value.hostResourceGroupArn;
      this._partitionNumber = value.partitionNumber;
      this._spreadDomain = value.spreadDomain;
      this._tenancy = value.tenancy;
    }
  }

  // affinity - computed: false, optional: true, required: false
  private _affinity?: string; 
  public get affinity() {
    return this.getStringAttribute('affinity');
  }
  public set affinity(value: string) {
    this._affinity = value;
  }
  public resetAffinity() {
    this._affinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityInput() {
    return this._affinity;
  }

  // availability_zone - computed: false, optional: true, required: false
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  public resetAvailabilityZone() {
    this._availabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
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

  // host_id - computed: false, optional: true, required: false
  private _hostId?: string; 
  public get hostId() {
    return this.getStringAttribute('host_id');
  }
  public set hostId(value: string) {
    this._hostId = value;
  }
  public resetHostId() {
    this._hostId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostIdInput() {
    return this._hostId;
  }

  // host_resource_group_arn - computed: false, optional: true, required: false
  private _hostResourceGroupArn?: string; 
  public get hostResourceGroupArn() {
    return this.getStringAttribute('host_resource_group_arn');
  }
  public set hostResourceGroupArn(value: string) {
    this._hostResourceGroupArn = value;
  }
  public resetHostResourceGroupArn() {
    this._hostResourceGroupArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostResourceGroupArnInput() {
    return this._hostResourceGroupArn;
  }

  // partition_number - computed: false, optional: true, required: false
  private _partitionNumber?: number; 
  public get partitionNumber() {
    return this.getNumberAttribute('partition_number');
  }
  public set partitionNumber(value: number) {
    this._partitionNumber = value;
  }
  public resetPartitionNumber() {
    this._partitionNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionNumberInput() {
    return this._partitionNumber;
  }

  // spread_domain - computed: false, optional: true, required: false
  private _spreadDomain?: string; 
  public get spreadDomain() {
    return this.getStringAttribute('spread_domain');
  }
  public set spreadDomain(value: string) {
    this._spreadDomain = value;
  }
  public resetSpreadDomain() {
    this._spreadDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spreadDomainInput() {
    return this._spreadDomain;
  }

  // tenancy - computed: false, optional: true, required: false
  private _tenancy?: string; 
  public get tenancy() {
    return this.getStringAttribute('tenancy');
  }
  public set tenancy(value: string) {
    this._tenancy = value;
  }
  public resetTenancy() {
    this._tenancy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenancyInput() {
    return this._tenancy;
  }
}
export interface DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecPrivateDnsNameOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#enable_resource_name_dnsa_record DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#enable_resource_name_dnsa_record}
  */
  readonly enableResourceNameDnsaRecord?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#enable_resource_name_dnsaaaa_record DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#enable_resource_name_dnsaaaa_record}
  */
  readonly enableResourceNameDnsaaaaRecord?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#hostname_type DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#hostname_type}
  */
  readonly hostnameType?: string;
}

export function dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecPrivateDnsNameOptionsToTerraform(struct?: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecPrivateDnsNameOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_resource_name_dnsa_record: cdktf.booleanToTerraform(struct!.enableResourceNameDnsaRecord),
    enable_resource_name_dnsaaaa_record: cdktf.booleanToTerraform(struct!.enableResourceNameDnsaaaaRecord),
    hostname_type: cdktf.stringToTerraform(struct!.hostnameType),
  }
}


export function dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecPrivateDnsNameOptionsToHclTerraform(struct?: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecPrivateDnsNameOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_resource_name_dnsa_record: {
      value: cdktf.booleanToHclTerraform(struct!.enableResourceNameDnsaRecord),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_resource_name_dnsaaaa_record: {
      value: cdktf.booleanToHclTerraform(struct!.enableResourceNameDnsaaaaRecord),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hostname_type: {
      value: cdktf.stringToHclTerraform(struct!.hostnameType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecPrivateDnsNameOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecPrivateDnsNameOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableResourceNameDnsaRecord !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableResourceNameDnsaRecord = this._enableResourceNameDnsaRecord;
    }
    if (this._enableResourceNameDnsaaaaRecord !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableResourceNameDnsaaaaRecord = this._enableResourceNameDnsaaaaRecord;
    }
    if (this._hostnameType !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostnameType = this._hostnameType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecPrivateDnsNameOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableResourceNameDnsaRecord = undefined;
      this._enableResourceNameDnsaaaaRecord = undefined;
      this._hostnameType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableResourceNameDnsaRecord = value.enableResourceNameDnsaRecord;
      this._enableResourceNameDnsaaaaRecord = value.enableResourceNameDnsaaaaRecord;
      this._hostnameType = value.hostnameType;
    }
  }

  // enable_resource_name_dnsa_record - computed: false, optional: true, required: false
  private _enableResourceNameDnsaRecord?: boolean | cdktf.IResolvable; 
  public get enableResourceNameDnsaRecord() {
    return this.getBooleanAttribute('enable_resource_name_dnsa_record');
  }
  public set enableResourceNameDnsaRecord(value: boolean | cdktf.IResolvable) {
    this._enableResourceNameDnsaRecord = value;
  }
  public resetEnableResourceNameDnsaRecord() {
    this._enableResourceNameDnsaRecord = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableResourceNameDnsaRecordInput() {
    return this._enableResourceNameDnsaRecord;
  }

  // enable_resource_name_dnsaaaa_record - computed: false, optional: true, required: false
  private _enableResourceNameDnsaaaaRecord?: boolean | cdktf.IResolvable; 
  public get enableResourceNameDnsaaaaRecord() {
    return this.getBooleanAttribute('enable_resource_name_dnsaaaa_record');
  }
  public set enableResourceNameDnsaaaaRecord(value: boolean | cdktf.IResolvable) {
    this._enableResourceNameDnsaaaaRecord = value;
  }
  public resetEnableResourceNameDnsaaaaRecord() {
    this._enableResourceNameDnsaaaaRecord = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableResourceNameDnsaaaaRecordInput() {
    return this._enableResourceNameDnsaaaaRecord;
  }

  // hostname_type - computed: false, optional: true, required: false
  private _hostnameType?: string; 
  public get hostnameType() {
    return this.getStringAttribute('hostname_type');
  }
  public set hostnameType(value: string) {
    this._hostnameType = value;
  }
  public resetHostnameType() {
    this._hostnameType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameTypeInput() {
    return this._hostnameType;
  }
}
export interface DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#key DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#value DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecTagsToTerraform(struct?: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecTagsToHclTerraform(struct?: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecTags | cdktf.IResolvable): any {
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

export class DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
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
      this._value = value.value;
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

export class DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecTagsList extends cdktf.ComplexList {
  public internalValue? : DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecTags[] | cdktf.IResolvable

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
  public get(index: number): DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecTagsOutputReference {
    return new DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpec {
  /**
  * The block device mapping, which defines the EBS volumes and instance store volumes to attach to the instance at launch. For more information, see Block device mappings (https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/block-device-mapping-concepts.html) in the Amazon EC2 User Guide.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#block_device_mappings DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#block_device_mappings}
  */
  readonly blockDeviceMappings?: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecBlockDeviceMappings[] | cdktf.IResolvable;
  /**
  * Information about the Capacity Reservation targeting option. If you do not specify this parameter, the instance's Capacity Reservation preference defaults to open, which enables it to run in any open Capacity Reservation that has matching attributes (instance type, platform, Availability Zone).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#capacity_reservation_specification DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#capacity_reservation_specification}
  */
  readonly capacityReservationSpecification?: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecCapacityReservationSpecification;
  /**
  * The CPU options for the instance. For more information, see Optimize CPU options (https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-optimize-cpu.html) in the Amazon EC2 User Guide.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#cpu_options DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#cpu_options}
  */
  readonly cpuOptions?: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecCpuOptions;
  /**
  * The credit option for CPU usage of the burstable performance instance. Valid values are standard and unlimited. To change this attribute after launch, use ModifyInstanceCreditSpecification (https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyInstanceCreditSpecification.html). For more information, see Burstable performance instances (https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-performance-instances.html) in the Amazon EC2 User Guide. Default: standard (T2 instances) or unlimited (T3/T3a/T4g instances) For T3 instances with host tenancy, only standard is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#credit_specification DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#credit_specification}
  */
  readonly creditSpecification?: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecCreditSpecification;
  /**
  * Indicates whether an instance is enabled for stop protection. For more information, see Stop protection (https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Stop_Start.html#Using_StopProtection).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#disable_api_stop DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#disable_api_stop}
  */
  readonly disableApiStop?: boolean | cdktf.IResolvable;
  /**
  * If you set this parameter to true, you can't terminate the instance using the Amazon EC2 console, CLI, or API; otherwise, you can. To change this attribute after launch, use ModifyInstanceAttribute (https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyInstanceAttribute.html). Alternatively, if you set InstanceInitiatedShutdownBehavior to terminate, you can terminate the instance by running the shutdown command from the instance. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#disable_api_termination DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#disable_api_termination}
  */
  readonly disableApiTermination?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether the instance is optimized for Amazon EBS I/O. This optimization provides dedicated throughput to Amazon EBS and an optimized configuration stack to provide optimal Amazon EBS I/O performance. This optimization isn't available with all instance types. Additional usage charges apply when using an EBS-optimized instance. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#ebs_optimized DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#ebs_optimized}
  */
  readonly ebsOptimized?: boolean | cdktf.IResolvable;
  /**
  * An elastic GPU to associate with the instance. An Elastic GPU is a GPU resource that you can attach to your Windows instance to accelerate the graphics performance of your applications. For more information, see Amazon EC2 Elastic GPUs (https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/elastic-graphics.html) in the Amazon EC2 User Guide.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#elastic_gpu_specification DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#elastic_gpu_specification}
  */
  readonly elasticGpuSpecification?: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecElasticGpuSpecification[] | cdktf.IResolvable;
  /**
  * An elastic inference accelerator to associate with the instance. Elastic inference accelerators are a resource you can attach to your Amazon EC2 instances to accelerate your Deep Learning (DL) inference workloads. You cannot specify accelerators from different generations in the same request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#elastic_inference_accelerators DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#elastic_inference_accelerators}
  */
  readonly elasticInferenceAccelerators?: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecElasticInferenceAccelerators[] | cdktf.IResolvable;
  /**
  * Indicates whether the instance is enabled for Amazon Web Services Nitro Enclaves. For more information, see What is Amazon Web Services Nitro Enclaves? (https://docs.aws.amazon.com/enclaves/latest/user/nitro-enclave.html) in the Amazon Web Services Nitro Enclaves User Guide. You can't enable Amazon Web Services Nitro Enclaves and hibernation on the same instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#enclave_options DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#enclave_options}
  */
  readonly enclaveOptions?: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecEnclaveOptions;
  /**
  * Indicates whether an instance is enabled for hibernation. For more information, see Hibernate your instance (https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html) in the Amazon EC2 User Guide. You can't enable hibernation and Amazon Web Services Nitro Enclaves on the same instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#hibernation_options DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#hibernation_options}
  */
  readonly hibernationOptions?: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecHibernationOptions;
  /**
  * The name or Amazon Resource Name (ARN) of an IAM instance profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#iam_instance_profile DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#iam_instance_profile}
  */
  readonly iamInstanceProfile?: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecIamInstanceProfile;
  /**
  * The ID of the AMI. An AMI ID is required to launch an instance and must be specified here or in a launch template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#image_id DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#image_id}
  */
  readonly imageId?: string;
  /**
  * Indicates whether an instance stops or terminates when you initiate shutdown from the instance (using the operating system command for system shutdown). Default: stop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#instance_initiated_shutdown_behavior DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#instance_initiated_shutdown_behavior}
  */
  readonly instanceInitiatedShutdownBehavior?: string;
  /**
  * The market (purchasing) option for the instances. For RunInstances, persistent Spot Instance requests are only supported when InstanceInterruptionBehavior is set to either hibernate or stop.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#instance_market_options DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#instance_market_options}
  */
  readonly instanceMarketOptions?: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecInstanceMarketOptions;
  /**
  * The instance type. For more information, see Instance types (https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html) in the Amazon EC2 User Guide. Default: m1.small
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#instance_type DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#instance_type}
  */
  readonly instanceType?: string;
  /**
  * [EC2-VPC] The number of IPv6 addresses to associate with the primary network interface. Amazon EC2 chooses the IPv6 addresses from the range of your subnet. You cannot specify this option and the option to assign specific IPv6 addresses in the same request. You can specify this option if you've specified a minimum number of instances to launch. You cannot specify this option and the network interfaces option in the same request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#ipv6_address_count DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#ipv6_address_count}
  */
  readonly ipv6AddressCount?: number;
  /**
  * [EC2-VPC] The IPv6 addresses from the range of the subnet to associate with the primary network interface. You cannot specify this option and the option to assign a number of IPv6 addresses in the same request. You cannot specify this option if you've specified a minimum number of instances to launch. You cannot specify this option and the network interfaces option in the same request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#ipv6_addresses DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#ipv6_addresses}
  */
  readonly ipv6Addresses?: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecIpv6Addresses[] | cdktf.IResolvable;
  /**
  * The ID of the kernel. We recommend that you use PV-GRUB instead of kernels and RAM disks. For more information, see PV-GRUB (https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/UserProvidedkernels.html) in the Amazon EC2 User Guide.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#kernel_id DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#kernel_id}
  */
  readonly kernelId?: string;
  /**
  * The name of the key pair. You can create a key pair using CreateKeyPair (https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateKeyPair.html) or ImportKeyPair (https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ImportKeyPair.html). If you do not specify a key pair, you can't connect to the instance unless you choose an AMI that is configured to allow users another way to log in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#key_name DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#key_name}
  */
  readonly keyName?: string;
  /**
  * The launch template to use to launch the instances. Any parameters that you specify in RunInstances override the same parameters in the launch template. You can specify either the name or ID of a launch template, but not both.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#launch_template DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#launch_template}
  */
  readonly launchTemplate?: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecLaunchTemplate;
  /**
  * The license configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#license_specifications DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#license_specifications}
  */
  readonly licenseSpecifications?: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecLicenseSpecifications[] | cdktf.IResolvable;
  /**
  * The maintenance and recovery options for the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#maintenance_options DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#maintenance_options}
  */
  readonly maintenanceOptions?: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecMaintenanceOptions;
  /**
  * The maximum number of instances to launch. If you specify more instances than Amazon EC2 can launch in the target Availability Zone, Amazon EC2 launches the largest possible number of instances above MinCount. Constraints: Between 1 and the maximum number you're allowed for the specified instance type. For more information about the default limits, and how to request an increase, see How many instances can I run in Amazon EC2 (http://aws.amazon.com/ec2/faqs/#How_many_instances_can_I_run_in_Amazon_EC2) in the Amazon EC2 FAQ.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#max_count DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#max_count}
  */
  readonly maxCount?: number;
  /**
  * The metadata options for the instance. For more information, see Instance metadata and user data (https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#metadata_options DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#metadata_options}
  */
  readonly metadataOptions?: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecMetadataOptions;
  /**
  * The minimum number of instances to launch. If you specify a minimum that is more instances than Amazon EC2 can launch in the target Availability Zone, Amazon EC2 launches no instances. Constraints: Between 1 and the maximum number you're allowed for the specified instance type. For more information about the default limits, and how to request an increase, see How many instances can I run in Amazon EC2 (http://aws.amazon.com/ec2/faqs/#How_many_instances_can_I_run_in_Amazon_EC2) in the Amazon EC2 General FAQ.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#min_count DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#min_count}
  */
  readonly minCount?: number;
  /**
  * Specifies whether detailed monitoring is enabled for the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#monitoring DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#monitoring}
  */
  readonly monitoring?: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecMonitoring;
  /**
  * The network interfaces to associate with the instance. If you specify a network interface, you must specify any security groups and subnets as part of the network interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#network_interfaces DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#network_interfaces}
  */
  readonly networkInterfaces?: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecNetworkInterfaces[] | cdktf.IResolvable;
  /**
  * The placement for the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#placement DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#placement}
  */
  readonly placement?: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecPlacement;
  /**
  * The options for the instance hostname. The default values are inherited from the subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#private_dns_name_options DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#private_dns_name_options}
  */
  readonly privateDnsNameOptions?: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecPrivateDnsNameOptions;
  /**
  * [EC2-VPC] The primary IPv4 address. You must specify a value from the IPv4 address range of the subnet. Only one private IP address can be designated as primary. You can't specify this option if you've specified the option to designate a private IP address as the primary IP address in a network interface specification. You cannot specify this option if you're launching more than one instance in the request. You cannot specify this option and the network interfaces option in the same request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#private_ip_address DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#private_ip_address}
  */
  readonly privateIpAddress?: string;
  /**
  * The ID of the RAM disk to select. Some kernels require additional drivers at launch. Check the kernel requirements for information about whether you need to specify a RAM disk. To find kernel requirements, go to the Amazon Web Services Resource Center and search for the kernel ID. We recommend that you use PV-GRUB instead of kernels and RAM disks. For more information, see PV-GRUB (https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/UserProvidedkernels.html) in the Amazon EC2 User Guide.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#ram_disk_id DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#ram_disk_id}
  */
  readonly ramDiskId?: string;
  /**
  * The IDs of the security groups. You can create a security group using CreateSecurityGroup (https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateSecurityGroup.html). If you specify a network interface, you must specify any security groups as part of the network interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#security_group_i_ds DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#security_group_i_ds}
  */
  readonly securityGroupIDs?: string[];
  /**
  * [EC2-Classic, default VPC] The names of the security groups. For a nondefault VPC, you must use security group IDs instead. If you specify a network interface, you must specify any security groups as part of the network interface. Default: Amazon EC2 uses the default security group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#security_groups DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * [EC2-VPC] The ID of the subnet to launch the instance into. If you specify a network interface, you must specify any subnets as part of the network interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#subnet_id DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * The tags. The value parameter is required, but if you don't want the tag to have a value, specify the parameter with no value, and we set the value to an empty string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#tags DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#tags}
  */
  readonly tags?: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecTags[] | cdktf.IResolvable;
  /**
  * The user data script to make available to the instance. For more information, see Run commands on your Linux instance at launch (https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/user-data.html) and Run commands on your Windows instance at launch (https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/ec2-windows-user-data.html). If you are using a command line tool, base64-encoding is performed for you, and you can load the text from a file. Otherwise, you must provide base64-encoded text. User data is limited to 16 KB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#user_data DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest#user_data}
  */
  readonly userData?: string;
}

export function dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecToTerraform(struct?: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_device_mappings: cdktf.listMapper(dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecBlockDeviceMappingsToTerraform, false)(struct!.blockDeviceMappings),
    capacity_reservation_specification: dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecCapacityReservationSpecificationToTerraform(struct!.capacityReservationSpecification),
    cpu_options: dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecCpuOptionsToTerraform(struct!.cpuOptions),
    credit_specification: dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecCreditSpecificationToTerraform(struct!.creditSpecification),
    disable_api_stop: cdktf.booleanToTerraform(struct!.disableApiStop),
    disable_api_termination: cdktf.booleanToTerraform(struct!.disableApiTermination),
    ebs_optimized: cdktf.booleanToTerraform(struct!.ebsOptimized),
    elastic_gpu_specification: cdktf.listMapper(dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecElasticGpuSpecificationToTerraform, false)(struct!.elasticGpuSpecification),
    elastic_inference_accelerators: cdktf.listMapper(dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecElasticInferenceAcceleratorsToTerraform, false)(struct!.elasticInferenceAccelerators),
    enclave_options: dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecEnclaveOptionsToTerraform(struct!.enclaveOptions),
    hibernation_options: dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecHibernationOptionsToTerraform(struct!.hibernationOptions),
    iam_instance_profile: dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecIamInstanceProfileToTerraform(struct!.iamInstanceProfile),
    image_id: cdktf.stringToTerraform(struct!.imageId),
    instance_initiated_shutdown_behavior: cdktf.stringToTerraform(struct!.instanceInitiatedShutdownBehavior),
    instance_market_options: dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecInstanceMarketOptionsToTerraform(struct!.instanceMarketOptions),
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    ipv6_address_count: cdktf.numberToTerraform(struct!.ipv6AddressCount),
    ipv6_addresses: cdktf.listMapper(dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecIpv6AddressesToTerraform, false)(struct!.ipv6Addresses),
    kernel_id: cdktf.stringToTerraform(struct!.kernelId),
    key_name: cdktf.stringToTerraform(struct!.keyName),
    launch_template: dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecLaunchTemplateToTerraform(struct!.launchTemplate),
    license_specifications: cdktf.listMapper(dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecLicenseSpecificationsToTerraform, false)(struct!.licenseSpecifications),
    maintenance_options: dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecMaintenanceOptionsToTerraform(struct!.maintenanceOptions),
    max_count: cdktf.numberToTerraform(struct!.maxCount),
    metadata_options: dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecMetadataOptionsToTerraform(struct!.metadataOptions),
    min_count: cdktf.numberToTerraform(struct!.minCount),
    monitoring: dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecMonitoringToTerraform(struct!.monitoring),
    network_interfaces: cdktf.listMapper(dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecNetworkInterfacesToTerraform, false)(struct!.networkInterfaces),
    placement: dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecPlacementToTerraform(struct!.placement),
    private_dns_name_options: dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecPrivateDnsNameOptionsToTerraform(struct!.privateDnsNameOptions),
    private_ip_address: cdktf.stringToTerraform(struct!.privateIpAddress),
    ram_disk_id: cdktf.stringToTerraform(struct!.ramDiskId),
    security_group_i_ds: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroupIDs),
    security_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroups),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    tags: cdktf.listMapper(dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecTagsToTerraform, false)(struct!.tags),
    user_data: cdktf.stringToTerraform(struct!.userData),
  }
}


export function dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block_device_mappings: {
      value: cdktf.listMapperHcl(dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecBlockDeviceMappingsToHclTerraform, false)(struct!.blockDeviceMappings),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecBlockDeviceMappingsList",
    },
    capacity_reservation_specification: {
      value: dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecCapacityReservationSpecificationToHclTerraform(struct!.capacityReservationSpecification),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecCapacityReservationSpecification",
    },
    cpu_options: {
      value: dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecCpuOptionsToHclTerraform(struct!.cpuOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecCpuOptions",
    },
    credit_specification: {
      value: dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecCreditSpecificationToHclTerraform(struct!.creditSpecification),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecCreditSpecification",
    },
    disable_api_stop: {
      value: cdktf.booleanToHclTerraform(struct!.disableApiStop),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_api_termination: {
      value: cdktf.booleanToHclTerraform(struct!.disableApiTermination),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ebs_optimized: {
      value: cdktf.booleanToHclTerraform(struct!.ebsOptimized),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    elastic_gpu_specification: {
      value: cdktf.listMapperHcl(dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecElasticGpuSpecificationToHclTerraform, false)(struct!.elasticGpuSpecification),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecElasticGpuSpecificationList",
    },
    elastic_inference_accelerators: {
      value: cdktf.listMapperHcl(dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecElasticInferenceAcceleratorsToHclTerraform, false)(struct!.elasticInferenceAccelerators),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecElasticInferenceAcceleratorsList",
    },
    enclave_options: {
      value: dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecEnclaveOptionsToHclTerraform(struct!.enclaveOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecEnclaveOptions",
    },
    hibernation_options: {
      value: dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecHibernationOptionsToHclTerraform(struct!.hibernationOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecHibernationOptions",
    },
    iam_instance_profile: {
      value: dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecIamInstanceProfileToHclTerraform(struct!.iamInstanceProfile),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecIamInstanceProfile",
    },
    image_id: {
      value: cdktf.stringToHclTerraform(struct!.imageId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_initiated_shutdown_behavior: {
      value: cdktf.stringToHclTerraform(struct!.instanceInitiatedShutdownBehavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_market_options: {
      value: dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecInstanceMarketOptionsToHclTerraform(struct!.instanceMarketOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecInstanceMarketOptions",
    },
    instance_type: {
      value: cdktf.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_address_count: {
      value: cdktf.numberToHclTerraform(struct!.ipv6AddressCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_addresses: {
      value: cdktf.listMapperHcl(dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecIpv6AddressesToHclTerraform, false)(struct!.ipv6Addresses),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecIpv6AddressesList",
    },
    kernel_id: {
      value: cdktf.stringToHclTerraform(struct!.kernelId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_name: {
      value: cdktf.stringToHclTerraform(struct!.keyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    launch_template: {
      value: dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecLaunchTemplateToHclTerraform(struct!.launchTemplate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecLaunchTemplate",
    },
    license_specifications: {
      value: cdktf.listMapperHcl(dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecLicenseSpecificationsToHclTerraform, false)(struct!.licenseSpecifications),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecLicenseSpecificationsList",
    },
    maintenance_options: {
      value: dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecMaintenanceOptionsToHclTerraform(struct!.maintenanceOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecMaintenanceOptions",
    },
    max_count: {
      value: cdktf.numberToHclTerraform(struct!.maxCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metadata_options: {
      value: dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecMetadataOptionsToHclTerraform(struct!.metadataOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecMetadataOptions",
    },
    min_count: {
      value: cdktf.numberToHclTerraform(struct!.minCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    monitoring: {
      value: dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecMonitoringToHclTerraform(struct!.monitoring),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecMonitoring",
    },
    network_interfaces: {
      value: cdktf.listMapperHcl(dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecNetworkInterfacesToHclTerraform, false)(struct!.networkInterfaces),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecNetworkInterfacesList",
    },
    placement: {
      value: dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecPlacementToHclTerraform(struct!.placement),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecPlacement",
    },
    private_dns_name_options: {
      value: dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecPrivateDnsNameOptionsToHclTerraform(struct!.privateDnsNameOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecPrivateDnsNameOptions",
    },
    private_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.privateIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ram_disk_id: {
      value: cdktf.stringToHclTerraform(struct!.ramDiskId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_group_i_ds: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroupIDs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    security_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecTagsList",
    },
    user_data: {
      value: cdktf.stringToHclTerraform(struct!.userData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockDeviceMappings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockDeviceMappings = this._blockDeviceMappings?.internalValue;
    }
    if (this._capacityReservationSpecification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacityReservationSpecification = this._capacityReservationSpecification?.internalValue;
    }
    if (this._cpuOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuOptions = this._cpuOptions?.internalValue;
    }
    if (this._creditSpecification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.creditSpecification = this._creditSpecification?.internalValue;
    }
    if (this._disableApiStop !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableApiStop = this._disableApiStop;
    }
    if (this._disableApiTermination !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableApiTermination = this._disableApiTermination;
    }
    if (this._ebsOptimized !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebsOptimized = this._ebsOptimized;
    }
    if (this._elasticGpuSpecification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.elasticGpuSpecification = this._elasticGpuSpecification?.internalValue;
    }
    if (this._elasticInferenceAccelerators?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.elasticInferenceAccelerators = this._elasticInferenceAccelerators?.internalValue;
    }
    if (this._enclaveOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enclaveOptions = this._enclaveOptions?.internalValue;
    }
    if (this._hibernationOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hibernationOptions = this._hibernationOptions?.internalValue;
    }
    if (this._iamInstanceProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.iamInstanceProfile = this._iamInstanceProfile?.internalValue;
    }
    if (this._imageId !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageId = this._imageId;
    }
    if (this._instanceInitiatedShutdownBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceInitiatedShutdownBehavior = this._instanceInitiatedShutdownBehavior;
    }
    if (this._instanceMarketOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceMarketOptions = this._instanceMarketOptions?.internalValue;
    }
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._ipv6AddressCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6AddressCount = this._ipv6AddressCount;
    }
    if (this._ipv6Addresses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Addresses = this._ipv6Addresses?.internalValue;
    }
    if (this._kernelId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kernelId = this._kernelId;
    }
    if (this._keyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyName = this._keyName;
    }
    if (this._launchTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.launchTemplate = this._launchTemplate?.internalValue;
    }
    if (this._licenseSpecifications?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.licenseSpecifications = this._licenseSpecifications?.internalValue;
    }
    if (this._maintenanceOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenanceOptions = this._maintenanceOptions?.internalValue;
    }
    if (this._maxCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCount = this._maxCount;
    }
    if (this._metadataOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataOptions = this._metadataOptions?.internalValue;
    }
    if (this._minCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.minCount = this._minCount;
    }
    if (this._monitoring?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoring = this._monitoring?.internalValue;
    }
    if (this._networkInterfaces?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkInterfaces = this._networkInterfaces?.internalValue;
    }
    if (this._placement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.placement = this._placement?.internalValue;
    }
    if (this._privateDnsNameOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateDnsNameOptions = this._privateDnsNameOptions?.internalValue;
    }
    if (this._privateIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateIpAddress = this._privateIpAddress;
    }
    if (this._ramDiskId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ramDiskId = this._ramDiskId;
    }
    if (this._securityGroupIDs !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIDs = this._securityGroupIDs;
    }
    if (this._securityGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroups = this._securityGroups;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    if (this._userData !== undefined) {
      hasAnyValues = true;
      internalValueResult.userData = this._userData;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._blockDeviceMappings.internalValue = undefined;
      this._capacityReservationSpecification.internalValue = undefined;
      this._cpuOptions.internalValue = undefined;
      this._creditSpecification.internalValue = undefined;
      this._disableApiStop = undefined;
      this._disableApiTermination = undefined;
      this._ebsOptimized = undefined;
      this._elasticGpuSpecification.internalValue = undefined;
      this._elasticInferenceAccelerators.internalValue = undefined;
      this._enclaveOptions.internalValue = undefined;
      this._hibernationOptions.internalValue = undefined;
      this._iamInstanceProfile.internalValue = undefined;
      this._imageId = undefined;
      this._instanceInitiatedShutdownBehavior = undefined;
      this._instanceMarketOptions.internalValue = undefined;
      this._instanceType = undefined;
      this._ipv6AddressCount = undefined;
      this._ipv6Addresses.internalValue = undefined;
      this._kernelId = undefined;
      this._keyName = undefined;
      this._launchTemplate.internalValue = undefined;
      this._licenseSpecifications.internalValue = undefined;
      this._maintenanceOptions.internalValue = undefined;
      this._maxCount = undefined;
      this._metadataOptions.internalValue = undefined;
      this._minCount = undefined;
      this._monitoring.internalValue = undefined;
      this._networkInterfaces.internalValue = undefined;
      this._placement.internalValue = undefined;
      this._privateDnsNameOptions.internalValue = undefined;
      this._privateIpAddress = undefined;
      this._ramDiskId = undefined;
      this._securityGroupIDs = undefined;
      this._securityGroups = undefined;
      this._subnetId = undefined;
      this._tags.internalValue = undefined;
      this._userData = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._blockDeviceMappings.internalValue = value.blockDeviceMappings;
      this._capacityReservationSpecification.internalValue = value.capacityReservationSpecification;
      this._cpuOptions.internalValue = value.cpuOptions;
      this._creditSpecification.internalValue = value.creditSpecification;
      this._disableApiStop = value.disableApiStop;
      this._disableApiTermination = value.disableApiTermination;
      this._ebsOptimized = value.ebsOptimized;
      this._elasticGpuSpecification.internalValue = value.elasticGpuSpecification;
      this._elasticInferenceAccelerators.internalValue = value.elasticInferenceAccelerators;
      this._enclaveOptions.internalValue = value.enclaveOptions;
      this._hibernationOptions.internalValue = value.hibernationOptions;
      this._iamInstanceProfile.internalValue = value.iamInstanceProfile;
      this._imageId = value.imageId;
      this._instanceInitiatedShutdownBehavior = value.instanceInitiatedShutdownBehavior;
      this._instanceMarketOptions.internalValue = value.instanceMarketOptions;
      this._instanceType = value.instanceType;
      this._ipv6AddressCount = value.ipv6AddressCount;
      this._ipv6Addresses.internalValue = value.ipv6Addresses;
      this._kernelId = value.kernelId;
      this._keyName = value.keyName;
      this._launchTemplate.internalValue = value.launchTemplate;
      this._licenseSpecifications.internalValue = value.licenseSpecifications;
      this._maintenanceOptions.internalValue = value.maintenanceOptions;
      this._maxCount = value.maxCount;
      this._metadataOptions.internalValue = value.metadataOptions;
      this._minCount = value.minCount;
      this._monitoring.internalValue = value.monitoring;
      this._networkInterfaces.internalValue = value.networkInterfaces;
      this._placement.internalValue = value.placement;
      this._privateDnsNameOptions.internalValue = value.privateDnsNameOptions;
      this._privateIpAddress = value.privateIpAddress;
      this._ramDiskId = value.ramDiskId;
      this._securityGroupIDs = value.securityGroupIDs;
      this._securityGroups = value.securityGroups;
      this._subnetId = value.subnetId;
      this._tags.internalValue = value.tags;
      this._userData = value.userData;
    }
  }

  // block_device_mappings - computed: false, optional: true, required: false
  private _blockDeviceMappings = new DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecBlockDeviceMappingsList(this, "block_device_mappings", false);
  public get blockDeviceMappings() {
    return this._blockDeviceMappings;
  }
  public putBlockDeviceMappings(value: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecBlockDeviceMappings[] | cdktf.IResolvable) {
    this._blockDeviceMappings.internalValue = value;
  }
  public resetBlockDeviceMappings() {
    this._blockDeviceMappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockDeviceMappingsInput() {
    return this._blockDeviceMappings.internalValue;
  }

  // capacity_reservation_specification - computed: false, optional: true, required: false
  private _capacityReservationSpecification = new DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecCapacityReservationSpecificationOutputReference(this, "capacity_reservation_specification");
  public get capacityReservationSpecification() {
    return this._capacityReservationSpecification;
  }
  public putCapacityReservationSpecification(value: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecCapacityReservationSpecification) {
    this._capacityReservationSpecification.internalValue = value;
  }
  public resetCapacityReservationSpecification() {
    this._capacityReservationSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityReservationSpecificationInput() {
    return this._capacityReservationSpecification.internalValue;
  }

  // cpu_options - computed: false, optional: true, required: false
  private _cpuOptions = new DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecCpuOptionsOutputReference(this, "cpu_options");
  public get cpuOptions() {
    return this._cpuOptions;
  }
  public putCpuOptions(value: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecCpuOptions) {
    this._cpuOptions.internalValue = value;
  }
  public resetCpuOptions() {
    this._cpuOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuOptionsInput() {
    return this._cpuOptions.internalValue;
  }

  // credit_specification - computed: false, optional: true, required: false
  private _creditSpecification = new DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecCreditSpecificationOutputReference(this, "credit_specification");
  public get creditSpecification() {
    return this._creditSpecification;
  }
  public putCreditSpecification(value: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecCreditSpecification) {
    this._creditSpecification.internalValue = value;
  }
  public resetCreditSpecification() {
    this._creditSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get creditSpecificationInput() {
    return this._creditSpecification.internalValue;
  }

  // disable_api_stop - computed: false, optional: true, required: false
  private _disableApiStop?: boolean | cdktf.IResolvable; 
  public get disableApiStop() {
    return this.getBooleanAttribute('disable_api_stop');
  }
  public set disableApiStop(value: boolean | cdktf.IResolvable) {
    this._disableApiStop = value;
  }
  public resetDisableApiStop() {
    this._disableApiStop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableApiStopInput() {
    return this._disableApiStop;
  }

  // disable_api_termination - computed: false, optional: true, required: false
  private _disableApiTermination?: boolean | cdktf.IResolvable; 
  public get disableApiTermination() {
    return this.getBooleanAttribute('disable_api_termination');
  }
  public set disableApiTermination(value: boolean | cdktf.IResolvable) {
    this._disableApiTermination = value;
  }
  public resetDisableApiTermination() {
    this._disableApiTermination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableApiTerminationInput() {
    return this._disableApiTermination;
  }

  // ebs_optimized - computed: false, optional: true, required: false
  private _ebsOptimized?: boolean | cdktf.IResolvable; 
  public get ebsOptimized() {
    return this.getBooleanAttribute('ebs_optimized');
  }
  public set ebsOptimized(value: boolean | cdktf.IResolvable) {
    this._ebsOptimized = value;
  }
  public resetEbsOptimized() {
    this._ebsOptimized = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsOptimizedInput() {
    return this._ebsOptimized;
  }

  // elastic_gpu_specification - computed: false, optional: true, required: false
  private _elasticGpuSpecification = new DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecElasticGpuSpecificationList(this, "elastic_gpu_specification", false);
  public get elasticGpuSpecification() {
    return this._elasticGpuSpecification;
  }
  public putElasticGpuSpecification(value: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecElasticGpuSpecification[] | cdktf.IResolvable) {
    this._elasticGpuSpecification.internalValue = value;
  }
  public resetElasticGpuSpecification() {
    this._elasticGpuSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticGpuSpecificationInput() {
    return this._elasticGpuSpecification.internalValue;
  }

  // elastic_inference_accelerators - computed: false, optional: true, required: false
  private _elasticInferenceAccelerators = new DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecElasticInferenceAcceleratorsList(this, "elastic_inference_accelerators", false);
  public get elasticInferenceAccelerators() {
    return this._elasticInferenceAccelerators;
  }
  public putElasticInferenceAccelerators(value: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecElasticInferenceAccelerators[] | cdktf.IResolvable) {
    this._elasticInferenceAccelerators.internalValue = value;
  }
  public resetElasticInferenceAccelerators() {
    this._elasticInferenceAccelerators.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticInferenceAcceleratorsInput() {
    return this._elasticInferenceAccelerators.internalValue;
  }

  // enclave_options - computed: false, optional: true, required: false
  private _enclaveOptions = new DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecEnclaveOptionsOutputReference(this, "enclave_options");
  public get enclaveOptions() {
    return this._enclaveOptions;
  }
  public putEnclaveOptions(value: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecEnclaveOptions) {
    this._enclaveOptions.internalValue = value;
  }
  public resetEnclaveOptions() {
    this._enclaveOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enclaveOptionsInput() {
    return this._enclaveOptions.internalValue;
  }

  // hibernation_options - computed: false, optional: true, required: false
  private _hibernationOptions = new DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecHibernationOptionsOutputReference(this, "hibernation_options");
  public get hibernationOptions() {
    return this._hibernationOptions;
  }
  public putHibernationOptions(value: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecHibernationOptions) {
    this._hibernationOptions.internalValue = value;
  }
  public resetHibernationOptions() {
    this._hibernationOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hibernationOptionsInput() {
    return this._hibernationOptions.internalValue;
  }

  // iam_instance_profile - computed: false, optional: true, required: false
  private _iamInstanceProfile = new DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecIamInstanceProfileOutputReference(this, "iam_instance_profile");
  public get iamInstanceProfile() {
    return this._iamInstanceProfile;
  }
  public putIamInstanceProfile(value: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecIamInstanceProfile) {
    this._iamInstanceProfile.internalValue = value;
  }
  public resetIamInstanceProfile() {
    this._iamInstanceProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamInstanceProfileInput() {
    return this._iamInstanceProfile.internalValue;
  }

  // image_id - computed: false, optional: true, required: false
  private _imageId?: string; 
  public get imageId() {
    return this.getStringAttribute('image_id');
  }
  public set imageId(value: string) {
    this._imageId = value;
  }
  public resetImageId() {
    this._imageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageIdInput() {
    return this._imageId;
  }

  // instance_initiated_shutdown_behavior - computed: false, optional: true, required: false
  private _instanceInitiatedShutdownBehavior?: string; 
  public get instanceInitiatedShutdownBehavior() {
    return this.getStringAttribute('instance_initiated_shutdown_behavior');
  }
  public set instanceInitiatedShutdownBehavior(value: string) {
    this._instanceInitiatedShutdownBehavior = value;
  }
  public resetInstanceInitiatedShutdownBehavior() {
    this._instanceInitiatedShutdownBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceInitiatedShutdownBehaviorInput() {
    return this._instanceInitiatedShutdownBehavior;
  }

  // instance_market_options - computed: false, optional: true, required: false
  private _instanceMarketOptions = new DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecInstanceMarketOptionsOutputReference(this, "instance_market_options");
  public get instanceMarketOptions() {
    return this._instanceMarketOptions;
  }
  public putInstanceMarketOptions(value: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecInstanceMarketOptions) {
    this._instanceMarketOptions.internalValue = value;
  }
  public resetInstanceMarketOptions() {
    this._instanceMarketOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceMarketOptionsInput() {
    return this._instanceMarketOptions.internalValue;
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // ipv6_address_count - computed: false, optional: true, required: false
  private _ipv6AddressCount?: number; 
  public get ipv6AddressCount() {
    return this.getNumberAttribute('ipv6_address_count');
  }
  public set ipv6AddressCount(value: number) {
    this._ipv6AddressCount = value;
  }
  public resetIpv6AddressCount() {
    this._ipv6AddressCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressCountInput() {
    return this._ipv6AddressCount;
  }

  // ipv6_addresses - computed: false, optional: true, required: false
  private _ipv6Addresses = new DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecIpv6AddressesList(this, "ipv6_addresses", false);
  public get ipv6Addresses() {
    return this._ipv6Addresses;
  }
  public putIpv6Addresses(value: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecIpv6Addresses[] | cdktf.IResolvable) {
    this._ipv6Addresses.internalValue = value;
  }
  public resetIpv6Addresses() {
    this._ipv6Addresses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressesInput() {
    return this._ipv6Addresses.internalValue;
  }

  // kernel_id - computed: false, optional: true, required: false
  private _kernelId?: string; 
  public get kernelId() {
    return this.getStringAttribute('kernel_id');
  }
  public set kernelId(value: string) {
    this._kernelId = value;
  }
  public resetKernelId() {
    this._kernelId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kernelIdInput() {
    return this._kernelId;
  }

  // key_name - computed: false, optional: true, required: false
  private _keyName?: string; 
  public get keyName() {
    return this.getStringAttribute('key_name');
  }
  public set keyName(value: string) {
    this._keyName = value;
  }
  public resetKeyName() {
    this._keyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyNameInput() {
    return this._keyName;
  }

  // launch_template - computed: false, optional: true, required: false
  private _launchTemplate = new DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecLaunchTemplateOutputReference(this, "launch_template");
  public get launchTemplate() {
    return this._launchTemplate;
  }
  public putLaunchTemplate(value: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecLaunchTemplate) {
    this._launchTemplate.internalValue = value;
  }
  public resetLaunchTemplate() {
    this._launchTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchTemplateInput() {
    return this._launchTemplate.internalValue;
  }

  // license_specifications - computed: false, optional: true, required: false
  private _licenseSpecifications = new DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecLicenseSpecificationsList(this, "license_specifications", false);
  public get licenseSpecifications() {
    return this._licenseSpecifications;
  }
  public putLicenseSpecifications(value: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecLicenseSpecifications[] | cdktf.IResolvable) {
    this._licenseSpecifications.internalValue = value;
  }
  public resetLicenseSpecifications() {
    this._licenseSpecifications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseSpecificationsInput() {
    return this._licenseSpecifications.internalValue;
  }

  // maintenance_options - computed: false, optional: true, required: false
  private _maintenanceOptions = new DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecMaintenanceOptionsOutputReference(this, "maintenance_options");
  public get maintenanceOptions() {
    return this._maintenanceOptions;
  }
  public putMaintenanceOptions(value: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecMaintenanceOptions) {
    this._maintenanceOptions.internalValue = value;
  }
  public resetMaintenanceOptions() {
    this._maintenanceOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceOptionsInput() {
    return this._maintenanceOptions.internalValue;
  }

  // max_count - computed: false, optional: true, required: false
  private _maxCount?: number; 
  public get maxCount() {
    return this.getNumberAttribute('max_count');
  }
  public set maxCount(value: number) {
    this._maxCount = value;
  }
  public resetMaxCount() {
    this._maxCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCountInput() {
    return this._maxCount;
  }

  // metadata_options - computed: false, optional: true, required: false
  private _metadataOptions = new DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecMetadataOptionsOutputReference(this, "metadata_options");
  public get metadataOptions() {
    return this._metadataOptions;
  }
  public putMetadataOptions(value: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecMetadataOptions) {
    this._metadataOptions.internalValue = value;
  }
  public resetMetadataOptions() {
    this._metadataOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataOptionsInput() {
    return this._metadataOptions.internalValue;
  }

  // min_count - computed: false, optional: true, required: false
  private _minCount?: number; 
  public get minCount() {
    return this.getNumberAttribute('min_count');
  }
  public set minCount(value: number) {
    this._minCount = value;
  }
  public resetMinCount() {
    this._minCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minCountInput() {
    return this._minCount;
  }

  // monitoring - computed: false, optional: true, required: false
  private _monitoring = new DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecMonitoringOutputReference(this, "monitoring");
  public get monitoring() {
    return this._monitoring;
  }
  public putMonitoring(value: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecMonitoring) {
    this._monitoring.internalValue = value;
  }
  public resetMonitoring() {
    this._monitoring.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringInput() {
    return this._monitoring.internalValue;
  }

  // network_interfaces - computed: false, optional: true, required: false
  private _networkInterfaces = new DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecNetworkInterfacesList(this, "network_interfaces", false);
  public get networkInterfaces() {
    return this._networkInterfaces;
  }
  public putNetworkInterfaces(value: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecNetworkInterfaces[] | cdktf.IResolvable) {
    this._networkInterfaces.internalValue = value;
  }
  public resetNetworkInterfaces() {
    this._networkInterfaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfacesInput() {
    return this._networkInterfaces.internalValue;
  }

  // placement - computed: false, optional: true, required: false
  private _placement = new DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecPlacementOutputReference(this, "placement");
  public get placement() {
    return this._placement;
  }
  public putPlacement(value: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecPlacement) {
    this._placement.internalValue = value;
  }
  public resetPlacement() {
    this._placement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementInput() {
    return this._placement.internalValue;
  }

  // private_dns_name_options - computed: false, optional: true, required: false
  private _privateDnsNameOptions = new DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecPrivateDnsNameOptionsOutputReference(this, "private_dns_name_options");
  public get privateDnsNameOptions() {
    return this._privateDnsNameOptions;
  }
  public putPrivateDnsNameOptions(value: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecPrivateDnsNameOptions) {
    this._privateDnsNameOptions.internalValue = value;
  }
  public resetPrivateDnsNameOptions() {
    this._privateDnsNameOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateDnsNameOptionsInput() {
    return this._privateDnsNameOptions.internalValue;
  }

  // private_ip_address - computed: false, optional: true, required: false
  private _privateIpAddress?: string; 
  public get privateIpAddress() {
    return this.getStringAttribute('private_ip_address');
  }
  public set privateIpAddress(value: string) {
    this._privateIpAddress = value;
  }
  public resetPrivateIpAddress() {
    this._privateIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpAddressInput() {
    return this._privateIpAddress;
  }

  // ram_disk_id - computed: false, optional: true, required: false
  private _ramDiskId?: string; 
  public get ramDiskId() {
    return this.getStringAttribute('ram_disk_id');
  }
  public set ramDiskId(value: string) {
    this._ramDiskId = value;
  }
  public resetRamDiskId() {
    this._ramDiskId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ramDiskIdInput() {
    return this._ramDiskId;
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

  // security_groups - computed: false, optional: true, required: false
  private _securityGroups?: string[]; 
  public get securityGroups() {
    return this.getListAttribute('security_groups');
  }
  public set securityGroups(value: string[]) {
    this._securityGroups = value;
  }
  public resetSecurityGroups() {
    this._securityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups;
  }

  // subnet_id - computed: false, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // user_data - computed: false, optional: true, required: false
  private _userData?: string; 
  public get userData() {
    return this.getStringAttribute('user_data');
  }
  public set userData(value: string) {
    this._userData = value;
  }
  public resetUserData() {
    this._userData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDataInput() {
    return this._userData;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest k8s_ec2_services_k8s_aws_instance_v1alpha1_manifest}
*/
export class DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_ec2_services_k8s_aws_instance_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SEc2ServicesK8SAwsInstanceV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_ec2_services_k8s_aws_instance_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ec2_services_k8s_aws_instance_v1alpha1_manifest k8s_ec2_services_k8s_aws_instance_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_ec2_services_k8s_aws_instance_v1alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.15',
        providerVersionConstraint: '2025.12.15'
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
  private _metadata = new DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpec) {
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
      metadata: dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SEc2ServicesK8SAwsInstanceV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
