// https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_k8s_aws_ec2_node_class_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SKarpenterK8SAwsEc2NodeClassV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_k8s_aws_ec2_node_class_v1_manifest#metadata DataK8SKarpenterK8SAwsEc2NodeClassV1Manifest#metadata}
  */
  readonly metadata: DataK8SKarpenterK8SAwsEc2NodeClassV1ManifestMetadata;
  /**
  * EC2NodeClassSpec is the top level specification for the AWS Karpenter Provider. This will contain configuration necessary to launch instances in AWS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_k8s_aws_ec2_node_class_v1_manifest#spec DataK8SKarpenterK8SAwsEc2NodeClassV1Manifest#spec}
  */
  readonly spec?: DataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpec;
}
export interface DataK8SKarpenterK8SAwsEc2NodeClassV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_k8s_aws_ec2_node_class_v1_manifest#annotations DataK8SKarpenterK8SAwsEc2NodeClassV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_k8s_aws_ec2_node_class_v1_manifest#labels DataK8SKarpenterK8SAwsEc2NodeClassV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_k8s_aws_ec2_node_class_v1_manifest#name DataK8SKarpenterK8SAwsEc2NodeClassV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SKarpenterK8SAwsEc2NodeClassV1ManifestMetadataToTerraform(struct?: DataK8SKarpenterK8SAwsEc2NodeClassV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SKarpenterK8SAwsEc2NodeClassV1ManifestMetadataToHclTerraform(struct?: DataK8SKarpenterK8SAwsEc2NodeClassV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SKarpenterK8SAwsEc2NodeClassV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKarpenterK8SAwsEc2NodeClassV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKarpenterK8SAwsEc2NodeClassV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecAmiSelectorTerms {
  /**
  * Alias specifies which EKS optimized AMI to select. Each alias consists of a family and an AMI version, specified as 'family@version'. Valid families include: al2, al2023, bottlerocket, windows2019, and windows2022. The version can either be pinned to a specific AMI release, with that AMIs version format (ex: 'al2023@v20240625' or 'bottlerocket@v1.10.0'). The version can also be set to 'latest' for any family. Setting the version to latest will result in drift when a new AMI is released. This is **not** recommended for production environments. Note: The Windows families do **not** support version pinning, and only latest may be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_k8s_aws_ec2_node_class_v1_manifest#alias DataK8SKarpenterK8SAwsEc2NodeClassV1Manifest#alias}
  */
  readonly alias?: string;
  /**
  * ID is the ami id in EC2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_k8s_aws_ec2_node_class_v1_manifest#id DataK8SKarpenterK8SAwsEc2NodeClassV1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name is the ami name in EC2. This value is the name field, which is different from the name tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_k8s_aws_ec2_node_class_v1_manifest#name DataK8SKarpenterK8SAwsEc2NodeClassV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Owner is the owner for the ami. You can specify a combination of AWS account IDs, 'self', 'amazon', and 'aws-marketplace'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_k8s_aws_ec2_node_class_v1_manifest#owner DataK8SKarpenterK8SAwsEc2NodeClassV1Manifest#owner}
  */
  readonly owner?: string;
  /**
  * Tags is a map of key/value tags used to select subnets Specifying '*' for a value selects all values for a given tag key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_k8s_aws_ec2_node_class_v1_manifest#tags DataK8SKarpenterK8SAwsEc2NodeClassV1Manifest#tags}
  */
  readonly tags?: { [key: string]: string };
}

export function dataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecAmiSelectorTermsToTerraform(struct?: DataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecAmiSelectorTerms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alias: cdktf.stringToTerraform(struct!.alias),
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    owner: cdktf.stringToTerraform(struct!.owner),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
  }
}


export function dataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecAmiSelectorTermsToHclTerraform(struct?: DataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecAmiSelectorTerms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alias: {
      value: cdktf.stringToHclTerraform(struct!.alias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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
    owner: {
      value: cdktf.stringToHclTerraform(struct!.owner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecAmiSelectorTermsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecAmiSelectorTerms | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alias !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._owner !== undefined) {
      hasAnyValues = true;
      internalValueResult.owner = this._owner;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecAmiSelectorTerms | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alias = undefined;
      this._id = undefined;
      this._name = undefined;
      this._owner = undefined;
      this._tags = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alias = value.alias;
      this._id = value.id;
      this._name = value.name;
      this._owner = value.owner;
      this._tags = value.tags;
    }
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

  // owner - computed: false, optional: true, required: false
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  public resetOwner() {
    this._owner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
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
}

export class DataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecAmiSelectorTermsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecAmiSelectorTerms[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecAmiSelectorTermsOutputReference {
    return new DataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecAmiSelectorTermsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecBlockDeviceMappingsEbs {
  /**
  * DeleteOnTermination indicates whether the EBS volume is deleted on instance termination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_k8s_aws_ec2_node_class_v1_manifest#delete_on_termination DataK8SKarpenterK8SAwsEc2NodeClassV1Manifest#delete_on_termination}
  */
  readonly deleteOnTermination?: boolean | cdktf.IResolvable;
  /**
  * Encrypted indicates whether the EBS volume is encrypted. Encrypted volumes can only be attached to instances that support Amazon EBS encryption. If you are creating a volume from a snapshot, you can't specify an encryption value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_k8s_aws_ec2_node_class_v1_manifest#encrypted DataK8SKarpenterK8SAwsEc2NodeClassV1Manifest#encrypted}
  */
  readonly encrypted?: boolean | cdktf.IResolvable;
  /**
  * IOPS is the number of I/O operations per second (IOPS). For gp3, io1, and io2 volumes, this represents the number of IOPS that are provisioned for the volume. For gp2 volumes, this represents the baseline performance of the volume and the rate at which the volume accumulates I/O credits for bursting. The following are the supported values for each volume type: * gp3: 3,000-16,000 IOPS * io1: 100-64,000 IOPS * io2: 100-64,000 IOPS For io1 and io2 volumes, we guarantee 64,000 IOPS only for Instances built on the Nitro System (https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html#ec2-nitro-instances). Other instance families guarantee performance up to 32,000 IOPS. This parameter is supported for io1, io2, and gp3 volumes only. This parameter is not supported for gp2, st1, sc1, or standard volumes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_k8s_aws_ec2_node_class_v1_manifest#iops DataK8SKarpenterK8SAwsEc2NodeClassV1Manifest#iops}
  */
  readonly iops?: number;
  /**
  * KMSKeyID (ARN) of the symmetric Key Management Service (KMS) CMK used for encryption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_k8s_aws_ec2_node_class_v1_manifest#kms_key_id DataK8SKarpenterK8SAwsEc2NodeClassV1Manifest#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * SnapshotID is the ID of an EBS snapshot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_k8s_aws_ec2_node_class_v1_manifest#snapshot_id DataK8SKarpenterK8SAwsEc2NodeClassV1Manifest#snapshot_id}
  */
  readonly snapshotId?: string;
  /**
  * Throughput to provision for a gp3 volume, with a maximum of 1,000 MiB/s. Valid Range: Minimum value of 125. Maximum value of 1000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_k8s_aws_ec2_node_class_v1_manifest#throughput DataK8SKarpenterK8SAwsEc2NodeClassV1Manifest#throughput}
  */
  readonly throughput?: number;
  /**
  * VolumeSize in 'Gi', 'G', 'Ti', or 'T'. You must specify either a snapshot ID or a volume size. The following are the supported volumes sizes for each volume type: * gp2 and gp3: 1-16,384 * io1 and io2: 4-16,384 * st1 and sc1: 125-16,384 * standard: 1-1,024
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_k8s_aws_ec2_node_class_v1_manifest#volume_size DataK8SKarpenterK8SAwsEc2NodeClassV1Manifest#volume_size}
  */
  readonly volumeSize?: string;
  /**
  * VolumeType of the block device. For more information, see Amazon EBS volume types (https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumeTypes.html) in the Amazon Elastic Compute Cloud User Guide.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_k8s_aws_ec2_node_class_v1_manifest#volume_type DataK8SKarpenterK8SAwsEc2NodeClassV1Manifest#volume_type}
  */
  readonly volumeType?: string;
}

export function dataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecBlockDeviceMappingsEbsToTerraform(struct?: DataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecBlockDeviceMappingsEbs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete_on_termination: cdktf.booleanToTerraform(struct!.deleteOnTermination),
    encrypted: cdktf.booleanToTerraform(struct!.encrypted),
    iops: cdktf.numberToTerraform(struct!.iops),
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    snapshot_id: cdktf.stringToTerraform(struct!.snapshotId),
    throughput: cdktf.numberToTerraform(struct!.throughput),
    volume_size: cdktf.stringToTerraform(struct!.volumeSize),
    volume_type: cdktf.stringToTerraform(struct!.volumeType),
  }
}


export function dataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecBlockDeviceMappingsEbsToHclTerraform(struct?: DataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecBlockDeviceMappingsEbs | cdktf.IResolvable): any {
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
      value: cdktf.stringToHclTerraform(struct!.volumeSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecBlockDeviceMappingsEbsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecBlockDeviceMappingsEbs | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecBlockDeviceMappingsEbs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deleteOnTermination = undefined;
      this._encrypted = undefined;
      this._iops = undefined;
      this._kmsKeyId = undefined;
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
  private _volumeSize?: string; 
  public get volumeSize() {
    return this.getStringAttribute('volume_size');
  }
  public set volumeSize(value: string) {
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
export interface DataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecBlockDeviceMappings {
  /**
  * The device name (for example, /dev/sdh or xvdh).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_k8s_aws_ec2_node_class_v1_manifest#device_name DataK8SKarpenterK8SAwsEc2NodeClassV1Manifest#device_name}
  */
  readonly deviceName?: string;
  /**
  * EBS contains parameters used to automatically set up EBS volumes when an instance is launched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_k8s_aws_ec2_node_class_v1_manifest#ebs DataK8SKarpenterK8SAwsEc2NodeClassV1Manifest#ebs}
  */
  readonly ebs?: DataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecBlockDeviceMappingsEbs;
  /**
  * RootVolume is a flag indicating if this device is mounted as kubelet root dir. You can configure at most one root volume in BlockDeviceMappings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_k8s_aws_ec2_node_class_v1_manifest#root_volume DataK8SKarpenterK8SAwsEc2NodeClassV1Manifest#root_volume}
  */
  readonly rootVolume?: boolean | cdktf.IResolvable;
}

export function dataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecBlockDeviceMappingsToTerraform(struct?: DataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecBlockDeviceMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_name: cdktf.stringToTerraform(struct!.deviceName),
    ebs: dataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecBlockDeviceMappingsEbsToTerraform(struct!.ebs),
    root_volume: cdktf.booleanToTerraform(struct!.rootVolume),
  }
}


export function dataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecBlockDeviceMappingsToHclTerraform(struct?: DataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecBlockDeviceMappings | cdktf.IResolvable): any {
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
      value: dataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecBlockDeviceMappingsEbsToHclTerraform(struct!.ebs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecBlockDeviceMappingsEbs",
    },
    root_volume: {
      value: cdktf.booleanToHclTerraform(struct!.rootVolume),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecBlockDeviceMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecBlockDeviceMappings | cdktf.IResolvable | undefined {
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
    if (this._rootVolume !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootVolume = this._rootVolume;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecBlockDeviceMappings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deviceName = undefined;
      this._ebs.internalValue = undefined;
      this._rootVolume = undefined;
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
      this._rootVolume = value.rootVolume;
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
  private _ebs = new DataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecBlockDeviceMappingsEbsOutputReference(this, "ebs");
  public get ebs() {
    return this._ebs;
  }
  public putEbs(value: DataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecBlockDeviceMappingsEbs) {
    this._ebs.internalValue = value;
  }
  public resetEbs() {
    this._ebs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsInput() {
    return this._ebs.internalValue;
  }

  // root_volume - computed: false, optional: true, required: false
  private _rootVolume?: boolean | cdktf.IResolvable; 
  public get rootVolume() {
    return this.getBooleanAttribute('root_volume');
  }
  public set rootVolume(value: boolean | cdktf.IResolvable) {
    this._rootVolume = value;
  }
  public resetRootVolume() {
    this._rootVolume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootVolumeInput() {
    return this._rootVolume;
  }
}

export class DataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecBlockDeviceMappingsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecBlockDeviceMappings[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecBlockDeviceMappingsOutputReference {
    return new DataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecBlockDeviceMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecKubelet {
  /**
  * clusterDNS is a list of IP addresses for the cluster DNS server. Note that not all providers may use all addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_k8s_aws_ec2_node_class_v1_manifest#cluster_dns DataK8SKarpenterK8SAwsEc2NodeClassV1Manifest#cluster_dns}
  */
  readonly clusterDns?: string[];
  /**
  * CPUCFSQuota enables CPU CFS quota enforcement for containers that specify CPU limits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_k8s_aws_ec2_node_class_v1_manifest#cpu_cfs_quota DataK8SKarpenterK8SAwsEc2NodeClassV1Manifest#cpu_cfs_quota}
  */
  readonly cpuCfsQuota?: boolean | cdktf.IResolvable;
  /**
  * EvictionHard is the map of signal names to quantities that define hard eviction thresholds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_k8s_aws_ec2_node_class_v1_manifest#eviction_hard DataK8SKarpenterK8SAwsEc2NodeClassV1Manifest#eviction_hard}
  */
  readonly evictionHard?: { [key: string]: string };
  /**
  * EvictionMaxPodGracePeriod is the maximum allowed grace period (in seconds) to use when terminating pods in response to soft eviction thresholds being met.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_k8s_aws_ec2_node_class_v1_manifest#eviction_max_pod_grace_period DataK8SKarpenterK8SAwsEc2NodeClassV1Manifest#eviction_max_pod_grace_period}
  */
  readonly evictionMaxPodGracePeriod?: number;
  /**
  * EvictionSoft is the map of signal names to quantities that define soft eviction thresholds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_k8s_aws_ec2_node_class_v1_manifest#eviction_soft DataK8SKarpenterK8SAwsEc2NodeClassV1Manifest#eviction_soft}
  */
  readonly evictionSoft?: { [key: string]: string };
  /**
  * EvictionSoftGracePeriod is the map of signal names to quantities that define grace periods for each eviction signal
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_k8s_aws_ec2_node_class_v1_manifest#eviction_soft_grace_period DataK8SKarpenterK8SAwsEc2NodeClassV1Manifest#eviction_soft_grace_period}
  */
  readonly evictionSoftGracePeriod?: { [key: string]: string };
  /**
  * ImageGCHighThresholdPercent is the percent of disk usage after which image garbage collection is always run. The percent is calculated by dividing this field value by 100, so this field must be between 0 and 100, inclusive. When specified, the value must be greater than ImageGCLowThresholdPercent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_k8s_aws_ec2_node_class_v1_manifest#image_gc_high_threshold_percent DataK8SKarpenterK8SAwsEc2NodeClassV1Manifest#image_gc_high_threshold_percent}
  */
  readonly imageGcHighThresholdPercent?: number;
  /**
  * ImageGCLowThresholdPercent is the percent of disk usage before which image garbage collection is never run. Lowest disk usage to garbage collect to. The percent is calculated by dividing this field value by 100, so the field value must be between 0 and 100, inclusive. When specified, the value must be less than imageGCHighThresholdPercent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_k8s_aws_ec2_node_class_v1_manifest#image_gc_low_threshold_percent DataK8SKarpenterK8SAwsEc2NodeClassV1Manifest#image_gc_low_threshold_percent}
  */
  readonly imageGcLowThresholdPercent?: number;
  /**
  * KubeReserved contains resources reserved for Kubernetes system components.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_k8s_aws_ec2_node_class_v1_manifest#kube_reserved DataK8SKarpenterK8SAwsEc2NodeClassV1Manifest#kube_reserved}
  */
  readonly kubeReserved?: { [key: string]: string };
  /**
  * MaxPods is an override for the maximum number of pods that can run on a worker node instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_k8s_aws_ec2_node_class_v1_manifest#max_pods DataK8SKarpenterK8SAwsEc2NodeClassV1Manifest#max_pods}
  */
  readonly maxPods?: number;
  /**
  * PodsPerCore is an override for the number of pods that can run on a worker node instance based on the number of cpu cores. This value cannot exceed MaxPods, so, if MaxPods is a lower value, that value will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_k8s_aws_ec2_node_class_v1_manifest#pods_per_core DataK8SKarpenterK8SAwsEc2NodeClassV1Manifest#pods_per_core}
  */
  readonly podsPerCore?: number;
  /**
  * SystemReserved contains resources reserved for OS system daemons and kernel memory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_k8s_aws_ec2_node_class_v1_manifest#system_reserved DataK8SKarpenterK8SAwsEc2NodeClassV1Manifest#system_reserved}
  */
  readonly systemReserved?: { [key: string]: string };
}

export function dataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecKubeletToTerraform(struct?: DataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecKubelet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_dns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.clusterDns),
    cpu_cfs_quota: cdktf.booleanToTerraform(struct!.cpuCfsQuota),
    eviction_hard: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.evictionHard),
    eviction_max_pod_grace_period: cdktf.numberToTerraform(struct!.evictionMaxPodGracePeriod),
    eviction_soft: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.evictionSoft),
    eviction_soft_grace_period: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.evictionSoftGracePeriod),
    image_gc_high_threshold_percent: cdktf.numberToTerraform(struct!.imageGcHighThresholdPercent),
    image_gc_low_threshold_percent: cdktf.numberToTerraform(struct!.imageGcLowThresholdPercent),
    kube_reserved: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.kubeReserved),
    max_pods: cdktf.numberToTerraform(struct!.maxPods),
    pods_per_core: cdktf.numberToTerraform(struct!.podsPerCore),
    system_reserved: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.systemReserved),
  }
}


export function dataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecKubeletToHclTerraform(struct?: DataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecKubelet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_dns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.clusterDns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    cpu_cfs_quota: {
      value: cdktf.booleanToHclTerraform(struct!.cpuCfsQuota),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    eviction_hard: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.evictionHard),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    eviction_max_pod_grace_period: {
      value: cdktf.numberToHclTerraform(struct!.evictionMaxPodGracePeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    eviction_soft: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.evictionSoft),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    eviction_soft_grace_period: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.evictionSoftGracePeriod),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    image_gc_high_threshold_percent: {
      value: cdktf.numberToHclTerraform(struct!.imageGcHighThresholdPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    image_gc_low_threshold_percent: {
      value: cdktf.numberToHclTerraform(struct!.imageGcLowThresholdPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kube_reserved: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.kubeReserved),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    max_pods: {
      value: cdktf.numberToHclTerraform(struct!.maxPods),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pods_per_core: {
      value: cdktf.numberToHclTerraform(struct!.podsPerCore),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    system_reserved: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.systemReserved),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecKubeletOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecKubelet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterDns !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterDns = this._clusterDns;
    }
    if (this._cpuCfsQuota !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuCfsQuota = this._cpuCfsQuota;
    }
    if (this._evictionHard !== undefined) {
      hasAnyValues = true;
      internalValueResult.evictionHard = this._evictionHard;
    }
    if (this._evictionMaxPodGracePeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.evictionMaxPodGracePeriod = this._evictionMaxPodGracePeriod;
    }
    if (this._evictionSoft !== undefined) {
      hasAnyValues = true;
      internalValueResult.evictionSoft = this._evictionSoft;
    }
    if (this._evictionSoftGracePeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.evictionSoftGracePeriod = this._evictionSoftGracePeriod;
    }
    if (this._imageGcHighThresholdPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageGcHighThresholdPercent = this._imageGcHighThresholdPercent;
    }
    if (this._imageGcLowThresholdPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageGcLowThresholdPercent = this._imageGcLowThresholdPercent;
    }
    if (this._kubeReserved !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeReserved = this._kubeReserved;
    }
    if (this._maxPods !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPods = this._maxPods;
    }
    if (this._podsPerCore !== undefined) {
      hasAnyValues = true;
      internalValueResult.podsPerCore = this._podsPerCore;
    }
    if (this._systemReserved !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemReserved = this._systemReserved;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecKubelet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterDns = undefined;
      this._cpuCfsQuota = undefined;
      this._evictionHard = undefined;
      this._evictionMaxPodGracePeriod = undefined;
      this._evictionSoft = undefined;
      this._evictionSoftGracePeriod = undefined;
      this._imageGcHighThresholdPercent = undefined;
      this._imageGcLowThresholdPercent = undefined;
      this._kubeReserved = undefined;
      this._maxPods = undefined;
      this._podsPerCore = undefined;
      this._systemReserved = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterDns = value.clusterDns;
      this._cpuCfsQuota = value.cpuCfsQuota;
      this._evictionHard = value.evictionHard;
      this._evictionMaxPodGracePeriod = value.evictionMaxPodGracePeriod;
      this._evictionSoft = value.evictionSoft;
      this._evictionSoftGracePeriod = value.evictionSoftGracePeriod;
      this._imageGcHighThresholdPercent = value.imageGcHighThresholdPercent;
      this._imageGcLowThresholdPercent = value.imageGcLowThresholdPercent;
      this._kubeReserved = value.kubeReserved;
      this._maxPods = value.maxPods;
      this._podsPerCore = value.podsPerCore;
      this._systemReserved = value.systemReserved;
    }
  }

  // cluster_dns - computed: false, optional: true, required: false
  private _clusterDns?: string[]; 
  public get clusterDns() {
    return this.getListAttribute('cluster_dns');
  }
  public set clusterDns(value: string[]) {
    this._clusterDns = value;
  }
  public resetClusterDns() {
    this._clusterDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterDnsInput() {
    return this._clusterDns;
  }

  // cpu_cfs_quota - computed: false, optional: true, required: false
  private _cpuCfsQuota?: boolean | cdktf.IResolvable; 
  public get cpuCfsQuota() {
    return this.getBooleanAttribute('cpu_cfs_quota');
  }
  public set cpuCfsQuota(value: boolean | cdktf.IResolvable) {
    this._cpuCfsQuota = value;
  }
  public resetCpuCfsQuota() {
    this._cpuCfsQuota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuCfsQuotaInput() {
    return this._cpuCfsQuota;
  }

  // eviction_hard - computed: false, optional: true, required: false
  private _evictionHard?: { [key: string]: string }; 
  public get evictionHard() {
    return this.getStringMapAttribute('eviction_hard');
  }
  public set evictionHard(value: { [key: string]: string }) {
    this._evictionHard = value;
  }
  public resetEvictionHard() {
    this._evictionHard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evictionHardInput() {
    return this._evictionHard;
  }

  // eviction_max_pod_grace_period - computed: false, optional: true, required: false
  private _evictionMaxPodGracePeriod?: number; 
  public get evictionMaxPodGracePeriod() {
    return this.getNumberAttribute('eviction_max_pod_grace_period');
  }
  public set evictionMaxPodGracePeriod(value: number) {
    this._evictionMaxPodGracePeriod = value;
  }
  public resetEvictionMaxPodGracePeriod() {
    this._evictionMaxPodGracePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evictionMaxPodGracePeriodInput() {
    return this._evictionMaxPodGracePeriod;
  }

  // eviction_soft - computed: false, optional: true, required: false
  private _evictionSoft?: { [key: string]: string }; 
  public get evictionSoft() {
    return this.getStringMapAttribute('eviction_soft');
  }
  public set evictionSoft(value: { [key: string]: string }) {
    this._evictionSoft = value;
  }
  public resetEvictionSoft() {
    this._evictionSoft = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evictionSoftInput() {
    return this._evictionSoft;
  }

  // eviction_soft_grace_period - computed: false, optional: true, required: false
  private _evictionSoftGracePeriod?: { [key: string]: string }; 
  public get evictionSoftGracePeriod() {
    return this.getStringMapAttribute('eviction_soft_grace_period');
  }
  public set evictionSoftGracePeriod(value: { [key: string]: string }) {
    this._evictionSoftGracePeriod = value;
  }
  public resetEvictionSoftGracePeriod() {
    this._evictionSoftGracePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evictionSoftGracePeriodInput() {
    return this._evictionSoftGracePeriod;
  }

  // image_gc_high_threshold_percent - computed: false, optional: true, required: false
  private _imageGcHighThresholdPercent?: number; 
  public get imageGcHighThresholdPercent() {
    return this.getNumberAttribute('image_gc_high_threshold_percent');
  }
  public set imageGcHighThresholdPercent(value: number) {
    this._imageGcHighThresholdPercent = value;
  }
  public resetImageGcHighThresholdPercent() {
    this._imageGcHighThresholdPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageGcHighThresholdPercentInput() {
    return this._imageGcHighThresholdPercent;
  }

  // image_gc_low_threshold_percent - computed: false, optional: true, required: false
  private _imageGcLowThresholdPercent?: number; 
  public get imageGcLowThresholdPercent() {
    return this.getNumberAttribute('image_gc_low_threshold_percent');
  }
  public set imageGcLowThresholdPercent(value: number) {
    this._imageGcLowThresholdPercent = value;
  }
  public resetImageGcLowThresholdPercent() {
    this._imageGcLowThresholdPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageGcLowThresholdPercentInput() {
    return this._imageGcLowThresholdPercent;
  }

  // kube_reserved - computed: false, optional: true, required: false
  private _kubeReserved?: { [key: string]: string }; 
  public get kubeReserved() {
    return this.getStringMapAttribute('kube_reserved');
  }
  public set kubeReserved(value: { [key: string]: string }) {
    this._kubeReserved = value;
  }
  public resetKubeReserved() {
    this._kubeReserved = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeReservedInput() {
    return this._kubeReserved;
  }

  // max_pods - computed: false, optional: true, required: false
  private _maxPods?: number; 
  public get maxPods() {
    return this.getNumberAttribute('max_pods');
  }
  public set maxPods(value: number) {
    this._maxPods = value;
  }
  public resetMaxPods() {
    this._maxPods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPodsInput() {
    return this._maxPods;
  }

  // pods_per_core - computed: false, optional: true, required: false
  private _podsPerCore?: number; 
  public get podsPerCore() {
    return this.getNumberAttribute('pods_per_core');
  }
  public set podsPerCore(value: number) {
    this._podsPerCore = value;
  }
  public resetPodsPerCore() {
    this._podsPerCore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podsPerCoreInput() {
    return this._podsPerCore;
  }

  // system_reserved - computed: false, optional: true, required: false
  private _systemReserved?: { [key: string]: string }; 
  public get systemReserved() {
    return this.getStringMapAttribute('system_reserved');
  }
  public set systemReserved(value: { [key: string]: string }) {
    this._systemReserved = value;
  }
  public resetSystemReserved() {
    this._systemReserved = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemReservedInput() {
    return this._systemReserved;
  }
}
export interface DataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecMetadataOptions {
  /**
  * HTTPEndpoint enables or disables the HTTP metadata endpoint on provisioned nodes. If metadata options is non-nil, but this parameter is not specified, the default state is 'enabled'. If you specify a value of 'disabled', instance metadata will not be accessible on the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_k8s_aws_ec2_node_class_v1_manifest#http_endpoint DataK8SKarpenterK8SAwsEc2NodeClassV1Manifest#http_endpoint}
  */
  readonly httpEndpoint?: string;
  /**
  * HTTPProtocolIPv6 enables or disables the IPv6 endpoint for the instance metadata service on provisioned nodes. If metadata options is non-nil, but this parameter is not specified, the default state is 'disabled'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_k8s_aws_ec2_node_class_v1_manifest#http_protocol_i_pv6 DataK8SKarpenterK8SAwsEc2NodeClassV1Manifest#http_protocol_i_pv6}
  */
  readonly httpProtocolIPv6?: string;
  /**
  * HTTPPutResponseHopLimit is the desired HTTP PUT response hop limit for instance metadata requests. The larger the number, the further instance metadata requests can travel. Possible values are integers from 1 to 64. If metadata options is non-nil, but this parameter is not specified, the default value is 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_k8s_aws_ec2_node_class_v1_manifest#http_put_response_hop_limit DataK8SKarpenterK8SAwsEc2NodeClassV1Manifest#http_put_response_hop_limit}
  */
  readonly httpPutResponseHopLimit?: number;
  /**
  * HTTPTokens determines the state of token usage for instance metadata requests. If metadata options is non-nil, but this parameter is not specified, the default state is 'required'. If the state is optional, one can choose to retrieve instance metadata with or without a signed token header on the request. If one retrieves the IAM role credentials without a token, the version 1.0 role credentials are returned. If one retrieves the IAM role credentials using a valid signed token, the version 2.0 role credentials are returned. If the state is 'required', one must send a signed token header with any instance metadata retrieval requests. In this state, retrieving the IAM role credentials always returns the version 2.0 credentials; the version 1.0 credentials are not available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_k8s_aws_ec2_node_class_v1_manifest#http_tokens DataK8SKarpenterK8SAwsEc2NodeClassV1Manifest#http_tokens}
  */
  readonly httpTokens?: string;
}

export function dataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecMetadataOptionsToTerraform(struct?: DataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecMetadataOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_endpoint: cdktf.stringToTerraform(struct!.httpEndpoint),
    http_protocol_i_pv6: cdktf.stringToTerraform(struct!.httpProtocolIPv6),
    http_put_response_hop_limit: cdktf.numberToTerraform(struct!.httpPutResponseHopLimit),
    http_tokens: cdktf.stringToTerraform(struct!.httpTokens),
  }
}


export function dataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecMetadataOptionsToHclTerraform(struct?: DataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecMetadataOptions | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecMetadataOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecMetadataOptions | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecMetadataOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._httpEndpoint = undefined;
      this._httpProtocolIPv6 = undefined;
      this._httpPutResponseHopLimit = undefined;
      this._httpTokens = undefined;
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
}
export interface DataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecSecurityGroupSelectorTerms {
  /**
  * ID is the security group id in EC2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_k8s_aws_ec2_node_class_v1_manifest#id DataK8SKarpenterK8SAwsEc2NodeClassV1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name is the security group name in EC2. This value is the name field, which is different from the name tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_k8s_aws_ec2_node_class_v1_manifest#name DataK8SKarpenterK8SAwsEc2NodeClassV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Tags is a map of key/value tags used to select subnets Specifying '*' for a value selects all values for a given tag key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_k8s_aws_ec2_node_class_v1_manifest#tags DataK8SKarpenterK8SAwsEc2NodeClassV1Manifest#tags}
  */
  readonly tags?: { [key: string]: string };
}

export function dataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecSecurityGroupSelectorTermsToTerraform(struct?: DataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecSecurityGroupSelectorTerms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
  }
}


export function dataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecSecurityGroupSelectorTermsToHclTerraform(struct?: DataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecSecurityGroupSelectorTerms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecSecurityGroupSelectorTermsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecSecurityGroupSelectorTerms | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecSecurityGroupSelectorTerms | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
      this._tags = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
      this._tags = value.tags;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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
}

export class DataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecSecurityGroupSelectorTermsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecSecurityGroupSelectorTerms[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecSecurityGroupSelectorTermsOutputReference {
    return new DataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecSecurityGroupSelectorTermsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecSubnetSelectorTerms {
  /**
  * ID is the subnet id in EC2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_k8s_aws_ec2_node_class_v1_manifest#id DataK8SKarpenterK8SAwsEc2NodeClassV1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Tags is a map of key/value tags used to select subnets Specifying '*' for a value selects all values for a given tag key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_k8s_aws_ec2_node_class_v1_manifest#tags DataK8SKarpenterK8SAwsEc2NodeClassV1Manifest#tags}
  */
  readonly tags?: { [key: string]: string };
}

export function dataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecSubnetSelectorTermsToTerraform(struct?: DataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecSubnetSelectorTerms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
  }
}


export function dataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecSubnetSelectorTermsToHclTerraform(struct?: DataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecSubnetSelectorTerms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecSubnetSelectorTermsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecSubnetSelectorTerms | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecSubnetSelectorTerms | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._tags = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._tags = value.tags;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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
}

export class DataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecSubnetSelectorTermsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecSubnetSelectorTerms[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecSubnetSelectorTermsOutputReference {
    return new DataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecSubnetSelectorTermsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpec {
  /**
  * AMIFamily dictates the UserData format and default BlockDeviceMappings used when generating launch templates. This field is optional when using an alias amiSelectorTerm, and the value will be inferred from the alias' family. When an alias is specified, this field may only be set to its corresponding family or 'Custom'. If no alias is specified, this field is required. NOTE: We ignore the AMIFamily for hashing here because we hash the AMIFamily dynamically by using the alias using the AMIFamily() helper function
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_k8s_aws_ec2_node_class_v1_manifest#ami_family DataK8SKarpenterK8SAwsEc2NodeClassV1Manifest#ami_family}
  */
  readonly amiFamily?: string;
  /**
  * AMISelectorTerms is a list of or ami selector terms. The terms are ORed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_k8s_aws_ec2_node_class_v1_manifest#ami_selector_terms DataK8SKarpenterK8SAwsEc2NodeClassV1Manifest#ami_selector_terms}
  */
  readonly amiSelectorTerms: DataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecAmiSelectorTerms[] | cdktf.IResolvable;
  /**
  * AssociatePublicIPAddress controls if public IP addresses are assigned to instances that are launched with the nodeclass.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_k8s_aws_ec2_node_class_v1_manifest#associate_public_ip_address DataK8SKarpenterK8SAwsEc2NodeClassV1Manifest#associate_public_ip_address}
  */
  readonly associatePublicIpAddress?: boolean | cdktf.IResolvable;
  /**
  * BlockDeviceMappings to be applied to provisioned nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_k8s_aws_ec2_node_class_v1_manifest#block_device_mappings DataK8SKarpenterK8SAwsEc2NodeClassV1Manifest#block_device_mappings}
  */
  readonly blockDeviceMappings?: DataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecBlockDeviceMappings[] | cdktf.IResolvable;
  /**
  * Context is a Reserved field in EC2 APIs https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateFleet.html
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_k8s_aws_ec2_node_class_v1_manifest#context DataK8SKarpenterK8SAwsEc2NodeClassV1Manifest#context}
  */
  readonly context?: string;
  /**
  * DetailedMonitoring controls if detailed monitoring is enabled for instances that are launched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_k8s_aws_ec2_node_class_v1_manifest#detailed_monitoring DataK8SKarpenterK8SAwsEc2NodeClassV1Manifest#detailed_monitoring}
  */
  readonly detailedMonitoring?: boolean | cdktf.IResolvable;
  /**
  * InstanceProfile is the AWS entity that instances use. This field is mutually exclusive from role. The instance profile should already have a role assigned to it that Karpenter has PassRole permission on for instance launch using this instanceProfile to succeed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_k8s_aws_ec2_node_class_v1_manifest#instance_profile DataK8SKarpenterK8SAwsEc2NodeClassV1Manifest#instance_profile}
  */
  readonly instanceProfile?: string;
  /**
  * InstanceStorePolicy specifies how to handle instance-store disks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_k8s_aws_ec2_node_class_v1_manifest#instance_store_policy DataK8SKarpenterK8SAwsEc2NodeClassV1Manifest#instance_store_policy}
  */
  readonly instanceStorePolicy?: string;
  /**
  * Kubelet defines args to be used when configuring kubelet on provisioned nodes. They are a subset of the upstream types, recognizing not all options may be supported. Wherever possible, the types and names should reflect the upstream kubelet types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_k8s_aws_ec2_node_class_v1_manifest#kubelet DataK8SKarpenterK8SAwsEc2NodeClassV1Manifest#kubelet}
  */
  readonly kubelet?: DataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecKubelet;
  /**
  * MetadataOptions for the generated launch template of provisioned nodes. This specifies the exposure of the Instance Metadata Service to provisioned EC2 nodes. For more information, see Instance Metadata and User Data (https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html) in the Amazon Elastic Compute Cloud User Guide. Refer to recommended, security best practices (https://aws.github.io/aws-eks-best-practices/security/docs/iam/#restrict-access-to-the-instance-profile-assigned-to-the-worker-node) for limiting exposure of Instance Metadata and User Data to pods. If omitted, defaults to httpEndpoint enabled, with httpProtocolIPv6 disabled, with httpPutResponseLimit of 1, and with httpTokens required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_k8s_aws_ec2_node_class_v1_manifest#metadata_options DataK8SKarpenterK8SAwsEc2NodeClassV1Manifest#metadata_options}
  */
  readonly metadataOptions?: DataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecMetadataOptions;
  /**
  * Role is the AWS identity that nodes use. This field is immutable. This field is mutually exclusive from instanceProfile. Marking this field as immutable avoids concerns around terminating managed instance profiles from running instances. This field may be made mutable in the future, assuming the correct garbage collection and drift handling is implemented for the old instance profiles on an update.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_k8s_aws_ec2_node_class_v1_manifest#role DataK8SKarpenterK8SAwsEc2NodeClassV1Manifest#role}
  */
  readonly role?: string;
  /**
  * SecurityGroupSelectorTerms is a list of or security group selector terms. The terms are ORed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_k8s_aws_ec2_node_class_v1_manifest#security_group_selector_terms DataK8SKarpenterK8SAwsEc2NodeClassV1Manifest#security_group_selector_terms}
  */
  readonly securityGroupSelectorTerms: DataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecSecurityGroupSelectorTerms[] | cdktf.IResolvable;
  /**
  * SubnetSelectorTerms is a list of or subnet selector terms. The terms are ORed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_k8s_aws_ec2_node_class_v1_manifest#subnet_selector_terms DataK8SKarpenterK8SAwsEc2NodeClassV1Manifest#subnet_selector_terms}
  */
  readonly subnetSelectorTerms: DataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecSubnetSelectorTerms[] | cdktf.IResolvable;
  /**
  * Tags to be applied on ec2 resources like instances and launch templates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_k8s_aws_ec2_node_class_v1_manifest#tags DataK8SKarpenterK8SAwsEc2NodeClassV1Manifest#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * UserData to be applied to the provisioned nodes. It must be in the appropriate format based on the AMIFamily in use. Karpenter will merge certain fields into this UserData to ensure nodes are being provisioned with the correct configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_k8s_aws_ec2_node_class_v1_manifest#user_data DataK8SKarpenterK8SAwsEc2NodeClassV1Manifest#user_data}
  */
  readonly userData?: string;
}

export function dataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecToTerraform(struct?: DataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ami_family: cdktf.stringToTerraform(struct!.amiFamily),
    ami_selector_terms: cdktf.listMapper(dataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecAmiSelectorTermsToTerraform, false)(struct!.amiSelectorTerms),
    associate_public_ip_address: cdktf.booleanToTerraform(struct!.associatePublicIpAddress),
    block_device_mappings: cdktf.listMapper(dataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecBlockDeviceMappingsToTerraform, false)(struct!.blockDeviceMappings),
    context: cdktf.stringToTerraform(struct!.context),
    detailed_monitoring: cdktf.booleanToTerraform(struct!.detailedMonitoring),
    instance_profile: cdktf.stringToTerraform(struct!.instanceProfile),
    instance_store_policy: cdktf.stringToTerraform(struct!.instanceStorePolicy),
    kubelet: dataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecKubeletToTerraform(struct!.kubelet),
    metadata_options: dataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecMetadataOptionsToTerraform(struct!.metadataOptions),
    role: cdktf.stringToTerraform(struct!.role),
    security_group_selector_terms: cdktf.listMapper(dataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecSecurityGroupSelectorTermsToTerraform, false)(struct!.securityGroupSelectorTerms),
    subnet_selector_terms: cdktf.listMapper(dataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecSubnetSelectorTermsToTerraform, false)(struct!.subnetSelectorTerms),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
    user_data: cdktf.stringToTerraform(struct!.userData),
  }
}


export function dataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecToHclTerraform(struct?: DataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ami_family: {
      value: cdktf.stringToHclTerraform(struct!.amiFamily),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ami_selector_terms: {
      value: cdktf.listMapperHcl(dataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecAmiSelectorTermsToHclTerraform, false)(struct!.amiSelectorTerms),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecAmiSelectorTermsList",
    },
    associate_public_ip_address: {
      value: cdktf.booleanToHclTerraform(struct!.associatePublicIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    block_device_mappings: {
      value: cdktf.listMapperHcl(dataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecBlockDeviceMappingsToHclTerraform, false)(struct!.blockDeviceMappings),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecBlockDeviceMappingsList",
    },
    context: {
      value: cdktf.stringToHclTerraform(struct!.context),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    detailed_monitoring: {
      value: cdktf.booleanToHclTerraform(struct!.detailedMonitoring),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    instance_profile: {
      value: cdktf.stringToHclTerraform(struct!.instanceProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_store_policy: {
      value: cdktf.stringToHclTerraform(struct!.instanceStorePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kubelet: {
      value: dataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecKubeletToHclTerraform(struct!.kubelet),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecKubelet",
    },
    metadata_options: {
      value: dataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecMetadataOptionsToHclTerraform(struct!.metadataOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecMetadataOptions",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_group_selector_terms: {
      value: cdktf.listMapperHcl(dataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecSecurityGroupSelectorTermsToHclTerraform, false)(struct!.securityGroupSelectorTerms),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecSecurityGroupSelectorTermsList",
    },
    subnet_selector_terms: {
      value: cdktf.listMapperHcl(dataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecSubnetSelectorTermsToHclTerraform, false)(struct!.subnetSelectorTerms),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecSubnetSelectorTermsList",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
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

export class DataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._amiFamily !== undefined) {
      hasAnyValues = true;
      internalValueResult.amiFamily = this._amiFamily;
    }
    if (this._amiSelectorTerms?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.amiSelectorTerms = this._amiSelectorTerms?.internalValue;
    }
    if (this._associatePublicIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.associatePublicIpAddress = this._associatePublicIpAddress;
    }
    if (this._blockDeviceMappings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockDeviceMappings = this._blockDeviceMappings?.internalValue;
    }
    if (this._context !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context;
    }
    if (this._detailedMonitoring !== undefined) {
      hasAnyValues = true;
      internalValueResult.detailedMonitoring = this._detailedMonitoring;
    }
    if (this._instanceProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceProfile = this._instanceProfile;
    }
    if (this._instanceStorePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceStorePolicy = this._instanceStorePolicy;
    }
    if (this._kubelet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubelet = this._kubelet?.internalValue;
    }
    if (this._metadataOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataOptions = this._metadataOptions?.internalValue;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._securityGroupSelectorTerms?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupSelectorTerms = this._securityGroupSelectorTerms?.internalValue;
    }
    if (this._subnetSelectorTerms?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetSelectorTerms = this._subnetSelectorTerms?.internalValue;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._userData !== undefined) {
      hasAnyValues = true;
      internalValueResult.userData = this._userData;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._amiFamily = undefined;
      this._amiSelectorTerms.internalValue = undefined;
      this._associatePublicIpAddress = undefined;
      this._blockDeviceMappings.internalValue = undefined;
      this._context = undefined;
      this._detailedMonitoring = undefined;
      this._instanceProfile = undefined;
      this._instanceStorePolicy = undefined;
      this._kubelet.internalValue = undefined;
      this._metadataOptions.internalValue = undefined;
      this._role = undefined;
      this._securityGroupSelectorTerms.internalValue = undefined;
      this._subnetSelectorTerms.internalValue = undefined;
      this._tags = undefined;
      this._userData = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._amiFamily = value.amiFamily;
      this._amiSelectorTerms.internalValue = value.amiSelectorTerms;
      this._associatePublicIpAddress = value.associatePublicIpAddress;
      this._blockDeviceMappings.internalValue = value.blockDeviceMappings;
      this._context = value.context;
      this._detailedMonitoring = value.detailedMonitoring;
      this._instanceProfile = value.instanceProfile;
      this._instanceStorePolicy = value.instanceStorePolicy;
      this._kubelet.internalValue = value.kubelet;
      this._metadataOptions.internalValue = value.metadataOptions;
      this._role = value.role;
      this._securityGroupSelectorTerms.internalValue = value.securityGroupSelectorTerms;
      this._subnetSelectorTerms.internalValue = value.subnetSelectorTerms;
      this._tags = value.tags;
      this._userData = value.userData;
    }
  }

  // ami_family - computed: false, optional: true, required: false
  private _amiFamily?: string; 
  public get amiFamily() {
    return this.getStringAttribute('ami_family');
  }
  public set amiFamily(value: string) {
    this._amiFamily = value;
  }
  public resetAmiFamily() {
    this._amiFamily = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amiFamilyInput() {
    return this._amiFamily;
  }

  // ami_selector_terms - computed: false, optional: false, required: true
  private _amiSelectorTerms = new DataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecAmiSelectorTermsList(this, "ami_selector_terms", false);
  public get amiSelectorTerms() {
    return this._amiSelectorTerms;
  }
  public putAmiSelectorTerms(value: DataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecAmiSelectorTerms[] | cdktf.IResolvable) {
    this._amiSelectorTerms.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get amiSelectorTermsInput() {
    return this._amiSelectorTerms.internalValue;
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

  // block_device_mappings - computed: false, optional: true, required: false
  private _blockDeviceMappings = new DataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecBlockDeviceMappingsList(this, "block_device_mappings", false);
  public get blockDeviceMappings() {
    return this._blockDeviceMappings;
  }
  public putBlockDeviceMappings(value: DataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecBlockDeviceMappings[] | cdktf.IResolvable) {
    this._blockDeviceMappings.internalValue = value;
  }
  public resetBlockDeviceMappings() {
    this._blockDeviceMappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockDeviceMappingsInput() {
    return this._blockDeviceMappings.internalValue;
  }

  // context - computed: false, optional: true, required: false
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  public resetContext() {
    this._context = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // detailed_monitoring - computed: false, optional: true, required: false
  private _detailedMonitoring?: boolean | cdktf.IResolvable; 
  public get detailedMonitoring() {
    return this.getBooleanAttribute('detailed_monitoring');
  }
  public set detailedMonitoring(value: boolean | cdktf.IResolvable) {
    this._detailedMonitoring = value;
  }
  public resetDetailedMonitoring() {
    this._detailedMonitoring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detailedMonitoringInput() {
    return this._detailedMonitoring;
  }

  // instance_profile - computed: false, optional: true, required: false
  private _instanceProfile?: string; 
  public get instanceProfile() {
    return this.getStringAttribute('instance_profile');
  }
  public set instanceProfile(value: string) {
    this._instanceProfile = value;
  }
  public resetInstanceProfile() {
    this._instanceProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceProfileInput() {
    return this._instanceProfile;
  }

  // instance_store_policy - computed: false, optional: true, required: false
  private _instanceStorePolicy?: string; 
  public get instanceStorePolicy() {
    return this.getStringAttribute('instance_store_policy');
  }
  public set instanceStorePolicy(value: string) {
    this._instanceStorePolicy = value;
  }
  public resetInstanceStorePolicy() {
    this._instanceStorePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceStorePolicyInput() {
    return this._instanceStorePolicy;
  }

  // kubelet - computed: false, optional: true, required: false
  private _kubelet = new DataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecKubeletOutputReference(this, "kubelet");
  public get kubelet() {
    return this._kubelet;
  }
  public putKubelet(value: DataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecKubelet) {
    this._kubelet.internalValue = value;
  }
  public resetKubelet() {
    this._kubelet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeletInput() {
    return this._kubelet.internalValue;
  }

  // metadata_options - computed: false, optional: true, required: false
  private _metadataOptions = new DataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecMetadataOptionsOutputReference(this, "metadata_options");
  public get metadataOptions() {
    return this._metadataOptions;
  }
  public putMetadataOptions(value: DataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecMetadataOptions) {
    this._metadataOptions.internalValue = value;
  }
  public resetMetadataOptions() {
    this._metadataOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataOptionsInput() {
    return this._metadataOptions.internalValue;
  }

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // security_group_selector_terms - computed: false, optional: false, required: true
  private _securityGroupSelectorTerms = new DataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecSecurityGroupSelectorTermsList(this, "security_group_selector_terms", false);
  public get securityGroupSelectorTerms() {
    return this._securityGroupSelectorTerms;
  }
  public putSecurityGroupSelectorTerms(value: DataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecSecurityGroupSelectorTerms[] | cdktf.IResolvable) {
    this._securityGroupSelectorTerms.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupSelectorTermsInput() {
    return this._securityGroupSelectorTerms.internalValue;
  }

  // subnet_selector_terms - computed: false, optional: false, required: true
  private _subnetSelectorTerms = new DataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecSubnetSelectorTermsList(this, "subnet_selector_terms", false);
  public get subnetSelectorTerms() {
    return this._subnetSelectorTerms;
  }
  public putSubnetSelectorTerms(value: DataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecSubnetSelectorTerms[] | cdktf.IResolvable) {
    this._subnetSelectorTerms.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetSelectorTermsInput() {
    return this._subnetSelectorTerms.internalValue;
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
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_k8s_aws_ec2_node_class_v1_manifest k8s_karpenter_k8s_aws_ec2_node_class_v1_manifest}
*/
export class DataK8SKarpenterK8SAwsEc2NodeClassV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_karpenter_k8s_aws_ec2_node_class_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SKarpenterK8SAwsEc2NodeClassV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SKarpenterK8SAwsEc2NodeClassV1Manifest to import
  * @param importFromId The id of the existing DataK8SKarpenterK8SAwsEc2NodeClassV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_k8s_aws_ec2_node_class_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SKarpenterK8SAwsEc2NodeClassV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_karpenter_k8s_aws_ec2_node_class_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_k8s_aws_ec2_node_class_v1_manifest k8s_karpenter_k8s_aws_ec2_node_class_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SKarpenterK8SAwsEc2NodeClassV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SKarpenterK8SAwsEc2NodeClassV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_karpenter_k8s_aws_ec2_node_class_v1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.17',
        providerVersionConstraint: '2025.11.17'
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
  private _metadata = new DataK8SKarpenterK8SAwsEc2NodeClassV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SKarpenterK8SAwsEc2NodeClassV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpec) {
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
      metadata: dataK8SKarpenterK8SAwsEc2NodeClassV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SKarpenterK8SAwsEc2NodeClassV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKarpenterK8SAwsEc2NodeClassV1ManifestMetadata",
      },
      spec: {
        value: dataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKarpenterK8SAwsEc2NodeClassV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
