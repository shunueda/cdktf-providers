// https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ptp_openshift_io_ptp_config_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SPtpOpenshiftIoPtpConfigV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ptp_openshift_io_ptp_config_v1_manifest#metadata DataK8SPtpOpenshiftIoPtpConfigV1Manifest#metadata}
  */
  readonly metadata: DataK8SPtpOpenshiftIoPtpConfigV1ManifestMetadata;
  /**
  * PtpConfigSpec defines the desired state of PtpConfig
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ptp_openshift_io_ptp_config_v1_manifest#spec DataK8SPtpOpenshiftIoPtpConfigV1Manifest#spec}
  */
  readonly spec?: DataK8SPtpOpenshiftIoPtpConfigV1ManifestSpec;
}
export interface DataK8SPtpOpenshiftIoPtpConfigV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ptp_openshift_io_ptp_config_v1_manifest#annotations DataK8SPtpOpenshiftIoPtpConfigV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ptp_openshift_io_ptp_config_v1_manifest#labels DataK8SPtpOpenshiftIoPtpConfigV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ptp_openshift_io_ptp_config_v1_manifest#name DataK8SPtpOpenshiftIoPtpConfigV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ptp_openshift_io_ptp_config_v1_manifest#namespace DataK8SPtpOpenshiftIoPtpConfigV1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SPtpOpenshiftIoPtpConfigV1ManifestMetadataToTerraform(struct?: DataK8SPtpOpenshiftIoPtpConfigV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SPtpOpenshiftIoPtpConfigV1ManifestMetadataToHclTerraform(struct?: DataK8SPtpOpenshiftIoPtpConfigV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SPtpOpenshiftIoPtpConfigV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPtpOpenshiftIoPtpConfigV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPtpOpenshiftIoPtpConfigV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SPtpOpenshiftIoPtpConfigV1ManifestSpecProfilePtpClockThreshold {
  /**
  * clock state to stay in holdover state in secs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ptp_openshift_io_ptp_config_v1_manifest#hold_over_timeout DataK8SPtpOpenshiftIoPtpConfigV1Manifest#hold_over_timeout}
  */
  readonly holdOverTimeout?: number;
  /**
  * max offset in nano secs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ptp_openshift_io_ptp_config_v1_manifest#max_offset_threshold DataK8SPtpOpenshiftIoPtpConfigV1Manifest#max_offset_threshold}
  */
  readonly maxOffsetThreshold?: number;
  /**
  * min offset in nano secs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ptp_openshift_io_ptp_config_v1_manifest#min_offset_threshold DataK8SPtpOpenshiftIoPtpConfigV1Manifest#min_offset_threshold}
  */
  readonly minOffsetThreshold?: number;
}

export function dataK8SPtpOpenshiftIoPtpConfigV1ManifestSpecProfilePtpClockThresholdToTerraform(struct?: DataK8SPtpOpenshiftIoPtpConfigV1ManifestSpecProfilePtpClockThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hold_over_timeout: cdktf.numberToTerraform(struct!.holdOverTimeout),
    max_offset_threshold: cdktf.numberToTerraform(struct!.maxOffsetThreshold),
    min_offset_threshold: cdktf.numberToTerraform(struct!.minOffsetThreshold),
  }
}


export function dataK8SPtpOpenshiftIoPtpConfigV1ManifestSpecProfilePtpClockThresholdToHclTerraform(struct?: DataK8SPtpOpenshiftIoPtpConfigV1ManifestSpecProfilePtpClockThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hold_over_timeout: {
      value: cdktf.numberToHclTerraform(struct!.holdOverTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_offset_threshold: {
      value: cdktf.numberToHclTerraform(struct!.maxOffsetThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_offset_threshold: {
      value: cdktf.numberToHclTerraform(struct!.minOffsetThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPtpOpenshiftIoPtpConfigV1ManifestSpecProfilePtpClockThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPtpOpenshiftIoPtpConfigV1ManifestSpecProfilePtpClockThreshold | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._holdOverTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.holdOverTimeout = this._holdOverTimeout;
    }
    if (this._maxOffsetThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxOffsetThreshold = this._maxOffsetThreshold;
    }
    if (this._minOffsetThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.minOffsetThreshold = this._minOffsetThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPtpOpenshiftIoPtpConfigV1ManifestSpecProfilePtpClockThreshold | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._holdOverTimeout = undefined;
      this._maxOffsetThreshold = undefined;
      this._minOffsetThreshold = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._holdOverTimeout = value.holdOverTimeout;
      this._maxOffsetThreshold = value.maxOffsetThreshold;
      this._minOffsetThreshold = value.minOffsetThreshold;
    }
  }

  // hold_over_timeout - computed: false, optional: true, required: false
  private _holdOverTimeout?: number; 
  public get holdOverTimeout() {
    return this.getNumberAttribute('hold_over_timeout');
  }
  public set holdOverTimeout(value: number) {
    this._holdOverTimeout = value;
  }
  public resetHoldOverTimeout() {
    this._holdOverTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get holdOverTimeoutInput() {
    return this._holdOverTimeout;
  }

  // max_offset_threshold - computed: false, optional: true, required: false
  private _maxOffsetThreshold?: number; 
  public get maxOffsetThreshold() {
    return this.getNumberAttribute('max_offset_threshold');
  }
  public set maxOffsetThreshold(value: number) {
    this._maxOffsetThreshold = value;
  }
  public resetMaxOffsetThreshold() {
    this._maxOffsetThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxOffsetThresholdInput() {
    return this._maxOffsetThreshold;
  }

  // min_offset_threshold - computed: false, optional: true, required: false
  private _minOffsetThreshold?: number; 
  public get minOffsetThreshold() {
    return this.getNumberAttribute('min_offset_threshold');
  }
  public set minOffsetThreshold(value: number) {
    this._minOffsetThreshold = value;
  }
  public resetMinOffsetThreshold() {
    this._minOffsetThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minOffsetThresholdInput() {
    return this._minOffsetThreshold;
  }
}
export interface DataK8SPtpOpenshiftIoPtpConfigV1ManifestSpecProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ptp_openshift_io_ptp_config_v1_manifest#interface DataK8SPtpOpenshiftIoPtpConfigV1Manifest#interface}
  */
  readonly interface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ptp_openshift_io_ptp_config_v1_manifest#name DataK8SPtpOpenshiftIoPtpConfigV1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ptp_openshift_io_ptp_config_v1_manifest#phc2sys_conf DataK8SPtpOpenshiftIoPtpConfigV1Manifest#phc2sys_conf}
  */
  readonly phc2SysConf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ptp_openshift_io_ptp_config_v1_manifest#phc2sys_opts DataK8SPtpOpenshiftIoPtpConfigV1Manifest#phc2sys_opts}
  */
  readonly phc2SysOpts?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ptp_openshift_io_ptp_config_v1_manifest#plugins DataK8SPtpOpenshiftIoPtpConfigV1Manifest#plugins}
  */
  readonly plugins?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ptp_openshift_io_ptp_config_v1_manifest#ptp4l_conf DataK8SPtpOpenshiftIoPtpConfigV1Manifest#ptp4l_conf}
  */
  readonly ptp4LConf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ptp_openshift_io_ptp_config_v1_manifest#ptp4l_opts DataK8SPtpOpenshiftIoPtpConfigV1Manifest#ptp4l_opts}
  */
  readonly ptp4LOpts?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ptp_openshift_io_ptp_config_v1_manifest#ptp_clock_threshold DataK8SPtpOpenshiftIoPtpConfigV1Manifest#ptp_clock_threshold}
  */
  readonly ptpClockThreshold?: DataK8SPtpOpenshiftIoPtpConfigV1ManifestSpecProfilePtpClockThreshold;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ptp_openshift_io_ptp_config_v1_manifest#ptp_scheduling_policy DataK8SPtpOpenshiftIoPtpConfigV1Manifest#ptp_scheduling_policy}
  */
  readonly ptpSchedulingPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ptp_openshift_io_ptp_config_v1_manifest#ptp_scheduling_priority DataK8SPtpOpenshiftIoPtpConfigV1Manifest#ptp_scheduling_priority}
  */
  readonly ptpSchedulingPriority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ptp_openshift_io_ptp_config_v1_manifest#ptp_settings DataK8SPtpOpenshiftIoPtpConfigV1Manifest#ptp_settings}
  */
  readonly ptpSettings?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ptp_openshift_io_ptp_config_v1_manifest#synce4l_conf DataK8SPtpOpenshiftIoPtpConfigV1Manifest#synce4l_conf}
  */
  readonly synce4LConf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ptp_openshift_io_ptp_config_v1_manifest#synce4l_opts DataK8SPtpOpenshiftIoPtpConfigV1Manifest#synce4l_opts}
  */
  readonly synce4LOpts?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ptp_openshift_io_ptp_config_v1_manifest#ts2phc_conf DataK8SPtpOpenshiftIoPtpConfigV1Manifest#ts2phc_conf}
  */
  readonly ts2PhcConf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ptp_openshift_io_ptp_config_v1_manifest#ts2phc_opts DataK8SPtpOpenshiftIoPtpConfigV1Manifest#ts2phc_opts}
  */
  readonly ts2PhcOpts?: string;
}

export function dataK8SPtpOpenshiftIoPtpConfigV1ManifestSpecProfileToTerraform(struct?: DataK8SPtpOpenshiftIoPtpConfigV1ManifestSpecProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface: cdktf.stringToTerraform(struct!.interface),
    name: cdktf.stringToTerraform(struct!.name),
    phc2sys_conf: cdktf.stringToTerraform(struct!.phc2SysConf),
    phc2sys_opts: cdktf.stringToTerraform(struct!.phc2SysOpts),
    plugins: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.plugins),
    ptp4l_conf: cdktf.stringToTerraform(struct!.ptp4LConf),
    ptp4l_opts: cdktf.stringToTerraform(struct!.ptp4LOpts),
    ptp_clock_threshold: dataK8SPtpOpenshiftIoPtpConfigV1ManifestSpecProfilePtpClockThresholdToTerraform(struct!.ptpClockThreshold),
    ptp_scheduling_policy: cdktf.stringToTerraform(struct!.ptpSchedulingPolicy),
    ptp_scheduling_priority: cdktf.numberToTerraform(struct!.ptpSchedulingPriority),
    ptp_settings: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.ptpSettings),
    synce4l_conf: cdktf.stringToTerraform(struct!.synce4LConf),
    synce4l_opts: cdktf.stringToTerraform(struct!.synce4LOpts),
    ts2phc_conf: cdktf.stringToTerraform(struct!.ts2PhcConf),
    ts2phc_opts: cdktf.stringToTerraform(struct!.ts2PhcOpts),
  }
}


export function dataK8SPtpOpenshiftIoPtpConfigV1ManifestSpecProfileToHclTerraform(struct?: DataK8SPtpOpenshiftIoPtpConfigV1ManifestSpecProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface: {
      value: cdktf.stringToHclTerraform(struct!.interface),
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
    phc2sys_conf: {
      value: cdktf.stringToHclTerraform(struct!.phc2SysConf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    phc2sys_opts: {
      value: cdktf.stringToHclTerraform(struct!.phc2SysOpts),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    plugins: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.plugins),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    ptp4l_conf: {
      value: cdktf.stringToHclTerraform(struct!.ptp4LConf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ptp4l_opts: {
      value: cdktf.stringToHclTerraform(struct!.ptp4LOpts),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ptp_clock_threshold: {
      value: dataK8SPtpOpenshiftIoPtpConfigV1ManifestSpecProfilePtpClockThresholdToHclTerraform(struct!.ptpClockThreshold),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPtpOpenshiftIoPtpConfigV1ManifestSpecProfilePtpClockThreshold",
    },
    ptp_scheduling_policy: {
      value: cdktf.stringToHclTerraform(struct!.ptpSchedulingPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ptp_scheduling_priority: {
      value: cdktf.numberToHclTerraform(struct!.ptpSchedulingPriority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ptp_settings: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.ptpSettings),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    synce4l_conf: {
      value: cdktf.stringToHclTerraform(struct!.synce4LConf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    synce4l_opts: {
      value: cdktf.stringToHclTerraform(struct!.synce4LOpts),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ts2phc_conf: {
      value: cdktf.stringToHclTerraform(struct!.ts2PhcConf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ts2phc_opts: {
      value: cdktf.stringToHclTerraform(struct!.ts2PhcOpts),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPtpOpenshiftIoPtpConfigV1ManifestSpecProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPtpOpenshiftIoPtpConfigV1ManifestSpecProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._phc2SysConf !== undefined) {
      hasAnyValues = true;
      internalValueResult.phc2SysConf = this._phc2SysConf;
    }
    if (this._phc2SysOpts !== undefined) {
      hasAnyValues = true;
      internalValueResult.phc2SysOpts = this._phc2SysOpts;
    }
    if (this._plugins !== undefined) {
      hasAnyValues = true;
      internalValueResult.plugins = this._plugins;
    }
    if (this._ptp4LConf !== undefined) {
      hasAnyValues = true;
      internalValueResult.ptp4LConf = this._ptp4LConf;
    }
    if (this._ptp4LOpts !== undefined) {
      hasAnyValues = true;
      internalValueResult.ptp4LOpts = this._ptp4LOpts;
    }
    if (this._ptpClockThreshold?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ptpClockThreshold = this._ptpClockThreshold?.internalValue;
    }
    if (this._ptpSchedulingPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.ptpSchedulingPolicy = this._ptpSchedulingPolicy;
    }
    if (this._ptpSchedulingPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.ptpSchedulingPriority = this._ptpSchedulingPriority;
    }
    if (this._ptpSettings !== undefined) {
      hasAnyValues = true;
      internalValueResult.ptpSettings = this._ptpSettings;
    }
    if (this._synce4LConf !== undefined) {
      hasAnyValues = true;
      internalValueResult.synce4LConf = this._synce4LConf;
    }
    if (this._synce4LOpts !== undefined) {
      hasAnyValues = true;
      internalValueResult.synce4LOpts = this._synce4LOpts;
    }
    if (this._ts2PhcConf !== undefined) {
      hasAnyValues = true;
      internalValueResult.ts2PhcConf = this._ts2PhcConf;
    }
    if (this._ts2PhcOpts !== undefined) {
      hasAnyValues = true;
      internalValueResult.ts2PhcOpts = this._ts2PhcOpts;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPtpOpenshiftIoPtpConfigV1ManifestSpecProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interface = undefined;
      this._name = undefined;
      this._phc2SysConf = undefined;
      this._phc2SysOpts = undefined;
      this._plugins = undefined;
      this._ptp4LConf = undefined;
      this._ptp4LOpts = undefined;
      this._ptpClockThreshold.internalValue = undefined;
      this._ptpSchedulingPolicy = undefined;
      this._ptpSchedulingPriority = undefined;
      this._ptpSettings = undefined;
      this._synce4LConf = undefined;
      this._synce4LOpts = undefined;
      this._ts2PhcConf = undefined;
      this._ts2PhcOpts = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interface = value.interface;
      this._name = value.name;
      this._phc2SysConf = value.phc2SysConf;
      this._phc2SysOpts = value.phc2SysOpts;
      this._plugins = value.plugins;
      this._ptp4LConf = value.ptp4LConf;
      this._ptp4LOpts = value.ptp4LOpts;
      this._ptpClockThreshold.internalValue = value.ptpClockThreshold;
      this._ptpSchedulingPolicy = value.ptpSchedulingPolicy;
      this._ptpSchedulingPriority = value.ptpSchedulingPriority;
      this._ptpSettings = value.ptpSettings;
      this._synce4LConf = value.synce4LConf;
      this._synce4LOpts = value.synce4LOpts;
      this._ts2PhcConf = value.ts2PhcConf;
      this._ts2PhcOpts = value.ts2PhcOpts;
    }
  }

  // interface - computed: false, optional: true, required: false
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
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

  // phc2sys_conf - computed: false, optional: true, required: false
  private _phc2SysConf?: string; 
  public get phc2SysConf() {
    return this.getStringAttribute('phc2sys_conf');
  }
  public set phc2SysConf(value: string) {
    this._phc2SysConf = value;
  }
  public resetPhc2SysConf() {
    this._phc2SysConf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phc2SysConfInput() {
    return this._phc2SysConf;
  }

  // phc2sys_opts - computed: false, optional: true, required: false
  private _phc2SysOpts?: string; 
  public get phc2SysOpts() {
    return this.getStringAttribute('phc2sys_opts');
  }
  public set phc2SysOpts(value: string) {
    this._phc2SysOpts = value;
  }
  public resetPhc2SysOpts() {
    this._phc2SysOpts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phc2SysOptsInput() {
    return this._phc2SysOpts;
  }

  // plugins - computed: false, optional: true, required: false
  private _plugins?: { [key: string]: string }; 
  public get plugins() {
    return this.getStringMapAttribute('plugins');
  }
  public set plugins(value: { [key: string]: string }) {
    this._plugins = value;
  }
  public resetPlugins() {
    this._plugins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginsInput() {
    return this._plugins;
  }

  // ptp4l_conf - computed: false, optional: true, required: false
  private _ptp4LConf?: string; 
  public get ptp4LConf() {
    return this.getStringAttribute('ptp4l_conf');
  }
  public set ptp4LConf(value: string) {
    this._ptp4LConf = value;
  }
  public resetPtp4LConf() {
    this._ptp4LConf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ptp4LConfInput() {
    return this._ptp4LConf;
  }

  // ptp4l_opts - computed: false, optional: true, required: false
  private _ptp4LOpts?: string; 
  public get ptp4LOpts() {
    return this.getStringAttribute('ptp4l_opts');
  }
  public set ptp4LOpts(value: string) {
    this._ptp4LOpts = value;
  }
  public resetPtp4LOpts() {
    this._ptp4LOpts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ptp4LOptsInput() {
    return this._ptp4LOpts;
  }

  // ptp_clock_threshold - computed: false, optional: true, required: false
  private _ptpClockThreshold = new DataK8SPtpOpenshiftIoPtpConfigV1ManifestSpecProfilePtpClockThresholdOutputReference(this, "ptp_clock_threshold");
  public get ptpClockThreshold() {
    return this._ptpClockThreshold;
  }
  public putPtpClockThreshold(value: DataK8SPtpOpenshiftIoPtpConfigV1ManifestSpecProfilePtpClockThreshold) {
    this._ptpClockThreshold.internalValue = value;
  }
  public resetPtpClockThreshold() {
    this._ptpClockThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ptpClockThresholdInput() {
    return this._ptpClockThreshold.internalValue;
  }

  // ptp_scheduling_policy - computed: false, optional: true, required: false
  private _ptpSchedulingPolicy?: string; 
  public get ptpSchedulingPolicy() {
    return this.getStringAttribute('ptp_scheduling_policy');
  }
  public set ptpSchedulingPolicy(value: string) {
    this._ptpSchedulingPolicy = value;
  }
  public resetPtpSchedulingPolicy() {
    this._ptpSchedulingPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ptpSchedulingPolicyInput() {
    return this._ptpSchedulingPolicy;
  }

  // ptp_scheduling_priority - computed: false, optional: true, required: false
  private _ptpSchedulingPriority?: number; 
  public get ptpSchedulingPriority() {
    return this.getNumberAttribute('ptp_scheduling_priority');
  }
  public set ptpSchedulingPriority(value: number) {
    this._ptpSchedulingPriority = value;
  }
  public resetPtpSchedulingPriority() {
    this._ptpSchedulingPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ptpSchedulingPriorityInput() {
    return this._ptpSchedulingPriority;
  }

  // ptp_settings - computed: false, optional: true, required: false
  private _ptpSettings?: { [key: string]: string }; 
  public get ptpSettings() {
    return this.getStringMapAttribute('ptp_settings');
  }
  public set ptpSettings(value: { [key: string]: string }) {
    this._ptpSettings = value;
  }
  public resetPtpSettings() {
    this._ptpSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ptpSettingsInput() {
    return this._ptpSettings;
  }

  // synce4l_conf - computed: false, optional: true, required: false
  private _synce4LConf?: string; 
  public get synce4LConf() {
    return this.getStringAttribute('synce4l_conf');
  }
  public set synce4LConf(value: string) {
    this._synce4LConf = value;
  }
  public resetSynce4LConf() {
    this._synce4LConf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synce4LConfInput() {
    return this._synce4LConf;
  }

  // synce4l_opts - computed: false, optional: true, required: false
  private _synce4LOpts?: string; 
  public get synce4LOpts() {
    return this.getStringAttribute('synce4l_opts');
  }
  public set synce4LOpts(value: string) {
    this._synce4LOpts = value;
  }
  public resetSynce4LOpts() {
    this._synce4LOpts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synce4LOptsInput() {
    return this._synce4LOpts;
  }

  // ts2phc_conf - computed: false, optional: true, required: false
  private _ts2PhcConf?: string; 
  public get ts2PhcConf() {
    return this.getStringAttribute('ts2phc_conf');
  }
  public set ts2PhcConf(value: string) {
    this._ts2PhcConf = value;
  }
  public resetTs2PhcConf() {
    this._ts2PhcConf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ts2PhcConfInput() {
    return this._ts2PhcConf;
  }

  // ts2phc_opts - computed: false, optional: true, required: false
  private _ts2PhcOpts?: string; 
  public get ts2PhcOpts() {
    return this.getStringAttribute('ts2phc_opts');
  }
  public set ts2PhcOpts(value: string) {
    this._ts2PhcOpts = value;
  }
  public resetTs2PhcOpts() {
    this._ts2PhcOpts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ts2PhcOptsInput() {
    return this._ts2PhcOpts;
  }
}

export class DataK8SPtpOpenshiftIoPtpConfigV1ManifestSpecProfileList extends cdktf.ComplexList {
  public internalValue? : DataK8SPtpOpenshiftIoPtpConfigV1ManifestSpecProfile[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPtpOpenshiftIoPtpConfigV1ManifestSpecProfileOutputReference {
    return new DataK8SPtpOpenshiftIoPtpConfigV1ManifestSpecProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPtpOpenshiftIoPtpConfigV1ManifestSpecRecommendMatch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ptp_openshift_io_ptp_config_v1_manifest#node_label DataK8SPtpOpenshiftIoPtpConfigV1Manifest#node_label}
  */
  readonly nodeLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ptp_openshift_io_ptp_config_v1_manifest#node_name DataK8SPtpOpenshiftIoPtpConfigV1Manifest#node_name}
  */
  readonly nodeName?: string;
}

export function dataK8SPtpOpenshiftIoPtpConfigV1ManifestSpecRecommendMatchToTerraform(struct?: DataK8SPtpOpenshiftIoPtpConfigV1ManifestSpecRecommendMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_label: cdktf.stringToTerraform(struct!.nodeLabel),
    node_name: cdktf.stringToTerraform(struct!.nodeName),
  }
}


export function dataK8SPtpOpenshiftIoPtpConfigV1ManifestSpecRecommendMatchToHclTerraform(struct?: DataK8SPtpOpenshiftIoPtpConfigV1ManifestSpecRecommendMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_label: {
      value: cdktf.stringToHclTerraform(struct!.nodeLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_name: {
      value: cdktf.stringToHclTerraform(struct!.nodeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPtpOpenshiftIoPtpConfigV1ManifestSpecRecommendMatchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPtpOpenshiftIoPtpConfigV1ManifestSpecRecommendMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeLabel = this._nodeLabel;
    }
    if (this._nodeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeName = this._nodeName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPtpOpenshiftIoPtpConfigV1ManifestSpecRecommendMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodeLabel = undefined;
      this._nodeName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodeLabel = value.nodeLabel;
      this._nodeName = value.nodeName;
    }
  }

  // node_label - computed: false, optional: true, required: false
  private _nodeLabel?: string; 
  public get nodeLabel() {
    return this.getStringAttribute('node_label');
  }
  public set nodeLabel(value: string) {
    this._nodeLabel = value;
  }
  public resetNodeLabel() {
    this._nodeLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeLabelInput() {
    return this._nodeLabel;
  }

  // node_name - computed: false, optional: true, required: false
  private _nodeName?: string; 
  public get nodeName() {
    return this.getStringAttribute('node_name');
  }
  public set nodeName(value: string) {
    this._nodeName = value;
  }
  public resetNodeName() {
    this._nodeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeNameInput() {
    return this._nodeName;
  }
}

export class DataK8SPtpOpenshiftIoPtpConfigV1ManifestSpecRecommendMatchList extends cdktf.ComplexList {
  public internalValue? : DataK8SPtpOpenshiftIoPtpConfigV1ManifestSpecRecommendMatch[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPtpOpenshiftIoPtpConfigV1ManifestSpecRecommendMatchOutputReference {
    return new DataK8SPtpOpenshiftIoPtpConfigV1ManifestSpecRecommendMatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPtpOpenshiftIoPtpConfigV1ManifestSpecRecommend {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ptp_openshift_io_ptp_config_v1_manifest#match DataK8SPtpOpenshiftIoPtpConfigV1Manifest#match}
  */
  readonly match?: DataK8SPtpOpenshiftIoPtpConfigV1ManifestSpecRecommendMatch[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ptp_openshift_io_ptp_config_v1_manifest#priority DataK8SPtpOpenshiftIoPtpConfigV1Manifest#priority}
  */
  readonly priority: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ptp_openshift_io_ptp_config_v1_manifest#profile DataK8SPtpOpenshiftIoPtpConfigV1Manifest#profile}
  */
  readonly profile: string;
}

export function dataK8SPtpOpenshiftIoPtpConfigV1ManifestSpecRecommendToTerraform(struct?: DataK8SPtpOpenshiftIoPtpConfigV1ManifestSpecRecommend | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match: cdktf.listMapper(dataK8SPtpOpenshiftIoPtpConfigV1ManifestSpecRecommendMatchToTerraform, false)(struct!.match),
    priority: cdktf.numberToTerraform(struct!.priority),
    profile: cdktf.stringToTerraform(struct!.profile),
  }
}


export function dataK8SPtpOpenshiftIoPtpConfigV1ManifestSpecRecommendToHclTerraform(struct?: DataK8SPtpOpenshiftIoPtpConfigV1ManifestSpecRecommend | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match: {
      value: cdktf.listMapperHcl(dataK8SPtpOpenshiftIoPtpConfigV1ManifestSpecRecommendMatchToHclTerraform, false)(struct!.match),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPtpOpenshiftIoPtpConfigV1ManifestSpecRecommendMatchList",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class DataK8SPtpOpenshiftIoPtpConfigV1ManifestSpecRecommendOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPtpOpenshiftIoPtpConfigV1ManifestSpecRecommend | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._profile !== undefined) {
      hasAnyValues = true;
      internalValueResult.profile = this._profile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPtpOpenshiftIoPtpConfigV1ManifestSpecRecommend | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._match.internalValue = undefined;
      this._priority = undefined;
      this._profile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._match.internalValue = value.match;
      this._priority = value.priority;
      this._profile = value.profile;
    }
  }

  // match - computed: false, optional: true, required: false
  private _match = new DataK8SPtpOpenshiftIoPtpConfigV1ManifestSpecRecommendMatchList(this, "match", false);
  public get match() {
    return this._match;
  }
  public putMatch(value: DataK8SPtpOpenshiftIoPtpConfigV1ManifestSpecRecommendMatch[] | cdktf.IResolvable) {
    this._match.internalValue = value;
  }
  public resetMatch() {
    this._match.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // profile - computed: false, optional: false, required: true
  private _profile?: string; 
  public get profile() {
    return this.getStringAttribute('profile');
  }
  public set profile(value: string) {
    this._profile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }
}

export class DataK8SPtpOpenshiftIoPtpConfigV1ManifestSpecRecommendList extends cdktf.ComplexList {
  public internalValue? : DataK8SPtpOpenshiftIoPtpConfigV1ManifestSpecRecommend[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPtpOpenshiftIoPtpConfigV1ManifestSpecRecommendOutputReference {
    return new DataK8SPtpOpenshiftIoPtpConfigV1ManifestSpecRecommendOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPtpOpenshiftIoPtpConfigV1ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ptp_openshift_io_ptp_config_v1_manifest#profile DataK8SPtpOpenshiftIoPtpConfigV1Manifest#profile}
  */
  readonly profile: DataK8SPtpOpenshiftIoPtpConfigV1ManifestSpecProfile[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ptp_openshift_io_ptp_config_v1_manifest#recommend DataK8SPtpOpenshiftIoPtpConfigV1Manifest#recommend}
  */
  readonly recommend: DataK8SPtpOpenshiftIoPtpConfigV1ManifestSpecRecommend[] | cdktf.IResolvable;
}

export function dataK8SPtpOpenshiftIoPtpConfigV1ManifestSpecToTerraform(struct?: DataK8SPtpOpenshiftIoPtpConfigV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    profile: cdktf.listMapper(dataK8SPtpOpenshiftIoPtpConfigV1ManifestSpecProfileToTerraform, false)(struct!.profile),
    recommend: cdktf.listMapper(dataK8SPtpOpenshiftIoPtpConfigV1ManifestSpecRecommendToTerraform, false)(struct!.recommend),
  }
}


export function dataK8SPtpOpenshiftIoPtpConfigV1ManifestSpecToHclTerraform(struct?: DataK8SPtpOpenshiftIoPtpConfigV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    profile: {
      value: cdktf.listMapperHcl(dataK8SPtpOpenshiftIoPtpConfigV1ManifestSpecProfileToHclTerraform, false)(struct!.profile),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPtpOpenshiftIoPtpConfigV1ManifestSpecProfileList",
    },
    recommend: {
      value: cdktf.listMapperHcl(dataK8SPtpOpenshiftIoPtpConfigV1ManifestSpecRecommendToHclTerraform, false)(struct!.recommend),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPtpOpenshiftIoPtpConfigV1ManifestSpecRecommendList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPtpOpenshiftIoPtpConfigV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPtpOpenshiftIoPtpConfigV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._profile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.profile = this._profile?.internalValue;
    }
    if (this._recommend?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recommend = this._recommend?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPtpOpenshiftIoPtpConfigV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._profile.internalValue = undefined;
      this._recommend.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._profile.internalValue = value.profile;
      this._recommend.internalValue = value.recommend;
    }
  }

  // profile - computed: false, optional: false, required: true
  private _profile = new DataK8SPtpOpenshiftIoPtpConfigV1ManifestSpecProfileList(this, "profile", false);
  public get profile() {
    return this._profile;
  }
  public putProfile(value: DataK8SPtpOpenshiftIoPtpConfigV1ManifestSpecProfile[] | cdktf.IResolvable) {
    this._profile.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile.internalValue;
  }

  // recommend - computed: false, optional: false, required: true
  private _recommend = new DataK8SPtpOpenshiftIoPtpConfigV1ManifestSpecRecommendList(this, "recommend", false);
  public get recommend() {
    return this._recommend;
  }
  public putRecommend(value: DataK8SPtpOpenshiftIoPtpConfigV1ManifestSpecRecommend[] | cdktf.IResolvable) {
    this._recommend.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recommendInput() {
    return this._recommend.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ptp_openshift_io_ptp_config_v1_manifest k8s_ptp_openshift_io_ptp_config_v1_manifest}
*/
export class DataK8SPtpOpenshiftIoPtpConfigV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_ptp_openshift_io_ptp_config_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SPtpOpenshiftIoPtpConfigV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SPtpOpenshiftIoPtpConfigV1Manifest to import
  * @param importFromId The id of the existing DataK8SPtpOpenshiftIoPtpConfigV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ptp_openshift_io_ptp_config_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SPtpOpenshiftIoPtpConfigV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_ptp_openshift_io_ptp_config_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ptp_openshift_io_ptp_config_v1_manifest k8s_ptp_openshift_io_ptp_config_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SPtpOpenshiftIoPtpConfigV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SPtpOpenshiftIoPtpConfigV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_ptp_openshift_io_ptp_config_v1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.8',
        providerVersionConstraint: '2025.12.8'
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
  private _metadata = new DataK8SPtpOpenshiftIoPtpConfigV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SPtpOpenshiftIoPtpConfigV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SPtpOpenshiftIoPtpConfigV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SPtpOpenshiftIoPtpConfigV1ManifestSpec) {
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
      metadata: dataK8SPtpOpenshiftIoPtpConfigV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SPtpOpenshiftIoPtpConfigV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SPtpOpenshiftIoPtpConfigV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SPtpOpenshiftIoPtpConfigV1ManifestMetadata",
      },
      spec: {
        value: dataK8SPtpOpenshiftIoPtpConfigV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SPtpOpenshiftIoPtpConfigV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
