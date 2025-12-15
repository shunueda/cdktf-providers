// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SFluentbitFluentIoFilterV1Alpha2ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#metadata DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#metadata}
  */
  readonly metadata: DataK8SFluentbitFluentIoFilterV1Alpha2ManifestMetadata;
  /**
  * FilterSpec defines the desired state of ClusterFilter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#spec DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#spec}
  */
  readonly spec?: DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpec;
}
export interface DataK8SFluentbitFluentIoFilterV1Alpha2ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#annotations DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#labels DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#name DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#namespace DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SFluentbitFluentIoFilterV1Alpha2ManifestMetadataToTerraform(struct?: DataK8SFluentbitFluentIoFilterV1Alpha2ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SFluentbitFluentIoFilterV1Alpha2ManifestMetadataToHclTerraform(struct?: DataK8SFluentbitFluentIoFilterV1Alpha2ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SFluentbitFluentIoFilterV1Alpha2ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentbitFluentIoFilterV1Alpha2ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SFluentbitFluentIoFilterV1Alpha2ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersAws {
  /**
  * The account ID for current EC2 instance.Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#account_id DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#account_id}
  */
  readonly accountId?: boolean | cdktf.IResolvable;
  /**
  * Alias for the plugin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#alias DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#alias}
  */
  readonly alias?: string;
  /**
  * The EC2 instance image id.Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#ami_id DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#ami_id}
  */
  readonly amiId?: boolean | cdktf.IResolvable;
  /**
  * The availability zone; for example, 'us-east-1a'. Default is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#az DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#az}
  */
  readonly az?: boolean | cdktf.IResolvable;
  /**
  * The EC2 instance ID.Default is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#ec2_instance_id DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#ec2_instance_id}
  */
  readonly ec2InstanceId?: boolean | cdktf.IResolvable;
  /**
  * The EC2 instance type.Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#ec2_instance_type DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#ec2_instance_type}
  */
  readonly ec2InstanceType?: boolean | cdktf.IResolvable;
  /**
  * The hostname for current EC2 instance.Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#host_name DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#host_name}
  */
  readonly hostName?: boolean | cdktf.IResolvable;
  /**
  * Specify which version of the instance metadata service to use. Valid values are 'v1' or 'v2'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#imds_version DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#imds_version}
  */
  readonly imdsVersion?: string;
  /**
  * The EC2 instance private ip.Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#private_ip DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#private_ip}
  */
  readonly privateIp?: boolean | cdktf.IResolvable;
  /**
  * RetryLimit describes how many times fluent-bit should retry to send data to a specific output. If set to false fluent-bit will try indefinetly. If set to any integer N>0 it will try at most N+1 times. Leading zeros are not allowed (values such as 007, 0150, 01 do not work). If this property is not defined fluent-bit will use the default value: 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#retry_limit DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#retry_limit}
  */
  readonly retryLimit?: string;
  /**
  * The VPC ID for current EC2 instance.Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#vpc_id DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#vpc_id}
  */
  readonly vpcId?: boolean | cdktf.IResolvable;
}

export function dataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersAwsToTerraform(struct?: DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersAws | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_id: cdktf.booleanToTerraform(struct!.accountId),
    alias: cdktf.stringToTerraform(struct!.alias),
    ami_id: cdktf.booleanToTerraform(struct!.amiId),
    az: cdktf.booleanToTerraform(struct!.az),
    ec2_instance_id: cdktf.booleanToTerraform(struct!.ec2InstanceId),
    ec2_instance_type: cdktf.booleanToTerraform(struct!.ec2InstanceType),
    host_name: cdktf.booleanToTerraform(struct!.hostName),
    imds_version: cdktf.stringToTerraform(struct!.imdsVersion),
    private_ip: cdktf.booleanToTerraform(struct!.privateIp),
    retry_limit: cdktf.stringToTerraform(struct!.retryLimit),
    vpc_id: cdktf.booleanToTerraform(struct!.vpcId),
  }
}


export function dataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersAwsToHclTerraform(struct?: DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersAws | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_id: {
      value: cdktf.booleanToHclTerraform(struct!.accountId),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    alias: {
      value: cdktf.stringToHclTerraform(struct!.alias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ami_id: {
      value: cdktf.booleanToHclTerraform(struct!.amiId),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    az: {
      value: cdktf.booleanToHclTerraform(struct!.az),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ec2_instance_id: {
      value: cdktf.booleanToHclTerraform(struct!.ec2InstanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ec2_instance_type: {
      value: cdktf.booleanToHclTerraform(struct!.ec2InstanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    host_name: {
      value: cdktf.booleanToHclTerraform(struct!.hostName),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    imds_version: {
      value: cdktf.stringToHclTerraform(struct!.imdsVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_ip: {
      value: cdktf.booleanToHclTerraform(struct!.privateIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    retry_limit: {
      value: cdktf.stringToHclTerraform(struct!.retryLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_id: {
      value: cdktf.booleanToHclTerraform(struct!.vpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersAwsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersAws | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountId = this._accountId;
    }
    if (this._alias !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias;
    }
    if (this._amiId !== undefined) {
      hasAnyValues = true;
      internalValueResult.amiId = this._amiId;
    }
    if (this._az !== undefined) {
      hasAnyValues = true;
      internalValueResult.az = this._az;
    }
    if (this._ec2InstanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ec2InstanceId = this._ec2InstanceId;
    }
    if (this._ec2InstanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ec2InstanceType = this._ec2InstanceType;
    }
    if (this._hostName !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostName = this._hostName;
    }
    if (this._imdsVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.imdsVersion = this._imdsVersion;
    }
    if (this._privateIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateIp = this._privateIp;
    }
    if (this._retryLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryLimit = this._retryLimit;
    }
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersAws | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountId = undefined;
      this._alias = undefined;
      this._amiId = undefined;
      this._az = undefined;
      this._ec2InstanceId = undefined;
      this._ec2InstanceType = undefined;
      this._hostName = undefined;
      this._imdsVersion = undefined;
      this._privateIp = undefined;
      this._retryLimit = undefined;
      this._vpcId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountId = value.accountId;
      this._alias = value.alias;
      this._amiId = value.amiId;
      this._az = value.az;
      this._ec2InstanceId = value.ec2InstanceId;
      this._ec2InstanceType = value.ec2InstanceType;
      this._hostName = value.hostName;
      this._imdsVersion = value.imdsVersion;
      this._privateIp = value.privateIp;
      this._retryLimit = value.retryLimit;
      this._vpcId = value.vpcId;
    }
  }

  // account_id - computed: false, optional: true, required: false
  private _accountId?: boolean | cdktf.IResolvable; 
  public get accountId() {
    return this.getBooleanAttribute('account_id');
  }
  public set accountId(value: boolean | cdktf.IResolvable) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
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

  // ami_id - computed: false, optional: true, required: false
  private _amiId?: boolean | cdktf.IResolvable; 
  public get amiId() {
    return this.getBooleanAttribute('ami_id');
  }
  public set amiId(value: boolean | cdktf.IResolvable) {
    this._amiId = value;
  }
  public resetAmiId() {
    this._amiId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amiIdInput() {
    return this._amiId;
  }

  // az - computed: false, optional: true, required: false
  private _az?: boolean | cdktf.IResolvable; 
  public get az() {
    return this.getBooleanAttribute('az');
  }
  public set az(value: boolean | cdktf.IResolvable) {
    this._az = value;
  }
  public resetAz() {
    this._az = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azInput() {
    return this._az;
  }

  // ec2_instance_id - computed: false, optional: true, required: false
  private _ec2InstanceId?: boolean | cdktf.IResolvable; 
  public get ec2InstanceId() {
    return this.getBooleanAttribute('ec2_instance_id');
  }
  public set ec2InstanceId(value: boolean | cdktf.IResolvable) {
    this._ec2InstanceId = value;
  }
  public resetEc2InstanceId() {
    this._ec2InstanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ec2InstanceIdInput() {
    return this._ec2InstanceId;
  }

  // ec2_instance_type - computed: false, optional: true, required: false
  private _ec2InstanceType?: boolean | cdktf.IResolvable; 
  public get ec2InstanceType() {
    return this.getBooleanAttribute('ec2_instance_type');
  }
  public set ec2InstanceType(value: boolean | cdktf.IResolvable) {
    this._ec2InstanceType = value;
  }
  public resetEc2InstanceType() {
    this._ec2InstanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ec2InstanceTypeInput() {
    return this._ec2InstanceType;
  }

  // host_name - computed: false, optional: true, required: false
  private _hostName?: boolean | cdktf.IResolvable; 
  public get hostName() {
    return this.getBooleanAttribute('host_name');
  }
  public set hostName(value: boolean | cdktf.IResolvable) {
    this._hostName = value;
  }
  public resetHostName() {
    this._hostName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameInput() {
    return this._hostName;
  }

  // imds_version - computed: false, optional: true, required: false
  private _imdsVersion?: string; 
  public get imdsVersion() {
    return this.getStringAttribute('imds_version');
  }
  public set imdsVersion(value: string) {
    this._imdsVersion = value;
  }
  public resetImdsVersion() {
    this._imdsVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imdsVersionInput() {
    return this._imdsVersion;
  }

  // private_ip - computed: false, optional: true, required: false
  private _privateIp?: boolean | cdktf.IResolvable; 
  public get privateIp() {
    return this.getBooleanAttribute('private_ip');
  }
  public set privateIp(value: boolean | cdktf.IResolvable) {
    this._privateIp = value;
  }
  public resetPrivateIp() {
    this._privateIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpInput() {
    return this._privateIp;
  }

  // retry_limit - computed: false, optional: true, required: false
  private _retryLimit?: string; 
  public get retryLimit() {
    return this.getStringAttribute('retry_limit');
  }
  public set retryLimit(value: string) {
    this._retryLimit = value;
  }
  public resetRetryLimit() {
    this._retryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryLimitInput() {
    return this._retryLimit;
  }

  // vpc_id - computed: false, optional: true, required: false
  private _vpcId?: boolean | cdktf.IResolvable; 
  public get vpcId() {
    return this.getBooleanAttribute('vpc_id');
  }
  public set vpcId(value: boolean | cdktf.IResolvable) {
    this._vpcId = value;
  }
  public resetVpcId() {
    this._vpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }
}
export interface DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersCustomPlugin {
  /**
  * Config holds any unsupported plugins classic configurations, if ConfigFileFormat is set to yaml, this filed will be ignored
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#config DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#config}
  */
  readonly config?: string;
  /**
  * YamlConfig holds the unsupported plugins yaml configurations, it only works when the ConfigFileFormat is yaml
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#yaml_config DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#yaml_config}
  */
  readonly yamlConfig?: { [key: string]: string };
}

export function dataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersCustomPluginToTerraform(struct?: DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersCustomPlugin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: cdktf.stringToTerraform(struct!.config),
    yaml_config: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.yamlConfig),
  }
}


export function dataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersCustomPluginToHclTerraform(struct?: DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersCustomPlugin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config: {
      value: cdktf.stringToHclTerraform(struct!.config),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    yaml_config: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.yamlConfig),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersCustomPluginOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersCustomPlugin | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config;
    }
    if (this._yamlConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.yamlConfig = this._yamlConfig;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersCustomPlugin | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._config = undefined;
      this._yamlConfig = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._config = value.config;
      this._yamlConfig = value.yamlConfig;
    }
  }

  // config - computed: false, optional: true, required: false
  private _config?: string; 
  public get config() {
    return this.getStringAttribute('config');
  }
  public set config(value: string) {
    this._config = value;
  }
  public resetConfig() {
    this._config = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
  }

  // yaml_config - computed: false, optional: true, required: false
  private _yamlConfig?: { [key: string]: string }; 
  public get yamlConfig() {
    return this.getStringMapAttribute('yaml_config');
  }
  public set yamlConfig(value: { [key: string]: string }) {
    this._yamlConfig = value;
  }
  public resetYamlConfig() {
    this._yamlConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yamlConfigInput() {
    return this._yamlConfig;
  }
}
export interface DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersGrep {
  /**
  * Alias for the plugin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#alias DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#alias}
  */
  readonly alias?: string;
  /**
  * Exclude records which field matches the regular expression. Value Format: FIELD REGEX
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#exclude DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#exclude}
  */
  readonly exclude?: string;
  /**
  * Keep records which field matches the regular expression. Value Format: FIELD REGEX
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#regex DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#regex}
  */
  readonly regex?: string;
  /**
  * RetryLimit describes how many times fluent-bit should retry to send data to a specific output. If set to false fluent-bit will try indefinetly. If set to any integer N>0 it will try at most N+1 times. Leading zeros are not allowed (values such as 007, 0150, 01 do not work). If this property is not defined fluent-bit will use the default value: 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#retry_limit DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#retry_limit}
  */
  readonly retryLimit?: string;
}

export function dataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersGrepToTerraform(struct?: DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersGrep | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alias: cdktf.stringToTerraform(struct!.alias),
    exclude: cdktf.stringToTerraform(struct!.exclude),
    regex: cdktf.stringToTerraform(struct!.regex),
    retry_limit: cdktf.stringToTerraform(struct!.retryLimit),
  }
}


export function dataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersGrepToHclTerraform(struct?: DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersGrep | cdktf.IResolvable): any {
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
    exclude: {
      value: cdktf.stringToHclTerraform(struct!.exclude),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retry_limit: {
      value: cdktf.stringToHclTerraform(struct!.retryLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersGrepOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersGrep | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alias !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias;
    }
    if (this._exclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclude = this._exclude;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._retryLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryLimit = this._retryLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersGrep | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alias = undefined;
      this._exclude = undefined;
      this._regex = undefined;
      this._retryLimit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alias = value.alias;
      this._exclude = value.exclude;
      this._regex = value.regex;
      this._retryLimit = value.retryLimit;
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

  // exclude - computed: false, optional: true, required: false
  private _exclude?: string; 
  public get exclude() {
    return this.getStringAttribute('exclude');
  }
  public set exclude(value: string) {
    this._exclude = value;
  }
  public resetExclude() {
    this._exclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude;
  }

  // regex - computed: false, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // retry_limit - computed: false, optional: true, required: false
  private _retryLimit?: string; 
  public get retryLimit() {
    return this.getStringAttribute('retry_limit');
  }
  public set retryLimit(value: string) {
    this._retryLimit = value;
  }
  public resetRetryLimit() {
    this._retryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryLimitInput() {
    return this._retryLimit;
  }
}
export interface DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersKubernetes {
  /**
  * Alias for the plugin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#alias DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#alias}
  */
  readonly alias?: string;
  /**
  * Include Kubernetes resource annotations in the extra metadata.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#annotations DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#annotations}
  */
  readonly annotations?: boolean | cdktf.IResolvable;
  /**
  * Set the buffer size for HTTP client when reading responses from Kubernetes API server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#buffer_size DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#buffer_size}
  */
  readonly bufferSize?: string;
  /**
  * When enabled, metadata will be fetched from K8s when docker_id is changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#cache_use_docker_id DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#cache_use_docker_id}
  */
  readonly cacheUseDockerId?: boolean | cdktf.IResolvable;
  /**
  * DNS lookup retries N times until the network start working
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#dns_retries DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#dns_retries}
  */
  readonly dnsRetries?: number;
  /**
  * DNS lookup interval between network status checks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#dns_wait_time DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#dns_wait_time}
  */
  readonly dnsWaitTime?: number;
  /**
  * If set, use dummy-meta data (for test/dev purposes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#dummy_meta DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#dummy_meta}
  */
  readonly dummyMeta?: boolean | cdktf.IResolvable;
  /**
  * Allow Kubernetes Pods to exclude their logs from the log processor (read more about it in Kubernetes Annotations section).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#k8s_logging_exclude DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#k8s_logging_exclude}
  */
  readonly k8SLoggingExclude?: boolean | cdktf.IResolvable;
  /**
  * Allow Kubernetes Pods to suggest a pre-defined Parser (read more about it in Kubernetes Annotations section)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#k8s_logging_parser DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#k8s_logging_parser}
  */
  readonly k8SLoggingParser?: boolean | cdktf.IResolvable;
  /**
  * When Keep_Log is disabled, the log field is removed from the incoming message once it has been successfully merged (Merge_Log must be enabled as well).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#keep_log DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#keep_log}
  */
  readonly keepLog?: boolean | cdktf.IResolvable;
  /**
  * CA certificate file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#kube_ca_file DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#kube_ca_file}
  */
  readonly kubeCaFile?: string;
  /**
  * Absolute path to scan for certificate files
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#kube_ca_path DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#kube_ca_path}
  */
  readonly kubeCaPath?: string;
  /**
  * configurable TTL for K8s cached metadata. By default, it is set to 0 which means TTL for cache entries is disabled and cache entries are evicted at random when capacity is reached. In order to enable this option, you should set the number to a time interval. For example, set this value to 60 or 60s and cache entries which have been created more than 60s will be evicted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#kube_meta_cache_ttl DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#kube_meta_cache_ttl}
  */
  readonly kubeMetaCacheTtl?: string;
  /**
  * Configurable TTL for K8s cached namespace metadata. By default, it is set to 900 which means a 15min TTL for namespace cache entries. Setting this to 0 will mean entries are evicted at random once the cache is full.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#kube_meta_namespace_cache_ttl DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#kube_meta_namespace_cache_ttl}
  */
  readonly kubeMetaNamespaceCacheTtl?: number;
  /**
  * If set, Kubernetes meta-data can be cached/pre-loaded from files in JSON format in this directory, named as namespace-pod.meta
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#kube_meta_preload_cache_dir DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#kube_meta_preload_cache_dir}
  */
  readonly kubeMetaPreloadCacheDir?: string;
  /**
  * When the source records comes from Tail input plugin, this option allows to specify what's the prefix used in Tail configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#kube_tag_prefix DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#kube_tag_prefix}
  */
  readonly kubeTagPrefix?: string;
  /**
  * Command to get Kubernetes authorization token. By default, it will be NULL and we will use token file to get token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#kube_token_command DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#kube_token_command}
  */
  readonly kubeTokenCommand?: string;
  /**
  * Token file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#kube_token_file DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#kube_token_file}
  */
  readonly kubeTokenFile?: string;
  /**
  * configurable 'time to live' for the K8s token. By default, it is set to 600 seconds. After this time, the token is reloaded from Kube_Token_File or the Kube_Token_Command.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#kube_token_ttl DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#kube_token_ttl}
  */
  readonly kubeTokenTtl?: string;
  /**
  * API Server end-point
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#kube_url DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#kube_url}
  */
  readonly kubeUrl?: string;
  /**
  * kubelet host using for HTTP request, this only works when Use_Kubelet set to On.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#kubelet_host DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#kubelet_host}
  */
  readonly kubeletHost?: string;
  /**
  * kubelet port using for HTTP request, this only works when useKubelet is set to On.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#kubelet_port DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#kubelet_port}
  */
  readonly kubeletPort?: number;
  /**
  * Include Kubernetes resource labels in the extra metadata.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#labels DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#labels}
  */
  readonly labels?: boolean | cdktf.IResolvable;
  /**
  * When enabled, it checks if the log field content is a JSON string map, if so, it append the map fields as part of the log structure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#merge_log DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#merge_log}
  */
  readonly mergeLog?: boolean | cdktf.IResolvable;
  /**
  * When Merge_Log is enabled, the filter tries to assume the log field from the incoming message is a JSON string message and make a structured representation of it at the same level of the log field in the map. Now if Merge_Log_Key is set (a string name), all the new structured fields taken from the original log content are inserted under the new key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#merge_log_key DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#merge_log_key}
  */
  readonly mergeLogKey?: string;
  /**
  * When Merge_Log is enabled, trim (remove possible n or r) field values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#merge_log_trim DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#merge_log_trim}
  */
  readonly mergeLogTrim?: boolean | cdktf.IResolvable;
  /**
  * Optional parser name to specify how to parse the data contained in the log key. Recommended use is for developers or testing only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#merge_parser DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#merge_parser}
  */
  readonly mergeParser?: string;
  /**
  * Include Kubernetes namespace resource annotations in the extra metadata.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#namespace_annotations DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#namespace_annotations}
  */
  readonly namespaceAnnotations?: boolean | cdktf.IResolvable;
  /**
  * Include Kubernetes namespace resource labels in the extra metadata.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#namespace_labels DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#namespace_labels}
  */
  readonly namespaceLabels?: boolean | cdktf.IResolvable;
  /**
  * Include Kubernetes namespace metadata only and no pod metadata. If this is set, the values of Labels and Annotations are ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#namespace_metadata_only DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#namespace_metadata_only}
  */
  readonly namespaceMetadataOnly?: boolean | cdktf.IResolvable;
  /**
  * Set an alternative Parser to process record Tag and extract pod_name, namespace_name, container_name and docker_id. The parser must be registered in a parsers file (refer to parser filter-kube-test as an example).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#regex_parser DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#regex_parser}
  */
  readonly regexParser?: string;
  /**
  * RetryLimit describes how many times fluent-bit should retry to send data to a specific output. If set to false fluent-bit will try indefinetly. If set to any integer N>0 it will try at most N+1 times. Leading zeros are not allowed (values such as 007, 0150, 01 do not work). If this property is not defined fluent-bit will use the default value: 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#retry_limit DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#retry_limit}
  */
  readonly retryLimit?: string;
  /**
  * Debug level between 0 (nothing) and 4 (every detail).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#tls_debug DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#tls_debug}
  */
  readonly tlsDebug?: number;
  /**
  * When enabled, turns on certificate validation when connecting to the Kubernetes API server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#tls_verify DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#tls_verify}
  */
  readonly tlsVerify?: boolean | cdktf.IResolvable;
  /**
  * When enabled, the filter reads logs coming in Journald format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#use_journal DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#use_journal}
  */
  readonly useJournal?: boolean | cdktf.IResolvable;
  /**
  * This is an optional feature flag to get metadata information from kubelet instead of calling Kube Server API to enhance the log. This could mitigate the Kube API heavy traffic issue for large cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#use_kubelet DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#use_kubelet}
  */
  readonly useKubelet?: boolean | cdktf.IResolvable;
}

export function dataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersKubernetesToTerraform(struct?: DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersKubernetes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alias: cdktf.stringToTerraform(struct!.alias),
    annotations: cdktf.booleanToTerraform(struct!.annotations),
    buffer_size: cdktf.stringToTerraform(struct!.bufferSize),
    cache_use_docker_id: cdktf.booleanToTerraform(struct!.cacheUseDockerId),
    dns_retries: cdktf.numberToTerraform(struct!.dnsRetries),
    dns_wait_time: cdktf.numberToTerraform(struct!.dnsWaitTime),
    dummy_meta: cdktf.booleanToTerraform(struct!.dummyMeta),
    k8s_logging_exclude: cdktf.booleanToTerraform(struct!.k8SLoggingExclude),
    k8s_logging_parser: cdktf.booleanToTerraform(struct!.k8SLoggingParser),
    keep_log: cdktf.booleanToTerraform(struct!.keepLog),
    kube_ca_file: cdktf.stringToTerraform(struct!.kubeCaFile),
    kube_ca_path: cdktf.stringToTerraform(struct!.kubeCaPath),
    kube_meta_cache_ttl: cdktf.stringToTerraform(struct!.kubeMetaCacheTtl),
    kube_meta_namespace_cache_ttl: cdktf.numberToTerraform(struct!.kubeMetaNamespaceCacheTtl),
    kube_meta_preload_cache_dir: cdktf.stringToTerraform(struct!.kubeMetaPreloadCacheDir),
    kube_tag_prefix: cdktf.stringToTerraform(struct!.kubeTagPrefix),
    kube_token_command: cdktf.stringToTerraform(struct!.kubeTokenCommand),
    kube_token_file: cdktf.stringToTerraform(struct!.kubeTokenFile),
    kube_token_ttl: cdktf.stringToTerraform(struct!.kubeTokenTtl),
    kube_url: cdktf.stringToTerraform(struct!.kubeUrl),
    kubelet_host: cdktf.stringToTerraform(struct!.kubeletHost),
    kubelet_port: cdktf.numberToTerraform(struct!.kubeletPort),
    labels: cdktf.booleanToTerraform(struct!.labels),
    merge_log: cdktf.booleanToTerraform(struct!.mergeLog),
    merge_log_key: cdktf.stringToTerraform(struct!.mergeLogKey),
    merge_log_trim: cdktf.booleanToTerraform(struct!.mergeLogTrim),
    merge_parser: cdktf.stringToTerraform(struct!.mergeParser),
    namespace_annotations: cdktf.booleanToTerraform(struct!.namespaceAnnotations),
    namespace_labels: cdktf.booleanToTerraform(struct!.namespaceLabels),
    namespace_metadata_only: cdktf.booleanToTerraform(struct!.namespaceMetadataOnly),
    regex_parser: cdktf.stringToTerraform(struct!.regexParser),
    retry_limit: cdktf.stringToTerraform(struct!.retryLimit),
    tls_debug: cdktf.numberToTerraform(struct!.tlsDebug),
    tls_verify: cdktf.booleanToTerraform(struct!.tlsVerify),
    use_journal: cdktf.booleanToTerraform(struct!.useJournal),
    use_kubelet: cdktf.booleanToTerraform(struct!.useKubelet),
  }
}


export function dataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersKubernetesToHclTerraform(struct?: DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersKubernetes | cdktf.IResolvable): any {
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
    annotations: {
      value: cdktf.booleanToHclTerraform(struct!.annotations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    buffer_size: {
      value: cdktf.stringToHclTerraform(struct!.bufferSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cache_use_docker_id: {
      value: cdktf.booleanToHclTerraform(struct!.cacheUseDockerId),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dns_retries: {
      value: cdktf.numberToHclTerraform(struct!.dnsRetries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_wait_time: {
      value: cdktf.numberToHclTerraform(struct!.dnsWaitTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dummy_meta: {
      value: cdktf.booleanToHclTerraform(struct!.dummyMeta),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    k8s_logging_exclude: {
      value: cdktf.booleanToHclTerraform(struct!.k8SLoggingExclude),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    k8s_logging_parser: {
      value: cdktf.booleanToHclTerraform(struct!.k8SLoggingParser),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    keep_log: {
      value: cdktf.booleanToHclTerraform(struct!.keepLog),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    kube_ca_file: {
      value: cdktf.stringToHclTerraform(struct!.kubeCaFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kube_ca_path: {
      value: cdktf.stringToHclTerraform(struct!.kubeCaPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kube_meta_cache_ttl: {
      value: cdktf.stringToHclTerraform(struct!.kubeMetaCacheTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kube_meta_namespace_cache_ttl: {
      value: cdktf.numberToHclTerraform(struct!.kubeMetaNamespaceCacheTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kube_meta_preload_cache_dir: {
      value: cdktf.stringToHclTerraform(struct!.kubeMetaPreloadCacheDir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kube_tag_prefix: {
      value: cdktf.stringToHclTerraform(struct!.kubeTagPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kube_token_command: {
      value: cdktf.stringToHclTerraform(struct!.kubeTokenCommand),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kube_token_file: {
      value: cdktf.stringToHclTerraform(struct!.kubeTokenFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kube_token_ttl: {
      value: cdktf.stringToHclTerraform(struct!.kubeTokenTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kube_url: {
      value: cdktf.stringToHclTerraform(struct!.kubeUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kubelet_host: {
      value: cdktf.stringToHclTerraform(struct!.kubeletHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kubelet_port: {
      value: cdktf.numberToHclTerraform(struct!.kubeletPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    labels: {
      value: cdktf.booleanToHclTerraform(struct!.labels),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    merge_log: {
      value: cdktf.booleanToHclTerraform(struct!.mergeLog),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    merge_log_key: {
      value: cdktf.stringToHclTerraform(struct!.mergeLogKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    merge_log_trim: {
      value: cdktf.booleanToHclTerraform(struct!.mergeLogTrim),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    merge_parser: {
      value: cdktf.stringToHclTerraform(struct!.mergeParser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace_annotations: {
      value: cdktf.booleanToHclTerraform(struct!.namespaceAnnotations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    namespace_labels: {
      value: cdktf.booleanToHclTerraform(struct!.namespaceLabels),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    namespace_metadata_only: {
      value: cdktf.booleanToHclTerraform(struct!.namespaceMetadataOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    regex_parser: {
      value: cdktf.stringToHclTerraform(struct!.regexParser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retry_limit: {
      value: cdktf.stringToHclTerraform(struct!.retryLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_debug: {
      value: cdktf.numberToHclTerraform(struct!.tlsDebug),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls_verify: {
      value: cdktf.booleanToHclTerraform(struct!.tlsVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_journal: {
      value: cdktf.booleanToHclTerraform(struct!.useJournal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_kubelet: {
      value: cdktf.booleanToHclTerraform(struct!.useKubelet),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersKubernetesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersKubernetes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alias !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias;
    }
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._bufferSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferSize = this._bufferSize;
    }
    if (this._cacheUseDockerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheUseDockerId = this._cacheUseDockerId;
    }
    if (this._dnsRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsRetries = this._dnsRetries;
    }
    if (this._dnsWaitTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsWaitTime = this._dnsWaitTime;
    }
    if (this._dummyMeta !== undefined) {
      hasAnyValues = true;
      internalValueResult.dummyMeta = this._dummyMeta;
    }
    if (this._k8SLoggingExclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.k8SLoggingExclude = this._k8SLoggingExclude;
    }
    if (this._k8SLoggingParser !== undefined) {
      hasAnyValues = true;
      internalValueResult.k8SLoggingParser = this._k8SLoggingParser;
    }
    if (this._keepLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepLog = this._keepLog;
    }
    if (this._kubeCaFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeCaFile = this._kubeCaFile;
    }
    if (this._kubeCaPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeCaPath = this._kubeCaPath;
    }
    if (this._kubeMetaCacheTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeMetaCacheTtl = this._kubeMetaCacheTtl;
    }
    if (this._kubeMetaNamespaceCacheTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeMetaNamespaceCacheTtl = this._kubeMetaNamespaceCacheTtl;
    }
    if (this._kubeMetaPreloadCacheDir !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeMetaPreloadCacheDir = this._kubeMetaPreloadCacheDir;
    }
    if (this._kubeTagPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeTagPrefix = this._kubeTagPrefix;
    }
    if (this._kubeTokenCommand !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeTokenCommand = this._kubeTokenCommand;
    }
    if (this._kubeTokenFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeTokenFile = this._kubeTokenFile;
    }
    if (this._kubeTokenTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeTokenTtl = this._kubeTokenTtl;
    }
    if (this._kubeUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeUrl = this._kubeUrl;
    }
    if (this._kubeletHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeletHost = this._kubeletHost;
    }
    if (this._kubeletPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeletPort = this._kubeletPort;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._mergeLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.mergeLog = this._mergeLog;
    }
    if (this._mergeLogKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.mergeLogKey = this._mergeLogKey;
    }
    if (this._mergeLogTrim !== undefined) {
      hasAnyValues = true;
      internalValueResult.mergeLogTrim = this._mergeLogTrim;
    }
    if (this._mergeParser !== undefined) {
      hasAnyValues = true;
      internalValueResult.mergeParser = this._mergeParser;
    }
    if (this._namespaceAnnotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceAnnotations = this._namespaceAnnotations;
    }
    if (this._namespaceLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceLabels = this._namespaceLabels;
    }
    if (this._namespaceMetadataOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceMetadataOnly = this._namespaceMetadataOnly;
    }
    if (this._regexParser !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexParser = this._regexParser;
    }
    if (this._retryLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryLimit = this._retryLimit;
    }
    if (this._tlsDebug !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsDebug = this._tlsDebug;
    }
    if (this._tlsVerify !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsVerify = this._tlsVerify;
    }
    if (this._useJournal !== undefined) {
      hasAnyValues = true;
      internalValueResult.useJournal = this._useJournal;
    }
    if (this._useKubelet !== undefined) {
      hasAnyValues = true;
      internalValueResult.useKubelet = this._useKubelet;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersKubernetes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alias = undefined;
      this._annotations = undefined;
      this._bufferSize = undefined;
      this._cacheUseDockerId = undefined;
      this._dnsRetries = undefined;
      this._dnsWaitTime = undefined;
      this._dummyMeta = undefined;
      this._k8SLoggingExclude = undefined;
      this._k8SLoggingParser = undefined;
      this._keepLog = undefined;
      this._kubeCaFile = undefined;
      this._kubeCaPath = undefined;
      this._kubeMetaCacheTtl = undefined;
      this._kubeMetaNamespaceCacheTtl = undefined;
      this._kubeMetaPreloadCacheDir = undefined;
      this._kubeTagPrefix = undefined;
      this._kubeTokenCommand = undefined;
      this._kubeTokenFile = undefined;
      this._kubeTokenTtl = undefined;
      this._kubeUrl = undefined;
      this._kubeletHost = undefined;
      this._kubeletPort = undefined;
      this._labels = undefined;
      this._mergeLog = undefined;
      this._mergeLogKey = undefined;
      this._mergeLogTrim = undefined;
      this._mergeParser = undefined;
      this._namespaceAnnotations = undefined;
      this._namespaceLabels = undefined;
      this._namespaceMetadataOnly = undefined;
      this._regexParser = undefined;
      this._retryLimit = undefined;
      this._tlsDebug = undefined;
      this._tlsVerify = undefined;
      this._useJournal = undefined;
      this._useKubelet = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alias = value.alias;
      this._annotations = value.annotations;
      this._bufferSize = value.bufferSize;
      this._cacheUseDockerId = value.cacheUseDockerId;
      this._dnsRetries = value.dnsRetries;
      this._dnsWaitTime = value.dnsWaitTime;
      this._dummyMeta = value.dummyMeta;
      this._k8SLoggingExclude = value.k8SLoggingExclude;
      this._k8SLoggingParser = value.k8SLoggingParser;
      this._keepLog = value.keepLog;
      this._kubeCaFile = value.kubeCaFile;
      this._kubeCaPath = value.kubeCaPath;
      this._kubeMetaCacheTtl = value.kubeMetaCacheTtl;
      this._kubeMetaNamespaceCacheTtl = value.kubeMetaNamespaceCacheTtl;
      this._kubeMetaPreloadCacheDir = value.kubeMetaPreloadCacheDir;
      this._kubeTagPrefix = value.kubeTagPrefix;
      this._kubeTokenCommand = value.kubeTokenCommand;
      this._kubeTokenFile = value.kubeTokenFile;
      this._kubeTokenTtl = value.kubeTokenTtl;
      this._kubeUrl = value.kubeUrl;
      this._kubeletHost = value.kubeletHost;
      this._kubeletPort = value.kubeletPort;
      this._labels = value.labels;
      this._mergeLog = value.mergeLog;
      this._mergeLogKey = value.mergeLogKey;
      this._mergeLogTrim = value.mergeLogTrim;
      this._mergeParser = value.mergeParser;
      this._namespaceAnnotations = value.namespaceAnnotations;
      this._namespaceLabels = value.namespaceLabels;
      this._namespaceMetadataOnly = value.namespaceMetadataOnly;
      this._regexParser = value.regexParser;
      this._retryLimit = value.retryLimit;
      this._tlsDebug = value.tlsDebug;
      this._tlsVerify = value.tlsVerify;
      this._useJournal = value.useJournal;
      this._useKubelet = value.useKubelet;
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

  // annotations - computed: false, optional: true, required: false
  private _annotations?: boolean | cdktf.IResolvable; 
  public get annotations() {
    return this.getBooleanAttribute('annotations');
  }
  public set annotations(value: boolean | cdktf.IResolvable) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // buffer_size - computed: false, optional: true, required: false
  private _bufferSize?: string; 
  public get bufferSize() {
    return this.getStringAttribute('buffer_size');
  }
  public set bufferSize(value: string) {
    this._bufferSize = value;
  }
  public resetBufferSize() {
    this._bufferSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferSizeInput() {
    return this._bufferSize;
  }

  // cache_use_docker_id - computed: false, optional: true, required: false
  private _cacheUseDockerId?: boolean | cdktf.IResolvable; 
  public get cacheUseDockerId() {
    return this.getBooleanAttribute('cache_use_docker_id');
  }
  public set cacheUseDockerId(value: boolean | cdktf.IResolvable) {
    this._cacheUseDockerId = value;
  }
  public resetCacheUseDockerId() {
    this._cacheUseDockerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheUseDockerIdInput() {
    return this._cacheUseDockerId;
  }

  // dns_retries - computed: false, optional: true, required: false
  private _dnsRetries?: number; 
  public get dnsRetries() {
    return this.getNumberAttribute('dns_retries');
  }
  public set dnsRetries(value: number) {
    this._dnsRetries = value;
  }
  public resetDnsRetries() {
    this._dnsRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRetriesInput() {
    return this._dnsRetries;
  }

  // dns_wait_time - computed: false, optional: true, required: false
  private _dnsWaitTime?: number; 
  public get dnsWaitTime() {
    return this.getNumberAttribute('dns_wait_time');
  }
  public set dnsWaitTime(value: number) {
    this._dnsWaitTime = value;
  }
  public resetDnsWaitTime() {
    this._dnsWaitTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsWaitTimeInput() {
    return this._dnsWaitTime;
  }

  // dummy_meta - computed: false, optional: true, required: false
  private _dummyMeta?: boolean | cdktf.IResolvable; 
  public get dummyMeta() {
    return this.getBooleanAttribute('dummy_meta');
  }
  public set dummyMeta(value: boolean | cdktf.IResolvable) {
    this._dummyMeta = value;
  }
  public resetDummyMeta() {
    this._dummyMeta = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dummyMetaInput() {
    return this._dummyMeta;
  }

  // k8s_logging_exclude - computed: false, optional: true, required: false
  private _k8SLoggingExclude?: boolean | cdktf.IResolvable; 
  public get k8SLoggingExclude() {
    return this.getBooleanAttribute('k8s_logging_exclude');
  }
  public set k8SLoggingExclude(value: boolean | cdktf.IResolvable) {
    this._k8SLoggingExclude = value;
  }
  public resetK8SLoggingExclude() {
    this._k8SLoggingExclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get k8SLoggingExcludeInput() {
    return this._k8SLoggingExclude;
  }

  // k8s_logging_parser - computed: false, optional: true, required: false
  private _k8SLoggingParser?: boolean | cdktf.IResolvable; 
  public get k8SLoggingParser() {
    return this.getBooleanAttribute('k8s_logging_parser');
  }
  public set k8SLoggingParser(value: boolean | cdktf.IResolvable) {
    this._k8SLoggingParser = value;
  }
  public resetK8SLoggingParser() {
    this._k8SLoggingParser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get k8SLoggingParserInput() {
    return this._k8SLoggingParser;
  }

  // keep_log - computed: false, optional: true, required: false
  private _keepLog?: boolean | cdktf.IResolvable; 
  public get keepLog() {
    return this.getBooleanAttribute('keep_log');
  }
  public set keepLog(value: boolean | cdktf.IResolvable) {
    this._keepLog = value;
  }
  public resetKeepLog() {
    this._keepLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepLogInput() {
    return this._keepLog;
  }

  // kube_ca_file - computed: false, optional: true, required: false
  private _kubeCaFile?: string; 
  public get kubeCaFile() {
    return this.getStringAttribute('kube_ca_file');
  }
  public set kubeCaFile(value: string) {
    this._kubeCaFile = value;
  }
  public resetKubeCaFile() {
    this._kubeCaFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeCaFileInput() {
    return this._kubeCaFile;
  }

  // kube_ca_path - computed: false, optional: true, required: false
  private _kubeCaPath?: string; 
  public get kubeCaPath() {
    return this.getStringAttribute('kube_ca_path');
  }
  public set kubeCaPath(value: string) {
    this._kubeCaPath = value;
  }
  public resetKubeCaPath() {
    this._kubeCaPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeCaPathInput() {
    return this._kubeCaPath;
  }

  // kube_meta_cache_ttl - computed: false, optional: true, required: false
  private _kubeMetaCacheTtl?: string; 
  public get kubeMetaCacheTtl() {
    return this.getStringAttribute('kube_meta_cache_ttl');
  }
  public set kubeMetaCacheTtl(value: string) {
    this._kubeMetaCacheTtl = value;
  }
  public resetKubeMetaCacheTtl() {
    this._kubeMetaCacheTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeMetaCacheTtlInput() {
    return this._kubeMetaCacheTtl;
  }

  // kube_meta_namespace_cache_ttl - computed: false, optional: true, required: false
  private _kubeMetaNamespaceCacheTtl?: number; 
  public get kubeMetaNamespaceCacheTtl() {
    return this.getNumberAttribute('kube_meta_namespace_cache_ttl');
  }
  public set kubeMetaNamespaceCacheTtl(value: number) {
    this._kubeMetaNamespaceCacheTtl = value;
  }
  public resetKubeMetaNamespaceCacheTtl() {
    this._kubeMetaNamespaceCacheTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeMetaNamespaceCacheTtlInput() {
    return this._kubeMetaNamespaceCacheTtl;
  }

  // kube_meta_preload_cache_dir - computed: false, optional: true, required: false
  private _kubeMetaPreloadCacheDir?: string; 
  public get kubeMetaPreloadCacheDir() {
    return this.getStringAttribute('kube_meta_preload_cache_dir');
  }
  public set kubeMetaPreloadCacheDir(value: string) {
    this._kubeMetaPreloadCacheDir = value;
  }
  public resetKubeMetaPreloadCacheDir() {
    this._kubeMetaPreloadCacheDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeMetaPreloadCacheDirInput() {
    return this._kubeMetaPreloadCacheDir;
  }

  // kube_tag_prefix - computed: false, optional: true, required: false
  private _kubeTagPrefix?: string; 
  public get kubeTagPrefix() {
    return this.getStringAttribute('kube_tag_prefix');
  }
  public set kubeTagPrefix(value: string) {
    this._kubeTagPrefix = value;
  }
  public resetKubeTagPrefix() {
    this._kubeTagPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeTagPrefixInput() {
    return this._kubeTagPrefix;
  }

  // kube_token_command - computed: false, optional: true, required: false
  private _kubeTokenCommand?: string; 
  public get kubeTokenCommand() {
    return this.getStringAttribute('kube_token_command');
  }
  public set kubeTokenCommand(value: string) {
    this._kubeTokenCommand = value;
  }
  public resetKubeTokenCommand() {
    this._kubeTokenCommand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeTokenCommandInput() {
    return this._kubeTokenCommand;
  }

  // kube_token_file - computed: false, optional: true, required: false
  private _kubeTokenFile?: string; 
  public get kubeTokenFile() {
    return this.getStringAttribute('kube_token_file');
  }
  public set kubeTokenFile(value: string) {
    this._kubeTokenFile = value;
  }
  public resetKubeTokenFile() {
    this._kubeTokenFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeTokenFileInput() {
    return this._kubeTokenFile;
  }

  // kube_token_ttl - computed: false, optional: true, required: false
  private _kubeTokenTtl?: string; 
  public get kubeTokenTtl() {
    return this.getStringAttribute('kube_token_ttl');
  }
  public set kubeTokenTtl(value: string) {
    this._kubeTokenTtl = value;
  }
  public resetKubeTokenTtl() {
    this._kubeTokenTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeTokenTtlInput() {
    return this._kubeTokenTtl;
  }

  // kube_url - computed: false, optional: true, required: false
  private _kubeUrl?: string; 
  public get kubeUrl() {
    return this.getStringAttribute('kube_url');
  }
  public set kubeUrl(value: string) {
    this._kubeUrl = value;
  }
  public resetKubeUrl() {
    this._kubeUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeUrlInput() {
    return this._kubeUrl;
  }

  // kubelet_host - computed: false, optional: true, required: false
  private _kubeletHost?: string; 
  public get kubeletHost() {
    return this.getStringAttribute('kubelet_host');
  }
  public set kubeletHost(value: string) {
    this._kubeletHost = value;
  }
  public resetKubeletHost() {
    this._kubeletHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeletHostInput() {
    return this._kubeletHost;
  }

  // kubelet_port - computed: false, optional: true, required: false
  private _kubeletPort?: number; 
  public get kubeletPort() {
    return this.getNumberAttribute('kubelet_port');
  }
  public set kubeletPort(value: number) {
    this._kubeletPort = value;
  }
  public resetKubeletPort() {
    this._kubeletPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeletPortInput() {
    return this._kubeletPort;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: boolean | cdktf.IResolvable; 
  public get labels() {
    return this.getBooleanAttribute('labels');
  }
  public set labels(value: boolean | cdktf.IResolvable) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // merge_log - computed: false, optional: true, required: false
  private _mergeLog?: boolean | cdktf.IResolvable; 
  public get mergeLog() {
    return this.getBooleanAttribute('merge_log');
  }
  public set mergeLog(value: boolean | cdktf.IResolvable) {
    this._mergeLog = value;
  }
  public resetMergeLog() {
    this._mergeLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mergeLogInput() {
    return this._mergeLog;
  }

  // merge_log_key - computed: false, optional: true, required: false
  private _mergeLogKey?: string; 
  public get mergeLogKey() {
    return this.getStringAttribute('merge_log_key');
  }
  public set mergeLogKey(value: string) {
    this._mergeLogKey = value;
  }
  public resetMergeLogKey() {
    this._mergeLogKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mergeLogKeyInput() {
    return this._mergeLogKey;
  }

  // merge_log_trim - computed: false, optional: true, required: false
  private _mergeLogTrim?: boolean | cdktf.IResolvable; 
  public get mergeLogTrim() {
    return this.getBooleanAttribute('merge_log_trim');
  }
  public set mergeLogTrim(value: boolean | cdktf.IResolvable) {
    this._mergeLogTrim = value;
  }
  public resetMergeLogTrim() {
    this._mergeLogTrim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mergeLogTrimInput() {
    return this._mergeLogTrim;
  }

  // merge_parser - computed: false, optional: true, required: false
  private _mergeParser?: string; 
  public get mergeParser() {
    return this.getStringAttribute('merge_parser');
  }
  public set mergeParser(value: string) {
    this._mergeParser = value;
  }
  public resetMergeParser() {
    this._mergeParser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mergeParserInput() {
    return this._mergeParser;
  }

  // namespace_annotations - computed: false, optional: true, required: false
  private _namespaceAnnotations?: boolean | cdktf.IResolvable; 
  public get namespaceAnnotations() {
    return this.getBooleanAttribute('namespace_annotations');
  }
  public set namespaceAnnotations(value: boolean | cdktf.IResolvable) {
    this._namespaceAnnotations = value;
  }
  public resetNamespaceAnnotations() {
    this._namespaceAnnotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceAnnotationsInput() {
    return this._namespaceAnnotations;
  }

  // namespace_labels - computed: false, optional: true, required: false
  private _namespaceLabels?: boolean | cdktf.IResolvable; 
  public get namespaceLabels() {
    return this.getBooleanAttribute('namespace_labels');
  }
  public set namespaceLabels(value: boolean | cdktf.IResolvable) {
    this._namespaceLabels = value;
  }
  public resetNamespaceLabels() {
    this._namespaceLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceLabelsInput() {
    return this._namespaceLabels;
  }

  // namespace_metadata_only - computed: false, optional: true, required: false
  private _namespaceMetadataOnly?: boolean | cdktf.IResolvable; 
  public get namespaceMetadataOnly() {
    return this.getBooleanAttribute('namespace_metadata_only');
  }
  public set namespaceMetadataOnly(value: boolean | cdktf.IResolvable) {
    this._namespaceMetadataOnly = value;
  }
  public resetNamespaceMetadataOnly() {
    this._namespaceMetadataOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceMetadataOnlyInput() {
    return this._namespaceMetadataOnly;
  }

  // regex_parser - computed: false, optional: true, required: false
  private _regexParser?: string; 
  public get regexParser() {
    return this.getStringAttribute('regex_parser');
  }
  public set regexParser(value: string) {
    this._regexParser = value;
  }
  public resetRegexParser() {
    this._regexParser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexParserInput() {
    return this._regexParser;
  }

  // retry_limit - computed: false, optional: true, required: false
  private _retryLimit?: string; 
  public get retryLimit() {
    return this.getStringAttribute('retry_limit');
  }
  public set retryLimit(value: string) {
    this._retryLimit = value;
  }
  public resetRetryLimit() {
    this._retryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryLimitInput() {
    return this._retryLimit;
  }

  // tls_debug - computed: false, optional: true, required: false
  private _tlsDebug?: number; 
  public get tlsDebug() {
    return this.getNumberAttribute('tls_debug');
  }
  public set tlsDebug(value: number) {
    this._tlsDebug = value;
  }
  public resetTlsDebug() {
    this._tlsDebug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsDebugInput() {
    return this._tlsDebug;
  }

  // tls_verify - computed: false, optional: true, required: false
  private _tlsVerify?: boolean | cdktf.IResolvable; 
  public get tlsVerify() {
    return this.getBooleanAttribute('tls_verify');
  }
  public set tlsVerify(value: boolean | cdktf.IResolvable) {
    this._tlsVerify = value;
  }
  public resetTlsVerify() {
    this._tlsVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsVerifyInput() {
    return this._tlsVerify;
  }

  // use_journal - computed: false, optional: true, required: false
  private _useJournal?: boolean | cdktf.IResolvable; 
  public get useJournal() {
    return this.getBooleanAttribute('use_journal');
  }
  public set useJournal(value: boolean | cdktf.IResolvable) {
    this._useJournal = value;
  }
  public resetUseJournal() {
    this._useJournal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useJournalInput() {
    return this._useJournal;
  }

  // use_kubelet - computed: false, optional: true, required: false
  private _useKubelet?: boolean | cdktf.IResolvable; 
  public get useKubelet() {
    return this.getBooleanAttribute('use_kubelet');
  }
  public set useKubelet(value: boolean | cdktf.IResolvable) {
    this._useKubelet = value;
  }
  public resetUseKubelet() {
    this._useKubelet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useKubeletInput() {
    return this._useKubelet;
  }
}
export interface DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersLogToMetrics {
  /**
  * Add a custom label NAME and set the value to the value of KEY
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#add_label DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#add_label}
  */
  readonly addLabel?: string[];
  /**
  * Alias for the plugin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#alias DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#alias}
  */
  readonly alias?: string;
  /**
  * Defines a bucket for histogram
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#bucket DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#bucket}
  */
  readonly bucket?: string[];
  /**
  * Flag that defines if logs should be discarded after processing. This applies for all logs, no matter if they have emitted metrics or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#discard_logs DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#discard_logs}
  */
  readonly discardLogs?: boolean | cdktf.IResolvable;
  /**
  * set a buffer limit to restrict memory usage of metrics emitter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#emitter_mem_buf_limit DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#emitter_mem_buf_limit}
  */
  readonly emitterMemBufLimit?: string;
  /**
  * Name of the emitter (advanced users)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#emitter_name DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#emitter_name}
  */
  readonly emitterName?: string;
  /**
  * Optional filter for records in which the content of KEY does not matches the regular expression. Value Format: FIELD REGEX
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#exclude DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#exclude}
  */
  readonly exclude?: string[];
  /**
  * If enabled, it will automatically put pod_id, pod_name, namespace_name, docker_id and container_name into the metric as labels. This option is intended to be used in combination with the kubernetes filter plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#kubernetes_mode DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#kubernetes_mode}
  */
  readonly kubernetesMode?: boolean | cdktf.IResolvable;
  /**
  * Includes a record field as label dimension in the metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#label_field DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#label_field}
  */
  readonly labelField?: string[];
  /**
  * Sets a help text for the metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#metric_description DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#metric_description}
  */
  readonly metricDescription?: string;
  /**
  * Defines the mode for the metric. Valid values are [counter, gauge or histogram]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#metric_mode DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#metric_mode}
  */
  readonly metricMode?: string;
  /**
  * Sets the name of the metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#metric_name DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#metric_name}
  */
  readonly metricName?: string;
  /**
  * Namespace of the metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#metric_namespace DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#metric_namespace}
  */
  readonly metricNamespace?: string;
  /**
  * Sets a sub-system for the metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#metric_subsystem DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#metric_subsystem}
  */
  readonly metricSubsystem?: string;
  /**
  * Optional filter for records in which the content of KEY matches the regular expression. Value Format: FIELD REGEX
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#regex DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#regex}
  */
  readonly regex?: string[];
  /**
  * RetryLimit describes how many times fluent-bit should retry to send data to a specific output. If set to false fluent-bit will try indefinetly. If set to any integer N>0 it will try at most N+1 times. Leading zeros are not allowed (values such as 007, 0150, 01 do not work). If this property is not defined fluent-bit will use the default value: 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#retry_limit DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#retry_limit}
  */
  readonly retryLimit?: string;
  /**
  * Defines the tag for the generated metrics record
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#tag DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#tag}
  */
  readonly tag?: string;
  /**
  * Specify the record field that holds a numerical value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#value_field DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#value_field}
  */
  readonly valueField?: string;
}

export function dataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersLogToMetricsToTerraform(struct?: DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersLogToMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add_label: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.addLabel),
    alias: cdktf.stringToTerraform(struct!.alias),
    bucket: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.bucket),
    discard_logs: cdktf.booleanToTerraform(struct!.discardLogs),
    emitter_mem_buf_limit: cdktf.stringToTerraform(struct!.emitterMemBufLimit),
    emitter_name: cdktf.stringToTerraform(struct!.emitterName),
    exclude: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exclude),
    kubernetes_mode: cdktf.booleanToTerraform(struct!.kubernetesMode),
    label_field: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.labelField),
    metric_description: cdktf.stringToTerraform(struct!.metricDescription),
    metric_mode: cdktf.stringToTerraform(struct!.metricMode),
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    metric_namespace: cdktf.stringToTerraform(struct!.metricNamespace),
    metric_subsystem: cdktf.stringToTerraform(struct!.metricSubsystem),
    regex: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regex),
    retry_limit: cdktf.stringToTerraform(struct!.retryLimit),
    tag: cdktf.stringToTerraform(struct!.tag),
    value_field: cdktf.stringToTerraform(struct!.valueField),
  }
}


export function dataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersLogToMetricsToHclTerraform(struct?: DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersLogToMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add_label: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.addLabel),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    alias: {
      value: cdktf.stringToHclTerraform(struct!.alias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.bucket),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    discard_logs: {
      value: cdktf.booleanToHclTerraform(struct!.discardLogs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    emitter_mem_buf_limit: {
      value: cdktf.stringToHclTerraform(struct!.emitterMemBufLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    emitter_name: {
      value: cdktf.stringToHclTerraform(struct!.emitterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclude: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exclude),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    kubernetes_mode: {
      value: cdktf.booleanToHclTerraform(struct!.kubernetesMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    label_field: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.labelField),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    metric_description: {
      value: cdktf.stringToHclTerraform(struct!.metricDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_mode: {
      value: cdktf.stringToHclTerraform(struct!.metricMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_name: {
      value: cdktf.stringToHclTerraform(struct!.metricName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_namespace: {
      value: cdktf.stringToHclTerraform(struct!.metricNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_subsystem: {
      value: cdktf.stringToHclTerraform(struct!.metricSubsystem),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regex),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    retry_limit: {
      value: cdktf.stringToHclTerraform(struct!.retryLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_field: {
      value: cdktf.stringToHclTerraform(struct!.valueField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersLogToMetricsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersLogToMetrics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.addLabel = this._addLabel;
    }
    if (this._alias !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias;
    }
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._discardLogs !== undefined) {
      hasAnyValues = true;
      internalValueResult.discardLogs = this._discardLogs;
    }
    if (this._emitterMemBufLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.emitterMemBufLimit = this._emitterMemBufLimit;
    }
    if (this._emitterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.emitterName = this._emitterName;
    }
    if (this._exclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclude = this._exclude;
    }
    if (this._kubernetesMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetesMode = this._kubernetesMode;
    }
    if (this._labelField !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelField = this._labelField;
    }
    if (this._metricDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricDescription = this._metricDescription;
    }
    if (this._metricMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricMode = this._metricMode;
    }
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    if (this._metricNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricNamespace = this._metricNamespace;
    }
    if (this._metricSubsystem !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricSubsystem = this._metricSubsystem;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._retryLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryLimit = this._retryLimit;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    if (this._valueField !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueField = this._valueField;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersLogToMetrics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addLabel = undefined;
      this._alias = undefined;
      this._bucket = undefined;
      this._discardLogs = undefined;
      this._emitterMemBufLimit = undefined;
      this._emitterName = undefined;
      this._exclude = undefined;
      this._kubernetesMode = undefined;
      this._labelField = undefined;
      this._metricDescription = undefined;
      this._metricMode = undefined;
      this._metricName = undefined;
      this._metricNamespace = undefined;
      this._metricSubsystem = undefined;
      this._regex = undefined;
      this._retryLimit = undefined;
      this._tag = undefined;
      this._valueField = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addLabel = value.addLabel;
      this._alias = value.alias;
      this._bucket = value.bucket;
      this._discardLogs = value.discardLogs;
      this._emitterMemBufLimit = value.emitterMemBufLimit;
      this._emitterName = value.emitterName;
      this._exclude = value.exclude;
      this._kubernetesMode = value.kubernetesMode;
      this._labelField = value.labelField;
      this._metricDescription = value.metricDescription;
      this._metricMode = value.metricMode;
      this._metricName = value.metricName;
      this._metricNamespace = value.metricNamespace;
      this._metricSubsystem = value.metricSubsystem;
      this._regex = value.regex;
      this._retryLimit = value.retryLimit;
      this._tag = value.tag;
      this._valueField = value.valueField;
    }
  }

  // add_label - computed: false, optional: true, required: false
  private _addLabel?: string[]; 
  public get addLabel() {
    return this.getListAttribute('add_label');
  }
  public set addLabel(value: string[]) {
    this._addLabel = value;
  }
  public resetAddLabel() {
    this._addLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addLabelInput() {
    return this._addLabel;
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

  // bucket - computed: false, optional: true, required: false
  private _bucket?: string[]; 
  public get bucket() {
    return this.getListAttribute('bucket');
  }
  public set bucket(value: string[]) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // discard_logs - computed: false, optional: true, required: false
  private _discardLogs?: boolean | cdktf.IResolvable; 
  public get discardLogs() {
    return this.getBooleanAttribute('discard_logs');
  }
  public set discardLogs(value: boolean | cdktf.IResolvable) {
    this._discardLogs = value;
  }
  public resetDiscardLogs() {
    this._discardLogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discardLogsInput() {
    return this._discardLogs;
  }

  // emitter_mem_buf_limit - computed: false, optional: true, required: false
  private _emitterMemBufLimit?: string; 
  public get emitterMemBufLimit() {
    return this.getStringAttribute('emitter_mem_buf_limit');
  }
  public set emitterMemBufLimit(value: string) {
    this._emitterMemBufLimit = value;
  }
  public resetEmitterMemBufLimit() {
    this._emitterMemBufLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emitterMemBufLimitInput() {
    return this._emitterMemBufLimit;
  }

  // emitter_name - computed: false, optional: true, required: false
  private _emitterName?: string; 
  public get emitterName() {
    return this.getStringAttribute('emitter_name');
  }
  public set emitterName(value: string) {
    this._emitterName = value;
  }
  public resetEmitterName() {
    this._emitterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emitterNameInput() {
    return this._emitterName;
  }

  // exclude - computed: false, optional: true, required: false
  private _exclude?: string[]; 
  public get exclude() {
    return this.getListAttribute('exclude');
  }
  public set exclude(value: string[]) {
    this._exclude = value;
  }
  public resetExclude() {
    this._exclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude;
  }

  // kubernetes_mode - computed: false, optional: true, required: false
  private _kubernetesMode?: boolean | cdktf.IResolvable; 
  public get kubernetesMode() {
    return this.getBooleanAttribute('kubernetes_mode');
  }
  public set kubernetesMode(value: boolean | cdktf.IResolvable) {
    this._kubernetesMode = value;
  }
  public resetKubernetesMode() {
    this._kubernetesMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesModeInput() {
    return this._kubernetesMode;
  }

  // label_field - computed: false, optional: true, required: false
  private _labelField?: string[]; 
  public get labelField() {
    return this.getListAttribute('label_field');
  }
  public set labelField(value: string[]) {
    this._labelField = value;
  }
  public resetLabelField() {
    this._labelField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelFieldInput() {
    return this._labelField;
  }

  // metric_description - computed: false, optional: true, required: false
  private _metricDescription?: string; 
  public get metricDescription() {
    return this.getStringAttribute('metric_description');
  }
  public set metricDescription(value: string) {
    this._metricDescription = value;
  }
  public resetMetricDescription() {
    this._metricDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricDescriptionInput() {
    return this._metricDescription;
  }

  // metric_mode - computed: false, optional: true, required: false
  private _metricMode?: string; 
  public get metricMode() {
    return this.getStringAttribute('metric_mode');
  }
  public set metricMode(value: string) {
    this._metricMode = value;
  }
  public resetMetricMode() {
    this._metricMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricModeInput() {
    return this._metricMode;
  }

  // metric_name - computed: false, optional: true, required: false
  private _metricName?: string; 
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  public resetMetricName() {
    this._metricName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName;
  }

  // metric_namespace - computed: false, optional: true, required: false
  private _metricNamespace?: string; 
  public get metricNamespace() {
    return this.getStringAttribute('metric_namespace');
  }
  public set metricNamespace(value: string) {
    this._metricNamespace = value;
  }
  public resetMetricNamespace() {
    this._metricNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNamespaceInput() {
    return this._metricNamespace;
  }

  // metric_subsystem - computed: false, optional: true, required: false
  private _metricSubsystem?: string; 
  public get metricSubsystem() {
    return this.getStringAttribute('metric_subsystem');
  }
  public set metricSubsystem(value: string) {
    this._metricSubsystem = value;
  }
  public resetMetricSubsystem() {
    this._metricSubsystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricSubsystemInput() {
    return this._metricSubsystem;
  }

  // regex - computed: false, optional: true, required: false
  private _regex?: string[]; 
  public get regex() {
    return this.getListAttribute('regex');
  }
  public set regex(value: string[]) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // retry_limit - computed: false, optional: true, required: false
  private _retryLimit?: string; 
  public get retryLimit() {
    return this.getStringAttribute('retry_limit');
  }
  public set retryLimit(value: string) {
    this._retryLimit = value;
  }
  public resetRetryLimit() {
    this._retryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryLimitInput() {
    return this._retryLimit;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }

  // value_field - computed: false, optional: true, required: false
  private _valueField?: string; 
  public get valueField() {
    return this.getStringAttribute('value_field');
  }
  public set valueField(value: string) {
    this._valueField = value;
  }
  public resetValueField() {
    this._valueField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFieldInput() {
    return this._valueField;
  }
}
export interface DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersLuaScript {
  /**
  * The key to select.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#key DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#name DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#optional DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersLuaScriptToTerraform(struct?: DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersLuaScript | cdktf.IResolvable): any {
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


export function dataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersLuaScriptToHclTerraform(struct?: DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersLuaScript | cdktf.IResolvable): any {
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

export class DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersLuaScriptOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersLuaScript | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersLuaScript | cdktf.IResolvable | undefined) {
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
export interface DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersLua {
  /**
  * Alias for the plugin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#alias DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#alias}
  */
  readonly alias?: string;
  /**
  * Lua function name that will be triggered to do filtering. It's assumed that the function is declared inside the Script defined above.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#call DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#call}
  */
  readonly call: string;
  /**
  * Inline LUA code instead of loading from a path via script.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#code DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#code}
  */
  readonly code?: string;
  /**
  * If enabled, Lua script will be executed in protected mode. It prevents to crash when invalid Lua script is executed. Default is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#protected_mode DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#protected_mode}
  */
  readonly protectedMode?: boolean | cdktf.IResolvable;
  /**
  * RetryLimit describes how many times fluent-bit should retry to send data to a specific output. If set to false fluent-bit will try indefinetly. If set to any integer N>0 it will try at most N+1 times. Leading zeros are not allowed (values such as 007, 0150, 01 do not work). If this property is not defined fluent-bit will use the default value: 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#retry_limit DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#retry_limit}
  */
  readonly retryLimit?: string;
  /**
  * Path to the Lua script that will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#script DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#script}
  */
  readonly script?: DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersLuaScript;
  /**
  * By default when the Lua script is invoked, the record timestamp is passed as a Floating number which might lead to loss precision when the data is converted back. If you desire timestamp precision enabling this option will pass the timestamp as a Lua table with keys sec for seconds since epoch and nsec for nanoseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#time_as_table DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#time_as_table}
  */
  readonly timeAsTable?: boolean | cdktf.IResolvable;
  /**
  * If these keys are matched, the fields are handled as array. If more than one key, delimit by space. It is useful the array can be empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#type_array_key DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#type_array_key}
  */
  readonly typeArrayKey?: string[];
  /**
  * If these keys are matched, the fields are converted to integer. If more than one key, delimit by space. Note that starting from Fluent Bit v1.6 integer data types are preserved and not converted to double as in previous versions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#type_int_key DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#type_int_key}
  */
  readonly typeIntKey?: string[];
}

export function dataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersLuaToTerraform(struct?: DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersLua | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alias: cdktf.stringToTerraform(struct!.alias),
    call: cdktf.stringToTerraform(struct!.call),
    code: cdktf.stringToTerraform(struct!.code),
    protected_mode: cdktf.booleanToTerraform(struct!.protectedMode),
    retry_limit: cdktf.stringToTerraform(struct!.retryLimit),
    script: dataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersLuaScriptToTerraform(struct!.script),
    time_as_table: cdktf.booleanToTerraform(struct!.timeAsTable),
    type_array_key: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.typeArrayKey),
    type_int_key: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.typeIntKey),
  }
}


export function dataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersLuaToHclTerraform(struct?: DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersLua | cdktf.IResolvable): any {
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
    call: {
      value: cdktf.stringToHclTerraform(struct!.call),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    code: {
      value: cdktf.stringToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protected_mode: {
      value: cdktf.booleanToHclTerraform(struct!.protectedMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    retry_limit: {
      value: cdktf.stringToHclTerraform(struct!.retryLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    script: {
      value: dataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersLuaScriptToHclTerraform(struct!.script),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersLuaScript",
    },
    time_as_table: {
      value: cdktf.booleanToHclTerraform(struct!.timeAsTable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type_array_key: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.typeArrayKey),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    type_int_key: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.typeIntKey),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersLuaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersLua | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alias !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias;
    }
    if (this._call !== undefined) {
      hasAnyValues = true;
      internalValueResult.call = this._call;
    }
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._protectedMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.protectedMode = this._protectedMode;
    }
    if (this._retryLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryLimit = this._retryLimit;
    }
    if (this._script?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.script = this._script?.internalValue;
    }
    if (this._timeAsTable !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeAsTable = this._timeAsTable;
    }
    if (this._typeArrayKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeArrayKey = this._typeArrayKey;
    }
    if (this._typeIntKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeIntKey = this._typeIntKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersLua | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alias = undefined;
      this._call = undefined;
      this._code = undefined;
      this._protectedMode = undefined;
      this._retryLimit = undefined;
      this._script.internalValue = undefined;
      this._timeAsTable = undefined;
      this._typeArrayKey = undefined;
      this._typeIntKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alias = value.alias;
      this._call = value.call;
      this._code = value.code;
      this._protectedMode = value.protectedMode;
      this._retryLimit = value.retryLimit;
      this._script.internalValue = value.script;
      this._timeAsTable = value.timeAsTable;
      this._typeArrayKey = value.typeArrayKey;
      this._typeIntKey = value.typeIntKey;
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

  // call - computed: false, optional: false, required: true
  private _call?: string; 
  public get call() {
    return this.getStringAttribute('call');
  }
  public set call(value: string) {
    this._call = value;
  }
  // Temporarily expose input value. Use with caution.
  public get callInput() {
    return this._call;
  }

  // code - computed: false, optional: true, required: false
  private _code?: string; 
  public get code() {
    return this.getStringAttribute('code');
  }
  public set code(value: string) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
  }

  // protected_mode - computed: false, optional: true, required: false
  private _protectedMode?: boolean | cdktf.IResolvable; 
  public get protectedMode() {
    return this.getBooleanAttribute('protected_mode');
  }
  public set protectedMode(value: boolean | cdktf.IResolvable) {
    this._protectedMode = value;
  }
  public resetProtectedMode() {
    this._protectedMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectedModeInput() {
    return this._protectedMode;
  }

  // retry_limit - computed: false, optional: true, required: false
  private _retryLimit?: string; 
  public get retryLimit() {
    return this.getStringAttribute('retry_limit');
  }
  public set retryLimit(value: string) {
    this._retryLimit = value;
  }
  public resetRetryLimit() {
    this._retryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryLimitInput() {
    return this._retryLimit;
  }

  // script - computed: false, optional: true, required: false
  private _script = new DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersLuaScriptOutputReference(this, "script");
  public get script() {
    return this._script;
  }
  public putScript(value: DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersLuaScript) {
    this._script.internalValue = value;
  }
  public resetScript() {
    this._script.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptInput() {
    return this._script.internalValue;
  }

  // time_as_table - computed: false, optional: true, required: false
  private _timeAsTable?: boolean | cdktf.IResolvable; 
  public get timeAsTable() {
    return this.getBooleanAttribute('time_as_table');
  }
  public set timeAsTable(value: boolean | cdktf.IResolvable) {
    this._timeAsTable = value;
  }
  public resetTimeAsTable() {
    this._timeAsTable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeAsTableInput() {
    return this._timeAsTable;
  }

  // type_array_key - computed: false, optional: true, required: false
  private _typeArrayKey?: string[]; 
  public get typeArrayKey() {
    return this.getListAttribute('type_array_key');
  }
  public set typeArrayKey(value: string[]) {
    this._typeArrayKey = value;
  }
  public resetTypeArrayKey() {
    this._typeArrayKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeArrayKeyInput() {
    return this._typeArrayKey;
  }

  // type_int_key - computed: false, optional: true, required: false
  private _typeIntKey?: string[]; 
  public get typeIntKey() {
    return this.getListAttribute('type_int_key');
  }
  public set typeIntKey(value: string[]) {
    this._typeIntKey = value;
  }
  public resetTypeIntKey() {
    this._typeIntKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeIntKeyInput() {
    return this._typeIntKey;
  }
}
export interface DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersModifyConditions {
  /**
  * Is true if a key matches regex KEY
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#a_key_matches DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#a_key_matches}
  */
  readonly aKeyMatches?: string;
  /**
  * Is true if KEY does not exist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#key_does_not_exist DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#key_does_not_exist}
  */
  readonly keyDoesNotExist?: { [key: string]: string };
  /**
  * Is true if KEY exists
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#key_exists DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#key_exists}
  */
  readonly keyExists?: string;
  /**
  * Is true if KEY exists and its value is not VALUE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#key_value_does_not_equal DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#key_value_does_not_equal}
  */
  readonly keyValueDoesNotEqual?: { [key: string]: string };
  /**
  * Is true if key KEY exists and its value does not match VALUE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#key_value_does_not_match DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#key_value_does_not_match}
  */
  readonly keyValueDoesNotMatch?: { [key: string]: string };
  /**
  * Is true if KEY exists and its value is VALUE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#key_value_equals DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#key_value_equals}
  */
  readonly keyValueEquals?: { [key: string]: string };
  /**
  * Is true if key KEY exists and its value matches VALUE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#key_value_matches DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#key_value_matches}
  */
  readonly keyValueMatches?: { [key: string]: string };
  /**
  * Is true if all keys matching KEY have values that do not match VALUE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#matching_keys_do_not_have_matching_values DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#matching_keys_do_not_have_matching_values}
  */
  readonly matchingKeysDoNotHaveMatchingValues?: { [key: string]: string };
  /**
  * Is true if all keys matching KEY have values that match VALUE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#matching_keys_have_matching_values DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#matching_keys_have_matching_values}
  */
  readonly matchingKeysHaveMatchingValues?: { [key: string]: string };
  /**
  * Is true if no key matches regex KEY
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#no_key_matches DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#no_key_matches}
  */
  readonly noKeyMatches?: string;
}

export function dataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersModifyConditionsToTerraform(struct?: DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersModifyConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    a_key_matches: cdktf.stringToTerraform(struct!.aKeyMatches),
    key_does_not_exist: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.keyDoesNotExist),
    key_exists: cdktf.stringToTerraform(struct!.keyExists),
    key_value_does_not_equal: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.keyValueDoesNotEqual),
    key_value_does_not_match: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.keyValueDoesNotMatch),
    key_value_equals: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.keyValueEquals),
    key_value_matches: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.keyValueMatches),
    matching_keys_do_not_have_matching_values: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchingKeysDoNotHaveMatchingValues),
    matching_keys_have_matching_values: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchingKeysHaveMatchingValues),
    no_key_matches: cdktf.stringToTerraform(struct!.noKeyMatches),
  }
}


export function dataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersModifyConditionsToHclTerraform(struct?: DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersModifyConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    a_key_matches: {
      value: cdktf.stringToHclTerraform(struct!.aKeyMatches),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_does_not_exist: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.keyDoesNotExist),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    key_exists: {
      value: cdktf.stringToHclTerraform(struct!.keyExists),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_value_does_not_equal: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.keyValueDoesNotEqual),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    key_value_does_not_match: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.keyValueDoesNotMatch),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    key_value_equals: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.keyValueEquals),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    key_value_matches: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.keyValueMatches),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    matching_keys_do_not_have_matching_values: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchingKeysDoNotHaveMatchingValues),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    matching_keys_have_matching_values: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchingKeysHaveMatchingValues),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    no_key_matches: {
      value: cdktf.stringToHclTerraform(struct!.noKeyMatches),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersModifyConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersModifyConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aKeyMatches !== undefined) {
      hasAnyValues = true;
      internalValueResult.aKeyMatches = this._aKeyMatches;
    }
    if (this._keyDoesNotExist !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyDoesNotExist = this._keyDoesNotExist;
    }
    if (this._keyExists !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyExists = this._keyExists;
    }
    if (this._keyValueDoesNotEqual !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyValueDoesNotEqual = this._keyValueDoesNotEqual;
    }
    if (this._keyValueDoesNotMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyValueDoesNotMatch = this._keyValueDoesNotMatch;
    }
    if (this._keyValueEquals !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyValueEquals = this._keyValueEquals;
    }
    if (this._keyValueMatches !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyValueMatches = this._keyValueMatches;
    }
    if (this._matchingKeysDoNotHaveMatchingValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchingKeysDoNotHaveMatchingValues = this._matchingKeysDoNotHaveMatchingValues;
    }
    if (this._matchingKeysHaveMatchingValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchingKeysHaveMatchingValues = this._matchingKeysHaveMatchingValues;
    }
    if (this._noKeyMatches !== undefined) {
      hasAnyValues = true;
      internalValueResult.noKeyMatches = this._noKeyMatches;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersModifyConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aKeyMatches = undefined;
      this._keyDoesNotExist = undefined;
      this._keyExists = undefined;
      this._keyValueDoesNotEqual = undefined;
      this._keyValueDoesNotMatch = undefined;
      this._keyValueEquals = undefined;
      this._keyValueMatches = undefined;
      this._matchingKeysDoNotHaveMatchingValues = undefined;
      this._matchingKeysHaveMatchingValues = undefined;
      this._noKeyMatches = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aKeyMatches = value.aKeyMatches;
      this._keyDoesNotExist = value.keyDoesNotExist;
      this._keyExists = value.keyExists;
      this._keyValueDoesNotEqual = value.keyValueDoesNotEqual;
      this._keyValueDoesNotMatch = value.keyValueDoesNotMatch;
      this._keyValueEquals = value.keyValueEquals;
      this._keyValueMatches = value.keyValueMatches;
      this._matchingKeysDoNotHaveMatchingValues = value.matchingKeysDoNotHaveMatchingValues;
      this._matchingKeysHaveMatchingValues = value.matchingKeysHaveMatchingValues;
      this._noKeyMatches = value.noKeyMatches;
    }
  }

  // a_key_matches - computed: false, optional: true, required: false
  private _aKeyMatches?: string; 
  public get aKeyMatches() {
    return this.getStringAttribute('a_key_matches');
  }
  public set aKeyMatches(value: string) {
    this._aKeyMatches = value;
  }
  public resetAKeyMatches() {
    this._aKeyMatches = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aKeyMatchesInput() {
    return this._aKeyMatches;
  }

  // key_does_not_exist - computed: false, optional: true, required: false
  private _keyDoesNotExist?: { [key: string]: string }; 
  public get keyDoesNotExist() {
    return this.getStringMapAttribute('key_does_not_exist');
  }
  public set keyDoesNotExist(value: { [key: string]: string }) {
    this._keyDoesNotExist = value;
  }
  public resetKeyDoesNotExist() {
    this._keyDoesNotExist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyDoesNotExistInput() {
    return this._keyDoesNotExist;
  }

  // key_exists - computed: false, optional: true, required: false
  private _keyExists?: string; 
  public get keyExists() {
    return this.getStringAttribute('key_exists');
  }
  public set keyExists(value: string) {
    this._keyExists = value;
  }
  public resetKeyExists() {
    this._keyExists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyExistsInput() {
    return this._keyExists;
  }

  // key_value_does_not_equal - computed: false, optional: true, required: false
  private _keyValueDoesNotEqual?: { [key: string]: string }; 
  public get keyValueDoesNotEqual() {
    return this.getStringMapAttribute('key_value_does_not_equal');
  }
  public set keyValueDoesNotEqual(value: { [key: string]: string }) {
    this._keyValueDoesNotEqual = value;
  }
  public resetKeyValueDoesNotEqual() {
    this._keyValueDoesNotEqual = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyValueDoesNotEqualInput() {
    return this._keyValueDoesNotEqual;
  }

  // key_value_does_not_match - computed: false, optional: true, required: false
  private _keyValueDoesNotMatch?: { [key: string]: string }; 
  public get keyValueDoesNotMatch() {
    return this.getStringMapAttribute('key_value_does_not_match');
  }
  public set keyValueDoesNotMatch(value: { [key: string]: string }) {
    this._keyValueDoesNotMatch = value;
  }
  public resetKeyValueDoesNotMatch() {
    this._keyValueDoesNotMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyValueDoesNotMatchInput() {
    return this._keyValueDoesNotMatch;
  }

  // key_value_equals - computed: false, optional: true, required: false
  private _keyValueEquals?: { [key: string]: string }; 
  public get keyValueEquals() {
    return this.getStringMapAttribute('key_value_equals');
  }
  public set keyValueEquals(value: { [key: string]: string }) {
    this._keyValueEquals = value;
  }
  public resetKeyValueEquals() {
    this._keyValueEquals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyValueEqualsInput() {
    return this._keyValueEquals;
  }

  // key_value_matches - computed: false, optional: true, required: false
  private _keyValueMatches?: { [key: string]: string }; 
  public get keyValueMatches() {
    return this.getStringMapAttribute('key_value_matches');
  }
  public set keyValueMatches(value: { [key: string]: string }) {
    this._keyValueMatches = value;
  }
  public resetKeyValueMatches() {
    this._keyValueMatches = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyValueMatchesInput() {
    return this._keyValueMatches;
  }

  // matching_keys_do_not_have_matching_values - computed: false, optional: true, required: false
  private _matchingKeysDoNotHaveMatchingValues?: { [key: string]: string }; 
  public get matchingKeysDoNotHaveMatchingValues() {
    return this.getStringMapAttribute('matching_keys_do_not_have_matching_values');
  }
  public set matchingKeysDoNotHaveMatchingValues(value: { [key: string]: string }) {
    this._matchingKeysDoNotHaveMatchingValues = value;
  }
  public resetMatchingKeysDoNotHaveMatchingValues() {
    this._matchingKeysDoNotHaveMatchingValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchingKeysDoNotHaveMatchingValuesInput() {
    return this._matchingKeysDoNotHaveMatchingValues;
  }

  // matching_keys_have_matching_values - computed: false, optional: true, required: false
  private _matchingKeysHaveMatchingValues?: { [key: string]: string }; 
  public get matchingKeysHaveMatchingValues() {
    return this.getStringMapAttribute('matching_keys_have_matching_values');
  }
  public set matchingKeysHaveMatchingValues(value: { [key: string]: string }) {
    this._matchingKeysHaveMatchingValues = value;
  }
  public resetMatchingKeysHaveMatchingValues() {
    this._matchingKeysHaveMatchingValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchingKeysHaveMatchingValuesInput() {
    return this._matchingKeysHaveMatchingValues;
  }

  // no_key_matches - computed: false, optional: true, required: false
  private _noKeyMatches?: string; 
  public get noKeyMatches() {
    return this.getStringAttribute('no_key_matches');
  }
  public set noKeyMatches(value: string) {
    this._noKeyMatches = value;
  }
  public resetNoKeyMatches() {
    this._noKeyMatches = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noKeyMatchesInput() {
    return this._noKeyMatches;
  }
}

export class DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersModifyConditionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersModifyConditions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersModifyConditionsOutputReference {
    return new DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersModifyConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersModifyRules {
  /**
  * Add a key/value pair with key KEY and value VALUE if KEY does not exist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#add DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#add}
  */
  readonly add?: { [key: string]: string };
  /**
  * Copy a key/value pair with key KEY to COPIED_KEY if KEY exists AND COPIED_KEY does not exist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#copy DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#copy}
  */
  readonly copy?: { [key: string]: string };
  /**
  * Copy a key/value pair with key KEY to COPIED_KEY if KEY exists. If COPIED_KEY already exists, this field is overwritten
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#hard_copy DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#hard_copy}
  */
  readonly hardCopy?: { [key: string]: string };
  /**
  * Rename a key/value pair with key KEY to RENAMED_KEY if KEY exists. If RENAMED_KEY already exists, this field is overwritten
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#hard_rename DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#hard_rename}
  */
  readonly hardRename?: { [key: string]: string };
  /**
  * Remove a key/value pair with key KEY if it exists
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#remove DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#remove}
  */
  readonly remove?: string;
  /**
  * Remove all key/value pairs with key matching regexp KEY
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#remove_regex DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#remove_regex}
  */
  readonly removeRegex?: string;
  /**
  * Remove all key/value pairs with key matching wildcard KEY
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#remove_wildcard DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#remove_wildcard}
  */
  readonly removeWildcard?: string;
  /**
  * Rename a key/value pair with key KEY to RENAMED_KEY if KEY exists AND RENAMED_KEY does not exist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#rename DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#rename}
  */
  readonly rename?: { [key: string]: string };
  /**
  * Add a key/value pair with key KEY and value VALUE. If KEY already exists, this field is overwritten
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#set DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#set}
  */
  readonly set?: { [key: string]: string };
}

export function dataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersModifyRulesToTerraform(struct?: DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersModifyRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.add),
    copy: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.copy),
    hard_copy: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.hardCopy),
    hard_rename: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.hardRename),
    remove: cdktf.stringToTerraform(struct!.remove),
    remove_regex: cdktf.stringToTerraform(struct!.removeRegex),
    remove_wildcard: cdktf.stringToTerraform(struct!.removeWildcard),
    rename: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.rename),
    set: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.set),
  }
}


export function dataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersModifyRulesToHclTerraform(struct?: DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersModifyRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.add),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    copy: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.copy),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    hard_copy: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.hardCopy),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    hard_rename: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.hardRename),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    remove: {
      value: cdktf.stringToHclTerraform(struct!.remove),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remove_regex: {
      value: cdktf.stringToHclTerraform(struct!.removeRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remove_wildcard: {
      value: cdktf.stringToHclTerraform(struct!.removeWildcard),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rename: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.rename),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    set: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.set),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersModifyRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersModifyRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._add !== undefined) {
      hasAnyValues = true;
      internalValueResult.add = this._add;
    }
    if (this._copy !== undefined) {
      hasAnyValues = true;
      internalValueResult.copy = this._copy;
    }
    if (this._hardCopy !== undefined) {
      hasAnyValues = true;
      internalValueResult.hardCopy = this._hardCopy;
    }
    if (this._hardRename !== undefined) {
      hasAnyValues = true;
      internalValueResult.hardRename = this._hardRename;
    }
    if (this._remove !== undefined) {
      hasAnyValues = true;
      internalValueResult.remove = this._remove;
    }
    if (this._removeRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.removeRegex = this._removeRegex;
    }
    if (this._removeWildcard !== undefined) {
      hasAnyValues = true;
      internalValueResult.removeWildcard = this._removeWildcard;
    }
    if (this._rename !== undefined) {
      hasAnyValues = true;
      internalValueResult.rename = this._rename;
    }
    if (this._set !== undefined) {
      hasAnyValues = true;
      internalValueResult.set = this._set;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersModifyRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._add = undefined;
      this._copy = undefined;
      this._hardCopy = undefined;
      this._hardRename = undefined;
      this._remove = undefined;
      this._removeRegex = undefined;
      this._removeWildcard = undefined;
      this._rename = undefined;
      this._set = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._add = value.add;
      this._copy = value.copy;
      this._hardCopy = value.hardCopy;
      this._hardRename = value.hardRename;
      this._remove = value.remove;
      this._removeRegex = value.removeRegex;
      this._removeWildcard = value.removeWildcard;
      this._rename = value.rename;
      this._set = value.set;
    }
  }

  // add - computed: false, optional: true, required: false
  private _add?: { [key: string]: string }; 
  public get add() {
    return this.getStringMapAttribute('add');
  }
  public set add(value: { [key: string]: string }) {
    this._add = value;
  }
  public resetAdd() {
    this._add = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addInput() {
    return this._add;
  }

  // copy - computed: false, optional: true, required: false
  private _copy?: { [key: string]: string }; 
  public get copy() {
    return this.getStringMapAttribute('copy');
  }
  public set copy(value: { [key: string]: string }) {
    this._copy = value;
  }
  public resetCopy() {
    this._copy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyInput() {
    return this._copy;
  }

  // hard_copy - computed: false, optional: true, required: false
  private _hardCopy?: { [key: string]: string }; 
  public get hardCopy() {
    return this.getStringMapAttribute('hard_copy');
  }
  public set hardCopy(value: { [key: string]: string }) {
    this._hardCopy = value;
  }
  public resetHardCopy() {
    this._hardCopy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hardCopyInput() {
    return this._hardCopy;
  }

  // hard_rename - computed: false, optional: true, required: false
  private _hardRename?: { [key: string]: string }; 
  public get hardRename() {
    return this.getStringMapAttribute('hard_rename');
  }
  public set hardRename(value: { [key: string]: string }) {
    this._hardRename = value;
  }
  public resetHardRename() {
    this._hardRename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hardRenameInput() {
    return this._hardRename;
  }

  // remove - computed: false, optional: true, required: false
  private _remove?: string; 
  public get remove() {
    return this.getStringAttribute('remove');
  }
  public set remove(value: string) {
    this._remove = value;
  }
  public resetRemove() {
    this._remove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeInput() {
    return this._remove;
  }

  // remove_regex - computed: false, optional: true, required: false
  private _removeRegex?: string; 
  public get removeRegex() {
    return this.getStringAttribute('remove_regex');
  }
  public set removeRegex(value: string) {
    this._removeRegex = value;
  }
  public resetRemoveRegex() {
    this._removeRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeRegexInput() {
    return this._removeRegex;
  }

  // remove_wildcard - computed: false, optional: true, required: false
  private _removeWildcard?: string; 
  public get removeWildcard() {
    return this.getStringAttribute('remove_wildcard');
  }
  public set removeWildcard(value: string) {
    this._removeWildcard = value;
  }
  public resetRemoveWildcard() {
    this._removeWildcard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeWildcardInput() {
    return this._removeWildcard;
  }

  // rename - computed: false, optional: true, required: false
  private _rename?: { [key: string]: string }; 
  public get rename() {
    return this.getStringMapAttribute('rename');
  }
  public set rename(value: { [key: string]: string }) {
    this._rename = value;
  }
  public resetRename() {
    this._rename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renameInput() {
    return this._rename;
  }

  // set - computed: false, optional: true, required: false
  private _set?: { [key: string]: string }; 
  public get set() {
    return this.getStringMapAttribute('set');
  }
  public set set(value: { [key: string]: string }) {
    this._set = value;
  }
  public resetSet() {
    this._set = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setInput() {
    return this._set;
  }
}

export class DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersModifyRulesList extends cdktf.ComplexList {
  public internalValue? : DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersModifyRules[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersModifyRulesOutputReference {
    return new DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersModifyRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersModify {
  /**
  * Alias for the plugin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#alias DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#alias}
  */
  readonly alias?: string;
  /**
  * All conditions have to be true for the rules to be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#conditions DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#conditions}
  */
  readonly conditions?: DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersModifyConditions[] | cdktf.IResolvable;
  /**
  * RetryLimit describes how many times fluent-bit should retry to send data to a specific output. If set to false fluent-bit will try indefinetly. If set to any integer N>0 it will try at most N+1 times. Leading zeros are not allowed (values such as 007, 0150, 01 do not work). If this property is not defined fluent-bit will use the default value: 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#retry_limit DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#retry_limit}
  */
  readonly retryLimit?: string;
  /**
  * Rules are applied in the order they appear, with each rule operating on the result of the previous rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#rules DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#rules}
  */
  readonly rules?: DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersModifyRules[] | cdktf.IResolvable;
}

export function dataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersModifyToTerraform(struct?: DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersModify | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alias: cdktf.stringToTerraform(struct!.alias),
    conditions: cdktf.listMapper(dataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersModifyConditionsToTerraform, false)(struct!.conditions),
    retry_limit: cdktf.stringToTerraform(struct!.retryLimit),
    rules: cdktf.listMapper(dataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersModifyRulesToTerraform, false)(struct!.rules),
  }
}


export function dataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersModifyToHclTerraform(struct?: DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersModify | cdktf.IResolvable): any {
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
    conditions: {
      value: cdktf.listMapperHcl(dataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersModifyConditionsToHclTerraform, false)(struct!.conditions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersModifyConditionsList",
    },
    retry_limit: {
      value: cdktf.stringToHclTerraform(struct!.retryLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rules: {
      value: cdktf.listMapperHcl(dataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersModifyRulesToHclTerraform, false)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersModifyRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersModifyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersModify | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alias !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias;
    }
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    if (this._retryLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryLimit = this._retryLimit;
    }
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersModify | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alias = undefined;
      this._conditions.internalValue = undefined;
      this._retryLimit = undefined;
      this._rules.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alias = value.alias;
      this._conditions.internalValue = value.conditions;
      this._retryLimit = value.retryLimit;
      this._rules.internalValue = value.rules;
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

  // conditions - computed: false, optional: true, required: false
  private _conditions = new DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersModifyConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersModifyConditions[] | cdktf.IResolvable) {
    this._conditions.internalValue = value;
  }
  public resetConditions() {
    this._conditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }

  // retry_limit - computed: false, optional: true, required: false
  private _retryLimit?: string; 
  public get retryLimit() {
    return this.getStringAttribute('retry_limit');
  }
  public set retryLimit(value: string) {
    this._retryLimit = value;
  }
  public resetRetryLimit() {
    this._retryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryLimitInput() {
    return this._retryLimit;
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersModifyRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersModifyRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}
export interface DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersMultiline {
  /**
  * Alias for the plugin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#alias DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#alias}
  */
  readonly alias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#buffer DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#buffer}
  */
  readonly buffer?: boolean | cdktf.IResolvable;
  /**
  * Set a limit on the amount of memory in MB the emitter can consume if the outputs provide backpressure. The default for this limit is 10M. The pipeline will pause once the buffer exceeds the value of this setting. For example, if the value is set to 10MB then the pipeline will pause if the buffer exceeds 10M. The pipeline will remain paused until the output drains the buffer below the 10M limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#emitter_mem_buf_limit DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#emitter_mem_buf_limit}
  */
  readonly emitterMemBufLimit?: number;
  /**
  * Name for the emitter input instance which re-emits the completed records at the beginning of the pipeline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#emitter_name DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#emitter_name}
  */
  readonly emitterName?: string;
  /**
  * The storage type for the emitter input instance. This option supports the values memory (default) and filesystem.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#emitter_type DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#emitter_type}
  */
  readonly emitterType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#flush_ms DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#flush_ms}
  */
  readonly flushMs?: number;
  /**
  * Key name that holds the content to process. Note that a Multiline Parser definition can already specify the key_content to use, but this option allows to overwrite that value for the purpose of the filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#key_content DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#key_content}
  */
  readonly keyContent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#mode DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#mode}
  */
  readonly mode?: string;
  /**
  * Specify one or multiple Multiline Parsing definitions to apply to the content. You can specify multiple multiline parsers to detect different formats by separating them with a comma.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#parser DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#parser}
  */
  readonly parser: string;
  /**
  * RetryLimit describes how many times fluent-bit should retry to send data to a specific output. If set to false fluent-bit will try indefinetly. If set to any integer N>0 it will try at most N+1 times. Leading zeros are not allowed (values such as 007, 0150, 01 do not work). If this property is not defined fluent-bit will use the default value: 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#retry_limit DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#retry_limit}
  */
  readonly retryLimit?: string;
}

export function dataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersMultilineToTerraform(struct?: DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersMultiline | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alias: cdktf.stringToTerraform(struct!.alias),
    buffer: cdktf.booleanToTerraform(struct!.buffer),
    emitter_mem_buf_limit: cdktf.numberToTerraform(struct!.emitterMemBufLimit),
    emitter_name: cdktf.stringToTerraform(struct!.emitterName),
    emitter_type: cdktf.stringToTerraform(struct!.emitterType),
    flush_ms: cdktf.numberToTerraform(struct!.flushMs),
    key_content: cdktf.stringToTerraform(struct!.keyContent),
    mode: cdktf.stringToTerraform(struct!.mode),
    parser: cdktf.stringToTerraform(struct!.parser),
    retry_limit: cdktf.stringToTerraform(struct!.retryLimit),
  }
}


export function dataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersMultilineToHclTerraform(struct?: DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersMultiline | cdktf.IResolvable): any {
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
    buffer: {
      value: cdktf.booleanToHclTerraform(struct!.buffer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    emitter_mem_buf_limit: {
      value: cdktf.numberToHclTerraform(struct!.emitterMemBufLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    emitter_name: {
      value: cdktf.stringToHclTerraform(struct!.emitterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    emitter_type: {
      value: cdktf.stringToHclTerraform(struct!.emitterType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    flush_ms: {
      value: cdktf.numberToHclTerraform(struct!.flushMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    key_content: {
      value: cdktf.stringToHclTerraform(struct!.keyContent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parser: {
      value: cdktf.stringToHclTerraform(struct!.parser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retry_limit: {
      value: cdktf.stringToHclTerraform(struct!.retryLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersMultilineOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersMultiline | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alias !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias;
    }
    if (this._buffer !== undefined) {
      hasAnyValues = true;
      internalValueResult.buffer = this._buffer;
    }
    if (this._emitterMemBufLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.emitterMemBufLimit = this._emitterMemBufLimit;
    }
    if (this._emitterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.emitterName = this._emitterName;
    }
    if (this._emitterType !== undefined) {
      hasAnyValues = true;
      internalValueResult.emitterType = this._emitterType;
    }
    if (this._flushMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.flushMs = this._flushMs;
    }
    if (this._keyContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyContent = this._keyContent;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._parser !== undefined) {
      hasAnyValues = true;
      internalValueResult.parser = this._parser;
    }
    if (this._retryLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryLimit = this._retryLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersMultiline | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alias = undefined;
      this._buffer = undefined;
      this._emitterMemBufLimit = undefined;
      this._emitterName = undefined;
      this._emitterType = undefined;
      this._flushMs = undefined;
      this._keyContent = undefined;
      this._mode = undefined;
      this._parser = undefined;
      this._retryLimit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alias = value.alias;
      this._buffer = value.buffer;
      this._emitterMemBufLimit = value.emitterMemBufLimit;
      this._emitterName = value.emitterName;
      this._emitterType = value.emitterType;
      this._flushMs = value.flushMs;
      this._keyContent = value.keyContent;
      this._mode = value.mode;
      this._parser = value.parser;
      this._retryLimit = value.retryLimit;
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

  // buffer - computed: false, optional: true, required: false
  private _buffer?: boolean | cdktf.IResolvable; 
  public get buffer() {
    return this.getBooleanAttribute('buffer');
  }
  public set buffer(value: boolean | cdktf.IResolvable) {
    this._buffer = value;
  }
  public resetBuffer() {
    this._buffer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferInput() {
    return this._buffer;
  }

  // emitter_mem_buf_limit - computed: false, optional: true, required: false
  private _emitterMemBufLimit?: number; 
  public get emitterMemBufLimit() {
    return this.getNumberAttribute('emitter_mem_buf_limit');
  }
  public set emitterMemBufLimit(value: number) {
    this._emitterMemBufLimit = value;
  }
  public resetEmitterMemBufLimit() {
    this._emitterMemBufLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emitterMemBufLimitInput() {
    return this._emitterMemBufLimit;
  }

  // emitter_name - computed: false, optional: true, required: false
  private _emitterName?: string; 
  public get emitterName() {
    return this.getStringAttribute('emitter_name');
  }
  public set emitterName(value: string) {
    this._emitterName = value;
  }
  public resetEmitterName() {
    this._emitterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emitterNameInput() {
    return this._emitterName;
  }

  // emitter_type - computed: false, optional: true, required: false
  private _emitterType?: string; 
  public get emitterType() {
    return this.getStringAttribute('emitter_type');
  }
  public set emitterType(value: string) {
    this._emitterType = value;
  }
  public resetEmitterType() {
    this._emitterType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emitterTypeInput() {
    return this._emitterType;
  }

  // flush_ms - computed: false, optional: true, required: false
  private _flushMs?: number; 
  public get flushMs() {
    return this.getNumberAttribute('flush_ms');
  }
  public set flushMs(value: number) {
    this._flushMs = value;
  }
  public resetFlushMs() {
    this._flushMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flushMsInput() {
    return this._flushMs;
  }

  // key_content - computed: false, optional: true, required: false
  private _keyContent?: string; 
  public get keyContent() {
    return this.getStringAttribute('key_content');
  }
  public set keyContent(value: string) {
    this._keyContent = value;
  }
  public resetKeyContent() {
    this._keyContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyContentInput() {
    return this._keyContent;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // parser - computed: false, optional: false, required: true
  private _parser?: string; 
  public get parser() {
    return this.getStringAttribute('parser');
  }
  public set parser(value: string) {
    this._parser = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parserInput() {
    return this._parser;
  }

  // retry_limit - computed: false, optional: true, required: false
  private _retryLimit?: string; 
  public get retryLimit() {
    return this.getStringAttribute('retry_limit');
  }
  public set retryLimit(value: string) {
    this._retryLimit = value;
  }
  public resetRetryLimit() {
    this._retryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryLimitInput() {
    return this._retryLimit;
  }
}
export interface DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersNest {
  /**
  * Prefix affected keys with this string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#add_prefix DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#add_prefix}
  */
  readonly addPrefix?: string;
  /**
  * Alias for the plugin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#alias DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#alias}
  */
  readonly alias?: string;
  /**
  * Nest records matching the Wildcard under this key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#nest_under DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#nest_under}
  */
  readonly nestUnder?: string;
  /**
  * Lift records nested under the Nested_under key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#nested_under DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#nested_under}
  */
  readonly nestedUnder?: string;
  /**
  * Select the operation nest or lift
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#operation DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#operation}
  */
  readonly operation?: string;
  /**
  * Remove prefix from affected keys if it matches this string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#remove_prefix DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#remove_prefix}
  */
  readonly removePrefix?: string;
  /**
  * RetryLimit describes how many times fluent-bit should retry to send data to a specific output. If set to false fluent-bit will try indefinetly. If set to any integer N>0 it will try at most N+1 times. Leading zeros are not allowed (values such as 007, 0150, 01 do not work). If this property is not defined fluent-bit will use the default value: 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#retry_limit DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#retry_limit}
  */
  readonly retryLimit?: string;
  /**
  * Nest records which field matches the wildcard
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#wildcard DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#wildcard}
  */
  readonly wildcard?: string[];
}

export function dataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersNestToTerraform(struct?: DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersNest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add_prefix: cdktf.stringToTerraform(struct!.addPrefix),
    alias: cdktf.stringToTerraform(struct!.alias),
    nest_under: cdktf.stringToTerraform(struct!.nestUnder),
    nested_under: cdktf.stringToTerraform(struct!.nestedUnder),
    operation: cdktf.stringToTerraform(struct!.operation),
    remove_prefix: cdktf.stringToTerraform(struct!.removePrefix),
    retry_limit: cdktf.stringToTerraform(struct!.retryLimit),
    wildcard: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.wildcard),
  }
}


export function dataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersNestToHclTerraform(struct?: DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersNest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add_prefix: {
      value: cdktf.stringToHclTerraform(struct!.addPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    alias: {
      value: cdktf.stringToHclTerraform(struct!.alias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nest_under: {
      value: cdktf.stringToHclTerraform(struct!.nestUnder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nested_under: {
      value: cdktf.stringToHclTerraform(struct!.nestedUnder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operation: {
      value: cdktf.stringToHclTerraform(struct!.operation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remove_prefix: {
      value: cdktf.stringToHclTerraform(struct!.removePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retry_limit: {
      value: cdktf.stringToHclTerraform(struct!.retryLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wildcard: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.wildcard),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersNestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersNest | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.addPrefix = this._addPrefix;
    }
    if (this._alias !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias;
    }
    if (this._nestUnder !== undefined) {
      hasAnyValues = true;
      internalValueResult.nestUnder = this._nestUnder;
    }
    if (this._nestedUnder !== undefined) {
      hasAnyValues = true;
      internalValueResult.nestedUnder = this._nestedUnder;
    }
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    if (this._removePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.removePrefix = this._removePrefix;
    }
    if (this._retryLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryLimit = this._retryLimit;
    }
    if (this._wildcard !== undefined) {
      hasAnyValues = true;
      internalValueResult.wildcard = this._wildcard;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersNest | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addPrefix = undefined;
      this._alias = undefined;
      this._nestUnder = undefined;
      this._nestedUnder = undefined;
      this._operation = undefined;
      this._removePrefix = undefined;
      this._retryLimit = undefined;
      this._wildcard = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addPrefix = value.addPrefix;
      this._alias = value.alias;
      this._nestUnder = value.nestUnder;
      this._nestedUnder = value.nestedUnder;
      this._operation = value.operation;
      this._removePrefix = value.removePrefix;
      this._retryLimit = value.retryLimit;
      this._wildcard = value.wildcard;
    }
  }

  // add_prefix - computed: false, optional: true, required: false
  private _addPrefix?: string; 
  public get addPrefix() {
    return this.getStringAttribute('add_prefix');
  }
  public set addPrefix(value: string) {
    this._addPrefix = value;
  }
  public resetAddPrefix() {
    this._addPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addPrefixInput() {
    return this._addPrefix;
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

  // nest_under - computed: false, optional: true, required: false
  private _nestUnder?: string; 
  public get nestUnder() {
    return this.getStringAttribute('nest_under');
  }
  public set nestUnder(value: string) {
    this._nestUnder = value;
  }
  public resetNestUnder() {
    this._nestUnder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nestUnderInput() {
    return this._nestUnder;
  }

  // nested_under - computed: false, optional: true, required: false
  private _nestedUnder?: string; 
  public get nestedUnder() {
    return this.getStringAttribute('nested_under');
  }
  public set nestedUnder(value: string) {
    this._nestedUnder = value;
  }
  public resetNestedUnder() {
    this._nestedUnder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nestedUnderInput() {
    return this._nestedUnder;
  }

  // operation - computed: false, optional: true, required: false
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  public resetOperation() {
    this._operation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
  }

  // remove_prefix - computed: false, optional: true, required: false
  private _removePrefix?: string; 
  public get removePrefix() {
    return this.getStringAttribute('remove_prefix');
  }
  public set removePrefix(value: string) {
    this._removePrefix = value;
  }
  public resetRemovePrefix() {
    this._removePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removePrefixInput() {
    return this._removePrefix;
  }

  // retry_limit - computed: false, optional: true, required: false
  private _retryLimit?: string; 
  public get retryLimit() {
    return this.getStringAttribute('retry_limit');
  }
  public set retryLimit(value: string) {
    this._retryLimit = value;
  }
  public resetRetryLimit() {
    this._retryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryLimitInput() {
    return this._retryLimit;
  }

  // wildcard - computed: false, optional: true, required: false
  private _wildcard?: string[]; 
  public get wildcard() {
    return this.getListAttribute('wildcard');
  }
  public set wildcard(value: string[]) {
    this._wildcard = value;
  }
  public resetWildcard() {
    this._wildcard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wildcardInput() {
    return this._wildcard;
  }
}
export interface DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersParser {
  /**
  * Alias for the plugin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#alias DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#alias}
  */
  readonly alias?: string;
  /**
  * Specify field name in record to parse.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#key_name DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#key_name}
  */
  readonly keyName?: string;
  /**
  * Specify the parser name to interpret the field. Multiple Parser entries are allowed (split by comma).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#parser DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#parser}
  */
  readonly parser?: string;
  /**
  * Keep original Key_Name field in the parsed result. If false, the field will be removed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#preserve_key DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#preserve_key}
  */
  readonly preserveKey?: boolean | cdktf.IResolvable;
  /**
  * Keep all other original fields in the parsed result. If false, all other original fields will be removed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#reserve_data DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#reserve_data}
  */
  readonly reserveData?: boolean | cdktf.IResolvable;
  /**
  * RetryLimit describes how many times fluent-bit should retry to send data to a specific output. If set to false fluent-bit will try indefinetly. If set to any integer N>0 it will try at most N+1 times. Leading zeros are not allowed (values such as 007, 0150, 01 do not work). If this property is not defined fluent-bit will use the default value: 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#retry_limit DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#retry_limit}
  */
  readonly retryLimit?: string;
  /**
  * If the key is a escaped string (e.g: stringify JSON), unescape the string before to apply the parser.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#unescape_key DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#unescape_key}
  */
  readonly unescapeKey?: boolean | cdktf.IResolvable;
}

export function dataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersParserToTerraform(struct?: DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersParser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alias: cdktf.stringToTerraform(struct!.alias),
    key_name: cdktf.stringToTerraform(struct!.keyName),
    parser: cdktf.stringToTerraform(struct!.parser),
    preserve_key: cdktf.booleanToTerraform(struct!.preserveKey),
    reserve_data: cdktf.booleanToTerraform(struct!.reserveData),
    retry_limit: cdktf.stringToTerraform(struct!.retryLimit),
    unescape_key: cdktf.booleanToTerraform(struct!.unescapeKey),
  }
}


export function dataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersParserToHclTerraform(struct?: DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersParser | cdktf.IResolvable): any {
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
    key_name: {
      value: cdktf.stringToHclTerraform(struct!.keyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parser: {
      value: cdktf.stringToHclTerraform(struct!.parser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preserve_key: {
      value: cdktf.booleanToHclTerraform(struct!.preserveKey),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    reserve_data: {
      value: cdktf.booleanToHclTerraform(struct!.reserveData),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    retry_limit: {
      value: cdktf.stringToHclTerraform(struct!.retryLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unescape_key: {
      value: cdktf.booleanToHclTerraform(struct!.unescapeKey),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersParserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersParser | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alias !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias;
    }
    if (this._keyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyName = this._keyName;
    }
    if (this._parser !== undefined) {
      hasAnyValues = true;
      internalValueResult.parser = this._parser;
    }
    if (this._preserveKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.preserveKey = this._preserveKey;
    }
    if (this._reserveData !== undefined) {
      hasAnyValues = true;
      internalValueResult.reserveData = this._reserveData;
    }
    if (this._retryLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryLimit = this._retryLimit;
    }
    if (this._unescapeKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.unescapeKey = this._unescapeKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersParser | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alias = undefined;
      this._keyName = undefined;
      this._parser = undefined;
      this._preserveKey = undefined;
      this._reserveData = undefined;
      this._retryLimit = undefined;
      this._unescapeKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alias = value.alias;
      this._keyName = value.keyName;
      this._parser = value.parser;
      this._preserveKey = value.preserveKey;
      this._reserveData = value.reserveData;
      this._retryLimit = value.retryLimit;
      this._unescapeKey = value.unescapeKey;
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

  // parser - computed: false, optional: true, required: false
  private _parser?: string; 
  public get parser() {
    return this.getStringAttribute('parser');
  }
  public set parser(value: string) {
    this._parser = value;
  }
  public resetParser() {
    this._parser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parserInput() {
    return this._parser;
  }

  // preserve_key - computed: false, optional: true, required: false
  private _preserveKey?: boolean | cdktf.IResolvable; 
  public get preserveKey() {
    return this.getBooleanAttribute('preserve_key');
  }
  public set preserveKey(value: boolean | cdktf.IResolvable) {
    this._preserveKey = value;
  }
  public resetPreserveKey() {
    this._preserveKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preserveKeyInput() {
    return this._preserveKey;
  }

  // reserve_data - computed: false, optional: true, required: false
  private _reserveData?: boolean | cdktf.IResolvable; 
  public get reserveData() {
    return this.getBooleanAttribute('reserve_data');
  }
  public set reserveData(value: boolean | cdktf.IResolvable) {
    this._reserveData = value;
  }
  public resetReserveData() {
    this._reserveData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reserveDataInput() {
    return this._reserveData;
  }

  // retry_limit - computed: false, optional: true, required: false
  private _retryLimit?: string; 
  public get retryLimit() {
    return this.getStringAttribute('retry_limit');
  }
  public set retryLimit(value: string) {
    this._retryLimit = value;
  }
  public resetRetryLimit() {
    this._retryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryLimitInput() {
    return this._retryLimit;
  }

  // unescape_key - computed: false, optional: true, required: false
  private _unescapeKey?: boolean | cdktf.IResolvable; 
  public get unescapeKey() {
    return this.getBooleanAttribute('unescape_key');
  }
  public set unescapeKey(value: boolean | cdktf.IResolvable) {
    this._unescapeKey = value;
  }
  public resetUnescapeKey() {
    this._unescapeKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unescapeKeyInput() {
    return this._unescapeKey;
  }
}
export interface DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersRecordModifier {
  /**
  * Alias for the plugin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#alias DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#alias}
  */
  readonly alias?: string;
  /**
  * If the key is not matched, that field is removed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#allowlist_keys DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#allowlist_keys}
  */
  readonly allowlistKeys?: string[];
  /**
  * Append fields. This parameter needs key and value pair.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#records DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#records}
  */
  readonly records?: string[];
  /**
  * If the key is matched, that field is removed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#remove_keys DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#remove_keys}
  */
  readonly removeKeys?: string[];
  /**
  * RetryLimit describes how many times fluent-bit should retry to send data to a specific output. If set to false fluent-bit will try indefinetly. If set to any integer N>0 it will try at most N+1 times. Leading zeros are not allowed (values such as 007, 0150, 01 do not work). If this property is not defined fluent-bit will use the default value: 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#retry_limit DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#retry_limit}
  */
  readonly retryLimit?: string;
  /**
  * If set, the plugin appends uuid to each record. The value assigned becomes the key in the map.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#uuid_keys DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#uuid_keys}
  */
  readonly uuidKeys?: string[];
  /**
  * An alias of allowlistKeys for backwards compatibility.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#whitelist_keys DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#whitelist_keys}
  */
  readonly whitelistKeys?: string[];
}

export function dataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersRecordModifierToTerraform(struct?: DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersRecordModifier | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alias: cdktf.stringToTerraform(struct!.alias),
    allowlist_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowlistKeys),
    records: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.records),
    remove_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.removeKeys),
    retry_limit: cdktf.stringToTerraform(struct!.retryLimit),
    uuid_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.uuidKeys),
    whitelist_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.whitelistKeys),
  }
}


export function dataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersRecordModifierToHclTerraform(struct?: DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersRecordModifier | cdktf.IResolvable): any {
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
    allowlist_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowlistKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    records: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.records),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    remove_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.removeKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    retry_limit: {
      value: cdktf.stringToHclTerraform(struct!.retryLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.uuidKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    whitelist_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.whitelistKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersRecordModifierOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersRecordModifier | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alias !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias;
    }
    if (this._allowlistKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowlistKeys = this._allowlistKeys;
    }
    if (this._records !== undefined) {
      hasAnyValues = true;
      internalValueResult.records = this._records;
    }
    if (this._removeKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.removeKeys = this._removeKeys;
    }
    if (this._retryLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryLimit = this._retryLimit;
    }
    if (this._uuidKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuidKeys = this._uuidKeys;
    }
    if (this._whitelistKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.whitelistKeys = this._whitelistKeys;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersRecordModifier | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alias = undefined;
      this._allowlistKeys = undefined;
      this._records = undefined;
      this._removeKeys = undefined;
      this._retryLimit = undefined;
      this._uuidKeys = undefined;
      this._whitelistKeys = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alias = value.alias;
      this._allowlistKeys = value.allowlistKeys;
      this._records = value.records;
      this._removeKeys = value.removeKeys;
      this._retryLimit = value.retryLimit;
      this._uuidKeys = value.uuidKeys;
      this._whitelistKeys = value.whitelistKeys;
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

  // allowlist_keys - computed: false, optional: true, required: false
  private _allowlistKeys?: string[]; 
  public get allowlistKeys() {
    return this.getListAttribute('allowlist_keys');
  }
  public set allowlistKeys(value: string[]) {
    this._allowlistKeys = value;
  }
  public resetAllowlistKeys() {
    this._allowlistKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowlistKeysInput() {
    return this._allowlistKeys;
  }

  // records - computed: false, optional: true, required: false
  private _records?: string[]; 
  public get records() {
    return this.getListAttribute('records');
  }
  public set records(value: string[]) {
    this._records = value;
  }
  public resetRecords() {
    this._records = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordsInput() {
    return this._records;
  }

  // remove_keys - computed: false, optional: true, required: false
  private _removeKeys?: string[]; 
  public get removeKeys() {
    return this.getListAttribute('remove_keys');
  }
  public set removeKeys(value: string[]) {
    this._removeKeys = value;
  }
  public resetRemoveKeys() {
    this._removeKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeKeysInput() {
    return this._removeKeys;
  }

  // retry_limit - computed: false, optional: true, required: false
  private _retryLimit?: string; 
  public get retryLimit() {
    return this.getStringAttribute('retry_limit');
  }
  public set retryLimit(value: string) {
    this._retryLimit = value;
  }
  public resetRetryLimit() {
    this._retryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryLimitInput() {
    return this._retryLimit;
  }

  // uuid_keys - computed: false, optional: true, required: false
  private _uuidKeys?: string[]; 
  public get uuidKeys() {
    return this.getListAttribute('uuid_keys');
  }
  public set uuidKeys(value: string[]) {
    this._uuidKeys = value;
  }
  public resetUuidKeys() {
    this._uuidKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidKeysInput() {
    return this._uuidKeys;
  }

  // whitelist_keys - computed: false, optional: true, required: false
  private _whitelistKeys?: string[]; 
  public get whitelistKeys() {
    return this.getListAttribute('whitelist_keys');
  }
  public set whitelistKeys(value: string[]) {
    this._whitelistKeys = value;
  }
  public resetWhitelistKeys() {
    this._whitelistKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whitelistKeysInput() {
    return this._whitelistKeys;
  }
}
export interface DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersRewriteTag {
  /**
  * Alias for the plugin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#alias DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#alias}
  */
  readonly alias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#emitter_mem_buf_limit DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#emitter_mem_buf_limit}
  */
  readonly emitterMemBufLimit?: string;
  /**
  * When the filter emits a record under the new Tag, there is an internal emitter plugin that takes care of the job. Since this emitter expose metrics as any other component of the pipeline, you can use this property to configure an optional name for it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#emitter_name DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#emitter_name}
  */
  readonly emitterName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#emitter_storage_type DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#emitter_storage_type}
  */
  readonly emitterStorageType?: string;
  /**
  * RetryLimit describes how many times fluent-bit should retry to send data to a specific output. If set to false fluent-bit will try indefinetly. If set to any integer N>0 it will try at most N+1 times. Leading zeros are not allowed (values such as 007, 0150, 01 do not work). If this property is not defined fluent-bit will use the default value: 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#retry_limit DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#retry_limit}
  */
  readonly retryLimit?: string;
  /**
  * Defines the matching criteria and the format of the Tag for the matching record. The Rule format have four components: KEY REGEX NEW_TAG KEEP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#rules DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#rules}
  */
  readonly rules?: string[];
}

export function dataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersRewriteTagToTerraform(struct?: DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersRewriteTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alias: cdktf.stringToTerraform(struct!.alias),
    emitter_mem_buf_limit: cdktf.stringToTerraform(struct!.emitterMemBufLimit),
    emitter_name: cdktf.stringToTerraform(struct!.emitterName),
    emitter_storage_type: cdktf.stringToTerraform(struct!.emitterStorageType),
    retry_limit: cdktf.stringToTerraform(struct!.retryLimit),
    rules: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rules),
  }
}


export function dataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersRewriteTagToHclTerraform(struct?: DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersRewriteTag | cdktf.IResolvable): any {
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
    emitter_mem_buf_limit: {
      value: cdktf.stringToHclTerraform(struct!.emitterMemBufLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    emitter_name: {
      value: cdktf.stringToHclTerraform(struct!.emitterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    emitter_storage_type: {
      value: cdktf.stringToHclTerraform(struct!.emitterStorageType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retry_limit: {
      value: cdktf.stringToHclTerraform(struct!.retryLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rules: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.rules),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersRewriteTagOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersRewriteTag | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alias !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias;
    }
    if (this._emitterMemBufLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.emitterMemBufLimit = this._emitterMemBufLimit;
    }
    if (this._emitterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.emitterName = this._emitterName;
    }
    if (this._emitterStorageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.emitterStorageType = this._emitterStorageType;
    }
    if (this._retryLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryLimit = this._retryLimit;
    }
    if (this._rules !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersRewriteTag | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alias = undefined;
      this._emitterMemBufLimit = undefined;
      this._emitterName = undefined;
      this._emitterStorageType = undefined;
      this._retryLimit = undefined;
      this._rules = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alias = value.alias;
      this._emitterMemBufLimit = value.emitterMemBufLimit;
      this._emitterName = value.emitterName;
      this._emitterStorageType = value.emitterStorageType;
      this._retryLimit = value.retryLimit;
      this._rules = value.rules;
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

  // emitter_mem_buf_limit - computed: false, optional: true, required: false
  private _emitterMemBufLimit?: string; 
  public get emitterMemBufLimit() {
    return this.getStringAttribute('emitter_mem_buf_limit');
  }
  public set emitterMemBufLimit(value: string) {
    this._emitterMemBufLimit = value;
  }
  public resetEmitterMemBufLimit() {
    this._emitterMemBufLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emitterMemBufLimitInput() {
    return this._emitterMemBufLimit;
  }

  // emitter_name - computed: false, optional: true, required: false
  private _emitterName?: string; 
  public get emitterName() {
    return this.getStringAttribute('emitter_name');
  }
  public set emitterName(value: string) {
    this._emitterName = value;
  }
  public resetEmitterName() {
    this._emitterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emitterNameInput() {
    return this._emitterName;
  }

  // emitter_storage_type - computed: false, optional: true, required: false
  private _emitterStorageType?: string; 
  public get emitterStorageType() {
    return this.getStringAttribute('emitter_storage_type');
  }
  public set emitterStorageType(value: string) {
    this._emitterStorageType = value;
  }
  public resetEmitterStorageType() {
    this._emitterStorageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emitterStorageTypeInput() {
    return this._emitterStorageType;
  }

  // retry_limit - computed: false, optional: true, required: false
  private _retryLimit?: string; 
  public get retryLimit() {
    return this.getStringAttribute('retry_limit');
  }
  public set retryLimit(value: string) {
    this._retryLimit = value;
  }
  public resetRetryLimit() {
    this._retryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryLimitInput() {
    return this._retryLimit;
  }

  // rules - computed: false, optional: true, required: false
  private _rules?: string[]; 
  public get rules() {
    return this.getListAttribute('rules');
  }
  public set rules(value: string[]) {
    this._rules = value;
  }
  public resetRules() {
    this._rules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules;
  }
}
export interface DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersThrottle {
  /**
  * Alias for the plugin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#alias DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#alias}
  */
  readonly alias?: string;
  /**
  * Interval is the time interval expressed in 'sleep' format. e.g. 3s, 1.5m, 0.5h, etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#interval DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#interval}
  */
  readonly interval?: string;
  /**
  * PrintStatus represents whether to print status messages with current rate and the limits to information logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#print_status DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#print_status}
  */
  readonly printStatus?: boolean | cdktf.IResolvable;
  /**
  * Rate is the amount of messages for the time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#rate DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#rate}
  */
  readonly rate?: number;
  /**
  * RetryLimit describes how many times fluent-bit should retry to send data to a specific output. If set to false fluent-bit will try indefinetly. If set to any integer N>0 it will try at most N+1 times. Leading zeros are not allowed (values such as 007, 0150, 01 do not work). If this property is not defined fluent-bit will use the default value: 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#retry_limit DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#retry_limit}
  */
  readonly retryLimit?: string;
  /**
  * Window is the amount of intervals to calculate average over.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#window DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#window}
  */
  readonly window?: number;
}

export function dataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersThrottleToTerraform(struct?: DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersThrottle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alias: cdktf.stringToTerraform(struct!.alias),
    interval: cdktf.stringToTerraform(struct!.interval),
    print_status: cdktf.booleanToTerraform(struct!.printStatus),
    rate: cdktf.numberToTerraform(struct!.rate),
    retry_limit: cdktf.stringToTerraform(struct!.retryLimit),
    window: cdktf.numberToTerraform(struct!.window),
  }
}


export function dataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersThrottleToHclTerraform(struct?: DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersThrottle | cdktf.IResolvable): any {
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
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    print_status: {
      value: cdktf.booleanToHclTerraform(struct!.printStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rate: {
      value: cdktf.numberToHclTerraform(struct!.rate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retry_limit: {
      value: cdktf.stringToHclTerraform(struct!.retryLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    window: {
      value: cdktf.numberToHclTerraform(struct!.window),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersThrottleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersThrottle | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alias !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._printStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.printStatus = this._printStatus;
    }
    if (this._rate !== undefined) {
      hasAnyValues = true;
      internalValueResult.rate = this._rate;
    }
    if (this._retryLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryLimit = this._retryLimit;
    }
    if (this._window !== undefined) {
      hasAnyValues = true;
      internalValueResult.window = this._window;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersThrottle | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alias = undefined;
      this._interval = undefined;
      this._printStatus = undefined;
      this._rate = undefined;
      this._retryLimit = undefined;
      this._window = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alias = value.alias;
      this._interval = value.interval;
      this._printStatus = value.printStatus;
      this._rate = value.rate;
      this._retryLimit = value.retryLimit;
      this._window = value.window;
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

  // interval - computed: false, optional: true, required: false
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // print_status - computed: false, optional: true, required: false
  private _printStatus?: boolean | cdktf.IResolvable; 
  public get printStatus() {
    return this.getBooleanAttribute('print_status');
  }
  public set printStatus(value: boolean | cdktf.IResolvable) {
    this._printStatus = value;
  }
  public resetPrintStatus() {
    this._printStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get printStatusInput() {
    return this._printStatus;
  }

  // rate - computed: false, optional: true, required: false
  private _rate?: number; 
  public get rate() {
    return this.getNumberAttribute('rate');
  }
  public set rate(value: number) {
    this._rate = value;
  }
  public resetRate() {
    this._rate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateInput() {
    return this._rate;
  }

  // retry_limit - computed: false, optional: true, required: false
  private _retryLimit?: string; 
  public get retryLimit() {
    return this.getStringAttribute('retry_limit');
  }
  public set retryLimit(value: string) {
    this._retryLimit = value;
  }
  public resetRetryLimit() {
    this._retryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryLimitInput() {
    return this._retryLimit;
  }

  // window - computed: false, optional: true, required: false
  private _window?: number; 
  public get window() {
    return this.getNumberAttribute('window');
  }
  public set window(value: number) {
    this._window = value;
  }
  public resetWindow() {
    this._window = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowInput() {
    return this._window;
  }
}
export interface DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersWasm {
  /**
  * Specify the whitelist of paths to be able to access paths from WASM programs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#accessible_paths DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#accessible_paths}
  */
  readonly accessiblePaths?: string[];
  /**
  * Alias for the plugin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#alias DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#alias}
  */
  readonly alias?: string;
  /**
  * Define event format to interact with Wasm programs: msgpack or json. Default: json
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#event_format DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#event_format}
  */
  readonly eventFormat?: string;
  /**
  * Wasm function name that will be triggered to do filtering. It's assumed that the function is built inside the Wasm program specified above.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#function_name DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#function_name}
  */
  readonly functionName?: string;
  /**
  * RetryLimit describes how many times fluent-bit should retry to send data to a specific output. If set to false fluent-bit will try indefinetly. If set to any integer N>0 it will try at most N+1 times. Leading zeros are not allowed (values such as 007, 0150, 01 do not work). If this property is not defined fluent-bit will use the default value: 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#retry_limit DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#retry_limit}
  */
  readonly retryLimit?: string;
  /**
  * Size of the heap size of Wasm execution. Review unit sizes for allowed values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#wasm_heap_size DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#wasm_heap_size}
  */
  readonly wasmHeapSize?: string;
  /**
  * Path to the built Wasm program that will be used. This can be a relative path against the main configuration file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#wasm_path DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#wasm_path}
  */
  readonly wasmPath?: string;
  /**
  * Size of the stack size of Wasm execution. Review unit sizes for allowed values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#wasm_stack_size DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#wasm_stack_size}
  */
  readonly wasmStackSize?: string;
}

export function dataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersWasmToTerraform(struct?: DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersWasm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accessible_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accessiblePaths),
    alias: cdktf.stringToTerraform(struct!.alias),
    event_format: cdktf.stringToTerraform(struct!.eventFormat),
    function_name: cdktf.stringToTerraform(struct!.functionName),
    retry_limit: cdktf.stringToTerraform(struct!.retryLimit),
    wasm_heap_size: cdktf.stringToTerraform(struct!.wasmHeapSize),
    wasm_path: cdktf.stringToTerraform(struct!.wasmPath),
    wasm_stack_size: cdktf.stringToTerraform(struct!.wasmStackSize),
  }
}


export function dataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersWasmToHclTerraform(struct?: DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersWasm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accessible_paths: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.accessiblePaths),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    alias: {
      value: cdktf.stringToHclTerraform(struct!.alias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    event_format: {
      value: cdktf.stringToHclTerraform(struct!.eventFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    function_name: {
      value: cdktf.stringToHclTerraform(struct!.functionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retry_limit: {
      value: cdktf.stringToHclTerraform(struct!.retryLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wasm_heap_size: {
      value: cdktf.stringToHclTerraform(struct!.wasmHeapSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wasm_path: {
      value: cdktf.stringToHclTerraform(struct!.wasmPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wasm_stack_size: {
      value: cdktf.stringToHclTerraform(struct!.wasmStackSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersWasmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersWasm | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessiblePaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessiblePaths = this._accessiblePaths;
    }
    if (this._alias !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias;
    }
    if (this._eventFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventFormat = this._eventFormat;
    }
    if (this._functionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionName = this._functionName;
    }
    if (this._retryLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryLimit = this._retryLimit;
    }
    if (this._wasmHeapSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.wasmHeapSize = this._wasmHeapSize;
    }
    if (this._wasmPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.wasmPath = this._wasmPath;
    }
    if (this._wasmStackSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.wasmStackSize = this._wasmStackSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersWasm | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessiblePaths = undefined;
      this._alias = undefined;
      this._eventFormat = undefined;
      this._functionName = undefined;
      this._retryLimit = undefined;
      this._wasmHeapSize = undefined;
      this._wasmPath = undefined;
      this._wasmStackSize = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessiblePaths = value.accessiblePaths;
      this._alias = value.alias;
      this._eventFormat = value.eventFormat;
      this._functionName = value.functionName;
      this._retryLimit = value.retryLimit;
      this._wasmHeapSize = value.wasmHeapSize;
      this._wasmPath = value.wasmPath;
      this._wasmStackSize = value.wasmStackSize;
    }
  }

  // accessible_paths - computed: false, optional: true, required: false
  private _accessiblePaths?: string[]; 
  public get accessiblePaths() {
    return this.getListAttribute('accessible_paths');
  }
  public set accessiblePaths(value: string[]) {
    this._accessiblePaths = value;
  }
  public resetAccessiblePaths() {
    this._accessiblePaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessiblePathsInput() {
    return this._accessiblePaths;
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

  // event_format - computed: false, optional: true, required: false
  private _eventFormat?: string; 
  public get eventFormat() {
    return this.getStringAttribute('event_format');
  }
  public set eventFormat(value: string) {
    this._eventFormat = value;
  }
  public resetEventFormat() {
    this._eventFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventFormatInput() {
    return this._eventFormat;
  }

  // function_name - computed: false, optional: true, required: false
  private _functionName?: string; 
  public get functionName() {
    return this.getStringAttribute('function_name');
  }
  public set functionName(value: string) {
    this._functionName = value;
  }
  public resetFunctionName() {
    this._functionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionNameInput() {
    return this._functionName;
  }

  // retry_limit - computed: false, optional: true, required: false
  private _retryLimit?: string; 
  public get retryLimit() {
    return this.getStringAttribute('retry_limit');
  }
  public set retryLimit(value: string) {
    this._retryLimit = value;
  }
  public resetRetryLimit() {
    this._retryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryLimitInput() {
    return this._retryLimit;
  }

  // wasm_heap_size - computed: false, optional: true, required: false
  private _wasmHeapSize?: string; 
  public get wasmHeapSize() {
    return this.getStringAttribute('wasm_heap_size');
  }
  public set wasmHeapSize(value: string) {
    this._wasmHeapSize = value;
  }
  public resetWasmHeapSize() {
    this._wasmHeapSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wasmHeapSizeInput() {
    return this._wasmHeapSize;
  }

  // wasm_path - computed: false, optional: true, required: false
  private _wasmPath?: string; 
  public get wasmPath() {
    return this.getStringAttribute('wasm_path');
  }
  public set wasmPath(value: string) {
    this._wasmPath = value;
  }
  public resetWasmPath() {
    this._wasmPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wasmPathInput() {
    return this._wasmPath;
  }

  // wasm_stack_size - computed: false, optional: true, required: false
  private _wasmStackSize?: string; 
  public get wasmStackSize() {
    return this.getStringAttribute('wasm_stack_size');
  }
  public set wasmStackSize(value: string) {
    this._wasmStackSize = value;
  }
  public resetWasmStackSize() {
    this._wasmStackSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wasmStackSizeInput() {
    return this._wasmStackSize;
  }
}
export interface DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFilters {
  /**
  * Aws defines a Aws configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#aws DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#aws}
  */
  readonly aws?: DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersAws;
  /**
  * CustomPlugin defines a Custom plugin configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#custom_plugin DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#custom_plugin}
  */
  readonly customPlugin?: DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersCustomPlugin;
  /**
  * Grep defines Grep Filter configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#grep DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#grep}
  */
  readonly grep?: DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersGrep;
  /**
  * Kubernetes defines Kubernetes Filter configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#kubernetes DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#kubernetes}
  */
  readonly kubernetes?: DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersKubernetes;
  /**
  * LogToMetrics defines a Log to Metrics Filter configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#log_to_metrics DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#log_to_metrics}
  */
  readonly logToMetrics?: DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersLogToMetrics;
  /**
  * Lua defines Lua Filter configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#lua DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#lua}
  */
  readonly lua?: DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersLua;
  /**
  * Modify defines Modify Filter configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#modify DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#modify}
  */
  readonly modify?: DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersModify;
  /**
  * Multiline defines a Multiline configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#multiline DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#multiline}
  */
  readonly multiline?: DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersMultiline;
  /**
  * Nest defines Nest Filter configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#nest DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#nest}
  */
  readonly nest?: DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersNest;
  /**
  * Parser defines Parser Filter configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#parser DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#parser}
  */
  readonly parser?: DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersParser;
  /**
  * RecordModifier defines Record Modifier Filter configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#record_modifier DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#record_modifier}
  */
  readonly recordModifier?: DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersRecordModifier;
  /**
  * RewriteTag defines a RewriteTag configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#rewrite_tag DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#rewrite_tag}
  */
  readonly rewriteTag?: DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersRewriteTag;
  /**
  * Throttle defines a Throttle configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#throttle DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#throttle}
  */
  readonly throttle?: DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersThrottle;
  /**
  * Wasm defines a Wasm configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#wasm DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#wasm}
  */
  readonly wasm?: DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersWasm;
}

export function dataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersToTerraform(struct?: DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws: dataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersAwsToTerraform(struct!.aws),
    custom_plugin: dataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersCustomPluginToTerraform(struct!.customPlugin),
    grep: dataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersGrepToTerraform(struct!.grep),
    kubernetes: dataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersKubernetesToTerraform(struct!.kubernetes),
    log_to_metrics: dataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersLogToMetricsToTerraform(struct!.logToMetrics),
    lua: dataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersLuaToTerraform(struct!.lua),
    modify: dataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersModifyToTerraform(struct!.modify),
    multiline: dataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersMultilineToTerraform(struct!.multiline),
    nest: dataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersNestToTerraform(struct!.nest),
    parser: dataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersParserToTerraform(struct!.parser),
    record_modifier: dataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersRecordModifierToTerraform(struct!.recordModifier),
    rewrite_tag: dataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersRewriteTagToTerraform(struct!.rewriteTag),
    throttle: dataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersThrottleToTerraform(struct!.throttle),
    wasm: dataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersWasmToTerraform(struct!.wasm),
  }
}


export function dataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersToHclTerraform(struct?: DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws: {
      value: dataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersAwsToHclTerraform(struct!.aws),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersAws",
    },
    custom_plugin: {
      value: dataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersCustomPluginToHclTerraform(struct!.customPlugin),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersCustomPlugin",
    },
    grep: {
      value: dataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersGrepToHclTerraform(struct!.grep),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersGrep",
    },
    kubernetes: {
      value: dataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersKubernetesToHclTerraform(struct!.kubernetes),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersKubernetes",
    },
    log_to_metrics: {
      value: dataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersLogToMetricsToHclTerraform(struct!.logToMetrics),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersLogToMetrics",
    },
    lua: {
      value: dataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersLuaToHclTerraform(struct!.lua),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersLua",
    },
    modify: {
      value: dataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersModifyToHclTerraform(struct!.modify),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersModify",
    },
    multiline: {
      value: dataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersMultilineToHclTerraform(struct!.multiline),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersMultiline",
    },
    nest: {
      value: dataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersNestToHclTerraform(struct!.nest),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersNest",
    },
    parser: {
      value: dataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersParserToHclTerraform(struct!.parser),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersParser",
    },
    record_modifier: {
      value: dataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersRecordModifierToHclTerraform(struct!.recordModifier),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersRecordModifier",
    },
    rewrite_tag: {
      value: dataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersRewriteTagToHclTerraform(struct!.rewriteTag),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersRewriteTag",
    },
    throttle: {
      value: dataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersThrottleToHclTerraform(struct!.throttle),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersThrottle",
    },
    wasm: {
      value: dataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersWasmToHclTerraform(struct!.wasm),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersWasm",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aws?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aws = this._aws?.internalValue;
    }
    if (this._customPlugin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPlugin = this._customPlugin?.internalValue;
    }
    if (this._grep?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grep = this._grep?.internalValue;
    }
    if (this._kubernetes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetes = this._kubernetes?.internalValue;
    }
    if (this._logToMetrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logToMetrics = this._logToMetrics?.internalValue;
    }
    if (this._lua?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lua = this._lua?.internalValue;
    }
    if (this._modify?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modify = this._modify?.internalValue;
    }
    if (this._multiline?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiline = this._multiline?.internalValue;
    }
    if (this._nest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nest = this._nest?.internalValue;
    }
    if (this._parser?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parser = this._parser?.internalValue;
    }
    if (this._recordModifier?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordModifier = this._recordModifier?.internalValue;
    }
    if (this._rewriteTag?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rewriteTag = this._rewriteTag?.internalValue;
    }
    if (this._throttle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.throttle = this._throttle?.internalValue;
    }
    if (this._wasm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wasm = this._wasm?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aws.internalValue = undefined;
      this._customPlugin.internalValue = undefined;
      this._grep.internalValue = undefined;
      this._kubernetes.internalValue = undefined;
      this._logToMetrics.internalValue = undefined;
      this._lua.internalValue = undefined;
      this._modify.internalValue = undefined;
      this._multiline.internalValue = undefined;
      this._nest.internalValue = undefined;
      this._parser.internalValue = undefined;
      this._recordModifier.internalValue = undefined;
      this._rewriteTag.internalValue = undefined;
      this._throttle.internalValue = undefined;
      this._wasm.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aws.internalValue = value.aws;
      this._customPlugin.internalValue = value.customPlugin;
      this._grep.internalValue = value.grep;
      this._kubernetes.internalValue = value.kubernetes;
      this._logToMetrics.internalValue = value.logToMetrics;
      this._lua.internalValue = value.lua;
      this._modify.internalValue = value.modify;
      this._multiline.internalValue = value.multiline;
      this._nest.internalValue = value.nest;
      this._parser.internalValue = value.parser;
      this._recordModifier.internalValue = value.recordModifier;
      this._rewriteTag.internalValue = value.rewriteTag;
      this._throttle.internalValue = value.throttle;
      this._wasm.internalValue = value.wasm;
    }
  }

  // aws - computed: false, optional: true, required: false
  private _aws = new DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersAwsOutputReference(this, "aws");
  public get aws() {
    return this._aws;
  }
  public putAws(value: DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersAws) {
    this._aws.internalValue = value;
  }
  public resetAws() {
    this._aws.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsInput() {
    return this._aws.internalValue;
  }

  // custom_plugin - computed: false, optional: true, required: false
  private _customPlugin = new DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersCustomPluginOutputReference(this, "custom_plugin");
  public get customPlugin() {
    return this._customPlugin;
  }
  public putCustomPlugin(value: DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersCustomPlugin) {
    this._customPlugin.internalValue = value;
  }
  public resetCustomPlugin() {
    this._customPlugin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPluginInput() {
    return this._customPlugin.internalValue;
  }

  // grep - computed: false, optional: true, required: false
  private _grep = new DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersGrepOutputReference(this, "grep");
  public get grep() {
    return this._grep;
  }
  public putGrep(value: DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersGrep) {
    this._grep.internalValue = value;
  }
  public resetGrep() {
    this._grep.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grepInput() {
    return this._grep.internalValue;
  }

  // kubernetes - computed: false, optional: true, required: false
  private _kubernetes = new DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersKubernetesOutputReference(this, "kubernetes");
  public get kubernetes() {
    return this._kubernetes;
  }
  public putKubernetes(value: DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersKubernetes) {
    this._kubernetes.internalValue = value;
  }
  public resetKubernetes() {
    this._kubernetes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesInput() {
    return this._kubernetes.internalValue;
  }

  // log_to_metrics - computed: false, optional: true, required: false
  private _logToMetrics = new DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersLogToMetricsOutputReference(this, "log_to_metrics");
  public get logToMetrics() {
    return this._logToMetrics;
  }
  public putLogToMetrics(value: DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersLogToMetrics) {
    this._logToMetrics.internalValue = value;
  }
  public resetLogToMetrics() {
    this._logToMetrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logToMetricsInput() {
    return this._logToMetrics.internalValue;
  }

  // lua - computed: false, optional: true, required: false
  private _lua = new DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersLuaOutputReference(this, "lua");
  public get lua() {
    return this._lua;
  }
  public putLua(value: DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersLua) {
    this._lua.internalValue = value;
  }
  public resetLua() {
    this._lua.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get luaInput() {
    return this._lua.internalValue;
  }

  // modify - computed: false, optional: true, required: false
  private _modify = new DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersModifyOutputReference(this, "modify");
  public get modify() {
    return this._modify;
  }
  public putModify(value: DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersModify) {
    this._modify.internalValue = value;
  }
  public resetModify() {
    this._modify.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifyInput() {
    return this._modify.internalValue;
  }

  // multiline - computed: false, optional: true, required: false
  private _multiline = new DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersMultilineOutputReference(this, "multiline");
  public get multiline() {
    return this._multiline;
  }
  public putMultiline(value: DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersMultiline) {
    this._multiline.internalValue = value;
  }
  public resetMultiline() {
    this._multiline.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multilineInput() {
    return this._multiline.internalValue;
  }

  // nest - computed: false, optional: true, required: false
  private _nest = new DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersNestOutputReference(this, "nest");
  public get nest() {
    return this._nest;
  }
  public putNest(value: DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersNest) {
    this._nest.internalValue = value;
  }
  public resetNest() {
    this._nest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nestInput() {
    return this._nest.internalValue;
  }

  // parser - computed: false, optional: true, required: false
  private _parser = new DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersParserOutputReference(this, "parser");
  public get parser() {
    return this._parser;
  }
  public putParser(value: DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersParser) {
    this._parser.internalValue = value;
  }
  public resetParser() {
    this._parser.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parserInput() {
    return this._parser.internalValue;
  }

  // record_modifier - computed: false, optional: true, required: false
  private _recordModifier = new DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersRecordModifierOutputReference(this, "record_modifier");
  public get recordModifier() {
    return this._recordModifier;
  }
  public putRecordModifier(value: DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersRecordModifier) {
    this._recordModifier.internalValue = value;
  }
  public resetRecordModifier() {
    this._recordModifier.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordModifierInput() {
    return this._recordModifier.internalValue;
  }

  // rewrite_tag - computed: false, optional: true, required: false
  private _rewriteTag = new DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersRewriteTagOutputReference(this, "rewrite_tag");
  public get rewriteTag() {
    return this._rewriteTag;
  }
  public putRewriteTag(value: DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersRewriteTag) {
    this._rewriteTag.internalValue = value;
  }
  public resetRewriteTag() {
    this._rewriteTag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rewriteTagInput() {
    return this._rewriteTag.internalValue;
  }

  // throttle - computed: false, optional: true, required: false
  private _throttle = new DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersThrottleOutputReference(this, "throttle");
  public get throttle() {
    return this._throttle;
  }
  public putThrottle(value: DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersThrottle) {
    this._throttle.internalValue = value;
  }
  public resetThrottle() {
    this._throttle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throttleInput() {
    return this._throttle.internalValue;
  }

  // wasm - computed: false, optional: true, required: false
  private _wasm = new DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersWasmOutputReference(this, "wasm");
  public get wasm() {
    return this._wasm;
  }
  public putWasm(value: DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersWasm) {
    this._wasm.internalValue = value;
  }
  public resetWasm() {
    this._wasm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wasmInput() {
    return this._wasm.internalValue;
  }
}

export class DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersList extends cdktf.ComplexList {
  public internalValue? : DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFilters[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersOutputReference {
    return new DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpec {
  /**
  * A set of filter plugins in order.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#filters DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#filters}
  */
  readonly filters?: DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFilters[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#log_level DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#log_level}
  */
  readonly logLevel?: string;
  /**
  * A pattern to match against the tags of incoming records. It's case-sensitive and support the star (*) character as a wildcard.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#match DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#match}
  */
  readonly match?: string;
  /**
  * A regular expression to match against the tags of incoming records. Use this option if you want to use the full regex syntax.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#match_regex DataK8SFluentbitFluentIoFilterV1Alpha2Manifest#match_regex}
  */
  readonly matchRegex?: string;
}

export function dataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecToTerraform(struct?: DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filters: cdktf.listMapper(dataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersToTerraform, false)(struct!.filters),
    log_level: cdktf.stringToTerraform(struct!.logLevel),
    match: cdktf.stringToTerraform(struct!.match),
    match_regex: cdktf.stringToTerraform(struct!.matchRegex),
  }
}


export function dataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecToHclTerraform(struct?: DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filters: {
      value: cdktf.listMapperHcl(dataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersToHclTerraform, false)(struct!.filters),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersList",
    },
    log_level: {
      value: cdktf.stringToHclTerraform(struct!.logLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match: {
      value: cdktf.stringToHclTerraform(struct!.match),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_regex: {
      value: cdktf.stringToHclTerraform(struct!.matchRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filters = this._filters?.internalValue;
    }
    if (this._logLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevel = this._logLevel;
    }
    if (this._match !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match;
    }
    if (this._matchRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchRegex = this._matchRegex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filters.internalValue = undefined;
      this._logLevel = undefined;
      this._match = undefined;
      this._matchRegex = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filters.internalValue = value.filters;
      this._logLevel = value.logLevel;
      this._match = value.match;
      this._matchRegex = value.matchRegex;
    }
  }

  // filters - computed: false, optional: true, required: false
  private _filters = new DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecFilters[] | cdktf.IResolvable) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
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

  // match - computed: false, optional: true, required: false
  private _match?: string; 
  public get match() {
    return this.getStringAttribute('match');
  }
  public set match(value: string) {
    this._match = value;
  }
  public resetMatch() {
    this._match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match;
  }

  // match_regex - computed: false, optional: true, required: false
  private _matchRegex?: string; 
  public get matchRegex() {
    return this.getStringAttribute('match_regex');
  }
  public set matchRegex(value: string) {
    this._matchRegex = value;
  }
  public resetMatchRegex() {
    this._matchRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchRegexInput() {
    return this._matchRegex;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest k8s_fluentbit_fluent_io_filter_v1alpha2_manifest}
*/
export class DataK8SFluentbitFluentIoFilterV1Alpha2Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_fluentbit_fluent_io_filter_v1alpha2_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SFluentbitFluentIoFilterV1Alpha2Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SFluentbitFluentIoFilterV1Alpha2Manifest to import
  * @param importFromId The id of the existing DataK8SFluentbitFluentIoFilterV1Alpha2Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SFluentbitFluentIoFilterV1Alpha2Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_fluentbit_fluent_io_filter_v1alpha2_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/fluentbit_fluent_io_filter_v1alpha2_manifest k8s_fluentbit_fluent_io_filter_v1alpha2_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SFluentbitFluentIoFilterV1Alpha2ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SFluentbitFluentIoFilterV1Alpha2ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_fluentbit_fluent_io_filter_v1alpha2_manifest',
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
  private _metadata = new DataK8SFluentbitFluentIoFilterV1Alpha2ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SFluentbitFluentIoFilterV1Alpha2ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpec) {
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
      metadata: dataK8SFluentbitFluentIoFilterV1Alpha2ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SFluentbitFluentIoFilterV1Alpha2ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SFluentbitFluentIoFilterV1Alpha2ManifestMetadata",
      },
      spec: {
        value: dataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SFluentbitFluentIoFilterV1Alpha2ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
