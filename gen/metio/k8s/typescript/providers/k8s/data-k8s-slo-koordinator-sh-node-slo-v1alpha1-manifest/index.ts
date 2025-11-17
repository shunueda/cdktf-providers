// https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#metadata DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestMetadata;
  /**
  * NodeSLOSpec defines the desired state of NodeSLO
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#spec DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpec;
}
export interface DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#annotations DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#labels DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#name DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecCpuBurstStrategy {
  /**
  * pod cfs quota scale up ceil percentage, default = 300 (300%)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#cfs_quota_burst_percent DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#cfs_quota_burst_percent}
  */
  readonly cfsQuotaBurstPercent?: number;
  /**
  * specifies a period of time for pod can use at burst, default = -1 (unlimited)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#cfs_quota_burst_period_seconds DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#cfs_quota_burst_period_seconds}
  */
  readonly cfsQuotaBurstPeriodSeconds?: number;
  /**
  * cpu burst percentage for setting cpu.cfs_burst_us, legal range: [0, 10000], default as 1000 (1000%)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#cpu_burst_percent DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#cpu_burst_percent}
  */
  readonly cpuBurstPercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#policy DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#policy}
  */
  readonly policy?: string;
  /**
  * scale down cfs quota if node cpu overload, default = 50
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#share_pool_threshold_percent DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#share_pool_threshold_percent}
  */
  readonly sharePoolThresholdPercent?: number;
}

export function dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecCpuBurstStrategyToTerraform(struct?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecCpuBurstStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cfs_quota_burst_percent: cdktf.numberToTerraform(struct!.cfsQuotaBurstPercent),
    cfs_quota_burst_period_seconds: cdktf.numberToTerraform(struct!.cfsQuotaBurstPeriodSeconds),
    cpu_burst_percent: cdktf.numberToTerraform(struct!.cpuBurstPercent),
    policy: cdktf.stringToTerraform(struct!.policy),
    share_pool_threshold_percent: cdktf.numberToTerraform(struct!.sharePoolThresholdPercent),
  }
}


export function dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecCpuBurstStrategyToHclTerraform(struct?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecCpuBurstStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cfs_quota_burst_percent: {
      value: cdktf.numberToHclTerraform(struct!.cfsQuotaBurstPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cfs_quota_burst_period_seconds: {
      value: cdktf.numberToHclTerraform(struct!.cfsQuotaBurstPeriodSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu_burst_percent: {
      value: cdktf.numberToHclTerraform(struct!.cpuBurstPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    policy: {
      value: cdktf.stringToHclTerraform(struct!.policy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    share_pool_threshold_percent: {
      value: cdktf.numberToHclTerraform(struct!.sharePoolThresholdPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecCpuBurstStrategyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecCpuBurstStrategy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cfsQuotaBurstPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.cfsQuotaBurstPercent = this._cfsQuotaBurstPercent;
    }
    if (this._cfsQuotaBurstPeriodSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.cfsQuotaBurstPeriodSeconds = this._cfsQuotaBurstPeriodSeconds;
    }
    if (this._cpuBurstPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuBurstPercent = this._cpuBurstPercent;
    }
    if (this._policy !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy;
    }
    if (this._sharePoolThresholdPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharePoolThresholdPercent = this._sharePoolThresholdPercent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecCpuBurstStrategy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cfsQuotaBurstPercent = undefined;
      this._cfsQuotaBurstPeriodSeconds = undefined;
      this._cpuBurstPercent = undefined;
      this._policy = undefined;
      this._sharePoolThresholdPercent = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cfsQuotaBurstPercent = value.cfsQuotaBurstPercent;
      this._cfsQuotaBurstPeriodSeconds = value.cfsQuotaBurstPeriodSeconds;
      this._cpuBurstPercent = value.cpuBurstPercent;
      this._policy = value.policy;
      this._sharePoolThresholdPercent = value.sharePoolThresholdPercent;
    }
  }

  // cfs_quota_burst_percent - computed: false, optional: true, required: false
  private _cfsQuotaBurstPercent?: number; 
  public get cfsQuotaBurstPercent() {
    return this.getNumberAttribute('cfs_quota_burst_percent');
  }
  public set cfsQuotaBurstPercent(value: number) {
    this._cfsQuotaBurstPercent = value;
  }
  public resetCfsQuotaBurstPercent() {
    this._cfsQuotaBurstPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cfsQuotaBurstPercentInput() {
    return this._cfsQuotaBurstPercent;
  }

  // cfs_quota_burst_period_seconds - computed: false, optional: true, required: false
  private _cfsQuotaBurstPeriodSeconds?: number; 
  public get cfsQuotaBurstPeriodSeconds() {
    return this.getNumberAttribute('cfs_quota_burst_period_seconds');
  }
  public set cfsQuotaBurstPeriodSeconds(value: number) {
    this._cfsQuotaBurstPeriodSeconds = value;
  }
  public resetCfsQuotaBurstPeriodSeconds() {
    this._cfsQuotaBurstPeriodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cfsQuotaBurstPeriodSecondsInput() {
    return this._cfsQuotaBurstPeriodSeconds;
  }

  // cpu_burst_percent - computed: false, optional: true, required: false
  private _cpuBurstPercent?: number; 
  public get cpuBurstPercent() {
    return this.getNumberAttribute('cpu_burst_percent');
  }
  public set cpuBurstPercent(value: number) {
    this._cpuBurstPercent = value;
  }
  public resetCpuBurstPercent() {
    this._cpuBurstPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuBurstPercentInput() {
    return this._cpuBurstPercent;
  }

  // policy - computed: false, optional: true, required: false
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // share_pool_threshold_percent - computed: false, optional: true, required: false
  private _sharePoolThresholdPercent?: number; 
  public get sharePoolThresholdPercent() {
    return this.getNumberAttribute('share_pool_threshold_percent');
  }
  public set sharePoolThresholdPercent(value: number) {
    this._sharePoolThresholdPercent = value;
  }
  public resetSharePoolThresholdPercent() {
    this._sharePoolThresholdPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharePoolThresholdPercentInput() {
    return this._sharePoolThresholdPercent;
  }
}
export interface DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecHostApplicationsCgroupPath {
  /**
  * cgroup base dir, the format is various across cgroup drivers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#base DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#base}
  */
  readonly base?: string;
  /**
  * cgroup parent path under base dir
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#parent_dir DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#parent_dir}
  */
  readonly parentDir?: string;
  /**
  * cgroup relative path under parent dir
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#relative_path DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#relative_path}
  */
  readonly relativePath?: string;
}

export function dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecHostApplicationsCgroupPathToTerraform(struct?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecHostApplicationsCgroupPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base: cdktf.stringToTerraform(struct!.base),
    parent_dir: cdktf.stringToTerraform(struct!.parentDir),
    relative_path: cdktf.stringToTerraform(struct!.relativePath),
  }
}


export function dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecHostApplicationsCgroupPathToHclTerraform(struct?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecHostApplicationsCgroupPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base: {
      value: cdktf.stringToHclTerraform(struct!.base),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parent_dir: {
      value: cdktf.stringToHclTerraform(struct!.parentDir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    relative_path: {
      value: cdktf.stringToHclTerraform(struct!.relativePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecHostApplicationsCgroupPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecHostApplicationsCgroupPath | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._base !== undefined) {
      hasAnyValues = true;
      internalValueResult.base = this._base;
    }
    if (this._parentDir !== undefined) {
      hasAnyValues = true;
      internalValueResult.parentDir = this._parentDir;
    }
    if (this._relativePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.relativePath = this._relativePath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecHostApplicationsCgroupPath | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._base = undefined;
      this._parentDir = undefined;
      this._relativePath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._base = value.base;
      this._parentDir = value.parentDir;
      this._relativePath = value.relativePath;
    }
  }

  // base - computed: false, optional: true, required: false
  private _base?: string; 
  public get base() {
    return this.getStringAttribute('base');
  }
  public set base(value: string) {
    this._base = value;
  }
  public resetBase() {
    this._base = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseInput() {
    return this._base;
  }

  // parent_dir - computed: false, optional: true, required: false
  private _parentDir?: string; 
  public get parentDir() {
    return this.getStringAttribute('parent_dir');
  }
  public set parentDir(value: string) {
    this._parentDir = value;
  }
  public resetParentDir() {
    this._parentDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentDirInput() {
    return this._parentDir;
  }

  // relative_path - computed: false, optional: true, required: false
  private _relativePath?: string; 
  public get relativePath() {
    return this.getStringAttribute('relative_path');
  }
  public set relativePath(value: string) {
    this._relativePath = value;
  }
  public resetRelativePath() {
    this._relativePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relativePathInput() {
    return this._relativePath;
  }
}
export interface DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecHostApplications {
  /**
  * Optional, defines the host cgroup configuration, use default if not specified according to priority and qos
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#cgroup_path DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#cgroup_path}
  */
  readonly cgroupPath?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecHostApplicationsCgroupPath;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#name DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Priority class of the application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#priority DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#priority}
  */
  readonly priority?: string;
  /**
  * QoS class of the application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#qos DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#qos}
  */
  readonly qos?: string;
  /**
  * QoS Strategy of host application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#strategy DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#strategy}
  */
  readonly strategy?: { [key: string]: string };
}

export function dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecHostApplicationsToTerraform(struct?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecHostApplications | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cgroup_path: dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecHostApplicationsCgroupPathToTerraform(struct!.cgroupPath),
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.stringToTerraform(struct!.priority),
    qos: cdktf.stringToTerraform(struct!.qos),
    strategy: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.strategy),
  }
}


export function dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecHostApplicationsToHclTerraform(struct?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecHostApplications | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cgroup_path: {
      value: dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecHostApplicationsCgroupPathToHclTerraform(struct!.cgroupPath),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecHostApplicationsCgroupPath",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.stringToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    qos: {
      value: cdktf.stringToHclTerraform(struct!.qos),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    strategy: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.strategy),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecHostApplicationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecHostApplications | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cgroupPath?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cgroupPath = this._cgroupPath?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._qos !== undefined) {
      hasAnyValues = true;
      internalValueResult.qos = this._qos;
    }
    if (this._strategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategy = this._strategy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecHostApplications | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cgroupPath.internalValue = undefined;
      this._name = undefined;
      this._priority = undefined;
      this._qos = undefined;
      this._strategy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cgroupPath.internalValue = value.cgroupPath;
      this._name = value.name;
      this._priority = value.priority;
      this._qos = value.qos;
      this._strategy = value.strategy;
    }
  }

  // cgroup_path - computed: false, optional: true, required: false
  private _cgroupPath = new DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecHostApplicationsCgroupPathOutputReference(this, "cgroup_path");
  public get cgroupPath() {
    return this._cgroupPath;
  }
  public putCgroupPath(value: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecHostApplicationsCgroupPath) {
    this._cgroupPath.internalValue = value;
  }
  public resetCgroupPath() {
    this._cgroupPath.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cgroupPathInput() {
    return this._cgroupPath.internalValue;
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

  // priority - computed: false, optional: true, required: false
  private _priority?: string; 
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // qos - computed: false, optional: true, required: false
  private _qos?: string; 
  public get qos() {
    return this.getStringAttribute('qos');
  }
  public set qos(value: string) {
    this._qos = value;
  }
  public resetQos() {
    this._qos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosInput() {
    return this._qos;
  }

  // strategy - computed: false, optional: true, required: false
  private _strategy?: { [key: string]: string }; 
  public get strategy() {
    return this.getStringMapAttribute('strategy');
  }
  public set strategy(value: { [key: string]: string }) {
    this._strategy = value;
  }
  public resetStrategy() {
    this._strategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy;
  }
}

export class DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecHostApplicationsList extends cdktf.ComplexList {
  public internalValue? : DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecHostApplications[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecHostApplicationsOutputReference {
    return new DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecHostApplicationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClassBlkioQosBlocksIoCfg {
  /**
  * configure the cost model of blkio-cost manually whether the user model is enabled. Default value: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#enable_user_model DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#enable_user_model}
  */
  readonly enableUserModel?: boolean | cdktf.IResolvable;
  /**
  * This field is used to set the weight of a sub-group. Default value: 100. Valid values: 1 to 100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#io_weight_percent DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#io_weight_percent}
  */
  readonly ioWeightPercent?: number;
  /**
  * the read BPS of user model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#model_read_bps DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#model_read_bps}
  */
  readonly modelReadBps?: number;
  /**
  * the random read iops of user model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#model_read_rand_iops DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#model_read_rand_iops}
  */
  readonly modelReadRandIops?: number;
  /**
  * the sequential read iops of user model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#model_read_seq_iops DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#model_read_seq_iops}
  */
  readonly modelReadSeqIops?: number;
  /**
  * the write BPS of user model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#model_write_bps DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#model_write_bps}
  */
  readonly modelWriteBps?: number;
  /**
  * the random write iops of user model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#model_write_rand_iops DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#model_write_rand_iops}
  */
  readonly modelWriteRandIops?: number;
  /**
  * the sequential write iops of user model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#model_write_seq_iops DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#model_write_seq_iops}
  */
  readonly modelWriteSeqIops?: number;
  /**
  * Throttling of throughput The value is set to 0, which indicates that the feature is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#read_bps DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#read_bps}
  */
  readonly readBps?: number;
  /**
  * Throttling of IOPS The value is set to 0, which indicates that the feature is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#read_iops DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#read_iops}
  */
  readonly readIops?: number;
  /**
  * Configure the weight-based throttling feature of blk-iocost Only used for RootClass After blk-iocost is enabled, the kernel calculates the proportion of requests that exceed the read or write latency threshold out of all requests. When the proportion is greater than the read or write latency percentile (95%), the kernel considers the disk to be saturated and reduces the rate at which requests are sent to the disk. the read latency threshold. Unit: microseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#read_latency DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#read_latency}
  */
  readonly readLatency?: number;
  /**
  * the read latency percentile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#read_latency_percent DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#read_latency_percent}
  */
  readonly readLatencyPercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#write_bps DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#write_bps}
  */
  readonly writeBps?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#write_iops DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#write_iops}
  */
  readonly writeIops?: number;
  /**
  * the write latency threshold. Unit: microseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#write_latency DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#write_latency}
  */
  readonly writeLatency?: number;
  /**
  * the write latency percentile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#write_latency_percent DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#write_latency_percent}
  */
  readonly writeLatencyPercent?: number;
}

export function dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClassBlkioQosBlocksIoCfgToTerraform(struct?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClassBlkioQosBlocksIoCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_user_model: cdktf.booleanToTerraform(struct!.enableUserModel),
    io_weight_percent: cdktf.numberToTerraform(struct!.ioWeightPercent),
    model_read_bps: cdktf.numberToTerraform(struct!.modelReadBps),
    model_read_rand_iops: cdktf.numberToTerraform(struct!.modelReadRandIops),
    model_read_seq_iops: cdktf.numberToTerraform(struct!.modelReadSeqIops),
    model_write_bps: cdktf.numberToTerraform(struct!.modelWriteBps),
    model_write_rand_iops: cdktf.numberToTerraform(struct!.modelWriteRandIops),
    model_write_seq_iops: cdktf.numberToTerraform(struct!.modelWriteSeqIops),
    read_bps: cdktf.numberToTerraform(struct!.readBps),
    read_iops: cdktf.numberToTerraform(struct!.readIops),
    read_latency: cdktf.numberToTerraform(struct!.readLatency),
    read_latency_percent: cdktf.numberToTerraform(struct!.readLatencyPercent),
    write_bps: cdktf.numberToTerraform(struct!.writeBps),
    write_iops: cdktf.numberToTerraform(struct!.writeIops),
    write_latency: cdktf.numberToTerraform(struct!.writeLatency),
    write_latency_percent: cdktf.numberToTerraform(struct!.writeLatencyPercent),
  }
}


export function dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClassBlkioQosBlocksIoCfgToHclTerraform(struct?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClassBlkioQosBlocksIoCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_user_model: {
      value: cdktf.booleanToHclTerraform(struct!.enableUserModel),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    io_weight_percent: {
      value: cdktf.numberToHclTerraform(struct!.ioWeightPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    model_read_bps: {
      value: cdktf.numberToHclTerraform(struct!.modelReadBps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    model_read_rand_iops: {
      value: cdktf.numberToHclTerraform(struct!.modelReadRandIops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    model_read_seq_iops: {
      value: cdktf.numberToHclTerraform(struct!.modelReadSeqIops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    model_write_bps: {
      value: cdktf.numberToHclTerraform(struct!.modelWriteBps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    model_write_rand_iops: {
      value: cdktf.numberToHclTerraform(struct!.modelWriteRandIops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    model_write_seq_iops: {
      value: cdktf.numberToHclTerraform(struct!.modelWriteSeqIops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    read_bps: {
      value: cdktf.numberToHclTerraform(struct!.readBps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    read_iops: {
      value: cdktf.numberToHclTerraform(struct!.readIops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    read_latency: {
      value: cdktf.numberToHclTerraform(struct!.readLatency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    read_latency_percent: {
      value: cdktf.numberToHclTerraform(struct!.readLatencyPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    write_bps: {
      value: cdktf.numberToHclTerraform(struct!.writeBps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    write_iops: {
      value: cdktf.numberToHclTerraform(struct!.writeIops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    write_latency: {
      value: cdktf.numberToHclTerraform(struct!.writeLatency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    write_latency_percent: {
      value: cdktf.numberToHclTerraform(struct!.writeLatencyPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClassBlkioQosBlocksIoCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClassBlkioQosBlocksIoCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableUserModel !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableUserModel = this._enableUserModel;
    }
    if (this._ioWeightPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.ioWeightPercent = this._ioWeightPercent;
    }
    if (this._modelReadBps !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelReadBps = this._modelReadBps;
    }
    if (this._modelReadRandIops !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelReadRandIops = this._modelReadRandIops;
    }
    if (this._modelReadSeqIops !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelReadSeqIops = this._modelReadSeqIops;
    }
    if (this._modelWriteBps !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelWriteBps = this._modelWriteBps;
    }
    if (this._modelWriteRandIops !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelWriteRandIops = this._modelWriteRandIops;
    }
    if (this._modelWriteSeqIops !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelWriteSeqIops = this._modelWriteSeqIops;
    }
    if (this._readBps !== undefined) {
      hasAnyValues = true;
      internalValueResult.readBps = this._readBps;
    }
    if (this._readIops !== undefined) {
      hasAnyValues = true;
      internalValueResult.readIops = this._readIops;
    }
    if (this._readLatency !== undefined) {
      hasAnyValues = true;
      internalValueResult.readLatency = this._readLatency;
    }
    if (this._readLatencyPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.readLatencyPercent = this._readLatencyPercent;
    }
    if (this._writeBps !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeBps = this._writeBps;
    }
    if (this._writeIops !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeIops = this._writeIops;
    }
    if (this._writeLatency !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeLatency = this._writeLatency;
    }
    if (this._writeLatencyPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeLatencyPercent = this._writeLatencyPercent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClassBlkioQosBlocksIoCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableUserModel = undefined;
      this._ioWeightPercent = undefined;
      this._modelReadBps = undefined;
      this._modelReadRandIops = undefined;
      this._modelReadSeqIops = undefined;
      this._modelWriteBps = undefined;
      this._modelWriteRandIops = undefined;
      this._modelWriteSeqIops = undefined;
      this._readBps = undefined;
      this._readIops = undefined;
      this._readLatency = undefined;
      this._readLatencyPercent = undefined;
      this._writeBps = undefined;
      this._writeIops = undefined;
      this._writeLatency = undefined;
      this._writeLatencyPercent = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableUserModel = value.enableUserModel;
      this._ioWeightPercent = value.ioWeightPercent;
      this._modelReadBps = value.modelReadBps;
      this._modelReadRandIops = value.modelReadRandIops;
      this._modelReadSeqIops = value.modelReadSeqIops;
      this._modelWriteBps = value.modelWriteBps;
      this._modelWriteRandIops = value.modelWriteRandIops;
      this._modelWriteSeqIops = value.modelWriteSeqIops;
      this._readBps = value.readBps;
      this._readIops = value.readIops;
      this._readLatency = value.readLatency;
      this._readLatencyPercent = value.readLatencyPercent;
      this._writeBps = value.writeBps;
      this._writeIops = value.writeIops;
      this._writeLatency = value.writeLatency;
      this._writeLatencyPercent = value.writeLatencyPercent;
    }
  }

  // enable_user_model - computed: false, optional: true, required: false
  private _enableUserModel?: boolean | cdktf.IResolvable; 
  public get enableUserModel() {
    return this.getBooleanAttribute('enable_user_model');
  }
  public set enableUserModel(value: boolean | cdktf.IResolvable) {
    this._enableUserModel = value;
  }
  public resetEnableUserModel() {
    this._enableUserModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableUserModelInput() {
    return this._enableUserModel;
  }

  // io_weight_percent - computed: false, optional: true, required: false
  private _ioWeightPercent?: number; 
  public get ioWeightPercent() {
    return this.getNumberAttribute('io_weight_percent');
  }
  public set ioWeightPercent(value: number) {
    this._ioWeightPercent = value;
  }
  public resetIoWeightPercent() {
    this._ioWeightPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ioWeightPercentInput() {
    return this._ioWeightPercent;
  }

  // model_read_bps - computed: false, optional: true, required: false
  private _modelReadBps?: number; 
  public get modelReadBps() {
    return this.getNumberAttribute('model_read_bps');
  }
  public set modelReadBps(value: number) {
    this._modelReadBps = value;
  }
  public resetModelReadBps() {
    this._modelReadBps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelReadBpsInput() {
    return this._modelReadBps;
  }

  // model_read_rand_iops - computed: false, optional: true, required: false
  private _modelReadRandIops?: number; 
  public get modelReadRandIops() {
    return this.getNumberAttribute('model_read_rand_iops');
  }
  public set modelReadRandIops(value: number) {
    this._modelReadRandIops = value;
  }
  public resetModelReadRandIops() {
    this._modelReadRandIops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelReadRandIopsInput() {
    return this._modelReadRandIops;
  }

  // model_read_seq_iops - computed: false, optional: true, required: false
  private _modelReadSeqIops?: number; 
  public get modelReadSeqIops() {
    return this.getNumberAttribute('model_read_seq_iops');
  }
  public set modelReadSeqIops(value: number) {
    this._modelReadSeqIops = value;
  }
  public resetModelReadSeqIops() {
    this._modelReadSeqIops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelReadSeqIopsInput() {
    return this._modelReadSeqIops;
  }

  // model_write_bps - computed: false, optional: true, required: false
  private _modelWriteBps?: number; 
  public get modelWriteBps() {
    return this.getNumberAttribute('model_write_bps');
  }
  public set modelWriteBps(value: number) {
    this._modelWriteBps = value;
  }
  public resetModelWriteBps() {
    this._modelWriteBps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelWriteBpsInput() {
    return this._modelWriteBps;
  }

  // model_write_rand_iops - computed: false, optional: true, required: false
  private _modelWriteRandIops?: number; 
  public get modelWriteRandIops() {
    return this.getNumberAttribute('model_write_rand_iops');
  }
  public set modelWriteRandIops(value: number) {
    this._modelWriteRandIops = value;
  }
  public resetModelWriteRandIops() {
    this._modelWriteRandIops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelWriteRandIopsInput() {
    return this._modelWriteRandIops;
  }

  // model_write_seq_iops - computed: false, optional: true, required: false
  private _modelWriteSeqIops?: number; 
  public get modelWriteSeqIops() {
    return this.getNumberAttribute('model_write_seq_iops');
  }
  public set modelWriteSeqIops(value: number) {
    this._modelWriteSeqIops = value;
  }
  public resetModelWriteSeqIops() {
    this._modelWriteSeqIops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelWriteSeqIopsInput() {
    return this._modelWriteSeqIops;
  }

  // read_bps - computed: false, optional: true, required: false
  private _readBps?: number; 
  public get readBps() {
    return this.getNumberAttribute('read_bps');
  }
  public set readBps(value: number) {
    this._readBps = value;
  }
  public resetReadBps() {
    this._readBps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readBpsInput() {
    return this._readBps;
  }

  // read_iops - computed: false, optional: true, required: false
  private _readIops?: number; 
  public get readIops() {
    return this.getNumberAttribute('read_iops');
  }
  public set readIops(value: number) {
    this._readIops = value;
  }
  public resetReadIops() {
    this._readIops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readIopsInput() {
    return this._readIops;
  }

  // read_latency - computed: false, optional: true, required: false
  private _readLatency?: number; 
  public get readLatency() {
    return this.getNumberAttribute('read_latency');
  }
  public set readLatency(value: number) {
    this._readLatency = value;
  }
  public resetReadLatency() {
    this._readLatency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readLatencyInput() {
    return this._readLatency;
  }

  // read_latency_percent - computed: false, optional: true, required: false
  private _readLatencyPercent?: number; 
  public get readLatencyPercent() {
    return this.getNumberAttribute('read_latency_percent');
  }
  public set readLatencyPercent(value: number) {
    this._readLatencyPercent = value;
  }
  public resetReadLatencyPercent() {
    this._readLatencyPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readLatencyPercentInput() {
    return this._readLatencyPercent;
  }

  // write_bps - computed: false, optional: true, required: false
  private _writeBps?: number; 
  public get writeBps() {
    return this.getNumberAttribute('write_bps');
  }
  public set writeBps(value: number) {
    this._writeBps = value;
  }
  public resetWriteBps() {
    this._writeBps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeBpsInput() {
    return this._writeBps;
  }

  // write_iops - computed: false, optional: true, required: false
  private _writeIops?: number; 
  public get writeIops() {
    return this.getNumberAttribute('write_iops');
  }
  public set writeIops(value: number) {
    this._writeIops = value;
  }
  public resetWriteIops() {
    this._writeIops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeIopsInput() {
    return this._writeIops;
  }

  // write_latency - computed: false, optional: true, required: false
  private _writeLatency?: number; 
  public get writeLatency() {
    return this.getNumberAttribute('write_latency');
  }
  public set writeLatency(value: number) {
    this._writeLatency = value;
  }
  public resetWriteLatency() {
    this._writeLatency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeLatencyInput() {
    return this._writeLatency;
  }

  // write_latency_percent - computed: false, optional: true, required: false
  private _writeLatencyPercent?: number; 
  public get writeLatencyPercent() {
    return this.getNumberAttribute('write_latency_percent');
  }
  public set writeLatencyPercent(value: number) {
    this._writeLatencyPercent = value;
  }
  public resetWriteLatencyPercent() {
    this._writeLatencyPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeLatencyPercentInput() {
    return this._writeLatencyPercent;
  }
}
export interface DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClassBlkioQosBlocks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#io_cfg DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#io_cfg}
  */
  readonly ioCfg?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClassBlkioQosBlocksIoCfg;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#name DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#type DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClassBlkioQosBlocksToTerraform(struct?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClassBlkioQosBlocks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    io_cfg: dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClassBlkioQosBlocksIoCfgToTerraform(struct!.ioCfg),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClassBlkioQosBlocksToHclTerraform(struct?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClassBlkioQosBlocks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    io_cfg: {
      value: dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClassBlkioQosBlocksIoCfgToHclTerraform(struct!.ioCfg),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClassBlkioQosBlocksIoCfg",
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

export class DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClassBlkioQosBlocksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClassBlkioQosBlocks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ioCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ioCfg = this._ioCfg?.internalValue;
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

  public set internalValue(value: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClassBlkioQosBlocks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ioCfg.internalValue = undefined;
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
      this._ioCfg.internalValue = value.ioCfg;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // io_cfg - computed: false, optional: true, required: false
  private _ioCfg = new DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClassBlkioQosBlocksIoCfgOutputReference(this, "io_cfg");
  public get ioCfg() {
    return this._ioCfg;
  }
  public putIoCfg(value: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClassBlkioQosBlocksIoCfg) {
    this._ioCfg.internalValue = value;
  }
  public resetIoCfg() {
    this._ioCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ioCfgInput() {
    return this._ioCfg.internalValue;
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
}

export class DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClassBlkioQosBlocksList extends cdktf.ComplexList {
  public internalValue? : DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClassBlkioQosBlocks[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClassBlkioQosBlocksOutputReference {
    return new DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClassBlkioQosBlocksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClassBlkioQos {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#blocks DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#blocks}
  */
  readonly blocks?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClassBlkioQosBlocks[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#enable DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
}

export function dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClassBlkioQosToTerraform(struct?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClassBlkioQos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blocks: cdktf.listMapper(dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClassBlkioQosBlocksToTerraform, false)(struct!.blocks),
    enable: cdktf.booleanToTerraform(struct!.enable),
  }
}


export function dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClassBlkioQosToHclTerraform(struct?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClassBlkioQos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blocks: {
      value: cdktf.listMapperHcl(dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClassBlkioQosBlocksToHclTerraform, false)(struct!.blocks),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClassBlkioQosBlocksList",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClassBlkioQosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClassBlkioQos | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blocks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blocks = this._blocks?.internalValue;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClassBlkioQos | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._blocks.internalValue = undefined;
      this._enable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._blocks.internalValue = value.blocks;
      this._enable = value.enable;
    }
  }

  // blocks - computed: false, optional: true, required: false
  private _blocks = new DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClassBlkioQosBlocksList(this, "blocks", false);
  public get blocks() {
    return this._blocks;
  }
  public putBlocks(value: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClassBlkioQosBlocks[] | cdktf.IResolvable) {
    this._blocks.internalValue = value;
  }
  public resetBlocks() {
    this._blocks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blocksInput() {
    return this._blocks.internalValue;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }
}
export interface DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClassCpuQos {
  /**
  * whether pods of the QoS class can expel the cgroup idle pods at the SMT-level. default = false If set to true, pods of this QoS will use a dedicated core sched group for noise clean with the SchedIdle pods. NOTE: It takes effect if cpuPolicy = 'coreSched'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#core_expeller DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#core_expeller}
  */
  readonly coreExpeller?: boolean | cdktf.IResolvable;
  /**
  * Enable indicates whether the cpu qos is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#enable DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * group identity value for pods, default = 0 NOTE: It takes effect if cpuPolicy = 'groupIdentity'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#group_identity DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#group_identity}
  */
  readonly groupIdentity?: number;
  /**
  * cpu.idle value for pods, default = 0. '1' means using SCHED_IDLE. CGroup Idle (introduced since mainline Linux 5.15): https://lore.kernel.org/lkml/162971078674.25758.15464079371945307825.tip-bot2@tip-bot2/#r NOTE: It takes effect if cpuPolicy = 'coreSched'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#sched_idle DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#sched_idle}
  */
  readonly schedIdle?: number;
}

export function dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClassCpuQosToTerraform(struct?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClassCpuQos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    core_expeller: cdktf.booleanToTerraform(struct!.coreExpeller),
    enable: cdktf.booleanToTerraform(struct!.enable),
    group_identity: cdktf.numberToTerraform(struct!.groupIdentity),
    sched_idle: cdktf.numberToTerraform(struct!.schedIdle),
  }
}


export function dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClassCpuQosToHclTerraform(struct?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClassCpuQos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    core_expeller: {
      value: cdktf.booleanToHclTerraform(struct!.coreExpeller),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    group_identity: {
      value: cdktf.numberToHclTerraform(struct!.groupIdentity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sched_idle: {
      value: cdktf.numberToHclTerraform(struct!.schedIdle),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClassCpuQosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClassCpuQos | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._coreExpeller !== undefined) {
      hasAnyValues = true;
      internalValueResult.coreExpeller = this._coreExpeller;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._groupIdentity !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupIdentity = this._groupIdentity;
    }
    if (this._schedIdle !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedIdle = this._schedIdle;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClassCpuQos | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._coreExpeller = undefined;
      this._enable = undefined;
      this._groupIdentity = undefined;
      this._schedIdle = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._coreExpeller = value.coreExpeller;
      this._enable = value.enable;
      this._groupIdentity = value.groupIdentity;
      this._schedIdle = value.schedIdle;
    }
  }

  // core_expeller - computed: false, optional: true, required: false
  private _coreExpeller?: boolean | cdktf.IResolvable; 
  public get coreExpeller() {
    return this.getBooleanAttribute('core_expeller');
  }
  public set coreExpeller(value: boolean | cdktf.IResolvable) {
    this._coreExpeller = value;
  }
  public resetCoreExpeller() {
    this._coreExpeller = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coreExpellerInput() {
    return this._coreExpeller;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // group_identity - computed: false, optional: true, required: false
  private _groupIdentity?: number; 
  public get groupIdentity() {
    return this.getNumberAttribute('group_identity');
  }
  public set groupIdentity(value: number) {
    this._groupIdentity = value;
  }
  public resetGroupIdentity() {
    this._groupIdentity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdentityInput() {
    return this._groupIdentity;
  }

  // sched_idle - computed: false, optional: true, required: false
  private _schedIdle?: number; 
  public get schedIdle() {
    return this.getNumberAttribute('sched_idle');
  }
  public set schedIdle(value: number) {
    this._schedIdle = value;
  }
  public resetSchedIdle() {
    this._schedIdle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedIdleInput() {
    return this._schedIdle;
  }
}
export interface DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClassMemoryQos {
  /**
  * Enable indicates whether the memory qos is enabled (default: false). This field is used for node-level control, while pod-level configuration is done with MemoryQOS and 'Policy' instead of an 'Enable' option. Please view the differences between MemoryQOSCfg and PodMemoryQOSConfig structs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#enable DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * LowLimitPercent specifies the lowLimitFactor percentage to calculate 'memory.low', which TRIES BEST protecting memory from global reclamation when memory usage does not exceed the low limit unless no unprotected memcg can be reclaimed. NOTE: 'memory.low' should be larger than 'memory.min'. If spec.requests.memory == spec.limits.memory, pod 'memory.low' and 'memory.high' become invalid, while 'memory.wmark_ratio' is still in effect. Close: 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#low_limit_percent DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#low_limit_percent}
  */
  readonly lowLimitPercent?: number;
  /**
  * memcg qos If enabled, memcg qos will be set by the agent, where some fields are implicitly calculated from pod spec. 1. 'memory.min' := spec.requests.memory * minLimitFactor / 100 (use 0 if requests.memory is not set) 2. 'memory.low' := spec.requests.memory * lowLimitFactor / 100 (use 0 if requests.memory is not set) 3. 'memory.limit_in_bytes' := spec.limits.memory (set $node.allocatable.memory if limits.memory is not set) 4. 'memory.high' := floor[(spec.requests.memory + throttlingFactor / 100 * (memory.limit_in_bytes or node allocatable memory - spec.requests.memory))/pageSize] * pageSize MinLimitPercent specifies the minLimitFactor percentage to calculate 'memory.min', which protects memory from global reclamation when memory usage does not exceed the min limit. Close: 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#min_limit_percent DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#min_limit_percent}
  */
  readonly minLimitPercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#oom_kill_group DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#oom_kill_group}
  */
  readonly oomKillGroup?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#priority DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#priority}
  */
  readonly priority?: number;
  /**
  * TODO: enhance the usages of oom priority and oom kill group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#priority_enable DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#priority_enable}
  */
  readonly priorityEnable?: number;
  /**
  * ThrottlingPercent specifies the throttlingFactor percentage to calculate 'memory.high' with pod memory.limits or node allocatable memory, which triggers memcg direct reclamation when memory usage exceeds. Lower the factor brings more heavier reclaim pressure. Close: 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#throttling_percent DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#throttling_percent}
  */
  readonly throttlingPercent?: number;
  /**
  * wmark_min_adj (Anolis OS required) WmarkMinAdj specifies 'memory.wmark_min_adj' which adjusts per-memcg threshold for global memory reclamation. Lower the factor brings later reclamation. The adjustment uses different formula for different value range. [-25, 0)：global_wmark_min' = global_wmark_min + (global_wmark_min - 0) * wmarkMinAdj (0, 50]：global_wmark_min' = global_wmark_min + (global_wmark_low - global_wmark_min) * wmarkMinAdj Close: [LSR:0, LS:0, BE:0]. Recommended: [LSR:-25, LS:-25, BE:50].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#wmark_min_adj DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#wmark_min_adj}
  */
  readonly wmarkMinAdj?: number;
  /**
  * wmark_ratio (Anolis OS required) Async memory reclamation is triggered when cgroup memory usage exceeds 'memory.wmark_high' and the reclamation stops when usage is below 'memory.wmark_low'. Basically, 'memory.wmark_high' := min(memory.high, memory.limit_in_bytes) * memory.memory.wmark_ratio 'memory.wmark_low' := min(memory.high, memory.limit_in_bytes) * (memory.wmark_ratio - memory.wmark_scale_factor) WmarkRatio specifies 'memory.wmark_ratio' that help calculate 'memory.wmark_high', which triggers async memory reclamation when memory usage exceeds. Close: 0. Recommended: 95.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#wmark_ratio DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#wmark_ratio}
  */
  readonly wmarkRatio?: number;
  /**
  * WmarkScalePermill specifies 'memory.wmark_scale_factor' that helps calculate 'memory.wmark_low', which stops async memory reclamation when memory usage belows. Close: 50. Recommended: 20.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#wmark_scale_permill DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#wmark_scale_permill}
  */
  readonly wmarkScalePermill?: number;
}

export function dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClassMemoryQosToTerraform(struct?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClassMemoryQos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    low_limit_percent: cdktf.numberToTerraform(struct!.lowLimitPercent),
    min_limit_percent: cdktf.numberToTerraform(struct!.minLimitPercent),
    oom_kill_group: cdktf.numberToTerraform(struct!.oomKillGroup),
    priority: cdktf.numberToTerraform(struct!.priority),
    priority_enable: cdktf.numberToTerraform(struct!.priorityEnable),
    throttling_percent: cdktf.numberToTerraform(struct!.throttlingPercent),
    wmark_min_adj: cdktf.numberToTerraform(struct!.wmarkMinAdj),
    wmark_ratio: cdktf.numberToTerraform(struct!.wmarkRatio),
    wmark_scale_permill: cdktf.numberToTerraform(struct!.wmarkScalePermill),
  }
}


export function dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClassMemoryQosToHclTerraform(struct?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClassMemoryQos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    low_limit_percent: {
      value: cdktf.numberToHclTerraform(struct!.lowLimitPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_limit_percent: {
      value: cdktf.numberToHclTerraform(struct!.minLimitPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    oom_kill_group: {
      value: cdktf.numberToHclTerraform(struct!.oomKillGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority_enable: {
      value: cdktf.numberToHclTerraform(struct!.priorityEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    throttling_percent: {
      value: cdktf.numberToHclTerraform(struct!.throttlingPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    wmark_min_adj: {
      value: cdktf.numberToHclTerraform(struct!.wmarkMinAdj),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    wmark_ratio: {
      value: cdktf.numberToHclTerraform(struct!.wmarkRatio),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    wmark_scale_permill: {
      value: cdktf.numberToHclTerraform(struct!.wmarkScalePermill),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClassMemoryQosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClassMemoryQos | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._lowLimitPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.lowLimitPercent = this._lowLimitPercent;
    }
    if (this._minLimitPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.minLimitPercent = this._minLimitPercent;
    }
    if (this._oomKillGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.oomKillGroup = this._oomKillGroup;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._priorityEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityEnable = this._priorityEnable;
    }
    if (this._throttlingPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.throttlingPercent = this._throttlingPercent;
    }
    if (this._wmarkMinAdj !== undefined) {
      hasAnyValues = true;
      internalValueResult.wmarkMinAdj = this._wmarkMinAdj;
    }
    if (this._wmarkRatio !== undefined) {
      hasAnyValues = true;
      internalValueResult.wmarkRatio = this._wmarkRatio;
    }
    if (this._wmarkScalePermill !== undefined) {
      hasAnyValues = true;
      internalValueResult.wmarkScalePermill = this._wmarkScalePermill;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClassMemoryQos | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._lowLimitPercent = undefined;
      this._minLimitPercent = undefined;
      this._oomKillGroup = undefined;
      this._priority = undefined;
      this._priorityEnable = undefined;
      this._throttlingPercent = undefined;
      this._wmarkMinAdj = undefined;
      this._wmarkRatio = undefined;
      this._wmarkScalePermill = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._lowLimitPercent = value.lowLimitPercent;
      this._minLimitPercent = value.minLimitPercent;
      this._oomKillGroup = value.oomKillGroup;
      this._priority = value.priority;
      this._priorityEnable = value.priorityEnable;
      this._throttlingPercent = value.throttlingPercent;
      this._wmarkMinAdj = value.wmarkMinAdj;
      this._wmarkRatio = value.wmarkRatio;
      this._wmarkScalePermill = value.wmarkScalePermill;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // low_limit_percent - computed: false, optional: true, required: false
  private _lowLimitPercent?: number; 
  public get lowLimitPercent() {
    return this.getNumberAttribute('low_limit_percent');
  }
  public set lowLimitPercent(value: number) {
    this._lowLimitPercent = value;
  }
  public resetLowLimitPercent() {
    this._lowLimitPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowLimitPercentInput() {
    return this._lowLimitPercent;
  }

  // min_limit_percent - computed: false, optional: true, required: false
  private _minLimitPercent?: number; 
  public get minLimitPercent() {
    return this.getNumberAttribute('min_limit_percent');
  }
  public set minLimitPercent(value: number) {
    this._minLimitPercent = value;
  }
  public resetMinLimitPercent() {
    this._minLimitPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minLimitPercentInput() {
    return this._minLimitPercent;
  }

  // oom_kill_group - computed: false, optional: true, required: false
  private _oomKillGroup?: number; 
  public get oomKillGroup() {
    return this.getNumberAttribute('oom_kill_group');
  }
  public set oomKillGroup(value: number) {
    this._oomKillGroup = value;
  }
  public resetOomKillGroup() {
    this._oomKillGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oomKillGroupInput() {
    return this._oomKillGroup;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // priority_enable - computed: false, optional: true, required: false
  private _priorityEnable?: number; 
  public get priorityEnable() {
    return this.getNumberAttribute('priority_enable');
  }
  public set priorityEnable(value: number) {
    this._priorityEnable = value;
  }
  public resetPriorityEnable() {
    this._priorityEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityEnableInput() {
    return this._priorityEnable;
  }

  // throttling_percent - computed: false, optional: true, required: false
  private _throttlingPercent?: number; 
  public get throttlingPercent() {
    return this.getNumberAttribute('throttling_percent');
  }
  public set throttlingPercent(value: number) {
    this._throttlingPercent = value;
  }
  public resetThrottlingPercent() {
    this._throttlingPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throttlingPercentInput() {
    return this._throttlingPercent;
  }

  // wmark_min_adj - computed: false, optional: true, required: false
  private _wmarkMinAdj?: number; 
  public get wmarkMinAdj() {
    return this.getNumberAttribute('wmark_min_adj');
  }
  public set wmarkMinAdj(value: number) {
    this._wmarkMinAdj = value;
  }
  public resetWmarkMinAdj() {
    this._wmarkMinAdj = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wmarkMinAdjInput() {
    return this._wmarkMinAdj;
  }

  // wmark_ratio - computed: false, optional: true, required: false
  private _wmarkRatio?: number; 
  public get wmarkRatio() {
    return this.getNumberAttribute('wmark_ratio');
  }
  public set wmarkRatio(value: number) {
    this._wmarkRatio = value;
  }
  public resetWmarkRatio() {
    this._wmarkRatio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wmarkRatioInput() {
    return this._wmarkRatio;
  }

  // wmark_scale_permill - computed: false, optional: true, required: false
  private _wmarkScalePermill?: number; 
  public get wmarkScalePermill() {
    return this.getNumberAttribute('wmark_scale_permill');
  }
  public set wmarkScalePermill(value: number) {
    this._wmarkScalePermill = value;
  }
  public resetWmarkScalePermill() {
    this._wmarkScalePermill = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wmarkScalePermillInput() {
    return this._wmarkScalePermill;
  }
}
export interface DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClassNetworkQos {
  /**
  * EgressLimit describes the maximum network bandwidth can be used in the egress direction, unit: bps(bytes per second), two expressions are supported，int and string, int: percentage based on total bandwidth，valid in 0-100 string: a specific network bandwidth value, eg: 50M.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#egress_limit DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#egress_limit}
  */
  readonly egressLimit?: string;
  /**
  * EgressRequest describes the minimum network bandwidth guaranteed in the egress direction. unit: bps(bytes per second), two expressions are supported，int and string, int: percentage based on total bandwidth，valid in 0-100 string: a specific network bandwidth value, eg: 50M.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#egress_request DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#egress_request}
  */
  readonly egressRequest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#enable DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * IngressLimit describes the maximum network bandwidth can be used in the ingress direction, unit: bps(bytes per second), two expressions are supported，int and string, int: percentage based on total bandwidth，valid in 0-100 string: a specific network bandwidth value, eg: 50M.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#ingress_limit DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#ingress_limit}
  */
  readonly ingressLimit?: string;
  /**
  * IngressRequest describes the minimum network bandwidth guaranteed in the ingress direction. unit: bps(bytes per second), two expressions are supported，int and string, int: percentage based on total bandwidth，valid in 0-100 string: a specific network bandwidth value, eg: 50M.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#ingress_request DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#ingress_request}
  */
  readonly ingressRequest?: string;
}

export function dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClassNetworkQosToTerraform(struct?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClassNetworkQos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    egress_limit: cdktf.stringToTerraform(struct!.egressLimit),
    egress_request: cdktf.stringToTerraform(struct!.egressRequest),
    enable: cdktf.booleanToTerraform(struct!.enable),
    ingress_limit: cdktf.stringToTerraform(struct!.ingressLimit),
    ingress_request: cdktf.stringToTerraform(struct!.ingressRequest),
  }
}


export function dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClassNetworkQosToHclTerraform(struct?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClassNetworkQos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    egress_limit: {
      value: cdktf.stringToHclTerraform(struct!.egressLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    egress_request: {
      value: cdktf.stringToHclTerraform(struct!.egressRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ingress_limit: {
      value: cdktf.stringToHclTerraform(struct!.ingressLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ingress_request: {
      value: cdktf.stringToHclTerraform(struct!.ingressRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClassNetworkQosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClassNetworkQos | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._egressLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.egressLimit = this._egressLimit;
    }
    if (this._egressRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.egressRequest = this._egressRequest;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._ingressLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressLimit = this._ingressLimit;
    }
    if (this._ingressRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressRequest = this._ingressRequest;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClassNetworkQos | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._egressLimit = undefined;
      this._egressRequest = undefined;
      this._enable = undefined;
      this._ingressLimit = undefined;
      this._ingressRequest = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._egressLimit = value.egressLimit;
      this._egressRequest = value.egressRequest;
      this._enable = value.enable;
      this._ingressLimit = value.ingressLimit;
      this._ingressRequest = value.ingressRequest;
    }
  }

  // egress_limit - computed: false, optional: true, required: false
  private _egressLimit?: string; 
  public get egressLimit() {
    return this.getStringAttribute('egress_limit');
  }
  public set egressLimit(value: string) {
    this._egressLimit = value;
  }
  public resetEgressLimit() {
    this._egressLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressLimitInput() {
    return this._egressLimit;
  }

  // egress_request - computed: false, optional: true, required: false
  private _egressRequest?: string; 
  public get egressRequest() {
    return this.getStringAttribute('egress_request');
  }
  public set egressRequest(value: string) {
    this._egressRequest = value;
  }
  public resetEgressRequest() {
    this._egressRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressRequestInput() {
    return this._egressRequest;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // ingress_limit - computed: false, optional: true, required: false
  private _ingressLimit?: string; 
  public get ingressLimit() {
    return this.getStringAttribute('ingress_limit');
  }
  public set ingressLimit(value: string) {
    this._ingressLimit = value;
  }
  public resetIngressLimit() {
    this._ingressLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressLimitInput() {
    return this._ingressLimit;
  }

  // ingress_request - computed: false, optional: true, required: false
  private _ingressRequest?: string; 
  public get ingressRequest() {
    return this.getStringAttribute('ingress_request');
  }
  public set ingressRequest(value: string) {
    this._ingressRequest = value;
  }
  public resetIngressRequest() {
    this._ingressRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressRequestInput() {
    return this._ingressRequest;
  }
}
export interface DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClassResctrlQos {
  /**
  * LLC available range end for pods by percentage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#cat_range_end_percent DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#cat_range_end_percent}
  */
  readonly catRangeEndPercent?: number;
  /**
  * LLC available range start for pods by percentage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#cat_range_start_percent DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#cat_range_start_percent}
  */
  readonly catRangeStartPercent?: number;
  /**
  * Enable indicates whether the resctrl qos is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#enable DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * MBA percent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#mba_percent DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#mba_percent}
  */
  readonly mbaPercent?: number;
}

export function dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClassResctrlQosToTerraform(struct?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClassResctrlQos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cat_range_end_percent: cdktf.numberToTerraform(struct!.catRangeEndPercent),
    cat_range_start_percent: cdktf.numberToTerraform(struct!.catRangeStartPercent),
    enable: cdktf.booleanToTerraform(struct!.enable),
    mba_percent: cdktf.numberToTerraform(struct!.mbaPercent),
  }
}


export function dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClassResctrlQosToHclTerraform(struct?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClassResctrlQos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cat_range_end_percent: {
      value: cdktf.numberToHclTerraform(struct!.catRangeEndPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cat_range_start_percent: {
      value: cdktf.numberToHclTerraform(struct!.catRangeStartPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mba_percent: {
      value: cdktf.numberToHclTerraform(struct!.mbaPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClassResctrlQosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClassResctrlQos | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._catRangeEndPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.catRangeEndPercent = this._catRangeEndPercent;
    }
    if (this._catRangeStartPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.catRangeStartPercent = this._catRangeStartPercent;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._mbaPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.mbaPercent = this._mbaPercent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClassResctrlQos | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._catRangeEndPercent = undefined;
      this._catRangeStartPercent = undefined;
      this._enable = undefined;
      this._mbaPercent = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._catRangeEndPercent = value.catRangeEndPercent;
      this._catRangeStartPercent = value.catRangeStartPercent;
      this._enable = value.enable;
      this._mbaPercent = value.mbaPercent;
    }
  }

  // cat_range_end_percent - computed: false, optional: true, required: false
  private _catRangeEndPercent?: number; 
  public get catRangeEndPercent() {
    return this.getNumberAttribute('cat_range_end_percent');
  }
  public set catRangeEndPercent(value: number) {
    this._catRangeEndPercent = value;
  }
  public resetCatRangeEndPercent() {
    this._catRangeEndPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catRangeEndPercentInput() {
    return this._catRangeEndPercent;
  }

  // cat_range_start_percent - computed: false, optional: true, required: false
  private _catRangeStartPercent?: number; 
  public get catRangeStartPercent() {
    return this.getNumberAttribute('cat_range_start_percent');
  }
  public set catRangeStartPercent(value: number) {
    this._catRangeStartPercent = value;
  }
  public resetCatRangeStartPercent() {
    this._catRangeStartPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catRangeStartPercentInput() {
    return this._catRangeStartPercent;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // mba_percent - computed: false, optional: true, required: false
  private _mbaPercent?: number; 
  public get mbaPercent() {
    return this.getNumberAttribute('mba_percent');
  }
  public set mbaPercent(value: number) {
    this._mbaPercent = value;
  }
  public resetMbaPercent() {
    this._mbaPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mbaPercentInput() {
    return this._mbaPercent;
  }
}
export interface DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClass {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#blkio_qos DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#blkio_qos}
  */
  readonly blkioQos?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClassBlkioQos;
  /**
  * CPUQOSCfg stores node-level config of cpu qos
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#cpu_qos DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#cpu_qos}
  */
  readonly cpuQos?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClassCpuQos;
  /**
  * MemoryQOSCfg stores node-level config of memory qos
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#memory_qos DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#memory_qos}
  */
  readonly memoryQos?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClassMemoryQos;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#network_qos DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#network_qos}
  */
  readonly networkQos?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClassNetworkQos;
  /**
  * ResctrlQOSCfg stores node-level config of resctrl qos
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#resctrl_qos DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#resctrl_qos}
  */
  readonly resctrlQos?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClassResctrlQos;
}

export function dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClassToTerraform(struct?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClass | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blkio_qos: dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClassBlkioQosToTerraform(struct!.blkioQos),
    cpu_qos: dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClassCpuQosToTerraform(struct!.cpuQos),
    memory_qos: dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClassMemoryQosToTerraform(struct!.memoryQos),
    network_qos: dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClassNetworkQosToTerraform(struct!.networkQos),
    resctrl_qos: dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClassResctrlQosToTerraform(struct!.resctrlQos),
  }
}


export function dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClassToHclTerraform(struct?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClass | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blkio_qos: {
      value: dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClassBlkioQosToHclTerraform(struct!.blkioQos),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClassBlkioQos",
    },
    cpu_qos: {
      value: dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClassCpuQosToHclTerraform(struct!.cpuQos),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClassCpuQos",
    },
    memory_qos: {
      value: dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClassMemoryQosToHclTerraform(struct!.memoryQos),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClassMemoryQos",
    },
    network_qos: {
      value: dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClassNetworkQosToHclTerraform(struct!.networkQos),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClassNetworkQos",
    },
    resctrl_qos: {
      value: dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClassResctrlQosToHclTerraform(struct!.resctrlQos),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClassResctrlQos",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClassOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClass | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blkioQos?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blkioQos = this._blkioQos?.internalValue;
    }
    if (this._cpuQos?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuQos = this._cpuQos?.internalValue;
    }
    if (this._memoryQos?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryQos = this._memoryQos?.internalValue;
    }
    if (this._networkQos?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkQos = this._networkQos?.internalValue;
    }
    if (this._resctrlQos?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resctrlQos = this._resctrlQos?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClass | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._blkioQos.internalValue = undefined;
      this._cpuQos.internalValue = undefined;
      this._memoryQos.internalValue = undefined;
      this._networkQos.internalValue = undefined;
      this._resctrlQos.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._blkioQos.internalValue = value.blkioQos;
      this._cpuQos.internalValue = value.cpuQos;
      this._memoryQos.internalValue = value.memoryQos;
      this._networkQos.internalValue = value.networkQos;
      this._resctrlQos.internalValue = value.resctrlQos;
    }
  }

  // blkio_qos - computed: false, optional: true, required: false
  private _blkioQos = new DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClassBlkioQosOutputReference(this, "blkio_qos");
  public get blkioQos() {
    return this._blkioQos;
  }
  public putBlkioQos(value: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClassBlkioQos) {
    this._blkioQos.internalValue = value;
  }
  public resetBlkioQos() {
    this._blkioQos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blkioQosInput() {
    return this._blkioQos.internalValue;
  }

  // cpu_qos - computed: false, optional: true, required: false
  private _cpuQos = new DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClassCpuQosOutputReference(this, "cpu_qos");
  public get cpuQos() {
    return this._cpuQos;
  }
  public putCpuQos(value: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClassCpuQos) {
    this._cpuQos.internalValue = value;
  }
  public resetCpuQos() {
    this._cpuQos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuQosInput() {
    return this._cpuQos.internalValue;
  }

  // memory_qos - computed: false, optional: true, required: false
  private _memoryQos = new DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClassMemoryQosOutputReference(this, "memory_qos");
  public get memoryQos() {
    return this._memoryQos;
  }
  public putMemoryQos(value: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClassMemoryQos) {
    this._memoryQos.internalValue = value;
  }
  public resetMemoryQos() {
    this._memoryQos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryQosInput() {
    return this._memoryQos.internalValue;
  }

  // network_qos - computed: false, optional: true, required: false
  private _networkQos = new DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClassNetworkQosOutputReference(this, "network_qos");
  public get networkQos() {
    return this._networkQos;
  }
  public putNetworkQos(value: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClassNetworkQos) {
    this._networkQos.internalValue = value;
  }
  public resetNetworkQos() {
    this._networkQos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkQosInput() {
    return this._networkQos.internalValue;
  }

  // resctrl_qos - computed: false, optional: true, required: false
  private _resctrlQos = new DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClassResctrlQosOutputReference(this, "resctrl_qos");
  public get resctrlQos() {
    return this._resctrlQos;
  }
  public putResctrlQos(value: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClassResctrlQos) {
    this._resctrlQos.internalValue = value;
  }
  public resetResctrlQos() {
    this._resctrlQos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resctrlQosInput() {
    return this._resctrlQos.internalValue;
  }
}
export interface DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRootBlkioQosBlocksIoCfg {
  /**
  * configure the cost model of blkio-cost manually whether the user model is enabled. Default value: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#enable_user_model DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#enable_user_model}
  */
  readonly enableUserModel?: boolean | cdktf.IResolvable;
  /**
  * This field is used to set the weight of a sub-group. Default value: 100. Valid values: 1 to 100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#io_weight_percent DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#io_weight_percent}
  */
  readonly ioWeightPercent?: number;
  /**
  * the read BPS of user model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#model_read_bps DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#model_read_bps}
  */
  readonly modelReadBps?: number;
  /**
  * the random read iops of user model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#model_read_rand_iops DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#model_read_rand_iops}
  */
  readonly modelReadRandIops?: number;
  /**
  * the sequential read iops of user model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#model_read_seq_iops DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#model_read_seq_iops}
  */
  readonly modelReadSeqIops?: number;
  /**
  * the write BPS of user model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#model_write_bps DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#model_write_bps}
  */
  readonly modelWriteBps?: number;
  /**
  * the random write iops of user model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#model_write_rand_iops DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#model_write_rand_iops}
  */
  readonly modelWriteRandIops?: number;
  /**
  * the sequential write iops of user model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#model_write_seq_iops DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#model_write_seq_iops}
  */
  readonly modelWriteSeqIops?: number;
  /**
  * Throttling of throughput The value is set to 0, which indicates that the feature is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#read_bps DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#read_bps}
  */
  readonly readBps?: number;
  /**
  * Throttling of IOPS The value is set to 0, which indicates that the feature is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#read_iops DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#read_iops}
  */
  readonly readIops?: number;
  /**
  * Configure the weight-based throttling feature of blk-iocost Only used for RootClass After blk-iocost is enabled, the kernel calculates the proportion of requests that exceed the read or write latency threshold out of all requests. When the proportion is greater than the read or write latency percentile (95%), the kernel considers the disk to be saturated and reduces the rate at which requests are sent to the disk. the read latency threshold. Unit: microseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#read_latency DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#read_latency}
  */
  readonly readLatency?: number;
  /**
  * the read latency percentile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#read_latency_percent DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#read_latency_percent}
  */
  readonly readLatencyPercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#write_bps DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#write_bps}
  */
  readonly writeBps?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#write_iops DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#write_iops}
  */
  readonly writeIops?: number;
  /**
  * the write latency threshold. Unit: microseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#write_latency DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#write_latency}
  */
  readonly writeLatency?: number;
  /**
  * the write latency percentile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#write_latency_percent DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#write_latency_percent}
  */
  readonly writeLatencyPercent?: number;
}

export function dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRootBlkioQosBlocksIoCfgToTerraform(struct?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRootBlkioQosBlocksIoCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_user_model: cdktf.booleanToTerraform(struct!.enableUserModel),
    io_weight_percent: cdktf.numberToTerraform(struct!.ioWeightPercent),
    model_read_bps: cdktf.numberToTerraform(struct!.modelReadBps),
    model_read_rand_iops: cdktf.numberToTerraform(struct!.modelReadRandIops),
    model_read_seq_iops: cdktf.numberToTerraform(struct!.modelReadSeqIops),
    model_write_bps: cdktf.numberToTerraform(struct!.modelWriteBps),
    model_write_rand_iops: cdktf.numberToTerraform(struct!.modelWriteRandIops),
    model_write_seq_iops: cdktf.numberToTerraform(struct!.modelWriteSeqIops),
    read_bps: cdktf.numberToTerraform(struct!.readBps),
    read_iops: cdktf.numberToTerraform(struct!.readIops),
    read_latency: cdktf.numberToTerraform(struct!.readLatency),
    read_latency_percent: cdktf.numberToTerraform(struct!.readLatencyPercent),
    write_bps: cdktf.numberToTerraform(struct!.writeBps),
    write_iops: cdktf.numberToTerraform(struct!.writeIops),
    write_latency: cdktf.numberToTerraform(struct!.writeLatency),
    write_latency_percent: cdktf.numberToTerraform(struct!.writeLatencyPercent),
  }
}


export function dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRootBlkioQosBlocksIoCfgToHclTerraform(struct?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRootBlkioQosBlocksIoCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_user_model: {
      value: cdktf.booleanToHclTerraform(struct!.enableUserModel),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    io_weight_percent: {
      value: cdktf.numberToHclTerraform(struct!.ioWeightPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    model_read_bps: {
      value: cdktf.numberToHclTerraform(struct!.modelReadBps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    model_read_rand_iops: {
      value: cdktf.numberToHclTerraform(struct!.modelReadRandIops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    model_read_seq_iops: {
      value: cdktf.numberToHclTerraform(struct!.modelReadSeqIops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    model_write_bps: {
      value: cdktf.numberToHclTerraform(struct!.modelWriteBps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    model_write_rand_iops: {
      value: cdktf.numberToHclTerraform(struct!.modelWriteRandIops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    model_write_seq_iops: {
      value: cdktf.numberToHclTerraform(struct!.modelWriteSeqIops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    read_bps: {
      value: cdktf.numberToHclTerraform(struct!.readBps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    read_iops: {
      value: cdktf.numberToHclTerraform(struct!.readIops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    read_latency: {
      value: cdktf.numberToHclTerraform(struct!.readLatency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    read_latency_percent: {
      value: cdktf.numberToHclTerraform(struct!.readLatencyPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    write_bps: {
      value: cdktf.numberToHclTerraform(struct!.writeBps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    write_iops: {
      value: cdktf.numberToHclTerraform(struct!.writeIops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    write_latency: {
      value: cdktf.numberToHclTerraform(struct!.writeLatency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    write_latency_percent: {
      value: cdktf.numberToHclTerraform(struct!.writeLatencyPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRootBlkioQosBlocksIoCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRootBlkioQosBlocksIoCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableUserModel !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableUserModel = this._enableUserModel;
    }
    if (this._ioWeightPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.ioWeightPercent = this._ioWeightPercent;
    }
    if (this._modelReadBps !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelReadBps = this._modelReadBps;
    }
    if (this._modelReadRandIops !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelReadRandIops = this._modelReadRandIops;
    }
    if (this._modelReadSeqIops !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelReadSeqIops = this._modelReadSeqIops;
    }
    if (this._modelWriteBps !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelWriteBps = this._modelWriteBps;
    }
    if (this._modelWriteRandIops !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelWriteRandIops = this._modelWriteRandIops;
    }
    if (this._modelWriteSeqIops !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelWriteSeqIops = this._modelWriteSeqIops;
    }
    if (this._readBps !== undefined) {
      hasAnyValues = true;
      internalValueResult.readBps = this._readBps;
    }
    if (this._readIops !== undefined) {
      hasAnyValues = true;
      internalValueResult.readIops = this._readIops;
    }
    if (this._readLatency !== undefined) {
      hasAnyValues = true;
      internalValueResult.readLatency = this._readLatency;
    }
    if (this._readLatencyPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.readLatencyPercent = this._readLatencyPercent;
    }
    if (this._writeBps !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeBps = this._writeBps;
    }
    if (this._writeIops !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeIops = this._writeIops;
    }
    if (this._writeLatency !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeLatency = this._writeLatency;
    }
    if (this._writeLatencyPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeLatencyPercent = this._writeLatencyPercent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRootBlkioQosBlocksIoCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableUserModel = undefined;
      this._ioWeightPercent = undefined;
      this._modelReadBps = undefined;
      this._modelReadRandIops = undefined;
      this._modelReadSeqIops = undefined;
      this._modelWriteBps = undefined;
      this._modelWriteRandIops = undefined;
      this._modelWriteSeqIops = undefined;
      this._readBps = undefined;
      this._readIops = undefined;
      this._readLatency = undefined;
      this._readLatencyPercent = undefined;
      this._writeBps = undefined;
      this._writeIops = undefined;
      this._writeLatency = undefined;
      this._writeLatencyPercent = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableUserModel = value.enableUserModel;
      this._ioWeightPercent = value.ioWeightPercent;
      this._modelReadBps = value.modelReadBps;
      this._modelReadRandIops = value.modelReadRandIops;
      this._modelReadSeqIops = value.modelReadSeqIops;
      this._modelWriteBps = value.modelWriteBps;
      this._modelWriteRandIops = value.modelWriteRandIops;
      this._modelWriteSeqIops = value.modelWriteSeqIops;
      this._readBps = value.readBps;
      this._readIops = value.readIops;
      this._readLatency = value.readLatency;
      this._readLatencyPercent = value.readLatencyPercent;
      this._writeBps = value.writeBps;
      this._writeIops = value.writeIops;
      this._writeLatency = value.writeLatency;
      this._writeLatencyPercent = value.writeLatencyPercent;
    }
  }

  // enable_user_model - computed: false, optional: true, required: false
  private _enableUserModel?: boolean | cdktf.IResolvable; 
  public get enableUserModel() {
    return this.getBooleanAttribute('enable_user_model');
  }
  public set enableUserModel(value: boolean | cdktf.IResolvable) {
    this._enableUserModel = value;
  }
  public resetEnableUserModel() {
    this._enableUserModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableUserModelInput() {
    return this._enableUserModel;
  }

  // io_weight_percent - computed: false, optional: true, required: false
  private _ioWeightPercent?: number; 
  public get ioWeightPercent() {
    return this.getNumberAttribute('io_weight_percent');
  }
  public set ioWeightPercent(value: number) {
    this._ioWeightPercent = value;
  }
  public resetIoWeightPercent() {
    this._ioWeightPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ioWeightPercentInput() {
    return this._ioWeightPercent;
  }

  // model_read_bps - computed: false, optional: true, required: false
  private _modelReadBps?: number; 
  public get modelReadBps() {
    return this.getNumberAttribute('model_read_bps');
  }
  public set modelReadBps(value: number) {
    this._modelReadBps = value;
  }
  public resetModelReadBps() {
    this._modelReadBps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelReadBpsInput() {
    return this._modelReadBps;
  }

  // model_read_rand_iops - computed: false, optional: true, required: false
  private _modelReadRandIops?: number; 
  public get modelReadRandIops() {
    return this.getNumberAttribute('model_read_rand_iops');
  }
  public set modelReadRandIops(value: number) {
    this._modelReadRandIops = value;
  }
  public resetModelReadRandIops() {
    this._modelReadRandIops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelReadRandIopsInput() {
    return this._modelReadRandIops;
  }

  // model_read_seq_iops - computed: false, optional: true, required: false
  private _modelReadSeqIops?: number; 
  public get modelReadSeqIops() {
    return this.getNumberAttribute('model_read_seq_iops');
  }
  public set modelReadSeqIops(value: number) {
    this._modelReadSeqIops = value;
  }
  public resetModelReadSeqIops() {
    this._modelReadSeqIops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelReadSeqIopsInput() {
    return this._modelReadSeqIops;
  }

  // model_write_bps - computed: false, optional: true, required: false
  private _modelWriteBps?: number; 
  public get modelWriteBps() {
    return this.getNumberAttribute('model_write_bps');
  }
  public set modelWriteBps(value: number) {
    this._modelWriteBps = value;
  }
  public resetModelWriteBps() {
    this._modelWriteBps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelWriteBpsInput() {
    return this._modelWriteBps;
  }

  // model_write_rand_iops - computed: false, optional: true, required: false
  private _modelWriteRandIops?: number; 
  public get modelWriteRandIops() {
    return this.getNumberAttribute('model_write_rand_iops');
  }
  public set modelWriteRandIops(value: number) {
    this._modelWriteRandIops = value;
  }
  public resetModelWriteRandIops() {
    this._modelWriteRandIops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelWriteRandIopsInput() {
    return this._modelWriteRandIops;
  }

  // model_write_seq_iops - computed: false, optional: true, required: false
  private _modelWriteSeqIops?: number; 
  public get modelWriteSeqIops() {
    return this.getNumberAttribute('model_write_seq_iops');
  }
  public set modelWriteSeqIops(value: number) {
    this._modelWriteSeqIops = value;
  }
  public resetModelWriteSeqIops() {
    this._modelWriteSeqIops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelWriteSeqIopsInput() {
    return this._modelWriteSeqIops;
  }

  // read_bps - computed: false, optional: true, required: false
  private _readBps?: number; 
  public get readBps() {
    return this.getNumberAttribute('read_bps');
  }
  public set readBps(value: number) {
    this._readBps = value;
  }
  public resetReadBps() {
    this._readBps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readBpsInput() {
    return this._readBps;
  }

  // read_iops - computed: false, optional: true, required: false
  private _readIops?: number; 
  public get readIops() {
    return this.getNumberAttribute('read_iops');
  }
  public set readIops(value: number) {
    this._readIops = value;
  }
  public resetReadIops() {
    this._readIops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readIopsInput() {
    return this._readIops;
  }

  // read_latency - computed: false, optional: true, required: false
  private _readLatency?: number; 
  public get readLatency() {
    return this.getNumberAttribute('read_latency');
  }
  public set readLatency(value: number) {
    this._readLatency = value;
  }
  public resetReadLatency() {
    this._readLatency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readLatencyInput() {
    return this._readLatency;
  }

  // read_latency_percent - computed: false, optional: true, required: false
  private _readLatencyPercent?: number; 
  public get readLatencyPercent() {
    return this.getNumberAttribute('read_latency_percent');
  }
  public set readLatencyPercent(value: number) {
    this._readLatencyPercent = value;
  }
  public resetReadLatencyPercent() {
    this._readLatencyPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readLatencyPercentInput() {
    return this._readLatencyPercent;
  }

  // write_bps - computed: false, optional: true, required: false
  private _writeBps?: number; 
  public get writeBps() {
    return this.getNumberAttribute('write_bps');
  }
  public set writeBps(value: number) {
    this._writeBps = value;
  }
  public resetWriteBps() {
    this._writeBps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeBpsInput() {
    return this._writeBps;
  }

  // write_iops - computed: false, optional: true, required: false
  private _writeIops?: number; 
  public get writeIops() {
    return this.getNumberAttribute('write_iops');
  }
  public set writeIops(value: number) {
    this._writeIops = value;
  }
  public resetWriteIops() {
    this._writeIops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeIopsInput() {
    return this._writeIops;
  }

  // write_latency - computed: false, optional: true, required: false
  private _writeLatency?: number; 
  public get writeLatency() {
    return this.getNumberAttribute('write_latency');
  }
  public set writeLatency(value: number) {
    this._writeLatency = value;
  }
  public resetWriteLatency() {
    this._writeLatency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeLatencyInput() {
    return this._writeLatency;
  }

  // write_latency_percent - computed: false, optional: true, required: false
  private _writeLatencyPercent?: number; 
  public get writeLatencyPercent() {
    return this.getNumberAttribute('write_latency_percent');
  }
  public set writeLatencyPercent(value: number) {
    this._writeLatencyPercent = value;
  }
  public resetWriteLatencyPercent() {
    this._writeLatencyPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeLatencyPercentInput() {
    return this._writeLatencyPercent;
  }
}
export interface DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRootBlkioQosBlocks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#io_cfg DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#io_cfg}
  */
  readonly ioCfg?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRootBlkioQosBlocksIoCfg;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#name DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#type DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRootBlkioQosBlocksToTerraform(struct?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRootBlkioQosBlocks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    io_cfg: dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRootBlkioQosBlocksIoCfgToTerraform(struct!.ioCfg),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRootBlkioQosBlocksToHclTerraform(struct?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRootBlkioQosBlocks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    io_cfg: {
      value: dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRootBlkioQosBlocksIoCfgToHclTerraform(struct!.ioCfg),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRootBlkioQosBlocksIoCfg",
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

export class DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRootBlkioQosBlocksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRootBlkioQosBlocks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ioCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ioCfg = this._ioCfg?.internalValue;
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

  public set internalValue(value: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRootBlkioQosBlocks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ioCfg.internalValue = undefined;
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
      this._ioCfg.internalValue = value.ioCfg;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // io_cfg - computed: false, optional: true, required: false
  private _ioCfg = new DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRootBlkioQosBlocksIoCfgOutputReference(this, "io_cfg");
  public get ioCfg() {
    return this._ioCfg;
  }
  public putIoCfg(value: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRootBlkioQosBlocksIoCfg) {
    this._ioCfg.internalValue = value;
  }
  public resetIoCfg() {
    this._ioCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ioCfgInput() {
    return this._ioCfg.internalValue;
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
}

export class DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRootBlkioQosBlocksList extends cdktf.ComplexList {
  public internalValue? : DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRootBlkioQosBlocks[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRootBlkioQosBlocksOutputReference {
    return new DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRootBlkioQosBlocksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRootBlkioQos {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#blocks DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#blocks}
  */
  readonly blocks?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRootBlkioQosBlocks[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#enable DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
}

export function dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRootBlkioQosToTerraform(struct?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRootBlkioQos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blocks: cdktf.listMapper(dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRootBlkioQosBlocksToTerraform, false)(struct!.blocks),
    enable: cdktf.booleanToTerraform(struct!.enable),
  }
}


export function dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRootBlkioQosToHclTerraform(struct?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRootBlkioQos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blocks: {
      value: cdktf.listMapperHcl(dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRootBlkioQosBlocksToHclTerraform, false)(struct!.blocks),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRootBlkioQosBlocksList",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRootBlkioQosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRootBlkioQos | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blocks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blocks = this._blocks?.internalValue;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRootBlkioQos | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._blocks.internalValue = undefined;
      this._enable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._blocks.internalValue = value.blocks;
      this._enable = value.enable;
    }
  }

  // blocks - computed: false, optional: true, required: false
  private _blocks = new DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRootBlkioQosBlocksList(this, "blocks", false);
  public get blocks() {
    return this._blocks;
  }
  public putBlocks(value: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRootBlkioQosBlocks[] | cdktf.IResolvable) {
    this._blocks.internalValue = value;
  }
  public resetBlocks() {
    this._blocks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blocksInput() {
    return this._blocks.internalValue;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }
}
export interface DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRootCpuQos {
  /**
  * whether pods of the QoS class can expel the cgroup idle pods at the SMT-level. default = false If set to true, pods of this QoS will use a dedicated core sched group for noise clean with the SchedIdle pods. NOTE: It takes effect if cpuPolicy = 'coreSched'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#core_expeller DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#core_expeller}
  */
  readonly coreExpeller?: boolean | cdktf.IResolvable;
  /**
  * Enable indicates whether the cpu qos is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#enable DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * group identity value for pods, default = 0 NOTE: It takes effect if cpuPolicy = 'groupIdentity'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#group_identity DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#group_identity}
  */
  readonly groupIdentity?: number;
  /**
  * cpu.idle value for pods, default = 0. '1' means using SCHED_IDLE. CGroup Idle (introduced since mainline Linux 5.15): https://lore.kernel.org/lkml/162971078674.25758.15464079371945307825.tip-bot2@tip-bot2/#r NOTE: It takes effect if cpuPolicy = 'coreSched'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#sched_idle DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#sched_idle}
  */
  readonly schedIdle?: number;
}

export function dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRootCpuQosToTerraform(struct?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRootCpuQos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    core_expeller: cdktf.booleanToTerraform(struct!.coreExpeller),
    enable: cdktf.booleanToTerraform(struct!.enable),
    group_identity: cdktf.numberToTerraform(struct!.groupIdentity),
    sched_idle: cdktf.numberToTerraform(struct!.schedIdle),
  }
}


export function dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRootCpuQosToHclTerraform(struct?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRootCpuQos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    core_expeller: {
      value: cdktf.booleanToHclTerraform(struct!.coreExpeller),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    group_identity: {
      value: cdktf.numberToHclTerraform(struct!.groupIdentity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sched_idle: {
      value: cdktf.numberToHclTerraform(struct!.schedIdle),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRootCpuQosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRootCpuQos | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._coreExpeller !== undefined) {
      hasAnyValues = true;
      internalValueResult.coreExpeller = this._coreExpeller;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._groupIdentity !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupIdentity = this._groupIdentity;
    }
    if (this._schedIdle !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedIdle = this._schedIdle;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRootCpuQos | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._coreExpeller = undefined;
      this._enable = undefined;
      this._groupIdentity = undefined;
      this._schedIdle = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._coreExpeller = value.coreExpeller;
      this._enable = value.enable;
      this._groupIdentity = value.groupIdentity;
      this._schedIdle = value.schedIdle;
    }
  }

  // core_expeller - computed: false, optional: true, required: false
  private _coreExpeller?: boolean | cdktf.IResolvable; 
  public get coreExpeller() {
    return this.getBooleanAttribute('core_expeller');
  }
  public set coreExpeller(value: boolean | cdktf.IResolvable) {
    this._coreExpeller = value;
  }
  public resetCoreExpeller() {
    this._coreExpeller = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coreExpellerInput() {
    return this._coreExpeller;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // group_identity - computed: false, optional: true, required: false
  private _groupIdentity?: number; 
  public get groupIdentity() {
    return this.getNumberAttribute('group_identity');
  }
  public set groupIdentity(value: number) {
    this._groupIdentity = value;
  }
  public resetGroupIdentity() {
    this._groupIdentity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdentityInput() {
    return this._groupIdentity;
  }

  // sched_idle - computed: false, optional: true, required: false
  private _schedIdle?: number; 
  public get schedIdle() {
    return this.getNumberAttribute('sched_idle');
  }
  public set schedIdle(value: number) {
    this._schedIdle = value;
  }
  public resetSchedIdle() {
    this._schedIdle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedIdleInput() {
    return this._schedIdle;
  }
}
export interface DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRootMemoryQos {
  /**
  * Enable indicates whether the memory qos is enabled (default: false). This field is used for node-level control, while pod-level configuration is done with MemoryQOS and 'Policy' instead of an 'Enable' option. Please view the differences between MemoryQOSCfg and PodMemoryQOSConfig structs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#enable DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * LowLimitPercent specifies the lowLimitFactor percentage to calculate 'memory.low', which TRIES BEST protecting memory from global reclamation when memory usage does not exceed the low limit unless no unprotected memcg can be reclaimed. NOTE: 'memory.low' should be larger than 'memory.min'. If spec.requests.memory == spec.limits.memory, pod 'memory.low' and 'memory.high' become invalid, while 'memory.wmark_ratio' is still in effect. Close: 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#low_limit_percent DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#low_limit_percent}
  */
  readonly lowLimitPercent?: number;
  /**
  * memcg qos If enabled, memcg qos will be set by the agent, where some fields are implicitly calculated from pod spec. 1. 'memory.min' := spec.requests.memory * minLimitFactor / 100 (use 0 if requests.memory is not set) 2. 'memory.low' := spec.requests.memory * lowLimitFactor / 100 (use 0 if requests.memory is not set) 3. 'memory.limit_in_bytes' := spec.limits.memory (set $node.allocatable.memory if limits.memory is not set) 4. 'memory.high' := floor[(spec.requests.memory + throttlingFactor / 100 * (memory.limit_in_bytes or node allocatable memory - spec.requests.memory))/pageSize] * pageSize MinLimitPercent specifies the minLimitFactor percentage to calculate 'memory.min', which protects memory from global reclamation when memory usage does not exceed the min limit. Close: 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#min_limit_percent DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#min_limit_percent}
  */
  readonly minLimitPercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#oom_kill_group DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#oom_kill_group}
  */
  readonly oomKillGroup?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#priority DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#priority}
  */
  readonly priority?: number;
  /**
  * TODO: enhance the usages of oom priority and oom kill group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#priority_enable DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#priority_enable}
  */
  readonly priorityEnable?: number;
  /**
  * ThrottlingPercent specifies the throttlingFactor percentage to calculate 'memory.high' with pod memory.limits or node allocatable memory, which triggers memcg direct reclamation when memory usage exceeds. Lower the factor brings more heavier reclaim pressure. Close: 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#throttling_percent DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#throttling_percent}
  */
  readonly throttlingPercent?: number;
  /**
  * wmark_min_adj (Anolis OS required) WmarkMinAdj specifies 'memory.wmark_min_adj' which adjusts per-memcg threshold for global memory reclamation. Lower the factor brings later reclamation. The adjustment uses different formula for different value range. [-25, 0)：global_wmark_min' = global_wmark_min + (global_wmark_min - 0) * wmarkMinAdj (0, 50]：global_wmark_min' = global_wmark_min + (global_wmark_low - global_wmark_min) * wmarkMinAdj Close: [LSR:0, LS:0, BE:0]. Recommended: [LSR:-25, LS:-25, BE:50].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#wmark_min_adj DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#wmark_min_adj}
  */
  readonly wmarkMinAdj?: number;
  /**
  * wmark_ratio (Anolis OS required) Async memory reclamation is triggered when cgroup memory usage exceeds 'memory.wmark_high' and the reclamation stops when usage is below 'memory.wmark_low'. Basically, 'memory.wmark_high' := min(memory.high, memory.limit_in_bytes) * memory.memory.wmark_ratio 'memory.wmark_low' := min(memory.high, memory.limit_in_bytes) * (memory.wmark_ratio - memory.wmark_scale_factor) WmarkRatio specifies 'memory.wmark_ratio' that help calculate 'memory.wmark_high', which triggers async memory reclamation when memory usage exceeds. Close: 0. Recommended: 95.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#wmark_ratio DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#wmark_ratio}
  */
  readonly wmarkRatio?: number;
  /**
  * WmarkScalePermill specifies 'memory.wmark_scale_factor' that helps calculate 'memory.wmark_low', which stops async memory reclamation when memory usage belows. Close: 50. Recommended: 20.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#wmark_scale_permill DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#wmark_scale_permill}
  */
  readonly wmarkScalePermill?: number;
}

export function dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRootMemoryQosToTerraform(struct?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRootMemoryQos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    low_limit_percent: cdktf.numberToTerraform(struct!.lowLimitPercent),
    min_limit_percent: cdktf.numberToTerraform(struct!.minLimitPercent),
    oom_kill_group: cdktf.numberToTerraform(struct!.oomKillGroup),
    priority: cdktf.numberToTerraform(struct!.priority),
    priority_enable: cdktf.numberToTerraform(struct!.priorityEnable),
    throttling_percent: cdktf.numberToTerraform(struct!.throttlingPercent),
    wmark_min_adj: cdktf.numberToTerraform(struct!.wmarkMinAdj),
    wmark_ratio: cdktf.numberToTerraform(struct!.wmarkRatio),
    wmark_scale_permill: cdktf.numberToTerraform(struct!.wmarkScalePermill),
  }
}


export function dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRootMemoryQosToHclTerraform(struct?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRootMemoryQos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    low_limit_percent: {
      value: cdktf.numberToHclTerraform(struct!.lowLimitPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_limit_percent: {
      value: cdktf.numberToHclTerraform(struct!.minLimitPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    oom_kill_group: {
      value: cdktf.numberToHclTerraform(struct!.oomKillGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority_enable: {
      value: cdktf.numberToHclTerraform(struct!.priorityEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    throttling_percent: {
      value: cdktf.numberToHclTerraform(struct!.throttlingPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    wmark_min_adj: {
      value: cdktf.numberToHclTerraform(struct!.wmarkMinAdj),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    wmark_ratio: {
      value: cdktf.numberToHclTerraform(struct!.wmarkRatio),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    wmark_scale_permill: {
      value: cdktf.numberToHclTerraform(struct!.wmarkScalePermill),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRootMemoryQosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRootMemoryQos | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._lowLimitPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.lowLimitPercent = this._lowLimitPercent;
    }
    if (this._minLimitPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.minLimitPercent = this._minLimitPercent;
    }
    if (this._oomKillGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.oomKillGroup = this._oomKillGroup;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._priorityEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityEnable = this._priorityEnable;
    }
    if (this._throttlingPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.throttlingPercent = this._throttlingPercent;
    }
    if (this._wmarkMinAdj !== undefined) {
      hasAnyValues = true;
      internalValueResult.wmarkMinAdj = this._wmarkMinAdj;
    }
    if (this._wmarkRatio !== undefined) {
      hasAnyValues = true;
      internalValueResult.wmarkRatio = this._wmarkRatio;
    }
    if (this._wmarkScalePermill !== undefined) {
      hasAnyValues = true;
      internalValueResult.wmarkScalePermill = this._wmarkScalePermill;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRootMemoryQos | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._lowLimitPercent = undefined;
      this._minLimitPercent = undefined;
      this._oomKillGroup = undefined;
      this._priority = undefined;
      this._priorityEnable = undefined;
      this._throttlingPercent = undefined;
      this._wmarkMinAdj = undefined;
      this._wmarkRatio = undefined;
      this._wmarkScalePermill = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._lowLimitPercent = value.lowLimitPercent;
      this._minLimitPercent = value.minLimitPercent;
      this._oomKillGroup = value.oomKillGroup;
      this._priority = value.priority;
      this._priorityEnable = value.priorityEnable;
      this._throttlingPercent = value.throttlingPercent;
      this._wmarkMinAdj = value.wmarkMinAdj;
      this._wmarkRatio = value.wmarkRatio;
      this._wmarkScalePermill = value.wmarkScalePermill;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // low_limit_percent - computed: false, optional: true, required: false
  private _lowLimitPercent?: number; 
  public get lowLimitPercent() {
    return this.getNumberAttribute('low_limit_percent');
  }
  public set lowLimitPercent(value: number) {
    this._lowLimitPercent = value;
  }
  public resetLowLimitPercent() {
    this._lowLimitPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowLimitPercentInput() {
    return this._lowLimitPercent;
  }

  // min_limit_percent - computed: false, optional: true, required: false
  private _minLimitPercent?: number; 
  public get minLimitPercent() {
    return this.getNumberAttribute('min_limit_percent');
  }
  public set minLimitPercent(value: number) {
    this._minLimitPercent = value;
  }
  public resetMinLimitPercent() {
    this._minLimitPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minLimitPercentInput() {
    return this._minLimitPercent;
  }

  // oom_kill_group - computed: false, optional: true, required: false
  private _oomKillGroup?: number; 
  public get oomKillGroup() {
    return this.getNumberAttribute('oom_kill_group');
  }
  public set oomKillGroup(value: number) {
    this._oomKillGroup = value;
  }
  public resetOomKillGroup() {
    this._oomKillGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oomKillGroupInput() {
    return this._oomKillGroup;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // priority_enable - computed: false, optional: true, required: false
  private _priorityEnable?: number; 
  public get priorityEnable() {
    return this.getNumberAttribute('priority_enable');
  }
  public set priorityEnable(value: number) {
    this._priorityEnable = value;
  }
  public resetPriorityEnable() {
    this._priorityEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityEnableInput() {
    return this._priorityEnable;
  }

  // throttling_percent - computed: false, optional: true, required: false
  private _throttlingPercent?: number; 
  public get throttlingPercent() {
    return this.getNumberAttribute('throttling_percent');
  }
  public set throttlingPercent(value: number) {
    this._throttlingPercent = value;
  }
  public resetThrottlingPercent() {
    this._throttlingPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throttlingPercentInput() {
    return this._throttlingPercent;
  }

  // wmark_min_adj - computed: false, optional: true, required: false
  private _wmarkMinAdj?: number; 
  public get wmarkMinAdj() {
    return this.getNumberAttribute('wmark_min_adj');
  }
  public set wmarkMinAdj(value: number) {
    this._wmarkMinAdj = value;
  }
  public resetWmarkMinAdj() {
    this._wmarkMinAdj = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wmarkMinAdjInput() {
    return this._wmarkMinAdj;
  }

  // wmark_ratio - computed: false, optional: true, required: false
  private _wmarkRatio?: number; 
  public get wmarkRatio() {
    return this.getNumberAttribute('wmark_ratio');
  }
  public set wmarkRatio(value: number) {
    this._wmarkRatio = value;
  }
  public resetWmarkRatio() {
    this._wmarkRatio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wmarkRatioInput() {
    return this._wmarkRatio;
  }

  // wmark_scale_permill - computed: false, optional: true, required: false
  private _wmarkScalePermill?: number; 
  public get wmarkScalePermill() {
    return this.getNumberAttribute('wmark_scale_permill');
  }
  public set wmarkScalePermill(value: number) {
    this._wmarkScalePermill = value;
  }
  public resetWmarkScalePermill() {
    this._wmarkScalePermill = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wmarkScalePermillInput() {
    return this._wmarkScalePermill;
  }
}
export interface DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRootNetworkQos {
  /**
  * EgressLimit describes the maximum network bandwidth can be used in the egress direction, unit: bps(bytes per second), two expressions are supported，int and string, int: percentage based on total bandwidth，valid in 0-100 string: a specific network bandwidth value, eg: 50M.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#egress_limit DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#egress_limit}
  */
  readonly egressLimit?: string;
  /**
  * EgressRequest describes the minimum network bandwidth guaranteed in the egress direction. unit: bps(bytes per second), two expressions are supported，int and string, int: percentage based on total bandwidth，valid in 0-100 string: a specific network bandwidth value, eg: 50M.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#egress_request DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#egress_request}
  */
  readonly egressRequest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#enable DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * IngressLimit describes the maximum network bandwidth can be used in the ingress direction, unit: bps(bytes per second), two expressions are supported，int and string, int: percentage based on total bandwidth，valid in 0-100 string: a specific network bandwidth value, eg: 50M.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#ingress_limit DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#ingress_limit}
  */
  readonly ingressLimit?: string;
  /**
  * IngressRequest describes the minimum network bandwidth guaranteed in the ingress direction. unit: bps(bytes per second), two expressions are supported，int and string, int: percentage based on total bandwidth，valid in 0-100 string: a specific network bandwidth value, eg: 50M.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#ingress_request DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#ingress_request}
  */
  readonly ingressRequest?: string;
}

export function dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRootNetworkQosToTerraform(struct?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRootNetworkQos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    egress_limit: cdktf.stringToTerraform(struct!.egressLimit),
    egress_request: cdktf.stringToTerraform(struct!.egressRequest),
    enable: cdktf.booleanToTerraform(struct!.enable),
    ingress_limit: cdktf.stringToTerraform(struct!.ingressLimit),
    ingress_request: cdktf.stringToTerraform(struct!.ingressRequest),
  }
}


export function dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRootNetworkQosToHclTerraform(struct?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRootNetworkQos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    egress_limit: {
      value: cdktf.stringToHclTerraform(struct!.egressLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    egress_request: {
      value: cdktf.stringToHclTerraform(struct!.egressRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ingress_limit: {
      value: cdktf.stringToHclTerraform(struct!.ingressLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ingress_request: {
      value: cdktf.stringToHclTerraform(struct!.ingressRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRootNetworkQosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRootNetworkQos | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._egressLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.egressLimit = this._egressLimit;
    }
    if (this._egressRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.egressRequest = this._egressRequest;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._ingressLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressLimit = this._ingressLimit;
    }
    if (this._ingressRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressRequest = this._ingressRequest;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRootNetworkQos | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._egressLimit = undefined;
      this._egressRequest = undefined;
      this._enable = undefined;
      this._ingressLimit = undefined;
      this._ingressRequest = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._egressLimit = value.egressLimit;
      this._egressRequest = value.egressRequest;
      this._enable = value.enable;
      this._ingressLimit = value.ingressLimit;
      this._ingressRequest = value.ingressRequest;
    }
  }

  // egress_limit - computed: false, optional: true, required: false
  private _egressLimit?: string; 
  public get egressLimit() {
    return this.getStringAttribute('egress_limit');
  }
  public set egressLimit(value: string) {
    this._egressLimit = value;
  }
  public resetEgressLimit() {
    this._egressLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressLimitInput() {
    return this._egressLimit;
  }

  // egress_request - computed: false, optional: true, required: false
  private _egressRequest?: string; 
  public get egressRequest() {
    return this.getStringAttribute('egress_request');
  }
  public set egressRequest(value: string) {
    this._egressRequest = value;
  }
  public resetEgressRequest() {
    this._egressRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressRequestInput() {
    return this._egressRequest;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // ingress_limit - computed: false, optional: true, required: false
  private _ingressLimit?: string; 
  public get ingressLimit() {
    return this.getStringAttribute('ingress_limit');
  }
  public set ingressLimit(value: string) {
    this._ingressLimit = value;
  }
  public resetIngressLimit() {
    this._ingressLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressLimitInput() {
    return this._ingressLimit;
  }

  // ingress_request - computed: false, optional: true, required: false
  private _ingressRequest?: string; 
  public get ingressRequest() {
    return this.getStringAttribute('ingress_request');
  }
  public set ingressRequest(value: string) {
    this._ingressRequest = value;
  }
  public resetIngressRequest() {
    this._ingressRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressRequestInput() {
    return this._ingressRequest;
  }
}
export interface DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRootResctrlQos {
  /**
  * LLC available range end for pods by percentage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#cat_range_end_percent DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#cat_range_end_percent}
  */
  readonly catRangeEndPercent?: number;
  /**
  * LLC available range start for pods by percentage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#cat_range_start_percent DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#cat_range_start_percent}
  */
  readonly catRangeStartPercent?: number;
  /**
  * Enable indicates whether the resctrl qos is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#enable DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * MBA percent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#mba_percent DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#mba_percent}
  */
  readonly mbaPercent?: number;
}

export function dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRootResctrlQosToTerraform(struct?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRootResctrlQos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cat_range_end_percent: cdktf.numberToTerraform(struct!.catRangeEndPercent),
    cat_range_start_percent: cdktf.numberToTerraform(struct!.catRangeStartPercent),
    enable: cdktf.booleanToTerraform(struct!.enable),
    mba_percent: cdktf.numberToTerraform(struct!.mbaPercent),
  }
}


export function dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRootResctrlQosToHclTerraform(struct?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRootResctrlQos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cat_range_end_percent: {
      value: cdktf.numberToHclTerraform(struct!.catRangeEndPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cat_range_start_percent: {
      value: cdktf.numberToHclTerraform(struct!.catRangeStartPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mba_percent: {
      value: cdktf.numberToHclTerraform(struct!.mbaPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRootResctrlQosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRootResctrlQos | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._catRangeEndPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.catRangeEndPercent = this._catRangeEndPercent;
    }
    if (this._catRangeStartPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.catRangeStartPercent = this._catRangeStartPercent;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._mbaPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.mbaPercent = this._mbaPercent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRootResctrlQos | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._catRangeEndPercent = undefined;
      this._catRangeStartPercent = undefined;
      this._enable = undefined;
      this._mbaPercent = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._catRangeEndPercent = value.catRangeEndPercent;
      this._catRangeStartPercent = value.catRangeStartPercent;
      this._enable = value.enable;
      this._mbaPercent = value.mbaPercent;
    }
  }

  // cat_range_end_percent - computed: false, optional: true, required: false
  private _catRangeEndPercent?: number; 
  public get catRangeEndPercent() {
    return this.getNumberAttribute('cat_range_end_percent');
  }
  public set catRangeEndPercent(value: number) {
    this._catRangeEndPercent = value;
  }
  public resetCatRangeEndPercent() {
    this._catRangeEndPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catRangeEndPercentInput() {
    return this._catRangeEndPercent;
  }

  // cat_range_start_percent - computed: false, optional: true, required: false
  private _catRangeStartPercent?: number; 
  public get catRangeStartPercent() {
    return this.getNumberAttribute('cat_range_start_percent');
  }
  public set catRangeStartPercent(value: number) {
    this._catRangeStartPercent = value;
  }
  public resetCatRangeStartPercent() {
    this._catRangeStartPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catRangeStartPercentInput() {
    return this._catRangeStartPercent;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // mba_percent - computed: false, optional: true, required: false
  private _mbaPercent?: number; 
  public get mbaPercent() {
    return this.getNumberAttribute('mba_percent');
  }
  public set mbaPercent(value: number) {
    this._mbaPercent = value;
  }
  public resetMbaPercent() {
    this._mbaPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mbaPercentInput() {
    return this._mbaPercent;
  }
}
export interface DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRoot {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#blkio_qos DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#blkio_qos}
  */
  readonly blkioQos?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRootBlkioQos;
  /**
  * CPUQOSCfg stores node-level config of cpu qos
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#cpu_qos DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#cpu_qos}
  */
  readonly cpuQos?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRootCpuQos;
  /**
  * MemoryQOSCfg stores node-level config of memory qos
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#memory_qos DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#memory_qos}
  */
  readonly memoryQos?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRootMemoryQos;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#network_qos DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#network_qos}
  */
  readonly networkQos?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRootNetworkQos;
  /**
  * ResctrlQOSCfg stores node-level config of resctrl qos
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#resctrl_qos DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#resctrl_qos}
  */
  readonly resctrlQos?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRootResctrlQos;
}

export function dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRootToTerraform(struct?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRoot | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blkio_qos: dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRootBlkioQosToTerraform(struct!.blkioQos),
    cpu_qos: dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRootCpuQosToTerraform(struct!.cpuQos),
    memory_qos: dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRootMemoryQosToTerraform(struct!.memoryQos),
    network_qos: dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRootNetworkQosToTerraform(struct!.networkQos),
    resctrl_qos: dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRootResctrlQosToTerraform(struct!.resctrlQos),
  }
}


export function dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRootToHclTerraform(struct?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRoot | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blkio_qos: {
      value: dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRootBlkioQosToHclTerraform(struct!.blkioQos),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRootBlkioQos",
    },
    cpu_qos: {
      value: dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRootCpuQosToHclTerraform(struct!.cpuQos),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRootCpuQos",
    },
    memory_qos: {
      value: dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRootMemoryQosToHclTerraform(struct!.memoryQos),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRootMemoryQos",
    },
    network_qos: {
      value: dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRootNetworkQosToHclTerraform(struct!.networkQos),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRootNetworkQos",
    },
    resctrl_qos: {
      value: dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRootResctrlQosToHclTerraform(struct!.resctrlQos),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRootResctrlQos",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRootOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRoot | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blkioQos?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blkioQos = this._blkioQos?.internalValue;
    }
    if (this._cpuQos?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuQos = this._cpuQos?.internalValue;
    }
    if (this._memoryQos?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryQos = this._memoryQos?.internalValue;
    }
    if (this._networkQos?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkQos = this._networkQos?.internalValue;
    }
    if (this._resctrlQos?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resctrlQos = this._resctrlQos?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRoot | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._blkioQos.internalValue = undefined;
      this._cpuQos.internalValue = undefined;
      this._memoryQos.internalValue = undefined;
      this._networkQos.internalValue = undefined;
      this._resctrlQos.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._blkioQos.internalValue = value.blkioQos;
      this._cpuQos.internalValue = value.cpuQos;
      this._memoryQos.internalValue = value.memoryQos;
      this._networkQos.internalValue = value.networkQos;
      this._resctrlQos.internalValue = value.resctrlQos;
    }
  }

  // blkio_qos - computed: false, optional: true, required: false
  private _blkioQos = new DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRootBlkioQosOutputReference(this, "blkio_qos");
  public get blkioQos() {
    return this._blkioQos;
  }
  public putBlkioQos(value: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRootBlkioQos) {
    this._blkioQos.internalValue = value;
  }
  public resetBlkioQos() {
    this._blkioQos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blkioQosInput() {
    return this._blkioQos.internalValue;
  }

  // cpu_qos - computed: false, optional: true, required: false
  private _cpuQos = new DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRootCpuQosOutputReference(this, "cpu_qos");
  public get cpuQos() {
    return this._cpuQos;
  }
  public putCpuQos(value: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRootCpuQos) {
    this._cpuQos.internalValue = value;
  }
  public resetCpuQos() {
    this._cpuQos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuQosInput() {
    return this._cpuQos.internalValue;
  }

  // memory_qos - computed: false, optional: true, required: false
  private _memoryQos = new DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRootMemoryQosOutputReference(this, "memory_qos");
  public get memoryQos() {
    return this._memoryQos;
  }
  public putMemoryQos(value: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRootMemoryQos) {
    this._memoryQos.internalValue = value;
  }
  public resetMemoryQos() {
    this._memoryQos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryQosInput() {
    return this._memoryQos.internalValue;
  }

  // network_qos - computed: false, optional: true, required: false
  private _networkQos = new DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRootNetworkQosOutputReference(this, "network_qos");
  public get networkQos() {
    return this._networkQos;
  }
  public putNetworkQos(value: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRootNetworkQos) {
    this._networkQos.internalValue = value;
  }
  public resetNetworkQos() {
    this._networkQos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkQosInput() {
    return this._networkQos.internalValue;
  }

  // resctrl_qos - computed: false, optional: true, required: false
  private _resctrlQos = new DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRootResctrlQosOutputReference(this, "resctrl_qos");
  public get resctrlQos() {
    return this._resctrlQos;
  }
  public putResctrlQos(value: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRootResctrlQos) {
    this._resctrlQos.internalValue = value;
  }
  public resetResctrlQos() {
    this._resctrlQos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resctrlQosInput() {
    return this._resctrlQos.internalValue;
  }
}
export interface DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClassBlkioQosBlocksIoCfg {
  /**
  * configure the cost model of blkio-cost manually whether the user model is enabled. Default value: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#enable_user_model DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#enable_user_model}
  */
  readonly enableUserModel?: boolean | cdktf.IResolvable;
  /**
  * This field is used to set the weight of a sub-group. Default value: 100. Valid values: 1 to 100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#io_weight_percent DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#io_weight_percent}
  */
  readonly ioWeightPercent?: number;
  /**
  * the read BPS of user model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#model_read_bps DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#model_read_bps}
  */
  readonly modelReadBps?: number;
  /**
  * the random read iops of user model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#model_read_rand_iops DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#model_read_rand_iops}
  */
  readonly modelReadRandIops?: number;
  /**
  * the sequential read iops of user model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#model_read_seq_iops DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#model_read_seq_iops}
  */
  readonly modelReadSeqIops?: number;
  /**
  * the write BPS of user model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#model_write_bps DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#model_write_bps}
  */
  readonly modelWriteBps?: number;
  /**
  * the random write iops of user model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#model_write_rand_iops DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#model_write_rand_iops}
  */
  readonly modelWriteRandIops?: number;
  /**
  * the sequential write iops of user model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#model_write_seq_iops DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#model_write_seq_iops}
  */
  readonly modelWriteSeqIops?: number;
  /**
  * Throttling of throughput The value is set to 0, which indicates that the feature is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#read_bps DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#read_bps}
  */
  readonly readBps?: number;
  /**
  * Throttling of IOPS The value is set to 0, which indicates that the feature is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#read_iops DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#read_iops}
  */
  readonly readIops?: number;
  /**
  * Configure the weight-based throttling feature of blk-iocost Only used for RootClass After blk-iocost is enabled, the kernel calculates the proportion of requests that exceed the read or write latency threshold out of all requests. When the proportion is greater than the read or write latency percentile (95%), the kernel considers the disk to be saturated and reduces the rate at which requests are sent to the disk. the read latency threshold. Unit: microseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#read_latency DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#read_latency}
  */
  readonly readLatency?: number;
  /**
  * the read latency percentile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#read_latency_percent DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#read_latency_percent}
  */
  readonly readLatencyPercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#write_bps DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#write_bps}
  */
  readonly writeBps?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#write_iops DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#write_iops}
  */
  readonly writeIops?: number;
  /**
  * the write latency threshold. Unit: microseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#write_latency DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#write_latency}
  */
  readonly writeLatency?: number;
  /**
  * the write latency percentile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#write_latency_percent DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#write_latency_percent}
  */
  readonly writeLatencyPercent?: number;
}

export function dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClassBlkioQosBlocksIoCfgToTerraform(struct?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClassBlkioQosBlocksIoCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_user_model: cdktf.booleanToTerraform(struct!.enableUserModel),
    io_weight_percent: cdktf.numberToTerraform(struct!.ioWeightPercent),
    model_read_bps: cdktf.numberToTerraform(struct!.modelReadBps),
    model_read_rand_iops: cdktf.numberToTerraform(struct!.modelReadRandIops),
    model_read_seq_iops: cdktf.numberToTerraform(struct!.modelReadSeqIops),
    model_write_bps: cdktf.numberToTerraform(struct!.modelWriteBps),
    model_write_rand_iops: cdktf.numberToTerraform(struct!.modelWriteRandIops),
    model_write_seq_iops: cdktf.numberToTerraform(struct!.modelWriteSeqIops),
    read_bps: cdktf.numberToTerraform(struct!.readBps),
    read_iops: cdktf.numberToTerraform(struct!.readIops),
    read_latency: cdktf.numberToTerraform(struct!.readLatency),
    read_latency_percent: cdktf.numberToTerraform(struct!.readLatencyPercent),
    write_bps: cdktf.numberToTerraform(struct!.writeBps),
    write_iops: cdktf.numberToTerraform(struct!.writeIops),
    write_latency: cdktf.numberToTerraform(struct!.writeLatency),
    write_latency_percent: cdktf.numberToTerraform(struct!.writeLatencyPercent),
  }
}


export function dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClassBlkioQosBlocksIoCfgToHclTerraform(struct?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClassBlkioQosBlocksIoCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_user_model: {
      value: cdktf.booleanToHclTerraform(struct!.enableUserModel),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    io_weight_percent: {
      value: cdktf.numberToHclTerraform(struct!.ioWeightPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    model_read_bps: {
      value: cdktf.numberToHclTerraform(struct!.modelReadBps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    model_read_rand_iops: {
      value: cdktf.numberToHclTerraform(struct!.modelReadRandIops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    model_read_seq_iops: {
      value: cdktf.numberToHclTerraform(struct!.modelReadSeqIops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    model_write_bps: {
      value: cdktf.numberToHclTerraform(struct!.modelWriteBps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    model_write_rand_iops: {
      value: cdktf.numberToHclTerraform(struct!.modelWriteRandIops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    model_write_seq_iops: {
      value: cdktf.numberToHclTerraform(struct!.modelWriteSeqIops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    read_bps: {
      value: cdktf.numberToHclTerraform(struct!.readBps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    read_iops: {
      value: cdktf.numberToHclTerraform(struct!.readIops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    read_latency: {
      value: cdktf.numberToHclTerraform(struct!.readLatency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    read_latency_percent: {
      value: cdktf.numberToHclTerraform(struct!.readLatencyPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    write_bps: {
      value: cdktf.numberToHclTerraform(struct!.writeBps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    write_iops: {
      value: cdktf.numberToHclTerraform(struct!.writeIops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    write_latency: {
      value: cdktf.numberToHclTerraform(struct!.writeLatency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    write_latency_percent: {
      value: cdktf.numberToHclTerraform(struct!.writeLatencyPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClassBlkioQosBlocksIoCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClassBlkioQosBlocksIoCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableUserModel !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableUserModel = this._enableUserModel;
    }
    if (this._ioWeightPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.ioWeightPercent = this._ioWeightPercent;
    }
    if (this._modelReadBps !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelReadBps = this._modelReadBps;
    }
    if (this._modelReadRandIops !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelReadRandIops = this._modelReadRandIops;
    }
    if (this._modelReadSeqIops !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelReadSeqIops = this._modelReadSeqIops;
    }
    if (this._modelWriteBps !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelWriteBps = this._modelWriteBps;
    }
    if (this._modelWriteRandIops !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelWriteRandIops = this._modelWriteRandIops;
    }
    if (this._modelWriteSeqIops !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelWriteSeqIops = this._modelWriteSeqIops;
    }
    if (this._readBps !== undefined) {
      hasAnyValues = true;
      internalValueResult.readBps = this._readBps;
    }
    if (this._readIops !== undefined) {
      hasAnyValues = true;
      internalValueResult.readIops = this._readIops;
    }
    if (this._readLatency !== undefined) {
      hasAnyValues = true;
      internalValueResult.readLatency = this._readLatency;
    }
    if (this._readLatencyPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.readLatencyPercent = this._readLatencyPercent;
    }
    if (this._writeBps !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeBps = this._writeBps;
    }
    if (this._writeIops !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeIops = this._writeIops;
    }
    if (this._writeLatency !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeLatency = this._writeLatency;
    }
    if (this._writeLatencyPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeLatencyPercent = this._writeLatencyPercent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClassBlkioQosBlocksIoCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableUserModel = undefined;
      this._ioWeightPercent = undefined;
      this._modelReadBps = undefined;
      this._modelReadRandIops = undefined;
      this._modelReadSeqIops = undefined;
      this._modelWriteBps = undefined;
      this._modelWriteRandIops = undefined;
      this._modelWriteSeqIops = undefined;
      this._readBps = undefined;
      this._readIops = undefined;
      this._readLatency = undefined;
      this._readLatencyPercent = undefined;
      this._writeBps = undefined;
      this._writeIops = undefined;
      this._writeLatency = undefined;
      this._writeLatencyPercent = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableUserModel = value.enableUserModel;
      this._ioWeightPercent = value.ioWeightPercent;
      this._modelReadBps = value.modelReadBps;
      this._modelReadRandIops = value.modelReadRandIops;
      this._modelReadSeqIops = value.modelReadSeqIops;
      this._modelWriteBps = value.modelWriteBps;
      this._modelWriteRandIops = value.modelWriteRandIops;
      this._modelWriteSeqIops = value.modelWriteSeqIops;
      this._readBps = value.readBps;
      this._readIops = value.readIops;
      this._readLatency = value.readLatency;
      this._readLatencyPercent = value.readLatencyPercent;
      this._writeBps = value.writeBps;
      this._writeIops = value.writeIops;
      this._writeLatency = value.writeLatency;
      this._writeLatencyPercent = value.writeLatencyPercent;
    }
  }

  // enable_user_model - computed: false, optional: true, required: false
  private _enableUserModel?: boolean | cdktf.IResolvable; 
  public get enableUserModel() {
    return this.getBooleanAttribute('enable_user_model');
  }
  public set enableUserModel(value: boolean | cdktf.IResolvable) {
    this._enableUserModel = value;
  }
  public resetEnableUserModel() {
    this._enableUserModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableUserModelInput() {
    return this._enableUserModel;
  }

  // io_weight_percent - computed: false, optional: true, required: false
  private _ioWeightPercent?: number; 
  public get ioWeightPercent() {
    return this.getNumberAttribute('io_weight_percent');
  }
  public set ioWeightPercent(value: number) {
    this._ioWeightPercent = value;
  }
  public resetIoWeightPercent() {
    this._ioWeightPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ioWeightPercentInput() {
    return this._ioWeightPercent;
  }

  // model_read_bps - computed: false, optional: true, required: false
  private _modelReadBps?: number; 
  public get modelReadBps() {
    return this.getNumberAttribute('model_read_bps');
  }
  public set modelReadBps(value: number) {
    this._modelReadBps = value;
  }
  public resetModelReadBps() {
    this._modelReadBps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelReadBpsInput() {
    return this._modelReadBps;
  }

  // model_read_rand_iops - computed: false, optional: true, required: false
  private _modelReadRandIops?: number; 
  public get modelReadRandIops() {
    return this.getNumberAttribute('model_read_rand_iops');
  }
  public set modelReadRandIops(value: number) {
    this._modelReadRandIops = value;
  }
  public resetModelReadRandIops() {
    this._modelReadRandIops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelReadRandIopsInput() {
    return this._modelReadRandIops;
  }

  // model_read_seq_iops - computed: false, optional: true, required: false
  private _modelReadSeqIops?: number; 
  public get modelReadSeqIops() {
    return this.getNumberAttribute('model_read_seq_iops');
  }
  public set modelReadSeqIops(value: number) {
    this._modelReadSeqIops = value;
  }
  public resetModelReadSeqIops() {
    this._modelReadSeqIops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelReadSeqIopsInput() {
    return this._modelReadSeqIops;
  }

  // model_write_bps - computed: false, optional: true, required: false
  private _modelWriteBps?: number; 
  public get modelWriteBps() {
    return this.getNumberAttribute('model_write_bps');
  }
  public set modelWriteBps(value: number) {
    this._modelWriteBps = value;
  }
  public resetModelWriteBps() {
    this._modelWriteBps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelWriteBpsInput() {
    return this._modelWriteBps;
  }

  // model_write_rand_iops - computed: false, optional: true, required: false
  private _modelWriteRandIops?: number; 
  public get modelWriteRandIops() {
    return this.getNumberAttribute('model_write_rand_iops');
  }
  public set modelWriteRandIops(value: number) {
    this._modelWriteRandIops = value;
  }
  public resetModelWriteRandIops() {
    this._modelWriteRandIops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelWriteRandIopsInput() {
    return this._modelWriteRandIops;
  }

  // model_write_seq_iops - computed: false, optional: true, required: false
  private _modelWriteSeqIops?: number; 
  public get modelWriteSeqIops() {
    return this.getNumberAttribute('model_write_seq_iops');
  }
  public set modelWriteSeqIops(value: number) {
    this._modelWriteSeqIops = value;
  }
  public resetModelWriteSeqIops() {
    this._modelWriteSeqIops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelWriteSeqIopsInput() {
    return this._modelWriteSeqIops;
  }

  // read_bps - computed: false, optional: true, required: false
  private _readBps?: number; 
  public get readBps() {
    return this.getNumberAttribute('read_bps');
  }
  public set readBps(value: number) {
    this._readBps = value;
  }
  public resetReadBps() {
    this._readBps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readBpsInput() {
    return this._readBps;
  }

  // read_iops - computed: false, optional: true, required: false
  private _readIops?: number; 
  public get readIops() {
    return this.getNumberAttribute('read_iops');
  }
  public set readIops(value: number) {
    this._readIops = value;
  }
  public resetReadIops() {
    this._readIops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readIopsInput() {
    return this._readIops;
  }

  // read_latency - computed: false, optional: true, required: false
  private _readLatency?: number; 
  public get readLatency() {
    return this.getNumberAttribute('read_latency');
  }
  public set readLatency(value: number) {
    this._readLatency = value;
  }
  public resetReadLatency() {
    this._readLatency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readLatencyInput() {
    return this._readLatency;
  }

  // read_latency_percent - computed: false, optional: true, required: false
  private _readLatencyPercent?: number; 
  public get readLatencyPercent() {
    return this.getNumberAttribute('read_latency_percent');
  }
  public set readLatencyPercent(value: number) {
    this._readLatencyPercent = value;
  }
  public resetReadLatencyPercent() {
    this._readLatencyPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readLatencyPercentInput() {
    return this._readLatencyPercent;
  }

  // write_bps - computed: false, optional: true, required: false
  private _writeBps?: number; 
  public get writeBps() {
    return this.getNumberAttribute('write_bps');
  }
  public set writeBps(value: number) {
    this._writeBps = value;
  }
  public resetWriteBps() {
    this._writeBps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeBpsInput() {
    return this._writeBps;
  }

  // write_iops - computed: false, optional: true, required: false
  private _writeIops?: number; 
  public get writeIops() {
    return this.getNumberAttribute('write_iops');
  }
  public set writeIops(value: number) {
    this._writeIops = value;
  }
  public resetWriteIops() {
    this._writeIops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeIopsInput() {
    return this._writeIops;
  }

  // write_latency - computed: false, optional: true, required: false
  private _writeLatency?: number; 
  public get writeLatency() {
    return this.getNumberAttribute('write_latency');
  }
  public set writeLatency(value: number) {
    this._writeLatency = value;
  }
  public resetWriteLatency() {
    this._writeLatency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeLatencyInput() {
    return this._writeLatency;
  }

  // write_latency_percent - computed: false, optional: true, required: false
  private _writeLatencyPercent?: number; 
  public get writeLatencyPercent() {
    return this.getNumberAttribute('write_latency_percent');
  }
  public set writeLatencyPercent(value: number) {
    this._writeLatencyPercent = value;
  }
  public resetWriteLatencyPercent() {
    this._writeLatencyPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeLatencyPercentInput() {
    return this._writeLatencyPercent;
  }
}
export interface DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClassBlkioQosBlocks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#io_cfg DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#io_cfg}
  */
  readonly ioCfg?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClassBlkioQosBlocksIoCfg;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#name DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#type DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClassBlkioQosBlocksToTerraform(struct?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClassBlkioQosBlocks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    io_cfg: dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClassBlkioQosBlocksIoCfgToTerraform(struct!.ioCfg),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClassBlkioQosBlocksToHclTerraform(struct?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClassBlkioQosBlocks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    io_cfg: {
      value: dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClassBlkioQosBlocksIoCfgToHclTerraform(struct!.ioCfg),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClassBlkioQosBlocksIoCfg",
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

export class DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClassBlkioQosBlocksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClassBlkioQosBlocks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ioCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ioCfg = this._ioCfg?.internalValue;
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

  public set internalValue(value: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClassBlkioQosBlocks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ioCfg.internalValue = undefined;
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
      this._ioCfg.internalValue = value.ioCfg;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // io_cfg - computed: false, optional: true, required: false
  private _ioCfg = new DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClassBlkioQosBlocksIoCfgOutputReference(this, "io_cfg");
  public get ioCfg() {
    return this._ioCfg;
  }
  public putIoCfg(value: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClassBlkioQosBlocksIoCfg) {
    this._ioCfg.internalValue = value;
  }
  public resetIoCfg() {
    this._ioCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ioCfgInput() {
    return this._ioCfg.internalValue;
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
}

export class DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClassBlkioQosBlocksList extends cdktf.ComplexList {
  public internalValue? : DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClassBlkioQosBlocks[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClassBlkioQosBlocksOutputReference {
    return new DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClassBlkioQosBlocksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClassBlkioQos {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#blocks DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#blocks}
  */
  readonly blocks?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClassBlkioQosBlocks[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#enable DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
}

export function dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClassBlkioQosToTerraform(struct?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClassBlkioQos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blocks: cdktf.listMapper(dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClassBlkioQosBlocksToTerraform, false)(struct!.blocks),
    enable: cdktf.booleanToTerraform(struct!.enable),
  }
}


export function dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClassBlkioQosToHclTerraform(struct?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClassBlkioQos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blocks: {
      value: cdktf.listMapperHcl(dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClassBlkioQosBlocksToHclTerraform, false)(struct!.blocks),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClassBlkioQosBlocksList",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClassBlkioQosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClassBlkioQos | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blocks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blocks = this._blocks?.internalValue;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClassBlkioQos | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._blocks.internalValue = undefined;
      this._enable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._blocks.internalValue = value.blocks;
      this._enable = value.enable;
    }
  }

  // blocks - computed: false, optional: true, required: false
  private _blocks = new DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClassBlkioQosBlocksList(this, "blocks", false);
  public get blocks() {
    return this._blocks;
  }
  public putBlocks(value: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClassBlkioQosBlocks[] | cdktf.IResolvable) {
    this._blocks.internalValue = value;
  }
  public resetBlocks() {
    this._blocks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blocksInput() {
    return this._blocks.internalValue;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }
}
export interface DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClassCpuQos {
  /**
  * whether pods of the QoS class can expel the cgroup idle pods at the SMT-level. default = false If set to true, pods of this QoS will use a dedicated core sched group for noise clean with the SchedIdle pods. NOTE: It takes effect if cpuPolicy = 'coreSched'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#core_expeller DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#core_expeller}
  */
  readonly coreExpeller?: boolean | cdktf.IResolvable;
  /**
  * Enable indicates whether the cpu qos is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#enable DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * group identity value for pods, default = 0 NOTE: It takes effect if cpuPolicy = 'groupIdentity'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#group_identity DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#group_identity}
  */
  readonly groupIdentity?: number;
  /**
  * cpu.idle value for pods, default = 0. '1' means using SCHED_IDLE. CGroup Idle (introduced since mainline Linux 5.15): https://lore.kernel.org/lkml/162971078674.25758.15464079371945307825.tip-bot2@tip-bot2/#r NOTE: It takes effect if cpuPolicy = 'coreSched'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#sched_idle DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#sched_idle}
  */
  readonly schedIdle?: number;
}

export function dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClassCpuQosToTerraform(struct?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClassCpuQos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    core_expeller: cdktf.booleanToTerraform(struct!.coreExpeller),
    enable: cdktf.booleanToTerraform(struct!.enable),
    group_identity: cdktf.numberToTerraform(struct!.groupIdentity),
    sched_idle: cdktf.numberToTerraform(struct!.schedIdle),
  }
}


export function dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClassCpuQosToHclTerraform(struct?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClassCpuQos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    core_expeller: {
      value: cdktf.booleanToHclTerraform(struct!.coreExpeller),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    group_identity: {
      value: cdktf.numberToHclTerraform(struct!.groupIdentity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sched_idle: {
      value: cdktf.numberToHclTerraform(struct!.schedIdle),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClassCpuQosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClassCpuQos | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._coreExpeller !== undefined) {
      hasAnyValues = true;
      internalValueResult.coreExpeller = this._coreExpeller;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._groupIdentity !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupIdentity = this._groupIdentity;
    }
    if (this._schedIdle !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedIdle = this._schedIdle;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClassCpuQos | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._coreExpeller = undefined;
      this._enable = undefined;
      this._groupIdentity = undefined;
      this._schedIdle = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._coreExpeller = value.coreExpeller;
      this._enable = value.enable;
      this._groupIdentity = value.groupIdentity;
      this._schedIdle = value.schedIdle;
    }
  }

  // core_expeller - computed: false, optional: true, required: false
  private _coreExpeller?: boolean | cdktf.IResolvable; 
  public get coreExpeller() {
    return this.getBooleanAttribute('core_expeller');
  }
  public set coreExpeller(value: boolean | cdktf.IResolvable) {
    this._coreExpeller = value;
  }
  public resetCoreExpeller() {
    this._coreExpeller = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coreExpellerInput() {
    return this._coreExpeller;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // group_identity - computed: false, optional: true, required: false
  private _groupIdentity?: number; 
  public get groupIdentity() {
    return this.getNumberAttribute('group_identity');
  }
  public set groupIdentity(value: number) {
    this._groupIdentity = value;
  }
  public resetGroupIdentity() {
    this._groupIdentity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdentityInput() {
    return this._groupIdentity;
  }

  // sched_idle - computed: false, optional: true, required: false
  private _schedIdle?: number; 
  public get schedIdle() {
    return this.getNumberAttribute('sched_idle');
  }
  public set schedIdle(value: number) {
    this._schedIdle = value;
  }
  public resetSchedIdle() {
    this._schedIdle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedIdleInput() {
    return this._schedIdle;
  }
}
export interface DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClassMemoryQos {
  /**
  * Enable indicates whether the memory qos is enabled (default: false). This field is used for node-level control, while pod-level configuration is done with MemoryQOS and 'Policy' instead of an 'Enable' option. Please view the differences between MemoryQOSCfg and PodMemoryQOSConfig structs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#enable DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * LowLimitPercent specifies the lowLimitFactor percentage to calculate 'memory.low', which TRIES BEST protecting memory from global reclamation when memory usage does not exceed the low limit unless no unprotected memcg can be reclaimed. NOTE: 'memory.low' should be larger than 'memory.min'. If spec.requests.memory == spec.limits.memory, pod 'memory.low' and 'memory.high' become invalid, while 'memory.wmark_ratio' is still in effect. Close: 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#low_limit_percent DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#low_limit_percent}
  */
  readonly lowLimitPercent?: number;
  /**
  * memcg qos If enabled, memcg qos will be set by the agent, where some fields are implicitly calculated from pod spec. 1. 'memory.min' := spec.requests.memory * minLimitFactor / 100 (use 0 if requests.memory is not set) 2. 'memory.low' := spec.requests.memory * lowLimitFactor / 100 (use 0 if requests.memory is not set) 3. 'memory.limit_in_bytes' := spec.limits.memory (set $node.allocatable.memory if limits.memory is not set) 4. 'memory.high' := floor[(spec.requests.memory + throttlingFactor / 100 * (memory.limit_in_bytes or node allocatable memory - spec.requests.memory))/pageSize] * pageSize MinLimitPercent specifies the minLimitFactor percentage to calculate 'memory.min', which protects memory from global reclamation when memory usage does not exceed the min limit. Close: 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#min_limit_percent DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#min_limit_percent}
  */
  readonly minLimitPercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#oom_kill_group DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#oom_kill_group}
  */
  readonly oomKillGroup?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#priority DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#priority}
  */
  readonly priority?: number;
  /**
  * TODO: enhance the usages of oom priority and oom kill group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#priority_enable DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#priority_enable}
  */
  readonly priorityEnable?: number;
  /**
  * ThrottlingPercent specifies the throttlingFactor percentage to calculate 'memory.high' with pod memory.limits or node allocatable memory, which triggers memcg direct reclamation when memory usage exceeds. Lower the factor brings more heavier reclaim pressure. Close: 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#throttling_percent DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#throttling_percent}
  */
  readonly throttlingPercent?: number;
  /**
  * wmark_min_adj (Anolis OS required) WmarkMinAdj specifies 'memory.wmark_min_adj' which adjusts per-memcg threshold for global memory reclamation. Lower the factor brings later reclamation. The adjustment uses different formula for different value range. [-25, 0)：global_wmark_min' = global_wmark_min + (global_wmark_min - 0) * wmarkMinAdj (0, 50]：global_wmark_min' = global_wmark_min + (global_wmark_low - global_wmark_min) * wmarkMinAdj Close: [LSR:0, LS:0, BE:0]. Recommended: [LSR:-25, LS:-25, BE:50].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#wmark_min_adj DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#wmark_min_adj}
  */
  readonly wmarkMinAdj?: number;
  /**
  * wmark_ratio (Anolis OS required) Async memory reclamation is triggered when cgroup memory usage exceeds 'memory.wmark_high' and the reclamation stops when usage is below 'memory.wmark_low'. Basically, 'memory.wmark_high' := min(memory.high, memory.limit_in_bytes) * memory.memory.wmark_ratio 'memory.wmark_low' := min(memory.high, memory.limit_in_bytes) * (memory.wmark_ratio - memory.wmark_scale_factor) WmarkRatio specifies 'memory.wmark_ratio' that help calculate 'memory.wmark_high', which triggers async memory reclamation when memory usage exceeds. Close: 0. Recommended: 95.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#wmark_ratio DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#wmark_ratio}
  */
  readonly wmarkRatio?: number;
  /**
  * WmarkScalePermill specifies 'memory.wmark_scale_factor' that helps calculate 'memory.wmark_low', which stops async memory reclamation when memory usage belows. Close: 50. Recommended: 20.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#wmark_scale_permill DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#wmark_scale_permill}
  */
  readonly wmarkScalePermill?: number;
}

export function dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClassMemoryQosToTerraform(struct?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClassMemoryQos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    low_limit_percent: cdktf.numberToTerraform(struct!.lowLimitPercent),
    min_limit_percent: cdktf.numberToTerraform(struct!.minLimitPercent),
    oom_kill_group: cdktf.numberToTerraform(struct!.oomKillGroup),
    priority: cdktf.numberToTerraform(struct!.priority),
    priority_enable: cdktf.numberToTerraform(struct!.priorityEnable),
    throttling_percent: cdktf.numberToTerraform(struct!.throttlingPercent),
    wmark_min_adj: cdktf.numberToTerraform(struct!.wmarkMinAdj),
    wmark_ratio: cdktf.numberToTerraform(struct!.wmarkRatio),
    wmark_scale_permill: cdktf.numberToTerraform(struct!.wmarkScalePermill),
  }
}


export function dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClassMemoryQosToHclTerraform(struct?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClassMemoryQos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    low_limit_percent: {
      value: cdktf.numberToHclTerraform(struct!.lowLimitPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_limit_percent: {
      value: cdktf.numberToHclTerraform(struct!.minLimitPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    oom_kill_group: {
      value: cdktf.numberToHclTerraform(struct!.oomKillGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority_enable: {
      value: cdktf.numberToHclTerraform(struct!.priorityEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    throttling_percent: {
      value: cdktf.numberToHclTerraform(struct!.throttlingPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    wmark_min_adj: {
      value: cdktf.numberToHclTerraform(struct!.wmarkMinAdj),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    wmark_ratio: {
      value: cdktf.numberToHclTerraform(struct!.wmarkRatio),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    wmark_scale_permill: {
      value: cdktf.numberToHclTerraform(struct!.wmarkScalePermill),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClassMemoryQosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClassMemoryQos | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._lowLimitPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.lowLimitPercent = this._lowLimitPercent;
    }
    if (this._minLimitPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.minLimitPercent = this._minLimitPercent;
    }
    if (this._oomKillGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.oomKillGroup = this._oomKillGroup;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._priorityEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityEnable = this._priorityEnable;
    }
    if (this._throttlingPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.throttlingPercent = this._throttlingPercent;
    }
    if (this._wmarkMinAdj !== undefined) {
      hasAnyValues = true;
      internalValueResult.wmarkMinAdj = this._wmarkMinAdj;
    }
    if (this._wmarkRatio !== undefined) {
      hasAnyValues = true;
      internalValueResult.wmarkRatio = this._wmarkRatio;
    }
    if (this._wmarkScalePermill !== undefined) {
      hasAnyValues = true;
      internalValueResult.wmarkScalePermill = this._wmarkScalePermill;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClassMemoryQos | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._lowLimitPercent = undefined;
      this._minLimitPercent = undefined;
      this._oomKillGroup = undefined;
      this._priority = undefined;
      this._priorityEnable = undefined;
      this._throttlingPercent = undefined;
      this._wmarkMinAdj = undefined;
      this._wmarkRatio = undefined;
      this._wmarkScalePermill = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._lowLimitPercent = value.lowLimitPercent;
      this._minLimitPercent = value.minLimitPercent;
      this._oomKillGroup = value.oomKillGroup;
      this._priority = value.priority;
      this._priorityEnable = value.priorityEnable;
      this._throttlingPercent = value.throttlingPercent;
      this._wmarkMinAdj = value.wmarkMinAdj;
      this._wmarkRatio = value.wmarkRatio;
      this._wmarkScalePermill = value.wmarkScalePermill;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // low_limit_percent - computed: false, optional: true, required: false
  private _lowLimitPercent?: number; 
  public get lowLimitPercent() {
    return this.getNumberAttribute('low_limit_percent');
  }
  public set lowLimitPercent(value: number) {
    this._lowLimitPercent = value;
  }
  public resetLowLimitPercent() {
    this._lowLimitPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowLimitPercentInput() {
    return this._lowLimitPercent;
  }

  // min_limit_percent - computed: false, optional: true, required: false
  private _minLimitPercent?: number; 
  public get minLimitPercent() {
    return this.getNumberAttribute('min_limit_percent');
  }
  public set minLimitPercent(value: number) {
    this._minLimitPercent = value;
  }
  public resetMinLimitPercent() {
    this._minLimitPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minLimitPercentInput() {
    return this._minLimitPercent;
  }

  // oom_kill_group - computed: false, optional: true, required: false
  private _oomKillGroup?: number; 
  public get oomKillGroup() {
    return this.getNumberAttribute('oom_kill_group');
  }
  public set oomKillGroup(value: number) {
    this._oomKillGroup = value;
  }
  public resetOomKillGroup() {
    this._oomKillGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oomKillGroupInput() {
    return this._oomKillGroup;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // priority_enable - computed: false, optional: true, required: false
  private _priorityEnable?: number; 
  public get priorityEnable() {
    return this.getNumberAttribute('priority_enable');
  }
  public set priorityEnable(value: number) {
    this._priorityEnable = value;
  }
  public resetPriorityEnable() {
    this._priorityEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityEnableInput() {
    return this._priorityEnable;
  }

  // throttling_percent - computed: false, optional: true, required: false
  private _throttlingPercent?: number; 
  public get throttlingPercent() {
    return this.getNumberAttribute('throttling_percent');
  }
  public set throttlingPercent(value: number) {
    this._throttlingPercent = value;
  }
  public resetThrottlingPercent() {
    this._throttlingPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throttlingPercentInput() {
    return this._throttlingPercent;
  }

  // wmark_min_adj - computed: false, optional: true, required: false
  private _wmarkMinAdj?: number; 
  public get wmarkMinAdj() {
    return this.getNumberAttribute('wmark_min_adj');
  }
  public set wmarkMinAdj(value: number) {
    this._wmarkMinAdj = value;
  }
  public resetWmarkMinAdj() {
    this._wmarkMinAdj = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wmarkMinAdjInput() {
    return this._wmarkMinAdj;
  }

  // wmark_ratio - computed: false, optional: true, required: false
  private _wmarkRatio?: number; 
  public get wmarkRatio() {
    return this.getNumberAttribute('wmark_ratio');
  }
  public set wmarkRatio(value: number) {
    this._wmarkRatio = value;
  }
  public resetWmarkRatio() {
    this._wmarkRatio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wmarkRatioInput() {
    return this._wmarkRatio;
  }

  // wmark_scale_permill - computed: false, optional: true, required: false
  private _wmarkScalePermill?: number; 
  public get wmarkScalePermill() {
    return this.getNumberAttribute('wmark_scale_permill');
  }
  public set wmarkScalePermill(value: number) {
    this._wmarkScalePermill = value;
  }
  public resetWmarkScalePermill() {
    this._wmarkScalePermill = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wmarkScalePermillInput() {
    return this._wmarkScalePermill;
  }
}
export interface DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClassNetworkQos {
  /**
  * EgressLimit describes the maximum network bandwidth can be used in the egress direction, unit: bps(bytes per second), two expressions are supported，int and string, int: percentage based on total bandwidth，valid in 0-100 string: a specific network bandwidth value, eg: 50M.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#egress_limit DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#egress_limit}
  */
  readonly egressLimit?: string;
  /**
  * EgressRequest describes the minimum network bandwidth guaranteed in the egress direction. unit: bps(bytes per second), two expressions are supported，int and string, int: percentage based on total bandwidth，valid in 0-100 string: a specific network bandwidth value, eg: 50M.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#egress_request DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#egress_request}
  */
  readonly egressRequest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#enable DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * IngressLimit describes the maximum network bandwidth can be used in the ingress direction, unit: bps(bytes per second), two expressions are supported，int and string, int: percentage based on total bandwidth，valid in 0-100 string: a specific network bandwidth value, eg: 50M.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#ingress_limit DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#ingress_limit}
  */
  readonly ingressLimit?: string;
  /**
  * IngressRequest describes the minimum network bandwidth guaranteed in the ingress direction. unit: bps(bytes per second), two expressions are supported，int and string, int: percentage based on total bandwidth，valid in 0-100 string: a specific network bandwidth value, eg: 50M.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#ingress_request DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#ingress_request}
  */
  readonly ingressRequest?: string;
}

export function dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClassNetworkQosToTerraform(struct?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClassNetworkQos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    egress_limit: cdktf.stringToTerraform(struct!.egressLimit),
    egress_request: cdktf.stringToTerraform(struct!.egressRequest),
    enable: cdktf.booleanToTerraform(struct!.enable),
    ingress_limit: cdktf.stringToTerraform(struct!.ingressLimit),
    ingress_request: cdktf.stringToTerraform(struct!.ingressRequest),
  }
}


export function dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClassNetworkQosToHclTerraform(struct?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClassNetworkQos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    egress_limit: {
      value: cdktf.stringToHclTerraform(struct!.egressLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    egress_request: {
      value: cdktf.stringToHclTerraform(struct!.egressRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ingress_limit: {
      value: cdktf.stringToHclTerraform(struct!.ingressLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ingress_request: {
      value: cdktf.stringToHclTerraform(struct!.ingressRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClassNetworkQosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClassNetworkQos | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._egressLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.egressLimit = this._egressLimit;
    }
    if (this._egressRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.egressRequest = this._egressRequest;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._ingressLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressLimit = this._ingressLimit;
    }
    if (this._ingressRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressRequest = this._ingressRequest;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClassNetworkQos | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._egressLimit = undefined;
      this._egressRequest = undefined;
      this._enable = undefined;
      this._ingressLimit = undefined;
      this._ingressRequest = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._egressLimit = value.egressLimit;
      this._egressRequest = value.egressRequest;
      this._enable = value.enable;
      this._ingressLimit = value.ingressLimit;
      this._ingressRequest = value.ingressRequest;
    }
  }

  // egress_limit - computed: false, optional: true, required: false
  private _egressLimit?: string; 
  public get egressLimit() {
    return this.getStringAttribute('egress_limit');
  }
  public set egressLimit(value: string) {
    this._egressLimit = value;
  }
  public resetEgressLimit() {
    this._egressLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressLimitInput() {
    return this._egressLimit;
  }

  // egress_request - computed: false, optional: true, required: false
  private _egressRequest?: string; 
  public get egressRequest() {
    return this.getStringAttribute('egress_request');
  }
  public set egressRequest(value: string) {
    this._egressRequest = value;
  }
  public resetEgressRequest() {
    this._egressRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressRequestInput() {
    return this._egressRequest;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // ingress_limit - computed: false, optional: true, required: false
  private _ingressLimit?: string; 
  public get ingressLimit() {
    return this.getStringAttribute('ingress_limit');
  }
  public set ingressLimit(value: string) {
    this._ingressLimit = value;
  }
  public resetIngressLimit() {
    this._ingressLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressLimitInput() {
    return this._ingressLimit;
  }

  // ingress_request - computed: false, optional: true, required: false
  private _ingressRequest?: string; 
  public get ingressRequest() {
    return this.getStringAttribute('ingress_request');
  }
  public set ingressRequest(value: string) {
    this._ingressRequest = value;
  }
  public resetIngressRequest() {
    this._ingressRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressRequestInput() {
    return this._ingressRequest;
  }
}
export interface DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClassResctrlQos {
  /**
  * LLC available range end for pods by percentage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#cat_range_end_percent DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#cat_range_end_percent}
  */
  readonly catRangeEndPercent?: number;
  /**
  * LLC available range start for pods by percentage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#cat_range_start_percent DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#cat_range_start_percent}
  */
  readonly catRangeStartPercent?: number;
  /**
  * Enable indicates whether the resctrl qos is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#enable DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * MBA percent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#mba_percent DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#mba_percent}
  */
  readonly mbaPercent?: number;
}

export function dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClassResctrlQosToTerraform(struct?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClassResctrlQos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cat_range_end_percent: cdktf.numberToTerraform(struct!.catRangeEndPercent),
    cat_range_start_percent: cdktf.numberToTerraform(struct!.catRangeStartPercent),
    enable: cdktf.booleanToTerraform(struct!.enable),
    mba_percent: cdktf.numberToTerraform(struct!.mbaPercent),
  }
}


export function dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClassResctrlQosToHclTerraform(struct?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClassResctrlQos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cat_range_end_percent: {
      value: cdktf.numberToHclTerraform(struct!.catRangeEndPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cat_range_start_percent: {
      value: cdktf.numberToHclTerraform(struct!.catRangeStartPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mba_percent: {
      value: cdktf.numberToHclTerraform(struct!.mbaPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClassResctrlQosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClassResctrlQos | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._catRangeEndPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.catRangeEndPercent = this._catRangeEndPercent;
    }
    if (this._catRangeStartPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.catRangeStartPercent = this._catRangeStartPercent;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._mbaPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.mbaPercent = this._mbaPercent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClassResctrlQos | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._catRangeEndPercent = undefined;
      this._catRangeStartPercent = undefined;
      this._enable = undefined;
      this._mbaPercent = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._catRangeEndPercent = value.catRangeEndPercent;
      this._catRangeStartPercent = value.catRangeStartPercent;
      this._enable = value.enable;
      this._mbaPercent = value.mbaPercent;
    }
  }

  // cat_range_end_percent - computed: false, optional: true, required: false
  private _catRangeEndPercent?: number; 
  public get catRangeEndPercent() {
    return this.getNumberAttribute('cat_range_end_percent');
  }
  public set catRangeEndPercent(value: number) {
    this._catRangeEndPercent = value;
  }
  public resetCatRangeEndPercent() {
    this._catRangeEndPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catRangeEndPercentInput() {
    return this._catRangeEndPercent;
  }

  // cat_range_start_percent - computed: false, optional: true, required: false
  private _catRangeStartPercent?: number; 
  public get catRangeStartPercent() {
    return this.getNumberAttribute('cat_range_start_percent');
  }
  public set catRangeStartPercent(value: number) {
    this._catRangeStartPercent = value;
  }
  public resetCatRangeStartPercent() {
    this._catRangeStartPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catRangeStartPercentInput() {
    return this._catRangeStartPercent;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // mba_percent - computed: false, optional: true, required: false
  private _mbaPercent?: number; 
  public get mbaPercent() {
    return this.getNumberAttribute('mba_percent');
  }
  public set mbaPercent(value: number) {
    this._mbaPercent = value;
  }
  public resetMbaPercent() {
    this._mbaPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mbaPercentInput() {
    return this._mbaPercent;
  }
}
export interface DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClass {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#blkio_qos DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#blkio_qos}
  */
  readonly blkioQos?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClassBlkioQos;
  /**
  * CPUQOSCfg stores node-level config of cpu qos
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#cpu_qos DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#cpu_qos}
  */
  readonly cpuQos?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClassCpuQos;
  /**
  * MemoryQOSCfg stores node-level config of memory qos
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#memory_qos DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#memory_qos}
  */
  readonly memoryQos?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClassMemoryQos;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#network_qos DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#network_qos}
  */
  readonly networkQos?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClassNetworkQos;
  /**
  * ResctrlQOSCfg stores node-level config of resctrl qos
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#resctrl_qos DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#resctrl_qos}
  */
  readonly resctrlQos?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClassResctrlQos;
}

export function dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClassToTerraform(struct?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClass | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blkio_qos: dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClassBlkioQosToTerraform(struct!.blkioQos),
    cpu_qos: dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClassCpuQosToTerraform(struct!.cpuQos),
    memory_qos: dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClassMemoryQosToTerraform(struct!.memoryQos),
    network_qos: dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClassNetworkQosToTerraform(struct!.networkQos),
    resctrl_qos: dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClassResctrlQosToTerraform(struct!.resctrlQos),
  }
}


export function dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClassToHclTerraform(struct?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClass | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blkio_qos: {
      value: dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClassBlkioQosToHclTerraform(struct!.blkioQos),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClassBlkioQos",
    },
    cpu_qos: {
      value: dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClassCpuQosToHclTerraform(struct!.cpuQos),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClassCpuQos",
    },
    memory_qos: {
      value: dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClassMemoryQosToHclTerraform(struct!.memoryQos),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClassMemoryQos",
    },
    network_qos: {
      value: dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClassNetworkQosToHclTerraform(struct!.networkQos),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClassNetworkQos",
    },
    resctrl_qos: {
      value: dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClassResctrlQosToHclTerraform(struct!.resctrlQos),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClassResctrlQos",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClassOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClass | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blkioQos?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blkioQos = this._blkioQos?.internalValue;
    }
    if (this._cpuQos?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuQos = this._cpuQos?.internalValue;
    }
    if (this._memoryQos?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryQos = this._memoryQos?.internalValue;
    }
    if (this._networkQos?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkQos = this._networkQos?.internalValue;
    }
    if (this._resctrlQos?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resctrlQos = this._resctrlQos?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClass | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._blkioQos.internalValue = undefined;
      this._cpuQos.internalValue = undefined;
      this._memoryQos.internalValue = undefined;
      this._networkQos.internalValue = undefined;
      this._resctrlQos.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._blkioQos.internalValue = value.blkioQos;
      this._cpuQos.internalValue = value.cpuQos;
      this._memoryQos.internalValue = value.memoryQos;
      this._networkQos.internalValue = value.networkQos;
      this._resctrlQos.internalValue = value.resctrlQos;
    }
  }

  // blkio_qos - computed: false, optional: true, required: false
  private _blkioQos = new DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClassBlkioQosOutputReference(this, "blkio_qos");
  public get blkioQos() {
    return this._blkioQos;
  }
  public putBlkioQos(value: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClassBlkioQos) {
    this._blkioQos.internalValue = value;
  }
  public resetBlkioQos() {
    this._blkioQos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blkioQosInput() {
    return this._blkioQos.internalValue;
  }

  // cpu_qos - computed: false, optional: true, required: false
  private _cpuQos = new DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClassCpuQosOutputReference(this, "cpu_qos");
  public get cpuQos() {
    return this._cpuQos;
  }
  public putCpuQos(value: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClassCpuQos) {
    this._cpuQos.internalValue = value;
  }
  public resetCpuQos() {
    this._cpuQos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuQosInput() {
    return this._cpuQos.internalValue;
  }

  // memory_qos - computed: false, optional: true, required: false
  private _memoryQos = new DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClassMemoryQosOutputReference(this, "memory_qos");
  public get memoryQos() {
    return this._memoryQos;
  }
  public putMemoryQos(value: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClassMemoryQos) {
    this._memoryQos.internalValue = value;
  }
  public resetMemoryQos() {
    this._memoryQos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryQosInput() {
    return this._memoryQos.internalValue;
  }

  // network_qos - computed: false, optional: true, required: false
  private _networkQos = new DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClassNetworkQosOutputReference(this, "network_qos");
  public get networkQos() {
    return this._networkQos;
  }
  public putNetworkQos(value: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClassNetworkQos) {
    this._networkQos.internalValue = value;
  }
  public resetNetworkQos() {
    this._networkQos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkQosInput() {
    return this._networkQos.internalValue;
  }

  // resctrl_qos - computed: false, optional: true, required: false
  private _resctrlQos = new DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClassResctrlQosOutputReference(this, "resctrl_qos");
  public get resctrlQos() {
    return this._resctrlQos;
  }
  public putResctrlQos(value: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClassResctrlQos) {
    this._resctrlQos.internalValue = value;
  }
  public resetResctrlQos() {
    this._resctrlQos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resctrlQosInput() {
    return this._resctrlQos.internalValue;
  }
}
export interface DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClassBlkioQosBlocksIoCfg {
  /**
  * configure the cost model of blkio-cost manually whether the user model is enabled. Default value: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#enable_user_model DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#enable_user_model}
  */
  readonly enableUserModel?: boolean | cdktf.IResolvable;
  /**
  * This field is used to set the weight of a sub-group. Default value: 100. Valid values: 1 to 100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#io_weight_percent DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#io_weight_percent}
  */
  readonly ioWeightPercent?: number;
  /**
  * the read BPS of user model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#model_read_bps DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#model_read_bps}
  */
  readonly modelReadBps?: number;
  /**
  * the random read iops of user model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#model_read_rand_iops DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#model_read_rand_iops}
  */
  readonly modelReadRandIops?: number;
  /**
  * the sequential read iops of user model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#model_read_seq_iops DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#model_read_seq_iops}
  */
  readonly modelReadSeqIops?: number;
  /**
  * the write BPS of user model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#model_write_bps DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#model_write_bps}
  */
  readonly modelWriteBps?: number;
  /**
  * the random write iops of user model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#model_write_rand_iops DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#model_write_rand_iops}
  */
  readonly modelWriteRandIops?: number;
  /**
  * the sequential write iops of user model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#model_write_seq_iops DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#model_write_seq_iops}
  */
  readonly modelWriteSeqIops?: number;
  /**
  * Throttling of throughput The value is set to 0, which indicates that the feature is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#read_bps DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#read_bps}
  */
  readonly readBps?: number;
  /**
  * Throttling of IOPS The value is set to 0, which indicates that the feature is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#read_iops DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#read_iops}
  */
  readonly readIops?: number;
  /**
  * Configure the weight-based throttling feature of blk-iocost Only used for RootClass After blk-iocost is enabled, the kernel calculates the proportion of requests that exceed the read or write latency threshold out of all requests. When the proportion is greater than the read or write latency percentile (95%), the kernel considers the disk to be saturated and reduces the rate at which requests are sent to the disk. the read latency threshold. Unit: microseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#read_latency DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#read_latency}
  */
  readonly readLatency?: number;
  /**
  * the read latency percentile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#read_latency_percent DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#read_latency_percent}
  */
  readonly readLatencyPercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#write_bps DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#write_bps}
  */
  readonly writeBps?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#write_iops DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#write_iops}
  */
  readonly writeIops?: number;
  /**
  * the write latency threshold. Unit: microseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#write_latency DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#write_latency}
  */
  readonly writeLatency?: number;
  /**
  * the write latency percentile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#write_latency_percent DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#write_latency_percent}
  */
  readonly writeLatencyPercent?: number;
}

export function dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClassBlkioQosBlocksIoCfgToTerraform(struct?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClassBlkioQosBlocksIoCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_user_model: cdktf.booleanToTerraform(struct!.enableUserModel),
    io_weight_percent: cdktf.numberToTerraform(struct!.ioWeightPercent),
    model_read_bps: cdktf.numberToTerraform(struct!.modelReadBps),
    model_read_rand_iops: cdktf.numberToTerraform(struct!.modelReadRandIops),
    model_read_seq_iops: cdktf.numberToTerraform(struct!.modelReadSeqIops),
    model_write_bps: cdktf.numberToTerraform(struct!.modelWriteBps),
    model_write_rand_iops: cdktf.numberToTerraform(struct!.modelWriteRandIops),
    model_write_seq_iops: cdktf.numberToTerraform(struct!.modelWriteSeqIops),
    read_bps: cdktf.numberToTerraform(struct!.readBps),
    read_iops: cdktf.numberToTerraform(struct!.readIops),
    read_latency: cdktf.numberToTerraform(struct!.readLatency),
    read_latency_percent: cdktf.numberToTerraform(struct!.readLatencyPercent),
    write_bps: cdktf.numberToTerraform(struct!.writeBps),
    write_iops: cdktf.numberToTerraform(struct!.writeIops),
    write_latency: cdktf.numberToTerraform(struct!.writeLatency),
    write_latency_percent: cdktf.numberToTerraform(struct!.writeLatencyPercent),
  }
}


export function dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClassBlkioQosBlocksIoCfgToHclTerraform(struct?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClassBlkioQosBlocksIoCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_user_model: {
      value: cdktf.booleanToHclTerraform(struct!.enableUserModel),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    io_weight_percent: {
      value: cdktf.numberToHclTerraform(struct!.ioWeightPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    model_read_bps: {
      value: cdktf.numberToHclTerraform(struct!.modelReadBps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    model_read_rand_iops: {
      value: cdktf.numberToHclTerraform(struct!.modelReadRandIops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    model_read_seq_iops: {
      value: cdktf.numberToHclTerraform(struct!.modelReadSeqIops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    model_write_bps: {
      value: cdktf.numberToHclTerraform(struct!.modelWriteBps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    model_write_rand_iops: {
      value: cdktf.numberToHclTerraform(struct!.modelWriteRandIops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    model_write_seq_iops: {
      value: cdktf.numberToHclTerraform(struct!.modelWriteSeqIops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    read_bps: {
      value: cdktf.numberToHclTerraform(struct!.readBps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    read_iops: {
      value: cdktf.numberToHclTerraform(struct!.readIops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    read_latency: {
      value: cdktf.numberToHclTerraform(struct!.readLatency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    read_latency_percent: {
      value: cdktf.numberToHclTerraform(struct!.readLatencyPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    write_bps: {
      value: cdktf.numberToHclTerraform(struct!.writeBps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    write_iops: {
      value: cdktf.numberToHclTerraform(struct!.writeIops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    write_latency: {
      value: cdktf.numberToHclTerraform(struct!.writeLatency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    write_latency_percent: {
      value: cdktf.numberToHclTerraform(struct!.writeLatencyPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClassBlkioQosBlocksIoCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClassBlkioQosBlocksIoCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableUserModel !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableUserModel = this._enableUserModel;
    }
    if (this._ioWeightPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.ioWeightPercent = this._ioWeightPercent;
    }
    if (this._modelReadBps !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelReadBps = this._modelReadBps;
    }
    if (this._modelReadRandIops !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelReadRandIops = this._modelReadRandIops;
    }
    if (this._modelReadSeqIops !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelReadSeqIops = this._modelReadSeqIops;
    }
    if (this._modelWriteBps !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelWriteBps = this._modelWriteBps;
    }
    if (this._modelWriteRandIops !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelWriteRandIops = this._modelWriteRandIops;
    }
    if (this._modelWriteSeqIops !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelWriteSeqIops = this._modelWriteSeqIops;
    }
    if (this._readBps !== undefined) {
      hasAnyValues = true;
      internalValueResult.readBps = this._readBps;
    }
    if (this._readIops !== undefined) {
      hasAnyValues = true;
      internalValueResult.readIops = this._readIops;
    }
    if (this._readLatency !== undefined) {
      hasAnyValues = true;
      internalValueResult.readLatency = this._readLatency;
    }
    if (this._readLatencyPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.readLatencyPercent = this._readLatencyPercent;
    }
    if (this._writeBps !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeBps = this._writeBps;
    }
    if (this._writeIops !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeIops = this._writeIops;
    }
    if (this._writeLatency !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeLatency = this._writeLatency;
    }
    if (this._writeLatencyPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeLatencyPercent = this._writeLatencyPercent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClassBlkioQosBlocksIoCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableUserModel = undefined;
      this._ioWeightPercent = undefined;
      this._modelReadBps = undefined;
      this._modelReadRandIops = undefined;
      this._modelReadSeqIops = undefined;
      this._modelWriteBps = undefined;
      this._modelWriteRandIops = undefined;
      this._modelWriteSeqIops = undefined;
      this._readBps = undefined;
      this._readIops = undefined;
      this._readLatency = undefined;
      this._readLatencyPercent = undefined;
      this._writeBps = undefined;
      this._writeIops = undefined;
      this._writeLatency = undefined;
      this._writeLatencyPercent = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableUserModel = value.enableUserModel;
      this._ioWeightPercent = value.ioWeightPercent;
      this._modelReadBps = value.modelReadBps;
      this._modelReadRandIops = value.modelReadRandIops;
      this._modelReadSeqIops = value.modelReadSeqIops;
      this._modelWriteBps = value.modelWriteBps;
      this._modelWriteRandIops = value.modelWriteRandIops;
      this._modelWriteSeqIops = value.modelWriteSeqIops;
      this._readBps = value.readBps;
      this._readIops = value.readIops;
      this._readLatency = value.readLatency;
      this._readLatencyPercent = value.readLatencyPercent;
      this._writeBps = value.writeBps;
      this._writeIops = value.writeIops;
      this._writeLatency = value.writeLatency;
      this._writeLatencyPercent = value.writeLatencyPercent;
    }
  }

  // enable_user_model - computed: false, optional: true, required: false
  private _enableUserModel?: boolean | cdktf.IResolvable; 
  public get enableUserModel() {
    return this.getBooleanAttribute('enable_user_model');
  }
  public set enableUserModel(value: boolean | cdktf.IResolvable) {
    this._enableUserModel = value;
  }
  public resetEnableUserModel() {
    this._enableUserModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableUserModelInput() {
    return this._enableUserModel;
  }

  // io_weight_percent - computed: false, optional: true, required: false
  private _ioWeightPercent?: number; 
  public get ioWeightPercent() {
    return this.getNumberAttribute('io_weight_percent');
  }
  public set ioWeightPercent(value: number) {
    this._ioWeightPercent = value;
  }
  public resetIoWeightPercent() {
    this._ioWeightPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ioWeightPercentInput() {
    return this._ioWeightPercent;
  }

  // model_read_bps - computed: false, optional: true, required: false
  private _modelReadBps?: number; 
  public get modelReadBps() {
    return this.getNumberAttribute('model_read_bps');
  }
  public set modelReadBps(value: number) {
    this._modelReadBps = value;
  }
  public resetModelReadBps() {
    this._modelReadBps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelReadBpsInput() {
    return this._modelReadBps;
  }

  // model_read_rand_iops - computed: false, optional: true, required: false
  private _modelReadRandIops?: number; 
  public get modelReadRandIops() {
    return this.getNumberAttribute('model_read_rand_iops');
  }
  public set modelReadRandIops(value: number) {
    this._modelReadRandIops = value;
  }
  public resetModelReadRandIops() {
    this._modelReadRandIops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelReadRandIopsInput() {
    return this._modelReadRandIops;
  }

  // model_read_seq_iops - computed: false, optional: true, required: false
  private _modelReadSeqIops?: number; 
  public get modelReadSeqIops() {
    return this.getNumberAttribute('model_read_seq_iops');
  }
  public set modelReadSeqIops(value: number) {
    this._modelReadSeqIops = value;
  }
  public resetModelReadSeqIops() {
    this._modelReadSeqIops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelReadSeqIopsInput() {
    return this._modelReadSeqIops;
  }

  // model_write_bps - computed: false, optional: true, required: false
  private _modelWriteBps?: number; 
  public get modelWriteBps() {
    return this.getNumberAttribute('model_write_bps');
  }
  public set modelWriteBps(value: number) {
    this._modelWriteBps = value;
  }
  public resetModelWriteBps() {
    this._modelWriteBps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelWriteBpsInput() {
    return this._modelWriteBps;
  }

  // model_write_rand_iops - computed: false, optional: true, required: false
  private _modelWriteRandIops?: number; 
  public get modelWriteRandIops() {
    return this.getNumberAttribute('model_write_rand_iops');
  }
  public set modelWriteRandIops(value: number) {
    this._modelWriteRandIops = value;
  }
  public resetModelWriteRandIops() {
    this._modelWriteRandIops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelWriteRandIopsInput() {
    return this._modelWriteRandIops;
  }

  // model_write_seq_iops - computed: false, optional: true, required: false
  private _modelWriteSeqIops?: number; 
  public get modelWriteSeqIops() {
    return this.getNumberAttribute('model_write_seq_iops');
  }
  public set modelWriteSeqIops(value: number) {
    this._modelWriteSeqIops = value;
  }
  public resetModelWriteSeqIops() {
    this._modelWriteSeqIops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelWriteSeqIopsInput() {
    return this._modelWriteSeqIops;
  }

  // read_bps - computed: false, optional: true, required: false
  private _readBps?: number; 
  public get readBps() {
    return this.getNumberAttribute('read_bps');
  }
  public set readBps(value: number) {
    this._readBps = value;
  }
  public resetReadBps() {
    this._readBps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readBpsInput() {
    return this._readBps;
  }

  // read_iops - computed: false, optional: true, required: false
  private _readIops?: number; 
  public get readIops() {
    return this.getNumberAttribute('read_iops');
  }
  public set readIops(value: number) {
    this._readIops = value;
  }
  public resetReadIops() {
    this._readIops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readIopsInput() {
    return this._readIops;
  }

  // read_latency - computed: false, optional: true, required: false
  private _readLatency?: number; 
  public get readLatency() {
    return this.getNumberAttribute('read_latency');
  }
  public set readLatency(value: number) {
    this._readLatency = value;
  }
  public resetReadLatency() {
    this._readLatency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readLatencyInput() {
    return this._readLatency;
  }

  // read_latency_percent - computed: false, optional: true, required: false
  private _readLatencyPercent?: number; 
  public get readLatencyPercent() {
    return this.getNumberAttribute('read_latency_percent');
  }
  public set readLatencyPercent(value: number) {
    this._readLatencyPercent = value;
  }
  public resetReadLatencyPercent() {
    this._readLatencyPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readLatencyPercentInput() {
    return this._readLatencyPercent;
  }

  // write_bps - computed: false, optional: true, required: false
  private _writeBps?: number; 
  public get writeBps() {
    return this.getNumberAttribute('write_bps');
  }
  public set writeBps(value: number) {
    this._writeBps = value;
  }
  public resetWriteBps() {
    this._writeBps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeBpsInput() {
    return this._writeBps;
  }

  // write_iops - computed: false, optional: true, required: false
  private _writeIops?: number; 
  public get writeIops() {
    return this.getNumberAttribute('write_iops');
  }
  public set writeIops(value: number) {
    this._writeIops = value;
  }
  public resetWriteIops() {
    this._writeIops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeIopsInput() {
    return this._writeIops;
  }

  // write_latency - computed: false, optional: true, required: false
  private _writeLatency?: number; 
  public get writeLatency() {
    return this.getNumberAttribute('write_latency');
  }
  public set writeLatency(value: number) {
    this._writeLatency = value;
  }
  public resetWriteLatency() {
    this._writeLatency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeLatencyInput() {
    return this._writeLatency;
  }

  // write_latency_percent - computed: false, optional: true, required: false
  private _writeLatencyPercent?: number; 
  public get writeLatencyPercent() {
    return this.getNumberAttribute('write_latency_percent');
  }
  public set writeLatencyPercent(value: number) {
    this._writeLatencyPercent = value;
  }
  public resetWriteLatencyPercent() {
    this._writeLatencyPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeLatencyPercentInput() {
    return this._writeLatencyPercent;
  }
}
export interface DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClassBlkioQosBlocks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#io_cfg DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#io_cfg}
  */
  readonly ioCfg?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClassBlkioQosBlocksIoCfg;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#name DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#type DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClassBlkioQosBlocksToTerraform(struct?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClassBlkioQosBlocks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    io_cfg: dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClassBlkioQosBlocksIoCfgToTerraform(struct!.ioCfg),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClassBlkioQosBlocksToHclTerraform(struct?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClassBlkioQosBlocks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    io_cfg: {
      value: dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClassBlkioQosBlocksIoCfgToHclTerraform(struct!.ioCfg),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClassBlkioQosBlocksIoCfg",
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

export class DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClassBlkioQosBlocksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClassBlkioQosBlocks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ioCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ioCfg = this._ioCfg?.internalValue;
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

  public set internalValue(value: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClassBlkioQosBlocks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ioCfg.internalValue = undefined;
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
      this._ioCfg.internalValue = value.ioCfg;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // io_cfg - computed: false, optional: true, required: false
  private _ioCfg = new DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClassBlkioQosBlocksIoCfgOutputReference(this, "io_cfg");
  public get ioCfg() {
    return this._ioCfg;
  }
  public putIoCfg(value: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClassBlkioQosBlocksIoCfg) {
    this._ioCfg.internalValue = value;
  }
  public resetIoCfg() {
    this._ioCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ioCfgInput() {
    return this._ioCfg.internalValue;
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
}

export class DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClassBlkioQosBlocksList extends cdktf.ComplexList {
  public internalValue? : DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClassBlkioQosBlocks[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClassBlkioQosBlocksOutputReference {
    return new DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClassBlkioQosBlocksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClassBlkioQos {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#blocks DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#blocks}
  */
  readonly blocks?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClassBlkioQosBlocks[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#enable DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
}

export function dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClassBlkioQosToTerraform(struct?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClassBlkioQos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blocks: cdktf.listMapper(dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClassBlkioQosBlocksToTerraform, false)(struct!.blocks),
    enable: cdktf.booleanToTerraform(struct!.enable),
  }
}


export function dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClassBlkioQosToHclTerraform(struct?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClassBlkioQos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blocks: {
      value: cdktf.listMapperHcl(dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClassBlkioQosBlocksToHclTerraform, false)(struct!.blocks),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClassBlkioQosBlocksList",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClassBlkioQosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClassBlkioQos | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blocks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blocks = this._blocks?.internalValue;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClassBlkioQos | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._blocks.internalValue = undefined;
      this._enable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._blocks.internalValue = value.blocks;
      this._enable = value.enable;
    }
  }

  // blocks - computed: false, optional: true, required: false
  private _blocks = new DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClassBlkioQosBlocksList(this, "blocks", false);
  public get blocks() {
    return this._blocks;
  }
  public putBlocks(value: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClassBlkioQosBlocks[] | cdktf.IResolvable) {
    this._blocks.internalValue = value;
  }
  public resetBlocks() {
    this._blocks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blocksInput() {
    return this._blocks.internalValue;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }
}
export interface DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClassCpuQos {
  /**
  * whether pods of the QoS class can expel the cgroup idle pods at the SMT-level. default = false If set to true, pods of this QoS will use a dedicated core sched group for noise clean with the SchedIdle pods. NOTE: It takes effect if cpuPolicy = 'coreSched'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#core_expeller DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#core_expeller}
  */
  readonly coreExpeller?: boolean | cdktf.IResolvable;
  /**
  * Enable indicates whether the cpu qos is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#enable DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * group identity value for pods, default = 0 NOTE: It takes effect if cpuPolicy = 'groupIdentity'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#group_identity DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#group_identity}
  */
  readonly groupIdentity?: number;
  /**
  * cpu.idle value for pods, default = 0. '1' means using SCHED_IDLE. CGroup Idle (introduced since mainline Linux 5.15): https://lore.kernel.org/lkml/162971078674.25758.15464079371945307825.tip-bot2@tip-bot2/#r NOTE: It takes effect if cpuPolicy = 'coreSched'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#sched_idle DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#sched_idle}
  */
  readonly schedIdle?: number;
}

export function dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClassCpuQosToTerraform(struct?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClassCpuQos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    core_expeller: cdktf.booleanToTerraform(struct!.coreExpeller),
    enable: cdktf.booleanToTerraform(struct!.enable),
    group_identity: cdktf.numberToTerraform(struct!.groupIdentity),
    sched_idle: cdktf.numberToTerraform(struct!.schedIdle),
  }
}


export function dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClassCpuQosToHclTerraform(struct?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClassCpuQos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    core_expeller: {
      value: cdktf.booleanToHclTerraform(struct!.coreExpeller),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    group_identity: {
      value: cdktf.numberToHclTerraform(struct!.groupIdentity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sched_idle: {
      value: cdktf.numberToHclTerraform(struct!.schedIdle),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClassCpuQosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClassCpuQos | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._coreExpeller !== undefined) {
      hasAnyValues = true;
      internalValueResult.coreExpeller = this._coreExpeller;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._groupIdentity !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupIdentity = this._groupIdentity;
    }
    if (this._schedIdle !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedIdle = this._schedIdle;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClassCpuQos | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._coreExpeller = undefined;
      this._enable = undefined;
      this._groupIdentity = undefined;
      this._schedIdle = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._coreExpeller = value.coreExpeller;
      this._enable = value.enable;
      this._groupIdentity = value.groupIdentity;
      this._schedIdle = value.schedIdle;
    }
  }

  // core_expeller - computed: false, optional: true, required: false
  private _coreExpeller?: boolean | cdktf.IResolvable; 
  public get coreExpeller() {
    return this.getBooleanAttribute('core_expeller');
  }
  public set coreExpeller(value: boolean | cdktf.IResolvable) {
    this._coreExpeller = value;
  }
  public resetCoreExpeller() {
    this._coreExpeller = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coreExpellerInput() {
    return this._coreExpeller;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // group_identity - computed: false, optional: true, required: false
  private _groupIdentity?: number; 
  public get groupIdentity() {
    return this.getNumberAttribute('group_identity');
  }
  public set groupIdentity(value: number) {
    this._groupIdentity = value;
  }
  public resetGroupIdentity() {
    this._groupIdentity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdentityInput() {
    return this._groupIdentity;
  }

  // sched_idle - computed: false, optional: true, required: false
  private _schedIdle?: number; 
  public get schedIdle() {
    return this.getNumberAttribute('sched_idle');
  }
  public set schedIdle(value: number) {
    this._schedIdle = value;
  }
  public resetSchedIdle() {
    this._schedIdle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedIdleInput() {
    return this._schedIdle;
  }
}
export interface DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClassMemoryQos {
  /**
  * Enable indicates whether the memory qos is enabled (default: false). This field is used for node-level control, while pod-level configuration is done with MemoryQOS and 'Policy' instead of an 'Enable' option. Please view the differences between MemoryQOSCfg and PodMemoryQOSConfig structs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#enable DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * LowLimitPercent specifies the lowLimitFactor percentage to calculate 'memory.low', which TRIES BEST protecting memory from global reclamation when memory usage does not exceed the low limit unless no unprotected memcg can be reclaimed. NOTE: 'memory.low' should be larger than 'memory.min'. If spec.requests.memory == spec.limits.memory, pod 'memory.low' and 'memory.high' become invalid, while 'memory.wmark_ratio' is still in effect. Close: 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#low_limit_percent DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#low_limit_percent}
  */
  readonly lowLimitPercent?: number;
  /**
  * memcg qos If enabled, memcg qos will be set by the agent, where some fields are implicitly calculated from pod spec. 1. 'memory.min' := spec.requests.memory * minLimitFactor / 100 (use 0 if requests.memory is not set) 2. 'memory.low' := spec.requests.memory * lowLimitFactor / 100 (use 0 if requests.memory is not set) 3. 'memory.limit_in_bytes' := spec.limits.memory (set $node.allocatable.memory if limits.memory is not set) 4. 'memory.high' := floor[(spec.requests.memory + throttlingFactor / 100 * (memory.limit_in_bytes or node allocatable memory - spec.requests.memory))/pageSize] * pageSize MinLimitPercent specifies the minLimitFactor percentage to calculate 'memory.min', which protects memory from global reclamation when memory usage does not exceed the min limit. Close: 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#min_limit_percent DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#min_limit_percent}
  */
  readonly minLimitPercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#oom_kill_group DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#oom_kill_group}
  */
  readonly oomKillGroup?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#priority DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#priority}
  */
  readonly priority?: number;
  /**
  * TODO: enhance the usages of oom priority and oom kill group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#priority_enable DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#priority_enable}
  */
  readonly priorityEnable?: number;
  /**
  * ThrottlingPercent specifies the throttlingFactor percentage to calculate 'memory.high' with pod memory.limits or node allocatable memory, which triggers memcg direct reclamation when memory usage exceeds. Lower the factor brings more heavier reclaim pressure. Close: 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#throttling_percent DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#throttling_percent}
  */
  readonly throttlingPercent?: number;
  /**
  * wmark_min_adj (Anolis OS required) WmarkMinAdj specifies 'memory.wmark_min_adj' which adjusts per-memcg threshold for global memory reclamation. Lower the factor brings later reclamation. The adjustment uses different formula for different value range. [-25, 0)：global_wmark_min' = global_wmark_min + (global_wmark_min - 0) * wmarkMinAdj (0, 50]：global_wmark_min' = global_wmark_min + (global_wmark_low - global_wmark_min) * wmarkMinAdj Close: [LSR:0, LS:0, BE:0]. Recommended: [LSR:-25, LS:-25, BE:50].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#wmark_min_adj DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#wmark_min_adj}
  */
  readonly wmarkMinAdj?: number;
  /**
  * wmark_ratio (Anolis OS required) Async memory reclamation is triggered when cgroup memory usage exceeds 'memory.wmark_high' and the reclamation stops when usage is below 'memory.wmark_low'. Basically, 'memory.wmark_high' := min(memory.high, memory.limit_in_bytes) * memory.memory.wmark_ratio 'memory.wmark_low' := min(memory.high, memory.limit_in_bytes) * (memory.wmark_ratio - memory.wmark_scale_factor) WmarkRatio specifies 'memory.wmark_ratio' that help calculate 'memory.wmark_high', which triggers async memory reclamation when memory usage exceeds. Close: 0. Recommended: 95.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#wmark_ratio DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#wmark_ratio}
  */
  readonly wmarkRatio?: number;
  /**
  * WmarkScalePermill specifies 'memory.wmark_scale_factor' that helps calculate 'memory.wmark_low', which stops async memory reclamation when memory usage belows. Close: 50. Recommended: 20.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#wmark_scale_permill DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#wmark_scale_permill}
  */
  readonly wmarkScalePermill?: number;
}

export function dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClassMemoryQosToTerraform(struct?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClassMemoryQos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    low_limit_percent: cdktf.numberToTerraform(struct!.lowLimitPercent),
    min_limit_percent: cdktf.numberToTerraform(struct!.minLimitPercent),
    oom_kill_group: cdktf.numberToTerraform(struct!.oomKillGroup),
    priority: cdktf.numberToTerraform(struct!.priority),
    priority_enable: cdktf.numberToTerraform(struct!.priorityEnable),
    throttling_percent: cdktf.numberToTerraform(struct!.throttlingPercent),
    wmark_min_adj: cdktf.numberToTerraform(struct!.wmarkMinAdj),
    wmark_ratio: cdktf.numberToTerraform(struct!.wmarkRatio),
    wmark_scale_permill: cdktf.numberToTerraform(struct!.wmarkScalePermill),
  }
}


export function dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClassMemoryQosToHclTerraform(struct?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClassMemoryQos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    low_limit_percent: {
      value: cdktf.numberToHclTerraform(struct!.lowLimitPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_limit_percent: {
      value: cdktf.numberToHclTerraform(struct!.minLimitPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    oom_kill_group: {
      value: cdktf.numberToHclTerraform(struct!.oomKillGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority_enable: {
      value: cdktf.numberToHclTerraform(struct!.priorityEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    throttling_percent: {
      value: cdktf.numberToHclTerraform(struct!.throttlingPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    wmark_min_adj: {
      value: cdktf.numberToHclTerraform(struct!.wmarkMinAdj),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    wmark_ratio: {
      value: cdktf.numberToHclTerraform(struct!.wmarkRatio),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    wmark_scale_permill: {
      value: cdktf.numberToHclTerraform(struct!.wmarkScalePermill),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClassMemoryQosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClassMemoryQos | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._lowLimitPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.lowLimitPercent = this._lowLimitPercent;
    }
    if (this._minLimitPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.minLimitPercent = this._minLimitPercent;
    }
    if (this._oomKillGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.oomKillGroup = this._oomKillGroup;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._priorityEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityEnable = this._priorityEnable;
    }
    if (this._throttlingPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.throttlingPercent = this._throttlingPercent;
    }
    if (this._wmarkMinAdj !== undefined) {
      hasAnyValues = true;
      internalValueResult.wmarkMinAdj = this._wmarkMinAdj;
    }
    if (this._wmarkRatio !== undefined) {
      hasAnyValues = true;
      internalValueResult.wmarkRatio = this._wmarkRatio;
    }
    if (this._wmarkScalePermill !== undefined) {
      hasAnyValues = true;
      internalValueResult.wmarkScalePermill = this._wmarkScalePermill;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClassMemoryQos | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._lowLimitPercent = undefined;
      this._minLimitPercent = undefined;
      this._oomKillGroup = undefined;
      this._priority = undefined;
      this._priorityEnable = undefined;
      this._throttlingPercent = undefined;
      this._wmarkMinAdj = undefined;
      this._wmarkRatio = undefined;
      this._wmarkScalePermill = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._lowLimitPercent = value.lowLimitPercent;
      this._minLimitPercent = value.minLimitPercent;
      this._oomKillGroup = value.oomKillGroup;
      this._priority = value.priority;
      this._priorityEnable = value.priorityEnable;
      this._throttlingPercent = value.throttlingPercent;
      this._wmarkMinAdj = value.wmarkMinAdj;
      this._wmarkRatio = value.wmarkRatio;
      this._wmarkScalePermill = value.wmarkScalePermill;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // low_limit_percent - computed: false, optional: true, required: false
  private _lowLimitPercent?: number; 
  public get lowLimitPercent() {
    return this.getNumberAttribute('low_limit_percent');
  }
  public set lowLimitPercent(value: number) {
    this._lowLimitPercent = value;
  }
  public resetLowLimitPercent() {
    this._lowLimitPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowLimitPercentInput() {
    return this._lowLimitPercent;
  }

  // min_limit_percent - computed: false, optional: true, required: false
  private _minLimitPercent?: number; 
  public get minLimitPercent() {
    return this.getNumberAttribute('min_limit_percent');
  }
  public set minLimitPercent(value: number) {
    this._minLimitPercent = value;
  }
  public resetMinLimitPercent() {
    this._minLimitPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minLimitPercentInput() {
    return this._minLimitPercent;
  }

  // oom_kill_group - computed: false, optional: true, required: false
  private _oomKillGroup?: number; 
  public get oomKillGroup() {
    return this.getNumberAttribute('oom_kill_group');
  }
  public set oomKillGroup(value: number) {
    this._oomKillGroup = value;
  }
  public resetOomKillGroup() {
    this._oomKillGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oomKillGroupInput() {
    return this._oomKillGroup;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // priority_enable - computed: false, optional: true, required: false
  private _priorityEnable?: number; 
  public get priorityEnable() {
    return this.getNumberAttribute('priority_enable');
  }
  public set priorityEnable(value: number) {
    this._priorityEnable = value;
  }
  public resetPriorityEnable() {
    this._priorityEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityEnableInput() {
    return this._priorityEnable;
  }

  // throttling_percent - computed: false, optional: true, required: false
  private _throttlingPercent?: number; 
  public get throttlingPercent() {
    return this.getNumberAttribute('throttling_percent');
  }
  public set throttlingPercent(value: number) {
    this._throttlingPercent = value;
  }
  public resetThrottlingPercent() {
    this._throttlingPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throttlingPercentInput() {
    return this._throttlingPercent;
  }

  // wmark_min_adj - computed: false, optional: true, required: false
  private _wmarkMinAdj?: number; 
  public get wmarkMinAdj() {
    return this.getNumberAttribute('wmark_min_adj');
  }
  public set wmarkMinAdj(value: number) {
    this._wmarkMinAdj = value;
  }
  public resetWmarkMinAdj() {
    this._wmarkMinAdj = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wmarkMinAdjInput() {
    return this._wmarkMinAdj;
  }

  // wmark_ratio - computed: false, optional: true, required: false
  private _wmarkRatio?: number; 
  public get wmarkRatio() {
    return this.getNumberAttribute('wmark_ratio');
  }
  public set wmarkRatio(value: number) {
    this._wmarkRatio = value;
  }
  public resetWmarkRatio() {
    this._wmarkRatio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wmarkRatioInput() {
    return this._wmarkRatio;
  }

  // wmark_scale_permill - computed: false, optional: true, required: false
  private _wmarkScalePermill?: number; 
  public get wmarkScalePermill() {
    return this.getNumberAttribute('wmark_scale_permill');
  }
  public set wmarkScalePermill(value: number) {
    this._wmarkScalePermill = value;
  }
  public resetWmarkScalePermill() {
    this._wmarkScalePermill = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wmarkScalePermillInput() {
    return this._wmarkScalePermill;
  }
}
export interface DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClassNetworkQos {
  /**
  * EgressLimit describes the maximum network bandwidth can be used in the egress direction, unit: bps(bytes per second), two expressions are supported，int and string, int: percentage based on total bandwidth，valid in 0-100 string: a specific network bandwidth value, eg: 50M.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#egress_limit DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#egress_limit}
  */
  readonly egressLimit?: string;
  /**
  * EgressRequest describes the minimum network bandwidth guaranteed in the egress direction. unit: bps(bytes per second), two expressions are supported，int and string, int: percentage based on total bandwidth，valid in 0-100 string: a specific network bandwidth value, eg: 50M.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#egress_request DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#egress_request}
  */
  readonly egressRequest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#enable DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * IngressLimit describes the maximum network bandwidth can be used in the ingress direction, unit: bps(bytes per second), two expressions are supported，int and string, int: percentage based on total bandwidth，valid in 0-100 string: a specific network bandwidth value, eg: 50M.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#ingress_limit DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#ingress_limit}
  */
  readonly ingressLimit?: string;
  /**
  * IngressRequest describes the minimum network bandwidth guaranteed in the ingress direction. unit: bps(bytes per second), two expressions are supported，int and string, int: percentage based on total bandwidth，valid in 0-100 string: a specific network bandwidth value, eg: 50M.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#ingress_request DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#ingress_request}
  */
  readonly ingressRequest?: string;
}

export function dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClassNetworkQosToTerraform(struct?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClassNetworkQos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    egress_limit: cdktf.stringToTerraform(struct!.egressLimit),
    egress_request: cdktf.stringToTerraform(struct!.egressRequest),
    enable: cdktf.booleanToTerraform(struct!.enable),
    ingress_limit: cdktf.stringToTerraform(struct!.ingressLimit),
    ingress_request: cdktf.stringToTerraform(struct!.ingressRequest),
  }
}


export function dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClassNetworkQosToHclTerraform(struct?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClassNetworkQos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    egress_limit: {
      value: cdktf.stringToHclTerraform(struct!.egressLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    egress_request: {
      value: cdktf.stringToHclTerraform(struct!.egressRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ingress_limit: {
      value: cdktf.stringToHclTerraform(struct!.ingressLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ingress_request: {
      value: cdktf.stringToHclTerraform(struct!.ingressRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClassNetworkQosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClassNetworkQos | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._egressLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.egressLimit = this._egressLimit;
    }
    if (this._egressRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.egressRequest = this._egressRequest;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._ingressLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressLimit = this._ingressLimit;
    }
    if (this._ingressRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressRequest = this._ingressRequest;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClassNetworkQos | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._egressLimit = undefined;
      this._egressRequest = undefined;
      this._enable = undefined;
      this._ingressLimit = undefined;
      this._ingressRequest = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._egressLimit = value.egressLimit;
      this._egressRequest = value.egressRequest;
      this._enable = value.enable;
      this._ingressLimit = value.ingressLimit;
      this._ingressRequest = value.ingressRequest;
    }
  }

  // egress_limit - computed: false, optional: true, required: false
  private _egressLimit?: string; 
  public get egressLimit() {
    return this.getStringAttribute('egress_limit');
  }
  public set egressLimit(value: string) {
    this._egressLimit = value;
  }
  public resetEgressLimit() {
    this._egressLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressLimitInput() {
    return this._egressLimit;
  }

  // egress_request - computed: false, optional: true, required: false
  private _egressRequest?: string; 
  public get egressRequest() {
    return this.getStringAttribute('egress_request');
  }
  public set egressRequest(value: string) {
    this._egressRequest = value;
  }
  public resetEgressRequest() {
    this._egressRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressRequestInput() {
    return this._egressRequest;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // ingress_limit - computed: false, optional: true, required: false
  private _ingressLimit?: string; 
  public get ingressLimit() {
    return this.getStringAttribute('ingress_limit');
  }
  public set ingressLimit(value: string) {
    this._ingressLimit = value;
  }
  public resetIngressLimit() {
    this._ingressLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressLimitInput() {
    return this._ingressLimit;
  }

  // ingress_request - computed: false, optional: true, required: false
  private _ingressRequest?: string; 
  public get ingressRequest() {
    return this.getStringAttribute('ingress_request');
  }
  public set ingressRequest(value: string) {
    this._ingressRequest = value;
  }
  public resetIngressRequest() {
    this._ingressRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressRequestInput() {
    return this._ingressRequest;
  }
}
export interface DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClassResctrlQos {
  /**
  * LLC available range end for pods by percentage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#cat_range_end_percent DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#cat_range_end_percent}
  */
  readonly catRangeEndPercent?: number;
  /**
  * LLC available range start for pods by percentage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#cat_range_start_percent DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#cat_range_start_percent}
  */
  readonly catRangeStartPercent?: number;
  /**
  * Enable indicates whether the resctrl qos is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#enable DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * MBA percent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#mba_percent DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#mba_percent}
  */
  readonly mbaPercent?: number;
}

export function dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClassResctrlQosToTerraform(struct?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClassResctrlQos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cat_range_end_percent: cdktf.numberToTerraform(struct!.catRangeEndPercent),
    cat_range_start_percent: cdktf.numberToTerraform(struct!.catRangeStartPercent),
    enable: cdktf.booleanToTerraform(struct!.enable),
    mba_percent: cdktf.numberToTerraform(struct!.mbaPercent),
  }
}


export function dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClassResctrlQosToHclTerraform(struct?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClassResctrlQos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cat_range_end_percent: {
      value: cdktf.numberToHclTerraform(struct!.catRangeEndPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cat_range_start_percent: {
      value: cdktf.numberToHclTerraform(struct!.catRangeStartPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mba_percent: {
      value: cdktf.numberToHclTerraform(struct!.mbaPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClassResctrlQosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClassResctrlQos | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._catRangeEndPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.catRangeEndPercent = this._catRangeEndPercent;
    }
    if (this._catRangeStartPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.catRangeStartPercent = this._catRangeStartPercent;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._mbaPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.mbaPercent = this._mbaPercent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClassResctrlQos | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._catRangeEndPercent = undefined;
      this._catRangeStartPercent = undefined;
      this._enable = undefined;
      this._mbaPercent = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._catRangeEndPercent = value.catRangeEndPercent;
      this._catRangeStartPercent = value.catRangeStartPercent;
      this._enable = value.enable;
      this._mbaPercent = value.mbaPercent;
    }
  }

  // cat_range_end_percent - computed: false, optional: true, required: false
  private _catRangeEndPercent?: number; 
  public get catRangeEndPercent() {
    return this.getNumberAttribute('cat_range_end_percent');
  }
  public set catRangeEndPercent(value: number) {
    this._catRangeEndPercent = value;
  }
  public resetCatRangeEndPercent() {
    this._catRangeEndPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catRangeEndPercentInput() {
    return this._catRangeEndPercent;
  }

  // cat_range_start_percent - computed: false, optional: true, required: false
  private _catRangeStartPercent?: number; 
  public get catRangeStartPercent() {
    return this.getNumberAttribute('cat_range_start_percent');
  }
  public set catRangeStartPercent(value: number) {
    this._catRangeStartPercent = value;
  }
  public resetCatRangeStartPercent() {
    this._catRangeStartPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catRangeStartPercentInput() {
    return this._catRangeStartPercent;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // mba_percent - computed: false, optional: true, required: false
  private _mbaPercent?: number; 
  public get mbaPercent() {
    return this.getNumberAttribute('mba_percent');
  }
  public set mbaPercent(value: number) {
    this._mbaPercent = value;
  }
  public resetMbaPercent() {
    this._mbaPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mbaPercentInput() {
    return this._mbaPercent;
  }
}
export interface DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClass {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#blkio_qos DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#blkio_qos}
  */
  readonly blkioQos?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClassBlkioQos;
  /**
  * CPUQOSCfg stores node-level config of cpu qos
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#cpu_qos DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#cpu_qos}
  */
  readonly cpuQos?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClassCpuQos;
  /**
  * MemoryQOSCfg stores node-level config of memory qos
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#memory_qos DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#memory_qos}
  */
  readonly memoryQos?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClassMemoryQos;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#network_qos DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#network_qos}
  */
  readonly networkQos?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClassNetworkQos;
  /**
  * ResctrlQOSCfg stores node-level config of resctrl qos
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#resctrl_qos DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#resctrl_qos}
  */
  readonly resctrlQos?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClassResctrlQos;
}

export function dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClassToTerraform(struct?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClass | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blkio_qos: dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClassBlkioQosToTerraform(struct!.blkioQos),
    cpu_qos: dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClassCpuQosToTerraform(struct!.cpuQos),
    memory_qos: dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClassMemoryQosToTerraform(struct!.memoryQos),
    network_qos: dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClassNetworkQosToTerraform(struct!.networkQos),
    resctrl_qos: dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClassResctrlQosToTerraform(struct!.resctrlQos),
  }
}


export function dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClassToHclTerraform(struct?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClass | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blkio_qos: {
      value: dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClassBlkioQosToHclTerraform(struct!.blkioQos),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClassBlkioQos",
    },
    cpu_qos: {
      value: dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClassCpuQosToHclTerraform(struct!.cpuQos),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClassCpuQos",
    },
    memory_qos: {
      value: dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClassMemoryQosToHclTerraform(struct!.memoryQos),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClassMemoryQos",
    },
    network_qos: {
      value: dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClassNetworkQosToHclTerraform(struct!.networkQos),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClassNetworkQos",
    },
    resctrl_qos: {
      value: dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClassResctrlQosToHclTerraform(struct!.resctrlQos),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClassResctrlQos",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClassOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClass | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blkioQos?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blkioQos = this._blkioQos?.internalValue;
    }
    if (this._cpuQos?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuQos = this._cpuQos?.internalValue;
    }
    if (this._memoryQos?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryQos = this._memoryQos?.internalValue;
    }
    if (this._networkQos?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkQos = this._networkQos?.internalValue;
    }
    if (this._resctrlQos?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resctrlQos = this._resctrlQos?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClass | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._blkioQos.internalValue = undefined;
      this._cpuQos.internalValue = undefined;
      this._memoryQos.internalValue = undefined;
      this._networkQos.internalValue = undefined;
      this._resctrlQos.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._blkioQos.internalValue = value.blkioQos;
      this._cpuQos.internalValue = value.cpuQos;
      this._memoryQos.internalValue = value.memoryQos;
      this._networkQos.internalValue = value.networkQos;
      this._resctrlQos.internalValue = value.resctrlQos;
    }
  }

  // blkio_qos - computed: false, optional: true, required: false
  private _blkioQos = new DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClassBlkioQosOutputReference(this, "blkio_qos");
  public get blkioQos() {
    return this._blkioQos;
  }
  public putBlkioQos(value: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClassBlkioQos) {
    this._blkioQos.internalValue = value;
  }
  public resetBlkioQos() {
    this._blkioQos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blkioQosInput() {
    return this._blkioQos.internalValue;
  }

  // cpu_qos - computed: false, optional: true, required: false
  private _cpuQos = new DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClassCpuQosOutputReference(this, "cpu_qos");
  public get cpuQos() {
    return this._cpuQos;
  }
  public putCpuQos(value: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClassCpuQos) {
    this._cpuQos.internalValue = value;
  }
  public resetCpuQos() {
    this._cpuQos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuQosInput() {
    return this._cpuQos.internalValue;
  }

  // memory_qos - computed: false, optional: true, required: false
  private _memoryQos = new DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClassMemoryQosOutputReference(this, "memory_qos");
  public get memoryQos() {
    return this._memoryQos;
  }
  public putMemoryQos(value: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClassMemoryQos) {
    this._memoryQos.internalValue = value;
  }
  public resetMemoryQos() {
    this._memoryQos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryQosInput() {
    return this._memoryQos.internalValue;
  }

  // network_qos - computed: false, optional: true, required: false
  private _networkQos = new DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClassNetworkQosOutputReference(this, "network_qos");
  public get networkQos() {
    return this._networkQos;
  }
  public putNetworkQos(value: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClassNetworkQos) {
    this._networkQos.internalValue = value;
  }
  public resetNetworkQos() {
    this._networkQos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkQosInput() {
    return this._networkQos.internalValue;
  }

  // resctrl_qos - computed: false, optional: true, required: false
  private _resctrlQos = new DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClassResctrlQosOutputReference(this, "resctrl_qos");
  public get resctrlQos() {
    return this._resctrlQos;
  }
  public putResctrlQos(value: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClassResctrlQos) {
    this._resctrlQos.internalValue = value;
  }
  public resetResctrlQos() {
    this._resctrlQos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resctrlQosInput() {
    return this._resctrlQos.internalValue;
  }
}
export interface DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyPolicies {
  /**
  * applied policy for the CPU QoS, default = 'groupIdentity'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#cpu_policy DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#cpu_policy}
  */
  readonly cpuPolicy?: string;
  /**
  * applied policy for the Net QoS, default = 'tc'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#net_qos_policy DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#net_qos_policy}
  */
  readonly netQosPolicy?: string;
}

export function dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyPoliciesToTerraform(struct?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_policy: cdktf.stringToTerraform(struct!.cpuPolicy),
    net_qos_policy: cdktf.stringToTerraform(struct!.netQosPolicy),
  }
}


export function dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyPoliciesToHclTerraform(struct?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu_policy: {
      value: cdktf.stringToHclTerraform(struct!.cpuPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    net_qos_policy: {
      value: cdktf.stringToHclTerraform(struct!.netQosPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyPoliciesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuPolicy = this._cpuPolicy;
    }
    if (this._netQosPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.netQosPolicy = this._netQosPolicy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpuPolicy = undefined;
      this._netQosPolicy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cpuPolicy = value.cpuPolicy;
      this._netQosPolicy = value.netQosPolicy;
    }
  }

  // cpu_policy - computed: false, optional: true, required: false
  private _cpuPolicy?: string; 
  public get cpuPolicy() {
    return this.getStringAttribute('cpu_policy');
  }
  public set cpuPolicy(value: string) {
    this._cpuPolicy = value;
  }
  public resetCpuPolicy() {
    this._cpuPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuPolicyInput() {
    return this._cpuPolicy;
  }

  // net_qos_policy - computed: false, optional: true, required: false
  private _netQosPolicy?: string; 
  public get netQosPolicy() {
    return this.getStringAttribute('net_qos_policy');
  }
  public set netQosPolicy(value: string) {
    this._netQosPolicy = value;
  }
  public resetNetQosPolicy() {
    this._netQosPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netQosPolicyInput() {
    return this._netQosPolicy;
  }
}
export interface DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClassBlkioQosBlocksIoCfg {
  /**
  * configure the cost model of blkio-cost manually whether the user model is enabled. Default value: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#enable_user_model DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#enable_user_model}
  */
  readonly enableUserModel?: boolean | cdktf.IResolvable;
  /**
  * This field is used to set the weight of a sub-group. Default value: 100. Valid values: 1 to 100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#io_weight_percent DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#io_weight_percent}
  */
  readonly ioWeightPercent?: number;
  /**
  * the read BPS of user model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#model_read_bps DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#model_read_bps}
  */
  readonly modelReadBps?: number;
  /**
  * the random read iops of user model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#model_read_rand_iops DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#model_read_rand_iops}
  */
  readonly modelReadRandIops?: number;
  /**
  * the sequential read iops of user model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#model_read_seq_iops DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#model_read_seq_iops}
  */
  readonly modelReadSeqIops?: number;
  /**
  * the write BPS of user model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#model_write_bps DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#model_write_bps}
  */
  readonly modelWriteBps?: number;
  /**
  * the random write iops of user model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#model_write_rand_iops DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#model_write_rand_iops}
  */
  readonly modelWriteRandIops?: number;
  /**
  * the sequential write iops of user model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#model_write_seq_iops DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#model_write_seq_iops}
  */
  readonly modelWriteSeqIops?: number;
  /**
  * Throttling of throughput The value is set to 0, which indicates that the feature is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#read_bps DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#read_bps}
  */
  readonly readBps?: number;
  /**
  * Throttling of IOPS The value is set to 0, which indicates that the feature is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#read_iops DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#read_iops}
  */
  readonly readIops?: number;
  /**
  * Configure the weight-based throttling feature of blk-iocost Only used for RootClass After blk-iocost is enabled, the kernel calculates the proportion of requests that exceed the read or write latency threshold out of all requests. When the proportion is greater than the read or write latency percentile (95%), the kernel considers the disk to be saturated and reduces the rate at which requests are sent to the disk. the read latency threshold. Unit: microseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#read_latency DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#read_latency}
  */
  readonly readLatency?: number;
  /**
  * the read latency percentile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#read_latency_percent DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#read_latency_percent}
  */
  readonly readLatencyPercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#write_bps DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#write_bps}
  */
  readonly writeBps?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#write_iops DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#write_iops}
  */
  readonly writeIops?: number;
  /**
  * the write latency threshold. Unit: microseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#write_latency DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#write_latency}
  */
  readonly writeLatency?: number;
  /**
  * the write latency percentile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#write_latency_percent DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#write_latency_percent}
  */
  readonly writeLatencyPercent?: number;
}

export function dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClassBlkioQosBlocksIoCfgToTerraform(struct?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClassBlkioQosBlocksIoCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_user_model: cdktf.booleanToTerraform(struct!.enableUserModel),
    io_weight_percent: cdktf.numberToTerraform(struct!.ioWeightPercent),
    model_read_bps: cdktf.numberToTerraform(struct!.modelReadBps),
    model_read_rand_iops: cdktf.numberToTerraform(struct!.modelReadRandIops),
    model_read_seq_iops: cdktf.numberToTerraform(struct!.modelReadSeqIops),
    model_write_bps: cdktf.numberToTerraform(struct!.modelWriteBps),
    model_write_rand_iops: cdktf.numberToTerraform(struct!.modelWriteRandIops),
    model_write_seq_iops: cdktf.numberToTerraform(struct!.modelWriteSeqIops),
    read_bps: cdktf.numberToTerraform(struct!.readBps),
    read_iops: cdktf.numberToTerraform(struct!.readIops),
    read_latency: cdktf.numberToTerraform(struct!.readLatency),
    read_latency_percent: cdktf.numberToTerraform(struct!.readLatencyPercent),
    write_bps: cdktf.numberToTerraform(struct!.writeBps),
    write_iops: cdktf.numberToTerraform(struct!.writeIops),
    write_latency: cdktf.numberToTerraform(struct!.writeLatency),
    write_latency_percent: cdktf.numberToTerraform(struct!.writeLatencyPercent),
  }
}


export function dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClassBlkioQosBlocksIoCfgToHclTerraform(struct?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClassBlkioQosBlocksIoCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_user_model: {
      value: cdktf.booleanToHclTerraform(struct!.enableUserModel),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    io_weight_percent: {
      value: cdktf.numberToHclTerraform(struct!.ioWeightPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    model_read_bps: {
      value: cdktf.numberToHclTerraform(struct!.modelReadBps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    model_read_rand_iops: {
      value: cdktf.numberToHclTerraform(struct!.modelReadRandIops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    model_read_seq_iops: {
      value: cdktf.numberToHclTerraform(struct!.modelReadSeqIops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    model_write_bps: {
      value: cdktf.numberToHclTerraform(struct!.modelWriteBps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    model_write_rand_iops: {
      value: cdktf.numberToHclTerraform(struct!.modelWriteRandIops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    model_write_seq_iops: {
      value: cdktf.numberToHclTerraform(struct!.modelWriteSeqIops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    read_bps: {
      value: cdktf.numberToHclTerraform(struct!.readBps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    read_iops: {
      value: cdktf.numberToHclTerraform(struct!.readIops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    read_latency: {
      value: cdktf.numberToHclTerraform(struct!.readLatency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    read_latency_percent: {
      value: cdktf.numberToHclTerraform(struct!.readLatencyPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    write_bps: {
      value: cdktf.numberToHclTerraform(struct!.writeBps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    write_iops: {
      value: cdktf.numberToHclTerraform(struct!.writeIops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    write_latency: {
      value: cdktf.numberToHclTerraform(struct!.writeLatency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    write_latency_percent: {
      value: cdktf.numberToHclTerraform(struct!.writeLatencyPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClassBlkioQosBlocksIoCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClassBlkioQosBlocksIoCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableUserModel !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableUserModel = this._enableUserModel;
    }
    if (this._ioWeightPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.ioWeightPercent = this._ioWeightPercent;
    }
    if (this._modelReadBps !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelReadBps = this._modelReadBps;
    }
    if (this._modelReadRandIops !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelReadRandIops = this._modelReadRandIops;
    }
    if (this._modelReadSeqIops !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelReadSeqIops = this._modelReadSeqIops;
    }
    if (this._modelWriteBps !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelWriteBps = this._modelWriteBps;
    }
    if (this._modelWriteRandIops !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelWriteRandIops = this._modelWriteRandIops;
    }
    if (this._modelWriteSeqIops !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelWriteSeqIops = this._modelWriteSeqIops;
    }
    if (this._readBps !== undefined) {
      hasAnyValues = true;
      internalValueResult.readBps = this._readBps;
    }
    if (this._readIops !== undefined) {
      hasAnyValues = true;
      internalValueResult.readIops = this._readIops;
    }
    if (this._readLatency !== undefined) {
      hasAnyValues = true;
      internalValueResult.readLatency = this._readLatency;
    }
    if (this._readLatencyPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.readLatencyPercent = this._readLatencyPercent;
    }
    if (this._writeBps !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeBps = this._writeBps;
    }
    if (this._writeIops !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeIops = this._writeIops;
    }
    if (this._writeLatency !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeLatency = this._writeLatency;
    }
    if (this._writeLatencyPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeLatencyPercent = this._writeLatencyPercent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClassBlkioQosBlocksIoCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableUserModel = undefined;
      this._ioWeightPercent = undefined;
      this._modelReadBps = undefined;
      this._modelReadRandIops = undefined;
      this._modelReadSeqIops = undefined;
      this._modelWriteBps = undefined;
      this._modelWriteRandIops = undefined;
      this._modelWriteSeqIops = undefined;
      this._readBps = undefined;
      this._readIops = undefined;
      this._readLatency = undefined;
      this._readLatencyPercent = undefined;
      this._writeBps = undefined;
      this._writeIops = undefined;
      this._writeLatency = undefined;
      this._writeLatencyPercent = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableUserModel = value.enableUserModel;
      this._ioWeightPercent = value.ioWeightPercent;
      this._modelReadBps = value.modelReadBps;
      this._modelReadRandIops = value.modelReadRandIops;
      this._modelReadSeqIops = value.modelReadSeqIops;
      this._modelWriteBps = value.modelWriteBps;
      this._modelWriteRandIops = value.modelWriteRandIops;
      this._modelWriteSeqIops = value.modelWriteSeqIops;
      this._readBps = value.readBps;
      this._readIops = value.readIops;
      this._readLatency = value.readLatency;
      this._readLatencyPercent = value.readLatencyPercent;
      this._writeBps = value.writeBps;
      this._writeIops = value.writeIops;
      this._writeLatency = value.writeLatency;
      this._writeLatencyPercent = value.writeLatencyPercent;
    }
  }

  // enable_user_model - computed: false, optional: true, required: false
  private _enableUserModel?: boolean | cdktf.IResolvable; 
  public get enableUserModel() {
    return this.getBooleanAttribute('enable_user_model');
  }
  public set enableUserModel(value: boolean | cdktf.IResolvable) {
    this._enableUserModel = value;
  }
  public resetEnableUserModel() {
    this._enableUserModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableUserModelInput() {
    return this._enableUserModel;
  }

  // io_weight_percent - computed: false, optional: true, required: false
  private _ioWeightPercent?: number; 
  public get ioWeightPercent() {
    return this.getNumberAttribute('io_weight_percent');
  }
  public set ioWeightPercent(value: number) {
    this._ioWeightPercent = value;
  }
  public resetIoWeightPercent() {
    this._ioWeightPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ioWeightPercentInput() {
    return this._ioWeightPercent;
  }

  // model_read_bps - computed: false, optional: true, required: false
  private _modelReadBps?: number; 
  public get modelReadBps() {
    return this.getNumberAttribute('model_read_bps');
  }
  public set modelReadBps(value: number) {
    this._modelReadBps = value;
  }
  public resetModelReadBps() {
    this._modelReadBps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelReadBpsInput() {
    return this._modelReadBps;
  }

  // model_read_rand_iops - computed: false, optional: true, required: false
  private _modelReadRandIops?: number; 
  public get modelReadRandIops() {
    return this.getNumberAttribute('model_read_rand_iops');
  }
  public set modelReadRandIops(value: number) {
    this._modelReadRandIops = value;
  }
  public resetModelReadRandIops() {
    this._modelReadRandIops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelReadRandIopsInput() {
    return this._modelReadRandIops;
  }

  // model_read_seq_iops - computed: false, optional: true, required: false
  private _modelReadSeqIops?: number; 
  public get modelReadSeqIops() {
    return this.getNumberAttribute('model_read_seq_iops');
  }
  public set modelReadSeqIops(value: number) {
    this._modelReadSeqIops = value;
  }
  public resetModelReadSeqIops() {
    this._modelReadSeqIops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelReadSeqIopsInput() {
    return this._modelReadSeqIops;
  }

  // model_write_bps - computed: false, optional: true, required: false
  private _modelWriteBps?: number; 
  public get modelWriteBps() {
    return this.getNumberAttribute('model_write_bps');
  }
  public set modelWriteBps(value: number) {
    this._modelWriteBps = value;
  }
  public resetModelWriteBps() {
    this._modelWriteBps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelWriteBpsInput() {
    return this._modelWriteBps;
  }

  // model_write_rand_iops - computed: false, optional: true, required: false
  private _modelWriteRandIops?: number; 
  public get modelWriteRandIops() {
    return this.getNumberAttribute('model_write_rand_iops');
  }
  public set modelWriteRandIops(value: number) {
    this._modelWriteRandIops = value;
  }
  public resetModelWriteRandIops() {
    this._modelWriteRandIops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelWriteRandIopsInput() {
    return this._modelWriteRandIops;
  }

  // model_write_seq_iops - computed: false, optional: true, required: false
  private _modelWriteSeqIops?: number; 
  public get modelWriteSeqIops() {
    return this.getNumberAttribute('model_write_seq_iops');
  }
  public set modelWriteSeqIops(value: number) {
    this._modelWriteSeqIops = value;
  }
  public resetModelWriteSeqIops() {
    this._modelWriteSeqIops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelWriteSeqIopsInput() {
    return this._modelWriteSeqIops;
  }

  // read_bps - computed: false, optional: true, required: false
  private _readBps?: number; 
  public get readBps() {
    return this.getNumberAttribute('read_bps');
  }
  public set readBps(value: number) {
    this._readBps = value;
  }
  public resetReadBps() {
    this._readBps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readBpsInput() {
    return this._readBps;
  }

  // read_iops - computed: false, optional: true, required: false
  private _readIops?: number; 
  public get readIops() {
    return this.getNumberAttribute('read_iops');
  }
  public set readIops(value: number) {
    this._readIops = value;
  }
  public resetReadIops() {
    this._readIops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readIopsInput() {
    return this._readIops;
  }

  // read_latency - computed: false, optional: true, required: false
  private _readLatency?: number; 
  public get readLatency() {
    return this.getNumberAttribute('read_latency');
  }
  public set readLatency(value: number) {
    this._readLatency = value;
  }
  public resetReadLatency() {
    this._readLatency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readLatencyInput() {
    return this._readLatency;
  }

  // read_latency_percent - computed: false, optional: true, required: false
  private _readLatencyPercent?: number; 
  public get readLatencyPercent() {
    return this.getNumberAttribute('read_latency_percent');
  }
  public set readLatencyPercent(value: number) {
    this._readLatencyPercent = value;
  }
  public resetReadLatencyPercent() {
    this._readLatencyPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readLatencyPercentInput() {
    return this._readLatencyPercent;
  }

  // write_bps - computed: false, optional: true, required: false
  private _writeBps?: number; 
  public get writeBps() {
    return this.getNumberAttribute('write_bps');
  }
  public set writeBps(value: number) {
    this._writeBps = value;
  }
  public resetWriteBps() {
    this._writeBps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeBpsInput() {
    return this._writeBps;
  }

  // write_iops - computed: false, optional: true, required: false
  private _writeIops?: number; 
  public get writeIops() {
    return this.getNumberAttribute('write_iops');
  }
  public set writeIops(value: number) {
    this._writeIops = value;
  }
  public resetWriteIops() {
    this._writeIops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeIopsInput() {
    return this._writeIops;
  }

  // write_latency - computed: false, optional: true, required: false
  private _writeLatency?: number; 
  public get writeLatency() {
    return this.getNumberAttribute('write_latency');
  }
  public set writeLatency(value: number) {
    this._writeLatency = value;
  }
  public resetWriteLatency() {
    this._writeLatency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeLatencyInput() {
    return this._writeLatency;
  }

  // write_latency_percent - computed: false, optional: true, required: false
  private _writeLatencyPercent?: number; 
  public get writeLatencyPercent() {
    return this.getNumberAttribute('write_latency_percent');
  }
  public set writeLatencyPercent(value: number) {
    this._writeLatencyPercent = value;
  }
  public resetWriteLatencyPercent() {
    this._writeLatencyPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeLatencyPercentInput() {
    return this._writeLatencyPercent;
  }
}
export interface DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClassBlkioQosBlocks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#io_cfg DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#io_cfg}
  */
  readonly ioCfg?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClassBlkioQosBlocksIoCfg;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#name DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#type DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClassBlkioQosBlocksToTerraform(struct?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClassBlkioQosBlocks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    io_cfg: dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClassBlkioQosBlocksIoCfgToTerraform(struct!.ioCfg),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClassBlkioQosBlocksToHclTerraform(struct?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClassBlkioQosBlocks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    io_cfg: {
      value: dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClassBlkioQosBlocksIoCfgToHclTerraform(struct!.ioCfg),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClassBlkioQosBlocksIoCfg",
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

export class DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClassBlkioQosBlocksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClassBlkioQosBlocks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ioCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ioCfg = this._ioCfg?.internalValue;
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

  public set internalValue(value: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClassBlkioQosBlocks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ioCfg.internalValue = undefined;
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
      this._ioCfg.internalValue = value.ioCfg;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // io_cfg - computed: false, optional: true, required: false
  private _ioCfg = new DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClassBlkioQosBlocksIoCfgOutputReference(this, "io_cfg");
  public get ioCfg() {
    return this._ioCfg;
  }
  public putIoCfg(value: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClassBlkioQosBlocksIoCfg) {
    this._ioCfg.internalValue = value;
  }
  public resetIoCfg() {
    this._ioCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ioCfgInput() {
    return this._ioCfg.internalValue;
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
}

export class DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClassBlkioQosBlocksList extends cdktf.ComplexList {
  public internalValue? : DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClassBlkioQosBlocks[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClassBlkioQosBlocksOutputReference {
    return new DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClassBlkioQosBlocksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClassBlkioQos {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#blocks DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#blocks}
  */
  readonly blocks?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClassBlkioQosBlocks[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#enable DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
}

export function dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClassBlkioQosToTerraform(struct?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClassBlkioQos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blocks: cdktf.listMapper(dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClassBlkioQosBlocksToTerraform, false)(struct!.blocks),
    enable: cdktf.booleanToTerraform(struct!.enable),
  }
}


export function dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClassBlkioQosToHclTerraform(struct?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClassBlkioQos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blocks: {
      value: cdktf.listMapperHcl(dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClassBlkioQosBlocksToHclTerraform, false)(struct!.blocks),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClassBlkioQosBlocksList",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClassBlkioQosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClassBlkioQos | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blocks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blocks = this._blocks?.internalValue;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClassBlkioQos | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._blocks.internalValue = undefined;
      this._enable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._blocks.internalValue = value.blocks;
      this._enable = value.enable;
    }
  }

  // blocks - computed: false, optional: true, required: false
  private _blocks = new DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClassBlkioQosBlocksList(this, "blocks", false);
  public get blocks() {
    return this._blocks;
  }
  public putBlocks(value: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClassBlkioQosBlocks[] | cdktf.IResolvable) {
    this._blocks.internalValue = value;
  }
  public resetBlocks() {
    this._blocks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blocksInput() {
    return this._blocks.internalValue;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }
}
export interface DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClassCpuQos {
  /**
  * whether pods of the QoS class can expel the cgroup idle pods at the SMT-level. default = false If set to true, pods of this QoS will use a dedicated core sched group for noise clean with the SchedIdle pods. NOTE: It takes effect if cpuPolicy = 'coreSched'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#core_expeller DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#core_expeller}
  */
  readonly coreExpeller?: boolean | cdktf.IResolvable;
  /**
  * Enable indicates whether the cpu qos is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#enable DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * group identity value for pods, default = 0 NOTE: It takes effect if cpuPolicy = 'groupIdentity'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#group_identity DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#group_identity}
  */
  readonly groupIdentity?: number;
  /**
  * cpu.idle value for pods, default = 0. '1' means using SCHED_IDLE. CGroup Idle (introduced since mainline Linux 5.15): https://lore.kernel.org/lkml/162971078674.25758.15464079371945307825.tip-bot2@tip-bot2/#r NOTE: It takes effect if cpuPolicy = 'coreSched'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#sched_idle DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#sched_idle}
  */
  readonly schedIdle?: number;
}

export function dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClassCpuQosToTerraform(struct?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClassCpuQos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    core_expeller: cdktf.booleanToTerraform(struct!.coreExpeller),
    enable: cdktf.booleanToTerraform(struct!.enable),
    group_identity: cdktf.numberToTerraform(struct!.groupIdentity),
    sched_idle: cdktf.numberToTerraform(struct!.schedIdle),
  }
}


export function dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClassCpuQosToHclTerraform(struct?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClassCpuQos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    core_expeller: {
      value: cdktf.booleanToHclTerraform(struct!.coreExpeller),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    group_identity: {
      value: cdktf.numberToHclTerraform(struct!.groupIdentity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sched_idle: {
      value: cdktf.numberToHclTerraform(struct!.schedIdle),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClassCpuQosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClassCpuQos | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._coreExpeller !== undefined) {
      hasAnyValues = true;
      internalValueResult.coreExpeller = this._coreExpeller;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._groupIdentity !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupIdentity = this._groupIdentity;
    }
    if (this._schedIdle !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedIdle = this._schedIdle;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClassCpuQos | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._coreExpeller = undefined;
      this._enable = undefined;
      this._groupIdentity = undefined;
      this._schedIdle = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._coreExpeller = value.coreExpeller;
      this._enable = value.enable;
      this._groupIdentity = value.groupIdentity;
      this._schedIdle = value.schedIdle;
    }
  }

  // core_expeller - computed: false, optional: true, required: false
  private _coreExpeller?: boolean | cdktf.IResolvable; 
  public get coreExpeller() {
    return this.getBooleanAttribute('core_expeller');
  }
  public set coreExpeller(value: boolean | cdktf.IResolvable) {
    this._coreExpeller = value;
  }
  public resetCoreExpeller() {
    this._coreExpeller = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coreExpellerInput() {
    return this._coreExpeller;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // group_identity - computed: false, optional: true, required: false
  private _groupIdentity?: number; 
  public get groupIdentity() {
    return this.getNumberAttribute('group_identity');
  }
  public set groupIdentity(value: number) {
    this._groupIdentity = value;
  }
  public resetGroupIdentity() {
    this._groupIdentity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdentityInput() {
    return this._groupIdentity;
  }

  // sched_idle - computed: false, optional: true, required: false
  private _schedIdle?: number; 
  public get schedIdle() {
    return this.getNumberAttribute('sched_idle');
  }
  public set schedIdle(value: number) {
    this._schedIdle = value;
  }
  public resetSchedIdle() {
    this._schedIdle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedIdleInput() {
    return this._schedIdle;
  }
}
export interface DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClassMemoryQos {
  /**
  * Enable indicates whether the memory qos is enabled (default: false). This field is used for node-level control, while pod-level configuration is done with MemoryQOS and 'Policy' instead of an 'Enable' option. Please view the differences between MemoryQOSCfg and PodMemoryQOSConfig structs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#enable DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * LowLimitPercent specifies the lowLimitFactor percentage to calculate 'memory.low', which TRIES BEST protecting memory from global reclamation when memory usage does not exceed the low limit unless no unprotected memcg can be reclaimed. NOTE: 'memory.low' should be larger than 'memory.min'. If spec.requests.memory == spec.limits.memory, pod 'memory.low' and 'memory.high' become invalid, while 'memory.wmark_ratio' is still in effect. Close: 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#low_limit_percent DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#low_limit_percent}
  */
  readonly lowLimitPercent?: number;
  /**
  * memcg qos If enabled, memcg qos will be set by the agent, where some fields are implicitly calculated from pod spec. 1. 'memory.min' := spec.requests.memory * minLimitFactor / 100 (use 0 if requests.memory is not set) 2. 'memory.low' := spec.requests.memory * lowLimitFactor / 100 (use 0 if requests.memory is not set) 3. 'memory.limit_in_bytes' := spec.limits.memory (set $node.allocatable.memory if limits.memory is not set) 4. 'memory.high' := floor[(spec.requests.memory + throttlingFactor / 100 * (memory.limit_in_bytes or node allocatable memory - spec.requests.memory))/pageSize] * pageSize MinLimitPercent specifies the minLimitFactor percentage to calculate 'memory.min', which protects memory from global reclamation when memory usage does not exceed the min limit. Close: 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#min_limit_percent DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#min_limit_percent}
  */
  readonly minLimitPercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#oom_kill_group DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#oom_kill_group}
  */
  readonly oomKillGroup?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#priority DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#priority}
  */
  readonly priority?: number;
  /**
  * TODO: enhance the usages of oom priority and oom kill group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#priority_enable DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#priority_enable}
  */
  readonly priorityEnable?: number;
  /**
  * ThrottlingPercent specifies the throttlingFactor percentage to calculate 'memory.high' with pod memory.limits or node allocatable memory, which triggers memcg direct reclamation when memory usage exceeds. Lower the factor brings more heavier reclaim pressure. Close: 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#throttling_percent DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#throttling_percent}
  */
  readonly throttlingPercent?: number;
  /**
  * wmark_min_adj (Anolis OS required) WmarkMinAdj specifies 'memory.wmark_min_adj' which adjusts per-memcg threshold for global memory reclamation. Lower the factor brings later reclamation. The adjustment uses different formula for different value range. [-25, 0)：global_wmark_min' = global_wmark_min + (global_wmark_min - 0) * wmarkMinAdj (0, 50]：global_wmark_min' = global_wmark_min + (global_wmark_low - global_wmark_min) * wmarkMinAdj Close: [LSR:0, LS:0, BE:0]. Recommended: [LSR:-25, LS:-25, BE:50].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#wmark_min_adj DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#wmark_min_adj}
  */
  readonly wmarkMinAdj?: number;
  /**
  * wmark_ratio (Anolis OS required) Async memory reclamation is triggered when cgroup memory usage exceeds 'memory.wmark_high' and the reclamation stops when usage is below 'memory.wmark_low'. Basically, 'memory.wmark_high' := min(memory.high, memory.limit_in_bytes) * memory.memory.wmark_ratio 'memory.wmark_low' := min(memory.high, memory.limit_in_bytes) * (memory.wmark_ratio - memory.wmark_scale_factor) WmarkRatio specifies 'memory.wmark_ratio' that help calculate 'memory.wmark_high', which triggers async memory reclamation when memory usage exceeds. Close: 0. Recommended: 95.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#wmark_ratio DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#wmark_ratio}
  */
  readonly wmarkRatio?: number;
  /**
  * WmarkScalePermill specifies 'memory.wmark_scale_factor' that helps calculate 'memory.wmark_low', which stops async memory reclamation when memory usage belows. Close: 50. Recommended: 20.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#wmark_scale_permill DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#wmark_scale_permill}
  */
  readonly wmarkScalePermill?: number;
}

export function dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClassMemoryQosToTerraform(struct?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClassMemoryQos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    low_limit_percent: cdktf.numberToTerraform(struct!.lowLimitPercent),
    min_limit_percent: cdktf.numberToTerraform(struct!.minLimitPercent),
    oom_kill_group: cdktf.numberToTerraform(struct!.oomKillGroup),
    priority: cdktf.numberToTerraform(struct!.priority),
    priority_enable: cdktf.numberToTerraform(struct!.priorityEnable),
    throttling_percent: cdktf.numberToTerraform(struct!.throttlingPercent),
    wmark_min_adj: cdktf.numberToTerraform(struct!.wmarkMinAdj),
    wmark_ratio: cdktf.numberToTerraform(struct!.wmarkRatio),
    wmark_scale_permill: cdktf.numberToTerraform(struct!.wmarkScalePermill),
  }
}


export function dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClassMemoryQosToHclTerraform(struct?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClassMemoryQos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    low_limit_percent: {
      value: cdktf.numberToHclTerraform(struct!.lowLimitPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_limit_percent: {
      value: cdktf.numberToHclTerraform(struct!.minLimitPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    oom_kill_group: {
      value: cdktf.numberToHclTerraform(struct!.oomKillGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority_enable: {
      value: cdktf.numberToHclTerraform(struct!.priorityEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    throttling_percent: {
      value: cdktf.numberToHclTerraform(struct!.throttlingPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    wmark_min_adj: {
      value: cdktf.numberToHclTerraform(struct!.wmarkMinAdj),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    wmark_ratio: {
      value: cdktf.numberToHclTerraform(struct!.wmarkRatio),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    wmark_scale_permill: {
      value: cdktf.numberToHclTerraform(struct!.wmarkScalePermill),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClassMemoryQosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClassMemoryQos | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._lowLimitPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.lowLimitPercent = this._lowLimitPercent;
    }
    if (this._minLimitPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.minLimitPercent = this._minLimitPercent;
    }
    if (this._oomKillGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.oomKillGroup = this._oomKillGroup;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._priorityEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityEnable = this._priorityEnable;
    }
    if (this._throttlingPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.throttlingPercent = this._throttlingPercent;
    }
    if (this._wmarkMinAdj !== undefined) {
      hasAnyValues = true;
      internalValueResult.wmarkMinAdj = this._wmarkMinAdj;
    }
    if (this._wmarkRatio !== undefined) {
      hasAnyValues = true;
      internalValueResult.wmarkRatio = this._wmarkRatio;
    }
    if (this._wmarkScalePermill !== undefined) {
      hasAnyValues = true;
      internalValueResult.wmarkScalePermill = this._wmarkScalePermill;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClassMemoryQos | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._lowLimitPercent = undefined;
      this._minLimitPercent = undefined;
      this._oomKillGroup = undefined;
      this._priority = undefined;
      this._priorityEnable = undefined;
      this._throttlingPercent = undefined;
      this._wmarkMinAdj = undefined;
      this._wmarkRatio = undefined;
      this._wmarkScalePermill = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._lowLimitPercent = value.lowLimitPercent;
      this._minLimitPercent = value.minLimitPercent;
      this._oomKillGroup = value.oomKillGroup;
      this._priority = value.priority;
      this._priorityEnable = value.priorityEnable;
      this._throttlingPercent = value.throttlingPercent;
      this._wmarkMinAdj = value.wmarkMinAdj;
      this._wmarkRatio = value.wmarkRatio;
      this._wmarkScalePermill = value.wmarkScalePermill;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // low_limit_percent - computed: false, optional: true, required: false
  private _lowLimitPercent?: number; 
  public get lowLimitPercent() {
    return this.getNumberAttribute('low_limit_percent');
  }
  public set lowLimitPercent(value: number) {
    this._lowLimitPercent = value;
  }
  public resetLowLimitPercent() {
    this._lowLimitPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowLimitPercentInput() {
    return this._lowLimitPercent;
  }

  // min_limit_percent - computed: false, optional: true, required: false
  private _minLimitPercent?: number; 
  public get minLimitPercent() {
    return this.getNumberAttribute('min_limit_percent');
  }
  public set minLimitPercent(value: number) {
    this._minLimitPercent = value;
  }
  public resetMinLimitPercent() {
    this._minLimitPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minLimitPercentInput() {
    return this._minLimitPercent;
  }

  // oom_kill_group - computed: false, optional: true, required: false
  private _oomKillGroup?: number; 
  public get oomKillGroup() {
    return this.getNumberAttribute('oom_kill_group');
  }
  public set oomKillGroup(value: number) {
    this._oomKillGroup = value;
  }
  public resetOomKillGroup() {
    this._oomKillGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oomKillGroupInput() {
    return this._oomKillGroup;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // priority_enable - computed: false, optional: true, required: false
  private _priorityEnable?: number; 
  public get priorityEnable() {
    return this.getNumberAttribute('priority_enable');
  }
  public set priorityEnable(value: number) {
    this._priorityEnable = value;
  }
  public resetPriorityEnable() {
    this._priorityEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityEnableInput() {
    return this._priorityEnable;
  }

  // throttling_percent - computed: false, optional: true, required: false
  private _throttlingPercent?: number; 
  public get throttlingPercent() {
    return this.getNumberAttribute('throttling_percent');
  }
  public set throttlingPercent(value: number) {
    this._throttlingPercent = value;
  }
  public resetThrottlingPercent() {
    this._throttlingPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throttlingPercentInput() {
    return this._throttlingPercent;
  }

  // wmark_min_adj - computed: false, optional: true, required: false
  private _wmarkMinAdj?: number; 
  public get wmarkMinAdj() {
    return this.getNumberAttribute('wmark_min_adj');
  }
  public set wmarkMinAdj(value: number) {
    this._wmarkMinAdj = value;
  }
  public resetWmarkMinAdj() {
    this._wmarkMinAdj = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wmarkMinAdjInput() {
    return this._wmarkMinAdj;
  }

  // wmark_ratio - computed: false, optional: true, required: false
  private _wmarkRatio?: number; 
  public get wmarkRatio() {
    return this.getNumberAttribute('wmark_ratio');
  }
  public set wmarkRatio(value: number) {
    this._wmarkRatio = value;
  }
  public resetWmarkRatio() {
    this._wmarkRatio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wmarkRatioInput() {
    return this._wmarkRatio;
  }

  // wmark_scale_permill - computed: false, optional: true, required: false
  private _wmarkScalePermill?: number; 
  public get wmarkScalePermill() {
    return this.getNumberAttribute('wmark_scale_permill');
  }
  public set wmarkScalePermill(value: number) {
    this._wmarkScalePermill = value;
  }
  public resetWmarkScalePermill() {
    this._wmarkScalePermill = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wmarkScalePermillInput() {
    return this._wmarkScalePermill;
  }
}
export interface DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClassNetworkQos {
  /**
  * EgressLimit describes the maximum network bandwidth can be used in the egress direction, unit: bps(bytes per second), two expressions are supported，int and string, int: percentage based on total bandwidth，valid in 0-100 string: a specific network bandwidth value, eg: 50M.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#egress_limit DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#egress_limit}
  */
  readonly egressLimit?: string;
  /**
  * EgressRequest describes the minimum network bandwidth guaranteed in the egress direction. unit: bps(bytes per second), two expressions are supported，int and string, int: percentage based on total bandwidth，valid in 0-100 string: a specific network bandwidth value, eg: 50M.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#egress_request DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#egress_request}
  */
  readonly egressRequest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#enable DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * IngressLimit describes the maximum network bandwidth can be used in the ingress direction, unit: bps(bytes per second), two expressions are supported，int and string, int: percentage based on total bandwidth，valid in 0-100 string: a specific network bandwidth value, eg: 50M.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#ingress_limit DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#ingress_limit}
  */
  readonly ingressLimit?: string;
  /**
  * IngressRequest describes the minimum network bandwidth guaranteed in the ingress direction. unit: bps(bytes per second), two expressions are supported，int and string, int: percentage based on total bandwidth，valid in 0-100 string: a specific network bandwidth value, eg: 50M.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#ingress_request DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#ingress_request}
  */
  readonly ingressRequest?: string;
}

export function dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClassNetworkQosToTerraform(struct?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClassNetworkQos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    egress_limit: cdktf.stringToTerraform(struct!.egressLimit),
    egress_request: cdktf.stringToTerraform(struct!.egressRequest),
    enable: cdktf.booleanToTerraform(struct!.enable),
    ingress_limit: cdktf.stringToTerraform(struct!.ingressLimit),
    ingress_request: cdktf.stringToTerraform(struct!.ingressRequest),
  }
}


export function dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClassNetworkQosToHclTerraform(struct?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClassNetworkQos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    egress_limit: {
      value: cdktf.stringToHclTerraform(struct!.egressLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    egress_request: {
      value: cdktf.stringToHclTerraform(struct!.egressRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ingress_limit: {
      value: cdktf.stringToHclTerraform(struct!.ingressLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ingress_request: {
      value: cdktf.stringToHclTerraform(struct!.ingressRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClassNetworkQosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClassNetworkQos | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._egressLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.egressLimit = this._egressLimit;
    }
    if (this._egressRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.egressRequest = this._egressRequest;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._ingressLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressLimit = this._ingressLimit;
    }
    if (this._ingressRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressRequest = this._ingressRequest;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClassNetworkQos | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._egressLimit = undefined;
      this._egressRequest = undefined;
      this._enable = undefined;
      this._ingressLimit = undefined;
      this._ingressRequest = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._egressLimit = value.egressLimit;
      this._egressRequest = value.egressRequest;
      this._enable = value.enable;
      this._ingressLimit = value.ingressLimit;
      this._ingressRequest = value.ingressRequest;
    }
  }

  // egress_limit - computed: false, optional: true, required: false
  private _egressLimit?: string; 
  public get egressLimit() {
    return this.getStringAttribute('egress_limit');
  }
  public set egressLimit(value: string) {
    this._egressLimit = value;
  }
  public resetEgressLimit() {
    this._egressLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressLimitInput() {
    return this._egressLimit;
  }

  // egress_request - computed: false, optional: true, required: false
  private _egressRequest?: string; 
  public get egressRequest() {
    return this.getStringAttribute('egress_request');
  }
  public set egressRequest(value: string) {
    this._egressRequest = value;
  }
  public resetEgressRequest() {
    this._egressRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressRequestInput() {
    return this._egressRequest;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // ingress_limit - computed: false, optional: true, required: false
  private _ingressLimit?: string; 
  public get ingressLimit() {
    return this.getStringAttribute('ingress_limit');
  }
  public set ingressLimit(value: string) {
    this._ingressLimit = value;
  }
  public resetIngressLimit() {
    this._ingressLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressLimitInput() {
    return this._ingressLimit;
  }

  // ingress_request - computed: false, optional: true, required: false
  private _ingressRequest?: string; 
  public get ingressRequest() {
    return this.getStringAttribute('ingress_request');
  }
  public set ingressRequest(value: string) {
    this._ingressRequest = value;
  }
  public resetIngressRequest() {
    this._ingressRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressRequestInput() {
    return this._ingressRequest;
  }
}
export interface DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClassResctrlQos {
  /**
  * LLC available range end for pods by percentage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#cat_range_end_percent DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#cat_range_end_percent}
  */
  readonly catRangeEndPercent?: number;
  /**
  * LLC available range start for pods by percentage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#cat_range_start_percent DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#cat_range_start_percent}
  */
  readonly catRangeStartPercent?: number;
  /**
  * Enable indicates whether the resctrl qos is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#enable DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * MBA percent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#mba_percent DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#mba_percent}
  */
  readonly mbaPercent?: number;
}

export function dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClassResctrlQosToTerraform(struct?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClassResctrlQos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cat_range_end_percent: cdktf.numberToTerraform(struct!.catRangeEndPercent),
    cat_range_start_percent: cdktf.numberToTerraform(struct!.catRangeStartPercent),
    enable: cdktf.booleanToTerraform(struct!.enable),
    mba_percent: cdktf.numberToTerraform(struct!.mbaPercent),
  }
}


export function dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClassResctrlQosToHclTerraform(struct?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClassResctrlQos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cat_range_end_percent: {
      value: cdktf.numberToHclTerraform(struct!.catRangeEndPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cat_range_start_percent: {
      value: cdktf.numberToHclTerraform(struct!.catRangeStartPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mba_percent: {
      value: cdktf.numberToHclTerraform(struct!.mbaPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClassResctrlQosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClassResctrlQos | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._catRangeEndPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.catRangeEndPercent = this._catRangeEndPercent;
    }
    if (this._catRangeStartPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.catRangeStartPercent = this._catRangeStartPercent;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._mbaPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.mbaPercent = this._mbaPercent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClassResctrlQos | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._catRangeEndPercent = undefined;
      this._catRangeStartPercent = undefined;
      this._enable = undefined;
      this._mbaPercent = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._catRangeEndPercent = value.catRangeEndPercent;
      this._catRangeStartPercent = value.catRangeStartPercent;
      this._enable = value.enable;
      this._mbaPercent = value.mbaPercent;
    }
  }

  // cat_range_end_percent - computed: false, optional: true, required: false
  private _catRangeEndPercent?: number; 
  public get catRangeEndPercent() {
    return this.getNumberAttribute('cat_range_end_percent');
  }
  public set catRangeEndPercent(value: number) {
    this._catRangeEndPercent = value;
  }
  public resetCatRangeEndPercent() {
    this._catRangeEndPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catRangeEndPercentInput() {
    return this._catRangeEndPercent;
  }

  // cat_range_start_percent - computed: false, optional: true, required: false
  private _catRangeStartPercent?: number; 
  public get catRangeStartPercent() {
    return this.getNumberAttribute('cat_range_start_percent');
  }
  public set catRangeStartPercent(value: number) {
    this._catRangeStartPercent = value;
  }
  public resetCatRangeStartPercent() {
    this._catRangeStartPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catRangeStartPercentInput() {
    return this._catRangeStartPercent;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // mba_percent - computed: false, optional: true, required: false
  private _mbaPercent?: number; 
  public get mbaPercent() {
    return this.getNumberAttribute('mba_percent');
  }
  public set mbaPercent(value: number) {
    this._mbaPercent = value;
  }
  public resetMbaPercent() {
    this._mbaPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mbaPercentInput() {
    return this._mbaPercent;
  }
}
export interface DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClass {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#blkio_qos DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#blkio_qos}
  */
  readonly blkioQos?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClassBlkioQos;
  /**
  * CPUQOSCfg stores node-level config of cpu qos
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#cpu_qos DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#cpu_qos}
  */
  readonly cpuQos?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClassCpuQos;
  /**
  * MemoryQOSCfg stores node-level config of memory qos
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#memory_qos DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#memory_qos}
  */
  readonly memoryQos?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClassMemoryQos;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#network_qos DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#network_qos}
  */
  readonly networkQos?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClassNetworkQos;
  /**
  * ResctrlQOSCfg stores node-level config of resctrl qos
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#resctrl_qos DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#resctrl_qos}
  */
  readonly resctrlQos?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClassResctrlQos;
}

export function dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClassToTerraform(struct?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClass | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blkio_qos: dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClassBlkioQosToTerraform(struct!.blkioQos),
    cpu_qos: dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClassCpuQosToTerraform(struct!.cpuQos),
    memory_qos: dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClassMemoryQosToTerraform(struct!.memoryQos),
    network_qos: dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClassNetworkQosToTerraform(struct!.networkQos),
    resctrl_qos: dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClassResctrlQosToTerraform(struct!.resctrlQos),
  }
}


export function dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClassToHclTerraform(struct?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClass | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blkio_qos: {
      value: dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClassBlkioQosToHclTerraform(struct!.blkioQos),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClassBlkioQos",
    },
    cpu_qos: {
      value: dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClassCpuQosToHclTerraform(struct!.cpuQos),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClassCpuQos",
    },
    memory_qos: {
      value: dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClassMemoryQosToHclTerraform(struct!.memoryQos),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClassMemoryQos",
    },
    network_qos: {
      value: dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClassNetworkQosToHclTerraform(struct!.networkQos),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClassNetworkQos",
    },
    resctrl_qos: {
      value: dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClassResctrlQosToHclTerraform(struct!.resctrlQos),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClassResctrlQos",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClassOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClass | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blkioQos?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blkioQos = this._blkioQos?.internalValue;
    }
    if (this._cpuQos?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuQos = this._cpuQos?.internalValue;
    }
    if (this._memoryQos?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryQos = this._memoryQos?.internalValue;
    }
    if (this._networkQos?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkQos = this._networkQos?.internalValue;
    }
    if (this._resctrlQos?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resctrlQos = this._resctrlQos?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClass | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._blkioQos.internalValue = undefined;
      this._cpuQos.internalValue = undefined;
      this._memoryQos.internalValue = undefined;
      this._networkQos.internalValue = undefined;
      this._resctrlQos.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._blkioQos.internalValue = value.blkioQos;
      this._cpuQos.internalValue = value.cpuQos;
      this._memoryQos.internalValue = value.memoryQos;
      this._networkQos.internalValue = value.networkQos;
      this._resctrlQos.internalValue = value.resctrlQos;
    }
  }

  // blkio_qos - computed: false, optional: true, required: false
  private _blkioQos = new DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClassBlkioQosOutputReference(this, "blkio_qos");
  public get blkioQos() {
    return this._blkioQos;
  }
  public putBlkioQos(value: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClassBlkioQos) {
    this._blkioQos.internalValue = value;
  }
  public resetBlkioQos() {
    this._blkioQos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blkioQosInput() {
    return this._blkioQos.internalValue;
  }

  // cpu_qos - computed: false, optional: true, required: false
  private _cpuQos = new DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClassCpuQosOutputReference(this, "cpu_qos");
  public get cpuQos() {
    return this._cpuQos;
  }
  public putCpuQos(value: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClassCpuQos) {
    this._cpuQos.internalValue = value;
  }
  public resetCpuQos() {
    this._cpuQos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuQosInput() {
    return this._cpuQos.internalValue;
  }

  // memory_qos - computed: false, optional: true, required: false
  private _memoryQos = new DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClassMemoryQosOutputReference(this, "memory_qos");
  public get memoryQos() {
    return this._memoryQos;
  }
  public putMemoryQos(value: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClassMemoryQos) {
    this._memoryQos.internalValue = value;
  }
  public resetMemoryQos() {
    this._memoryQos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryQosInput() {
    return this._memoryQos.internalValue;
  }

  // network_qos - computed: false, optional: true, required: false
  private _networkQos = new DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClassNetworkQosOutputReference(this, "network_qos");
  public get networkQos() {
    return this._networkQos;
  }
  public putNetworkQos(value: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClassNetworkQos) {
    this._networkQos.internalValue = value;
  }
  public resetNetworkQos() {
    this._networkQos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkQosInput() {
    return this._networkQos.internalValue;
  }

  // resctrl_qos - computed: false, optional: true, required: false
  private _resctrlQos = new DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClassResctrlQosOutputReference(this, "resctrl_qos");
  public get resctrlQos() {
    return this._resctrlQos;
  }
  public putResctrlQos(value: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClassResctrlQos) {
    this._resctrlQos.internalValue = value;
  }
  public resetResctrlQos() {
    this._resctrlQos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resctrlQosInput() {
    return this._resctrlQos.internalValue;
  }
}
export interface DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategy {
  /**
  * ResourceQOS for BE pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#be_class DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#be_class}
  */
  readonly beClass?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClass;
  /**
  * ResourceQOS for root cgroup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#cgroup_root DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#cgroup_root}
  */
  readonly cgroupRoot?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRoot;
  /**
  * ResourceQOS for LS pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#ls_class DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#ls_class}
  */
  readonly lsClass?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClass;
  /**
  * ResourceQOS for LSR pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#lsr_class DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#lsr_class}
  */
  readonly lsrClass?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClass;
  /**
  * Policies of pod QoS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#policies DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#policies}
  */
  readonly policies?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyPolicies;
  /**
  * ResourceQOS for system pods
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#system_class DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#system_class}
  */
  readonly systemClass?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClass;
}

export function dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyToTerraform(struct?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    be_class: dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClassToTerraform(struct!.beClass),
    cgroup_root: dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRootToTerraform(struct!.cgroupRoot),
    ls_class: dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClassToTerraform(struct!.lsClass),
    lsr_class: dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClassToTerraform(struct!.lsrClass),
    policies: dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyPoliciesToTerraform(struct!.policies),
    system_class: dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClassToTerraform(struct!.systemClass),
  }
}


export function dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyToHclTerraform(struct?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    be_class: {
      value: dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClassToHclTerraform(struct!.beClass),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClass",
    },
    cgroup_root: {
      value: dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRootToHclTerraform(struct!.cgroupRoot),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRoot",
    },
    ls_class: {
      value: dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClassToHclTerraform(struct!.lsClass),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClass",
    },
    lsr_class: {
      value: dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClassToHclTerraform(struct!.lsrClass),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClass",
    },
    policies: {
      value: dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyPoliciesToHclTerraform(struct!.policies),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyPolicies",
    },
    system_class: {
      value: dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClassToHclTerraform(struct!.systemClass),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClass",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._beClass?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.beClass = this._beClass?.internalValue;
    }
    if (this._cgroupRoot?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cgroupRoot = this._cgroupRoot?.internalValue;
    }
    if (this._lsClass?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lsClass = this._lsClass?.internalValue;
    }
    if (this._lsrClass?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lsrClass = this._lsrClass?.internalValue;
    }
    if (this._policies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policies = this._policies?.internalValue;
    }
    if (this._systemClass?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemClass = this._systemClass?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._beClass.internalValue = undefined;
      this._cgroupRoot.internalValue = undefined;
      this._lsClass.internalValue = undefined;
      this._lsrClass.internalValue = undefined;
      this._policies.internalValue = undefined;
      this._systemClass.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._beClass.internalValue = value.beClass;
      this._cgroupRoot.internalValue = value.cgroupRoot;
      this._lsClass.internalValue = value.lsClass;
      this._lsrClass.internalValue = value.lsrClass;
      this._policies.internalValue = value.policies;
      this._systemClass.internalValue = value.systemClass;
    }
  }

  // be_class - computed: false, optional: true, required: false
  private _beClass = new DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClassOutputReference(this, "be_class");
  public get beClass() {
    return this._beClass;
  }
  public putBeClass(value: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyBeClass) {
    this._beClass.internalValue = value;
  }
  public resetBeClass() {
    this._beClass.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beClassInput() {
    return this._beClass.internalValue;
  }

  // cgroup_root - computed: false, optional: true, required: false
  private _cgroupRoot = new DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRootOutputReference(this, "cgroup_root");
  public get cgroupRoot() {
    return this._cgroupRoot;
  }
  public putCgroupRoot(value: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyCgroupRoot) {
    this._cgroupRoot.internalValue = value;
  }
  public resetCgroupRoot() {
    this._cgroupRoot.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cgroupRootInput() {
    return this._cgroupRoot.internalValue;
  }

  // ls_class - computed: false, optional: true, required: false
  private _lsClass = new DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClassOutputReference(this, "ls_class");
  public get lsClass() {
    return this._lsClass;
  }
  public putLsClass(value: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsClass) {
    this._lsClass.internalValue = value;
  }
  public resetLsClass() {
    this._lsClass.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lsClassInput() {
    return this._lsClass.internalValue;
  }

  // lsr_class - computed: false, optional: true, required: false
  private _lsrClass = new DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClassOutputReference(this, "lsr_class");
  public get lsrClass() {
    return this._lsrClass;
  }
  public putLsrClass(value: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyLsrClass) {
    this._lsrClass.internalValue = value;
  }
  public resetLsrClass() {
    this._lsrClass.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lsrClassInput() {
    return this._lsrClass.internalValue;
  }

  // policies - computed: false, optional: true, required: false
  private _policies = new DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyPoliciesOutputReference(this, "policies");
  public get policies() {
    return this._policies;
  }
  public putPolicies(value: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyPolicies) {
    this._policies.internalValue = value;
  }
  public resetPolicies() {
    this._policies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policiesInput() {
    return this._policies.internalValue;
  }

  // system_class - computed: false, optional: true, required: false
  private _systemClass = new DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClassOutputReference(this, "system_class");
  public get systemClass() {
    return this._systemClass;
  }
  public putSystemClass(value: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategySystemClass) {
    this._systemClass.internalValue = value;
  }
  public resetSystemClass() {
    this._systemClass.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemClassInput() {
    return this._systemClass.internalValue;
  }
}
export interface DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceUsedThresholdWithBe {
  /**
  * be.satisfactionRate = be.CPURealLimit/be.CPURequest; be.cpuUsage = be.CPUUsed/be.CPURealLimit if be.satisfactionRate < CPUEvictBESatisfactionLowerPercent/100 && be.usage >= CPUEvictBEUsageThresholdPercent/100, then start to evict pod, and will evict to ${CPUEvictBESatisfactionUpperPercent}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#cpu_evict_be_satisfaction_lower_percent DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#cpu_evict_be_satisfaction_lower_percent}
  */
  readonly cpuEvictBeSatisfactionLowerPercent?: number;
  /**
  * be.satisfactionRate = be.CPURealLimit/be.CPURequest if be.satisfactionRate > CPUEvictBESatisfactionUpperPercent/100, then stop to evict.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#cpu_evict_be_satisfaction_upper_percent DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#cpu_evict_be_satisfaction_upper_percent}
  */
  readonly cpuEvictBeSatisfactionUpperPercent?: number;
  /**
  * if be.cpuUsage >= CPUEvictBEUsageThresholdPercent/100, then start to calculate the resources need to be released.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#cpu_evict_be_usage_threshold_percent DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#cpu_evict_be_usage_threshold_percent}
  */
  readonly cpuEvictBeUsageThresholdPercent?: number;
  /**
  * CPUEvictPolicy defines the policy for the BECPUEvict feature. Default: 'evictByRealLimit'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#cpu_evict_policy DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#cpu_evict_policy}
  */
  readonly cpuEvictPolicy?: string;
  /**
  * when avg(cpuusage) > CPUEvictThresholdPercent, will start to evict pod by cpu, and avg(cpuusage) is calculated based on the most recent CPUEvictTimeWindowSeconds data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#cpu_evict_time_window_seconds DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#cpu_evict_time_window_seconds}
  */
  readonly cpuEvictTimeWindowSeconds?: number;
  /**
  * CPUSuppressPolicy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#cpu_suppress_policy DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#cpu_suppress_policy}
  */
  readonly cpuSuppressPolicy?: string;
  /**
  * cpu suppress threshold percentage (0,100), default = 65
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#cpu_suppress_threshold_percent DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#cpu_suppress_threshold_percent}
  */
  readonly cpuSuppressThresholdPercent?: number;
  /**
  * whether the strategy is enabled, default = false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#enable DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * lower: memory release util usage under MemoryEvictLowerPercent, default = MemoryEvictThresholdPercent - 2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#memory_evict_lower_percent DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#memory_evict_lower_percent}
  */
  readonly memoryEvictLowerPercent?: number;
  /**
  * upper: memory evict threshold percentage (0,100), default = 70
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#memory_evict_threshold_percent DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#memory_evict_threshold_percent}
  */
  readonly memoryEvictThresholdPercent?: number;
}

export function dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceUsedThresholdWithBeToTerraform(struct?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceUsedThresholdWithBe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_evict_be_satisfaction_lower_percent: cdktf.numberToTerraform(struct!.cpuEvictBeSatisfactionLowerPercent),
    cpu_evict_be_satisfaction_upper_percent: cdktf.numberToTerraform(struct!.cpuEvictBeSatisfactionUpperPercent),
    cpu_evict_be_usage_threshold_percent: cdktf.numberToTerraform(struct!.cpuEvictBeUsageThresholdPercent),
    cpu_evict_policy: cdktf.stringToTerraform(struct!.cpuEvictPolicy),
    cpu_evict_time_window_seconds: cdktf.numberToTerraform(struct!.cpuEvictTimeWindowSeconds),
    cpu_suppress_policy: cdktf.stringToTerraform(struct!.cpuSuppressPolicy),
    cpu_suppress_threshold_percent: cdktf.numberToTerraform(struct!.cpuSuppressThresholdPercent),
    enable: cdktf.booleanToTerraform(struct!.enable),
    memory_evict_lower_percent: cdktf.numberToTerraform(struct!.memoryEvictLowerPercent),
    memory_evict_threshold_percent: cdktf.numberToTerraform(struct!.memoryEvictThresholdPercent),
  }
}


export function dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceUsedThresholdWithBeToHclTerraform(struct?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceUsedThresholdWithBe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu_evict_be_satisfaction_lower_percent: {
      value: cdktf.numberToHclTerraform(struct!.cpuEvictBeSatisfactionLowerPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu_evict_be_satisfaction_upper_percent: {
      value: cdktf.numberToHclTerraform(struct!.cpuEvictBeSatisfactionUpperPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu_evict_be_usage_threshold_percent: {
      value: cdktf.numberToHclTerraform(struct!.cpuEvictBeUsageThresholdPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu_evict_policy: {
      value: cdktf.stringToHclTerraform(struct!.cpuEvictPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cpu_evict_time_window_seconds: {
      value: cdktf.numberToHclTerraform(struct!.cpuEvictTimeWindowSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu_suppress_policy: {
      value: cdktf.stringToHclTerraform(struct!.cpuSuppressPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cpu_suppress_threshold_percent: {
      value: cdktf.numberToHclTerraform(struct!.cpuSuppressThresholdPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    memory_evict_lower_percent: {
      value: cdktf.numberToHclTerraform(struct!.memoryEvictLowerPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    memory_evict_threshold_percent: {
      value: cdktf.numberToHclTerraform(struct!.memoryEvictThresholdPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceUsedThresholdWithBeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceUsedThresholdWithBe | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuEvictBeSatisfactionLowerPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuEvictBeSatisfactionLowerPercent = this._cpuEvictBeSatisfactionLowerPercent;
    }
    if (this._cpuEvictBeSatisfactionUpperPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuEvictBeSatisfactionUpperPercent = this._cpuEvictBeSatisfactionUpperPercent;
    }
    if (this._cpuEvictBeUsageThresholdPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuEvictBeUsageThresholdPercent = this._cpuEvictBeUsageThresholdPercent;
    }
    if (this._cpuEvictPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuEvictPolicy = this._cpuEvictPolicy;
    }
    if (this._cpuEvictTimeWindowSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuEvictTimeWindowSeconds = this._cpuEvictTimeWindowSeconds;
    }
    if (this._cpuSuppressPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuSuppressPolicy = this._cpuSuppressPolicy;
    }
    if (this._cpuSuppressThresholdPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuSuppressThresholdPercent = this._cpuSuppressThresholdPercent;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._memoryEvictLowerPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryEvictLowerPercent = this._memoryEvictLowerPercent;
    }
    if (this._memoryEvictThresholdPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryEvictThresholdPercent = this._memoryEvictThresholdPercent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceUsedThresholdWithBe | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpuEvictBeSatisfactionLowerPercent = undefined;
      this._cpuEvictBeSatisfactionUpperPercent = undefined;
      this._cpuEvictBeUsageThresholdPercent = undefined;
      this._cpuEvictPolicy = undefined;
      this._cpuEvictTimeWindowSeconds = undefined;
      this._cpuSuppressPolicy = undefined;
      this._cpuSuppressThresholdPercent = undefined;
      this._enable = undefined;
      this._memoryEvictLowerPercent = undefined;
      this._memoryEvictThresholdPercent = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cpuEvictBeSatisfactionLowerPercent = value.cpuEvictBeSatisfactionLowerPercent;
      this._cpuEvictBeSatisfactionUpperPercent = value.cpuEvictBeSatisfactionUpperPercent;
      this._cpuEvictBeUsageThresholdPercent = value.cpuEvictBeUsageThresholdPercent;
      this._cpuEvictPolicy = value.cpuEvictPolicy;
      this._cpuEvictTimeWindowSeconds = value.cpuEvictTimeWindowSeconds;
      this._cpuSuppressPolicy = value.cpuSuppressPolicy;
      this._cpuSuppressThresholdPercent = value.cpuSuppressThresholdPercent;
      this._enable = value.enable;
      this._memoryEvictLowerPercent = value.memoryEvictLowerPercent;
      this._memoryEvictThresholdPercent = value.memoryEvictThresholdPercent;
    }
  }

  // cpu_evict_be_satisfaction_lower_percent - computed: false, optional: true, required: false
  private _cpuEvictBeSatisfactionLowerPercent?: number; 
  public get cpuEvictBeSatisfactionLowerPercent() {
    return this.getNumberAttribute('cpu_evict_be_satisfaction_lower_percent');
  }
  public set cpuEvictBeSatisfactionLowerPercent(value: number) {
    this._cpuEvictBeSatisfactionLowerPercent = value;
  }
  public resetCpuEvictBeSatisfactionLowerPercent() {
    this._cpuEvictBeSatisfactionLowerPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuEvictBeSatisfactionLowerPercentInput() {
    return this._cpuEvictBeSatisfactionLowerPercent;
  }

  // cpu_evict_be_satisfaction_upper_percent - computed: false, optional: true, required: false
  private _cpuEvictBeSatisfactionUpperPercent?: number; 
  public get cpuEvictBeSatisfactionUpperPercent() {
    return this.getNumberAttribute('cpu_evict_be_satisfaction_upper_percent');
  }
  public set cpuEvictBeSatisfactionUpperPercent(value: number) {
    this._cpuEvictBeSatisfactionUpperPercent = value;
  }
  public resetCpuEvictBeSatisfactionUpperPercent() {
    this._cpuEvictBeSatisfactionUpperPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuEvictBeSatisfactionUpperPercentInput() {
    return this._cpuEvictBeSatisfactionUpperPercent;
  }

  // cpu_evict_be_usage_threshold_percent - computed: false, optional: true, required: false
  private _cpuEvictBeUsageThresholdPercent?: number; 
  public get cpuEvictBeUsageThresholdPercent() {
    return this.getNumberAttribute('cpu_evict_be_usage_threshold_percent');
  }
  public set cpuEvictBeUsageThresholdPercent(value: number) {
    this._cpuEvictBeUsageThresholdPercent = value;
  }
  public resetCpuEvictBeUsageThresholdPercent() {
    this._cpuEvictBeUsageThresholdPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuEvictBeUsageThresholdPercentInput() {
    return this._cpuEvictBeUsageThresholdPercent;
  }

  // cpu_evict_policy - computed: false, optional: true, required: false
  private _cpuEvictPolicy?: string; 
  public get cpuEvictPolicy() {
    return this.getStringAttribute('cpu_evict_policy');
  }
  public set cpuEvictPolicy(value: string) {
    this._cpuEvictPolicy = value;
  }
  public resetCpuEvictPolicy() {
    this._cpuEvictPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuEvictPolicyInput() {
    return this._cpuEvictPolicy;
  }

  // cpu_evict_time_window_seconds - computed: false, optional: true, required: false
  private _cpuEvictTimeWindowSeconds?: number; 
  public get cpuEvictTimeWindowSeconds() {
    return this.getNumberAttribute('cpu_evict_time_window_seconds');
  }
  public set cpuEvictTimeWindowSeconds(value: number) {
    this._cpuEvictTimeWindowSeconds = value;
  }
  public resetCpuEvictTimeWindowSeconds() {
    this._cpuEvictTimeWindowSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuEvictTimeWindowSecondsInput() {
    return this._cpuEvictTimeWindowSeconds;
  }

  // cpu_suppress_policy - computed: false, optional: true, required: false
  private _cpuSuppressPolicy?: string; 
  public get cpuSuppressPolicy() {
    return this.getStringAttribute('cpu_suppress_policy');
  }
  public set cpuSuppressPolicy(value: string) {
    this._cpuSuppressPolicy = value;
  }
  public resetCpuSuppressPolicy() {
    this._cpuSuppressPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuSuppressPolicyInput() {
    return this._cpuSuppressPolicy;
  }

  // cpu_suppress_threshold_percent - computed: false, optional: true, required: false
  private _cpuSuppressThresholdPercent?: number; 
  public get cpuSuppressThresholdPercent() {
    return this.getNumberAttribute('cpu_suppress_threshold_percent');
  }
  public set cpuSuppressThresholdPercent(value: number) {
    this._cpuSuppressThresholdPercent = value;
  }
  public resetCpuSuppressThresholdPercent() {
    this._cpuSuppressThresholdPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuSuppressThresholdPercentInput() {
    return this._cpuSuppressThresholdPercent;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // memory_evict_lower_percent - computed: false, optional: true, required: false
  private _memoryEvictLowerPercent?: number; 
  public get memoryEvictLowerPercent() {
    return this.getNumberAttribute('memory_evict_lower_percent');
  }
  public set memoryEvictLowerPercent(value: number) {
    this._memoryEvictLowerPercent = value;
  }
  public resetMemoryEvictLowerPercent() {
    this._memoryEvictLowerPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryEvictLowerPercentInput() {
    return this._memoryEvictLowerPercent;
  }

  // memory_evict_threshold_percent - computed: false, optional: true, required: false
  private _memoryEvictThresholdPercent?: number; 
  public get memoryEvictThresholdPercent() {
    return this.getNumberAttribute('memory_evict_threshold_percent');
  }
  public set memoryEvictThresholdPercent(value: number) {
    this._memoryEvictThresholdPercent = value;
  }
  public resetMemoryEvictThresholdPercent() {
    this._memoryEvictThresholdPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryEvictThresholdPercentInput() {
    return this._memoryEvictThresholdPercent;
  }
}
export interface DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecSystemStrategy {
  /**
  * /sys/kernel/mm/memcg_reaper/reap_background
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#memcg_reap_back_ground DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#memcg_reap_back_ground}
  */
  readonly memcgReapBackGround?: number;
  /**
  * for /proc/sys/vm/min_free_kbytes, min_free_kbytes = minFreeKbytesFactor * nodeTotalMemory /10000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#min_free_kbytes_factor DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#min_free_kbytes_factor}
  */
  readonly minFreeKbytesFactor?: number;
  /**
  * TotalNetworkBandwidth indicates the overall network bandwidth, cluster manager can set this field, and default value taken from /sys/class/net/${NIC_NAME}/speed, unit: Mbps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#total_network_bandwidth DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#total_network_bandwidth}
  */
  readonly totalNetworkBandwidth?: string;
  /**
  * /proc/sys/vm/watermark_scale_factor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#watermark_scale_factor DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#watermark_scale_factor}
  */
  readonly watermarkScaleFactor?: number;
}

export function dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecSystemStrategyToTerraform(struct?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecSystemStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    memcg_reap_back_ground: cdktf.numberToTerraform(struct!.memcgReapBackGround),
    min_free_kbytes_factor: cdktf.numberToTerraform(struct!.minFreeKbytesFactor),
    total_network_bandwidth: cdktf.stringToTerraform(struct!.totalNetworkBandwidth),
    watermark_scale_factor: cdktf.numberToTerraform(struct!.watermarkScaleFactor),
  }
}


export function dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecSystemStrategyToHclTerraform(struct?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecSystemStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    memcg_reap_back_ground: {
      value: cdktf.numberToHclTerraform(struct!.memcgReapBackGround),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_free_kbytes_factor: {
      value: cdktf.numberToHclTerraform(struct!.minFreeKbytesFactor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_network_bandwidth: {
      value: cdktf.stringToHclTerraform(struct!.totalNetworkBandwidth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    watermark_scale_factor: {
      value: cdktf.numberToHclTerraform(struct!.watermarkScaleFactor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecSystemStrategyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecSystemStrategy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._memcgReapBackGround !== undefined) {
      hasAnyValues = true;
      internalValueResult.memcgReapBackGround = this._memcgReapBackGround;
    }
    if (this._minFreeKbytesFactor !== undefined) {
      hasAnyValues = true;
      internalValueResult.minFreeKbytesFactor = this._minFreeKbytesFactor;
    }
    if (this._totalNetworkBandwidth !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalNetworkBandwidth = this._totalNetworkBandwidth;
    }
    if (this._watermarkScaleFactor !== undefined) {
      hasAnyValues = true;
      internalValueResult.watermarkScaleFactor = this._watermarkScaleFactor;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecSystemStrategy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._memcgReapBackGround = undefined;
      this._minFreeKbytesFactor = undefined;
      this._totalNetworkBandwidth = undefined;
      this._watermarkScaleFactor = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._memcgReapBackGround = value.memcgReapBackGround;
      this._minFreeKbytesFactor = value.minFreeKbytesFactor;
      this._totalNetworkBandwidth = value.totalNetworkBandwidth;
      this._watermarkScaleFactor = value.watermarkScaleFactor;
    }
  }

  // memcg_reap_back_ground - computed: false, optional: true, required: false
  private _memcgReapBackGround?: number; 
  public get memcgReapBackGround() {
    return this.getNumberAttribute('memcg_reap_back_ground');
  }
  public set memcgReapBackGround(value: number) {
    this._memcgReapBackGround = value;
  }
  public resetMemcgReapBackGround() {
    this._memcgReapBackGround = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memcgReapBackGroundInput() {
    return this._memcgReapBackGround;
  }

  // min_free_kbytes_factor - computed: false, optional: true, required: false
  private _minFreeKbytesFactor?: number; 
  public get minFreeKbytesFactor() {
    return this.getNumberAttribute('min_free_kbytes_factor');
  }
  public set minFreeKbytesFactor(value: number) {
    this._minFreeKbytesFactor = value;
  }
  public resetMinFreeKbytesFactor() {
    this._minFreeKbytesFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minFreeKbytesFactorInput() {
    return this._minFreeKbytesFactor;
  }

  // total_network_bandwidth - computed: false, optional: true, required: false
  private _totalNetworkBandwidth?: string; 
  public get totalNetworkBandwidth() {
    return this.getStringAttribute('total_network_bandwidth');
  }
  public set totalNetworkBandwidth(value: string) {
    this._totalNetworkBandwidth = value;
  }
  public resetTotalNetworkBandwidth() {
    this._totalNetworkBandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalNetworkBandwidthInput() {
    return this._totalNetworkBandwidth;
  }

  // watermark_scale_factor - computed: false, optional: true, required: false
  private _watermarkScaleFactor?: number; 
  public get watermarkScaleFactor() {
    return this.getNumberAttribute('watermark_scale_factor');
  }
  public set watermarkScaleFactor(value: number) {
    this._watermarkScaleFactor = value;
  }
  public resetWatermarkScaleFactor() {
    this._watermarkScaleFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get watermarkScaleFactorInput() {
    return this._watermarkScaleFactor;
  }
}
export interface DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpec {
  /**
  * CPU Burst Strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#cpu_burst_strategy DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#cpu_burst_strategy}
  */
  readonly cpuBurstStrategy?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecCpuBurstStrategy;
  /**
  * Third party extensions for NodeSLO
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#extensions DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#extensions}
  */
  readonly extensions?: { [key: string]: string };
  /**
  * QoS management for out-of-band applications
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#host_applications DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#host_applications}
  */
  readonly hostApplications?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecHostApplications[] | cdktf.IResolvable;
  /**
  * QoS config strategy for pods of different qos-class
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#resource_qos_strategy DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#resource_qos_strategy}
  */
  readonly resourceQosStrategy?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategy;
  /**
  * BE pods will be limited if node resource usage overload
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#resource_used_threshold_with_be DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#resource_used_threshold_with_be}
  */
  readonly resourceUsedThresholdWithBe?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceUsedThresholdWithBe;
  /**
  * node global system config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#system_strategy DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest#system_strategy}
  */
  readonly systemStrategy?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecSystemStrategy;
}

export function dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecToTerraform(struct?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_burst_strategy: dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecCpuBurstStrategyToTerraform(struct!.cpuBurstStrategy),
    extensions: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.extensions),
    host_applications: cdktf.listMapper(dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecHostApplicationsToTerraform, false)(struct!.hostApplications),
    resource_qos_strategy: dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyToTerraform(struct!.resourceQosStrategy),
    resource_used_threshold_with_be: dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceUsedThresholdWithBeToTerraform(struct!.resourceUsedThresholdWithBe),
    system_strategy: dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecSystemStrategyToTerraform(struct!.systemStrategy),
  }
}


export function dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu_burst_strategy: {
      value: dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecCpuBurstStrategyToHclTerraform(struct!.cpuBurstStrategy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecCpuBurstStrategy",
    },
    extensions: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.extensions),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    host_applications: {
      value: cdktf.listMapperHcl(dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecHostApplicationsToHclTerraform, false)(struct!.hostApplications),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecHostApplicationsList",
    },
    resource_qos_strategy: {
      value: dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyToHclTerraform(struct!.resourceQosStrategy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategy",
    },
    resource_used_threshold_with_be: {
      value: dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceUsedThresholdWithBeToHclTerraform(struct!.resourceUsedThresholdWithBe),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceUsedThresholdWithBe",
    },
    system_strategy: {
      value: dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecSystemStrategyToHclTerraform(struct!.systemStrategy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecSystemStrategy",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuBurstStrategy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuBurstStrategy = this._cpuBurstStrategy?.internalValue;
    }
    if (this._extensions !== undefined) {
      hasAnyValues = true;
      internalValueResult.extensions = this._extensions;
    }
    if (this._hostApplications?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostApplications = this._hostApplications?.internalValue;
    }
    if (this._resourceQosStrategy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceQosStrategy = this._resourceQosStrategy?.internalValue;
    }
    if (this._resourceUsedThresholdWithBe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceUsedThresholdWithBe = this._resourceUsedThresholdWithBe?.internalValue;
    }
    if (this._systemStrategy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemStrategy = this._systemStrategy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpuBurstStrategy.internalValue = undefined;
      this._extensions = undefined;
      this._hostApplications.internalValue = undefined;
      this._resourceQosStrategy.internalValue = undefined;
      this._resourceUsedThresholdWithBe.internalValue = undefined;
      this._systemStrategy.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cpuBurstStrategy.internalValue = value.cpuBurstStrategy;
      this._extensions = value.extensions;
      this._hostApplications.internalValue = value.hostApplications;
      this._resourceQosStrategy.internalValue = value.resourceQosStrategy;
      this._resourceUsedThresholdWithBe.internalValue = value.resourceUsedThresholdWithBe;
      this._systemStrategy.internalValue = value.systemStrategy;
    }
  }

  // cpu_burst_strategy - computed: false, optional: true, required: false
  private _cpuBurstStrategy = new DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecCpuBurstStrategyOutputReference(this, "cpu_burst_strategy");
  public get cpuBurstStrategy() {
    return this._cpuBurstStrategy;
  }
  public putCpuBurstStrategy(value: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecCpuBurstStrategy) {
    this._cpuBurstStrategy.internalValue = value;
  }
  public resetCpuBurstStrategy() {
    this._cpuBurstStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuBurstStrategyInput() {
    return this._cpuBurstStrategy.internalValue;
  }

  // extensions - computed: false, optional: true, required: false
  private _extensions?: { [key: string]: string }; 
  public get extensions() {
    return this.getStringMapAttribute('extensions');
  }
  public set extensions(value: { [key: string]: string }) {
    this._extensions = value;
  }
  public resetExtensions() {
    this._extensions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionsInput() {
    return this._extensions;
  }

  // host_applications - computed: false, optional: true, required: false
  private _hostApplications = new DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecHostApplicationsList(this, "host_applications", false);
  public get hostApplications() {
    return this._hostApplications;
  }
  public putHostApplications(value: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecHostApplications[] | cdktf.IResolvable) {
    this._hostApplications.internalValue = value;
  }
  public resetHostApplications() {
    this._hostApplications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostApplicationsInput() {
    return this._hostApplications.internalValue;
  }

  // resource_qos_strategy - computed: false, optional: true, required: false
  private _resourceQosStrategy = new DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategyOutputReference(this, "resource_qos_strategy");
  public get resourceQosStrategy() {
    return this._resourceQosStrategy;
  }
  public putResourceQosStrategy(value: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceQosStrategy) {
    this._resourceQosStrategy.internalValue = value;
  }
  public resetResourceQosStrategy() {
    this._resourceQosStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceQosStrategyInput() {
    return this._resourceQosStrategy.internalValue;
  }

  // resource_used_threshold_with_be - computed: false, optional: true, required: false
  private _resourceUsedThresholdWithBe = new DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceUsedThresholdWithBeOutputReference(this, "resource_used_threshold_with_be");
  public get resourceUsedThresholdWithBe() {
    return this._resourceUsedThresholdWithBe;
  }
  public putResourceUsedThresholdWithBe(value: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecResourceUsedThresholdWithBe) {
    this._resourceUsedThresholdWithBe.internalValue = value;
  }
  public resetResourceUsedThresholdWithBe() {
    this._resourceUsedThresholdWithBe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceUsedThresholdWithBeInput() {
    return this._resourceUsedThresholdWithBe.internalValue;
  }

  // system_strategy - computed: false, optional: true, required: false
  private _systemStrategy = new DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecSystemStrategyOutputReference(this, "system_strategy");
  public get systemStrategy() {
    return this._systemStrategy;
  }
  public putSystemStrategy(value: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecSystemStrategy) {
    this._systemStrategy.internalValue = value;
  }
  public resetSystemStrategy() {
    this._systemStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemStrategyInput() {
    return this._systemStrategy.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest k8s_slo_koordinator_sh_node_slo_v1alpha1_manifest}
*/
export class DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_slo_koordinator_sh_node_slo_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SSloKoordinatorShNodeSloV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_slo_koordinator_sh_node_slo_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_slo_v1alpha1_manifest k8s_slo_koordinator_sh_node_slo_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_slo_koordinator_sh_node_slo_v1alpha1_manifest',
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
  private _metadata = new DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpec) {
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
      metadata: dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSloKoordinatorShNodeSloV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
