// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#metadata DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#metadata}
  */
  readonly metadata: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#spec DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#spec}
  */
  readonly spec?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpec;
}
export interface DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#annotations DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#labels DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#name DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#namespace DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestMetadataToTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestMetadataToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersConcat {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#continuous_line_regexp DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#continuous_line_regexp}
  */
  readonly continuousLineRegexp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#flush_interval DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#flush_interval}
  */
  readonly flushInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#keep_partial_key DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#keep_partial_key}
  */
  readonly keepPartialKey?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#keep_partial_metadata DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#keep_partial_metadata}
  */
  readonly keepPartialMetadata?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#key DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#multiline_end_regexp DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#multiline_end_regexp}
  */
  readonly multilineEndRegexp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#multiline_start_regexp DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#multiline_start_regexp}
  */
  readonly multilineStartRegexp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#n_lines DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#n_lines}
  */
  readonly nLines?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#partial_cri_logtag_key DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#partial_cri_logtag_key}
  */
  readonly partialCriLogtagKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#partial_cri_stream_key DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#partial_cri_stream_key}
  */
  readonly partialCriStreamKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#partial_key DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#partial_key}
  */
  readonly partialKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#partial_metadata_format DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#partial_metadata_format}
  */
  readonly partialMetadataFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#partial_value DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#partial_value}
  */
  readonly partialValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#separator DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#separator}
  */
  readonly separator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#stream_identity_key DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#stream_identity_key}
  */
  readonly streamIdentityKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#timeout_label DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#timeout_label}
  */
  readonly timeoutLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#use_first_timestamp DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#use_first_timestamp}
  */
  readonly useFirstTimestamp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#use_partial_cri_logtag DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#use_partial_cri_logtag}
  */
  readonly usePartialCriLogtag?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#use_partial_metadata DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#use_partial_metadata}
  */
  readonly usePartialMetadata?: string;
}

export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersConcatToTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersConcat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    continuous_line_regexp: cdktf.stringToTerraform(struct!.continuousLineRegexp),
    flush_interval: cdktf.numberToTerraform(struct!.flushInterval),
    keep_partial_key: cdktf.booleanToTerraform(struct!.keepPartialKey),
    keep_partial_metadata: cdktf.stringToTerraform(struct!.keepPartialMetadata),
    key: cdktf.stringToTerraform(struct!.key),
    multiline_end_regexp: cdktf.stringToTerraform(struct!.multilineEndRegexp),
    multiline_start_regexp: cdktf.stringToTerraform(struct!.multilineStartRegexp),
    n_lines: cdktf.numberToTerraform(struct!.nLines),
    partial_cri_logtag_key: cdktf.stringToTerraform(struct!.partialCriLogtagKey),
    partial_cri_stream_key: cdktf.stringToTerraform(struct!.partialCriStreamKey),
    partial_key: cdktf.stringToTerraform(struct!.partialKey),
    partial_metadata_format: cdktf.stringToTerraform(struct!.partialMetadataFormat),
    partial_value: cdktf.stringToTerraform(struct!.partialValue),
    separator: cdktf.stringToTerraform(struct!.separator),
    stream_identity_key: cdktf.stringToTerraform(struct!.streamIdentityKey),
    timeout_label: cdktf.stringToTerraform(struct!.timeoutLabel),
    use_first_timestamp: cdktf.booleanToTerraform(struct!.useFirstTimestamp),
    use_partial_cri_logtag: cdktf.booleanToTerraform(struct!.usePartialCriLogtag),
    use_partial_metadata: cdktf.stringToTerraform(struct!.usePartialMetadata),
  }
}


export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersConcatToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersConcat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    continuous_line_regexp: {
      value: cdktf.stringToHclTerraform(struct!.continuousLineRegexp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    flush_interval: {
      value: cdktf.numberToHclTerraform(struct!.flushInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    keep_partial_key: {
      value: cdktf.booleanToHclTerraform(struct!.keepPartialKey),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    keep_partial_metadata: {
      value: cdktf.stringToHclTerraform(struct!.keepPartialMetadata),
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
    multiline_end_regexp: {
      value: cdktf.stringToHclTerraform(struct!.multilineEndRegexp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    multiline_start_regexp: {
      value: cdktf.stringToHclTerraform(struct!.multilineStartRegexp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    n_lines: {
      value: cdktf.numberToHclTerraform(struct!.nLines),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    partial_cri_logtag_key: {
      value: cdktf.stringToHclTerraform(struct!.partialCriLogtagKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    partial_cri_stream_key: {
      value: cdktf.stringToHclTerraform(struct!.partialCriStreamKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    partial_key: {
      value: cdktf.stringToHclTerraform(struct!.partialKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    partial_metadata_format: {
      value: cdktf.stringToHclTerraform(struct!.partialMetadataFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    partial_value: {
      value: cdktf.stringToHclTerraform(struct!.partialValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    separator: {
      value: cdktf.stringToHclTerraform(struct!.separator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stream_identity_key: {
      value: cdktf.stringToHclTerraform(struct!.streamIdentityKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout_label: {
      value: cdktf.stringToHclTerraform(struct!.timeoutLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_first_timestamp: {
      value: cdktf.booleanToHclTerraform(struct!.useFirstTimestamp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_partial_cri_logtag: {
      value: cdktf.booleanToHclTerraform(struct!.usePartialCriLogtag),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_partial_metadata: {
      value: cdktf.stringToHclTerraform(struct!.usePartialMetadata),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersConcatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersConcat | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._continuousLineRegexp !== undefined) {
      hasAnyValues = true;
      internalValueResult.continuousLineRegexp = this._continuousLineRegexp;
    }
    if (this._flushInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.flushInterval = this._flushInterval;
    }
    if (this._keepPartialKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepPartialKey = this._keepPartialKey;
    }
    if (this._keepPartialMetadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepPartialMetadata = this._keepPartialMetadata;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._multilineEndRegexp !== undefined) {
      hasAnyValues = true;
      internalValueResult.multilineEndRegexp = this._multilineEndRegexp;
    }
    if (this._multilineStartRegexp !== undefined) {
      hasAnyValues = true;
      internalValueResult.multilineStartRegexp = this._multilineStartRegexp;
    }
    if (this._nLines !== undefined) {
      hasAnyValues = true;
      internalValueResult.nLines = this._nLines;
    }
    if (this._partialCriLogtagKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.partialCriLogtagKey = this._partialCriLogtagKey;
    }
    if (this._partialCriStreamKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.partialCriStreamKey = this._partialCriStreamKey;
    }
    if (this._partialKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.partialKey = this._partialKey;
    }
    if (this._partialMetadataFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.partialMetadataFormat = this._partialMetadataFormat;
    }
    if (this._partialValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.partialValue = this._partialValue;
    }
    if (this._separator !== undefined) {
      hasAnyValues = true;
      internalValueResult.separator = this._separator;
    }
    if (this._streamIdentityKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamIdentityKey = this._streamIdentityKey;
    }
    if (this._timeoutLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutLabel = this._timeoutLabel;
    }
    if (this._useFirstTimestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.useFirstTimestamp = this._useFirstTimestamp;
    }
    if (this._usePartialCriLogtag !== undefined) {
      hasAnyValues = true;
      internalValueResult.usePartialCriLogtag = this._usePartialCriLogtag;
    }
    if (this._usePartialMetadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.usePartialMetadata = this._usePartialMetadata;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersConcat | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._continuousLineRegexp = undefined;
      this._flushInterval = undefined;
      this._keepPartialKey = undefined;
      this._keepPartialMetadata = undefined;
      this._key = undefined;
      this._multilineEndRegexp = undefined;
      this._multilineStartRegexp = undefined;
      this._nLines = undefined;
      this._partialCriLogtagKey = undefined;
      this._partialCriStreamKey = undefined;
      this._partialKey = undefined;
      this._partialMetadataFormat = undefined;
      this._partialValue = undefined;
      this._separator = undefined;
      this._streamIdentityKey = undefined;
      this._timeoutLabel = undefined;
      this._useFirstTimestamp = undefined;
      this._usePartialCriLogtag = undefined;
      this._usePartialMetadata = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._continuousLineRegexp = value.continuousLineRegexp;
      this._flushInterval = value.flushInterval;
      this._keepPartialKey = value.keepPartialKey;
      this._keepPartialMetadata = value.keepPartialMetadata;
      this._key = value.key;
      this._multilineEndRegexp = value.multilineEndRegexp;
      this._multilineStartRegexp = value.multilineStartRegexp;
      this._nLines = value.nLines;
      this._partialCriLogtagKey = value.partialCriLogtagKey;
      this._partialCriStreamKey = value.partialCriStreamKey;
      this._partialKey = value.partialKey;
      this._partialMetadataFormat = value.partialMetadataFormat;
      this._partialValue = value.partialValue;
      this._separator = value.separator;
      this._streamIdentityKey = value.streamIdentityKey;
      this._timeoutLabel = value.timeoutLabel;
      this._useFirstTimestamp = value.useFirstTimestamp;
      this._usePartialCriLogtag = value.usePartialCriLogtag;
      this._usePartialMetadata = value.usePartialMetadata;
    }
  }

  // continuous_line_regexp - computed: false, optional: true, required: false
  private _continuousLineRegexp?: string; 
  public get continuousLineRegexp() {
    return this.getStringAttribute('continuous_line_regexp');
  }
  public set continuousLineRegexp(value: string) {
    this._continuousLineRegexp = value;
  }
  public resetContinuousLineRegexp() {
    this._continuousLineRegexp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continuousLineRegexpInput() {
    return this._continuousLineRegexp;
  }

  // flush_interval - computed: false, optional: true, required: false
  private _flushInterval?: number; 
  public get flushInterval() {
    return this.getNumberAttribute('flush_interval');
  }
  public set flushInterval(value: number) {
    this._flushInterval = value;
  }
  public resetFlushInterval() {
    this._flushInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flushIntervalInput() {
    return this._flushInterval;
  }

  // keep_partial_key - computed: false, optional: true, required: false
  private _keepPartialKey?: boolean | cdktf.IResolvable; 
  public get keepPartialKey() {
    return this.getBooleanAttribute('keep_partial_key');
  }
  public set keepPartialKey(value: boolean | cdktf.IResolvable) {
    this._keepPartialKey = value;
  }
  public resetKeepPartialKey() {
    this._keepPartialKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepPartialKeyInput() {
    return this._keepPartialKey;
  }

  // keep_partial_metadata - computed: false, optional: true, required: false
  private _keepPartialMetadata?: string; 
  public get keepPartialMetadata() {
    return this.getStringAttribute('keep_partial_metadata');
  }
  public set keepPartialMetadata(value: string) {
    this._keepPartialMetadata = value;
  }
  public resetKeepPartialMetadata() {
    this._keepPartialMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepPartialMetadataInput() {
    return this._keepPartialMetadata;
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

  // multiline_end_regexp - computed: false, optional: true, required: false
  private _multilineEndRegexp?: string; 
  public get multilineEndRegexp() {
    return this.getStringAttribute('multiline_end_regexp');
  }
  public set multilineEndRegexp(value: string) {
    this._multilineEndRegexp = value;
  }
  public resetMultilineEndRegexp() {
    this._multilineEndRegexp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multilineEndRegexpInput() {
    return this._multilineEndRegexp;
  }

  // multiline_start_regexp - computed: false, optional: true, required: false
  private _multilineStartRegexp?: string; 
  public get multilineStartRegexp() {
    return this.getStringAttribute('multiline_start_regexp');
  }
  public set multilineStartRegexp(value: string) {
    this._multilineStartRegexp = value;
  }
  public resetMultilineStartRegexp() {
    this._multilineStartRegexp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multilineStartRegexpInput() {
    return this._multilineStartRegexp;
  }

  // n_lines - computed: false, optional: true, required: false
  private _nLines?: number; 
  public get nLines() {
    return this.getNumberAttribute('n_lines');
  }
  public set nLines(value: number) {
    this._nLines = value;
  }
  public resetNLines() {
    this._nLines = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nLinesInput() {
    return this._nLines;
  }

  // partial_cri_logtag_key - computed: false, optional: true, required: false
  private _partialCriLogtagKey?: string; 
  public get partialCriLogtagKey() {
    return this.getStringAttribute('partial_cri_logtag_key');
  }
  public set partialCriLogtagKey(value: string) {
    this._partialCriLogtagKey = value;
  }
  public resetPartialCriLogtagKey() {
    this._partialCriLogtagKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partialCriLogtagKeyInput() {
    return this._partialCriLogtagKey;
  }

  // partial_cri_stream_key - computed: false, optional: true, required: false
  private _partialCriStreamKey?: string; 
  public get partialCriStreamKey() {
    return this.getStringAttribute('partial_cri_stream_key');
  }
  public set partialCriStreamKey(value: string) {
    this._partialCriStreamKey = value;
  }
  public resetPartialCriStreamKey() {
    this._partialCriStreamKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partialCriStreamKeyInput() {
    return this._partialCriStreamKey;
  }

  // partial_key - computed: false, optional: true, required: false
  private _partialKey?: string; 
  public get partialKey() {
    return this.getStringAttribute('partial_key');
  }
  public set partialKey(value: string) {
    this._partialKey = value;
  }
  public resetPartialKey() {
    this._partialKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partialKeyInput() {
    return this._partialKey;
  }

  // partial_metadata_format - computed: false, optional: true, required: false
  private _partialMetadataFormat?: string; 
  public get partialMetadataFormat() {
    return this.getStringAttribute('partial_metadata_format');
  }
  public set partialMetadataFormat(value: string) {
    this._partialMetadataFormat = value;
  }
  public resetPartialMetadataFormat() {
    this._partialMetadataFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partialMetadataFormatInput() {
    return this._partialMetadataFormat;
  }

  // partial_value - computed: false, optional: true, required: false
  private _partialValue?: string; 
  public get partialValue() {
    return this.getStringAttribute('partial_value');
  }
  public set partialValue(value: string) {
    this._partialValue = value;
  }
  public resetPartialValue() {
    this._partialValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partialValueInput() {
    return this._partialValue;
  }

  // separator - computed: false, optional: true, required: false
  private _separator?: string; 
  public get separator() {
    return this.getStringAttribute('separator');
  }
  public set separator(value: string) {
    this._separator = value;
  }
  public resetSeparator() {
    this._separator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get separatorInput() {
    return this._separator;
  }

  // stream_identity_key - computed: false, optional: true, required: false
  private _streamIdentityKey?: string; 
  public get streamIdentityKey() {
    return this.getStringAttribute('stream_identity_key');
  }
  public set streamIdentityKey(value: string) {
    this._streamIdentityKey = value;
  }
  public resetStreamIdentityKey() {
    this._streamIdentityKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamIdentityKeyInput() {
    return this._streamIdentityKey;
  }

  // timeout_label - computed: false, optional: true, required: false
  private _timeoutLabel?: string; 
  public get timeoutLabel() {
    return this.getStringAttribute('timeout_label');
  }
  public set timeoutLabel(value: string) {
    this._timeoutLabel = value;
  }
  public resetTimeoutLabel() {
    this._timeoutLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutLabelInput() {
    return this._timeoutLabel;
  }

  // use_first_timestamp - computed: false, optional: true, required: false
  private _useFirstTimestamp?: boolean | cdktf.IResolvable; 
  public get useFirstTimestamp() {
    return this.getBooleanAttribute('use_first_timestamp');
  }
  public set useFirstTimestamp(value: boolean | cdktf.IResolvable) {
    this._useFirstTimestamp = value;
  }
  public resetUseFirstTimestamp() {
    this._useFirstTimestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useFirstTimestampInput() {
    return this._useFirstTimestamp;
  }

  // use_partial_cri_logtag - computed: false, optional: true, required: false
  private _usePartialCriLogtag?: boolean | cdktf.IResolvable; 
  public get usePartialCriLogtag() {
    return this.getBooleanAttribute('use_partial_cri_logtag');
  }
  public set usePartialCriLogtag(value: boolean | cdktf.IResolvable) {
    this._usePartialCriLogtag = value;
  }
  public resetUsePartialCriLogtag() {
    this._usePartialCriLogtag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usePartialCriLogtagInput() {
    return this._usePartialCriLogtag;
  }

  // use_partial_metadata - computed: false, optional: true, required: false
  private _usePartialMetadata?: string; 
  public get usePartialMetadata() {
    return this.getStringAttribute('use_partial_metadata');
  }
  public set usePartialMetadata(value: string) {
    this._usePartialMetadata = value;
  }
  public resetUsePartialMetadata() {
    this._usePartialMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usePartialMetadataInput() {
    return this._usePartialMetadata;
  }
}
export interface DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersDedot {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#de_dot_nested DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#de_dot_nested}
  */
  readonly deDotNested?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#de_dot_separator DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#de_dot_separator}
  */
  readonly deDotSeparator?: string;
}

export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersDedotToTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersDedot | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    de_dot_nested: cdktf.booleanToTerraform(struct!.deDotNested),
    de_dot_separator: cdktf.stringToTerraform(struct!.deDotSeparator),
  }
}


export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersDedotToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersDedot | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    de_dot_nested: {
      value: cdktf.booleanToHclTerraform(struct!.deDotNested),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    de_dot_separator: {
      value: cdktf.stringToHclTerraform(struct!.deDotSeparator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersDedotOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersDedot | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deDotNested !== undefined) {
      hasAnyValues = true;
      internalValueResult.deDotNested = this._deDotNested;
    }
    if (this._deDotSeparator !== undefined) {
      hasAnyValues = true;
      internalValueResult.deDotSeparator = this._deDotSeparator;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersDedot | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deDotNested = undefined;
      this._deDotSeparator = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deDotNested = value.deDotNested;
      this._deDotSeparator = value.deDotSeparator;
    }
  }

  // de_dot_nested - computed: false, optional: true, required: false
  private _deDotNested?: boolean | cdktf.IResolvable; 
  public get deDotNested() {
    return this.getBooleanAttribute('de_dot_nested');
  }
  public set deDotNested(value: boolean | cdktf.IResolvable) {
    this._deDotNested = value;
  }
  public resetDeDotNested() {
    this._deDotNested = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deDotNestedInput() {
    return this._deDotNested;
  }

  // de_dot_separator - computed: false, optional: true, required: false
  private _deDotSeparator?: string; 
  public get deDotSeparator() {
    return this.getStringAttribute('de_dot_separator');
  }
  public set deDotSeparator(value: string) {
    this._deDotSeparator = value;
  }
  public resetDeDotSeparator() {
    this._deDotSeparator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deDotSeparatorInput() {
    return this._deDotSeparator;
  }
}
export interface DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersDetectExceptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#force_line_breaks DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#force_line_breaks}
  */
  readonly forceLineBreaks?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#languages DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#languages}
  */
  readonly languages?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#match_tag DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#match_tag}
  */
  readonly matchTag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#max_bytes DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#max_bytes}
  */
  readonly maxBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#max_lines DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#max_lines}
  */
  readonly maxLines?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#message DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#message}
  */
  readonly message?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#multiline_flush_interval DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#multiline_flush_interval}
  */
  readonly multilineFlushInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#remove_tag_prefix DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#remove_tag_prefix}
  */
  readonly removeTagPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#stream DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#stream}
  */
  readonly stream?: string;
}

export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersDetectExceptionsToTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersDetectExceptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    force_line_breaks: cdktf.booleanToTerraform(struct!.forceLineBreaks),
    languages: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.languages),
    match_tag: cdktf.stringToTerraform(struct!.matchTag),
    max_bytes: cdktf.numberToTerraform(struct!.maxBytes),
    max_lines: cdktf.numberToTerraform(struct!.maxLines),
    message: cdktf.stringToTerraform(struct!.message),
    multiline_flush_interval: cdktf.stringToTerraform(struct!.multilineFlushInterval),
    remove_tag_prefix: cdktf.stringToTerraform(struct!.removeTagPrefix),
    stream: cdktf.stringToTerraform(struct!.stream),
  }
}


export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersDetectExceptionsToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersDetectExceptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    force_line_breaks: {
      value: cdktf.booleanToHclTerraform(struct!.forceLineBreaks),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    languages: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.languages),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    match_tag: {
      value: cdktf.stringToHclTerraform(struct!.matchTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_bytes: {
      value: cdktf.numberToHclTerraform(struct!.maxBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_lines: {
      value: cdktf.numberToHclTerraform(struct!.maxLines),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    multiline_flush_interval: {
      value: cdktf.stringToHclTerraform(struct!.multilineFlushInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remove_tag_prefix: {
      value: cdktf.stringToHclTerraform(struct!.removeTagPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stream: {
      value: cdktf.stringToHclTerraform(struct!.stream),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersDetectExceptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersDetectExceptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forceLineBreaks !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceLineBreaks = this._forceLineBreaks;
    }
    if (this._languages !== undefined) {
      hasAnyValues = true;
      internalValueResult.languages = this._languages;
    }
    if (this._matchTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchTag = this._matchTag;
    }
    if (this._maxBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBytes = this._maxBytes;
    }
    if (this._maxLines !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLines = this._maxLines;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._multilineFlushInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.multilineFlushInterval = this._multilineFlushInterval;
    }
    if (this._removeTagPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.removeTagPrefix = this._removeTagPrefix;
    }
    if (this._stream !== undefined) {
      hasAnyValues = true;
      internalValueResult.stream = this._stream;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersDetectExceptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._forceLineBreaks = undefined;
      this._languages = undefined;
      this._matchTag = undefined;
      this._maxBytes = undefined;
      this._maxLines = undefined;
      this._message = undefined;
      this._multilineFlushInterval = undefined;
      this._removeTagPrefix = undefined;
      this._stream = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._forceLineBreaks = value.forceLineBreaks;
      this._languages = value.languages;
      this._matchTag = value.matchTag;
      this._maxBytes = value.maxBytes;
      this._maxLines = value.maxLines;
      this._message = value.message;
      this._multilineFlushInterval = value.multilineFlushInterval;
      this._removeTagPrefix = value.removeTagPrefix;
      this._stream = value.stream;
    }
  }

  // force_line_breaks - computed: false, optional: true, required: false
  private _forceLineBreaks?: boolean | cdktf.IResolvable; 
  public get forceLineBreaks() {
    return this.getBooleanAttribute('force_line_breaks');
  }
  public set forceLineBreaks(value: boolean | cdktf.IResolvable) {
    this._forceLineBreaks = value;
  }
  public resetForceLineBreaks() {
    this._forceLineBreaks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceLineBreaksInput() {
    return this._forceLineBreaks;
  }

  // languages - computed: false, optional: true, required: false
  private _languages?: string[]; 
  public get languages() {
    return this.getListAttribute('languages');
  }
  public set languages(value: string[]) {
    this._languages = value;
  }
  public resetLanguages() {
    this._languages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get languagesInput() {
    return this._languages;
  }

  // match_tag - computed: false, optional: true, required: false
  private _matchTag?: string; 
  public get matchTag() {
    return this.getStringAttribute('match_tag');
  }
  public set matchTag(value: string) {
    this._matchTag = value;
  }
  public resetMatchTag() {
    this._matchTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTagInput() {
    return this._matchTag;
  }

  // max_bytes - computed: false, optional: true, required: false
  private _maxBytes?: number; 
  public get maxBytes() {
    return this.getNumberAttribute('max_bytes');
  }
  public set maxBytes(value: number) {
    this._maxBytes = value;
  }
  public resetMaxBytes() {
    this._maxBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBytesInput() {
    return this._maxBytes;
  }

  // max_lines - computed: false, optional: true, required: false
  private _maxLines?: number; 
  public get maxLines() {
    return this.getNumberAttribute('max_lines');
  }
  public set maxLines(value: number) {
    this._maxLines = value;
  }
  public resetMaxLines() {
    this._maxLines = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLinesInput() {
    return this._maxLines;
  }

  // message - computed: false, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // multiline_flush_interval - computed: false, optional: true, required: false
  private _multilineFlushInterval?: string; 
  public get multilineFlushInterval() {
    return this.getStringAttribute('multiline_flush_interval');
  }
  public set multilineFlushInterval(value: string) {
    this._multilineFlushInterval = value;
  }
  public resetMultilineFlushInterval() {
    this._multilineFlushInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multilineFlushIntervalInput() {
    return this._multilineFlushInterval;
  }

  // remove_tag_prefix - computed: false, optional: true, required: false
  private _removeTagPrefix?: string; 
  public get removeTagPrefix() {
    return this.getStringAttribute('remove_tag_prefix');
  }
  public set removeTagPrefix(value: string) {
    this._removeTagPrefix = value;
  }
  public resetRemoveTagPrefix() {
    this._removeTagPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeTagPrefixInput() {
    return this._removeTagPrefix;
  }

  // stream - computed: false, optional: true, required: false
  private _stream?: string; 
  public get stream() {
    return this.getStringAttribute('stream');
  }
  public set stream(value: string) {
    this._stream = value;
  }
  public resetStream() {
    this._stream = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamInput() {
    return this._stream;
  }
}
export interface DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersElasticsearchGenid {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#hash_id_key DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#hash_id_key}
  */
  readonly hashIdKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#hash_type DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#hash_type}
  */
  readonly hashType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#include_tag_in_seed DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#include_tag_in_seed}
  */
  readonly includeTagInSeed?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#include_time_in_seed DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#include_time_in_seed}
  */
  readonly includeTimeInSeed?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#record_keys DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#record_keys}
  */
  readonly recordKeys?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#separator DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#separator}
  */
  readonly separator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#use_entire_record DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#use_entire_record}
  */
  readonly useEntireRecord?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#use_record_as_seed DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#use_record_as_seed}
  */
  readonly useRecordAsSeed?: boolean | cdktf.IResolvable;
}

export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersElasticsearchGenidToTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersElasticsearchGenid | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hash_id_key: cdktf.stringToTerraform(struct!.hashIdKey),
    hash_type: cdktf.stringToTerraform(struct!.hashType),
    include_tag_in_seed: cdktf.booleanToTerraform(struct!.includeTagInSeed),
    include_time_in_seed: cdktf.booleanToTerraform(struct!.includeTimeInSeed),
    record_keys: cdktf.stringToTerraform(struct!.recordKeys),
    separator: cdktf.stringToTerraform(struct!.separator),
    use_entire_record: cdktf.booleanToTerraform(struct!.useEntireRecord),
    use_record_as_seed: cdktf.booleanToTerraform(struct!.useRecordAsSeed),
  }
}


export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersElasticsearchGenidToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersElasticsearchGenid | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hash_id_key: {
      value: cdktf.stringToHclTerraform(struct!.hashIdKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hash_type: {
      value: cdktf.stringToHclTerraform(struct!.hashType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include_tag_in_seed: {
      value: cdktf.booleanToHclTerraform(struct!.includeTagInSeed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_time_in_seed: {
      value: cdktf.booleanToHclTerraform(struct!.includeTimeInSeed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    record_keys: {
      value: cdktf.stringToHclTerraform(struct!.recordKeys),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    separator: {
      value: cdktf.stringToHclTerraform(struct!.separator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_entire_record: {
      value: cdktf.booleanToHclTerraform(struct!.useEntireRecord),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_record_as_seed: {
      value: cdktf.booleanToHclTerraform(struct!.useRecordAsSeed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersElasticsearchGenidOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersElasticsearchGenid | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hashIdKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashIdKey = this._hashIdKey;
    }
    if (this._hashType !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashType = this._hashType;
    }
    if (this._includeTagInSeed !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeTagInSeed = this._includeTagInSeed;
    }
    if (this._includeTimeInSeed !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeTimeInSeed = this._includeTimeInSeed;
    }
    if (this._recordKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordKeys = this._recordKeys;
    }
    if (this._separator !== undefined) {
      hasAnyValues = true;
      internalValueResult.separator = this._separator;
    }
    if (this._useEntireRecord !== undefined) {
      hasAnyValues = true;
      internalValueResult.useEntireRecord = this._useEntireRecord;
    }
    if (this._useRecordAsSeed !== undefined) {
      hasAnyValues = true;
      internalValueResult.useRecordAsSeed = this._useRecordAsSeed;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersElasticsearchGenid | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hashIdKey = undefined;
      this._hashType = undefined;
      this._includeTagInSeed = undefined;
      this._includeTimeInSeed = undefined;
      this._recordKeys = undefined;
      this._separator = undefined;
      this._useEntireRecord = undefined;
      this._useRecordAsSeed = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hashIdKey = value.hashIdKey;
      this._hashType = value.hashType;
      this._includeTagInSeed = value.includeTagInSeed;
      this._includeTimeInSeed = value.includeTimeInSeed;
      this._recordKeys = value.recordKeys;
      this._separator = value.separator;
      this._useEntireRecord = value.useEntireRecord;
      this._useRecordAsSeed = value.useRecordAsSeed;
    }
  }

  // hash_id_key - computed: false, optional: true, required: false
  private _hashIdKey?: string; 
  public get hashIdKey() {
    return this.getStringAttribute('hash_id_key');
  }
  public set hashIdKey(value: string) {
    this._hashIdKey = value;
  }
  public resetHashIdKey() {
    this._hashIdKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashIdKeyInput() {
    return this._hashIdKey;
  }

  // hash_type - computed: false, optional: true, required: false
  private _hashType?: string; 
  public get hashType() {
    return this.getStringAttribute('hash_type');
  }
  public set hashType(value: string) {
    this._hashType = value;
  }
  public resetHashType() {
    this._hashType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashTypeInput() {
    return this._hashType;
  }

  // include_tag_in_seed - computed: false, optional: true, required: false
  private _includeTagInSeed?: boolean | cdktf.IResolvable; 
  public get includeTagInSeed() {
    return this.getBooleanAttribute('include_tag_in_seed');
  }
  public set includeTagInSeed(value: boolean | cdktf.IResolvable) {
    this._includeTagInSeed = value;
  }
  public resetIncludeTagInSeed() {
    this._includeTagInSeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeTagInSeedInput() {
    return this._includeTagInSeed;
  }

  // include_time_in_seed - computed: false, optional: true, required: false
  private _includeTimeInSeed?: boolean | cdktf.IResolvable; 
  public get includeTimeInSeed() {
    return this.getBooleanAttribute('include_time_in_seed');
  }
  public set includeTimeInSeed(value: boolean | cdktf.IResolvable) {
    this._includeTimeInSeed = value;
  }
  public resetIncludeTimeInSeed() {
    this._includeTimeInSeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeTimeInSeedInput() {
    return this._includeTimeInSeed;
  }

  // record_keys - computed: false, optional: true, required: false
  private _recordKeys?: string; 
  public get recordKeys() {
    return this.getStringAttribute('record_keys');
  }
  public set recordKeys(value: string) {
    this._recordKeys = value;
  }
  public resetRecordKeys() {
    this._recordKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordKeysInput() {
    return this._recordKeys;
  }

  // separator - computed: false, optional: true, required: false
  private _separator?: string; 
  public get separator() {
    return this.getStringAttribute('separator');
  }
  public set separator(value: string) {
    this._separator = value;
  }
  public resetSeparator() {
    this._separator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get separatorInput() {
    return this._separator;
  }

  // use_entire_record - computed: false, optional: true, required: false
  private _useEntireRecord?: boolean | cdktf.IResolvable; 
  public get useEntireRecord() {
    return this.getBooleanAttribute('use_entire_record');
  }
  public set useEntireRecord(value: boolean | cdktf.IResolvable) {
    this._useEntireRecord = value;
  }
  public resetUseEntireRecord() {
    this._useEntireRecord = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useEntireRecordInput() {
    return this._useEntireRecord;
  }

  // use_record_as_seed - computed: false, optional: true, required: false
  private _useRecordAsSeed?: boolean | cdktf.IResolvable; 
  public get useRecordAsSeed() {
    return this.getBooleanAttribute('use_record_as_seed');
  }
  public set useRecordAsSeed(value: boolean | cdktf.IResolvable) {
    this._useRecordAsSeed = value;
  }
  public resetUseRecordAsSeed() {
    this._useRecordAsSeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useRecordAsSeedInput() {
    return this._useRecordAsSeed;
  }
}
export interface DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SCaFileMountFromSecretKeyRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#key DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#name DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#optional DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SCaFileMountFromSecretKeyRefToTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SCaFileMountFromSecretKeyRef | cdktf.IResolvable): any {
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


export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SCaFileMountFromSecretKeyRefToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SCaFileMountFromSecretKeyRef | cdktf.IResolvable): any {
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

export class DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SCaFileMountFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SCaFileMountFromSecretKeyRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SCaFileMountFromSecretKeyRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SCaFileMountFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#secret_key_ref DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SCaFileMountFromSecretKeyRef;
}

export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SCaFileMountFromToTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SCaFileMountFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_key_ref: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SCaFileMountFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SCaFileMountFromToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SCaFileMountFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_key_ref: {
      value: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SCaFileMountFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SCaFileMountFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SCaFileMountFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SCaFileMountFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SCaFileMountFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = value.secretKeyRef;
    }
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SCaFileMountFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SCaFileMountFromSecretKeyRef) {
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
export interface DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SCaFileValueFromSecretKeyRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#key DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#name DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#optional DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SCaFileValueFromSecretKeyRefToTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SCaFileValueFromSecretKeyRef | cdktf.IResolvable): any {
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


export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SCaFileValueFromSecretKeyRefToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SCaFileValueFromSecretKeyRef | cdktf.IResolvable): any {
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

export class DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SCaFileValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SCaFileValueFromSecretKeyRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SCaFileValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SCaFileValueFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#secret_key_ref DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SCaFileValueFromSecretKeyRef;
}

export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SCaFileValueFromToTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SCaFileValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_key_ref: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SCaFileValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SCaFileValueFromToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SCaFileValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_key_ref: {
      value: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SCaFileValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SCaFileValueFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SCaFileValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SCaFileValueFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SCaFileValueFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = value.secretKeyRef;
    }
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SCaFileValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SCaFileValueFromSecretKeyRef) {
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
export interface DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SCaFile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#mount_from DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#mount_from}
  */
  readonly mountFrom?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SCaFileMountFrom;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#value DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#value}
  */
  readonly value?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#value_from DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#value_from}
  */
  readonly valueFrom?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SCaFileValueFrom;
}

export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SCaFileToTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SCaFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mount_from: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SCaFileMountFromToTerraform(struct!.mountFrom),
    value: cdktf.stringToTerraform(struct!.value),
    value_from: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SCaFileValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SCaFileToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SCaFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mount_from: {
      value: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SCaFileMountFromToHclTerraform(struct!.mountFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SCaFileMountFrom",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_from: {
      value: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SCaFileValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SCaFileValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SCaFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SCaFile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mountFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountFrom = this._mountFrom?.internalValue;
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

  public set internalValue(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SCaFile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mountFrom.internalValue = undefined;
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
      this._mountFrom.internalValue = value.mountFrom;
      this._value = value.value;
      this._valueFrom.internalValue = value.valueFrom;
    }
  }

  // mount_from - computed: false, optional: true, required: false
  private _mountFrom = new DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SCaFileMountFromOutputReference(this, "mount_from");
  public get mountFrom() {
    return this._mountFrom;
  }
  public putMountFrom(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SCaFileMountFrom) {
    this._mountFrom.internalValue = value;
  }
  public resetMountFrom() {
    this._mountFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountFromInput() {
    return this._mountFrom.internalValue;
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
  private _valueFrom = new DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SCaFileValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SCaFileValueFrom) {
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
export interface DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientCertMountFromSecretKeyRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#key DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#name DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#optional DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientCertMountFromSecretKeyRefToTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientCertMountFromSecretKeyRef | cdktf.IResolvable): any {
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


export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientCertMountFromSecretKeyRefToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientCertMountFromSecretKeyRef | cdktf.IResolvable): any {
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

export class DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientCertMountFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientCertMountFromSecretKeyRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientCertMountFromSecretKeyRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientCertMountFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#secret_key_ref DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientCertMountFromSecretKeyRef;
}

export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientCertMountFromToTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientCertMountFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_key_ref: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientCertMountFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientCertMountFromToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientCertMountFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_key_ref: {
      value: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientCertMountFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientCertMountFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientCertMountFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientCertMountFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientCertMountFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = value.secretKeyRef;
    }
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientCertMountFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientCertMountFromSecretKeyRef) {
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
export interface DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientCertValueFromSecretKeyRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#key DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#name DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#optional DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientCertValueFromSecretKeyRefToTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientCertValueFromSecretKeyRef | cdktf.IResolvable): any {
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


export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientCertValueFromSecretKeyRefToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientCertValueFromSecretKeyRef | cdktf.IResolvable): any {
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

export class DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientCertValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientCertValueFromSecretKeyRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientCertValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientCertValueFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#secret_key_ref DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientCertValueFromSecretKeyRef;
}

export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientCertValueFromToTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientCertValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_key_ref: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientCertValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientCertValueFromToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientCertValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_key_ref: {
      value: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientCertValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientCertValueFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientCertValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientCertValueFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientCertValueFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = value.secretKeyRef;
    }
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientCertValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientCertValueFromSecretKeyRef) {
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
export interface DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientCert {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#mount_from DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#mount_from}
  */
  readonly mountFrom?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientCertMountFrom;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#value DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#value}
  */
  readonly value?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#value_from DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#value_from}
  */
  readonly valueFrom?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientCertValueFrom;
}

export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientCertToTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mount_from: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientCertMountFromToTerraform(struct!.mountFrom),
    value: cdktf.stringToTerraform(struct!.value),
    value_from: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientCertValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientCertToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mount_from: {
      value: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientCertMountFromToHclTerraform(struct!.mountFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientCertMountFrom",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_from: {
      value: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientCertValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientCertValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientCertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientCert | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mountFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountFrom = this._mountFrom?.internalValue;
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

  public set internalValue(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientCert | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mountFrom.internalValue = undefined;
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
      this._mountFrom.internalValue = value.mountFrom;
      this._value = value.value;
      this._valueFrom.internalValue = value.valueFrom;
    }
  }

  // mount_from - computed: false, optional: true, required: false
  private _mountFrom = new DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientCertMountFromOutputReference(this, "mount_from");
  public get mountFrom() {
    return this._mountFrom;
  }
  public putMountFrom(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientCertMountFrom) {
    this._mountFrom.internalValue = value;
  }
  public resetMountFrom() {
    this._mountFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountFromInput() {
    return this._mountFrom.internalValue;
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
  private _valueFrom = new DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientCertValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientCertValueFrom) {
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
export interface DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientKeyMountFromSecretKeyRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#key DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#name DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#optional DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientKeyMountFromSecretKeyRefToTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientKeyMountFromSecretKeyRef | cdktf.IResolvable): any {
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


export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientKeyMountFromSecretKeyRefToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientKeyMountFromSecretKeyRef | cdktf.IResolvable): any {
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

export class DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientKeyMountFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientKeyMountFromSecretKeyRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientKeyMountFromSecretKeyRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientKeyMountFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#secret_key_ref DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientKeyMountFromSecretKeyRef;
}

export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientKeyMountFromToTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientKeyMountFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_key_ref: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientKeyMountFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientKeyMountFromToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientKeyMountFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_key_ref: {
      value: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientKeyMountFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientKeyMountFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientKeyMountFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientKeyMountFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientKeyMountFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = value.secretKeyRef;
    }
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientKeyMountFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientKeyMountFromSecretKeyRef) {
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
export interface DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientKeyValueFromSecretKeyRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#key DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#name DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#optional DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientKeyValueFromSecretKeyRefToTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientKeyValueFromSecretKeyRef | cdktf.IResolvable): any {
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


export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientKeyValueFromSecretKeyRefToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientKeyValueFromSecretKeyRef | cdktf.IResolvable): any {
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

export class DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientKeyValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientKeyValueFromSecretKeyRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientKeyValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientKeyValueFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#secret_key_ref DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientKeyValueFromSecretKeyRef;
}

export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientKeyValueFromToTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientKeyValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_key_ref: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientKeyValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientKeyValueFromToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientKeyValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_key_ref: {
      value: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientKeyValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientKeyValueFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientKeyValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientKeyValueFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientKeyValueFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = value.secretKeyRef;
    }
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientKeyValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientKeyValueFromSecretKeyRef) {
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
export interface DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#mount_from DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#mount_from}
  */
  readonly mountFrom?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientKeyMountFrom;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#value DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#value}
  */
  readonly value?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#value_from DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#value_from}
  */
  readonly valueFrom?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientKeyValueFrom;
}

export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientKeyToTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mount_from: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientKeyMountFromToTerraform(struct!.mountFrom),
    value: cdktf.stringToTerraform(struct!.value),
    value_from: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientKeyValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientKeyToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mount_from: {
      value: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientKeyMountFromToHclTerraform(struct!.mountFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientKeyMountFrom",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_from: {
      value: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientKeyValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientKeyValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mountFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountFrom = this._mountFrom?.internalValue;
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

  public set internalValue(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mountFrom.internalValue = undefined;
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
      this._mountFrom.internalValue = value.mountFrom;
      this._value = value.value;
      this._valueFrom.internalValue = value.valueFrom;
    }
  }

  // mount_from - computed: false, optional: true, required: false
  private _mountFrom = new DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientKeyMountFromOutputReference(this, "mount_from");
  public get mountFrom() {
    return this._mountFrom;
  }
  public putMountFrom(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientKeyMountFrom) {
    this._mountFrom.internalValue = value;
  }
  public resetMountFrom() {
    this._mountFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountFromInput() {
    return this._mountFrom.internalValue;
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
  private _valueFrom = new DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientKeyValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientKeyValueFrom) {
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
export interface DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8S {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#api_groups DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#api_groups}
  */
  readonly apiGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#bearer_token_file DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#bearer_token_file}
  */
  readonly bearerTokenFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#ca_file DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#ca_file}
  */
  readonly caFile?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SCaFile;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#cache_refresh DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#cache_refresh}
  */
  readonly cacheRefresh?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#cache_refresh_variation DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#cache_refresh_variation}
  */
  readonly cacheRefreshVariation?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#cache_size DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#cache_size}
  */
  readonly cacheSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#cache_ttl DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#cache_ttl}
  */
  readonly cacheTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#client_cert DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#client_cert}
  */
  readonly clientCert?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientCert;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#client_key DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#client_key}
  */
  readonly clientKey?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientKey;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#core_api_versions DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#core_api_versions}
  */
  readonly coreApiVersions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#data_type DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#data_type}
  */
  readonly dataType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#in_namespace_path DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#in_namespace_path}
  */
  readonly inNamespacePath?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#in_pod_path DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#in_pod_path}
  */
  readonly inPodPath?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#kubernetes_url DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#kubernetes_url}
  */
  readonly kubernetesUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#secret_dir DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#secret_dir}
  */
  readonly secretDir?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#ssl_partial_chain DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#ssl_partial_chain}
  */
  readonly sslPartialChain?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#verify_ssl DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#verify_ssl}
  */
  readonly verifySsl?: boolean | cdktf.IResolvable;
}

export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SToTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8S | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.apiGroups),
    bearer_token_file: cdktf.stringToTerraform(struct!.bearerTokenFile),
    ca_file: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SCaFileToTerraform(struct!.caFile),
    cache_refresh: cdktf.numberToTerraform(struct!.cacheRefresh),
    cache_refresh_variation: cdktf.numberToTerraform(struct!.cacheRefreshVariation),
    cache_size: cdktf.numberToTerraform(struct!.cacheSize),
    cache_ttl: cdktf.numberToTerraform(struct!.cacheTtl),
    client_cert: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientCertToTerraform(struct!.clientCert),
    client_key: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientKeyToTerraform(struct!.clientKey),
    core_api_versions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.coreApiVersions),
    data_type: cdktf.stringToTerraform(struct!.dataType),
    in_namespace_path: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.inNamespacePath),
    in_pod_path: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.inPodPath),
    kubernetes_url: cdktf.stringToTerraform(struct!.kubernetesUrl),
    secret_dir: cdktf.stringToTerraform(struct!.secretDir),
    ssl_partial_chain: cdktf.booleanToTerraform(struct!.sslPartialChain),
    verify_ssl: cdktf.booleanToTerraform(struct!.verifySsl),
  }
}


export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8S | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.apiGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    bearer_token_file: {
      value: cdktf.stringToHclTerraform(struct!.bearerTokenFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ca_file: {
      value: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SCaFileToHclTerraform(struct!.caFile),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SCaFile",
    },
    cache_refresh: {
      value: cdktf.numberToHclTerraform(struct!.cacheRefresh),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cache_refresh_variation: {
      value: cdktf.numberToHclTerraform(struct!.cacheRefreshVariation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cache_size: {
      value: cdktf.numberToHclTerraform(struct!.cacheSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cache_ttl: {
      value: cdktf.numberToHclTerraform(struct!.cacheTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_cert: {
      value: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientCertToHclTerraform(struct!.clientCert),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientCert",
    },
    client_key: {
      value: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientKeyToHclTerraform(struct!.clientKey),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientKey",
    },
    core_api_versions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.coreApiVersions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    data_type: {
      value: cdktf.stringToHclTerraform(struct!.dataType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    in_namespace_path: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.inNamespacePath),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    in_pod_path: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.inPodPath),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    kubernetes_url: {
      value: cdktf.stringToHclTerraform(struct!.kubernetesUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_dir: {
      value: cdktf.stringToHclTerraform(struct!.secretDir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_partial_chain: {
      value: cdktf.booleanToHclTerraform(struct!.sslPartialChain),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    verify_ssl: {
      value: cdktf.booleanToHclTerraform(struct!.verifySsl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8S | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiGroups = this._apiGroups;
    }
    if (this._bearerTokenFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.bearerTokenFile = this._bearerTokenFile;
    }
    if (this._caFile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.caFile = this._caFile?.internalValue;
    }
    if (this._cacheRefresh !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheRefresh = this._cacheRefresh;
    }
    if (this._cacheRefreshVariation !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheRefreshVariation = this._cacheRefreshVariation;
    }
    if (this._cacheSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheSize = this._cacheSize;
    }
    if (this._cacheTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheTtl = this._cacheTtl;
    }
    if (this._clientCert?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCert = this._clientCert?.internalValue;
    }
    if (this._clientKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientKey = this._clientKey?.internalValue;
    }
    if (this._coreApiVersions !== undefined) {
      hasAnyValues = true;
      internalValueResult.coreApiVersions = this._coreApiVersions;
    }
    if (this._dataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataType = this._dataType;
    }
    if (this._inNamespacePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.inNamespacePath = this._inNamespacePath;
    }
    if (this._inPodPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.inPodPath = this._inPodPath;
    }
    if (this._kubernetesUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetesUrl = this._kubernetesUrl;
    }
    if (this._secretDir !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretDir = this._secretDir;
    }
    if (this._sslPartialChain !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslPartialChain = this._sslPartialChain;
    }
    if (this._verifySsl !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifySsl = this._verifySsl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8S | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiGroups = undefined;
      this._bearerTokenFile = undefined;
      this._caFile.internalValue = undefined;
      this._cacheRefresh = undefined;
      this._cacheRefreshVariation = undefined;
      this._cacheSize = undefined;
      this._cacheTtl = undefined;
      this._clientCert.internalValue = undefined;
      this._clientKey.internalValue = undefined;
      this._coreApiVersions = undefined;
      this._dataType = undefined;
      this._inNamespacePath = undefined;
      this._inPodPath = undefined;
      this._kubernetesUrl = undefined;
      this._secretDir = undefined;
      this._sslPartialChain = undefined;
      this._verifySsl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiGroups = value.apiGroups;
      this._bearerTokenFile = value.bearerTokenFile;
      this._caFile.internalValue = value.caFile;
      this._cacheRefresh = value.cacheRefresh;
      this._cacheRefreshVariation = value.cacheRefreshVariation;
      this._cacheSize = value.cacheSize;
      this._cacheTtl = value.cacheTtl;
      this._clientCert.internalValue = value.clientCert;
      this._clientKey.internalValue = value.clientKey;
      this._coreApiVersions = value.coreApiVersions;
      this._dataType = value.dataType;
      this._inNamespacePath = value.inNamespacePath;
      this._inPodPath = value.inPodPath;
      this._kubernetesUrl = value.kubernetesUrl;
      this._secretDir = value.secretDir;
      this._sslPartialChain = value.sslPartialChain;
      this._verifySsl = value.verifySsl;
    }
  }

  // api_groups - computed: false, optional: true, required: false
  private _apiGroups?: string[]; 
  public get apiGroups() {
    return this.getListAttribute('api_groups');
  }
  public set apiGroups(value: string[]) {
    this._apiGroups = value;
  }
  public resetApiGroups() {
    this._apiGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGroupsInput() {
    return this._apiGroups;
  }

  // bearer_token_file - computed: false, optional: true, required: false
  private _bearerTokenFile?: string; 
  public get bearerTokenFile() {
    return this.getStringAttribute('bearer_token_file');
  }
  public set bearerTokenFile(value: string) {
    this._bearerTokenFile = value;
  }
  public resetBearerTokenFile() {
    this._bearerTokenFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bearerTokenFileInput() {
    return this._bearerTokenFile;
  }

  // ca_file - computed: false, optional: true, required: false
  private _caFile = new DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SCaFileOutputReference(this, "ca_file");
  public get caFile() {
    return this._caFile;
  }
  public putCaFile(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SCaFile) {
    this._caFile.internalValue = value;
  }
  public resetCaFile() {
    this._caFile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caFileInput() {
    return this._caFile.internalValue;
  }

  // cache_refresh - computed: false, optional: true, required: false
  private _cacheRefresh?: number; 
  public get cacheRefresh() {
    return this.getNumberAttribute('cache_refresh');
  }
  public set cacheRefresh(value: number) {
    this._cacheRefresh = value;
  }
  public resetCacheRefresh() {
    this._cacheRefresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheRefreshInput() {
    return this._cacheRefresh;
  }

  // cache_refresh_variation - computed: false, optional: true, required: false
  private _cacheRefreshVariation?: number; 
  public get cacheRefreshVariation() {
    return this.getNumberAttribute('cache_refresh_variation');
  }
  public set cacheRefreshVariation(value: number) {
    this._cacheRefreshVariation = value;
  }
  public resetCacheRefreshVariation() {
    this._cacheRefreshVariation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheRefreshVariationInput() {
    return this._cacheRefreshVariation;
  }

  // cache_size - computed: false, optional: true, required: false
  private _cacheSize?: number; 
  public get cacheSize() {
    return this.getNumberAttribute('cache_size');
  }
  public set cacheSize(value: number) {
    this._cacheSize = value;
  }
  public resetCacheSize() {
    this._cacheSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheSizeInput() {
    return this._cacheSize;
  }

  // cache_ttl - computed: false, optional: true, required: false
  private _cacheTtl?: number; 
  public get cacheTtl() {
    return this.getNumberAttribute('cache_ttl');
  }
  public set cacheTtl(value: number) {
    this._cacheTtl = value;
  }
  public resetCacheTtl() {
    this._cacheTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheTtlInput() {
    return this._cacheTtl;
  }

  // client_cert - computed: false, optional: true, required: false
  private _clientCert = new DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientCertOutputReference(this, "client_cert");
  public get clientCert() {
    return this._clientCert;
  }
  public putClientCert(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientCert) {
    this._clientCert.internalValue = value;
  }
  public resetClientCert() {
    this._clientCert.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertInput() {
    return this._clientCert.internalValue;
  }

  // client_key - computed: false, optional: true, required: false
  private _clientKey = new DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientKeyOutputReference(this, "client_key");
  public get clientKey() {
    return this._clientKey;
  }
  public putClientKey(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SClientKey) {
    this._clientKey.internalValue = value;
  }
  public resetClientKey() {
    this._clientKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientKeyInput() {
    return this._clientKey.internalValue;
  }

  // core_api_versions - computed: false, optional: true, required: false
  private _coreApiVersions?: string[]; 
  public get coreApiVersions() {
    return this.getListAttribute('core_api_versions');
  }
  public set coreApiVersions(value: string[]) {
    this._coreApiVersions = value;
  }
  public resetCoreApiVersions() {
    this._coreApiVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coreApiVersionsInput() {
    return this._coreApiVersions;
  }

  // data_type - computed: false, optional: true, required: false
  private _dataType?: string; 
  public get dataType() {
    return this.getStringAttribute('data_type');
  }
  public set dataType(value: string) {
    this._dataType = value;
  }
  public resetDataType() {
    this._dataType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTypeInput() {
    return this._dataType;
  }

  // in_namespace_path - computed: false, optional: true, required: false
  private _inNamespacePath?: string[]; 
  public get inNamespacePath() {
    return this.getListAttribute('in_namespace_path');
  }
  public set inNamespacePath(value: string[]) {
    this._inNamespacePath = value;
  }
  public resetInNamespacePath() {
    this._inNamespacePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inNamespacePathInput() {
    return this._inNamespacePath;
  }

  // in_pod_path - computed: false, optional: true, required: false
  private _inPodPath?: string[]; 
  public get inPodPath() {
    return this.getListAttribute('in_pod_path');
  }
  public set inPodPath(value: string[]) {
    this._inPodPath = value;
  }
  public resetInPodPath() {
    this._inPodPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inPodPathInput() {
    return this._inPodPath;
  }

  // kubernetes_url - computed: false, optional: true, required: false
  private _kubernetesUrl?: string; 
  public get kubernetesUrl() {
    return this.getStringAttribute('kubernetes_url');
  }
  public set kubernetesUrl(value: string) {
    this._kubernetesUrl = value;
  }
  public resetKubernetesUrl() {
    this._kubernetesUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesUrlInput() {
    return this._kubernetesUrl;
  }

  // secret_dir - computed: false, optional: true, required: false
  private _secretDir?: string; 
  public get secretDir() {
    return this.getStringAttribute('secret_dir');
  }
  public set secretDir(value: string) {
    this._secretDir = value;
  }
  public resetSecretDir() {
    this._secretDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretDirInput() {
    return this._secretDir;
  }

  // ssl_partial_chain - computed: false, optional: true, required: false
  private _sslPartialChain?: boolean | cdktf.IResolvable; 
  public get sslPartialChain() {
    return this.getBooleanAttribute('ssl_partial_chain');
  }
  public set sslPartialChain(value: boolean | cdktf.IResolvable) {
    this._sslPartialChain = value;
  }
  public resetSslPartialChain() {
    this._sslPartialChain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslPartialChainInput() {
    return this._sslPartialChain;
  }

  // verify_ssl - computed: false, optional: true, required: false
  private _verifySsl?: boolean | cdktf.IResolvable; 
  public get verifySsl() {
    return this.getBooleanAttribute('verify_ssl');
  }
  public set verifySsl(value: boolean | cdktf.IResolvable) {
    this._verifySsl = value;
  }
  public resetVerifySsl() {
    this._verifySsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifySslInput() {
    return this._verifySsl;
  }
}
export interface DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGeoip {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#backend_library DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#backend_library}
  */
  readonly backendLibrary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#geoip2_database DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#geoip2_database}
  */
  readonly geoip2Database?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#geoip_database DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#geoip_database}
  */
  readonly geoipDatabase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#geoip_lookup_keys DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#geoip_lookup_keys}
  */
  readonly geoipLookupKeys?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#records DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#records}
  */
  readonly records?: { [key: string]: string }[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#skip_adding_null_record DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#skip_adding_null_record}
  */
  readonly skipAddingNullRecord?: boolean | cdktf.IResolvable;
}

export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGeoipToTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGeoip | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backend_library: cdktf.stringToTerraform(struct!.backendLibrary),
    geoip2_database: cdktf.stringToTerraform(struct!.geoip2Database),
    geoip_database: cdktf.stringToTerraform(struct!.geoipDatabase),
    geoip_lookup_keys: cdktf.stringToTerraform(struct!.geoipLookupKeys),
    records: cdktf.listMapper(cdktf.hashMapper(cdktf.stringToTerraform), false)(struct!.records),
    skip_adding_null_record: cdktf.booleanToTerraform(struct!.skipAddingNullRecord),
  }
}


export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGeoipToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGeoip | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backend_library: {
      value: cdktf.stringToHclTerraform(struct!.backendLibrary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    geoip2_database: {
      value: cdktf.stringToHclTerraform(struct!.geoip2Database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    geoip_database: {
      value: cdktf.stringToHclTerraform(struct!.geoipDatabase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    geoip_lookup_keys: {
      value: cdktf.stringToHclTerraform(struct!.geoipLookupKeys),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    records: {
      value: cdktf.listMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform), false)(struct!.records),
      isBlock: false,
      type: "list",
      storageClassType: "stringMapList",
    },
    skip_adding_null_record: {
      value: cdktf.booleanToHclTerraform(struct!.skipAddingNullRecord),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGeoipOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGeoip | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backendLibrary !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendLibrary = this._backendLibrary;
    }
    if (this._geoip2Database !== undefined) {
      hasAnyValues = true;
      internalValueResult.geoip2Database = this._geoip2Database;
    }
    if (this._geoipDatabase !== undefined) {
      hasAnyValues = true;
      internalValueResult.geoipDatabase = this._geoipDatabase;
    }
    if (this._geoipLookupKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.geoipLookupKeys = this._geoipLookupKeys;
    }
    if (this._records !== undefined) {
      hasAnyValues = true;
      internalValueResult.records = this._records;
    }
    if (this._skipAddingNullRecord !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipAddingNullRecord = this._skipAddingNullRecord;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGeoip | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backendLibrary = undefined;
      this._geoip2Database = undefined;
      this._geoipDatabase = undefined;
      this._geoipLookupKeys = undefined;
      this._records = undefined;
      this._skipAddingNullRecord = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backendLibrary = value.backendLibrary;
      this._geoip2Database = value.geoip2Database;
      this._geoipDatabase = value.geoipDatabase;
      this._geoipLookupKeys = value.geoipLookupKeys;
      this._records = value.records;
      this._skipAddingNullRecord = value.skipAddingNullRecord;
    }
  }

  // backend_library - computed: false, optional: true, required: false
  private _backendLibrary?: string; 
  public get backendLibrary() {
    return this.getStringAttribute('backend_library');
  }
  public set backendLibrary(value: string) {
    this._backendLibrary = value;
  }
  public resetBackendLibrary() {
    this._backendLibrary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendLibraryInput() {
    return this._backendLibrary;
  }

  // geoip2_database - computed: false, optional: true, required: false
  private _geoip2Database?: string; 
  public get geoip2Database() {
    return this.getStringAttribute('geoip2_database');
  }
  public set geoip2Database(value: string) {
    this._geoip2Database = value;
  }
  public resetGeoip2Database() {
    this._geoip2Database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoip2DatabaseInput() {
    return this._geoip2Database;
  }

  // geoip_database - computed: false, optional: true, required: false
  private _geoipDatabase?: string; 
  public get geoipDatabase() {
    return this.getStringAttribute('geoip_database');
  }
  public set geoipDatabase(value: string) {
    this._geoipDatabase = value;
  }
  public resetGeoipDatabase() {
    this._geoipDatabase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoipDatabaseInput() {
    return this._geoipDatabase;
  }

  // geoip_lookup_keys - computed: false, optional: true, required: false
  private _geoipLookupKeys?: string; 
  public get geoipLookupKeys() {
    return this.getStringAttribute('geoip_lookup_keys');
  }
  public set geoipLookupKeys(value: string) {
    this._geoipLookupKeys = value;
  }
  public resetGeoipLookupKeys() {
    this._geoipLookupKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoipLookupKeysInput() {
    return this._geoipLookupKeys;
  }

  // records - computed: false, optional: true, required: false
  private _records?: { [key: string]: string }[] | cdktf.IResolvable; 
  public get records() {
    return this.interpolationForAttribute('records');
  }
  public set records(value: { [key: string]: string }[] | cdktf.IResolvable) {
    this._records = value;
  }
  public resetRecords() {
    this._records = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordsInput() {
    return this._records;
  }

  // skip_adding_null_record - computed: false, optional: true, required: false
  private _skipAddingNullRecord?: boolean | cdktf.IResolvable; 
  public get skipAddingNullRecord() {
    return this.getBooleanAttribute('skip_adding_null_record');
  }
  public set skipAddingNullRecord(value: boolean | cdktf.IResolvable) {
    this._skipAddingNullRecord = value;
  }
  public resetSkipAddingNullRecord() {
    this._skipAddingNullRecord = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipAddingNullRecordInput() {
    return this._skipAddingNullRecord;
  }
}
export interface DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepAndExclude {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#key DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#pattern DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#pattern}
  */
  readonly pattern: string;
}

export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepAndExcludeToTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepAndExclude | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    pattern: cdktf.stringToTerraform(struct!.pattern),
  }
}


export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepAndExcludeToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepAndExclude | cdktf.IResolvable): any {
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
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepAndExcludeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepAndExclude | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepAndExclude | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._pattern = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._pattern = value.pattern;
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

  // pattern - computed: false, optional: false, required: true
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }
}

export class DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepAndExcludeList extends cdktf.ComplexList {
  public internalValue? : DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepAndExclude[] | cdktf.IResolvable

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
  public get(index: number): DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepAndExcludeOutputReference {
    return new DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepAndExcludeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepAndRegexp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#key DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#pattern DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#pattern}
  */
  readonly pattern: string;
}

export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepAndRegexpToTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepAndRegexp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    pattern: cdktf.stringToTerraform(struct!.pattern),
  }
}


export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepAndRegexpToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepAndRegexp | cdktf.IResolvable): any {
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
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepAndRegexpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepAndRegexp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepAndRegexp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._pattern = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._pattern = value.pattern;
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

  // pattern - computed: false, optional: false, required: true
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }
}

export class DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepAndRegexpList extends cdktf.ComplexList {
  public internalValue? : DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepAndRegexp[] | cdktf.IResolvable

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
  public get(index: number): DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepAndRegexpOutputReference {
    return new DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepAndRegexpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepAnd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#exclude DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#exclude}
  */
  readonly exclude?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepAndExclude[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#regexp DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#regexp}
  */
  readonly regexp?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepAndRegexp[] | cdktf.IResolvable;
}

export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepAndToTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepAnd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude: cdktf.listMapper(dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepAndExcludeToTerraform, false)(struct!.exclude),
    regexp: cdktf.listMapper(dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepAndRegexpToTerraform, false)(struct!.regexp),
  }
}


export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepAndToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepAnd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude: {
      value: cdktf.listMapperHcl(dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepAndExcludeToHclTerraform, false)(struct!.exclude),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepAndExcludeList",
    },
    regexp: {
      value: cdktf.listMapperHcl(dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepAndRegexpToHclTerraform, false)(struct!.regexp),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepAndRegexpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepAndOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepAnd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exclude?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclude = this._exclude?.internalValue;
    }
    if (this._regexp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexp = this._regexp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepAnd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exclude.internalValue = undefined;
      this._regexp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exclude.internalValue = value.exclude;
      this._regexp.internalValue = value.regexp;
    }
  }

  // exclude - computed: false, optional: true, required: false
  private _exclude = new DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepAndExcludeList(this, "exclude", false);
  public get exclude() {
    return this._exclude;
  }
  public putExclude(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepAndExclude[] | cdktf.IResolvable) {
    this._exclude.internalValue = value;
  }
  public resetExclude() {
    this._exclude.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude.internalValue;
  }

  // regexp - computed: false, optional: true, required: false
  private _regexp = new DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepAndRegexpList(this, "regexp", false);
  public get regexp() {
    return this._regexp;
  }
  public putRegexp(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepAndRegexp[] | cdktf.IResolvable) {
    this._regexp.internalValue = value;
  }
  public resetRegexp() {
    this._regexp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexpInput() {
    return this._regexp.internalValue;
  }
}

export class DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepAndList extends cdktf.ComplexList {
  public internalValue? : DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepAnd[] | cdktf.IResolvable

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
  public get(index: number): DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepAndOutputReference {
    return new DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepAndOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepExclude {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#key DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#pattern DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#pattern}
  */
  readonly pattern: string;
}

export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepExcludeToTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepExclude | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    pattern: cdktf.stringToTerraform(struct!.pattern),
  }
}


export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepExcludeToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepExclude | cdktf.IResolvable): any {
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
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepExcludeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepExclude | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepExclude | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._pattern = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._pattern = value.pattern;
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

  // pattern - computed: false, optional: false, required: true
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }
}

export class DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepExcludeList extends cdktf.ComplexList {
  public internalValue? : DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepExclude[] | cdktf.IResolvable

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
  public get(index: number): DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepExcludeOutputReference {
    return new DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepExcludeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepOrExclude {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#key DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#pattern DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#pattern}
  */
  readonly pattern: string;
}

export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepOrExcludeToTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepOrExclude | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    pattern: cdktf.stringToTerraform(struct!.pattern),
  }
}


export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepOrExcludeToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepOrExclude | cdktf.IResolvable): any {
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
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepOrExcludeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepOrExclude | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepOrExclude | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._pattern = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._pattern = value.pattern;
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

  // pattern - computed: false, optional: false, required: true
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }
}

export class DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepOrExcludeList extends cdktf.ComplexList {
  public internalValue? : DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepOrExclude[] | cdktf.IResolvable

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
  public get(index: number): DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepOrExcludeOutputReference {
    return new DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepOrExcludeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepOrRegexp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#key DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#pattern DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#pattern}
  */
  readonly pattern: string;
}

export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepOrRegexpToTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepOrRegexp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    pattern: cdktf.stringToTerraform(struct!.pattern),
  }
}


export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepOrRegexpToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepOrRegexp | cdktf.IResolvable): any {
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
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepOrRegexpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepOrRegexp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepOrRegexp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._pattern = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._pattern = value.pattern;
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

  // pattern - computed: false, optional: false, required: true
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }
}

export class DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepOrRegexpList extends cdktf.ComplexList {
  public internalValue? : DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepOrRegexp[] | cdktf.IResolvable

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
  public get(index: number): DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepOrRegexpOutputReference {
    return new DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepOrRegexpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepOr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#exclude DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#exclude}
  */
  readonly exclude?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepOrExclude[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#regexp DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#regexp}
  */
  readonly regexp?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepOrRegexp[] | cdktf.IResolvable;
}

export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepOrToTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepOr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude: cdktf.listMapper(dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepOrExcludeToTerraform, false)(struct!.exclude),
    regexp: cdktf.listMapper(dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepOrRegexpToTerraform, false)(struct!.regexp),
  }
}


export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepOrToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepOr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude: {
      value: cdktf.listMapperHcl(dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepOrExcludeToHclTerraform, false)(struct!.exclude),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepOrExcludeList",
    },
    regexp: {
      value: cdktf.listMapperHcl(dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepOrRegexpToHclTerraform, false)(struct!.regexp),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepOrRegexpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepOrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepOr | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exclude?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclude = this._exclude?.internalValue;
    }
    if (this._regexp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexp = this._regexp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepOr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exclude.internalValue = undefined;
      this._regexp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exclude.internalValue = value.exclude;
      this._regexp.internalValue = value.regexp;
    }
  }

  // exclude - computed: false, optional: true, required: false
  private _exclude = new DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepOrExcludeList(this, "exclude", false);
  public get exclude() {
    return this._exclude;
  }
  public putExclude(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepOrExclude[] | cdktf.IResolvable) {
    this._exclude.internalValue = value;
  }
  public resetExclude() {
    this._exclude.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude.internalValue;
  }

  // regexp - computed: false, optional: true, required: false
  private _regexp = new DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepOrRegexpList(this, "regexp", false);
  public get regexp() {
    return this._regexp;
  }
  public putRegexp(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepOrRegexp[] | cdktf.IResolvable) {
    this._regexp.internalValue = value;
  }
  public resetRegexp() {
    this._regexp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexpInput() {
    return this._regexp.internalValue;
  }
}

export class DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepOrList extends cdktf.ComplexList {
  public internalValue? : DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepOr[] | cdktf.IResolvable

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
  public get(index: number): DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepOrOutputReference {
    return new DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepOrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepRegexp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#key DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#pattern DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#pattern}
  */
  readonly pattern: string;
}

export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepRegexpToTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepRegexp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    pattern: cdktf.stringToTerraform(struct!.pattern),
  }
}


export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepRegexpToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepRegexp | cdktf.IResolvable): any {
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
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepRegexpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepRegexp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepRegexp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._pattern = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._pattern = value.pattern;
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

  // pattern - computed: false, optional: false, required: true
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }
}

export class DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepRegexpList extends cdktf.ComplexList {
  public internalValue? : DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepRegexp[] | cdktf.IResolvable

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
  public get(index: number): DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepRegexpOutputReference {
    return new DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepRegexpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrep {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#and DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#and}
  */
  readonly and?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepAnd[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#exclude DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#exclude}
  */
  readonly exclude?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepExclude[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#or DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#or}
  */
  readonly or?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepOr[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#regexp DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#regexp}
  */
  readonly regexp?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepRegexp[] | cdktf.IResolvable;
}

export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepToTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrep | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    and: cdktf.listMapper(dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepAndToTerraform, false)(struct!.and),
    exclude: cdktf.listMapper(dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepExcludeToTerraform, false)(struct!.exclude),
    or: cdktf.listMapper(dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepOrToTerraform, false)(struct!.or),
    regexp: cdktf.listMapper(dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepRegexpToTerraform, false)(struct!.regexp),
  }
}


export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrep | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    and: {
      value: cdktf.listMapperHcl(dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepAndToHclTerraform, false)(struct!.and),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepAndList",
    },
    exclude: {
      value: cdktf.listMapperHcl(dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepExcludeToHclTerraform, false)(struct!.exclude),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepExcludeList",
    },
    or: {
      value: cdktf.listMapperHcl(dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepOrToHclTerraform, false)(struct!.or),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepOrList",
    },
    regexp: {
      value: cdktf.listMapperHcl(dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepRegexpToHclTerraform, false)(struct!.regexp),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepRegexpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrep | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._and?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.and = this._and?.internalValue;
    }
    if (this._exclude?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclude = this._exclude?.internalValue;
    }
    if (this._or?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.or = this._or?.internalValue;
    }
    if (this._regexp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexp = this._regexp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrep | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._and.internalValue = undefined;
      this._exclude.internalValue = undefined;
      this._or.internalValue = undefined;
      this._regexp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._and.internalValue = value.and;
      this._exclude.internalValue = value.exclude;
      this._or.internalValue = value.or;
      this._regexp.internalValue = value.regexp;
    }
  }

  // and - computed: false, optional: true, required: false
  private _and = new DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepAndList(this, "and", false);
  public get and() {
    return this._and;
  }
  public putAnd(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepAnd[] | cdktf.IResolvable) {
    this._and.internalValue = value;
  }
  public resetAnd() {
    this._and.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get andInput() {
    return this._and.internalValue;
  }

  // exclude - computed: false, optional: true, required: false
  private _exclude = new DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepExcludeList(this, "exclude", false);
  public get exclude() {
    return this._exclude;
  }
  public putExclude(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepExclude[] | cdktf.IResolvable) {
    this._exclude.internalValue = value;
  }
  public resetExclude() {
    this._exclude.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude.internalValue;
  }

  // or - computed: false, optional: true, required: false
  private _or = new DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepOrList(this, "or", false);
  public get or() {
    return this._or;
  }
  public putOr(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepOr[] | cdktf.IResolvable) {
    this._or.internalValue = value;
  }
  public resetOr() {
    this._or.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orInput() {
    return this._or.internalValue;
  }

  // regexp - computed: false, optional: true, required: false
  private _regexp = new DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepRegexpList(this, "regexp", false);
  public get regexp() {
    return this._regexp;
  }
  public putRegexp(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepRegexp[] | cdktf.IResolvable) {
    this._regexp.internalValue = value;
  }
  public resetRegexp() {
    this._regexp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexpInput() {
    return this._regexp.internalValue;
  }
}
export interface DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersKubeEventsTimestamp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#mapped_time_key DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#mapped_time_key}
  */
  readonly mappedTimeKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#timestamp_fields DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#timestamp_fields}
  */
  readonly timestampFields?: string[];
}

export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersKubeEventsTimestampToTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersKubeEventsTimestamp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mapped_time_key: cdktf.stringToTerraform(struct!.mappedTimeKey),
    timestamp_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.timestampFields),
  }
}


export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersKubeEventsTimestampToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersKubeEventsTimestamp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mapped_time_key: {
      value: cdktf.stringToHclTerraform(struct!.mappedTimeKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timestamp_fields: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.timestampFields),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersKubeEventsTimestampOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersKubeEventsTimestamp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mappedTimeKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.mappedTimeKey = this._mappedTimeKey;
    }
    if (this._timestampFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestampFields = this._timestampFields;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersKubeEventsTimestamp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mappedTimeKey = undefined;
      this._timestampFields = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mappedTimeKey = value.mappedTimeKey;
      this._timestampFields = value.timestampFields;
    }
  }

  // mapped_time_key - computed: false, optional: true, required: false
  private _mappedTimeKey?: string; 
  public get mappedTimeKey() {
    return this.getStringAttribute('mapped_time_key');
  }
  public set mappedTimeKey(value: string) {
    this._mappedTimeKey = value;
  }
  public resetMappedTimeKey() {
    this._mappedTimeKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappedTimeKeyInput() {
    return this._mappedTimeKey;
  }

  // timestamp_fields - computed: false, optional: true, required: false
  private _timestampFields?: string[]; 
  public get timestampFields() {
    return this.getListAttribute('timestamp_fields');
  }
  public set timestampFields(value: string[]) {
    this._timestampFields = value;
  }
  public resetTimestampFields() {
    this._timestampFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampFieldsInput() {
    return this._timestampFields;
  }
}
export interface DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParseCustomPatternPathMountFromSecretKeyRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#key DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#name DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#optional DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParseCustomPatternPathMountFromSecretKeyRefToTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParseCustomPatternPathMountFromSecretKeyRef | cdktf.IResolvable): any {
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


export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParseCustomPatternPathMountFromSecretKeyRefToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParseCustomPatternPathMountFromSecretKeyRef | cdktf.IResolvable): any {
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

export class DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParseCustomPatternPathMountFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParseCustomPatternPathMountFromSecretKeyRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParseCustomPatternPathMountFromSecretKeyRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParseCustomPatternPathMountFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#secret_key_ref DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParseCustomPatternPathMountFromSecretKeyRef;
}

export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParseCustomPatternPathMountFromToTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParseCustomPatternPathMountFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_key_ref: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParseCustomPatternPathMountFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParseCustomPatternPathMountFromToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParseCustomPatternPathMountFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_key_ref: {
      value: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParseCustomPatternPathMountFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParseCustomPatternPathMountFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParseCustomPatternPathMountFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParseCustomPatternPathMountFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParseCustomPatternPathMountFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = value.secretKeyRef;
    }
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParseCustomPatternPathMountFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParseCustomPatternPathMountFromSecretKeyRef) {
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
export interface DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParseCustomPatternPathValueFromSecretKeyRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#key DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#name DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#optional DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParseCustomPatternPathValueFromSecretKeyRefToTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParseCustomPatternPathValueFromSecretKeyRef | cdktf.IResolvable): any {
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


export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParseCustomPatternPathValueFromSecretKeyRefToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParseCustomPatternPathValueFromSecretKeyRef | cdktf.IResolvable): any {
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

export class DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParseCustomPatternPathValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParseCustomPatternPathValueFromSecretKeyRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParseCustomPatternPathValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParseCustomPatternPathValueFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#secret_key_ref DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParseCustomPatternPathValueFromSecretKeyRef;
}

export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParseCustomPatternPathValueFromToTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParseCustomPatternPathValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_key_ref: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParseCustomPatternPathValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParseCustomPatternPathValueFromToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParseCustomPatternPathValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_key_ref: {
      value: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParseCustomPatternPathValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParseCustomPatternPathValueFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParseCustomPatternPathValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParseCustomPatternPathValueFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParseCustomPatternPathValueFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = value.secretKeyRef;
    }
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParseCustomPatternPathValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParseCustomPatternPathValueFromSecretKeyRef) {
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
export interface DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParseCustomPatternPath {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#mount_from DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#mount_from}
  */
  readonly mountFrom?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParseCustomPatternPathMountFrom;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#value DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#value}
  */
  readonly value?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#value_from DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#value_from}
  */
  readonly valueFrom?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParseCustomPatternPathValueFrom;
}

export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParseCustomPatternPathToTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParseCustomPatternPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mount_from: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParseCustomPatternPathMountFromToTerraform(struct!.mountFrom),
    value: cdktf.stringToTerraform(struct!.value),
    value_from: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParseCustomPatternPathValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParseCustomPatternPathToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParseCustomPatternPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mount_from: {
      value: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParseCustomPatternPathMountFromToHclTerraform(struct!.mountFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParseCustomPatternPathMountFrom",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_from: {
      value: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParseCustomPatternPathValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParseCustomPatternPathValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParseCustomPatternPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParseCustomPatternPath | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mountFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountFrom = this._mountFrom?.internalValue;
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

  public set internalValue(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParseCustomPatternPath | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mountFrom.internalValue = undefined;
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
      this._mountFrom.internalValue = value.mountFrom;
      this._value = value.value;
      this._valueFrom.internalValue = value.valueFrom;
    }
  }

  // mount_from - computed: false, optional: true, required: false
  private _mountFrom = new DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParseCustomPatternPathMountFromOutputReference(this, "mount_from");
  public get mountFrom() {
    return this._mountFrom;
  }
  public putMountFrom(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParseCustomPatternPathMountFrom) {
    this._mountFrom.internalValue = value;
  }
  public resetMountFrom() {
    this._mountFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountFromInput() {
    return this._mountFrom.internalValue;
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
  private _valueFrom = new DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParseCustomPatternPathValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParseCustomPatternPathValueFrom) {
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
export interface DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParseGrokPatterns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#keep_time_key DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#keep_time_key}
  */
  readonly keepTimeKey?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#name DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#pattern DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#pattern}
  */
  readonly pattern: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#time_format DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#time_format}
  */
  readonly timeFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#time_key DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#time_key}
  */
  readonly timeKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#timezone DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#timezone}
  */
  readonly timezone?: string;
}

export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParseGrokPatternsToTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParseGrokPatterns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    keep_time_key: cdktf.booleanToTerraform(struct!.keepTimeKey),
    name: cdktf.stringToTerraform(struct!.name),
    pattern: cdktf.stringToTerraform(struct!.pattern),
    time_format: cdktf.stringToTerraform(struct!.timeFormat),
    time_key: cdktf.stringToTerraform(struct!.timeKey),
    timezone: cdktf.stringToTerraform(struct!.timezone),
  }
}


export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParseGrokPatternsToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParseGrokPatterns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    keep_time_key: {
      value: cdktf.booleanToHclTerraform(struct!.keepTimeKey),
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
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_format: {
      value: cdktf.stringToHclTerraform(struct!.timeFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_key: {
      value: cdktf.stringToHclTerraform(struct!.timeKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timezone: {
      value: cdktf.stringToHclTerraform(struct!.timezone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParseGrokPatternsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParseGrokPatterns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keepTimeKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepTimeKey = this._keepTimeKey;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    if (this._timeFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeFormat = this._timeFormat;
    }
    if (this._timeKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeKey = this._timeKey;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParseGrokPatterns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keepTimeKey = undefined;
      this._name = undefined;
      this._pattern = undefined;
      this._timeFormat = undefined;
      this._timeKey = undefined;
      this._timezone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keepTimeKey = value.keepTimeKey;
      this._name = value.name;
      this._pattern = value.pattern;
      this._timeFormat = value.timeFormat;
      this._timeKey = value.timeKey;
      this._timezone = value.timezone;
    }
  }

  // keep_time_key - computed: false, optional: true, required: false
  private _keepTimeKey?: boolean | cdktf.IResolvable; 
  public get keepTimeKey() {
    return this.getBooleanAttribute('keep_time_key');
  }
  public set keepTimeKey(value: boolean | cdktf.IResolvable) {
    this._keepTimeKey = value;
  }
  public resetKeepTimeKey() {
    this._keepTimeKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepTimeKeyInput() {
    return this._keepTimeKey;
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

  // pattern - computed: false, optional: false, required: true
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }

  // time_format - computed: false, optional: true, required: false
  private _timeFormat?: string; 
  public get timeFormat() {
    return this.getStringAttribute('time_format');
  }
  public set timeFormat(value: string) {
    this._timeFormat = value;
  }
  public resetTimeFormat() {
    this._timeFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeFormatInput() {
    return this._timeFormat;
  }

  // time_key - computed: false, optional: true, required: false
  private _timeKey?: string; 
  public get timeKey() {
    return this.getStringAttribute('time_key');
  }
  public set timeKey(value: string) {
    this._timeKey = value;
  }
  public resetTimeKey() {
    this._timeKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeKeyInput() {
    return this._timeKey;
  }

  // timezone - computed: false, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }
}

export class DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParseGrokPatternsList extends cdktf.ComplexList {
  public internalValue? : DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParseGrokPatterns[] | cdktf.IResolvable

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
  public get(index: number): DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParseGrokPatternsOutputReference {
    return new DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParseGrokPatternsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsePatternsCustomPatternPathMountFromSecretKeyRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#key DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#name DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#optional DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsePatternsCustomPatternPathMountFromSecretKeyRefToTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsePatternsCustomPatternPathMountFromSecretKeyRef | cdktf.IResolvable): any {
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


export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsePatternsCustomPatternPathMountFromSecretKeyRefToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsePatternsCustomPatternPathMountFromSecretKeyRef | cdktf.IResolvable): any {
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

export class DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsePatternsCustomPatternPathMountFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsePatternsCustomPatternPathMountFromSecretKeyRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsePatternsCustomPatternPathMountFromSecretKeyRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsePatternsCustomPatternPathMountFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#secret_key_ref DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsePatternsCustomPatternPathMountFromSecretKeyRef;
}

export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsePatternsCustomPatternPathMountFromToTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsePatternsCustomPatternPathMountFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_key_ref: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsePatternsCustomPatternPathMountFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsePatternsCustomPatternPathMountFromToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsePatternsCustomPatternPathMountFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_key_ref: {
      value: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsePatternsCustomPatternPathMountFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsePatternsCustomPatternPathMountFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsePatternsCustomPatternPathMountFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsePatternsCustomPatternPathMountFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsePatternsCustomPatternPathMountFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = value.secretKeyRef;
    }
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsePatternsCustomPatternPathMountFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsePatternsCustomPatternPathMountFromSecretKeyRef) {
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
export interface DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsePatternsCustomPatternPathValueFromSecretKeyRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#key DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#name DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#optional DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsePatternsCustomPatternPathValueFromSecretKeyRefToTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsePatternsCustomPatternPathValueFromSecretKeyRef | cdktf.IResolvable): any {
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


export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsePatternsCustomPatternPathValueFromSecretKeyRefToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsePatternsCustomPatternPathValueFromSecretKeyRef | cdktf.IResolvable): any {
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

export class DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsePatternsCustomPatternPathValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsePatternsCustomPatternPathValueFromSecretKeyRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsePatternsCustomPatternPathValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsePatternsCustomPatternPathValueFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#secret_key_ref DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsePatternsCustomPatternPathValueFromSecretKeyRef;
}

export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsePatternsCustomPatternPathValueFromToTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsePatternsCustomPatternPathValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_key_ref: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsePatternsCustomPatternPathValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsePatternsCustomPatternPathValueFromToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsePatternsCustomPatternPathValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_key_ref: {
      value: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsePatternsCustomPatternPathValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsePatternsCustomPatternPathValueFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsePatternsCustomPatternPathValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsePatternsCustomPatternPathValueFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsePatternsCustomPatternPathValueFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = value.secretKeyRef;
    }
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsePatternsCustomPatternPathValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsePatternsCustomPatternPathValueFromSecretKeyRef) {
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
export interface DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsePatternsCustomPatternPath {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#mount_from DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#mount_from}
  */
  readonly mountFrom?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsePatternsCustomPatternPathMountFrom;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#value DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#value}
  */
  readonly value?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#value_from DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#value_from}
  */
  readonly valueFrom?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsePatternsCustomPatternPathValueFrom;
}

export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsePatternsCustomPatternPathToTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsePatternsCustomPatternPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mount_from: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsePatternsCustomPatternPathMountFromToTerraform(struct!.mountFrom),
    value: cdktf.stringToTerraform(struct!.value),
    value_from: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsePatternsCustomPatternPathValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsePatternsCustomPatternPathToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsePatternsCustomPatternPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mount_from: {
      value: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsePatternsCustomPatternPathMountFromToHclTerraform(struct!.mountFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsePatternsCustomPatternPathMountFrom",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_from: {
      value: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsePatternsCustomPatternPathValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsePatternsCustomPatternPathValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsePatternsCustomPatternPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsePatternsCustomPatternPath | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mountFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountFrom = this._mountFrom?.internalValue;
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

  public set internalValue(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsePatternsCustomPatternPath | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mountFrom.internalValue = undefined;
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
      this._mountFrom.internalValue = value.mountFrom;
      this._value = value.value;
      this._valueFrom.internalValue = value.valueFrom;
    }
  }

  // mount_from - computed: false, optional: true, required: false
  private _mountFrom = new DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsePatternsCustomPatternPathMountFromOutputReference(this, "mount_from");
  public get mountFrom() {
    return this._mountFrom;
  }
  public putMountFrom(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsePatternsCustomPatternPathMountFrom) {
    this._mountFrom.internalValue = value;
  }
  public resetMountFrom() {
    this._mountFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountFromInput() {
    return this._mountFrom.internalValue;
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
  private _valueFrom = new DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsePatternsCustomPatternPathValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsePatternsCustomPatternPathValueFrom) {
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
export interface DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsePatternsGrokPatterns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#keep_time_key DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#keep_time_key}
  */
  readonly keepTimeKey?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#name DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#pattern DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#pattern}
  */
  readonly pattern: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#time_format DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#time_format}
  */
  readonly timeFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#time_key DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#time_key}
  */
  readonly timeKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#timezone DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#timezone}
  */
  readonly timezone?: string;
}

export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsePatternsGrokPatternsToTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsePatternsGrokPatterns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    keep_time_key: cdktf.booleanToTerraform(struct!.keepTimeKey),
    name: cdktf.stringToTerraform(struct!.name),
    pattern: cdktf.stringToTerraform(struct!.pattern),
    time_format: cdktf.stringToTerraform(struct!.timeFormat),
    time_key: cdktf.stringToTerraform(struct!.timeKey),
    timezone: cdktf.stringToTerraform(struct!.timezone),
  }
}


export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsePatternsGrokPatternsToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsePatternsGrokPatterns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    keep_time_key: {
      value: cdktf.booleanToHclTerraform(struct!.keepTimeKey),
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
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_format: {
      value: cdktf.stringToHclTerraform(struct!.timeFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_key: {
      value: cdktf.stringToHclTerraform(struct!.timeKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timezone: {
      value: cdktf.stringToHclTerraform(struct!.timezone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsePatternsGrokPatternsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsePatternsGrokPatterns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keepTimeKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepTimeKey = this._keepTimeKey;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    if (this._timeFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeFormat = this._timeFormat;
    }
    if (this._timeKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeKey = this._timeKey;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsePatternsGrokPatterns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keepTimeKey = undefined;
      this._name = undefined;
      this._pattern = undefined;
      this._timeFormat = undefined;
      this._timeKey = undefined;
      this._timezone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keepTimeKey = value.keepTimeKey;
      this._name = value.name;
      this._pattern = value.pattern;
      this._timeFormat = value.timeFormat;
      this._timeKey = value.timeKey;
      this._timezone = value.timezone;
    }
  }

  // keep_time_key - computed: false, optional: true, required: false
  private _keepTimeKey?: boolean | cdktf.IResolvable; 
  public get keepTimeKey() {
    return this.getBooleanAttribute('keep_time_key');
  }
  public set keepTimeKey(value: boolean | cdktf.IResolvable) {
    this._keepTimeKey = value;
  }
  public resetKeepTimeKey() {
    this._keepTimeKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepTimeKeyInput() {
    return this._keepTimeKey;
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

  // pattern - computed: false, optional: false, required: true
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }

  // time_format - computed: false, optional: true, required: false
  private _timeFormat?: string; 
  public get timeFormat() {
    return this.getStringAttribute('time_format');
  }
  public set timeFormat(value: string) {
    this._timeFormat = value;
  }
  public resetTimeFormat() {
    this._timeFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeFormatInput() {
    return this._timeFormat;
  }

  // time_key - computed: false, optional: true, required: false
  private _timeKey?: string; 
  public get timeKey() {
    return this.getStringAttribute('time_key');
  }
  public set timeKey(value: string) {
    this._timeKey = value;
  }
  public resetTimeKey() {
    this._timeKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeKeyInput() {
    return this._timeKey;
  }

  // timezone - computed: false, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }
}

export class DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsePatternsGrokPatternsList extends cdktf.ComplexList {
  public internalValue? : DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsePatternsGrokPatterns[] | cdktf.IResolvable

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
  public get(index: number): DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsePatternsGrokPatternsOutputReference {
    return new DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsePatternsGrokPatternsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsePatterns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#custom_pattern_path DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#custom_pattern_path}
  */
  readonly customPatternPath?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsePatternsCustomPatternPath;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#estimate_current_event DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#estimate_current_event}
  */
  readonly estimateCurrentEvent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#expression DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#expression}
  */
  readonly expression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#format DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#grok_failure_key DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#grok_failure_key}
  */
  readonly grokFailureKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#grok_name_key DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#grok_name_key}
  */
  readonly grokNameKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#grok_pattern DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#grok_pattern}
  */
  readonly grokPattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#grok_patterns DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#grok_patterns}
  */
  readonly grokPatterns?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsePatternsGrokPatterns[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#keep_time_key DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#keep_time_key}
  */
  readonly keepTimeKey?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#local_time DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#local_time}
  */
  readonly localTime?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#multiline_start_regexp DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#multiline_start_regexp}
  */
  readonly multilineStartRegexp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#null_empty_string DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#null_empty_string}
  */
  readonly nullEmptyString?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#null_value_pattern DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#null_value_pattern}
  */
  readonly nullValuePattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#time_format DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#time_format}
  */
  readonly timeFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#time_key DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#time_key}
  */
  readonly timeKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#time_type DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#time_type}
  */
  readonly timeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#timezone DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#timezone}
  */
  readonly timezone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#type DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#types DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#types}
  */
  readonly types?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#utc DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#utc}
  */
  readonly utc?: boolean | cdktf.IResolvable;
}

export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsePatternsToTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsePatterns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_pattern_path: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsePatternsCustomPatternPathToTerraform(struct!.customPatternPath),
    estimate_current_event: cdktf.booleanToTerraform(struct!.estimateCurrentEvent),
    expression: cdktf.stringToTerraform(struct!.expression),
    format: cdktf.stringToTerraform(struct!.format),
    grok_failure_key: cdktf.stringToTerraform(struct!.grokFailureKey),
    grok_name_key: cdktf.stringToTerraform(struct!.grokNameKey),
    grok_pattern: cdktf.stringToTerraform(struct!.grokPattern),
    grok_patterns: cdktf.listMapper(dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsePatternsGrokPatternsToTerraform, false)(struct!.grokPatterns),
    keep_time_key: cdktf.booleanToTerraform(struct!.keepTimeKey),
    local_time: cdktf.booleanToTerraform(struct!.localTime),
    multiline_start_regexp: cdktf.stringToTerraform(struct!.multilineStartRegexp),
    null_empty_string: cdktf.booleanToTerraform(struct!.nullEmptyString),
    null_value_pattern: cdktf.stringToTerraform(struct!.nullValuePattern),
    time_format: cdktf.stringToTerraform(struct!.timeFormat),
    time_key: cdktf.stringToTerraform(struct!.timeKey),
    time_type: cdktf.stringToTerraform(struct!.timeType),
    timezone: cdktf.stringToTerraform(struct!.timezone),
    type: cdktf.stringToTerraform(struct!.type),
    types: cdktf.stringToTerraform(struct!.types),
    utc: cdktf.booleanToTerraform(struct!.utc),
  }
}


export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsePatternsToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsePatterns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_pattern_path: {
      value: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsePatternsCustomPatternPathToHclTerraform(struct!.customPatternPath),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsePatternsCustomPatternPath",
    },
    estimate_current_event: {
      value: cdktf.booleanToHclTerraform(struct!.estimateCurrentEvent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grok_failure_key: {
      value: cdktf.stringToHclTerraform(struct!.grokFailureKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grok_name_key: {
      value: cdktf.stringToHclTerraform(struct!.grokNameKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grok_pattern: {
      value: cdktf.stringToHclTerraform(struct!.grokPattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grok_patterns: {
      value: cdktf.listMapperHcl(dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsePatternsGrokPatternsToHclTerraform, false)(struct!.grokPatterns),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsePatternsGrokPatternsList",
    },
    keep_time_key: {
      value: cdktf.booleanToHclTerraform(struct!.keepTimeKey),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    local_time: {
      value: cdktf.booleanToHclTerraform(struct!.localTime),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    multiline_start_regexp: {
      value: cdktf.stringToHclTerraform(struct!.multilineStartRegexp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    null_empty_string: {
      value: cdktf.booleanToHclTerraform(struct!.nullEmptyString),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    null_value_pattern: {
      value: cdktf.stringToHclTerraform(struct!.nullValuePattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_format: {
      value: cdktf.stringToHclTerraform(struct!.timeFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_key: {
      value: cdktf.stringToHclTerraform(struct!.timeKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_type: {
      value: cdktf.stringToHclTerraform(struct!.timeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timezone: {
      value: cdktf.stringToHclTerraform(struct!.timezone),
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
    types: {
      value: cdktf.stringToHclTerraform(struct!.types),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    utc: {
      value: cdktf.booleanToHclTerraform(struct!.utc),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsePatternsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsePatterns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customPatternPath?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPatternPath = this._customPatternPath?.internalValue;
    }
    if (this._estimateCurrentEvent !== undefined) {
      hasAnyValues = true;
      internalValueResult.estimateCurrentEvent = this._estimateCurrentEvent;
    }
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._grokFailureKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.grokFailureKey = this._grokFailureKey;
    }
    if (this._grokNameKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.grokNameKey = this._grokNameKey;
    }
    if (this._grokPattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.grokPattern = this._grokPattern;
    }
    if (this._grokPatterns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grokPatterns = this._grokPatterns?.internalValue;
    }
    if (this._keepTimeKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepTimeKey = this._keepTimeKey;
    }
    if (this._localTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.localTime = this._localTime;
    }
    if (this._multilineStartRegexp !== undefined) {
      hasAnyValues = true;
      internalValueResult.multilineStartRegexp = this._multilineStartRegexp;
    }
    if (this._nullEmptyString !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullEmptyString = this._nullEmptyString;
    }
    if (this._nullValuePattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullValuePattern = this._nullValuePattern;
    }
    if (this._timeFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeFormat = this._timeFormat;
    }
    if (this._timeKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeKey = this._timeKey;
    }
    if (this._timeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeType = this._timeType;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._types !== undefined) {
      hasAnyValues = true;
      internalValueResult.types = this._types;
    }
    if (this._utc !== undefined) {
      hasAnyValues = true;
      internalValueResult.utc = this._utc;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsePatterns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customPatternPath.internalValue = undefined;
      this._estimateCurrentEvent = undefined;
      this._expression = undefined;
      this._format = undefined;
      this._grokFailureKey = undefined;
      this._grokNameKey = undefined;
      this._grokPattern = undefined;
      this._grokPatterns.internalValue = undefined;
      this._keepTimeKey = undefined;
      this._localTime = undefined;
      this._multilineStartRegexp = undefined;
      this._nullEmptyString = undefined;
      this._nullValuePattern = undefined;
      this._timeFormat = undefined;
      this._timeKey = undefined;
      this._timeType = undefined;
      this._timezone = undefined;
      this._type = undefined;
      this._types = undefined;
      this._utc = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customPatternPath.internalValue = value.customPatternPath;
      this._estimateCurrentEvent = value.estimateCurrentEvent;
      this._expression = value.expression;
      this._format = value.format;
      this._grokFailureKey = value.grokFailureKey;
      this._grokNameKey = value.grokNameKey;
      this._grokPattern = value.grokPattern;
      this._grokPatterns.internalValue = value.grokPatterns;
      this._keepTimeKey = value.keepTimeKey;
      this._localTime = value.localTime;
      this._multilineStartRegexp = value.multilineStartRegexp;
      this._nullEmptyString = value.nullEmptyString;
      this._nullValuePattern = value.nullValuePattern;
      this._timeFormat = value.timeFormat;
      this._timeKey = value.timeKey;
      this._timeType = value.timeType;
      this._timezone = value.timezone;
      this._type = value.type;
      this._types = value.types;
      this._utc = value.utc;
    }
  }

  // custom_pattern_path - computed: false, optional: true, required: false
  private _customPatternPath = new DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsePatternsCustomPatternPathOutputReference(this, "custom_pattern_path");
  public get customPatternPath() {
    return this._customPatternPath;
  }
  public putCustomPatternPath(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsePatternsCustomPatternPath) {
    this._customPatternPath.internalValue = value;
  }
  public resetCustomPatternPath() {
    this._customPatternPath.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPatternPathInput() {
    return this._customPatternPath.internalValue;
  }

  // estimate_current_event - computed: false, optional: true, required: false
  private _estimateCurrentEvent?: boolean | cdktf.IResolvable; 
  public get estimateCurrentEvent() {
    return this.getBooleanAttribute('estimate_current_event');
  }
  public set estimateCurrentEvent(value: boolean | cdktf.IResolvable) {
    this._estimateCurrentEvent = value;
  }
  public resetEstimateCurrentEvent() {
    this._estimateCurrentEvent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get estimateCurrentEventInput() {
    return this._estimateCurrentEvent;
  }

  // expression - computed: false, optional: true, required: false
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  public resetExpression() {
    this._expression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // format - computed: false, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // grok_failure_key - computed: false, optional: true, required: false
  private _grokFailureKey?: string; 
  public get grokFailureKey() {
    return this.getStringAttribute('grok_failure_key');
  }
  public set grokFailureKey(value: string) {
    this._grokFailureKey = value;
  }
  public resetGrokFailureKey() {
    this._grokFailureKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grokFailureKeyInput() {
    return this._grokFailureKey;
  }

  // grok_name_key - computed: false, optional: true, required: false
  private _grokNameKey?: string; 
  public get grokNameKey() {
    return this.getStringAttribute('grok_name_key');
  }
  public set grokNameKey(value: string) {
    this._grokNameKey = value;
  }
  public resetGrokNameKey() {
    this._grokNameKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grokNameKeyInput() {
    return this._grokNameKey;
  }

  // grok_pattern - computed: false, optional: true, required: false
  private _grokPattern?: string; 
  public get grokPattern() {
    return this.getStringAttribute('grok_pattern');
  }
  public set grokPattern(value: string) {
    this._grokPattern = value;
  }
  public resetGrokPattern() {
    this._grokPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grokPatternInput() {
    return this._grokPattern;
  }

  // grok_patterns - computed: false, optional: true, required: false
  private _grokPatterns = new DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsePatternsGrokPatternsList(this, "grok_patterns", false);
  public get grokPatterns() {
    return this._grokPatterns;
  }
  public putGrokPatterns(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsePatternsGrokPatterns[] | cdktf.IResolvable) {
    this._grokPatterns.internalValue = value;
  }
  public resetGrokPatterns() {
    this._grokPatterns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grokPatternsInput() {
    return this._grokPatterns.internalValue;
  }

  // keep_time_key - computed: false, optional: true, required: false
  private _keepTimeKey?: boolean | cdktf.IResolvable; 
  public get keepTimeKey() {
    return this.getBooleanAttribute('keep_time_key');
  }
  public set keepTimeKey(value: boolean | cdktf.IResolvable) {
    this._keepTimeKey = value;
  }
  public resetKeepTimeKey() {
    this._keepTimeKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepTimeKeyInput() {
    return this._keepTimeKey;
  }

  // local_time - computed: false, optional: true, required: false
  private _localTime?: boolean | cdktf.IResolvable; 
  public get localTime() {
    return this.getBooleanAttribute('local_time');
  }
  public set localTime(value: boolean | cdktf.IResolvable) {
    this._localTime = value;
  }
  public resetLocalTime() {
    this._localTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localTimeInput() {
    return this._localTime;
  }

  // multiline_start_regexp - computed: false, optional: true, required: false
  private _multilineStartRegexp?: string; 
  public get multilineStartRegexp() {
    return this.getStringAttribute('multiline_start_regexp');
  }
  public set multilineStartRegexp(value: string) {
    this._multilineStartRegexp = value;
  }
  public resetMultilineStartRegexp() {
    this._multilineStartRegexp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multilineStartRegexpInput() {
    return this._multilineStartRegexp;
  }

  // null_empty_string - computed: false, optional: true, required: false
  private _nullEmptyString?: boolean | cdktf.IResolvable; 
  public get nullEmptyString() {
    return this.getBooleanAttribute('null_empty_string');
  }
  public set nullEmptyString(value: boolean | cdktf.IResolvable) {
    this._nullEmptyString = value;
  }
  public resetNullEmptyString() {
    this._nullEmptyString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullEmptyStringInput() {
    return this._nullEmptyString;
  }

  // null_value_pattern - computed: false, optional: true, required: false
  private _nullValuePattern?: string; 
  public get nullValuePattern() {
    return this.getStringAttribute('null_value_pattern');
  }
  public set nullValuePattern(value: string) {
    this._nullValuePattern = value;
  }
  public resetNullValuePattern() {
    this._nullValuePattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullValuePatternInput() {
    return this._nullValuePattern;
  }

  // time_format - computed: false, optional: true, required: false
  private _timeFormat?: string; 
  public get timeFormat() {
    return this.getStringAttribute('time_format');
  }
  public set timeFormat(value: string) {
    this._timeFormat = value;
  }
  public resetTimeFormat() {
    this._timeFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeFormatInput() {
    return this._timeFormat;
  }

  // time_key - computed: false, optional: true, required: false
  private _timeKey?: string; 
  public get timeKey() {
    return this.getStringAttribute('time_key');
  }
  public set timeKey(value: string) {
    this._timeKey = value;
  }
  public resetTimeKey() {
    this._timeKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeKeyInput() {
    return this._timeKey;
  }

  // time_type - computed: false, optional: true, required: false
  private _timeType?: string; 
  public get timeType() {
    return this.getStringAttribute('time_type');
  }
  public set timeType(value: string) {
    this._timeType = value;
  }
  public resetTimeType() {
    this._timeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeTypeInput() {
    return this._timeType;
  }

  // timezone - computed: false, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
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

  // types - computed: false, optional: true, required: false
  private _types?: string; 
  public get types() {
    return this.getStringAttribute('types');
  }
  public set types(value: string) {
    this._types = value;
  }
  public resetTypes() {
    this._types = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typesInput() {
    return this._types;
  }

  // utc - computed: false, optional: true, required: false
  private _utc?: boolean | cdktf.IResolvable; 
  public get utc() {
    return this.getBooleanAttribute('utc');
  }
  public set utc(value: boolean | cdktf.IResolvable) {
    this._utc = value;
  }
  public resetUtc() {
    this._utc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get utcInput() {
    return this._utc;
  }
}

export class DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsePatternsList extends cdktf.ComplexList {
  public internalValue? : DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsePatterns[] | cdktf.IResolvable

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
  public get(index: number): DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsePatternsOutputReference {
    return new DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsePatternsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParse {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#custom_pattern_path DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#custom_pattern_path}
  */
  readonly customPatternPath?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParseCustomPatternPath;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#delimiter DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#delimiter}
  */
  readonly delimiter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#delimiter_pattern DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#delimiter_pattern}
  */
  readonly delimiterPattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#estimate_current_event DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#estimate_current_event}
  */
  readonly estimateCurrentEvent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#expression DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#expression}
  */
  readonly expression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#format DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#format_firstline DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#format_firstline}
  */
  readonly formatFirstline?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#grok_failure_key DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#grok_failure_key}
  */
  readonly grokFailureKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#grok_name_key DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#grok_name_key}
  */
  readonly grokNameKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#grok_pattern DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#grok_pattern}
  */
  readonly grokPattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#grok_patterns DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#grok_patterns}
  */
  readonly grokPatterns?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParseGrokPatterns[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#keep_time_key DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#keep_time_key}
  */
  readonly keepTimeKey?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#keys DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#keys}
  */
  readonly keys?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#label_delimiter DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#label_delimiter}
  */
  readonly labelDelimiter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#local_time DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#local_time}
  */
  readonly localTime?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#multiline DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#multiline}
  */
  readonly multiline?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#multiline_start_regexp DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#multiline_start_regexp}
  */
  readonly multilineStartRegexp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#null_empty_string DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#null_empty_string}
  */
  readonly nullEmptyString?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#null_value_pattern DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#null_value_pattern}
  */
  readonly nullValuePattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#patterns DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#patterns}
  */
  readonly patterns?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsePatterns[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#time_format DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#time_format}
  */
  readonly timeFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#time_key DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#time_key}
  */
  readonly timeKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#time_type DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#time_type}
  */
  readonly timeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#timezone DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#timezone}
  */
  readonly timezone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#type DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#types DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#types}
  */
  readonly types?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#utc DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#utc}
  */
  readonly utc?: boolean | cdktf.IResolvable;
}

export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParseToTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_pattern_path: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParseCustomPatternPathToTerraform(struct!.customPatternPath),
    delimiter: cdktf.stringToTerraform(struct!.delimiter),
    delimiter_pattern: cdktf.stringToTerraform(struct!.delimiterPattern),
    estimate_current_event: cdktf.booleanToTerraform(struct!.estimateCurrentEvent),
    expression: cdktf.stringToTerraform(struct!.expression),
    format: cdktf.stringToTerraform(struct!.format),
    format_firstline: cdktf.stringToTerraform(struct!.formatFirstline),
    grok_failure_key: cdktf.stringToTerraform(struct!.grokFailureKey),
    grok_name_key: cdktf.stringToTerraform(struct!.grokNameKey),
    grok_pattern: cdktf.stringToTerraform(struct!.grokPattern),
    grok_patterns: cdktf.listMapper(dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParseGrokPatternsToTerraform, false)(struct!.grokPatterns),
    keep_time_key: cdktf.booleanToTerraform(struct!.keepTimeKey),
    keys: cdktf.stringToTerraform(struct!.keys),
    label_delimiter: cdktf.stringToTerraform(struct!.labelDelimiter),
    local_time: cdktf.booleanToTerraform(struct!.localTime),
    multiline: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.multiline),
    multiline_start_regexp: cdktf.stringToTerraform(struct!.multilineStartRegexp),
    null_empty_string: cdktf.booleanToTerraform(struct!.nullEmptyString),
    null_value_pattern: cdktf.stringToTerraform(struct!.nullValuePattern),
    patterns: cdktf.listMapper(dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsePatternsToTerraform, false)(struct!.patterns),
    time_format: cdktf.stringToTerraform(struct!.timeFormat),
    time_key: cdktf.stringToTerraform(struct!.timeKey),
    time_type: cdktf.stringToTerraform(struct!.timeType),
    timezone: cdktf.stringToTerraform(struct!.timezone),
    type: cdktf.stringToTerraform(struct!.type),
    types: cdktf.stringToTerraform(struct!.types),
    utc: cdktf.booleanToTerraform(struct!.utc),
  }
}


export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParseToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_pattern_path: {
      value: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParseCustomPatternPathToHclTerraform(struct!.customPatternPath),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParseCustomPatternPath",
    },
    delimiter: {
      value: cdktf.stringToHclTerraform(struct!.delimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delimiter_pattern: {
      value: cdktf.stringToHclTerraform(struct!.delimiterPattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    estimate_current_event: {
      value: cdktf.booleanToHclTerraform(struct!.estimateCurrentEvent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    format_firstline: {
      value: cdktf.stringToHclTerraform(struct!.formatFirstline),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grok_failure_key: {
      value: cdktf.stringToHclTerraform(struct!.grokFailureKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grok_name_key: {
      value: cdktf.stringToHclTerraform(struct!.grokNameKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grok_pattern: {
      value: cdktf.stringToHclTerraform(struct!.grokPattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grok_patterns: {
      value: cdktf.listMapperHcl(dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParseGrokPatternsToHclTerraform, false)(struct!.grokPatterns),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParseGrokPatternsList",
    },
    keep_time_key: {
      value: cdktf.booleanToHclTerraform(struct!.keepTimeKey),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    keys: {
      value: cdktf.stringToHclTerraform(struct!.keys),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label_delimiter: {
      value: cdktf.stringToHclTerraform(struct!.labelDelimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_time: {
      value: cdktf.booleanToHclTerraform(struct!.localTime),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    multiline: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.multiline),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    multiline_start_regexp: {
      value: cdktf.stringToHclTerraform(struct!.multilineStartRegexp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    null_empty_string: {
      value: cdktf.booleanToHclTerraform(struct!.nullEmptyString),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    null_value_pattern: {
      value: cdktf.stringToHclTerraform(struct!.nullValuePattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    patterns: {
      value: cdktf.listMapperHcl(dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsePatternsToHclTerraform, false)(struct!.patterns),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsePatternsList",
    },
    time_format: {
      value: cdktf.stringToHclTerraform(struct!.timeFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_key: {
      value: cdktf.stringToHclTerraform(struct!.timeKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_type: {
      value: cdktf.stringToHclTerraform(struct!.timeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timezone: {
      value: cdktf.stringToHclTerraform(struct!.timezone),
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
    types: {
      value: cdktf.stringToHclTerraform(struct!.types),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    utc: {
      value: cdktf.booleanToHclTerraform(struct!.utc),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParse | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customPatternPath?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPatternPath = this._customPatternPath?.internalValue;
    }
    if (this._delimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.delimiter = this._delimiter;
    }
    if (this._delimiterPattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.delimiterPattern = this._delimiterPattern;
    }
    if (this._estimateCurrentEvent !== undefined) {
      hasAnyValues = true;
      internalValueResult.estimateCurrentEvent = this._estimateCurrentEvent;
    }
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._formatFirstline !== undefined) {
      hasAnyValues = true;
      internalValueResult.formatFirstline = this._formatFirstline;
    }
    if (this._grokFailureKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.grokFailureKey = this._grokFailureKey;
    }
    if (this._grokNameKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.grokNameKey = this._grokNameKey;
    }
    if (this._grokPattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.grokPattern = this._grokPattern;
    }
    if (this._grokPatterns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grokPatterns = this._grokPatterns?.internalValue;
    }
    if (this._keepTimeKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepTimeKey = this._keepTimeKey;
    }
    if (this._keys !== undefined) {
      hasAnyValues = true;
      internalValueResult.keys = this._keys;
    }
    if (this._labelDelimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelDelimiter = this._labelDelimiter;
    }
    if (this._localTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.localTime = this._localTime;
    }
    if (this._multiline !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiline = this._multiline;
    }
    if (this._multilineStartRegexp !== undefined) {
      hasAnyValues = true;
      internalValueResult.multilineStartRegexp = this._multilineStartRegexp;
    }
    if (this._nullEmptyString !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullEmptyString = this._nullEmptyString;
    }
    if (this._nullValuePattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullValuePattern = this._nullValuePattern;
    }
    if (this._patterns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.patterns = this._patterns?.internalValue;
    }
    if (this._timeFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeFormat = this._timeFormat;
    }
    if (this._timeKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeKey = this._timeKey;
    }
    if (this._timeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeType = this._timeType;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._types !== undefined) {
      hasAnyValues = true;
      internalValueResult.types = this._types;
    }
    if (this._utc !== undefined) {
      hasAnyValues = true;
      internalValueResult.utc = this._utc;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParse | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customPatternPath.internalValue = undefined;
      this._delimiter = undefined;
      this._delimiterPattern = undefined;
      this._estimateCurrentEvent = undefined;
      this._expression = undefined;
      this._format = undefined;
      this._formatFirstline = undefined;
      this._grokFailureKey = undefined;
      this._grokNameKey = undefined;
      this._grokPattern = undefined;
      this._grokPatterns.internalValue = undefined;
      this._keepTimeKey = undefined;
      this._keys = undefined;
      this._labelDelimiter = undefined;
      this._localTime = undefined;
      this._multiline = undefined;
      this._multilineStartRegexp = undefined;
      this._nullEmptyString = undefined;
      this._nullValuePattern = undefined;
      this._patterns.internalValue = undefined;
      this._timeFormat = undefined;
      this._timeKey = undefined;
      this._timeType = undefined;
      this._timezone = undefined;
      this._type = undefined;
      this._types = undefined;
      this._utc = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customPatternPath.internalValue = value.customPatternPath;
      this._delimiter = value.delimiter;
      this._delimiterPattern = value.delimiterPattern;
      this._estimateCurrentEvent = value.estimateCurrentEvent;
      this._expression = value.expression;
      this._format = value.format;
      this._formatFirstline = value.formatFirstline;
      this._grokFailureKey = value.grokFailureKey;
      this._grokNameKey = value.grokNameKey;
      this._grokPattern = value.grokPattern;
      this._grokPatterns.internalValue = value.grokPatterns;
      this._keepTimeKey = value.keepTimeKey;
      this._keys = value.keys;
      this._labelDelimiter = value.labelDelimiter;
      this._localTime = value.localTime;
      this._multiline = value.multiline;
      this._multilineStartRegexp = value.multilineStartRegexp;
      this._nullEmptyString = value.nullEmptyString;
      this._nullValuePattern = value.nullValuePattern;
      this._patterns.internalValue = value.patterns;
      this._timeFormat = value.timeFormat;
      this._timeKey = value.timeKey;
      this._timeType = value.timeType;
      this._timezone = value.timezone;
      this._type = value.type;
      this._types = value.types;
      this._utc = value.utc;
    }
  }

  // custom_pattern_path - computed: false, optional: true, required: false
  private _customPatternPath = new DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParseCustomPatternPathOutputReference(this, "custom_pattern_path");
  public get customPatternPath() {
    return this._customPatternPath;
  }
  public putCustomPatternPath(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParseCustomPatternPath) {
    this._customPatternPath.internalValue = value;
  }
  public resetCustomPatternPath() {
    this._customPatternPath.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPatternPathInput() {
    return this._customPatternPath.internalValue;
  }

  // delimiter - computed: false, optional: true, required: false
  private _delimiter?: string; 
  public get delimiter() {
    return this.getStringAttribute('delimiter');
  }
  public set delimiter(value: string) {
    this._delimiter = value;
  }
  public resetDelimiter() {
    this._delimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delimiterInput() {
    return this._delimiter;
  }

  // delimiter_pattern - computed: false, optional: true, required: false
  private _delimiterPattern?: string; 
  public get delimiterPattern() {
    return this.getStringAttribute('delimiter_pattern');
  }
  public set delimiterPattern(value: string) {
    this._delimiterPattern = value;
  }
  public resetDelimiterPattern() {
    this._delimiterPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delimiterPatternInput() {
    return this._delimiterPattern;
  }

  // estimate_current_event - computed: false, optional: true, required: false
  private _estimateCurrentEvent?: boolean | cdktf.IResolvable; 
  public get estimateCurrentEvent() {
    return this.getBooleanAttribute('estimate_current_event');
  }
  public set estimateCurrentEvent(value: boolean | cdktf.IResolvable) {
    this._estimateCurrentEvent = value;
  }
  public resetEstimateCurrentEvent() {
    this._estimateCurrentEvent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get estimateCurrentEventInput() {
    return this._estimateCurrentEvent;
  }

  // expression - computed: false, optional: true, required: false
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  public resetExpression() {
    this._expression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // format - computed: false, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // format_firstline - computed: false, optional: true, required: false
  private _formatFirstline?: string; 
  public get formatFirstline() {
    return this.getStringAttribute('format_firstline');
  }
  public set formatFirstline(value: string) {
    this._formatFirstline = value;
  }
  public resetFormatFirstline() {
    this._formatFirstline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatFirstlineInput() {
    return this._formatFirstline;
  }

  // grok_failure_key - computed: false, optional: true, required: false
  private _grokFailureKey?: string; 
  public get grokFailureKey() {
    return this.getStringAttribute('grok_failure_key');
  }
  public set grokFailureKey(value: string) {
    this._grokFailureKey = value;
  }
  public resetGrokFailureKey() {
    this._grokFailureKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grokFailureKeyInput() {
    return this._grokFailureKey;
  }

  // grok_name_key - computed: false, optional: true, required: false
  private _grokNameKey?: string; 
  public get grokNameKey() {
    return this.getStringAttribute('grok_name_key');
  }
  public set grokNameKey(value: string) {
    this._grokNameKey = value;
  }
  public resetGrokNameKey() {
    this._grokNameKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grokNameKeyInput() {
    return this._grokNameKey;
  }

  // grok_pattern - computed: false, optional: true, required: false
  private _grokPattern?: string; 
  public get grokPattern() {
    return this.getStringAttribute('grok_pattern');
  }
  public set grokPattern(value: string) {
    this._grokPattern = value;
  }
  public resetGrokPattern() {
    this._grokPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grokPatternInput() {
    return this._grokPattern;
  }

  // grok_patterns - computed: false, optional: true, required: false
  private _grokPatterns = new DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParseGrokPatternsList(this, "grok_patterns", false);
  public get grokPatterns() {
    return this._grokPatterns;
  }
  public putGrokPatterns(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParseGrokPatterns[] | cdktf.IResolvable) {
    this._grokPatterns.internalValue = value;
  }
  public resetGrokPatterns() {
    this._grokPatterns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grokPatternsInput() {
    return this._grokPatterns.internalValue;
  }

  // keep_time_key - computed: false, optional: true, required: false
  private _keepTimeKey?: boolean | cdktf.IResolvable; 
  public get keepTimeKey() {
    return this.getBooleanAttribute('keep_time_key');
  }
  public set keepTimeKey(value: boolean | cdktf.IResolvable) {
    this._keepTimeKey = value;
  }
  public resetKeepTimeKey() {
    this._keepTimeKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepTimeKeyInput() {
    return this._keepTimeKey;
  }

  // keys - computed: false, optional: true, required: false
  private _keys?: string; 
  public get keys() {
    return this.getStringAttribute('keys');
  }
  public set keys(value: string) {
    this._keys = value;
  }
  public resetKeys() {
    this._keys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keysInput() {
    return this._keys;
  }

  // label_delimiter - computed: false, optional: true, required: false
  private _labelDelimiter?: string; 
  public get labelDelimiter() {
    return this.getStringAttribute('label_delimiter');
  }
  public set labelDelimiter(value: string) {
    this._labelDelimiter = value;
  }
  public resetLabelDelimiter() {
    this._labelDelimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelDelimiterInput() {
    return this._labelDelimiter;
  }

  // local_time - computed: false, optional: true, required: false
  private _localTime?: boolean | cdktf.IResolvable; 
  public get localTime() {
    return this.getBooleanAttribute('local_time');
  }
  public set localTime(value: boolean | cdktf.IResolvable) {
    this._localTime = value;
  }
  public resetLocalTime() {
    this._localTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localTimeInput() {
    return this._localTime;
  }

  // multiline - computed: false, optional: true, required: false
  private _multiline?: string[]; 
  public get multiline() {
    return this.getListAttribute('multiline');
  }
  public set multiline(value: string[]) {
    this._multiline = value;
  }
  public resetMultiline() {
    this._multiline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multilineInput() {
    return this._multiline;
  }

  // multiline_start_regexp - computed: false, optional: true, required: false
  private _multilineStartRegexp?: string; 
  public get multilineStartRegexp() {
    return this.getStringAttribute('multiline_start_regexp');
  }
  public set multilineStartRegexp(value: string) {
    this._multilineStartRegexp = value;
  }
  public resetMultilineStartRegexp() {
    this._multilineStartRegexp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multilineStartRegexpInput() {
    return this._multilineStartRegexp;
  }

  // null_empty_string - computed: false, optional: true, required: false
  private _nullEmptyString?: boolean | cdktf.IResolvable; 
  public get nullEmptyString() {
    return this.getBooleanAttribute('null_empty_string');
  }
  public set nullEmptyString(value: boolean | cdktf.IResolvable) {
    this._nullEmptyString = value;
  }
  public resetNullEmptyString() {
    this._nullEmptyString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullEmptyStringInput() {
    return this._nullEmptyString;
  }

  // null_value_pattern - computed: false, optional: true, required: false
  private _nullValuePattern?: string; 
  public get nullValuePattern() {
    return this.getStringAttribute('null_value_pattern');
  }
  public set nullValuePattern(value: string) {
    this._nullValuePattern = value;
  }
  public resetNullValuePattern() {
    this._nullValuePattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullValuePatternInput() {
    return this._nullValuePattern;
  }

  // patterns - computed: false, optional: true, required: false
  private _patterns = new DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsePatternsList(this, "patterns", false);
  public get patterns() {
    return this._patterns;
  }
  public putPatterns(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsePatterns[] | cdktf.IResolvable) {
    this._patterns.internalValue = value;
  }
  public resetPatterns() {
    this._patterns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternsInput() {
    return this._patterns.internalValue;
  }

  // time_format - computed: false, optional: true, required: false
  private _timeFormat?: string; 
  public get timeFormat() {
    return this.getStringAttribute('time_format');
  }
  public set timeFormat(value: string) {
    this._timeFormat = value;
  }
  public resetTimeFormat() {
    this._timeFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeFormatInput() {
    return this._timeFormat;
  }

  // time_key - computed: false, optional: true, required: false
  private _timeKey?: string; 
  public get timeKey() {
    return this.getStringAttribute('time_key');
  }
  public set timeKey(value: string) {
    this._timeKey = value;
  }
  public resetTimeKey() {
    this._timeKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeKeyInput() {
    return this._timeKey;
  }

  // time_type - computed: false, optional: true, required: false
  private _timeType?: string; 
  public get timeType() {
    return this.getStringAttribute('time_type');
  }
  public set timeType(value: string) {
    this._timeType = value;
  }
  public resetTimeType() {
    this._timeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeTypeInput() {
    return this._timeType;
  }

  // timezone - computed: false, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
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

  // types - computed: false, optional: true, required: false
  private _types?: string; 
  public get types() {
    return this.getStringAttribute('types');
  }
  public set types(value: string) {
    this._types = value;
  }
  public resetTypes() {
    this._types = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typesInput() {
    return this._types;
  }

  // utc - computed: false, optional: true, required: false
  private _utc?: boolean | cdktf.IResolvable; 
  public get utc() {
    return this.getBooleanAttribute('utc');
  }
  public set utc(value: boolean | cdktf.IResolvable) {
    this._utc = value;
  }
  public resetUtc() {
    this._utc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get utcInput() {
    return this._utc;
  }
}
export interface DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersCustomPatternPathMountFromSecretKeyRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#key DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#name DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#optional DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersCustomPatternPathMountFromSecretKeyRefToTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersCustomPatternPathMountFromSecretKeyRef | cdktf.IResolvable): any {
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


export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersCustomPatternPathMountFromSecretKeyRefToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersCustomPatternPathMountFromSecretKeyRef | cdktf.IResolvable): any {
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

export class DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersCustomPatternPathMountFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersCustomPatternPathMountFromSecretKeyRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersCustomPatternPathMountFromSecretKeyRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersCustomPatternPathMountFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#secret_key_ref DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersCustomPatternPathMountFromSecretKeyRef;
}

export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersCustomPatternPathMountFromToTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersCustomPatternPathMountFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_key_ref: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersCustomPatternPathMountFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersCustomPatternPathMountFromToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersCustomPatternPathMountFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_key_ref: {
      value: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersCustomPatternPathMountFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersCustomPatternPathMountFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersCustomPatternPathMountFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersCustomPatternPathMountFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersCustomPatternPathMountFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = value.secretKeyRef;
    }
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersCustomPatternPathMountFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersCustomPatternPathMountFromSecretKeyRef) {
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
export interface DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersCustomPatternPathValueFromSecretKeyRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#key DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#name DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#optional DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersCustomPatternPathValueFromSecretKeyRefToTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersCustomPatternPathValueFromSecretKeyRef | cdktf.IResolvable): any {
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


export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersCustomPatternPathValueFromSecretKeyRefToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersCustomPatternPathValueFromSecretKeyRef | cdktf.IResolvable): any {
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

export class DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersCustomPatternPathValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersCustomPatternPathValueFromSecretKeyRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersCustomPatternPathValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersCustomPatternPathValueFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#secret_key_ref DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersCustomPatternPathValueFromSecretKeyRef;
}

export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersCustomPatternPathValueFromToTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersCustomPatternPathValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_key_ref: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersCustomPatternPathValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersCustomPatternPathValueFromToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersCustomPatternPathValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_key_ref: {
      value: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersCustomPatternPathValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersCustomPatternPathValueFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersCustomPatternPathValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersCustomPatternPathValueFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersCustomPatternPathValueFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = value.secretKeyRef;
    }
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersCustomPatternPathValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersCustomPatternPathValueFromSecretKeyRef) {
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
export interface DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersCustomPatternPath {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#mount_from DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#mount_from}
  */
  readonly mountFrom?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersCustomPatternPathMountFrom;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#value DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#value}
  */
  readonly value?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#value_from DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#value_from}
  */
  readonly valueFrom?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersCustomPatternPathValueFrom;
}

export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersCustomPatternPathToTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersCustomPatternPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mount_from: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersCustomPatternPathMountFromToTerraform(struct!.mountFrom),
    value: cdktf.stringToTerraform(struct!.value),
    value_from: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersCustomPatternPathValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersCustomPatternPathToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersCustomPatternPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mount_from: {
      value: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersCustomPatternPathMountFromToHclTerraform(struct!.mountFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersCustomPatternPathMountFrom",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_from: {
      value: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersCustomPatternPathValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersCustomPatternPathValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersCustomPatternPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersCustomPatternPath | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mountFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountFrom = this._mountFrom?.internalValue;
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

  public set internalValue(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersCustomPatternPath | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mountFrom.internalValue = undefined;
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
      this._mountFrom.internalValue = value.mountFrom;
      this._value = value.value;
      this._valueFrom.internalValue = value.valueFrom;
    }
  }

  // mount_from - computed: false, optional: true, required: false
  private _mountFrom = new DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersCustomPatternPathMountFromOutputReference(this, "mount_from");
  public get mountFrom() {
    return this._mountFrom;
  }
  public putMountFrom(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersCustomPatternPathMountFrom) {
    this._mountFrom.internalValue = value;
  }
  public resetMountFrom() {
    this._mountFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountFromInput() {
    return this._mountFrom.internalValue;
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
  private _valueFrom = new DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersCustomPatternPathValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersCustomPatternPathValueFrom) {
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
export interface DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersGrokPatterns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#keep_time_key DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#keep_time_key}
  */
  readonly keepTimeKey?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#name DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#pattern DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#pattern}
  */
  readonly pattern: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#time_format DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#time_format}
  */
  readonly timeFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#time_key DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#time_key}
  */
  readonly timeKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#timezone DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#timezone}
  */
  readonly timezone?: string;
}

export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersGrokPatternsToTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersGrokPatterns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    keep_time_key: cdktf.booleanToTerraform(struct!.keepTimeKey),
    name: cdktf.stringToTerraform(struct!.name),
    pattern: cdktf.stringToTerraform(struct!.pattern),
    time_format: cdktf.stringToTerraform(struct!.timeFormat),
    time_key: cdktf.stringToTerraform(struct!.timeKey),
    timezone: cdktf.stringToTerraform(struct!.timezone),
  }
}


export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersGrokPatternsToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersGrokPatterns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    keep_time_key: {
      value: cdktf.booleanToHclTerraform(struct!.keepTimeKey),
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
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_format: {
      value: cdktf.stringToHclTerraform(struct!.timeFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_key: {
      value: cdktf.stringToHclTerraform(struct!.timeKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timezone: {
      value: cdktf.stringToHclTerraform(struct!.timezone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersGrokPatternsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersGrokPatterns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keepTimeKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepTimeKey = this._keepTimeKey;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    if (this._timeFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeFormat = this._timeFormat;
    }
    if (this._timeKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeKey = this._timeKey;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersGrokPatterns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keepTimeKey = undefined;
      this._name = undefined;
      this._pattern = undefined;
      this._timeFormat = undefined;
      this._timeKey = undefined;
      this._timezone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keepTimeKey = value.keepTimeKey;
      this._name = value.name;
      this._pattern = value.pattern;
      this._timeFormat = value.timeFormat;
      this._timeKey = value.timeKey;
      this._timezone = value.timezone;
    }
  }

  // keep_time_key - computed: false, optional: true, required: false
  private _keepTimeKey?: boolean | cdktf.IResolvable; 
  public get keepTimeKey() {
    return this.getBooleanAttribute('keep_time_key');
  }
  public set keepTimeKey(value: boolean | cdktf.IResolvable) {
    this._keepTimeKey = value;
  }
  public resetKeepTimeKey() {
    this._keepTimeKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepTimeKeyInput() {
    return this._keepTimeKey;
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

  // pattern - computed: false, optional: false, required: true
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }

  // time_format - computed: false, optional: true, required: false
  private _timeFormat?: string; 
  public get timeFormat() {
    return this.getStringAttribute('time_format');
  }
  public set timeFormat(value: string) {
    this._timeFormat = value;
  }
  public resetTimeFormat() {
    this._timeFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeFormatInput() {
    return this._timeFormat;
  }

  // time_key - computed: false, optional: true, required: false
  private _timeKey?: string; 
  public get timeKey() {
    return this.getStringAttribute('time_key');
  }
  public set timeKey(value: string) {
    this._timeKey = value;
  }
  public resetTimeKey() {
    this._timeKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeKeyInput() {
    return this._timeKey;
  }

  // timezone - computed: false, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }
}

export class DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersGrokPatternsList extends cdktf.ComplexList {
  public internalValue? : DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersGrokPatterns[] | cdktf.IResolvable

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
  public get(index: number): DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersGrokPatternsOutputReference {
    return new DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersGrokPatternsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersPatternsCustomPatternPathMountFromSecretKeyRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#key DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#name DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#optional DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersPatternsCustomPatternPathMountFromSecretKeyRefToTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersPatternsCustomPatternPathMountFromSecretKeyRef | cdktf.IResolvable): any {
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


export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersPatternsCustomPatternPathMountFromSecretKeyRefToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersPatternsCustomPatternPathMountFromSecretKeyRef | cdktf.IResolvable): any {
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

export class DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersPatternsCustomPatternPathMountFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersPatternsCustomPatternPathMountFromSecretKeyRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersPatternsCustomPatternPathMountFromSecretKeyRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersPatternsCustomPatternPathMountFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#secret_key_ref DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersPatternsCustomPatternPathMountFromSecretKeyRef;
}

export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersPatternsCustomPatternPathMountFromToTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersPatternsCustomPatternPathMountFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_key_ref: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersPatternsCustomPatternPathMountFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersPatternsCustomPatternPathMountFromToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersPatternsCustomPatternPathMountFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_key_ref: {
      value: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersPatternsCustomPatternPathMountFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersPatternsCustomPatternPathMountFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersPatternsCustomPatternPathMountFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersPatternsCustomPatternPathMountFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersPatternsCustomPatternPathMountFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = value.secretKeyRef;
    }
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersPatternsCustomPatternPathMountFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersPatternsCustomPatternPathMountFromSecretKeyRef) {
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
export interface DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersPatternsCustomPatternPathValueFromSecretKeyRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#key DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#name DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#optional DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersPatternsCustomPatternPathValueFromSecretKeyRefToTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersPatternsCustomPatternPathValueFromSecretKeyRef | cdktf.IResolvable): any {
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


export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersPatternsCustomPatternPathValueFromSecretKeyRefToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersPatternsCustomPatternPathValueFromSecretKeyRef | cdktf.IResolvable): any {
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

export class DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersPatternsCustomPatternPathValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersPatternsCustomPatternPathValueFromSecretKeyRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersPatternsCustomPatternPathValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersPatternsCustomPatternPathValueFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#secret_key_ref DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersPatternsCustomPatternPathValueFromSecretKeyRef;
}

export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersPatternsCustomPatternPathValueFromToTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersPatternsCustomPatternPathValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_key_ref: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersPatternsCustomPatternPathValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersPatternsCustomPatternPathValueFromToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersPatternsCustomPatternPathValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_key_ref: {
      value: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersPatternsCustomPatternPathValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersPatternsCustomPatternPathValueFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersPatternsCustomPatternPathValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersPatternsCustomPatternPathValueFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersPatternsCustomPatternPathValueFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = value.secretKeyRef;
    }
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersPatternsCustomPatternPathValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersPatternsCustomPatternPathValueFromSecretKeyRef) {
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
export interface DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersPatternsCustomPatternPath {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#mount_from DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#mount_from}
  */
  readonly mountFrom?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersPatternsCustomPatternPathMountFrom;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#value DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#value}
  */
  readonly value?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#value_from DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#value_from}
  */
  readonly valueFrom?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersPatternsCustomPatternPathValueFrom;
}

export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersPatternsCustomPatternPathToTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersPatternsCustomPatternPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mount_from: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersPatternsCustomPatternPathMountFromToTerraform(struct!.mountFrom),
    value: cdktf.stringToTerraform(struct!.value),
    value_from: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersPatternsCustomPatternPathValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersPatternsCustomPatternPathToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersPatternsCustomPatternPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mount_from: {
      value: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersPatternsCustomPatternPathMountFromToHclTerraform(struct!.mountFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersPatternsCustomPatternPathMountFrom",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_from: {
      value: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersPatternsCustomPatternPathValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersPatternsCustomPatternPathValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersPatternsCustomPatternPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersPatternsCustomPatternPath | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mountFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountFrom = this._mountFrom?.internalValue;
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

  public set internalValue(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersPatternsCustomPatternPath | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mountFrom.internalValue = undefined;
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
      this._mountFrom.internalValue = value.mountFrom;
      this._value = value.value;
      this._valueFrom.internalValue = value.valueFrom;
    }
  }

  // mount_from - computed: false, optional: true, required: false
  private _mountFrom = new DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersPatternsCustomPatternPathMountFromOutputReference(this, "mount_from");
  public get mountFrom() {
    return this._mountFrom;
  }
  public putMountFrom(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersPatternsCustomPatternPathMountFrom) {
    this._mountFrom.internalValue = value;
  }
  public resetMountFrom() {
    this._mountFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountFromInput() {
    return this._mountFrom.internalValue;
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
  private _valueFrom = new DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersPatternsCustomPatternPathValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersPatternsCustomPatternPathValueFrom) {
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
export interface DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersPatternsGrokPatterns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#keep_time_key DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#keep_time_key}
  */
  readonly keepTimeKey?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#name DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#pattern DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#pattern}
  */
  readonly pattern: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#time_format DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#time_format}
  */
  readonly timeFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#time_key DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#time_key}
  */
  readonly timeKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#timezone DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#timezone}
  */
  readonly timezone?: string;
}

export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersPatternsGrokPatternsToTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersPatternsGrokPatterns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    keep_time_key: cdktf.booleanToTerraform(struct!.keepTimeKey),
    name: cdktf.stringToTerraform(struct!.name),
    pattern: cdktf.stringToTerraform(struct!.pattern),
    time_format: cdktf.stringToTerraform(struct!.timeFormat),
    time_key: cdktf.stringToTerraform(struct!.timeKey),
    timezone: cdktf.stringToTerraform(struct!.timezone),
  }
}


export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersPatternsGrokPatternsToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersPatternsGrokPatterns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    keep_time_key: {
      value: cdktf.booleanToHclTerraform(struct!.keepTimeKey),
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
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_format: {
      value: cdktf.stringToHclTerraform(struct!.timeFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_key: {
      value: cdktf.stringToHclTerraform(struct!.timeKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timezone: {
      value: cdktf.stringToHclTerraform(struct!.timezone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersPatternsGrokPatternsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersPatternsGrokPatterns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keepTimeKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepTimeKey = this._keepTimeKey;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    if (this._timeFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeFormat = this._timeFormat;
    }
    if (this._timeKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeKey = this._timeKey;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersPatternsGrokPatterns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keepTimeKey = undefined;
      this._name = undefined;
      this._pattern = undefined;
      this._timeFormat = undefined;
      this._timeKey = undefined;
      this._timezone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keepTimeKey = value.keepTimeKey;
      this._name = value.name;
      this._pattern = value.pattern;
      this._timeFormat = value.timeFormat;
      this._timeKey = value.timeKey;
      this._timezone = value.timezone;
    }
  }

  // keep_time_key - computed: false, optional: true, required: false
  private _keepTimeKey?: boolean | cdktf.IResolvable; 
  public get keepTimeKey() {
    return this.getBooleanAttribute('keep_time_key');
  }
  public set keepTimeKey(value: boolean | cdktf.IResolvable) {
    this._keepTimeKey = value;
  }
  public resetKeepTimeKey() {
    this._keepTimeKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepTimeKeyInput() {
    return this._keepTimeKey;
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

  // pattern - computed: false, optional: false, required: true
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }

  // time_format - computed: false, optional: true, required: false
  private _timeFormat?: string; 
  public get timeFormat() {
    return this.getStringAttribute('time_format');
  }
  public set timeFormat(value: string) {
    this._timeFormat = value;
  }
  public resetTimeFormat() {
    this._timeFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeFormatInput() {
    return this._timeFormat;
  }

  // time_key - computed: false, optional: true, required: false
  private _timeKey?: string; 
  public get timeKey() {
    return this.getStringAttribute('time_key');
  }
  public set timeKey(value: string) {
    this._timeKey = value;
  }
  public resetTimeKey() {
    this._timeKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeKeyInput() {
    return this._timeKey;
  }

  // timezone - computed: false, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }
}

export class DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersPatternsGrokPatternsList extends cdktf.ComplexList {
  public internalValue? : DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersPatternsGrokPatterns[] | cdktf.IResolvable

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
  public get(index: number): DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersPatternsGrokPatternsOutputReference {
    return new DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersPatternsGrokPatternsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersPatterns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#custom_pattern_path DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#custom_pattern_path}
  */
  readonly customPatternPath?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersPatternsCustomPatternPath;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#estimate_current_event DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#estimate_current_event}
  */
  readonly estimateCurrentEvent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#expression DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#expression}
  */
  readonly expression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#format DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#grok_failure_key DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#grok_failure_key}
  */
  readonly grokFailureKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#grok_name_key DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#grok_name_key}
  */
  readonly grokNameKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#grok_pattern DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#grok_pattern}
  */
  readonly grokPattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#grok_patterns DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#grok_patterns}
  */
  readonly grokPatterns?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersPatternsGrokPatterns[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#keep_time_key DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#keep_time_key}
  */
  readonly keepTimeKey?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#local_time DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#local_time}
  */
  readonly localTime?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#multiline_start_regexp DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#multiline_start_regexp}
  */
  readonly multilineStartRegexp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#null_empty_string DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#null_empty_string}
  */
  readonly nullEmptyString?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#null_value_pattern DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#null_value_pattern}
  */
  readonly nullValuePattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#time_format DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#time_format}
  */
  readonly timeFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#time_key DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#time_key}
  */
  readonly timeKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#time_type DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#time_type}
  */
  readonly timeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#timezone DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#timezone}
  */
  readonly timezone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#type DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#types DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#types}
  */
  readonly types?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#utc DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#utc}
  */
  readonly utc?: boolean | cdktf.IResolvable;
}

export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersPatternsToTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersPatterns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_pattern_path: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersPatternsCustomPatternPathToTerraform(struct!.customPatternPath),
    estimate_current_event: cdktf.booleanToTerraform(struct!.estimateCurrentEvent),
    expression: cdktf.stringToTerraform(struct!.expression),
    format: cdktf.stringToTerraform(struct!.format),
    grok_failure_key: cdktf.stringToTerraform(struct!.grokFailureKey),
    grok_name_key: cdktf.stringToTerraform(struct!.grokNameKey),
    grok_pattern: cdktf.stringToTerraform(struct!.grokPattern),
    grok_patterns: cdktf.listMapper(dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersPatternsGrokPatternsToTerraform, false)(struct!.grokPatterns),
    keep_time_key: cdktf.booleanToTerraform(struct!.keepTimeKey),
    local_time: cdktf.booleanToTerraform(struct!.localTime),
    multiline_start_regexp: cdktf.stringToTerraform(struct!.multilineStartRegexp),
    null_empty_string: cdktf.booleanToTerraform(struct!.nullEmptyString),
    null_value_pattern: cdktf.stringToTerraform(struct!.nullValuePattern),
    time_format: cdktf.stringToTerraform(struct!.timeFormat),
    time_key: cdktf.stringToTerraform(struct!.timeKey),
    time_type: cdktf.stringToTerraform(struct!.timeType),
    timezone: cdktf.stringToTerraform(struct!.timezone),
    type: cdktf.stringToTerraform(struct!.type),
    types: cdktf.stringToTerraform(struct!.types),
    utc: cdktf.booleanToTerraform(struct!.utc),
  }
}


export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersPatternsToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersPatterns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_pattern_path: {
      value: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersPatternsCustomPatternPathToHclTerraform(struct!.customPatternPath),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersPatternsCustomPatternPath",
    },
    estimate_current_event: {
      value: cdktf.booleanToHclTerraform(struct!.estimateCurrentEvent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grok_failure_key: {
      value: cdktf.stringToHclTerraform(struct!.grokFailureKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grok_name_key: {
      value: cdktf.stringToHclTerraform(struct!.grokNameKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grok_pattern: {
      value: cdktf.stringToHclTerraform(struct!.grokPattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grok_patterns: {
      value: cdktf.listMapperHcl(dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersPatternsGrokPatternsToHclTerraform, false)(struct!.grokPatterns),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersPatternsGrokPatternsList",
    },
    keep_time_key: {
      value: cdktf.booleanToHclTerraform(struct!.keepTimeKey),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    local_time: {
      value: cdktf.booleanToHclTerraform(struct!.localTime),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    multiline_start_regexp: {
      value: cdktf.stringToHclTerraform(struct!.multilineStartRegexp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    null_empty_string: {
      value: cdktf.booleanToHclTerraform(struct!.nullEmptyString),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    null_value_pattern: {
      value: cdktf.stringToHclTerraform(struct!.nullValuePattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_format: {
      value: cdktf.stringToHclTerraform(struct!.timeFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_key: {
      value: cdktf.stringToHclTerraform(struct!.timeKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_type: {
      value: cdktf.stringToHclTerraform(struct!.timeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timezone: {
      value: cdktf.stringToHclTerraform(struct!.timezone),
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
    types: {
      value: cdktf.stringToHclTerraform(struct!.types),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    utc: {
      value: cdktf.booleanToHclTerraform(struct!.utc),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersPatternsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersPatterns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customPatternPath?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPatternPath = this._customPatternPath?.internalValue;
    }
    if (this._estimateCurrentEvent !== undefined) {
      hasAnyValues = true;
      internalValueResult.estimateCurrentEvent = this._estimateCurrentEvent;
    }
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._grokFailureKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.grokFailureKey = this._grokFailureKey;
    }
    if (this._grokNameKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.grokNameKey = this._grokNameKey;
    }
    if (this._grokPattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.grokPattern = this._grokPattern;
    }
    if (this._grokPatterns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grokPatterns = this._grokPatterns?.internalValue;
    }
    if (this._keepTimeKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepTimeKey = this._keepTimeKey;
    }
    if (this._localTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.localTime = this._localTime;
    }
    if (this._multilineStartRegexp !== undefined) {
      hasAnyValues = true;
      internalValueResult.multilineStartRegexp = this._multilineStartRegexp;
    }
    if (this._nullEmptyString !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullEmptyString = this._nullEmptyString;
    }
    if (this._nullValuePattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullValuePattern = this._nullValuePattern;
    }
    if (this._timeFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeFormat = this._timeFormat;
    }
    if (this._timeKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeKey = this._timeKey;
    }
    if (this._timeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeType = this._timeType;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._types !== undefined) {
      hasAnyValues = true;
      internalValueResult.types = this._types;
    }
    if (this._utc !== undefined) {
      hasAnyValues = true;
      internalValueResult.utc = this._utc;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersPatterns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customPatternPath.internalValue = undefined;
      this._estimateCurrentEvent = undefined;
      this._expression = undefined;
      this._format = undefined;
      this._grokFailureKey = undefined;
      this._grokNameKey = undefined;
      this._grokPattern = undefined;
      this._grokPatterns.internalValue = undefined;
      this._keepTimeKey = undefined;
      this._localTime = undefined;
      this._multilineStartRegexp = undefined;
      this._nullEmptyString = undefined;
      this._nullValuePattern = undefined;
      this._timeFormat = undefined;
      this._timeKey = undefined;
      this._timeType = undefined;
      this._timezone = undefined;
      this._type = undefined;
      this._types = undefined;
      this._utc = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customPatternPath.internalValue = value.customPatternPath;
      this._estimateCurrentEvent = value.estimateCurrentEvent;
      this._expression = value.expression;
      this._format = value.format;
      this._grokFailureKey = value.grokFailureKey;
      this._grokNameKey = value.grokNameKey;
      this._grokPattern = value.grokPattern;
      this._grokPatterns.internalValue = value.grokPatterns;
      this._keepTimeKey = value.keepTimeKey;
      this._localTime = value.localTime;
      this._multilineStartRegexp = value.multilineStartRegexp;
      this._nullEmptyString = value.nullEmptyString;
      this._nullValuePattern = value.nullValuePattern;
      this._timeFormat = value.timeFormat;
      this._timeKey = value.timeKey;
      this._timeType = value.timeType;
      this._timezone = value.timezone;
      this._type = value.type;
      this._types = value.types;
      this._utc = value.utc;
    }
  }

  // custom_pattern_path - computed: false, optional: true, required: false
  private _customPatternPath = new DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersPatternsCustomPatternPathOutputReference(this, "custom_pattern_path");
  public get customPatternPath() {
    return this._customPatternPath;
  }
  public putCustomPatternPath(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersPatternsCustomPatternPath) {
    this._customPatternPath.internalValue = value;
  }
  public resetCustomPatternPath() {
    this._customPatternPath.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPatternPathInput() {
    return this._customPatternPath.internalValue;
  }

  // estimate_current_event - computed: false, optional: true, required: false
  private _estimateCurrentEvent?: boolean | cdktf.IResolvable; 
  public get estimateCurrentEvent() {
    return this.getBooleanAttribute('estimate_current_event');
  }
  public set estimateCurrentEvent(value: boolean | cdktf.IResolvable) {
    this._estimateCurrentEvent = value;
  }
  public resetEstimateCurrentEvent() {
    this._estimateCurrentEvent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get estimateCurrentEventInput() {
    return this._estimateCurrentEvent;
  }

  // expression - computed: false, optional: true, required: false
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  public resetExpression() {
    this._expression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // format - computed: false, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // grok_failure_key - computed: false, optional: true, required: false
  private _grokFailureKey?: string; 
  public get grokFailureKey() {
    return this.getStringAttribute('grok_failure_key');
  }
  public set grokFailureKey(value: string) {
    this._grokFailureKey = value;
  }
  public resetGrokFailureKey() {
    this._grokFailureKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grokFailureKeyInput() {
    return this._grokFailureKey;
  }

  // grok_name_key - computed: false, optional: true, required: false
  private _grokNameKey?: string; 
  public get grokNameKey() {
    return this.getStringAttribute('grok_name_key');
  }
  public set grokNameKey(value: string) {
    this._grokNameKey = value;
  }
  public resetGrokNameKey() {
    this._grokNameKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grokNameKeyInput() {
    return this._grokNameKey;
  }

  // grok_pattern - computed: false, optional: true, required: false
  private _grokPattern?: string; 
  public get grokPattern() {
    return this.getStringAttribute('grok_pattern');
  }
  public set grokPattern(value: string) {
    this._grokPattern = value;
  }
  public resetGrokPattern() {
    this._grokPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grokPatternInput() {
    return this._grokPattern;
  }

  // grok_patterns - computed: false, optional: true, required: false
  private _grokPatterns = new DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersPatternsGrokPatternsList(this, "grok_patterns", false);
  public get grokPatterns() {
    return this._grokPatterns;
  }
  public putGrokPatterns(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersPatternsGrokPatterns[] | cdktf.IResolvable) {
    this._grokPatterns.internalValue = value;
  }
  public resetGrokPatterns() {
    this._grokPatterns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grokPatternsInput() {
    return this._grokPatterns.internalValue;
  }

  // keep_time_key - computed: false, optional: true, required: false
  private _keepTimeKey?: boolean | cdktf.IResolvable; 
  public get keepTimeKey() {
    return this.getBooleanAttribute('keep_time_key');
  }
  public set keepTimeKey(value: boolean | cdktf.IResolvable) {
    this._keepTimeKey = value;
  }
  public resetKeepTimeKey() {
    this._keepTimeKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepTimeKeyInput() {
    return this._keepTimeKey;
  }

  // local_time - computed: false, optional: true, required: false
  private _localTime?: boolean | cdktf.IResolvable; 
  public get localTime() {
    return this.getBooleanAttribute('local_time');
  }
  public set localTime(value: boolean | cdktf.IResolvable) {
    this._localTime = value;
  }
  public resetLocalTime() {
    this._localTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localTimeInput() {
    return this._localTime;
  }

  // multiline_start_regexp - computed: false, optional: true, required: false
  private _multilineStartRegexp?: string; 
  public get multilineStartRegexp() {
    return this.getStringAttribute('multiline_start_regexp');
  }
  public set multilineStartRegexp(value: string) {
    this._multilineStartRegexp = value;
  }
  public resetMultilineStartRegexp() {
    this._multilineStartRegexp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multilineStartRegexpInput() {
    return this._multilineStartRegexp;
  }

  // null_empty_string - computed: false, optional: true, required: false
  private _nullEmptyString?: boolean | cdktf.IResolvable; 
  public get nullEmptyString() {
    return this.getBooleanAttribute('null_empty_string');
  }
  public set nullEmptyString(value: boolean | cdktf.IResolvable) {
    this._nullEmptyString = value;
  }
  public resetNullEmptyString() {
    this._nullEmptyString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullEmptyStringInput() {
    return this._nullEmptyString;
  }

  // null_value_pattern - computed: false, optional: true, required: false
  private _nullValuePattern?: string; 
  public get nullValuePattern() {
    return this.getStringAttribute('null_value_pattern');
  }
  public set nullValuePattern(value: string) {
    this._nullValuePattern = value;
  }
  public resetNullValuePattern() {
    this._nullValuePattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullValuePatternInput() {
    return this._nullValuePattern;
  }

  // time_format - computed: false, optional: true, required: false
  private _timeFormat?: string; 
  public get timeFormat() {
    return this.getStringAttribute('time_format');
  }
  public set timeFormat(value: string) {
    this._timeFormat = value;
  }
  public resetTimeFormat() {
    this._timeFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeFormatInput() {
    return this._timeFormat;
  }

  // time_key - computed: false, optional: true, required: false
  private _timeKey?: string; 
  public get timeKey() {
    return this.getStringAttribute('time_key');
  }
  public set timeKey(value: string) {
    this._timeKey = value;
  }
  public resetTimeKey() {
    this._timeKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeKeyInput() {
    return this._timeKey;
  }

  // time_type - computed: false, optional: true, required: false
  private _timeType?: string; 
  public get timeType() {
    return this.getStringAttribute('time_type');
  }
  public set timeType(value: string) {
    this._timeType = value;
  }
  public resetTimeType() {
    this._timeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeTypeInput() {
    return this._timeType;
  }

  // timezone - computed: false, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
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

  // types - computed: false, optional: true, required: false
  private _types?: string; 
  public get types() {
    return this.getStringAttribute('types');
  }
  public set types(value: string) {
    this._types = value;
  }
  public resetTypes() {
    this._types = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typesInput() {
    return this._types;
  }

  // utc - computed: false, optional: true, required: false
  private _utc?: boolean | cdktf.IResolvable; 
  public get utc() {
    return this.getBooleanAttribute('utc');
  }
  public set utc(value: boolean | cdktf.IResolvable) {
    this._utc = value;
  }
  public resetUtc() {
    this._utc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get utcInput() {
    return this._utc;
  }
}

export class DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersPatternsList extends cdktf.ComplexList {
  public internalValue? : DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersPatterns[] | cdktf.IResolvable

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
  public get(index: number): DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersPatternsOutputReference {
    return new DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersPatternsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#custom_pattern_path DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#custom_pattern_path}
  */
  readonly customPatternPath?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersCustomPatternPath;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#delimiter DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#delimiter}
  */
  readonly delimiter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#delimiter_pattern DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#delimiter_pattern}
  */
  readonly delimiterPattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#estimate_current_event DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#estimate_current_event}
  */
  readonly estimateCurrentEvent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#expression DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#expression}
  */
  readonly expression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#format DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#format_firstline DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#format_firstline}
  */
  readonly formatFirstline?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#grok_failure_key DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#grok_failure_key}
  */
  readonly grokFailureKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#grok_name_key DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#grok_name_key}
  */
  readonly grokNameKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#grok_pattern DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#grok_pattern}
  */
  readonly grokPattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#grok_patterns DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#grok_patterns}
  */
  readonly grokPatterns?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersGrokPatterns[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#keep_time_key DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#keep_time_key}
  */
  readonly keepTimeKey?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#keys DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#keys}
  */
  readonly keys?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#label_delimiter DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#label_delimiter}
  */
  readonly labelDelimiter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#local_time DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#local_time}
  */
  readonly localTime?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#multiline DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#multiline}
  */
  readonly multiline?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#multiline_start_regexp DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#multiline_start_regexp}
  */
  readonly multilineStartRegexp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#null_empty_string DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#null_empty_string}
  */
  readonly nullEmptyString?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#null_value_pattern DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#null_value_pattern}
  */
  readonly nullValuePattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#patterns DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#patterns}
  */
  readonly patterns?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersPatterns[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#time_format DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#time_format}
  */
  readonly timeFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#time_key DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#time_key}
  */
  readonly timeKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#time_type DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#time_type}
  */
  readonly timeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#timezone DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#timezone}
  */
  readonly timezone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#type DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#types DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#types}
  */
  readonly types?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#utc DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#utc}
  */
  readonly utc?: boolean | cdktf.IResolvable;
}

export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersToTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_pattern_path: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersCustomPatternPathToTerraform(struct!.customPatternPath),
    delimiter: cdktf.stringToTerraform(struct!.delimiter),
    delimiter_pattern: cdktf.stringToTerraform(struct!.delimiterPattern),
    estimate_current_event: cdktf.booleanToTerraform(struct!.estimateCurrentEvent),
    expression: cdktf.stringToTerraform(struct!.expression),
    format: cdktf.stringToTerraform(struct!.format),
    format_firstline: cdktf.stringToTerraform(struct!.formatFirstline),
    grok_failure_key: cdktf.stringToTerraform(struct!.grokFailureKey),
    grok_name_key: cdktf.stringToTerraform(struct!.grokNameKey),
    grok_pattern: cdktf.stringToTerraform(struct!.grokPattern),
    grok_patterns: cdktf.listMapper(dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersGrokPatternsToTerraform, false)(struct!.grokPatterns),
    keep_time_key: cdktf.booleanToTerraform(struct!.keepTimeKey),
    keys: cdktf.stringToTerraform(struct!.keys),
    label_delimiter: cdktf.stringToTerraform(struct!.labelDelimiter),
    local_time: cdktf.booleanToTerraform(struct!.localTime),
    multiline: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.multiline),
    multiline_start_regexp: cdktf.stringToTerraform(struct!.multilineStartRegexp),
    null_empty_string: cdktf.booleanToTerraform(struct!.nullEmptyString),
    null_value_pattern: cdktf.stringToTerraform(struct!.nullValuePattern),
    patterns: cdktf.listMapper(dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersPatternsToTerraform, false)(struct!.patterns),
    time_format: cdktf.stringToTerraform(struct!.timeFormat),
    time_key: cdktf.stringToTerraform(struct!.timeKey),
    time_type: cdktf.stringToTerraform(struct!.timeType),
    timezone: cdktf.stringToTerraform(struct!.timezone),
    type: cdktf.stringToTerraform(struct!.type),
    types: cdktf.stringToTerraform(struct!.types),
    utc: cdktf.booleanToTerraform(struct!.utc),
  }
}


export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_pattern_path: {
      value: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersCustomPatternPathToHclTerraform(struct!.customPatternPath),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersCustomPatternPath",
    },
    delimiter: {
      value: cdktf.stringToHclTerraform(struct!.delimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delimiter_pattern: {
      value: cdktf.stringToHclTerraform(struct!.delimiterPattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    estimate_current_event: {
      value: cdktf.booleanToHclTerraform(struct!.estimateCurrentEvent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    format_firstline: {
      value: cdktf.stringToHclTerraform(struct!.formatFirstline),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grok_failure_key: {
      value: cdktf.stringToHclTerraform(struct!.grokFailureKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grok_name_key: {
      value: cdktf.stringToHclTerraform(struct!.grokNameKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grok_pattern: {
      value: cdktf.stringToHclTerraform(struct!.grokPattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grok_patterns: {
      value: cdktf.listMapperHcl(dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersGrokPatternsToHclTerraform, false)(struct!.grokPatterns),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersGrokPatternsList",
    },
    keep_time_key: {
      value: cdktf.booleanToHclTerraform(struct!.keepTimeKey),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    keys: {
      value: cdktf.stringToHclTerraform(struct!.keys),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label_delimiter: {
      value: cdktf.stringToHclTerraform(struct!.labelDelimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_time: {
      value: cdktf.booleanToHclTerraform(struct!.localTime),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    multiline: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.multiline),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    multiline_start_regexp: {
      value: cdktf.stringToHclTerraform(struct!.multilineStartRegexp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    null_empty_string: {
      value: cdktf.booleanToHclTerraform(struct!.nullEmptyString),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    null_value_pattern: {
      value: cdktf.stringToHclTerraform(struct!.nullValuePattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    patterns: {
      value: cdktf.listMapperHcl(dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersPatternsToHclTerraform, false)(struct!.patterns),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersPatternsList",
    },
    time_format: {
      value: cdktf.stringToHclTerraform(struct!.timeFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_key: {
      value: cdktf.stringToHclTerraform(struct!.timeKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_type: {
      value: cdktf.stringToHclTerraform(struct!.timeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timezone: {
      value: cdktf.stringToHclTerraform(struct!.timezone),
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
    types: {
      value: cdktf.stringToHclTerraform(struct!.types),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    utc: {
      value: cdktf.booleanToHclTerraform(struct!.utc),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customPatternPath?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPatternPath = this._customPatternPath?.internalValue;
    }
    if (this._delimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.delimiter = this._delimiter;
    }
    if (this._delimiterPattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.delimiterPattern = this._delimiterPattern;
    }
    if (this._estimateCurrentEvent !== undefined) {
      hasAnyValues = true;
      internalValueResult.estimateCurrentEvent = this._estimateCurrentEvent;
    }
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._formatFirstline !== undefined) {
      hasAnyValues = true;
      internalValueResult.formatFirstline = this._formatFirstline;
    }
    if (this._grokFailureKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.grokFailureKey = this._grokFailureKey;
    }
    if (this._grokNameKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.grokNameKey = this._grokNameKey;
    }
    if (this._grokPattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.grokPattern = this._grokPattern;
    }
    if (this._grokPatterns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grokPatterns = this._grokPatterns?.internalValue;
    }
    if (this._keepTimeKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepTimeKey = this._keepTimeKey;
    }
    if (this._keys !== undefined) {
      hasAnyValues = true;
      internalValueResult.keys = this._keys;
    }
    if (this._labelDelimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelDelimiter = this._labelDelimiter;
    }
    if (this._localTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.localTime = this._localTime;
    }
    if (this._multiline !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiline = this._multiline;
    }
    if (this._multilineStartRegexp !== undefined) {
      hasAnyValues = true;
      internalValueResult.multilineStartRegexp = this._multilineStartRegexp;
    }
    if (this._nullEmptyString !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullEmptyString = this._nullEmptyString;
    }
    if (this._nullValuePattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullValuePattern = this._nullValuePattern;
    }
    if (this._patterns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.patterns = this._patterns?.internalValue;
    }
    if (this._timeFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeFormat = this._timeFormat;
    }
    if (this._timeKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeKey = this._timeKey;
    }
    if (this._timeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeType = this._timeType;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._types !== undefined) {
      hasAnyValues = true;
      internalValueResult.types = this._types;
    }
    if (this._utc !== undefined) {
      hasAnyValues = true;
      internalValueResult.utc = this._utc;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customPatternPath.internalValue = undefined;
      this._delimiter = undefined;
      this._delimiterPattern = undefined;
      this._estimateCurrentEvent = undefined;
      this._expression = undefined;
      this._format = undefined;
      this._formatFirstline = undefined;
      this._grokFailureKey = undefined;
      this._grokNameKey = undefined;
      this._grokPattern = undefined;
      this._grokPatterns.internalValue = undefined;
      this._keepTimeKey = undefined;
      this._keys = undefined;
      this._labelDelimiter = undefined;
      this._localTime = undefined;
      this._multiline = undefined;
      this._multilineStartRegexp = undefined;
      this._nullEmptyString = undefined;
      this._nullValuePattern = undefined;
      this._patterns.internalValue = undefined;
      this._timeFormat = undefined;
      this._timeKey = undefined;
      this._timeType = undefined;
      this._timezone = undefined;
      this._type = undefined;
      this._types = undefined;
      this._utc = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customPatternPath.internalValue = value.customPatternPath;
      this._delimiter = value.delimiter;
      this._delimiterPattern = value.delimiterPattern;
      this._estimateCurrentEvent = value.estimateCurrentEvent;
      this._expression = value.expression;
      this._format = value.format;
      this._formatFirstline = value.formatFirstline;
      this._grokFailureKey = value.grokFailureKey;
      this._grokNameKey = value.grokNameKey;
      this._grokPattern = value.grokPattern;
      this._grokPatterns.internalValue = value.grokPatterns;
      this._keepTimeKey = value.keepTimeKey;
      this._keys = value.keys;
      this._labelDelimiter = value.labelDelimiter;
      this._localTime = value.localTime;
      this._multiline = value.multiline;
      this._multilineStartRegexp = value.multilineStartRegexp;
      this._nullEmptyString = value.nullEmptyString;
      this._nullValuePattern = value.nullValuePattern;
      this._patterns.internalValue = value.patterns;
      this._timeFormat = value.timeFormat;
      this._timeKey = value.timeKey;
      this._timeType = value.timeType;
      this._timezone = value.timezone;
      this._type = value.type;
      this._types = value.types;
      this._utc = value.utc;
    }
  }

  // custom_pattern_path - computed: false, optional: true, required: false
  private _customPatternPath = new DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersCustomPatternPathOutputReference(this, "custom_pattern_path");
  public get customPatternPath() {
    return this._customPatternPath;
  }
  public putCustomPatternPath(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersCustomPatternPath) {
    this._customPatternPath.internalValue = value;
  }
  public resetCustomPatternPath() {
    this._customPatternPath.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPatternPathInput() {
    return this._customPatternPath.internalValue;
  }

  // delimiter - computed: false, optional: true, required: false
  private _delimiter?: string; 
  public get delimiter() {
    return this.getStringAttribute('delimiter');
  }
  public set delimiter(value: string) {
    this._delimiter = value;
  }
  public resetDelimiter() {
    this._delimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delimiterInput() {
    return this._delimiter;
  }

  // delimiter_pattern - computed: false, optional: true, required: false
  private _delimiterPattern?: string; 
  public get delimiterPattern() {
    return this.getStringAttribute('delimiter_pattern');
  }
  public set delimiterPattern(value: string) {
    this._delimiterPattern = value;
  }
  public resetDelimiterPattern() {
    this._delimiterPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delimiterPatternInput() {
    return this._delimiterPattern;
  }

  // estimate_current_event - computed: false, optional: true, required: false
  private _estimateCurrentEvent?: boolean | cdktf.IResolvable; 
  public get estimateCurrentEvent() {
    return this.getBooleanAttribute('estimate_current_event');
  }
  public set estimateCurrentEvent(value: boolean | cdktf.IResolvable) {
    this._estimateCurrentEvent = value;
  }
  public resetEstimateCurrentEvent() {
    this._estimateCurrentEvent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get estimateCurrentEventInput() {
    return this._estimateCurrentEvent;
  }

  // expression - computed: false, optional: true, required: false
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  public resetExpression() {
    this._expression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // format - computed: false, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // format_firstline - computed: false, optional: true, required: false
  private _formatFirstline?: string; 
  public get formatFirstline() {
    return this.getStringAttribute('format_firstline');
  }
  public set formatFirstline(value: string) {
    this._formatFirstline = value;
  }
  public resetFormatFirstline() {
    this._formatFirstline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatFirstlineInput() {
    return this._formatFirstline;
  }

  // grok_failure_key - computed: false, optional: true, required: false
  private _grokFailureKey?: string; 
  public get grokFailureKey() {
    return this.getStringAttribute('grok_failure_key');
  }
  public set grokFailureKey(value: string) {
    this._grokFailureKey = value;
  }
  public resetGrokFailureKey() {
    this._grokFailureKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grokFailureKeyInput() {
    return this._grokFailureKey;
  }

  // grok_name_key - computed: false, optional: true, required: false
  private _grokNameKey?: string; 
  public get grokNameKey() {
    return this.getStringAttribute('grok_name_key');
  }
  public set grokNameKey(value: string) {
    this._grokNameKey = value;
  }
  public resetGrokNameKey() {
    this._grokNameKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grokNameKeyInput() {
    return this._grokNameKey;
  }

  // grok_pattern - computed: false, optional: true, required: false
  private _grokPattern?: string; 
  public get grokPattern() {
    return this.getStringAttribute('grok_pattern');
  }
  public set grokPattern(value: string) {
    this._grokPattern = value;
  }
  public resetGrokPattern() {
    this._grokPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grokPatternInput() {
    return this._grokPattern;
  }

  // grok_patterns - computed: false, optional: true, required: false
  private _grokPatterns = new DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersGrokPatternsList(this, "grok_patterns", false);
  public get grokPatterns() {
    return this._grokPatterns;
  }
  public putGrokPatterns(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersGrokPatterns[] | cdktf.IResolvable) {
    this._grokPatterns.internalValue = value;
  }
  public resetGrokPatterns() {
    this._grokPatterns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grokPatternsInput() {
    return this._grokPatterns.internalValue;
  }

  // keep_time_key - computed: false, optional: true, required: false
  private _keepTimeKey?: boolean | cdktf.IResolvable; 
  public get keepTimeKey() {
    return this.getBooleanAttribute('keep_time_key');
  }
  public set keepTimeKey(value: boolean | cdktf.IResolvable) {
    this._keepTimeKey = value;
  }
  public resetKeepTimeKey() {
    this._keepTimeKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepTimeKeyInput() {
    return this._keepTimeKey;
  }

  // keys - computed: false, optional: true, required: false
  private _keys?: string; 
  public get keys() {
    return this.getStringAttribute('keys');
  }
  public set keys(value: string) {
    this._keys = value;
  }
  public resetKeys() {
    this._keys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keysInput() {
    return this._keys;
  }

  // label_delimiter - computed: false, optional: true, required: false
  private _labelDelimiter?: string; 
  public get labelDelimiter() {
    return this.getStringAttribute('label_delimiter');
  }
  public set labelDelimiter(value: string) {
    this._labelDelimiter = value;
  }
  public resetLabelDelimiter() {
    this._labelDelimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelDelimiterInput() {
    return this._labelDelimiter;
  }

  // local_time - computed: false, optional: true, required: false
  private _localTime?: boolean | cdktf.IResolvable; 
  public get localTime() {
    return this.getBooleanAttribute('local_time');
  }
  public set localTime(value: boolean | cdktf.IResolvable) {
    this._localTime = value;
  }
  public resetLocalTime() {
    this._localTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localTimeInput() {
    return this._localTime;
  }

  // multiline - computed: false, optional: true, required: false
  private _multiline?: string[]; 
  public get multiline() {
    return this.getListAttribute('multiline');
  }
  public set multiline(value: string[]) {
    this._multiline = value;
  }
  public resetMultiline() {
    this._multiline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multilineInput() {
    return this._multiline;
  }

  // multiline_start_regexp - computed: false, optional: true, required: false
  private _multilineStartRegexp?: string; 
  public get multilineStartRegexp() {
    return this.getStringAttribute('multiline_start_regexp');
  }
  public set multilineStartRegexp(value: string) {
    this._multilineStartRegexp = value;
  }
  public resetMultilineStartRegexp() {
    this._multilineStartRegexp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multilineStartRegexpInput() {
    return this._multilineStartRegexp;
  }

  // null_empty_string - computed: false, optional: true, required: false
  private _nullEmptyString?: boolean | cdktf.IResolvable; 
  public get nullEmptyString() {
    return this.getBooleanAttribute('null_empty_string');
  }
  public set nullEmptyString(value: boolean | cdktf.IResolvable) {
    this._nullEmptyString = value;
  }
  public resetNullEmptyString() {
    this._nullEmptyString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullEmptyStringInput() {
    return this._nullEmptyString;
  }

  // null_value_pattern - computed: false, optional: true, required: false
  private _nullValuePattern?: string; 
  public get nullValuePattern() {
    return this.getStringAttribute('null_value_pattern');
  }
  public set nullValuePattern(value: string) {
    this._nullValuePattern = value;
  }
  public resetNullValuePattern() {
    this._nullValuePattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullValuePatternInput() {
    return this._nullValuePattern;
  }

  // patterns - computed: false, optional: true, required: false
  private _patterns = new DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersPatternsList(this, "patterns", false);
  public get patterns() {
    return this._patterns;
  }
  public putPatterns(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersPatterns[] | cdktf.IResolvable) {
    this._patterns.internalValue = value;
  }
  public resetPatterns() {
    this._patterns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternsInput() {
    return this._patterns.internalValue;
  }

  // time_format - computed: false, optional: true, required: false
  private _timeFormat?: string; 
  public get timeFormat() {
    return this.getStringAttribute('time_format');
  }
  public set timeFormat(value: string) {
    this._timeFormat = value;
  }
  public resetTimeFormat() {
    this._timeFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeFormatInput() {
    return this._timeFormat;
  }

  // time_key - computed: false, optional: true, required: false
  private _timeKey?: string; 
  public get timeKey() {
    return this.getStringAttribute('time_key');
  }
  public set timeKey(value: string) {
    this._timeKey = value;
  }
  public resetTimeKey() {
    this._timeKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeKeyInput() {
    return this._timeKey;
  }

  // time_type - computed: false, optional: true, required: false
  private _timeType?: string; 
  public get timeType() {
    return this.getStringAttribute('time_type');
  }
  public set timeType(value: string) {
    this._timeType = value;
  }
  public resetTimeType() {
    this._timeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeTypeInput() {
    return this._timeType;
  }

  // timezone - computed: false, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
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

  // types - computed: false, optional: true, required: false
  private _types?: string; 
  public get types() {
    return this.getStringAttribute('types');
  }
  public set types(value: string) {
    this._types = value;
  }
  public resetTypes() {
    this._types = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typesInput() {
    return this._types;
  }

  // utc - computed: false, optional: true, required: false
  private _utc?: boolean | cdktf.IResolvable; 
  public get utc() {
    return this.getBooleanAttribute('utc');
  }
  public set utc(value: boolean | cdktf.IResolvable) {
    this._utc = value;
  }
  public resetUtc() {
    this._utc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get utcInput() {
    return this._utc;
  }
}

export class DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersList extends cdktf.ComplexList {
  public internalValue? : DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsers[] | cdktf.IResolvable

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
  public get(index: number): DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersOutputReference {
    return new DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParser {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#emit_invalid_record_to_error DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#emit_invalid_record_to_error}
  */
  readonly emitInvalidRecordToError?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#hash_value_field DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#hash_value_field}
  */
  readonly hashValueField?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#inject_key_prefix DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#inject_key_prefix}
  */
  readonly injectKeyPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#key_name DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#key_name}
  */
  readonly keyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#parse DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#parse}
  */
  readonly parse?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParse;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#parsers DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#parsers}
  */
  readonly parsers?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsers[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#remove_key_name_field DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#remove_key_name_field}
  */
  readonly removeKeyNameField?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#replace_invalid_sequence DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#replace_invalid_sequence}
  */
  readonly replaceInvalidSequence?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#reserve_data DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#reserve_data}
  */
  readonly reserveData?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#reserve_time DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#reserve_time}
  */
  readonly reserveTime?: boolean | cdktf.IResolvable;
}

export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserToTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    emit_invalid_record_to_error: cdktf.booleanToTerraform(struct!.emitInvalidRecordToError),
    hash_value_field: cdktf.stringToTerraform(struct!.hashValueField),
    inject_key_prefix: cdktf.stringToTerraform(struct!.injectKeyPrefix),
    key_name: cdktf.stringToTerraform(struct!.keyName),
    parse: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParseToTerraform(struct!.parse),
    parsers: cdktf.listMapper(dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersToTerraform, false)(struct!.parsers),
    remove_key_name_field: cdktf.booleanToTerraform(struct!.removeKeyNameField),
    replace_invalid_sequence: cdktf.booleanToTerraform(struct!.replaceInvalidSequence),
    reserve_data: cdktf.booleanToTerraform(struct!.reserveData),
    reserve_time: cdktf.booleanToTerraform(struct!.reserveTime),
  }
}


export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    emit_invalid_record_to_error: {
      value: cdktf.booleanToHclTerraform(struct!.emitInvalidRecordToError),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hash_value_field: {
      value: cdktf.stringToHclTerraform(struct!.hashValueField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inject_key_prefix: {
      value: cdktf.stringToHclTerraform(struct!.injectKeyPrefix),
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
    parse: {
      value: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParseToHclTerraform(struct!.parse),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParse",
    },
    parsers: {
      value: cdktf.listMapperHcl(dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersToHclTerraform, false)(struct!.parsers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersList",
    },
    remove_key_name_field: {
      value: cdktf.booleanToHclTerraform(struct!.removeKeyNameField),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    replace_invalid_sequence: {
      value: cdktf.booleanToHclTerraform(struct!.replaceInvalidSequence),
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
    reserve_time: {
      value: cdktf.booleanToHclTerraform(struct!.reserveTime),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParser | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._emitInvalidRecordToError !== undefined) {
      hasAnyValues = true;
      internalValueResult.emitInvalidRecordToError = this._emitInvalidRecordToError;
    }
    if (this._hashValueField !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashValueField = this._hashValueField;
    }
    if (this._injectKeyPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.injectKeyPrefix = this._injectKeyPrefix;
    }
    if (this._keyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyName = this._keyName;
    }
    if (this._parse?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parse = this._parse?.internalValue;
    }
    if (this._parsers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parsers = this._parsers?.internalValue;
    }
    if (this._removeKeyNameField !== undefined) {
      hasAnyValues = true;
      internalValueResult.removeKeyNameField = this._removeKeyNameField;
    }
    if (this._replaceInvalidSequence !== undefined) {
      hasAnyValues = true;
      internalValueResult.replaceInvalidSequence = this._replaceInvalidSequence;
    }
    if (this._reserveData !== undefined) {
      hasAnyValues = true;
      internalValueResult.reserveData = this._reserveData;
    }
    if (this._reserveTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.reserveTime = this._reserveTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParser | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._emitInvalidRecordToError = undefined;
      this._hashValueField = undefined;
      this._injectKeyPrefix = undefined;
      this._keyName = undefined;
      this._parse.internalValue = undefined;
      this._parsers.internalValue = undefined;
      this._removeKeyNameField = undefined;
      this._replaceInvalidSequence = undefined;
      this._reserveData = undefined;
      this._reserveTime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._emitInvalidRecordToError = value.emitInvalidRecordToError;
      this._hashValueField = value.hashValueField;
      this._injectKeyPrefix = value.injectKeyPrefix;
      this._keyName = value.keyName;
      this._parse.internalValue = value.parse;
      this._parsers.internalValue = value.parsers;
      this._removeKeyNameField = value.removeKeyNameField;
      this._replaceInvalidSequence = value.replaceInvalidSequence;
      this._reserveData = value.reserveData;
      this._reserveTime = value.reserveTime;
    }
  }

  // emit_invalid_record_to_error - computed: false, optional: true, required: false
  private _emitInvalidRecordToError?: boolean | cdktf.IResolvable; 
  public get emitInvalidRecordToError() {
    return this.getBooleanAttribute('emit_invalid_record_to_error');
  }
  public set emitInvalidRecordToError(value: boolean | cdktf.IResolvable) {
    this._emitInvalidRecordToError = value;
  }
  public resetEmitInvalidRecordToError() {
    this._emitInvalidRecordToError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emitInvalidRecordToErrorInput() {
    return this._emitInvalidRecordToError;
  }

  // hash_value_field - computed: false, optional: true, required: false
  private _hashValueField?: string; 
  public get hashValueField() {
    return this.getStringAttribute('hash_value_field');
  }
  public set hashValueField(value: string) {
    this._hashValueField = value;
  }
  public resetHashValueField() {
    this._hashValueField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashValueFieldInput() {
    return this._hashValueField;
  }

  // inject_key_prefix - computed: false, optional: true, required: false
  private _injectKeyPrefix?: string; 
  public get injectKeyPrefix() {
    return this.getStringAttribute('inject_key_prefix');
  }
  public set injectKeyPrefix(value: string) {
    this._injectKeyPrefix = value;
  }
  public resetInjectKeyPrefix() {
    this._injectKeyPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get injectKeyPrefixInput() {
    return this._injectKeyPrefix;
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

  // parse - computed: false, optional: true, required: false
  private _parse = new DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParseOutputReference(this, "parse");
  public get parse() {
    return this._parse;
  }
  public putParse(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParse) {
    this._parse.internalValue = value;
  }
  public resetParse() {
    this._parse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parseInput() {
    return this._parse.internalValue;
  }

  // parsers - computed: false, optional: true, required: false
  private _parsers = new DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsersList(this, "parsers", false);
  public get parsers() {
    return this._parsers;
  }
  public putParsers(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserParsers[] | cdktf.IResolvable) {
    this._parsers.internalValue = value;
  }
  public resetParsers() {
    this._parsers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parsersInput() {
    return this._parsers.internalValue;
  }

  // remove_key_name_field - computed: false, optional: true, required: false
  private _removeKeyNameField?: boolean | cdktf.IResolvable; 
  public get removeKeyNameField() {
    return this.getBooleanAttribute('remove_key_name_field');
  }
  public set removeKeyNameField(value: boolean | cdktf.IResolvable) {
    this._removeKeyNameField = value;
  }
  public resetRemoveKeyNameField() {
    this._removeKeyNameField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeKeyNameFieldInput() {
    return this._removeKeyNameField;
  }

  // replace_invalid_sequence - computed: false, optional: true, required: false
  private _replaceInvalidSequence?: boolean | cdktf.IResolvable; 
  public get replaceInvalidSequence() {
    return this.getBooleanAttribute('replace_invalid_sequence');
  }
  public set replaceInvalidSequence(value: boolean | cdktf.IResolvable) {
    this._replaceInvalidSequence = value;
  }
  public resetReplaceInvalidSequence() {
    this._replaceInvalidSequence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceInvalidSequenceInput() {
    return this._replaceInvalidSequence;
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

  // reserve_time - computed: false, optional: true, required: false
  private _reserveTime?: boolean | cdktf.IResolvable; 
  public get reserveTime() {
    return this.getBooleanAttribute('reserve_time');
  }
  public set reserveTime(value: boolean | cdktf.IResolvable) {
    this._reserveTime = value;
  }
  public resetReserveTime() {
    this._reserveTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reserveTimeInput() {
    return this._reserveTime;
  }
}
export interface DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersPrometheusMetrics {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#buckets DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#buckets}
  */
  readonly buckets?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#desc DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#desc}
  */
  readonly desc: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#key DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#labels DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#name DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#type DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#type}
  */
  readonly type: string;
}

export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersPrometheusMetricsToTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersPrometheusMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    buckets: cdktf.stringToTerraform(struct!.buckets),
    desc: cdktf.stringToTerraform(struct!.desc),
    key: cdktf.stringToTerraform(struct!.key),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersPrometheusMetricsToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersPrometheusMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    buckets: {
      value: cdktf.stringToHclTerraform(struct!.buckets),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    desc: {
      value: cdktf.stringToHclTerraform(struct!.desc),
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

export class DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersPrometheusMetricsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersPrometheusMetrics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._buckets !== undefined) {
      hasAnyValues = true;
      internalValueResult.buckets = this._buckets;
    }
    if (this._desc !== undefined) {
      hasAnyValues = true;
      internalValueResult.desc = this._desc;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersPrometheusMetrics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._buckets = undefined;
      this._desc = undefined;
      this._key = undefined;
      this._labels = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._buckets = value.buckets;
      this._desc = value.desc;
      this._key = value.key;
      this._labels = value.labels;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // buckets - computed: false, optional: true, required: false
  private _buckets?: string; 
  public get buckets() {
    return this.getStringAttribute('buckets');
  }
  public set buckets(value: string) {
    this._buckets = value;
  }
  public resetBuckets() {
    this._buckets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketsInput() {
    return this._buckets;
  }

  // desc - computed: false, optional: false, required: true
  private _desc?: string; 
  public get desc() {
    return this.getStringAttribute('desc');
  }
  public set desc(value: string) {
    this._desc = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descInput() {
    return this._desc;
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

export class DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersPrometheusMetricsList extends cdktf.ComplexList {
  public internalValue? : DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersPrometheusMetrics[] | cdktf.IResolvable

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
  public get(index: number): DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersPrometheusMetricsOutputReference {
    return new DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersPrometheusMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersPrometheus {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#labels DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#metrics DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#metrics}
  */
  readonly metrics?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersPrometheusMetrics[] | cdktf.IResolvable;
}

export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersPrometheusToTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersPrometheus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    metrics: cdktf.listMapper(dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersPrometheusMetricsToTerraform, false)(struct!.metrics),
  }
}


export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersPrometheusToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersPrometheus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    metrics: {
      value: cdktf.listMapperHcl(dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersPrometheusMetricsToHclTerraform, false)(struct!.metrics),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersPrometheusMetricsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersPrometheusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersPrometheus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._metrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metrics = this._metrics?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersPrometheus | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labels = undefined;
      this._metrics.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labels = value.labels;
      this._metrics.internalValue = value.metrics;
    }
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

  // metrics - computed: false, optional: true, required: false
  private _metrics = new DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersPrometheusMetricsList(this, "metrics", false);
  public get metrics() {
    return this._metrics;
  }
  public putMetrics(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersPrometheusMetrics[] | cdktf.IResolvable) {
    this._metrics.internalValue = value;
  }
  public resetMetrics() {
    this._metrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsInput() {
    return this._metrics.internalValue;
  }
}
export interface DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersRecordModifierReplaces {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#expression DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#expression}
  */
  readonly expression: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#key DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#replace DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#replace}
  */
  readonly replace: string;
}

export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersRecordModifierReplacesToTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersRecordModifierReplaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expression: cdktf.stringToTerraform(struct!.expression),
    key: cdktf.stringToTerraform(struct!.key),
    replace: cdktf.stringToTerraform(struct!.replace),
  }
}


export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersRecordModifierReplacesToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersRecordModifierReplaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
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
    replace: {
      value: cdktf.stringToHclTerraform(struct!.replace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersRecordModifierReplacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersRecordModifierReplaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._replace !== undefined) {
      hasAnyValues = true;
      internalValueResult.replace = this._replace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersRecordModifierReplaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expression = undefined;
      this._key = undefined;
      this._replace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expression = value.expression;
      this._key = value.key;
      this._replace = value.replace;
    }
  }

  // expression - computed: false, optional: false, required: true
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
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

  // replace - computed: false, optional: false, required: true
  private _replace?: string; 
  public get replace() {
    return this.getStringAttribute('replace');
  }
  public set replace(value: string) {
    this._replace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceInput() {
    return this._replace;
  }
}

export class DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersRecordModifierReplacesList extends cdktf.ComplexList {
  public internalValue? : DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersRecordModifierReplaces[] | cdktf.IResolvable

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
  public get(index: number): DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersRecordModifierReplacesOutputReference {
    return new DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersRecordModifierReplacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersRecordModifier {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#char_encoding DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#char_encoding}
  */
  readonly charEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#prepare_value DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#prepare_value}
  */
  readonly prepareValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#records DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#records}
  */
  readonly records?: { [key: string]: string }[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#remove_keys DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#remove_keys}
  */
  readonly removeKeys?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#replaces DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#replaces}
  */
  readonly replaces?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersRecordModifierReplaces[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#whitelist_keys DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#whitelist_keys}
  */
  readonly whitelistKeys?: string;
}

export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersRecordModifierToTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersRecordModifier | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    char_encoding: cdktf.stringToTerraform(struct!.charEncoding),
    prepare_value: cdktf.stringToTerraform(struct!.prepareValue),
    records: cdktf.listMapper(cdktf.hashMapper(cdktf.stringToTerraform), false)(struct!.records),
    remove_keys: cdktf.stringToTerraform(struct!.removeKeys),
    replaces: cdktf.listMapper(dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersRecordModifierReplacesToTerraform, false)(struct!.replaces),
    whitelist_keys: cdktf.stringToTerraform(struct!.whitelistKeys),
  }
}


export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersRecordModifierToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersRecordModifier | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    char_encoding: {
      value: cdktf.stringToHclTerraform(struct!.charEncoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prepare_value: {
      value: cdktf.stringToHclTerraform(struct!.prepareValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    records: {
      value: cdktf.listMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform), false)(struct!.records),
      isBlock: false,
      type: "list",
      storageClassType: "stringMapList",
    },
    remove_keys: {
      value: cdktf.stringToHclTerraform(struct!.removeKeys),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replaces: {
      value: cdktf.listMapperHcl(dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersRecordModifierReplacesToHclTerraform, false)(struct!.replaces),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersRecordModifierReplacesList",
    },
    whitelist_keys: {
      value: cdktf.stringToHclTerraform(struct!.whitelistKeys),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersRecordModifierOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersRecordModifier | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._charEncoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.charEncoding = this._charEncoding;
    }
    if (this._prepareValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prepareValue = this._prepareValue;
    }
    if (this._records !== undefined) {
      hasAnyValues = true;
      internalValueResult.records = this._records;
    }
    if (this._removeKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.removeKeys = this._removeKeys;
    }
    if (this._replaces?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.replaces = this._replaces?.internalValue;
    }
    if (this._whitelistKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.whitelistKeys = this._whitelistKeys;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersRecordModifier | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._charEncoding = undefined;
      this._prepareValue = undefined;
      this._records = undefined;
      this._removeKeys = undefined;
      this._replaces.internalValue = undefined;
      this._whitelistKeys = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._charEncoding = value.charEncoding;
      this._prepareValue = value.prepareValue;
      this._records = value.records;
      this._removeKeys = value.removeKeys;
      this._replaces.internalValue = value.replaces;
      this._whitelistKeys = value.whitelistKeys;
    }
  }

  // char_encoding - computed: false, optional: true, required: false
  private _charEncoding?: string; 
  public get charEncoding() {
    return this.getStringAttribute('char_encoding');
  }
  public set charEncoding(value: string) {
    this._charEncoding = value;
  }
  public resetCharEncoding() {
    this._charEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get charEncodingInput() {
    return this._charEncoding;
  }

  // prepare_value - computed: false, optional: true, required: false
  private _prepareValue?: string; 
  public get prepareValue() {
    return this.getStringAttribute('prepare_value');
  }
  public set prepareValue(value: string) {
    this._prepareValue = value;
  }
  public resetPrepareValue() {
    this._prepareValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prepareValueInput() {
    return this._prepareValue;
  }

  // records - computed: false, optional: true, required: false
  private _records?: { [key: string]: string }[] | cdktf.IResolvable; 
  public get records() {
    return this.interpolationForAttribute('records');
  }
  public set records(value: { [key: string]: string }[] | cdktf.IResolvable) {
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
  private _removeKeys?: string; 
  public get removeKeys() {
    return this.getStringAttribute('remove_keys');
  }
  public set removeKeys(value: string) {
    this._removeKeys = value;
  }
  public resetRemoveKeys() {
    this._removeKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeKeysInput() {
    return this._removeKeys;
  }

  // replaces - computed: false, optional: true, required: false
  private _replaces = new DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersRecordModifierReplacesList(this, "replaces", false);
  public get replaces() {
    return this._replaces;
  }
  public putReplaces(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersRecordModifierReplaces[] | cdktf.IResolvable) {
    this._replaces.internalValue = value;
  }
  public resetReplaces() {
    this._replaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replacesInput() {
    return this._replaces.internalValue;
  }

  // whitelist_keys - computed: false, optional: true, required: false
  private _whitelistKeys?: string; 
  public get whitelistKeys() {
    return this.getStringAttribute('whitelist_keys');
  }
  public set whitelistKeys(value: string) {
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
export interface DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersRecordTransformer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#auto_typecast DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#auto_typecast}
  */
  readonly autoTypecast?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#enable_ruby DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#enable_ruby}
  */
  readonly enableRuby?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#keep_keys DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#keep_keys}
  */
  readonly keepKeys?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#records DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#records}
  */
  readonly records?: { [key: string]: string }[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#remove_keys DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#remove_keys}
  */
  readonly removeKeys?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#renew_record DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#renew_record}
  */
  readonly renewRecord?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#renew_time_key DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#renew_time_key}
  */
  readonly renewTimeKey?: string;
}

export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersRecordTransformerToTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersRecordTransformer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_typecast: cdktf.booleanToTerraform(struct!.autoTypecast),
    enable_ruby: cdktf.booleanToTerraform(struct!.enableRuby),
    keep_keys: cdktf.stringToTerraform(struct!.keepKeys),
    records: cdktf.listMapper(cdktf.hashMapper(cdktf.stringToTerraform), false)(struct!.records),
    remove_keys: cdktf.stringToTerraform(struct!.removeKeys),
    renew_record: cdktf.booleanToTerraform(struct!.renewRecord),
    renew_time_key: cdktf.stringToTerraform(struct!.renewTimeKey),
  }
}


export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersRecordTransformerToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersRecordTransformer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_typecast: {
      value: cdktf.booleanToHclTerraform(struct!.autoTypecast),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_ruby: {
      value: cdktf.booleanToHclTerraform(struct!.enableRuby),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    keep_keys: {
      value: cdktf.stringToHclTerraform(struct!.keepKeys),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    records: {
      value: cdktf.listMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform), false)(struct!.records),
      isBlock: false,
      type: "list",
      storageClassType: "stringMapList",
    },
    remove_keys: {
      value: cdktf.stringToHclTerraform(struct!.removeKeys),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    renew_record: {
      value: cdktf.booleanToHclTerraform(struct!.renewRecord),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    renew_time_key: {
      value: cdktf.stringToHclTerraform(struct!.renewTimeKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersRecordTransformerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersRecordTransformer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoTypecast !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoTypecast = this._autoTypecast;
    }
    if (this._enableRuby !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableRuby = this._enableRuby;
    }
    if (this._keepKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepKeys = this._keepKeys;
    }
    if (this._records !== undefined) {
      hasAnyValues = true;
      internalValueResult.records = this._records;
    }
    if (this._removeKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.removeKeys = this._removeKeys;
    }
    if (this._renewRecord !== undefined) {
      hasAnyValues = true;
      internalValueResult.renewRecord = this._renewRecord;
    }
    if (this._renewTimeKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.renewTimeKey = this._renewTimeKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersRecordTransformer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoTypecast = undefined;
      this._enableRuby = undefined;
      this._keepKeys = undefined;
      this._records = undefined;
      this._removeKeys = undefined;
      this._renewRecord = undefined;
      this._renewTimeKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoTypecast = value.autoTypecast;
      this._enableRuby = value.enableRuby;
      this._keepKeys = value.keepKeys;
      this._records = value.records;
      this._removeKeys = value.removeKeys;
      this._renewRecord = value.renewRecord;
      this._renewTimeKey = value.renewTimeKey;
    }
  }

  // auto_typecast - computed: false, optional: true, required: false
  private _autoTypecast?: boolean | cdktf.IResolvable; 
  public get autoTypecast() {
    return this.getBooleanAttribute('auto_typecast');
  }
  public set autoTypecast(value: boolean | cdktf.IResolvable) {
    this._autoTypecast = value;
  }
  public resetAutoTypecast() {
    this._autoTypecast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoTypecastInput() {
    return this._autoTypecast;
  }

  // enable_ruby - computed: false, optional: true, required: false
  private _enableRuby?: boolean | cdktf.IResolvable; 
  public get enableRuby() {
    return this.getBooleanAttribute('enable_ruby');
  }
  public set enableRuby(value: boolean | cdktf.IResolvable) {
    this._enableRuby = value;
  }
  public resetEnableRuby() {
    this._enableRuby = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRubyInput() {
    return this._enableRuby;
  }

  // keep_keys - computed: false, optional: true, required: false
  private _keepKeys?: string; 
  public get keepKeys() {
    return this.getStringAttribute('keep_keys');
  }
  public set keepKeys(value: string) {
    this._keepKeys = value;
  }
  public resetKeepKeys() {
    this._keepKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepKeysInput() {
    return this._keepKeys;
  }

  // records - computed: false, optional: true, required: false
  private _records?: { [key: string]: string }[] | cdktf.IResolvable; 
  public get records() {
    return this.interpolationForAttribute('records');
  }
  public set records(value: { [key: string]: string }[] | cdktf.IResolvable) {
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
  private _removeKeys?: string; 
  public get removeKeys() {
    return this.getStringAttribute('remove_keys');
  }
  public set removeKeys(value: string) {
    this._removeKeys = value;
  }
  public resetRemoveKeys() {
    this._removeKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeKeysInput() {
    return this._removeKeys;
  }

  // renew_record - computed: false, optional: true, required: false
  private _renewRecord?: boolean | cdktf.IResolvable; 
  public get renewRecord() {
    return this.getBooleanAttribute('renew_record');
  }
  public set renewRecord(value: boolean | cdktf.IResolvable) {
    this._renewRecord = value;
  }
  public resetRenewRecord() {
    this._renewRecord = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renewRecordInput() {
    return this._renewRecord;
  }

  // renew_time_key - computed: false, optional: true, required: false
  private _renewTimeKey?: string; 
  public get renewTimeKey() {
    return this.getStringAttribute('renew_time_key');
  }
  public set renewTimeKey(value: string) {
    this._renewTimeKey = value;
  }
  public resetRenewTimeKey() {
    this._renewTimeKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renewTimeKeyInput() {
    return this._renewTimeKey;
  }
}
export interface DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersStdout {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#output_type DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#output_type}
  */
  readonly outputType?: string;
}

export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersStdoutToTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersStdout | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    output_type: cdktf.stringToTerraform(struct!.outputType),
  }
}


export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersStdoutToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersStdout | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    output_type: {
      value: cdktf.stringToHclTerraform(struct!.outputType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersStdoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersStdout | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._outputType !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputType = this._outputType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersStdout | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._outputType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._outputType = value.outputType;
    }
  }

  // output_type - computed: false, optional: true, required: false
  private _outputType?: string; 
  public get outputType() {
    return this.getStringAttribute('output_type');
  }
  public set outputType(value: string) {
    this._outputType = value;
  }
  public resetOutputType() {
    this._outputType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputTypeInput() {
    return this._outputType;
  }
}
export interface DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersSumologic {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#collector_key_name DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#collector_key_name}
  */
  readonly collectorKeyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#collector_value DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#collector_value}
  */
  readonly collectorValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#exclude_container_regex DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#exclude_container_regex}
  */
  readonly excludeContainerRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#exclude_facility_regex DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#exclude_facility_regex}
  */
  readonly excludeFacilityRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#exclude_host_regex DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#exclude_host_regex}
  */
  readonly excludeHostRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#exclude_namespace_regex DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#exclude_namespace_regex}
  */
  readonly excludeNamespaceRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#exclude_pod_regex DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#exclude_pod_regex}
  */
  readonly excludePodRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#exclude_priority_regex DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#exclude_priority_regex}
  */
  readonly excludePriorityRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#exclude_unit_regex DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#exclude_unit_regex}
  */
  readonly excludeUnitRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#log_format DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#log_format}
  */
  readonly logFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#source_category DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#source_category}
  */
  readonly sourceCategory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#source_category_key_name DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#source_category_key_name}
  */
  readonly sourceCategoryKeyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#source_category_prefix DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#source_category_prefix}
  */
  readonly sourceCategoryPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#source_category_replace_dash DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#source_category_replace_dash}
  */
  readonly sourceCategoryReplaceDash?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#source_host DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#source_host}
  */
  readonly sourceHost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#source_host_key_name DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#source_host_key_name}
  */
  readonly sourceHostKeyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#source_name DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#source_name}
  */
  readonly sourceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#source_name_key_name DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#source_name_key_name}
  */
  readonly sourceNameKeyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#tracing_annotation_prefix DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#tracing_annotation_prefix}
  */
  readonly tracingAnnotationPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#tracing_container_name DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#tracing_container_name}
  */
  readonly tracingContainerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#tracing_format DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#tracing_format}
  */
  readonly tracingFormat?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#tracing_host DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#tracing_host}
  */
  readonly tracingHost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#tracing_label_prefix DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#tracing_label_prefix}
  */
  readonly tracingLabelPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#tracing_namespace DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#tracing_namespace}
  */
  readonly tracingNamespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#tracing_pod DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#tracing_pod}
  */
  readonly tracingPod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#tracing_pod_id DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#tracing_pod_id}
  */
  readonly tracingPodId?: string;
}

export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersSumologicToTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersSumologic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    collector_key_name: cdktf.stringToTerraform(struct!.collectorKeyName),
    collector_value: cdktf.stringToTerraform(struct!.collectorValue),
    exclude_container_regex: cdktf.stringToTerraform(struct!.excludeContainerRegex),
    exclude_facility_regex: cdktf.stringToTerraform(struct!.excludeFacilityRegex),
    exclude_host_regex: cdktf.stringToTerraform(struct!.excludeHostRegex),
    exclude_namespace_regex: cdktf.stringToTerraform(struct!.excludeNamespaceRegex),
    exclude_pod_regex: cdktf.stringToTerraform(struct!.excludePodRegex),
    exclude_priority_regex: cdktf.stringToTerraform(struct!.excludePriorityRegex),
    exclude_unit_regex: cdktf.stringToTerraform(struct!.excludeUnitRegex),
    log_format: cdktf.stringToTerraform(struct!.logFormat),
    source_category: cdktf.stringToTerraform(struct!.sourceCategory),
    source_category_key_name: cdktf.stringToTerraform(struct!.sourceCategoryKeyName),
    source_category_prefix: cdktf.stringToTerraform(struct!.sourceCategoryPrefix),
    source_category_replace_dash: cdktf.stringToTerraform(struct!.sourceCategoryReplaceDash),
    source_host: cdktf.stringToTerraform(struct!.sourceHost),
    source_host_key_name: cdktf.stringToTerraform(struct!.sourceHostKeyName),
    source_name: cdktf.stringToTerraform(struct!.sourceName),
    source_name_key_name: cdktf.stringToTerraform(struct!.sourceNameKeyName),
    tracing_annotation_prefix: cdktf.stringToTerraform(struct!.tracingAnnotationPrefix),
    tracing_container_name: cdktf.stringToTerraform(struct!.tracingContainerName),
    tracing_format: cdktf.booleanToTerraform(struct!.tracingFormat),
    tracing_host: cdktf.stringToTerraform(struct!.tracingHost),
    tracing_label_prefix: cdktf.stringToTerraform(struct!.tracingLabelPrefix),
    tracing_namespace: cdktf.stringToTerraform(struct!.tracingNamespace),
    tracing_pod: cdktf.stringToTerraform(struct!.tracingPod),
    tracing_pod_id: cdktf.stringToTerraform(struct!.tracingPodId),
  }
}


export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersSumologicToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersSumologic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    collector_key_name: {
      value: cdktf.stringToHclTerraform(struct!.collectorKeyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    collector_value: {
      value: cdktf.stringToHclTerraform(struct!.collectorValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclude_container_regex: {
      value: cdktf.stringToHclTerraform(struct!.excludeContainerRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclude_facility_regex: {
      value: cdktf.stringToHclTerraform(struct!.excludeFacilityRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclude_host_regex: {
      value: cdktf.stringToHclTerraform(struct!.excludeHostRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclude_namespace_regex: {
      value: cdktf.stringToHclTerraform(struct!.excludeNamespaceRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclude_pod_regex: {
      value: cdktf.stringToHclTerraform(struct!.excludePodRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclude_priority_regex: {
      value: cdktf.stringToHclTerraform(struct!.excludePriorityRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclude_unit_regex: {
      value: cdktf.stringToHclTerraform(struct!.excludeUnitRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_format: {
      value: cdktf.stringToHclTerraform(struct!.logFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_category: {
      value: cdktf.stringToHclTerraform(struct!.sourceCategory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_category_key_name: {
      value: cdktf.stringToHclTerraform(struct!.sourceCategoryKeyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_category_prefix: {
      value: cdktf.stringToHclTerraform(struct!.sourceCategoryPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_category_replace_dash: {
      value: cdktf.stringToHclTerraform(struct!.sourceCategoryReplaceDash),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_host: {
      value: cdktf.stringToHclTerraform(struct!.sourceHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_host_key_name: {
      value: cdktf.stringToHclTerraform(struct!.sourceHostKeyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_name: {
      value: cdktf.stringToHclTerraform(struct!.sourceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_name_key_name: {
      value: cdktf.stringToHclTerraform(struct!.sourceNameKeyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tracing_annotation_prefix: {
      value: cdktf.stringToHclTerraform(struct!.tracingAnnotationPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tracing_container_name: {
      value: cdktf.stringToHclTerraform(struct!.tracingContainerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tracing_format: {
      value: cdktf.booleanToHclTerraform(struct!.tracingFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tracing_host: {
      value: cdktf.stringToHclTerraform(struct!.tracingHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tracing_label_prefix: {
      value: cdktf.stringToHclTerraform(struct!.tracingLabelPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tracing_namespace: {
      value: cdktf.stringToHclTerraform(struct!.tracingNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tracing_pod: {
      value: cdktf.stringToHclTerraform(struct!.tracingPod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tracing_pod_id: {
      value: cdktf.stringToHclTerraform(struct!.tracingPodId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersSumologicOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersSumologic | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collectorKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.collectorKeyName = this._collectorKeyName;
    }
    if (this._collectorValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.collectorValue = this._collectorValue;
    }
    if (this._excludeContainerRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeContainerRegex = this._excludeContainerRegex;
    }
    if (this._excludeFacilityRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeFacilityRegex = this._excludeFacilityRegex;
    }
    if (this._excludeHostRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeHostRegex = this._excludeHostRegex;
    }
    if (this._excludeNamespaceRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeNamespaceRegex = this._excludeNamespaceRegex;
    }
    if (this._excludePodRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludePodRegex = this._excludePodRegex;
    }
    if (this._excludePriorityRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludePriorityRegex = this._excludePriorityRegex;
    }
    if (this._excludeUnitRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeUnitRegex = this._excludeUnitRegex;
    }
    if (this._logFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.logFormat = this._logFormat;
    }
    if (this._sourceCategory !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceCategory = this._sourceCategory;
    }
    if (this._sourceCategoryKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceCategoryKeyName = this._sourceCategoryKeyName;
    }
    if (this._sourceCategoryPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceCategoryPrefix = this._sourceCategoryPrefix;
    }
    if (this._sourceCategoryReplaceDash !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceCategoryReplaceDash = this._sourceCategoryReplaceDash;
    }
    if (this._sourceHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceHost = this._sourceHost;
    }
    if (this._sourceHostKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceHostKeyName = this._sourceHostKeyName;
    }
    if (this._sourceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceName = this._sourceName;
    }
    if (this._sourceNameKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceNameKeyName = this._sourceNameKeyName;
    }
    if (this._tracingAnnotationPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.tracingAnnotationPrefix = this._tracingAnnotationPrefix;
    }
    if (this._tracingContainerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tracingContainerName = this._tracingContainerName;
    }
    if (this._tracingFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.tracingFormat = this._tracingFormat;
    }
    if (this._tracingHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.tracingHost = this._tracingHost;
    }
    if (this._tracingLabelPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.tracingLabelPrefix = this._tracingLabelPrefix;
    }
    if (this._tracingNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.tracingNamespace = this._tracingNamespace;
    }
    if (this._tracingPod !== undefined) {
      hasAnyValues = true;
      internalValueResult.tracingPod = this._tracingPod;
    }
    if (this._tracingPodId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tracingPodId = this._tracingPodId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersSumologic | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._collectorKeyName = undefined;
      this._collectorValue = undefined;
      this._excludeContainerRegex = undefined;
      this._excludeFacilityRegex = undefined;
      this._excludeHostRegex = undefined;
      this._excludeNamespaceRegex = undefined;
      this._excludePodRegex = undefined;
      this._excludePriorityRegex = undefined;
      this._excludeUnitRegex = undefined;
      this._logFormat = undefined;
      this._sourceCategory = undefined;
      this._sourceCategoryKeyName = undefined;
      this._sourceCategoryPrefix = undefined;
      this._sourceCategoryReplaceDash = undefined;
      this._sourceHost = undefined;
      this._sourceHostKeyName = undefined;
      this._sourceName = undefined;
      this._sourceNameKeyName = undefined;
      this._tracingAnnotationPrefix = undefined;
      this._tracingContainerName = undefined;
      this._tracingFormat = undefined;
      this._tracingHost = undefined;
      this._tracingLabelPrefix = undefined;
      this._tracingNamespace = undefined;
      this._tracingPod = undefined;
      this._tracingPodId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._collectorKeyName = value.collectorKeyName;
      this._collectorValue = value.collectorValue;
      this._excludeContainerRegex = value.excludeContainerRegex;
      this._excludeFacilityRegex = value.excludeFacilityRegex;
      this._excludeHostRegex = value.excludeHostRegex;
      this._excludeNamespaceRegex = value.excludeNamespaceRegex;
      this._excludePodRegex = value.excludePodRegex;
      this._excludePriorityRegex = value.excludePriorityRegex;
      this._excludeUnitRegex = value.excludeUnitRegex;
      this._logFormat = value.logFormat;
      this._sourceCategory = value.sourceCategory;
      this._sourceCategoryKeyName = value.sourceCategoryKeyName;
      this._sourceCategoryPrefix = value.sourceCategoryPrefix;
      this._sourceCategoryReplaceDash = value.sourceCategoryReplaceDash;
      this._sourceHost = value.sourceHost;
      this._sourceHostKeyName = value.sourceHostKeyName;
      this._sourceName = value.sourceName;
      this._sourceNameKeyName = value.sourceNameKeyName;
      this._tracingAnnotationPrefix = value.tracingAnnotationPrefix;
      this._tracingContainerName = value.tracingContainerName;
      this._tracingFormat = value.tracingFormat;
      this._tracingHost = value.tracingHost;
      this._tracingLabelPrefix = value.tracingLabelPrefix;
      this._tracingNamespace = value.tracingNamespace;
      this._tracingPod = value.tracingPod;
      this._tracingPodId = value.tracingPodId;
    }
  }

  // collector_key_name - computed: false, optional: true, required: false
  private _collectorKeyName?: string; 
  public get collectorKeyName() {
    return this.getStringAttribute('collector_key_name');
  }
  public set collectorKeyName(value: string) {
    this._collectorKeyName = value;
  }
  public resetCollectorKeyName() {
    this._collectorKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectorKeyNameInput() {
    return this._collectorKeyName;
  }

  // collector_value - computed: false, optional: true, required: false
  private _collectorValue?: string; 
  public get collectorValue() {
    return this.getStringAttribute('collector_value');
  }
  public set collectorValue(value: string) {
    this._collectorValue = value;
  }
  public resetCollectorValue() {
    this._collectorValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectorValueInput() {
    return this._collectorValue;
  }

  // exclude_container_regex - computed: false, optional: true, required: false
  private _excludeContainerRegex?: string; 
  public get excludeContainerRegex() {
    return this.getStringAttribute('exclude_container_regex');
  }
  public set excludeContainerRegex(value: string) {
    this._excludeContainerRegex = value;
  }
  public resetExcludeContainerRegex() {
    this._excludeContainerRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeContainerRegexInput() {
    return this._excludeContainerRegex;
  }

  // exclude_facility_regex - computed: false, optional: true, required: false
  private _excludeFacilityRegex?: string; 
  public get excludeFacilityRegex() {
    return this.getStringAttribute('exclude_facility_regex');
  }
  public set excludeFacilityRegex(value: string) {
    this._excludeFacilityRegex = value;
  }
  public resetExcludeFacilityRegex() {
    this._excludeFacilityRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeFacilityRegexInput() {
    return this._excludeFacilityRegex;
  }

  // exclude_host_regex - computed: false, optional: true, required: false
  private _excludeHostRegex?: string; 
  public get excludeHostRegex() {
    return this.getStringAttribute('exclude_host_regex');
  }
  public set excludeHostRegex(value: string) {
    this._excludeHostRegex = value;
  }
  public resetExcludeHostRegex() {
    this._excludeHostRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeHostRegexInput() {
    return this._excludeHostRegex;
  }

  // exclude_namespace_regex - computed: false, optional: true, required: false
  private _excludeNamespaceRegex?: string; 
  public get excludeNamespaceRegex() {
    return this.getStringAttribute('exclude_namespace_regex');
  }
  public set excludeNamespaceRegex(value: string) {
    this._excludeNamespaceRegex = value;
  }
  public resetExcludeNamespaceRegex() {
    this._excludeNamespaceRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeNamespaceRegexInput() {
    return this._excludeNamespaceRegex;
  }

  // exclude_pod_regex - computed: false, optional: true, required: false
  private _excludePodRegex?: string; 
  public get excludePodRegex() {
    return this.getStringAttribute('exclude_pod_regex');
  }
  public set excludePodRegex(value: string) {
    this._excludePodRegex = value;
  }
  public resetExcludePodRegex() {
    this._excludePodRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludePodRegexInput() {
    return this._excludePodRegex;
  }

  // exclude_priority_regex - computed: false, optional: true, required: false
  private _excludePriorityRegex?: string; 
  public get excludePriorityRegex() {
    return this.getStringAttribute('exclude_priority_regex');
  }
  public set excludePriorityRegex(value: string) {
    this._excludePriorityRegex = value;
  }
  public resetExcludePriorityRegex() {
    this._excludePriorityRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludePriorityRegexInput() {
    return this._excludePriorityRegex;
  }

  // exclude_unit_regex - computed: false, optional: true, required: false
  private _excludeUnitRegex?: string; 
  public get excludeUnitRegex() {
    return this.getStringAttribute('exclude_unit_regex');
  }
  public set excludeUnitRegex(value: string) {
    this._excludeUnitRegex = value;
  }
  public resetExcludeUnitRegex() {
    this._excludeUnitRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeUnitRegexInput() {
    return this._excludeUnitRegex;
  }

  // log_format - computed: false, optional: true, required: false
  private _logFormat?: string; 
  public get logFormat() {
    return this.getStringAttribute('log_format');
  }
  public set logFormat(value: string) {
    this._logFormat = value;
  }
  public resetLogFormat() {
    this._logFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFormatInput() {
    return this._logFormat;
  }

  // source_category - computed: false, optional: true, required: false
  private _sourceCategory?: string; 
  public get sourceCategory() {
    return this.getStringAttribute('source_category');
  }
  public set sourceCategory(value: string) {
    this._sourceCategory = value;
  }
  public resetSourceCategory() {
    this._sourceCategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceCategoryInput() {
    return this._sourceCategory;
  }

  // source_category_key_name - computed: false, optional: true, required: false
  private _sourceCategoryKeyName?: string; 
  public get sourceCategoryKeyName() {
    return this.getStringAttribute('source_category_key_name');
  }
  public set sourceCategoryKeyName(value: string) {
    this._sourceCategoryKeyName = value;
  }
  public resetSourceCategoryKeyName() {
    this._sourceCategoryKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceCategoryKeyNameInput() {
    return this._sourceCategoryKeyName;
  }

  // source_category_prefix - computed: false, optional: true, required: false
  private _sourceCategoryPrefix?: string; 
  public get sourceCategoryPrefix() {
    return this.getStringAttribute('source_category_prefix');
  }
  public set sourceCategoryPrefix(value: string) {
    this._sourceCategoryPrefix = value;
  }
  public resetSourceCategoryPrefix() {
    this._sourceCategoryPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceCategoryPrefixInput() {
    return this._sourceCategoryPrefix;
  }

  // source_category_replace_dash - computed: false, optional: true, required: false
  private _sourceCategoryReplaceDash?: string; 
  public get sourceCategoryReplaceDash() {
    return this.getStringAttribute('source_category_replace_dash');
  }
  public set sourceCategoryReplaceDash(value: string) {
    this._sourceCategoryReplaceDash = value;
  }
  public resetSourceCategoryReplaceDash() {
    this._sourceCategoryReplaceDash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceCategoryReplaceDashInput() {
    return this._sourceCategoryReplaceDash;
  }

  // source_host - computed: false, optional: true, required: false
  private _sourceHost?: string; 
  public get sourceHost() {
    return this.getStringAttribute('source_host');
  }
  public set sourceHost(value: string) {
    this._sourceHost = value;
  }
  public resetSourceHost() {
    this._sourceHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceHostInput() {
    return this._sourceHost;
  }

  // source_host_key_name - computed: false, optional: true, required: false
  private _sourceHostKeyName?: string; 
  public get sourceHostKeyName() {
    return this.getStringAttribute('source_host_key_name');
  }
  public set sourceHostKeyName(value: string) {
    this._sourceHostKeyName = value;
  }
  public resetSourceHostKeyName() {
    this._sourceHostKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceHostKeyNameInput() {
    return this._sourceHostKeyName;
  }

  // source_name - computed: false, optional: true, required: false
  private _sourceName?: string; 
  public get sourceName() {
    return this.getStringAttribute('source_name');
  }
  public set sourceName(value: string) {
    this._sourceName = value;
  }
  public resetSourceName() {
    this._sourceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceNameInput() {
    return this._sourceName;
  }

  // source_name_key_name - computed: false, optional: true, required: false
  private _sourceNameKeyName?: string; 
  public get sourceNameKeyName() {
    return this.getStringAttribute('source_name_key_name');
  }
  public set sourceNameKeyName(value: string) {
    this._sourceNameKeyName = value;
  }
  public resetSourceNameKeyName() {
    this._sourceNameKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceNameKeyNameInput() {
    return this._sourceNameKeyName;
  }

  // tracing_annotation_prefix - computed: false, optional: true, required: false
  private _tracingAnnotationPrefix?: string; 
  public get tracingAnnotationPrefix() {
    return this.getStringAttribute('tracing_annotation_prefix');
  }
  public set tracingAnnotationPrefix(value: string) {
    this._tracingAnnotationPrefix = value;
  }
  public resetTracingAnnotationPrefix() {
    this._tracingAnnotationPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tracingAnnotationPrefixInput() {
    return this._tracingAnnotationPrefix;
  }

  // tracing_container_name - computed: false, optional: true, required: false
  private _tracingContainerName?: string; 
  public get tracingContainerName() {
    return this.getStringAttribute('tracing_container_name');
  }
  public set tracingContainerName(value: string) {
    this._tracingContainerName = value;
  }
  public resetTracingContainerName() {
    this._tracingContainerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tracingContainerNameInput() {
    return this._tracingContainerName;
  }

  // tracing_format - computed: false, optional: true, required: false
  private _tracingFormat?: boolean | cdktf.IResolvable; 
  public get tracingFormat() {
    return this.getBooleanAttribute('tracing_format');
  }
  public set tracingFormat(value: boolean | cdktf.IResolvable) {
    this._tracingFormat = value;
  }
  public resetTracingFormat() {
    this._tracingFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tracingFormatInput() {
    return this._tracingFormat;
  }

  // tracing_host - computed: false, optional: true, required: false
  private _tracingHost?: string; 
  public get tracingHost() {
    return this.getStringAttribute('tracing_host');
  }
  public set tracingHost(value: string) {
    this._tracingHost = value;
  }
  public resetTracingHost() {
    this._tracingHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tracingHostInput() {
    return this._tracingHost;
  }

  // tracing_label_prefix - computed: false, optional: true, required: false
  private _tracingLabelPrefix?: string; 
  public get tracingLabelPrefix() {
    return this.getStringAttribute('tracing_label_prefix');
  }
  public set tracingLabelPrefix(value: string) {
    this._tracingLabelPrefix = value;
  }
  public resetTracingLabelPrefix() {
    this._tracingLabelPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tracingLabelPrefixInput() {
    return this._tracingLabelPrefix;
  }

  // tracing_namespace - computed: false, optional: true, required: false
  private _tracingNamespace?: string; 
  public get tracingNamespace() {
    return this.getStringAttribute('tracing_namespace');
  }
  public set tracingNamespace(value: string) {
    this._tracingNamespace = value;
  }
  public resetTracingNamespace() {
    this._tracingNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tracingNamespaceInput() {
    return this._tracingNamespace;
  }

  // tracing_pod - computed: false, optional: true, required: false
  private _tracingPod?: string; 
  public get tracingPod() {
    return this.getStringAttribute('tracing_pod');
  }
  public set tracingPod(value: string) {
    this._tracingPod = value;
  }
  public resetTracingPod() {
    this._tracingPod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tracingPodInput() {
    return this._tracingPod;
  }

  // tracing_pod_id - computed: false, optional: true, required: false
  private _tracingPodId?: string; 
  public get tracingPodId() {
    return this.getStringAttribute('tracing_pod_id');
  }
  public set tracingPodId(value: string) {
    this._tracingPodId = value;
  }
  public resetTracingPodId() {
    this._tracingPodId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tracingPodIdInput() {
    return this._tracingPodId;
  }
}
export interface DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersTagNormaliser {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#format DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#match_tag DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#match_tag}
  */
  readonly matchTag?: string;
}

export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersTagNormaliserToTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersTagNormaliser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    format: cdktf.stringToTerraform(struct!.format),
    match_tag: cdktf.stringToTerraform(struct!.matchTag),
  }
}


export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersTagNormaliserToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersTagNormaliser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_tag: {
      value: cdktf.stringToHclTerraform(struct!.matchTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersTagNormaliserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersTagNormaliser | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._matchTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchTag = this._matchTag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersTagNormaliser | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._format = undefined;
      this._matchTag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._format = value.format;
      this._matchTag = value.matchTag;
    }
  }

  // format - computed: false, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // match_tag - computed: false, optional: true, required: false
  private _matchTag?: string; 
  public get matchTag() {
    return this.getStringAttribute('match_tag');
  }
  public set matchTag(value: string) {
    this._matchTag = value;
  }
  public resetMatchTag() {
    this._matchTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTagInput() {
    return this._matchTag;
  }
}
export interface DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersThrottle {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#group_bucket_limit DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#group_bucket_limit}
  */
  readonly groupBucketLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#group_bucket_period_s DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#group_bucket_period_s}
  */
  readonly groupBucketPeriodS?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#group_drop_logs DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#group_drop_logs}
  */
  readonly groupDropLogs?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#group_key DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#group_key}
  */
  readonly groupKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#group_reset_rate_s DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#group_reset_rate_s}
  */
  readonly groupResetRateS?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#group_warning_delay_s DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#group_warning_delay_s}
  */
  readonly groupWarningDelayS?: number;
}

export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersThrottleToTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersThrottle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_bucket_limit: cdktf.numberToTerraform(struct!.groupBucketLimit),
    group_bucket_period_s: cdktf.numberToTerraform(struct!.groupBucketPeriodS),
    group_drop_logs: cdktf.booleanToTerraform(struct!.groupDropLogs),
    group_key: cdktf.stringToTerraform(struct!.groupKey),
    group_reset_rate_s: cdktf.numberToTerraform(struct!.groupResetRateS),
    group_warning_delay_s: cdktf.numberToTerraform(struct!.groupWarningDelayS),
  }
}


export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersThrottleToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersThrottle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_bucket_limit: {
      value: cdktf.numberToHclTerraform(struct!.groupBucketLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    group_bucket_period_s: {
      value: cdktf.numberToHclTerraform(struct!.groupBucketPeriodS),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    group_drop_logs: {
      value: cdktf.booleanToHclTerraform(struct!.groupDropLogs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    group_key: {
      value: cdktf.stringToHclTerraform(struct!.groupKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_reset_rate_s: {
      value: cdktf.numberToHclTerraform(struct!.groupResetRateS),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    group_warning_delay_s: {
      value: cdktf.numberToHclTerraform(struct!.groupWarningDelayS),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersThrottleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersThrottle | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupBucketLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupBucketLimit = this._groupBucketLimit;
    }
    if (this._groupBucketPeriodS !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupBucketPeriodS = this._groupBucketPeriodS;
    }
    if (this._groupDropLogs !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupDropLogs = this._groupDropLogs;
    }
    if (this._groupKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupKey = this._groupKey;
    }
    if (this._groupResetRateS !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupResetRateS = this._groupResetRateS;
    }
    if (this._groupWarningDelayS !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupWarningDelayS = this._groupWarningDelayS;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersThrottle | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupBucketLimit = undefined;
      this._groupBucketPeriodS = undefined;
      this._groupDropLogs = undefined;
      this._groupKey = undefined;
      this._groupResetRateS = undefined;
      this._groupWarningDelayS = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupBucketLimit = value.groupBucketLimit;
      this._groupBucketPeriodS = value.groupBucketPeriodS;
      this._groupDropLogs = value.groupDropLogs;
      this._groupKey = value.groupKey;
      this._groupResetRateS = value.groupResetRateS;
      this._groupWarningDelayS = value.groupWarningDelayS;
    }
  }

  // group_bucket_limit - computed: false, optional: true, required: false
  private _groupBucketLimit?: number; 
  public get groupBucketLimit() {
    return this.getNumberAttribute('group_bucket_limit');
  }
  public set groupBucketLimit(value: number) {
    this._groupBucketLimit = value;
  }
  public resetGroupBucketLimit() {
    this._groupBucketLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupBucketLimitInput() {
    return this._groupBucketLimit;
  }

  // group_bucket_period_s - computed: false, optional: true, required: false
  private _groupBucketPeriodS?: number; 
  public get groupBucketPeriodS() {
    return this.getNumberAttribute('group_bucket_period_s');
  }
  public set groupBucketPeriodS(value: number) {
    this._groupBucketPeriodS = value;
  }
  public resetGroupBucketPeriodS() {
    this._groupBucketPeriodS = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupBucketPeriodSInput() {
    return this._groupBucketPeriodS;
  }

  // group_drop_logs - computed: false, optional: true, required: false
  private _groupDropLogs?: boolean | cdktf.IResolvable; 
  public get groupDropLogs() {
    return this.getBooleanAttribute('group_drop_logs');
  }
  public set groupDropLogs(value: boolean | cdktf.IResolvable) {
    this._groupDropLogs = value;
  }
  public resetGroupDropLogs() {
    this._groupDropLogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupDropLogsInput() {
    return this._groupDropLogs;
  }

  // group_key - computed: false, optional: true, required: false
  private _groupKey?: string; 
  public get groupKey() {
    return this.getStringAttribute('group_key');
  }
  public set groupKey(value: string) {
    this._groupKey = value;
  }
  public resetGroupKey() {
    this._groupKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupKeyInput() {
    return this._groupKey;
  }

  // group_reset_rate_s - computed: false, optional: true, required: false
  private _groupResetRateS?: number; 
  public get groupResetRateS() {
    return this.getNumberAttribute('group_reset_rate_s');
  }
  public set groupResetRateS(value: number) {
    this._groupResetRateS = value;
  }
  public resetGroupResetRateS() {
    this._groupResetRateS = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupResetRateSInput() {
    return this._groupResetRateS;
  }

  // group_warning_delay_s - computed: false, optional: true, required: false
  private _groupWarningDelayS?: number; 
  public get groupWarningDelayS() {
    return this.getNumberAttribute('group_warning_delay_s');
  }
  public set groupWarningDelayS(value: number) {
    this._groupWarningDelayS = value;
  }
  public resetGroupWarningDelayS() {
    this._groupWarningDelayS = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupWarningDelaySInput() {
    return this._groupWarningDelayS;
  }
}
export interface DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersUseragent {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#delete_key DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#delete_key}
  */
  readonly deleteKey?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#flatten DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#flatten}
  */
  readonly flatten?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#key_name DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#key_name}
  */
  readonly keyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#out_key DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#out_key}
  */
  readonly outKey?: string;
}

export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersUseragentToTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersUseragent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete_key: cdktf.booleanToTerraform(struct!.deleteKey),
    flatten: cdktf.booleanToTerraform(struct!.flatten),
    key_name: cdktf.stringToTerraform(struct!.keyName),
    out_key: cdktf.stringToTerraform(struct!.outKey),
  }
}


export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersUseragentToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersUseragent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delete_key: {
      value: cdktf.booleanToHclTerraform(struct!.deleteKey),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    flatten: {
      value: cdktf.booleanToHclTerraform(struct!.flatten),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key_name: {
      value: cdktf.stringToHclTerraform(struct!.keyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    out_key: {
      value: cdktf.stringToHclTerraform(struct!.outKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersUseragentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersUseragent | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deleteKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteKey = this._deleteKey;
    }
    if (this._flatten !== undefined) {
      hasAnyValues = true;
      internalValueResult.flatten = this._flatten;
    }
    if (this._keyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyName = this._keyName;
    }
    if (this._outKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.outKey = this._outKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersUseragent | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deleteKey = undefined;
      this._flatten = undefined;
      this._keyName = undefined;
      this._outKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deleteKey = value.deleteKey;
      this._flatten = value.flatten;
      this._keyName = value.keyName;
      this._outKey = value.outKey;
    }
  }

  // delete_key - computed: false, optional: true, required: false
  private _deleteKey?: boolean | cdktf.IResolvable; 
  public get deleteKey() {
    return this.getBooleanAttribute('delete_key');
  }
  public set deleteKey(value: boolean | cdktf.IResolvable) {
    this._deleteKey = value;
  }
  public resetDeleteKey() {
    this._deleteKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteKeyInput() {
    return this._deleteKey;
  }

  // flatten - computed: false, optional: true, required: false
  private _flatten?: boolean | cdktf.IResolvable; 
  public get flatten() {
    return this.getBooleanAttribute('flatten');
  }
  public set flatten(value: boolean | cdktf.IResolvable) {
    this._flatten = value;
  }
  public resetFlatten() {
    this._flatten = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flattenInput() {
    return this._flatten;
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

  // out_key - computed: false, optional: true, required: false
  private _outKey?: string; 
  public get outKey() {
    return this.getStringAttribute('out_key');
  }
  public set outKey(value: string) {
    this._outKey = value;
  }
  public resetOutKey() {
    this._outKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outKeyInput() {
    return this._outKey;
  }
}
export interface DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFilters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#concat DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#concat}
  */
  readonly concat?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersConcat;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#dedot DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#dedot}
  */
  readonly dedot?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersDedot;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#detect_exceptions DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#detect_exceptions}
  */
  readonly detectExceptions?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersDetectExceptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#elasticsearch_genid DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#elasticsearch_genid}
  */
  readonly elasticsearchGenid?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersElasticsearchGenid;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#enhance_k8s DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#enhance_k8s}
  */
  readonly enhanceK8S?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8S;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#geoip DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#geoip}
  */
  readonly geoip?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGeoip;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#grep DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#grep}
  */
  readonly grep?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrep;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#kube_events_timestamp DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#kube_events_timestamp}
  */
  readonly kubeEventsTimestamp?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersKubeEventsTimestamp;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#parser DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#parser}
  */
  readonly parser?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParser;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#prometheus DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#prometheus}
  */
  readonly prometheus?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersPrometheus;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#record_modifier DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#record_modifier}
  */
  readonly recordModifier?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersRecordModifier;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#record_transformer DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#record_transformer}
  */
  readonly recordTransformer?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersRecordTransformer;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#stdout DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#stdout}
  */
  readonly stdout?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersStdout;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#sumologic DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#sumologic}
  */
  readonly sumologic?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersSumologic;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#tag_normaliser DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#tag_normaliser}
  */
  readonly tagNormaliser?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersTagNormaliser;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#throttle DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#throttle}
  */
  readonly throttle?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersThrottle;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#useragent DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#useragent}
  */
  readonly useragent?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersUseragent;
}

export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersToTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    concat: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersConcatToTerraform(struct!.concat),
    dedot: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersDedotToTerraform(struct!.dedot),
    detect_exceptions: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersDetectExceptionsToTerraform(struct!.detectExceptions),
    elasticsearch_genid: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersElasticsearchGenidToTerraform(struct!.elasticsearchGenid),
    enhance_k8s: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SToTerraform(struct!.enhanceK8S),
    geoip: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGeoipToTerraform(struct!.geoip),
    grep: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepToTerraform(struct!.grep),
    kube_events_timestamp: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersKubeEventsTimestampToTerraform(struct!.kubeEventsTimestamp),
    parser: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserToTerraform(struct!.parser),
    prometheus: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersPrometheusToTerraform(struct!.prometheus),
    record_modifier: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersRecordModifierToTerraform(struct!.recordModifier),
    record_transformer: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersRecordTransformerToTerraform(struct!.recordTransformer),
    stdout: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersStdoutToTerraform(struct!.stdout),
    sumologic: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersSumologicToTerraform(struct!.sumologic),
    tag_normaliser: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersTagNormaliserToTerraform(struct!.tagNormaliser),
    throttle: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersThrottleToTerraform(struct!.throttle),
    useragent: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersUseragentToTerraform(struct!.useragent),
  }
}


export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    concat: {
      value: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersConcatToHclTerraform(struct!.concat),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersConcat",
    },
    dedot: {
      value: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersDedotToHclTerraform(struct!.dedot),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersDedot",
    },
    detect_exceptions: {
      value: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersDetectExceptionsToHclTerraform(struct!.detectExceptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersDetectExceptions",
    },
    elasticsearch_genid: {
      value: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersElasticsearchGenidToHclTerraform(struct!.elasticsearchGenid),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersElasticsearchGenid",
    },
    enhance_k8s: {
      value: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SToHclTerraform(struct!.enhanceK8S),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8S",
    },
    geoip: {
      value: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGeoipToHclTerraform(struct!.geoip),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGeoip",
    },
    grep: {
      value: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepToHclTerraform(struct!.grep),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrep",
    },
    kube_events_timestamp: {
      value: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersKubeEventsTimestampToHclTerraform(struct!.kubeEventsTimestamp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersKubeEventsTimestamp",
    },
    parser: {
      value: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserToHclTerraform(struct!.parser),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParser",
    },
    prometheus: {
      value: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersPrometheusToHclTerraform(struct!.prometheus),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersPrometheus",
    },
    record_modifier: {
      value: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersRecordModifierToHclTerraform(struct!.recordModifier),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersRecordModifier",
    },
    record_transformer: {
      value: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersRecordTransformerToHclTerraform(struct!.recordTransformer),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersRecordTransformer",
    },
    stdout: {
      value: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersStdoutToHclTerraform(struct!.stdout),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersStdout",
    },
    sumologic: {
      value: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersSumologicToHclTerraform(struct!.sumologic),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersSumologic",
    },
    tag_normaliser: {
      value: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersTagNormaliserToHclTerraform(struct!.tagNormaliser),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersTagNormaliser",
    },
    throttle: {
      value: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersThrottleToHclTerraform(struct!.throttle),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersThrottle",
    },
    useragent: {
      value: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersUseragentToHclTerraform(struct!.useragent),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersUseragent",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._concat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.concat = this._concat?.internalValue;
    }
    if (this._dedot?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dedot = this._dedot?.internalValue;
    }
    if (this._detectExceptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.detectExceptions = this._detectExceptions?.internalValue;
    }
    if (this._elasticsearchGenid?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.elasticsearchGenid = this._elasticsearchGenid?.internalValue;
    }
    if (this._enhanceK8S?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enhanceK8S = this._enhanceK8S?.internalValue;
    }
    if (this._geoip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.geoip = this._geoip?.internalValue;
    }
    if (this._grep?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grep = this._grep?.internalValue;
    }
    if (this._kubeEventsTimestamp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeEventsTimestamp = this._kubeEventsTimestamp?.internalValue;
    }
    if (this._parser?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parser = this._parser?.internalValue;
    }
    if (this._prometheus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prometheus = this._prometheus?.internalValue;
    }
    if (this._recordModifier?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordModifier = this._recordModifier?.internalValue;
    }
    if (this._recordTransformer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordTransformer = this._recordTransformer?.internalValue;
    }
    if (this._stdout?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stdout = this._stdout?.internalValue;
    }
    if (this._sumologic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sumologic = this._sumologic?.internalValue;
    }
    if (this._tagNormaliser?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagNormaliser = this._tagNormaliser?.internalValue;
    }
    if (this._throttle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.throttle = this._throttle?.internalValue;
    }
    if (this._useragent?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.useragent = this._useragent?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._concat.internalValue = undefined;
      this._dedot.internalValue = undefined;
      this._detectExceptions.internalValue = undefined;
      this._elasticsearchGenid.internalValue = undefined;
      this._enhanceK8S.internalValue = undefined;
      this._geoip.internalValue = undefined;
      this._grep.internalValue = undefined;
      this._kubeEventsTimestamp.internalValue = undefined;
      this._parser.internalValue = undefined;
      this._prometheus.internalValue = undefined;
      this._recordModifier.internalValue = undefined;
      this._recordTransformer.internalValue = undefined;
      this._stdout.internalValue = undefined;
      this._sumologic.internalValue = undefined;
      this._tagNormaliser.internalValue = undefined;
      this._throttle.internalValue = undefined;
      this._useragent.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._concat.internalValue = value.concat;
      this._dedot.internalValue = value.dedot;
      this._detectExceptions.internalValue = value.detectExceptions;
      this._elasticsearchGenid.internalValue = value.elasticsearchGenid;
      this._enhanceK8S.internalValue = value.enhanceK8S;
      this._geoip.internalValue = value.geoip;
      this._grep.internalValue = value.grep;
      this._kubeEventsTimestamp.internalValue = value.kubeEventsTimestamp;
      this._parser.internalValue = value.parser;
      this._prometheus.internalValue = value.prometheus;
      this._recordModifier.internalValue = value.recordModifier;
      this._recordTransformer.internalValue = value.recordTransformer;
      this._stdout.internalValue = value.stdout;
      this._sumologic.internalValue = value.sumologic;
      this._tagNormaliser.internalValue = value.tagNormaliser;
      this._throttle.internalValue = value.throttle;
      this._useragent.internalValue = value.useragent;
    }
  }

  // concat - computed: false, optional: true, required: false
  private _concat = new DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersConcatOutputReference(this, "concat");
  public get concat() {
    return this._concat;
  }
  public putConcat(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersConcat) {
    this._concat.internalValue = value;
  }
  public resetConcat() {
    this._concat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concatInput() {
    return this._concat.internalValue;
  }

  // dedot - computed: false, optional: true, required: false
  private _dedot = new DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersDedotOutputReference(this, "dedot");
  public get dedot() {
    return this._dedot;
  }
  public putDedot(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersDedot) {
    this._dedot.internalValue = value;
  }
  public resetDedot() {
    this._dedot.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedotInput() {
    return this._dedot.internalValue;
  }

  // detect_exceptions - computed: false, optional: true, required: false
  private _detectExceptions = new DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersDetectExceptionsOutputReference(this, "detect_exceptions");
  public get detectExceptions() {
    return this._detectExceptions;
  }
  public putDetectExceptions(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersDetectExceptions) {
    this._detectExceptions.internalValue = value;
  }
  public resetDetectExceptions() {
    this._detectExceptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectExceptionsInput() {
    return this._detectExceptions.internalValue;
  }

  // elasticsearch_genid - computed: false, optional: true, required: false
  private _elasticsearchGenid = new DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersElasticsearchGenidOutputReference(this, "elasticsearch_genid");
  public get elasticsearchGenid() {
    return this._elasticsearchGenid;
  }
  public putElasticsearchGenid(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersElasticsearchGenid) {
    this._elasticsearchGenid.internalValue = value;
  }
  public resetElasticsearchGenid() {
    this._elasticsearchGenid.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticsearchGenidInput() {
    return this._elasticsearchGenid.internalValue;
  }

  // enhance_k8s - computed: false, optional: true, required: false
  private _enhanceK8S = new DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8SOutputReference(this, "enhance_k8s");
  public get enhanceK8S() {
    return this._enhanceK8S;
  }
  public putEnhanceK8S(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersEnhanceK8S) {
    this._enhanceK8S.internalValue = value;
  }
  public resetEnhanceK8S() {
    this._enhanceK8S.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enhanceK8SInput() {
    return this._enhanceK8S.internalValue;
  }

  // geoip - computed: false, optional: true, required: false
  private _geoip = new DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGeoipOutputReference(this, "geoip");
  public get geoip() {
    return this._geoip;
  }
  public putGeoip(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGeoip) {
    this._geoip.internalValue = value;
  }
  public resetGeoip() {
    this._geoip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoipInput() {
    return this._geoip.internalValue;
  }

  // grep - computed: false, optional: true, required: false
  private _grep = new DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrepOutputReference(this, "grep");
  public get grep() {
    return this._grep;
  }
  public putGrep(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersGrep) {
    this._grep.internalValue = value;
  }
  public resetGrep() {
    this._grep.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grepInput() {
    return this._grep.internalValue;
  }

  // kube_events_timestamp - computed: false, optional: true, required: false
  private _kubeEventsTimestamp = new DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersKubeEventsTimestampOutputReference(this, "kube_events_timestamp");
  public get kubeEventsTimestamp() {
    return this._kubeEventsTimestamp;
  }
  public putKubeEventsTimestamp(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersKubeEventsTimestamp) {
    this._kubeEventsTimestamp.internalValue = value;
  }
  public resetKubeEventsTimestamp() {
    this._kubeEventsTimestamp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeEventsTimestampInput() {
    return this._kubeEventsTimestamp.internalValue;
  }

  // parser - computed: false, optional: true, required: false
  private _parser = new DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParserOutputReference(this, "parser");
  public get parser() {
    return this._parser;
  }
  public putParser(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersParser) {
    this._parser.internalValue = value;
  }
  public resetParser() {
    this._parser.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parserInput() {
    return this._parser.internalValue;
  }

  // prometheus - computed: false, optional: true, required: false
  private _prometheus = new DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersPrometheusOutputReference(this, "prometheus");
  public get prometheus() {
    return this._prometheus;
  }
  public putPrometheus(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersPrometheus) {
    this._prometheus.internalValue = value;
  }
  public resetPrometheus() {
    this._prometheus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prometheusInput() {
    return this._prometheus.internalValue;
  }

  // record_modifier - computed: false, optional: true, required: false
  private _recordModifier = new DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersRecordModifierOutputReference(this, "record_modifier");
  public get recordModifier() {
    return this._recordModifier;
  }
  public putRecordModifier(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersRecordModifier) {
    this._recordModifier.internalValue = value;
  }
  public resetRecordModifier() {
    this._recordModifier.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordModifierInput() {
    return this._recordModifier.internalValue;
  }

  // record_transformer - computed: false, optional: true, required: false
  private _recordTransformer = new DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersRecordTransformerOutputReference(this, "record_transformer");
  public get recordTransformer() {
    return this._recordTransformer;
  }
  public putRecordTransformer(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersRecordTransformer) {
    this._recordTransformer.internalValue = value;
  }
  public resetRecordTransformer() {
    this._recordTransformer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordTransformerInput() {
    return this._recordTransformer.internalValue;
  }

  // stdout - computed: false, optional: true, required: false
  private _stdout = new DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersStdoutOutputReference(this, "stdout");
  public get stdout() {
    return this._stdout;
  }
  public putStdout(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersStdout) {
    this._stdout.internalValue = value;
  }
  public resetStdout() {
    this._stdout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stdoutInput() {
    return this._stdout.internalValue;
  }

  // sumologic - computed: false, optional: true, required: false
  private _sumologic = new DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersSumologicOutputReference(this, "sumologic");
  public get sumologic() {
    return this._sumologic;
  }
  public putSumologic(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersSumologic) {
    this._sumologic.internalValue = value;
  }
  public resetSumologic() {
    this._sumologic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sumologicInput() {
    return this._sumologic.internalValue;
  }

  // tag_normaliser - computed: false, optional: true, required: false
  private _tagNormaliser = new DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersTagNormaliserOutputReference(this, "tag_normaliser");
  public get tagNormaliser() {
    return this._tagNormaliser;
  }
  public putTagNormaliser(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersTagNormaliser) {
    this._tagNormaliser.internalValue = value;
  }
  public resetTagNormaliser() {
    this._tagNormaliser.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagNormaliserInput() {
    return this._tagNormaliser.internalValue;
  }

  // throttle - computed: false, optional: true, required: false
  private _throttle = new DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersThrottleOutputReference(this, "throttle");
  public get throttle() {
    return this._throttle;
  }
  public putThrottle(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersThrottle) {
    this._throttle.internalValue = value;
  }
  public resetThrottle() {
    this._throttle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throttleInput() {
    return this._throttle.internalValue;
  }

  // useragent - computed: false, optional: true, required: false
  private _useragent = new DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersUseragentOutputReference(this, "useragent");
  public get useragent() {
    return this._useragent;
  }
  public putUseragent(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersUseragent) {
    this._useragent.internalValue = value;
  }
  public resetUseragent() {
    this._useragent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useragentInput() {
    return this._useragent.internalValue;
  }
}

export class DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersList extends cdktf.ComplexList {
  public internalValue? : DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFilters[] | cdktf.IResolvable

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
  public get(index: number): DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersOutputReference {
    return new DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecMatchExclude {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#container_names DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#container_names}
  */
  readonly containerNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#hosts DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#hosts}
  */
  readonly hosts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#labels DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#namespace_labels DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#namespace_labels}
  */
  readonly namespaceLabels?: { [key: string]: string };
}

export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecMatchExcludeToTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecMatchExclude | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.containerNames),
    hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hosts),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    namespace_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.namespaceLabels),
  }
}


export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecMatchExcludeToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecMatchExclude | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.containerNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    hosts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hosts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    namespace_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.namespaceLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecMatchExcludeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecMatchExclude | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerNames = this._containerNames;
    }
    if (this._hosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.hosts = this._hosts;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._namespaceLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceLabels = this._namespaceLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecMatchExclude | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerNames = undefined;
      this._hosts = undefined;
      this._labels = undefined;
      this._namespaceLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerNames = value.containerNames;
      this._hosts = value.hosts;
      this._labels = value.labels;
      this._namespaceLabels = value.namespaceLabels;
    }
  }

  // container_names - computed: false, optional: true, required: false
  private _containerNames?: string[]; 
  public get containerNames() {
    return this.getListAttribute('container_names');
  }
  public set containerNames(value: string[]) {
    this._containerNames = value;
  }
  public resetContainerNames() {
    this._containerNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerNamesInput() {
    return this._containerNames;
  }

  // hosts - computed: false, optional: true, required: false
  private _hosts?: string[]; 
  public get hosts() {
    return this.getListAttribute('hosts');
  }
  public set hosts(value: string[]) {
    this._hosts = value;
  }
  public resetHosts() {
    this._hosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts;
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

  // namespace_labels - computed: false, optional: true, required: false
  private _namespaceLabels?: { [key: string]: string }; 
  public get namespaceLabels() {
    return this.getStringMapAttribute('namespace_labels');
  }
  public set namespaceLabels(value: { [key: string]: string }) {
    this._namespaceLabels = value;
  }
  public resetNamespaceLabels() {
    this._namespaceLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceLabelsInput() {
    return this._namespaceLabels;
  }
}
export interface DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecMatchSelect {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#container_names DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#container_names}
  */
  readonly containerNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#hosts DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#hosts}
  */
  readonly hosts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#labels DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecMatchSelectToTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecMatchSelect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.containerNames),
    hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hosts),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecMatchSelectToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecMatchSelect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.containerNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    hosts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hosts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecMatchSelectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecMatchSelect | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerNames = this._containerNames;
    }
    if (this._hosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.hosts = this._hosts;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecMatchSelect | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerNames = undefined;
      this._hosts = undefined;
      this._labels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerNames = value.containerNames;
      this._hosts = value.hosts;
      this._labels = value.labels;
    }
  }

  // container_names - computed: false, optional: true, required: false
  private _containerNames?: string[]; 
  public get containerNames() {
    return this.getListAttribute('container_names');
  }
  public set containerNames(value: string[]) {
    this._containerNames = value;
  }
  public resetContainerNames() {
    this._containerNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerNamesInput() {
    return this._containerNames;
  }

  // hosts - computed: false, optional: true, required: false
  private _hosts?: string[]; 
  public get hosts() {
    return this.getListAttribute('hosts');
  }
  public set hosts(value: string[]) {
    this._hosts = value;
  }
  public resetHosts() {
    this._hosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts;
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
}
export interface DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecMatch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#exclude DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#exclude}
  */
  readonly exclude?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecMatchExclude;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#select DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#select}
  */
  readonly select?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecMatchSelect;
}

export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecMatchToTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecMatchExcludeToTerraform(struct!.exclude),
    select: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecMatchSelectToTerraform(struct!.select),
  }
}


export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecMatchToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude: {
      value: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecMatchExcludeToHclTerraform(struct!.exclude),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecMatchExclude",
    },
    select: {
      value: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecMatchSelectToHclTerraform(struct!.select),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecMatchSelect",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecMatchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exclude?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclude = this._exclude?.internalValue;
    }
    if (this._select?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.select = this._select?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exclude.internalValue = undefined;
      this._select.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exclude.internalValue = value.exclude;
      this._select.internalValue = value.select;
    }
  }

  // exclude - computed: false, optional: true, required: false
  private _exclude = new DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecMatchExcludeOutputReference(this, "exclude");
  public get exclude() {
    return this._exclude;
  }
  public putExclude(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecMatchExclude) {
    this._exclude.internalValue = value;
  }
  public resetExclude() {
    this._exclude.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude.internalValue;
  }

  // select - computed: false, optional: true, required: false
  private _select = new DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecMatchSelectOutputReference(this, "select");
  public get select() {
    return this._select;
  }
  public putSelect(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecMatchSelect) {
    this._select.internalValue = value;
  }
  public resetSelect() {
    this._select.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectInput() {
    return this._select.internalValue;
  }
}

export class DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecMatchList extends cdktf.ComplexList {
  public internalValue? : DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecMatch[] | cdktf.IResolvable

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
  public get(index: number): DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecMatchOutputReference {
    return new DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecMatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#filters DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#filters}
  */
  readonly filters?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFilters[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#flow_label DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#flow_label}
  */
  readonly flowLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#global_output_refs DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#global_output_refs}
  */
  readonly globalOutputRefs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#include_label_in_router DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#include_label_in_router}
  */
  readonly includeLabelInRouter?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#local_output_refs DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#local_output_refs}
  */
  readonly localOutputRefs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#logging_ref DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#logging_ref}
  */
  readonly loggingRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#match DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#match}
  */
  readonly match?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecMatch[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#output_refs DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#output_refs}
  */
  readonly outputRefs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#selectors DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest#selectors}
  */
  readonly selectors?: { [key: string]: string };
}

export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecToTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filters: cdktf.listMapper(dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersToTerraform, false)(struct!.filters),
    flow_label: cdktf.stringToTerraform(struct!.flowLabel),
    global_output_refs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.globalOutputRefs),
    include_label_in_router: cdktf.booleanToTerraform(struct!.includeLabelInRouter),
    local_output_refs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.localOutputRefs),
    logging_ref: cdktf.stringToTerraform(struct!.loggingRef),
    match: cdktf.listMapper(dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecMatchToTerraform, false)(struct!.match),
    output_refs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.outputRefs),
    selectors: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.selectors),
  }
}


export function dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filters: {
      value: cdktf.listMapperHcl(dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersToHclTerraform, false)(struct!.filters),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersList",
    },
    flow_label: {
      value: cdktf.stringToHclTerraform(struct!.flowLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    global_output_refs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.globalOutputRefs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    include_label_in_router: {
      value: cdktf.booleanToHclTerraform(struct!.includeLabelInRouter),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    local_output_refs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.localOutputRefs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    logging_ref: {
      value: cdktf.stringToHclTerraform(struct!.loggingRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match: {
      value: cdktf.listMapperHcl(dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecMatchToHclTerraform, false)(struct!.match),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecMatchList",
    },
    output_refs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.outputRefs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    selectors: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.selectors),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filters = this._filters?.internalValue;
    }
    if (this._flowLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.flowLabel = this._flowLabel;
    }
    if (this._globalOutputRefs !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalOutputRefs = this._globalOutputRefs;
    }
    if (this._includeLabelInRouter !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeLabelInRouter = this._includeLabelInRouter;
    }
    if (this._localOutputRefs !== undefined) {
      hasAnyValues = true;
      internalValueResult.localOutputRefs = this._localOutputRefs;
    }
    if (this._loggingRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.loggingRef = this._loggingRef;
    }
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    if (this._outputRefs !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputRefs = this._outputRefs;
    }
    if (this._selectors !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectors = this._selectors;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filters.internalValue = undefined;
      this._flowLabel = undefined;
      this._globalOutputRefs = undefined;
      this._includeLabelInRouter = undefined;
      this._localOutputRefs = undefined;
      this._loggingRef = undefined;
      this._match.internalValue = undefined;
      this._outputRefs = undefined;
      this._selectors = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filters.internalValue = value.filters;
      this._flowLabel = value.flowLabel;
      this._globalOutputRefs = value.globalOutputRefs;
      this._includeLabelInRouter = value.includeLabelInRouter;
      this._localOutputRefs = value.localOutputRefs;
      this._loggingRef = value.loggingRef;
      this._match.internalValue = value.match;
      this._outputRefs = value.outputRefs;
      this._selectors = value.selectors;
    }
  }

  // filters - computed: false, optional: true, required: false
  private _filters = new DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecFilters[] | cdktf.IResolvable) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }

  // flow_label - computed: false, optional: true, required: false
  private _flowLabel?: string; 
  public get flowLabel() {
    return this.getStringAttribute('flow_label');
  }
  public set flowLabel(value: string) {
    this._flowLabel = value;
  }
  public resetFlowLabel() {
    this._flowLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowLabelInput() {
    return this._flowLabel;
  }

  // global_output_refs - computed: false, optional: true, required: false
  private _globalOutputRefs?: string[]; 
  public get globalOutputRefs() {
    return this.getListAttribute('global_output_refs');
  }
  public set globalOutputRefs(value: string[]) {
    this._globalOutputRefs = value;
  }
  public resetGlobalOutputRefs() {
    this._globalOutputRefs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalOutputRefsInput() {
    return this._globalOutputRefs;
  }

  // include_label_in_router - computed: false, optional: true, required: false
  private _includeLabelInRouter?: boolean | cdktf.IResolvable; 
  public get includeLabelInRouter() {
    return this.getBooleanAttribute('include_label_in_router');
  }
  public set includeLabelInRouter(value: boolean | cdktf.IResolvable) {
    this._includeLabelInRouter = value;
  }
  public resetIncludeLabelInRouter() {
    this._includeLabelInRouter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeLabelInRouterInput() {
    return this._includeLabelInRouter;
  }

  // local_output_refs - computed: false, optional: true, required: false
  private _localOutputRefs?: string[]; 
  public get localOutputRefs() {
    return this.getListAttribute('local_output_refs');
  }
  public set localOutputRefs(value: string[]) {
    this._localOutputRefs = value;
  }
  public resetLocalOutputRefs() {
    this._localOutputRefs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localOutputRefsInput() {
    return this._localOutputRefs;
  }

  // logging_ref - computed: false, optional: true, required: false
  private _loggingRef?: string; 
  public get loggingRef() {
    return this.getStringAttribute('logging_ref');
  }
  public set loggingRef(value: string) {
    this._loggingRef = value;
  }
  public resetLoggingRef() {
    this._loggingRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingRefInput() {
    return this._loggingRef;
  }

  // match - computed: false, optional: true, required: false
  private _match = new DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecMatchList(this, "match", false);
  public get match() {
    return this._match;
  }
  public putMatch(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecMatch[] | cdktf.IResolvable) {
    this._match.internalValue = value;
  }
  public resetMatch() {
    this._match.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }

  // output_refs - computed: false, optional: true, required: false
  private _outputRefs?: string[]; 
  public get outputRefs() {
    return this.getListAttribute('output_refs');
  }
  public set outputRefs(value: string[]) {
    this._outputRefs = value;
  }
  public resetOutputRefs() {
    this._outputRefs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputRefsInput() {
    return this._outputRefs;
  }

  // selectors - computed: false, optional: true, required: false
  private _selectors?: { [key: string]: string }; 
  public get selectors() {
    return this.getStringMapAttribute('selectors');
  }
  public set selectors(value: { [key: string]: string }) {
    this._selectors = value;
  }
  public resetSelectors() {
    this._selectors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorsInput() {
    return this._selectors;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest k8s_logging_banzaicloud_io_flow_v1beta1_manifest}
*/
export class DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_logging_banzaicloud_io_flow_v1beta1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest to import
  * @param importFromId The id of the existing DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SLoggingBanzaicloudIoFlowV1Beta1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_logging_banzaicloud_io_flow_v1beta1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_flow_v1beta1_manifest k8s_logging_banzaicloud_io_flow_v1beta1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_logging_banzaicloud_io_flow_v1beta1_manifest',
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
  private _metadata = new DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpec) {
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
      metadata: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestMetadata",
      },
      spec: {
        value: dataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SLoggingBanzaicloudIoFlowV1Beta1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
