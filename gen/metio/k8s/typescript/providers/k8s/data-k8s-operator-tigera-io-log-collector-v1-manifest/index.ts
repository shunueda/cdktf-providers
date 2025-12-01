// https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_collector_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SOperatorTigeraIoLogCollectorV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_collector_v1_manifest#metadata DataK8SOperatorTigeraIoLogCollectorV1Manifest#metadata}
  */
  readonly metadata: DataK8SOperatorTigeraIoLogCollectorV1ManifestMetadata;
  /**
  * Specification of the desired state for Tigera log collection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_collector_v1_manifest#spec DataK8SOperatorTigeraIoLogCollectorV1Manifest#spec}
  */
  readonly spec?: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpec;
}
export interface DataK8SOperatorTigeraIoLogCollectorV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_collector_v1_manifest#annotations DataK8SOperatorTigeraIoLogCollectorV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_collector_v1_manifest#labels DataK8SOperatorTigeraIoLogCollectorV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_collector_v1_manifest#name DataK8SOperatorTigeraIoLogCollectorV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SOperatorTigeraIoLogCollectorV1ManifestMetadataToTerraform(struct?: DataK8SOperatorTigeraIoLogCollectorV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SOperatorTigeraIoLogCollectorV1ManifestMetadataToHclTerraform(struct?: DataK8SOperatorTigeraIoLogCollectorV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SOperatorTigeraIoLogCollectorV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoLogCollectorV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoLogCollectorV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecAdditionalSourcesEksCloudwatchLog {
  /**
  * Cloudwatch audit logs fetching interval in seconds. Default: 60
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_collector_v1_manifest#fetch_interval DataK8SOperatorTigeraIoLogCollectorV1Manifest#fetch_interval}
  */
  readonly fetchInterval?: number;
  /**
  * Cloudwatch log-group name containing EKS audit logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_collector_v1_manifest#group_name DataK8SOperatorTigeraIoLogCollectorV1Manifest#group_name}
  */
  readonly groupName: string;
  /**
  * AWS Region EKS cluster is hosted in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_collector_v1_manifest#region DataK8SOperatorTigeraIoLogCollectorV1Manifest#region}
  */
  readonly region: string;
  /**
  * Prefix of Cloudwatch log stream containing EKS audit logs in the log-group. Default: kube-apiserver-audit-
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_collector_v1_manifest#stream_prefix DataK8SOperatorTigeraIoLogCollectorV1Manifest#stream_prefix}
  */
  readonly streamPrefix?: string;
}

export function dataK8SOperatorTigeraIoLogCollectorV1ManifestSpecAdditionalSourcesEksCloudwatchLogToTerraform(struct?: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecAdditionalSourcesEksCloudwatchLog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fetch_interval: cdktf.numberToTerraform(struct!.fetchInterval),
    group_name: cdktf.stringToTerraform(struct!.groupName),
    region: cdktf.stringToTerraform(struct!.region),
    stream_prefix: cdktf.stringToTerraform(struct!.streamPrefix),
  }
}


export function dataK8SOperatorTigeraIoLogCollectorV1ManifestSpecAdditionalSourcesEksCloudwatchLogToHclTerraform(struct?: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecAdditionalSourcesEksCloudwatchLog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fetch_interval: {
      value: cdktf.numberToHclTerraform(struct!.fetchInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    group_name: {
      value: cdktf.stringToHclTerraform(struct!.groupName),
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
    stream_prefix: {
      value: cdktf.stringToHclTerraform(struct!.streamPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecAdditionalSourcesEksCloudwatchLogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecAdditionalSourcesEksCloudwatchLog | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fetchInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.fetchInterval = this._fetchInterval;
    }
    if (this._groupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupName = this._groupName;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._streamPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamPrefix = this._streamPrefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecAdditionalSourcesEksCloudwatchLog | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fetchInterval = undefined;
      this._groupName = undefined;
      this._region = undefined;
      this._streamPrefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fetchInterval = value.fetchInterval;
      this._groupName = value.groupName;
      this._region = value.region;
      this._streamPrefix = value.streamPrefix;
    }
  }

  // fetch_interval - computed: false, optional: true, required: false
  private _fetchInterval?: number; 
  public get fetchInterval() {
    return this.getNumberAttribute('fetch_interval');
  }
  public set fetchInterval(value: number) {
    this._fetchInterval = value;
  }
  public resetFetchInterval() {
    this._fetchInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchIntervalInput() {
    return this._fetchInterval;
  }

  // group_name - computed: false, optional: false, required: true
  private _groupName?: string; 
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName;
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

  // stream_prefix - computed: false, optional: true, required: false
  private _streamPrefix?: string; 
  public get streamPrefix() {
    return this.getStringAttribute('stream_prefix');
  }
  public set streamPrefix(value: string) {
    this._streamPrefix = value;
  }
  public resetStreamPrefix() {
    this._streamPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamPrefixInput() {
    return this._streamPrefix;
  }
}
export interface DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecAdditionalSources {
  /**
  * If specified with EKS Provider in Installation, enables fetching EKS audit logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_collector_v1_manifest#eks_cloudwatch_log DataK8SOperatorTigeraIoLogCollectorV1Manifest#eks_cloudwatch_log}
  */
  readonly eksCloudwatchLog?: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecAdditionalSourcesEksCloudwatchLog;
}

export function dataK8SOperatorTigeraIoLogCollectorV1ManifestSpecAdditionalSourcesToTerraform(struct?: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecAdditionalSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    eks_cloudwatch_log: dataK8SOperatorTigeraIoLogCollectorV1ManifestSpecAdditionalSourcesEksCloudwatchLogToTerraform(struct!.eksCloudwatchLog),
  }
}


export function dataK8SOperatorTigeraIoLogCollectorV1ManifestSpecAdditionalSourcesToHclTerraform(struct?: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecAdditionalSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    eks_cloudwatch_log: {
      value: dataK8SOperatorTigeraIoLogCollectorV1ManifestSpecAdditionalSourcesEksCloudwatchLogToHclTerraform(struct!.eksCloudwatchLog),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecAdditionalSourcesEksCloudwatchLog",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecAdditionalSourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecAdditionalSources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eksCloudwatchLog?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eksCloudwatchLog = this._eksCloudwatchLog?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecAdditionalSources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eksCloudwatchLog.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._eksCloudwatchLog.internalValue = value.eksCloudwatchLog;
    }
  }

  // eks_cloudwatch_log - computed: false, optional: true, required: false
  private _eksCloudwatchLog = new DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecAdditionalSourcesEksCloudwatchLogOutputReference(this, "eks_cloudwatch_log");
  public get eksCloudwatchLog() {
    return this._eksCloudwatchLog;
  }
  public putEksCloudwatchLog(value: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecAdditionalSourcesEksCloudwatchLog) {
    this._eksCloudwatchLog.internalValue = value;
  }
  public resetEksCloudwatchLog() {
    this._eksCloudwatchLog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eksCloudwatchLogInput() {
    return this._eksCloudwatchLog.internalValue;
  }
}
export interface DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecAdditionalStoresS3 {
  /**
  * Name of the S3 bucket to send logs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_collector_v1_manifest#bucket_name DataK8SOperatorTigeraIoLogCollectorV1Manifest#bucket_name}
  */
  readonly bucketName: string;
  /**
  * Path in the S3 bucket where to send logs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_collector_v1_manifest#bucket_path DataK8SOperatorTigeraIoLogCollectorV1Manifest#bucket_path}
  */
  readonly bucketPath: string;
  /**
  * AWS Region of the S3 bucket
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_collector_v1_manifest#region DataK8SOperatorTigeraIoLogCollectorV1Manifest#region}
  */
  readonly region: string;
}

export function dataK8SOperatorTigeraIoLogCollectorV1ManifestSpecAdditionalStoresS3ToTerraform(struct?: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecAdditionalStoresS3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    bucket_path: cdktf.stringToTerraform(struct!.bucketPath),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function dataK8SOperatorTigeraIoLogCollectorV1ManifestSpecAdditionalStoresS3ToHclTerraform(struct?: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecAdditionalStoresS3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket_name: {
      value: cdktf.stringToHclTerraform(struct!.bucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket_path: {
      value: cdktf.stringToHclTerraform(struct!.bucketPath),
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

export class DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecAdditionalStoresS3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecAdditionalStoresS3 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._bucketPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketPath = this._bucketPath;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecAdditionalStoresS3 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucketName = undefined;
      this._bucketPath = undefined;
      this._region = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucketName = value.bucketName;
      this._bucketPath = value.bucketPath;
      this._region = value.region;
    }
  }

  // bucket_name - computed: false, optional: false, required: true
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // bucket_path - computed: false, optional: false, required: true
  private _bucketPath?: string; 
  public get bucketPath() {
    return this.getStringAttribute('bucket_path');
  }
  public set bucketPath(value: string) {
    this._bucketPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketPathInput() {
    return this._bucketPath;
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
export interface DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecAdditionalStoresSplunk {
  /**
  * Location for splunk's http event collector end point. example 'https://1.2.3.4:8088'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_collector_v1_manifest#endpoint DataK8SOperatorTigeraIoLogCollectorV1Manifest#endpoint}
  */
  readonly endpoint: string;
}

export function dataK8SOperatorTigeraIoLogCollectorV1ManifestSpecAdditionalStoresSplunkToTerraform(struct?: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecAdditionalStoresSplunk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
  }
}


export function dataK8SOperatorTigeraIoLogCollectorV1ManifestSpecAdditionalStoresSplunkToHclTerraform(struct?: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecAdditionalStoresSplunk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecAdditionalStoresSplunkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecAdditionalStoresSplunk | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecAdditionalStoresSplunk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endpoint = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endpoint = value.endpoint;
    }
  }

  // endpoint - computed: false, optional: false, required: true
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }
}
export interface DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecAdditionalStoresSyslog {
  /**
  * Encryption configures traffic encryption to the Syslog server. Default: None
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_collector_v1_manifest#encryption DataK8SOperatorTigeraIoLogCollectorV1Manifest#encryption}
  */
  readonly encryption?: string;
  /**
  * Location of the syslog server. example: tcp://1.2.3.4:601
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_collector_v1_manifest#endpoint DataK8SOperatorTigeraIoLogCollectorV1Manifest#endpoint}
  */
  readonly endpoint: string;
  /**
  * If no values are provided, the list will be updated to include log types Audit, DNS and Flows. Default: Audit, DNS, Flows
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_collector_v1_manifest#log_types DataK8SOperatorTigeraIoLogCollectorV1Manifest#log_types}
  */
  readonly logTypes: string[];
  /**
  * PacketSize defines the maximum size of packets to send to syslog. In general this is only needed if you notice long logs being truncated. Default: 1024
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_collector_v1_manifest#packet_size DataK8SOperatorTigeraIoLogCollectorV1Manifest#packet_size}
  */
  readonly packetSize?: number;
}

export function dataK8SOperatorTigeraIoLogCollectorV1ManifestSpecAdditionalStoresSyslogToTerraform(struct?: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecAdditionalStoresSyslog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encryption: cdktf.stringToTerraform(struct!.encryption),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    log_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.logTypes),
    packet_size: cdktf.numberToTerraform(struct!.packetSize),
  }
}


export function dataK8SOperatorTigeraIoLogCollectorV1ManifestSpecAdditionalStoresSyslogToHclTerraform(struct?: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecAdditionalStoresSyslog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    encryption: {
      value: cdktf.stringToHclTerraform(struct!.encryption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.logTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    packet_size: {
      value: cdktf.numberToHclTerraform(struct!.packetSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecAdditionalStoresSyslogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecAdditionalStoresSyslog | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryption = this._encryption;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._logTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.logTypes = this._logTypes;
    }
    if (this._packetSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetSize = this._packetSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecAdditionalStoresSyslog | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encryption = undefined;
      this._endpoint = undefined;
      this._logTypes = undefined;
      this._packetSize = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encryption = value.encryption;
      this._endpoint = value.endpoint;
      this._logTypes = value.logTypes;
      this._packetSize = value.packetSize;
    }
  }

  // encryption - computed: false, optional: true, required: false
  private _encryption?: string; 
  public get encryption() {
    return this.getStringAttribute('encryption');
  }
  public set encryption(value: string) {
    this._encryption = value;
  }
  public resetEncryption() {
    this._encryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInput() {
    return this._encryption;
  }

  // endpoint - computed: false, optional: false, required: true
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // log_types - computed: false, optional: false, required: true
  private _logTypes?: string[]; 
  public get logTypes() {
    return this.getListAttribute('log_types');
  }
  public set logTypes(value: string[]) {
    this._logTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logTypesInput() {
    return this._logTypes;
  }

  // packet_size - computed: false, optional: true, required: false
  private _packetSize?: number; 
  public get packetSize() {
    return this.getNumberAttribute('packet_size');
  }
  public set packetSize(value: number) {
    this._packetSize = value;
  }
  public resetPacketSize() {
    this._packetSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetSizeInput() {
    return this._packetSize;
  }
}
export interface DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecAdditionalStores {
  /**
  * If specified, enables exporting of flow, audit, and DNS logs to Amazon S3 storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_collector_v1_manifest#s3 DataK8SOperatorTigeraIoLogCollectorV1Manifest#s3}
  */
  readonly s3?: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecAdditionalStoresS3;
  /**
  * If specified, enables exporting of flow, audit, and DNS logs to splunk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_collector_v1_manifest#splunk DataK8SOperatorTigeraIoLogCollectorV1Manifest#splunk}
  */
  readonly splunk?: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecAdditionalStoresSplunk;
  /**
  * If specified, enables exporting of flow, audit, and DNS logs to syslog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_collector_v1_manifest#syslog DataK8SOperatorTigeraIoLogCollectorV1Manifest#syslog}
  */
  readonly syslog?: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecAdditionalStoresSyslog;
}

export function dataK8SOperatorTigeraIoLogCollectorV1ManifestSpecAdditionalStoresToTerraform(struct?: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecAdditionalStores | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    s3: dataK8SOperatorTigeraIoLogCollectorV1ManifestSpecAdditionalStoresS3ToTerraform(struct!.s3),
    splunk: dataK8SOperatorTigeraIoLogCollectorV1ManifestSpecAdditionalStoresSplunkToTerraform(struct!.splunk),
    syslog: dataK8SOperatorTigeraIoLogCollectorV1ManifestSpecAdditionalStoresSyslogToTerraform(struct!.syslog),
  }
}


export function dataK8SOperatorTigeraIoLogCollectorV1ManifestSpecAdditionalStoresToHclTerraform(struct?: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecAdditionalStores | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    s3: {
      value: dataK8SOperatorTigeraIoLogCollectorV1ManifestSpecAdditionalStoresS3ToHclTerraform(struct!.s3),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecAdditionalStoresS3",
    },
    splunk: {
      value: dataK8SOperatorTigeraIoLogCollectorV1ManifestSpecAdditionalStoresSplunkToHclTerraform(struct!.splunk),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecAdditionalStoresSplunk",
    },
    syslog: {
      value: dataK8SOperatorTigeraIoLogCollectorV1ManifestSpecAdditionalStoresSyslogToHclTerraform(struct!.syslog),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecAdditionalStoresSyslog",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecAdditionalStoresOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecAdditionalStores | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3 = this._s3?.internalValue;
    }
    if (this._splunk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.splunk = this._splunk?.internalValue;
    }
    if (this._syslog?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.syslog = this._syslog?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecAdditionalStores | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._s3.internalValue = undefined;
      this._splunk.internalValue = undefined;
      this._syslog.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._s3.internalValue = value.s3;
      this._splunk.internalValue = value.splunk;
      this._syslog.internalValue = value.syslog;
    }
  }

  // s3 - computed: false, optional: true, required: false
  private _s3 = new DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecAdditionalStoresS3OutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }
  public putS3(value: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecAdditionalStoresS3) {
    this._s3.internalValue = value;
  }
  public resetS3() {
    this._s3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3.internalValue;
  }

  // splunk - computed: false, optional: true, required: false
  private _splunk = new DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecAdditionalStoresSplunkOutputReference(this, "splunk");
  public get splunk() {
    return this._splunk;
  }
  public putSplunk(value: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecAdditionalStoresSplunk) {
    this._splunk.internalValue = value;
  }
  public resetSplunk() {
    this._splunk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splunkInput() {
    return this._splunk.internalValue;
  }

  // syslog - computed: false, optional: true, required: false
  private _syslog = new DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecAdditionalStoresSyslogOutputReference(this, "syslog");
  public get syslog() {
    return this._syslog;
  }
  public putSyslog(value: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecAdditionalStoresSyslog) {
    this._syslog.internalValue = value;
  }
  public resetSyslog() {
    this._syslog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syslogInput() {
    return this._syslog.internalValue;
  }
}
export interface DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpecContainersResourcesClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_collector_v1_manifest#name DataK8SOperatorTigeraIoLogCollectorV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpecContainersResourcesClaimsToTerraform(struct?: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpecContainersResourcesClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpecContainersResourcesClaimsToHclTerraform(struct?: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpecContainersResourcesClaims | cdktf.IResolvable): any {
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

export class DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpecContainersResourcesClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpecContainersResourcesClaims | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpecContainersResourcesClaims | cdktf.IResolvable | undefined) {
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

export class DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpecContainersResourcesClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpecContainersResourcesClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpecContainersResourcesClaimsOutputReference {
    return new DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpecContainersResourcesClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpecContainersResources {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_collector_v1_manifest#claims DataK8SOperatorTigeraIoLogCollectorV1Manifest#claims}
  */
  readonly claims?: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpecContainersResourcesClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_collector_v1_manifest#limits DataK8SOperatorTigeraIoLogCollectorV1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_collector_v1_manifest#requests DataK8SOperatorTigeraIoLogCollectorV1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpecContainersResourcesToTerraform(struct?: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpecContainersResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpecContainersResourcesClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpecContainersResourcesToHclTerraform(struct?: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpecContainersResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpecContainersResourcesClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpecContainersResourcesClaimsList",
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

export class DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpecContainersResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpecContainersResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpecContainersResources | cdktf.IResolvable | undefined) {
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
  private _claims = new DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpecContainersResourcesClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpecContainersResourcesClaims[] | cdktf.IResolvable) {
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
export interface DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpecContainers {
  /**
  * Name is an enum which identifies the EKSLogForwarder Deployment container by name. Supported values are: eks-log-forwarder
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_collector_v1_manifest#name DataK8SOperatorTigeraIoLogCollectorV1Manifest#name}
  */
  readonly name: string;
  /**
  * Resources allows customization of limits and requests for compute resources such as cpu and memory. If specified, this overrides the named EKSLogForwarder Deployment container's resources. If omitted, the EKSLogForwarder Deployment will use its default value for this container's resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_collector_v1_manifest#resources DataK8SOperatorTigeraIoLogCollectorV1Manifest#resources}
  */
  readonly resources?: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpecContainersResources;
}

export function dataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpecContainersToTerraform(struct?: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpecContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    resources: dataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpecContainersResourcesToTerraform(struct!.resources),
  }
}


export function dataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpecContainersToHclTerraform(struct?: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpecContainers | cdktf.IResolvable): any {
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
    resources: {
      value: dataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpecContainersResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpecContainersResources",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpecContainersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpecContainers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpecContainers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._resources.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._resources.internalValue = value.resources;
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

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpecContainersResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpecContainersResources) {
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

export class DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpecContainersList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpecContainers[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpecContainersOutputReference {
    return new DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpecContainersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpecInitContainersResourcesClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_collector_v1_manifest#name DataK8SOperatorTigeraIoLogCollectorV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpecInitContainersResourcesClaimsToTerraform(struct?: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpecInitContainersResourcesClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpecInitContainersResourcesClaimsToHclTerraform(struct?: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpecInitContainersResourcesClaims | cdktf.IResolvable): any {
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

export class DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpecInitContainersResourcesClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpecInitContainersResourcesClaims | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpecInitContainersResourcesClaims | cdktf.IResolvable | undefined) {
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

export class DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpecInitContainersResourcesClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpecInitContainersResourcesClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpecInitContainersResourcesClaimsOutputReference {
    return new DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpecInitContainersResourcesClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpecInitContainersResources {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_collector_v1_manifest#claims DataK8SOperatorTigeraIoLogCollectorV1Manifest#claims}
  */
  readonly claims?: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpecInitContainersResourcesClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_collector_v1_manifest#limits DataK8SOperatorTigeraIoLogCollectorV1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_collector_v1_manifest#requests DataK8SOperatorTigeraIoLogCollectorV1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpecInitContainersResourcesToTerraform(struct?: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpecInitContainersResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpecInitContainersResourcesClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpecInitContainersResourcesToHclTerraform(struct?: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpecInitContainersResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpecInitContainersResourcesClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpecInitContainersResourcesClaimsList",
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

export class DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpecInitContainersResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpecInitContainersResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpecInitContainersResources | cdktf.IResolvable | undefined) {
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
  private _claims = new DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpecInitContainersResourcesClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpecInitContainersResourcesClaims[] | cdktf.IResolvable) {
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
export interface DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpecInitContainers {
  /**
  * Name is an enum which identifies the EKSLogForwarder Deployment init container by name. Supported values are: eks-log-forwarder-startup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_collector_v1_manifest#name DataK8SOperatorTigeraIoLogCollectorV1Manifest#name}
  */
  readonly name: string;
  /**
  * Resources allows customization of limits and requests for compute resources such as cpu and memory. If specified, this overrides the named EKSLogForwarder Deployment init container's resources. If omitted, the EKSLogForwarder Deployment will use its default value for this init container's resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_collector_v1_manifest#resources DataK8SOperatorTigeraIoLogCollectorV1Manifest#resources}
  */
  readonly resources?: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpecInitContainersResources;
}

export function dataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpecInitContainersToTerraform(struct?: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpecInitContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    resources: dataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpecInitContainersResourcesToTerraform(struct!.resources),
  }
}


export function dataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpecInitContainersToHclTerraform(struct?: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpecInitContainers | cdktf.IResolvable): any {
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
    resources: {
      value: dataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpecInitContainersResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpecInitContainersResources",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpecInitContainersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpecInitContainers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpecInitContainers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._resources.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._resources.internalValue = value.resources;
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

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpecInitContainersResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpecInitContainersResources) {
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

export class DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpecInitContainersList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpecInitContainers[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpecInitContainersOutputReference {
    return new DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpecInitContainersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpec {
  /**
  * Containers is a list of EKSLogForwarder containers. If specified, this overrides the specified EKSLogForwarder Deployment containers. If omitted, the EKSLogForwarder Deployment will use its default values for its containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_collector_v1_manifest#containers DataK8SOperatorTigeraIoLogCollectorV1Manifest#containers}
  */
  readonly containers?: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpecContainers[] | cdktf.IResolvable;
  /**
  * InitContainers is a list of EKSLogForwarder init containers. If specified, this overrides the specified EKSLogForwarder Deployment init containers. If omitted, the EKSLogForwarder Deployment will use its default values for its init containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_collector_v1_manifest#init_containers DataK8SOperatorTigeraIoLogCollectorV1Manifest#init_containers}
  */
  readonly initContainers?: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpecInitContainers[] | cdktf.IResolvable;
}

export function dataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpecToTerraform(struct?: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    containers: cdktf.listMapper(dataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpecContainersToTerraform, false)(struct!.containers),
    init_containers: cdktf.listMapper(dataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpecInitContainersToTerraform, false)(struct!.initContainers),
  }
}


export function dataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpecToHclTerraform(struct?: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    containers: {
      value: cdktf.listMapperHcl(dataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpecContainersToHclTerraform, false)(struct!.containers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpecContainersList",
    },
    init_containers: {
      value: cdktf.listMapperHcl(dataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpecInitContainersToHclTerraform, false)(struct!.initContainers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpecInitContainersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containers = this._containers?.internalValue;
    }
    if (this._initContainers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.initContainers = this._initContainers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containers.internalValue = undefined;
      this._initContainers.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containers.internalValue = value.containers;
      this._initContainers.internalValue = value.initContainers;
    }
  }

  // containers - computed: false, optional: true, required: false
  private _containers = new DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpecContainersList(this, "containers", false);
  public get containers() {
    return this._containers;
  }
  public putContainers(value: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpecContainers[] | cdktf.IResolvable) {
    this._containers.internalValue = value;
  }
  public resetContainers() {
    this._containers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containersInput() {
    return this._containers.internalValue;
  }

  // init_containers - computed: false, optional: true, required: false
  private _initContainers = new DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpecInitContainersList(this, "init_containers", false);
  public get initContainers() {
    return this._initContainers;
  }
  public putInitContainers(value: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpecInitContainers[] | cdktf.IResolvable) {
    this._initContainers.internalValue = value;
  }
  public resetInitContainers() {
    this._initContainers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initContainersInput() {
    return this._initContainers.internalValue;
  }
}
export interface DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplate {
  /**
  * Spec is the EKSLogForwarder Deployment's PodSpec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_collector_v1_manifest#spec DataK8SOperatorTigeraIoLogCollectorV1Manifest#spec}
  */
  readonly spec?: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpec;
}

export function dataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateToTerraform(struct?: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    spec: dataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpecToTerraform(struct!.spec),
  }
}


export function dataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateToHclTerraform(struct?: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    spec: {
      value: dataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpec",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._spec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spec = this._spec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._spec.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._spec.internalValue = value.spec;
    }
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateSpec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }
}
export interface DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpec {
  /**
  * Template describes the EKSLogForwarder Deployment pod that will be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_collector_v1_manifest#template DataK8SOperatorTigeraIoLogCollectorV1Manifest#template}
  */
  readonly template?: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplate;
}

export function dataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecToTerraform(struct?: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    template: dataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateToTerraform(struct!.template),
  }
}


export function dataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecToHclTerraform(struct?: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    template: {
      value: dataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplate",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._template?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._template.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._template.internalValue = value.template;
    }
  }

  // template - computed: false, optional: true, required: false
  private _template = new DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecTemplate) {
    this._template.internalValue = value;
  }
  public resetTemplate() {
    this._template.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }
}
export interface DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeployment {
  /**
  * Spec is the specification of the EKSLogForwarder Deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_collector_v1_manifest#spec DataK8SOperatorTigeraIoLogCollectorV1Manifest#spec}
  */
  readonly spec?: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpec;
}

export function dataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentToTerraform(struct?: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeployment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    spec: dataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecToTerraform(struct!.spec),
  }
}


export function dataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentToHclTerraform(struct?: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeployment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    spec: {
      value: dataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpec",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeployment | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._spec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spec = this._spec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeployment | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._spec.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._spec.internalValue = value.spec;
    }
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentSpec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }
}
export interface DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpecContainersResourcesClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_collector_v1_manifest#name DataK8SOperatorTigeraIoLogCollectorV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpecContainersResourcesClaimsToTerraform(struct?: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpecContainersResourcesClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpecContainersResourcesClaimsToHclTerraform(struct?: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpecContainersResourcesClaims | cdktf.IResolvable): any {
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

export class DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpecContainersResourcesClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpecContainersResourcesClaims | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpecContainersResourcesClaims | cdktf.IResolvable | undefined) {
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

export class DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpecContainersResourcesClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpecContainersResourcesClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpecContainersResourcesClaimsOutputReference {
    return new DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpecContainersResourcesClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpecContainersResources {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_collector_v1_manifest#claims DataK8SOperatorTigeraIoLogCollectorV1Manifest#claims}
  */
  readonly claims?: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpecContainersResourcesClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_collector_v1_manifest#limits DataK8SOperatorTigeraIoLogCollectorV1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_collector_v1_manifest#requests DataK8SOperatorTigeraIoLogCollectorV1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpecContainersResourcesToTerraform(struct?: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpecContainersResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpecContainersResourcesClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpecContainersResourcesToHclTerraform(struct?: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpecContainersResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpecContainersResourcesClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpecContainersResourcesClaimsList",
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

export class DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpecContainersResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpecContainersResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpecContainersResources | cdktf.IResolvable | undefined) {
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
  private _claims = new DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpecContainersResourcesClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpecContainersResourcesClaims[] | cdktf.IResolvable) {
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
export interface DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpecContainers {
  /**
  * Name is an enum which identifies the Fluentd DaemonSet container by name. Supported values are: fluentd
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_collector_v1_manifest#name DataK8SOperatorTigeraIoLogCollectorV1Manifest#name}
  */
  readonly name: string;
  /**
  * Resources allows customization of limits and requests for compute resources such as cpu and memory. If specified, this overrides the named Fluentd DaemonSet container's resources. If omitted, the Fluentd DaemonSet will use its default value for this container's resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_collector_v1_manifest#resources DataK8SOperatorTigeraIoLogCollectorV1Manifest#resources}
  */
  readonly resources?: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpecContainersResources;
}

export function dataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpecContainersToTerraform(struct?: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpecContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    resources: dataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpecContainersResourcesToTerraform(struct!.resources),
  }
}


export function dataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpecContainersToHclTerraform(struct?: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpecContainers | cdktf.IResolvable): any {
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
    resources: {
      value: dataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpecContainersResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpecContainersResources",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpecContainersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpecContainers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpecContainers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._resources.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._resources.internalValue = value.resources;
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

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpecContainersResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpecContainersResources) {
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

export class DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpecContainersList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpecContainers[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpecContainersOutputReference {
    return new DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpecContainersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpecInitContainersResourcesClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_collector_v1_manifest#name DataK8SOperatorTigeraIoLogCollectorV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpecInitContainersResourcesClaimsToTerraform(struct?: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpecInitContainersResourcesClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpecInitContainersResourcesClaimsToHclTerraform(struct?: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpecInitContainersResourcesClaims | cdktf.IResolvable): any {
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

export class DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpecInitContainersResourcesClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpecInitContainersResourcesClaims | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpecInitContainersResourcesClaims | cdktf.IResolvable | undefined) {
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

export class DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpecInitContainersResourcesClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpecInitContainersResourcesClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpecInitContainersResourcesClaimsOutputReference {
    return new DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpecInitContainersResourcesClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpecInitContainersResources {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_collector_v1_manifest#claims DataK8SOperatorTigeraIoLogCollectorV1Manifest#claims}
  */
  readonly claims?: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpecInitContainersResourcesClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_collector_v1_manifest#limits DataK8SOperatorTigeraIoLogCollectorV1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_collector_v1_manifest#requests DataK8SOperatorTigeraIoLogCollectorV1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpecInitContainersResourcesToTerraform(struct?: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpecInitContainersResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpecInitContainersResourcesClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpecInitContainersResourcesToHclTerraform(struct?: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpecInitContainersResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpecInitContainersResourcesClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpecInitContainersResourcesClaimsList",
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

export class DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpecInitContainersResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpecInitContainersResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpecInitContainersResources | cdktf.IResolvable | undefined) {
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
  private _claims = new DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpecInitContainersResourcesClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpecInitContainersResourcesClaims[] | cdktf.IResolvable) {
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
export interface DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpecInitContainers {
  /**
  * Name is an enum which identifies the Fluentd DaemonSet init container by name. Supported values are: tigera-fluentd-prometheus-tls-key-cert-provisioner
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_collector_v1_manifest#name DataK8SOperatorTigeraIoLogCollectorV1Manifest#name}
  */
  readonly name: string;
  /**
  * Resources allows customization of limits and requests for compute resources such as cpu and memory. If specified, this overrides the named Fluentd DaemonSet init container's resources. If omitted, the Fluentd DaemonSet will use its default value for this init container's resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_collector_v1_manifest#resources DataK8SOperatorTigeraIoLogCollectorV1Manifest#resources}
  */
  readonly resources?: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpecInitContainersResources;
}

export function dataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpecInitContainersToTerraform(struct?: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpecInitContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    resources: dataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpecInitContainersResourcesToTerraform(struct!.resources),
  }
}


export function dataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpecInitContainersToHclTerraform(struct?: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpecInitContainers | cdktf.IResolvable): any {
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
    resources: {
      value: dataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpecInitContainersResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpecInitContainersResources",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpecInitContainersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpecInitContainers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpecInitContainers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._resources.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._resources.internalValue = value.resources;
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

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpecInitContainersResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpecInitContainersResources) {
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

export class DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpecInitContainersList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpecInitContainers[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpecInitContainersOutputReference {
    return new DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpecInitContainersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpec {
  /**
  * Containers is a list of Fluentd DaemonSet containers. If specified, this overrides the specified Fluentd DaemonSet containers. If omitted, the Fluentd DaemonSet will use its default values for its containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_collector_v1_manifest#containers DataK8SOperatorTigeraIoLogCollectorV1Manifest#containers}
  */
  readonly containers?: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpecContainers[] | cdktf.IResolvable;
  /**
  * InitContainers is a list of Fluentd DaemonSet init containers. If specified, this overrides the specified Fluentd DaemonSet init containers. If omitted, the Fluentd DaemonSet will use its default values for its init containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_collector_v1_manifest#init_containers DataK8SOperatorTigeraIoLogCollectorV1Manifest#init_containers}
  */
  readonly initContainers?: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpecInitContainers[] | cdktf.IResolvable;
}

export function dataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpecToTerraform(struct?: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    containers: cdktf.listMapper(dataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpecContainersToTerraform, false)(struct!.containers),
    init_containers: cdktf.listMapper(dataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpecInitContainersToTerraform, false)(struct!.initContainers),
  }
}


export function dataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpecToHclTerraform(struct?: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    containers: {
      value: cdktf.listMapperHcl(dataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpecContainersToHclTerraform, false)(struct!.containers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpecContainersList",
    },
    init_containers: {
      value: cdktf.listMapperHcl(dataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpecInitContainersToHclTerraform, false)(struct!.initContainers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpecInitContainersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containers = this._containers?.internalValue;
    }
    if (this._initContainers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.initContainers = this._initContainers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containers.internalValue = undefined;
      this._initContainers.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containers.internalValue = value.containers;
      this._initContainers.internalValue = value.initContainers;
    }
  }

  // containers - computed: false, optional: true, required: false
  private _containers = new DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpecContainersList(this, "containers", false);
  public get containers() {
    return this._containers;
  }
  public putContainers(value: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpecContainers[] | cdktf.IResolvable) {
    this._containers.internalValue = value;
  }
  public resetContainers() {
    this._containers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containersInput() {
    return this._containers.internalValue;
  }

  // init_containers - computed: false, optional: true, required: false
  private _initContainers = new DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpecInitContainersList(this, "init_containers", false);
  public get initContainers() {
    return this._initContainers;
  }
  public putInitContainers(value: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpecInitContainers[] | cdktf.IResolvable) {
    this._initContainers.internalValue = value;
  }
  public resetInitContainers() {
    this._initContainers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initContainersInput() {
    return this._initContainers.internalValue;
  }
}
export interface DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplate {
  /**
  * Spec is the Fluentd DaemonSet's PodSpec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_collector_v1_manifest#spec DataK8SOperatorTigeraIoLogCollectorV1Manifest#spec}
  */
  readonly spec?: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpec;
}

export function dataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateToTerraform(struct?: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    spec: dataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpecToTerraform(struct!.spec),
  }
}


export function dataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateToHclTerraform(struct?: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    spec: {
      value: dataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpec",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._spec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spec = this._spec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._spec.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._spec.internalValue = value.spec;
    }
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateSpec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }
}
export interface DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpec {
  /**
  * Template describes the Fluentd DaemonSet pod that will be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_collector_v1_manifest#template DataK8SOperatorTigeraIoLogCollectorV1Manifest#template}
  */
  readonly template?: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplate;
}

export function dataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecToTerraform(struct?: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    template: dataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateToTerraform(struct!.template),
  }
}


export function dataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecToHclTerraform(struct?: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    template: {
      value: dataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplate",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._template?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._template.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._template.internalValue = value.template;
    }
  }

  // template - computed: false, optional: true, required: false
  private _template = new DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecTemplate) {
    this._template.internalValue = value;
  }
  public resetTemplate() {
    this._template.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }
}
export interface DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSet {
  /**
  * Spec is the specification of the Fluentd DaemonSet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_collector_v1_manifest#spec DataK8SOperatorTigeraIoLogCollectorV1Manifest#spec}
  */
  readonly spec?: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpec;
}

export function dataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetToTerraform(struct?: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    spec: dataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecToTerraform(struct!.spec),
  }
}


export function dataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetToHclTerraform(struct?: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    spec: {
      value: dataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpec",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._spec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spec = this._spec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._spec.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._spec.internalValue = value.spec;
    }
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetSpec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }
}
export interface DataK8SOperatorTigeraIoLogCollectorV1ManifestSpec {
  /**
  * Configuration for importing audit logs from managed kubernetes cluster log sources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_collector_v1_manifest#additional_sources DataK8SOperatorTigeraIoLogCollectorV1Manifest#additional_sources}
  */
  readonly additionalSources?: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecAdditionalSources;
  /**
  * Configuration for exporting flow, audit, and DNS logs to external storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_collector_v1_manifest#additional_stores DataK8SOperatorTigeraIoLogCollectorV1Manifest#additional_stores}
  */
  readonly additionalStores?: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecAdditionalStores;
  /**
  * Configuration for enabling/disabling process path collection in flowlogs. If Enabled, this feature sets hostPID to true in order to read process cmdline. Default: Enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_collector_v1_manifest#collect_process_path DataK8SOperatorTigeraIoLogCollectorV1Manifest#collect_process_path}
  */
  readonly collectProcessPath?: string;
  /**
  * EKSLogForwarderDeployment configures the EKSLogForwarderDeployment Deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_collector_v1_manifest#eks_log_forwarder_deployment DataK8SOperatorTigeraIoLogCollectorV1Manifest#eks_log_forwarder_deployment}
  */
  readonly eksLogForwarderDeployment?: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeployment;
  /**
  * FluentdDaemonSet configures the Fluentd DaemonSet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_collector_v1_manifest#fluentd_daemon_set DataK8SOperatorTigeraIoLogCollectorV1Manifest#fluentd_daemon_set}
  */
  readonly fluentdDaemonSet?: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSet;
  /**
  * If running as a multi-tenant management cluster, the namespace in which the management cluster's tenant services are running.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_collector_v1_manifest#multi_tenant_management_cluster_namespace DataK8SOperatorTigeraIoLogCollectorV1Manifest#multi_tenant_management_cluster_namespace}
  */
  readonly multiTenantManagementClusterNamespace?: string;
}

export function dataK8SOperatorTigeraIoLogCollectorV1ManifestSpecToTerraform(struct?: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_sources: dataK8SOperatorTigeraIoLogCollectorV1ManifestSpecAdditionalSourcesToTerraform(struct!.additionalSources),
    additional_stores: dataK8SOperatorTigeraIoLogCollectorV1ManifestSpecAdditionalStoresToTerraform(struct!.additionalStores),
    collect_process_path: cdktf.stringToTerraform(struct!.collectProcessPath),
    eks_log_forwarder_deployment: dataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentToTerraform(struct!.eksLogForwarderDeployment),
    fluentd_daemon_set: dataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetToTerraform(struct!.fluentdDaemonSet),
    multi_tenant_management_cluster_namespace: cdktf.stringToTerraform(struct!.multiTenantManagementClusterNamespace),
  }
}


export function dataK8SOperatorTigeraIoLogCollectorV1ManifestSpecToHclTerraform(struct?: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_sources: {
      value: dataK8SOperatorTigeraIoLogCollectorV1ManifestSpecAdditionalSourcesToHclTerraform(struct!.additionalSources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecAdditionalSources",
    },
    additional_stores: {
      value: dataK8SOperatorTigeraIoLogCollectorV1ManifestSpecAdditionalStoresToHclTerraform(struct!.additionalStores),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecAdditionalStores",
    },
    collect_process_path: {
      value: cdktf.stringToHclTerraform(struct!.collectProcessPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    eks_log_forwarder_deployment: {
      value: dataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentToHclTerraform(struct!.eksLogForwarderDeployment),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeployment",
    },
    fluentd_daemon_set: {
      value: dataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetToHclTerraform(struct!.fluentdDaemonSet),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSet",
    },
    multi_tenant_management_cluster_namespace: {
      value: cdktf.stringToHclTerraform(struct!.multiTenantManagementClusterNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoLogCollectorV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalSources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalSources = this._additionalSources?.internalValue;
    }
    if (this._additionalStores?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalStores = this._additionalStores?.internalValue;
    }
    if (this._collectProcessPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.collectProcessPath = this._collectProcessPath;
    }
    if (this._eksLogForwarderDeployment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eksLogForwarderDeployment = this._eksLogForwarderDeployment?.internalValue;
    }
    if (this._fluentdDaemonSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fluentdDaemonSet = this._fluentdDaemonSet?.internalValue;
    }
    if (this._multiTenantManagementClusterNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiTenantManagementClusterNamespace = this._multiTenantManagementClusterNamespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalSources.internalValue = undefined;
      this._additionalStores.internalValue = undefined;
      this._collectProcessPath = undefined;
      this._eksLogForwarderDeployment.internalValue = undefined;
      this._fluentdDaemonSet.internalValue = undefined;
      this._multiTenantManagementClusterNamespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalSources.internalValue = value.additionalSources;
      this._additionalStores.internalValue = value.additionalStores;
      this._collectProcessPath = value.collectProcessPath;
      this._eksLogForwarderDeployment.internalValue = value.eksLogForwarderDeployment;
      this._fluentdDaemonSet.internalValue = value.fluentdDaemonSet;
      this._multiTenantManagementClusterNamespace = value.multiTenantManagementClusterNamespace;
    }
  }

  // additional_sources - computed: false, optional: true, required: false
  private _additionalSources = new DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecAdditionalSourcesOutputReference(this, "additional_sources");
  public get additionalSources() {
    return this._additionalSources;
  }
  public putAdditionalSources(value: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecAdditionalSources) {
    this._additionalSources.internalValue = value;
  }
  public resetAdditionalSources() {
    this._additionalSources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalSourcesInput() {
    return this._additionalSources.internalValue;
  }

  // additional_stores - computed: false, optional: true, required: false
  private _additionalStores = new DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecAdditionalStoresOutputReference(this, "additional_stores");
  public get additionalStores() {
    return this._additionalStores;
  }
  public putAdditionalStores(value: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecAdditionalStores) {
    this._additionalStores.internalValue = value;
  }
  public resetAdditionalStores() {
    this._additionalStores.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalStoresInput() {
    return this._additionalStores.internalValue;
  }

  // collect_process_path - computed: false, optional: true, required: false
  private _collectProcessPath?: string; 
  public get collectProcessPath() {
    return this.getStringAttribute('collect_process_path');
  }
  public set collectProcessPath(value: string) {
    this._collectProcessPath = value;
  }
  public resetCollectProcessPath() {
    this._collectProcessPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectProcessPathInput() {
    return this._collectProcessPath;
  }

  // eks_log_forwarder_deployment - computed: false, optional: true, required: false
  private _eksLogForwarderDeployment = new DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeploymentOutputReference(this, "eks_log_forwarder_deployment");
  public get eksLogForwarderDeployment() {
    return this._eksLogForwarderDeployment;
  }
  public putEksLogForwarderDeployment(value: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecEksLogForwarderDeployment) {
    this._eksLogForwarderDeployment.internalValue = value;
  }
  public resetEksLogForwarderDeployment() {
    this._eksLogForwarderDeployment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eksLogForwarderDeploymentInput() {
    return this._eksLogForwarderDeployment.internalValue;
  }

  // fluentd_daemon_set - computed: false, optional: true, required: false
  private _fluentdDaemonSet = new DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSetOutputReference(this, "fluentd_daemon_set");
  public get fluentdDaemonSet() {
    return this._fluentdDaemonSet;
  }
  public putFluentdDaemonSet(value: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecFluentdDaemonSet) {
    this._fluentdDaemonSet.internalValue = value;
  }
  public resetFluentdDaemonSet() {
    this._fluentdDaemonSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fluentdDaemonSetInput() {
    return this._fluentdDaemonSet.internalValue;
  }

  // multi_tenant_management_cluster_namespace - computed: false, optional: true, required: false
  private _multiTenantManagementClusterNamespace?: string; 
  public get multiTenantManagementClusterNamespace() {
    return this.getStringAttribute('multi_tenant_management_cluster_namespace');
  }
  public set multiTenantManagementClusterNamespace(value: string) {
    this._multiTenantManagementClusterNamespace = value;
  }
  public resetMultiTenantManagementClusterNamespace() {
    this._multiTenantManagementClusterNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiTenantManagementClusterNamespaceInput() {
    return this._multiTenantManagementClusterNamespace;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_collector_v1_manifest k8s_operator_tigera_io_log_collector_v1_manifest}
*/
export class DataK8SOperatorTigeraIoLogCollectorV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_operator_tigera_io_log_collector_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SOperatorTigeraIoLogCollectorV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SOperatorTigeraIoLogCollectorV1Manifest to import
  * @param importFromId The id of the existing DataK8SOperatorTigeraIoLogCollectorV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_collector_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SOperatorTigeraIoLogCollectorV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_operator_tigera_io_log_collector_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_collector_v1_manifest k8s_operator_tigera_io_log_collector_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SOperatorTigeraIoLogCollectorV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SOperatorTigeraIoLogCollectorV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_operator_tigera_io_log_collector_v1_manifest',
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
  private _metadata = new DataK8SOperatorTigeraIoLogCollectorV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SOperatorTigeraIoLogCollectorV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SOperatorTigeraIoLogCollectorV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SOperatorTigeraIoLogCollectorV1ManifestSpec) {
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
      metadata: dataK8SOperatorTigeraIoLogCollectorV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SOperatorTigeraIoLogCollectorV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SOperatorTigeraIoLogCollectorV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SOperatorTigeraIoLogCollectorV1ManifestMetadata",
      },
      spec: {
        value: dataK8SOperatorTigeraIoLogCollectorV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SOperatorTigeraIoLogCollectorV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
