// https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_emqx_io_rebalance_v1beta4_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SAppsEmqxIoRebalanceV1Beta4ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_emqx_io_rebalance_v1beta4_manifest#metadata DataK8SAppsEmqxIoRebalanceV1Beta4Manifest#metadata}
  */
  readonly metadata: DataK8SAppsEmqxIoRebalanceV1Beta4ManifestMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_emqx_io_rebalance_v1beta4_manifest#spec DataK8SAppsEmqxIoRebalanceV1Beta4Manifest#spec}
  */
  readonly spec?: DataK8SAppsEmqxIoRebalanceV1Beta4ManifestSpec;
}
export interface DataK8SAppsEmqxIoRebalanceV1Beta4ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_emqx_io_rebalance_v1beta4_manifest#annotations DataK8SAppsEmqxIoRebalanceV1Beta4Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_emqx_io_rebalance_v1beta4_manifest#labels DataK8SAppsEmqxIoRebalanceV1Beta4Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_emqx_io_rebalance_v1beta4_manifest#name DataK8SAppsEmqxIoRebalanceV1Beta4Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_emqx_io_rebalance_v1beta4_manifest#namespace DataK8SAppsEmqxIoRebalanceV1Beta4Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SAppsEmqxIoRebalanceV1Beta4ManifestMetadataToTerraform(struct?: DataK8SAppsEmqxIoRebalanceV1Beta4ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SAppsEmqxIoRebalanceV1Beta4ManifestMetadataToHclTerraform(struct?: DataK8SAppsEmqxIoRebalanceV1Beta4ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SAppsEmqxIoRebalanceV1Beta4ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsEmqxIoRebalanceV1Beta4ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsEmqxIoRebalanceV1Beta4ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppsEmqxIoRebalanceV1Beta4ManifestSpecRebalanceStrategy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_emqx_io_rebalance_v1beta4_manifest#abs_conn_threshold DataK8SAppsEmqxIoRebalanceV1Beta4Manifest#abs_conn_threshold}
  */
  readonly absConnThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_emqx_io_rebalance_v1beta4_manifest#abs_sess_threshold DataK8SAppsEmqxIoRebalanceV1Beta4Manifest#abs_sess_threshold}
  */
  readonly absSessThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_emqx_io_rebalance_v1beta4_manifest#conn_evict_rate DataK8SAppsEmqxIoRebalanceV1Beta4Manifest#conn_evict_rate}
  */
  readonly connEvictRate: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_emqx_io_rebalance_v1beta4_manifest#rel_conn_threshold DataK8SAppsEmqxIoRebalanceV1Beta4Manifest#rel_conn_threshold}
  */
  readonly relConnThreshold?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_emqx_io_rebalance_v1beta4_manifest#rel_sess_threshold DataK8SAppsEmqxIoRebalanceV1Beta4Manifest#rel_sess_threshold}
  */
  readonly relSessThreshold?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_emqx_io_rebalance_v1beta4_manifest#sess_evict_rate DataK8SAppsEmqxIoRebalanceV1Beta4Manifest#sess_evict_rate}
  */
  readonly sessEvictRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_emqx_io_rebalance_v1beta4_manifest#wait_health_check DataK8SAppsEmqxIoRebalanceV1Beta4Manifest#wait_health_check}
  */
  readonly waitHealthCheck?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_emqx_io_rebalance_v1beta4_manifest#wait_takeover DataK8SAppsEmqxIoRebalanceV1Beta4Manifest#wait_takeover}
  */
  readonly waitTakeover?: number;
}

export function dataK8SAppsEmqxIoRebalanceV1Beta4ManifestSpecRebalanceStrategyToTerraform(struct?: DataK8SAppsEmqxIoRebalanceV1Beta4ManifestSpecRebalanceStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    abs_conn_threshold: cdktf.numberToTerraform(struct!.absConnThreshold),
    abs_sess_threshold: cdktf.numberToTerraform(struct!.absSessThreshold),
    conn_evict_rate: cdktf.numberToTerraform(struct!.connEvictRate),
    rel_conn_threshold: cdktf.stringToTerraform(struct!.relConnThreshold),
    rel_sess_threshold: cdktf.stringToTerraform(struct!.relSessThreshold),
    sess_evict_rate: cdktf.numberToTerraform(struct!.sessEvictRate),
    wait_health_check: cdktf.numberToTerraform(struct!.waitHealthCheck),
    wait_takeover: cdktf.numberToTerraform(struct!.waitTakeover),
  }
}


export function dataK8SAppsEmqxIoRebalanceV1Beta4ManifestSpecRebalanceStrategyToHclTerraform(struct?: DataK8SAppsEmqxIoRebalanceV1Beta4ManifestSpecRebalanceStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    abs_conn_threshold: {
      value: cdktf.numberToHclTerraform(struct!.absConnThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    abs_sess_threshold: {
      value: cdktf.numberToHclTerraform(struct!.absSessThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_evict_rate: {
      value: cdktf.numberToHclTerraform(struct!.connEvictRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rel_conn_threshold: {
      value: cdktf.stringToHclTerraform(struct!.relConnThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rel_sess_threshold: {
      value: cdktf.stringToHclTerraform(struct!.relSessThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sess_evict_rate: {
      value: cdktf.numberToHclTerraform(struct!.sessEvictRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    wait_health_check: {
      value: cdktf.numberToHclTerraform(struct!.waitHealthCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    wait_takeover: {
      value: cdktf.numberToHclTerraform(struct!.waitTakeover),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsEmqxIoRebalanceV1Beta4ManifestSpecRebalanceStrategyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsEmqxIoRebalanceV1Beta4ManifestSpecRebalanceStrategy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._absConnThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.absConnThreshold = this._absConnThreshold;
    }
    if (this._absSessThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.absSessThreshold = this._absSessThreshold;
    }
    if (this._connEvictRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.connEvictRate = this._connEvictRate;
    }
    if (this._relConnThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.relConnThreshold = this._relConnThreshold;
    }
    if (this._relSessThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.relSessThreshold = this._relSessThreshold;
    }
    if (this._sessEvictRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessEvictRate = this._sessEvictRate;
    }
    if (this._waitHealthCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitHealthCheck = this._waitHealthCheck;
    }
    if (this._waitTakeover !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitTakeover = this._waitTakeover;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsEmqxIoRebalanceV1Beta4ManifestSpecRebalanceStrategy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._absConnThreshold = undefined;
      this._absSessThreshold = undefined;
      this._connEvictRate = undefined;
      this._relConnThreshold = undefined;
      this._relSessThreshold = undefined;
      this._sessEvictRate = undefined;
      this._waitHealthCheck = undefined;
      this._waitTakeover = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._absConnThreshold = value.absConnThreshold;
      this._absSessThreshold = value.absSessThreshold;
      this._connEvictRate = value.connEvictRate;
      this._relConnThreshold = value.relConnThreshold;
      this._relSessThreshold = value.relSessThreshold;
      this._sessEvictRate = value.sessEvictRate;
      this._waitHealthCheck = value.waitHealthCheck;
      this._waitTakeover = value.waitTakeover;
    }
  }

  // abs_conn_threshold - computed: false, optional: true, required: false
  private _absConnThreshold?: number; 
  public get absConnThreshold() {
    return this.getNumberAttribute('abs_conn_threshold');
  }
  public set absConnThreshold(value: number) {
    this._absConnThreshold = value;
  }
  public resetAbsConnThreshold() {
    this._absConnThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get absConnThresholdInput() {
    return this._absConnThreshold;
  }

  // abs_sess_threshold - computed: false, optional: true, required: false
  private _absSessThreshold?: number; 
  public get absSessThreshold() {
    return this.getNumberAttribute('abs_sess_threshold');
  }
  public set absSessThreshold(value: number) {
    this._absSessThreshold = value;
  }
  public resetAbsSessThreshold() {
    this._absSessThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get absSessThresholdInput() {
    return this._absSessThreshold;
  }

  // conn_evict_rate - computed: false, optional: false, required: true
  private _connEvictRate?: number; 
  public get connEvictRate() {
    return this.getNumberAttribute('conn_evict_rate');
  }
  public set connEvictRate(value: number) {
    this._connEvictRate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connEvictRateInput() {
    return this._connEvictRate;
  }

  // rel_conn_threshold - computed: false, optional: true, required: false
  private _relConnThreshold?: string; 
  public get relConnThreshold() {
    return this.getStringAttribute('rel_conn_threshold');
  }
  public set relConnThreshold(value: string) {
    this._relConnThreshold = value;
  }
  public resetRelConnThreshold() {
    this._relConnThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relConnThresholdInput() {
    return this._relConnThreshold;
  }

  // rel_sess_threshold - computed: false, optional: true, required: false
  private _relSessThreshold?: string; 
  public get relSessThreshold() {
    return this.getStringAttribute('rel_sess_threshold');
  }
  public set relSessThreshold(value: string) {
    this._relSessThreshold = value;
  }
  public resetRelSessThreshold() {
    this._relSessThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relSessThresholdInput() {
    return this._relSessThreshold;
  }

  // sess_evict_rate - computed: false, optional: true, required: false
  private _sessEvictRate?: number; 
  public get sessEvictRate() {
    return this.getNumberAttribute('sess_evict_rate');
  }
  public set sessEvictRate(value: number) {
    this._sessEvictRate = value;
  }
  public resetSessEvictRate() {
    this._sessEvictRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessEvictRateInput() {
    return this._sessEvictRate;
  }

  // wait_health_check - computed: false, optional: true, required: false
  private _waitHealthCheck?: number; 
  public get waitHealthCheck() {
    return this.getNumberAttribute('wait_health_check');
  }
  public set waitHealthCheck(value: number) {
    this._waitHealthCheck = value;
  }
  public resetWaitHealthCheck() {
    this._waitHealthCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitHealthCheckInput() {
    return this._waitHealthCheck;
  }

  // wait_takeover - computed: false, optional: true, required: false
  private _waitTakeover?: number; 
  public get waitTakeover() {
    return this.getNumberAttribute('wait_takeover');
  }
  public set waitTakeover(value: number) {
    this._waitTakeover = value;
  }
  public resetWaitTakeover() {
    this._waitTakeover = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitTakeoverInput() {
    return this._waitTakeover;
  }
}
export interface DataK8SAppsEmqxIoRebalanceV1Beta4ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_emqx_io_rebalance_v1beta4_manifest#instance_name DataK8SAppsEmqxIoRebalanceV1Beta4Manifest#instance_name}
  */
  readonly instanceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_emqx_io_rebalance_v1beta4_manifest#rebalance_strategy DataK8SAppsEmqxIoRebalanceV1Beta4Manifest#rebalance_strategy}
  */
  readonly rebalanceStrategy: DataK8SAppsEmqxIoRebalanceV1Beta4ManifestSpecRebalanceStrategy;
}

export function dataK8SAppsEmqxIoRebalanceV1Beta4ManifestSpecToTerraform(struct?: DataK8SAppsEmqxIoRebalanceV1Beta4ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_name: cdktf.stringToTerraform(struct!.instanceName),
    rebalance_strategy: dataK8SAppsEmqxIoRebalanceV1Beta4ManifestSpecRebalanceStrategyToTerraform(struct!.rebalanceStrategy),
  }
}


export function dataK8SAppsEmqxIoRebalanceV1Beta4ManifestSpecToHclTerraform(struct?: DataK8SAppsEmqxIoRebalanceV1Beta4ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_name: {
      value: cdktf.stringToHclTerraform(struct!.instanceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rebalance_strategy: {
      value: dataK8SAppsEmqxIoRebalanceV1Beta4ManifestSpecRebalanceStrategyToHclTerraform(struct!.rebalanceStrategy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoRebalanceV1Beta4ManifestSpecRebalanceStrategy",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsEmqxIoRebalanceV1Beta4ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsEmqxIoRebalanceV1Beta4ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceName = this._instanceName;
    }
    if (this._rebalanceStrategy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rebalanceStrategy = this._rebalanceStrategy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsEmqxIoRebalanceV1Beta4ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceName = undefined;
      this._rebalanceStrategy.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceName = value.instanceName;
      this._rebalanceStrategy.internalValue = value.rebalanceStrategy;
    }
  }

  // instance_name - computed: false, optional: false, required: true
  private _instanceName?: string; 
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameInput() {
    return this._instanceName;
  }

  // rebalance_strategy - computed: false, optional: false, required: true
  private _rebalanceStrategy = new DataK8SAppsEmqxIoRebalanceV1Beta4ManifestSpecRebalanceStrategyOutputReference(this, "rebalance_strategy");
  public get rebalanceStrategy() {
    return this._rebalanceStrategy;
  }
  public putRebalanceStrategy(value: DataK8SAppsEmqxIoRebalanceV1Beta4ManifestSpecRebalanceStrategy) {
    this._rebalanceStrategy.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rebalanceStrategyInput() {
    return this._rebalanceStrategy.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_emqx_io_rebalance_v1beta4_manifest k8s_apps_emqx_io_rebalance_v1beta4_manifest}
*/
export class DataK8SAppsEmqxIoRebalanceV1Beta4Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_apps_emqx_io_rebalance_v1beta4_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SAppsEmqxIoRebalanceV1Beta4Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SAppsEmqxIoRebalanceV1Beta4Manifest to import
  * @param importFromId The id of the existing DataK8SAppsEmqxIoRebalanceV1Beta4Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_emqx_io_rebalance_v1beta4_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SAppsEmqxIoRebalanceV1Beta4Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_apps_emqx_io_rebalance_v1beta4_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_emqx_io_rebalance_v1beta4_manifest k8s_apps_emqx_io_rebalance_v1beta4_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SAppsEmqxIoRebalanceV1Beta4ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SAppsEmqxIoRebalanceV1Beta4ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_apps_emqx_io_rebalance_v1beta4_manifest',
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
  private _metadata = new DataK8SAppsEmqxIoRebalanceV1Beta4ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SAppsEmqxIoRebalanceV1Beta4ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SAppsEmqxIoRebalanceV1Beta4ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SAppsEmqxIoRebalanceV1Beta4ManifestSpec) {
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
      metadata: dataK8SAppsEmqxIoRebalanceV1Beta4ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SAppsEmqxIoRebalanceV1Beta4ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SAppsEmqxIoRebalanceV1Beta4ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAppsEmqxIoRebalanceV1Beta4ManifestMetadata",
      },
      spec: {
        value: dataK8SAppsEmqxIoRebalanceV1Beta4ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAppsEmqxIoRebalanceV1Beta4ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
